import{x as L}from"./lit-html-CeYizTxc.js";import{ae as e,ar as d,as as u,at as O}from"./index-Bbs29GIG.js";import{u as I}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function m(r){const s={li:"li",p:"p",ul:"ul",...I(),...r.components};return e.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:e.jsxs("div",{className:"bq-doc__container",children:[e.jsx(d,{children:"Progress"}),e.jsx(s.p,{children:`The progress bar is a user interface component that visually represents the completion status of a task or process. It typically consists of a horizontal bar
that fills up gradually to indicate the progress of the task, often accompanied by textual or graphical indicators such as percentages or toolip labels.`}),e.jsx(u,{children:"Usage"}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Use the progress bar to visually track the completion status of a task, operation, or process."}),`
`,e.jsx(s.li,{children:"Use the progress bar to provide users with feedback on the progress of actions, such as file uploads, form submissions, or loading processes."}),`
`,e.jsx(s.li,{children:"Use the progress bar to improve the user experience by offering a clear indication of the current status and remaining duration of ongoing operations."}),`
`,e.jsx(s.li,{children:"Use the progress bar to manage user expectations by displaying a progress bar actions that require some time to complete, reducing uncertainty and frustration."}),`
`]}),e.jsx(u,{children:"👍 When to use"}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"When to employ communication for tasks or operations that take a significant amount of time to complete, ensuring users stay informed about the ongoing process."}),`
`,e.jsx(s.li,{children:"When to implement communication for asynchronous actions, like data fetching, API calls, or background processes, to signify activity and provide users with confidence in system responsiveness."}),`
`,e.jsx(s.li,{children:"When to offer communication on user interactions, such as button clicks, form submissions, or page transitions, by employing methods like progress bars to indicate ongoing actions."}),`
`,e.jsx(s.li,{children:"When to apply communication for dynamic updates, where progress is updated in real-time based on changing conditions or user inputs, enhancing clarity and responsiveness."}),`
`]}),e.jsx(d,{children:"Properties"}),e.jsx(O,{of:"bq-progress"})]})})}function U(r={}){const{wrapper:s}={...I(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(m,{...r})}):m(r)}const M=["square","rounded"],A=["medium","large"],B=["default","error"],Q={title:"Components/Progress",component:"bq-progress",parameters:{docs:{page:U}},argTypes:{value:{control:"number"},indeterminate:{control:"boolean"},thickness:{control:"select",options:[...A]},type:{control:"select",options:[...B]},"border-shape":{control:"select",options:[...M]},label:{control:"boolean"},"enable-tooltip":{control:"boolean"}},args:{value:0,indeterminate:!1,thickness:"medium",type:"default","border-shape":"rounded",label:!1,"enable-tooltip":!1}},o=r=>L`
  <div class="is-64">
    <bq-progress
      value=${r.value}
      indeterminate=${r.indeterminate}
      thickness=${r.thickness}
      type=${r.type}
      border-shape=${r["border-shape"]}
      ?label=${r.label}
      ?enable-tooltip=${r["enable-tooltip"]}
    ></bq-progress>
  </div>
`,n={render:o,args:{value:10}},t={render:o,args:{value:20,thickness:"large"}},a={name:"Error",render:o,args:{value:40,type:"error"}},i={render:o,args:{value:80,"border-shape":"square"}},c={render:o,args:{value:60,label:!0}},l={render:o,args:{value:80,"enable-tooltip":!0}},p={render:o,args:{indeterminate:!0}};var h,g,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template,
  args: {
    value: 10
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,y,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  args: {
    value: 20,
    thickness: 'large'
  }
}`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var v,j,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Error',
  render: Template,
  args: {
    value: 40,
    type: 'error'
  }
}`,...(S=(j=a.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var k,T,E;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: Template,
  args: {
    value: 80,
    'border-shape': 'square'
  }
}`,...(E=(T=i.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var _,q,P;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  args: {
    value: 60,
    label: true
  }
}`,...(P=(q=c.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var R,W,$;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: Template,
  args: {
    value: 80,
    'enable-tooltip': true
  }
}`,...($=(W=l.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var D,w,C;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Template,
  args: {
    indeterminate: true
  }
}`,...(C=(w=p.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const V=["Default","LargeThickness","ErrorState","BorderShape","WithLabel","WithTooltip","Indeterminate"];export{i as BorderShape,n as Default,a as ErrorState,p as Indeterminate,t as LargeThickness,c as WithLabel,l as WithTooltip,V as __namedExportsOrder,Q as default};
