"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7417],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),h=n,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return a?o.createElement(g,r(r({ref:t},c),{},{components:a})):o.createElement(g,r({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8519:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var o=a(7462),n=(a(7294),a(3905)),i=a(3902);const r=a.p+"assets/images/updated-b00828d70e59c8d506105cf986ce34e4.png";a(1599);const s={title:"Ledger",description:"Overview of user staking in LIDO for Solana with Ledger",keywords:["staking","end-user","lido","solana","ledger"],sidebar_label:"Ledger",sidebar_position:4},l="How to Stake Solana on Lido",d={unversionedId:"staking/ledger",id:"staking/ledger",title:"Ledger",description:"Overview of user staking in LIDO for Solana with Ledger",source:"@site/docs/staking/ledger.md",sourceDirName:"staking",slug:"/staking/ledger",permalink:"/staking/ledger",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Ledger",description:"Overview of user staking in LIDO for Solana with Ledger",keywords:["staking","end-user","lido","solana","ledger"],sidebar_label:"Ledger",sidebar_position:4},sidebar:"solidoSidebar",previous:{title:"Solflare",permalink:"/staking/solflare"},next:{title:"Sollet",permalink:"/staking/Sollet"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Lido for Solana staking guide",id:"lido-for-solana-staking-guide",level:2},{value:"Step 1: Using Solana App on Ledger",id:"step-1-using-solana-app-on-ledger",level:2},{value:"Setting up",id:"setting-up",level:3},{value:"Step 2: Connect Ledger to Lido",id:"step-2-connect-ledger-to-lido",level:2},{value:"Step 2: Explore the interface",id:"step-2-explore-the-interface",level:2},{value:"Account info",id:"account-info",level:3},{value:"Transaction Parameters",id:"transaction-parameters",level:3},{value:"Lido Statistics",id:"lido-statistics",level:3},{value:"FAQs",id:"faqs",level:3},{value:"Step 3: Stake your SOL",id:"step-3-stake-your-sol",level:2},{value:"Step 4: View the transaction on Blockexplorer",id:"step-4-view-the-transaction-on-blockexplorer",level:2},{value:"Withdrawing Solana",id:"withdrawing-solana",level:2},{value:"Resources",id:"resources",level:2}],p={toc:u};function h(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-stake-solana-on-lido"},"How to Stake Solana on Lido"),(0,n.kt)("p",null,"A quick guide on staking your Solana on the Lido widget"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"\u2018Lido for Solana\u2019 is a Lido-DAO governed liquid staking protocol for the Solana blockchain. Anyone who stakes their SOL tokens with Lido will be issued an on-chain representation of SOL staking position with Lido validators, called stSOL. This will allow Solana token holders to get liquidity on their staked assets which can then be traded, or further utilized as collateral in DeFi products."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Widget",src:a(3043).Z,width:"2698",height:"1428"})),(0,n.kt)("h2",{id:"lido-for-solana-staking-guide"},"Lido for Solana staking guide"),(0,n.kt)("p",null,"In this step-by-step guide, we will learn how to stake your Solana via the Lido staking widget. This guide shows the testnet for demonstration purposes. However, the process remains the same for mainnet. You can use one of the following wallets to connect to Lido. The facility to use the hardware wallet Ledger is also provided. This guarantees an extra layer of security for the user."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Phantom"),(0,n.kt)("li",{parentName:"ol"},"Solflare"),(0,n.kt)("li",{parentName:"ol"},"Ledger"),(0,n.kt)("li",{parentName:"ol"},"Sollet"),(0,n.kt)("li",{parentName:"ol"},"Solong")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"step-1-using-solana-app-on-ledger"},"Step 1: Using Solana App on Ledger"),(0,n.kt)("p",null,"To setup your ledger please head over to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.solana.com/wallet-guide/ledger-live"},"Solana documentation site")," and follow the instructions written in the following sections."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Getting Started"),(0,n.kt)("li",{parentName:"ol"},"Install the Solana App on your Nano")),(0,n.kt)("p",null,"Additional instructions can also be found on the ",(0,n.kt)("a",{parentName:"p",href:"https://support.ledger.com/hc/en-us/articles/360016265659-Solana-SOL-"},"Ledger site")),(0,n.kt)("h3",{id:"setting-up"},"Setting up"),(0,n.kt)("p",null,"Make sure to note down the seed phrase for your address and store it in a safe place. Additionally, fund your Solana address with some SOL tokens before interacting with Lido"),(0,n.kt)("p",null,"When your app is ready you'll see something like this on the Ledger screen.\n",(0,n.kt)("img",{alt:"Ready",src:a(3481).Z,width:"3976",height:"1425"})),(0,n.kt)("h2",{id:"step-2-connect-ledger-to-lido"},"Step 2: Connect Ledger to Lido"),(0,n.kt)("p",null,"Once the Ledger is setup visit ",(0,n.kt)("a",{parentName:"p",href:"https://solana.lido.fi"},"https://solana.lido.fi")," to stake your SOL tokens. Now connect your Ledger device to your machine and press the connect button in the top-right corner of the Lido interface."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Connect",src:a(9273).Z,width:"2872",height:"528"})),(0,n.kt)("p",null,"Pressing the connect wallet button, on the top right hand corner of the screen, pops up the wallet screen."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Wallet List",src:a(7737).Z,width:"2634",height:"966"})),(0,n.kt)("p",null,"Selecting Ledger and pressing the connect button pops up a dialog box for you to ",(0,n.kt)("strong",{parentName:"p"},"approve the connection"),". Make sure to verify the details (if any) listed on the approval dialog box by Ledger."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Approve 1",src:a(7658).Z,width:"454",height:"436"}),"\n",(0,n.kt)("img",{alt:"Approve 2",src:a(4696).Z,width:"446",height:"433"})),(0,n.kt)("p",null,"Once connected you would be able to see your balance on the Lido widget. Before you interact with the widget further it is important to explore the widget and understand its functionality."),(0,n.kt)("h2",{id:"step-2-explore-the-interface"},"Step 2: Explore the interface"),(0,n.kt)("p",null,"At the top you can see your account\u2019s information\u200a\u2014\u200ayour current stSOL balance and the number of SOL tokens available for staking. For new account holders, the staked amount (stSOL) will be 0 in the beginning. You can also see the returns you will get by staking with Lido under Lido APR. Below that you can enter the number of SOL you want to stake."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Interface",src:a(8574).Z,width:"2042",height:"922"})),(0,n.kt)("h3",{id:"account-info"},"Account info"),(0,n.kt)("p",null,"You can go to the top-right corner of the screen and click on your connected account. This lets you take a look at your address and disconnect at any point during the process."),(0,n.kt)("p",null,"To view the transaction history of your address on Solana's blockexplorer you can add your address to the end of the following URL"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://explorer.solana.com/address/**your-address-goes-here"},"https://explorer.solana.com/address/**your-address-goes-here"),"**")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Account Info",src:a(2057).Z,width:"1994",height:"418"}),"\n",(0,n.kt)("img",{alt:"Connect Dialog",src:a(8073).Z,width:"2662",height:"530"})),(0,n.kt)("h3",{id:"transaction-parameters"},"Transaction Parameters"),(0,n.kt)("p",null,"When you enter the amount of SOL you want to stake, the values below the submit button change automatically. These values give you specific information about the transaction you are about to perform. It tells you the"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Exchange rate of SOL v/s stSOL at the moment"),(0,n.kt)("li",{parentName:"ul"},"Amount of stSOL you will receive"),(0,n.kt)("li",{parentName:"ul"},"Transaction cost"),(0,n.kt)("li",{parentName:"ul"},"Fee that will be deducted for this transaction")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Transaction Params",src:a(9446).Z,width:"2198",height:"1192"})),(0,n.kt)("h3",{id:"lido-statistics"},"Lido Statistics"),(0,n.kt)("p",null,"Just below the transaction parameters you also see global Lido statistics. This gives you a clear idea of how much SOL is being staked worldwide and other information regarding the liquid staking ecosystem."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Lido Params",src:a(8439).Z,width:"2370",height:"420"})),(0,n.kt)("h3",{id:"faqs"},"FAQs"),(0,n.kt)("p",null,"You can see the FAQ section right below the Lido statistics. It is prudent to familiarize yourself with some of the basic features of liquid staking and the risks involved. The FAQ section also gives more information about the stSOL and its value. In case, you have even more questions you can always reach out to the Lido team or Chorus One for any clarifications. The contact information is given at the end of this article."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Faqs",src:a(8387).Z,width:"2178",height:"1224"})),(0,n.kt)("h2",{id:"step-3-stake-your-sol"},"Step 3: Stake your SOL"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Stake",src:a(1868).Z,width:"2854",height:"882"})),(0,n.kt)("p",null,"To stake your SOL with lido enter the amount you wanter to stake. On the lido widget will see a pop-up showing the state of your transaction. The Lido widget waits for you to approve this transaction through your Ledger device."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note ",(0,n.kt)("strong",{parentName:"p"},"This transaction will only go through if you go back to Ledger and approve it."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Staking",src:a(4129).Z,width:"1894",height:"1090"})),(0,n.kt)("p",null,"You get additional information about the transaction details while approving the transaction. Go ahead and approve the transaction."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Approve Transaction",src:a(369).Z,width:"3973",height:"1395"})),(0,n.kt)("p",null,"After verifying the information you can approve now."),(0,n.kt)("h2",{id:"step-4-view-the-transaction-on-blockexplorer"},"Step 4: View the transaction on Blockexplorer"),(0,n.kt)("p",null,"Once you hit approve on your wallet, you can come back to the lido widget and click on ",(0,n.kt)("strong",{parentName:"p"},"View on Solana Blockexplorer.")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:i.Z,alt:"View Tx",width:"500"})),(0,n.kt)("p",null,"This is useful as it tells you the current status of your transaction. In the block explorer, if you look at the ",(0,n.kt)("inlineCode",{parentName:"p"},"Confirmations")," field you can slowly see it increasing from 0 to 32. Once it reaches the MAX number of confirmations your transaction gets added to the blockchain"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Finally after 32 confirmations, our transaction gets confirmed")),(0,n.kt)("p",null,"You can now go back to the Lido widget and look at your updated stSOL balance. Just below the stSOL balance, you will also be able to see the amount of SOL you can get back for it a.k.a the exchange rate."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Update",src:a(1465).Z,width:"2376",height:"1168"})),(0,n.kt)("p",null,"Zooming into the widget we can observe the new SOL balance and the updated stSOL balance"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note 1: We had 2 SOL in the beginning and we staked 1 SOL. We should be left with 1 SOL but we had to pay an additional 0.0021 SOL as the rent for the new stSOL account that got created for us.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note 2: This rent is a one-time fee that won\u2019t reccur on the next staking transaction.")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:r,alt:"Updated Balance",width:"450"})),(0,n.kt)("h2",{id:"withdrawing-solana"},"Withdrawing Solana"),(0,n.kt)("p",null,"To withdraw click on the ",(0,n.kt)("strong",{parentName:"p"},"Unstake")," tab and enter the amount of stSOL that you would like to unstake in the field provided below."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"unstake-amount",src:a(4167).Z,width:"2532",height:"1328"})),(0,n.kt)("p",null,"Then click unstake and head over to your wallet to approve the transaction."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"unstake-transaction",src:a(308).Z,width:"2526",height:"1308"})),(0,n.kt)("p",null,"The Solana blockchain waits for 32 confirmations (called MAX Confirmations) before making a transaction 'final'. Once the transaction gets the ",(0,n.kt)("inlineCode",{parentName:"p"},"MAX Confirmations")," the Lido program splits off a stake account with the redeemed SOL amount and transfers it to you. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"unstake-successful",src:a(3130).Z,width:"2572",height:"1262"})),(0,n.kt)("p",null,"You then unstake those SOL and will receive liquid SOL after the deactivation period which lasts for approximately 2 epochs. For users that desire instant liquidity, the preferred option is to exchange stSOL on the open market, e.g. on the supported AMM pools on Saber and Raydium."),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://medium.com/chorus-one/introducing-lido-for-solana-8aa02db8503"},"Introducing Lido for Solana")," - Explaining the SOL liquid staking solution by Chorus One"))}h.isMDXComponent=!0},1599:(e,t,a)=>{a.p},3902:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/view_tx-dfd323a7dd1a452a2dc4876e8ac1b760.png"},9273:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/connect-3dc119fcf29f83cab7aff88398f35670.png"},8387:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/faqs-671274d0d5fdd0090752e3091275d9bf.png"},8574:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/interface-49238591196cf9e54fd5ad68297ec267.png"},8439:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/lido_params-537175b3683c562d73893a34ab7a7614.png"},1868:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/stake-f2349237ab1661f08b0cb0e988f5e5de.png"},4167:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/unstake-amount-7bb01c1db556314bc6797382c9af577c.png"},3130:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/unstake-successful-a1fd6fb114c97e369a3d224daf523da4.png"},308:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/unstake-transaction-5117356faee669f6fb7de9bfed28de17.png"},3043:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/widget-e2704ae984009eee59cfd911dc01736a.png"},2057:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/account_info_bl-beb019d470d3817a30105ee24e43cb17.png"},7658:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/approve1-d681a2fcd58395d883ccc8f2e87c1b2e.png"},4696:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/approve2-f119ab8224d19171ca04616320ef97bd.png"},369:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/approve_tx-e2303da6c64c986b3854ad36feabf41a.jpg"},8073:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/connect_dialog-2e9f83a1dda3c6dd2cb6dcd1d30b5668.png"},3481:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/ready-fac295ce66ad2805a3ae4af043b48823.jpg"},4129:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/staking-c1b410e45dd8106d431af88422d8282d.png"},9446:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/tx_params-85f6822765e8825c28c1669208e2664b.png"},1465:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/update-19375eb31602fa4386ebbc98729a875a.png"},7737:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/wallet_list-39504bbe1b201fb7b42532af1765cfc1.png"}}]);