(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8438],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?o.createElement(m,c(c({ref:t},l),{},{components:n})):o.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3444:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return a},toc:function(){return p},default:function(){return l}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),c={title:"entrypoint",description:"Specification of the entrypoint.rs module",keywords:["development","developers","lido","specification","intent","entrypoint","solido","solana"],sidebar_position:5},a={unversionedId:"development/specification/solido/entrypoint",id:"development/specification/solido/entrypoint",isDocsHomePage:!1,title:"Entrypoint",description:"Specification of the entrypoint.rs module",source:"@site/docs/development/specification/solido/entrypoint.md",sourceDirName:"development/specification/solido",slug:"/development/specification/solido/entrypoint",permalink:"/solido/development/specification/solido/entrypoint",version:"current",sidebarPosition:5,frontMatter:{title:"entrypoint",description:"Specification of the entrypoint.rs module",keywords:["development","developers","lido","specification","intent","entrypoint","solido","solana"],sidebar_position:5},sidebar:"solidoSidebar",previous:{title:"Balance",permalink:"/solido/development/specification/solido/balance"},next:{title:"Error",permalink:"/solido/development/specification/solido/error"}},p=[],s={toc:p};function l(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The only function in the entrypoint module is the entrypoint function.  This module conforms to the standard Solana program structure and serves to call through to the process function in the process module; ",(0,i.kt)("inlineCode",{parentName:"p"},"processor::process(program_id, accounts, instruction_data)"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"entrypoint!(process_instruction);\nfn process_instruction(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    instruction_data: &[u8],\n) -> ProgramResult {\n")))}l.isMDXComponent=!0}}]);