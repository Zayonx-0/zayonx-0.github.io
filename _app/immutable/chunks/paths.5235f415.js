import{n as c,s as p}from"./scheduler.7a274a43.js";const e=[];function q(o,l=c){let n;const i=new Set;function b(t){if(p(o,t)&&(o=t,n)){const r=!e.length;for(const s of i)s[1](),e.push(s,o);if(r){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){b(t(o))}function _(t,r=c){const s=[t,r];return i.add(s),i.size===1&&(n=l(b,f)||c),t(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:b,update:f,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_qbbspo)==null?void 0:u.base)??"";var a;const d=((a=globalThis.__sveltekit_qbbspo)==null?void 0:a.assets)??h;export{d as a,h as b,q as w};
