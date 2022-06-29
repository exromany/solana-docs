(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8248],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(h,s(s({ref:n},u),{},{components:t})):a.createElement(h,s({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4607:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var a=t(2122),r=t(9756),o=(t(7294),t(3905)),s={},i={unversionedId:"development/frontend-integration",id:"development/frontend-integration",isDocsHomePage:!1,title:"Integrating with Lido",description:"Live integration on Mainnet - http://solana.lido.fi/",source:"@site/docs/development/frontend-integration.md",sourceDirName:"development",slug:"/development/frontend-integration",permalink:"/solido/development/frontend-integration",version:"current",frontMatter:{},sidebar:"solidoSidebar",previous:{title:"Buiding a Docker image locally",permalink:"/solido/development/building-docker-image"},next:{title:"Price oracle",permalink:"/solido/development/price-oracle"}},c=[{value:"Step 1 : Connecting to a Solana wallet",id:"step-1--connecting-to-a-solana-wallet",children:[]},{value:"Step 2 : Fetching Lido program state to retrieve relevant data",id:"step-2--fetching-lido-program-state-to-retrieve-relevant-data",children:[]},{value:"Step 3 : Ensure an stSOL recipient account exists",id:"step-3--ensure-an-stsol-recipient-account-exists",children:[{value:"Fetch all accounts for the stSOL mint of the staker",id:"fetch-all-accounts-for-the-stsol-mint-of-the-staker",children:[]},{value:"If no account exists",id:"if-no-account-exists",children:[]}]},{value:"Step 4 : Create Deposit Instruction",id:"step-4--create-deposit-instruction",children:[]},{value:"Step 5 : Sign and send Transaction",id:"step-5--sign-and-send-transaction",children:[]},{value:"Useful Nuggets",id:"useful-nuggets",children:[]}],l={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Live integration on Mainnet")," - ",(0,o.kt)("a",{parentName:"p",href:"https://solana.lido.fi"},"http://solana.lido.fi/")),(0,o.kt)("p",null,"In this document, we walkthrough the steps to integrate a web application with the Lido deposit function."),(0,o.kt)("p",null,"This guide assumes the web application is written in JavaScript / Typescript and has ready access to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},"@solana/web3.js")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana-program-library"},"@solana/spl-token"),"  library."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The code snippets present in this doc might not be up to date with the current codebase. Please verify once before using."))),(0,o.kt)("h2",{id:"step-1--connecting-to-a-solana-wallet"},"Step 1 : Connecting to a Solana wallet"),(0,o.kt)("p",null,"Solana wallets that are known to work well with the Lido program are Phantom, Solflare, Ledger, Sollet and Solong."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The wallet should expose the following spec",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"connect")," function that triggers a connection request to the wallet"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"publicKey")," to retrieve the public key of the connected account"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"signTransaction")," function to send the transaction"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"disconnect")," function to trigger a disconnection request"),(0,o.kt)("li",{parentName:"ul"},'Optional -  throws "connect" & "disconnect" events'))),(0,o.kt)("li",{parentName:"ul"},"Add the wallet's ",(0,o.kt)("inlineCode",{parentName:"li"},"{ displayName, url & icon }")," to the wallets array in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ChorusOne/staking-widget-solana-lido/blob/develop/components/SolanaConnectWalletModal.jsx#L103"},"SolanaConnectWalletModal.jsx")),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ChorusOne/staking-widget-solana-lido/blob/develop/contexts/wallet.jsx#L27"},"activate")," and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ChorusOne/staking-widget-solana-lido/blob/develop/contexts/wallet.jsx#L119"},"deactivate")," handlers for the new wallet in the ",(0,o.kt)("inlineCode",{parentName:"li"},"wallet.jsx")," file"),(0,o.kt)("li",{parentName:"ul"},"You can now access the wallet using the ",(0,o.kt)("inlineCode",{parentName:"li"},"useWallet")," hook")),(0,o.kt)("p",null,"The next step assumes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a wallet is loaded in the interface "),(0,o.kt)("li",{parentName:"ul"},"and you have access to the variable ",(0,o.kt)("inlineCode",{parentName:"li"},"LIDO_ADDRESS"),"  which is the address of the account that stores the state of the deployed Lido Program. ")),(0,o.kt)("h2",{id:"step-2--fetching-lido-program-state-to-retrieve-relevant-data"},"Step 2 : Fetching Lido program state to retrieve relevant data"),(0,o.kt)("p",null,"Install and require ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},"@solana/web3.js")," library in your program "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @solana/web3.js`\n")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"getAccountInfo(LIDO_ADDRESS)")," ",(0,o.kt)("a",{parentName:"p",href:"https://solana-labs.github.io/solana-web3.js/classes/Connection.html#getAccountInfo"},"function")," from this library to fetch the Lido program data (in the form of a buffer) "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const accountInfo = await connection.getAccountInfo(LIDO_ADDRESS);\n")),(0,o.kt)("p",null,"The data structure storing the Lido ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ChorusOne/solido/blob/v1.0.0/program/src/state.rs#L188"},"state(v1.0.0)")," has the form "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'pub struct Lido {\n    /// Version number for the Lido\n    pub lido_version: u8,\n\n    /// Manager of the Lido program, able to execute administrative functions\n    #[serde(serialize_with = "serialize_b58")]\n    pub manager: Pubkey,\n\n    /// The SPL Token mint address for stSOL.\n    #[serde(serialize_with = "serialize_b58")]\n    pub st_sol_mint: Pubkey,\n\n    /// Exchange rate to use when depositing.\n    pub exchange_rate: ExchangeRate,\n\n    /// Bump seeds for signing messages on behalf of the authority\n    pub sol_reserve_account_bump_seed: u8,\n    pub stake_authority_bump_seed: u8,\n    pub mint_authority_bump_seed: u8,\n    pub rewards_withdraw_authority_bump_seed: u8,\n\n    /// How rewards are distributed.\n    pub reward_distribution: RewardDistribution,\n\n    /// Accounts of the fee recipients.\n    pub fee_recipients: FeeRecipients,\n\n    /// Metrics for informational purposes.\n    ///\n    /// Metrics are only written to, no program logic should depend on these values.\n    /// An off-chain program can load a snapshot of the `Lido` struct, and expose\n    /// these metrics.\n    pub metrics: Metrics,\n\n    /// Map of enrolled validators, maps their vote account to `Validator` details.\n    pub validators: Validators,\n\n    /// The set of maintainers.\n    ///\n    /// Maintainers are granted low security risk privileges. Maintainers are\n    /// expected to run the maintenance daemon, that invokes the maintenance\n    /// operations. These are gated on the signer being present in this set.\n    /// In the future we plan to make maintenance operations callable by anybody.\n    pub maintainers: Maintainers,\n}\n')),(0,o.kt)("p",null,"Create a borsh schema to deserialize the data. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class Lido {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nclass SeedRange {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nclass Validator {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nclass PubKeyAndEntry {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nclass PubKeyAndEntryMaintainer {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nclass RewardDistribution {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nclass FeeRecipients {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nclass Validators {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nclass Maintainers {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nclass ExchangeRate {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nclass Metrics {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nclass LamportsHistogram {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nclass WithdrawMetric {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nconst schema = new Map([\n  [\n    ExchangeRate,\n    {\n      kind: 'struct',\n      fields: [\n        ['computed_in_epoch', 'u64'],\n        ['st_sol_supply', 'u64'],\n        ['sol_balance', 'u64'],\n      ],\n    },\n  ],\n  [\n    LamportsHistogram,\n    {\n      kind: 'struct',\n      fields: [\n        ['counts1', 'u64'],\n        ['counts2', 'u64'],\n        ['counts3', 'u64'],\n        ['counts4', 'u64'],\n        ['counts5', 'u64'],\n        ['counts6', 'u64'],\n        ['counts7', 'u64'],\n        ['counts8', 'u64'],\n        ['counts9', 'u64'],\n        ['counts10', 'u64'],\n        ['counts11', 'u64'],\n        ['counts12', 'u64'],\n        ['total', 'u64'],\n      ],\n    },\n  ],\n  [\n    WithdrawMetric,\n    {\n      kind: 'struct',\n      fields: [\n        ['total_st_sol_amount', 'u64'],\n        ['total_sol_amount', 'u64'],\n        ['count', 'u64'],\n      ],\n    },\n  ],\n  [\n    Metrics,\n    {\n      kind: 'struct',\n      fields: [\n        ['fee_treasury_sol_total', 'u64'],\n        ['fee_validation_sol_total', 'u64'],\n        ['fee_developer_sol_total', 'u64'],\n        ['st_sol_appreciation_sol_total', 'u64'],\n        ['fee_treasury_st_sol_total', 'u64'],\n        ['fee_validation_st_sol_total', 'u64'],\n        ['fee_developer_st_sol_total', 'u64'],\n        ['deposit_amount', LamportsHistogram],\n        ['withdraw_amount', WithdrawMetric],\n      ],\n    },\n  ],\n  [\n    SeedRange,\n    {\n      kind: 'struct',\n      fields: [\n        ['begin', 'u64'],\n        ['end', 'u64'],\n      ],\n    },\n  ],\n  [\n    Validator,\n    {\n      kind: 'struct',\n      fields: [\n        ['fee_credit', 'u64'],\n        ['fee_address', 'u256'],\n        ['stake_seeds', SeedRange],\n        ['unstake_seeds', SeedRange],\n        ['stake_accounts_balance', 'u64'],\n        ['unstake_accounts_balance', 'u64'],\n        ['active', 'u8'],\n      ],\n    },\n  ],\n  [\n    PubKeyAndEntry,\n    {\n      kind: 'struct',\n      fields: [\n        ['pubkey', 'u256'],\n        ['entry', Validator],\n      ],\n    },\n  ],\n  [\n    PubKeyAndEntryMaintainer,\n    {\n      kind: 'struct',\n      fields: [\n        ['pubkey', 'u256'],\n        ['entry', [0]],\n      ],\n    },\n  ],\n  [\n    RewardDistribution,\n    {\n      kind: 'struct',\n      fields: [\n        ['treasury_fee', 'u32'],\n        ['validation_fee', 'u32'],\n        ['developer_fee', 'u32'],\n        ['st_sol_appreciation', 'u32'],\n      ],\n    },\n  ],\n  [\n    FeeRecipients,\n    {\n      kind: 'struct',\n      fields: [\n        ['treasury_account', 'u256'],\n        ['developer_account', 'u256'],\n      ],\n    },\n  ],\n  [\n    Validators,\n    {\n      kind: 'struct',\n      fields: [\n        ['entries', [PubKeyAndEntry]],\n        ['maximum_entries', 'u32'],\n      ],\n    },\n  ],\n  [\n    Maintainers,\n    {\n      kind: 'struct',\n      fields: [\n        ['entries', [PubKeyAndEntryMaintainer]],\n        ['maximum_entries', 'u32'],\n      ],\n    },\n  ],\n  [\n    Lido,\n    {\n      kind: 'struct',\n      fields: [\n        ['lido_version', 'u8'],\n\n        ['manager', 'u256'],\n\n        ['st_sol_mint', 'u256'],\n\n        ['exchange_rate', ExchangeRate],\n\n        ['sol_reserve_authority_bump_seed', 'u8'],\n        ['stake_authority_bump_seed', 'u8'],\n        ['mint_authority_bump_seed', 'u8'],\n        ['rewards_withdraw_authority_bump_seed', 'u8'],\n\n        ['reward_distribution', RewardDistribution],\n\n        ['fee_recipients', FeeRecipients],\n\n        ['metrics', Metrics],\n\n        ['validators', Validators],\n\n        ['maintainers', Maintainers],\n      ],\n    },\n  ],\n]);\n")),(0,o.kt)("p",null,"Deserialize the data using the above schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { deserializeUnchecked } from 'borsh';\n// We use deserializeUnchecked because Validators and Maintainers entries' length varies with time\n// It deserializes object from bytes using schema, without checking the length read\n\nconst deserializedAccountInfo = deserializeUnchecked(\n  schema,\n  Lido,\n  accountInfo.data,\n);\n")),(0,o.kt)("p",null,"Calculate the reserve authority and mint authority address by passing ",(0,o.kt)("inlineCode",{parentName:"p"},"LIDO_ADDRESS")," buffer and ",(0,o.kt)("inlineCode",{parentName:"p"},"reserve_account")," for reserve authority and ",(0,o.kt)("inlineCode",{parentName:"p"},"mint_authority")," for mint authority buffer as seeds to ",(0,o.kt)("a",{parentName:"p",href:"https://solana-labs.github.io/solana-web3.js/classes/PublicKey.html#findProgramAddress"},"findProgramAddress()")," along with the ",(0,o.kt)("inlineCode",{parentName:"p"},"PROGRAM_ID")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { PublicKey } from '@solana/web3.js';\n\n// Reserve authority\nconst bufferArray = [\n  LIDO_ADDRESS.toBuffer(),\n  Buffer.from('reserve_account'),\n];\nconst [reserveAccount] = await PublicKey.findProgramAddress(bufferArray, PROGRAM_ID);\n\n// Mint authority\nconst bufferArray = [\n  LIDO_ADDRESS.toBuffer(),\n  Buffer.from('mint_authority'),\n];\nconst [mintAuthority] = await PublicKey.findProgramAddress(bufferArray, PROGRAM_ID);\n")),(0,o.kt)("h2",{id:"step-3--ensure-an-stsol-recipient-account-exists"},"Step 3 : Ensure an stSOL recipient account exists"),(0,o.kt)("p",null,"The Deposit instruction requires a recipient address - that will receive stSOL as liquid representation of the deposited SOL. "),(0,o.kt)("p",null,"Before we make a deposit from a user's wallet, we need to make sure such a recipient account exists - for the depositor to receive stSOL. "),(0,o.kt)("h3",{id:"fetch-all-accounts-for-the-stsol-mint-of-the-staker"},"Fetch all accounts for the stSOL mint of the staker"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If at least one such account exists, select the first one and proceed to the next step"),(0,o.kt)("li",{parentName:"ul"},"If no such account exists, continue with this section.")),(0,o.kt)("h3",{id:"if-no-account-exists"},"If no account exists"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fetch the associated token account for the payer account"),(0,o.kt)("li",{parentName:"ul"},"Add the instruction to create the new associated token account"),(0,o.kt)("li",{parentName:"ul"},"Return the associated token account's public key")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { AccountLayout, Token, ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } from '@solana/spl-token';\n\nconst { value: accounts } = await connection.getTokenAccountsByOwner(payer, {\n  mint: stSolMint,\n});\n\nconst recipient = accounts[0];\n\nif (recipient) {\n  return recipient.pubkey;\n}\n\n// Creating the associated token account if not already exist\nconst associatedStSolAccount = await Token.getAssociatedTokenAddress(\n  ASSOCIATED_TOKEN_PROGRAM_ID,\n  TOKEN_PROGRAM_ID,\n  stSolMint,\n  payer,\n);\n\ntransaction.add(\n  Token.createAssociatedTokenAccountInstruction(\n    ASSOCIATED_TOKEN_PROGRAM_ID,\n    TOKEN_PROGRAM_ID,\n    stSolMint,\n    associatedStSolAccount,\n    payer,\n    payer,\n  ),\n);\n\nreturn associatedStSolAccount;\n")),(0,o.kt)("h2",{id:"step-4--create-deposit-instruction"},"Step 4 : Create Deposit Instruction"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create the buffer layout in the format of ",(0,o.kt)("inlineCode",{parentName:"p"},"{ instruction_code: 1 byte, amount: 8 bytes}"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Encode the deposit data using the buffer layout"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import * as BufferLayout from 'buffer-layout';\nimport BN from 'bn.js';\n\nconst dataLayout = BufferLayout.struct([\n  BufferLayout.u8('instruction'),\n  BufferLayout.nu64('amount'), // little endian\n]);\n\nconst data = Buffer.alloc(dataLayout.span);\ndataLayout.encode(\n  {\n    instruction: 1, // 1 for deposit instruction\n    amount: new BN(amount),\n  },\n  data,\n);\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set all ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ChorusOne/solido/blob/v1.0.0/program/src/instruction.rs#L167"},"keys")," for the deposit instruction using the program data we fetch earlier"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const keys = [\n  {\n    pubkey: lidoAddress,\n    isSigner: false,\n    isWritable: true,\n  },\n  { pubkey: payer, isSigner: true, isWritable: true },\n  {\n    pubkey: recipient,\n    isSigner: false,\n    isWritable: true,\n  },\n  {\n    pubkey: stSolMint,\n    isSigner: false,\n    isWritable: true,\n  },\n  { pubkey: reserveAccount, isSigner: false, isWritable: true },\n  { pubkey: mintAuthority, isSigner: false, isWritable: false },\n  { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },\n  { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },\n];\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add the instruction to the transaction"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"transaction.add(\n  new TransactionInstruction({\n    keys,\n    programId: PROGRAM_ID,\n    data,\n  }),\n);\n")))),(0,o.kt)("h2",{id:"step-5--sign-and-send-transaction"},"Step 5 : Sign and send Transaction"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new transaction with the fee payer as the staker"),(0,o.kt)("li",{parentName:"ul"},"Add all the above instructions in the sequence"),(0,o.kt)("li",{parentName:"ul"},"If we have created a new stSOL, partially sign the transaction using the ",(0,o.kt)("inlineCode",{parentName:"li"},"newAccount's keypair")),(0,o.kt)("li",{parentName:"ul"},"Sign the transaction"),(0,o.kt)("li",{parentName:"ul"},"Send the transaction")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Create new transaction\nconst transaction = new Transaction({ feePayer: payer });\n// Set recent blockhash\nconst { blockhash } = await connection.getRecentBlockhash();\ntransaction.recentBlockhash = blockhash;\n\n// Add all the above instructions\nconst recipient = await ensureTokenAccount(\n  connection,\n  transaction,\n  payer,\n  stSolMint\n);\n\nawait depositInstruction(payer, amount, recipient, transaction, config);\n\n// Sign the transaction using the wallet\nconst signed = wallet.signTransaction(transaction);\n\n// Send the serialized signed transaction to the network\nconnection.sendRawTransaction(\n  signed.serialize(),\n);\n")),(0,o.kt)("h2",{id:"useful-nuggets"},"Useful Nuggets"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"How to get the total number of ",(0,o.kt)("inlineCode",{parentName:"strong"},"stSOL")," holders?")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Filter out stSOL token addresses\nconst memcmpFilter = { memcmp: { bytes: ST_SOL_MINT.toString(), offset: 0 } };\nconst config = {\n  filters: [{ dataSize: 165 }, memcmpFilter],\n  encoding: 'jsonParsed',\n};\n\n// Get program accounts using the above filters\nconst accounts = await connection.getParsedProgramAccounts(\n  TOKEN_PROGRAM_ID,\n  config,\n);\n\nconst totalStSolHolders = accounts.length;\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"How to get the stSOL/SOL exchange rate for the current epoch?")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"  const accountInfo = await getAccountInfo(connection, lidoAddress);\n\n  // Fetch SOL and stSOL balance\n  const totalSolInLamports = accountInfo.exchange_rate.sol_balance.toNumber();\n  const stSolSupplyInLamports =\n    accountInfo.exchange_rate.st_sol_supply.toNumber();\n\n// Calculate the stSOL/SOL exchange rate\nconst exchangeRate = totalStSolSupplyInLamports/totalSolInLamports;\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"How to get the current amount of SOL staked with Lido?")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"  const accountInfo = await getAccountInfo(connection, lidoAddress);\n\n  // Find reserve account pubkey\n  const bufferArray = [\n    lidoAddress.toBuffer(),\n    Buffer.from('reserve_account'),\n  ];\n  const [reserveAccount] = await PublicKey.findProgramAddress(bufferArray, programId);\n\n  // Fetch balance and rent for reserve account\n  const reserveAccountInfo = await connection.getAccountInfo(reserveAccount);\n  const reserveAccountRent = await connection.getMinimumBalanceForRentExemption(\n    reserveAccountInfo.data.byteLength,\n  );\n  const reserveAccountBalanceInLamports =\n    reserveAccountInfo.lamports - reserveAccountRent;\n\n  const validatorsStakeAccountsBalanceInLamports = accountInfo.validators.entries\n    .map((pubKeyAndEntry) => pubKeyAndEntry.entry)\n    .map((validator) => validator.stake_accounts_balance.toNumber())\n    .reduce((acc, current) => acc + current, 0);\n\n  const totalStakedInLamports = reserveAccountBalanceInLamports + validatorsStakeAccountsBalanceInLamports;\n")))))}u.isMDXComponent=!0}}]);