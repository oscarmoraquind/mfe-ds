import{x as D}from"./lit-html-CeYizTxc.js";import{ae as e,ar as l,as as u,at as q}from"./index-Bbs29GIG.js";import{u as v}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function p(t){const s={li:"li",p:"p",ul:"ul",...v(),...t.components};return e.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:e.jsxs("div",{className:"bq-doc__container",children:[e.jsx(l,{children:"Status"}),e.jsx(s.p,{children:`The Status Component is a UI element that communicates the status of an item, task, or process to the user.
Statuses are commonly used to indicate the current state of an item, such as "completed" or "pending", or to provide updates on the progress of a task or process.`}),e.jsx(u,{children:"Usage"}),e.jsx(s.p,{children:`When using a Status Component, it's important to maintain clear and consistent language to describe the status of an item, task, or process across the entire application.
This helps to avoid confusion or misunderstanding among users, as they will be able to easily understand the meaning of different statuses regardless of where they encounter them.
By maintaining consistency, you can also establish a clear pattern for users to follow, which can help them to navigate and use your application more effectively.`}),e.jsx(u,{children:"👍 When to use"}),e.jsx(s.p,{children:"The Status Component is used for:"}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Communicating the status of an item, task, or process, such as indicating whether a task is complete or pending, or the progress of a task or process."}),`
`,e.jsx(s.li,{children:"Providing updates and notifications about changes in the status of an item, task, or process, such as when a task has been completed or a process has been initiated."}),`
`,e.jsx(s.li,{children:"Indicating the outcome of an action, such as whether a task was successful or failed."}),`
`]}),e.jsx(l,{children:"Properties"}),e.jsx(q,{of:"bq-status"})]})})}function A(t={}){const{wrapper:s}={...v(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(p,{...t})}):p(t)}const I=["alert","danger","info","neutral","success"],L={title:"Components/Status",component:"bq-status",parameters:{docs:{page:A}},argTypes:{type:{control:"select",options:[...I]},label:{control:"text",table:{disable:!0}}},args:{type:"neutral"}},a=t=>D` <bq-status type=${t.type}>${t.label}</bq-status> `,r={render:a,args:{label:"Alert status",type:"alert"}},n={render:a,args:{label:"Danger status",type:"danger"}},o={render:a,args:{label:"Information status",type:"info"}},c={render:a,args:{label:"Neutral status"}},i={render:a,args:{label:"Success status",type:"success"}};var m,d,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Alert status',
    type: 'alert'
  }
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var g,f,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Danger status',
    type: 'danger'
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,x,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Information status',
    type: 'info'
  }
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var j,T,w;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Neutral status'
  }
}`,...(w=(T=c.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var k,_,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Success status',
    type: 'success'
  }
}`,...(C=(_=i.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const O=["Alert","Danger","Info","Neutral","Success"];export{r as Alert,n as Danger,o as Info,c as Neutral,i as Success,O as __namedExportsOrder,L as default};
