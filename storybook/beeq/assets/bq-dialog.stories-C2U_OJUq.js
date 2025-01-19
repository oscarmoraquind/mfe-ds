import{x as n,E as u}from"./lit-html-CeYizTxc.js";import{o as P}from"./if-defined-C7zjO9dX.js";import{ae as o,ar as m,as as h,at as B}from"./index-Bbs29GIG.js";import{u as I}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function q(e){const t={li:"li",p:"p",ul:"ul",...I(),...e.components};return o.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:o.jsxs("div",{className:"bq-doc__container",children:[o.jsx(m,{children:"Dialog"}),o.jsx(t.p,{children:`A Dialog is a UI component used to display additional content or prompt a user for action.
It provides a way to display additional information, options, or controls in a separate, non-obstructive interface element.`}),o.jsx(h,{children:"Usage"}),o.jsx(t.p,{children:"To ensure a seamless user experience and maximize the effectiveness of the Dialog Modal component, it is recommended to follow these best practices:"}),o.jsxs(t.ul,{children:[`
`,o.jsx(t.li,{children:"Keep it simple: Avoid overwhelming the user with excessive content within the Dialog Modal. Strive for simplicity and present only the essential information or options necessary to complete the intended action or convey the message."}),`
`,o.jsx(t.li,{children:"Use a clear and concise title: Provide a descriptive title that clearly communicates the purpose or content of the Dialog Modal. This helps users quickly understand the context and relevance of the dialog."}),`
`,o.jsx(t.li,{children:"Prioritize actions: If there are multiple actions within the Dialog Modal, make sure to present them in an order that helps users easily identify and choose the appropriate action. Consider using clear call-to-action buttons with descriptive labels to guide the user."}),`
`]}),o.jsx(h,{children:"👍 When to use"}),o.jsxs(t.ul,{children:[`
`,o.jsx(t.li,{children:"Displaying additional information, options, or controls that are relevant to a specific task or action."}),`
`,o.jsx(t.li,{children:"Prompting a user for confirmation or input, such as when performing a potentially destructive action or making changes to a critical setting."}),`
`,o.jsx(t.li,{children:"Providing a way for users to access related content or features without navigating away from the current interface."}),`
`]}),o.jsx(m,{children:"Properties"}),o.jsx(B,{of:"bq-dialog"})]})})}function M(e={}){const{wrapper:t}={...I(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(q,{...e})}):q(e)}const N=["small","medium","large"],L=["standard","highlight"],R=["none","xs2","xs","s","m","l","full"],ee={title:"Components/Dialog",component:"bq-dialog",parameters:{docs:{page:M}},argTypes:{"disable-backdrop":{control:"boolean"},"disable-close-click-outside":{control:"boolean"},"disable-close-esc-keydown":{control:"boolean"},"footer-appearance":{control:"inline-radio",options:[...L]},"hide-close-button":{control:"boolean"},border:{control:"select",options:[...R]},open:{control:"boolean"},size:{control:"select",options:[...N]},bqCancel:{action:"bqCancel"},bqClose:{action:"bqClose"},bqOpen:{action:"bqOpen"},bqAfterOpen:{action:"bqAfterOpen"},bqAfterClose:{action:"bqAfterClose"},noContent:{control:"boolean",table:{disable:!0}},noFooter:{control:"boolean",table:{disable:!0}},customClose:{control:"text",table:{disable:!0}}},args:{"disable-backdrop":!1,"disable-close-click-outside":!1,"disable-close-esc-keydown":!1,"hide-close-button":!1,"footer-appearance":"standard",border:"m",open:!1,size:"medium",noContent:!1,noFooter:!1}},a=e=>n`
    <bq-button @bqClick=${async()=>{await document.querySelector("bq-dialog").show()}}>Open Dialog</bq-button>
    <bq-dialog
      ?disable-backdrop=${e["disable-backdrop"]}
      ?disable-close-esc-keydown=${e["disable-close-esc-keydown"]}
      ?disable-close-click-outside=${e["disable-close-click-outside"]}
      footer-appearance=${e["footer-appearance"]}
      ?hide-close-button=${e["hide-close-button"]}
      border=${e.border}
      ?open=${e.open}
      size=${e.size}
      @bqCancel=${e.bqCancel}
      @bqClose=${e.bqClose}
      @bqOpen=${e.bqOpen}
      @bqAfterOpen=${e.bqAfterOpen}
      @bqAfterClose=${e.bqAfterClose}
    >
      ${P(e.customClose)}
      <h5 class="bold flex items-center gap-s" slot="title">
        <bq-icon name="info" size="30" color="text--accent" role="img" title="Info"></bq-icon>
        Title
      </h5>
      ${e.noContent?u:n`
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          `}
      ${e.noFooter?u:n`
            <div class="flex gap-xs" slot="footer">
              <bq-button appearance="link"> Button </bq-button>
              <bq-button variant="ghost"> Button </bq-button>
              <bq-button variant="standard" slot="footer"> Button </bq-button>
            </div>
          `}
    </bq-dialog>
  `,s={render:a,args:{open:!0}},r={render:a,args:{open:!0,"footer-appearance":"highlight"}},i={render:a,args:{open:!0,noFooter:!0}},l={render:a,args:{open:!0,"disable-backdrop":!0}},c={render:a,args:{open:!0,customClose:n`
      <style>
        bq-button[slot='button-close']::part(button) {
          border-radius: var(--bq-radius--full);
          /* Paddings */
          padding-block: 0;
          padding-inline: 0;
          /* Size (width/height) */
          block-size: var(--bq-spacing-xl);
          inline-size: var(--bq-spacing-xl);
        }
      </style>
      <bq-button appearance="text" size="small" slot="button-close">
        <bq-icon class="cursor-pointer" name="x" role="img" title="Close"></bq-icon>
      </bq-button>
    `}},U=e=>{const t=async()=>{await document.querySelector("bq-dialog").show()},p=async()=>{await document.querySelector("bq-dialog").hide(),alert("Account deactivated")},F=async()=>{await document.querySelector("bq-dialog").cancel()};return n`
    <bq-button variant="ghost" @bqClick=${t}>Deactivate account</bq-button>
    <bq-dialog
      ?disable-backdrop=${e["disable-backdrop"]}
      ?disable-close-esc-keydown=${e["disable-close-esc-keydown"]}
      ?disable-close-click-outside=${e["disable-close-click-outside"]}
      footer-appearance=${e["footer-appearance"]}
      ?hide-close-button=${e["hide-close-button"]}
      border=${e.border}
      ?open=${e.open}
      size=${e.size}
      @bqCancel=${e.bqCancel}
      @bqClose=${e.bqClose}
      @bqOpen=${e.bqOpen}
      @bqAfterOpen=${e.bqAfterOpen}
      @bqAfterClose=${e.bqAfterClose}
    >
      <h5 class="bold flex items-center gap-s" slot="title">
        <bq-icon name="info" size="30" color="icon--danger" role="img" title="Danger"></bq-icon>
        Deactivate account
      </h5>
      <p>Are your sure you want to deactivate your account? All of your data will be permanently removed.</p>
      <span class="text-s text-secondary"> This action cannot be undone </span>
      <div class="flex gap-xs" slot="footer">
        <bq-button appearance="secondary" @bqClick=${F}> Cancel </bq-button>
        <bq-button variant="danger" @bqClick=${p}> Yes, deactivate </bq-button>
      </div>
    </bq-dialog>
  `},d={render:U,args:{"disable-close-click-outside":!0,"disable-close-esc-keydown":!0,"hide-close-button":!0}};var g,f,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: true
  }
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,C,k;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: true,
    'footer-appearance': 'highlight'
  }
}`,...(k=(C=r.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var v,w,$;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: true,
    noFooter: true
  }
}`,...($=(w=i.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var D,A,O;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: true,
    'disable-backdrop': true
  }
}`,...(O=(A=l.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var j,z,E;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: true,
    customClose: html\`
      <style>
        bq-button[slot='button-close']::part(button) {
          border-radius: var(--bq-radius--full);
          /* Paddings */
          padding-block: 0;
          padding-inline: 0;
          /* Size (width/height) */
          block-size: var(--bq-spacing-xl);
          inline-size: var(--bq-spacing-xl);
        }
      </style>
      <bq-button appearance="text" size="small" slot="button-close">
        <bq-icon class="cursor-pointer" name="x" role="img" title="Close"></bq-icon>
      </bq-button>
    \`
  }
}`,...(E=(z=c.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var S,T,_;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: ConfirmTemplate,
  args: {
    'disable-close-click-outside': true,
    'disable-close-esc-keydown': true,
    'hide-close-button': true
  }
}`,...(_=(T=d.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const oe=["Default","HighlightFooter","NoFooter","NoBackdrop","CustomCloseButton","DialogConfirm"];export{c as CustomCloseButton,s as Default,d as DialogConfirm,r as HighlightFooter,l as NoBackdrop,i as NoFooter,oe as __namedExportsOrder,ee as default};
