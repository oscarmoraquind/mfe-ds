import{e as c}from"./class-map-Bw_4Dzan.js";import{x as r}from"./lit-html-CeYizTxc.js";import{ae as e,ar as d,as as a,at as b}from"./index-Bbs29GIG.js";import{u as q}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import{T as w,a as $,b as C}from"./bq-tab.types-DM9Rirqo.js";import"./directive-CF8sV3Lr.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function p(t){const n={li:"li",p:"p",ul:"ul",...q(),...t.components};return e.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:e.jsxs("div",{className:"bq-doc__container",children:[e.jsx(d,{children:"Tabs or Tab Group"}),e.jsx(n.p,{children:`The Tabs component is a user interface (UI) element that you can use to display content in multiple sections, allowing only one section to be visible at a time.
Tabs are typically placed in a horizontal bar that displays clickable buttons with labels for each section.
Tabs provide a clean and organized display of content, making it easier for users to navigate and understand the information presented.`}),e.jsx(a,{children:"Usage"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use a clear and consistent visual hierarchy to indicate which sections are most important or relevant to the user."}),`
`,e.jsx(n.li,{children:"Consider using icons or images in addition to text labels to make the purpose of each section more clear and visually appealing."}),`
`,e.jsx(n.li,{children:"Ensure that the tab bar is visible and easily accessible at all times, even when the user scrolls through the page or interface."}),`
`,e.jsx(n.li,{children:"Consider providing a default tab selection to avoid confusion for users who may not know which section to select first."}),`
`,e.jsx(n.li,{children:"Avoid using too many colors or visual effects, as this can distract from the content and make the interface appear cluttered or overwhelming."}),`
`,e.jsx(n.li,{children:"Consider using animations or transitions to provide visual feedback when the user selects a new tab or section."}),`
`,e.jsx(n.li,{children:"Test the Tabs component with real users to ensure that it is intuitive and meets their needs and expectations."}),`
`]}),e.jsx(a,{children:"👍 When to use"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use the Tabs component when you have a large amount of content that can be divided into distinct, related sections."}),`
`,e.jsx(n.li,{children:"Use the Tabs component when you want to simplify the navigation of a complex interface, by dividing it into smaller, more manageable sections."}),`
`]}),e.jsx(d,{children:"Properties"}),e.jsx(a,{children:"bq-tab-group"}),e.jsx(b,{of:"bq-tab-group"}),e.jsx(a,{children:"bq-tab"}),e.jsx(b,{of:"bq-tab"})]})})}function _(t={}){const{wrapper:n}={...q(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(p,{...t})}):p(t)}const L={title:"Components/Tabs",component:"bq-tab-group",parameters:{docs:{page:_}},argTypes:{size:{control:"select",options:[...w]},orientation:{control:"select",options:[...$]},placement:{control:"select",options:[...C]},"disable-divider":{control:"boolean"},tabs:{control:"text",table:{disable:!0}},icons:{control:"text",table:{disable:!0}},bqChange:{action:"bqChange"},bqFocus:{action:"bqFocus",table:{disable:!0}},bqBlur:{action:"bqBlur",table:{disable:!0}}},args:{size:"medium",orientation:"horizontal",placement:"start","disable-divider":!1,tabs:[{id:1,label:"First"},{id:2,label:"Second"},{id:3,label:"Long name"},{id:4,label:"Four",disabled:!0},{id:5,label:"Five"},{id:6,label:"Six"},{id:7,label:"Seven"},{id:8,label:"Eight"}]}},l=t=>r`
    <main
      class=${c({flex:t.orientation==="vertical","flex-row-reverse":t.placement==="end","gap-xs2":!0})}
    >
      <bq-tab-group
        class=${c({"m-be-m":t.orientation!=="vertical"})}
        value="5"
        .size=${t.size}
        .orientation=${t.orientation}
        .placement=${t.placement}
        ?disable-divider=${t["disable-divider"]}
        @bqChange=${t.bqChange}
        @bqFocus=${t.bqFocus}
        @bqBlur=${t.bqBlur}
      >
        ${t.tabs.map((n,y)=>r`
            <bq-tab tab-id=${n.id} ?disabled=${n.disabled}>
              ${n.label}
              ${t.icons?r`<bq-icon name="${t.icons[y%t.icons.length]}" slot="icon"></bq-icon>`:null}
            </bq-tab>
          `)}
      </bq-tab-group>
      <div class="border h-80 w-full flex-1 border-dashed border-primary bg-ui-alt">
        <h3 class="m-l">Tab content</h3>
      </div>
    </main>
  `,i={render:l},o={render:l,args:{orientation:"vertical"}},s={render:l,args:{icons:["pulse","bell","airplane-in-flight","airplane-tilt","align-right-simple","anchor","anchor-simple","android-logo"]}};var m,u,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,f,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: Template,
  args: {
    orientation: 'vertical'
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,T,j;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: Template,
  args: {
    icons: ['pulse', 'bell', 'airplane-in-flight', 'airplane-tilt', 'align-right-simple', 'anchor', 'anchor-simple', 'android-logo']
  }
}`,...(j=(T=s.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const O=["Default","Vertical","Icon"];export{i as Default,s as Icon,o as Vertical,O as __namedExportsOrder,L as default};
