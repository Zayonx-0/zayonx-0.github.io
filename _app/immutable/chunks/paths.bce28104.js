import{n as c,s as p}from"./scheduler.7a274a43.js";const e=[];function q(n,a=c){let i;const o=new Set;function b(t){if(p(n,t)&&(n=t,i)){const r=!e.length;for(const s of o)s[1](),e.push(s,n);if(r){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){b(t(n))}function _(t,r=c){const s=[t,r];return o.add(s),o.size===1&&(i=a(b,f)||c),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:b,update:f,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_bqtlbp)==null?void 0:u.base)??"";var l;const d=((l=globalThis.__sveltekit_bqtlbp)==null?void 0:l.assets)??h;export{d as a,h as b,q as w};
