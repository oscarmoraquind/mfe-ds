import{x as f}from"./lit-html-CeYizTxc.js";import{ae as e,ar as n,as as o,at as y}from"./index-Bbs29GIG.js";import{u as j}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function l(a){const t={code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...j(),...a.components};return e.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:e.jsxs("div",{className:"bq-doc__container",children:[e.jsx(n,{children:"Avatar"}),e.jsx(t.p,{children:`The Avatar component is a simple and customizable element that displays an image or initials in a circular or square shape.
This component is useful for displaying user profile pictures or any other image that represents a person or an entity.`}),e.jsx(o,{children:"Usage"}),e.jsx(t.p,{children:"Here are some best practices to ensure a positive user experience with the Avatar component:"}),e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Make it identifiable:"})," The avatar should be easily recognizable and should represent the user or entity accurately. It should be appropriate and relevant to the context in which it is used."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Keep it simple:"})," The size and complexity of the avatar should be appropriate to the context in which it is used. A simple, clear design is usually better than a complex one that can be difficult to understand."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Ensure consistency:"})," Use the same avatar across all instances of the user or entity to ensure consistency and familiarity."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Provide alternative text:"})," Always provide alternative text for the avatar for users who cannot see the image. This can be achieved by using the ",e.jsx(t.code,{children:"alt"})," attribute."]}),`
`]}),e.jsx(o,{children:"👍 When to use"}),e.jsx(t.p,{children:"The Avatar component is commonly used in the following scenarios:"}),e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Profile pictures:"})," The Avatar is commonly used to display a user's profile picture."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Comment sections:"})," The Avatar is also commonly used in comment sections to display the picture of the user who made the comment."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"List views:"})," The Avatar can also be used in list views to provide a visual representation of the user or entity associated with an item in the list."]}),`
`]}),e.jsx(n,{children:"Properties"}),e.jsx(y,{of:"bq-avatar"})]})})}function q(a={}){const{wrapper:t}={...j(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(l,{...a})}):l(a)}const W={title:"Components/Avatar",component:"bq-avatar",parameters:{docs:{page:q}},argTypes:{"alt-text":{control:"text"},image:{control:"text"},label:{control:"text"},initials:{control:"text"},shape:{control:"inline-radio",options:["circle","square"]},size:{control:"select",options:["xsmall","small","medium","large"]},"badge-content":{control:"text",table:{disable:!0}}},args:{label:"Avatar component label",shape:"circle",size:"medium","badge-content":"9"}},v=a=>f`
  <bq-avatar
    alt-text=${a["alt-text"]}
    image=${a.image}
    label=${a.label}
    initials=${a.initials}
    shape=${a.shape}
    size=${a.size}
  ></bq-avatar>
`,s={render:v,args:{"alt-text":"User profile",image:"https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"}},i={render:v,args:{initials:"JS"}},r={render:a=>f`<bq-avatar
      alt-text=${a["alt-text"]}
      image=${a.image}
      label=${a.label}
      initials=${a.initials}
      shape=${a.shape}
      size=${a.size}
    >
      <bq-badge slot="badge" text-color="#fff">${a["badge-content"]}</bq-badge>
    </bq-avatar>`,args:{image:"https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"}};var c,d,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template,
  args: {
    'alt-text': 'User profile',
    image: 'https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,h,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template,
  args: {
    initials: 'JS'
  }
}`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var x,b,g;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: Args) => html\`<bq-avatar
      alt-text=\${args['alt-text']}
      image=\${args.image}
      label=\${args.label}
      initials=\${args.initials}
      shape=\${args.shape}
      size=\${args.size}
    >
      <bq-badge slot="badge" text-color="#fff">\${args['badge-content']}</bq-badge>
    </bq-avatar>\`,
  args: {
    image: 'https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const B=["Image","Initials","WithBadge"];export{s as Image,i as Initials,r as WithBadge,B as __namedExportsOrder,W as default};
