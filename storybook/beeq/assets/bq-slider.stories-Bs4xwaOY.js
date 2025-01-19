import{x as g}from"./lit-html-CeYizTxc.js";import{o as r}from"./if-defined-C7zjO9dX.js";import{ae as a,ar as f,as as y,at as ee}from"./index-Bbs29GIG.js";import{u as K}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function x(e){const t={li:"li",p:"p",ul:"ul",...K(),...e.components};return a.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:a.jsxs("div",{className:"bq-doc__container",children:[a.jsx(f,{children:"Slider"}),a.jsx(t.p,{children:`The Slider component is a UI element that allows users to select a value from a range of values by sliding a thumb along a track.
It is a widely used component in user interfaces and is commonly used to adjust settings, input numerical values, or filter content.`}),a.jsx(y,{children:"Usage"}),a.jsx(t.p,{children:"When designing a user interface, it is important to use Slider components in a way that is intuitive and enhances the user experience. Here are some best practices for using Slider components:"}),a.jsxs(t.ul,{children:[`
`,a.jsx(t.li,{children:"Use a Slider when there is a need to adjust values within a specific range. Sliders are a great choice when you want users to be able to adjust something, but within a predetermined range."}),`
`,a.jsx(t.li,{children:"Use a Slider when the range of values is continuous. Sliders are best suited for continuous data ranges, rather than discrete values."}),`
`,a.jsx(t.li,{children:"Use a Slider when the range of values is small and easy to comprehend. Sliders are most effective when the range of values is small enough to be easily understood by the user."}),`
`,a.jsx(t.li,{children:"Use a Slider when there is a need to provide visual feedback to the user. Sliders provide visual feedback that can be very helpful to users, especially when used in combination with other UI elements such as charts or graphs."}),`
`]}),a.jsx(y,{children:"👍 When to use"}),a.jsx(t.p,{children:"Sliders are a versatile UI element that can be used in a variety of situations. Here are some situations where using a Slider is a good choice:"}),a.jsxs(t.ul,{children:[`
`,a.jsx(t.li,{children:"When there is a need to adjust settings or input numerical values. Sliders are a great way to allow users to adjust settings such as volume, brightness, or font size."}),`
`,a.jsx(t.li,{children:"When the range of values is continuous and easy to comprehend. Sliders are best suited for continuous data ranges, rather than discrete values."}),`
`,a.jsx(t.li,{children:"When there is a need to provide visual feedback to the user. Sliders provide visual feedback that can be very helpful to users, especially when used in combination with other UI elements such as charts or graphs."}),`
`]}),a.jsx(f,{children:"Properties"}),a.jsx(ee,{of:"bq-slider"})]})})}function ae(e={}){const{wrapper:t}={...K(),...e.components};return t?a.jsx(t,{...e,children:a.jsx(x,{...e})}):x(e)}var j=Object.freeze,te=Object.defineProperty,re=(e,t)=>j(te(e,"raw",{value:j(e.slice())})),S;const he={title:"Components/Slider",component:"bq-slider",parameters:{docs:{page:ae}},argTypes:{"debounce-time":{control:"number"},disabled:{control:"boolean"},"enable-value-indicator":{control:"boolean"},"enable-tooltip":{control:"boolean"},"tooltip-always-visible":{control:"boolean"},gap:{control:"number"},max:{control:"number"},min:{control:"number"},name:{control:"text"},step:{control:"number"},type:{control:"inline-radio",options:["single","range"]},value:{control:"object"},bqBlur:{action:"bqBlur"},bqChange:{action:"bqChange"},bqFocus:{action:"bqFocus"}},args:{"debounce-time":0,disabled:!1,"enable-value-indicator":!1,"enable-tooltip":!1,"tooltip-always-visible":!1,gap:0,max:100,min:0,name:"bq-slider",step:1,type:"single",value:void 0}},n=e=>g` <div class="is-96">${h(e)}</div> `,h=e=>g`
  <bq-slider
    debounce-time=${r(e["debounce-time"])}
    ?disabled=${e.disabled}
    ?enable-value-indicator=${e["enable-value-indicator"]}
    ?enable-tooltip=${e["enable-tooltip"]}
    ?tooltip-always-visible=${e["tooltip-always-visible"]}
    gap=${r(e.gap)}
    max=${r(e.max)}
    min=${r(e.min)}
    name=${r(e.name)}
    step=${r(e.step)}
    type=${r(e.type)}
    value=${r(JSON.stringify(e.value))}
    @bqBlur=${e.bqBlur}
    @bqChange=${e.bqChange}
    @bqFocus=${e.bqFocus}
  >
    ${e.text}
  </bq-slider>
`,s={render:n,parameters:{layout:"centered"},args:{value:30}},o={render:n,parameters:{layout:"centered"},args:{value:[30,70],type:"range"}},l={render:n,parameters:{layout:"centered"},args:{disabled:!0,value:[30,70],type:"range"}},i={render:n,parameters:{layout:"centered"},args:{"enable-value-indicator":!0,value:[30,70],type:"range"}},c={name:"Min, Max, Step",render:n,parameters:{layout:"centered"},args:{"enable-value-indicator":!0,max:10,min:0,step:1.25,value:3}},m={render:n,parameters:{layout:"centered"},args:{"enable-value-indicator":!0,gap:10,max:100,min:0,step:5,type:"range",value:[30,70]}},d={render:n,parameters:{layout:"centered"},args:{"enable-value-indicator":!0,max:1,min:0,type:"range",step:.05,value:[.3,.7]}},u={render:n,parameters:{layout:"centered"},args:{"enable-tooltip":!0,gap:10,max:100,min:0,step:1,type:"range",value:[30,70]}},p={render:e=>{const t=b=>{b.preventDefault();const Q=b.target,Y=new FormData(Q),Z=Object.fromEntries(Y.entries()),v=document.getElementById("form-data");v&&(v.textContent=JSON.stringify(Z,null,2))};return g(S||(S=re([`
      <link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@11.10.0/styles/night-owl.min.css" />
      <div class="grid auto-cols-auto grid-cols-1 gap-y-l sm:grid-cols-2 sm:gap-x-l">
        <bq-card>
          <h4 class="m-be-m">Taxi information</h4>
          <form class="flex flex-col gap-y-m" @submit=`,`>
            <label class="flex items-center gap-x-s"> Number of seats </label>
            `,`
            <!-- Range  -->
            <label class="flex items-center gap-x-s m-bs-m"> Price range (€) </label>
            `,`
            <div class="flex justify-end gap-x-s m-bs-l">
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
    `])),t,h({...e,name:"numSeats",max:8,value:3}),h({...e,name:"priceRange",value:[30,70],type:"range"}))},args:{"enable-value-indicator":!0,max:100,min:0,step:1}};var w,q,D;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    layout: 'centered'
  },
  args: {
    value: 30
  }
}`,...(D=(q=s.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var T,E,$;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    layout: 'centered'
  },
  args: {
    value: [30, 70],
    type: 'range'
  }
}`,...($=(E=o.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var F,k,M;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    layout: 'centered'
  },
  args: {
    disabled: true,
    value: [30, 70],
    type: 'range'
  }
}`,...(M=(k=l.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var _,C,O;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    layout: 'centered'
  },
  args: {
    'enable-value-indicator': true,
    value: [30, 70],
    type: 'range'
  }
}`,...(O=(C=i.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var I,U,V;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Min, Max, Step',
  render: Template,
  parameters: {
    layout: 'centered'
  },
  args: {
    'enable-value-indicator': true,
    max: 10,
    min: 0,
    step: 1.25,
    value: 3
  }
}`,...(V=(U=c.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var W,H,N;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    layout: 'centered'
  },
  args: {
    'enable-value-indicator': true,
    gap: 10,
    max: 100,
    min: 0,
    step: 5,
    type: 'range',
    value: [30, 70]
  }
}`,...(N=(H=m.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var R,A,B;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    layout: 'centered'
  },
  args: {
    'enable-value-indicator': true,
    max: 1,
    min: 0,
    type: 'range',
    step: 0.05,
    value: [0.3, 0.7]
  }
}`,...(B=(A=d.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var L,P,z;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    layout: 'centered'
  },
  args: {
    'enable-tooltip': true,
    gap: 10,
    max: 100,
    min: 0,
    step: 1,
    type: 'range',
    value: [30, 70]
  }
}`,...(z=(P=u.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var J,X,G;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
          <h4 class="m-be-m">Taxi information</h4>
          <form class="flex flex-col gap-y-m" @submit=\${handleFormSubmit}>
            <label class="flex items-center gap-x-s"> Number of seats </label>
            \${SliderTemplate({
      ...args,
      name: 'numSeats',
      max: 8,
      value: 3
    })}
            <!-- Range  -->
            <label class="flex items-center gap-x-s m-bs-m"> Price range (€) </label>
            \${SliderTemplate({
      ...args,
      name: 'priceRange',
      value: [30, 70],
      type: 'range'
    })}
            <div class="flex justify-end gap-x-s m-bs-l">
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
    'enable-value-indicator': true,
    max: 100,
    min: 0,
    step: 1
  }
}`,...(G=(X=p.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};const ge=["Default","Range","Disabled","ValueIndicator","MinMaxStep","Gap","DecimalValues","WithTooltip","WithForm"];export{d as DecimalValues,s as Default,l as Disabled,m as Gap,c as MinMaxStep,o as Range,i as ValueIndicator,p as WithForm,u as WithTooltip,ge as __namedExportsOrder,he as default};
