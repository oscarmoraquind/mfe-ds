import{x as g}from"./lit-html-CeYizTxc.js";import{o as l}from"./if-defined-C7zjO9dX.js";import{ae as t,ar as x,as as k,at as z}from"./index-Bbs29GIG.js";import{u as W}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function v(e){const r={li:"li",ol:"ol",p:"p",ul:"ul",...W(),...e.components};return t.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:t.jsxs("div",{className:"bq-doc__container",children:[t.jsx(x,{children:"Checkbox"}),t.jsx(r.p,{children:`The checkbox is a UI component that allows users to select one or more options from a list of choices.
It is commonly used in forms, surveys, and settings pages.`}),t.jsx(k,{children:"Usage"}),t.jsx(r.p,{children:"When using checkboxes, it's important to keep in mind the following best practices:"}),t.jsxs(r.ol,{children:[`
`,t.jsx(r.li,{children:"Use checkboxes for selecting multiple options from a list. This is helpful when options are not mutually exclusive."}),`
`,t.jsx(r.li,{children:"Use clear and concise labels for each checkbox option. Avoid jargon or ambiguous language."}),`
`,t.jsx(r.li,{children:"Group related checkbox options together and label them appropriately. This helps users understand option relationships and make a decision."}),`
`,t.jsx(r.li,{children:"Minimize cognitive load by using sensible default values. Ensure default values make sense for users or they may become confused."}),`
`,t.jsx(r.li,{children:"Use a single column layout for a list of checkboxes for easy reading and selection. This ensures checkboxes are large enough to be clicked."}),`
`]}),t.jsx(r.p,{children:"By following these best practices, you can ensure that your checkboxes are effective and user-friendly."}),t.jsx(k,{children:"👍 When to use"}),t.jsx(r.p,{children:"Checkboxes should be used when:"}),t.jsxs(r.ul,{children:[`
`,t.jsx(r.li,{children:"The user needs to select one or more options from a list of choices."}),`
`,t.jsx(r.li,{children:"The options are independent of each other."}),`
`,t.jsx(r.li,{children:"The user needs to see all the options at once."}),`
`]}),t.jsx(x,{children:"Properties"}),t.jsx(z,{of:"bq-checkbox"})]})})}function X(e={}){const{wrapper:r}={...W(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(v,{...e})}):v(e)}var q=Object.freeze,J=Object.defineProperty,G=(e,r)=>q(J(e,"raw",{value:q(e.slice())})),y;const ae={title:"Components/Checkbox",component:"bq-checkbox",parameters:{docs:{page:X}},argTypes:{"background-on-hover":{control:"boolean"},checked:{control:"boolean"},disabled:{control:"boolean"},"form-id":{control:"text"},"form-validation-message":{control:"text"},indeterminate:{control:"boolean"},name:{control:"text"},required:{control:"boolean"},value:{control:"text"},bqBlur:{action:"bqBlur"},bqFocus:{action:"bqFocus"},bqChange:{action:"bqChange"},label:{control:"text"}},args:{"background-on-hover":!1,checked:!1,disabled:!1,"form-id":void 0,"form-validation-message":void 0,indeterminate:!1,name:"bq-checkbox",required:!1,value:"checkbox-value",label:"Checkbox label"}},a=e=>g`
  <bq-checkbox
    ?background-on-hover=${e["background-on-hover"]}
    ?checked=${e.checked}
    ?disabled=${e.disabled}
    form-id=${l(e["form-id"])}
    form-validation-message=${l(e["form-validation-message"])}
    ?indeterminate=${e.indeterminate}
    name=${l(e.name)}
    ?required=${e.required}
    value=${l(e.value)}
    @bqFocus=${e.bqFocus}
    @bqBlur=${e.bqBlur}
    @bqChange=${e.bqChange}
  >
    ${e.label}
  </bq-checkbox>
`,i={render:a},d={render:a,args:{label:"By clicking here, I state that I have read and understood the terms and conditions."},parameters:{viewport:{defaultViewport:"mobile1"}}},m={render:a,args:{"background-on-hover":!0},name:"Background on hover"},h={render:a,args:{checked:!0}},u={render:a,args:{disabled:!0}},b={render:e=>{const r=o=>{[...Array.from(document.querySelectorAll('bq-checkbox[name="interest"'))].forEach(n=>{n.checked=o.detail.checked})},s=()=>{const o=document.querySelector('bq-checkbox[name="all-interests"');if(!o)return;const c=document.querySelectorAll('bq-checkbox[name="interest"'),n=document.querySelectorAll('bq-checkbox[name="interest"][checked]').length;o.indeterminate=n>0&&n<c.length,o.checked=n===c.length};return g`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
        ${a(e)}
        <div>
          <bq-checkbox value="all" name="all-interests" background-on-hover @bqChange=${r}>
            Interests
          </bq-checkbox>
          <div style="display: flex; flex-direction: column; margin-inline-start: 24px;">
            <bq-checkbox value="music" name="interest" background-on-hover @bqChange=${s}>
              Music
            </bq-checkbox>
            <bq-checkbox value="travel" name="interest" background-on-hover @bqChange=${s}>
              Travel
            </bq-checkbox>
            <bq-checkbox value="sport" name="interest" background-on-hover @bqChange=${s}>
              Sport
            </bq-checkbox>
          </div>
        </div>
      </div>
    `},args:{indeterminate:!0}},p={render:e=>{const r=s=>{s.preventDefault();const o=s.target,c=new FormData(o),n=Object.fromEntries(c.entries()),f=document.getElementById("form-data");f&&(f.textContent=JSON.stringify(n,null,2))};return g(y||(y=G([`
      <link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@11.10.0/styles/night-owl.min.css" />
      <div class="grid auto-cols-auto grid-cols-1 gap-y-l sm:grid-cols-2 sm:gap-x-l">
        <bq-card>
          <h4 class="m-be-m">Sign in to your account</h4>
          <form class="flex flex-col gap-y-m" @submit=`,`>
            <bq-input name="email" type="email" autocomplete="email">
              <label class="flex flex-grow items-center" slot="label">Email address</label>
            </bq-input>
            <bq-input name="password" type="password" autocomplete="current-password">
              <label class="flex flex-grow items-center" slot="label">Password</label>
            </bq-input>
            <!-- Checkbox -->
            `,`
            <!-- End: Checkbox -->
            <div class="flex justify-end gap-x-s">
              <bq-button appearance="secondary" type="reset">Cancel</bq-button>
              <bq-button type="submit">Log in</bq-button>
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
    `])),r,a({...e}))},args:{"form-validation-message":"Please accept the terms and conditions.",label:"By clicking here, I state that I have read and understood the terms and conditions.",name:"terms",required:!0,value:"terms"}};var C,j,w;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: Template
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var E,S,T;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'By clicking here, I state that I have read and understood the terms and conditions.'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(T=(S=d.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var $,I,D;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: Template,
  args: {
    'background-on-hover': true
  },
  name: 'Background on hover'
}`,...(D=(I=m.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var F,A,B;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: true
  }
}`,...(B=(A=h.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var L,_,M;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: Template,
  args: {
    disabled: true
  }
}`,...(M=(_=u.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var O,H,P;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: (args: Args) => {
    const allCheckboxChange = event => {
      const interestCheckboxes = [...Array.from(document.querySelectorAll<HTMLInputElement>('bq-checkbox[name="interest"'))];
      interestCheckboxes.forEach((interestCheckbox: HTMLInputElement) => {
        interestCheckbox.checked = event.detail.checked;
      });
    };
    const interestCheckboxChange = () => {
      const allInterestCheckbox = document.querySelector<HTMLInputElement>('bq-checkbox[name="all-interests"');
      if (!allInterestCheckbox) return;
      const interestCheckboxes = document.querySelectorAll('bq-checkbox[name="interest"');
      const onlyChecked = document.querySelectorAll('bq-checkbox[name="interest"][checked]').length;
      allInterestCheckbox.indeterminate = onlyChecked > 0 && onlyChecked < interestCheckboxes.length;
      allInterestCheckbox.checked = onlyChecked === interestCheckboxes.length;
    };
    return html\`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
        \${Template(args)}
        <div>
          <bq-checkbox value="all" name="all-interests" background-on-hover @bqChange=\${allCheckboxChange}>
            Interests
          </bq-checkbox>
          <div style="display: flex; flex-direction: column; margin-inline-start: 24px;">
            <bq-checkbox value="music" name="interest" background-on-hover @bqChange=\${interestCheckboxChange}>
              Music
            </bq-checkbox>
            <bq-checkbox value="travel" name="interest" background-on-hover @bqChange=\${interestCheckboxChange}>
              Travel
            </bq-checkbox>
            <bq-checkbox value="sport" name="interest" background-on-hover @bqChange=\${interestCheckboxChange}>
              Sport
            </bq-checkbox>
          </div>
        </div>
      </div>
    \`;
  },
  args: {
    indeterminate: true
  }
}`,...(P=(H=b.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var V,U,N;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
        <bq-card>
          <h4 class="m-be-m">Sign in to your account</h4>
          <form class="flex flex-col gap-y-m" @submit=\${handleFormSubmit}>
            <bq-input name="email" type="email" autocomplete="email">
              <label class="flex flex-grow items-center" slot="label">Email address</label>
            </bq-input>
            <bq-input name="password" type="password" autocomplete="current-password">
              <label class="flex flex-grow items-center" slot="label">Password</label>
            </bq-input>
            <!-- Checkbox -->
            \${Template({
      ...args
    })}
            <!-- End: Checkbox -->
            <div class="flex justify-end gap-x-s">
              <bq-button appearance="secondary" type="reset">Cancel</bq-button>
              <bq-button type="submit">Log in</bq-button>
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
    'form-validation-message': 'Please accept the terms and conditions.',
    label: 'By clicking here, I state that I have read and understood the terms and conditions.',
    name: 'terms',
    required: true,
    value: 'terms'
  }
}`,...(N=(U=p.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};const se=["Default","LongLabel","BackgroundOnHover","Checked","Disabled","Indeterminate","WithForm"];export{m as BackgroundOnHover,h as Checked,i as Default,u as Disabled,b as Indeterminate,d as LongLabel,p as WithForm,se as __namedExportsOrder,ae as default};
