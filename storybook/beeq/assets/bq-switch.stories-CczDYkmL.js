import{x as u}from"./lit-html-CeYizTxc.js";import{o}from"./if-defined-C7zjO9dX.js";import{ae as t,ar as f,as as b,at as V}from"./index-Bbs29GIG.js";import{u as B}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function g(e){const r={li:"li",p:"p",ul:"ul",...B(),...e.components};return t.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:t.jsxs("div",{className:"bq-doc__container",children:[t.jsx(f,{children:"Switch"}),t.jsx(r.p,{children:`The Switch component is a UI element that provides a switch-like interface to toggle a specific setting or option.
It consists of a button or a switch that can be turned on or off, depending on the user's preference.`}),t.jsx(b,{children:"Usage"}),t.jsx(r.p,{children:"Here are some best practices to follow when using the Switch component:"}),t.jsxs(r.ul,{children:[`
`,t.jsx(r.li,{children:"Use the Switch component when you want to allow users to turn a setting or option on or off quickly and easily."}),`
`,t.jsx(r.li,{children:"Use clear and descriptive labels that accurately describe the function of the Switch component."}),`
`,t.jsx(r.li,{children:"Always provide visual feedback when the Switch component is switched on or off."}),`
`,t.jsx(r.li,{children:"Use Switch components only for simple on/off settings. If you have more complex settings, use a different interface element such as a checkbox or dropdown menu."}),`
`]}),t.jsx(b,{children:"👍 When to use"}),t.jsx(r.p,{children:"The Switch component is ideal for use in the following scenarios:"}),t.jsxs(r.ul,{children:[`
`,t.jsx(r.li,{children:"When the user needs to turn a setting on or off quickly and easily."}),`
`,t.jsx(r.li,{children:"When the setting is simple and requires only two options."}),`
`,t.jsx(r.li,{children:"When the setting is frequently toggled on and off."}),`
`]}),t.jsx(f,{children:"Properties"}),t.jsx(V,{of:"bq-switch"})]})})}function J(e={}){const{wrapper:r}={...B(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(g,{...e})}):g(e)}const X=["default","icon"],z=["center","end","flex-end","flex-start","inherit","initial","left","normal","right","space-around","space-between","space-evenly","start","stretch"];var v=Object.freeze,Y=Object.defineProperty,G=(e,r)=>v(Y(e,"raw",{value:v(e.slice())})),w;const ie={title:"Components/Switch",component:"bq-switch",parameters:{docs:{page:J}},argTypes:{"background-on-hover":{control:"boolean"},checked:{control:"boolean"},disabled:{control:"boolean"},"form-validation-message":{control:"text"},"full-width":{control:"boolean"},"inner-label":{control:"inline-radio",options:[...X]},"justify-content":{control:"select",options:[...z]},name:{control:"text"},required:{control:"boolean"},"reverse-order":{control:"boolean"},value:{control:"text"},bqBlur:{action:"bqBlur"},bqFocus:{action:"bqFocus"},bqChange:{action:"bqChange"},text:{control:"text",table:{disable:!0}}},args:{"background-on-hover":!1,checked:!1,disabled:!1,"form-validation-message":void 0,"full-width":!1,"inner-label":"default","justify-content":"start",name:"bq-switch",required:!1,"reverse-order":!1,value:"Switch value",text:"Toggle me!"}},s=e=>u`
  <bq-switch
    ?background-on-hover=${e["background-on-hover"]}
    ?checked=${e.checked}
    ?disabled=${e.disabled}
    form-validation-message=${o(e["form-validation-message"])}
    ?full-width=${e["full-width"]}
    inner-label=${o(e["inner-label"])}
    justify-content=${o(e["justify-content"])}
    name=${o(e.name)}
    ?required=${e.required}
    ?reverse-order=${e["reverse-order"]}
    value=${o(e.value)}
    @bqFocus=${e.bqFocus}
    @bqBlur=${e.bqBlur}
    @bqChange=${e.bqChange}
  >
    ${e.text}
  </bq-switch>
`,a={render:s},n={render:s,args:{checked:!0}},i={render:s,args:{checked:!0,disabled:!0}},c={render:s,args:{"inner-label":"icon"}},l={render:s,args:{"reverse-order":!0}},d={render:e=>u`
    <div class="max-is-[28rem] m-b-[auto] m-i-[auto]">
      <div class="text-m font-regular m-be-4">
        Use a combination of <code class="bg-ui-secondary-disabled text-text-primary">full-width</code>,
        <code class="bg-ui-secondary-disabled text-text-primary">justify-content</code> and
        <code class="bg-ui-secondary-disabled text-text-primary">reverse-order</code>
      </div>
      ${s({...e,text:"Show app list in menu",value:"show-app-list"})}
      ${s({...e,text:"Show recently added apps",value:"show-recently-apps",checked:!0})}
      ${s({...e,text:"Show most used apps",value:"show-used-apps",disabled:!0})}
      ${s({...e,text:"Show app notifications",value:"show-app-notifications",checked:!0})}
    </div>
  `,args:{"background-on-hover":!0,"full-width":!0,"justify-content":"space-between","reverse-order":!0}},m={render:e=>{const r=p=>{p.preventDefault();const M=p.target,R=new FormData(M),P=Object.fromEntries(R.entries()),h=document.getElementById("form-data");h&&(h.textContent=JSON.stringify(P,null,2))};return u(w||(w=G([`
      <link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@11.10.0/styles/night-owl.min.css" />
      <div class="grid auto-cols-auto grid-cols-1 gap-y-l sm:grid-cols-2 sm:gap-x-l">
        <bq-card style="--bq-card--background: transparent">
          <h4 class="m-be-m">Account settings</h4>
          <form class="flex flex-col gap-y-m" @submit=`,`>
            `,`
            `,`
            `,`
            `,`
            <div class="flex justify-end gap-x-s">
              <bq-button appearance="secondary" type="reset">Cancel</bq-button>
              <bq-button type="submit">Save</bq-button>
            </div>
          </form>
        </bq-card>
        <bq-card class="[&::part(wrapper)]:h-full">
          <h4 class="m-be-m">Form Data</h4>
          <div class="language-javascript overflow-x-scroll whitespace-pre rounded-s">
            // Handle form submit<br />
            const form = ev.target as HTMLFormElement;<br />
            const formData = new FormData(form);<br />
            const formValues = Object.fromEntries(formData.entries());
          </div>
          <pre>
            <code id="form-data" class="rounded-s">
              { // submit the form to see the data here }
            </code>
          </pre>
        </bq-card>
      </div>

      <script type="module">
        import hljs from 'https://unpkg.com/@highlightjs/cdn-assets@11.10.0/es/highlight.min.js';
        import javascript from 'https://unpkg.com/@highlightjs/cdn-assets@11.10.0/es/languages/javascript.min.js';

        hljs.registerLanguage('javascript', javascript);
        hljs.highlightAll();

        document.querySelectorAll('div.language-javascript').forEach((block) => {
          hljs.highlightElement(block);
        });
      <\/script>
    `])),r,s({...e,text:"Show app list in the menu",name:"showAppList",required:!0,"form-validation-message":"Please enable showing the app list in the menu"}),s({...e,text:"Show recently added apps",name:"showRecentlyApps",checked:!0}),s({...e,text:"Show most used apps",name:"showUsedApps"}),s({...e,text:"Show app notifications",name:"showAppNotifications",checked:!0}))},args:{"background-on-hover":!0,"full-width":!0,"justify-content":"space-between","reverse-order":!0}};var x,y,j;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: Template
}`,...(j=(y=a.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var q,S,k;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: true
  }
}`,...(k=(S=n.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var T,$,E;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: true,
    disabled: true
  }
}`,...(E=($=i.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var D,F,_;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Template,
  args: {
    'inner-label': 'icon'
  }
}`,...(_=(F=c.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var A,C,L;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: Template,
  args: {
    'reverse-order': true
  }
}`,...(L=(C=l.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var O,W,I;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => html\`
    <div class="max-is-[28rem] m-b-[auto] m-i-[auto]">
      <div class="text-m font-regular m-be-4">
        Use a combination of <code class="bg-ui-secondary-disabled text-text-primary">full-width</code>,
        <code class="bg-ui-secondary-disabled text-text-primary">justify-content</code> and
        <code class="bg-ui-secondary-disabled text-text-primary">reverse-order</code>
      </div>
      \${Template({
    ...args,
    text: 'Show app list in menu',
    value: 'show-app-list'
  })}
      \${Template({
    ...args,
    text: 'Show recently added apps',
    value: 'show-recently-apps',
    checked: true
  })}
      \${Template({
    ...args,
    text: 'Show most used apps',
    value: 'show-used-apps',
    disabled: true
  })}
      \${Template({
    ...args,
    text: 'Show app notifications',
    value: 'show-app-notifications',
    checked: true
  })}
    </div>
  \`,
  args: {
    'background-on-hover': true,
    'full-width': true,
    'justify-content': 'space-between',
    'reverse-order': true
  }
}`,...(I=(W=d.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var N,U,H;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args: Args) => {
    const handleFormSubmit = (ev: Event) => {
      ev.preventDefault();
      const form = ev.target as HTMLFormElement;
      const formData = new FormData(form);
      const formValues = Object.fromEntries(formData.entries());
      const codeElement = document.getElementById('form-data');
      if (!codeElement) return;
      codeElement.textContent = JSON.stringify(formValues, null, 2);
    };
    return html\`
      <link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@11.10.0/styles/night-owl.min.css" />
      <div class="grid auto-cols-auto grid-cols-1 gap-y-l sm:grid-cols-2 sm:gap-x-l">
        <bq-card style="--bq-card--background: transparent">
          <h4 class="m-be-m">Account settings</h4>
          <form class="flex flex-col gap-y-m" @submit=\${handleFormSubmit}>
            \${Template({
      ...args,
      text: 'Show app list in the menu',
      name: 'showAppList',
      required: true,
      'form-validation-message': 'Please enable showing the app list in the menu'
    })}
            \${Template({
      ...args,
      text: 'Show recently added apps',
      name: 'showRecentlyApps',
      checked: true
    })}
            \${Template({
      ...args,
      text: 'Show most used apps',
      name: 'showUsedApps'
    })}
            \${Template({
      ...args,
      text: 'Show app notifications',
      name: 'showAppNotifications',
      checked: true
    })}
            <div class="flex justify-end gap-x-s">
              <bq-button appearance="secondary" type="reset">Cancel</bq-button>
              <bq-button type="submit">Save</bq-button>
            </div>
          </form>
        </bq-card>
        <bq-card class="[&::part(wrapper)]:h-full">
          <h4 class="m-be-m">Form Data</h4>
          <div class="language-javascript overflow-x-scroll whitespace-pre rounded-s">
            // Handle form submit<br />
            const form = ev.target as HTMLFormElement;<br />
            const formData = new FormData(form);<br />
            const formValues = Object.fromEntries(formData.entries());
          </div>
          <pre>
            <code id="form-data" class="rounded-s">
              { // submit the form to see the data here }
            </code>
          </pre>
        </bq-card>
      </div>

      <script type="module">
        import hljs from 'https://unpkg.com/@highlightjs/cdn-assets@11.10.0/es/highlight.min.js';
        import javascript from 'https://unpkg.com/@highlightjs/cdn-assets@11.10.0/es/languages/javascript.min.js';

        hljs.registerLanguage('javascript', javascript);
        hljs.highlightAll();

        document.querySelectorAll('div.language-javascript').forEach((block) => {
          hljs.highlightElement(block);
        });
      <\/script>
    \`;
  },
  args: {
    'background-on-hover': true,
    'full-width': true,
    'justify-content': 'space-between',
    'reverse-order': true
  }
}`,...(H=(U=m.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};const ce=["Default","Checked","Disabled","WithInnerLabel","ReverseOrder","FullWidth","WithForm"];export{n as Checked,a as Default,i as Disabled,d as FullWidth,l as ReverseOrder,m as WithForm,c as WithInnerLabel,ce as __namedExportsOrder,ie as default};
