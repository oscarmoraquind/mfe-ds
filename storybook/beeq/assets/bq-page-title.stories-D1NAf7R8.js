import{x as a,E as d}from"./lit-html-CeYizTxc.js";import{ae as e,ar as u,as as p,at as W}from"./index-Bbs29GIG.js";import{u as $}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function m(i){const t={li:"li",p:"p",ul:"ul",...$(),...i.components};return e.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:e.jsxs("div",{className:"bq-doc__container",children:[e.jsx(u,{children:"Page title"}),e.jsx(t.p,{children:`The Page Title component is a versatile and essential element used to display the main title of a page or section
within an application. It often includes optional icons for actions like navigation or editing, and can be paired
with a subtitle for additional context.`}),e.jsx(p,{children:"Usage"}),e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Use the Page Title component to clearly indicate the primary title of a page or section within your application."}),`
`,e.jsx(t.li,{children:"Use the Page Title component to provide contextual information by including a subtitle or additional icons."}),`
`,e.jsx(t.li,{children:"Use the Page Title component to enhance navigation with an optional back icon for returning to the previous page."}),`
`]}),e.jsx(p,{children:"👍 When to use"}),e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"When you need to display the main title of a page, such as a dashboard or a settings page."}),`
`,e.jsx(t.li,{children:"When you want to provide clear and immediate understanding of the current page or section to the users."}),`
`,e.jsx(t.li,{children:"When you need to enhance navigation by allowing users to go back to the previous page."}),`
`,e.jsx(t.li,{children:"When you want to include actions that are relevant to the content, such as editing or downloading a document."}),`
`]}),e.jsx(u,{children:"Properties"}),e.jsx(W,{of:"bq-page-title"})]})})}function M(i={}){const{wrapper:t}={...$(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(m,{...i})}):m(i)}const F={title:"Components/Page title",component:"bq-page-title",parameters:{docs:{page:M}},argTypes:{"have-back-navigation":{control:"boolean",table:{disable:!0}},customDivider:{control:"boolean",table:{disable:!0}},title:{control:"text",table:{disable:!0}},"sub-title":{control:"text",table:{disable:!0}},actions:{control:"text",table:{disable:!0}},"custom-style":{control:"boolean",table:{disable:!0}}}},o=i=>{const t=i["custom-style"]?"flex flex-grow justify-end":"flex";return a`
    <bq-page-title>
      ${i["have-back-navigation"]?a`
            <bq-button appearance="link" slot="back">
              <bq-icon
                color="text--primary"
                name="arrow-left"
                weight="bold"
                role="img"
                title="Navigate back to the previous page"
              ></bq-icon>
            </bq-button>
          `:d}
      ${i.title} ${i["sub-title"]?a`<div slot="sub-title">${i["sub-title"]}</div>`:d}
      ${i.actions?a`<div class="${t}" slot="suffix">${i.actions}</div>`:d}
    </bq-page-title>
  `},n={render:o,args:{title:"Title"}},s={name:"Title + Back",render:o,args:{"have-back-navigation":!0,title:"Title"}},l={name:"Title + Back + Subtitle",render:o,args:{"have-back-navigation":!0,title:"Title","sub-title":"Sub-title"}},r={name:"Custom - Title + Back + Subtitle + Actions",render:o,args:{"have-back-navigation":!0,title:"Title","sub-title":"Sub-title",actions:a`
      <bq-icon class="p-b-xs2 p-i-xs2" color="text--brand" name="pencil-simple" weight="bold"></bq-icon>
      <bq-icon class="p-b-xs2 p-i-xs2" color="text--brand" name="download-simple" weight="bold"></bq-icon>
    `,"custom-style":!0}},c={name:"Default - Title + Back + Subtitle + Actions + Divider",render:o,args:{"have-back-navigation":!0,title:"Title","sub-title":"Sub-title",actions:a`
      <bq-icon class="p-b-xs2 p-i-xs2" color="text--brand" name="pencil-simple" weight="bold"></bq-icon>
      <bq-icon class="p-b-xs2 p-i-xs2" color="text--brand" name="download-simple" weight="bold"></bq-icon>
    `}},b={name:"Custom - Title + Back + Subtitle + Actions + Divider",render:o,args:{customDivider:!0,"have-back-navigation":!0,title:"Title","sub-title":"Sub-title",actions:a`
      <bq-icon class="p-b-xs2 p-i-xs2" color="text--brand" name="pencil-simple" weight="bold"></bq-icon>
      <bq-icon class="p-b-xs2 p-i-xs2" color="text--brand" name="download-simple" weight="bold"></bq-icon>
    `,"custom-style":!0}};var g,h,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Title'
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var v,T,k;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Title + Back',
  render: Template,
  args: {
    'have-back-navigation': true,
    title: 'Title'
  }
}`,...(k=(T=s.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var q,w,f;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Title + Back + Subtitle',
  render: Template,
  args: {
    'have-back-navigation': true,
    title: 'Title',
    'sub-title': 'Sub-title'
  }
}`,...(f=(w=l.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var S,y,j;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Custom - Title + Back + Subtitle + Actions',
  render: Template,
  args: {
    'have-back-navigation': true,
    title: 'Title',
    'sub-title': 'Sub-title',
    actions: html\`
      <bq-icon class="p-b-xs2 p-i-xs2" color="text--brand" name="pencil-simple" weight="bold"></bq-icon>
      <bq-icon class="p-b-xs2 p-i-xs2" color="text--brand" name="download-simple" weight="bold"></bq-icon>
    \`,
    'custom-style': true
  }
}`,...(j=(y=r.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var B,D,A;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Default - Title + Back + Subtitle + Actions + Divider',
  render: Template,
  args: {
    'have-back-navigation': true,
    title: 'Title',
    'sub-title': 'Sub-title',
    actions: html\`
      <bq-icon class="p-b-xs2 p-i-xs2" color="text--brand" name="pencil-simple" weight="bold"></bq-icon>
      <bq-icon class="p-b-xs2 p-i-xs2" color="text--brand" name="download-simple" weight="bold"></bq-icon>
    \`
  }
}`,...(A=(D=c.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var C,_,P;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Custom - Title + Back + Subtitle + Actions + Divider',
  render: Template,
  args: {
    customDivider: true,
    'have-back-navigation': true,
    title: 'Title',
    'sub-title': 'Sub-title',
    actions: html\`
      <bq-icon class="p-b-xs2 p-i-xs2" color="text--brand" name="pencil-simple" weight="bold"></bq-icon>
      <bq-icon class="p-b-xs2 p-i-xs2" color="text--brand" name="download-simple" weight="bold"></bq-icon>
    \`,
    'custom-style': true
  }
}`,...(P=(_=b.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};const G=["Default","TitleBack","TitleBackSubtitle","TitleBackActions","TitleBackActionsCustomDefault","TitleBackActionsCustom"];export{n as Default,s as TitleBack,r as TitleBackActions,b as TitleBackActionsCustom,c as TitleBackActionsCustomDefault,l as TitleBackSubtitle,G as __namedExportsOrder,F as default};
