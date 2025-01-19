import{x as p}from"./lit-html-CeYizTxc.js";import{ae as n,ar as m,as as $,at as G}from"./index-Bbs29GIG.js";import{u as X}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function q(e){const r={li:"li",p:"p",strong:"strong",ul:"ul",...X(),...e.components};return n.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:n.jsxs("div",{className:"bq-doc__container",children:[n.jsx(m,{children:"Button"}),n.jsx(r.p,{children:`Los botones son un elemento crucial del diseño de interfaces de usuario.
Permiten que los usuarios interactúen con el sistema y realicen acciones como enviar un formulario, navegar a una nueva página o confirmar una selección.`}),n.jsx($,{children:"Uso"}),n.jsx(r.p,{children:"Al utilizar botones en el diseño de tu interfaz de usuario, es importante seguir algunas buenas prácticas para asegurarse de que sean efectivos y fáciles de usar. Aquí tienes algunas pautas a tener en cuenta:"}),n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"Usa los botones con moderación para evitar sobrecargar la interfaz."}),`
`,n.jsx(r.li,{children:"Utiliza colores contrastantes para el botón y el texto para que se destaquen."}),`
`,n.jsx(r.li,{children:"Usa tipos de botones apropiados, como primario, secundario y terciario, para indicar la importancia de la acción."}),`
`,n.jsx(r.li,{children:"Usa iconos además del texto para transmitir la acción del botón."}),`
`]}),n.jsx($,{children:" 👍 Cuándo usar"}),n.jsxs(r.p,{children:[`Los botones deben usarse para acciones que son importantes para que el usuario las realice, como enviar un formulario, navegar a una nueva página o confirmar una selección.
`,n.jsx(r.strong,{children:"No deben usarse para acciones que se pueden realizar por otros medios, como hacer clic en un enlace."})]}),n.jsx(m,{children:"Propiedades"}),n.jsx(G,{of:"bq-button"})]})})}function V(e={}){const{wrapper:r}={...X(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(q,{...e})}):q(e)}const Y=["small","medium","large"],Z=["button","submit","reset"],H=["primary","secondary","link","text"],J=["standard","ghost","danger"],K=["none","xs2","xs","s","m","l","full"],ce={title:"Components/Button",component:"bq-button",parameters:{docs:{page:V}},argTypes:{appearance:{control:"select",options:[...H]},block:{control:"boolean"},border:{control:"select",options:[...K]},disabled:{control:"boolean"},href:{control:"text"},"justify-content":{control:"select",options:["left","center","right"]},loading:{control:"boolean"},size:{control:"select",options:[...Y]},target:{control:"select",options:["_blank","_parent","_self","_top"]},type:{control:"select",options:[...Z]},variant:{control:"select",options:[...J]},buttonText:{control:"text",table:{disable:!0}},bqBlur:{action:"bqBlur"},bqFocus:{action:"bqFocus"},bqClick:{action:"bqClick"}},args:{appearance:"primary",border:"m",block:!1,disabled:!1,href:void 0,"justify-content":"center",loading:!1,size:"medium",target:void 0,type:"button",variant:"standard"}},t=e=>p`
  <bq-button
    appearance=${e.appearance}
    ?block=${e.block}
    border=${e.border}
    ?disabled=${e.disabled}
    href=${e.href}
    justify-content=${e["justify-content"]}
    ?loading=${e.loading}
    size=${e.size}
    target=${e.target}
    type=${e.type}
    variant=${e.variant}
    @bqBlur=${e.bqBlur}
    @bqClick=${e.bqClick}
    @bqFocus=${e.bqFocus}
  >
    ${e.buttonText}
  </bq-button>
`,a={render:t,args:{buttonText:"Primary button"}},o={render:t,args:{appearance:"secondary",buttonText:"Secondary button"}},s={render:t,args:{appearance:"link",href:"https://www.example.com",target:"_blank",buttonText:"Link button"}},c={render:t,args:{appearance:"text",buttonText:"Text button"}},i={render:t,args:{appearance:"primary",loading:!0,buttonText:"Loading button"}},l={render:t,args:{block:!0,buttonText:"Block button"}},b={render:e=>p`
    <bq-button
      appearance=${e.appearance}
      ?block=${e.block}
      border=${e.border}
      ?disabled=${e.disabled}
      href=${e.href}
      justify-content=${e["justify-content"]}
      ?loading=${e.loading}
      size=${e.size}
      target=${e.target}
      type=${e.type}
      variant=${e.variant}
      @bqBlur=${e.bqBlur}
      @bqClick=${e.bqClick}
      @bqFocus=${e.bqFocus}
    >
      <bq-icon name="arrow-circle-left" slot="prefix"></bq-icon>
      Go back
    </bq-button>
  `},u={render:e=>p`
    <bq-button
      appearance=${e.appearance}
      border=${e.border}
      ?block=${e.block}
      ?disabled=${e.disabled}
      href=${e.href}
      justify-content=${e["justify-content"]}
      ?loading=${e.loading}
      size=${e.size}
      target=${e.target}
      type=${e.type}
      variant=${e.variant}
      @bqBlur=${e.bqBlur}
      @bqClick=${e.bqClick}
      @bqFocus=${e.bqFocus}
    >
      Next step
      <bq-icon name="arrow-circle-right" slot="suffix"></bq-icon>
    </bq-button>
  `},d={render:e=>p`
    <bq-button
      appearance=${e.appearance}
      border=${e.border}
      ?block=${e.block}
      ?disabled=${e.disabled}
      href=${e.href}
      justify-content=${e["justify-content"]}
      ?loading=${e.loading}
      size=${e.size}
      target=${e.target}
      type=${e.type}
      variant=${e.variant}
      @bqBlur=${e.bqBlur}
      @bqClick=${e.bqClick}
      @bqFocus=${e.bqFocus}
    >
      <bq-icon name="bell-ringing"></bq-icon>
    </bq-button>
  `};var g,f,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    buttonText: 'Primary button'
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,k,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  args: {
    appearance: 'secondary',
    buttonText: 'Secondary button'
  }
}`,...(h=(k=o.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var T,j,B;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: Template,
  args: {
    appearance: 'link',
    href: 'https://www.example.com',
    target: '_blank',
    buttonText: 'Link button'
  }
}`,...(B=(j=s.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var v,C,z;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: Template,
  args: {
    appearance: 'text',
    buttonText: 'Text button'
  }
}`,...(z=(C=c.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var _,F,S;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  args: {
    appearance: 'primary',
    loading: true,
    buttonText: 'Loading button'
  }
}`,...(S=(F=i.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var L,w,N;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: Template,
  args: {
    block: true,
    buttonText: 'Block button'
  }
}`,...(N=(w=l.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var U,A,I;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => html\`
    <bq-button
      appearance=\${args.appearance}
      ?block=\${args.block}
      border=\${args.border}
      ?disabled=\${args.disabled}
      href=\${args.href}
      justify-content=\${args['justify-content']}
      ?loading=\${args.loading}
      size=\${args.size}
      target=\${args.target}
      type=\${args.type}
      variant=\${args.variant}
      @bqBlur=\${args.bqBlur}
      @bqClick=\${args.bqClick}
      @bqFocus=\${args.bqFocus}
    >
      <bq-icon name="arrow-circle-left" slot="prefix"></bq-icon>
      Go back
    </bq-button>
  \`
}`,...(I=(A=b.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var O,P,R;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => html\`
    <bq-button
      appearance=\${args.appearance}
      border=\${args.border}
      ?block=\${args.block}
      ?disabled=\${args.disabled}
      href=\${args.href}
      justify-content=\${args['justify-content']}
      ?loading=\${args.loading}
      size=\${args.size}
      target=\${args.target}
      type=\${args.type}
      variant=\${args.variant}
      @bqBlur=\${args.bqBlur}
      @bqClick=\${args.bqClick}
      @bqFocus=\${args.bqFocus}
    >
      Next step
      <bq-icon name="arrow-circle-right" slot="suffix"></bq-icon>
    </bq-button>
  \`
}`,...(R=(P=u.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var E,D,M;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => html\`
    <bq-button
      appearance=\${args.appearance}
      border=\${args.border}
      ?block=\${args.block}
      ?disabled=\${args.disabled}
      href=\${args.href}
      justify-content=\${args['justify-content']}
      ?loading=\${args.loading}
      size=\${args.size}
      target=\${args.target}
      type=\${args.type}
      variant=\${args.variant}
      @bqBlur=\${args.bqBlur}
      @bqClick=\${args.bqClick}
      @bqFocus=\${args.bqFocus}
    >
      <bq-icon name="bell-ringing"></bq-icon>
    </bq-button>
  \`
}`,...(M=(D=d.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const ie=["Primary","Secondary","Link","Text","Loading","Block","IconLeft","IconRight","OnlyIcon"];export{l as Block,b as IconLeft,u as IconRight,s as Link,i as Loading,d as OnlyIcon,a as Primary,o as Secondary,c as Text,ie as __namedExportsOrder,ce as default};
