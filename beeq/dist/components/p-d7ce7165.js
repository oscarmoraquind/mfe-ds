/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
function t(t){return t.nodeType===Node.ELEMENT_NODE}function n(t){return t.nodeType===Node.TEXT_NODE}function e(r,f=1,u=Infinity){let o="";if(f<=u){if(n(r)){o+=r.textContent}else if(t(r)&&r.hasChildNodes()){const t=f+1;r.childNodes.forEach((n=>{o+=e(n,t,u)}))}}return o}function r(e){const r=e.assignedNodes({flatten:true});let f="";[...r].forEach((e=>{if(t(e)){f+=e.outerHTML}if(n(e)){f+=e.textContent}}));return f}function f(t,n){const r=t.assignedNodes({flatten:true});const{recurse:f=false,maxLevel:u}=n??{};let o="";[...r].forEach((t=>{o+=e(t,1,f?u:1)}));return o.trim()}function u(t,n){return Array.from(t.querySelectorAll("[slot]")).filter((t=>t.slot===n)).length>0}function o(t,n){const e=n?`[name='${n}']`:"";const r=t.querySelector(`slot${e}`)?.assignedElements({flatten:true});if(!r||!Array.isArray(r))return false;return!!r.length}export{f as a,o as b,r as g,u as h};
//# sourceMappingURL=p-d7ce7165.js.map