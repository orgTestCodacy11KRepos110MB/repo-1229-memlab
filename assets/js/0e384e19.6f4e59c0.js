"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[9671],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(a),d=r,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2981:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},i="Why memlab",l={unversionedId:"intro",id:"intro",title:"Why memlab",description:"One of the challenges with building a single-page application (SPA) like",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/memlab/docs/intro",draft:!1,editUrl:"https://github.com/facebook/memlab/blob/main/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",next:{title:"Installation",permalink:"/memlab/docs/installation"}},s={},m=[{value:"Features",id:"features",level:2}],p={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"why-memlab"},"Why memlab"),(0,r.kt)("p",null,"One of the challenges with building a single-page application (SPA) like\nFacebook.com is to test and check for memory leaks at scale.\nManually triggering, finding, and analyzing memory leaks is tedious\nand inefficient, especially considering the number of changes that go live\ncontinuously. We built memlab to automate and ease the process in\n",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/guides/integration-and-file-structure"},"continuous tests"),"."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"Memlab is a memory testing framework for JavaScript. It supports\ndefining a ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IScenario"},"test scenario"),"\n(using ",(0,r.kt)("a",{parentName:"p",href:"https://pptr.dev/api/puppeteer.page#methods"},"Puppeteer API"),")\nthat teaches Memlab how to interact with your Single-page Application (SPA),\nMemlab can handle the rest for memory leak checking automatically:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Interact with browser and take JavaScript heap snapshots"),(0,r.kt)("li",{parentName:"ul"},"Analyze heap snapshots and filter out memory leaks"),(0,r.kt)("li",{parentName:"ul"},"Aggregate and group similar memory leaks"),(0,r.kt)("li",{parentName:"ul"},"Generate retainer traces for memory debugging")),(0,r.kt)("p",null,"For more details on how memlab finds memory leaks, please check out\n",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/how-memlab-works"},"this link"),"."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Other features provided by memlab:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Object-oriented heap traversing API")," - Supports ",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.ILeakFilter"},"self-defined memory leak\ndetector")," and programmatically\nanalyzing JS heap snapshots taken from\nChromium-based browsers, Node.js, Electron.js, and Hermes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Memory CLI toolbox")," - Built-in ",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/cli/CLI-commands#memlab-analyze"},"CLI toolbox"),"\nand ",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/classes/heap_analysis_src.BaseAnalysis"},"APIs")," for finding memory\noptimization opportunities (not necessarily memory leaks)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Memory assertions in Node.js")," - Enables unit test or running node.js\nprogram to take a heap snapshot of its own state, do self memory checking,\nand write memory assertions\n(",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot#hasobjectwithclassnameclassname"},"doc"),")")),(0,r.kt)("p",null,"Trying out memlab:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/installation"},"Install the npm package")," and read the\n",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/getting-started"},"Getting Started")," section"),(0,r.kt)("li",{parentName:"ul"},"Use the node.js ",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/"},"APIs"))),(0,r.kt)("p",null,"Read this ",(0,r.kt)("a",{parentName:"p",href:"https://engineering.fb.com/2022/09/12/open-source/memlab/"},"engineering blog post"),"\non how MemLab is used at Meta."))}c.isMDXComponent=!0}}]);