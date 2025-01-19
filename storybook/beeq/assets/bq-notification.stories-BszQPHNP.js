import{x as i,E as u}from"./lit-html-CeYizTxc.js";import{ae as t,ar as f,as as h,at as U}from"./index-Bbs29GIG.js";import{u as B}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import{g as F}from"./getRandom-DzSV2BuH.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function q(e){const o={li:"li",p:"p",ul:"ul",...B(),...e.components};return t.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:t.jsxs("div",{className:"bq-doc__container",children:[t.jsx(f,{children:"Notification"}),t.jsx(o.p,{children:`The Notification component is a user interface element used to provide information or alerts to users in a non-intrusive manner.
It is a valuable tool in web development for notifying users about specific actions or events that are important for them to know,
such as displaying system messages, error messages, success messages, and other types of alerts.`}),t.jsx(h,{children:"Usage"}),t.jsxs(o.ul,{children:[`
`,t.jsx(o.li,{children:"Use notifications to inform users about important events or actions such as successful login, account creation, and password reset."}),`
`,t.jsx(o.li,{children:"Use notifications to inform users about errors or warnings such as incorrect login credentials, network errors, or session timeouts."}),`
`,t.jsx(o.li,{children:"Use notifications to provide users with feedback about their actions such as a successful submission of a form or a message that a file has been uploaded successfully."}),`
`,t.jsx(o.li,{children:"Use notifications to inform users about system status such as maintenance downtime or system upgrades."}),`
`]}),t.jsx(h,{children:"👍 When to use"}),t.jsxs(o.ul,{children:[`
`,t.jsx(o.li,{children:"When you need to inform users about important events, actions, errors, warnings, or system status."}),`
`,t.jsx(o.li,{children:"When you need to provide users with feedback about their actions or submissions."}),`
`]}),t.jsx(f,{children:"Properties"}),t.jsx(U,{of:"bq-notification"})]})})}function W(e={}){const{wrapper:o}={...B(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(q,{...e})}):q(e)}const R=["error","info","neutral","success","warning"],Y=["none","xs2","xs","s","m","l","full"],te={title:"Components/Notification",component:"bq-notification",parameters:{docs:{page:W}},argTypes:{"auto-dismiss":{control:"boolean"},"disable-close":{control:"boolean"},"hide-icon":{control:"boolean"},border:{control:"select",options:[...Y]},open:{control:"boolean"},time:{control:"number"},type:{control:"select",options:[...R]},bqShow:{action:"bqOpen"},bqHide:{action:"bqClose"},bqAfterOpen:{action:"bqAfterOpen"},bqAfterClose:{action:"bqAfterClose"},customIcon:{control:"boolean",table:{disable:!0}}},args:{"auto-dismiss":!1,"disable-close":!1,"hide-icon":!1,border:"s",open:!1,time:3e3,type:"info",customIcon:!1}},s=e=>i`
  <div class="flex flex-row gap-4">
    <bq-notification
      ?auto-dismiss=${e["auto-dismiss"]}
      ?disable-close=${e["disable-close"]}
      ?hide-icon=${e["hide-icon"]}
      border=${e.border}
      ?open=${e.open}
      time=${e.time}
      type=${e.type}
      @bqShow=${e.bqShow}
      @bqHide=${e.bqHide}
      @bqAfterOpen=${e.bqAfterOpen}
      @bqAfterClose=${e.bqAfterClose}
    >
      ${e.customIcon?i`<bq-icon name="thumbs-up" slot="icon"></bq-icon>`:u} Title
    </bq-notification>

    <bq-notification
      ?auto-dismiss=${e["auto-dismiss"]}
      ?disable-close=${e["disable-close"]}
      ?hide-icon=${e["hide-icon"]}
      border=${e.border}
      ?open=${e.open}
      time=${e.time}
      type=${e.type}
      @bqShow=${e.bqShow}
      @bqHide=${e.bqHide}
      @bqAfterOpen=${e.bqAfterOpen}
      @bqAfterClose=${e.bqAfterClose}
    >
      ${e.customIcon?i`<bq-icon name="thumbs-up" slot="icon"></bq-icon>`:u} Title
      <span slot="body">
        This is some description text text
        <a class="bq-link" href="https://example.com">Link</a>
      </span>
    </bq-notification>

    <bq-notification
      ?auto-dismiss=${e["auto-dismiss"]}
      ?disable-close=${e["disable-close"]}
      ?hide-icon=${e["hide-icon"]}
      border=${e.border}
      ?open=${e.open}
      time=${e.time}
      type=${e.type}
      @bqShow=${e.bqShow}
      @bqHide=${e.bqHide}
      @bqAfterOpen=${e.bqAfterOpen}
      @bqAfterClose=${e.bqAfterClose}
    >
      ${e.customIcon?i`<bq-icon name="thumbs-up" slot="icon"></bq-icon>`:u} Title
      <span slot="body">
        This is some description text text
        <a class="bq-link" href="https://example.com">Link</a>
      </span>
      <div class="flex gap-xs" slot="footer">
        <bq-button appearance="primary" size="small"> Button </bq-button>
        <bq-button appearance="link" size="small"> Button </bq-button>
      </div>
    </bq-notification>
  </div>
`,r={render:s,args:{open:!0}},a={name:"Error",render:s,args:{open:!0,type:"error"}},c={render:s,args:{open:!0,type:"neutral"}},l={render:s,args:{open:!0,type:"success"}},d={render:s,args:{open:!0,type:"warning"}},p={render:s,args:{open:!0,customIcon:!0}},m={render:e=>i`
      <p class="m-be-0">
        The notification component creates and manages the notification portal, a fixed-position element that allows for
        stacking multiple notifications vertically.
      </p>
      <p class="m-be-6">
        Only one instance of the notification portal exists and it is added or removed from the DOM as required when
        notifications are displayed.
      </p>
      <bq-button @bqClick=${()=>{const[b]=F(R,1),n=Object.assign(document.createElement("bq-notification"),{type:b,autoDismiss:e["auto-dismiss"],disableClose:e["disable-close"],hideIcon:e["hide-icon"],border:e.border,time:e.time,innerHTML:`
          Title
          <span slot="body">
            Here goes the description for the <strong>${b} notification</strong><br />
            You can also add a <a class="bq-link" href="https://example.com">Link</a>
          </span>
        `});return n.addEventListener("bqShow",e.bqShow),n.addEventListener("bqHide",e.bqHide),n.addEventListener("bqAfterOpen",e.bqAfterOpen),n.addEventListener("bqAfterClose",e.bqAfterClose),document.body.append(n),n.toast()}}>Open notification</bq-button>
    `,args:{"auto-dismiss":!0,time:3500}};var y,x,$;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: true
  }
}`,...($=(x=r.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};var A,T,w;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Error',
  render: Template,
  args: {
    open: true,
    type: 'error'
  }
}`,...(w=(T=a.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var C,g,O;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: true,
    type: 'neutral'
  }
}`,...(O=(g=c.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};var v,k,S;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: true,
    type: 'success'
  }
}`,...(S=(k=l.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var I,j,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: true,
    type: 'warning'
  }
}`,...(E=(j=d.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var H,L,N;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: true,
    customIcon: true
  }
}`,...(N=(L=p.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var _,D,M;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args: Args) => {
    const onButtonClick = () => {
      const [type] = getRandomFromArray(NOTIFICATION_TYPE as unknown as string[], 1);
      const notification = Object.assign(document.createElement('bq-notification'), {
        type,
        autoDismiss: args['auto-dismiss'],
        disableClose: args['disable-close'],
        hideIcon: args['hide-icon'],
        border: args.border,
        time: args.time,
        innerHTML: \`
          Title
          <span slot="body">
            Here goes the description for the <strong>\${type} notification</strong><br />
            You can also add a <a class="bq-link" href="https://example.com">Link</a>
          </span>
        \`
      });
      notification.addEventListener('bqShow', args.bqShow);
      notification.addEventListener('bqHide', args.bqHide);
      notification.addEventListener('bqAfterOpen', args.bqAfterOpen);
      notification.addEventListener('bqAfterClose', args.bqAfterClose);
      document.body.append(notification);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (notification as any).toast();
    };
    return html\`
      <p class="m-be-0">
        The notification component creates and manages the notification portal, a fixed-position element that allows for
        stacking multiple notifications vertically.
      </p>
      <p class="m-be-6">
        Only one instance of the notification portal exists and it is added or removed from the DOM as required when
        notifications are displayed.
      </p>
      <bq-button @bqClick=\${onButtonClick}>Open notification</bq-button>
    \`;
  },
  args: {
    'auto-dismiss': true,
    time: 3500
  }
}`,...(M=(D=m.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const oe=["Default","ErrorType","Neutral","Success","Warning","CustomIcon","Stacked"];export{p as CustomIcon,r as Default,a as ErrorType,c as Neutral,m as Stacked,l as Success,d as Warning,oe as __namedExportsOrder,te as default};
