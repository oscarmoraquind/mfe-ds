import{x as o}from"./lit-html-CeYizTxc.js";import{ae as e,ar as d,as as p,at as A}from"./index-Bbs29GIG.js";import{u as O}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function m(n){const t={code:"code",li:"li",p:"p",ul:"ul",...O(),...n.components};return e.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:e.jsxs("div",{className:"bq-doc__container",children:[e.jsx(d,{children:"Dropdown"}),e.jsx(t.p,{children:`The Dropdown Component is commonly used when presenting a list of selectable options that are too numerous to fit comfortably on the screen. They provide an efficient way to save space and present a long list of options in a compact and organized manner.
Dropdowns are commonly used in navigation menus, forms, and other interactive elements where users need to select from a list of options.`}),e.jsx(p,{children:"Usage"}),e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Providing users with a list of options in a compact and organized manner, such as by displaying a dropdown menu, a select box, or a list of options."}),`
`,e.jsx(t.li,{children:"Allowing users to quickly and easily select one or multiple options from the list, so that they can complete a task or make a choice."}),`
`,e.jsx(t.li,{children:"Providing a clear and concise way to display options, so that users can easily see and understand the content."}),`
`,e.jsx(t.li,{children:"Allowing users to type or search for specific options within the dropdown, so that they can quickly find the options that they need."}),`
`]}),e.jsxs(t.p,{children:["To display a dropdown you need to have a trigger element (e.g.: ",e.jsx(t.code,{children:"bq-button"}),", ",e.jsx(t.code,{children:"bq-avatar"}),", etc) and all the elements insinde the panel (e.g.: ",e.jsx(t.code,{children:"bq-option"}),`).
The Dropdown Component has as dependency the `,e.jsx(t.code,{children:"bq-panel"})," utility component."]}),e.jsx(p,{children:"👍 When to use"}),e.jsx(t.p,{children:"Do's"}),e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Use clear and concise language for the options in the dropdown, so that users can easily understand the context and meaning of the content."}),`
`,e.jsx(t.li,{children:"Use visually distinct styles and colors for the options in the dropdown, so that users can easily see and understand the type and importance of the content."}),`
`,e.jsx(t.li,{children:"Ensure that the dropdown component is responsive and easy to use, with a smooth and intuitive interaction that is accessible to users with different abilities and needs."}),`
`,e.jsx(t.li,{children:"Provide clear and concise instructions or actions for users to select options or close the dropdown, so that they can complete their task or interaction."}),`
`,e.jsx(t.li,{children:"Consider the use of keyboard navigation, so that users can easily navigate and select options within the dropdown using their keyboard."}),`
`]}),e.jsx(t.p,{children:"Don'ts"}),e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Use dropdowns in a way that interferes with other elements on the page or with other interactions, such as covering important content or blocking links or buttons."}),`
`,e.jsx(t.li,{children:"Use dropdowns for options that are not important or relevant, as this can lead to confusion or frustration for users."}),`
`,e.jsx(t.li,{children:"Use dropdowns in a way that is misleading or inaccurate, as this can erode trust and credibility with users."}),`
`,e.jsx(t.li,{children:"Use dropdowns in a way that makes it difficult for users to see or understand the options, such as by using small or unclear text or by displaying too many options at once."}),`
`]}),e.jsx(d,{children:"Properties"}),e.jsx(A,{of:"bq-dropdown"})]})})}function E(n={}){const{wrapper:t}={...O(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(m,{...n})}):m(n)}const z={title:"Components/Dropdown",component:"bq-dropdown",parameters:{docs:{page:E}},argTypes:{disabled:{control:"boolean"},distance:{control:"number"},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"]},open:{control:"boolean"},"panel-height":{control:"text"},"keep-open-on-select":{control:"boolean"},"same-width":{control:"boolean"},skidding:{control:"number"},strategy:{control:"select",options:["fixed","absolute"]},bqSelect:{action:"bqSelect",table:{disable:!0}},trigger:{control:"text",table:{disable:!0}},enableOptionGroup:{control:"boolean",table:{disable:!0}}},args:{disabled:!1,distance:4,placement:"bottom-start",open:!1,"panel-height":void 0,"keep-open-on-select":!1,"same-width":!1,skidding:0,strategy:"fixed"}},s=n=>{const t=o`
    <bq-option value="users">
      <bq-icon name="users" slot="prefix"></bq-icon>
      <span>Users</span>
    </bq-option>

    <bq-option value="user">
      <bq-icon name="user" slot="prefix"></bq-icon>
      <span>My profile</span>
    </bq-option>

    <bq-option value="dashboard">
      <bq-icon name="sliders" slot="prefix"></bq-icon>
      <span>Dashboard</span>
    </bq-option>

    <bq-option value="settings">
      <span>Settings</span>
      <bq-icon name="gear" slot="prefix"></bq-icon>
    </bq-option>

    <bq-option value="logout">
      <span>Logout</span>
      <bq-icon name="sign-out" slot="suffix"></bq-icon>
    </bq-option>
  `,S=n.enableOptionGroup?o`
        <bq-option-group>
          <span slot="header-label">Configuration</span>
          ${t}
        </bq-option-group>
      `:t;return o`
    <bq-dropdown
      ?disabled=${n.disabled}
      distance=${n.distance}
      placement=${n.placement}
      ?open=${n.open}
      panel-height=${n["panel-height"]}
      ?keep-open-on-select=${n["keep-open-on-select"]}
      ?same-width=${n["same-width"]}
      skidding=${n.skidding}
      strategy=${n.strategy}
      @bqSelect=${n.bqSelect}
    >
      <!-- TRIGGER ELEMENT -->
      ${n.trigger}

      <bq-option-list> ${S} </bq-option-list>
    </bq-dropdown>
  `},r={render:n=>o`
    ${s({...n,trigger:o`
        <bq-button slot="trigger">
          Dropdown
          <bq-icon name="caret-down" slot="suffix"></bq-icon>
        </bq-button>
      `})}
  `,args:{open:!0}},a={render:n=>o`
    <div class="grid grid-cols-1 place-items-center gap-m m-bs-xxl3 sm:grid-cols-2">
      <!-- Bottom end -->
      ${s({...n,trigger:o`
          <bq-button slot="trigger">
            Dropdown
            <bq-icon name="caret-down" slot="suffix"></bq-icon>
          </bq-button>
        `})}
      <!-- Bottom end -->
      ${s({...n,placement:"bottom-end",trigger:o`
          <bq-button slot="trigger">
            Dropdown
            <bq-icon name="caret-down" slot="suffix"></bq-icon>
          </bq-button>
        `})}
    </div>
  `,args:{open:!0}},i={render:n=>o`
    <div class="grid grid-cols-1 place-items-center gap-m m-bs-xxl3 sm:grid-cols-2">
      <!-- Button icon -->
      ${s({...n,trigger:o`
          <bq-button appearance="secondary" size="medium" type="button" variant="standard" slot="trigger">
            <span class="flex items-center gap-1">
              <bq-icon name="dots-three-vertical"></bq-icon>
            </span>
          </bq-button>
        `})}
      <!-- Avatar -->
      ${s({...n,trigger:o`
          <bq-avatar
            alt-text="User profile"
            image="https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
            label="Avatar component label"
            slot="trigger"
          ></bq-avatar>
        `})}
    </div>
  `,args:{open:!0,placement:"bottom"}},l={render:n=>o`
    <div class="rounded-m border-s border-solid border-success bg-ui-success-alt p-b-m p-i-m m-be-l">
      <p class="text-m font-bold m-be-xs">💡 NOTE:</p>
      If <code class="text-text-danger">keepOpenOnSelect</code> is set, the dropdown will remain open after a selection
      is made.
    </div>
    ${s({...n,trigger:o`
        <bq-button slot="trigger">
          Dropdown
          <bq-icon name="caret-down" slot="suffix"></bq-icon>
        </bq-button>
      `})}
  `,args:{"keep-open-on-select":!0,open:!0}},c={render:n=>o`
    ${s({...n,trigger:o`
        <bq-button slot="trigger">
          Dropdown
          <bq-icon name="caret-down" slot="suffix"></bq-icon>
        </bq-button>
      `})}
  `,args:{open:!0,enableOptionGroup:!0}};var b,u,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    \${Template({
    ...args,
    trigger: html\`
        <bq-button slot="trigger">
          Dropdown
          <bq-icon name="caret-down" slot="suffix"></bq-icon>
        </bq-button>
      \`
  })}
  \`,
  args: {
    open: true
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,f,q;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    <div class="grid grid-cols-1 place-items-center gap-m m-bs-xxl3 sm:grid-cols-2">
      <!-- Bottom end -->
      \${Template({
    ...args,
    trigger: html\`
          <bq-button slot="trigger">
            Dropdown
            <bq-icon name="caret-down" slot="suffix"></bq-icon>
          </bq-button>
        \`
  })}
      <!-- Bottom end -->
      \${Template({
    ...args,
    placement: 'bottom-end',
    trigger: html\`
          <bq-button slot="trigger">
            Dropdown
            <bq-icon name="caret-down" slot="suffix"></bq-icon>
          </bq-button>
        \`
  })}
    </div>
  \`,
  args: {
    open: true
  }
}`,...(q=(f=a.parameters)==null?void 0:f.docs)==null?void 0:q.source}}};var x,w,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    <div class="grid grid-cols-1 place-items-center gap-m m-bs-xxl3 sm:grid-cols-2">
      <!-- Button icon -->
      \${Template({
    ...args,
    trigger: html\`
          <bq-button appearance="secondary" size="medium" type="button" variant="standard" slot="trigger">
            <span class="flex items-center gap-1">
              <bq-icon name="dots-three-vertical"></bq-icon>
            </span>
          </bq-button>
        \`
  })}
      <!-- Avatar -->
      \${Template({
    ...args,
    trigger: html\`
          <bq-avatar
            alt-text="User profile"
            image="https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
            label="Avatar component label"
            slot="trigger"
          ></bq-avatar>
        \`
  })}
    </div>
  \`,
  args: {
    open: true,
    placement: 'bottom'
  }
}`,...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var v,j,$;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    <div class="rounded-m border-s border-solid border-success bg-ui-success-alt p-b-m p-i-m m-be-l">
      <p class="text-m font-bold m-be-xs">💡 NOTE:</p>
      If <code class="text-text-danger">keepOpenOnSelect</code> is set, the dropdown will remain open after a selection
      is made.
    </div>
    \${Template({
    ...args,
    trigger: html\`
        <bq-button slot="trigger">
          Dropdown
          <bq-icon name="caret-down" slot="suffix"></bq-icon>
        </bq-button>
      \`
  })}
  \`,
  args: {
    'keep-open-on-select': true,
    open: true
  }
}`,...($=(j=l.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var D,k,T;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    \${Template({
    ...args,
    trigger: html\`
        <bq-button slot="trigger">
          Dropdown
          <bq-icon name="caret-down" slot="suffix"></bq-icon>
        </bq-button>
      \`
  })}
  \`,
  args: {
    open: true,
    enableOptionGroup: true
  }
}`,...(T=(k=c.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const I=["Default","Placement","CustomTrigger","KeepOpen","WithOptionGroup"];export{i as CustomTrigger,r as Default,l as KeepOpen,a as Placement,c as WithOptionGroup,I as __namedExportsOrder,z as default};
