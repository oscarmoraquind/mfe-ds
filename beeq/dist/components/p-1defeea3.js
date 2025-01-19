/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import{i as t}from"./p-99829fc7.js";const e=(t,e,...n)=>{const s=()=>t(...n);if(e===0){const t=setTimeout(s,e);return()=>clearTimeout(t)}else{let t;const n=performance.now();const o=()=>cancelAnimationFrame(t);const c=r=>{const i=r-n;o();if(i<e){t=requestAnimationFrame(c)}else{s()}};t=requestAnimationFrame(c);return o}};const n=(n,s=0,o=false)=>{let c;function r(...r){c?.();const i=this;function a(t,e,...n){t.apply(e,n)}if(o&&t(c)){n.apply(i,r)}c=e(a,s,n,i,...r)}return Object.assign(r,{cancel:()=>{c?.()}})};export{n as d,e as s};
//# sourceMappingURL=p-1defeea3.js.map