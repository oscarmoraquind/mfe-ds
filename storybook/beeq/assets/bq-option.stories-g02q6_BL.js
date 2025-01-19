import{x as t,E as m}from"./lit-html-CeYizTxc.js";import{o as A}from"./if-defined-C7zjO9dX.js";import{ae as n,ar as x,as as r,at as d}from"./index-Bbs29GIG.js";import{u as z}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function f(e){const i={code:"code",li:"li",p:"p",ul:"ul",...z(),...e.components};return n.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:n.jsxs("div",{className:"bq-doc__container",children:[n.jsx(x,{children:"Option"}),n.jsx(i.p,{children:`An option refers to a specific choice that appears in a list of selectable items that can be opened or closed by the user.
It can be an element of the navigation system that allows users to select different sections or pages within an application or it can be used within a dropdown list.`}),n.jsx(r,{children:"Usage"}),n.jsxs(i.p,{children:["It is used with the ",n.jsx(i.code,{children:"<bq-dropdown>"})," component and ",n.jsx(i.code,{children:"<bq-option-list>"})," component, typically to display a dropdown list."]}),n.jsx(r,{children:"👍 When to use"}),n.jsx(i.p,{children:`Dropdown lists of options are used when presenting a list of selectable options that are too numerous to fit comfortably on the screen.
They provide an efficient way to save space and present a long list of options in a compact and organized manner.
Some of the use cases where dropdown components can be used:`}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Navigation"}),`
`,n.jsx(i.li,{children:"Filtering and sorting"}),`
`,n.jsx(i.li,{children:"Configuring settings"}),`
`,n.jsx(i.li,{children:"Selecting from a large list of options"}),`
`]}),n.jsx(x,{children:"Properties"}),n.jsx(r,{children:"bq-option"}),n.jsx(d,{of:"bq-option"}),n.jsx(r,{children:"bq-option-list"}),n.jsx(d,{of:"bq-option-list"}),n.jsx(r,{children:"bq-option-group"}),n.jsx(d,{of:"bq-option-group"})]})})}function U(e={}){const{wrapper:i}={...z(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(f,{...e})}):f(e)}const R={title:"Components/Option",component:"bq-option",parameters:{docs:{page:U}},argTypes:{disabled:{control:"boolean"},hidden:{control:"boolean"},selected:{control:"boolean"},bqBlur:{action:"bqBlur"},bqFocus:{action:"bqFocus"},bqClick:{action:"bqClick"},bqSelect:{action:"bqSelect",table:{disable:!0}},children:{control:"text",table:{disable:!0}},text:{control:"text",table:{disable:!0}},iconPrefix:{control:"text",table:{disable:!0}},iconSuffix:{control:"text",table:{disable:!0}}},args:{disabled:!1,hidden:!1,selected:!1,iconPrefix:void 0,iconSuffix:void 0}},s=e=>t`
  <bq-option-list @bqSelect=${e.bqSelect}> ${e.children} </bq-option-list>
`,o=e=>{const i=e.iconPrefix?t`<bq-icon name=${e.iconPrefix} slot="prefix"></bq-icon>`:m,D=e.iconSuffix?t`<bq-icon name=${e.iconSuffix} slot="suffix"></bq-icon>`:m;return t`
    <bq-option
      ?disabled=${e.disabled}
      ?hidden=${e.hidden}
      ?selected=${e.selected}
      value=${A(e.value)}
      @bqBlur=${e.bqBlur}
      @bqFocus=${e.bqFocus}
      @bqClick=${e.bqClick}
    >
      ${i}
      <span>${e.text}</span>
      ${D}
    </bq-option>
  `},a={render:e=>t` ${s({...e,children:t`
        <!-- Option 1 -->
        ${o({...e,text:"User profile",iconPrefix:"user",value:"user"})}
        <!-- Option 2 -->
        ${o({...e,text:"Change password",iconPrefix:"lock-simple",value:"changepassword"})}
        <!-- Option 3 -->
        ${o({...e,text:"Close session",iconPrefix:"sign-out",value:"logout"})}
      `})}`},l={render:e=>t` ${s({...e,children:t`
        <!-- Option 1 -->
        ${o({...e,selected:!0,text:"User profile",iconPrefix:"user",value:"user"})}
        <!-- Option 2 -->
        ${o({...e,text:"Change password",iconPrefix:"lock-simple",value:"changepassword"})}
        <!-- Option 3 -->
        ${o({...e,text:"Close session",iconPrefix:"sign-out",value:"logout"})}
      `})}`},c={render:e=>t` ${s({...e,children:t`
        <!-- Option 1 -->
        ${o({...e,text:"User profile",iconPrefix:"user",value:"user"})}
        <!-- Option 2 -->
        ${o({...e,disabled:!0,text:"Admin Dashboard",iconPrefix:"layout",value:"admin"})}
        <!-- Option 3 -->
        ${o({...e,text:"Change password",iconPrefix:"lock-simple",value:"changepassword"})}
        <!-- Option 4 -->
        ${o({...e,text:"Close session",iconPrefix:"sign-out",value:"logout"})}
      `})}`},p={render:e=>t`
    ${s({...e,children:t`
        <!-- Option 1 -->
        ${o({...e,text:"User profile",iconSuffix:"user",value:"user"})}
        <!-- Option 2 -->
        ${o({...e,text:"Admin Dashboard",iconSuffix:"layout",value:"admin"})}
        <!-- Option 3 -->
        ${o({...e,text:"Change password",iconSuffix:"lock-simple",value:"changepassword"})}
        <!-- Option 4 -->
        ${o({...e,text:"Close session",iconSuffix:"sign-out",value:"logout"})}
      `})}
  `},u={render:e=>t`
    ${s({...e,children:t`
        <bq-option-group>
          <span slot="header-label">Sport</span>
          <!-- Option 1 -->
          ${o({...e,text:"Running",iconPrefix:"sneaker-move",value:"running"})}
          <!-- Option 2 -->
          ${o({...e,text:"Hiking",iconPrefix:"boot",value:"hiking"})}
          <!-- Option 3 -->
          ${o({...e,text:"Biking",iconPrefix:"person-simple-bike",value:"biking"})}
          <!-- Option 4 -->
          ${o({...e,text:"Swimming",iconPrefix:"swimming-pool",value:"swimming"})}
        </bq-option-group>
        <bq-option-group>
          <span slot="header-label">Food</span>
          <!-- Option 1 -->
          ${o({...e,text:"Pizza",iconPrefix:"pizza",value:"pizza"})}
          <!-- Option 2 -->
          ${o({...e,text:"Hamburger",iconPrefix:"hamburger",value:"hamburger"})}
          <!-- Option 3 -->
          ${o({...e,text:"Cookie",iconPrefix:"cookie",value:"cookie"})}
          <!-- Option 4 -->
          ${o({...e,text:"Ice-cream",iconPrefix:"ice-cream",value:"ice-cream"})}
        </bq-option-group>
      `})}
  `};var h,b,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: Args) => html\` \${TemplateList({
    ...args,
    children: html\`
        <!-- Option 1 -->
        \${Template({
      ...args,
      text: 'User profile',
      iconPrefix: 'user',
      value: 'user'
    })}
        <!-- Option 2 -->
        \${Template({
      ...args,
      text: 'Change password',
      iconPrefix: 'lock-simple',
      value: 'changepassword'
    })}
        <!-- Option 3 -->
        \${Template({
      ...args,
      text: 'Close session',
      iconPrefix: 'sign-out',
      value: 'logout'
    })}
      \`
  })}\`
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var $,v,O;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: (args: Args) => html\` \${TemplateList({
    ...args,
    children: html\`
        <!-- Option 1 -->
        \${Template({
      ...args,
      selected: true,
      text: 'User profile',
      iconPrefix: 'user',
      value: 'user'
    })}
        <!-- Option 2 -->
        \${Template({
      ...args,
      text: 'Change password',
      iconPrefix: 'lock-simple',
      value: 'changepassword'
    })}
        <!-- Option 3 -->
        \${Template({
      ...args,
      text: 'Close session',
      iconPrefix: 'sign-out',
      value: 'logout'
    })}
      \`
  })}\`
}`,...(O=(v=l.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var q,P,w;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: (args: Args) => html\` \${TemplateList({
    ...args,
    children: html\`
        <!-- Option 1 -->
        \${Template({
      ...args,
      text: 'User profile',
      iconPrefix: 'user',
      value: 'user'
    })}
        <!-- Option 2 -->
        \${Template({
      ...args,
      disabled: true,
      text: 'Admin Dashboard',
      iconPrefix: 'layout',
      value: 'admin'
    })}
        <!-- Option 3 -->
        \${Template({
      ...args,
      text: 'Change password',
      iconPrefix: 'lock-simple',
      value: 'changepassword'
    })}
        <!-- Option 4 -->
        \${Template({
      ...args,
      text: 'Close session',
      iconPrefix: 'sign-out',
      value: 'logout'
    })}
      \`
  })}\`
}`,...(w=(P=c.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var T,S,k;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => html\`
    \${TemplateList({
    ...args,
    children: html\`
        <!-- Option 1 -->
        \${Template({
      ...args,
      text: 'User profile',
      iconSuffix: 'user',
      value: 'user'
    })}
        <!-- Option 2 -->
        \${Template({
      ...args,
      text: 'Admin Dashboard',
      iconSuffix: 'layout',
      value: 'admin'
    })}
        <!-- Option 3 -->
        \${Template({
      ...args,
      text: 'Change password',
      iconSuffix: 'lock-simple',
      value: 'changepassword'
    })}
        <!-- Option 4 -->
        \${Template({
      ...args,
      text: 'Close session',
      iconSuffix: 'sign-out',
      value: 'logout'
    })}
      \`
  })}
  \`
}`,...(k=(S=p.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var C,j,y;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => html\`
    \${TemplateList({
    ...args,
    children: html\`
        <bq-option-group>
          <span slot="header-label">Sport</span>
          <!-- Option 1 -->
          \${Template({
      ...args,
      text: 'Running',
      iconPrefix: 'sneaker-move',
      value: 'running'
    })}
          <!-- Option 2 -->
          \${Template({
      ...args,
      text: 'Hiking',
      iconPrefix: 'boot',
      value: 'hiking'
    })}
          <!-- Option 3 -->
          \${Template({
      ...args,
      text: 'Biking',
      iconPrefix: 'person-simple-bike',
      value: 'biking'
    })}
          <!-- Option 4 -->
          \${Template({
      ...args,
      text: 'Swimming',
      iconPrefix: 'swimming-pool',
      value: 'swimming'
    })}
        </bq-option-group>
        <bq-option-group>
          <span slot="header-label">Food</span>
          <!-- Option 1 -->
          \${Template({
      ...args,
      text: 'Pizza',
      iconPrefix: 'pizza',
      value: 'pizza'
    })}
          <!-- Option 2 -->
          \${Template({
      ...args,
      text: 'Hamburger',
      iconPrefix: 'hamburger',
      value: 'hamburger'
    })}
          <!-- Option 3 -->
          \${Template({
      ...args,
      text: 'Cookie',
      iconPrefix: 'cookie',
      value: 'cookie'
    })}
          <!-- Option 4 -->
          \${Template({
      ...args,
      text: 'Ice-cream',
      iconPrefix: 'ice-cream',
      value: 'ice-cream'
    })}
        </bq-option-group>
      \`
  })}
  \`
}`,...(y=(j=u.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const X=["Default","Active","Disabled","WithSuffix","WithOptionGroup"];export{l as Active,a as Default,c as Disabled,u as WithOptionGroup,p as WithSuffix,X as __namedExportsOrder,R as default};
