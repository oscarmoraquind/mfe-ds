import{x as E}from"./lit-html-CeYizTxc.js";import{ae as e,ar as d,as as m,at as w}from"./index-Bbs29GIG.js";import{u as A}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function u(s){const o={code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...A(),...s.components};return e.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:e.jsxs("div",{className:"bq-doc__container",children:[e.jsx(d,{children:"Text"}),e.jsxs(o.p,{children:["El componente Text (",e.jsx(o.code,{children:"bq-text"}),") se utiliza para mostrar texto estilizado con diferentes tamaños y colores, ayudando a mantener una tipografía consistente a lo largo de la interfaz de usuario."]}),e.jsx(m,{children:"Uso"}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Consistencia:"})," Utilice el componente de texto para asegurar el uso coherente de tamaños, colores y pesos de fuente."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Accesibilidad:"})," Asegúrese de que los colores utilizados tengan suficiente contraste."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Semántica:"})," Combine este componente con etiquetas HTML semánticas dentro del slot si es necesario (por ejemplo, ",e.jsx(o.code,{children:"<bq-text><strong>Título</strong></bq-text>"}),")."]}),`
`]}),e.jsx(m,{children:"👍 Cuándo usar"}),e.jsxs(o.p,{children:["Use el componente de texto ",e.jsx(o.code,{children:"bq-text"})," cuando necesite:"]}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Título, subtítulo o contenido:"})," Mostrar texto con tamaños y pesos predefinidos."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Adaptabilidad:"})," Ajustar rápidamente el estilo tipográfico sin repetir CSS en varios componentes."]}),`
`]}),e.jsx(d,{children:"Propiedades"}),e.jsx(w,{of:"bq-text"})]})})}function X(s={}){const{wrapper:o}={...A(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(u,{...s})}):u(s)}const $=["xs","s","m","l","xl","xxl","xxl2","xxl3","xxl4","xxl5"],R={title:"Components/Text",component:"bq-text",parameters:{docs:{page:X}},argTypes:{"background-color":{control:"text"},size:{control:"select",options:$},"text-color":{control:"text"},content:{control:"text",table:{disable:!0}}},args:{size:"small"}},t=s=>E`
  <bq-text background-color=${s["background-color"]} size=${s.size} text-color=${s["text-color"]}>
    <p>${s.content}</p>
  </bq-text>
`,r={render:t,args:{content:"¿Damos el siguiente paso?"}},n={render:t,args:{size:"medium",content:"¿Damos el siguiente paso?"}},a={render:t,args:{"background-color":"ui--success",size:"medium",content:"¿Damos el siguiente paso?"}},c={render:t,args:{content:"¿Damos el siguiente paso?"}},i={render:t,args:{content:"Conocerte nos permite ofrecerte servicios que se ajusten a tus necesidades. Para lograrlo, necesitamos que completes la información de tu perfil. Solo te tomará 1 minuto."}},l={render:t,args:{"background-color":"ui--success",content:"¿Damos el siguiente paso?"}};var p,x,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    content: '¿Damos el siguiente paso?'
  }
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var j,h,b;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: 'medium',
    content: '¿Damos el siguiente paso?'
  }
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,T,D;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  args: {
    'background-color': 'ui--success',
    size: 'medium',
    content: '¿Damos el siguiente paso?'
  }
}`,...(D=(T=a.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var S,q,z;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Template,
  args: {
    content: '¿Damos el siguiente paso?'
  }
}`,...(z=(q=c.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var C,k,_;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: Template,
  args: {
    content: 'Conocerte nos permite ofrecerte servicios que se ajusten a tus necesidades. Para lograrlo, necesitamos que completes la información de tu perfil. Solo te tomará 1 minuto.'
  }
}`,...(_=(k=i.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var M,y,v;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: Template,
  args: {
    'background-color': 'ui--success',
    content: '¿Damos el siguiente paso?'
  }
}`,...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const Z=["Default","SizeMedium","BackgroundColor","SingleDigit","TwoDigits","WithText"];export{a as BackgroundColor,r as Default,c as SingleDigit,n as SizeMedium,i as TwoDigits,l as WithText,Z as __namedExportsOrder,R as default};
