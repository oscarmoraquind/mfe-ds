import{x as l,E as s}from"./lit-html-CeYizTxc.js";import{o as r}from"./if-defined-C7zjO9dX.js";import{ae as t,ar as w,as as j,at as ue}from"./index-Bbs29GIG.js";import{u as de}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import{a as be}from"./bq-input.types-qyJ6-CUg.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function D(e){const a={li:"li",p:"p",ul:"ul",...de(),...e.components};return t.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:t.jsxs("div",{className:"bq-doc__container",children:[t.jsx(w,{children:"Date picker"}),t.jsx(a.p,{children:`The Date Picker is a intuitive UI element component allows users to select dates from a visual calendar interface, providing an intuitive way to input date information.
It offers a simple and efficient way to pick dates and/or time by minimizing errors and improving clarity.`}),t.jsx(j,{children:"Usage"}),t.jsxs(a.ul,{children:[`
`,t.jsx(a.li,{children:"Use the Date Picker to allow users to select dates for scheduling appointments or events."}),`
`,t.jsx(a.li,{children:"Use the Date Picker to enable users to choose dates for travel bookings or reservations."}),`
`,t.jsx(a.li,{children:"Use the Date Picker to specify due dates or deadlines in project management tools."}),`
`,t.jsx(a.li,{children:"Use the Date Picker to filter records by date range in data analysis or reporting tools."}),`
`]}),t.jsx(j,{children:"👍 When to use"}),t.jsxs(a.ul,{children:[`
`,t.jsx(a.li,{children:"When you need to collect precise date input, such as for booking systems, event scheduling, or project timelines."}),`
`,t.jsx(a.li,{children:"When providing a calendar view can enhance the user experience and reduce errors in date selection."}),`
`,t.jsx(a.li,{children:"When requiring users to select date ranges for filtering data, such as in reports or search functions."}),`
`,t.jsx(a.li,{children:"When simplifying the process of entering dates, reducing the likelihood of format errors, and improving overall data integrity."}),`
`,t.jsx(a.li,{children:"When offering users a convenient way to pick dates for reminders, deadlines, or other time-sensitive tasks."}),`
`]}),t.jsx(w,{children:"Properties"}),t.jsx(ue,{of:"bq-date-picker"})]})})}function fe(e={}){const{wrapper:a}={...de(),...e.components};return a?t.jsx(a,{...e,children:t.jsx(D,{...e})}):D(e)}const ge=["single","multi","range"];var $=Object.freeze,he=Object.defineProperty,ve=(e,a)=>$(he(e,"raw",{value:$(e.slice())})),T;const Ee={title:"Components/Date picker",component:"bq-date-picker",parameters:{docs:{page:fe}},argTypes:{autofocus:{control:"boolean"},"clear-button-label":{control:"text"},"disable-clear":{control:"boolean"},distance:{control:"number"},disabled:{control:"boolean"},"first-day-of-week":{control:"number"},formatOptions:{control:"object"},form:{control:"text"},locale:{control:"text"},max:{control:"text"},min:{control:"text"},months:{control:"number"},"months-per-view":{control:"select",options:["single","months"]},name:{control:"text"},open:{control:"boolean"},"panel-height":{control:"text"},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"]},placeholder:{control:"text"},required:{control:"boolean"},"show-outside-days":{control:"boolean"},skidding:{control:"number"},strategy:{control:"select",options:["fixed","absolute"]},tentative:{control:"text"},type:{control:"select",options:[...ge]},"validation-status":{control:"select",options:[...be]},value:{control:"text"},bqBlur:{action:"bqBlur"},bqChange:{action:"bqChange"},bqClear:{action:"bqClear"},bqFocus:{action:"bqFocus"},noLabel:{control:"boolean",table:{disable:!0}},hasLabelTooltip:{control:"boolean",table:{disable:!0}},prefix:{control:"boolean",table:{disable:!0}},suffix:{control:"boolean",table:{disable:!0}}},args:{autofocus:!1,"clear-button-label":"Clear value","disable-clear":!1,distance:8,disabled:!1,"first-day-of-week":1,formatOptions:{day:"numeric",month:"short",year:"numeric"},form:void 0,isDateDisallowed:void 0,locale:void 0,max:void 0,min:void 0,months:1,"months-per-view":"single",name:"bq-date-picker",open:!1,"panel-height":"auto",placement:"bottom-end",placeholder:"Enter your date",required:!1,"show-outside-days":!1,skidding:0,strategy:"absolute",tentative:void 0,type:"single","validation-status":"none",value:void 0}},o=e=>{const a=e.hasLabelTooltip?l`
        <bq-tooltip class="ms-xs">
          <bq-icon name="info" slot="trigger"></bq-icon>
          You can provide more context detail by adding a tooltip to the label.
        </bq-tooltip>
      `:s,n=l`
    <label class="flex flex-grow items-center" slot=${r(e.optionalLabel?null:"label")}>
      Date picker label ${a}
    </label>
  `,q=e.optionalLabel?l`
        <div slot="label" class="flex flex-1">
          ${n}
          <span class="text-text-secondary">Optional</span>
        </div>
      `:n,k=pe=>{if(!e.customDisallowedDate)return!1;const me=pe.toLocaleDateString("fr-CA");return e.customDisallowedDate.replace(/\s+/g,"").split(",").includes(me)},i=e.hasLabelTooltip?l`
        <style>
          bq-date-picker {
            margin-block-start: -10rem;
            inline-size: 75vw;
          }
        </style>
      `:s;return l`
    ${i}
    <bq-date-picker
      ?autofocus=${e.autofocus}
      clear-button-label=${r(e["clear-button-label"])}
      distance=${r(e.distance)}
      ?disable-clear=${e["disable-clear"]}
      ?disabled=${e.disabled}
      first-day-of-week=${r(e["first-day-of-week"])}
      form=${r(e.form)}
      .formatOptions=${e.formatOptions}
      .isDateDisallowed=${k}
      locale=${r(e.locale)}
      max=${r(e.max)}
      min=${r(e.min)}
      months=${r(e.months)}
      months-per-view=${r(e["months-per-view"])}
      name=${r(e.name)}
      ?open=${e.open}
      panel-height=${r(e["panel-height"])}
      placeholder=${r(e.placeholder)}
      placement=${r(e.placement)}
      ?required=${e.required}
      ?show-outside-days=${e["show-outside-days"]}
      skidding=${r(e.skidding)}
      strategy=${r(e.strategy)}
      tentative=${r(e.tentative)}
      type=${r(e.type)}
      validation-status=${r(e["validation-status"])}
      value=${r(e.value)}
      @bqBlur=${e.bqBlur}
      @bqChange=${e.bqChange}
      @bqClear=${e.bqClear}
      @bqFocus=${e.bqFocus}
    >
      ${e.noLabel?s:q}
      ${e.prefix?l`<bq-icon name="user-circle" slot="prefix"></bq-icon>`:s}
      ${e.suffix?l`<bq-icon name="arrow-down" slot="suffix"></bq-icon>`:s}
    </bq-date-picker>
  `},c={render:o},d={render:o,args:{type:"range",months:2}},p={render:o,args:{type:"multi",months:2}},m={render:e=>l`
    <div class="grid grid-cols-1 gap-m sm:grid-cols-3">
      <!-- Default date picker -->
      <div class="flex flex-col gap-2">
        <p>Default date picker</p>
        ${o({...e,value:"2024-05-25",name:"bq-date-picker-default",noLabel:"true"})}
      </div>
      <!-- Range date picker -->
      <div class="flex flex-col gap-2">
        <p>Range date picker</p>
        ${o({...e,value:"2024-12-20/2025-01-10",name:"bq-date-picker-range",type:"range",months:2,noLabel:"true"})}
      </div>
      <!-- Multi date picker -->
      <div class="flex flex-col gap-2">
        <p>Multi date picker</p>
        ${o({...e,value:"2024-05-08 2024-05-22 2024-06-04 2024-06-18 2024-05-16 2024-05-30 2024-06-12 2024-06-26",name:"bq-date-picker-multi",type:"multi",months:2,noLabel:"true"})}
      </div>
    </div>
  `},u={name:"Min and Max allowed dates",render:o,args:{min:"2024-06-05",max:"2024-06-15",value:"2024-06-10"}},b={render:o,args:{disabled:!0,value:"2024-06-20"}},f={name:"Disallowed dates",render:o,argTypes:{customDisallowedDate:{control:"text"}},args:{customDisallowedDate:"2024-12-01, 2024-12-25, 2024-12-26",value:"2024-12-12"}},g={name:"Validation",render:e=>l`
    <div class="grid grid-cols-1 gap-m sm:grid-cols-3">
      <!-- Error -->
      <div class="flex flex-col gap-2">
        <p>Error date picker</p>
        ${o({...e,value:"2024-05-25",name:"bq-date-picker-error","validation-status":"error",noLabel:"true"})}
      </div>
      <!-- Success -->
      <div class="flex flex-col gap-2">
        <p>Success date picker</p>
        ${o({...e,value:"2024-06-25",name:"bq-date-picker-success","validation-status":"success",noLabel:"true"})}
      </div>
      <!-- Warning -->
      <div class="flex flex-col gap-2">
        <p>Warning date picker</p>
        ${o({...e,value:"2024-07-25",name:"bq-date-picker-warning","validation-status":"warning",noLabel:"true"})}
      </div>
    </div>
  `},h={name:'Label with "Optional"',render:o,args:{optionalLabel:!0,value:"2024-10-10"}},v={name:'Label with "Info tooltip"',render:o,args:{hasLabelTooltip:!0,value:"2024-09-11"},parameters:{layout:"centered"}},x={name:"With no Label",render:o,args:{noLabel:!0,value:"2024-10-13"}},y={render:()=>{const e=a=>{a.preventDefault();const n=a.target,q=new FormData(n),k=Object.fromEntries(q.entries()),i=document.getElementById("form-data");i&&(i.textContent=JSON.stringify(k,null,2))};return l(T||(T=ve([`
      <link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@11.10.0/styles/night-owl.min.css" />

      <div class="grid auto-cols-auto grid-cols-1 gap-y-l sm:grid-cols-2 sm:gap-x-l">
        <bq-card>
          <h4 class="m-be-m">Travel information</h4>
          <form class="flex flex-col gap-y-m" @submit=`,`>
            <bq-input name="fullName" value="Brad Bernie Beckett" autocomplete="name" required>
              <label class="flex flex-grow items-center" slot="label">Full Name</label>
            </bq-input>
            <div class="grid grid-cols-1 gap-y-m sm:grid-cols-2 sm:gap-x-m">
              <bq-input name="passportNumber" value="052763786" autocomplete="bday-year" required>
                <label class="flex flex-grow items-center" slot="label">Passport number</label>
              </bq-input>
              <bq-date-picker
                name="passportExpiration"
                value="2034-05-20"
                placeholder="Select a date"
                form-validation-message="Please, you must provide your passport expiration date"
                type="single"
                required
              >
                <label class="flex flex-grow items-center" slot="label"> Expiration date </label>
              </bq-date-picker>
            </div>
            <bq-date-picker
              name="tripDate"
              placeholder="Select a start and end date for your travel"
              form-validation-message="Please, tell us when you are planning to travel"
              value="2024-12-25/2025-01-10"
              type="range"
              months="2"
              required
            >
              <label class="flex flex-grow items-center" slot="label"> Travel dates </label>
            </bq-date-picker>
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
    `])),e)}};var L,S,E;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: Template
}`,...(E=(S=c.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var M,F,C;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: Template,
  args: {
    type: 'range',
    months: 2
  }
}`,...(C=(F=d.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var O,_,P;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: Template,
  args: {
    type: 'multi',
    months: 2
  }
}`,...(P=(_=p.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var N,W,B;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => html\`
    <div class="grid grid-cols-1 gap-m sm:grid-cols-3">
      <!-- Default date picker -->
      <div class="flex flex-col gap-2">
        <p>Default date picker</p>
        \${Template({
    ...args,
    value: '2024-05-25',
    name: 'bq-date-picker-default',
    noLabel: 'true'
  })}
      </div>
      <!-- Range date picker -->
      <div class="flex flex-col gap-2">
        <p>Range date picker</p>
        \${Template({
    ...args,
    value: '2024-12-20/2025-01-10',
    name: 'bq-date-picker-range',
    type: 'range',
    months: 2,
    noLabel: 'true'
  })}
      </div>
      <!-- Multi date picker -->
      <div class="flex flex-col gap-2">
        <p>Multi date picker</p>
        \${Template({
    ...args,
    value: '2024-05-08 2024-05-22 2024-06-04 2024-06-18 2024-05-16 2024-05-30 2024-06-12 2024-06-26',
    name: 'bq-date-picker-multi',
    type: 'multi',
    months: 2,
    noLabel: 'true'
  })}
      </div>
    </div>
  \`
}`,...(B=(W=m.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var I,V,A;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Min and Max allowed dates',
  render: Template,
  args: {
    min: '2024-06-05',
    max: '2024-06-15',
    value: '2024-06-10'
  }
}`,...(A=(V=u.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var R,U,H;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: Template,
  args: {
    disabled: true,
    value: '2024-06-20'
  }
}`,...(H=(U=b.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var z,X,J;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Disallowed dates',
  render: Template,
  argTypes: {
    customDisallowedDate: {
      control: 'text'
    }
  },
  args: {
    customDisallowedDate: '2024-12-01, 2024-12-25, 2024-12-26',
    value: '2024-12-12'
  }
}`,...(J=(X=f.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Y,K,G;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Validation',
  render: args => html\`
    <div class="grid grid-cols-1 gap-m sm:grid-cols-3">
      <!-- Error -->
      <div class="flex flex-col gap-2">
        <p>Error date picker</p>
        \${Template({
    ...args,
    value: '2024-05-25',
    name: 'bq-date-picker-error',
    'validation-status': 'error',
    noLabel: 'true'
  })}
      </div>
      <!-- Success -->
      <div class="flex flex-col gap-2">
        <p>Success date picker</p>
        \${Template({
    ...args,
    value: '2024-06-25',
    name: 'bq-date-picker-success',
    'validation-status': 'success',
    noLabel: 'true'
  })}
      </div>
      <!-- Warning -->
      <div class="flex flex-col gap-2">
        <p>Warning date picker</p>
        \${Template({
    ...args,
    value: '2024-07-25',
    name: 'bq-date-picker-warning',
    'validation-status': 'warning',
    noLabel: 'true'
  })}
      </div>
    </div>
  \`
}`,...(G=(K=g.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var Q,Z,ee;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Label with "Optional"',
  render: Template,
  args: {
    optionalLabel: true,
    value: '2024-10-10'
  }
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,re;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Label with "Info tooltip"',
  render: Template,
  args: {
    hasLabelTooltip: true,
    value: '2024-09-11'
  },
  parameters: {
    layout: 'centered'
  }
}`,...(re=(te=v.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var oe,le,se;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'With no Label',
  render: Template,
  args: {
    noLabel: true,
    value: '2024-10-13'
  }
}`,...(se=(le=x.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ne,ie,ce;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
          <h4 class="m-be-m">Travel information</h4>
          <form class="flex flex-col gap-y-m" @submit=\${handleFormSubmit}>
            <bq-input name="fullName" value="Brad Bernie Beckett" autocomplete="name" required>
              <label class="flex flex-grow items-center" slot="label">Full Name</label>
            </bq-input>
            <div class="grid grid-cols-1 gap-y-m sm:grid-cols-2 sm:gap-x-m">
              <bq-input name="passportNumber" value="052763786" autocomplete="bday-year" required>
                <label class="flex flex-grow items-center" slot="label">Passport number</label>
              </bq-input>
              <bq-date-picker
                name="passportExpiration"
                value="2034-05-20"
                placeholder="Select a date"
                form-validation-message="Please, you must provide your passport expiration date"
                type="single"
                required
              >
                <label class="flex flex-grow items-center" slot="label"> Expiration date </label>
              </bq-date-picker>
            </div>
            <bq-date-picker
              name="tripDate"
              placeholder="Select a start and end date for your travel"
              form-validation-message="Please, tell us when you are planning to travel"
              value="2024-12-25/2025-01-10"
              type="range"
              months="2"
              required
            >
              <label class="flex flex-grow items-center" slot="label"> Travel dates </label>
            </bq-date-picker>
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
}`,...(ce=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const Me=["Default","Range","Multi","InitialValue","MixMax","Disabled","DisallowedDates","ValidationStatus","Optional","Tooltip","NoLabel","WithForm"];export{c as Default,b as Disabled,f as DisallowedDates,m as InitialValue,u as MixMax,p as Multi,x as NoLabel,h as Optional,d as Range,v as Tooltip,g as ValidationStatus,y as WithForm,Me as __namedExportsOrder,Ee as default};
