/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import"./p-477fb863.js";import{i as t}from"./p-07b82e50.js";let n;const s="data-beeq";const r="svg";const c=t=>{n=t};const o=(t="")=>{if(!n){const t=e();const n=t?null:u();const o=t||n;if(o){const n=t?o.getAttribute(s):i(o);c(`${n}/${r}`)}else{c(`./${r}`)}}const o=t?`/${t.replace(/^\//,"")}`:"";return n.replace(/\/$/,"")+o};const e=()=>{if(!t())return null;return document.querySelector(`script[${s}]`)};const u=()=>{if(!t())return null;return document.querySelector(`script[src*="beeq"]`)};const i=n=>{if(!t())return"";const s=n.getAttribute("src");return s?s.substring(0,s.lastIndexOf("/")):""};export{o as g,c as s};
//# sourceMappingURL=p-06fd27b5.js.map