import{x as b}from"./lit-html-CeYizTxc.js";import{ae as t,ar as a,at as x}from"./index-Bbs29GIG.js";import{u}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import{T,a as $,b as f}from"./bq-tab.types-DM9Rirqo.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function r(e){const o={a:"a",code:"code",p:"p",...u(),...e.components};return t.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:t.jsxs("div",{className:"bq-doc__container",children:[t.jsx(a,{children:"Tab"}),t.jsxs(o.p,{children:["The Tab component must be used inside the ",t.jsx(o.a,{href:"?path=/docs/components-tabs--overview",children:"Tab group component"})," (",t.jsx(o.code,{children:"bq-tab-group"}),") to function properly."]}),t.jsx(a,{children:"Properties"}),t.jsx(x,{of:"bq-tab"})]})})}function h(e={}){const{wrapper:o}={...u(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(r,{...e})}):r(e)}const I={title:"Components/Tabs/Tab",component:"bq-tab",parameters:{docs:{page:h}},argTypes:{active:{control:"boolean"},disabled:{control:"boolean"},size:{control:"select",options:[...T]},orientation:{control:"select",options:[...$]},position:{control:"select",options:[...f]},text:{control:"text",table:{disable:!0}}},args:{text:"Tab",active:!1,disabled:!1,divider:!1,size:"medium",orientation:"horizontal",position:"start"}},q=e=>b`
    <bq-tab
      .size=${e.size}
      .orientation=${e.orientation}
      .position=${e.position}
      ${e.active}
      ?disabled=${e.disabled}
    >
      ${e.text}
    </bq-tab>
  `,n={render:q},i={render:e=>b`
    <bq-tab
      .size=${e.size}
      .orientation=${e.orientation}
      .position=${e.position}
      ?active=${e.active}
      ?disabled=${e.disabled}
    >
      <bq-icon name="arrow-circle-left" slot="icon"></bq-icon>
      ${e.text}
    </bq-tab>
  `};var s,c,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,l,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    <bq-tab
      .size=\${args.size}
      .orientation=\${args.orientation}
      .position=\${args.position}
      ?active=\${args.active}
      ?disabled=\${args.disabled}
    >
      <bq-icon name="arrow-circle-left" slot="icon"></bq-icon>
      \${args.text}
    </bq-tab>
  \`
}`,...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const M=["Default","Icon"];export{n as Default,i as Icon,M as __namedExportsOrder,I as default};
