import{x as d}from"./lit-html-CeYizTxc.js";import{ae as o,ar as m,as as a,at as b}from"./index-Bbs29GIG.js";import{u as S}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function p(e){const t={li:"li",p:"p",strong:"strong",ul:"ul",...S(),...e.components};return o.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:o.jsxs("div",{className:"bq-doc__container",children:[o.jsx(m,{children:"Radio group"}),o.jsx(t.p,{children:`Radio buttons are a type of form element that allows users to select a single option from a list of two or more options.
They are commonly used in forms, surveys, and quizzes.`}),o.jsx(a,{children:"Usage"}),o.jsx(t.p,{children:"When using radio button components in your forms or surveys, it is important to follow certain best practices to ensure a positive user experience. Here are some additional usage best practices to consider:"}),o.jsxs(t.ul,{children:[`
`,o.jsx(t.li,{children:"Use radio buttons consistently throughout the form or survey to create a clear and predictable user experience. Inconsistency can lead to confusion and frustration for users."}),`
`,o.jsx(t.li,{children:"Use radio buttons sparingly to avoid overwhelming the user with too many options. Too many options can lead to decision paralysis and deter users from completing the form or survey."}),`
`,o.jsx(t.li,{children:"Use radio buttons to provide the user with a limited set of options that are relevant to the task at hand. Offering too many irrelevant options can be distracting and frustrating for users."}),`
`,o.jsx(t.li,{children:"Use radio buttons in conjunction with other form elements, such as text inputs and drop-down menus, to provide a more flexible and user-friendly interface. This can help accommodate a variety of user preferences and needs."}),`
`]}),o.jsx(t.p,{children:o.jsx(t.strong,{children:"Points to Consider"})}),o.jsxs(t.ul,{children:[`
`,o.jsx(t.li,{children:"Consider the order of the options. Arrange the options in a logical and meaningful order that makes sense to the user."}),`
`,o.jsx(t.li,{children:"Consider the language and tone of the labels. Use language that is familiar to the user and matches the tone of the overall form or survey."}),`
`,o.jsx(t.li,{children:"Consider the visual design of the radio buttons. Ensure that the radio buttons are easy to see and use, and that they are consistent with the overall design of the form or survey."}),`
`,o.jsx(t.li,{children:"Consider the accessibility of the radio buttons. Ensure that the radio buttons can be easily used by users with disabilities, including those who use assistive technology."}),`
`]}),o.jsx(a,{children:"👍 When to use"}),o.jsx(t.p,{children:"Radio buttons are best used when:"}),o.jsxs(t.ul,{children:[`
`,o.jsx(t.li,{children:"Users need to select only one option from a list of options"}),`
`,o.jsx(t.li,{children:"Users need to compare their options"}),`
`]}),o.jsx(m,{children:"Properties"}),o.jsx(a,{children:"bq-radio-group"}),o.jsx(b,{of:"bq-radio-group"}),o.jsx(a,{children:"bq-radio"}),o.jsx(b,{of:"bq-radio"})]})})}function z(e={}){const{wrapper:t}={...S(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(p,{...e})}):p(e)}const A=["horizontal","vertical"];var h=Object.freeze,M=Object.defineProperty,U=(e,t)=>h(M(e,"raw",{value:h(e.slice())})),g;const J={title:"Components/Radio Group",component:"bq-radio-group",parameters:{docs:{page:z}},argTypes:{"background-on-hover":{control:"boolean"},"debounce-time":{control:"number"},disabled:{control:"boolean"},fieldset:{control:"boolean"},name:{control:"text"},value:{control:"text"},orientation:{control:"select",options:[...A]},bqChange:{action:"bqChange"},bqFocus:{action:"bqFocus",table:{disable:!0}},bqBlur:{action:"bqBlur",table:{disable:!0}},label:{control:"text"}},args:{"background-on-hover":!1,orientation:"vertical",value:"option1",disabled:!1,name:"bq-radio",fieldset:!1,"debounce-time":0}},c=e=>d`
    <bq-radio-group
      ?background-on-hover=${e["background-on-hover"]}
      debounce-time=${e["debounce-time"]}
      ?disabled=${e.disabled}
      ?fieldset=${e.fieldset}
      name=${e.name}
      orientation=${e.orientation}
      value=${e.value}
      @bqChange=${e.bqChange}
      @bqFocus=${e.bqFocus}
      @bqBlur=${e.bqBlur}
    >
      <span slot="label">${e.label}</span>
      <bq-radio value="option1"> Radio option 1 </bq-radio>
      <bq-radio value="option2"> Radio option 2 </bq-radio>
      <bq-radio value="option3"> Radio option 3 </bq-radio>
    </bq-radio-group>
  `,r={render:c},n={render:e=>d`
      <div style="display: flex; gap: 16px">
        <bq-radio-group
          .name=${e.name}
          .value=${e.value}
          .disabled=${e.disabled}
          .orientation=${e.orientation}
          .fieldset=${e.fieldset}
          debounce-time=${e["debounce-time"]}
          @bqChange=${e.bqChange}
          @bqFocus=${e.bqFocus}
          @bqBlur=${e.bqBlur}
        >
          <span slot="label">${e.label}</span>
          <bq-radio value="option1"> Radio option 1 </bq-radio>
          <bq-radio value="option2"> Radio option 2 </bq-radio>
          <bq-radio value="option3"> Radio option 3 </bq-radio>
        </bq-radio-group>
        <bq-radio-group
          .name=${e.name+"1"}
          .value=${e.value}
          .orientation=${e.orientation}
          .fieldset=${e.fieldset}
          debounce-time=${e["debounce-time"]}
          @bqChange=${e.bqChange}
          @bqFocus=${e.bqFocus}
          @bqBlur=${e.bqBlur}
        >
          <span slot="label">${e.label}</span>
          <bq-radio value="option1"> Radio option 1 </bq-radio>
          <bq-radio value="option2" disabled> Radio option 2 </bq-radio>
          <bq-radio value="option3"> Radio option 3 </bq-radio>
        </bq-radio-group>
      </div>
    `,args:{disabled:!0}},s={render:c,args:{orientation:"horizontal"}},i={render:c,args:{fieldset:!0,label:"radio group"}},l={render:()=>{const e=t=>{t.preventDefault();const T=t.target,B=new FormData(T),O=Object.fromEntries(B.entries()),u=document.getElementById("form-data");u&&(u.textContent=JSON.stringify(O,null,2))};return d(g||(g=U([`
      <link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@11.10.0/styles/night-owl.min.css" />

      <div class="grid auto-cols-auto grid-cols-1 gap-y-l sm:grid-cols-2 sm:gap-x-l">
        <bq-card>
          <h4 class="m-be-m">Marketing consent</h4>
          <form class="flex flex-col gap-y-m" @submit=`,` method="post">
            <bq-input name="email" value="brad.beckett202@dontsp.am" type="email" autocomplete="organization" required>
              <label class="flex flex-grow items-center" slot="label">Email address</label>
            </bq-input>
            <bq-radio-group
              name="marketing-consent"
              orientation="horizontal"
              required-validation-message="Please, select if you would like to receive marketing emails or not"
              value="yes"
              required
            >
              <span slot="label">I would like to receive marketing emails</span>
              <bq-radio value="yes">Yes</bq-radio>
              <bq-radio value="no">No</bq-radio>
            </bq-radio-group>
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
    `])),e)}};var f,q,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template
}`,...(v=(q=r.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var j,y,x;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: (args: Args) => {
    return html\`
      <div style="display: flex; gap: 16px">
        <bq-radio-group
          .name=\${args.name}
          .value=\${args.value}
          .disabled=\${args.disabled}
          .orientation=\${args.orientation}
          .fieldset=\${args.fieldset}
          debounce-time=\${args['debounce-time']}
          @bqChange=\${args.bqChange}
          @bqFocus=\${args.bqFocus}
          @bqBlur=\${args.bqBlur}
        >
          <span slot="label">\${args.label}</span>
          <bq-radio value="option1"> Radio option 1 </bq-radio>
          <bq-radio value="option2"> Radio option 2 </bq-radio>
          <bq-radio value="option3"> Radio option 3 </bq-radio>
        </bq-radio-group>
        <bq-radio-group
          .name=\${args.name + '1'}
          .value=\${args.value}
          .orientation=\${args.orientation}
          .fieldset=\${args.fieldset}
          debounce-time=\${args['debounce-time']}
          @bqChange=\${args.bqChange}
          @bqFocus=\${args.bqFocus}
          @bqBlur=\${args.bqBlur}
        >
          <span slot="label">\${args.label}</span>
          <bq-radio value="option1"> Radio option 1 </bq-radio>
          <bq-radio value="option2" disabled> Radio option 2 </bq-radio>
          <bq-radio value="option3"> Radio option 3 </bq-radio>
        </bq-radio-group>
      </div>
    \`;
  },
  args: {
    disabled: true
  }
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var $,w,k;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: Template,
  args: {
    orientation: 'horizontal'
  }
}`,...(k=(w=s.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var F,C,E;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: Template,
  args: {
    fieldset: true,
    label: 'radio group'
  }
}`,...(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var D,R,_;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
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
        <bq-card>
          <h4 class="m-be-m">Marketing consent</h4>
          <form class="flex flex-col gap-y-m" @submit=\${handleFormSubmit} method="post">
            <bq-input name="email" value="brad.beckett202@dontsp.am" type="email" autocomplete="organization" required>
              <label class="flex flex-grow items-center" slot="label">Email address</label>
            </bq-input>
            <bq-radio-group
              name="marketing-consent"
              orientation="horizontal"
              required-validation-message="Please, select if you would like to receive marketing emails or not"
              value="yes"
              required
            >
              <span slot="label">I would like to receive marketing emails</span>
              <bq-radio value="yes">Yes</bq-radio>
              <bq-radio value="no">No</bq-radio>
            </bq-radio-group>
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
  }
}`,...(_=(R=l.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const Y=["Default","Disabled","Horizontal","Fieldset","WithForm"];export{r as Default,n as Disabled,i as Fieldset,s as Horizontal,l as WithForm,Y as __namedExportsOrder,J as default};
