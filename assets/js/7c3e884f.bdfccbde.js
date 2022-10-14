"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={},r="The Solido utility",l={unversionedId:"operation/the-solido-utility",id:"operation/the-solido-utility",title:"The Solido utility",description:"Lido for Solana consists of an on-chain program, a web-based frontend for users",source:"@site/docs/operation/the-solido-utility.md",sourceDirName:"operation",slug:"/operation/the-solido-utility",permalink:"/operation/the-solido-utility",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solidoSidebar",previous:{title:"Validator onboarding",permalink:"/validator-onboarding"},next:{title:"Maintenance",permalink:"/operation/maintenance"}},s={},p=[{value:"Obtaining Solido",id:"obtaining-solido",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Using a hardware wallet",id:"using-a-hardware-wallet",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-solido-utility"},"The Solido utility"),(0,i.kt)("p",null,"Lido for Solana consists of an on-chain program, a web-based frontend for users\nto interact with it, and a command-line client for administration and\nmaintenance interact with it. This command-line client is called ",(0,i.kt)("inlineCode",{parentName:"p"},"solido"),". It\nis used for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creating a new Solido instance. This is only done once on mainnet, but we do\nit often on a local validator for testing."),(0,i.kt)("li",{parentName:"ul"},"Creating a new multisig instance, and approving and executing multisig\ntransactions."),(0,i.kt)("li",{parentName:"ul"},"Creating multisig transactions for administration operations (adding\nvalidators, changing the fees)."),(0,i.kt)("li",{parentName:"ul"},"Running ",(0,i.kt)("a",{parentName:"li",href:"/operation/maintenance"},"the maintenance daemon"),"."),(0,i.kt)("li",{parentName:"ul"},"Inspecting a Solido instance, to show the current status."),(0,i.kt)("li",{parentName:"ul"},"Making deposits and withdrawals. These are indended for testing, end\nusers are expected to use the webinterface instead.")),(0,i.kt)("h2",{id:"obtaining-solido"},"Obtaining Solido"),(0,i.kt)("p",null,"You can either build ",(0,i.kt)("inlineCode",{parentName:"p"},"solido")," from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ChorusOne/solido"},"source")," with Cargo, or use the\n",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/chorusone/solido-maintainer"},(0,i.kt)("inlineCode",{parentName:"a"},"chorusone/solido-maintainer"))," container image that includes a\nprebuilt version. The utility is developed and tested on Linux, and it should\nrun on Mac as well. When building from source, make sure to clone the repository\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"--recurse-submodules"),"."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"solido")," program needs to know a few things before it can interact with the\non-chain program:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The network to connect to (mainnet-beta, testnet, or possibly a local test\nvalidator)."),(0,i.kt)("li",{parentName:"ul"},"The address of the Solido program, and the address of the Solido instance."),(0,i.kt)("li",{parentName:"ul"},"Possibly the address of the multisig program, and the address of the multisig\ninstance."),(0,i.kt)("li",{parentName:"ul"},"When signing, the key pair to sign with.")),(0,i.kt)("p",null,"These can be configured in three ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"With command-line arguments. See ",(0,i.kt)("inlineCode",{parentName:"p"},"solido --help")," for more details.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"With environment variables. The names are the same as the command-line\noptions, but uppercase, with underscores instead of dashes, and prefixed with\n",(0,i.kt)("inlineCode",{parentName:"p"},"SOLIDO_"),". For example, to provide ",(0,i.kt)("inlineCode",{parentName:"p"},"--keypair-path")," through an environment\nvariable, set ",(0,i.kt)("inlineCode",{parentName:"p"},"SOLIDO_KEYPAIR_PATH"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"With a json configuration file, that contains an object with options. The\nnames are the same as the command-line options, but with underscores instead\nof dashes. For example, to set ",(0,i.kt)("inlineCode",{parentName:"p"},"--keypair-path")," in a config file, write the\nfollowing to ",(0,i.kt)("inlineCode",{parentName:"p"},"solido.json"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "keypair_path": "/home/users/lido/.config/solana/id.json"\n}\n')),(0,i.kt)("p",{parentName:"li"},"Then run ",(0,i.kt)("inlineCode",{parentName:"p"},"solido")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"--config solido.json")," to use this config file."))),(0,i.kt)("p",null,"When an option is provided in multiple places, the command-line takes\nprecedence, then the config file, then the environment variable, and if that is\nnot set either, the default value is used, if possible."),(0,i.kt)("p",null,"For sample configuration files with the right addresses set up, see\n",(0,i.kt)("a",{parentName:"p",href:"/deployments"},"the deployments page"),"."),(0,i.kt)("h2",{id:"using-a-hardware-wallet"},"Using a hardware wallet"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--keypair-path")," can point to a keypair file generated with ",(0,i.kt)("inlineCode",{parentName:"p"},"solana-keygen"),",\nor it can be a URI that starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"usb://")," to use a hardware wallet. Some\nexamples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"usb://ledger")," to connect to a Ledger and use its default key."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"usb://ledger?key=0")," to select the key by derivation path.")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.solana.com/wallet-guide/hardware-wallets"},"the Solana documentation on hardware wallets")," for more\ninformation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"When using a Ledger hardware wallet, you need to turn on the ",(0,i.kt)("em",{parentName:"strong"},"blind signing"),"\nsetting in the Solana app on the device.")," By default, Ledger tries to parse all\ntransactions that it signs, so it can show a summary of the transaction on\nits display. However, Ledger does not have a parser for Solido transactions or\nmultisig transactions, so by default it refuses to sign those. By enabling\n",(0,i.kt)("em",{parentName:"p"},"blind signing"),", you allow the Ledger to sign transactions that it cannot show a\nsummary for. The Ledger still requires human confirmation to sign, even when\nblind signing is enabled."))}u.isMDXComponent=!0}}]);