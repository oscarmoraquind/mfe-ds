import{x as n,E as l}from"./lit-html-CeYizTxc.js";import{o as r}from"./if-defined-C7zjO9dX.js";import{ae as t,ar as w,as as $,at as me}from"./index-Bbs29GIG.js";import{u as ue}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import{I as pe,a as de}from"./bq-input.types-qyJ6-CUg.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function T(e){const a={li:"li",p:"p",ul:"ul",...ue(),...e.components};return t.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:t.jsxs("div",{className:"bq-doc__container",children:[t.jsx(w,{children:"Input"}),t.jsx(a.p,{children:"El componente Input es un elemento fundamental de la interfaz de usuario que permite a los usuarios introducir datos escribiéndolos en un campo de texto. Se utiliza comúnmente en aplicaciones web y móviles para diversos fines, como recopilar información del usuario, entradas de búsqueda y formularios de inicio de sesión."}),t.jsx($,{children:"Uso"}),t.jsxs(a.ul,{children:[`
`,t.jsx(a.li,{children:"Usa el componente Input para proporcionar una forma visual e interactiva de que los usuarios introduzcan datos."}),`
`,t.jsx(a.li,{children:"Asegúrate de que el componente Input sea accesible proporcionando etiquetas apropiadas y sugerencias útiles."}),`
`,t.jsx(a.li,{children:"Proporciona una validación adecuada de los datos introducidos para mejorar la integridad y evitar errores."}),`
`,t.jsx(a.li,{children:"Prueba el componente Input en diferentes navegadores y dispositivos para garantizar su compatibilidad y capacidad de respuesta."}),`
`]}),t.jsx($,{children:"👍 Cuándo usar"}),t.jsx(a.p,{children:"El componente Input debe usarse cuando necesites recopilar datos del usuario, tales como:"}),t.jsxs(a.ul,{children:[`
`,t.jsx(a.li,{children:"Capturar información personal en formularios de registro o inscripción."}),`
`,t.jsx(a.li,{children:"Implementar funcionalidad de búsqueda para filtrar datos."}),`
`,t.jsx(a.li,{children:"Introducir credenciales de inicio de sesión."}),`
`,t.jsx(a.li,{children:"Permitir a los usuarios enviar comentarios, mensajes o retroalimentación."}),`
`]}),t.jsx(w,{children:"Propiedades"}),t.jsx(me,{of:"bq-input"})]})})}function be(e={}){const{wrapper:a}={...ue(),...e.components};return a?t.jsx(a,{...e,children:t.jsx(T,{...e})}):T(e)}var S=Object.freeze,fe=Object.defineProperty,xe=(e,a)=>S(fe(e,"raw",{value:S(e.slice())})),L;const Ee={title:"Components/Input",component:"bq-input",parameters:{docs:{page:be}},argTypes:{autocapitalize:{control:"text"},autocomplete:{control:"text"},autocorrect:{control:"inline-radio",options:["on","off"]},autofocus:{control:"boolean"},"clear-button-label":{control:"text"},"debounce-time":{control:"number"},"disable-clear":{control:"boolean"},disabled:{control:"boolean"},max:{control:"text"},maxlength:{control:"number"},min:{control:"text"},minlength:{control:"number"},name:{control:"text"},pattern:{control:"text"},placeholder:{control:"text"},readonly:{control:"boolean"},required:{control:"boolean"},step:{control:"text"},type:{control:"select",options:[...pe]},"validation-status":{control:"select",options:[...de]},value:{control:"text"},bqBlur:{action:"bqBlur"},bqChange:{action:"bqChange"},bqClear:{action:"bqClear"},bqFocus:{action:"bqFocus"},bqInput:{action:"bqInput"},noLabel:{control:"boolean",table:{disable:!0}},hasLabelTooltip:{control:"boolean",table:{disable:!0}},noHelperText:{control:"boolean",table:{disable:!0}},optionalLabel:{control:"boolean",table:{disable:!0}},prefix:{control:"boolean",table:{disable:!0}},suffix:{control:"boolean",table:{disable:!0}}},args:{autocapitalize:"off",autocomplete:"off",autocorrect:"off",autofocus:!1,"clear-button-label":"Clear value","disable-clear":!1,disabled:!1,"debounce-time":0,form:void 0,inputmode:"text",max:void 0,maxlength:void 0,min:void 0,minlength:void 0,name:"bq-input",pattern:void 0,readonly:!1,required:!1,step:void 0,type:"text",placeholder:"Placeholder","validation-status":"none",value:void 0}},o=e=>{const a=e.hasLabelTooltip?n`
        <bq-tooltip class="ms-xs">
          <bq-icon name="info" slot="trigger"></bq-icon>
          You can provide more context detail by adding a tooltip to the label.
        </bq-tooltip>
      `:l,s=n`
    <label class="flex flex-grow items-center" slot=${r(e.optionalLabel?null:"label")}>
      Input label ${a}
    </label>
  `,v=e.optionalLabel?n`
        <div slot="label" class="flex flex-1 items-center">
          ${s}
          <span class="text-text-secondary">Optional</span>
        </div>
      `:s,y=e.hasLabelTooltip?n`
        <style>
          bq-input {
            inline-size: 75vw;
          }
        </style>
      `:l;return n`
    ${y}
    <bq-input
      autocapitalize=${r(e.autocapitalize)}
      autocomplete=${r(e.autocomplete)}
      autocorrect=${r(e.autocorrect)}
      ?autofocus=${e.autofocus}
      clear-button-label=${e["clear-button-label"]}
      debounce-time=${e["debounce-time"]}
      ?disable-clear=${e["disable-clear"]}
      ?disabled=${e.disabled}
      form=${r(e.form)}
      inputmode=${r(e.inputmode)}
      max=${r(e.max)}
      maxlength=${r(e.maxlength)}
      min=${r(e.min)}
      minlength=${r(e.minlength)}
      name=${r(e.name)}
      pattern=${r(e.pattern)}
      placeholder=${r(e.placeholder)}
      ?readonly=${e.readonly}
      ?required=${e.required}
      step=${r(e.step)}
      type=${r(e.type)}
      validation-status=${r(e["validation-status"])}
      value=${r(e.value)}
      @bqBlur=${e.bqBlur}
      @bqChange=${e.bqChange}
      @bqClear=${e.bqClear}
      @bqFocus=${e.bqFocus}
      @bqInput=${e.bqInput}
    >
      ${e.noLabel?l:v}
      ${e.prefix?n`<bq-icon name="user-circle" slot="prefix"></bq-icon>`:l}
      ${e.suffix?n`<bq-icon name="gear" slot="suffix"></bq-icon>`:l}
      ${e.noHelperText?l:n`
            <span class="flex items-center gap-xs" slot="helper-text">
              <bq-icon name="star"></bq-icon>
              Helper text
            </span>
          `}
    </bq-input>
  `},i={render:o},c={render:o,args:{value:"Hello World!"}},u={render:o,args:{prefix:!0}},m={render:o,args:{suffix:!0}},p={name:"Prefix and Suffix",render:o,args:{prefix:!0,suffix:!0}},d={render:o,args:{disabled:!0,prefix:!0,suffix:!0}},b={name:"Validation",render:e=>n`
    <div class="flex flex-col gap-l">
      <!-- Error -->
      ${o({...e,name:"bq-input-error","validation-status":"error"})}
      <!-- Success -->
      ${o({...e,name:"bq-input-success","validation-status":"success"})}
      <!-- Warning -->
      ${o({...e,name:"bq-input-warning","validation-status":"warning"})}
    </div>
  `,args:{prefix:!0,suffix:!0}},f={name:'Label with "Optional"',render:o,args:{optionalLabel:!0,prefix:!0,suffix:!0}},x={name:'Label with "Info tooltip"',render:o,args:{hasLabelTooltip:!0,optionalLabel:!0,prefix:!0,suffix:!0},parameters:{layout:"centered"}},g={name:"With no Label",render:o,args:{noLabel:!0,prefix:!0,suffix:!0}},h={name:"With no Helper Text",render:o,args:{noHelperText:!0,prefix:!0,suffix:!0}},q={render:()=>{const e=a=>{a.preventDefault();const s=a.target,v=new FormData(s),y=Object.fromEntries(v.entries()),j=document.getElementById("form-data");j&&(j.textContent=JSON.stringify(y,null,2))};return n(L||(L=xe([`
      <link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@11.10.0/styles/night-owl.min.css" />

      <div class="grid auto-cols-auto grid-cols-1 gap-y-l sm:grid-cols-2 sm:gap-x-l">
        <bq-card>
          <h4 class="m-be-m">Shipping Information</h4>
          <form class="flex flex-col gap-y-m" @submit=`,` method="post">
            <div class="grid grid-cols-1 gap-y-m sm:grid-cols-2 sm:gap-x-m">
              <bq-input
                name="firstName"
                value="Brad Bernie"
                autocomplete="given-name"
                form-validation-message="Please, tell us what's your name"
                required
              >
                <label class="flex flex-grow items-center" slot="label">First Name</label>
              </bq-input>
              <bq-input
                name="lastName"
                value="Beckett"
                autocomplete="family-name"
                form-validation-message="Please, tell us your family name"
                required
              >
                <label class="flex flex-grow items-center" slot="label">Last Name</label>
              </bq-input>
            </div>
            <bq-input
              name="company"
              value="Endava"
              autocomplete="organization"
              form-validation-message="Please, tell us your company name"
              required
            >
              <label class="flex flex-grow items-center" slot="label">Company</label>
            </bq-input>
            <bq-input
              name="address"
              value="413 South Ohio Ave"
              autocomplete="shipping street-address"
              form-validation-message="Please, tell us your address"
              required
            >
              <label class="flex flex-grow items-center" slot="label">Address</label>
            </bq-input>
            <div class="grid grid-cols-1 gap-y-m sm:grid-cols-2 sm:gap-x-m" autocomplete="address-level2">
              <bq-input
                name="city"
                value="Oklahoma"
                form-validation-message="Please, tell us in which city you live"
                required
              >
                <label class="flex flex-grow items-center" slot="label">City</label>
              </bq-input>
              <bq-select name="country" value="us" autocomplete="country-name">
                <label class="flex flex-grow items-center" slot="label">Country</label>
                <bq-option value="au">Australia</bq-option>
                <bq-option value="ca">Canada</bq-option>
                <bq-option value="mx">Mexico</bq-option>
                <bq-option value="pt">Portugal</bq-option>
                <bq-option value="ro">Romania</bq-option>
                <bq-option value="us">United States</bq-option>
              </bq-select>
            </div>
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
    `])),e)}};var E,P,C;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: Template
}`,...(C=(P=i.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var I,D,F;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: Template,
  args: {
    value: 'Hello World!'
  }
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var N,O,_;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: Template,
  args: {
    prefix: true
  }
}`,...(_=(O=u.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var A,H,k;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: Template,
  args: {
    suffix: true
  }
}`,...(k=(H=m.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var z,B,V;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Prefix and Suffix',
  render: Template,
  args: {
    prefix: true,
    suffix: true
  }
}`,...(V=(B=p.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var W,M,U;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: Template,
  args: {
    disabled: true,
    prefix: true,
    suffix: true
  }
}`,...(U=(M=d.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var R,X,J;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Validation',
  render: args => html\`
    <div class="flex flex-col gap-l">
      <!-- Error -->
      \${Template({
    ...args,
    name: 'bq-input-error',
    'validation-status': 'error'
  })}
      <!-- Success -->
      \${Template({
    ...args,
    name: 'bq-input-success',
    'validation-status': 'success'
  })}
      <!-- Warning -->
      \${Template({
    ...args,
    name: 'bq-input-warning',
    'validation-status': 'warning'
  })}
    </div>
  \`,
  args: {
    prefix: true,
    suffix: true
  }
}`,...(J=(X=b.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Y,G,K;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Label with "Optional"',
  render: Template,
  args: {
    optionalLabel: true,
    prefix: true,
    suffix: true
  }
}`,...(K=(G=f.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,Z,ee;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Label with "Info tooltip"',
  render: Template,
  args: {
    hasLabelTooltip: true,
    optionalLabel: true,
    prefix: true,
    suffix: true
  },
  parameters: {
    layout: 'centered'
  }
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,re;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'With no Label',
  render: Template,
  args: {
    noLabel: true,
    prefix: true,
    suffix: true
  }
}`,...(re=(te=g.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var oe,ne,le;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'With no Helper Text',
  render: Template,
  args: {
    noHelperText: true,
    prefix: true,
    suffix: true
  }
}`,...(le=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var se,ie,ce;q.parameters={...q.parameters,docs:{...(se=q.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
          <h4 class="m-be-m">Shipping Information</h4>
          <form class="flex flex-col gap-y-m" @submit=\${handleFormSubmit} method="post">
            <div class="grid grid-cols-1 gap-y-m sm:grid-cols-2 sm:gap-x-m">
              <bq-input
                name="firstName"
                value="Brad Bernie"
                autocomplete="given-name"
                form-validation-message="Please, tell us what's your name"
                required
              >
                <label class="flex flex-grow items-center" slot="label">First Name</label>
              </bq-input>
              <bq-input
                name="lastName"
                value="Beckett"
                autocomplete="family-name"
                form-validation-message="Please, tell us your family name"
                required
              >
                <label class="flex flex-grow items-center" slot="label">Last Name</label>
              </bq-input>
            </div>
            <bq-input
              name="company"
              value="Endava"
              autocomplete="organization"
              form-validation-message="Please, tell us your company name"
              required
            >
              <label class="flex flex-grow items-center" slot="label">Company</label>
            </bq-input>
            <bq-input
              name="address"
              value="413 South Ohio Ave"
              autocomplete="shipping street-address"
              form-validation-message="Please, tell us your address"
              required
            >
              <label class="flex flex-grow items-center" slot="label">Address</label>
            </bq-input>
            <div class="grid grid-cols-1 gap-y-m sm:grid-cols-2 sm:gap-x-m" autocomplete="address-level2">
              <bq-input
                name="city"
                value="Oklahoma"
                form-validation-message="Please, tell us in which city you live"
                required
              >
                <label class="flex flex-grow items-center" slot="label">City</label>
              </bq-input>
              <bq-select name="country" value="us" autocomplete="country-name">
                <label class="flex flex-grow items-center" slot="label">Country</label>
                <bq-option value="au">Australia</bq-option>
                <bq-option value="ca">Canada</bq-option>
                <bq-option value="mx">Mexico</bq-option>
                <bq-option value="pt">Portugal</bq-option>
                <bq-option value="ro">Romania</bq-option>
                <bq-option value="us">United States</bq-option>
              </bq-select>
            </div>
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
}`,...(ce=(ie=q.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const Pe=["Default","Value","Prefix","Suffix","PrefixAndSuffix","Disabled","ValidationStatus","Optional","Tooltip","NoLabel","NoHelperText","WithForm"];export{i as Default,d as Disabled,h as NoHelperText,g as NoLabel,f as Optional,u as Prefix,p as PrefixAndSuffix,m as Suffix,x as Tooltip,b as ValidationStatus,c as Value,q as WithForm,Pe as __namedExportsOrder,Ee as default};
