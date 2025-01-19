import{x as y}from"./lit-html-CeYizTxc.js";import{o as n}from"./if-defined-C7zjO9dX.js";import{ae as e,ar as c,as as s,at as u}from"./index-Bbs29GIG.js";import{u as k}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function d(a){const r={li:"li",p:"p",ul:"ul",...k(),...a.components};return e.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:e.jsxs("div",{className:"bq-doc__container",children:[e.jsx(c,{children:"Breadcrumb"}),e.jsx(r.p,{children:`El componente Breadcrumb ayuda a los usuarios a entender su ubicación actual dentro de la estructura jerárquica de un sitio web o aplicación.
Es una lista de enlaces o botones que proporciona contexto y ayuda a los usuarios a entender dónde se encuentran dentro de la arquitectura de la información general, ofreciendo una sensación de orientación y control.
Cada elemento en el componente Breadcrumb representa un nivel en la jerarquía de la aplicación.`}),e.jsx(s,{children:"Uso"}),e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Proporcionar contexto: Los breadcrumbs brindan a los usuarios una visión general de la jerarquía de la página en la que se encuentran, proporcionándoles un sentido de contexto y ayudándoles a entender dónde están en relación con el resto del sitio."}),`
`,e.jsx(r.li,{children:"Mejorar la navegación: Los breadcrumbs facilitan que los usuarios suban y bajen en la jerarquía de la página, regresando rápidamente a las páginas visitadas anteriormente o explorando nuevas secciones del sitio."}),`
`,e.jsx(r.li,{children:"Mejorar la descubribilidad: Al resaltar el camino hacia la página actual, los breadcrumbs también pueden ayudar a los usuarios a descubrir nuevos contenidos y características dentro del sitio."}),`
`]}),e.jsx(s,{children:"👍 Cuándo usar"}),e.jsx(r.p,{children:"Hacer:"}),e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Usar etiquetas claras y concisas para cada breadcrumb, describiendo el contenido de la página o sección que representa."}),`
`,e.jsx(r.li,{children:"Asegurarse de que las etiquetas de los breadcrumbs reflejen con precisión la jerarquía de la página, con las secciones más generales al principio y las más específicas al final."}),`
`,e.jsx(r.li,{children:"Mantener los breadcrumbs visibles y accesibles, ya sea colocándolos en la parte superior de la página o fijándolos en la parte superior de la pantalla mientras el usuario se desplaza."}),`
`,e.jsx(r.li,{children:"Hacer que los breadcrumbs sean clicables, permitiendo que los usuarios naveguen fácilmente de regreso a las páginas visitadas anteriormente."}),`
`]}),e.jsx(r.p,{children:"No hacer:"}),e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Usar los breadcrumbs en exceso, o utilizarlos en situaciones donde no proporcionen un contexto significativo o beneficio para el usuario."}),`
`,e.jsx(r.li,{children:"Usar los breadcrumbs como sustituto de una navegación adecuada, ya que deben complementar, no reemplazar, otros elementos de navegación como menús y enlaces."}),`
`,e.jsx(r.li,{children:"Hacer que los breadcrumbs sean demasiado pequeños o difíciles de leer, ya que esto puede dificultar que los usuarios comprendan el contexto y naveguen de manera efectiva por el sitio."}),`
`,e.jsx(r.li,{children:"Usar los breadcrumbs como una forma de mostrar demasiada información, ya que esto puede hacer que la navegación sea abrumadora y confusa para los usuarios."}),`
`]}),e.jsx(c,{children:"Propiedades"}),e.jsx(s,{children:"bq-readcrumb"}),e.jsx(u,{of:"bq-breadcrumb"}),e.jsx(s,{children:"bq-readcrumb-item"}),e.jsx(u,{of:"bq-breadcrumb-item"})]})})}function v(a={}){const{wrapper:r}={...k(),...a.components};return r?e.jsx(r,{...a,children:e.jsx(d,{...a})}):d(a)}const E={title:"Components/Breadcrumb",component:"bq-breadcrumb",parameters:{docs:{page:v}},argTypes:{"aria-label":{control:"text"},bqBlur:{action:"bqBlur",table:{disable:!0}},bqClick:{action:"bqClick",table:{disable:!0}},bqFocus:{action:"bqFocus",table:{disable:!0}},text:{control:"text",table:{disable:!0}},htmlNode:{control:"object",table:{disable:!0}},useLinks:{control:"boolean",table:{disable:!0}}},args:{"aria-label":"Breadcrumbs",text:"text",htmlNode:"",useLinks:!1}},l=a=>y`
  <bq-breadcrumb label=${a["aria-label"]} @bqBlur=${a.bqBlur} @bqClick=${a.bqClick} @bqFocus=${a.bqFocus}>
    ${a.htmlNode}
    <bq-breadcrumb-item
      href=${n(a.useLinks?"https://example.com/":null)}
      target=${n(a.useLinks?"_blank":null)}
      aria-label="Home page"
    >
      <bq-icon name="house-line" size="16" aria-hidden="true"></bq-icon>
      Home
    </bq-breadcrumb-item>
    <bq-breadcrumb-item
      href=${n(a.useLinks?"https://example.com/":null)}
      target=${n(a.useLinks?"_blank":null)}
      aria-label="Men's Clothing"
    >
      Men's Clothing
    </bq-breadcrumb-item>
    <bq-breadcrumb-item
      href=${n(a.useLinks?"https://example.com/":null)}
      target=${n(a.useLinks?"_blank":null)}
      aria-label="Shirts"
    >
      <bq-icon name="shirt-folded" size="16" aria-hidden="true"></bq-icon>
      Shirts
    </bq-breadcrumb-item>
    <bq-breadcrumb-item
      href=${n(a.useLinks?"https://example.com/":null)}
      target=${n(a.useLinks?"_blank":null)}
      aria-label="Casual shirts"
    >
      Casual shirts
    </bq-breadcrumb-item>
  </bq-breadcrumb>
`,o={render:l,args:{}},i={render:l,args:{htmlNode:Object.assign(document.createElement("bq-icon"),{name:"caret-right",size:"12",slot:"separator"})}},t={render:l,args:{useLinks:!0}};var m,b,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(p=(b=o.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var q,h,x;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: Template,
  args: {
    htmlNode: Object.assign(document.createElement('bq-icon'), {
      name: 'caret-right',
      size: '12',
      slot: 'separator'
    })
  }
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,g,f;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: Template,
  args: {
    useLinks: true
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const D=["Default","CaretSeparator","Links"];export{i as CaretSeparator,o as Default,t as Links,D as __namedExportsOrder,E as default};
