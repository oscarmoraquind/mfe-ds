import{x as o}from"./lit-html-CeYizTxc.js";import{ae as e,ar as r,as as l,at as q}from"./index-Bbs29GIG.js";import{u as f}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function p(t){const s={li:"li",p:"p",ul:"ul",...f(),...t.components};return e.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:e.jsxs("div",{className:"bq-doc__container",children:[e.jsx(r,{children:"Empty state"}),e.jsx(s.p,{children:`An Empty State is a UI component that is displayed when a user interacts with an application or system and there
is no data or content available to display. Empty States are common in applications that have dynamic or changing data,
or when the user is in a state of no activity or interaction.`}),e.jsx(l,{children:"Usage"}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Use clear and concise language to explain the context of the empty state, so that users can understand the reason why there is no data or content available."}),`
`,e.jsx(s.li,{children:"Use visually appealing and positive design elements, such as illustrations, icons, or images, to keep users engaged and reduce frustration."}),`
`,e.jsx(s.li,{children:"Consider the use of humor or lightheartedness, if appropriate, to maintain a positive and inviting experience for users."}),`
`,e.jsx(s.li,{children:"Provide a clear and concise call-to-action that helps users navigate to other parts of the application or system, where they can find the data or content they need."}),`
`,e.jsx(s.li,{children:"Test the empty state with real users to ensure that it is effective in communicating the message and providing the guidance needed."}),`
`]}),e.jsx(l,{children:"👍 When to use"}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"When to display a helpful message or guidance to users when there is no data or content available."}),`
`,e.jsx(s.li,{children:"When to provide a clear and concise way to inform users that there is no data or content available, so that they can understand the context and meaning of the empty state."}),`
`,e.jsx(s.li,{children:"When to provide an inviting and positive visual experience, to maintain user engagement and reduce frustration."}),`
`,e.jsx(s.li,{children:"When to include a call-to-action (CTA) that helps users navigate to other parts of the application or system, where they can find the data or content they need."}),`
`]}),e.jsx(r,{children:"Properties"}),e.jsx(q,{of:"bq-empty-state"})]})})}function v(t={}){const{wrapper:s}={...f(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(p,{...t})}):p(t)}const z=["small","medium","large"],E={title:"Components/Empty state",component:"bq-empty-state",parameters:{docs:{page:v}},argTypes:{size:{control:"select",options:[...z]}},args:{size:"medium"}},a={render:t=>o` <bq-empty-state size=${t.size}> Title </bq-empty-state> `},n={render:t=>o`
    <div class="flex flex-row gap-20">
      <bq-empty-state size=${t.size}>
        Title
        <span slot="body"> Description </span>
      </bq-empty-state>
      <bq-empty-state size=${t.size}>
        Title <span slot="body"> Description <a class="bq-link" href="https://example.com">Link</a> </span>
      </bq-empty-state>
    </div>
  `},i={render:t=>o`
    <div class="flex flex-row gap-20">
      <bq-empty-state size=${t.size}>
        Title <span slot="body"> Description <a class="bq-link" href="https://example.com">Link</a> </span>
        <div class="flex gap-xs" slot="footer">
          <bq-button appearance="primary" size="small"> Button </bq-button>
        </div>
      </bq-empty-state>
      <bq-empty-state size=${t.size}>
        Title <span slot="body"> Description <a class="bq-link" href="https://example.com">Link</a> </span>
        <div class="flex gap-xs" slot="footer">
          <bq-button size="small" variant="ghost"> Button </bq-button>
        </div>
      </bq-empty-state>
      <bq-empty-state size=${t.size}>
        Title <span slot="body"> Description <a class="bq-link" href="https://example.com">Link</a> </span>
        <div class="flex gap-xs" slot="footer">
          <bq-button size="small" variant="ghost"> Button </bq-button>
          <bq-button appearance="primary" size="small"> Button </bq-button>
        </div>
      </bq-empty-state>
    </div>
  `};var c,m,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{\n  render: (args: Args) => html` <bq-empty-state size=${args.size}> Title </bq-empty-state> `\n}",...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var h,b,u;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    <div class="flex flex-row gap-20">
      <bq-empty-state size=\${args.size}>
        Title
        <span slot="body"> Description </span>
      </bq-empty-state>
      <bq-empty-state size=\${args.size}>
        Title <span slot="body"> Description <a class="bq-link" href="https://example.com">Link</a> </span>
      </bq-empty-state>
    </div>
  \`
}`,...(u=(b=n.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var y,x,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    <div class="flex flex-row gap-20">
      <bq-empty-state size=\${args.size}>
        Title <span slot="body"> Description <a class="bq-link" href="https://example.com">Link</a> </span>
        <div class="flex gap-xs" slot="footer">
          <bq-button appearance="primary" size="small"> Button </bq-button>
        </div>
      </bq-empty-state>
      <bq-empty-state size=\${args.size}>
        Title <span slot="body"> Description <a class="bq-link" href="https://example.com">Link</a> </span>
        <div class="flex gap-xs" slot="footer">
          <bq-button size="small" variant="ghost"> Button </bq-button>
        </div>
      </bq-empty-state>
      <bq-empty-state size=\${args.size}>
        Title <span slot="body"> Description <a class="bq-link" href="https://example.com">Link</a> </span>
        <div class="flex gap-xs" slot="footer">
          <bq-button size="small" variant="ghost"> Button </bq-button>
          <bq-button appearance="primary" size="small"> Button </bq-button>
        </div>
      </bq-empty-state>
    </div>
  \`
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const L=["Default","WithBody","WithCallToAction"];export{a as Default,n as WithBody,i as WithCallToAction,L as __namedExportsOrder,E as default};
