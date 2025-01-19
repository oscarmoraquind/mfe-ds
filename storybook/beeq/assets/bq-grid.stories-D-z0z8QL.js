import{x as m}from"./lit-html-CeYizTxc.js";const p={title:"Components/Grid",component:"bq-grid",parameters:{docs:{description:{component:"The bq-grid component is a responsive and mobile-first layout system based on a 12-column design."}}},argTypes:{fixed:{description:"If true, the grid will have a fixed width based on screen size.",control:"boolean"},noPadding:{description:"If true, the grid removes padding.",control:"boolean"}}},r=i=>m`<bq-grid ?fixed=${i.fixed} ?no-padding=${i.noPadding}> 
        <bq-row>
          <bq-col size="6">Columna 1</bq-col>
          <bq-col size="6">Columna 2</bq-col>
        </bq-row>
      </bq-grid>

      <bq-grid> 
        <bq-row>
          <bq-col size="4">Columna 1</bq-col>
          <bq-col size="4">Columna 2</bq-col>
          <bq-col size="4">Columna 3</bq-col>
        </bq-row>
      </bq-grid>

      <bq-grid ?fixed=${i.fixed} ?no-padding=${i.noPadding}>  
        <bq-row>
          <bq-col size="auto">Columna 1 (auto)</bq-col>
          <bq-col size="3">Columna 2</bq-col>
        </bq-row>
      </bq-grid>`,o=r.bind({});o.args={fixed:!1,noPadding:!1};const n=r.bind({});n.args={fixed:!0,noPadding:!1};const e=r.bind({});e.args={fixed:!1,noPadding:!0};var a,d,b;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => html\`<bq-grid ?fixed=\${args.fixed} ?no-padding=\${args.noPadding}> 
        <bq-row>
          <bq-col size="6">Columna 1</bq-col>
          <bq-col size="6">Columna 2</bq-col>
        </bq-row>
      </bq-grid>

      <bq-grid> 
        <bq-row>
          <bq-col size="4">Columna 1</bq-col>
          <bq-col size="4">Columna 2</bq-col>
          <bq-col size="4">Columna 3</bq-col>
        </bq-row>
      </bq-grid>

      <bq-grid ?fixed=\${args.fixed} ?no-padding=\${args.noPadding}>  
        <bq-row>
          <bq-col size="auto">Columna 1 (auto)</bq-col>
          <bq-col size="3">Columna 2</bq-col>
        </bq-row>
      </bq-grid>\``,...(b=(d=o.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var l,q,s;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => html\`<bq-grid ?fixed=\${args.fixed} ?no-padding=\${args.noPadding}> 
        <bq-row>
          <bq-col size="6">Columna 1</bq-col>
          <bq-col size="6">Columna 2</bq-col>
        </bq-row>
      </bq-grid>

      <bq-grid> 
        <bq-row>
          <bq-col size="4">Columna 1</bq-col>
          <bq-col size="4">Columna 2</bq-col>
          <bq-col size="4">Columna 3</bq-col>
        </bq-row>
      </bq-grid>

      <bq-grid ?fixed=\${args.fixed} ?no-padding=\${args.noPadding}>  
        <bq-row>
          <bq-col size="auto">Columna 1 (auto)</bq-col>
          <bq-col size="3">Columna 2</bq-col>
        </bq-row>
      </bq-grid>\``,...(s=(q=n.parameters)==null?void 0:q.docs)==null?void 0:s.source}}};var c,g,t;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => html\`<bq-grid ?fixed=\${args.fixed} ?no-padding=\${args.noPadding}> 
        <bq-row>
          <bq-col size="6">Columna 1</bq-col>
          <bq-col size="6">Columna 2</bq-col>
        </bq-row>
      </bq-grid>

      <bq-grid> 
        <bq-row>
          <bq-col size="4">Columna 1</bq-col>
          <bq-col size="4">Columna 2</bq-col>
          <bq-col size="4">Columna 3</bq-col>
        </bq-row>
      </bq-grid>

      <bq-grid ?fixed=\${args.fixed} ?no-padding=\${args.noPadding}>  
        <bq-row>
          <bq-col size="auto">Columna 1 (auto)</bq-col>
          <bq-col size="3">Columna 2</bq-col>
        </bq-row>
      </bq-grid>\``,...(t=(g=e.parameters)==null?void 0:g.docs)==null?void 0:t.source}}};const f=["Default","Fixed","NoPadding"];export{o as Default,n as Fixed,e as NoPadding,f as __namedExportsOrder,p as default};
