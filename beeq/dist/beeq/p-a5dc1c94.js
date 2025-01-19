/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
const t=async(t,n=null)=>{t.classList.remove("hidden");await a("enter",t,n)};const n=async(t,n=null)=>{await a("leave",t,n);t.classList.add("hidden")};const s=async(s,a=null)=>{if(s.classList.contains("hidden")){await t(s,a)}else{await n(s,a)}};const a=async(t,n,s)=>{const{dataset:a}=n;const d=s?`${s}-${t}`:t;const l=`transition${t.charAt(0).toUpperCase()+t.slice(1)}`;const w=e(a,l,d);const $=e(a,`${l}Start`,`${d}-start`);const m=e(a,`${l}End`,`${d}-end`);o(n,w);o(n,$);await i();c(n,$);o(n,m);await r(n);c(n,m);c(n,w)};const e=(t,n,s)=>t[n]?t[n].split(" "):[s];const o=(t,n)=>{t.classList.add(...n)};const c=(t,n)=>{t.classList.remove(...n)};const i=()=>new Promise((t=>{requestAnimationFrame((()=>{requestAnimationFrame((()=>t()))}))}));const r=t=>Promise.all(t.getAnimations().map((t=>t.finished)));export{t as e,n as l,s as t};
//# sourceMappingURL=p-a5dc1c94.js.map