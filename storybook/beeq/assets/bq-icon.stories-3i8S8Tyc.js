import{T as G,x as I}from"./lit-html-CeYizTxc.js";import{o as f}from"./if-defined-C7zjO9dX.js";import{e as L,i as Q,t as X}from"./directive-CF8sV3Lr.js";import{p as H,v as b,r as x,M as j,m as V}from"./directive-helpers-DKlGDmju.js";import{ae as o,ar as $,as as z,at as F}from"./index-Bbs29GIG.js";import{u as B}from"./index-BE__LNZ-.js";import"./chunk-NUUEMKO5-fhsXj12_.js";import"./iframe-sQ9HOXuz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=(e,r,l)=>{const m=new Map;for(let t=r;t<=l;t++)m.set(e[t],t);return m},K=L(class extends Q{constructor(e){if(super(e),e.type!==X.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,r,l){let m;l===void 0?l=r:r!==void 0&&(m=r);const t=[],d=[];let a=0;for(const p of e)t[a]=m?m(p,a):a,d[a]=l(p,a),a++;return{values:d,keys:t}}render(e,r,l){return this.dt(e,r,l).values}update(e,[r,l,m]){const t=H(e),{values:d,keys:a}=this.dt(r,l,m);if(!Array.isArray(t))return this.ut=a,d;const p=this.ut??(this.ut=[]),h=[];let g,k,s=0,i=t.length-1,n=0,c=d.length-1;for(;s<=i&&n<=c;)if(t[s]===null)s++;else if(t[i]===null)i--;else if(p[s]===a[n])h[n]=b(t[s],d[n]),s++,n++;else if(p[i]===a[c])h[c]=b(t[i],d[c]),i--,c--;else if(p[s]===a[c])h[c]=b(t[s],d[c]),x(e,h[c+1],t[s]),s++,c--;else if(p[i]===a[n])h[n]=b(t[i],d[n]),x(e,t[s],t[i]),i--,n++;else if(g===void 0&&(g=C(a,n,c),k=C(p,s,i)),g.has(p[s]))if(g.has(p[i])){const u=k.get(a[n]),q=u!==void 0?t[u]:null;if(q===null){const _=x(e,t[s]);b(_,d[n]),h[n]=_}else h[n]=b(q,d[n]),x(e,t[s],q),t[u]=null;n++}else j(t[i]),i--;else j(t[s]),s++;for(;n<=c;){const u=x(e,h[c+1]);b(u,d[n]),h[n++]=u}for(;s<=i;){const u=t[s++];u!==null&&j(u)}return this.ut=a,V(e,h),G}});function E(e){const r={a:"a",li:"li",p:"p",ul:"ul",...B(),...e.components};return o.jsx("div",{className:"bq-doc__wrapper","data-theme":"light",children:o.jsxs("div",{className:"bq-doc__container",children:[o.jsx($,{children:"Icons"}),o.jsxs(r.p,{children:[`The Icon component is a visual representation of an object, action, or concept.
It is a small graphical element that is used to enhance the user interface and improve user experience.
The Icon component can be used in various ways, such as navigation bars, toolbars, buttons, menus, and so on.
BEEQ icons are based on `,o.jsx(r.a,{href:"https://phosphoricons.com/",rel:"nofollow",children:"Phosphor icons library"}),", is a flexible icon family for interfaces, diagrams, presentations — whatever, really, is free and open-source, licensed under MIT."]}),o.jsx(z,{children:"Usage"}),o.jsx(r.p,{children:"The Icon component should adhere to the following user experience best practices:"}),o.jsxs(r.ul,{children:[`
`,o.jsx(r.li,{children:"Use meaningful and recognizable icons that are easily recognizable and convey the intended meaning without any explanation."}),`
`,o.jsx(r.li,{children:"Keep the icons simple and easy to understand, avoiding complex icons that may confuse users."}),`
`,o.jsx(r.li,{children:"Use consistent icons throughout the application to improve users' ability to recognize them."}),`
`,o.jsx(r.li,{children:"Adjust the size and spacing of the icons appropriately for their intended use, as icons that are too small or too large can be difficult to see and use."}),`
`,o.jsx(r.li,{children:"Use color to enhance the visual appeal of the icons, but ensure that the colors are consistent with the overall design of the application."}),`
`]}),o.jsx(z,{children:"👍 When to use"}),o.jsx(r.p,{children:"The Icon component can be used in various ways, such as:"}),o.jsxs(r.ul,{children:[`
`,o.jsx(r.li,{children:"Navigation - Use icons to represent different sections of the application, such as home, settings, profile, and so on."}),`
`,o.jsx(r.li,{children:"Action buttons - Use icons to represent different actions, such as save, delete, edit, and so on."}),`
`,o.jsx(r.li,{children:"Status indicators - Use icons to indicate the status of an object, such as success, error, warning, and so on."}),`
`]}),o.jsx($,{children:"Properties"}),o.jsx(F,{of:"bq-icon"})]})})}function R(e={}){const{wrapper:r}={...B(),...e.components};return r?o.jsx(r,{...e,children:o.jsx(E,{...e})}):E(e)}const J=["thin","light","regular","bold","fill","duotone"],de={title:"Components/Icon",component:"bq-icon",parameters:{controls:{sort:"requiredFirst"},docs:{page:R}},argTypes:{icons:{table:{disable:!0}},color:{control:"text"},label:{control:"text"},name:{control:"text"},size:{control:"number"},src:{control:"text"},weight:{control:"select",options:[...J]}},args:{color:"text--brand",label:void 0,size:24,src:void 0,weight:void 0}},T=e=>I`
  <bq-icon
    color=${f(e.color)}
    label=${f(e.label)}
    name=${f(e.name)}
    size=${f(e.size)}
    src=${f(e.src)}
    weight=${f(e.weight)}
  ></bq-icon>
`,w={render:T,args:{name:"bell-ringing"}},y={name:"Custom icon",render:T,args:{size:256,src:"./assets/wallet.svg"}},v={render:e=>I`
      <style>
        bq-button::part(button) {
          text-decoration: none;
        }
      </style>
      <div class="text-text-primary m-be-xl">
        <h1 class="text-xl font-bold">We didn't reinvent the wheel</h1>
        <p class="m-bs-xs">
          BEEQ icons are based on
          <a
            class="bq-link"
            href="https://phosphoricons.com/"
            target="_blank"
            title="Phosphor icons"
            rel="noreferrer noopener"
          >
            Phosphor icons library
          </a>
          , is a flexible icon family for interfaces, diagrams, presentations — whatever, really, is free and
          open-source, licensed under MIT.
        </p>
        <span class="text-xs text-secondary">
          (Below, you're seeing only a few examples of the icons that the library provides)
        </span>
      </div>
      <bq-button class="m-be-xxl" appearance="primary" href="https://phosphoricons.com/" target="_blank">
        <bq-icon name="binoculars-fill" slot="prefix"></bq-icon>
        Explore all the icons available
        <bq-icon class="ms-m" name="caret-right" slot="suffix"></bq-icon>
      </bq-button>
      <!-- Warning block -->
      <bq-alert class="m-be-l" type="warning" disable-close open>
        <bq-icon name="warning-fill" slot="icon"></bq-icon>
        Please notice
        <span slot="body">
          The SVG icons will be flipped horizontally when the <code>dir="rtl"</code> attribute is used.
        </span>
      </bq-alert>
      <!-- Icons -->
      <div
        class="icon-grid grid grid-cols-[repeat(auto-fill,_minmax(75px,_1fr))] gap-l gap-x-m max-bs-auto max-is-auto"
      >
        ${K(["align-left","align-right","arrow-circle-left","arrow-circle-right","arrow-elbow-left","arrow-elbow-right","arrow-square-left","arrow-square-right","arrows-horizontal","arrows-vertical","battery-charging","book","bookmark-simple","car","clipboard-text","cloud-arrow-down","cloud-arrow-up","chart-line-up","chart-line","chart-pie-slice","chart-pie","chat","folder-open","git-commit","git-merge","git-pull-request","hard-drives","hash","hash-straight","layout","list-bullets"],l=>l,l=>I`
            <div class="group flex flex-col items-stretch text-center outline-0" role="button" tabindex="0">
              <div
                class="border flex w-full justify-center rounded-m border-s border-solid border-primary transition-[shadow,transform] p-b-m p-i-0 m-be-s group-hover:scale-125 group-hover:shadow-l"
              >
                ${T({...e,name:l})}
              </div>
              <span class="text-s leading-regular text-primary">${l}</span>
            </div>
          `)}
      </div>
    `,parameters:{chromatic:{disableSnapshot:!0}}};var S,M,N;w.parameters={...w.parameters,docs:{...(S=w.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Template,
  args: {
    name: 'bell-ringing'
  }
}`,...(N=(M=w.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var P,U,D;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Custom icon',
  render: Template,
  args: {
    size: 256,
    src: './assets/wallet.svg'
  }
}`,...(D=(U=y.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var O,W,A;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    // List of icons to show, these are just a few examples of the icons available in the library
    const ICONS = ['align-left', 'align-right', 'arrow-circle-left', 'arrow-circle-right', 'arrow-elbow-left', 'arrow-elbow-right', 'arrow-square-left', 'arrow-square-right', 'arrows-horizontal', 'arrows-vertical', 'battery-charging', 'book', 'bookmark-simple', 'car', 'clipboard-text', 'cloud-arrow-down', 'cloud-arrow-up', 'chart-line-up', 'chart-line', 'chart-pie-slice', 'chart-pie', 'chat', 'folder-open', 'git-commit', 'git-merge', 'git-pull-request', 'hard-drives', 'hash', 'hash-straight', 'layout', 'list-bullets'];
    return html\`
      <style>
        bq-button::part(button) {
          text-decoration: none;
        }
      </style>
      <div class="text-text-primary m-be-xl">
        <h1 class="text-xl font-bold">We didn't reinvent the wheel</h1>
        <p class="m-bs-xs">
          BEEQ icons are based on
          <a
            class="bq-link"
            href="https://phosphoricons.com/"
            target="_blank"
            title="Phosphor icons"
            rel="noreferrer noopener"
          >
            Phosphor icons library
          </a>
          , is a flexible icon family for interfaces, diagrams, presentations — whatever, really, is free and
          open-source, licensed under MIT.
        </p>
        <span class="text-xs text-secondary">
          (Below, you're seeing only a few examples of the icons that the library provides)
        </span>
      </div>
      <bq-button class="m-be-xxl" appearance="primary" href="https://phosphoricons.com/" target="_blank">
        <bq-icon name="binoculars-fill" slot="prefix"></bq-icon>
        Explore all the icons available
        <bq-icon class="ms-m" name="caret-right" slot="suffix"></bq-icon>
      </bq-button>
      <!-- Warning block -->
      <bq-alert class="m-be-l" type="warning" disable-close open>
        <bq-icon name="warning-fill" slot="icon"></bq-icon>
        Please notice
        <span slot="body">
          The SVG icons will be flipped horizontally when the <code>dir="rtl"</code> attribute is used.
        </span>
      </bq-alert>
      <!-- Icons -->
      <div
        class="icon-grid grid grid-cols-[repeat(auto-fill,_minmax(75px,_1fr))] gap-l gap-x-m max-bs-auto max-is-auto"
      >
        \${repeat(ICONS, icon => icon, icon => html\`
            <div class="group flex flex-col items-stretch text-center outline-0" role="button" tabindex="0">
              <div
                class="border flex w-full justify-center rounded-m border-s border-solid border-primary transition-[shadow,transform] p-b-m p-i-0 m-be-s group-hover:scale-125 group-hover:shadow-l"
              >
                \${Template({
      ...args,
      name: icon
    })}
              </div>
              <span class="text-s leading-regular text-primary">\${icon}</span>
            </div>
          \`)}
      </div>
    \`;
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(A=(W=v.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};const pe=["Default","Custom","ExploreIcons"];export{y as Custom,w as Default,v as ExploreIcons,pe as __namedExportsOrder,de as default};
