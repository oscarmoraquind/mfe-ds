import{x as r,E as l}from"./lit-html-CeYizTxc.js";import{o as d}from"./if-defined-C7zjO9dX.js";import{M as F,A as I,a as M}from"./bq-accordion.types-ktcnbnQL.js";import"./index-Bbs29GIG.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";import"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";const L={title:"Components/Accordion",component:"bq-accordion",parameters:{docs:{page:F}},argTypes:{appearance:{control:"select",options:[...I]},disabled:{control:"boolean"},expanded:{control:"boolean"},"no-animation":{control:"boolean"},rotate:{control:"boolean"},size:{control:"select",options:[...M]},bqBlur:{action:"bqBlur"},bqFocus:{action:"bqFocus"},bqClick:{action:"bqClick"},bqOpen:{action:"bqOpen"},bqAfterOpen:{action:"bqAfterOpen"},bqClose:{action:"bqClose"},bqAfterClose:{action:"bqAfterClose"},header:{control:"text",table:{disable:!0}}},args:{appearance:"filled",disabled:!1,expanded:!1,"no-animation":!1,rotate:!1,size:"medium",header:"Header"}},a=e=>r`
  <bq-accordion
    appearance=${e.appearance}
    ?disabled=${e.disabled}
    ?expanded=${e.expanded}
    ?no-animation=${e["no-animation"]}
    ?rotate=${e.rotate}
    size=${e.size}
    @bqBlur=${e.bqBlur}
    @bqFocus=${e.bqFocus}
    @bqClick=${e.bqClick}
    @bqOpen=${e.bqOpen}
    @bqAfterOpen=${e.bqAfterOpen}
    @bqClose=${e.bqClose}
    @bqAfterClose=${e.bqAfterClose}
  >
    ${d(e.prefix)?e.prefix:l}
    <span slot="header">${e.header}</span>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam corporis perferendis, architecto vel ullam
      officia officiis necessitatibus optio nam soluta labore libero debitis? Delectus enim quaerat laboriosam
      consequatur ea.
    </div>
    ${d(e.suffix)?e.suffix:l}
    <!-- Custom collapse/expand icon -->
    ${d(e.collapse)?e.collapse:l}
  </bq-accordion>
`,o={render:a},t={render:a,args:{expanded:!0}},n={render:a,args:{appearance:"ghost",expanded:!0}},s={render:a,argTypes:{prefix:{control:"text",table:{disable:!0}}},args:{prefix:r`<bq-icon name="heart" slot="prefix"></bq-icon>`}},i={render:a,argTypes:{prefix:{control:"text",table:{disable:!0}}},args:{prefix:r`
      <bq-avatar
        size="xsmall"
        image="https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        slot="prefix"
      ></bq-avatar>
    `}},c={render:a,argTypes:{suffix:{control:"text",table:{disable:!0}}},args:{suffix:r`<bq-icon name="gear" slot="suffix"></bq-icon>`}},p={render:a,argTypes:{collapse:{control:"text",table:{disable:!0}}},args:{collapse:r`<bq-icon name="caret-up" slot="expand"></bq-icon>`,rotate:!0}};var m,b,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template
}`,...(u=(b=o.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var f,x,q;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  args: {
    expanded: true
  }
}`,...(q=(x=t.parameters)==null?void 0:x.docs)==null?void 0:q.source}}};var C,h,g;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: Template,
  args: {
    appearance: 'ghost',
    expanded: true
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var A,T,$;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: Template,
  argTypes: {
    prefix: {
      control: 'text',
      table: {
        disable: true
      }
    }
  },
  args: {
    prefix: html\`<bq-icon name="heart" slot="prefix"></bq-icon>\`
  }
}`,...($=(T=s.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var O,y,E;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: Template,
  argTypes: {
    prefix: {
      control: 'text',
      table: {
        disable: true
      }
    }
  },
  args: {
    prefix: html\`
      <bq-avatar
        size="xsmall"
        image="https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        slot="prefix"
      ></bq-avatar>
    \`
  }
}`,...(E=(y=i.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var S,v,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Template,
  argTypes: {
    suffix: {
      control: 'text',
      table: {
        disable: true
      }
    }
  },
  args: {
    suffix: html\`<bq-icon name="gear" slot="suffix"></bq-icon>\`
  }
}`,...(D=(v=c.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var z,B,k;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: Template,
  argTypes: {
    collapse: {
      control: 'text',
      table: {
        disable: true
      }
    }
  },
  args: {
    collapse: html\`<bq-icon name="caret-up" slot="expand"></bq-icon>\`,
    rotate: true
  }
}`,...(k=(B=p.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};const X=["Default","Expanded","Ghost","Prefix","Avatar","Suffix","CustomCollapseExpand"];export{i as Avatar,p as CustomCollapseExpand,o as Default,t as Expanded,n as Ghost,s as Prefix,c as Suffix,X as __namedExportsOrder,L as default};
