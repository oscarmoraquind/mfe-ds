import{x as s}from"./lit-html-CeYizTxc.js";import{ae as t,ar as l,as as p,at as S}from"./index-Bbs29GIG.js";import{u as y}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import{g as j}from"./getRandom-DzSV2BuH.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function m(e){const o={li:"li",p:"p",ul:"ul",...y(),...e.components};return t.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:t.jsxs("div",{className:"bq-doc__container",children:[t.jsx(l,{children:"Toast"}),t.jsx(o.p,{children:"The Toast Component is a UI element used to provide short, non-interruptive notifications to users."}),t.jsx(p,{children:"Usage"}),t.jsx(o.p,{children:"Toasts are typically displayed briefly at the bottom of the screen and disappear after a short amount of time. Toasts are commonly used to provide confirmation messages, error messages, or progress updates."}),t.jsx(p,{children:"👍 When to use"}),t.jsxs(o.ul,{children:[`
`,t.jsx(o.li,{children:"Providing confirmation messages for actions, such as confirming the successful submission of a form or successful completion of a task."}),`
`,t.jsx(o.li,{children:"Displaying error messages for issues or problems, such as indicating a required field is missing or a network error has occurred."}),`
`,t.jsx(o.li,{children:"Presenting progress updates for long-running actions, such as indicating the status of a download or the progress of a task"}),`
`]}),t.jsx(l,{children:"Properties"}),t.jsx(S,{of:"bq-toast"})]})})}function _(e={}){const{wrapper:o}={...y(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(m,{...e})}):m(e)}const c=["info","success","alert","error","loading","custom"],w=["top-center","top-right","bottom-right","bottom-center","bottom-left","top-left"],C=["none","xs2","xs","s","m","l","full"],U={title:"Components/Toast",component:"bq-toast",parameters:{docs:{page:_}},argTypes:{border:{control:"select",options:[...C]},type:{control:"select",options:[...c]},placement:{control:"select",options:[...w]},"hide-icon":{control:"boolean"},open:{control:"boolean"},time:{control:"number"},text:{control:"text",table:{disable:!0}},bqShow:{action:"bqShow"},bqHide:{action:"bqHide"}},args:{border:"s",type:"info",placement:"bottom-center","hide-icon":!1,open:!1,time:3e3,text:"This is a message"}},D=e=>{const o=n=>{e.bqHide(n),n.preventDefault()};return s`${c.map(n=>s`
      <div class="m-be-xs2">
        <bq-toast
          border=${e.border}
          type=${n}
          hide-icon=${e["hide-icon"]}
          open=${e.open}
          time=${e.time}
          placement=${e.placement}
          @bqShow=${e.bqShow}
          @bqHide=${o}
        >
          ${e.text} ${n==="custom"?s`<bq-icon slot="icon" size="24" name="star-bold"></bq-icon>`:null}
        </bq-toast>
      </div>
    `)} `},r={render:D,argTypes:{type:{control:"select",table:{disable:!0}},time:{control:"number",table:{disable:!0}},open:{control:"boolean",table:{disable:!0}}},args:{open:!0}},H=e=>{const o=n=>{e.bqHide(n),n.preventDefault()};return s`
    <bq-toast
      border=${e.border}
      type=${e.type}
      hide-icon=${e["hide-icon"]}
      open=${e.open}
      time=${e.time}
      placement=${e.placement}
      @bqShow=${e.bqShow}
      @bqHide=${o}
    >
      ${e.text}
      <bq-icon slot="icon" size="24" name="star-bold"></bq-icon>
    </bq-toast>
  `},a={render:H,args:{type:"success",open:!0}},k=e=>s` <bq-button @bqClick=${async()=>{const n=document.createElement("bq-toast"),[$]=j(c,1);Object.assign(n,{border:e.border,type:$,hideIcon:e["hide-icon"],time:e.time,open:e.open,placement:e.placement,innerHTML:e.text}),document.body.append(n),await n.toast()}}>Toggle toast</bq-button> `,i={render:k,argTypes:{type:{control:"select",table:{disable:!0}},open:{control:"boolean",table:{disable:!0}}},args:{}};var d,b,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template,
  argTypes: {
    type: {
      control: 'select',
      table: {
        disable: true
      }
    },
    time: {
      control: 'number',
      table: {
        disable: true
      }
    },
    open: {
      control: 'boolean',
      table: {
        disable: true
      }
    }
  },
  args: {
    open: true
  }
}`,...(u=(b=r.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var h,f,T;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: CustomIconTemplate,
  args: {
    type: 'success',
    open: true
  }
}`,...(T=(f=a.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var x,q,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: StackableTemplate,
  argTypes: {
    type: {
      control: 'select',
      table: {
        disable: true
      }
    },
    open: {
      control: 'boolean',
      table: {
        disable: true
      }
    }
  },
  args: {}
}`,...(g=(q=i.parameters)==null?void 0:q.docs)==null?void 0:g.source}}};const X=["Default","Custom","Stackable"];export{a as Custom,r as Default,i as Stackable,X as __namedExportsOrder,U as default};
