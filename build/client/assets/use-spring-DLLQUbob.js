import{r}from"./chunk-D52XG6IA-Bgsi9VY-.js";import{M as g,i as f,f as y,a as S,j as V,l as d}from"./MainThreadAnimation-DOUlsoPE.js";import{u as x}from"./use-motion-value-2eO1Wuu3.js";function m(t){return typeof t=="number"?t:parseFloat(t)}function C(t,o={}){const{isStatic:p}=r.useContext(g),a=r.useRef(null),e=x(f(t)?m(t.get()):t),s=r.useRef(e.get()),i=r.useRef(()=>{}),l=()=>{const n=a.current;n&&n.time===0&&n.sample(V.delta),u(),a.current=d({keyframes:[e.get(),s.current],velocity:e.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...o,onUpdate:i.current})},u=()=>{a.current&&a.current.stop()};return r.useInsertionEffect(()=>e.attach((n,c)=>p?c(n):(s.current=n,i.current=c,y.update(l),e.get()),u),[JSON.stringify(o)]),S(()=>{if(f(t))return t.on("change",n=>e.set(m(n)))},[e]),e}export{C as u};
