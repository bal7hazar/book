import{u as t,j as i}from"./index-KZ_aprDi.js";const h=void 0;function n(e){const s={a:"a",blockquote:"blockquote",code:"code",div:"div",figure:"figure",h2:"h2",h4:"h4",p:"p",pre:"pre",span:"span",...t(),...e.components};return i.jsxs(i.Fragment,{children:[i.jsxs(s.h2,{id:"building-from-source",children:["Building from source",i.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#building-from-source",children:i.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,i.jsxs(s.blockquote,{children:[`
`,i.jsxs(s.p,{children:["If you are just wanting to play with the toolchain, we strongly suggest following the ",i.jsx(s.a,{href:"/getting-started/quick-start",children:"Quick Start"})," guide."]}),`
`]}),`
`,i.jsxs(s.h4,{id:"prerequisites",children:["Prerequisites",i.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#prerequisites",children:i.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,i.jsxs(s.p,{children:["You will need the ",i.jsx(s.a,{href:"https://rust-lang.org",children:"Rust"}),` compiler and Cargo, the Rust package manager.
The easiest way to install both is with `,i.jsx(s.a,{href:"https://rustup.rs/",children:i.jsx(s.code,{children:"rustup.rs"})}),"."]}),`
`,i.jsxs(s.p,{children:["On Windows, you will also need a recent version of ",i.jsx(s.a,{href:"https://visualstudio.microsoft.com/downloads/",children:"Visual Studio"}),`,
installed with the "Desktop Development With C++" Workloads option.`]}),`
`,i.jsxs(s.h4,{id:"building",children:["Building",i.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#building",children:i.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,i.jsxs(s.p,{children:["You can either use the different ",i.jsx(s.a,{href:"/toolchain/dojoup",children:"Dojoup"})," flags:"]}),`
`,i.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(s.pre,{tabIndex:"0","data-language":"sh","data-theme":"github-dark-dimmed github-light",children:i.jsxs(s.code,{"data-language":"sh","data-theme":"github-dark-dimmed github-light",style:{display:"grid"},children:[i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"dojoup"}),i.jsx(s.span,{style:{"--shiki-dark":"#6CB6FF","--shiki-light":"#005CC5"},children:" --branch"}),i.jsx(s.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" master"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"dojoup"}),i.jsx(s.span,{style:{"--shiki-dark":"#6CB6FF","--shiki-light":"#005CC5"},children:" --path"}),i.jsx(s.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" path/to/dojo"})]})]})})}),`
`,i.jsx(s.p,{children:"Or, by using a single Cargo command:"}),`
`,i.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(s.pre,{tabIndex:"0","data-language":"sh","data-theme":"github-dark-dimmed github-light",children:i.jsx(s.code,{"data-language":"sh","data-theme":"github-dark-dimmed github-light",style:{display:"grid"},children:i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"cargo"}),i.jsx(s.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" install --git https://github.com/dojoengine/dojo --force sozo katana torii"})]})})})}),`
`,i.jsxs(s.p,{children:["Or, by manually building from a local copy of the ",i.jsx(s.a,{href:"https://github.com/dojoengine/dojo",children:"Dojo repository"}),":"]}),`
`,i.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(s.pre,{tabIndex:"0","data-language":"sh","data-theme":"github-dark-dimmed github-light",children:i.jsxs(s.code,{"data-language":"sh","data-theme":"github-dark-dimmed github-light",style:{display:"grid"},children:[i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#768390","--shiki-light":"#6A737D"},children:"# clone the repository"})}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"git"}),i.jsx(s.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" clone https://github.com/dojoengine/dojo.git"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#6CB6FF","--shiki-light":"#005CC5"},children:"cd"}),i.jsx(s.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" dojo"})]}),`
`,i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#768390","--shiki-light":"#6A737D"},children:"# install Sozo"})}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"cargo"}),i.jsx(s.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" install --path ./bin/sozo --force"})]}),`
`,i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#768390","--shiki-light":"#6A737D"},children:"# install Katana"})}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"cargo"}),i.jsx(s.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" install --path ./bin/katana --force"})]}),`
`,i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#768390","--shiki-light":"#6A737D"},children:"# install Torii"})}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"cargo"}),i.jsx(s.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" install --path ./bin/torii --force"})]})]})})})]})}function d(e={}){const{wrapper:s}={...t(),...e.components};return s?i.jsx(s,{...e,children:i.jsx(n,{...e})}):n(e)}export{d as default,h as frontmatter};
