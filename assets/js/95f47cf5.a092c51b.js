"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[2900],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>h});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),h=s,y=u["".concat(o,".").concat(h)]||u[h]||m[h]||l;return t?n.createElement(y,r(r({ref:a},c),{},{components:t})):n.createElement(y,r({ref:a},c))}));function h(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var l=t.length,r=new Array(l);r[0]=u;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var p=2;p<l;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},92:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=t(7462),s=(t(7294),t(3905));const l={id:"heap_analysis_src.ObjectShapeAnalysis",title:"Class: ObjectShapeAnalysis",sidebar_label:"ObjectShapeAnalysis",custom_edit_url:null},r=void 0,i={unversionedId:"api/classes/heap_analysis_src.ObjectShapeAnalysis",id:"api/classes/heap_analysis_src.ObjectShapeAnalysis",title:"Class: ObjectShapeAnalysis",description:"Hierarchy",source:"@site/docs/api/classes/heap_analysis_src.ObjectShapeAnalysis.md",sourceDirName:"api/classes",slug:"/api/classes/heap_analysis_src.ObjectShapeAnalysis",permalink:"/memlab/docs/api/classes/heap_analysis_src.ObjectShapeAnalysis",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"heap_analysis_src.ObjectShapeAnalysis",title:"Class: ObjectShapeAnalysis",sidebar_label:"ObjectShapeAnalysis",custom_edit_url:null},sidebar:"sidebar",previous:{title:"ObjectShallowAnalysis",permalink:"/memlab/docs/api/classes/heap_analysis_src.ObjectShallowAnalysis"},next:{title:"ObjectSizeAnalysis",permalink:"/memlab/docs/api/classes/heap_analysis_src.ObjectSizeAnalysis"}},o={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:'<a id="new objectshapeanalysis"></a><strong>new ObjectShapeAnalysis</strong>()',id:"new-objectshapeanalysis",level:3},{value:"Methods",id:"methods",level:2},{value:'<a id="analyzesnapshotfromfile"></a><strong>analyzeSnapshotFromFile</strong>(<code>file</code>)',id:"analyzesnapshotfromfilefile",level:3},{value:'<a id="getcommandname"></a><strong>getCommandName</strong>()',id:"getcommandname",level:3}],c={toc:p};function m(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/memlab/docs/api/classes/heap_analysis_src.BaseAnalysis"},(0,s.kt)("inlineCode",{parentName:"a"},"BaseAnalysis"))),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"ObjectShapeAnalysis"))))),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"new-objectshapeanalysis"},(0,s.kt)("a",{id:"new objectshapeanalysis"}),(0,s.kt)("strong",{parentName:"h3"},"new ObjectShapeAnalysis"),"()"),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"analyzesnapshotfromfilefile"},(0,s.kt)("a",{id:"analyzesnapshotfromfile"}),(0,s.kt)("strong",{parentName:"h3"},"analyzeSnapshotFromFile"),"(",(0,s.kt)("inlineCode",{parentName:"h3"},"file"),")"),(0,s.kt)("p",null,"Run heap analysis for a single heap snapshot file"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Parameters"),":",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"file"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"string")," | the absolute path of a ",(0,s.kt)("inlineCode",{parentName:"li"},".heapsnapshot")," file."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Returns"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"li"},"void"),">"," | this API returns void. To get the analysis results,\ncheck out the documentation of the hosting heap analysis class and\ncall the analysis-specific API to get results after calling this method."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Example"),":")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const analysis = new StringAnalysis();\nawait anaysis.analyzeSnapshotFromFile(snapshotFile);\nconst stringPatterns = analysis.getTopDuplicatedStringsInCount();\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Source"),":",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/1bd4109/packages/heap-analysis/src/BaseAnalysis.ts#L75"},"heap-analysis/src/BaseAnalysis.ts:75"))))),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"getcommandname"},(0,s.kt)("a",{id:"getcommandname"}),(0,s.kt)("strong",{parentName:"h3"},"getCommandName"),"()"),(0,s.kt)("p",null,"Get the name of the heap analysis, which is also used to reference\nthe analysis in memlab command-line tool."),(0,s.kt)("p",null,"The following terminal command will initiate with this analysis:\n",(0,s.kt)("inlineCode",{parentName:"p"},"memlab analyze <ANALYSIS_NAME>")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Returns"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"string")," | the name of the analysis"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Examples"),":")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const analysis = new YourAnalysis();\nconst name = analysis.getCommandName();\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Source"),":",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/1bd4109/packages/heap-analysis/src/plugins/ObjectShapeAnalysis.ts#L19"},"heap-analysis/src/plugins/ObjectShapeAnalysis.ts:19"))))))}m.isMDXComponent=!0}}]);