import{x as z}from"./lit-html-CeYizTxc.js";import{ae as e,ar as c,as as p,at as $}from"./index-Bbs29GIG.js";import{u as T}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function l(n){const t={li:"li",p:"p",ul:"ul",...T(),...n.components};return e.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:e.jsxs("div",{className:"bq-doc__container",children:[e.jsx(c,{children:"Spinner"}),e.jsx(t.p,{children:`The Spinner Component is a UI element used to indicate that an application is loading or processing data.
Spinners are commonly used to provide feedback to the user when an action or request is being processed.
This allows the user to know that the application is still working and that they should wait for the result.`}),e.jsx(p,{children:"Usage"}),e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Use the Spinner component to indicate to the user that something is happening behind the scenes, such as a long-running process or data retrieval."}),`
`,e.jsx(t.li,{children:"Use the Spinner component to indicate to the user that something is happening behind the scenes, such as a long-running process or data retrieval."}),`
`,e.jsx(t.li,{children:"Use the Spinner component when the user has initiated an action that will take some time to complete, such as submitting a form or retrieving large amounts of data."}),`
`,e.jsx(t.li,{children:"Use the Spinner component sparingly and only when necessary. Overuse of the Spinner component can be distracting and frustrating to the user."}),`
`,e.jsx(t.li,{children:'Use a clear and concise message to accompany the Spinner component, such as "Loading" or "Please wait".'}),`
`]}),e.jsx(p,{children:"👍 When to use"}),e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"When the user initiates an action that will take some time to complete."}),`
`,e.jsx(t.li,{children:"When data is being retrieved or processed in the background."}),`
`,e.jsx(t.li,{children:"When there is a delay in the application's response time."}),`
`]}),e.jsx(c,{children:"Properties"}),e.jsx($,{of:"bq-spinner"})]})})}function y(n={}){const{wrapper:t}={...T(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}const _=["none","left","right","above","bellow"],v=["small","medium","large"],O={title:"Components/Spinner",component:"bq-spinner",parameters:{docs:{page:y},layout:"centered"},argTypes:{animation:{control:"boolean"},"text-position":{control:"select",options:[..._]},size:{control:"select",options:[...v]},text:{control:"text"}},args:{animation:!0,"text-position":"bellow",size:"large",text:"Loading..."}},a=n=>z`
    <bq-spinner ?animation=${n.animation} size=${n.size} text-position=${n["text-position"]}>
      <span>${n.text}</span>
    </bq-spinner>
  `,s={render:a},i={render:a,args:{size:"medium"}},o={render:a,args:{size:"small"}},r={render:n=>z`
    <bq-spinner ?animation=${n.animation} size=${n.size} text-position=${n["text-position"]}>
      <bq-icon name="spinner-gap" slot="icon"></bq-icon>
      <span>${n.text}</span>
    </bq-spinner>
  `};var m,d,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template
}`,...(h=(d=s.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var u,g,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: 'medium'
  }
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,j,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: 'small'
  }
}`,...(S=(j=o.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var q,f,w;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    <bq-spinner ?animation=\${args.animation} size=\${args.size} text-position=\${args['text-position']}>
      <bq-icon name="spinner-gap" slot="icon"></bq-icon>
      <span>\${args.text}</span>
    </bq-spinner>
  \`
}`,...(w=(f=r.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const W=["Large","Medium","Small","CustomIcon"];export{r as CustomIcon,s as Large,i as Medium,o as Small,W as __namedExportsOrder,O as default};
