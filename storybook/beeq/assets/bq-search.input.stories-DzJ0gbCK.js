import{x as c,E as q}from"./lit-html-CeYizTxc.js";import{o as r}from"./if-defined-C7zjO9dX.js";import l from"./bq-input.stories-CLBJi5-t.js";import{ae as t,ar as d,as as u,at as S}from"./index-Bbs29GIG.js";import{u as y}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./bq-input.types-qyJ6-CUg.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function p(e){const n={li:"li",p:"p",ul:"ul",...y(),...e.components};return t.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:t.jsxs("div",{className:"bq-doc__container",children:[t.jsx(d,{children:"Search"}),t.jsx(n.p,{children:`The Search component is a crucial element in user interfaces that facilitates quick and efficient information retrieval.
It enables users to enter keywords or phrases, filtering through vast amounts of data to locate specific content or relevant results.`}),t.jsx(u,{children:"Usage"}),t.jsxs(n.ul,{children:[`
`,t.jsx(n.li,{children:"Do use the Search component prominently and easily accessible, ensuring it aligns with the user's search intent."}),`
`,t.jsx(n.li,{children:"Do provide a clear and concise label for the Search input field, indicating the type of data users should enter."}),`
`,t.jsx(n.li,{children:"Do provide autocomplete functionality to assist users in narrowing down their search terms and enhancing accuracy."}),`
`,t.jsx(n.li,{children:"Do consider progressive disclosure, gradually revealing more search options or filters as the user refines their search criteria."}),`
`,t.jsx(n.li,{children:"Do utilize search prediction algorithms to suggest relevant search terms based on user input, saving time and effort."}),`
`,t.jsx(n.li,{children:"Do provide real-time search to provide immediate feedback as users type, demonstrating the search engine's efficiency."}),`
`,t.jsx(n.li,{children:"Do visually highlight matching search terms within the retrieved results, improving readability and highlighting relevant content."}),`
`,t.jsx(n.li,{children:"Do allow users to sort search results based on various criteria, such as relevance, date, or popularity, enhancing the user experience."}),`
`]}),t.jsx(u,{children:"👍 When to use"}),t.jsx(n.p,{children:"The Search component should be used when you need to search user input, such as:"}),t.jsxs(n.ul,{children:[`
`,t.jsx(n.li,{children:"Content Indexing: Implement the Search component in applications with vast amounts of content to facilitate quick and efficient navigation."}),`
`,t.jsx(n.li,{children:"Product Search: Provide a Search feature in eCommerce platforms to help users locate specific products or categories."}),`
`,t.jsx(n.li,{children:"Knowledge Base Retrieval: Incorporate Search into knowledge bases to enable users to quickly find relevant information and documentation."}),`
`,t.jsx(n.li,{children:"Support Ticket Resolution: Integrate Search in support systems to assist users in finding answers to frequently asked questions (FAQs) and resolving common issues."}),`
`,t.jsx(n.li,{children:"Customizable Search: Allow users to customize their search experience by defining filters, sorting options, and advanced search parameters."}),`
`,t.jsx(n.li,{children:"Accessibility Considerations: Ensure the Search component is accessible to users with disabilities, incorporating appropriate labels, alternative text, and screen reader compatibility."}),`
`]}),t.jsx(d,{children:"Properties"}),t.jsx(S,{of:"bq-input"})]})})}function w(e={}){const{wrapper:n}={...y(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(p,{...e})}):p(e)}const F={...l,title:"Components/Search",parameters:{docs:{page:w}},args:{...l.args,placeholder:"Search...",prefix:!0,type:"search"}},o=e=>c`
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
      iputmode=${e.inputmode}
      max=${r(e.max)}
      maxlength=${r(e.maxlength)}
      min=${r(e.min)}
      minlength=${r(e.minlength)}
      name=${r(e.name)}
      pattern=${r(e.pattern)}
      placeholder=${e.placeholder}
      ?readonly=${e.readonly}
      ?required=${e.required}
      step=${r(e.step)}
      type=${r(e.type)}
      validation-status=${e["validation-status"]}
      value=${r(e.value)}
      @bqBlur=${e.bqBlur}
      @bqChange=${e.bqChange}
      @bqClear=${e.bqClear}
      @bqFocus=${e.bqFocus}
      @bqInput=${e.bqInput}
    >
      ${e.prefix?c`<bq-icon name="magnifying-glass" slot="prefix"></bq-icon>`:q}
    </bq-input>
  `,i={render:o},a={render:o,args:{value:"Value to search"}},s={render:o,args:{disabled:!0}};var h,m,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template
}`,...(f=(m=i.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var b,x,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    value: 'Value to search'
  }
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var $,g,j;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: Template,
  args: {
    disabled: true
  }
}`,...(j=(g=s.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};const P=["Default","Value","Disabled"];export{i as Default,s as Disabled,a as Value,P as __namedExportsOrder,F as default};
