import{x as n}from"./lit-html-CeYizTxc.js";import{o as d}from"./if-defined-C7zjO9dX.js";import{ae as e,ar as p,as as m,at as D}from"./index-Bbs29GIG.js";import{u as L}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function x(s){const t={li:"li",p:"p",ul:"ul",...L(),...s.components};return e.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:e.jsxs("div",{className:"bq-doc__container",children:[e.jsx(p,{children:"Card"}),e.jsx(t.p,{children:`The Card component serves as a versatile container designed for flexible content presentation within user interfaces.
Its structure accommodates various styles, allowing users to customize and adapt it according to their design preferences.
The Card is equipped with a slot that offers users the freedom to insert content in a manner that suits their application or webpage.`}),e.jsx(m,{children:"Usage"}),e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:`Use card for stylish adaptability: customize and adapt the Card component to seamlessly integrate with the visual theme of your website or application.
Its adaptability allows you to style it according to your preferences, ensuring a cohesive and appealing design.`}),`
`,e.jsx(t.li,{children:`Use card for organized content presentation: leverage the card's structured layout to neatly organize and present various content types, such as text, images, or interactive elements.
Enhance the visual appeal of your interfaces while maintaining a well-organized presentation.`}),`
`,e.jsx(t.li,{children:`Use card for versatile applications: whether showcasing product details, presenting highlights, or displaying information in a structured manner, the Card component offers a
versatile solution for a wide range of UI contexts. Tailor it to suit your specific application needs.`}),`
`]}),e.jsx(m,{children:"👍 When to use"}),e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:`When to opt for information presentation: choose the card component when aiming to present information in a visually organized and aesthetically pleasing manner.
Its design enhances readability and user engagement, making it ideal for effective information presentation.`}),`
`,e.jsx(t.li,{children:`When to highlight features: opt for the card component when you need to highlight specific features or details. Its adaptable design allows for creative and attention-grabbing
presentations, making it an excellent choice for showcasing important aspects.`}),`
`,e.jsx(t.li,{children:`When to embrace responsive design: choose the card for responsive design requirements. Its flexibility enables it to adapt seamlessly to different screen sizes and orientations,
ensuring a consistent and user-friendly experience across various devices.`}),`
`,e.jsx(t.li,{children:`When to utilize customizable layouts: choose the card component when requiring a container with customizable layouts. Its slot mechanism empowers users to insert and arrange content
elements according to their unique design preferences, providing a personalized touch to your UI.`}),`
`]}),e.jsx(p,{children:"Properties"}),e.jsx(D,{of:"bq-card"})]})})}function _(s={}){const{wrapper:t}={...L(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(x,{...s})}):x(s)}const R=["default","minimal"],S=["none","xs2","xs","s","m","l","full"],F={title:"Components/Card",component:"bq-card",parameters:{docs:{page:_}},argTypes:{border:{control:"select",options:[...S]},type:{control:"select",options:[...R]},content:{control:"text",table:{disable:!0}}},args:{border:"m",type:"default"}},a=s=>n`
  <div class="max-w-sm">
    <bq-card border=${s.border} type=${d(s.type)}>${d(s.content)}</bq-card>
  </div>
`,i={render:a,args:{content:n`
      <div class="flex flex-col gap-6">
        <div>
          <div class="flex flex-row items-center gap-xs2">
            <span class="text-text-secondary">Title</span> <bq-icon color="text--brand" size="16" name="star" weight="bold" part="icon" exportparts="base,svg" /></bq-icon>
          </div>
          <h4>194</h4>
        </div>
        <div class="flex flex-col">
          <p><span class="font-bold">120</span> days</p>
          <p class="text-text-secondary">avg resolution</p>
        </div>
        <div class="flex flex-col">
          <p><span class="font-bold">120</span> days</p>
          <p class="text-text-secondary">avg resolution</p>
        </div>
      </div>
    `}},r={render:a,args:{content:n`
      <div class="flex flex-col font-medium gap-m">
        <h6 class="text-m font-medium">Title</h6>
        <div class="flex flex-col gap-s">
          <div class="flex flex-row items-center gap-xs">
            <bq-icon name="star" weight="bold" part="icon" exportparts="base,svg" /></bq-icon>
            Lorem Ipsum is simply dummy text 
          </div>
          <div class="flex flex-row items-center gap-xs">
            <bq-icon name="star" weight="bold" part="icon" exportparts="base,svg" /></bq-icon>
            Lorem Ipsum is simply dummy text 
          </div>
          <div class="flex flex-row items-center gap-xs">
            <bq-icon name="star" weight="bold" part="icon" exportparts="base,svg" /></bq-icon>
            Lorem Ipsum is simply dummy text 
          </div>
          <div class="flex flex-row items-center gap-xs">
            <bq-icon name="star" weight="bold" part="icon" exportparts="base,svg" /></bq-icon>
            Lorem Ipsum is simply dummy text 
          </div>
        </div>
      </div>
    `}},o={render:a,args:{content:n`
      <div class="flex flex-row gap-m">
        <bq-icon color="text--brand" size="56" name="star" weight="bold" part="icon" exportparts="base,svg" /></bq-icon>
        <div>
          <div class="flex flex-row items-center gap-xs2">
            <span class="text-text-secondary">Title</span> <bq-icon color="text--brand" size="16" name="star" weight="bold" part="icon" exportparts="base,svg" /></bq-icon>
          </div>
          <div class="flex items-end gap-xs">
            <h4>194</h4>
            <span class="text-text-success">+24%</span>
            <span class="text-text-secondary">than last mo.</span>
          </div>
        </div>
      </div>
    `}},l={render:a,args:{content:n`
      <div class="flex flex-col items-start gap-m">
        <bq-icon color="text--brand" size="56" name="star" weight="bold" part="icon" exportparts="base,svg" /></bq-icon>
        <div class="flex flex-col gap-xs2">
          <h6 class="text-m font-medium">Title</h6>
          <p class="text-text-secondary items-stretch">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <bq-button appearance="link">Button</bq-button>
      </div>
    `}},c={render:a,args:{content:n`
      <div class="flex is-full">
        <div class="flex p-i-l p-b-l bg-bg-brand rounded-s-[--bq-card--borderRadius]">
          <bq-icon color="text--alt" size="24" name="star" weight="bold" part="icon" exportparts="base,svg" /></bq-icon>
        </div>
        <div class="flex items-center p-i-[--bq-card--paddingMinimal] p-b-[--bq-card--paddingMinimal] justify-between is-full">
          <div class="flex flex-col ps-2">
            <h6 class="text-m font-medium">Title</h6>
            <p class="text-text-secondary">description</p>
          </div>
          <div class="p-i-[--bq-card--paddingMinimal] p-b-[--bq-card--paddingMinimal]">
            <bq-icon color="text--brand" size="24" name="star" weight="bold" part="icon" exportparts="base,svg" /></bq-icon>
          </div>
        </div>
      </div>
    `,type:"minimal"}};var b,g,u;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    content: html\`
      <div class="flex flex-col gap-6">
        <div>
          <div class="flex flex-row items-center gap-xs2">
            <span class="text-text-secondary">Title</span> <bq-icon color="text--brand" size="16" name="star" weight="bold" part="icon" exportparts="base,svg" /></bq-icon>
          </div>
          <h4>194</h4>
        </div>
        <div class="flex flex-col">
          <p><span class="font-bold">120</span> days</p>
          <p class="text-text-secondary">avg resolution</p>
        </div>
        <div class="flex flex-col">
          <p><span class="font-bold">120</span> days</p>
          <p class="text-text-secondary">avg resolution</p>
        </div>
      </div>
    \`
  }
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,v,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  args: {
    content: html\`
      <div class="flex flex-col font-medium gap-m">
        <h6 class="text-m font-medium">Title</h6>
        <div class="flex flex-col gap-s">
          <div class="flex flex-row items-center gap-xs">
            <bq-icon name="star" weight="bold" part="icon" exportparts="base,svg" /></bq-icon>
            Lorem Ipsum is simply dummy text 
          </div>
          <div class="flex flex-row items-center gap-xs">
            <bq-icon name="star" weight="bold" part="icon" exportparts="base,svg" /></bq-icon>
            Lorem Ipsum is simply dummy text 
          </div>
          <div class="flex flex-row items-center gap-xs">
            <bq-icon name="star" weight="bold" part="icon" exportparts="base,svg" /></bq-icon>
            Lorem Ipsum is simply dummy text 
          </div>
          <div class="flex flex-row items-center gap-xs">
            <bq-icon name="star" weight="bold" part="icon" exportparts="base,svg" /></bq-icon>
            Lorem Ipsum is simply dummy text 
          </div>
        </div>
      </div>
    \`
  }
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,q,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  args: {
    content: html\`
      <div class="flex flex-row gap-m">
        <bq-icon color="text--brand" size="56" name="star" weight="bold" part="icon" exportparts="base,svg" /></bq-icon>
        <div>
          <div class="flex flex-row items-center gap-xs2">
            <span class="text-text-secondary">Title</span> <bq-icon color="text--brand" size="16" name="star" weight="bold" part="icon" exportparts="base,svg" /></bq-icon>
          </div>
          <div class="flex items-end gap-xs">
            <h4>194</h4>
            <span class="text-text-success">+24%</span>
            <span class="text-text-secondary">than last mo.</span>
          </div>
        </div>
      </div>
    \`
  }
}`,...(w=(q=o.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var z,T,j;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: Template,
  args: {
    content: html\`
      <div class="flex flex-col items-start gap-m">
        <bq-icon color="text--brand" size="56" name="star" weight="bold" part="icon" exportparts="base,svg" /></bq-icon>
        <div class="flex flex-col gap-xs2">
          <h6 class="text-m font-medium">Title</h6>
          <p class="text-text-secondary items-stretch">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <bq-button appearance="link">Button</bq-button>
      </div>
    \`
  }
}`,...(j=(T=l.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var I,C,M;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: Template,
  args: {
    content: html\`
      <div class="flex is-full">
        <div class="flex p-i-l p-b-l bg-bg-brand rounded-s-[--bq-card--borderRadius]">
          <bq-icon color="text--alt" size="24" name="star" weight="bold" part="icon" exportparts="base,svg" /></bq-icon>
        </div>
        <div class="flex items-center p-i-[--bq-card--paddingMinimal] p-b-[--bq-card--paddingMinimal] justify-between is-full">
          <div class="flex flex-col ps-2">
            <h6 class="text-m font-medium">Title</h6>
            <p class="text-text-secondary">description</p>
          </div>
          <div class="p-i-[--bq-card--paddingMinimal] p-b-[--bq-card--paddingMinimal]">
            <bq-icon color="text--brand" size="24" name="star" weight="bold" part="icon" exportparts="base,svg" /></bq-icon>
          </div>
        </div>
      </div>
    \`,
    type: 'minimal'
  }
}`,...(M=(C=c.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};const H=["Default","FeatureHighlights","PerformanceOverview","DetailedContent","MiniCard"];export{i as Default,l as DetailedContent,r as FeatureHighlights,c as MiniCard,o as PerformanceOverview,H as __namedExportsOrder,F as default};
