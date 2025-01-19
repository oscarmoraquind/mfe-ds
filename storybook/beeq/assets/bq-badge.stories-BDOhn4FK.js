import{x as W}from"./lit-html-CeYizTxc.js";import{ae as e,ar as l,as as m,at as q}from"./index-Bbs29GIG.js";import{u as M}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function u(t){const n={li:"li",p:"p",strong:"strong",ul:"ul",...M(),...t.components};return e.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:e.jsxs("div",{className:"bq-doc__container",children:[e.jsx(l,{children:"Badge"}),e.jsx(n.p,{children:`The Badge component is a visual indicator that can be added to various elements within a user interface.
It is typically used to highlight important or relevant information, such as alerts, notifications, or statuses.`}),e.jsx(m,{children:"Usage"}),e.jsx(n.p,{children:"When using the Badge component, it is important to follow these user experience best practices:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use sparingly:"})," While the Badge component can be effective in drawing attention to important information, it should not be overused. Overuse of the Badge component can lead to a cluttered and confusing user interface."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Be consistent:"})," When using the Badge component, ensure that it is used consistently throughout the user interface. This includes the placement, size, and color of the Badge component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keep it simple:"})," The Badge component should be simple and easy to understand. Avoid using overly complicated designs or messaging."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Avoid using too many colors:"})," While the Badge component can be colored to draw attention, it is important to avoid using too many colors. This can lead to a visually overwhelming user interface."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Make it accessible:"})," Ensure that the Badge component is accessible to all users, including those with visual impairments. This can be achieved by using appropriate color contrast and providing alternative text descriptions."]}),`
`]}),e.jsx(m,{children:"👍 When to use"}),e.jsx(n.p,{children:"The Badge component can be used in a variety of situations, including:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Alerts and notifications:"})," Use the Badge component to draw attention to important alerts or notifications, such as new messages or updates."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Status indicators:"})," Use the Badge component to indicate the status of an item, such as whether it is new, in progress, or completed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Counters:"})," Use the Badge component to display a count of items, such as the number of unread messages or pending tasks."]}),`
`]}),e.jsx(l,{children:"Properties"}),e.jsx(q,{of:"bq-badge"})]})})}function A(t={}){const{wrapper:n}={...M(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(u,{...t})}):u(t)}const E=["small","medium"],P={title:"Components/Badge",component:"bq-badge",parameters:{docs:{page:A}},argTypes:{"background-color":{control:"text"},size:{control:"select",options:E},"text-color":{control:"text"},content:{control:"text",table:{disable:!0}}},args:{size:"small"}},s=t=>W`
  <bq-badge background-color=${t["background-color"]} size=${t.size} text-color=${t["text-color"]}>
    ${t.content}
  </bq-badge>
`,o={render:s},r={render:s,args:{size:"medium"}},a={render:s,args:{"background-color":"ui--success",size:"medium"}},i={render:s,args:{content:"2"}},c={render:s,args:{content:"12"}},d={render:s,args:{"background-color":"ui--success",content:"online"}};var p,g,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,b,j;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: 'medium'
  }
}`,...(j=(b=r.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var f,T,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  args: {
    'background-color': 'ui--success',
    size: 'medium'
  }
}`,...(v=(T=a.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var B,y,w;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: Template,
  args: {
    content: '2'
  }
}`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var S,k,z;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Template,
  args: {
    content: '12'
  }
}`,...(z=(k=c.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var D,_,C;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Template,
  args: {
    'background-color': 'ui--success',
    content: 'online'
  }
}`,...(C=(_=d.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const R=["Default","SizeMedium","BackgroundColor","SingleDigit","TwoDigits","WithText"];export{a as BackgroundColor,o as Default,i as SingleDigit,r as SizeMedium,c as TwoDigits,d as WithText,R as __namedExportsOrder,P as default};
