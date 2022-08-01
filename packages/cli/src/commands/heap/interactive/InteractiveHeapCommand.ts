/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+ws_labs
 * @format
 */

import {CLIOptions, ErrorHandling, Optional} from '@memlab/core';

import chalk from 'chalk';
import readline from 'readline';
import fs from 'fs-extra';
import minimist from 'minimist';
import BaseCommand, {CommandCategory} from '../../../BaseCommand';
import {BaseOption, utils, info, config} from '@memlab/core';
import SnapshotFileOption from '../../../options/heap/SnapshotFileOption';
import JSEngineOption from '../../../options/heap/JSEngineOption';
import {fileManager} from '@memlab/core';
import {heapConfig, loadHeapSnapshot} from '@memlab/heap-analysis';
import {CommandDispatcher} from '../../../Dispatcher';
import InteractiveCommandLoader from './InteractiveCommandLoader';

export default class InteractiveHeapCommand extends BaseCommand {
  getCommandName(): string {
    return 'heap';
  }

  getDescription(): string {
    return 'interactive command to explore a single heap snapshot';
  }

  getCategory(): CommandCategory {
    return CommandCategory.COMMON;
  }

  getExamples(): string[] {
    return ['--snapshot <HEAP_SNAPSHOT_FILE>'];
  }

  getOptions(): BaseOption[] {
    return [new SnapshotFileOption(), new JSEngineOption()];
  }

  private printPromptInfo(): void {
    info.topLevel(
      `Heap Snapshot Loaded: ${chalk.grey(heapConfig.currentHeapFile)}`,
    );
  }

  private startInteractiveCLI() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'memlab > ',
    });

    // the interactive cli only supports a subset of memlab commands
    const dispatcher = new CommandDispatcher({
      commandLoader: new InteractiveCommandLoader(),
    });
    // do not halt execution when running the interactive command
    config.errorHandling = ErrorHandling.Throw;

    // start the interactive prompt
    this.printPromptInfo();
    rl.prompt();
    // start interpreting interactive commands
    rl.on('line', async line => {
      try {
        // "memlab <command>" -> "<command>"
        const command = line.trim().startsWith('memlab ')
          ? line.substring('memlab '.length)
          : line;
        const args = command.match(/("[^"]+")|('[^']+')|(\S+)/g) as string[];
        const parsedArgs = minimist(args);
        await dispatcher.dispatch(parsedArgs);
      } catch (ex) {
        const error = utils.getError(ex);
        info.topLevel(error.message);
      }
      info.topLevel('');
      this.printPromptInfo();
      rl.prompt();
    });
  }

  async run(options: CLIOptions): Promise<void> {
    const workDir = options.configFromOptions?.workDir as Optional<string>;
    const reportOutDir = fileManager.getReportOutDir({workDir});
    fs.emptyDirSync(reportOutDir);

    // load single heap snapshot
    heapConfig.isCliInteractiveMode = true;
    await loadHeapSnapshot({args: options.cliArgs});

    this.startInteractiveCLI();
  }
}