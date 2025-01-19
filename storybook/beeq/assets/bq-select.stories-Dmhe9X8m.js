import{x as l,E as n}from"./lit-html-CeYizTxc.js";import{o as i}from"./if-defined-C7zjO9dX.js";import{ae as t,ar as E,as as O,at as ze}from"./index-Bbs29GIG.js";import{u as Le}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import{a as De}from"./bq-input.types-qyJ6-CUg.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function z(e){const a={li:"li",p:"p",ul:"ul",...Le(),...e.components};return t.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:t.jsxs("div",{className:"bq-doc__container",children:[t.jsx(E,{children:"Select"}),t.jsx(a.p,{children:`El componente Select es un elemento de la interfaz de usuario utilizado para permitir que los usuarios seleccionen una opción de una lista.
Los componentes Select se utilizan comúnmente en formularios y otras aplicaciones para proporcionar una forma conveniente para que los usuarios elijan un valor de una lista de opciones.`}),t.jsx(O,{children:"Uso"}),t.jsxs(a.ul,{children:[`
`,t.jsx(a.li,{children:"Permitir que los usuarios seleccionen de una lista de opciones, como una lista de países, una lista de colores o una lista de fechas."}),`
`,t.jsx(a.li,{children:"Filtrar o reducir una lista de opciones, como mediante una búsqueda o seleccionando una categoría, para facilitar que los usuarios encuentren la opción que necesitan."}),`
`,t.jsx(a.li,{children:"Proporcionar una forma compacta y eficiente de seleccionar un valor de una lista grande de opciones, sin ocupar demasiado espacio en la pantalla."}),`
`]}),t.jsx(O,{children:"👍 Cuándo usar"}),t.jsx(a.p,{children:"Usa el componente Select cuando:"}),t.jsxs(a.ul,{children:[`
`,t.jsx(a.li,{children:"Elegir de una lista predefinida: Los componentes Select son ideales para situaciones en las que los usuarios deben elegir una sola opción de una lista preestablecida de opciones."}),`
`,t.jsx(a.li,{children:"Selección de opciones consistente: Si las opciones disponibles son consistentes entre usuarios o casos de uso, un componente Select proporciona una interfaz estandarizada y familiar para que los usuarios realicen sus selecciones."}),`
`,t.jsx(a.li,{children:"Espacio limitado en la pantalla: Si el espacio en pantalla es limitado, un componente Select puede ser una forma eficiente en cuanto a espacio de presentar una lista de opciones sin sobrecargar la interfaz."}),`
`]}),t.jsx(E,{children:"Propiedades"}),t.jsx(ze,{of:"bq-select"})]})})}function Ce(e={}){const{wrapper:a}={...Le(),...e.components};return a?t.jsx(a,{...e,children:t.jsx(z,{...e})}):z(e)}var D=Object.freeze,Fe=Object.defineProperty,_e=(e,a)=>D(Fe(e,"raw",{value:D(e.slice())})),C;const{useArgs:Pe}=__STORYBOOK_MODULE_PREVIEW_API__,Je={title:"Components/Select",component:"bq-select",parameters:{docs:{page:Ce}},argTypes:{autofocus:{control:"boolean"},"clear-button-label":{control:"text"},"debounce-time":{control:"number"},"disable-clear":{control:"boolean"},distance:{control:"number"},disabled:{control:"boolean"},form:{control:"text"},"keep-open-on-select":{control:"boolean"},name:{control:"text"},"max-tags-visible":{control:"number"},multiple:{control:"boolean"},open:{control:"boolean"},"panel-height":{control:"text"},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"]},placeholder:{control:"text"},readonly:{control:"boolean"},required:{control:"boolean"},"same-width":{control:"boolean"},skidding:{control:"number"},strategy:{control:"select",options:["fixed","absolute"]},"validation-status":{control:"select",options:[...De]},value:{control:"object"},bqBlur:{action:"bqBlur"},bqClear:{action:"bqClear"},bqFocus:{action:"bqFocus"},bqSelect:{action:"bqSelect"},noLabel:{control:"boolean",table:{disable:!0}},hasLabelTooltip:{control:"boolean",table:{disable:!0}},noHelperText:{control:"boolean",table:{disable:!0}},optionalLabel:{control:"boolean",table:{disable:!0}},prefix:{control:"boolean",table:{disable:!0}},suffix:{control:"boolean",table:{disable:!0}},customTags:{control:"boolean",table:{disable:!0}},options:{control:"text",table:{disable:!0}}},args:{autofocus:!1,"clear-button-label":"Clear value","debounce-time":0,"disable-clear":!1,distance:8,disabled:!1,form:void 0,"keep-open-on-select":!1,name:"bq-select","max-tags-visible":2,multiple:!1,open:!1,"panel-height":void 0,placement:"bottom",placeholder:"Placeholder","same-width":!1,skidding:0,strategy:"absolute",readonly:!1,required:!1,"validation-status":"none",customTags:!1,value:void 0,options:[{label:"Running",value:"running",icon:"sneaker-move"},{label:"Hiking",value:"hiking",icon:"boot"},{label:"Biking",value:"biking",icon:"person-simple-bike"},{label:"Swimming",value:"swimming",icon:"swimming-pool"},{label:"Pizza",value:"pizza",icon:"pizza"},{label:"Hamburger",value:"hamburger",icon:"hamburger"},{label:"Cookie",value:"cookie",icon:"cookie"},{label:"Ice-cream",value:"ice-cream",icon:"ice-cream"}]}},o=e=>{const[,a]=Pe(),$=r=>{a({value:r.detail.value}),e.bqSelect(r)},w=r=>{a({value:[]}),e.bqClear(r)},k=e.hasLabelTooltip?l`
        <bq-tooltip class="ms-xs">
          <bq-icon name="info" slot="trigger"></bq-icon>
          You can provide more context detail by adding a tooltip to the label.
        </bq-tooltip>
      `:n,s=l`
    <label class="flex flex-grow items-center" slot=${i(e.optionalLabel?null:"label")}>
      Select label ${k}
    </label>
  `,Ee=e.optionalLabel?l`
        <div slot="label" class="flex flex-1">
          ${s}
          <span class="text-text-secondary">Optional</span>
        </div>
      `:s,Oe=e.hasLabelTooltip?l`
        <style>
          bq-select {
            inline-size: 75vw;
          }
        </style>
      `:n;return l`
    ${Oe}
    <bq-select
      ?autofocus=${e.autofocus}
      clear-button-label=${e["clear-button-label"]}
      distance=${e.distance}
      debounce-time=${e["debounce-time"]}
      ?disable-clear=${e["disable-clear"]}
      ?disabled=${e.disabled}
      form=${i(e.form)}
      ?keep-open-on-select=${e["keep-open-on-select"]}
      name=${i(e.name)}
      max-tags-visible=${e["max-tags-visible"]}
      ?multiple=${e.multiple}
      ?open=${e.open}
      panel-height=${e["panel-height"]}
      placeholder=${e.placeholder}
      placement=${e.placement}
      ?readonly=${e.readonly}
      ?required=${e.required}
      ?same-width=${e["same-width"]}
      skidding=${e.skidding}
      strategy=${e.strategy}
      validation-status=${e["validation-status"]}
      value=${e.multiple?i(JSON.stringify(e.value)):e.value}
      @bqBlur=${e.bqBlur}
      @bqSelect=${e.customTags?$:e.bqSelect}
      @bqClear=${e.customTags?w:e.bqClear}
      @bqFocus=${e.bqFocus}
    >
      ${e.customTags?l`${e.options.filter(r=>e.value.includes(r.value)).map((r,L)=>L<e["max-tags-visible"]||e["max-tags-visible"]<0?l`<bq-tag
                  key=${r.value}
                  size="xsmall"
                  variant="filled"
                  slot="tags"
                  class="[&::part(text)]:text-nowrap [&::part(text)]:leading-small"
                >
                  <bq-icon name=${r.icon} slot="prefix"></bq-icon>
                  ${r.value}
                </bq-tag>`:L===e["max-tags-visible"]?l`
                  <bq-tag
                    key="more"
                    size="xsmall"
                    variant="filled"
                    slot="tags"
                    class="[&::part(text)]:text-nowrap [&::part(text)]:leading-small"
                  >
                    +${e.value.length-L}
                  </bq-tag>
                `:n)}`:n}
      ${e.noLabel?n:Ee}
      ${e.prefix?l`<bq-icon name="user-circle" slot="prefix"></bq-icon>`:n}
      ${e.suffix?l`<bq-icon name="arrow-down" slot="suffix"></bq-icon>`:n}
      ${e.noHelperText?n:l`
            <span class="flex items-center gap-xs" slot="helper-text">
              <bq-icon name="star"></bq-icon>
              Helper text
            </span>
          `}
      ${e.options.map(r=>l`
          <bq-option value=${r.value}>
            <bq-icon slot="prefix" name=${r.icon}></bq-icon> ${r.label}
          </bq-option>
        `)}
    </bq-select>
  `},c={render:o},u={render:o,args:{autofocus:!0,open:!0}},p={render:o,args:{value:"swimming"}},m={render:o,args:{readonly:!0}},d={render:o,args:{disabled:!0}},b={render:o,args:{"keep-open-on-select":!0,multiple:!0,value:["running","biking","pizza"]}},f={render:o,args:{"keep-open-on-select":!0,multiple:!0,customTags:!0,value:["running","biking","pizza"]}},g={render:o,args:{prefix:!0}},h={render:o,args:{suffix:!0}},v={render:e=>l`
    <div class="grid grid-cols-1 gap-m sm:grid-cols-3">
      <!-- Error -->
      ${o({...e,"validation-status":"error",value:1})}
      <!-- Warning -->
      ${o({...e,"validation-status":"warning",value:3})}
      <!-- Success -->
      ${o({...e,"validation-status":"success",value:5})}
    </div>
  `},q={name:'Label with "Optional"',render:o,args:{optionalLabel:!0,prefix:!0}},x={name:'Label with "Info tooltip"',render:o,args:{hasLabelTooltip:!0,optionalLabel:!0,prefix:!0},parameters:{layout:"centered"}},y={name:"Panel placement",render:o,args:{hasLabelTooltip:!0,placement:"top",prefix:!0},parameters:{layout:"centered"}},j={name:"With no Label",render:o,args:{noLabel:!0,prefix:!0}},S={name:"With no Helper Text",render:o,args:{noHelperText:!0,prefix:!0}},T={render:()=>{const e=a=>{a.preventDefault();const $=a.target,w=new FormData($),k=Object.fromEntries(w.entries()),s=document.getElementById("form-data");s&&(s.textContent=JSON.stringify(k,null,2))};return l(C||(C=_e([`
      <link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@11.10.0/styles/night-owl.min.css" />

      <div class="grid auto-cols-auto grid-cols-1 gap-y-l sm:grid-cols-2 sm:gap-x-l">
        <bq-card>
          <h4 class="m-be-m">User data</h4>
          <form class="flex flex-col gap-y-m" @submit=`,`>
            <bq-input name="fullName" value="Brad Bernie Beckett" autocomplete="name" required>
              <label class="flex flex-grow items-center" slot="label">Full Name</label>
            </bq-input>
            <div class="grid grid-cols-1 gap-y-m sm:grid-cols-2 sm:gap-x-m">
              <bq-select name="gender" value="male" autocomplete="sex" readonly>
                <label class="flex flex-grow items-center" slot="label">Gender</label>
                <bq-option value="female">Female</bq-option>
                <bq-option value="male">Male</bq-option>
                <bq-option value="non-binary">Non-binary</bq-option>
                <bq-option value="other">Other</bq-option>
              </bq-select>
              <bq-input name="bdayYear" type="number" value="1983" autocomplete="bday-year" required>
                <label class="flex flex-grow items-center" slot="label">Year of birth date (YYYY)</label>
              </bq-input>
            </div>
            <bq-select name="prevCountries" value='["ro","us"]' multiple autocomplete="country-name">
              <label class="flex flex-grow items-center" slot="label">Previous countries</label>
              <bq-option value="au">Australia</bq-option>
              <bq-option value="ca">Canada</bq-option>
              <bq-option value="mx">Mexico</bq-option>
              <bq-option value="pt">Portugal</bq-option>
              <bq-option value="ro">Romania</bq-option>
              <bq-option value="us">United States</bq-option>
              <span class="flex items-center gap-xs" slot="helper-text">
                Please select the countries you have visited before.
              </span>
            </bq-select>
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
    `])),e)}};var F,_,P;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: Template
}`,...(P=(_=c.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var N,H,M;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: Template,
  args: {
    autofocus: true,
    open: true
  }
}`,...(M=(H=u.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var B,Y,A;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: Template,
  args: {
    value: 'swimming'
  }
}`,...(A=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:A.source}}};var I,V,R;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: Template,
  args: {
    readonly: true
  }
}`,...(R=(V=m.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var W,U,J;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: Template,
  args: {
    disabled: true
  }
}`,...(J=(U=d.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var X,G,K;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: Template,
  args: {
    'keep-open-on-select': true,
    multiple: true,
    value: ['running', 'biking', 'pizza']
  }
}`,...(K=(G=b.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,Z,ee;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: Template,
  args: {
    'keep-open-on-select': true,
    multiple: true,
    customTags: true,
    value: ['running', 'biking', 'pizza']
  }
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,oe;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: Template,
  args: {
    prefix: true
  }
}`,...(oe=(te=g.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,le,ne;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: Template,
  args: {
    suffix: true
  }
}`,...(ne=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var se,ie,ce;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => html\`
    <div class="grid grid-cols-1 gap-m sm:grid-cols-3">
      <!-- Error -->
      \${Template({
    ...args,
    'validation-status': 'error',
    value: 1
  })}
      <!-- Warning -->
      \${Template({
    ...args,
    'validation-status': 'warning',
    value: 3
  })}
      <!-- Success -->
      \${Template({
    ...args,
    'validation-status': 'success',
    value: 5
  })}
    </div>
  \`
}`,...(ce=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,pe,me;q.parameters={...q.parameters,docs:{...(ue=q.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Label with "Optional"',
  render: Template,
  args: {
    optionalLabel: true,
    prefix: true
  }
}`,...(me=(pe=q.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var de,be,fe;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Label with "Info tooltip"',
  render: Template,
  args: {
    hasLabelTooltip: true,
    optionalLabel: true,
    prefix: true
  },
  parameters: {
    layout: 'centered'
  }
}`,...(fe=(be=x.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ge,he,ve;y.parameters={...y.parameters,docs:{...(ge=y.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'Panel placement',
  render: Template,
  args: {
    hasLabelTooltip: true,
    placement: 'top',
    prefix: true
  },
  parameters: {
    layout: 'centered'
  }
}`,...(ve=(he=y.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var qe,xe,ye;j.parameters={...j.parameters,docs:{...(qe=j.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'With no Label',
  render: Template,
  args: {
    noLabel: true,
    prefix: true
  }
}`,...(ye=(xe=j.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var je,Se,Te;S.parameters={...S.parameters,docs:{...(je=S.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'With no Helper Text',
  render: Template,
  args: {
    noHelperText: true,
    prefix: true
  }
}`,...(Te=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};var $e,we,ke;T.parameters={...T.parameters,docs:{...($e=T.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
          <h4 class="m-be-m">User data</h4>
          <form class="flex flex-col gap-y-m" @submit=\${handleFormSubmit}>
            <bq-input name="fullName" value="Brad Bernie Beckett" autocomplete="name" required>
              <label class="flex flex-grow items-center" slot="label">Full Name</label>
            </bq-input>
            <div class="grid grid-cols-1 gap-y-m sm:grid-cols-2 sm:gap-x-m">
              <bq-select name="gender" value="male" autocomplete="sex" readonly>
                <label class="flex flex-grow items-center" slot="label">Gender</label>
                <bq-option value="female">Female</bq-option>
                <bq-option value="male">Male</bq-option>
                <bq-option value="non-binary">Non-binary</bq-option>
                <bq-option value="other">Other</bq-option>
              </bq-select>
              <bq-input name="bdayYear" type="number" value="1983" autocomplete="bday-year" required>
                <label class="flex flex-grow items-center" slot="label">Year of birth date (YYYY)</label>
              </bq-input>
            </div>
            <bq-select name="prevCountries" value='["ro","us"]' multiple autocomplete="country-name">
              <label class="flex flex-grow items-center" slot="label">Previous countries</label>
              <bq-option value="au">Australia</bq-option>
              <bq-option value="ca">Canada</bq-option>
              <bq-option value="mx">Mexico</bq-option>
              <bq-option value="pt">Portugal</bq-option>
              <bq-option value="ro">Romania</bq-option>
              <bq-option value="us">United States</bq-option>
              <span class="flex items-center gap-xs" slot="helper-text">
                Please select the countries you have visited before.
              </span>
            </bq-select>
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
}`,...(ke=(we=T.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};const Xe=["Default","Open","InitialValue","ReadOnly","Disabled","Multiple","MultipleCustomRender","Prefix","Suffix","Validation","Optional","Tooltip","Placement","NoLabel","NoHelperText","WithForm"];export{c as Default,d as Disabled,p as InitialValue,b as Multiple,f as MultipleCustomRender,S as NoHelperText,j as NoLabel,u as Open,q as Optional,y as Placement,g as Prefix,m as ReadOnly,h as Suffix,x as Tooltip,v as Validation,T as WithForm,Xe as __namedExportsOrder,Je as default};
