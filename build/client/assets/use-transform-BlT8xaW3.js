import{a as l,c as m,f as p,d,o as c,u as y}from"./MainThreadAnimation-DOUlsoPE.js";import{u as h}from"./use-motion-value-2eO1Wuu3.js";function f(t,e){const n=h(e()),r=()=>n.set(e());return r(),l(()=>{const o=()=>p.preRender(r,!1,!0),s=t.map(u=>u.on("change",o));return()=>{s.forEach(u=>u()),m(r)}}),n}const V=t=>t&&typeof t=="object"&&t.mix,x=t=>V(t)?t.mix:void 0;function A(...t){const e=!Array.isArray(t[0]),n=e?0:-1,r=t[0+n],o=t[1+n],s=t[2+n],u=t[3+n],a=d(o,s,{mixer:x(s[0]),...u});return e?a(r):a}function C(t){c.current=[],t();const e=f(c.current,t);return c.current=void 0,e}function g(t,e,n,r){if(typeof t=="function")return C(t);const o=typeof e=="function"?e:A(e,n,r);return Array.isArray(t)?i(t,o):i([t],([s])=>o(s))}function i(t,e){const n=y(()=>[]);return f(t,()=>{n.length=0;const r=t.length;for(let o=0;o<r;o++)n[o]=t[o].get();return e(n)})}export{g as a,f as u};
