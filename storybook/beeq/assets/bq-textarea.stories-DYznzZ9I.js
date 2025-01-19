import{x as r,E as X}from"./lit-html-CeYizTxc.js";import{o as s}from"./if-defined-C7zjO9dX.js";import{ae as t,ar as b,as as f,at as J}from"./index-Bbs29GIG.js";import{u as M}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import{a as Z}from"./bq-input.types-qyJ6-CUg.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function g(e){const a={code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...M(),...e.components};return t.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:t.jsxs("div",{className:"bq-doc__container",children:[t.jsx(b,{children:"Textarea"}),t.jsx(a.p,{children:"The Textarea component is a multi-line text input control that is often used in a form to collect user inputs like comments or reviews."}),t.jsx(f,{children:"Usage"}),t.jsx(a.p,{children:"Some of the best practices for using the Textarea component are:"}),t.jsxs(a.ul,{children:[`
`,t.jsxs(a.li,{children:[t.jsx(a.strong,{children:"Use a label"}),": Always associate a ",t.jsx(a.code,{children:"<label>"})," element with the textarea for accessibility purposes."]}),`
`,t.jsxs(a.li,{children:[t.jsx(a.strong,{children:"Use placeholder text"}),": You can use the placeholder attribute to provide a short hint that describes the expected value of the textarea."]}),`
`,t.jsxs(a.li,{children:[t.jsx(a.strong,{children:"Use rows attribute"}),": You can use the rows attribute to specify an exact size for the textarea to take."]}),`
`,t.jsxs(a.li,{children:[t.jsx(a.strong,{children:"Use maxlength attribute"}),": You can use the maxlength attribute to specify the maximum number of characters allowed in the textarea."]}),`
`,t.jsxs(a.li,{children:[t.jsx(a.strong,{children:"Use wrap attribute"}),": You can use the wrap attribute to specify how the text in a textarea is to be wrapped when submitted in a form. The possible values are hard and soft. The hard value means that the text will be wrapped at the edge of the textarea and each line will end with a newline character. The soft value means that the text will not be wrapped by the browser and no newline characters will be added."]}),`
`,t.jsxs(a.li,{children:[t.jsx(a.strong,{children:"Use autocomplete attribute"}),": You can use the autocomplete attribute to indicate whether the value of the textarea can be automatically completed by the browser based on previous user inputs. The possible values are on and off. The on value means that the browser can suggest values for the textarea, while the off value means that it cannot. This can help users save time and avoid typos."]}),`
`]}),t.jsx(f,{children:"👍 When to use"}),t.jsx(a.p,{children:`You should use a textarea component in a web application when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.
A textarea can hold an unlimited number of characters and the text renders in a fixed-width. A textarea is different from a single-line text input field, which is more suitable for short and simple inputs like names or email addresses.`}),t.jsx(a.p,{children:"Some examples are:"}),t.jsxs(a.ul,{children:[`
`,t.jsxs(a.li,{children:[t.jsx(a.strong,{children:"Content management systems"}),": Web applications that allow users to create and edit web content."]}),`
`,t.jsxs(a.li,{children:[t.jsx(a.strong,{children:"Social media platforms"}),": Web applications that allow users to post and share their thoughts, opinions, or experiences."]}),`
`,t.jsxs(a.li,{children:[t.jsx(a.strong,{children:"Online surveys"}),": Web applications that allow users to provide feedback or opinions on various topics."]}),`
`]}),t.jsx(b,{children:"Properties"}),t.jsx(J,{of:"bq-textarea"})]})})}function G(e={}){const{wrapper:a}={...M(),...e.components};return a?t.jsx(a,{...e,children:t.jsx(g,{...e})}):g(e)}const K=["on","off","sentences","words","characters"],Q=["hard","soft","off"];var x=Object.freeze,ee=Object.defineProperty,te=(e,a)=>x(ee(e,"raw",{value:x(e.slice())})),v;const pe={title:"Components/Textarea",component:"bq-textarea",parameters:{docs:{page:G}},argTypes:{autocapitalize:{control:"select",options:[...K]},autocomplete:{control:"text"},autocorrect:{control:"inline-radio",options:["on","off"]},autofocus:{control:"boolean"},"auto-grow":{control:"boolean"},"debounce-time":{control:"number"},disabled:{control:"boolean"},"disable-resize":{control:"boolean"},form:{control:"text"},"form-validation-message":{control:"text"},maxlength:{control:"number"},name:{control:"text"},placeholder:{control:"text"},readonly:{control:"boolean"},required:{control:"boolean"},rows:{control:"number"},spellcheck:{control:"boolean"},"validation-status":{control:"select",options:[...Z]},value:{control:"text"},wrap:{control:"select",options:[...Q]},bqBlur:{action:"bqBlur"},bqChange:{action:"bqChange"},bqFocus:{action:"bqFocus"},bqInput:{action:"bqInput"},noHelperText:{control:"boolean",table:{disable:!0}}},args:{autocapitalize:"off",autocomplete:"off",autocorrect:"off",autofocus:!1,"auto-grow":!1,"debounce-time":0,disabled:!1,"disable-resize":!1,form:void 0,"form-validation-message":void 0,maxlength:0,name:"textarea",placeholder:"Placeholder...",readonly:!1,required:!1,rows:5,spellcheck:!1,"validation-status":"none",value:void 0,wrap:"soft"}},o=e=>r`
  <bq-textarea
    autocapitalize=${s(e.autocapitalize)}
    autocomplete=${s(e.autocomplete)}
    autocorrect=${s(e.autocorrect)}
    ?autofocus=${e.autofocus}
    ?auto-grow=${e["auto-grow"]}
    debounce-time=${s(e["debounce-time"])}
    ?disabled=${e.disabled}
    ?disable-resize=${e["disable-resize"]}
    form=${s(e.form)}
    form-validation-message=${s(e["form-validation-message"])}
    maxlength=${s(e.maxlength)}
    name=${s(e.name)}
    placeholder=${s(e.placeholder)}
    ?readonly=${e.readonly}
    ?required=${e.required}
    rows=${s(e.rows)}
    spellcheck=${s(e.spellcheck)}
    validation-status=${s(e["validation-status"])}
    value=${s(e.value)}
    wrap=${s(e.wrap)}
    @bqBlur=${e.bqBlur}
    @bqChange=${e.bqChange}
    @bqFocus=${e.bqFocus}
    @bqInput=${e.bqInput}
  >
    <label slot="label">Label</label>
    ${e.noHelperText?X:r`
          <span class="flex items-center gap-xs" slot="helper-text">
            <bq-icon name="star"></bq-icon>
            Helper text
          </span>
        `}
  </bq-textarea>
`,i={render:o},l={render:o,args:{value:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, nulla. Ab non odio facere enim, voluptatum voluptates quod molestias suscipit fugiat et expedita accusamus quidem nostrum maxime illo recusandae ratione?"}},n={render:o,args:{disabled:!0,value:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, nulla. Ab non odio facere enim, voluptatum voluptates quod molestias suscipit fugiat et expedita accusamus quidem nostrum maxime illo recusandae ratione?"}},c={render:()=>r`
    <div class="grid grid-cols-1 gap-m sm:grid-cols-2">
      <!-- Resize enabled -->
      ${o({"disable-resize":!1,placeholder:"Resize is enabled"})}
      <!-- Resize disabled -->
      ${o({"disable-resize":!0,placeholder:"Resize is disabled"})}
    </div>
  `,args:{value:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, nulla. Ab non odio facere enim, voluptatum voluptates quod molestias suscipit fugiat et expedita accusamus quidem nostrum maxime illo recusandae ratione?"}},m={render:o,args:{maxlength:100,value:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."}},u={render:o,args:{readonly:!0,value:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, nulla. Ab non odio facere enim, voluptatum voluptates quod molestias suscipit fugiat et expedita accusamus quidem nostrum maxime illo recusandae ratione?"}},d={render:e=>r`
    <div class="grid grid-cols-1 gap-m sm:grid-cols-3">
      <!-- Error -->
      ${o({...e,"validation-status":"error"})}
      <!-- Warning -->
      ${o({...e,"validation-status":"warning"})}
      <!-- Success -->
      ${o({...e,"validation-status":"success"})}
    </div>
  `,args:{maxlength:100,"validation-status":"error",value:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."}},p={render:()=>{const e=a=>{a.preventDefault();const U=a.target,H=new FormData(U),Y=Object.fromEntries(H.entries()),h=document.getElementById("form-data");h&&(h.textContent=JSON.stringify(Y,null,2))};return r(v||(v=te([`
      <link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@11.10.0/styles/night-owl.min.css" />
      <div class="grid auto-cols-auto grid-cols-1 gap-y-l sm:grid-cols-2 sm:gap-x-l">
        <bq-card>
          <h4 class="m-be-m">Submit your issue</h4>
          <form class="flex flex-col gap-y-m" @submit=`,`>
            <div class="grid grid-cols-1 gap-y-m sm:grid-cols-2 sm:gap-x-m">
              <bq-input name="firstName" value="Brad Bernie" autocomplete="given-name" required>
                <label class="flex flex-grow items-center" slot="label">First Name</label>
              </bq-input>
              <bq-input name="lastName" value="Beckett" autocomplete="family-name" required>
                <label class="flex flex-grow items-center" slot="label">Last Name Optional</label>
              </bq-input>
            </div>
            <bq-input name="email" type="email" autocomplete="email">
              <div slot="label" class="flex flex-1 items-center">
                <label class="flex flex-grow items-center">Email address</label>
                <span class="text-text-secondary">Optional</span>
              </div>
            </bq-input>
            <bq-textarea
              required
              form-validation-message="Please, provide a detailed description of the issue"
              maxlength="100"
              name="details"
              placeholder="Please tell us more about the problem you are facing..."
              rows="5"
            >
              <label slot="label">What's the issue?</label>
            </bq-textarea>
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
    `])),e)}};var q,w,j;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: Template
}`,...(j=(w=i.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var y,T,$;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  args: {
    value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, nulla. Ab non odio facere enim, voluptatum voluptates quod molestias suscipit fugiat et expedita accusamus quidem nostrum maxime illo recusandae ratione?'
  }
}`,...($=(T=l.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var E,z,A;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: Template,
  args: {
    disabled: true,
    value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, nulla. Ab non odio facere enim, voluptatum voluptates quod molestias suscipit fugiat et expedita accusamus quidem nostrum maxime illo recusandae ratione?'
  }
}`,...(A=(z=n.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var D,L,S;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => html\`
    <div class="grid grid-cols-1 gap-m sm:grid-cols-2">
      <!-- Resize enabled -->
      \${Template({
    'disable-resize': false,
    placeholder: 'Resize is enabled'
  })}
      <!-- Resize disabled -->
      \${Template({
    'disable-resize': true,
    placeholder: 'Resize is disabled'
  })}
    </div>
  \`,
  args: {
    value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, nulla. Ab non odio facere enim, voluptatum voluptates quod molestias suscipit fugiat et expedita accusamus quidem nostrum maxime illo recusandae ratione?'
  }
}`,...(S=(L=c.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var k,F,_;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: Template,
  args: {
    maxlength: 100,
    value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  }
}`,...(_=(F=m.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var O,R,C;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: Template,
  args: {
    readonly: true,
    value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, nulla. Ab non odio facere enim, voluptatum voluptates quod molestias suscipit fugiat et expedita accusamus quidem nostrum maxime illo recusandae ratione?'
  }
}`,...(C=(R=u.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var N,I,B;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => html\`
    <div class="grid grid-cols-1 gap-m sm:grid-cols-3">
      <!-- Error -->
      \${Template({
    ...args,
    'validation-status': 'error'
  })}
      <!-- Warning -->
      \${Template({
    ...args,
    'validation-status': 'warning'
  })}
      <!-- Success -->
      \${Template({
    ...args,
    'validation-status': 'success'
  })}
    </div>
  \`,
  args: {
    maxlength: 100,
    'validation-status': 'error',
    value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  }
}`,...(B=(I=d.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var P,W,V;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
          <h4 class="m-be-m">Submit your issue</h4>
          <form class="flex flex-col gap-y-m" @submit=\${handleFormSubmit}>
            <div class="grid grid-cols-1 gap-y-m sm:grid-cols-2 sm:gap-x-m">
              <bq-input name="firstName" value="Brad Bernie" autocomplete="given-name" required>
                <label class="flex flex-grow items-center" slot="label">First Name</label>
              </bq-input>
              <bq-input name="lastName" value="Beckett" autocomplete="family-name" required>
                <label class="flex flex-grow items-center" slot="label">Last Name Optional</label>
              </bq-input>
            </div>
            <bq-input name="email" type="email" autocomplete="email">
              <div slot="label" class="flex flex-1 items-center">
                <label class="flex flex-grow items-center">Email address</label>
                <span class="text-text-secondary">Optional</span>
              </div>
            </bq-input>
            <bq-textarea
              required
              form-validation-message="Please, provide a detailed description of the issue"
              maxlength="100"
              name="details"
              placeholder="Please tell us more about the problem you are facing..."
              rows="5"
            >
              <label slot="label">What's the issue?</label>
            </bq-textarea>
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
}`,...(V=(W=p.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};const he=["Default","InitialValue","Disabled","DisableResize","MaxLength","ReadOnly","Validation","WithForm"];export{i as Default,c as DisableResize,n as Disabled,l as InitialValue,m as MaxLength,u as ReadOnly,d as Validation,p as WithForm,he as __namedExportsOrder,pe as default};
