/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
var r=Object.defineProperty;var e=(e,t)=>{for(var a in t)r(e,a,{get:t[a],enumerable:true})};var t={};e(t,{err:()=>n,map:()=>u,ok:()=>a,unwrap:()=>s,unwrapErr:()=>i});var a=r=>({isOk:true,isErr:false,value:r});var n=r=>({isOk:false,isErr:true,value:r});function u(r,e){if(r.isOk){const t=e(r.value);if(t instanceof Promise){return t.then((r=>a(r)))}else{return a(t)}}if(r.isErr){const e=r.value;return n(e)}throw"should never get here"}var s=r=>{if(r.isOk){return r.value}else{throw r.value}};var i=r=>{if(r.isErr){return r.value}else{throw r.value}};
//# sourceMappingURL=p-40b61159.js.map