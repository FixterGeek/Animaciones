import{r as t,l as y}from"./chunk-D52XG6IA-Bgsi9VY-.js";import{P as $,u as S,L as b}from"./proxy-DZSbQmR_.js";import{M as A,u as z,a as D}from"./MainThreadAnimation-DOUlsoPE.js";class K extends t.Component{getSnapshotBeforeUpdate(l){const e=this.props.childRef.current;if(e&&l.isPresent&&!this.props.isPresent){const n=this.props.sizeRef.current;n.height=e.offsetHeight||0,n.width=e.offsetWidth||0,n.top=e.offsetTop,n.left=e.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function T({children:i,isPresent:l}){const e=t.useId(),n=t.useRef(null),C=t.useRef({width:0,height:0,top:0,left:0}),{nonce:a}=t.useContext(A);return t.useInsertionEffect(()=>{const{width:f,height:o,top:h,left:s}=C.current;if(l||!n.current||!f||!o)return;n.current.dataset.motionPopId=e;const c=document.createElement("style");return a&&(c.nonce=a),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${e}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${o}px !important;
            top: ${h}px !important;
            left: ${s}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[l]),y.jsx(K,{isPresent:l,childRef:n,sizeRef:C,children:t.cloneElement(i,{ref:n})})}const U=({children:i,initial:l,isPresent:e,onExitComplete:n,custom:C,presenceAffectsLayout:a,mode:f})=>{const o=z(B),h=t.useId(),s=t.useCallback(d=>{o.set(d,!0);for(const x of o.values())if(!x)return;n&&n()},[o,n]),c=t.useMemo(()=>({id:h,initial:l,isPresent:e,custom:C,onExitComplete:s,register:d=>(o.set(d,!1),()=>o.delete(d))}),a?[Math.random(),s]:[e,s]);return t.useMemo(()=>{o.forEach((d,x)=>o.set(x,!1))},[e]),t.useEffect(()=>{!e&&!o.size&&n&&n()},[e]),f==="popLayout"&&(i=y.jsx(T,{isPresent:e,children:i})),y.jsx($.Provider,{value:c,children:i})};function B(){return new Map}const R=i=>i.key||"";function j(i){const l=[];return t.Children.forEach(i,e=>{t.isValidElement(e)&&l.push(e)}),l}const O=({children:i,custom:l,initial:e=!0,onExitComplete:n,presenceAffectsLayout:C=!0,mode:a="sync",propagate:f=!1})=>{const[o,h]=S(f),s=t.useMemo(()=>j(i),[i]),c=f&&!o?[]:s.map(R),d=t.useRef(!0),x=t.useRef(s),g=z(()=>new Map),[k,I]=t.useState(s),[p,P]=t.useState(s);D(()=>{d.current=!1,x.current=s;for(let u=0;u<p.length;u++){const r=R(p[u]);c.includes(r)?g.delete(r):g.get(r)!==!0&&g.set(r,!1)}},[p,c.length,c.join("-")]);const v=[];if(s!==k){let u=[...s];for(let r=0;r<p.length;r++){const m=p[r],M=R(m);c.includes(M)||(u.splice(r,0,m),v.push(m))}a==="wait"&&v.length&&(u=v),P(j(u)),I(s);return}const{forceRender:E}=t.useContext(b);return y.jsx(y.Fragment,{children:p.map(u=>{const r=R(u),m=f&&!o?!1:s===p||c.includes(r),M=()=>{if(g.has(r))g.set(r,!0);else return;let w=!0;g.forEach(L=>{L||(w=!1)}),w&&(E==null||E(),P(x.current),f&&(h==null||h()),n&&n())};return y.jsx(U,{isPresent:m,initial:!d.current||e?void 0:!1,custom:m?void 0:l,presenceAffectsLayout:C,mode:a,onExitComplete:m?void 0:M,children:u},r)})})};export{O as A};
