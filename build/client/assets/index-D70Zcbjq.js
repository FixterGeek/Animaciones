import{r as o}from"./chunk-D52XG6IA-Bgsi9VY-.js";var d={exports:{}},i={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=o;function s(e){var r="https://react.dev/errors/"+e;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var n={d:{f:a,r:function(){throw Error(s(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},v=Symbol.for("react.portal");function m(e,r,t){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:v,key:c==null?null:""+c,children:e,containerInfo:r,implementation:t}}var f=_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(e,r){if(e==="font")return"";if(typeof r=="string")return r==="use-credentials"?r:""}i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=n;i.createPortal=function(e,r){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)throw Error(s(299));return m(e,r,null,t)};i.flushSync=function(e){var r=f.T,t=n.p;try{if(f.T=null,n.p=2,e)return e()}finally{f.T=r,n.p=t,n.d.f()}};i.preconnect=function(e,r){typeof e=="string"&&(r?(r=r.crossOrigin,r=typeof r=="string"?r==="use-credentials"?r:"":void 0):r=null,n.d.C(e,r))};i.prefetchDNS=function(e){typeof e=="string"&&n.d.D(e)};i.preinit=function(e,r){if(typeof e=="string"&&r&&typeof r.as=="string"){var t=r.as,c=g(t,r.crossOrigin),u=typeof r.integrity=="string"?r.integrity:void 0,y=typeof r.fetchPriority=="string"?r.fetchPriority:void 0;t==="style"?n.d.S(e,typeof r.precedence=="string"?r.precedence:void 0,{crossOrigin:c,integrity:u,fetchPriority:y}):t==="script"&&n.d.X(e,{crossOrigin:c,integrity:u,fetchPriority:y,nonce:typeof r.nonce=="string"?r.nonce:void 0})}};i.preinitModule=function(e,r){if(typeof e=="string")if(typeof r=="object"&&r!==null){if(r.as==null||r.as==="script"){var t=g(r.as,r.crossOrigin);n.d.M(e,{crossOrigin:t,integrity:typeof r.integrity=="string"?r.integrity:void 0,nonce:typeof r.nonce=="string"?r.nonce:void 0})}}else r==null&&n.d.M(e)};i.preload=function(e,r){if(typeof e=="string"&&typeof r=="object"&&r!==null&&typeof r.as=="string"){var t=r.as,c=g(t,r.crossOrigin);n.d.L(e,t,{crossOrigin:c,integrity:typeof r.integrity=="string"?r.integrity:void 0,nonce:typeof r.nonce=="string"?r.nonce:void 0,type:typeof r.type=="string"?r.type:void 0,fetchPriority:typeof r.fetchPriority=="string"?r.fetchPriority:void 0,referrerPolicy:typeof r.referrerPolicy=="string"?r.referrerPolicy:void 0,imageSrcSet:typeof r.imageSrcSet=="string"?r.imageSrcSet:void 0,imageSizes:typeof r.imageSizes=="string"?r.imageSizes:void 0,media:typeof r.media=="string"?r.media:void 0})}};i.preloadModule=function(e,r){if(typeof e=="string")if(r){var t=g(r.as,r.crossOrigin);n.d.m(e,{as:typeof r.as=="string"&&r.as!=="script"?r.as:void 0,crossOrigin:t,integrity:typeof r.integrity=="string"?r.integrity:void 0})}else n.d.m(e)};i.requestFormReset=function(e){n.d.r(e)};i.unstable_batchedUpdates=function(e,r){return e(r)};i.useFormState=function(e,r,t){return f.H.useFormState(e,r,t)};i.useFormStatus=function(){return f.H.useHostTransitionStatus()};i.version="19.0.0";function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(e){console.error(e)}}l(),d.exports=i;var S=d.exports;export{S as r};
