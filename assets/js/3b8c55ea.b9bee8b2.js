"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[3217],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,b=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return t?a.createElement(b,o(o({ref:n},c),{},{components:t})):a.createElement(b,o({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},103:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={},o="Installation",s={unversionedId:"installation",id:"installation",title:"Installation",description:"Prequisites",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/memlab/docs/installation",draft:!1,editUrl:"https://github.com/facebookincubator/memlab/blob/main/website/docs/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Why memlab",permalink:"/memlab/docs/intro"},next:{title:"Getting Started",permalink:"/memlab/docs/getting-started"}},l={},p=[{value:"Prequisites",id:"prequisites",level:2},{value:"Commands",id:"commands",level:2}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g memlab\n")),(0,r.kt)("h2",{id:"prequisites"},"Prequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," version 16 or above"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/"},"Npm"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To build from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/memlab"},"Git respository")," on Windows,\nplease use Git Bash."))),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("p",null,"To check if the installation complete, run ",(0,r.kt)("inlineCode",{parentName:"p"},"memlab help")," in your console,\nyou should see helper text as follows (view the documentation\nfor each command ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/cli/CLI-commands"},"here"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ memlab help\n\n  memlab: memory leak detector for front-end JS\n\n  COMMON COMMANDS\n\n    memlab run --scenario <TEST_SCENARIO_FILE>\n    Find memory leaks in web apps\n    Options: --work-dir --headful --full --skip-screenshot --skip-gc\n             --skip-scroll --skip-extra-ops --local-puppeteer\n             --scenario --device --disable-xvfb --leak-filter\n             --trace-object-size-above\n             --ignore-leak-cluster-size-below --trace-all-objects\n             --save-trace-as-unclassified-cluster --ml-clustering\n             --ml-linkage-max-dist --ml-clustering-max-df\n\n    memlab list\n    List all test scenarios\n\n    memlab trace --node-id=<HEAP_OBJECT_ID>\n    Report retainer trace of a specific node, use with --nodeId\n    Options: --snapshot --snapshot-dir --engine --node-id\n\n    memlab find-leaks\n    Find memory leaks in heap snapshots\n    Options: --baseline --target --final --snapshot-dir --engine\n             --leak-filter --trace-object-size-above\n             --ignore-leak-cluster-size-below --trace-all-objects\n             --save-trace-as-unclassified-cluster --ml-clustering\n             --ml-linkage-max-dist --ml-clustering-max-df --work-dir\n\n    memlab analyze <PLUGIN_NAME> [PLUGIN_OPTIONS]\n    Run heap analysis plugins\n    Options: --work-dir\n\n    memlab help <COMMAND> [SUB-COMMANDS]\n    List all MemLab CLI commands or print helper text for a specific command\n\n    memlab heap --snapshot <HEAP_SNAPSHOT_FILE>\n    Interactive command to explore a single heap snapshot\n    Options: --snapshot --engine\n\n\n  MISC COMMANDS\n\n    memlab version\n    Show the versions of all memlab packages installed\n\n    memlab reset\n    Reset and initialize all directories\n    Options: --work-dir\n\n    memlab measure --scenario <TEST_SCENARIO_FILE>\n    Run test scenario in measure mode\n    Options: --headful --run-num --app --interaction --full\n             --skip-snapshot --skip-screenshot --skip-gc --skip-scroll\n             --skip-extra-ops --run-mode --local-puppeteer --scenario\n             --device --disable-xvfb --work-dir\n\n    memlab warmup --scenario <TEST_SCENARIO_FILE>\n    Warm up the target app\n    Options: --headful --app --interaction --run-mode\n             --local-puppeteer --scenario --device --disable-xvfb\n             --skip-warmup --work-dir\n\n    memlab get-default-work-dir\n    Query the default working directory\n\n    memlab snapshot --scenario <TEST_SCENARIO_FILE>\n    Interact with web app and take heap snapshots\n    Options: --headful --app --interaction --full --skip-snapshot\n             --skip-screenshot --skip-gc --skip-scroll\n             --skip-extra-ops --run-mode --local-puppeteer --scenario\n             --device --disable-xvfb --work-dir\n\n    memlab warmup-and-snapshot\n    Warm up server and take heap snapshots\n    Options: --work-dir --headful --app --interaction --run-mode\n             --local-puppeteer --scenario --device --disable-xvfb\n             --skip-warmup --full --skip-snapshot --skip-screenshot\n             --skip-gc --skip-scroll --skip-extra-ops\n")))}m.isMDXComponent=!0}}]);