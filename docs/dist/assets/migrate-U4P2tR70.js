import{u as a,j as e}from"./index-KZ_aprDi.js";import r from"./world-options-rL9m2RQA.js";import s from"./starknet-options-R1d2MmT6.js";import d from"./account-options-aa2v1903.js";import o from"./signer-options-raw-ofW96KGh.js";import h from"./signer-options-keystore-PdNWfyIi.js";const j=void 0;function n(t){const i={a:"a",br:"br",code:"code",div:"div",em:"em",figure:"figure",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(i.h2,{id:"sozo-migrate",children:["sozo migrate",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sozo-migrate",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"migrate"})," is used to perform the migration (deployment) process, declaring and deploying contracts as necessary to deploy or update the World."]}),`
`,e.jsxs(i.p,{children:["Changes made to the local World after the initial deployment, can easily be pushed to the remote counterpart by running ",e.jsx(i.code,{children:"sozo migrate --world <WORLD_ADDRESS>"})," with ",e.jsx(i.code,{children:"WORLD_ADDRESS"})," being the address of the remote World. In the background, ",e.jsx(i.code,{children:"migrate"})," will compute the diffs of the local and remote World, then, start constructing a migration strategy to determine, if any, which part of the local World needs to be pushed upstream."]}),`
`,e.jsxs(i.h3,{id:"usage",children:["USAGE",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(i.pre,{tabIndex:"0","data-language":"sh","data-theme":"github-dark-dimmed github-light",children:e.jsx(i.code,{"data-language":"sh","data-theme":"github-dark-dimmed github-light",style:{display:"grid"},children:e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"sozo"}),e.jsx(i.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" migrate [OPTIONS]"})]})})})}),`
`,e.jsxs(i.h3,{id:"options",children:["OPTIONS",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h4,{id:"general-options",children:["General Options",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#general-options",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"--name"})," ",e.jsx(i.em,{children:"NAME"}),e.jsx(i.br,{}),`
`,"    Name of the World. At the moment, the only usage for this option is to be used as a salt when deploying the World contract to avoid address conflicts. This option is ",e.jsx(i.strong,{children:"required"})," when performing the initial migration of the World."]}),`
`,e.jsxs(i.h4,{id:"world-options",children:["World Options",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#world-options",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(r,{}),`
`,e.jsxs(i.h4,{id:"starknet-options",children:["Starknet Options",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#starknet-options",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s,{}),`
`,e.jsxs(i.h4,{id:"account-options",children:["Account Options",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#account-options",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(d,{}),`
`,e.jsxs(i.h4,{id:"signer-options---raw",children:["Signer Options - Raw",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signer-options---raw",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(o,{}),`
`,e.jsxs(i.h4,{id:"signer-options---keystore",children:["Signer Options - Keystore",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signer-options---keystore",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(h,{}),`
`,e.jsxs(i.h3,{id:"examples",children:["EXAMPLES",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:"Deploying your World for the first time to a local Katana node"}),`
`]}),`
`,e.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(i.pre,{tabIndex:"0","data-language":"sh","data-theme":"github-dark-dimmed github-light",children:e.jsx(i.code,{"data-language":"sh","data-theme":"github-dark-dimmed github-light",style:{display:"grid"},children:e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"sozo"}),e.jsx(i.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" migrate --name ohayo --rpc-url http://localhost:5050"})]})})})}),`
`,e.jsxs(i.ol,{start:"2",children:[`
`,e.jsx(i.li,{children:"Updating a remote World after making some changes"}),`
`]}),`
`,e.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(i.pre,{tabIndex:"0","data-language":"sh","data-theme":"github-dark-dimmed github-light",children:e.jsx(i.code,{"data-language":"sh","data-theme":"github-dark-dimmed github-light",style:{display:"grid"},children:e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"sozo"}),e.jsx(i.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" migrate --world "}),e.jsx(i.span,{style:{"--shiki-dark":"#6CB6FF","--shiki-light":"#005CC5"},children:"0x123456"})]})})})}),`
`,e.jsxs(i.ol,{start:"3",children:[`
`,e.jsxs(i.li,{children:["Deploying your World using ",e.jsx(i.a,{href:"/Users/os/Documents/code/dojo/book/docs/pages/toolchain/sozo/common-options/profile",children:"profile options"})]}),`
`]}),`
`,e.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(i.pre,{tabIndex:"0","data-language":"sh","data-theme":"github-dark-dimmed github-light",children:e.jsx(i.code,{"data-language":"sh","data-theme":"github-dark-dimmed github-light",style:{display:"grid"},children:e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"sozo"}),e.jsx(i.span,{style:{"--shiki-dark":"#6CB6FF","--shiki-light":"#005CC5"},children:" --profile"}),e.jsx(i.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" dev migrate"})]})})})})]})}function m(t={}){const{wrapper:i}={...a(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}export{m as default,j as frontmatter};
