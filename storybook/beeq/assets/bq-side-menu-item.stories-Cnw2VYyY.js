import{x as m}from"./lit-html-CeYizTxc.js";import{ae as e,ar as o,as as s,at as u}from"./index-Bbs29GIG.js";import{u as d}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function a(t){const n={a:"a",blockquote:"blockquote",li:"li",p:"p",ul:"ul",...d(),...t.components};return e.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:e.jsxs("div",{className:"bq-doc__container",children:[e.jsx(o,{children:"Side menu item"}),e.jsx(n.p,{children:`A side menu item is a navigation element typically placed on the side or left-hand side of a web page or application.
It serves as a hierarchical or categorical navigation option, allowing users to access different sections or pages within the application.`}),e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The Side menu item component must be used inside the ",e.jsx(n.a,{href:"?path=/docs/components-side-menu--overview",children:"Side menu component"})," to function properly."]}),`
`]}),e.jsx(s,{children:"Usage"}),e.jsx(n.p,{children:"Use icons and labels: Users often rely on both visual cues and text labels to understand the purpose of each menu item. Use distinct icons or symbols to represent different sections or actions, and accompany them with clear text labels for better accessibility."}),e.jsx(s,{children:"👍 When to use"}),e.jsx(n.p,{children:"Side menu items are commonly used in web and mobile applications that require a hierarchical or multi-level navigation structure. They are particularly useful when:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Navigating different sections: If your application has multiple sections or modules that need to be accessed frequently, a side menu item can provide quick and easy navigation between these sections."}),`
`,e.jsx(n.li,{children:"Organizing content: Side menu items are beneficial when you have a large amount of content or options that need to be organized in a hierarchical manner. By displaying submenus or nested items, users can easily navigate through different levels of content."}),`
`]}),e.jsx(o,{children:"Properties"}),e.jsx(u,{of:"bq-side-menu-item"})]})})}function p(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}const S={title:"Components/Side menu/Side menu item",component:"bq-side-menu-item",parameters:{docs:{page:p}},argTypes:{active:{control:"boolean"},disabled:{control:"boolean"},collapse:{control:"boolean"},text:{control:"text",table:{disable:!0}},bqBlur:{action:"bqBlur"},bqFocus:{action:"bqFocus"},bqClick:{action:"bqClick"}},args:{active:!1,disabled:!1,collapse:!1,text:"Menu item"}},b=t=>m`
  <bq-side-menu-item
    ?active=${t.active}
    ?disabled=${t.disabled}
    ?collapse=${t.collapse}
    @bqBlur=${t.bqBlur}
    @bqClick=${t.bqClick}
    @bqFocus=${t.bqFocus}
  >
    <bq-icon name="star-four" slot="prefix"></bq-icon>
    ${t.text}
    <bq-badge class="ml-auto" slot="suffix"> 5 </bq-badge>
  </bq-side-menu-item>
`,i={render:b,args:{}};var r,c,l;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(l=(c=i.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const k=["Default"];export{i as Default,k as __namedExportsOrder,S as default};
