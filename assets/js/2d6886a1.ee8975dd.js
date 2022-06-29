(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2769],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return t?a.createElement(h,r(r({ref:n},m),{},{components:t})):a.createElement(h,r({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8446:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var a=t(2122),i=t(9756),o=(t(7294),t(3905)),r={},l={unversionedId:"operation/maintenance",id:"operation/maintenance",isDocsHomePage:!1,title:"Maintenance",description:"Some tasks in Solido, such as claiming staking rewards, need to happen",source:"@site/docs/operation/maintenance.md",sourceDirName:"operation",slug:"/operation/maintenance",permalink:"/solido/operation/maintenance",version:"current",frontMatter:{},sidebar:"solidoSidebar",previous:{title:"The Solido utility",permalink:"/solido/operation/the-solido-utility"},next:{title:"Multisig guide",permalink:"/solido/operation/multisig-guide"}},s=[{value:"Trusted maintainers",id:"trusted-maintainers",children:[]},{value:"Maintainer operators",id:"maintainer-operators",children:[]},{value:"Obtaining the maintenance daemon",id:"obtaining-the-maintenance-daemon",children:[]},{value:"Running the maintenance daemon",id:"running-the-maintenance-daemon",children:[]},{value:"RPC node requirements",id:"rpc-node-requirements",children:[]},{value:"Claiming validation fees",id:"claiming-validation-fees",children:[]}],c={toc:s};function m(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Some tasks in Solido, such as claiming staking rewards, need to happen\nperiodically. We refer to these as ",(0,o.kt)("em",{parentName:"p"},"maintenance")," tasks. The maintenance daemon\n(also called \u201cbot\u201d) watches the on-chain state, and executes maintenance tasks\nas necessary. It is fine, and even encouraged for redundancy, if multiple\nparties run a maintenance daemon."),(0,o.kt)("h2",{id:"trusted-maintainers"},"Trusted maintainers"),(0,o.kt)("p",null,"Most maintenance tasks can be executed by anybody. However, staking deposits is\nlimited to a list of ",(0,o.kt)("em",{parentName:"p"},"maintainers")," at the moment. This simplifies the on-chain\nprogram, but it also gives maintainers great power and responsibility over the\nstake distribution. The maintenance daemon that maintainers are expected to use,\ntargets a uniform stake distribution, but maintainers in theory have the power\nto disturb this balance. We plan to move the stake distribution logic into the\non-chain program in a future version, to eliminate the need for trusted\nmaintainers."),(0,o.kt)("h2",{id:"maintainer-operators"},"Maintainer operators"),(0,o.kt)("p",null,"Most of the Solido maintenance tasks can be executed by anybody, but there still\nneeds to be ",(0,o.kt)("em",{parentName:"p"},"somebody")," who submits the transaction. The maintenance bot\nautomates this. The bot will also execute maintenance tasks that are restricted\nto the set of trusted maintainers. For v1 the set of trusted maintainers who run\nthe bot consists of validators who are also part of the multisig:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Chorus One"),(0,o.kt)("li",{parentName:"ul"},"Figment"),(0,o.kt)("li",{parentName:"ul"},"P2P"),(0,o.kt)("li",{parentName:"ul"},"Staking Facilities")),(0,o.kt)("p",null,"Uptime of the maintenance bot is not critical. As long as ",(0,o.kt)("em",{parentName:"p"},"somebody")," at least\nbriefly runs the bot once every epoch, Solido will work fine. Because multiple\nparties run an instance, it is okay if an instance is inactive for a bit (e.g.\nto reboot the host)."),(0,o.kt)("h2",{id:"obtaining-the-maintenance-daemon"},"Obtaining the maintenance daemon"),(0,o.kt)("p",null,"The maintenance daemon is part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"solido")," utility. You can either build\nit from source with Cargo, or use the ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/chorusone/solido-maintainer"},(0,o.kt)("inlineCode",{parentName:"a"},"chorusone/solido-maintainer")),"\ncontainer image that includes a prebuilt version."),(0,o.kt)("h2",{id:"running-the-maintenance-daemon"},"Running the maintenance daemon"),(0,o.kt)("p",null,"The maintenance daemon is part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"solido")," utility and can be started with\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"run-maintainer")," subcommand. Like all ",(0,o.kt)("inlineCode",{parentName:"p"},"solido")," commands, it can be\nconfigured either on the command line, with a json config file, or through\nenvironment variables. See also ",(0,o.kt)("a",{parentName:"p",href:"/solido/operation/the-solido-utility#configuration"},"the section on ",(0,o.kt)("inlineCode",{parentName:"a"},"solido")," configuration"),"\nSee ",(0,o.kt)("inlineCode",{parentName:"p"},"solido --help")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"solido run-maintainer --help")," for the options specific\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"run-maintainer"),". Beware that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The public Solana RPC endpoints are rate-limited, and require trusting the\nserver. If possible, point ",(0,o.kt)("inlineCode",{parentName:"p"},"--cluster")," at the RPC endpoint of your own\nvalidator, instead of a public one like\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.mainnet-beta.solana.com"),". See also ",(0,o.kt)("a",{parentName:"p",href:"#rpc-node-requirements"},"the section about the RPC\nnode requirements"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The key used to sign (configured with ",(0,o.kt)("inlineCode",{parentName:"p"},"--keypair-path"),") needs to be listed as\na maintainer in the Solido instance. You can view the list of maintainers\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"solido show-solido"),". The account needs to be funded, as it pays for the\ntransaction fees of maintenance transactions."))),(0,o.kt)("p",null,"When running, the maintenance daemon periodically polls the on-chain state, and\nexecutes maintenances transactions if necessary. It also exposes an http server\nthat serves a Prometheus ",(0,o.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint. These metrics include both metrics\nabout Solido in general (extracted from the on-chain state), and metrics about\nthe daemon. The following metrics are useful for monitoring:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"solido_maintainer_balance_sol"),": The balance of the maintainer account\n(configured with ",(0,o.kt)("inlineCode",{parentName:"p"},"--keypair-path"),"). You can alert on this value dropping\nbelow e.g. 0.1 SOL; to top up the account in a timely fashion.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"solido_maintenance_polls_total"),": The number of times we refreshed the\non-chain state. If this value stops increasing, something is wrong.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"solido_maintenance_errors_total"),": The number of times we encountered an\nerror. If the rate of this metric gets close to the poll rate, that means\nmost iterations are failing, and investigation is needed. Occasional errors\nare expected, especially when using a public RPC endpoint."))),(0,o.kt)("h2",{id:"rpc-node-requirements"},"RPC node requirements"),(0,o.kt)("p",null,"The Solido maintenance daemon puts some demands on the RPC node that it connects\nto:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The RPC must be enabled with ",(0,o.kt)("inlineCode",{parentName:"p"},"--full-rpc-api"),".\nSince ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana/releases/tag/v1.9.6"},"Solana 1.9.6"),"\nby default only the minimal set of RPC methods is enabled, so the full set\nmust be enabled explicitly.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"--max-multiple-accounts")," to a sufficiently large value. (1000 should be\nplenty for now.) Solido relies on ",(0,o.kt)("inlineCode",{parentName:"p"},"GetMultipleAccounts")," to read atomic\nsnapshots of the chain state. For correctness, it must be able to read all\naccounts in a single call. Solido needs to read multiple accounts per\nvalidator (multiple stake accounts, the vote account, the config account for\nmetadata, etc.). Solido will log a warning to stdout when it can\u2019t request\nall accounts in a single call.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enable account indexing of the config program with ",(0,o.kt)("inlineCode",{parentName:"p"},"--account-index\nprogram-id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--account-index-include-key Config1111111111111111111111111111111111111"),".\nDue to the way Solana implements validator metadata, one needs to list all\naccounts owned by the config program to find the metadata for a particular\nvalidator. For this query to be fast, account indexing is needed. Without\nthese flags, the ",(0,o.kt)("inlineCode",{parentName:"p"},"GetProgramAccounts")," call will time out."))),(0,o.kt)("h2",{id:"claiming-validation-fees"},"Claiming validation fees"),(0,o.kt)("p",null,"For ",(0,o.kt)("a",{parentName:"p",href:"/solido/internals/commission#validation-fee-credit"},"technical reasons"),", Solido\nholds on to any validation fees until the validator withdraws them into the\nvalidator\u2019s stSOL account; they are not paid into the account automatically by\nthe on-chain program. To alleviate this, the maintenance bot will withdraw the\nrewards automatically for all validators, into their stSOL accounts."))}m.isMDXComponent=!0}}]);