import{e as h}from"./class-map-Bw_4Dzan.js";import{x,E as X}from"./lit-html-CeYizTxc.js";import{o as n}from"./if-defined-C7zjO9dX.js";import{ae as t,ar as u,as as f,at as P}from"./index-Bbs29GIG.js";import{u as O}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./directive-CF8sV3Lr.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function v(e){const r={li:"li",p:"p",ul:"ul",...O(),...e.components};return t.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:t.jsxs("div",{className:"bq-doc__container",children:[t.jsx(u,{children:"Divider"}),t.jsx(r.p,{children:`A Divider is a UI component that visually separates or divides different sections or elements of a user interface.
This can be helpful in creating a clear and organized layout, improving the overall readability of the interface.`}),t.jsx(f,{children:"Usage"}),t.jsxs(r.ul,{children:[`
`,t.jsx(r.li,{children:"Use dividers consistently throughout the interface to maintain a clear and consistent look and feel."}),`
`,t.jsx(r.li,{children:"Consider using different styles or colors for dividers to indicate different types of sections or elements."}),`
`,t.jsx(r.li,{children:"Use dividers to create a sense of hierarchy or order within the interface."}),`
`,t.jsx(r.li,{children:"Avoid overusing dividers, as this can create a cluttered and busy appearance."}),`
`,t.jsx(r.li,{children:"Avoid using dividers in a way that creates confusion, such as by separating elements that should be considered together."}),`
`,t.jsx(r.li,{children:"Avoid using dividers in a way that blocks or hides other parts of the interface, reducing visibility and usability."}),`
`]}),t.jsx(f,{children:"👍 When to use"}),t.jsxs(r.ul,{children:[`
`,t.jsx(r.li,{children:"Use a divider component to visually separate or divide different sections or elements of a user interface."}),`
`,t.jsx(r.li,{children:"Use a divider component to create clear boundaries between different sections or elements, such as between different sections of content or different groups of related items."}),`
`,t.jsx(r.li,{children:"Use a divider component to group similar items, such as a list of related links or buttons."}),`
`,t.jsx(r.li,{children:"Use a divider component to create a sense of hierarchy or order within the interface."}),`
`]}),t.jsx(u,{children:"Properties"}),t.jsx(P,{of:"bq-divider"})]})})}function G(e={}){const{wrapper:r}={...O(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(v,{...e})}):v(e)}const K=["horizontal","vertical"],W=["start","middle","end"],B=["square","round","butt"],ae={title:"Components/Divider",component:"bq-divider",parameters:{docs:{page:G},layout:"centered"},argTypes:{orientation:{control:"select",options:[...K]},dashed:{control:"boolean"},"stroke-color":{control:"text"},"title-alignment":{control:"select",options:[...W]},"stroke-dash-width":{control:"number"},"stroke-dash-gap":{control:"number"},"stroke-thickness":{control:"number"},"stroke-basis":{control:"number"},"stroke-linecap":{control:"select",options:[...B]},"title-text":{control:"text",table:{disable:!0}}},args:{orientation:"horizontal",dashed:!1,"stroke-color":"stroke--primary","title-alignment":"middle","stroke-dash-width":12,"stroke-dash-gap":7,"stroke-thickness":1,"stroke-basis":0,"stroke-linecap":"butt"}},s=e=>x`
  <div
    class=${h({"bs-[70dvh]":e.orientation==="vertical","is-[70dvw]":e.orientation==="horizontal"})}
  >
    <bq-divider
      orientation=${n(e.orientation)}
      ?dashed=${e.dashed}
      stroke-color=${n(e["stroke-color"])}
      stroke-dash-width=${n(e["stroke-dash-width"])}
      stroke-dash-gap=${n(e["stroke-dash-gap"])}
      stroke-thickness=${n(e["stroke-thickness"])}
      stroke-basis=${n(e["stroke-basis"])}
      stroke-linecap=${n(e["stroke-linecap"])}
      title-alignment=${n(e["title-alignment"])}
    >
      ${e["title-text"]?x`<p class="m-0 text-nowrap p-0">${e["title-text"]}</p>`:X}
    </bq-divider>
  </div>
`,i={render:s,args:{"title-text":"Default divider"}},o={render:s,args:{"title-text":"Horizontal divider"}},a={render:s,args:{orientation:"vertical","title-text":"Vertical divider"}},l={render:s,args:{dashed:!0}},d={render:s},c={render:e=>x`
    <div
      class="flex-col"
      class=${h({"flex gap-xxl":!0,"flex-col":e.orientation==="horizontal","flex-row":e.orientation==="vertical"})}
    >
      <!-- Default -->
      ${s(e)}
      <!-- with 'stoke-basis'  -->
      ${s({...e,"title-text":"Text start with stroke basis","stroke-basis":100})}
      ${s({...e,"title-text":"Text start with stroke basis","stroke-basis":300})}
    </div>
  `,args:{"title-alignment":"start","title-text":"Text start"}},p={render:e=>x`
    <div
      class="flex-col"
      class=${h({"flex gap-xxl":!0,"flex-col":e.orientation==="horizontal","flex-row":e.orientation==="vertical"})}
    >
      <!-- Default -->
      ${s(e)}
      <!-- with 'stoke-basis'  -->
      ${s({...e,"title-text":"Text end with stroke basis","stroke-basis":100})}
      ${s({...e,"title-text":"Text end with stroke basis","stroke-basis":300})}
    </div>
  `,args:{"title-alignment":"end","title-text":"Text end"}},m={render:s,args:{"title-text":"Text Middle"}};var b,k,g;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    'title-text': 'Default divider'
  }
}`,...(g=(k=i.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var T,w,$;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: Template,
  args: {
    'title-text': 'Horizontal divider'
  }
}`,...($=(w=o.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var j,D,y;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: Template,
  args: {
    orientation: 'vertical',
    'title-text': 'Vertical divider'
  }
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var E,_,z;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: Template,
  args: {
    dashed: true
  }
}`,...(z=(_=l.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var I,S,M;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: Template
}`,...(M=(S=d.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var N,A,U;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => html\`
    <div
      class="flex-col"
      class=\${classMap({
    'flex gap-xxl': true,
    'flex-col': args.orientation === 'horizontal',
    'flex-row': args.orientation === 'vertical'
  })}
    >
      <!-- Default -->
      \${Template(args)}
      <!-- with 'stoke-basis'  -->
      \${Template({
    ...args,
    'title-text': 'Text start with stroke basis',
    'stroke-basis': 100
  })}
      \${Template({
    ...args,
    'title-text': 'Text start with stroke basis',
    'stroke-basis': 300
  })}
    </div>
  \`,
  args: {
    'title-alignment': 'start',
    'title-text': 'Text start'
  }
}`,...(U=(A=c.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var q,V,C;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => html\`
    <div
      class="flex-col"
      class=\${classMap({
    'flex gap-xxl': true,
    'flex-col': args.orientation === 'horizontal',
    'flex-row': args.orientation === 'vertical'
  })}
    >
      <!-- Default -->
      \${Template(args)}
      <!-- with 'stoke-basis'  -->
      \${Template({
    ...args,
    'title-text': 'Text end with stroke basis',
    'stroke-basis': 100
  })}
      \${Template({
    ...args,
    'title-text': 'Text end with stroke basis',
    'stroke-basis': 300
  })}
    </div>
  \`,
  args: {
    'title-alignment': 'end',
    'title-text': 'Text end'
  }
}`,...(C=(V=p.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var L,R,H;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: Template,
  args: {
    'title-text': 'Text Middle'
  }
}`,...(H=(R=m.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};const le=["Default","Horizontal","Vertical","DashedLine","NoTitle","TextStart","TextEnd","TextMiddle"];export{l as DashedLine,i as Default,o as Horizontal,d as NoTitle,p as TextEnd,m as TextMiddle,c as TextStart,a as Vertical,le as __namedExportsOrder,ae as default};
