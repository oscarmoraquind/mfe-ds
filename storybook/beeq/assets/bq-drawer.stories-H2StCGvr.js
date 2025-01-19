import{x as d,E as p}from"./lit-html-CeYizTxc.js";import{o as _}from"./if-defined-C7zjO9dX.js";import{ae as o,ar as m,as as u,at as N}from"./index-Bbs29GIG.js";import{u as S}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function b(e){const r={li:"li",p:"p",ul:"ul",...S(),...e.components};return o.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:o.jsxs("div",{className:"bq-doc__container",children:[o.jsx(m,{children:"Drawer"}),o.jsx(r.p,{children:`A Drawer is a UI component that provides a sliding panel interface commonly used for navigation or presenting
additional content without taking up significant screen space.`}),o.jsx(u,{children:"Usage"}),o.jsxs(r.ul,{children:[`
`,o.jsx(r.li,{children:`Navigation: Drawers are commonly used for housing navigation menus or sidebar menus. They can be toggled open
and closed to provide easy access to navigation links.`}),`
`,o.jsx(r.li,{children:`Additional content: This component can also be used to display additional content or options that are not always visible on the screen.
This allows to access exatra functionality without cluttering the main interface.`}),`
`]}),o.jsx(u,{children:"👍 When to use"}),o.jsx(r.p,{children:`Utilize the Drawer component for various scenarios such as sidebar navigation, user preferences display, and mobile menu implementation,
offering compact access to application sections, settings, and navigation options.`}),o.jsxs(r.ul,{children:[`
`,o.jsx(r.li,{children:"Limited screen space: When screen real estate is limited, such as on mobile devices or smaller viewports, drawers can provide a compact way to present additional content."}),`
`,o.jsx(r.li,{children:"Contextual information: Use drawers to display contextual information or actions related to the current screen or user interaction."}),`
`,o.jsx(r.li,{children:"Multi-level Navigation: Drawers are suitable for multi-level navigation structures, where sub-menus or nested content can be displayed hierarchically."}),`
`]}),o.jsx(m,{children:"Properties"}),o.jsx(N,{of:"bq-drawer"})]})})}function E(e={}){const{wrapper:r}={...S(),...e.components};return r?o.jsx(r,{...e,children:o.jsx(b,{...e})}):b(e)}const M=["start","end"],Q={title:"Components/Drawer",component:"bq-drawer",parameters:{docs:{page:E}},argTypes:{"enable-backdrop":{control:"boolean"},"close-on-click-outside":{control:"boolean"},"close-on-esc":{control:"boolean"},open:{control:"boolean"},position:{control:"inline-radio",options:[...M]},bqOpen:{action:"bqOpen"},bqClose:{action:"bqClose"},bqAfterOpen:{action:"bqAfterOpen"},bqAfterClose:{action:"bqAfterClose"},noFooter:{control:"boolean",table:{disable:!0}},customFooterDivider:{control:"boolean",table:{disable:!0}},customCloseIcon:{control:"text",table:{disable:!0}}},args:{open:!1,position:"end","close-on-click-outside":!1,"close-on-esc":!1,"enable-backdrop":!1}},t=e=>{const r=async()=>{await document.querySelector("bq-drawer").show()},W=e.customFooterDivider?d`
        <bq-divider
          slot="footer-divider"
          class="block m-be-m"
          stroke-color="stroke--primary"
          stroke-thickness="1"
        ></bq-divider>
      `:p;return d`
    <bq-button @bqClick=${r}>Open Drawer</bq-button>
    <bq-drawer
      ?close-on-click-outside=${e["close-on-click-outside"]}
      ?close-on-esc=${e["close-on-esc"]}
      ?enable-backdrop=${e["enable-backdrop"]}
      ?open=${e.open}
      position=${e.position}
      @bqClose=${e.bqClose}
      @bqOpen=${e.bqOpen}
      @bqAfterOpen=${e.bqAfterOpen}
      @bqAfterClose=${e.bqAfterClose}
    >
      ${_(e.customCloseIcon)?e.customCloseIcon:p}
      <div class="flex gap-xs" slot="title">
        <bq-icon name="user-circle" weight="bold" role="img" title="Info"></bq-icon>
        Title
      </div>
      <div class="flex items-center justify-center rounded-xs border-s border-dashed border-brand bg-red-100 bs-full">
        Slot
      </div>
      ${e.noFooter?p:d`
            ${W}
            <div class="flex flex-1 justify-center gap-xs" slot="footer">
              <bq-button appearance="primary" block size="small"> Button </bq-button>
              <bq-button appearance="link" block size="small"> Button </bq-button>
            </div>
          `}
    </bq-drawer>
  `},n={render:t},s={render:t,args:{noFooter:!0}},a={render:t,args:{open:!1,position:"start"}},i={render:t,args:{"enable-backdrop":!0}},c={render:t,args:{"enable-backdrop":!0,customFooterDivider:!0}},l={render:t,args:{"enable-backdrop":!0,customCloseIcon:d`<bq-icon
      name="arrow-fat-lines-right"
      role="img"
      title="Close"
      slot="button-close"
    ></bq-icon>`}};var h,f,q;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template
}`,...(q=(f=n.parameters)==null?void 0:f.docs)==null?void 0:q.source}}};var g,v,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    noFooter: true
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,k,C;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: false,
    position: 'start'
  }
}`,...(C=(k=a.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var j,y,D;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: Template,
  args: {
    'enable-backdrop': true
  }
}`,...(D=(y=i.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var T,F,O;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: Template,
  args: {
    'enable-backdrop': true,
    customFooterDivider: true
  }
}`,...(O=(F=c.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var $,A,I;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: Template,
  args: {
    'enable-backdrop': true,
    customCloseIcon: html\`<bq-icon
      name="arrow-fat-lines-right"
      role="img"
      title="Close"
      slot="button-close"
    ></bq-icon>\`
  }
}`,...(I=(A=l.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const V=["Default","NoFooter","Position","WithBackdrop","WithCustomFooterDivider","WithCustomCloseIcon"];export{n as Default,s as NoFooter,a as Position,i as WithBackdrop,l as WithCustomCloseIcon,c as WithCustomFooterDivider,V as __namedExportsOrder,Q as default};
