"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[8057],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>u});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=n.createContext({}),p=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=p(e.components);return n.createElement(c.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(t),u=l,d=m["".concat(c,".").concat(u)]||m[u]||k[u]||r;return t?n.createElement(d,i(i({ref:a},s),{},{components:t})):n.createElement(d,i({ref:a},s))}));function u(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7366:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=t(7462),l=(t(7294),t(3905));const r={id:"core_src.IScenario",title:"Interface: IScenario",sidebar_label:"IScenario",custom_edit_url:null},i=void 0,o={unversionedId:"api/interfaces/core_src.IScenario",id:"api/interfaces/core_src.IScenario",title:"Interface: IScenario",description:"Test scenario specifies how you want a E2E test to interact with a web browser.",source:"@site/docs/api/interfaces/core_src.IScenario.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core_src.IScenario",permalink:"/memlab/docs/api/interfaces/core_src.IScenario",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"core_src.IScenario",title:"Interface: IScenario",sidebar_label:"IScenario",custom_edit_url:null},sidebar:"sidebar",previous:{title:"ILeakFilter",permalink:"/memlab/docs/api/interfaces/core_src.ILeakFilter"}},c={},p=[{value:"Properties",id:"properties",level:2},{value:'<a id="action" name="action"></a> <code>Optional</code> <strong>action</strong>: <code>InteractionsCallback</code>',id:"-optional-action-interactionscallback",level:3},{value:'<a id="back" name="back"></a> <code>Optional</code> <strong>back</strong>: <code>InteractionsCallback</code>',id:"-optional-back-interactionscallback",level:3},{value:'<a id="beforeleakfilter" name="beforeleakfilter"></a> <code>Optional</code> <strong>beforeLeakFilter</strong>: <code>InitLeakFilterCallback</code>',id:"-optional-beforeleakfilter-initleakfiltercallback",level:3},{value:'<a id="ispageloaded" name="ispageloaded"></a> <code>Optional</code> <strong>isPageLoaded</strong>: <code>CheckPageLoadCallback</code>',id:"-optional-ispageloaded-checkpageloadcallback",level:3},{value:'<a id="leakfilter" name="leakfilter"></a> <code>Optional</code> <strong>leakFilter</strong>: <code>LeakFilterCallback</code>',id:"-optional-leakfilter-leakfiltercallback",level:3},{value:'<a id="setup" name="setup"></a> <code>Optional</code> <strong>setup</strong>: <code>InteractionsCallback</code>',id:"-optional-setup-interactionscallback",level:3},{value:"Methods",id:"methods",level:2},{value:'<a id="cookies"></a><code>Optional</code> <strong>cookies</strong>()',id:"optional-cookies",level:3},{value:'<a id="repeat"></a><code>Optional</code> <strong>repeat</strong>()',id:"optional-repeat",level:3},{value:'<a id="url"></a><strong>url</strong>()',id:"url",level:3}],s={toc:p};function k(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Test scenario specifies how you want a E2E test to interact with a web browser.\nThe test scenario can be saved as a ",(0,l.kt)("inlineCode",{parentName:"p"},".js")," file and passed to the ",(0,l.kt)("inlineCode",{parentName:"p"},"memlab\nrun --scenario")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// save as test.js and use in terminal:\n// $ memlab run --scenario test.js\n\nmodule.exports = {\n  url: () => 'https://www.npmjs.com/',\n  action: async () => ... ,\n  back: async () => ... ,\n  cookies: () => ... , // optional\n  repeat: () => ... , // optional\n  ...\n};\n")),(0,l.kt)("p",null,"The test scenario instance can also be passed to the\n",(0,l.kt)("a",{parentName:"p",href:"../modules/api_src#run"},(0,l.kt)("inlineCode",{parentName:"a"},"run")," API")," exported by ",(0,l.kt)("inlineCode",{parentName:"p"},"@memlab/api"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const {run} = require('@memlab/api');\n\n(async function () {\n  const scenario = {\n    url: () => 'https://www.facebook.com',\n    action: async () => ... ,\n    back: async () => ... ,\n    cookies: () => ... , // optional\n    repeat: () => ... , // optional\n    ...\n  };\n  const leaks = await run({scenario});\n})();\n")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"-optional-action-interactionscallback"},(0,l.kt)("a",{id:"action",name:"action"})," ",(0,l.kt)("inlineCode",{parentName:"h3"},"Optional")," ",(0,l.kt)("strong",{parentName:"h3"},"action"),": ",(0,l.kt)("a",{parentName:"h3",href:"/memlab/docs/api/modules/core_src#interactionscallback"},(0,l.kt)("inlineCode",{parentName:"a"},"InteractionsCallback"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"action")," is the callback function that defines the interaction\nwhere you want to trigger memory leaks after the initial page load.\nAll JS objects in browser allocated by the browser interactions triggered\nfrom the ",(0,l.kt)("inlineCode",{parentName:"p"},"action")," callback will be candidates for memory leak filtering."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"page: ",(0,l.kt)("inlineCode",{parentName:"li"},"Page")," | the puppeteer ",(0,l.kt)("a",{parentName:"li",href:"https://pptr.dev/api/puppeteer.page"},(0,l.kt)("inlineCode",{parentName:"a"},"Page")),"\nobject, which provides APIs to interact with the web browser"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Examples"),":"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const scenario = {\n  url: () => 'https://www.npmjs.com/',\n  action: async (page) => {\n    await page.click('a[href=\"/link\"]');\n  },\n  back: async (page) => {\n    await page.click('a[href=\"/back\"]');\n  },\n}\n\nmodule.exports = scenario;\n")),(0,l.kt)("p",null,"Note: always clean up external puppeteer references to JS objects\nin the browser context."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const scenario = {\n  url: () => 'https://www.npmjs.com/',\n  action: async (page) => {\n    const elements = await page.$x(\"//button[contains(., 'Text in Button')]\");\n    const [button] = elements;\n    if (button) {\n      await button.click();\n    }\n    // dispose external references to JS objects in browser context\n    await promise.all(elements.map(e => e.dispose()));\n  },\n  back: async (page) => ... ,\n}\n\nmodule.exports = scenario;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Source"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/323433c/packages/core/src/lib/Types.ts#L553"},"core/src/lib/Types.ts:553"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-optional-back-interactionscallback"},(0,l.kt)("a",{id:"back",name:"back"})," ",(0,l.kt)("inlineCode",{parentName:"h3"},"Optional")," ",(0,l.kt)("strong",{parentName:"h3"},"back"),": ",(0,l.kt)("a",{parentName:"h3",href:"/memlab/docs/api/modules/core_src#interactionscallback"},(0,l.kt)("inlineCode",{parentName:"a"},"InteractionsCallback"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"back")," is the callback function that specifies how memlab should\nback/revert the ",(0,l.kt)("inlineCode",{parentName:"p"},"action")," callback. Think of it as an undo action."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"page: ",(0,l.kt)("inlineCode",{parentName:"li"},"Page")," | the puppeteer ",(0,l.kt)("a",{parentName:"li",href:"https://pptr.dev/api/puppeteer.page"},(0,l.kt)("inlineCode",{parentName:"a"},"Page")),"\nobject, which provides APIs to interact with the web browser"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Examples"),":"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const scenario = {\n  url: () => 'https://www.npmjs.com/',\n  action: async (page) => {\n    await page.click('a[href=\"/link\"]');\n  },\n  back: async (page) => {\n    await page.click('a[href=\"/back\"]');\n  },\n}\n")),(0,l.kt)("p",null,"Check out ",(0,l.kt)("a",{parentName:"p",href:"/docs/how-memlab-works"},"this page")," on why\nmemlab needs to undo/revert the ",(0,l.kt)("inlineCode",{parentName:"p"},"action")," callback."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Source"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/323433c/packages/core/src/lib/Types.ts#L577"},"core/src/lib/Types.ts:577"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-optional-beforeleakfilter-initleakfiltercallback"},(0,l.kt)("a",{id:"beforeleakfilter",name:"beforeleakfilter"})," ",(0,l.kt)("inlineCode",{parentName:"h3"},"Optional")," ",(0,l.kt)("strong",{parentName:"h3"},"beforeLeakFilter"),": ",(0,l.kt)("a",{parentName:"h3",href:"/memlab/docs/api/modules/core_src#initleakfiltercallback"},(0,l.kt)("inlineCode",{parentName:"a"},"InitLeakFilterCallback"))),(0,l.kt)("p",null,"Lifecycle function callback that is invoked initially once before\nthe subsequent ",(0,l.kt)("inlineCode",{parentName:"p"},"leakFilter")," function calls. This callback could\nbe used to initialize some data stores or to any one-off\npreprocessings."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"snapshot: ",(0,l.kt)("inlineCode",{parentName:"li"},"IHeapSnapshot")," | the final heap snapshot taken after\nall browser interactions are done.\nCheck out ",(0,l.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},"IHeapSnapshot")," for more APIs that queries the heap snapshot."),(0,l.kt)("li",{parentName:"ul"},"leakedNodeIds: ",(0,l.kt)("inlineCode",{parentName:"li"},"Set<number>")," | the set of ids of all JS heap objects\nallocated by the ",(0,l.kt)("inlineCode",{parentName:"li"},"action")," call but not released after the ",(0,l.kt)("inlineCode",{parentName:"li"},"back")," call\nin browser."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Examples"),":"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"module.exports = {\n  url: () => ... ,\n  action: async (page) => ... ,\n  back: async (page) => ... ,\n  beforeLeakFilter: (snapshot, leakedNodeIds) {\n    // initialize some data stores\n  },\n};\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Source"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/323433c/packages/core/src/lib/Types.ts#L654"},"core/src/lib/Types.ts:654"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-optional-ispageloaded-checkpageloadcallback"},(0,l.kt)("a",{id:"ispageloaded",name:"ispageloaded"})," ",(0,l.kt)("inlineCode",{parentName:"h3"},"Optional")," ",(0,l.kt)("strong",{parentName:"h3"},"isPageLoaded"),": ",(0,l.kt)("a",{parentName:"h3",href:"/memlab/docs/api/modules/core_src#checkpageloadcallback"},(0,l.kt)("inlineCode",{parentName:"a"},"CheckPageLoadCallback"))),(0,l.kt)("p",null,"Optional callback function that checks if the web page is loaded\nfor the initial page load and subsequent browser interactions."),(0,l.kt)("p",null,"If this callback is not provided, memlab by default\nconsiders a navigation to be finished when there are no network\nconnections for at least 500ms."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"page: ",(0,l.kt)("inlineCode",{parentName:"li"},"Page")," | the puppeteer ",(0,l.kt)("a",{parentName:"li",href:"https://pptr.dev/api/puppeteer.page"},(0,l.kt)("inlineCode",{parentName:"a"},"Page")),"\nobject, which provides APIs to interact with the web browser"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns"),": a boolean value, if it returns ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", memlab will consider\nthe navigation completes, if it returns ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),", memlab will keep calling\nthis callback until it returns ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),". This is an async callback, you can\nalso ",(0,l.kt)("inlineCode",{parentName:"li"},"await")," and returns ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," until some async logic is resolved."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"module.exports = {\n  url: () => ... ,\n  action: async (page) => ... ,\n  back: async (page) => ... ,\n  isPageLoaded: async (page) => {\n    await page.waitForNavigation({\n      // consider navigation to be finished when there are\n      // no more than 2 network connections for at least 500 ms.\n      waitUntil: 'networkidle2',\n      // Maximum navigation time in milliseconds\n      timeout: 5000,\n    });\n    return true;\n  },\n};\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Source"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/323433c/packages/core/src/lib/Types.ts#L627"},"core/src/lib/Types.ts:627"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-optional-leakfilter-leakfiltercallback"},(0,l.kt)("a",{id:"leakfilter",name:"leakfilter"})," ",(0,l.kt)("inlineCode",{parentName:"h3"},"Optional")," ",(0,l.kt)("strong",{parentName:"h3"},"leakFilter"),": ",(0,l.kt)("a",{parentName:"h3",href:"/memlab/docs/api/modules/core_src#leakfiltercallback"},(0,l.kt)("inlineCode",{parentName:"a"},"LeakFilterCallback"))),(0,l.kt)("p",null,"This callback defines how you want to filter out the\nleaked objects. The callback is called for every node (JS heap\nobject in browser) allocated by the ",(0,l.kt)("inlineCode",{parentName:"p"},"action")," callback, but not\nreleased after the ",(0,l.kt)("inlineCode",{parentName:"p"},"back")," callback. Those objects could be caches\nthat are retained in memory on purpose, or they are memory leaks."),(0,l.kt)("p",null,"This optional callback allows you to define your own algorithm\nto cherry pick memory leaks for specific JS program under test."),(0,l.kt)("p",null,"If this optional callback is not defined, memlab will use its\nbuilt-in leak filter, which considers detached DOM elements\nand unmounted Fiber nodes (detached from React Fiber tree) as\nmemory leaks."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"node: ",(0,l.kt)("inlineCode",{parentName:"li"},"IHeapNode")," | one of the heap object allocated but not released."),(0,l.kt)("li",{parentName:"ul"},"snapshot: ",(0,l.kt)("inlineCode",{parentName:"li"},"IHeapSnapshot")," | the final heap snapshot taken after\nall browser interactions are done.\nCheck out ",(0,l.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},"IHeapSnapshot")," for more APIs that queries the heap snapshot."),(0,l.kt)("li",{parentName:"ul"},"leakedNodeIds: ",(0,l.kt)("inlineCode",{parentName:"li"},"Set<number>")," | the set of ids of all JS heap objects\nallocated by the ",(0,l.kt)("inlineCode",{parentName:"li"},"action")," call but not released after the ",(0,l.kt)("inlineCode",{parentName:"li"},"back")," call\nin browser."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns"),": the boolean value indicating whether the given node in\nthe snapshot should be considered as leaked.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Examples"),":"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"module.exports = {\n  url: () => ... ,\n  action: async (page) => ... ,\n  back: async (page) => ... ,\n  leakFilter(node, snapshot, leakedNodeIds) {\n    // any unreleased node (JS heap object) with 1MB+\n    // retained size is considered a memory leak\n    return node.retainedSize > 1000000;\n  },\n};\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Source"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/323433c/packages/core/src/lib/Types.ts#L696"},"core/src/lib/Types.ts:696"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-optional-setup-interactionscallback"},(0,l.kt)("a",{id:"setup",name:"setup"})," ",(0,l.kt)("inlineCode",{parentName:"h3"},"Optional")," ",(0,l.kt)("strong",{parentName:"h3"},"setup"),": ",(0,l.kt)("a",{parentName:"h3",href:"/memlab/docs/api/modules/core_src#interactionscallback"},(0,l.kt)("inlineCode",{parentName:"a"},"InteractionsCallback"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"setup")," is the callback function that will be called only once\nafter the initial page load. This callback can be used to log in\nif you have to (we recommend using ",(0,l.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IScenario#cookies"},"cookies"),")\nor to prepare data before the ",(0,l.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IScenario#action"},"action")," call."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"page: ",(0,l.kt)("inlineCode",{parentName:"li"},"Page")," | the puppeteer ",(0,l.kt)("a",{parentName:"li",href:"https://pptr.dev/api/puppeteer.page"},(0,l.kt)("inlineCode",{parentName:"a"},"Page")),"\nobject, which provides APIs to interact with the web browser"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Examples"),":"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const scenario = {\n  url: () => 'https://www.npmjs.com/',\n  setup: async (page) => {\n    // log in or prepare data for the interaction\n  },\n  action: async (page) => {\n    await page.click('a[href=\"/link\"]');\n  },\n  back: async (page) => {\n    await page.click('a[href=\"/back\"]');\n  },\n}\n\nmodule.exports = scenario;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Source"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/323433c/packages/core/src/lib/Types.ts#L508"},"core/src/lib/Types.ts:508"))))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"optional-cookies"},(0,l.kt)("a",{id:"cookies"}),(0,l.kt)("inlineCode",{parentName:"h3"},"Optional")," ",(0,l.kt)("strong",{parentName:"h3"},"cookies"),"()"),(0,l.kt)("p",null,"If the page you are running memlab against requires authentication or\nspecific cookie(s) to be set, you can pass them as\na list of ",(0,l.kt)("inlineCode",{parentName:"p"},"<name, value, domain>")," tuples."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": please make sure that you provide the correct ",(0,l.kt)("inlineCode",{parentName:"p"},"domain")," field for\nthe cookies tuples. If no ",(0,l.kt)("inlineCode",{parentName:"p"},"domain")," field is specified, memlab will try\nto fill in a domain based on the ",(0,l.kt)("inlineCode",{parentName:"p"},"url")," callback.\nFor example, when the ",(0,l.kt)("inlineCode",{parentName:"p"},"domain")," field is absent,\nmemlab will auto fill in ",(0,l.kt)("inlineCode",{parentName:"p"},".facebook.com")," as domain base\non the initial page load's url: ",(0,l.kt)("inlineCode",{parentName:"p"},"https://www.facebook.com/"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns"),": ",(0,l.kt)("a",{parentName:"li",href:"/memlab/docs/api/modules/core_src#cookies"},(0,l.kt)("inlineCode",{parentName:"a"},"Cookies"))," | cookie list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const scenario = {\n  url: () => 'https://www.facebook.com/',\n  cookies: () => [\n    {name:'cm_j', value: 'none', domain: '.facebook.com'},\n    {name:'datr', value: 'yJvIY...', domain: '.facebook.com'},\n    {name:'c_user', value: '8917...', domain: '.facebook.com'},\n    {name:'xs', value: '95:9WQ...', domain: '.facebook.com'},\n    // ...\n  ],\n};\n\nmodule.exports = scenario;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Source"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/323433c/packages/core/src/lib/Types.ts#L461"},"core/src/lib/Types.ts:461"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"optional-repeat"},(0,l.kt)("a",{id:"repeat"}),(0,l.kt)("inlineCode",{parentName:"h3"},"Optional")," ",(0,l.kt)("strong",{parentName:"h3"},"repeat"),"()"),(0,l.kt)("p",null,"Specifies how many ",(0,l.kt)("strong",{parentName:"p"},"extra")," ",(0,l.kt)("inlineCode",{parentName:"p"},"action")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"back")," actions performed by memlab."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"module.exports = {\n  url: () => ... ,\n  action: async (page) => ... ,\n  back: async (page) => ... ,\n  // browser interaction: two additional [ action -> back ]\n  // init-load -> action -> back -> action -> back -> action -> back\n  repeat: () => 2,\n};\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Source"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/323433c/packages/core/src/lib/Types.ts#L592"},"core/src/lib/Types.ts:592"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"url"},(0,l.kt)("a",{id:"url"}),(0,l.kt)("strong",{parentName:"h3"},"url"),"()"),(0,l.kt)("p",null,"String value of the initial url of the page."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," | the string value of the initial url"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const scenario = {\n  url: () => 'https://www.npmjs.com/',\n};\n\nmodule.exports = scenario;\n")),(0,l.kt)("p",null,"If a test scenario only specifies the ",(0,l.kt)("inlineCode",{parentName:"p"},"url")," callback (without the ",(0,l.kt)("inlineCode",{parentName:"p"},"action"),"\ncallback), memlab will try to detect memory leaks from the initial page\nload. All objects allocated by the initial page load will be candidates\nfor memory leak filtering."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Source"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/323433c/packages/core/src/lib/Types.ts#L479"},"core/src/lib/Types.ts:479"))))))}k.isMDXComponent=!0}}]);