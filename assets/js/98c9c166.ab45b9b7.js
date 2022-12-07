"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[2843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={id:"core_src.IHeapEdge",title:"Interface: IHeapEdge",sidebar_label:"IHeapEdge",custom_edit_url:null},i=void 0,l={unversionedId:"api/interfaces/core_src.IHeapEdge",id:"api/interfaces/core_src.IHeapEdge",title:"Interface: IHeapEdge",description:"An IHeapEdge instance represents a JS reference in a heap snapshot.",source:"@site/docs/api/interfaces/core_src.IHeapEdge.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core_src.IHeapEdge",permalink:"/memlab/docs/api/interfaces/core_src.IHeapEdge",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"core_src.IHeapEdge",title:"Interface: IHeapEdge",sidebar_label:"IHeapEdge",custom_edit_url:null},sidebar:"sidebar",previous:{title:"IBrowserInfo",permalink:"/memlab/docs/api/interfaces/core_src.IBrowserInfo"},next:{title:"IHeapEdges",permalink:"/memlab/docs/api/interfaces/core_src.IHeapEdges"}},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:'<a id="edgeindex" name="edgeindex"></a> <strong>edgeIndex</strong>: <code>number</code>',id:"-edgeindex-number",level:3},{value:'<a id="fromnode" name="fromnode"></a> <strong>fromNode</strong>: <code>IHeapNode</code>',id:"-fromnode-iheapnode",level:3},{value:'<a id="is_index" name="is_index"></a> <strong>is_index</strong>: <code>boolean</code>',id:"-is_index-boolean",level:3},{value:'<a id="name_or_index" name="name_or_index"></a> <strong>name_or_index</strong>: <code>string</code> | <code>number</code>',id:"-name_or_index-string--number",level:3},{value:'<a id="snapshot" name="snapshot"></a> <strong>snapshot</strong>: <code>IHeapSnapshot</code>',id:"-snapshot-iheapsnapshot",level:3},{value:'<a id="tonode" name="tonode"></a> <strong>toNode</strong>: <code>IHeapNode</code>',id:"-tonode-iheapnode",level:3},{value:'<a id="to_node" name="to_node"></a> <strong>to_node</strong>: <code>number</code>',id:"-to_node-number",level:3},{value:'<a id="type" name="type"></a> <strong>type</strong>: <code>string</code>',id:"-type-string",level:3}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"IHeapEdge")," instance represents a JS reference in a heap snapshot.\nA heap snapshot is generally a graph where graph nodes are JS heap objects\nand graph edges are JS references among JS heap objects."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"readonly"))," it is not recommended to modify any ",(0,r.kt)("inlineCode",{parentName:"p"},"IHeapEdge")," instance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples"),": V8 or hermes heap snapshot can be parsed by the\n",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/modules/heap_analysis_src#getfullheapfromfile"},"getFullHeapFromFile")," API.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type {IHeapSnapshot, IHeapEdge} from '@memlab/core';\nimport {dumpNodeHeapSnapshot} from '@memlab/core';\nimport {getFullHeapFromFile} from '@memlab/heap-analysis';\n\n(async function () {\n  const heapFile = dumpNodeHeapSnapshot();\n  const heap: IHeapSnapshot = await getFullHeapFromFile(heapFile);\n\n  // iterate over each edge (JS reference in heap)\n  heap.edges.forEach((edge: IHeapEdge, i: number) => {\n    // use the heap edge APIs here\n    const nameOrIndex = edge.name_or_index;\n    // ...\n  });\n})();\n")),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"IHeapEdgeBasic")),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"IHeapEdge"))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"-edgeindex-number"},(0,r.kt)("a",{id:"edgeindex",name:"edgeindex"})," ",(0,r.kt)("strong",{parentName:"h3"},"edgeIndex"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"number")),(0,r.kt)("p",null,"index of this JS reference inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"edge.snapshot.edges")," pseudo array"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/5b428c1/packages/core/src/lib/Types.ts#L1332"},"core/src/lib/Types.ts:1332"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-fromnode-iheapnode"},(0,r.kt)("a",{id:"fromnode",name:"fromnode"})," ",(0,r.kt)("strong",{parentName:"h3"},"fromNode"),": ",(0,r.kt)("a",{parentName:"h3",href:"/memlab/docs/api/interfaces/core_src.IHeapNode"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapNode"))),(0,r.kt)("p",null,"returns an ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IHeapNode"},"IHeapNode")," instance representing the hosting\nJS heap object where this reference starts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/5b428c1/packages/core/src/lib/Types.ts#L1353"},"core/src/lib/Types.ts:1353"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-is_index-boolean"},(0,r.kt)("a",{id:"is\\_index",name:"is\\_index"})," ",(0,r.kt)("strong",{parentName:"h3"},"is","_","index"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,r.kt)("p",null,"if ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", means this is a reference to an array element\nor internal table element (",(0,r.kt)("inlineCode",{parentName:"p"},"edge.name_or_index")," will return a number),\notherwise this is a reference with a string name (",(0,r.kt)("inlineCode",{parentName:"p"},"edge.name_or_index"),"\nwill return a string)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/5b428c1/packages/core/src/lib/Types.ts#L1339"},"core/src/lib/Types.ts:1339"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-name_or_index-string--number"},(0,r.kt)("a",{id:"name\\_or\\_index",name:"name\\_or\\_index"})," ",(0,r.kt)("strong",{parentName:"h3"},"name","_","or","_","index"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"h3"},"number")),(0,r.kt)("p",null,"name of the JS reference. If this is a reference to an array element\nor internal table element, it is an numeric index"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/5b428c1/packages/core/src/lib/Types.ts#L1288"},"core/src/lib/Types.ts:1288"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-snapshot-iheapsnapshot"},(0,r.kt)("a",{id:"snapshot",name:"snapshot"})," ",(0,r.kt)("strong",{parentName:"h3"},"snapshot"),": ",(0,r.kt)("a",{parentName:"h3",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapSnapshot"))),(0,r.kt)("p",null,"get the ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},"IHeapSnapshot")," containing this JS reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/5b428c1/packages/core/src/lib/Types.ts#L1328"},"core/src/lib/Types.ts:1328"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-tonode-iheapnode"},(0,r.kt)("a",{id:"tonode",name:"tonode"})," ",(0,r.kt)("strong",{parentName:"h3"},"toNode"),": ",(0,r.kt)("a",{parentName:"h3",href:"/memlab/docs/api/interfaces/core_src.IHeapNode"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapNode"))),(0,r.kt)("p",null,"returns an ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IHeapNode"},"IHeapNode")," instance representing the JS heap object\npointed to by this reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/5b428c1/packages/core/src/lib/Types.ts#L1348"},"core/src/lib/Types.ts:1348"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-to_node-number"},(0,r.kt)("a",{id:"to\\_node",name:"to\\_node"})," ",(0,r.kt)("strong",{parentName:"h3"},"to","_","node"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"number")),(0,r.kt)("p",null,"the index of the JS heap object pointed to by this reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/5b428c1/packages/core/src/lib/Types.ts#L1343"},"core/src/lib/Types.ts:1343"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-type-string"},(0,r.kt)("a",{id:"type",name:"type"})," ",(0,r.kt)("strong",{parentName:"h3"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"string")),(0,r.kt)("p",null,"type of the JS reference, all types:\n",(0,r.kt)("inlineCode",{parentName:"p"},"context"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"element"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"property"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"internal"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hidden"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"shortcut"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"weak")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/5b428c1/packages/core/src/lib/Types.ts#L1293"},"core/src/lib/Types.ts:1293"))))))}m.isMDXComponent=!0}}]);