import{x as r,E as D}from"./lit-html-CeYizTxc.js";import{o as j}from"./if-defined-C7zjO9dX.js";import{ae as e,ar as c,as as n,at as l}from"./index-Bbs29GIG.js";import{u as T}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function m(s){const t={li:"li",ol:"ol",p:"p",ul:"ul",...T(),...s.components};return e.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:e.jsxs("div",{className:"bq-doc__container",children:[e.jsx(c,{children:"Steps"}),e.jsx(t.p,{children:`The Steps Component is a UI element used to display a series of steps or stages in a process or task. Steps are commonly used in wizards, onboarding flows, or multi-step forms, and are a way to help users understand the progression of a task or process and their current status.
It typically consists of a visually appealing representation of the current step, along with optional labels, icons, or additional information associated with each step.`}),e.jsx(n,{children:"Usage"}),e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Displaying the steps in a wizard, onboarding flow, or multi-step form, so that users can understand the progression of the task and their current status."}),`
`,e.jsx(t.li,{children:"Providing an overview of the steps in a process or task, such as outlining the steps in a recipe or the stages of a project."}),`
`,e.jsx(t.li,{children:"Representing the progress of a task or process, such as indicating the current step, completed steps, and future steps."}),`
`]}),e.jsx(n,{children:"👍 When to use"}),e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"Multi-step processes: Use stepper items when there is a need to guide users through a multi-step process, such as signing up, completing a form, or placing an order."}),`
`,e.jsx(t.li,{children:"Wizard-like interfaces: Stepper items work well for implementing wizard-like interfaces where users need to progress through a series of steps to complete a task."}),`
`,e.jsx(t.li,{children:"Progress tracking: Stepper items can be used to visually track the progress of a user's actions, such as completing a tutorial or a course with multiple lessons."}),`
`]}),e.jsx(c,{children:"Properties"}),e.jsx(n,{children:"bq-steps"}),e.jsx(l,{of:"bq-steps"}),e.jsx(n,{children:"bq-step-item"}),e.jsx(l,{of:"bq-step-item"})]})})}function w(s={}){const{wrapper:t}={...T(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(m,{...s})}):m(s)}const v=["numeric","icon","dot"],k=["medium","small"],$={title:"Components/Steps",component:"bq-steps",parameters:{docs:{page:w}},argTypes:{"divider-color":{control:"text"},type:{control:"select",options:[...v]},size:{control:"select",options:[...k]},children:{control:"text",table:{disable:!0}}},args:{"divider-color":"stroke--primary",size:"medium"}},a=s=>r`
    <bq-steps divider-color=${s["divider-color"]} type=${s.type} size=${s.size}>
      ${j(s.children)?s.children:D}
    </bq-steps>
  `,i={render:a,args:{type:"dot",children:r`
      <bq-step-item status="default">
        <bq-icon slot="prefix" name="circle"></bq-icon>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
      <bq-step-item status="error">
        <bq-icon slot="prefix" name="x-circle"></bq-icon>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
      <bq-step-item status="completed">
        <bq-icon slot="prefix" name="check-circle"></bq-icon>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
      <bq-step-item status="current">
        <bq-icon slot="prefix" name="circle"></bq-icon>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
      <bq-step-item status="disabled">
        <bq-icon slot="prefix" name="circle"></bq-icon>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
    `}},p={render:a,args:{type:"icon",children:r`
      <bq-step-item status="completed">
        <bq-icon slot="prefix" name="airplane-takeoff"></bq-icon>
        <span>Flight</span>
        <span slot="description">Reserve your flight</span>
      </bq-step-item>
      <bq-step-item status="completed">
        <bq-icon slot="prefix" name="bed"></bq-icon>
        <span>Accommodation</span>
        <span slot="description">Reserve your accommodation</span>
      </bq-step-item>
      <bq-step-item status="error">
        <bq-icon slot="prefix" name="car"></bq-icon>
        <span>Rent a car</span>
        <span slot="description">There was an error with your reservation</span>
      </bq-step-item>
      <bq-step-item status="current">
        <bq-icon slot="prefix" name="tree-palm"></bq-icon>
        <span>Enjoy your holidays!</span>
        <span slot="description">You're ready for your vacations</span>
      </bq-step-item>
    `}},o={render:a,args:{type:"numeric",children:r`
      <bq-step-item status="default">
        <span slot="prefix">1</span>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
      <bq-step-item status="completed">
        <span slot="prefix">2</span>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
      <bq-step-item status="error">
        <span slot="prefix">3</span>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
      <bq-step-item status="current">
        <span slot="prefix">4</span>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
      <bq-step-item status="disabled">
        <span slot="prefix">4</span>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
    `}};var d,u,b;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template,
  args: {
    type: 'dot',
    children: html\`
      <bq-step-item status="default">
        <bq-icon slot="prefix" name="circle"></bq-icon>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
      <bq-step-item status="error">
        <bq-icon slot="prefix" name="x-circle"></bq-icon>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
      <bq-step-item status="completed">
        <bq-icon slot="prefix" name="check-circle"></bq-icon>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
      <bq-step-item status="current">
        <bq-icon slot="prefix" name="circle"></bq-icon>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
      <bq-step-item status="disabled">
        <bq-icon slot="prefix" name="circle"></bq-icon>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
    \`
  }
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var q,h,f;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: Template,
  args: {
    type: 'icon',
    children: html\`
      <bq-step-item status="completed">
        <bq-icon slot="prefix" name="airplane-takeoff"></bq-icon>
        <span>Flight</span>
        <span slot="description">Reserve your flight</span>
      </bq-step-item>
      <bq-step-item status="completed">
        <bq-icon slot="prefix" name="bed"></bq-icon>
        <span>Accommodation</span>
        <span slot="description">Reserve your accommodation</span>
      </bq-step-item>
      <bq-step-item status="error">
        <bq-icon slot="prefix" name="car"></bq-icon>
        <span>Rent a car</span>
        <span slot="description">There was an error with your reservation</span>
      </bq-step-item>
      <bq-step-item status="current">
        <bq-icon slot="prefix" name="tree-palm"></bq-icon>
        <span>Enjoy your holidays!</span>
        <span slot="description">You're ready for your vacations</span>
      </bq-step-item>
    \`
  }
}`,...(f=(h=p.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,g,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: Template,
  args: {
    type: 'numeric',
    children: html\`
      <bq-step-item status="default">
        <span slot="prefix">1</span>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
      <bq-step-item status="completed">
        <span slot="prefix">2</span>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
      <bq-step-item status="error">
        <span slot="prefix">3</span>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
      <bq-step-item status="current">
        <span slot="prefix">4</span>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
      <bq-step-item status="disabled">
        <span slot="prefix">4</span>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
    \`
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const A=["Dots","Icons","Numbers"];export{i as Dots,p as Icons,o as Numbers,A as __namedExportsOrder,$ as default};
