import{x as s,E as n}from"./lit-html-CeYizTxc.js";import{o}from"./if-defined-C7zjO9dX.js";import{ae as t,ar as q,as as f,at as z}from"./index-Bbs29GIG.js";import{u as Y}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function y(e){const r={li:"li",p:"p",ul:"ul",...Y(),...e.components};return t.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:t.jsxs("div",{className:"bq-doc__container",children:[t.jsx(q,{children:"Alert"}),t.jsx(r.p,{children:`The Alert is a user interface component used to convey important information to the user in a clear and concise manner.
It can be used to notify users of success, failure, warning, or any other type of information that needs to be brought to their attention.`}),t.jsx(f,{children:"Usage"}),t.jsxs(r.ul,{children:[`
`,t.jsx(r.li,{children:"Use alerts to inform users about important events or actions such as successful login, account creation, and password reset."}),`
`,t.jsx(r.li,{children:"Use alerts to inform users about errors or warnings such as incorrect login credentials, network errors, or session timeouts."}),`
`,t.jsx(r.li,{children:"Use alerts to provide users with feedback about their actions such as a successful submission of a form or a message that a file has been uploaded successfully."}),`
`,t.jsx(r.li,{children:"Use alerts to inform users about system status such as maintenance downtime or system upgrades."}),`
`]}),t.jsx(f,{children:"👍 When to use"}),t.jsxs(r.ul,{children:[`
`,t.jsx(r.li,{children:"When to communicate critical updates such as important software patches, system maintenance, or urgent changes affecting the user experience."}),`
`,t.jsx(r.li,{children:"When to to provide real-time feedback on authentication status, including successful logins, failed login attempts, or session expirations."}),`
`,t.jsx(r.li,{children:"When to enhance user experience by utilizing the Alert component to confirm successful data submissions or to notify users about any errors encountered during the submission process."}),`
`,t.jsx(r.li,{children:"When to keep users informed about any changes in their permissions or access levels by leveraging the Alert component to deliver relevant and timely notifications."}),`
`,t.jsx(r.li,{children:"When to improve user engagement and timely actions by using the Alert component to remind users of upcoming events, deadlines, or other time-sensitive tasks."}),`
`]}),t.jsx(q,{children:"Properties"}),t.jsx(z,{of:"bq-alert"})]})})}function B(e={}){const{wrapper:r}={...Y(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(y,{...e})}):y(e)}const I=["info","success","warning","error","default"],M=["none","xs2","xs","s","m","l","full"],oe={title:"Components/Alert",component:"bq-alert",parameters:{docs:{page:B}},argTypes:{"auto-dismiss":{control:"boolean"},"disable-close":{control:"boolean"},"hide-icon":{control:"boolean"},border:{control:"select",options:[...M]},sticky:{control:"boolean"},open:{control:"boolean"},time:{control:"number"},type:{control:"select",options:[...I]},bqShow:{action:"bqShow"},bqAfterShow:{action:"bqAfterShow"},bqHide:{action:"bqHide"},bqAfterHide:{action:"bqAfterHide"}},args:{"auto-dismiss":!1,"disable-close":!1,"hide-icon":!1,border:"s",sticky:!1,open:!1,time:3e3,type:"default"}},i=e=>s`
  <div class="flex flex-row gap-4">
    <bq-alert
      ?auto-dismiss=${e["auto-dismiss"]}
      ?disable-close=${e["disable-close"]}
      ?hide-icon=${e["hide-icon"]}
      border=${o(e.border)}
      ?open=${e.open}
      time=${o(e.time)}
      type=${o(e.type)}
      @bqShow=${e.bqShow}
      @bqAfterShow=${e.bqAfterShow}
      @bqHide=${e.bqHide}
      @bqAfterHide=${e.bqAfterHide}
    >
      ${e.type==="default"?s`<bq-icon name="star" slot="icon"></bq-icon>`:n} Title
    </bq-alert>

    <bq-alert
      ?auto-dismiss=${e["auto-dismiss"]}
      ?disable-close=${e["disable-close"]}
      ?hide-icon=${e["hide-icon"]}
      border=${o(e.border)}
      ?open=${e.open}
      time=${o(e.time)}
      type=${o(e.type)}
      @bqShow=${e.bqShow}
      @bqAfterShow=${e.bqAfterShow}
      @bqHide=${e.bqHide}
      @bqAfterHide=${e.bqAfterHide}
    >
      ${e.type==="default"?s`<bq-icon name="star" slot="icon"></bq-icon>`:n} Title
      <span slot="body">
        Description
        <a class="bq-link" href="https://example.com">Link</a>
      </span>
    </bq-alert>

    <bq-alert
      ?auto-dismiss=${e["auto-dismiss"]}
      ?disable-close=${e["disable-close"]}
      ?hide-icon=${e["hide-icon"]}
      border=${o(e.border)}
      ?open=${e.open}
      time=${o(e.time)}
      type=${o(e.type)}
      @bqShow=${e.bqShow}
      @bqAfterShow=${e.bqAfterShow}
      @bqHide=${e.bqHide}
      @bqAfterHide=${e.bqAfterHide}
    >
      ${e.type==="default"?s`<bq-icon name="star" slot="icon"></bq-icon>`:n} Title
      ${e.sticky?n:s`
            <span slot="body">
              Description
              <a class="bq-link" href="https://example.com">Link</a>
            </span>
            <div class="flex gap-xs" slot="footer">
              <bq-button appearance="primary" size="small"> Button </bq-button>
              <bq-button appearance="link" size="small"> Button </bq-button>
            </div>
          `}
    </bq-alert>
  </div>
`,X=e=>s`
  <bq-alert
    ?auto-dismiss=${e["auto-dismiss"]}
    ?disable-close=${e["disable-close"]}
    ?hide-icon=${e["hide-icon"]}
    ?sticky=${e.sticky}
    border=${o(e.border)}
    ?open=${e.open}
    time=${o(e.time)}
    type=${o(e.type)}
    @bqShow=${e.bqShow}
    @bqAfterShow=${e.bqAfterShow}
    @bqHide=${e.bqHide}
    @bqAfterHide=${e.bqAfterHide}
  >
    ${e.type==="default"?s`<bq-icon name="star" slot="icon"></bq-icon>`:n} Title
    <bq-button appearance="link" size="small"> Button </bq-button>
  </bq-alert>
  <main class="grid grid-cols-1 p-b-m p-i-m">
    <h1 class="m-be-l">Dashboard</h1>
    <div class="border border-dashed border-primary bg-[--bq-ui--alt] bs-80 is-full"></div>
  </main>
`,l={render:i,args:{open:!0}},c={render:i,args:{open:!0,type:"info"}},d={render:i,args:{open:!0,type:"success"}},b={render:i,args:{open:!0,type:"warning"}},m={name:"Error",render:i,args:{open:!0,type:"error"}},p={render:X,args:{open:!0,sticky:!0,type:"error"}},u={render:e=>s`
      <bq-card>
        <form id="change-password" class="flex flex-col gap-y-m" @submit=${async a=>{a.preventDefault();const h=document.querySelector("bq-alert");h&&await h.show()}} @reset=${async()=>{const a=document.querySelector("bq-alert");a&&await a.hide()}}>
          <!-- Alert -->
          <bq-alert
            ?auto-dismiss=${e["auto-dismiss"]}
            ?disable-close=${e["disable-close"]}
            ?hide-icon=${e["hide-icon"]}
            ?sticky=${e.sticky}
            border=${e.border}
            ?open=${e.open}
            time=${e.time}
            type=${e.type}
            @bqShow=${e.bqShow}
            @bqAfterShow=${e.bqAfterShow}
            @bqHide=${e.bqHide}
            @bqAfterHide=${e.bqAfterHide}
          >
            There were 2 errors with your submission
            <span slot="body">
              <ul class="ps-m m-be-0 m-bs-0">
                <li>Your password must be at least 8 characters</li>
                <li>Your password must include at least one pro wrestling finishing move</li>
              </ul>
            </span>
          </bq-alert>
          <bq-input name="password" type="password" required>
            <label class="flex flex-grow items-center" slot="label">Password</label>
          </bq-input>
          <bq-input name="confirm-password" type="password" required>
            <label class="flex flex-grow items-center" slot="label">Confirm Password</label>
          </bq-input>
          <div class="flex justify-end gap-x-m">
            <bq-button appearance="secondary" type="reset">Cancel</bq-button>
            <bq-button type="submit">Save</bq-button>
          </div>
        </form>
      </bq-card>
    `,args:{type:"error"}};var $,w,x;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: true
  }
}`,...(x=(w=l.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var S,A,g;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: true,
    type: 'info'
  }
}`,...(g=(A=c.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};var v,H,k;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: true,
    type: 'success'
  }
}`,...(k=(H=d.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var T,j,E;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: true,
    type: 'warning'
  }
}`,...(E=(j=b.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var D,_,R;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Error',
  render: Template,
  args: {
    open: true,
    type: 'error'
  }
}`,...(R=(_=m.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var W,C,F;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: TemplateSticky,
  args: {
    open: true,
    sticky: true,
    type: 'error'
  }
}`,...(F=(C=p.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var P,U,L;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args: Args) => {
    const handleFormSubmit = async (ev: Event) => {
      ev.preventDefault();
      const bqAlertElem = document.querySelector('bq-alert');
      if (!bqAlertElem) return;
      await bqAlertElem.show();
    };
    const handleFormReset = async () => {
      const bqAlertElem = document.querySelector('bq-alert');
      if (!bqAlertElem) return;
      await bqAlertElem.hide();
    };
    return html\`
      <bq-card>
        <form id="change-password" class="flex flex-col gap-y-m" @submit=\${handleFormSubmit} @reset=\${handleFormReset}>
          <!-- Alert -->
          <bq-alert
            ?auto-dismiss=\${args['auto-dismiss']}
            ?disable-close=\${args['disable-close']}
            ?hide-icon=\${args['hide-icon']}
            ?sticky=\${args['sticky']}
            border=\${args.border}
            ?open=\${args.open}
            time=\${args.time}
            type=\${args.type}
            @bqShow=\${args.bqShow}
            @bqAfterShow=\${args.bqAfterShow}
            @bqHide=\${args.bqHide}
            @bqAfterHide=\${args.bqAfterHide}
          >
            There were 2 errors with your submission
            <span slot="body">
              <ul class="ps-m m-be-0 m-bs-0">
                <li>Your password must be at least 8 characters</li>
                <li>Your password must include at least one pro wrestling finishing move</li>
              </ul>
            </span>
          </bq-alert>
          <bq-input name="password" type="password" required>
            <label class="flex flex-grow items-center" slot="label">Password</label>
          </bq-input>
          <bq-input name="confirm-password" type="password" required>
            <label class="flex flex-grow items-center" slot="label">Confirm Password</label>
          </bq-input>
          <div class="flex justify-end gap-x-m">
            <bq-button appearance="secondary" type="reset">Cancel</bq-button>
            <bq-button type="submit">Save</bq-button>
          </div>
        </form>
      </bq-card>
    \`;
  },
  args: {
    type: 'error'
  }
}`,...(L=(U=u.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};const se=["Default","Info","Success","Warning","ErrorType","Sticky","WithTrigger"];export{l as Default,m as ErrorType,c as Info,p as Sticky,d as Success,b as Warning,u as WithTrigger,se as __namedExportsOrder,oe as default};
