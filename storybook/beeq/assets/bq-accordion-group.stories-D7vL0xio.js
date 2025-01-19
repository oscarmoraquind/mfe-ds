import{x as s}from"./lit-html-CeYizTxc.js";import{o as a}from"./if-defined-C7zjO9dX.js";import{M as t,A as c,a as l}from"./bq-accordion.types-ktcnbnQL.js";import"./index-Bbs29GIG.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";import"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";const $={title:"Components/Accordion",component:"bq-accordion-group",parameters:{docs:{page:t}},argTypes:{appearance:{control:"select",options:[...c]},"expand-all":{control:"boolean"},"no-animation":{control:"boolean"},multiple:{control:"boolean"},size:{control:"select",options:[...l]}},args:{appearance:"filled","expand-all":!1,"no-animation":!1,multiple:!1,size:"medium"}},i={render:e=>s`
    <bq-accordion-group
      appearance=${a(e.appearance)}
      ?expand-all=${e["expand-all"]}
      ?no-animation=${e["no-animation"]}
      ?multiple=${e.multiple}
      size=${a(e.size)}
    >
      <bq-accordion size=${e.size}>
        <span slot="header">First</span>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam corporis perferendis, architecto vel
          ullam officia officiis necessitatibus optio nam soluta labore libero debitis? Delectus enim quaerat laboriosam
          consequatur ea.
        </div>
      </bq-accordion>
      <bq-accordion expanded>
        <span slot="header">Second</span>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam corporis perferendis, architecto vel
          ullam officia officiis necessitatibus optio nam soluta labore libero debitis? Delectus enim quaerat laboriosam
          consequatur ea.
        </div>
      </bq-accordion>
      <bq-accordion disabled>
        <span slot="header">Third</span>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam corporis perferendis, architecto vel
          ullam officia officiis necessitatibus optio nam soluta labore libero debitis? Delectus enim quaerat laboriosam
          consequatur ea.
        </div>
      </bq-accordion>
      <bq-accordion>
        <span slot="header">Four</span>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam corporis perferendis, architecto vel
          ullam officia officiis necessitatibus optio nam soluta labore libero debitis? Delectus enim quaerat laboriosam
          consequatur ea.
        </div>
      </bq-accordion>
    </bq-accordion-group>
  `,args:{}};var o,n,r;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    <bq-accordion-group
      appearance=\${ifDefined(args.appearance)}
      ?expand-all=\${args['expand-all']}
      ?no-animation=\${args['no-animation']}
      ?multiple=\${args.multiple}
      size=\${ifDefined(args.size)}
    >
      <bq-accordion size=\${args.size}>
        <span slot="header">First</span>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam corporis perferendis, architecto vel
          ullam officia officiis necessitatibus optio nam soluta labore libero debitis? Delectus enim quaerat laboriosam
          consequatur ea.
        </div>
      </bq-accordion>
      <bq-accordion expanded>
        <span slot="header">Second</span>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam corporis perferendis, architecto vel
          ullam officia officiis necessitatibus optio nam soluta labore libero debitis? Delectus enim quaerat laboriosam
          consequatur ea.
        </div>
      </bq-accordion>
      <bq-accordion disabled>
        <span slot="header">Third</span>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam corporis perferendis, architecto vel
          ullam officia officiis necessitatibus optio nam soluta labore libero debitis? Delectus enim quaerat laboriosam
          consequatur ea.
        </div>
      </bq-accordion>
      <bq-accordion>
        <span slot="header">Four</span>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam corporis perferendis, architecto vel
          ullam officia officiis necessitatibus optio nam soluta labore libero debitis? Delectus enim quaerat laboriosam
          consequatur ea.
        </div>
      </bq-accordion>
    </bq-accordion-group>
  \`,
  args: {}
}`,...(r=(n=i.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const x=["Group"];export{i as Group,x as __namedExportsOrder,$ as default};
