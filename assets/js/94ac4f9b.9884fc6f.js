(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1666],{3905:function(a,e,t){"use strict";t.d(e,{Zo:function(){return l},kt:function(){return k}});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function m(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var o=n.createContext({}),i=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},l=function(a){var e=i(a.components);return n.createElement(o.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,r=a.originalType,o=a.parentName,l=m(a,["components","mdxType","originalType","parentName"]),N=i(t),k=s,d=N["".concat(o,".").concat(k)]||N[k]||c[k]||r;return t?n.createElement(d,p(p({ref:e},l),{},{components:t})):n.createElement(d,p({ref:e},l))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var r=t.length,p=new Array(r);p[0]=N;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=a,m.mdxType="string"==typeof a?a:s,p[1]=m;for(var i=2;i<r;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},3002:function(a,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return p},metadata:function(){return m},toc:function(){return o},default:function(){return l}});var n=t(2122),s=t(9756),r=(t(7294),t(3905)),p={title:"staking",description:"Overview of user staking in LIDO for Solana",keywords:["staking","end-user","lido","solana"],sidebar_position:1},m={unversionedId:"staking/overview",id:"staking/overview",isDocsHomePage:!1,title:"Staking Overview",description:"Overview of user staking in LIDO for Solana",source:"@site/docs/staking/overview.md",sourceDirName:"staking",slug:"/staking/overview",permalink:"/solido/staking/overview",version:"current",sidebarPosition:1,frontMatter:{title:"staking",description:"Overview of user staking in LIDO for Solana",keywords:["staking","end-user","lido","solana"],sidebar_position:1},sidebar:"solidoSidebar",previous:{title:"Overview",permalink:"/solido/"},next:{title:"Lido Anchor guide",permalink:"/solido/staking/lido-anchor-guide"}},o=[{value:"Solana Liquid Staking",id:"solana-liquid-staking",children:[]},{value:"Comparison with traditional staking on Solana",id:"comparison-with-traditional-staking-on-solana",children:[]},{value:"Rewards",id:"rewards",children:[]}],i={toc:o};function l(a){var e=a.components,p=(0,s.Z)(a,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},i,p,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"solana-liquid-staking"},"Solana Liquid Staking"),(0,r.kt)("p",null,"Solana is an extremely fast, and censorship-resistant blockchain that has witnessed tremendous growth and adoption in the last year. Solana serves transactions at an order of magnitude higher rate when compared to base layer Ethereum. Additionally, there is a flourishing ecosystem emerging around ",(0,r.kt)("a",{parentName:"p",href:"https://solana.com/ecosystem/serum"},"Serum")," and other DeFi protocols such as ",(0,r.kt)("a",{parentName:"p",href:"https://solana.com/ecosystem/raydium"},"Raydium"),", ",(0,r.kt)("a",{parentName:"p",href:"https://solana.com/ecosystem/oxygen"},"Oxygen"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.theblockcrypto.com/linked/100875/jump-trading-defi-oracle-solana"},"Pyth Network"),", and others that are being built on Solana. With over ",(0,r.kt)("a",{parentName:"p",href:"https://www.stakingrewards.com/earn/solana"},"$14bn staked"),", Solana is now also in the Top 5 of Proof-of-Stake networks by staked value.\nLiquid staking takes the utility of Solana a step further by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improving the user experience"),(0,r.kt)("li",{parentName:"ul"},"Diversifying risks across multiple node and operators"),(0,r.kt)("li",{parentName:"ul"},"Providing instant liquidity \u2014 that can also be leveraged to earn secondary rewards (beyond the primary staking rewards) through"),(0,r.kt)("li",{parentName:"ul"},"Integrations with DeFi protocols that support Solana\u2019s liquid representation token")),(0,r.kt)("h2",{id:"comparison-with-traditional-staking-on-solana"},"Comparison with traditional staking on Solana"),(0,r.kt)("p",null,"With traditional staking in Solana, the user has to perform a number of steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a Stake Account and transfer SOL to it"),(0,r.kt)("li",{parentName:"ul"},"Set its deposit and withdraw authorities"),(0,r.kt)("li",{parentName:"ul"},"Delegate it to a validator"),(0,r.kt)("li",{parentName:"ul"},"Wait for activation of the delegation before the stake starts earning rewards")),(0,r.kt)("p",null,"Furthermore, in traditional staking, if the user wants to diversify her stake across validators she would have to create and manage stake accounts for each validator."),(0,r.kt)("p",null,"Staking SOL through Lido will come with a variety of benefits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One-step process \u2014 Just deposit into the pool with a single click"),(0,r.kt)("li",{parentName:"ul"},"The pool takes care of validator diversification"),(0,r.kt)("li",{parentName:"ul"},"Immediate appreciation \u2014 You start earning from the pool from the moment of deposit. This gets reflected in the value-appreciation of ",(0,r.kt)("strong",{parentName:"li"},"stSOL")," tokens")),(0,r.kt)("p",null,"Interestingly, there is no waiting time for receiving ",(0,r.kt)("strong",{parentName:"p"},"stSOL")," tokens. When a user delegates their SOL tokens they do not need to perform or wait for the completion of any delegation or activation steps, as is the norm in traditional staking. The user can instantly exchange ",(0,r.kt)("strong",{parentName:"p"},"stSOL")," for SOL at any time in the open market."),(0,r.kt)("p",null,"In Lido for ETH, withdrawals from the Lido program are blocked until the ETH2 chain is live. In Lido for Solana, staggered withdrawals will be enabled. These direct withdrawals will take a couple of epochs to process, and will be beneficial for large withdrawals (e.g. because there will be no slippage from trading on the open market). However, for small withdrawals exchanging ",(0,r.kt)("strong",{parentName:"p"},"stSOL")," on a DEX (e.g. to SOL) will likely prove to be the go-to solution in order to exit a staking position with Lido for most of the users."),(0,r.kt)("h2",{id:"rewards"},"Rewards"),(0,r.kt)("p",null,"Reward distribution in 'Lido for Solana' is an interesting deviation from how rewards are distributed in Lido for Ethereum, which pegs ",(0,r.kt)("inlineCode",{parentName:"p"},"ETH2 to stETH in a 1:1 ratio.")),(0,r.kt)("p",null,"To understand how rewards work for 'Lido for Solana' let's look at a hypothetical scenario. Let's assume that the pool contains ",(0,r.kt)("inlineCode",{parentName:"p"},"2000 SOL")," and while we are at it let us also assume that a total of ",(0,r.kt)("inlineCode",{parentName:"p"},"1800 stSOL")," are held by the token holders. This puts an exchange rate of ",(0,r.kt)("inlineCode",{parentName:"p"},"0.9 stSOL per SOL.")),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mfrac",{parentName:"mrow"},(0,r.kt)("mn",{parentName:"mfrac"},"1800"),(0,r.kt)("mn",{parentName:"mfrac"},"2000")),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mn",{parentName:"mrow"},"0.9"),(0,r.kt)("mtext",{parentName:"mrow"},"\xa0stSOL\xa0"),(0,r.kt)("mtext",{parentName:"mrow",mathvariant:"bold"},"per"),(0,r.kt)("mtext",{parentName:"mrow"},"\xa0SOL")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{1800}{2000}=0.9\\textnormal{ stSOL }\\textbf{per}\\textnormal{ SOL}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"2.00744em",verticalAlign:"-0.686em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,r.kt)("span",{parentName:"span",className:"mfrac"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.32144em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"2000"))),(0,r.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,r.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"1800")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,r.kt)("span",{parentName:"span"}))))),(0,r.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8777699999999999em",verticalAlign:"-0.19444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0.9"),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textrm"},"\xa0stSOL\xa0")),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textbf"},"per")),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textrm"},"\xa0SOL"))))))),(0,r.kt)("p",null,"If Alice deposits ",(0,r.kt)("inlineCode",{parentName:"p"},"1 SOL")," now she will get ",(0,r.kt)("inlineCode",{parentName:"p"},"0.9 stSOL")," in return. As rewards accrue SOL balance goes up, let\u2019s say from ",(0,r.kt)("inlineCode",{parentName:"p"},"2000")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"2100"),". The new exchange rate becomes"),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mfrac",{parentName:"mrow"},(0,r.kt)("mn",{parentName:"mfrac"},"1800"),(0,r.kt)("mn",{parentName:"mfrac"},"2100")),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mn",{parentName:"mrow"},"0.86"),(0,r.kt)("mtext",{parentName:"mrow"},"\xa0stSOL\xa0"),(0,r.kt)("mtext",{parentName:"mrow",mathvariant:"bold"},"per"),(0,r.kt)("mtext",{parentName:"mrow"},"\xa0SOL")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{1800}{2100}=0.86\\textnormal{ stSOL }\\textbf{per}\\textnormal{ SOL}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"2.00744em",verticalAlign:"-0.686em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,r.kt)("span",{parentName:"span",className:"mfrac"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.32144em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"2100"))),(0,r.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,r.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"1800")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,r.kt)("span",{parentName:"span"}))))),(0,r.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8777699999999999em",verticalAlign:"-0.19444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0.86"),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textrm"},"\xa0stSOL\xa0")),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textbf"},"per")),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textrm"},"\xa0SOL"))))))),(0,r.kt)("p",null,"Now if Alice goes and enquires about the value of her ",(0,r.kt)("inlineCode",{parentName:"p"},"0.9 stSOL"),", she finds it to be"),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"0.9"),(0,r.kt)("mo",{parentName:"mrow"},"\u2217"),(0,r.kt)("mfrac",{parentName:"mrow"},(0,r.kt)("mn",{parentName:"mfrac"},"2100"),(0,r.kt)("mn",{parentName:"mfrac"},"1800")),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mn",{parentName:"mrow"},"1.05"),(0,r.kt)("mtext",{parentName:"mrow"},"\xa0SOL")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0.9*\\frac{2100}{1800}=1.05\\textnormal{ SOL}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0.9"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"2.00744em",verticalAlign:"-0.686em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,r.kt)("span",{parentName:"span",className:"mfrac"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.32144em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"1800"))),(0,r.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,r.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"2100")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,r.kt)("span",{parentName:"span"}))))),(0,r.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1.05"),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textrm"},"\xa0SOL"))))))),(0,r.kt)("p",null,"Effectively, her SOL balance potentially went up by 5% from ",(0,r.kt)("inlineCode",{parentName:"p"},"1 SOL")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"1.05 SOL"),". This approach is called the ",(0,r.kt)("strong",{parentName:"p"},"share-pool approach.")," Even though the numbers here are hypothetical they represent the concept of rewards accurately."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),"\nThe accrued rewards here are after a fee cut for Lido maintainers. To incentivize sustainable management of the Lido ecosystem, a portion of the rewards is split between the node operators and DAO treasury. The remaining larger chunk (on Ethereum, these amount to 90%) of rewards accrue to Lido users and get reflected in the increased value of stSOL as explained above.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Staking Rewards",src:t(1950).Z})),(0,r.kt)("p",null,"Lido for Solana doesn\u2019t follow the pegging approach, followed by ETH and stETH, as of now. However, this might be considered for revision when Solana launches native support for rebasing in SPL tokens.\nUtilizing Liquidity\nThe stSOLs that one gets can be used to reap secondary rewards through DeFi protocols. There will also be liquidity pools on AMM protocols and other DEXes where one will be able to immediately exchange stSOL for SOL. For the ",(0,r.kt)("strong",{parentName:"p"},"ETH<->stETH")," pair a popular AMM in terms of liquidity and volume is the Curve pool."))}l.isMDXComponent=!0},1950:function(a,e,t){"use strict";e.Z=t.p+"assets/images/stakingrewards-2d2c5198fb466feb07936031649cff04.png"}}]);