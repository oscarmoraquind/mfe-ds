import{x as p,E as D}from"./lit-html-CeYizTxc.js";import{ae as e,ar as d,as as a,at as m}from"./index-Bbs29GIG.js";import{u as _}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function b(n){const t={p:"p",..._(),...n.components};return e.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:e.jsxs("div",{className:"bq-doc__container",children:[e.jsx(d,{children:"Side Menu"}),e.jsx(t.p,{children:`Menus are commonly used in user interfaces to provide a hierarchical navigation structure, providing users with a clear and intuitive way to navigate and interact with their application.
The Side Menu Component typically consists of a list of links or icons that allow users to access various sections, pages, or functionalities of an application. It remains collapsed by default and can be triggered to expand or slide in by clicking the footer button.`}),e.jsx(a,{children:"Usage"}),e.jsx(t.p,{children:`The purpose of a Side Menu Component is to offer a consistent and accessible way for users to navigate through an application's content or perform specific actions. It allows users to quickly switch between different sections or views without cluttering the main screen or disrupting the workflow.
Side menus are commonly used in applications with complex hierarchies or a large number of features, such as dashboards, admin panels, or content-heavy applications.
It can be used as the main navigation for the application or as a secondary navigation for specific sections of the application.`}),e.jsx(a,{children:"Accessibility"}),e.jsx(t.p,{children:"The Side Menu Component is accessible to all users, including those with disabilities or who use assistive technologies. It's navigable using the keyboard and includes appropriate ARIA attributes to indicate the menu's role and state."}),e.jsx(d,{children:"Properties"}),e.jsx(a,{children:"bq-side-menu"}),e.jsx(m,{of:"bq-side-menu"}),e.jsx(a,{children:"bq-side-menu-item"}),e.jsx(m,{of:"bq-side-menu-item"})]})})}function A(n={}){const{wrapper:t}={..._(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(b,{...n})}):b(n)}const I=["brand","inverse","default"],u=["medium","small"],F={title:"Components/Side menu",component:"bq-side-menu",parameters:{docs:{page:A},layout:"fullscreen"},argTypes:{appearance:{control:"select",options:[...I]},collapse:{control:"boolean"},size:{control:"inline-radio",options:[...u]},bqCollapse:{action:"bqCollapse"},bqSelect:{action:"bqSelect"},footerContent:{control:"text",table:{disable:!0}}},args:{appearance:"default",collapse:!1,size:u[0]}},o=n=>p`
  <bq-side-menu
    appearance=${n.appearance}
    collapse=${n.collapse}
    size=${n.size}
    @bqCollapse=${n.bqCollapse}
    @bqSelect=${n.bqSelect}
  >
    <div class="flex items-center gap-s py-6 pl-s" slot="logo">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1080 1080" class="h-10 w-10">
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M251.8 942.3c-19.5-14.9-48-20.4-68.6-7.2-30.1 19.8-38.5 60.6-10.6 83.8 40.7 34.7 96 61.2 150.1 61.2 109.9 0 197-74.9 223.7-167 77 51.2 180.8 54 265 2.8l41.8 43.5c21.2 21.5 55.2 21.5 78.1 0 22.3-20.9 24-56.2 3.3-78.2l-41.8-43.5c55.8-82.1 57.5-186.2 10-265.6 93.2-20.4 172.4-105.2 176.9-217.7 6.7-171.4-165.2-277.2-309.1-190.7l-183 110.2c-5.6-7.7-11.7-14.9-18.4-22-49.1-51.8-119.4-72.7-186.4-63.4 0-6.6.6-13.8 1.7-20.9 3.9-27.6 14.5-52.9 35.2-73.3 22.9-21.5 24-56.2 3.3-78.2-21.1-21.5-55.1-21.5-78-.1-44.6 43-63.6 95.3-70.3 140.5-3.9 28.7-3.3 56.2 0 78.8-6.1 4.4-12.3 9.9-18.4 16-6.1 5.5-11.7 11.6-16.7 17.6-22.3-4.4-49.7-6.6-78.7-3.9-45.2 4.4-98.2 20.4-142.8 63.4-22.9 21.5-24 56.2-3.3 78.2 21.2 21.5 55.2 21.5 78.1 0 21.2-19.8 47.4-29.2 74.2-32 7.3 0 14.5-1.1 21.2 0-13.4 67.2 5 138.9 54.1 190.7 5.6 5.5 10.6 10.5 16.7 15.4l-22.3 32c-8.9 13.2-11.7 28.1-8.9 41.9l6.1 30.9c1.7 8.3-.6 17.1-5 23.7-7.3 11-13.9 13.2-24.5 15.4l-36.8 7.7c-16.7 3.3-31.8 13.8-41.8 29.2-20.6 30.9-12.8 71.6 17.3 90.9 30.1 19.3 70.9 9.9 91.5-20.9 10-15.4 13.4-33.1 10-49.6l-7.3-36.4c-2.2-10.5-2.2-18.2 4.5-28.7 4.5-7.2 11.2-12.1 19.5-14.3l30.7-7.2c13.9-3.3 26.2-12.1 34.6-25.3l15.1-23.1 88.2 162c39.1 72.7-18.4 163.7-104.3 163.7-24.8 0-51.6-13.2-73.9-30.3zM494 625.5l38.5 78.2c46.9-9.4 122.8-46.8 157.9-155.9L617.8 507l-61.9 59.5-61.4 59h-.5zm286.2 177.4c-58 55.7-146.2 51.2-194.7-2.8 70.9-25.3 152.9-83.2 198.1-196.2 54.1 51.3 56.3 142.3-3.4 199zM480.6 487.7c45.2-43.5 48.5-113.5 6.7-157-40.7-43.5-111-44.1-156.2-.6-45.2 43.5-48.5 113.5-6.7 157 40.7 43.6 111 44.2 156.2.6zm176.8-132.2L818.7 259c72.5-44.1 158.5 8.8 155.1 95.3-3.3 86.5-94.9 140-163.5 97l-152.9-95.8z"
          clip-rule="evenodd"
        />
      </svg>
      ${n.collapse?D:p`<h1 class="whitespace-nowrap text-xl">BEEQ</h1>`}
    </div>
    <bq-side-menu-item active>
      <bq-icon name="diamonds-four" slot="prefix"></bq-icon>
      Dashboard
    </bq-side-menu-item>
    <bq-side-menu-item>
      <bq-icon name="package" slot="prefix"></bq-icon>
      Products
      <bq-badge slot="suffix"> 5 </bq-badge>
    </bq-side-menu-item>
    <bq-side-menu-item disabled>
      <bq-icon name="gauge" slot="prefix"></bq-icon>
      Performance
    </bq-side-menu-item>
    <bq-side-menu-item>
      <bq-icon name="truck" slot="prefix"></bq-icon>
      Deliver
    </bq-side-menu-item>
    <bq-side-menu-item>
      <bq-icon name="files" slot="prefix"></bq-icon>
      Documents
    </bq-side-menu-item>
    <bq-side-menu-item>
      <bq-icon name="stack" slot="prefix"></bq-icon>
      Inventory
    </bq-side-menu-item>
    <bq-side-menu-item>
      <bq-icon name="calendar" slot="prefix"></bq-icon>
      Calendar
    </bq-side-menu-item>
    <bq-side-menu-item>
      <bq-icon name="gear" slot="prefix"></bq-icon>
      Settings
    </bq-side-menu-item>
    ${n.footerContent}
  </bq-side-menu>

  <main class="grid grid-cols-1 p-m">
    <h1 class="mb-l">Dashboard</h1>
    <div class="border h-80 w-full border-dashed border-primary bg-[--bq-ui--alt]">
      <!-- Your content -->
    </div>
  </main>
`,s={render:o,args:{}},i={render:o,args:{appearance:"brand"}},r={render:o,args:{collapse:!0}},c={render:o,args:{size:"small"}},l={render:o,args:{footerContent:p`
      <div class="" slot="footer">
        <bq-button appearance="text" slot="footer">
          <bq-icon name="bell"></bq-icon>
        </bq-button>
        <bq-button appearance="text" slot="footer">
          <bq-icon name="chats-circle"></bq-icon>
        </bq-button>
        <bq-button appearance="text" slot="footer">
          <bq-icon name="sliders"></bq-icon>
        </bq-button>
      </div>
    `}};var q,f,h;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,x,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    appearance: 'brand'
  }
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var w,S,C;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: Template,
  args: {
    collapse: true
  }
}`,...(C=(S=r.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var y,j,M;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: 'small'
  }
}`,...(M=(j=c.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var z,E,T;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: Template,
  args: {
    footerContent: html\`
      <div class="" slot="footer">
        <bq-button appearance="text" slot="footer">
          <bq-icon name="bell"></bq-icon>
        </bq-button>
        <bq-button appearance="text" slot="footer">
          <bq-icon name="chats-circle"></bq-icon>
        </bq-button>
        <bq-button appearance="text" slot="footer">
          <bq-icon name="sliders"></bq-icon>
        </bq-button>
      </div>
    \`
  }
}`,...(T=(E=l.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const W=["Default","Appearance","Collapse","SmallSize","WithFooter"];export{i as Appearance,r as Collapse,s as Default,c as SmallSize,l as WithFooter,W as __namedExportsOrder,F as default};
