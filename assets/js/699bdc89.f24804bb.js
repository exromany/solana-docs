"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7563],{3905:(n,t,e)=>{e.d(t,{Zo:()=>l,kt:()=>m});var a=e(7294);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function s(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function o(n,t){if(null==n)return{};var e,a,r=function(n,t){if(null==n)return{};var e,a,r={},s=Object.keys(n);for(a=0;a<s.length;a++)e=s[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(a=0;a<s.length;a++)e=s[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var c=a.createContext({}),u=function(n){var t=a.useContext(c),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},l=function(n){var t=u(n.components);return a.createElement(c.Provider,{value:t},n.children)},d={inlineCode:"code",wrapper:function(n){var t=n.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(n,t){var e=n.components,r=n.mdxType,s=n.originalType,c=n.parentName,l=o(n,["components","mdxType","originalType","parentName"]),p=u(e),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return e?a.createElement(f,i(i({ref:t},l),{},{components:e})):a.createElement(f,i({ref:t},l))}));function m(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var s=e.length,i=new Array(s);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=n,o.mdxType="string"==typeof n?n:r,i[1]=o;for(var u=2;u<s;u++)i[u]=e[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}p.displayName="MDXCreateElement"},551:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=e(7462),r=(e(7294),e(3905));const s={},i="UnStake",o={unversionedId:"frontend-integration/manual-instructions/v1/unstake",id:"frontend-integration/manual-instructions/v1/unstake",title:"UnStake",description:"We have already migrated to second version of procotol (solido), so these instructions aren't working anymore, please see migration guide for migrating to version 2.",source:"@site/docs/frontend-integration/manual-instructions/v1/unstake.md",sourceDirName:"frontend-integration/manual-instructions/v1",slug:"/frontend-integration/manual-instructions/v1/unstake",permalink:"/frontend-integration/manual-instructions/v1/unstake",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solidoSidebar",previous:{title:"Stake",permalink:"/frontend-integration/manual-instructions/v1/stake"},next:{title:"Stake",permalink:"/frontend-integration/manual-instructions/v2/stake"}},c={},u=[{value:"Step 1: Fetching Lido program state to retrieve relevant data",id:"step-1-fetching-lido-program-state-to-retrieve-relevant-data",level:2},{value:"Step 2: Sign new Transaction",id:"step-2-sign-new-transaction",level:2},{value:"Step 3: Create Withdraw Instruction",id:"step-3-create-withdraw-instruction",level:2},{value:"Step 4: Create deactivate transaction &amp; add its instructions to transaction",id:"step-4-create-deactivate-transaction--add-its-instructions-to-transaction",level:2}],l={toc:u};function d(n){let{components:t,...e}=n;return(0,r.kt)("wrapper",(0,a.Z)({},l,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unstake"},"UnStake"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"We have already migrated to second version of procotol (solido), so these instructions aren't working anymore, please see ",(0,r.kt)("a",{parentName:"p",href:"/frontend-integration/manual-instructions"},"migration guide")," for migrating to version 2.\nOr see ",(0,r.kt)("a",{parentName:"p",href:"/frontend-integration/manual-instructions/v2/unstake"},"new version")," if you are new.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We highly recommend use our ",(0,r.kt)("a",{parentName:"p",href:"/frontend-integration/sdk"},"SDK"),", so we could support you better in case of some problems.\nAlso, integration with SDK is much easier & more simple than manually.")),(0,r.kt)("h2",{id:"step-1-fetching-lido-program-state-to-retrieve-relevant-data"},"Step 1: Fetching Lido program state to retrieve relevant data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const accountInfo = await connection.getAccountInfo(LIDO_ADDRESS);\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Use getAccountInfo(LIDO_ADDRESS) function from this library to fetch the Lido program data (in the form of a buffer).")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a borsh schema to deserialize the data:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Lido {\n    constructor(data) {\n      Object.assign(this, data);\n    }\n  }\n\n  class SeedRange {\n    constructor(data) {\n      Object.assign(this, data);\n    }\n  }\n\n  class Validator {\n    constructor(data) {\n      Object.assign(this, data);\n    }\n  }\n\n  class PubKeyAndEntry {\n    constructor(data) {\n      Object.assign(this, data);\n    }\n  }\n\n  class PubKeyAndEntryMaintainer {\n    constructor(data) {\n      Object.assign(this, data);\n    }\n  }\n\n  class RewardDistribution {\n    constructor(data) {\n      Object.assign(this, data);\n    }\n  }\n\n  class FeeRecipients {\n    constructor(data) {\n      Object.assign(this, data);\n    }\n  }\n\n  class Validators {\n    constructor(data) {\n      Object.assign(this, data);\n    }\n  }\n\n  class Maintainers {\n    constructor(data) {\n      Object.assign(this, data);\n    }\n  }\n\n  class ExchangeRate {\n    constructor(data) {\n      Object.assign(this, data);\n    }\n  }\n\n  class Metrics {\n    constructor(data) {\n      Object.assign(this, data);\n    }\n  }\n\n  class LamportsHistogram {\n    constructor(data) {\n      Object.assign(this, data);\n    }\n  }\n\n  class WithdrawMetric {\n    constructor(data) {\n      Object.assign(this, data);\n    }\n  }\n\n  const schema = new Map([\n    [\n      ExchangeRate,\n      {\n        kind: 'struct',\n        fields: [\n          ['computed_in_epoch', 'u64'],\n          ['st_sol_supply', 'u64'],\n          ['sol_balance', 'u64'],\n        ],\n      },\n    ],\n    [\n      LamportsHistogram,\n      {\n        kind: 'struct',\n        fields: [\n          ['counts1', 'u64'],\n          ['counts2', 'u64'],\n          ['counts3', 'u64'],\n          ['counts4', 'u64'],\n          ['counts5', 'u64'],\n          ['counts6', 'u64'],\n          ['counts7', 'u64'],\n          ['counts8', 'u64'],\n          ['counts9', 'u64'],\n          ['counts10', 'u64'],\n          ['counts11', 'u64'],\n          ['counts12', 'u64'],\n          ['total', 'u64'],\n        ],\n      },\n    ],\n    [\n      WithdrawMetric,\n      {\n        kind: 'struct',\n        fields: [\n          ['total_st_sol_amount', 'u64'],\n          ['total_sol_amount', 'u64'],\n          ['count', 'u64'],\n        ],\n      },\n    ],\n    [\n      Metrics,\n      {\n        kind: 'struct',\n        fields: [\n          ['fee_treasury_sol_total', 'u64'],\n          ['fee_validation_sol_total', 'u64'],\n          ['fee_developer_sol_total', 'u64'],\n          ['st_sol_appreciation_sol_total', 'u64'],\n          ['fee_treasury_st_sol_total', 'u64'],\n          ['fee_validation_st_sol_total', 'u64'],\n          ['fee_developer_st_sol_total', 'u64'],\n          ['deposit_amount', LamportsHistogram],\n          ['withdraw_amount', WithdrawMetric],\n        ],\n      },\n    ],\n    [\n      SeedRange,\n      {\n        kind: 'struct',\n        fields: [\n          ['begin', 'u64'],\n          ['end', 'u64'],\n        ],\n      },\n    ],\n    [\n      Validator,\n      {\n        kind: 'struct',\n        fields: [\n          ['fee_credit', 'u64'],\n          ['fee_address', 'u256'],\n          ['stake_seeds', SeedRange],\n          ['unstake_seeds', SeedRange],\n          ['stake_accounts_balance', 'u64'],\n          ['unstake_accounts_balance', 'u64'],\n          ['active', 'u8'],\n        ],\n      },\n    ],\n    [\n      PubKeyAndEntry,\n      {\n        kind: 'struct',\n        fields: [\n          ['pubkey', 'u256'],\n          ['entry', Validator],\n        ],\n      },\n    ],\n    [\n      PubKeyAndEntryMaintainer,\n      {\n        kind: 'struct',\n        fields: [\n          ['pubkey', 'u256'],\n          ['entry', [0]],\n        ],\n      },\n    ],\n    [\n      RewardDistribution,\n      {\n        kind: 'struct',\n        fields: [\n          ['treasury_fee', 'u32'],\n          ['validation_fee', 'u32'],\n          ['developer_fee', 'u32'],\n          ['st_sol_appreciation', 'u32'],\n        ],\n      },\n    ],\n    [\n      FeeRecipients,\n      {\n        kind: 'struct',\n        fields: [\n          ['treasury_account', 'u256'],\n          ['developer_account', 'u256'],\n        ],\n      },\n    ],\n    [\n      Validators,\n      {\n        kind: 'struct',\n        fields: [\n          ['entries', [PubKeyAndEntry]],\n          ['maximum_entries', 'u32'],\n        ],\n      },\n    ],\n    [\n      Maintainers,\n      {\n        kind: 'struct',\n        fields: [\n          ['entries', [PubKeyAndEntryMaintainer]],\n          ['maximum_entries', 'u32'],\n        ],\n      },\n    ],\n    [\n      Lido,\n      {\n        kind: 'struct',\n        fields: [\n          ['lido_version', 'u8'],\n\n          ['manager', 'u256'],\n\n          ['st_sol_mint', 'u256'],\n\n          ['exchange_rate', ExchangeRate],\n\n          ['sol_reserve_authority_bump_seed', 'u8'],\n          ['stake_authority_bump_seed', 'u8'],\n          ['mint_authority_bump_seed', 'u8'],\n          ['rewards_withdraw_authority_bump_seed', 'u8'],\n\n          ['reward_distribution', RewardDistribution],\n\n          ['fee_recipients', FeeRecipients],\n\n          ['metrics', Metrics],\n\n          ['validators', Validators],\n\n          ['maintainers', Maintainers],\n        ],\n      },\n    ],\n  ]);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deserialize the data using above schema:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { deserializeUnchecked } from 'borsh';\n// We use deserializeUnchecked because Validators and Maintainers entries' length varies with time\n// It deserializes object from bytes using schema, without checking the length read\nconst deserializedAccountInfo = deserializeUnchecked(\n  schema,\n  Lido,\n  accountInfo.data,\n);\n")),(0,r.kt)("h2",{id:"step-2-sign-new-transaction"},"Step 2: Sign new Transaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const newStakeAccount = Keypair.generate();\n// Create new transaction\nconst transaction = new Transaction({ feePayer: payer });\n// Set recent blockhash\nconst { blockhash } = await connection.getLatestBlockhash();\ntransaction.recentBlockhash = blockhash;\n")),(0,r.kt)("h2",{id:"step-3-create-withdraw-instruction"},"Step 3: Create Withdraw Instruction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create the buffer layout in the format of ",(0,r.kt)("inlineCode",{parentName:"li"},"{ instruction_code: 1 byte, amount: 8 bytes}")),(0,r.kt)("li",{parentName:"ul"},"Encode the deposit data using the buffer layout:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import * as BufferLayout from 'buffer-layout';\nimport BN from 'bn.js';\n\nconst dataLayout = BufferLayout.struct([BufferLayout.u8('instruction'), BufferLayout.nu64('amount')]);\n\nconst data = Buffer.alloc(dataLayout.span);\ndataLayout.encode(\n  {\n    instruction: 2, // withdraw instruction\n    amount: new BN(amount),\n  },\n  data,\n);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set all keys for the deposit instruction using the program data we fetch earlier:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { TOKEN_PROGRAM_ID } from '@solana/spl-token';\nimport {\n  Keypair,\n  PublicKey,\n  StakeProgram,\n  SystemProgram,\n  SYSVAR_CLOCK_PUBKEY,\n} from '@solana/web3.js';\n\nconst calculateStakeAuthority = async (lidoAddress, programId) => {\n  const bufferArray = [lidoAddress.toBuffer(), Buffer.from('stake_authority')];\n\n  const mint = await PublicKey.findProgramAddress(bufferArray, programId);\n\n  return mint[0];\n};\n\nconst calculateStakeAccountAddress = async (lidoAddress, programId, validatorVoteAccount, seed) => {\n  const bufferArray = [\n    lidoAddress.toBuffer(),\n    validatorVoteAccount.toBuffer(),\n    Buffer.from('validator_stake_account'),\n    seed.toArray('le', 8),\n  ];\n\n  const [stakeAccountAddress] = await PublicKey.findProgramAddress(bufferArray, programId);\n\n  return stakeAccountAddress;\n};\n\nconst getHeaviestValidator = async (validatorEntries) => {\n  const sortedValidatorEntries = validatorEntries.sort(\n    ({ entry: validatorA }, { entry: validatorB }) =>\n      validatorB.stake_accounts_balance.toNumber() - validatorA.stake_accounts_balance.toNumber(),\n  );\n\n  const heaviestValidator = sortedValidatorEntries[0];\n\n  return heaviestValidator;\n};\n\nconst stakeAuthority = await calculateStakeAuthority(lidoAddress, programId);\nconst validator = await getHeaviestValidator(accountInfo.validators.entries);\n\nconst validatorStakeAccount = await calculateStakeAccountAddress(\n  lidoAddress,\n  programId,\n  new PublicKey(validator.pubkey.toArray('le')),\n  validator.entry.stake_seeds.begin,\n);\n\nconst keys = [\n  {\n    pubkey: lidoAddress,\n    isSigner: false,\n    isWritable: true,\n  },\n  { pubkey: payer, isSigner: true, isWritable: false },\n  {\n    pubkey: stSolAddress,\n    isSigner: false,\n    isWritable: true,\n  },\n  {\n    pubkey: stSolMint,\n    isSigner: false,\n    isWritable: true,\n  },\n  {\n    pubkey: new PublicKey(validator.pubkey.toArray('le')),\n    isSigner: false,\n    isWritable: false,\n  },\n  { pubkey: validatorStakeAccount, isSigner: false, isWritable: true },\n  {\n    pubkey: newStakeAccount.publicKey, // step 2 variable\n    isSigner: true,\n    isWritable: true,\n  },\n  { pubkey: stakeAuthority, isSigner: false, isWritable: false },\n  { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },\n  { pubkey: SYSVAR_CLOCK_PUBKEY, isSigner: false, isWritable: false },\n  { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },\n  { pubkey: StakeProgram.programId, isSigner: false, isWritable: false },\n];\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add the instruction to the transaction:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"transaction.add(\n  new TransactionInstruction({\n    keys,\n    programId: PROGRAM_ID,\n    data,\n  }),\n);\n")),(0,r.kt)("h2",{id:"step-4-create-deactivate-transaction--add-its-instructions-to-transaction"},"Step 4: Create deactivate transaction & add its instructions to transaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { StakeProgram } from '@solana/web3.js';\n\nconst deactivateTransaction = StakeProgram.deactivate({\n    authorizedPubkey: payer,\n    stakePubkey: newStakeAccount.publicKey,\n  });\n\ntransaction.add(...deactivateTransaction.instructions);\n\ntransaction.partialSign(newStakeAccount); // step 2 variables\n")))}d.isMDXComponent=!0}}]);