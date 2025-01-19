import{x as t,E as J}from"./lit-html-CeYizTxc.js";import{o as a}from"./if-defined-C7zjO9dX.js";import{ae as r,ar as f,as as $,at as K}from"./index-Bbs29GIG.js";import{u as Z}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function b(e){const o={li:"li",p:"p",ul:"ul",...Z(),...e.components};return r.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:r.jsxs("div",{className:"bq-doc__container",children:[r.jsx(f,{children:"Tag"}),r.jsx(o.p,{children:`The Tag Component is a UI element used to label and categorize content within an application.
Tags are commonly used to label items with keywords or categories, making it easier to find and organize content.`}),r.jsx($,{children:"Usage"}),r.jsxs(o.ul,{children:[`
`,r.jsx(o.li,{children:"Use tags for labeling and categorizing items or content, such as tagging articles with keywords or categorizing items in a shopping cart."}),`
`,r.jsx(o.li,{children:"Use tags for representing metadata about an item or content, such as the author, date, or source of an article."}),`
`,r.jsx(o.li,{children:"Use tags for filtering and organizing content based on tags, such as allowing users to filter articles based on keywords or categories."}),`
`,r.jsx(o.li,{children:"Use clear and concise labels for tags, avoiding complex sentences and technical jargon."}),`
`]}),r.jsx($,{children:"👍 When to use"}),r.jsxs(o.ul,{children:[`
`,r.jsx(o.li,{children:"When using tags, ensure that you position them in a location that is easily visible and accessible, without obstructing important content or interactions."}),`
`,r.jsx(o.li,{children:"When using tags, ensure the use of visually distinct styles and colors to differentiate between different types of tags, allowing users to easily recognize the meaning of each tag."}),`
`,r.jsx(o.li,{children:"Ensure that tags are easy to interact with, allowing users to click on a tag to view related content or to remove a tag if desired."}),`
`]}),r.jsx(f,{children:"Properties"}),r.jsx(K,{of:"bq-tag"})]})})}function Q(e={}){const{wrapper:o}={...Z(),...e.components};return o?r.jsx(o,{...e,children:r.jsx(b,{...e})}):b(e)}const Y=["xsmall","small","medium"],ee=["error","gray","info","success","warning"],ne=["outline","filled"],re=["none","xs2","xs","s","m","l","full"],ge={title:"Components/Tag",component:"bq-tag",parameters:{docs:{page:Q}},argTypes:{border:{control:"select",options:[...re]},clickable:{control:"boolean"},color:{control:"select",options:[...ee]},disabled:{control:"boolean"},hidden:{control:"boolean"},removable:{control:"boolean"},selected:{control:"boolean"},size:{control:"select",options:[...Y]},variant:{control:"select",options:[...ne]},bqClose:{action:"bqClose"},bqOpen:{action:"bqOpen"},bqClick:{action:"bqClick"},bqBlur:{action:"bqBlur"},bqFocus:{action:"bqFocus"},text:{control:"text",table:{disable:!0}},icon:{control:"text",table:{disable:!0}}},args:{border:void 0,clickable:!1,color:void 0,disabled:!1,hidden:!1,removable:!1,selected:!1,size:"medium",variant:"filled"}},n=e=>t`
  <bq-tag
    border=${a(e.border)}
    ?clickable=${e.clickable}
    color=${a(e.color)}
    ?disabled=${e.disabled}
    ?hidden=${e.hidden}
    ?removable=${e.removable}
    ?selected=${e.selected}
    size=${a(e.size)}
    variant=${a(e.variant)}
    @bqOpen=${e.bqOpen}
    @bqClose=${e.bqClose}
    @bqClick=${e.bqClick}
    @bqFocus=${e.bqFocus}
    @bqBlur=${e.bqBlur}
  >
    ${e.icon?t`<bq-icon name=${e.icon} slot="prefix"></bq-icon>`:J} ${e.text}
  </bq-tag>
`,s={render:n,args:{text:"Tag"}},l={render:e=>t`
    <div class="flex gap-s">
      <!-- Extra small -->
      ${n({...e,size:"xsmall",text:"Extra small"})}
      <!-- Small -->
      ${n({...e,size:"small",text:"Small"})}
      <!-- Medium -->
      ${n({...e,size:"medium",text:"Medium"})}
    </div>
  `},c={render:e=>t`
    <div class="flex gap-s">
      <!-- Default -->
      ${n({...e})}
      <!-- Active/Selected -->
      ${n({...e,selected:!0})}
    </div>
  `,args:{text:"Tag",clickable:!0}},i={name:"Color - filled",render:e=>t`
    <div class="flex gap-s">
      <!-- Success -->
      ${n({...e,color:"success",text:"Success"})}
      <!-- Info -->
      ${n({...e,color:"info",text:"Info"})}
      <!-- Error -->
      ${n({...e,color:"error",text:"Error"})}
      <!-- Warning -->
      ${n({...e,color:"warning",text:"Warning"})}
      <!-- Gray -->
      ${n({...e,color:"gray",text:"Gray"})}
    </div>
  `},m={name:"Color - outline",render:e=>t`
    <div class="flex gap-s">
      <!-- Success -->
      ${n({...e,color:"success",text:"Success"})}
      <!-- Info -->
      ${n({...e,color:"info",text:"Info"})}
      <!-- Error -->
      ${n({...e,color:"error",text:"Error"})}
      <!-- Warning -->
      ${n({...e,color:"warning",text:"Warning"})}
      <!-- Gray -->
      ${n({...e,color:"gray",text:"Gray"})}
    </div>
  `,args:{variant:"outline"}},d={name:"Color - custom",render:e=>t`
    <div class="flex gap-s">
      <!-- Hex custom color -->
      ${n({...e,color:"#FF5733",text:"HEX",icon:"yin-yang"})}
      <!-- Rgba custom color -->
      ${n({...e,color:"rgba(255, 87, 51, 0.7)",text:"RGBA",icon:"rss"})}
      <!-- Theme custom color palette -->
      ${n({...e,color:"sky-600",text:"Theme Palette",icon:"palette"})}
    </div>
  `,args:{variant:"outline"}},u={name:"Removable - filled",render:e=>t`
    <div class="flex gap-s">
      <!-- Default -->
      ${n({...e,text:"Default"})}
      <!-- Success -->
      ${n({...e,color:"success",text:"Success"})}
      <!-- Info -->
      ${n({...e,color:"info",text:"Info"})}
      <!-- Error -->
      ${n({...e,color:"error",text:"Error"})}
      <!-- Warning -->
      ${n({...e,color:"warning",text:"Warning"})}
      <!-- Gray -->
      ${n({...e,color:"gray",text:"Gray"})}
    </div>
  `,args:{removable:!0}},g={name:"Removable - outline",render:e=>t`
    <div class="flex gap-s">
      <!-- Default -->
      ${n({...e,text:"Default"})}
      <!-- Success -->
      ${n({...e,color:"success",text:"Success"})}
      <!-- Info -->
      ${n({...e,color:"info",text:"Info"})}
      <!-- Error -->
      ${n({...e,color:"error",text:"Error"})}
      <!-- Warning -->
      ${n({...e,color:"warning",text:"Warning"})}
      <!-- Gray -->
      ${n({...e,color:"gray",text:"Gray"})}
    </div>
  `,args:{removable:!0,variant:"outline"}},p={name:"Prefix - filled",render:e=>t`
    <div class="flex gap-s">
      <!-- Default -->
      ${n({...e,text:"Default",icon:"alarm"})}
      <!-- Success -->
      ${n({...e,color:"success",text:"Success",icon:"check-circle"})}
      <!-- Info -->
      ${n({...e,color:"info",text:"Info",icon:"info"})}
      <!-- Error -->
      ${n({...e,color:"error",text:"Error",icon:"warning-diamond"})}
      <!-- Warning -->
      ${n({...e,color:"warning",text:"Warning",icon:"warning"})}
      <!-- Gray -->
      ${n({...e,color:"gray",text:"Gray",icon:"video-camera-slash"})}
    </div>
  `,args:{variant:"filled"}},x={name:"Prefix - outline",render:e=>t`
    <div class="flex gap-s">
      <!-- Default -->
      ${n({...e,text:"Default",icon:"alarm"})}
      <!-- Success -->
      ${n({...e,color:"success",text:"Success",icon:"check-circle"})}
      <!-- Info -->
      ${n({...e,color:"info",text:"Info",icon:"info"})}
      <!-- Error -->
      ${n({...e,color:"error",text:"Error",icon:"warning-diamond"})}
      <!-- Warning -->
      ${n({...e,color:"warning",text:"Warning",icon:"warning"})}
      <!-- Gray -->
      ${n({...e,color:"gray",text:"Gray",icon:"video-camera-slash"})}
    </div>
  `,args:{variant:"outline"}};var v,h,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: Template,
  args: {
    text: 'Tag'
  }
}`,...(T=(h=s.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var y,S,w;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    <div class="flex gap-s">
      <!-- Extra small -->
      \${Template({
    ...args,
    size: 'xsmall',
    text: 'Extra small'
  })}
      <!-- Small -->
      \${Template({
    ...args,
    size: 'small',
    text: 'Small'
  })}
      <!-- Medium -->
      \${Template({
    ...args,
    size: 'medium',
    text: 'Medium'
  })}
    </div>
  \`
}`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var E,I,W;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    <div class="flex gap-s">
      <!-- Default -->
      \${Template({
    ...args
  })}
      <!-- Active/Selected -->
      \${Template({
    ...args,
    selected: true
  })}
    </div>
  \`,
  args: {
    text: 'Tag',
    clickable: true
  }
}`,...(W=(I=c.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var C,G,q;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Color - filled',
  render: (args: Args) => html\`
    <div class="flex gap-s">
      <!-- Success -->
      \${Template({
    ...args,
    color: 'success',
    text: 'Success'
  })}
      <!-- Info -->
      \${Template({
    ...args,
    color: 'info',
    text: 'Info'
  })}
      <!-- Error -->
      \${Template({
    ...args,
    color: 'error',
    text: 'Error'
  })}
      <!-- Warning -->
      \${Template({
    ...args,
    color: 'warning',
    text: 'Warning'
  })}
      <!-- Gray -->
      \${Template({
    ...args,
    color: 'gray',
    text: 'Gray'
  })}
    </div>
  \`
}`,...(q=(G=i.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var D,k,j;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Color - outline',
  render: (args: Args) => html\`
    <div class="flex gap-s">
      <!-- Success -->
      \${Template({
    ...args,
    color: 'success',
    text: 'Success'
  })}
      <!-- Info -->
      \${Template({
    ...args,
    color: 'info',
    text: 'Info'
  })}
      <!-- Error -->
      \${Template({
    ...args,
    color: 'error',
    text: 'Error'
  })}
      <!-- Warning -->
      \${Template({
    ...args,
    color: 'warning',
    text: 'Warning'
  })}
      <!-- Gray -->
      \${Template({
    ...args,
    color: 'gray',
    text: 'Gray'
  })}
    </div>
  \`,
  args: {
    variant: 'outline'
  }
}`,...(j=(k=m.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var A,z,R;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Color - custom',
  render: (args: Args) => html\`
    <div class="flex gap-s">
      <!-- Hex custom color -->
      \${Template({
    ...args,
    color: '#FF5733',
    text: 'HEX',
    icon: 'yin-yang'
  })}
      <!-- Rgba custom color -->
      \${Template({
    ...args,
    color: 'rgba(255, 87, 51, 0.7)',
    text: 'RGBA',
    icon: 'rss'
  })}
      <!-- Theme custom color palette -->
      \${Template({
    ...args,
    color: 'sky-600',
    text: 'Theme Palette',
    icon: 'palette'
  })}
    </div>
  \`,
  args: {
    variant: 'outline'
  }
}`,...(R=(z=d.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var F,O,_;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Removable - filled',
  render: (args: Args) => html\`
    <div class="flex gap-s">
      <!-- Default -->
      \${Template({
    ...args,
    text: 'Default'
  })}
      <!-- Success -->
      \${Template({
    ...args,
    color: 'success',
    text: 'Success'
  })}
      <!-- Info -->
      \${Template({
    ...args,
    color: 'info',
    text: 'Info'
  })}
      <!-- Error -->
      \${Template({
    ...args,
    color: 'error',
    text: 'Error'
  })}
      <!-- Warning -->
      \${Template({
    ...args,
    color: 'warning',
    text: 'Warning'
  })}
      <!-- Gray -->
      \${Template({
    ...args,
    color: 'gray',
    text: 'Gray'
  })}
    </div>
  \`,
  args: {
    removable: true
  }
}`,...(_=(O=u.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var M,B,P;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Removable - outline',
  render: (args: Args) => html\`
    <div class="flex gap-s">
      <!-- Default -->
      \${Template({
    ...args,
    text: 'Default'
  })}
      <!-- Success -->
      \${Template({
    ...args,
    color: 'success',
    text: 'Success'
  })}
      <!-- Info -->
      \${Template({
    ...args,
    color: 'info',
    text: 'Info'
  })}
      <!-- Error -->
      \${Template({
    ...args,
    color: 'error',
    text: 'Error'
  })}
      <!-- Warning -->
      \${Template({
    ...args,
    color: 'warning',
    text: 'Warning'
  })}
      <!-- Gray -->
      \${Template({
    ...args,
    color: 'gray',
    text: 'Gray'
  })}
    </div>
  \`,
  args: {
    removable: true,
    variant: 'outline'
  }
}`,...(P=(B=g.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var U,X,H;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Prefix - filled',
  render: (args: Args) => html\`
    <div class="flex gap-s">
      <!-- Default -->
      \${Template({
    ...args,
    text: 'Default',
    icon: 'alarm'
  })}
      <!-- Success -->
      \${Template({
    ...args,
    color: 'success',
    text: 'Success',
    icon: 'check-circle'
  })}
      <!-- Info -->
      \${Template({
    ...args,
    color: 'info',
    text: 'Info',
    icon: 'info'
  })}
      <!-- Error -->
      \${Template({
    ...args,
    color: 'error',
    text: 'Error',
    icon: 'warning-diamond'
  })}
      <!-- Warning -->
      \${Template({
    ...args,
    color: 'warning',
    text: 'Warning',
    icon: 'warning'
  })}
      <!-- Gray -->
      \${Template({
    ...args,
    color: 'gray',
    text: 'Gray',
    icon: 'video-camera-slash'
  })}
    </div>
  \`,
  args: {
    variant: 'filled'
  }
}`,...(H=(X=p.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};var N,L,V;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Prefix - outline',
  render: (args: Args) => html\`
    <div class="flex gap-s">
      <!-- Default -->
      \${Template({
    ...args,
    text: 'Default',
    icon: 'alarm'
  })}
      <!-- Success -->
      \${Template({
    ...args,
    color: 'success',
    text: 'Success',
    icon: 'check-circle'
  })}
      <!-- Info -->
      \${Template({
    ...args,
    color: 'info',
    text: 'Info',
    icon: 'info'
  })}
      <!-- Error -->
      \${Template({
    ...args,
    color: 'error',
    text: 'Error',
    icon: 'warning-diamond'
  })}
      <!-- Warning -->
      \${Template({
    ...args,
    color: 'warning',
    text: 'Warning',
    icon: 'warning'
  })}
      <!-- Gray -->
      \${Template({
    ...args,
    color: 'gray',
    text: 'Gray',
    icon: 'video-camera-slash'
  })}
    </div>
  \`,
  args: {
    variant: 'outline'
  }
}`,...(V=(L=x.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};const pe=["Default","Size","Clickable","ColorFilled","ColorOutline","CustomColor","RemovableFilled","RemovableOutline","WithIconFilled","WithIconOutline"];export{c as Clickable,i as ColorFilled,m as ColorOutline,d as CustomColor,s as Default,u as RemovableFilled,g as RemovableOutline,l as Size,p as WithIconFilled,x as WithIconOutline,pe as __namedExportsOrder,ge as default};
