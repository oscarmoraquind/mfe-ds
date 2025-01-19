import{x as R}from"./lit-html-CeYizTxc.js";import{ae as t,ar as V,as as u,at as H}from"./index-Bbs29GIG.js";import{u as X}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function h(e){const o={li:"li",p:"p",ul:"ul",...X(),...e.components};return t.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:t.jsxs("div",{className:"bq-doc__container",children:[t.jsx(V,{children:"Tooltip"}),t.jsx(o.p,{children:`A tooltip component is a user interface element that displays additional information about a particular element when the user hovers or clicks on it.
It is usually displayed as a small pop-up box that appears near the element in question.`}),t.jsx(u,{children:"Best Practices"}),t.jsx(o.p,{children:"To ensure that tooltips effectively provide additional information without hindering user experience, consider the following best practices:"}),t.jsxs(o.ul,{children:[`
`,t.jsx(o.li,{children:"Provide definitions for technical terms or jargon, especially in scientific or financial applications, to make complex information more accessible to users who may not be familiar with the terminology."}),`
`,t.jsx(o.li,{children:"Display additional information about interactive elements, such as buttons, links, or other elements, to help users understand their purpose or function and how to interact with them effectively."}),`
`,t.jsx(o.li,{children:"Present additional context or data about specific elements, such as charts, tables, or images, to help users better understand the content and make more informed decisions."}),`
`]}),t.jsx(u,{children:"👍 When to use"}),t.jsxs(o.ul,{children:[`
`,t.jsx(o.li,{children:"When you want to provide additional information about an element without cluttering the UI."}),`
`,t.jsx(o.li,{children:"When you want to provide context-specific help or guidance to the user."}),`
`,t.jsx(o.li,{children:"When you want to clarify the meaning of a particular element."}),`
`]}),t.jsx(u,{children:"Properties"}),t.jsx(H,{of:"bq-tooltip"})]})})}function U(e={}){const{wrapper:o}={...X(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(h,{...e})}):h(e)}const z=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],re={title:"Components/Tooltip",component:"bq-tooltip",parameters:{docs:{page:U},layout:"centered"},argTypes:{"always-visible":{control:"boolean"},distance:{control:"number"},"display-on":{control:"inline-radio",options:["click","hover"]},"hide-arrow":{control:"boolean"},placement:{control:"select",options:z},"same-width":{control:"boolean"},visible:{control:"boolean"},text:{control:"text",table:{disable:!0}}},args:{"always-visible":!1,distance:10,"display-on":"hover","hide-arrow":!1,placement:"top",visible:!1,"same-width":!1}},r=e=>R`
  <bq-tooltip
    always-visible=${e["always-visible"]}
    distance=${e.distance}
    display-on=${e["display-on"]}
    ?hide-arrow=${e["hide-arrow"]}
    placement=${e.placement}
    same-width=${e["same-width"]}
    ?visible=${e.visible}
  >
    ${e.text}
    <bq-button slot="trigger">Hover me!</bq-button>
  </bq-tooltip>
`,a={render:r,args:{text:"Yuhu! I'm a tooltip 🙃",visible:!0}},s={render:r,args:{text:"Yuhu! I'm a tooltip 🙃",placement:"bottom",visible:!0}},i={render:r,args:{text:"Yuhu! I'm a tooltip 🙃",placement:"right",visible:!0}},n={render:r,args:{text:"Yuhu! I'm a tooltip 🙃",placement:"left",visible:!0}},l={render:r,args:{text:"Yuhu! I'm a tooltip 🙃","hide-arrow":!0,visible:!0}},c={render:r,args:{text:"Tooltip","same-width":!0,visible:!0}},p={render:r,args:{text:"Yuhu! I'm a tooltip 🙃, and I'm a long text that probably shouldn't be shown here but 'ce sa fac'",visible:!0}},m={render:r,args:{text:"Yuhu! I'm a tooltip 🙃, and I'm a long text that probably shouldn't be shown here but 'ce sa fac'","always-visible":!0}},d={render:e=>R`
    <bq-tooltip
      distance=${e.distance}
      display-on=${e["display-on"]}
      ?hide-arrow=${e["hide-arrow"]}
      placement=${e.placement}
      same-width=${e["same-width"]}
      ?visible=${e.visible}
    >
      ${e.text}
      <bq-button slot="trigger">
        <bq-icon name="mouse" slot="prefix"></bq-icon>
        Click me!
      </bq-button>
    </bq-tooltip>
  `,args:{"display-on":"click",text:"Yuhu! I'm a tooltip 🙃",visible:!0}};var b,x,g;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    text: "Yuhu! I'm a tooltip 🙃",
    visible: true
  }
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,w,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  args: {
    text: "Yuhu! I'm a tooltip 🙃",
    placement: 'bottom',
    visible: true
  }
}`,...(v=(w=s.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var y,I,$;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  args: {
    text: "Yuhu! I'm a tooltip 🙃",
    placement: 'right',
    visible: true
  }
}`,...($=(I=i.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var j,q,T;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: Template,
  args: {
    text: "Yuhu! I'm a tooltip 🙃",
    placement: 'left',
    visible: true
  }
}`,...(T=(q=n.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var Y,S,k;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: Template,
  args: {
    text: "Yuhu! I'm a tooltip 🙃",
    'hide-arrow': true,
    visible: true
  }
}`,...(k=(S=l.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var C,_,A;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: Template,
  args: {
    text: 'Tooltip',
    'same-width': true,
    visible: true
  }
}`,...(A=(_=c.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var D,L,P;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Template,
  args: {
    text: "Yuhu! I'm a tooltip 🙃, and I'm a long text that probably shouldn't be shown here but 'ce sa fac'",
    visible: true
  }
}`,...(P=(L=p.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var W,M,N;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: Template,
  args: {
    text: "Yuhu! I'm a tooltip 🙃, and I'm a long text that probably shouldn't be shown here but 'ce sa fac'",
    'always-visible': true
  }
}`,...(N=(M=m.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var O,E,B;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    <bq-tooltip
      distance=\${args.distance}
      display-on=\${args['display-on']}
      ?hide-arrow=\${args['hide-arrow']}
      placement=\${args.placement}
      same-width=\${args['same-width']}
      ?visible=\${args.visible}
    >
      \${args.text}
      <bq-button slot="trigger">
        <bq-icon name="mouse" slot="prefix"></bq-icon>
        Click me!
      </bq-button>
    </bq-tooltip>
  \`,
  args: {
    'display-on': 'click',
    text: "Yuhu! I'm a tooltip 🙃",
    visible: true
  }
}`,...(B=(E=d.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};const ae=["Default","Bottom","Right","Left","NoArrow","SameWidth","LongContent","AlwaysVisible","DisplayOnClick"];export{m as AlwaysVisible,s as Bottom,a as Default,d as DisplayOnClick,n as Left,p as LongContent,l as NoArrow,i as Right,c as SameWidth,ae as __namedExportsOrder,re as default};
