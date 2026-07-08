(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Zl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bx={exports:{}},Pu={},Rx={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Co=Symbol.for("react.element"),OS=Symbol.for("react.portal"),zS=Symbol.for("react.fragment"),BS=Symbol.for("react.strict_mode"),VS=Symbol.for("react.profiler"),HS=Symbol.for("react.provider"),GS=Symbol.for("react.context"),WS=Symbol.for("react.forward_ref"),jS=Symbol.for("react.suspense"),XS=Symbol.for("react.memo"),qS=Symbol.for("react.lazy"),hm=Symbol.iterator;function YS(t){return t===null||typeof t!="object"?null:(t=hm&&t[hm]||t["@@iterator"],typeof t=="function"?t:null)}var Px={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ix=Object.assign,Lx={};function ua(t,e,n){this.props=t,this.context=e,this.refs=Lx,this.updater=n||Px}ua.prototype.isReactComponent={};ua.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ua.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dx(){}Dx.prototype=ua.prototype;function Rd(t,e,n){this.props=t,this.context=e,this.refs=Lx,this.updater=n||Px}var Pd=Rd.prototype=new Dx;Pd.constructor=Rd;Ix(Pd,ua.prototype);Pd.isPureReactComponent=!0;var dm=Array.isArray,Nx=Object.prototype.hasOwnProperty,Id={current:null},kx={key:!0,ref:!0,__self:!0,__source:!0};function Fx(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Nx.call(e,i)&&!kx.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Co,type:t,key:s,ref:a,props:r,_owner:Id.current}}function $S(t,e){return{$$typeof:Co,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ld(t){return typeof t=="object"&&t!==null&&t.$$typeof===Co}function KS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pm=/\/+/g;function sc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?KS(""+t.key):e.toString(36)}function Il(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Co:case OS:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+sc(a,0):i,dm(r)?(n="",t!=null&&(n=t.replace(pm,"$&/")+"/"),Il(r,e,n,"",function(u){return u})):r!=null&&(Ld(r)&&(r=$S(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(pm,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",dm(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+sc(s,o);a+=Il(s,e,n,l,r)}else if(l=YS(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+sc(s,o++),a+=Il(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Bo(t,e,n){if(t==null)return t;var i=[],r=0;return Il(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ZS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},Ll={transition:null},QS={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:Ll,ReactCurrentOwner:Id};function Ux(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Bo,forEach:function(t,e,n){Bo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Bo(t,function(){e++}),e},toArray:function(t){return Bo(t,function(e){return e})||[]},only:function(t){if(!Ld(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=ua;qe.Fragment=zS;qe.Profiler=VS;qe.PureComponent=Rd;qe.StrictMode=BS;qe.Suspense=jS;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QS;qe.act=Ux;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ix({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Id.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Nx.call(e,l)&&!kx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Co,type:t.type,key:r,ref:s,props:i,_owner:a}};qe.createContext=function(t){return t={$$typeof:GS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:HS,_context:t},t.Consumer=t};qe.createElement=Fx;qe.createFactory=function(t){var e=Fx.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:WS,render:t}};qe.isValidElement=Ld;qe.lazy=function(t){return{$$typeof:qS,_payload:{_status:-1,_result:t},_init:ZS}};qe.memo=function(t,e){return{$$typeof:XS,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Ll.transition;Ll.transition={};try{t()}finally{Ll.transition=e}};qe.unstable_act=Ux;qe.useCallback=function(t,e){return pn.current.useCallback(t,e)};qe.useContext=function(t){return pn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return pn.current.useEffect(t,e)};qe.useId=function(){return pn.current.useId()};qe.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return pn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};qe.useRef=function(t){return pn.current.useRef(t)};qe.useState=function(t){return pn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return pn.current.useTransition()};qe.version="18.3.1";Rx.exports=qe;var dt=Rx.exports;const JS=bd(dt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eE=dt,tE=Symbol.for("react.element"),nE=Symbol.for("react.fragment"),iE=Object.prototype.hasOwnProperty,rE=eE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sE={key:!0,ref:!0,__self:!0,__source:!0};function Ox(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)iE.call(e,i)&&!sE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:tE,type:t,key:s,ref:a,props:r,_owner:rE.current}}Pu.Fragment=nE;Pu.jsx=Ox;Pu.jsxs=Ox;bx.exports=Pu;var D=bx.exports,Rf={},zx={exports:{}},Nn={},Bx={exports:{}},Vx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,Z){var A=j.length;j.push(Z);e:for(;0<A;){var re=A-1>>>1,se=j[re];if(0<r(se,Z))j[re]=Z,j[A]=se,A=re;else break e}}function n(j){return j.length===0?null:j[0]}function i(j){if(j.length===0)return null;var Z=j[0],A=j.pop();if(A!==Z){j[0]=A;e:for(var re=0,se=j.length,L=se>>>1;re<L;){var Fe=2*(re+1)-1,Ge=j[Fe],Q=Fe+1,ne=j[Q];if(0>r(Ge,A))Q<se&&0>r(ne,Ge)?(j[re]=ne,j[Q]=A,re=Q):(j[re]=Ge,j[Fe]=A,re=Fe);else if(Q<se&&0>r(ne,A))j[re]=ne,j[Q]=A,re=Q;else break e}}return Z}function r(j,Z){var A=j.sortIndex-Z.sortIndex;return A!==0?A:j.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],f=1,c=null,h=3,d=!1,m=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(j){for(var Z=n(u);Z!==null;){if(Z.callback===null)i(u);else if(Z.startTime<=j)i(u),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(u)}}function E(j){if(v=!1,_(j),!m)if(n(l)!==null)m=!0,X(C);else{var Z=n(u);Z!==null&&V(E,Z.startTime-j)}}function C(j,Z){m=!1,v&&(v=!1,p(y),y=-1),d=!0;var A=h;try{for(_(Z),c=n(l);c!==null&&(!(c.expirationTime>Z)||j&&!P());){var re=c.callback;if(typeof re=="function"){c.callback=null,h=c.priorityLevel;var se=re(c.expirationTime<=Z);Z=t.unstable_now(),typeof se=="function"?c.callback=se:c===n(l)&&i(l),_(Z)}else i(l);c=n(l)}if(c!==null)var L=!0;else{var Fe=n(u);Fe!==null&&V(E,Fe.startTime-Z),L=!1}return L}finally{c=null,h=A,d=!1}}var M=!1,b=null,y=-1,T=5,R=-1;function P(){return!(t.unstable_now()-R<T)}function F(){if(b!==null){var j=t.unstable_now();R=j;var Z=!0;try{Z=b(!0,j)}finally{Z?H():(M=!1,b=null)}}else M=!1}var H;if(typeof g=="function")H=function(){g(F)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,z=Y.port2;Y.port1.onmessage=F,H=function(){z.postMessage(null)}}else H=function(){x(F,0)};function X(j){b=j,M||(M=!0,H())}function V(j,Z){y=x(function(){j(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){m||d||(m=!0,X(C))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(j){switch(h){case 1:case 2:case 3:var Z=3;break;default:Z=h}var A=h;h=Z;try{return j()}finally{h=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,Z){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var A=h;h=j;try{return Z()}finally{h=A}},t.unstable_scheduleCallback=function(j,Z,A){var re=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?re+A:re):A=re,j){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=A+se,j={id:f++,callback:Z,priorityLevel:j,startTime:A,expirationTime:se,sortIndex:-1},A>re?(j.sortIndex=A,e(u,j),n(l)===null&&j===n(u)&&(v?(p(y),y=-1):v=!0,V(E,A-re))):(j.sortIndex=se,e(l,j),m||d||(m=!0,X(C))),j},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(j){var Z=h;return function(){var A=h;h=Z;try{return j.apply(this,arguments)}finally{h=A}}}})(Vx);Bx.exports=Vx;var aE=Bx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oE=dt,Dn=aE;function le(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hx=new Set,no={};function as(t,e){Ks(t,e),Ks(t+"Capture",e)}function Ks(t,e){for(no[t]=e,t=0;t<e.length;t++)Hx.add(e[t])}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pf=Object.prototype.hasOwnProperty,lE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mm={},gm={};function uE(t){return Pf.call(gm,t)?!0:Pf.call(mm,t)?!1:lE.test(t)?gm[t]=!0:(mm[t]=!0,!1)}function cE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fE(t,e,n,i){if(e===null||typeof e>"u"||cE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Zt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Zt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Zt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Zt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Zt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Zt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Zt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Zt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Zt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dd=/[\-:]([a-z])/g;function Nd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dd,Nd);Zt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dd,Nd);Zt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dd,Nd);Zt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Zt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Zt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function kd(t,e,n,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fE(e,n,r,i)&&(n=null),i||r===null?uE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ki=oE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vo=Symbol.for("react.element"),Rs=Symbol.for("react.portal"),Ps=Symbol.for("react.fragment"),Fd=Symbol.for("react.strict_mode"),If=Symbol.for("react.profiler"),Gx=Symbol.for("react.provider"),Wx=Symbol.for("react.context"),Ud=Symbol.for("react.forward_ref"),Lf=Symbol.for("react.suspense"),Df=Symbol.for("react.suspense_list"),Od=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),jx=Symbol.for("react.offscreen"),xm=Symbol.iterator;function _a(t){return t===null||typeof t!="object"?null:(t=xm&&t[xm]||t["@@iterator"],typeof t=="function"?t:null)}var At=Object.assign,ac;function ka(t){if(ac===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ac=e&&e[1]||""}return`
`+ac+t}var oc=!1;function lc(t,e){if(!t||oc)return"";oc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{oc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ka(t):""}function hE(t){switch(t.tag){case 5:return ka(t.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 2:case 15:return t=lc(t.type,!1),t;case 11:return t=lc(t.type.render,!1),t;case 1:return t=lc(t.type,!0),t;default:return""}}function Nf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ps:return"Fragment";case Rs:return"Portal";case If:return"Profiler";case Fd:return"StrictMode";case Lf:return"Suspense";case Df:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wx:return(t.displayName||"Context")+".Consumer";case Gx:return(t._context.displayName||"Context")+".Provider";case Ud:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Od:return e=t.displayName||null,e!==null?e:Nf(t.type)||"Memo";case lr:e=t._payload,t=t._init;try{return Nf(t(e))}catch{}}return null}function dE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nf(e);case 8:return e===Fd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pE(t){var e=Xx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ho(t){t._valueTracker||(t._valueTracker=pE(t))}function qx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Xx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kf(t,e){var n=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _m(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Yx(t,e){e=e.checked,e!=null&&kd(t,"checked",e,!1)}function Ff(t,e){Yx(t,e);var n=wr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uf(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uf(t,e,n){(e!=="number"||Ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fa=Array.isArray;function Vs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Of(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ym(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(le(92));if(Fa(n)){if(1<n.length)throw Error(le(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function $x(t,e){var n=wr(e.value),i=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Sm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Kx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Kx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Go,Zx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Go=Go||document.createElement("div"),Go.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Go.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function io(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mE=["Webkit","ms","Moz","O"];Object.keys(Ha).forEach(function(t){mE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ha[e]=Ha[t]})});function Qx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ha.hasOwnProperty(t)&&Ha[t]?(""+e).trim():e+"px"}function Jx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Qx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var gE=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bf(t,e){if(e){if(gE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function Vf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hf=null;function zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gf=null,Hs=null,Gs=null;function Em(t){if(t=Po(t)){if(typeof Gf!="function")throw Error(le(280));var e=t.stateNode;e&&(e=ku(e),Gf(t.stateNode,t.type,e))}}function e_(t){Hs?Gs?Gs.push(t):Gs=[t]:Hs=t}function t_(){if(Hs){var t=Hs,e=Gs;if(Gs=Hs=null,Em(t),e)for(t=0;t<e.length;t++)Em(e[t])}}function n_(t,e){return t(e)}function i_(){}var uc=!1;function r_(t,e,n){if(uc)return t(e,n);uc=!0;try{return n_(t,e,n)}finally{uc=!1,(Hs!==null||Gs!==null)&&(i_(),t_())}}function ro(t,e){var n=t.stateNode;if(n===null)return null;var i=ku(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(le(231,e,typeof n));return n}var Wf=!1;if(Wi)try{var va={};Object.defineProperty(va,"passive",{get:function(){Wf=!0}}),window.addEventListener("test",va,va),window.removeEventListener("test",va,va)}catch{Wf=!1}function xE(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Ga=!1,Jl=null,eu=!1,jf=null,_E={onError:function(t){Ga=!0,Jl=t}};function vE(t,e,n,i,r,s,a,o,l){Ga=!1,Jl=null,xE.apply(_E,arguments)}function yE(t,e,n,i,r,s,a,o,l){if(vE.apply(this,arguments),Ga){if(Ga){var u=Jl;Ga=!1,Jl=null}else throw Error(le(198));eu||(eu=!0,jf=u)}}function os(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function s_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mm(t){if(os(t)!==t)throw Error(le(188))}function SE(t){var e=t.alternate;if(!e){if(e=os(t),e===null)throw Error(le(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Mm(r),t;if(s===i)return Mm(r),e;s=s.sibling}throw Error(le(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(le(189))}}if(n.alternate!==i)throw Error(le(190))}if(n.tag!==3)throw Error(le(188));return n.stateNode.current===n?t:e}function a_(t){return t=SE(t),t!==null?o_(t):null}function o_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=o_(t);if(e!==null)return e;t=t.sibling}return null}var l_=Dn.unstable_scheduleCallback,wm=Dn.unstable_cancelCallback,EE=Dn.unstable_shouldYield,ME=Dn.unstable_requestPaint,It=Dn.unstable_now,wE=Dn.unstable_getCurrentPriorityLevel,Bd=Dn.unstable_ImmediatePriority,u_=Dn.unstable_UserBlockingPriority,tu=Dn.unstable_NormalPriority,TE=Dn.unstable_LowPriority,c_=Dn.unstable_IdlePriority,Iu=null,Ei=null;function AE(t){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(Iu,t,void 0,(t.current.flags&128)===128)}catch{}}var si=Math.clz32?Math.clz32:RE,CE=Math.log,bE=Math.LN2;function RE(t){return t>>>=0,t===0?32:31-(CE(t)/bE|0)|0}var Wo=64,jo=4194304;function Ua(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ua(o):(s&=a,s!==0&&(i=Ua(s)))}else a=n&~r,a!==0?i=Ua(a):s!==0&&(i=Ua(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-si(e),r=1<<n,i|=t[n],e&=~r;return i}function PE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-si(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=PE(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Xf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function f_(){var t=Wo;return Wo<<=1,!(Wo&4194240)&&(Wo=64),t}function cc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-si(e),t[e]=n}function LE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-si(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Vd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-si(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function h_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var d_,Hd,p_,m_,g_,qf=!1,Xo=[],gr=null,xr=null,_r=null,so=new Map,ao=new Map,cr=[],DE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tm(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":so.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(e.pointerId)}}function ya(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Po(e),e!==null&&Hd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function NE(t,e,n,i,r){switch(e){case"focusin":return gr=ya(gr,t,e,n,i,r),!0;case"dragenter":return xr=ya(xr,t,e,n,i,r),!0;case"mouseover":return _r=ya(_r,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return so.set(s,ya(so.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ao.set(s,ya(ao.get(s)||null,t,e,n,i,r)),!0}return!1}function x_(t){var e=Xr(t.target);if(e!==null){var n=os(e);if(n!==null){if(e=n.tag,e===13){if(e=s_(n),e!==null){t.blockedOn=e,g_(t.priority,function(){p_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Hf=i,n.target.dispatchEvent(i),Hf=null}else return e=Po(n),e!==null&&Hd(e),t.blockedOn=n,!1;e.shift()}return!0}function Am(t,e,n){Dl(t)&&n.delete(e)}function kE(){qf=!1,gr!==null&&Dl(gr)&&(gr=null),xr!==null&&Dl(xr)&&(xr=null),_r!==null&&Dl(_r)&&(_r=null),so.forEach(Am),ao.forEach(Am)}function Sa(t,e){t.blockedOn===e&&(t.blockedOn=null,qf||(qf=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,kE)))}function oo(t){function e(r){return Sa(r,t)}if(0<Xo.length){Sa(Xo[0],t);for(var n=1;n<Xo.length;n++){var i=Xo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(gr!==null&&Sa(gr,t),xr!==null&&Sa(xr,t),_r!==null&&Sa(_r,t),so.forEach(e),ao.forEach(e),n=0;n<cr.length;n++)i=cr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)x_(n),n.blockedOn===null&&cr.shift()}var Ws=Ki.ReactCurrentBatchConfig,iu=!0;function FE(t,e,n,i){var r=lt,s=Ws.transition;Ws.transition=null;try{lt=1,Gd(t,e,n,i)}finally{lt=r,Ws.transition=s}}function UE(t,e,n,i){var r=lt,s=Ws.transition;Ws.transition=null;try{lt=4,Gd(t,e,n,i)}finally{lt=r,Ws.transition=s}}function Gd(t,e,n,i){if(iu){var r=Yf(t,e,n,i);if(r===null)yc(t,e,i,ru,n),Tm(t,i);else if(NE(r,t,e,n,i))i.stopPropagation();else if(Tm(t,i),e&4&&-1<DE.indexOf(t)){for(;r!==null;){var s=Po(r);if(s!==null&&d_(s),s=Yf(t,e,n,i),s===null&&yc(t,e,i,ru,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else yc(t,e,i,null,n)}}var ru=null;function Yf(t,e,n,i){if(ru=null,t=zd(i),t=Xr(t),t!==null)if(e=os(t),e===null)t=null;else if(n=e.tag,n===13){if(t=s_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ru=t,null}function __(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wE()){case Bd:return 1;case u_:return 4;case tu:case TE:return 16;case c_:return 536870912;default:return 16}default:return 16}}var dr=null,Wd=null,Nl=null;function v_(){if(Nl)return Nl;var t,e=Wd,n=e.length,i,r="value"in dr?dr.value:dr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Nl=r.slice(t,1<i?1-i:void 0)}function kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qo(){return!0}function Cm(){return!1}function kn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qo:Cm,this.isPropagationStopped=Cm,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),e}var ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jd=kn(ca),Ro=At({},ca,{view:0,detail:0}),OE=kn(Ro),fc,hc,Ea,Lu=At({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ea&&(Ea&&t.type==="mousemove"?(fc=t.screenX-Ea.screenX,hc=t.screenY-Ea.screenY):hc=fc=0,Ea=t),fc)},movementY:function(t){return"movementY"in t?t.movementY:hc}}),bm=kn(Lu),zE=At({},Lu,{dataTransfer:0}),BE=kn(zE),VE=At({},Ro,{relatedTarget:0}),dc=kn(VE),HE=At({},ca,{animationName:0,elapsedTime:0,pseudoElement:0}),GE=kn(HE),WE=At({},ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jE=kn(WE),XE=At({},ca,{data:0}),Rm=kn(XE),qE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},YE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$E={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$E[t])?!!e[t]:!1}function Xd(){return KE}var ZE=At({},Ro,{key:function(t){if(t.key){var e=qE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?YE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xd,charCode:function(t){return t.type==="keypress"?kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),QE=kn(ZE),JE=At({},Lu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pm=kn(JE),eM=At({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xd}),tM=kn(eM),nM=At({},ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),iM=kn(nM),rM=At({},Lu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sM=kn(rM),aM=[9,13,27,32],qd=Wi&&"CompositionEvent"in window,Wa=null;Wi&&"documentMode"in document&&(Wa=document.documentMode);var oM=Wi&&"TextEvent"in window&&!Wa,y_=Wi&&(!qd||Wa&&8<Wa&&11>=Wa),Im=" ",Lm=!1;function S_(t,e){switch(t){case"keyup":return aM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function lM(t,e){switch(t){case"compositionend":return E_(e);case"keypress":return e.which!==32?null:(Lm=!0,Im);case"textInput":return t=e.data,t===Im&&Lm?null:t;default:return null}}function uM(t,e){if(Is)return t==="compositionend"||!qd&&S_(t,e)?(t=v_(),Nl=Wd=dr=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return y_&&e.locale!=="ko"?null:e.data;default:return null}}var cM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cM[t.type]:e==="textarea"}function M_(t,e,n,i){e_(i),e=su(e,"onChange"),0<e.length&&(n=new jd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ja=null,lo=null;function fM(t){N_(t,0)}function Du(t){var e=Ns(t);if(qx(e))return t}function hM(t,e){if(t==="change")return e}var w_=!1;if(Wi){var pc;if(Wi){var mc="oninput"in document;if(!mc){var Nm=document.createElement("div");Nm.setAttribute("oninput","return;"),mc=typeof Nm.oninput=="function"}pc=mc}else pc=!1;w_=pc&&(!document.documentMode||9<document.documentMode)}function km(){ja&&(ja.detachEvent("onpropertychange",T_),lo=ja=null)}function T_(t){if(t.propertyName==="value"&&Du(lo)){var e=[];M_(e,lo,t,zd(t)),r_(fM,e)}}function dM(t,e,n){t==="focusin"?(km(),ja=e,lo=n,ja.attachEvent("onpropertychange",T_)):t==="focusout"&&km()}function pM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Du(lo)}function mM(t,e){if(t==="click")return Du(e)}function gM(t,e){if(t==="input"||t==="change")return Du(e)}function xM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ui=typeof Object.is=="function"?Object.is:xM;function uo(t,e){if(ui(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Pf.call(e,r)||!ui(t[r],e[r]))return!1}return!0}function Fm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Um(t,e){var n=Fm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fm(n)}}function A_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?A_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function C_(){for(var t=window,e=Ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ql(t.document)}return e}function Yd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _M(t){var e=C_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&A_(n.ownerDocument.documentElement,n)){if(i!==null&&Yd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Um(n,s);var a=Um(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vM=Wi&&"documentMode"in document&&11>=document.documentMode,Ls=null,$f=null,Xa=null,Kf=!1;function Om(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kf||Ls==null||Ls!==Ql(i)||(i=Ls,"selectionStart"in i&&Yd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xa&&uo(Xa,i)||(Xa=i,i=su($f,"onSelect"),0<i.length&&(e=new jd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ls)))}function Yo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ds={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},gc={},b_={};Wi&&(b_=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Nu(t){if(gc[t])return gc[t];if(!Ds[t])return t;var e=Ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in b_)return gc[t]=e[n];return t}var R_=Nu("animationend"),P_=Nu("animationiteration"),I_=Nu("animationstart"),L_=Nu("transitionend"),D_=new Map,zm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(t,e){D_.set(t,e),as(e,[t])}for(var xc=0;xc<zm.length;xc++){var _c=zm[xc],yM=_c.toLowerCase(),SM=_c[0].toUpperCase()+_c.slice(1);Cr(yM,"on"+SM)}Cr(R_,"onAnimationEnd");Cr(P_,"onAnimationIteration");Cr(I_,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(L_,"onTransitionEnd");Ks("onMouseEnter",["mouseout","mouseover"]);Ks("onMouseLeave",["mouseout","mouseover"]);Ks("onPointerEnter",["pointerout","pointerover"]);Ks("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oa));function Bm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,yE(i,e,void 0,t),t.currentTarget=null}function N_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Bm(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Bm(r,o,u),s=l}}}if(eu)throw t=jf,eu=!1,jf=null,t}function _t(t,e){var n=e[th];n===void 0&&(n=e[th]=new Set);var i=t+"__bubble";n.has(i)||(k_(e,t,2,!1),n.add(i))}function vc(t,e,n){var i=0;e&&(i|=4),k_(n,t,i,e)}var $o="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[$o]){t[$o]=!0,Hx.forEach(function(n){n!=="selectionchange"&&(EM.has(n)||vc(n,!1,t),vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$o]||(e[$o]=!0,vc("selectionchange",!1,e))}}function k_(t,e,n,i){switch(__(e)){case 1:var r=FE;break;case 4:r=UE;break;default:r=Gd}n=r.bind(null,e,n,t),r=void 0,!Wf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function yc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Xr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}r_(function(){var u=s,f=zd(n),c=[];e:{var h=D_.get(t);if(h!==void 0){var d=jd,m=t;switch(t){case"keypress":if(kl(n)===0)break e;case"keydown":case"keyup":d=QE;break;case"focusin":m="focus",d=dc;break;case"focusout":m="blur",d=dc;break;case"beforeblur":case"afterblur":d=dc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=BE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=tM;break;case R_:case P_:case I_:d=GE;break;case L_:d=iM;break;case"scroll":d=OE;break;case"wheel":d=sM;break;case"copy":case"cut":case"paste":d=jE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Pm}var v=(e&4)!==0,x=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var g=u,_;g!==null;){_=g;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,p!==null&&(E=ro(g,p),E!=null&&v.push(fo(g,E,_)))),x)break;g=g.return}0<v.length&&(h=new d(h,m,null,n,f),c.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",d=t==="mouseout"||t==="pointerout",h&&n!==Hf&&(m=n.relatedTarget||n.fromElement)&&(Xr(m)||m[ji]))break e;if((d||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,d?(m=n.relatedTarget||n.toElement,d=u,m=m?Xr(m):null,m!==null&&(x=os(m),m!==x||m.tag!==5&&m.tag!==6)&&(m=null)):(d=null,m=u),d!==m)){if(v=bm,E="onMouseLeave",p="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=Pm,E="onPointerLeave",p="onPointerEnter",g="pointer"),x=d==null?h:Ns(d),_=m==null?h:Ns(m),h=new v(E,g+"leave",d,n,f),h.target=x,h.relatedTarget=_,E=null,Xr(f)===u&&(v=new v(p,g+"enter",m,n,f),v.target=_,v.relatedTarget=x,E=v),x=E,d&&m)t:{for(v=d,p=m,g=0,_=v;_;_=fs(_))g++;for(_=0,E=p;E;E=fs(E))_++;for(;0<g-_;)v=fs(v),g--;for(;0<_-g;)p=fs(p),_--;for(;g--;){if(v===p||p!==null&&v===p.alternate)break t;v=fs(v),p=fs(p)}v=null}else v=null;d!==null&&Vm(c,h,d,v,!1),m!==null&&x!==null&&Vm(c,x,m,v,!0)}}e:{if(h=u?Ns(u):window,d=h.nodeName&&h.nodeName.toLowerCase(),d==="select"||d==="input"&&h.type==="file")var C=hM;else if(Dm(h))if(w_)C=gM;else{C=pM;var M=dM}else(d=h.nodeName)&&d.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=mM);if(C&&(C=C(t,u))){M_(c,C,n,f);break e}M&&M(t,h,u),t==="focusout"&&(M=h._wrapperState)&&M.controlled&&h.type==="number"&&Uf(h,"number",h.value)}switch(M=u?Ns(u):window,t){case"focusin":(Dm(M)||M.contentEditable==="true")&&(Ls=M,$f=u,Xa=null);break;case"focusout":Xa=$f=Ls=null;break;case"mousedown":Kf=!0;break;case"contextmenu":case"mouseup":case"dragend":Kf=!1,Om(c,n,f);break;case"selectionchange":if(vM)break;case"keydown":case"keyup":Om(c,n,f)}var b;if(qd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Is?S_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(y_&&n.locale!=="ko"&&(Is||y!=="onCompositionStart"?y==="onCompositionEnd"&&Is&&(b=v_()):(dr=f,Wd="value"in dr?dr.value:dr.textContent,Is=!0)),M=su(u,y),0<M.length&&(y=new Rm(y,t,null,n,f),c.push({event:y,listeners:M}),b?y.data=b:(b=E_(n),b!==null&&(y.data=b)))),(b=oM?lM(t,n):uM(t,n))&&(u=su(u,"onBeforeInput"),0<u.length&&(f=new Rm("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=b))}N_(c,e)})}function fo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function su(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ro(t,n),s!=null&&i.unshift(fo(t,s,r)),s=ro(t,e),s!=null&&i.push(fo(t,s,r))),t=t.return}return i}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vm(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=ro(n,s),l!=null&&a.unshift(fo(n,l,o))):r||(l=ro(n,s),l!=null&&a.push(fo(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var MM=/\r\n?/g,wM=/\u0000|\uFFFD/g;function Hm(t){return(typeof t=="string"?t:""+t).replace(MM,`
`).replace(wM,"")}function Ko(t,e,n){if(e=Hm(e),Hm(t)!==e&&n)throw Error(le(425))}function au(){}var Zf=null,Qf=null;function Jf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var eh=typeof setTimeout=="function"?setTimeout:void 0,TM=typeof clearTimeout=="function"?clearTimeout:void 0,Gm=typeof Promise=="function"?Promise:void 0,AM=typeof queueMicrotask=="function"?queueMicrotask:typeof Gm<"u"?function(t){return Gm.resolve(null).then(t).catch(CM)}:eh;function CM(t){setTimeout(function(){throw t})}function Sc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),oo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);oo(e)}function vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fa=Math.random().toString(36).slice(2),_i="__reactFiber$"+fa,ho="__reactProps$"+fa,ji="__reactContainer$"+fa,th="__reactEvents$"+fa,bM="__reactListeners$"+fa,RM="__reactHandles$"+fa;function Xr(t){var e=t[_i];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ji]||n[_i]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wm(t);t!==null;){if(n=t[_i])return n;t=Wm(t)}return e}t=n,n=t.parentNode}return null}function Po(t){return t=t[_i]||t[ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(le(33))}function ku(t){return t[ho]||null}var nh=[],ks=-1;function br(t){return{current:t}}function vt(t){0>ks||(t.current=nh[ks],nh[ks]=null,ks--)}function xt(t,e){ks++,nh[ks]=t.current,t.current=e}var Tr={},on=br(Tr),yn=br(!1),Jr=Tr;function Zs(t,e){var n=t.type.contextTypes;if(!n)return Tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(t){return t=t.childContextTypes,t!=null}function ou(){vt(yn),vt(on)}function jm(t,e,n){if(on.current!==Tr)throw Error(le(168));xt(on,e),xt(yn,n)}function F_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,dE(t)||"Unknown",r));return At({},n,i)}function lu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,Jr=on.current,xt(on,t),xt(yn,yn.current),!0}function Xm(t,e,n){var i=t.stateNode;if(!i)throw Error(le(169));n?(t=F_(t,e,Jr),i.__reactInternalMemoizedMergedChildContext=t,vt(yn),vt(on),xt(on,t)):vt(yn),xt(yn,n)}var Ui=null,Fu=!1,Ec=!1;function U_(t){Ui===null?Ui=[t]:Ui.push(t)}function PM(t){Fu=!0,U_(t)}function Rr(){if(!Ec&&Ui!==null){Ec=!0;var t=0,e=lt;try{var n=Ui;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ui=null,Fu=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(t+1)),l_(Bd,Rr),r}finally{lt=e,Ec=!1}}return null}var Fs=[],Us=0,uu=null,cu=0,On=[],zn=0,es=null,Oi=1,zi="";function Br(t,e){Fs[Us++]=cu,Fs[Us++]=uu,uu=t,cu=e}function O_(t,e,n){On[zn++]=Oi,On[zn++]=zi,On[zn++]=es,es=t;var i=Oi;t=zi;var r=32-si(i)-1;i&=~(1<<r),n+=1;var s=32-si(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Oi=1<<32-si(e)+r|n<<r|i,zi=s+t}else Oi=1<<s|n<<r|i,zi=t}function $d(t){t.return!==null&&(Br(t,1),O_(t,1,0))}function Kd(t){for(;t===uu;)uu=Fs[--Us],Fs[Us]=null,cu=Fs[--Us],Fs[Us]=null;for(;t===es;)es=On[--zn],On[zn]=null,zi=On[--zn],On[zn]=null,Oi=On[--zn],On[zn]=null}var In=null,Pn=null,St=!1,ni=null;function z_(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,In=t,Pn=vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,In=t,Pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=es!==null?{id:Oi,overflow:zi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,In=t,Pn=null,!0):!1;default:return!1}}function ih(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rh(t){if(St){var e=Pn;if(e){var n=e;if(!qm(t,e)){if(ih(t))throw Error(le(418));e=vr(n.nextSibling);var i=In;e&&qm(t,e)?z_(i,n):(t.flags=t.flags&-4097|2,St=!1,In=t)}}else{if(ih(t))throw Error(le(418));t.flags=t.flags&-4097|2,St=!1,In=t}}}function Ym(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function Zo(t){if(t!==In)return!1;if(!St)return Ym(t),St=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jf(t.type,t.memoizedProps)),e&&(e=Pn)){if(ih(t))throw B_(),Error(le(418));for(;e;)z_(t,e),e=vr(e.nextSibling)}if(Ym(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(le(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pn=vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pn=null}}else Pn=In?vr(t.stateNode.nextSibling):null;return!0}function B_(){for(var t=Pn;t;)t=vr(t.nextSibling)}function Qs(){Pn=In=null,St=!1}function Zd(t){ni===null?ni=[t]:ni.push(t)}var IM=Ki.ReactCurrentBatchConfig;function Ma(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(le(309));var i=n.stateNode}if(!i)throw Error(le(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(le(284));if(!n._owner)throw Error(le(290,t))}return t}function Qo(t,e){throw t=Object.prototype.toString.call(e),Error(le(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $m(t){var e=t._init;return e(t._payload)}function V_(t){function e(p,g){if(t){var _=p.deletions;_===null?(p.deletions=[g],p.flags|=16):_.push(g)}}function n(p,g){if(!t)return null;for(;g!==null;)e(p,g),g=g.sibling;return null}function i(p,g){for(p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function r(p,g){return p=Mr(p,g),p.index=0,p.sibling=null,p}function s(p,g,_){return p.index=_,t?(_=p.alternate,_!==null?(_=_.index,_<g?(p.flags|=2,g):_):(p.flags|=2,g)):(p.flags|=1048576,g)}function a(p){return t&&p.alternate===null&&(p.flags|=2),p}function o(p,g,_,E){return g===null||g.tag!==6?(g=Rc(_,p.mode,E),g.return=p,g):(g=r(g,_),g.return=p,g)}function l(p,g,_,E){var C=_.type;return C===Ps?f(p,g,_.props.children,E,_.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===lr&&$m(C)===g.type)?(E=r(g,_.props),E.ref=Ma(p,g,_),E.return=p,E):(E=Hl(_.type,_.key,_.props,null,p.mode,E),E.ref=Ma(p,g,_),E.return=p,E)}function u(p,g,_,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Pc(_,p.mode,E),g.return=p,g):(g=r(g,_.children||[]),g.return=p,g)}function f(p,g,_,E,C){return g===null||g.tag!==7?(g=Qr(_,p.mode,E,C),g.return=p,g):(g=r(g,_),g.return=p,g)}function c(p,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Rc(""+g,p.mode,_),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Vo:return _=Hl(g.type,g.key,g.props,null,p.mode,_),_.ref=Ma(p,null,g),_.return=p,_;case Rs:return g=Pc(g,p.mode,_),g.return=p,g;case lr:var E=g._init;return c(p,E(g._payload),_)}if(Fa(g)||_a(g))return g=Qr(g,p.mode,_,null),g.return=p,g;Qo(p,g)}return null}function h(p,g,_,E){var C=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:o(p,g,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Vo:return _.key===C?l(p,g,_,E):null;case Rs:return _.key===C?u(p,g,_,E):null;case lr:return C=_._init,h(p,g,C(_._payload),E)}if(Fa(_)||_a(_))return C!==null?null:f(p,g,_,E,null);Qo(p,_)}return null}function d(p,g,_,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(_)||null,o(g,p,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Vo:return p=p.get(E.key===null?_:E.key)||null,l(g,p,E,C);case Rs:return p=p.get(E.key===null?_:E.key)||null,u(g,p,E,C);case lr:var M=E._init;return d(p,g,_,M(E._payload),C)}if(Fa(E)||_a(E))return p=p.get(_)||null,f(g,p,E,C,null);Qo(g,E)}return null}function m(p,g,_,E){for(var C=null,M=null,b=g,y=g=0,T=null;b!==null&&y<_.length;y++){b.index>y?(T=b,b=null):T=b.sibling;var R=h(p,b,_[y],E);if(R===null){b===null&&(b=T);break}t&&b&&R.alternate===null&&e(p,b),g=s(R,g,y),M===null?C=R:M.sibling=R,M=R,b=T}if(y===_.length)return n(p,b),St&&Br(p,y),C;if(b===null){for(;y<_.length;y++)b=c(p,_[y],E),b!==null&&(g=s(b,g,y),M===null?C=b:M.sibling=b,M=b);return St&&Br(p,y),C}for(b=i(p,b);y<_.length;y++)T=d(b,p,y,_[y],E),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?y:T.key),g=s(T,g,y),M===null?C=T:M.sibling=T,M=T);return t&&b.forEach(function(P){return e(p,P)}),St&&Br(p,y),C}function v(p,g,_,E){var C=_a(_);if(typeof C!="function")throw Error(le(150));if(_=C.call(_),_==null)throw Error(le(151));for(var M=C=null,b=g,y=g=0,T=null,R=_.next();b!==null&&!R.done;y++,R=_.next()){b.index>y?(T=b,b=null):T=b.sibling;var P=h(p,b,R.value,E);if(P===null){b===null&&(b=T);break}t&&b&&P.alternate===null&&e(p,b),g=s(P,g,y),M===null?C=P:M.sibling=P,M=P,b=T}if(R.done)return n(p,b),St&&Br(p,y),C;if(b===null){for(;!R.done;y++,R=_.next())R=c(p,R.value,E),R!==null&&(g=s(R,g,y),M===null?C=R:M.sibling=R,M=R);return St&&Br(p,y),C}for(b=i(p,b);!R.done;y++,R=_.next())R=d(b,p,y,R.value,E),R!==null&&(t&&R.alternate!==null&&b.delete(R.key===null?y:R.key),g=s(R,g,y),M===null?C=R:M.sibling=R,M=R);return t&&b.forEach(function(F){return e(p,F)}),St&&Br(p,y),C}function x(p,g,_,E){if(typeof _=="object"&&_!==null&&_.type===Ps&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Vo:e:{for(var C=_.key,M=g;M!==null;){if(M.key===C){if(C=_.type,C===Ps){if(M.tag===7){n(p,M.sibling),g=r(M,_.props.children),g.return=p,p=g;break e}}else if(M.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===lr&&$m(C)===M.type){n(p,M.sibling),g=r(M,_.props),g.ref=Ma(p,M,_),g.return=p,p=g;break e}n(p,M);break}else e(p,M);M=M.sibling}_.type===Ps?(g=Qr(_.props.children,p.mode,E,_.key),g.return=p,p=g):(E=Hl(_.type,_.key,_.props,null,p.mode,E),E.ref=Ma(p,g,_),E.return=p,p=E)}return a(p);case Rs:e:{for(M=_.key;g!==null;){if(g.key===M)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(p,g.sibling),g=r(g,_.children||[]),g.return=p,p=g;break e}else{n(p,g);break}else e(p,g);g=g.sibling}g=Pc(_,p.mode,E),g.return=p,p=g}return a(p);case lr:return M=_._init,x(p,g,M(_._payload),E)}if(Fa(_))return m(p,g,_,E);if(_a(_))return v(p,g,_,E);Qo(p,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(p,g.sibling),g=r(g,_),g.return=p,p=g):(n(p,g),g=Rc(_,p.mode,E),g.return=p,p=g),a(p)):n(p,g)}return x}var Js=V_(!0),H_=V_(!1),fu=br(null),hu=null,Os=null,Qd=null;function Jd(){Qd=Os=hu=null}function ep(t){var e=fu.current;vt(fu),t._currentValue=e}function sh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function js(t,e){hu=t,Qd=Os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function Xn(t){var e=t._currentValue;if(Qd!==t)if(t={context:t,memoizedValue:e,next:null},Os===null){if(hu===null)throw Error(le(308));Os=t,hu.dependencies={lanes:0,firstContext:t}}else Os=Os.next=t;return e}var qr=null;function tp(t){qr===null?qr=[t]:qr.push(t)}function G_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,tp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Xi(t,i)}function Xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ur=!1;function np(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function W_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xi(t,n)}return r=i.interleaved,r===null?(e.next=e,tp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xi(t,n)}function Fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vd(t,n)}}function Km(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function du(t,e,n,i){var r=t.updateQueue;ur=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=l))}if(s!==null){var c=r.baseState;a=0,f=u=l=null,o=s;do{var h=o.lane,d=o.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:d,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var m=t,v=o;switch(h=e,d=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){c=m.call(d,c,h);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,h=typeof m=="function"?m.call(d,c,h):m,h==null)break e;c=At({},c,h);break e;case 2:ur=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else d={eventTime:d,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=d,l=c):f=f.next=d,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=c),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ns|=a,t.lanes=a,t.memoizedState=c}}function Zm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var Io={},Mi=br(Io),po=br(Io),mo=br(Io);function Yr(t){if(t===Io)throw Error(le(174));return t}function ip(t,e){switch(xt(mo,e),xt(po,t),xt(Mi,Io),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zf(e,t)}vt(Mi),xt(Mi,e)}function ea(){vt(Mi),vt(po),vt(mo)}function j_(t){Yr(mo.current);var e=Yr(Mi.current),n=zf(e,t.type);e!==n&&(xt(po,t),xt(Mi,n))}function rp(t){po.current===t&&(vt(Mi),vt(po))}var Mt=br(0);function pu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mc=[];function sp(){for(var t=0;t<Mc.length;t++)Mc[t]._workInProgressVersionPrimary=null;Mc.length=0}var Ul=Ki.ReactCurrentDispatcher,wc=Ki.ReactCurrentBatchConfig,ts=0,wt=null,Ft=null,Ht=null,mu=!1,qa=!1,go=0,LM=0;function Jt(){throw Error(le(321))}function ap(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ui(t[n],e[n]))return!1;return!0}function op(t,e,n,i,r,s){if(ts=s,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ul.current=t===null||t.memoizedState===null?FM:UM,t=n(i,r),qa){s=0;do{if(qa=!1,go=0,25<=s)throw Error(le(301));s+=1,Ht=Ft=null,e.updateQueue=null,Ul.current=OM,t=n(i,r)}while(qa)}if(Ul.current=gu,e=Ft!==null&&Ft.next!==null,ts=0,Ht=Ft=wt=null,mu=!1,e)throw Error(le(300));return t}function lp(){var t=go!==0;return go=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?wt.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function qn(){if(Ft===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var e=Ht===null?wt.memoizedState:Ht.next;if(e!==null)Ht=e,Ft=t;else{if(t===null)throw Error(le(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Ht===null?wt.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function xo(t,e){return typeof e=="function"?e(t):e}function Tc(t){var e=qn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=Ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var f=u.lane;if((ts&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=c,a=i):l=l.next=c,wt.lanes|=f,ns|=f}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,ui(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,wt.lanes|=s,ns|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ac(t){var e=qn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ui(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function X_(){}function q_(t,e){var n=wt,i=qn(),r=e(),s=!ui(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,up(K_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,_o(9,$_.bind(null,n,i,r,e),void 0,null),Gt===null)throw Error(le(349));ts&30||Y_(n,e,r)}return r}function Y_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $_(t,e,n,i){e.value=n,e.getSnapshot=i,Z_(e)&&Q_(t)}function K_(t,e,n){return n(function(){Z_(e)&&Q_(t)})}function Z_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ui(t,n)}catch{return!0}}function Q_(t){var e=Xi(t,1);e!==null&&ai(e,t,1,-1)}function Qm(t){var e=mi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:t},e.queue=t,t=t.dispatch=kM.bind(null,wt,t),[e.memoizedState,t]}function _o(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function J_(){return qn().memoizedState}function Ol(t,e,n,i){var r=mi();wt.flags|=t,r.memoizedState=_o(1|e,n,void 0,i===void 0?null:i)}function Uu(t,e,n,i){var r=qn();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var a=Ft.memoizedState;if(s=a.destroy,i!==null&&ap(i,a.deps)){r.memoizedState=_o(e,n,s,i);return}}wt.flags|=t,r.memoizedState=_o(1|e,n,s,i)}function Jm(t,e){return Ol(8390656,8,t,e)}function up(t,e){return Uu(2048,8,t,e)}function ev(t,e){return Uu(4,2,t,e)}function tv(t,e){return Uu(4,4,t,e)}function nv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function iv(t,e,n){return n=n!=null?n.concat([t]):null,Uu(4,4,nv.bind(null,e,t),n)}function cp(){}function rv(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ap(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function sv(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ap(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function av(t,e,n){return ts&21?(ui(n,e)||(n=f_(),wt.lanes|=n,ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function DM(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=wc.transition;wc.transition={};try{t(!1),e()}finally{lt=n,wc.transition=i}}function ov(){return qn().memoizedState}function NM(t,e,n){var i=Er(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},lv(t))uv(e,n);else if(n=G_(t,e,n,i),n!==null){var r=hn();ai(n,t,i,r),cv(n,e,i)}}function kM(t,e,n){var i=Er(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(lv(t))uv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ui(o,a)){var l=e.interleaved;l===null?(r.next=r,tp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=G_(t,e,r,i),n!==null&&(r=hn(),ai(n,t,i,r),cv(n,e,i))}}function lv(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function uv(t,e){qa=mu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vd(t,n)}}var gu={readContext:Xn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},FM={readContext:Xn,useCallback:function(t,e){return mi().memoizedState=[t,e===void 0?null:e],t},useContext:Xn,useEffect:Jm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ol(4194308,4,nv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ol(4,2,t,e)},useMemo:function(t,e){var n=mi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=mi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=NM.bind(null,wt,t),[i.memoizedState,t]},useRef:function(t){var e=mi();return t={current:t},e.memoizedState=t},useState:Qm,useDebugValue:cp,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=Qm(!1),e=t[0];return t=DM.bind(null,t[1]),mi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=wt,r=mi();if(St){if(n===void 0)throw Error(le(407));n=n()}else{if(n=e(),Gt===null)throw Error(le(349));ts&30||Y_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Jm(K_.bind(null,i,s,t),[t]),i.flags|=2048,_o(9,$_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=mi(),e=Gt.identifierPrefix;if(St){var n=zi,i=Oi;n=(i&~(1<<32-si(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=LM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},UM={readContext:Xn,useCallback:rv,useContext:Xn,useEffect:up,useImperativeHandle:iv,useInsertionEffect:ev,useLayoutEffect:tv,useMemo:sv,useReducer:Tc,useRef:J_,useState:function(){return Tc(xo)},useDebugValue:cp,useDeferredValue:function(t){var e=qn();return av(e,Ft.memoizedState,t)},useTransition:function(){var t=Tc(xo)[0],e=qn().memoizedState;return[t,e]},useMutableSource:X_,useSyncExternalStore:q_,useId:ov,unstable_isNewReconciler:!1},OM={readContext:Xn,useCallback:rv,useContext:Xn,useEffect:up,useImperativeHandle:iv,useInsertionEffect:ev,useLayoutEffect:tv,useMemo:sv,useReducer:Ac,useRef:J_,useState:function(){return Ac(xo)},useDebugValue:cp,useDeferredValue:function(t){var e=qn();return Ft===null?e.memoizedState=t:av(e,Ft.memoizedState,t)},useTransition:function(){var t=Ac(xo)[0],e=qn().memoizedState;return[t,e]},useMutableSource:X_,useSyncExternalStore:q_,useId:ov,unstable_isNewReconciler:!1};function ei(t,e){if(t&&t.defaultProps){e=At({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ah(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ou={isMounted:function(t){return(t=t._reactInternals)?os(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=hn(),r=Er(t),s=Vi(i,r);s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(ai(e,t,r,i),Fl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=hn(),r=Er(t),s=Vi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(ai(e,t,r,i),Fl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),i=Er(t),r=Vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=yr(t,r,i),e!==null&&(ai(e,t,i,n),Fl(e,t,i))}};function eg(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!uo(n,i)||!uo(r,s):!0}function fv(t,e,n){var i=!1,r=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xn(s):(r=Sn(e)?Jr:on.current,i=e.contextTypes,s=(i=i!=null)?Zs(t,r):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ou,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function tg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ou.enqueueReplaceState(e,e.state,null)}function oh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},np(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Xn(s):(s=Sn(e)?Jr:on.current,r.context=Zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ah(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ou.enqueueReplaceState(r,r.state,null),du(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ta(t,e){try{var n="",i=e;do n+=hE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Cc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function lh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zM=typeof WeakMap=="function"?WeakMap:Map;function hv(t,e,n){n=Vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){_u||(_u=!0,_h=i),lh(t,e)},n}function dv(t,e,n){n=Vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){lh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lh(t,e),typeof i!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function ng(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new zM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=JM.bind(null,t,e,n),e.then(t,t))}function ig(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vi(-1,1),e.tag=2,yr(n,e,1))),n.lanes|=1),t)}var BM=Ki.ReactCurrentOwner,vn=!1;function cn(t,e,n,i){e.child=t===null?H_(e,null,n,i):Js(e,t.child,n,i)}function sg(t,e,n,i,r){n=n.render;var s=e.ref;return js(e,r),i=op(t,e,n,i,s,r),n=lp(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(St&&n&&$d(e),e.flags|=1,cn(t,e,i,r),e.child)}function ag(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!_p(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,pv(t,e,s,i,r)):(t=Hl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(a,i)&&t.ref===e.ref)return qi(t,e,r)}return e.flags|=1,t=Mr(s,i),t.ref=e.ref,t.return=e,e.child=t}function pv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(uo(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,qi(t,e,r)}return uh(t,e,n,i,r)}function mv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(Bs,bn),bn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xt(Bs,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,xt(Bs,bn),bn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,xt(Bs,bn),bn|=i;return cn(t,e,r,n),e.child}function gv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function uh(t,e,n,i,r){var s=Sn(n)?Jr:on.current;return s=Zs(e,s),js(e,r),n=op(t,e,n,i,s,r),i=lp(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(St&&i&&$d(e),e.flags|=1,cn(t,e,n,r),e.child)}function og(t,e,n,i,r){if(Sn(n)){var s=!0;lu(e)}else s=!1;if(js(e,r),e.stateNode===null)zl(t,e),fv(e,n,i),oh(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xn(u):(u=Sn(n)?Jr:on.current,u=Zs(e,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&tg(e,a,i,u),ur=!1;var h=e.memoizedState;a.state=h,du(e,i,a,r),l=e.memoizedState,o!==i||h!==l||yn.current||ur?(typeof f=="function"&&(ah(e,n,f,i),l=e.memoizedState),(o=ur||eg(e,n,o,i,h,l,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,W_(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:ei(e.type,o),a.props=u,c=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xn(l):(l=Sn(n)?Jr:on.current,l=Zs(e,l));var d=n.getDerivedStateFromProps;(f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==c||h!==l)&&tg(e,a,i,l),ur=!1,h=e.memoizedState,a.state=h,du(e,i,a,r);var m=e.memoizedState;o!==c||h!==m||yn.current||ur?(typeof d=="function"&&(ah(e,n,d,i),m=e.memoizedState),(u=ur||eg(e,n,u,i,h,m,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,m,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,m,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),a.props=i,a.state=m,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return ch(t,e,n,i,s,r)}function ch(t,e,n,i,r,s){gv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Xm(e,n,!1),qi(t,e,s);i=e.stateNode,BM.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Js(e,t.child,null,s),e.child=Js(e,null,o,s)):cn(t,e,o,s),e.memoizedState=i.state,r&&Xm(e,n,!0),e.child}function xv(t){var e=t.stateNode;e.pendingContext?jm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jm(t,e.context,!1),ip(t,e.containerInfo)}function lg(t,e,n,i,r){return Qs(),Zd(r),e.flags|=256,cn(t,e,n,i),e.child}var fh={dehydrated:null,treeContext:null,retryLane:0};function hh(t){return{baseLanes:t,cachePool:null,transitions:null}}function _v(t,e,n){var i=e.pendingProps,r=Mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),xt(Mt,r&1),t===null)return rh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Vu(a,i,0,null),t=Qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=hh(n),e.memoizedState=fh,t):fp(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return VM(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Mr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Mr(o,s):(s=Qr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?hh(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=fh,i}return s=t.child,t=s.sibling,i=Mr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function fp(t,e){return e=Vu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Jo(t,e,n,i){return i!==null&&Zd(i),Js(e,t.child,null,n),t=fp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function VM(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Cc(Error(le(422))),Jo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Vu({mode:"visible",children:i.children},r,0,null),s=Qr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Js(e,t.child,null,a),e.child.memoizedState=hh(a),e.memoizedState=fh,s);if(!(e.mode&1))return Jo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(le(419)),i=Cc(s,i,void 0),Jo(t,e,a,i)}if(o=(a&t.childLanes)!==0,vn||o){if(i=Gt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xi(t,r),ai(i,t,r,-1))}return xp(),i=Cc(Error(le(421))),Jo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=e1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Pn=vr(r.nextSibling),In=e,St=!0,ni=null,t!==null&&(On[zn++]=Oi,On[zn++]=zi,On[zn++]=es,Oi=t.id,zi=t.overflow,es=e),e=fp(e,i.children),e.flags|=4096,e)}function ug(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),sh(t.return,e,n)}function bc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function vv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(cn(t,e,i.children,n),i=Mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ug(t,n,e);else if(t.tag===19)ug(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(xt(Mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&pu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),bc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&pu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}bc(e,!0,n,null,s);break;case"together":bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(le(153));if(e.child!==null){for(t=e.child,n=Mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function HM(t,e,n){switch(e.tag){case 3:xv(e),Qs();break;case 5:j_(e);break;case 1:Sn(e.type)&&lu(e);break;case 4:ip(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(fu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(Mt,Mt.current&1),e.flags|=128,null):n&e.child.childLanes?_v(t,e,n):(xt(Mt,Mt.current&1),t=qi(t,e,n),t!==null?t.sibling:null);xt(Mt,Mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return vv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(Mt,Mt.current),i)break;return null;case 22:case 23:return e.lanes=0,mv(t,e,n)}return qi(t,e,n)}var yv,dh,Sv,Ev;yv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dh=function(){};Sv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Yr(Mi.current);var s=null;switch(n){case"input":r=kf(t,r),i=kf(t,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=Of(t,r),i=Of(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=au)}Bf(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(no.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(no.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&_t("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ev=function(t,e,n,i){n!==i&&(e.flags|=4)};function wa(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function GM(t,e,n){var i=e.pendingProps;switch(Kd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return Sn(e.type)&&ou(),en(e),null;case 3:return i=e.stateNode,ea(),vt(yn),vt(on),sp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Zo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ni!==null&&(Sh(ni),ni=null))),dh(t,e),en(e),null;case 5:rp(e);var r=Yr(mo.current);if(n=e.type,t!==null&&e.stateNode!=null)Sv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return en(e),null}if(t=Yr(Mi.current),Zo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[_i]=e,i[ho]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<Oa.length;r++)_t(Oa[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":_m(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":ym(i,s),_t("invalid",i)}Bf(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ko(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ko(i.textContent,o,t),r=["children",""+o]):no.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&_t("scroll",i)}switch(n){case"input":Ho(i),vm(i,s,!0);break;case"textarea":Ho(i),Sm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=au)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Kx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[_i]=e,t[ho]=i,yv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Vf(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<Oa.length;r++)_t(Oa[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":_m(t,i),r=kf(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),_t("invalid",t);break;case"textarea":ym(t,i),r=Of(t,i),_t("invalid",t);break;default:r=i}Bf(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Jx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Zx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&io(t,l):typeof l=="number"&&io(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(no.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&kd(t,s,l,a))}switch(n){case"input":Ho(t),vm(t,i,!1);break;case"textarea":Ho(t),Sm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+wr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Vs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Vs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=au)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)Ev(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(n=Yr(mo.current),Yr(Mi.current),Zo(e)){if(i=e.stateNode,n=e.memoizedProps,i[_i]=e,(s=i.nodeValue!==n)&&(t=In,t!==null))switch(t.tag){case 3:Ko(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ko(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[_i]=e,e.stateNode=i}return en(e),null;case 13:if(vt(Mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(St&&Pn!==null&&e.mode&1&&!(e.flags&128))B_(),Qs(),e.flags|=98560,s=!1;else if(s=Zo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[_i]=e}else Qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else ni!==null&&(Sh(ni),ni=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Mt.current&1?Ut===0&&(Ut=3):xp())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return ea(),dh(t,e),t===null&&co(e.stateNode.containerInfo),en(e),null;case 10:return ep(e.type._context),en(e),null;case 17:return Sn(e.type)&&ou(),en(e),null;case 19:if(vt(Mt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)wa(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=pu(t),a!==null){for(e.flags|=128,wa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xt(Mt,Mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&It()>na&&(e.flags|=128,i=!0,wa(s,!1),e.lanes=4194304)}else{if(!i)if(t=pu(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!St)return en(e),null}else 2*It()-s.renderingStartTime>na&&n!==1073741824&&(e.flags|=128,i=!0,wa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,n=Mt.current,xt(Mt,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return gp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function WM(t,e){switch(Kd(e),e.tag){case 1:return Sn(e.type)&&ou(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ea(),vt(yn),vt(on),sp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rp(e),null;case 13:if(vt(Mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(le(340));Qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(Mt),null;case 4:return ea(),null;case 10:return ep(e.type._context),null;case 22:case 23:return gp(),null;case 24:return null;default:return null}}var el=!1,rn=!1,jM=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function ph(t,e,n){try{n()}catch(i){bt(t,e,i)}}var cg=!1;function XM(t,e){if(Zf=iu,t=C_(),Yd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,f=0,c=t,h=null;t:for(;;){for(var d;c!==n||r!==0&&c.nodeType!==3||(o=a+r),c!==s||i!==0&&c.nodeType!==3||(l=a+i),c.nodeType===3&&(a+=c.nodeValue.length),(d=c.firstChild)!==null;)h=c,c=d;for(;;){if(c===t)break t;if(h===n&&++u===r&&(o=a),h===s&&++f===i&&(l=a),(d=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=d}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qf={focusedElem:t,selectionRange:n},iu=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,x=m.memoizedState,p=e.stateNode,g=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:ei(e.type,v),x);p.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(E){bt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return m=cg,cg=!1,m}function Ya(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ph(e,n,s)}r=r.next}while(r!==i)}}function zu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function mh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Mv(t){var e=t.alternate;e!==null&&(t.alternate=null,Mv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_i],delete e[ho],delete e[th],delete e[bM],delete e[RM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wv(t){return t.tag===5||t.tag===3||t.tag===4}function fg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=au));else if(i!==4&&(t=t.child,t!==null))for(gh(t,e,n),t=t.sibling;t!==null;)gh(t,e,n),t=t.sibling}function xh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(xh(t,e,n),t=t.sibling;t!==null;)xh(t,e,n),t=t.sibling}var Xt=null,ti=!1;function er(t,e,n){for(n=n.child;n!==null;)Tv(t,e,n),n=n.sibling}function Tv(t,e,n){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(Iu,n)}catch{}switch(n.tag){case 5:rn||zs(n,e);case 6:var i=Xt,r=ti;Xt=null,er(t,e,n),Xt=i,ti=r,Xt!==null&&(ti?(t=Xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xt.removeChild(n.stateNode));break;case 18:Xt!==null&&(ti?(t=Xt,n=n.stateNode,t.nodeType===8?Sc(t.parentNode,n):t.nodeType===1&&Sc(t,n),oo(t)):Sc(Xt,n.stateNode));break;case 4:i=Xt,r=ti,Xt=n.stateNode.containerInfo,ti=!0,er(t,e,n),Xt=i,ti=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ph(n,e,a),r=r.next}while(r!==i)}er(t,e,n);break;case 1:if(!rn&&(zs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){bt(n,e,o)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,er(t,e,n),rn=i):er(t,e,n);break;default:er(t,e,n)}}function hg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jM),e.forEach(function(i){var r=t1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Xt=o.stateNode,ti=!1;break e;case 3:Xt=o.stateNode.containerInfo,ti=!0;break e;case 4:Xt=o.stateNode.containerInfo,ti=!0;break e}o=o.return}if(Xt===null)throw Error(le(160));Tv(s,a,r),Xt=null,ti=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){bt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Av(e,t),e=e.sibling}function Av(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(e,t),hi(t),i&4){try{Ya(3,t,t.return),zu(3,t)}catch(v){bt(t,t.return,v)}try{Ya(5,t,t.return)}catch(v){bt(t,t.return,v)}}break;case 1:Kn(e,t),hi(t),i&512&&n!==null&&zs(n,n.return);break;case 5:if(Kn(e,t),hi(t),i&512&&n!==null&&zs(n,n.return),t.flags&32){var r=t.stateNode;try{io(r,"")}catch(v){bt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Yx(r,s),Vf(o,a);var u=Vf(o,s);for(a=0;a<l.length;a+=2){var f=l[a],c=l[a+1];f==="style"?Jx(r,c):f==="dangerouslySetInnerHTML"?Zx(r,c):f==="children"?io(r,c):kd(r,f,c,u)}switch(o){case"input":Ff(r,s);break;case"textarea":$x(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var d=s.value;d!=null?Vs(r,!!s.multiple,d,!1):h!==!!s.multiple&&(s.defaultValue!=null?Vs(r,!!s.multiple,s.defaultValue,!0):Vs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ho]=s}catch(v){bt(t,t.return,v)}}break;case 6:if(Kn(e,t),hi(t),i&4){if(t.stateNode===null)throw Error(le(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){bt(t,t.return,v)}}break;case 3:if(Kn(e,t),hi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{oo(e.containerInfo)}catch(v){bt(t,t.return,v)}break;case 4:Kn(e,t),hi(t);break;case 13:Kn(e,t),hi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(pp=It())),i&4&&hg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(u=rn)||f,Kn(e,t),rn=u):Kn(e,t),hi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(Ee=t,f=t.child;f!==null;){for(c=Ee=f;Ee!==null;){switch(h=Ee,d=h.child,h.tag){case 0:case 11:case 14:case 15:Ya(4,h,h.return);break;case 1:zs(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){bt(i,n,v)}}break;case 5:zs(h,h.return);break;case 22:if(h.memoizedState!==null){pg(c);continue}}d!==null?(d.return=h,Ee=d):pg(c)}f=f.sibling}e:for(f=null,c=t;;){if(c.tag===5){if(f===null){f=c;try{r=c.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=c.stateNode,l=c.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Qx("display",a))}catch(v){bt(t,t.return,v)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){bt(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Kn(e,t),hi(t),i&4&&hg(t);break;case 21:break;default:Kn(e,t),hi(t)}}function hi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wv(n)){var i=n;break e}n=n.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(io(r,""),i.flags&=-33);var s=fg(t);xh(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=fg(t);gh(t,o,a);break;default:throw Error(le(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qM(t,e,n){Ee=t,Cv(t)}function Cv(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||el;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||rn;o=el;var u=rn;if(el=a,(rn=l)&&!u)for(Ee=r;Ee!==null;)a=Ee,l=a.child,a.tag===22&&a.memoizedState!==null?mg(r):l!==null?(l.return=a,Ee=l):mg(r);for(;s!==null;)Ee=s,Cv(s),s=s.sibling;Ee=r,el=o,rn=u}dg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):dg(t)}}function dg(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||zu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zm(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&oo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}rn||e.flags&512&&mh(e)}catch(h){bt(e,e.return,h)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function pg(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function mg(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zu(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{mh(e)}catch(l){bt(e,s,l)}break;case 5:var a=e.return;try{mh(e)}catch(l){bt(e,a,l)}}}catch(l){bt(e,e.return,l)}if(e===t){Ee=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ee=o;break}Ee=e.return}}var YM=Math.ceil,xu=Ki.ReactCurrentDispatcher,hp=Ki.ReactCurrentOwner,Gn=Ki.ReactCurrentBatchConfig,et=0,Gt=null,kt=null,Yt=0,bn=0,Bs=br(0),Ut=0,vo=null,ns=0,Bu=0,dp=0,$a=null,_n=null,pp=0,na=1/0,Fi=null,_u=!1,_h=null,Sr=null,tl=!1,pr=null,vu=0,Ka=0,vh=null,Bl=-1,Vl=0;function hn(){return et&6?It():Bl!==-1?Bl:Bl=It()}function Er(t){return t.mode&1?et&2&&Yt!==0?Yt&-Yt:IM.transition!==null?(Vl===0&&(Vl=f_()),Vl):(t=lt,t!==0||(t=window.event,t=t===void 0?16:__(t.type)),t):1}function ai(t,e,n,i){if(50<Ka)throw Ka=0,vh=null,Error(le(185));bo(t,n,i),(!(et&2)||t!==Gt)&&(t===Gt&&(!(et&2)&&(Bu|=n),Ut===4&&fr(t,Yt)),En(t,i),n===1&&et===0&&!(e.mode&1)&&(na=It()+500,Fu&&Rr()))}function En(t,e){var n=t.callbackNode;IE(t,e);var i=nu(t,t===Gt?Yt:0);if(i===0)n!==null&&wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&wm(n),e===1)t.tag===0?PM(gg.bind(null,t)):U_(gg.bind(null,t)),AM(function(){!(et&6)&&Rr()}),n=null;else{switch(h_(i)){case 1:n=Bd;break;case 4:n=u_;break;case 16:n=tu;break;case 536870912:n=c_;break;default:n=tu}n=kv(n,bv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bv(t,e){if(Bl=-1,Vl=0,et&6)throw Error(le(327));var n=t.callbackNode;if(Xs()&&t.callbackNode!==n)return null;var i=nu(t,t===Gt?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=yu(t,i);else{e=i;var r=et;et|=2;var s=Pv();(Gt!==t||Yt!==e)&&(Fi=null,na=It()+500,Zr(t,e));do try{ZM();break}catch(o){Rv(t,o)}while(!0);Jd(),xu.current=s,et=r,kt!==null?e=0:(Gt=null,Yt=0,e=Ut)}if(e!==0){if(e===2&&(r=Xf(t),r!==0&&(i=r,e=yh(t,r))),e===1)throw n=vo,Zr(t,0),fr(t,i),En(t,It()),n;if(e===6)fr(t,i);else{if(r=t.current.alternate,!(i&30)&&!$M(r)&&(e=yu(t,i),e===2&&(s=Xf(t),s!==0&&(i=s,e=yh(t,s))),e===1))throw n=vo,Zr(t,0),fr(t,i),En(t,It()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:Vr(t,_n,Fi);break;case 3:if(fr(t,i),(i&130023424)===i&&(e=pp+500-It(),10<e)){if(nu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=eh(Vr.bind(null,t,_n,Fi),e);break}Vr(t,_n,Fi);break;case 4:if(fr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-si(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*YM(i/1960))-i,10<i){t.timeoutHandle=eh(Vr.bind(null,t,_n,Fi),i);break}Vr(t,_n,Fi);break;case 5:Vr(t,_n,Fi);break;default:throw Error(le(329))}}}return En(t,It()),t.callbackNode===n?bv.bind(null,t):null}function yh(t,e){var n=$a;return t.current.memoizedState.isDehydrated&&(Zr(t,e).flags|=256),t=yu(t,e),t!==2&&(e=_n,_n=n,e!==null&&Sh(e)),t}function Sh(t){_n===null?_n=t:_n.push.apply(_n,t)}function $M(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ui(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~dp,e&=~Bu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-si(e),i=1<<n;t[n]=-1,e&=~i}}function gg(t){if(et&6)throw Error(le(327));Xs();var e=nu(t,0);if(!(e&1))return En(t,It()),null;var n=yu(t,e);if(t.tag!==0&&n===2){var i=Xf(t);i!==0&&(e=i,n=yh(t,i))}if(n===1)throw n=vo,Zr(t,0),fr(t,e),En(t,It()),n;if(n===6)throw Error(le(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,_n,Fi),En(t,It()),null}function mp(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(na=It()+500,Fu&&Rr())}}function is(t){pr!==null&&pr.tag===0&&!(et&6)&&Xs();var e=et;et|=1;var n=Gn.transition,i=lt;try{if(Gn.transition=null,lt=1,t)return t()}finally{lt=i,Gn.transition=n,et=e,!(et&6)&&Rr()}}function gp(){bn=Bs.current,vt(Bs)}function Zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,TM(n)),kt!==null)for(n=kt.return;n!==null;){var i=n;switch(Kd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ou();break;case 3:ea(),vt(yn),vt(on),sp();break;case 5:rp(i);break;case 4:ea();break;case 13:vt(Mt);break;case 19:vt(Mt);break;case 10:ep(i.type._context);break;case 22:case 23:gp()}n=n.return}if(Gt=t,kt=t=Mr(t.current,null),Yt=bn=e,Ut=0,vo=null,dp=Bu=ns=0,_n=$a=null,qr!==null){for(e=0;e<qr.length;e++)if(n=qr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}qr=null}return t}function Rv(t,e){do{var n=kt;try{if(Jd(),Ul.current=gu,mu){for(var i=wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}mu=!1}if(ts=0,Ht=Ft=wt=null,qa=!1,go=0,hp.current=null,n===null||n.return===null){Ut=1,vo=e,kt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Yt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=o,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var d=ig(a);if(d!==null){d.flags&=-257,rg(d,a,o,s,e),d.mode&1&&ng(s,u,e),e=d,l=u;var m=e.updateQueue;if(m===null){var v=new Set;v.add(l),e.updateQueue=v}else m.add(l);break e}else{if(!(e&1)){ng(s,u,e),xp();break e}l=Error(le(426))}}else if(St&&o.mode&1){var x=ig(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),rg(x,a,o,s,e),Zd(ta(l,o));break e}}s=l=ta(l,o),Ut!==4&&(Ut=2),$a===null?$a=[s]:$a.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=hv(s,l,e);Km(s,p);break e;case 1:o=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Sr===null||!Sr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=dv(s,o,e);Km(s,E);break e}}s=s.return}while(s!==null)}Lv(n)}catch(C){e=C,kt===n&&n!==null&&(kt=n=n.return);continue}break}while(!0)}function Pv(){var t=xu.current;return xu.current=gu,t===null?gu:t}function xp(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Gt===null||!(ns&268435455)&&!(Bu&268435455)||fr(Gt,Yt)}function yu(t,e){var n=et;et|=2;var i=Pv();(Gt!==t||Yt!==e)&&(Fi=null,Zr(t,e));do try{KM();break}catch(r){Rv(t,r)}while(!0);if(Jd(),et=n,xu.current=i,kt!==null)throw Error(le(261));return Gt=null,Yt=0,Ut}function KM(){for(;kt!==null;)Iv(kt)}function ZM(){for(;kt!==null&&!EE();)Iv(kt)}function Iv(t){var e=Nv(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?Lv(t):kt=e,hp.current=null}function Lv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=WM(n,e),n!==null){n.flags&=32767,kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,kt=null;return}}else if(n=GM(n,e,bn),n!==null){kt=n;return}if(e=e.sibling,e!==null){kt=e;return}kt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Vr(t,e,n){var i=lt,r=Gn.transition;try{Gn.transition=null,lt=1,QM(t,e,n,i)}finally{Gn.transition=r,lt=i}return null}function QM(t,e,n,i){do Xs();while(pr!==null);if(et&6)throw Error(le(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(le(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(LE(t,s),t===Gt&&(kt=Gt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,kv(tu,function(){return Xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gn.transition,Gn.transition=null;var a=lt;lt=1;var o=et;et|=4,hp.current=null,XM(t,n),Av(n,t),_M(Qf),iu=!!Zf,Qf=Zf=null,t.current=n,qM(n),ME(),et=o,lt=a,Gn.transition=s}else t.current=n;if(tl&&(tl=!1,pr=t,vu=r),s=t.pendingLanes,s===0&&(Sr=null),AE(n.stateNode),En(t,It()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(_u)throw _u=!1,t=_h,_h=null,t;return vu&1&&t.tag!==0&&Xs(),s=t.pendingLanes,s&1?t===vh?Ka++:(Ka=0,vh=t):Ka=0,Rr(),null}function Xs(){if(pr!==null){var t=h_(vu),e=Gn.transition,n=lt;try{if(Gn.transition=null,lt=16>t?16:t,pr===null)var i=!1;else{if(t=pr,pr=null,vu=0,et&6)throw Error(le(331));var r=et;for(et|=4,Ee=t.current;Ee!==null;){var s=Ee,a=s.child;if(Ee.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Ee=u;Ee!==null;){var f=Ee;switch(f.tag){case 0:case 11:case 15:Ya(8,f,s)}var c=f.child;if(c!==null)c.return=f,Ee=c;else for(;Ee!==null;){f=Ee;var h=f.sibling,d=f.return;if(Mv(f),f===u){Ee=null;break}if(h!==null){h.return=d,Ee=h;break}Ee=d}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}Ee=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ee=a;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ya(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Ee=p;break e}Ee=s.return}}var g=t.current;for(Ee=g;Ee!==null;){a=Ee;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,Ee=_;else e:for(a=g;Ee!==null;){if(o=Ee,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:zu(9,o)}}catch(C){bt(o,o.return,C)}if(o===a){Ee=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,Ee=E;break e}Ee=o.return}}if(et=r,Rr(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(Iu,t)}catch{}i=!0}return i}finally{lt=n,Gn.transition=e}}return!1}function xg(t,e,n){e=ta(n,e),e=hv(t,e,1),t=yr(t,e,1),e=hn(),t!==null&&(bo(t,1,e),En(t,e))}function bt(t,e,n){if(t.tag===3)xg(t,t,n);else for(;e!==null;){if(e.tag===3){xg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sr===null||!Sr.has(i))){t=ta(n,t),t=dv(e,t,1),e=yr(e,t,1),t=hn(),e!==null&&(bo(e,1,t),En(e,t));break}}e=e.return}}function JM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,Gt===t&&(Yt&n)===n&&(Ut===4||Ut===3&&(Yt&130023424)===Yt&&500>It()-pp?Zr(t,0):dp|=n),En(t,e)}function Dv(t,e){e===0&&(t.mode&1?(e=jo,jo<<=1,!(jo&130023424)&&(jo=4194304)):e=1);var n=hn();t=Xi(t,e),t!==null&&(bo(t,e,n),En(t,n))}function e1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Dv(t,n)}function t1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),Dv(t,n)}var Nv;Nv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yn.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,HM(t,e,n);vn=!!(t.flags&131072)}else vn=!1,St&&e.flags&1048576&&O_(e,cu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;zl(t,e),t=e.pendingProps;var r=Zs(e,on.current);js(e,n),r=op(null,e,i,t,r,n);var s=lp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,lu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,np(e),r.updater=Ou,e.stateNode=r,r._reactInternals=e,oh(e,i,t,n),e=ch(null,e,i,!0,s,n)):(e.tag=0,St&&s&&$d(e),cn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(zl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=i1(i),t=ei(i,t),r){case 0:e=uh(null,e,i,t,n);break e;case 1:e=og(null,e,i,t,n);break e;case 11:e=sg(null,e,i,t,n);break e;case 14:e=ag(null,e,i,ei(i.type,t),n);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),uh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),og(t,e,i,r,n);case 3:e:{if(xv(e),t===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,W_(t,e),du(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ta(Error(le(423)),e),e=lg(t,e,i,n,r);break e}else if(i!==r){r=ta(Error(le(424)),e),e=lg(t,e,i,n,r);break e}else for(Pn=vr(e.stateNode.containerInfo.firstChild),In=e,St=!0,ni=null,n=H_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qs(),i===r){e=qi(t,e,n);break e}cn(t,e,i,n)}e=e.child}return e;case 5:return j_(e),t===null&&rh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Jf(i,r)?a=null:s!==null&&Jf(i,s)&&(e.flags|=32),gv(t,e),cn(t,e,a,n),e.child;case 6:return t===null&&rh(e),null;case 13:return _v(t,e,n);case 4:return ip(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Js(e,null,i,n):cn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),sg(t,e,i,r,n);case 7:return cn(t,e,e.pendingProps,n),e.child;case 8:return cn(t,e,e.pendingProps.children,n),e.child;case 12:return cn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,xt(fu,i._currentValue),i._currentValue=a,s!==null)if(ui(s.value,a)){if(s.children===r.children&&!yn.current){e=qi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Vi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),sh(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(le(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),sh(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}cn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,js(e,n),r=Xn(r),i=i(r),e.flags|=1,cn(t,e,i,n),e.child;case 14:return i=e.type,r=ei(i,e.pendingProps),r=ei(i.type,r),ag(t,e,i,r,n);case 15:return pv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),zl(t,e),e.tag=1,Sn(i)?(t=!0,lu(e)):t=!1,js(e,n),fv(e,i,r),oh(e,i,r,n),ch(null,e,i,!0,t,n);case 19:return vv(t,e,n);case 22:return mv(t,e,n)}throw Error(le(156,e.tag))};function kv(t,e){return l_(t,e)}function n1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new n1(t,e,n,i)}function _p(t){return t=t.prototype,!(!t||!t.isReactComponent)}function i1(t){if(typeof t=="function")return _p(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ud)return 11;if(t===Od)return 14}return 2}function Mr(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Hl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")_p(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ps:return Qr(n.children,r,s,e);case Fd:a=8,r|=8;break;case If:return t=Hn(12,n,e,r|2),t.elementType=If,t.lanes=s,t;case Lf:return t=Hn(13,n,e,r),t.elementType=Lf,t.lanes=s,t;case Df:return t=Hn(19,n,e,r),t.elementType=Df,t.lanes=s,t;case jx:return Vu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gx:a=10;break e;case Wx:a=9;break e;case Ud:a=11;break e;case Od:a=14;break e;case lr:a=16,i=null;break e}throw Error(le(130,t==null?t:typeof t,""))}return e=Hn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Qr(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function Vu(t,e,n,i){return t=Hn(22,t,i,e),t.elementType=jx,t.lanes=n,t.stateNode={isHidden:!1},t}function Rc(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function Pc(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function r1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cc(0),this.expirationTimes=cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function vp(t,e,n,i,r,s,a,o,l){return t=new r1(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},np(s),t}function s1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Fv(t){if(!t)return Tr;t=t._reactInternals;e:{if(os(t)!==t||t.tag!==1)throw Error(le(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(t.tag===1){var n=t.type;if(Sn(n))return F_(t,n,e)}return e}function Uv(t,e,n,i,r,s,a,o,l){return t=vp(n,i,!0,t,r,s,a,o,l),t.context=Fv(null),n=t.current,i=hn(),r=Er(n),s=Vi(i,r),s.callback=e??null,yr(n,s,r),t.current.lanes=r,bo(t,r,i),En(t,i),t}function Hu(t,e,n,i){var r=e.current,s=hn(),a=Er(r);return n=Fv(n),e.context===null?e.context=n:e.pendingContext=n,e=Vi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=yr(r,e,a),t!==null&&(ai(t,r,a,s),Fl(t,r,a)),a}function Su(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _g(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yp(t,e){_g(t,e),(t=t.alternate)&&_g(t,e)}function a1(){return null}var Ov=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sp(t){this._internalRoot=t}Gu.prototype.render=Sp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(le(409));Hu(t,e,null,null)};Gu.prototype.unmount=Sp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;is(function(){Hu(null,t,null,null)}),e[ji]=null}};function Gu(t){this._internalRoot=t}Gu.prototype.unstable_scheduleHydration=function(t){if(t){var e=m_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&x_(t)}};function Ep(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vg(){}function o1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Su(a);s.call(u)}}var a=Uv(e,i,t,0,null,!1,!1,"",vg);return t._reactRootContainer=a,t[ji]=a.current,co(t.nodeType===8?t.parentNode:t),is(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Su(l);o.call(u)}}var l=vp(t,0,!1,null,null,!1,!1,"",vg);return t._reactRootContainer=l,t[ji]=l.current,co(t.nodeType===8?t.parentNode:t),is(function(){Hu(e,l,n,i)}),l}function ju(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Su(a);o.call(l)}}Hu(e,a,t,r)}else a=o1(n,e,t,r,i);return Su(a)}d_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ua(e.pendingLanes);n!==0&&(Vd(e,n|1),En(e,It()),!(et&6)&&(na=It()+500,Rr()))}break;case 13:is(function(){var i=Xi(t,1);if(i!==null){var r=hn();ai(i,t,1,r)}}),yp(t,1)}};Hd=function(t){if(t.tag===13){var e=Xi(t,134217728);if(e!==null){var n=hn();ai(e,t,134217728,n)}yp(t,134217728)}};p_=function(t){if(t.tag===13){var e=Er(t),n=Xi(t,e);if(n!==null){var i=hn();ai(n,t,e,i)}yp(t,e)}};m_=function(){return lt};g_=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};Gf=function(t,e,n){switch(e){case"input":if(Ff(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ku(i);if(!r)throw Error(le(90));qx(i),Ff(i,r)}}}break;case"textarea":$x(t,n);break;case"select":e=n.value,e!=null&&Vs(t,!!n.multiple,e,!1)}};n_=mp;i_=is;var l1={usingClientEntryPoint:!1,Events:[Po,Ns,ku,e_,t_,mp]},Ta={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},u1={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=a_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||a1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Iu=nl.inject(u1),Ei=nl}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l1;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ep(e))throw Error(le(200));return s1(t,e,null,n)};Nn.createRoot=function(t,e){if(!Ep(t))throw Error(le(299));var n=!1,i="",r=Ov;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=vp(t,1,!1,null,null,n,!1,i,r),t[ji]=e.current,co(t.nodeType===8?t.parentNode:t),new Sp(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(le(188)):(t=Object.keys(t).join(","),Error(le(268,t)));return t=a_(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return is(t)};Nn.hydrate=function(t,e,n){if(!Wu(e))throw Error(le(200));return ju(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!Ep(t))throw Error(le(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Ov;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Uv(e,null,t,1,n??null,r,!1,s,a),t[ji]=e.current,co(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Gu(e)};Nn.render=function(t,e,n){if(!Wu(e))throw Error(le(200));return ju(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!Wu(t))throw Error(le(40));return t._reactRootContainer?(is(function(){ju(null,null,t,!1,function(){t._reactRootContainer=null,t[ji]=null})}),!0):!1};Nn.unstable_batchedUpdates=mp;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Wu(n))throw Error(le(200));if(t==null||t._reactInternals===void 0)throw Error(le(38));return ju(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function zv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zv)}catch(t){console.error(t)}}zv(),zx.exports=Nn;var c1=zx.exports,yg=c1;Rf.createRoot=yg.createRoot,Rf.hydrateRoot=yg.hydrateRoot;/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var f1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Wt=(t,e)=>{const n=dt.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...u},f)=>dt.createElement("svg",{ref:f,...f1,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${h1(t)}`,o].join(" "),...u},[...e.map(([c,h])=>dt.createElement(c,h)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=Wt("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=Wt("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=Wt("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=Wt("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=Wt("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=Wt("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=Wt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=Wt("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=Wt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=Wt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=Wt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=Wt("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=Wt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=Wt("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=Wt("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=Wt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=Wt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=Wt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),w1=()=>{const[t,e]=dt.useState(""),[n,i]=dt.useState(!1),[r,s]=dt.useState(0),[a,o]=dt.useState(150),l=["Aspiring Software Engineer","Full Stack Developer","Data Science Learner","AI & RAG Enthusiast"];dt.useEffect(()=>{let f=setTimeout(()=>{u()},a);return()=>clearTimeout(f)},[t,n]);const u=()=>{const f=r%l.length,c=l[f];e(n?c.substring(0,t.length-1):c.substring(0,t.length+1)),!n&&t===c?(setTimeout(()=>i(!0),1500),o(100)):n&&t===""?(i(!1),s(r+1),o(150)):o(n?50:100)};return D.jsx("section",{className:"hero glass animate-fade-in",id:"home",children:D.jsxs("div",{className:"hero-content",children:[D.jsxs("div",{className:"hero-header",children:[D.jsxs("div",{className:"avatar-container",children:[D.jsx("img",{src:"/profile.jpg.png",alt:"Jithendra Mallela",className:"hero-avatar",onError:f=>{f.target.style.display="none",f.target.nextSibling.style.display="flex"}}),D.jsx("div",{className:"avatar-fallback",style:{display:"none"},children:"JM"})]}),D.jsxs("div",{className:"hero-titles",children:[D.jsx("h1",{className:"hero-title",children:"Jithendra Mallela"}),D.jsxs("h2",{className:"hero-subtitle",children:[D.jsx("span",{className:"typing-text",children:t}),D.jsx("span",{className:"cursor",children:"|"})]})]})]}),D.jsx("p",{className:"hero-description",children:"Passionate about building scalable web applications, intelligent solutions using AI/RAG, and solving complex problems with modern technologies."}),D.jsxs("div",{className:"hero-links",children:[D.jsxs("a",{href:"/resume.pdf",download:"Jithendra_Mallela_Resume.pdf",className:"hero-link",style:{background:"var(--accent-gradient)",borderColor:"transparent",color:"#fff"},children:[D.jsx(x1,{size:20}),D.jsx("span",{children:"Download Resume"})]}),D.jsxs("a",{href:"mailto:mallelajithendra2004@gmail.com",className:"hero-link",children:[D.jsx(Vv,{size:20}),D.jsx("span",{children:"Email"})]}),D.jsxs("a",{href:"https://www.linkedin.com/in/mallela-jithendra-93j",target:"_blank",rel:"noopener noreferrer",className:"hero-link",children:[D.jsx(Eh,{size:20}),D.jsx("span",{children:"LinkedIn"})]}),D.jsxs("a",{href:"https://github.com/jithendra98",target:"_blank",rel:"noopener noreferrer",className:"hero-link",children:[D.jsx(Eu,{size:20}),D.jsx("span",{children:"GitHub"})]}),D.jsxs("a",{href:"tel:+919652276818",className:"hero-link",children:[D.jsx(v1,{size:20}),D.jsx("span",{children:"+91-9652276818"})]})]})]})})},T1=()=>{const t=[{icon:D.jsx(m1,{size:24}),title:"Full Stack",desc:"Building scalable web apps"},{icon:D.jsx(p1,{size:24}),title:"AI/RAG",desc:"Implementing intelligent solutions"},{icon:D.jsx(y1,{size:24}),title:"Problem Solver",desc:"Tackling complex challenges"},{icon:D.jsx(g1,{size:24}),title:"Continuous Learner",desc:"Always exploring new tech"}];return D.jsxs("section",{id:"about",className:"animate-fade-in",children:[D.jsx("h2",{className:"section-title",children:"About Me"}),D.jsxs("div",{className:"about-grid",children:[D.jsxs("div",{className:"about-text glass hover-lift reveal-left",children:[D.jsxs("h3",{children:["Hello, I'm ",D.jsx("span",{className:"highlight",children:"Jithendra"}),"! 👋"]}),D.jsxs("p",{children:["I am a passionate aspiring ",D.jsx("strong",{className:"text-highlight",children:"Software Engineer"})," and ",D.jsx("strong",{className:"text-highlight",children:"Data Science"})," learner based in India. My journey in tech is driven by an insatiable curiosity for how things work and a desire to build solutions that make a real impact."]}),D.jsxs("p",{children:["I specialize in bridging the gap between elegant ",D.jsx("strong",{className:"text-highlight",children:"frontend interfaces"})," and robust ",D.jsx("strong",{className:"text-highlight",children:"backend architectures"}),". Recently, I've been diving deep into the world of ",D.jsx("strong",{className:"text-highlight",children:"Artificial Intelligence"})," and ",D.jsx("strong",{className:"text-highlight",children:"Retrieval-Augmented Generation (RAG)"}),", exploring how we can use intelligent models to solve complex, real-world problems."]}),D.jsxs("p",{children:["When I'm not coding, you can find me exploring new technologies, participating in continuous learning, or brainstorming my next big project. I believe in writing ",D.jsx("strong",{className:"text-highlight",children:"clean code"}),", building intuitive user experiences, and constantly pushing the boundaries of what's possible."]})]}),D.jsx("div",{className:"about-stats reveal-right",children:t.map((e,n)=>D.jsxs("div",{className:"stat-card glass hover-lift",children:[D.jsx("div",{className:"stat-icon",children:e.icon}),D.jsxs("div",{className:"stat-info",children:[D.jsx("h4",{children:e.title}),D.jsx("p",{children:e.desc})]})]},n))})]})]})},A1=()=>{const t=[{category:"Languages",items:["Java","Python","TypeScript","JavaScript (ES6+)"]},{category:"Web Technologies",items:["HTML","CSS","React.js","Next.js 14","Node.js","Express.js","REST API","Tailwind CSS"]},{category:"Tools & Platforms",items:["MySQL","PostgreSQL","Prisma ORM","Docker","Git","GitHub","Postman","Power BI","Excel"]},{category:"Soft Skills",items:["Problem-Solving","Team Player","Adaptability"]}];return D.jsxs("section",{className:"skills-section animate-fade-in",style:{animationDelay:"0.2s"},id:"skills",children:[D.jsx("h2",{className:"section-title reveal",children:"Skills & Technologies"}),D.jsx("div",{className:"skills-grid",children:t.map((e,n)=>D.jsxs("div",{className:"skill-card glass reveal-right",children:[D.jsx("h3",{className:"skill-category",children:e.category}),D.jsx("div",{className:"skill-items",children:e.items.map((i,r)=>D.jsx("span",{className:"skill-badge",children:i},r))})]},n))})]})},C1=()=>{const t=[{title:"AI-Powered Research Assistant using RAG",date:"Dec 2025 - Feb 2026",points:["Built an AI-powered Research Assistant using RAG architecture to enable accurate question answering over PDF documents.","Integrated FAISS vector database with embeddings for fast semantic search and efficient document retrieval.","Designed a Streamlit-based interactive chat interface using LLMs to deliver context-aware answers with source references."],tech:["Python","RAG","LangChain","FAISS","Streamlit","OpenAI API"],links:{demo:"https://ai-powered-research-assistant-rag.streamlit.app/",github:"https://github.com/jithendra98/AI-Powered-Research-Assistant-using-RAG"}},{title:"AI-Interview Coach Web App",date:"Aug 2025 - Jan 2026",points:["Built an AI mock interview platform using Django and GPT-3.5 that generates role-specific questions with AI-scored feedback.","Developed a smart resume analyser using LangChain + OpenAI to parse files and identify missing keywords.","Deployed on Render using Gunicorn and Whitenoise for static file serving with SQLite."],tech:["Python","Django","OpenAI","LangChain","SQLite","Render"],links:{demo:"https://ai-interview-coach-web-app.onrender.com/",github:"https://github.com/jithendra98/ai-interview-coach-web-app?tab=readme-ov-file"}},{title:"E-Commerce Intelligence Platform",date:"Nov 2024 - Feb 2025",points:["Built a sentiment analysis model (TF-IDF + Logistic Regression) on 200K+ reviews, achieving 88% F1-score.","Developed time series forecasting models (ARIMA, Prophet) to predict demand, reducing inventory overstock by 22%.","Automated the complete pipeline (data ingestion → analysis → modeling → visualization), reducing reporting time by 90%.","Designed an interactive Streamlit dashboard to visualize KPIs, forecasts, and sentiment trends."],tech:["Python","NLTK","Seaborn","ARIMA","Prophet","Streamlit"],links:{demo:"#",github:"https://github.com/jithendra98/ecommerce_intelligence"}},{title:"Retail Sales Performance Analytics",date:"Aug 2025 - Sep 2025",points:["Extracted and analyzed 1M+ transactional records using advanced SQL (joins, CTEs, window functions).","Performed EDA and data wrangling to uncover seasonal trends, top products, and customer segments.","Built an interactive Power BI dashboard with KPI tracking, drill-down filters, and DAX-based metrics.","Conducted cohort analysis to evaluate customer retention, identifying a 34% drop in Month 2."],tech:["SQL","Python","Pandas","Power BI","DAX"],links:{demo:"#",github:"https://github.com/jithendra98/retail_sales_analytics"}}];return D.jsxs("section",{className:"projects-section animate-fade-in",style:{animationDelay:"0.4s"},id:"projects",children:[D.jsx("h2",{className:"section-title reveal",children:"Featured Projects"}),D.jsx("div",{className:"projects-grid",children:t.map((e,n)=>D.jsxs("div",{className:"project-card glass hover-lift reveal",children:[D.jsxs("div",{className:"project-header",children:[D.jsx("h3",{className:"project-title",children:e.title}),D.jsx("span",{className:"project-date",children:e.date})]}),D.jsx("ul",{className:"project-points",children:e.points.map((i,r)=>D.jsx("li",{children:i},r))}),D.jsx("div",{className:"project-tech",children:e.tech.map((i,r)=>D.jsx("span",{className:"tech-badge",children:i},r))}),D.jsxs("div",{className:"project-links",children:[e.links.demo!=="#"&&D.jsxs("a",{href:e.links.demo,className:"project-link",target:"_blank",rel:"noopener noreferrer",children:[D.jsx(_1,{size:16})," Live Demo"]}),D.jsxs("a",{href:e.links.github,className:"project-link",target:"_blank",rel:"noopener noreferrer",children:[D.jsx(Eu,{size:16})," GitHub"]})]})]},n))})]})},b1=()=>{const t=[{title:"Data Science - Interns Elite",date:"June 2025 - August 2025",points:["Completed an industrial training program focused on core concepts of Data Science.","Gained hands-on experience in data preprocessing, visualization, and building predictive models.","Developed proficiency in applying statistical techniques and machine learning algorithms."],tech:["Python","Pandas","Scikit-learn","Power BI","MySQL"]}];return D.jsxs("section",{className:"experience-section animate-fade-in",style:{animationDelay:"0.5s"},id:"experience",children:[D.jsx("h2",{className:"section-title reveal",children:"Training & Experience"}),D.jsx("div",{className:"timeline",children:t.map((e,n)=>D.jsxs("div",{className:"timeline-item glass reveal-left",children:[D.jsx("h3",{className:"timeline-title",children:e.title}),D.jsx("div",{className:"timeline-meta",children:D.jsxs("span",{children:[D.jsx(Bv,{size:14})," ",e.date]})}),D.jsx("ul",{className:"timeline-points",children:e.points.map((i,r)=>D.jsx("li",{children:i},r))}),D.jsx("div",{className:"timeline-tech-small",children:e.tech.map((i,r)=>D.jsx("span",{className:"tech-badge-small",children:i},r))})]},n))})]})},R1=()=>{const t=[{institution:"Lovely Professional University",degree:"Bachelor of Technology, Computer Science and Engineering",score:"CGPA: 7.00",location:"Phagwara, Punjab",date:"August 2023 - Present"},{institution:"Narayana Junior College",degree:"Intermediate",score:"Percentage: 76.1%",location:"Chilakaluripet, Andhra Pradesh",date:"August 2021 - May 2022"},{institution:"AMG Residential High School",degree:"Matriculation",score:"CGPA: 78.2%",location:"Chilakaluripet, Andhra Pradesh",date:"July 2019 - April 2020"}];return D.jsxs("section",{className:"education-section animate-fade-in",style:{animationDelay:"0.9s"},id:"education",children:[D.jsx("h2",{className:"section-title reveal",children:"Education"}),D.jsx("div",{className:"timeline",children:t.map((e,n)=>D.jsxs("div",{className:"timeline-item glass reveal-right",children:[D.jsx("h3",{className:"timeline-title",children:e.institution}),D.jsx("h4",{className:"timeline-subtitle",children:e.degree}),D.jsx("p",{className:"timeline-score",children:e.score}),D.jsxs("div",{className:"timeline-meta",children:[D.jsxs("span",{children:[D.jsx(Hv,{size:14})," ",e.location]}),D.jsxs("span",{children:[D.jsx(Bv,{size:14})," ",e.date]})]})]},n))})]})},P1=()=>{const[t,e]=dt.useState(null),n=[{title:"Java Skill Up | GeeksforGeeks",date:"January 2026",path:"/GFG JAVA Certificate.pdf"},{title:"Data Science Industrial Training | InternsElite",date:"August 2025",path:"/Certificate of Training-MALLELA JITHENDRA_Data Science_IT_2025_DS-T6_TC-10256_InternsElite.pdf"},{title:"Cloud Computing | NPTEL",date:"April 2025",highlight:"Elite with 60%",path:"/Cloud Computing.pdf"},{title:"Full Stack Development with MERN | thingQbator",date:"December 2025",path:"/1766658276420_MallelaJithendra_Course-Excellence.pdf"},{title:"Oracle Cloud Infrastructure | Oracle",date:"December 2025",path:"/oracle eCertificate.pdf"},{title:"Chatbot or smart Assistant Development | thingQbator",date:"December 2025",path:"/1766657649704_MallelaJithendra_Course-Excellence.pdf"},{title:"Responsive Web Design Developer | freeCodeCamp",date:"November 2023",path:"/freecodecamp.pdf"}];return D.jsxs("section",{className:"certifications-section animate-fade-in",style:{animationDelay:"0.8s"},id:"certifications",children:[D.jsx("h2",{className:"section-title reveal",children:"Certifications & Achievements"}),D.jsxs("div",{className:"achievements-card glass mb-8 reveal",children:[D.jsxs("h3",{className:"achievements-title",children:[D.jsx(E1,{size:20,className:"inline-icon"})," Key Achievements"]}),D.jsxs("ul",{className:"achievements-list",children:[D.jsx("li",{children:"Completed NPTEL Certification in Cloud Computing, securing Elite with 60%."}),D.jsx("li",{children:"Secured 2nd Prize at the State-Level Science Congress. Recognized and awarded in the competition."})]})]}),D.jsx("div",{className:"certs-grid",children:n.map((i,r)=>D.jsxs("div",{className:"cert-card glass hover-lift reveal",children:[D.jsx(d1,{className:"cert-icon",size:24}),D.jsxs("div",{className:"cert-details",children:[D.jsx("h4",{children:i.title}),D.jsx("span",{className:"cert-date",children:i.date}),i.highlight&&D.jsx("span",{className:"cert-highlight",children:i.highlight})]}),D.jsx("button",{onClick:()=>e(i),className:"cert-link",style:{background:"none",border:"none",cursor:"pointer",padding:0,outline:"none",fontFamily:"inherit",textAlign:"left"},children:"View Certificate"})]},r))}),t&&D.jsx("div",{className:"modal-overlay",onClick:()=>e(null),children:D.jsxs("div",{className:"modal-content",onClick:i=>i.stopPropagation(),children:[D.jsxs("div",{className:"modal-header",children:[D.jsx("h3",{className:"modal-title",children:t.title}),D.jsx("button",{className:"modal-close",onClick:()=>e(null),children:D.jsx(Gv,{size:24})})]}),D.jsx("div",{className:"modal-body",children:D.jsx("iframe",{src:t.path,title:t.title})})]})})]})},I1=()=>{const[t,e]=dt.useState({name:"",email:"",subject:"",message:""}),[n,i]=dt.useState(null),r=a=>{e(o=>({...o,[a.target.name]:a.target.value}))},s=async a=>{a.preventDefault(),i("sending"),new FormData;{alert("Please add your Web3Forms Access Key to .env.local to enable email sending."),i(null);return}};return D.jsxs("section",{id:"contact",children:[D.jsx("h2",{className:"section-title",children:"Get In Touch"}),D.jsxs("div",{className:"contact-wrapper",children:[D.jsxs("div",{className:"contact-info",children:[D.jsxs("div",{className:"contact-info-card glass hover-lift",children:[D.jsx("span",{className:"contact-icon",children:D.jsx(Vv,{size:24})}),D.jsxs("div",{children:[D.jsx("h4",{children:"Email"}),D.jsx("a",{href:"mailto:jithendra.mallela@example.com",children:"mallelajithendra2004@gmail.com"})]})]}),D.jsxs("div",{className:"contact-info-card glass hover-lift",children:[D.jsx("span",{className:"contact-icon",children:D.jsx(Eh,{size:24})}),D.jsxs("div",{children:[D.jsx("h4",{children:"LinkedIn"}),D.jsx("a",{href:"https://www.linkedin.com/in/mallela-jithendra-93j",target:"_blank",rel:"noopener noreferrer",className:"social-icon-link",children:D.jsx(Eh,{size:20})})]})]}),D.jsxs("div",{className:"contact-info-card glass hover-lift",children:[D.jsx("span",{className:"contact-icon",children:D.jsx(Eu,{size:24})}),D.jsxs("div",{children:[D.jsx("h4",{children:"GitHub"}),D.jsx("a",{href:"https://github.com/jithendra98",target:"_blank",rel:"noopener noreferrer",className:"social-icon-link",children:D.jsx(Eu,{size:20})})]})]}),D.jsxs("div",{className:"contact-info-card glass hover-lift",children:[D.jsx("span",{className:"contact-icon",children:D.jsx(Hv,{size:24})}),D.jsxs("div",{children:[D.jsx("h4",{children:"Location"}),D.jsx("p",{children:"India"})]})]})]}),D.jsxs("form",{className:"contact-form glass",onSubmit:s,children:[D.jsx("h3",{className:"contact-form-heading",children:"Send a Message"}),D.jsxs("div",{className:"contact-form-row",children:[D.jsxs("div",{className:"contact-field",children:[D.jsx("label",{htmlFor:"contact-name",children:"Your Name"}),D.jsx("input",{id:"contact-name",type:"text",name:"name",placeholder:"Jithendra Mallela",value:t.name,onChange:r,required:!0})]}),D.jsxs("div",{className:"contact-field",children:[D.jsx("label",{htmlFor:"contact-email",children:"Email Address"}),D.jsx("input",{id:"contact-email",type:"email",name:"email",placeholder:"you@example.com",value:t.email,onChange:r,pattern:"[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$",title:"Please enter a complete email address containing an @ and a domain like .com",required:!0})]})]}),D.jsxs("div",{className:"contact-field",children:[D.jsx("label",{htmlFor:"contact-subject",children:"Subject"}),D.jsx("input",{id:"contact-subject",type:"text",name:"subject",placeholder:"Collaboration / Opportunity / Question",value:t.subject,onChange:r,required:!0})]}),D.jsxs("div",{className:"contact-field",children:[D.jsx("label",{htmlFor:"contact-message",children:"Message"}),D.jsx("textarea",{id:"contact-message",name:"message",rows:6,placeholder:"Write your message here…",value:t.message,onChange:r,required:!0})]}),D.jsx("button",{type:"submit",className:"contact-submit-btn",disabled:n==="sending",children:n==="sending"?D.jsx("span",{className:"btn-spinner"}):n==="sent"?"✓ Message Sent!":D.jsx(D.Fragment,{children:"Send Message  ➤"})}),n==="sent"&&D.jsx("p",{className:"contact-success",children:"Thank you for your message! I'll get back to you soon. 🎉"})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mp="183",L1=0,Sg=1,D1=2,Gl=1,N1=2,za=3,Ar=0,dn=1,vi=2,Hi=0,qs=1,Mu=2,Eg=3,Mg=4,k1=5,Gr=100,F1=101,U1=102,O1=103,z1=104,B1=200,V1=201,H1=202,G1=203,Mh=204,wh=205,W1=206,j1=207,X1=208,q1=209,Y1=210,$1=211,K1=212,Z1=213,Q1=214,Th=0,Ah=1,Ch=2,ia=3,bh=4,Rh=5,Ph=6,Ih=7,wp=0,J1=1,ew=2,wi=0,Wv=1,jv=2,Xv=3,qv=4,Yv=5,$v=6,Kv=7,Zv=300,rs=301,ra=302,Lc=303,Dc=304,Xu=306,Lh=1e3,Bi=1001,Dh=1002,qt=1003,tw=1004,il=1005,sn=1006,Nc=1007,$r=1008,Rn=1009,Qv=1010,Jv=1011,yo=1012,Tp=1013,Ai=1014,yi=1015,Yi=1016,Ap=1017,Cp=1018,So=1020,ey=35902,ty=35899,ny=1021,iy=1022,ri=1023,$i=1026,Kr=1027,ry=1028,bp=1029,sa=1030,Rp=1031,Pp=1033,Wl=33776,jl=33777,Xl=33778,ql=33779,Nh=35840,kh=35841,Fh=35842,Uh=35843,Oh=36196,zh=37492,Bh=37496,Vh=37488,Hh=37489,Gh=37490,Wh=37491,jh=37808,Xh=37809,qh=37810,Yh=37811,$h=37812,Kh=37813,Zh=37814,Qh=37815,Jh=37816,ed=37817,td=37818,nd=37819,id=37820,rd=37821,sd=36492,ad=36494,od=36495,ld=36283,ud=36284,cd=36285,fd=36286,nw=3200,sy=0,iw=1,hr="",Un="srgb",aa="srgb-linear",wu="linear",ot="srgb",hs=7680,wg=519,rw=512,sw=513,aw=514,Ip=515,ow=516,lw=517,Lp=518,uw=519,Tg=35044,Ag="300 es",Si=2e3,Eo=2001;function cw(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Mo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function fw(){const t=Mo("canvas");return t.style.display="block",t}const Cg={};function bg(...t){const e="THREE."+t.shift();console.log(e,...t)}function ay(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Oe(...t){t=ay(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function nt(...t){t=ay(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Tu(...t){const e=t.join(" ");e in Cg||(Cg[e]=!0,Oe(...t))}function hw(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const dw={[Th]:Ah,[Ch]:Ph,[bh]:Ih,[ia]:Rh,[Ah]:Th,[Ph]:Ch,[Ih]:bh,[Rh]:ia};class ha{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kc=Math.PI/180,hd=180/Math.PI;function Lo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function pw(t,e){return(t%e+e)%e}function Fc(t,e,n){return(1-n)*t+n*e}function Aa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,n=0){rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class da{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],f=i[r+2],c=i[r+3],h=s[a+0],d=s[a+1],m=s[a+2],v=s[a+3];if(c!==v||l!==h||u!==d||f!==m){let x=l*h+u*d+f*m+c*v;x<0&&(h=-h,d=-d,m=-m,v=-v,x=-x);let p=1-o;if(x<.9995){const g=Math.acos(x),_=Math.sin(g);p=Math.sin(p*g)/_,o=Math.sin(o*g)/_,l=l*p+h*o,u=u*p+d*o,f=f*p+m*o,c=c*p+v*o}else{l=l*p+h*o,u=u*p+d*o,f=f*p+m*o,c=c*p+v*o;const g=1/Math.sqrt(l*l+u*u+f*f+c*c);l*=g,u*=g,f*=g,c*=g}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=c}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],f=i[r+3],c=s[a],h=s[a+1],d=s[a+2],m=s[a+3];return e[n]=o*m+f*c+l*d-u*h,e[n+1]=l*m+f*h+u*c-o*d,e[n+2]=u*m+f*d+o*h-l*c,e[n+3]=f*m-o*c-l*h-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),f=o(r/2),c=o(s/2),h=l(i/2),d=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=h*f*c+u*d*m,this._y=u*d*c-h*f*m,this._z=u*f*m+h*d*c,this._w=u*f*c-h*d*m;break;case"YXZ":this._x=h*f*c+u*d*m,this._y=u*d*c-h*f*m,this._z=u*f*m-h*d*c,this._w=u*f*c+h*d*m;break;case"ZXY":this._x=h*f*c-u*d*m,this._y=u*d*c+h*f*m,this._z=u*f*m+h*d*c,this._w=u*f*c-h*d*m;break;case"ZYX":this._x=h*f*c-u*d*m,this._y=u*d*c+h*f*m,this._z=u*f*m-h*d*c,this._w=u*f*c+h*d*m;break;case"YZX":this._x=h*f*c+u*d*m,this._y=u*d*c+h*f*m,this._z=u*f*m-h*d*c,this._w=u*f*c-h*d*m;break;case"XZY":this._x=h*f*c-u*d*m,this._y=u*d*c-h*f*m,this._z=u*f*m+h*d*c,this._w=u*f*c+h*d*m;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],f=n[6],c=n[10],h=i+o+c;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-l)*d,this._y=(s-u)*d,this._z=(a-r)*d}else if(i>o&&i>c){const d=2*Math.sqrt(1+i-o-c);this._w=(f-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+u)/d}else if(o>c){const d=2*Math.sqrt(1+o-i-c);this._w=(s-u)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+f)/d}else{const d=2*Math.sqrt(1+c-i-o);this._w=(a-r)/d,this._x=(s+u)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+a*o+r*u-s*l,this._y=r*f+a*l+s*o-i*u,this._z=s*f+a*u+i*l-r*o,this._w=a*f-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),f=Math.sin(u);l=Math.sin(l*u)/f,n=Math.sin(n*u)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Rg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Rg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),f=2*(o*n-s*r),c=2*(s*i-a*n);return this.x=n+l*u+a*c-o*f,this.y=i+l*f+o*u-s*c,this.z=r+l*c+s*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uc.copy(this).projectOnVector(e),this.sub(Uc)}reflect(e){return this.sub(Uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uc=new K,Rg=new da;class He{constructor(e,n,i,r,s,a,o,l,u){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],f=i[4],c=i[7],h=i[2],d=i[5],m=i[8],v=r[0],x=r[3],p=r[6],g=r[1],_=r[4],E=r[7],C=r[2],M=r[5],b=r[8];return s[0]=a*v+o*g+l*C,s[3]=a*x+o*_+l*M,s[6]=a*p+o*E+l*b,s[1]=u*v+f*g+c*C,s[4]=u*x+f*_+c*M,s[7]=u*p+f*E+c*b,s[2]=h*v+d*g+m*C,s[5]=h*x+d*_+m*M,s[8]=h*p+d*E+m*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8];return n*a*f-n*o*u-i*s*f+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],c=f*a-o*u,h=o*l-f*s,d=u*s-a*l,m=n*c+i*h+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=c*v,e[1]=(r*u-f*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(f*n-r*l)*v,e[5]=(r*s-o*n)*v,e[6]=d*v,e[7]=(i*l-u*n)*v,e[8]=(a*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Oc.makeScale(e,n)),this}rotate(e){return this.premultiply(Oc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Oc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oc=new He,Pg=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ig=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mw(){const t={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ot&&(r.r=Gi(r.r),r.g=Gi(r.g),r.b=Gi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=Ys(r.r),r.g=Ys(r.g),r.b=Ys(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hr?wu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Tu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Tu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[aa]:{primaries:e,whitePoint:i,transfer:wu,toXYZ:Pg,fromXYZ:Ig,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Pg,fromXYZ:Ig,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),t}const Je=mw();function Gi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ys(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ds;class gw{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ds===void 0&&(ds=Mo("canvas")),ds.width=e.width,ds.height=e.height;const r=ds.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ds}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Mo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Gi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Gi(n[i]/255)*255):n[i]=Gi(n[i]);return{data:n,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xw=0;class Dp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xw++}),this.uuid=Lo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(zc(r[a].image)):s.push(zc(r[a]))}else s=zc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function zc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?gw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let _w=0;const Bc=new K;class $t extends ha{constructor(e=$t.DEFAULT_IMAGE,n=$t.DEFAULT_MAPPING,i=Bi,r=Bi,s=sn,a=$r,o=ri,l=Rn,u=$t.DEFAULT_ANISOTROPY,f=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_w++}),this.uuid=Lo(),this.name="",this.source=new Dp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bc).x}get height(){return this.source.getSize(Bc).y}get depth(){return this.source.getSize(Bc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lh:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case Dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lh:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case Dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Zv;$t.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],c=l[8],h=l[1],d=l[5],m=l[9],v=l[2],x=l[6],p=l[10];if(Math.abs(f-h)<.01&&Math.abs(c-v)<.01&&Math.abs(m-x)<.01){if(Math.abs(f+h)<.1&&Math.abs(c+v)<.1&&Math.abs(m+x)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,E=(d+1)/2,C=(p+1)/2,M=(f+h)/4,b=(c+v)/4,y=(m+x)/4;return _>E&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=M/i,s=b/i):E>C?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=M/r,s=y/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=b/s,r=y/s),this.set(i,r,s,n),this}let g=Math.sqrt((x-m)*(x-m)+(c-v)*(c-v)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(x-m)/g,this.y=(c-v)/g,this.z=(h-f)/g,this.w=Math.acos((u+d+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vw extends ha{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new $t(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Dp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends vw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class oy extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yw extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tt{constructor(e,n,i,r,s,a,o,l,u,f,c,h,d,m,v,x){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,f,c,h,d,m,v,x)}set(e,n,i,r,s,a,o,l,u,f,c,h,d,m,v,x){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=u,p[6]=f,p[10]=c,p[14]=h,p[3]=d,p[7]=m,p[11]=v,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),a=1/ps.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),c=Math.sin(s);if(e.order==="XYZ"){const h=a*f,d=a*c,m=o*f,v=o*c;n[0]=l*f,n[4]=-l*c,n[8]=u,n[1]=d+m*u,n[5]=h-v*u,n[9]=-o*l,n[2]=v-h*u,n[6]=m+d*u,n[10]=a*l}else if(e.order==="YXZ"){const h=l*f,d=l*c,m=u*f,v=u*c;n[0]=h+v*o,n[4]=m*o-d,n[8]=a*u,n[1]=a*c,n[5]=a*f,n[9]=-o,n[2]=d*o-m,n[6]=v+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*f,d=l*c,m=u*f,v=u*c;n[0]=h-v*o,n[4]=-a*c,n[8]=m+d*o,n[1]=d+m*o,n[5]=a*f,n[9]=v-h*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*f,d=a*c,m=o*f,v=o*c;n[0]=l*f,n[4]=m*u-d,n[8]=h*u+v,n[1]=l*c,n[5]=v*u+h,n[9]=d*u-m,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*u,m=o*l,v=o*u;n[0]=l*f,n[4]=v-h*c,n[8]=m*c+d,n[1]=c,n[5]=a*f,n[9]=-o*f,n[2]=-u*f,n[6]=d*c+m,n[10]=h-v*c}else if(e.order==="XZY"){const h=a*l,d=a*u,m=o*l,v=o*u;n[0]=l*f,n[4]=-c,n[8]=u*f,n[1]=h*c+v,n[5]=a*f,n[9]=d*c-m,n[2]=m*c-d,n[6]=o*f,n[10]=v*c+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sw,e,Ew)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),tr.crossVectors(i,Tn),tr.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),tr.crossVectors(i,Tn)),tr.normalize(),rl.crossVectors(Tn,tr),r[0]=tr.x,r[4]=rl.x,r[8]=Tn.x,r[1]=tr.y,r[5]=rl.y,r[9]=Tn.y,r[2]=tr.z,r[6]=rl.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],f=i[1],c=i[5],h=i[9],d=i[13],m=i[2],v=i[6],x=i[10],p=i[14],g=i[3],_=i[7],E=i[11],C=i[15],M=r[0],b=r[4],y=r[8],T=r[12],R=r[1],P=r[5],F=r[9],H=r[13],Y=r[2],z=r[6],X=r[10],V=r[14],j=r[3],Z=r[7],A=r[11],re=r[15];return s[0]=a*M+o*R+l*Y+u*j,s[4]=a*b+o*P+l*z+u*Z,s[8]=a*y+o*F+l*X+u*A,s[12]=a*T+o*H+l*V+u*re,s[1]=f*M+c*R+h*Y+d*j,s[5]=f*b+c*P+h*z+d*Z,s[9]=f*y+c*F+h*X+d*A,s[13]=f*T+c*H+h*V+d*re,s[2]=m*M+v*R+x*Y+p*j,s[6]=m*b+v*P+x*z+p*Z,s[10]=m*y+v*F+x*X+p*A,s[14]=m*T+v*H+x*V+p*re,s[3]=g*M+_*R+E*Y+C*j,s[7]=g*b+_*P+E*z+C*Z,s[11]=g*y+_*F+E*X+C*A,s[15]=g*T+_*H+E*V+C*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],f=e[2],c=e[6],h=e[10],d=e[14],m=e[3],v=e[7],x=e[11],p=e[15],g=l*d-u*h,_=o*d-u*c,E=o*h-l*c,C=a*d-u*f,M=a*h-l*f,b=a*c-o*f;return n*(v*g-x*_+p*E)-i*(m*g-x*C+p*M)+r*(m*_-v*C+p*b)-s*(m*E-v*M+x*b)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],c=e[9],h=e[10],d=e[11],m=e[12],v=e[13],x=e[14],p=e[15],g=n*o-i*a,_=n*l-r*a,E=n*u-s*a,C=i*l-r*o,M=i*u-s*o,b=r*u-s*l,y=f*v-c*m,T=f*x-h*m,R=f*p-d*m,P=c*x-h*v,F=c*p-d*v,H=h*p-d*x,Y=g*H-_*F+E*P+C*R-M*T+b*y;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/Y;return e[0]=(o*H-l*F+u*P)*z,e[1]=(r*F-i*H-s*P)*z,e[2]=(v*b-x*M+p*C)*z,e[3]=(h*M-c*b-d*C)*z,e[4]=(l*R-a*H-u*T)*z,e[5]=(n*H-r*R+s*T)*z,e[6]=(x*E-m*b-p*_)*z,e[7]=(f*b-h*E+d*_)*z,e[8]=(a*F-o*R+u*y)*z,e[9]=(i*R-n*F-s*y)*z,e[10]=(m*M-v*E+p*g)*z,e[11]=(c*E-f*M-d*g)*z,e[12]=(o*T-a*P-l*y)*z,e[13]=(n*P-i*T+r*y)*z,e[14]=(v*_-m*C-x*g)*z,e[15]=(f*C-c*_+h*g)*z,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,f=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,f*o+i,f*l-r*a,0,u*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,f=a+a,c=o+o,h=s*u,d=s*f,m=s*c,v=a*f,x=a*c,p=o*c,g=l*u,_=l*f,E=l*c,C=i.x,M=i.y,b=i.z;return r[0]=(1-(v+p))*C,r[1]=(d+E)*C,r[2]=(m-_)*C,r[3]=0,r[4]=(d-E)*M,r[5]=(1-(h+p))*M,r[6]=(x+g)*M,r[7]=0,r[8]=(m+_)*b,r[9]=(x-g)*b,r[10]=(1-(h+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=ps.set(r[0],r[1],r[2]).length();const o=ps.set(r[4],r[5],r[6]).length(),l=ps.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Zn.copy(this);const u=1/a,f=1/o,c=1/l;return Zn.elements[0]*=u,Zn.elements[1]*=u,Zn.elements[2]*=u,Zn.elements[4]*=f,Zn.elements[5]*=f,Zn.elements[6]*=f,Zn.elements[8]*=c,Zn.elements[9]*=c,Zn.elements[10]*=c,n.setFromRotationMatrix(Zn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=Si,l=!1){const u=this.elements,f=2*s/(n-e),c=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let m,v;if(l)m=s/(a-s),v=a*s/(a-s);else if(o===Si)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Eo)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=c,u[9]=d,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Si,l=!1){const u=this.elements,f=2/(n-e),c=2/(i-r),h=-(n+e)/(n-e),d=-(i+r)/(i-r);let m,v;if(l)m=1/(a-s),v=a/(a-s);else if(o===Si)m=-2/(a-s),v=-(a+s)/(a-s);else if(o===Eo)m=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=c,u[9]=0,u[13]=d,u[2]=0,u[6]=0,u[10]=m,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ps=new K,Zn=new Tt,Sw=new K(0,0,0),Ew=new K(1,1,1),tr=new K,rl=new K,Tn=new K,Lg=new Tt,Dg=new da;class Ci{constructor(e=0,n=0,i=0,r=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],f=r[9],c=r[2],h=r[6],d=r[10];switch(n){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-c,d),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Lg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Dg.setFromEuler(this),this.setFromQuaternion(Dg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class ly{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mw=0;const Ng=new K,ms=new da,Ii=new Tt,sl=new K,Ca=new K,ww=new K,Tw=new da,kg=new K(1,0,0),Fg=new K(0,1,0),Ug=new K(0,0,1),Og={type:"added"},Aw={type:"removed"},gs={type:"childadded",child:null},Vc={type:"childremoved",child:null};class Kt extends ha{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mw++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new K,n=new Ci,i=new da,r=new K(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new He}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ly,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(kg,e)}rotateY(e){return this.rotateOnAxis(Fg,e)}rotateZ(e){return this.rotateOnAxis(Ug,e)}translateOnAxis(e,n){return Ng.copy(e).applyQuaternion(this.quaternion),this.position.add(Ng.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(kg,e)}translateY(e){return this.translateOnAxis(Fg,e)}translateZ(e){return this.translateOnAxis(Ug,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?sl.copy(e):sl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Ca,sl,this.up):Ii.lookAt(sl,Ca,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(Ii),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Og),gs.child=e,this.dispatchEvent(gs),gs.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Aw),Vc.child=e,this.dispatchEvent(Vc),Vc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Og),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,ww),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,Tw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const c=l[u];s(e.shapes,c)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),f=a(e.images),c=a(e.shapes),h=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),c.length>0&&(i.shapes=c),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Kt.DEFAULT_UP=new K(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ba extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cw={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const v of e.hand.values()){const x=n.getJointPose(v,i),p=this._getHandJoint(u,v);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const f=u.joints["index-finger-tip"],c=u.joints["thumb-tip"],h=f.position.distanceTo(c.position),d=.02,m=.005;u.inputState.pinching&&h>d+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=d-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ba;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const uy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},al={h:0,s:0,l:0};function Gc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=pw(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Gc(a,s,e+1/3),this.g=Gc(a,s,e),this.b=Gc(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,n=Un){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Un){const i=uy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return Je.workingToColorSpace(nn.copy(this),e),Math.round($e(nn.r*255,0,255))*65536+Math.round($e(nn.g*255,0,255))*256+Math.round($e(nn.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const f=(o+a)/2;if(o===a)l=0,u=0;else{const c=a-o;switch(u=f<=.5?c/(a+o):c/(2-a-o),a){case i:l=(r-s)/c+(r<s?6:0);break;case r:l=(s-i)/c+2;break;case s:l=(i-r)/c+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Je.workingColorSpace){return Je.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Un){Je.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==Un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+n,nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(nr),e.getHSL(al);const i=Fc(nr.h,al.h,n),r=Fc(nr.s,al.s,n),s=Fc(nr.l,al.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Ke;Ke.NAMES=uy;class Np{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ke(e),this.density=n}clone(){return new Np(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class bw extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Qn=new K,Li=new K,Wc=new K,Di=new K,xs=new K,_s=new K,zg=new K,jc=new K,Xc=new K,qc=new K,Yc=new Rt,$c=new Rt,Kc=new Rt;class ii{constructor(e=new K,n=new K,i=new K){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Qn.subVectors(e,n),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Qn.subVectors(r,n),Li.subVectors(i,n),Wc.subVectors(e,n);const a=Qn.dot(Qn),o=Qn.dot(Li),l=Qn.dot(Wc),u=Li.dot(Li),f=Li.dot(Wc),c=a*u-o*o;if(c===0)return s.set(0,0,0),null;const h=1/c,d=(u*l-o*f)*h,m=(a*f-o*l)*h;return s.set(1-d-m,m,d)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(o,Di.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Yc.setScalar(0),$c.setScalar(0),Kc.setScalar(0),Yc.fromBufferAttribute(e,n),$c.fromBufferAttribute(e,i),Kc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Yc,s.x),a.addScaledVector($c,s.y),a.addScaledVector(Kc,s.z),a}static isFrontFacing(e,n,i,r){return Qn.subVectors(i,n),Li.subVectors(e,n),Qn.cross(Li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),Qn.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ii.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;xs.subVectors(r,i),_s.subVectors(s,i),jc.subVectors(e,i);const l=xs.dot(jc),u=_s.dot(jc);if(l<=0&&u<=0)return n.copy(i);Xc.subVectors(e,r);const f=xs.dot(Xc),c=_s.dot(Xc);if(f>=0&&c<=f)return n.copy(r);const h=l*c-f*u;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(xs,a);qc.subVectors(e,s);const d=xs.dot(qc),m=_s.dot(qc);if(m>=0&&d<=m)return n.copy(s);const v=d*u-l*m;if(v<=0&&u>=0&&m<=0)return o=u/(u-m),n.copy(i).addScaledVector(_s,o);const x=f*m-d*c;if(x<=0&&c-f>=0&&d-m>=0)return zg.subVectors(s,r),o=(c-f)/(c-f+(d-m)),n.copy(r).addScaledVector(zg,o);const p=1/(x+v+h);return a=v*p,o=h*p,n.copy(i).addScaledVector(xs,a).addScaledVector(_s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Do{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(s,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ol.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ol.copy(i.boundingBox)),ol.applyMatrix4(e.matrixWorld),this.union(ol)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),ll.subVectors(this.max,ba),vs.subVectors(e.a,ba),ys.subVectors(e.b,ba),Ss.subVectors(e.c,ba),ir.subVectors(ys,vs),rr.subVectors(Ss,ys),Dr.subVectors(vs,Ss);let n=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Dr.z,Dr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Dr.z,0,-Dr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Dr.y,Dr.x,0];return!Zc(n,vs,ys,Ss,ll)||(n=[1,0,0,0,1,0,0,0,1],!Zc(n,vs,ys,Ss,ll))?!1:(ul.crossVectors(ir,rr),n=[ul.x,ul.y,ul.z],Zc(n,vs,ys,Ss,ll))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ni=[new K,new K,new K,new K,new K,new K,new K,new K],Jn=new K,ol=new Do,vs=new K,ys=new K,Ss=new K,ir=new K,rr=new K,Dr=new K,ba=new K,ll=new K,ul=new K,Nr=new K;function Zc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Nr.fromArray(t,s);const o=r.x*Math.abs(Nr.x)+r.y*Math.abs(Nr.y)+r.z*Math.abs(Nr.z),l=e.dot(Nr),u=n.dot(Nr),f=i.dot(Nr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}const Dt=new K,cl=new rt;let Rw=0;class oi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Tg,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)cl.fromBufferAttribute(this,n),cl.applyMatrix3(e),this.setXY(n,cl.x,cl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Aa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Aa(n,this.array)),n}setX(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Aa(n,this.array)),n}setY(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Aa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Aa(n,this.array)),n}setW(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tg&&(e.usage=this.usage),e}}class cy extends oi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class fy extends oi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Wn extends oi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Pw=new Do,Ra=new K,Qc=new K;class qu{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Pw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);const n=Ra.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ra,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(Qc)),this.expandByPoint(Ra.copy(e.center).sub(Qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Iw=0;const Fn=new Tt,Jc=new Kt,Es=new K,An=new Do,Pa=new Do,Vt=new K;class Yn extends ha{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iw++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cw(e)?fy:cy)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,n,i){return Fn.makeTranslation(e,n,i),this.applyMatrix4(Fn),this}scale(e,n,i){return Fn.makeScale(e,n,i),this.applyMatrix4(Fn),this}lookAt(e){return Jc.lookAt(e),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Pa.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(An.min,Pa.min),An.expandByPoint(Vt),Vt.addVectors(An.max,Pa.max),An.expandByPoint(Vt)):(An.expandByPoint(Pa.min),An.expandByPoint(Pa.max))}An.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)Vt.fromBufferAttribute(o,u),l&&(Es.fromBufferAttribute(e,u),Vt.add(Es)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new K,l[y]=new K;const u=new K,f=new K,c=new K,h=new rt,d=new rt,m=new rt,v=new K,x=new K;function p(y,T,R){u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,T),c.fromBufferAttribute(i,R),h.fromBufferAttribute(s,y),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,R),f.sub(u),c.sub(u),d.sub(h),m.sub(h);const P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(v.copy(f).multiplyScalar(m.y).addScaledVector(c,-d.y).multiplyScalar(P),x.copy(c).multiplyScalar(d.x).addScaledVector(f,-m.x).multiplyScalar(P),o[y].add(v),o[T].add(v),o[R].add(v),l[y].add(x),l[T].add(x),l[R].add(x))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let y=0,T=g.length;y<T;++y){const R=g[y],P=R.start,F=R.count;for(let H=P,Y=P+F;H<Y;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const _=new K,E=new K,C=new K,M=new K;function b(y){C.fromBufferAttribute(r,y),M.copy(C);const T=o[y];_.copy(T),_.sub(C.multiplyScalar(C.dot(T))).normalize(),E.crossVectors(M,T);const P=E.dot(l[y])<0?-1:1;a.setXYZW(y,_.x,_.y,_.z,P)}for(let y=0,T=g.length;y<T;++y){const R=g[y],P=R.start,F=R.count;for(let H=P,Y=P+F;H<Y;H+=3)b(e.getX(H+0)),b(e.getX(H+1)),b(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new K,s=new K,a=new K,o=new K,l=new K,u=new K,f=new K,c=new K;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),v=e.getX(h+1),x=e.getX(h+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,x),f.subVectors(a,s),c.subVectors(r,s),f.cross(c),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,x),o.add(f),l.add(f),u.add(f),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let h=0,d=n.count;h<d;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),f.subVectors(a,s),c.subVectors(r,s),f.cross(c),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Vt.fromBufferAttribute(e,n),Vt.normalize(),e.setXYZ(n,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){const u=o.array,f=o.itemSize,c=o.normalized,h=new u.constructor(l.length*f);let d=0,m=0;for(let v=0,x=l.length;v<x;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*f;for(let p=0;p<f;p++)h[m++]=u[d++]}return new oi(h,f,c)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let f=0,c=u.length;f<c;f++){const h=u[f],d=e(h,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let c=0,h=u.length;c<h;c++){const d=u[c];f.push(d.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],c=s[u];for(let h=0,d=c.length;h<d;h++)f.push(c[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const c=a[u];this.addGroup(c.start,c.count,c.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Lw=0;class pa extends ha{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lw++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=qs,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mh,this.blendDst=wh,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Oe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(i.blending=this.blending),this.side!==Ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mh&&(i.blendSrc=this.blendSrc),this.blendDst!==wh&&(i.blendDst=this.blendDst),this.blendEquation!==Gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ia&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ki=new K,ef=new K,fl=new K,sr=new K,tf=new K,hl=new K,nf=new K;class hy{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ef.copy(e).add(n).multiplyScalar(.5),fl.copy(n).sub(e).normalize(),sr.copy(this.origin).sub(ef);const s=e.distanceTo(n)*.5,a=-this.direction.dot(fl),o=sr.dot(this.direction),l=-sr.dot(fl),u=sr.lengthSq(),f=Math.abs(1-a*a);let c,h,d,m;if(f>0)if(c=a*l-o,h=a*o-l,m=s*f,c>=0)if(h>=-m)if(h<=m){const v=1/f;c*=v,h*=v,d=c*(c+a*h+2*o)+h*(a*c+h+2*l)+u}else h=s,c=Math.max(0,-(a*h+o)),d=-c*c+h*(h+2*l)+u;else h=-s,c=Math.max(0,-(a*h+o)),d=-c*c+h*(h+2*l)+u;else h<=-m?(c=Math.max(0,-(-a*s+o)),h=c>0?-s:Math.min(Math.max(-s,-l),s),d=-c*c+h*(h+2*l)+u):h<=m?(c=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+u):(c=Math.max(0,-(a*s+o)),h=c>0?s:Math.min(Math.max(-s,-l),s),d=-c*c+h*(h+2*l)+u);else h=a>0?-s:s,c=Math.max(0,-(a*h+o)),d=-c*c+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(ef).addScaledVector(fl,h),d}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),r=ki.dot(ki)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,f=1/this.direction.y,c=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),c>=0?(o=(e.min.z-h.z)*c,l=(e.max.z-h.z)*c):(o=(e.max.z-h.z)*c,l=(e.min.z-h.z)*c),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,i,r,s){tf.subVectors(n,e),hl.subVectors(i,e),nf.crossVectors(tf,hl);let a=this.direction.dot(nf),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;sr.subVectors(this.origin,e);const l=o*this.direction.dot(hl.crossVectors(sr,hl));if(l<0)return null;const u=o*this.direction.dot(tf.cross(sr));if(u<0||l+u>a)return null;const f=-o*sr.dot(nf);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dy extends pa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bg=new Tt,kr=new hy,dl=new qu,Vg=new K,pl=new K,ml=new K,gl=new K,rf=new K,xl=new K,Hg=new K,_l=new K;class jn extends Kt{constructor(e=new Yn,n=new dy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){xl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=o[l],c=s[l];f!==0&&(rf.fromBufferAttribute(c,e),a?xl.addScaledVector(rf,f):xl.addScaledVector(rf.sub(n),f))}n.add(xl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dl.copy(i.boundingSphere),dl.applyMatrix4(s),kr.copy(e.ray).recast(e.near),!(dl.containsPoint(kr.origin)===!1&&(kr.intersectSphere(dl,Vg)===null||kr.origin.distanceToSquared(Vg)>(e.far-e.near)**2))&&(Bg.copy(s).invert(),kr.copy(e.ray).applyMatrix4(Bg),!(i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,kr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,c=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=h.length;m<v;m++){const x=h[m],p=a[x.materialIndex],g=Math.max(x.start,d.start),_=Math.min(o.count,Math.min(x.start+x.count,d.start+d.count));for(let E=g,C=_;E<C;E+=3){const M=o.getX(E),b=o.getX(E+1),y=o.getX(E+2);r=vl(this,p,e,i,u,f,c,M,b,y),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let x=m,p=v;x<p;x+=3){const g=o.getX(x),_=o.getX(x+1),E=o.getX(x+2);r=vl(this,a,e,i,u,f,c,g,_,E),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=h.length;m<v;m++){const x=h[m],p=a[x.materialIndex],g=Math.max(x.start,d.start),_=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let E=g,C=_;E<C;E+=3){const M=E,b=E+1,y=E+2;r=vl(this,p,e,i,u,f,c,M,b,y),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let x=m,p=v;x<p;x+=3){const g=x,_=x+1,E=x+2;r=vl(this,a,e,i,u,f,c,g,_,E),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function Dw(t,e,n,i,r,s,a,o){let l;if(e.side===dn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ar,o),l===null)return null;_l.copy(o),_l.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(_l);return u<n.near||u>n.far?null:{distance:u,point:_l.clone(),object:t}}function vl(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,pl),t.getVertexPosition(l,ml),t.getVertexPosition(u,gl);const f=Dw(t,e,n,i,pl,ml,gl,Hg);if(f){const c=new K;ii.getBarycoord(Hg,pl,ml,gl,c),r&&(f.uv=ii.getInterpolatedAttribute(r,o,l,u,c,new rt)),s&&(f.uv1=ii.getInterpolatedAttribute(s,o,l,u,c,new rt)),a&&(f.normal=ii.getInterpolatedAttribute(a,o,l,u,c,new K),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c:u,normal:new K,materialIndex:0};ii.getNormal(pl,ml,gl,h.normal),f.face=h,f.barycoord=c}return f}class Nw extends $t{constructor(e=null,n=1,i=1,r,s,a,o,l,u=qt,f=qt,c,h){super(null,a,o,l,u,f,r,s,c,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sf=new K,kw=new K,Fw=new He;class Hr{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=sf.subVectors(i,n).cross(kw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(sf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Fw.getNormalMatrix(e),r=this.coplanarPoint(sf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new qu,Uw=new rt(.5,.5),yl=new K;class kp{constructor(e=new Hr,n=new Hr,i=new Hr,r=new Hr,s=new Hr,a=new Hr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Si,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],f=s[4],c=s[5],h=s[6],d=s[7],m=s[8],v=s[9],x=s[10],p=s[11],g=s[12],_=s[13],E=s[14],C=s[15];if(r[0].setComponents(u-a,d-f,p-m,C-g).normalize(),r[1].setComponents(u+a,d+f,p+m,C+g).normalize(),r[2].setComponents(u+o,d+c,p+v,C+_).normalize(),r[3].setComponents(u-o,d-c,p-v,C-_).normalize(),i)r[4].setComponents(l,h,x,E).normalize(),r[5].setComponents(u-l,d-h,p-x,C-E).normalize();else if(r[4].setComponents(u-l,d-h,p-x,C-E).normalize(),n===Si)r[5].setComponents(u+l,d+h,p+x,C+E).normalize();else if(n===Eo)r[5].setComponents(l,h,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){Fr.center.set(0,0,0);const n=Uw.distanceTo(e.center);return Fr.radius=.7071067811865476+n,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(yl.x=r.normal.x>0?e.max.x:e.min.x,yl.y=r.normal.y>0?e.max.y:e.min.y,yl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class py extends pa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gg=new Tt,dd=new hy,Sl=new qu,El=new K;class Ow extends Kt{constructor(e=new Yn,n=new py){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(r),Sl.radius+=s,e.ray.intersectsSphere(Sl)===!1)return;Gg.copy(r).invert(),dd.copy(e.ray).applyMatrix4(Gg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,c=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=h,v=d;m<v;m++){const x=u.getX(m);El.fromBufferAttribute(c,x),Wg(El,x,l,r,e,n,this)}}else{const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=h,v=d;m<v;m++)El.fromBufferAttribute(c,m),Wg(El,m,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wg(t,e,n,i,r,s,a){const o=dd.distanceSqToPoint(t);if(o<n){const l=new K;dd.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class my extends $t{constructor(e=[],n=rs,i,r,s,a,o,l,u,f){super(e,n,i,r,s,a,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zw extends $t{constructor(e,n,i,r,s,a,o,l,u){super(e,n,i,r,s,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wo extends $t{constructor(e,n,i=Ai,r,s,a,o=qt,l=qt,u,f=$i,c=1){if(f!==$i&&f!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:c};super(h,r,s,a,o,l,f,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Bw extends wo{constructor(e,n=Ai,i=rs,r,s,a=qt,o=qt,l,u=$i){const f={width:e,height:e,depth:1},c=[f,f,f,f,f,f];super(e,e,n,i,r,s,a,o,l,u),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gy extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class No extends Yn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],f=[],c=[];let h=0,d=0;m("z","y","x",-1,-1,i,n,e,a,s,0),m("z","y","x",1,-1,i,n,-e,a,s,1),m("x","z","y",1,1,e,i,n,r,a,2),m("x","z","y",1,-1,e,i,-n,r,a,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wn(u,3)),this.setAttribute("normal",new Wn(f,3)),this.setAttribute("uv",new Wn(c,2));function m(v,x,p,g,_,E,C,M,b,y,T){const R=E/b,P=C/y,F=E/2,H=C/2,Y=M/2,z=b+1,X=y+1;let V=0,j=0;const Z=new K;for(let A=0;A<X;A++){const re=A*P-H;for(let se=0;se<z;se++){const L=se*R-F;Z[v]=L*g,Z[x]=re*_,Z[p]=Y,u.push(Z.x,Z.y,Z.z),Z[v]=0,Z[x]=0,Z[p]=M>0?1:-1,f.push(Z.x,Z.y,Z.z),c.push(se/b),c.push(1-A/y),V+=1}}for(let A=0;A<y;A++)for(let re=0;re<b;re++){const se=h+re+z*A,L=h+re+z*(A+1),Fe=h+(re+1)+z*(A+1),Ge=h+(re+1)+z*A;l.push(se,L,Ge),l.push(L,Fe,Ge),j+=6}o.addGroup(d,j,T),d+=j,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Yu extends Yn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,f=l+1,c=e/o,h=n/l,d=[],m=[],v=[],x=[];for(let p=0;p<f;p++){const g=p*h-a;for(let _=0;_<u;_++){const E=_*c-s;m.push(E,-g,0),v.push(0,0,1),x.push(_/o),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let g=0;g<o;g++){const _=g+u*p,E=g+u*(p+1),C=g+1+u*(p+1),M=g+1+u*p;d.push(_,E,M),d.push(E,C,M)}this.setIndex(d),this.setAttribute("position",new Wn(m,3)),this.setAttribute("normal",new Wn(v,3)),this.setAttribute("uv",new Wn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Za extends Yn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const f=[],c=new K,h=new K,d=[],m=[],v=[],x=[];for(let p=0;p<=i;p++){const g=[],_=p/i;let E=0;p===0&&a===0?E=.5/n:p===i&&l===Math.PI&&(E=-.5/n);for(let C=0;C<=n;C++){const M=C/n;c.x=-e*Math.cos(r+M*s)*Math.sin(a+_*o),c.y=e*Math.cos(a+_*o),c.z=e*Math.sin(r+M*s)*Math.sin(a+_*o),m.push(c.x,c.y,c.z),h.copy(c).normalize(),v.push(h.x,h.y,h.z),x.push(M+E,1-_),g.push(u++)}f.push(g)}for(let p=0;p<i;p++)for(let g=0;g<n;g++){const _=f[p][g+1],E=f[p][g],C=f[p+1][g],M=f[p+1][g+1];(p!==0||a>0)&&d.push(_,E,M),(p!==i-1||l<Math.PI)&&d.push(E,C,M)}this.setIndex(d),this.setAttribute("position",new Wn(m,3)),this.setAttribute("normal",new Wn(v,3)),this.setAttribute("uv",new Wn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function oa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=oa(t[n]);for(const r in i)e[r]=i[r]}return e}function Vw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function xy(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Hw={clone:oa,merge:un};var Gw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ww=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends pa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gw,this.fragmentShader=Ww,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oa(e.uniforms),this.uniformsGroups=Vw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class jw extends ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jg extends pa{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ke(16777215),this.specular=new Ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sy,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=wp,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xw extends pa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qw extends pa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const af={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(Xg(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!Xg(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Xg(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Yw{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,c){return u.push(f,c),this},this.removeHandler=function(f){const c=u.indexOf(f);return c!==-1&&u.splice(c,2),this},this.getHandler=function(f){for(let c=0,h=u.length;c<h;c+=2){const d=u[c],m=u[c+1];if(d.global&&(d.lastIndex=0),d.test(f))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const $w=new Yw;class Fp{constructor(e){this.manager=e!==void 0?e:$w,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Fp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ms=new WeakMap;class Kw extends Fp{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=af.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0);else{let c=Ms.get(a);c===void 0&&(c=[],Ms.set(a,c)),c.push({onLoad:n,onError:r})}return a}const o=Mo("img");function l(){f(),n&&n(this);const c=Ms.get(this)||[];for(let h=0;h<c.length;h++){const d=c[h];d.onLoad&&d.onLoad(this)}Ms.delete(this),s.manager.itemEnd(e)}function u(c){f(),r&&r(c),af.remove(`image:${e}`);const h=Ms.get(this)||[];for(let d=0;d<h.length;d++){const m=h[d];m.onError&&m.onError(c)}Ms.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),af.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Zw extends Fp{constructor(e){super(e)}load(e,n,i,r){const s=new $t,a=new Kw(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class _y extends Kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const of=new Tt,qg=new K,Yg=new K;class Qw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kp,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;qg.setFromMatrixPosition(e.matrixWorld),n.position.copy(qg),Yg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Yg),n.updateMatrixWorld(),of.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(of,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Eo||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(of)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ml=new K,wl=new da,di=new K;class vy extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ml,wl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,wl,di.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Ml,wl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,wl,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ar=new K,$g=new rt,Kg=new rt;class Bn extends vy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=hd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hd*2*Math.atan(Math.tan(kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,n){return this.getViewBounds(e,$g,Kg),n.subVectors(Kg,$g)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(kc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Up extends vy{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Jw extends Qw{constructor(){super(new Up(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zg extends _y{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new Jw}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class eT extends _y{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ws=-90,Ts=1;class tT extends Kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bn(ws,Ts,e,n);r.layers=this.layers,this.add(r);const s=new Bn(ws,Ts,e,n);s.layers=this.layers,this.add(s);const a=new Bn(ws,Ts,e,n);a.layers=this.layers,this.add(a);const o=new Bn(ws,Ts,e,n);o.layers=this.layers,this.add(o);const l=new Bn(ws,Ts,e,n);l.layers=this.layers,this.add(l);const u=new Bn(ws,Ts,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,f]=this.children,c=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(c,h,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class nT extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Qg(t,e,n,i){const r=iT(i);switch(n){case ny:return t*e;case ry:return t*e/r.components*r.byteLength;case bp:return t*e/r.components*r.byteLength;case sa:return t*e*2/r.components*r.byteLength;case Rp:return t*e*2/r.components*r.byteLength;case iy:return t*e*3/r.components*r.byteLength;case ri:return t*e*4/r.components*r.byteLength;case Pp:return t*e*4/r.components*r.byteLength;case Wl:case jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xl:case ql:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kh:case Uh:return Math.max(t,16)*Math.max(e,8)/4;case Nh:case Fh:return Math.max(t,8)*Math.max(e,8)/2;case Oh:case zh:case Vh:case Hh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Bh:case Gh:case Wh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case qh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case $h:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Jh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ed:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case td:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case nd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case id:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case rd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case sd:case ad:case od:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ld:case ud:return Math.ceil(t/4)*Math.ceil(e/4)*8;case cd:case fd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function iT(t){switch(t){case Rn:case Qv:return{byteLength:1,components:1};case yo:case Jv:case Yi:return{byteLength:2,components:1};case Ap:case Cp:return{byteLength:2,components:4};case Ai:case Tp:case yi:return{byteLength:4,components:1};case ey:case ty:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mp}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yy(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function rT(t){const e=new WeakMap;function n(o,l){const u=o.array,f=o.usage,c=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,f),o.onUploadCallback();let d;if(u instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)d=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=t.SHORT;else if(u instanceof Uint32Array)d=t.UNSIGNED_INT;else if(u instanceof Int32Array)d=t.INT;else if(u instanceof Int8Array)d=t.BYTE;else if(u instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:c}}function i(o,l,u){const f=l.array,c=l.updateRanges;if(t.bindBuffer(u,o),c.length===0)t.bufferSubData(u,0,f);else{c.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<c.length;d++){const m=c[h],v=c[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++h,c[h]=v)}c.length=h+1;for(let d=0,m=c.length;d<m;d++){const v=c[d];t.bufferSubData(u,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var sT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,pT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_T=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ET=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,TT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,AT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,CT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,RT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,PT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,IT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kT="gl_FragColor = linearToOutputTexel( gl_FragColor );",FT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,OT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,BT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$T=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ZT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,QT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_A=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,SA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,MA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,NA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,VA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,HA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,GA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,WA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,XA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,YA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$A=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,QA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,pC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_C=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,TC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,AC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,DC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:sT,alphahash_pars_fragment:aT,alphamap_fragment:oT,alphamap_pars_fragment:lT,alphatest_fragment:uT,alphatest_pars_fragment:cT,aomap_fragment:fT,aomap_pars_fragment:hT,batching_pars_vertex:dT,batching_vertex:pT,begin_vertex:mT,beginnormal_vertex:gT,bsdfs:xT,iridescence_fragment:_T,bumpmap_pars_fragment:vT,clipping_planes_fragment:yT,clipping_planes_pars_fragment:ST,clipping_planes_pars_vertex:ET,clipping_planes_vertex:MT,color_fragment:wT,color_pars_fragment:TT,color_pars_vertex:AT,color_vertex:CT,common:bT,cube_uv_reflection_fragment:RT,defaultnormal_vertex:PT,displacementmap_pars_vertex:IT,displacementmap_vertex:LT,emissivemap_fragment:DT,emissivemap_pars_fragment:NT,colorspace_fragment:kT,colorspace_pars_fragment:FT,envmap_fragment:UT,envmap_common_pars_fragment:OT,envmap_pars_fragment:zT,envmap_pars_vertex:BT,envmap_physical_pars_fragment:ZT,envmap_vertex:VT,fog_vertex:HT,fog_pars_vertex:GT,fog_fragment:WT,fog_pars_fragment:jT,gradientmap_pars_fragment:XT,lightmap_pars_fragment:qT,lights_lambert_fragment:YT,lights_lambert_pars_fragment:$T,lights_pars_begin:KT,lights_toon_fragment:QT,lights_toon_pars_fragment:JT,lights_phong_fragment:eA,lights_phong_pars_fragment:tA,lights_physical_fragment:nA,lights_physical_pars_fragment:iA,lights_fragment_begin:rA,lights_fragment_maps:sA,lights_fragment_end:aA,logdepthbuf_fragment:oA,logdepthbuf_pars_fragment:lA,logdepthbuf_pars_vertex:uA,logdepthbuf_vertex:cA,map_fragment:fA,map_pars_fragment:hA,map_particle_fragment:dA,map_particle_pars_fragment:pA,metalnessmap_fragment:mA,metalnessmap_pars_fragment:gA,morphinstance_vertex:xA,morphcolor_vertex:_A,morphnormal_vertex:vA,morphtarget_pars_vertex:yA,morphtarget_vertex:SA,normal_fragment_begin:EA,normal_fragment_maps:MA,normal_pars_fragment:wA,normal_pars_vertex:TA,normal_vertex:AA,normalmap_pars_fragment:CA,clearcoat_normal_fragment_begin:bA,clearcoat_normal_fragment_maps:RA,clearcoat_pars_fragment:PA,iridescence_pars_fragment:IA,opaque_fragment:LA,packing:DA,premultiplied_alpha_fragment:NA,project_vertex:kA,dithering_fragment:FA,dithering_pars_fragment:UA,roughnessmap_fragment:OA,roughnessmap_pars_fragment:zA,shadowmap_pars_fragment:BA,shadowmap_pars_vertex:VA,shadowmap_vertex:HA,shadowmask_pars_fragment:GA,skinbase_vertex:WA,skinning_pars_vertex:jA,skinning_vertex:XA,skinnormal_vertex:qA,specularmap_fragment:YA,specularmap_pars_fragment:$A,tonemapping_fragment:KA,tonemapping_pars_fragment:ZA,transmission_fragment:QA,transmission_pars_fragment:JA,uv_pars_fragment:eC,uv_pars_vertex:tC,uv_vertex:nC,worldpos_vertex:iC,background_vert:rC,background_frag:sC,backgroundCube_vert:aC,backgroundCube_frag:oC,cube_vert:lC,cube_frag:uC,depth_vert:cC,depth_frag:fC,distance_vert:hC,distance_frag:dC,equirect_vert:pC,equirect_frag:mC,linedashed_vert:gC,linedashed_frag:xC,meshbasic_vert:_C,meshbasic_frag:vC,meshlambert_vert:yC,meshlambert_frag:SC,meshmatcap_vert:EC,meshmatcap_frag:MC,meshnormal_vert:wC,meshnormal_frag:TC,meshphong_vert:AC,meshphong_frag:CC,meshphysical_vert:bC,meshphysical_frag:RC,meshtoon_vert:PC,meshtoon_frag:IC,points_vert:LC,points_frag:DC,shadow_vert:NC,shadow_frag:kC,sprite_vert:FC,sprite_frag:UC},me={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},xi={basic:{uniforms:un([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:un([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:un([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:un([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:un([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ke(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:un([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:un([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:un([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:un([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:un([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:un([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:un([me.common,me.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:un([me.lights,me.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};xi.physical={uniforms:un([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Tl={r:0,b:0,g:0},Ur=new Ci,OC=new Tt;function zC(t,e,n,i,r,s){const a=new Ke(0);let o=r===!0?0:1,l,u,f=null,c=0,h=null;function d(g){let _=g.isScene===!0?g.background:null;if(_&&_.isTexture){const E=g.backgroundBlurriness>0;_=e.get(_,E)}return _}function m(g){let _=!1;const E=d(g);E===null?x(a,o):E&&E.isColor&&(x(E,1),_=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(g,_){const E=d(_);E&&(E.isCubeTexture||E.mapping===Xu)?(u===void 0&&(u=new jn(new No(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:oa(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,M,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ur.copy(_.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(OC.makeRotationFromEuler(Ur)),u.material.toneMapped=Je.getTransfer(E.colorSpace)!==ot,(f!==E||c!==E.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=E,c=E.version,h=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new jn(new Yu(2,2),new ci({name:"BackgroundMaterial",uniforms:oa(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Je.getTransfer(E.colorSpace)!==ot,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||c!==E.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,f=E,c=E.version,h=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function x(g,_){g.getRGB(Tl,xy(t)),n.buffers.color.setClear(Tl.r,Tl.g,Tl.b,_,s)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),o=_,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,x(a,o)},render:m,addToRenderList:v,dispose:p}}function BC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(P,F,H,Y,z){let X=!1;const V=c(P,Y,H,F);s!==V&&(s=V,u(s.object)),X=d(P,Y,H,z),X&&m(P,Y,H,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,E(P,F,H,Y),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function u(P){return t.bindVertexArray(P)}function f(P){return t.deleteVertexArray(P)}function c(P,F,H,Y){const z=Y.wireframe===!0;let X=i[F.id];X===void 0&&(X={},i[F.id]=X);const V=P.isInstancedMesh===!0?P.id:0;let j=X[V];j===void 0&&(j={},X[V]=j);let Z=j[H.id];Z===void 0&&(Z={},j[H.id]=Z);let A=Z[z];return A===void 0&&(A=h(l()),Z[z]=A),A}function h(P){const F=[],H=[],Y=[];for(let z=0;z<n;z++)F[z]=0,H[z]=0,Y[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:Y,object:P,attributes:{},index:null}}function d(P,F,H,Y){const z=s.attributes,X=F.attributes;let V=0;const j=H.getAttributes();for(const Z in j)if(j[Z].location>=0){const re=z[Z];let se=X[Z];if(se===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(se=P.instanceColor)),re===void 0||re.attribute!==se||se&&re.data!==se.data)return!0;V++}return s.attributesNum!==V||s.index!==Y}function m(P,F,H,Y){const z={},X=F.attributes;let V=0;const j=H.getAttributes();for(const Z in j)if(j[Z].location>=0){let re=X[Z];re===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(re=P.instanceColor));const se={};se.attribute=re,re&&re.data&&(se.data=re.data),z[Z]=se,V++}s.attributes=z,s.attributesNum=V,s.index=Y}function v(){const P=s.newAttributes;for(let F=0,H=P.length;F<H;F++)P[F]=0}function x(P){p(P,0)}function p(P,F){const H=s.newAttributes,Y=s.enabledAttributes,z=s.attributeDivisors;H[P]=1,Y[P]===0&&(t.enableVertexAttribArray(P),Y[P]=1),z[P]!==F&&(t.vertexAttribDivisor(P,F),z[P]=F)}function g(){const P=s.newAttributes,F=s.enabledAttributes;for(let H=0,Y=F.length;H<Y;H++)F[H]!==P[H]&&(t.disableVertexAttribArray(H),F[H]=0)}function _(P,F,H,Y,z,X,V){V===!0?t.vertexAttribIPointer(P,F,H,z,X):t.vertexAttribPointer(P,F,H,Y,z,X)}function E(P,F,H,Y){v();const z=Y.attributes,X=H.getAttributes(),V=F.defaultAttributeValues;for(const j in X){const Z=X[j];if(Z.location>=0){let A=z[j];if(A===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(A=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(A=P.instanceColor)),A!==void 0){const re=A.normalized,se=A.itemSize,L=e.get(A);if(L===void 0)continue;const Fe=L.buffer,Ge=L.type,Q=L.bytesPerElement,ne=Ge===t.INT||Ge===t.UNSIGNED_INT||A.gpuType===Tp;if(A.isInterleavedBufferAttribute){const oe=A.data,ke=oe.stride,Re=A.offset;if(oe.isInstancedInterleavedBuffer){for(let De=0;De<Z.locationSize;De++)p(Z.location+De,oe.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let De=0;De<Z.locationSize;De++)x(Z.location+De);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let De=0;De<Z.locationSize;De++)_(Z.location+De,se/Z.locationSize,Ge,re,ke*Q,(Re+se/Z.locationSize*De)*Q,ne)}else{if(A.isInstancedBufferAttribute){for(let oe=0;oe<Z.locationSize;oe++)p(Z.location+oe,A.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let oe=0;oe<Z.locationSize;oe++)x(Z.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let oe=0;oe<Z.locationSize;oe++)_(Z.location+oe,se/Z.locationSize,Ge,re,se*Q,se/Z.locationSize*oe*Q,ne)}}else if(V!==void 0){const re=V[j];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(Z.location,re);break;case 3:t.vertexAttrib3fv(Z.location,re);break;case 4:t.vertexAttrib4fv(Z.location,re);break;default:t.vertexAttrib1fv(Z.location,re)}}}}g()}function C(){T();for(const P in i){const F=i[P];for(const H in F){const Y=F[H];for(const z in Y){const X=Y[z];for(const V in X)f(X[V].object),delete X[V];delete Y[z]}}delete i[P]}}function M(P){if(i[P.id]===void 0)return;const F=i[P.id];for(const H in F){const Y=F[H];for(const z in Y){const X=Y[z];for(const V in X)f(X[V].object),delete X[V];delete Y[z]}}delete i[P.id]}function b(P){for(const F in i){const H=i[F];for(const Y in H){const z=H[Y];if(z[P.id]===void 0)continue;const X=z[P.id];for(const V in X)f(X[V].object),delete X[V];delete z[P.id]}}}function y(P){for(const F in i){const H=i[F],Y=P.isInstancedMesh===!0?P.id:0,z=H[Y];if(z!==void 0){for(const X in z){const V=z[X];for(const j in V)f(V[j].object),delete V[j];delete z[X]}delete H[Y],Object.keys(H).length===0&&delete i[F]}}}function T(){R(),a=!0,s!==r&&(s=r,u(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:C,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:x,disableUnusedAttributes:g}}function VC(t,e,n){let i;function r(u){i=u}function s(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function a(u,f,c){c!==0&&(t.drawArraysInstanced(i,u,f,c),n.update(f,i,c))}function o(u,f,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,c);let d=0;for(let m=0;m<c;m++)d+=f[m];n.update(d,i,1)}function l(u,f,c,h){if(c===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<u.length;m++)a(u[m],f[m],h[m]);else{d.multiDrawArraysInstancedWEBGL(i,u,0,f,0,h,0,c);let m=0;for(let v=0;v<c;v++)m+=f[v]*h[v];n.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function HC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==ri&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const y=b===Yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Rn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==yi&&!y)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(Oe("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const c=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),M=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:c,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:E,maxSamples:C,samples:M}}function GC(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Hr,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,h){const d=c.length!==0||h||i!==0||r;return r=h,i=c.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,h){n=f(c,h,0)},this.setState=function(c,h,d){const m=c.clippingPlanes,v=c.clipIntersection,x=c.clipShadows,p=t.get(c);if(!r||m===null||m.length===0||s&&!x)s?f(null):u();else{const g=s?0:i,_=g*4;let E=p.clippingState||null;l.value=E,E=f(m,h,_,d);for(let C=0;C!==_;++C)E[C]=n[C];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(c,h,d,m){const v=c!==null?c.length:0;let x=null;if(v!==0){if(x=l.value,m!==!0||x===null){const p=d+v*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(x===null||x.length<p)&&(x=new Float32Array(p));for(let _=0,E=d;_!==v;++_,E+=4)a.copy(c[_]).applyMatrix4(g,o),a.normal.toArray(x,E),x[E+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}const mr=4,Jg=[.125,.215,.35,.446,.526,.582],Wr=20,WC=256,Ia=new Up,e0=new Ke;let lf=null,uf=0,cf=0,ff=!1;const jC=new K;class t0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=jC}=s;lf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),cf=this._renderer.getActiveMipmapLevel(),ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=r0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lf,uf,cf),this._renderer.xr.enabled=ff,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===rs||e.mapping===ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),cf=this._renderer.getActiveMipmapLevel(),ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Yi,format:ri,colorSpace:aa,depthBuffer:!1},r=n0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=n0(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XC(s)),this._blurMaterial=YC(s,e,n),this._ggxMaterial=qC(s,e,n)}return r}_compileMaterial(e){const n=new jn(new Yn,e);this._renderer.compile(n,Ia)}_sceneToCubeUV(e,n,i,r,s){const l=new Bn(90,1,n,i),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(e0),c.toneMapping=wi,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jn(new No,new dy({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,x=v.material;let p=!1;const g=e.background;g?g.isColor&&(x.color.copy(g),e.background=null,p=!0):(x.color.copy(e0),p=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(l.up.set(0,u[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[_],s.y,s.z)):E===1?(l.up.set(0,0,u[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[_],s.z)):(l.up.set(0,u[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[_]));const C=this._cubeSize;As(r,E*C,_>2?C:0,C,C),c.setRenderTarget(r),p&&c.render(v,l),c.render(e,l)}c.toneMapping=d,c.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===rs||e.mapping===ra;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=r0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=i0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;As(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Ia)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),c=Math.sqrt(u*u-f*f),h=0+u*1.25,d=c*h,{_lodMax:m}=this,v=this._sizeLods[i],x=3*v*(i>m-mr?i-m+mr:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-n,As(s,x,p,3*v,2*v),r.setRenderTarget(s),r.render(o,Ia),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,As(e,x,p,3*v,2*v),r.setRenderTarget(e),r.render(o,Ia)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const f=3,c=this._lodMeshes[r];c.material=u;const h=u.uniforms,d=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Wr-1),v=s/m,x=isFinite(s)?1+Math.floor(f*v):Wr;x>Wr&&Oe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Wr}`);const p=[];let g=0;for(let b=0;b<Wr;++b){const y=b/v,T=Math.exp(-y*y/2);p.push(T),b===0?g+=T:b<x&&(g+=2*T)}for(let b=0;b<p.length;b++)p[b]=p[b]/g;h.envMap.value=e.texture,h.samples.value=x,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=m,h.mipInt.value=_-i;const E=this._sizeLods[r],C=3*E*(r>_-mr?r-_+mr:0),M=4*(this._cubeSize-E);As(n,C,M,3*E,2*E),l.setRenderTarget(n),l.render(c,Ia)}}function XC(t){const e=[],n=[],i=[];let r=t;const s=t-mr+1+Jg.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-mr?l=Jg[a-t+mr-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),f=-u,c=1+u,h=[f,f,c,f,c,c,f,f,c,c,f,c],d=6,m=6,v=3,x=2,p=1,g=new Float32Array(v*m*d),_=new Float32Array(x*m*d),E=new Float32Array(p*m*d);for(let M=0;M<d;M++){const b=M%3*2/3-1,y=M>2?0:-1,T=[b,y,0,b+2/3,y,0,b+2/3,y+1,0,b,y,0,b+2/3,y+1,0,b,y+1,0];g.set(T,v*m*M),_.set(h,x*m*M);const R=[M,M,M,M,M,M];E.set(R,p*m*M)}const C=new Yn;C.setAttribute("position",new oi(g,v)),C.setAttribute("uv",new oi(_,x)),C.setAttribute("faceIndex",new oi(E,p)),i.push(new jn(C,null)),r>mr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function n0(t,e,n){const i=new Ti(t,e,n);return i.texture.mapping=Xu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function As(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function qC(t,e,n){return new ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$u(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function YC(t,e,n){const i=new Float32Array(Wr),r=new K(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function i0(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function r0(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function $u(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Sy extends Ti{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new my(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new No(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:oa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Hi});s.uniforms.tEquirect.value=n;const a=new jn(r,s),o=n.minFilter;return n.minFilter===$r&&(n.minFilter=sn),new tT(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function $C(t){let e=new WeakMap,n=new WeakMap,i=null;function r(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Lc||d===Dc)if(e.has(h)){const m=e.get(h).texture;return o(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const v=new Sy(m.height);return v.fromEquirectangularTexture(t,h),e.set(h,v),h.addEventListener("dispose",u),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,m=d===Lc||d===Dc,v=d===rs||d===ra;if(m||v){let x=n.get(h);const p=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new t0(t)),x=m?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,n.set(h,x),x.texture;if(x!==void 0)return x.texture;{const g=h.image;return m&&g&&g.height>0||v&&g&&l(g)?(i===null&&(i=new t0(t)),x=m?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,n.set(h,x),h.addEventListener("dispose",f),x.texture):null}}}return h}function o(h,d){return d===Lc?h.mapping=rs:d===Dc&&(h.mapping=ra),h}function l(h){let d=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&d++;return d===m}function u(h){const d=h.target;d.removeEventListener("dispose",u);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(h){const d=h.target;d.removeEventListener("dispose",f);const m=n.get(d);m!==void 0&&(n.delete(d),m.dispose())}function c(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:c}}function KC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Tu("WebGLRenderer: "+i+" extension not supported."),r}}}function ZC(t,e,n,i){const r={},s=new WeakMap;function a(c){const h=c.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(c,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(c){const h=c.attributes;for(const d in h)e.update(h[d],t.ARRAY_BUFFER)}function u(c){const h=[],d=c.index,m=c.attributes.position;let v=0;if(m===void 0)return;if(d!==null){const g=d.array;v=d.version;for(let _=0,E=g.length;_<E;_+=3){const C=g[_+0],M=g[_+1],b=g[_+2];h.push(C,M,M,b,b,C)}}else{const g=m.array;v=m.version;for(let _=0,E=g.length/3-1;_<E;_+=3){const C=_+0,M=_+1,b=_+2;h.push(C,M,M,b,b,C)}}const x=new(m.count>=65535?fy:cy)(h,1);x.version=v;const p=s.get(c);p&&e.remove(p),s.set(c,x)}function f(c){const h=s.get(c);if(h){const d=c.index;d!==null&&h.version<d.version&&u(c)}else u(c);return s.get(c)}return{get:o,update:l,getWireframeAttribute:f}}function QC(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*a),n.update(d,i,1)}function u(h,d,m){m!==0&&(t.drawElementsInstanced(i,d,s,h*a,m),n.update(d,i,m))}function f(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,m);let x=0;for(let p=0;p<m;p++)x+=d[p];n.update(x,i,1)}function c(h,d,m,v){if(m===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<h.length;p++)u(h[p]/a,d[p],v[p]);else{x.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,v,0,m);let p=0;for(let g=0;g<m;g++)p+=d[g]*v[g];n.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=c}function JC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function eb(t,e,n){const i=new WeakMap,r=new Rt;function s(a,o,l){const u=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,c=f!==void 0?f.length:0;let h=i.get(o);if(h===void 0||h.count!==c){let R=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var d=R;h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let E=0;m===!0&&(E=1),v===!0&&(E=2),x===!0&&(E=3);let C=o.attributes.position.count*E,M=1;C>e.maxTextureSize&&(M=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*M*4*c),y=new oy(b,C,M,c);y.type=yi,y.needsUpdate=!0;const T=E*4;for(let P=0;P<c;P++){const F=p[P],H=g[P],Y=_[P],z=C*M*4*P;for(let X=0;X<F.count;X++){const V=X*T;m===!0&&(r.fromBufferAttribute(F,X),b[z+V+0]=r.x,b[z+V+1]=r.y,b[z+V+2]=r.z,b[z+V+3]=0),v===!0&&(r.fromBufferAttribute(H,X),b[z+V+4]=r.x,b[z+V+5]=r.y,b[z+V+6]=r.z,b[z+V+7]=0),x===!0&&(r.fromBufferAttribute(Y,X),b[z+V+8]=r.x,b[z+V+9]=r.y,b[z+V+10]=r.z,b[z+V+11]=Y.itemSize===4?r.w:1)}}h={count:c,texture:y,size:new rt(C,M)},i.set(o,h),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let x=0;x<u.length;x++)m+=u[x];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function tb(t,e,n,i,r){let s=new WeakMap;function a(u){const f=r.render.frame,c=u.geometry,h=e.get(u,c);if(s.get(h)!==f&&(e.update(h),s.set(h,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==f&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,f))),u.isSkinnedMesh){const d=u.skeleton;s.get(d)!==f&&(d.update(),s.set(d,f))}return h}function o(){s=new WeakMap}function l(u){const f=u.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:a,dispose:o}}const nb={[Wv]:"LINEAR_TONE_MAPPING",[jv]:"REINHARD_TONE_MAPPING",[Xv]:"CINEON_TONE_MAPPING",[qv]:"ACES_FILMIC_TONE_MAPPING",[$v]:"AGX_TONE_MAPPING",[Kv]:"NEUTRAL_TONE_MAPPING",[Yv]:"CUSTOM_TONE_MAPPING"};function ib(t,e,n,i,r){const s=new Ti(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new Ti(e,n,{type:Yi,depthBuffer:!1,stencilBuffer:!1}),o=new Yn;o.setAttribute("position",new Wn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Wn([0,2,0,0,2,0],2));const l=new jw({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new jn(o,l),f=new Up(-1,1,1,-1,0,1);let c=null,h=null,d=!1,m,v=null,x=[],p=!1;this.setSize=function(g,_){s.setSize(g,_),a.setSize(g,_);for(let E=0;E<x.length;E++){const C=x[E];C.setSize&&C.setSize(g,_)}},this.setEffects=function(g){x=g,p=x.length>0&&x[0].isRenderPass===!0;const _=s.width,E=s.height;for(let C=0;C<x.length;C++){const M=x[C];M.setSize&&M.setSize(_,E)}},this.begin=function(g,_){if(d||g.toneMapping===wi&&x.length===0)return!1;if(v=_,_!==null){const E=_.width,C=_.height;(s.width!==E||s.height!==C)&&this.setSize(E,C)}return p===!1&&g.setRenderTarget(s),m=g.toneMapping,g.toneMapping=wi,!0},this.hasRenderPass=function(){return p},this.end=function(g,_){g.toneMapping=m,d=!0;let E=s,C=a;for(let M=0;M<x.length;M++){const b=x[M];if(b.enabled!==!1&&(b.render(g,C,E,_),b.needsSwap!==!1)){const y=E;E=C,C=y}}if(c!==g.outputColorSpace||h!==g.toneMapping){c=g.outputColorSpace,h=g.toneMapping,l.defines={},Je.getTransfer(c)===ot&&(l.defines.SRGB_TRANSFER="");const M=nb[h];M&&(l.defines[M]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,g.setRenderTarget(v),g.render(u,f),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Ey=new $t,pd=new wo(1,1),My=new oy,wy=new yw,Ty=new my,s0=[],a0=[],o0=new Float32Array(16),l0=new Float32Array(9),u0=new Float32Array(4);function ma(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=s0[r];if(s===void 0&&(s=new Float32Array(r),s0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ku(t,e){let n=a0[e];n===void 0&&(n=new Int32Array(e),a0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function rb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function sb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function lb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Ot(n,i))return;u0.set(i),t.uniformMatrix2fv(this.addr,!1,u0),zt(n,i)}}function ub(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Ot(n,i))return;l0.set(i),t.uniformMatrix3fv(this.addr,!1,l0),zt(n,i)}}function cb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Ot(n,i))return;o0.set(i),t.uniformMatrix4fv(this.addr,!1,o0),zt(n,i)}}function fb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function hb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function db(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function pb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function mb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function xb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function _b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function vb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(pd.compareFunction=n.isReversedDepthBuffer()?Lp:Ip,s=pd):s=Ey,n.setTexture2D(e||s,r)}function yb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||wy,r)}function Sb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ty,r)}function Eb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||My,r)}function Mb(t){switch(t){case 5126:return rb;case 35664:return sb;case 35665:return ab;case 35666:return ob;case 35674:return lb;case 35675:return ub;case 35676:return cb;case 5124:case 35670:return fb;case 35667:case 35671:return hb;case 35668:case 35672:return db;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return gb;case 36295:return xb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return yb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return Eb}}function wb(t,e){t.uniform1fv(this.addr,e)}function Tb(t,e){const n=ma(e,this.size,2);t.uniform2fv(this.addr,n)}function Ab(t,e){const n=ma(e,this.size,3);t.uniform3fv(this.addr,n)}function Cb(t,e){const n=ma(e,this.size,4);t.uniform4fv(this.addr,n)}function bb(t,e){const n=ma(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Rb(t,e){const n=ma(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Pb(t,e){const n=ma(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Ib(t,e){t.uniform1iv(this.addr,e)}function Lb(t,e){t.uniform2iv(this.addr,e)}function Db(t,e){t.uniform3iv(this.addr,e)}function Nb(t,e){t.uniform4iv(this.addr,e)}function kb(t,e){t.uniform1uiv(this.addr,e)}function Fb(t,e){t.uniform2uiv(this.addr,e)}function Ub(t,e){t.uniform3uiv(this.addr,e)}function Ob(t,e){t.uniform4uiv(this.addr,e)}function zb(t,e,n){const i=this.cache,r=e.length,s=Ku(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=pd:a=Ey;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function Bb(t,e,n){const i=this.cache,r=e.length,s=Ku(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||wy,s[a])}function Vb(t,e,n){const i=this.cache,r=e.length,s=Ku(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Ty,s[a])}function Hb(t,e,n){const i=this.cache,r=e.length,s=Ku(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||My,s[a])}function Gb(t){switch(t){case 5126:return wb;case 35664:return Tb;case 35665:return Ab;case 35666:return Cb;case 35674:return bb;case 35675:return Rb;case 35676:return Pb;case 5124:case 35670:return Ib;case 35667:case 35671:return Lb;case 35668:case 35672:return Db;case 35669:case 35673:return Nb;case 5125:return kb;case 36294:return Fb;case 36295:return Ub;case 36296:return Ob;case 35678:case 36198:case 36298:case 36306:case 35682:return zb;case 35679:case 36299:case 36307:return Bb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return Hb}}class Wb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Mb(n.type)}}class jb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Gb(n.type)}}class Xb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const hf=/(\w+)(\])?(\[|\.)?/g;function c0(t,e){t.seq.push(e),t.map[e.id]=e}function qb(t,e,n){const i=t.name,r=i.length;for(hf.lastIndex=0;;){const s=hf.exec(i),a=hf.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){c0(n,u===void 0?new Wb(o,t,e):new jb(o,t,e));break}else{let c=n.map[o];c===void 0&&(c=new Xb(o),c0(n,c)),n=c}}}class Yl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);qb(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function f0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Yb=37297;let $b=0;function Kb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const h0=new He;function Zb(t){Je._getMatrix(h0,Je.workingColorSpace,t);const e=`mat3( ${h0.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case wu:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function d0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Kb(t.getShaderSource(e),o)}else return s}function Qb(t,e){const n=Zb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Jb={[Wv]:"Linear",[jv]:"Reinhard",[Xv]:"Cineon",[qv]:"ACESFilmic",[$v]:"AgX",[Kv]:"Neutral",[Yv]:"Custom"};function eR(t,e){const n=Jb[e];return n===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Al=new K;function tR(){Je.getLuminanceCoefficients(Al);const t=Al.x.toFixed(4),e=Al.y.toFixed(4),n=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function iR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function rR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Va(t){return t!==""}function p0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function m0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sR=/^[ \t]*#include +<([\w\d./]+)>/gm;function md(t){return t.replace(sR,oR)}const aR=new Map;function oR(t,e){let n=We[e];if(n===void 0){const i=aR.get(e);if(i!==void 0)n=We[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return md(n)}const lR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function g0(t){return t.replace(lR,uR)}function uR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function x0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const cR={[Gl]:"SHADOWMAP_TYPE_PCF",[za]:"SHADOWMAP_TYPE_VSM"};function fR(t){return cR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hR={[rs]:"ENVMAP_TYPE_CUBE",[ra]:"ENVMAP_TYPE_CUBE",[Xu]:"ENVMAP_TYPE_CUBE_UV"};function dR(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":hR[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const pR={[ra]:"ENVMAP_MODE_REFRACTION"};function mR(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":pR[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gR={[wp]:"ENVMAP_BLENDING_MULTIPLY",[J1]:"ENVMAP_BLENDING_MIX",[ew]:"ENVMAP_BLENDING_ADD"};function xR(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":gR[t.combine]||"ENVMAP_BLENDING_NONE"}function _R(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function vR(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=fR(n),u=dR(n),f=mR(n),c=xR(n),h=_R(n),d=nR(n),m=iR(s),v=r.createProgram();let x,p,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Va).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Va).join(`
`),p.length>0&&(p+=`
`)):(x=[x0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),p=[x0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+c:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wi?"#define TONE_MAPPING":"",n.toneMapping!==wi?We.tonemapping_pars_fragment:"",n.toneMapping!==wi?eR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Qb("linearToOutputTexel",n.outputColorSpace),tR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Va).join(`
`)),a=md(a),a=p0(a,n),a=m0(a,n),o=md(o),o=p0(o,n),o=m0(o,n),a=g0(a),o=g0(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",n.glslVersion===Ag?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ag?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=g+x+a,E=g+p+o,C=f0(r,r.VERTEX_SHADER,_),M=f0(r,r.FRAGMENT_SHADER,E);r.attachShader(v,C),r.attachShader(v,M),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function b(P){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(v)||"",H=r.getShaderInfoLog(C)||"",Y=r.getShaderInfoLog(M)||"",z=F.trim(),X=H.trim(),V=Y.trim();let j=!0,Z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,C,M);else{const A=d0(r,C,"vertex"),re=d0(r,M,"fragment");nt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+A+`
`+re)}else z!==""?Oe("WebGLProgram: Program Info Log:",z):(X===""||V==="")&&(Z=!1);Z&&(P.diagnostics={runnable:j,programLog:z,vertexShader:{log:X,prefix:x},fragmentShader:{log:V,prefix:p}})}r.deleteShader(C),r.deleteShader(M),y=new Yl(r,v),T=rR(r,v)}let y;this.getUniforms=function(){return y===void 0&&b(this),y};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(v,Yb)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$b++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=M,this}let yR=0;class SR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ER(e),n.set(e,i)),i}}class ER{constructor(e){this.id=yR++,this.code=e,this.usedTimes=0}}function MR(t,e,n,i,r,s){const a=new ly,o=new SR,l=new Set,u=[],f=new Map,c=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,T,R,P,F){const H=P.fog,Y=F.geometry,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,V=e.get(y.envMap||z,X),j=V&&V.mapping===Xu?V.image.height:null,Z=d[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&Oe("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const A=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,re=A!==void 0?A.length:0;let se=0;Y.morphAttributes.position!==void 0&&(se=1),Y.morphAttributes.normal!==void 0&&(se=2),Y.morphAttributes.color!==void 0&&(se=3);let L,Fe,Ge,Q;if(Z){const at=xi[Z];L=at.vertexShader,Fe=at.fragmentShader}else L=y.vertexShader,Fe=y.fragmentShader,o.update(y),Ge=o.getVertexShaderID(y),Q=o.getFragmentShaderID(y);const ne=t.getRenderTarget(),oe=t.state.buffers.depth.getReversed(),ke=F.isInstancedMesh===!0,Re=F.isBatchedMesh===!0,De=!!y.map,Lt=!!y.matcap,Ye=!!V,it=!!y.aoMap,st=!!y.lightMap,ze=!!y.bumpMap,yt=!!y.normalMap,k=!!y.displacementMap,Et=!!y.emissiveMap,Qe=!!y.metalnessMap,ut=!!y.roughnessMap,we=y.anisotropy>0,I=y.clearcoat>0,S=y.dispersion>0,B=y.iridescence>0,N=y.sheen>0,O=y.transmission>0,W=we&&!!y.anisotropyMap,ae=I&&!!y.clearcoatMap,te=I&&!!y.clearcoatNormalMap,ye=I&&!!y.clearcoatRoughnessMap,Pe=B&&!!y.iridescenceMap,ie=B&&!!y.iridescenceThicknessMap,ue=N&&!!y.sheenColorMap,ve=N&&!!y.sheenRoughnessMap,ge=!!y.specularMap,pe=!!y.specularColorMap,Ne=!!y.specularIntensityMap,U=O&&!!y.transmissionMap,de=O&&!!y.thicknessMap,he=!!y.gradientMap,Me=!!y.alphaMap,ce=y.alphaTest>0,ee=!!y.alphaHash,Te=!!y.extensions;let Ue=wi;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ue=t.toneMapping);const mt={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:L,fragmentShader:Fe,defines:y.defines,customVertexShaderID:Ge,customFragmentShaderID:Q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:Re,batchingColor:Re&&F._colorsTexture!==null,instancing:ke,instancingColor:ke&&F.instanceColor!==null,instancingMorph:ke&&F.morphTexture!==null,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:aa,alphaToCoverage:!!y.alphaToCoverage,map:De,matcap:Lt,envMap:Ye,envMapMode:Ye&&V.mapping,envMapCubeUVHeight:j,aoMap:it,lightMap:st,bumpMap:ze,normalMap:yt,displacementMap:k,emissiveMap:Et,normalMapObjectSpace:yt&&y.normalMapType===iw,normalMapTangentSpace:yt&&y.normalMapType===sy,metalnessMap:Qe,roughnessMap:ut,anisotropy:we,anisotropyMap:W,clearcoat:I,clearcoatMap:ae,clearcoatNormalMap:te,clearcoatRoughnessMap:ye,dispersion:S,iridescence:B,iridescenceMap:Pe,iridescenceThicknessMap:ie,sheen:N,sheenColorMap:ue,sheenRoughnessMap:ve,specularMap:ge,specularColorMap:pe,specularIntensityMap:Ne,transmission:O,transmissionMap:U,thicknessMap:de,gradientMap:he,opaque:y.transparent===!1&&y.blending===qs&&y.alphaToCoverage===!1,alphaMap:Me,alphaTest:ce,alphaHash:ee,combine:y.combine,mapUv:De&&m(y.map.channel),aoMapUv:it&&m(y.aoMap.channel),lightMapUv:st&&m(y.lightMap.channel),bumpMapUv:ze&&m(y.bumpMap.channel),normalMapUv:yt&&m(y.normalMap.channel),displacementMapUv:k&&m(y.displacementMap.channel),emissiveMapUv:Et&&m(y.emissiveMap.channel),metalnessMapUv:Qe&&m(y.metalnessMap.channel),roughnessMapUv:ut&&m(y.roughnessMap.channel),anisotropyMapUv:W&&m(y.anisotropyMap.channel),clearcoatMapUv:ae&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:ve&&m(y.sheenRoughnessMap.channel),specularMapUv:ge&&m(y.specularMap.channel),specularColorMapUv:pe&&m(y.specularColorMap.channel),specularIntensityMapUv:Ne&&m(y.specularIntensityMap.channel),transmissionMapUv:U&&m(y.transmissionMap.channel),thicknessMapUv:de&&m(y.thicknessMap.channel),alphaMapUv:Me&&m(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(yt||we),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(De||Me),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||Y.attributes.normal===void 0&&yt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:c,reversedDepthBuffer:oe,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:se,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ue,decodeVideoTexture:De&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===ot,decodeVideoTextureEmissive:Et&&y.emissiveMap.isVideoTexture===!0&&Je.getTransfer(y.emissiveMap.colorSpace)===ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===vi,flipSided:y.side===dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Te&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&y.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function x(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)T.push(R),T.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(p(T,y),g(T,y),T.push(t.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function p(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function g(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){const T=d[y.type];let R;if(T){const P=xi[T];R=Hw.clone(P.uniforms)}else R=y.uniforms;return R}function E(y,T){let R=f.get(T);return R!==void 0?++R.usedTimes:(R=new vR(t,T,y,r),u.push(R),f.set(T,R)),R}function C(y){if(--y.usedTimes===0){const T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),f.delete(y.cacheKey),y.destroy()}}function M(y){o.remove(y)}function b(){o.dispose()}return{getParameters:v,getProgramCacheKey:x,getUniforms:_,acquireProgram:E,releaseProgram:C,releaseShaderCache:M,programs:u,dispose:b}}function wR(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function TR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function _0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function v0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,m,v,x,p){let g=t[e];return g===void 0?(g={id:h.id,object:h,geometry:d,material:m,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:x,group:p},t[e]=g):(g.id=h.id,g.object=h,g.geometry=d,g.material=m,g.materialVariant=a(h),g.groupOrder=v,g.renderOrder=h.renderOrder,g.z=x,g.group=p),e++,g}function l(h,d,m,v,x,p){const g=o(h,d,m,v,x,p);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):n.push(g)}function u(h,d,m,v,x,p){const g=o(h,d,m,v,x,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):n.unshift(g)}function f(h,d){n.length>1&&n.sort(h||TR),i.length>1&&i.sort(d||_0),r.length>1&&r.sort(d||_0)}function c(){for(let h=e,d=t.length;h<d;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:c,sort:f}}function AR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new v0,t.set(i,[a])):r>=s.length?(a=new v0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function CR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new Ke};break;case"SpotLight":n={position:new K,direction:new K,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new K,halfWidth:new K,halfHeight:new K};break}return t[e.id]=n,n}}}function bR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let RR=0;function PR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function IR(t){const e=new CR,n=bR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new K);const r=new K,s=new Tt,a=new Tt;function o(u){let f=0,c=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,m=0,v=0,x=0,p=0,g=0,_=0,E=0,C=0,M=0,b=0;u.sort(PR);for(let T=0,R=u.length;T<R;T++){const P=u[T],F=P.color,H=P.intensity,Y=P.distance;let z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===sa?z=P.shadow.map.texture:z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=F.r*H,c+=F.g*H,h+=F.b*H;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],H);b++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const V=P.shadow,j=n.get(P);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,i.directionalShadow[d]=j,i.directionalShadowMap[d]=z,i.directionalShadowMatrix[d]=P.shadow.matrix,g++}i.directional[d]=X,d++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(F).multiplyScalar(H),X.distance=Y,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[v]=X;const V=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,V.updateMatrices(P),P.castShadow&&M++),i.spotLightMatrix[v]=V.matrix,P.castShadow){const j=n.get(P);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=z,E++}v++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(F).multiplyScalar(H),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=X,x++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const V=P.shadow,j=n.get(P);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,j.shadowCameraNear=V.camera.near,j.shadowCameraFar=V.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=z,i.pointShadowMatrix[m]=P.shadow.matrix,_++}i.point[m]=X,m++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(H),X.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[p]=X,p++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=c,i.ambient[2]=h;const y=i.hash;(y.directionalLength!==d||y.pointLength!==m||y.spotLength!==v||y.rectAreaLength!==x||y.hemiLength!==p||y.numDirectionalShadows!==g||y.numPointShadows!==_||y.numSpotShadows!==E||y.numSpotMaps!==C||y.numLightProbes!==b)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=x,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=E+C-M,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=b,y.directionalLength=d,y.pointLength=m,y.spotLength=v,y.rectAreaLength=x,y.hemiLength=p,y.numDirectionalShadows=g,y.numPointShadows=_,y.numSpotShadows=E,y.numSpotMaps=C,y.numLightProbes=b,i.version=RR++)}function l(u,f){let c=0,h=0,d=0,m=0,v=0;const x=f.matrixWorldInverse;for(let p=0,g=u.length;p<g;p++){const _=u[p];if(_.isDirectionalLight){const E=i.directional[c];E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(x),c++}else if(_.isSpotLight){const E=i.spot[d];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(x),E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(x),d++}else if(_.isRectAreaLight){const E=i.rectArea[m];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(x),a.identity(),s.copy(_.matrixWorld),s.premultiply(x),a.extractRotation(s),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(x),h++}else if(_.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(x),v++}}}return{setup:o,setupView:l,state:i}}function y0(t){const e=new IR(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function a(f){i.push(f)}function o(){e.setup(n)}function l(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function LR(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new y0(t),e.set(r,[o])):s>=a.length?(o=new y0(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const DR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kR=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],FR=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],S0=new Tt,La=new K,df=new K;function UR(t,e,n){let i=new kp;const r=new rt,s=new rt,a=new Rt,o=new Xw,l=new qw,u={},f=n.maxTextureSize,c={[Ar]:dn,[dn]:Ar,[vi]:vi},h=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:DR,fragmentShader:NR}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new Yn;m.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new jn(m,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let p=this.type;this.render=function(M,b,y){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||M.length===0)return;this.type===N1&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Gl);const T=t.getRenderTarget(),R=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Hi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=p!==this.type;H&&b.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(z=>z.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,z=M.length;Y<z;Y++){const X=M[Y],V=X.shadow;if(V===void 0){Oe("WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const j=V.getFrameExtents();r.multiply(j),s.copy(V.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/j.x),r.x=s.x*j.x,V.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/j.y),r.y=s.y*j.y,V.mapSize.y=s.y));const Z=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Z,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===za){if(X.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ti(r.x,r.y,{format:sa,type:Yi,minFilter:sn,magFilter:sn,generateMipmaps:!1}),V.map.texture.name=X.name+".shadowMap",V.map.depthTexture=new wo(r.x,r.y,yi),V.map.depthTexture.name=X.name+".shadowMapDepth",V.map.depthTexture.format=$i,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=qt,V.map.depthTexture.magFilter=qt}else X.isPointLight?(V.map=new Sy(r.x),V.map.depthTexture=new Bw(r.x,Ai)):(V.map=new Ti(r.x,r.y),V.map.depthTexture=new wo(r.x,r.y,Ai)),V.map.depthTexture.name=X.name+".shadowMap",V.map.depthTexture.format=$i,this.type===Gl?(V.map.depthTexture.compareFunction=Z?Lp:Ip,V.map.depthTexture.minFilter=sn,V.map.depthTexture.magFilter=sn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=qt,V.map.depthTexture.magFilter=qt);V.camera.updateProjectionMatrix()}const A=V.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<A;re++){if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,re),t.clear();else{re===0&&(t.setRenderTarget(V.map),t.clear());const se=V.getViewport(re);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),F.viewport(a)}if(X.isPointLight){const se=V.camera,L=V.matrix,Fe=X.distance||se.far;Fe!==se.far&&(se.far=Fe,se.updateProjectionMatrix()),La.setFromMatrixPosition(X.matrixWorld),se.position.copy(La),df.copy(se.position),df.add(kR[re]),se.up.copy(FR[re]),se.lookAt(df),se.updateMatrixWorld(),L.makeTranslation(-La.x,-La.y,-La.z),S0.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),V._frustum.setFromProjectionMatrix(S0,se.coordinateSystem,se.reversedDepth)}else V.updateMatrices(X);i=V.getFrustum(),E(b,y,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===za&&g(V,y),V.needsUpdate=!1}p=this.type,x.needsUpdate=!1,t.setRenderTarget(T,R,P)};function g(M,b){const y=e.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ti(r.x,r.y,{format:sa,type:Yi})),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(b,null,y,h,v,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(b,null,y,d,v,null)}function _(M,b,y,T){let R=null;const P=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)R=P;else if(R=y.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const F=R.uuid,H=b.uuid;let Y=u[F];Y===void 0&&(Y={},u[F]=Y);let z=Y[H];z===void 0&&(z=R.clone(),Y[H]=z,b.addEventListener("dispose",C)),R=z}if(R.visible=b.visible,R.wireframe=b.wireframe,T===za?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:c[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const F=t.properties.get(R);F.light=y}return R}function E(M,b,y,T,R){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===za)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);const H=e.update(M),Y=M.material;if(Array.isArray(Y)){const z=H.groups;for(let X=0,V=z.length;X<V;X++){const j=z[X],Z=Y[j.materialIndex];if(Z&&Z.visible){const A=_(M,Z,T,R);M.onBeforeShadow(t,M,b,y,H,A,j),t.renderBufferDirect(y,null,H,A,M,j),M.onAfterShadow(t,M,b,y,H,A,j)}}}else if(Y.visible){const z=_(M,Y,T,R);M.onBeforeShadow(t,M,b,y,H,z,null),t.renderBufferDirect(y,null,H,z,M,null),M.onAfterShadow(t,M,b,y,H,z,null)}}const F=M.children;for(let H=0,Y=F.length;H<Y;H++)E(F[H],b,y,T,R)}function C(M){M.target.removeEventListener("dispose",C);for(const y in u){const T=u[y],R=M.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function OR(t,e){function n(){let U=!1;const de=new Rt;let he=null;const Me=new Rt(0,0,0,0);return{setMask:function(ce){he!==ce&&!U&&(t.colorMask(ce,ce,ce,ce),he=ce)},setLocked:function(ce){U=ce},setClear:function(ce,ee,Te,Ue,mt){mt===!0&&(ce*=Ue,ee*=Ue,Te*=Ue),de.set(ce,ee,Te,Ue),Me.equals(de)===!1&&(t.clearColor(ce,ee,Te,Ue),Me.copy(de))},reset:function(){U=!1,he=null,Me.set(-1,0,0,0)}}}function i(){let U=!1,de=!1,he=null,Me=null,ce=null;return{setReversed:function(ee){if(de!==ee){const Te=e.get("EXT_clip_control");ee?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),de=ee;const Ue=ce;ce=null,this.setClear(Ue)}},getReversed:function(){return de},setTest:function(ee){ee?ne(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(ee){he!==ee&&!U&&(t.depthMask(ee),he=ee)},setFunc:function(ee){if(de&&(ee=dw[ee]),Me!==ee){switch(ee){case Th:t.depthFunc(t.NEVER);break;case Ah:t.depthFunc(t.ALWAYS);break;case Ch:t.depthFunc(t.LESS);break;case ia:t.depthFunc(t.LEQUAL);break;case bh:t.depthFunc(t.EQUAL);break;case Rh:t.depthFunc(t.GEQUAL);break;case Ph:t.depthFunc(t.GREATER);break;case Ih:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Me=ee}},setLocked:function(ee){U=ee},setClear:function(ee){ce!==ee&&(ce=ee,de&&(ee=1-ee),t.clearDepth(ee))},reset:function(){U=!1,he=null,Me=null,ce=null,de=!1}}}function r(){let U=!1,de=null,he=null,Me=null,ce=null,ee=null,Te=null,Ue=null,mt=null;return{setTest:function(at){U||(at?ne(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(at){de!==at&&!U&&(t.stencilMask(at),de=at)},setFunc:function(at,Ri,Pi){(he!==at||Me!==Ri||ce!==Pi)&&(t.stencilFunc(at,Ri,Pi),he=at,Me=Ri,ce=Pi)},setOp:function(at,Ri,Pi){(ee!==at||Te!==Ri||Ue!==Pi)&&(t.stencilOp(at,Ri,Pi),ee=at,Te=Ri,Ue=Pi)},setLocked:function(at){U=at},setClear:function(at){mt!==at&&(t.clearStencil(at),mt=at)},reset:function(){U=!1,de=null,he=null,Me=null,ce=null,ee=null,Te=null,Ue=null,mt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let f={},c={},h=new WeakMap,d=[],m=null,v=!1,x=null,p=null,g=null,_=null,E=null,C=null,M=null,b=new Ke(0,0,0),y=0,T=!1,R=null,P=null,F=null,H=null,Y=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,V=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=V>=1):j.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=V>=2);let Z=null,A={};const re=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),L=new Rt().fromArray(re),Fe=new Rt().fromArray(se);function Ge(U,de,he,Me){const ce=new Uint8Array(4),ee=t.createTexture();t.bindTexture(U,ee),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Te=0;Te<he;Te++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,Me,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(de+Te,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return ee}const Q={};Q[t.TEXTURE_2D]=Ge(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=Ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=Ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=Ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(t.DEPTH_TEST),a.setFunc(ia),ze(!1),yt(Sg),ne(t.CULL_FACE),it(Hi);function ne(U){f[U]!==!0&&(t.enable(U),f[U]=!0)}function oe(U){f[U]!==!1&&(t.disable(U),f[U]=!1)}function ke(U,de){return c[U]!==de?(t.bindFramebuffer(U,de),c[U]=de,U===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=de),U===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Re(U,de){let he=d,Me=!1;if(U){he=h.get(de),he===void 0&&(he=[],h.set(de,he));const ce=U.textures;if(he.length!==ce.length||he[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,Te=ce.length;ee<Te;ee++)he[ee]=t.COLOR_ATTACHMENT0+ee;he.length=ce.length,Me=!0}}else he[0]!==t.BACK&&(he[0]=t.BACK,Me=!0);Me&&t.drawBuffers(he)}function De(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const Lt={[Gr]:t.FUNC_ADD,[F1]:t.FUNC_SUBTRACT,[U1]:t.FUNC_REVERSE_SUBTRACT};Lt[O1]=t.MIN,Lt[z1]=t.MAX;const Ye={[B1]:t.ZERO,[V1]:t.ONE,[H1]:t.SRC_COLOR,[Mh]:t.SRC_ALPHA,[Y1]:t.SRC_ALPHA_SATURATE,[X1]:t.DST_COLOR,[W1]:t.DST_ALPHA,[G1]:t.ONE_MINUS_SRC_COLOR,[wh]:t.ONE_MINUS_SRC_ALPHA,[q1]:t.ONE_MINUS_DST_COLOR,[j1]:t.ONE_MINUS_DST_ALPHA,[$1]:t.CONSTANT_COLOR,[K1]:t.ONE_MINUS_CONSTANT_COLOR,[Z1]:t.CONSTANT_ALPHA,[Q1]:t.ONE_MINUS_CONSTANT_ALPHA};function it(U,de,he,Me,ce,ee,Te,Ue,mt,at){if(U===Hi){v===!0&&(oe(t.BLEND),v=!1);return}if(v===!1&&(ne(t.BLEND),v=!0),U!==k1){if(U!==x||at!==T){if((p!==Gr||E!==Gr)&&(t.blendEquation(t.FUNC_ADD),p=Gr,E=Gr),at)switch(U){case qs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mu:t.blendFunc(t.ONE,t.ONE);break;case Eg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",U);break}else switch(U){case qs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mu:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Eg:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mg:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",U);break}g=null,_=null,C=null,M=null,b.set(0,0,0),y=0,x=U,T=at}return}ce=ce||de,ee=ee||he,Te=Te||Me,(de!==p||ce!==E)&&(t.blendEquationSeparate(Lt[de],Lt[ce]),p=de,E=ce),(he!==g||Me!==_||ee!==C||Te!==M)&&(t.blendFuncSeparate(Ye[he],Ye[Me],Ye[ee],Ye[Te]),g=he,_=Me,C=ee,M=Te),(Ue.equals(b)===!1||mt!==y)&&(t.blendColor(Ue.r,Ue.g,Ue.b,mt),b.copy(Ue),y=mt),x=U,T=!1}function st(U,de){U.side===vi?oe(t.CULL_FACE):ne(t.CULL_FACE);let he=U.side===dn;de&&(he=!he),ze(he),U.blending===qs&&U.transparent===!1?it(Hi):it(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const Me=U.stencilWrite;o.setTest(Me),Me&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Et(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(U){R!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),R=U)}function yt(U){U!==L1?(ne(t.CULL_FACE),U!==P&&(U===Sg?t.cullFace(t.BACK):U===D1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),P=U}function k(U){U!==F&&(X&&t.lineWidth(U),F=U)}function Et(U,de,he){U?(ne(t.POLYGON_OFFSET_FILL),(H!==de||Y!==he)&&(H=de,Y=he,a.getReversed()&&(de=-de),t.polygonOffset(de,he))):oe(t.POLYGON_OFFSET_FILL)}function Qe(U){U?ne(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function ut(U){U===void 0&&(U=t.TEXTURE0+z-1),Z!==U&&(t.activeTexture(U),Z=U)}function we(U,de,he){he===void 0&&(Z===null?he=t.TEXTURE0+z-1:he=Z);let Me=A[he];Me===void 0&&(Me={type:void 0,texture:void 0},A[he]=Me),(Me.type!==U||Me.texture!==de)&&(Z!==he&&(t.activeTexture(he),Z=he),t.bindTexture(U,de||Q[U]),Me.type=U,Me.texture=de)}function I(){const U=A[Z];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{t.compressedTexImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function B(){try{t.compressedTexImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function N(){try{t.texSubImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function O(){try{t.texSubImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function ae(){try{t.compressedTexSubImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function te(){try{t.texStorage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function ye(){try{t.texStorage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function Pe(){try{t.texImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function ie(){try{t.texImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function ue(U){L.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),L.copy(U))}function ve(U){Fe.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Fe.copy(U))}function ge(U,de){let he=u.get(de);he===void 0&&(he=new WeakMap,u.set(de,he));let Me=he.get(U);Me===void 0&&(Me=t.getUniformBlockIndex(de,U.name),he.set(U,Me))}function pe(U,de){const Me=u.get(de).get(U);l.get(de)!==Me&&(t.uniformBlockBinding(de,Me,U.__bindingPointIndex),l.set(de,Me))}function Ne(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},Z=null,A={},c={},h=new WeakMap,d=[],m=null,v=!1,x=null,p=null,g=null,_=null,E=null,C=null,M=null,b=new Ke(0,0,0),y=0,T=!1,R=null,P=null,F=null,H=null,Y=null,L.set(0,0,t.canvas.width,t.canvas.height),Fe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:oe,bindFramebuffer:ke,drawBuffers:Re,useProgram:De,setBlending:it,setMaterial:st,setFlipSided:ze,setCullFace:yt,setLineWidth:k,setPolygonOffset:Et,setScissorTest:Qe,activeTexture:ut,bindTexture:we,unbindTexture:I,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:Pe,texImage3D:ie,updateUBOMapping:ge,uniformBlockBinding:pe,texStorage2D:te,texStorage3D:ye,texSubImage2D:N,texSubImage3D:O,compressedTexSubImage2D:W,compressedTexSubImage3D:ae,scissor:ue,viewport:ve,reset:Ne}}function zR(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new rt,f=new WeakMap;let c;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,S){return d?new OffscreenCanvas(I,S):Mo("canvas")}function v(I,S,B){let N=1;const O=we(I);if((O.width>B||O.height>B)&&(N=B/Math.max(O.width,O.height)),N<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const W=Math.floor(N*O.width),ae=Math.floor(N*O.height);c===void 0&&(c=m(W,ae));const te=S?m(W,ae):c;return te.width=W,te.height=ae,te.getContext("2d").drawImage(I,0,0,W,ae),Oe("WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+W+"x"+ae+")."),te}else return"data"in I&&Oe("WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),I;return I}function x(I){return I.generateMipmaps}function p(I){t.generateMipmap(I)}function g(I){return I.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?t.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(I,S,B,N,O=!1){if(I!==null){if(t[I]!==void 0)return t[I];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let W=S;if(S===t.RED&&(B===t.FLOAT&&(W=t.R32F),B===t.HALF_FLOAT&&(W=t.R16F),B===t.UNSIGNED_BYTE&&(W=t.R8)),S===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(W=t.R8UI),B===t.UNSIGNED_SHORT&&(W=t.R16UI),B===t.UNSIGNED_INT&&(W=t.R32UI),B===t.BYTE&&(W=t.R8I),B===t.SHORT&&(W=t.R16I),B===t.INT&&(W=t.R32I)),S===t.RG&&(B===t.FLOAT&&(W=t.RG32F),B===t.HALF_FLOAT&&(W=t.RG16F),B===t.UNSIGNED_BYTE&&(W=t.RG8)),S===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(W=t.RG8UI),B===t.UNSIGNED_SHORT&&(W=t.RG16UI),B===t.UNSIGNED_INT&&(W=t.RG32UI),B===t.BYTE&&(W=t.RG8I),B===t.SHORT&&(W=t.RG16I),B===t.INT&&(W=t.RG32I)),S===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(W=t.RGB8UI),B===t.UNSIGNED_SHORT&&(W=t.RGB16UI),B===t.UNSIGNED_INT&&(W=t.RGB32UI),B===t.BYTE&&(W=t.RGB8I),B===t.SHORT&&(W=t.RGB16I),B===t.INT&&(W=t.RGB32I)),S===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(W=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(W=t.RGBA16UI),B===t.UNSIGNED_INT&&(W=t.RGBA32UI),B===t.BYTE&&(W=t.RGBA8I),B===t.SHORT&&(W=t.RGBA16I),B===t.INT&&(W=t.RGBA32I)),S===t.RGB&&(B===t.UNSIGNED_INT_5_9_9_9_REV&&(W=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(W=t.R11F_G11F_B10F)),S===t.RGBA){const ae=O?wu:Je.getTransfer(N);B===t.FLOAT&&(W=t.RGBA32F),B===t.HALF_FLOAT&&(W=t.RGBA16F),B===t.UNSIGNED_BYTE&&(W=ae===ot?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(W=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(W=t.RGB5_A1)}return(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function E(I,S){let B;return I?S===null||S===Ai||S===So?B=t.DEPTH24_STENCIL8:S===yi?B=t.DEPTH32F_STENCIL8:S===yo&&(B=t.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ai||S===So?B=t.DEPTH_COMPONENT24:S===yi?B=t.DEPTH_COMPONENT32F:S===yo&&(B=t.DEPTH_COMPONENT16),B}function C(I,S){return x(I)===!0||I.isFramebufferTexture&&I.minFilter!==qt&&I.minFilter!==sn?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function M(I){const S=I.target;S.removeEventListener("dispose",M),y(S),S.isVideoTexture&&f.delete(S)}function b(I){const S=I.target;S.removeEventListener("dispose",b),R(S)}function y(I){const S=i.get(I);if(S.__webglInit===void 0)return;const B=I.source,N=h.get(B);if(N){const O=N[S.__cacheKey];O.usedTimes--,O.usedTimes===0&&T(I),Object.keys(N).length===0&&h.delete(B)}i.remove(I)}function T(I){const S=i.get(I);t.deleteTexture(S.__webglTexture);const B=I.source,N=h.get(B);delete N[S.__cacheKey],a.memory.textures--}function R(I){const S=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(S.__webglFramebuffer[N]))for(let O=0;O<S.__webglFramebuffer[N].length;O++)t.deleteFramebuffer(S.__webglFramebuffer[N][O]);else t.deleteFramebuffer(S.__webglFramebuffer[N]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[N])}else{if(Array.isArray(S.__webglFramebuffer))for(let N=0;N<S.__webglFramebuffer.length;N++)t.deleteFramebuffer(S.__webglFramebuffer[N]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let N=0;N<S.__webglColorRenderbuffer.length;N++)S.__webglColorRenderbuffer[N]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[N]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=I.textures;for(let N=0,O=B.length;N<O;N++){const W=i.get(B[N]);W.__webglTexture&&(t.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(B[N])}i.remove(I)}let P=0;function F(){P=0}function H(){const I=P;return I>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),P+=1,I}function Y(I){const S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function z(I,S){const B=i.get(I);if(I.isVideoTexture&&Qe(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&B.__version!==I.version){const N=I.image;if(N===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(B,I,S);return}}else I.isExternalTexture&&(B.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+S)}function X(I,S){const B=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&B.__version!==I.version){Q(B,I,S);return}else I.isExternalTexture&&(B.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+S)}function V(I,S){const B=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&B.__version!==I.version){Q(B,I,S);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+S)}function j(I,S){const B=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&B.__version!==I.version){ne(B,I,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+S)}const Z={[Lh]:t.REPEAT,[Bi]:t.CLAMP_TO_EDGE,[Dh]:t.MIRRORED_REPEAT},A={[qt]:t.NEAREST,[tw]:t.NEAREST_MIPMAP_NEAREST,[il]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[Nc]:t.LINEAR_MIPMAP_NEAREST,[$r]:t.LINEAR_MIPMAP_LINEAR},re={[rw]:t.NEVER,[uw]:t.ALWAYS,[sw]:t.LESS,[Ip]:t.LEQUAL,[aw]:t.EQUAL,[Lp]:t.GEQUAL,[ow]:t.GREATER,[lw]:t.NOTEQUAL};function se(I,S){if(S.type===yi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===sn||S.magFilter===Nc||S.magFilter===il||S.magFilter===$r||S.minFilter===sn||S.minFilter===Nc||S.minFilter===il||S.minFilter===$r)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(I,t.TEXTURE_WRAP_S,Z[S.wrapS]),t.texParameteri(I,t.TEXTURE_WRAP_T,Z[S.wrapT]),(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)&&t.texParameteri(I,t.TEXTURE_WRAP_R,Z[S.wrapR]),t.texParameteri(I,t.TEXTURE_MAG_FILTER,A[S.magFilter]),t.texParameteri(I,t.TEXTURE_MIN_FILTER,A[S.minFilter]),S.compareFunction&&(t.texParameteri(I,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(I,t.TEXTURE_COMPARE_FUNC,re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===qt||S.minFilter!==il&&S.minFilter!==$r||S.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(I,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function L(I,S){let B=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",M));const N=S.source;let O=h.get(N);O===void 0&&(O={},h.set(N,O));const W=Y(S);if(W!==I.__cacheKey){O[W]===void 0&&(O[W]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,B=!0),O[W].usedTimes++;const ae=O[I.__cacheKey];ae!==void 0&&(O[I.__cacheKey].usedTimes--,ae.usedTimes===0&&T(S)),I.__cacheKey=W,I.__webglTexture=O[W].texture}return B}function Fe(I,S,B){return Math.floor(Math.floor(I/B)/S)}function Ge(I,S,B,N){const W=I.updateRanges;if(W.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,B,N,S.data);else{W.sort((ie,ue)=>ie.start-ue.start);let ae=0;for(let ie=1;ie<W.length;ie++){const ue=W[ae],ve=W[ie],ge=ue.start+ue.count,pe=Fe(ve.start,S.width,4),Ne=Fe(ue.start,S.width,4);ve.start<=ge+1&&pe===Ne&&Fe(ve.start+ve.count-1,S.width,4)===pe?ue.count=Math.max(ue.count,ve.start+ve.count-ue.start):(++ae,W[ae]=ve)}W.length=ae+1;const te=t.getParameter(t.UNPACK_ROW_LENGTH),ye=t.getParameter(t.UNPACK_SKIP_PIXELS),Pe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let ie=0,ue=W.length;ie<ue;ie++){const ve=W[ie],ge=Math.floor(ve.start/4),pe=Math.ceil(ve.count/4),Ne=ge%S.width,U=Math.floor(ge/S.width),de=pe,he=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,Ne,U,de,he,B,N,S.data)}I.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,te),t.pixelStorei(t.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(t.UNPACK_SKIP_ROWS,Pe)}}function Q(I,S,B){let N=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(N=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(N=t.TEXTURE_3D);const O=L(I,S),W=S.source;n.bindTexture(N,I.__webglTexture,t.TEXTURE0+B);const ae=i.get(W);if(W.version!==ae.__version||O===!0){n.activeTexture(t.TEXTURE0+B);const te=Je.getPrimaries(Je.workingColorSpace),ye=S.colorSpace===hr?null:Je.getPrimaries(S.colorSpace),Pe=S.colorSpace===hr||te===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ie=v(S.image,!1,r.maxTextureSize);ie=ut(S,ie);const ue=s.convert(S.format,S.colorSpace),ve=s.convert(S.type);let ge=_(S.internalFormat,ue,ve,S.colorSpace,S.isVideoTexture);se(N,S);let pe;const Ne=S.mipmaps,U=S.isVideoTexture!==!0,de=ae.__version===void 0||O===!0,he=W.dataReady,Me=C(S,ie);if(S.isDepthTexture)ge=E(S.format===Kr,S.type),de&&(U?n.texStorage2D(t.TEXTURE_2D,1,ge,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,ge,ie.width,ie.height,0,ue,ve,null));else if(S.isDataTexture)if(Ne.length>0){U&&de&&n.texStorage2D(t.TEXTURE_2D,Me,ge,Ne[0].width,Ne[0].height);for(let ce=0,ee=Ne.length;ce<ee;ce++)pe=Ne[ce],U?he&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,pe.width,pe.height,ue,ve,pe.data):n.texImage2D(t.TEXTURE_2D,ce,ge,pe.width,pe.height,0,ue,ve,pe.data);S.generateMipmaps=!1}else U?(de&&n.texStorage2D(t.TEXTURE_2D,Me,ge,ie.width,ie.height),he&&Ge(S,ie,ue,ve)):n.texImage2D(t.TEXTURE_2D,0,ge,ie.width,ie.height,0,ue,ve,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,ge,Ne[0].width,Ne[0].height,ie.depth);for(let ce=0,ee=Ne.length;ce<ee;ce++)if(pe=Ne[ce],S.format!==ri)if(ue!==null)if(U){if(he)if(S.layerUpdates.size>0){const Te=Qg(pe.width,pe.height,S.format,S.type);for(const Ue of S.layerUpdates){const mt=pe.data.subarray(Ue*Te/pe.data.BYTES_PER_ELEMENT,(Ue+1)*Te/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,Ue,pe.width,pe.height,1,ue,mt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,pe.width,pe.height,ie.depth,ue,pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ce,ge,pe.width,pe.height,ie.depth,0,pe.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?he&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,pe.width,pe.height,ie.depth,ue,ve,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ce,ge,pe.width,pe.height,ie.depth,0,ue,ve,pe.data)}else{U&&de&&n.texStorage2D(t.TEXTURE_2D,Me,ge,Ne[0].width,Ne[0].height);for(let ce=0,ee=Ne.length;ce<ee;ce++)pe=Ne[ce],S.format!==ri?ue!==null?U?he&&n.compressedTexSubImage2D(t.TEXTURE_2D,ce,0,0,pe.width,pe.height,ue,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ce,ge,pe.width,pe.height,0,pe.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?he&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,pe.width,pe.height,ue,ve,pe.data):n.texImage2D(t.TEXTURE_2D,ce,ge,pe.width,pe.height,0,ue,ve,pe.data)}else if(S.isDataArrayTexture)if(U){if(de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,ge,ie.width,ie.height,ie.depth),he)if(S.layerUpdates.size>0){const ce=Qg(ie.width,ie.height,S.format,S.type);for(const ee of S.layerUpdates){const Te=ie.data.subarray(ee*ce/ie.data.BYTES_PER_ELEMENT,(ee+1)*ce/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,ie.width,ie.height,1,ue,ve,Te)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ue,ve,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,ie.width,ie.height,ie.depth,0,ue,ve,ie.data);else if(S.isData3DTexture)U?(de&&n.texStorage3D(t.TEXTURE_3D,Me,ge,ie.width,ie.height,ie.depth),he&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ue,ve,ie.data)):n.texImage3D(t.TEXTURE_3D,0,ge,ie.width,ie.height,ie.depth,0,ue,ve,ie.data);else if(S.isFramebufferTexture){if(de)if(U)n.texStorage2D(t.TEXTURE_2D,Me,ge,ie.width,ie.height);else{let ce=ie.width,ee=ie.height;for(let Te=0;Te<Me;Te++)n.texImage2D(t.TEXTURE_2D,Te,ge,ce,ee,0,ue,ve,null),ce>>=1,ee>>=1}}else if(Ne.length>0){if(U&&de){const ce=we(Ne[0]);n.texStorage2D(t.TEXTURE_2D,Me,ge,ce.width,ce.height)}for(let ce=0,ee=Ne.length;ce<ee;ce++)pe=Ne[ce],U?he&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,ue,ve,pe):n.texImage2D(t.TEXTURE_2D,ce,ge,ue,ve,pe);S.generateMipmaps=!1}else if(U){if(de){const ce=we(ie);n.texStorage2D(t.TEXTURE_2D,Me,ge,ce.width,ce.height)}he&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,ve,ie)}else n.texImage2D(t.TEXTURE_2D,0,ge,ue,ve,ie);x(S)&&p(N),ae.__version=W.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function ne(I,S,B){if(S.image.length!==6)return;const N=L(I,S),O=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+B);const W=i.get(O);if(O.version!==W.__version||N===!0){n.activeTexture(t.TEXTURE0+B);const ae=Je.getPrimaries(Je.workingColorSpace),te=S.colorSpace===hr?null:Je.getPrimaries(S.colorSpace),ye=S.colorSpace===hr||ae===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Pe=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,ue=[];for(let ee=0;ee<6;ee++)!Pe&&!ie?ue[ee]=v(S.image[ee],!0,r.maxCubemapSize):ue[ee]=ie?S.image[ee].image:S.image[ee],ue[ee]=ut(S,ue[ee]);const ve=ue[0],ge=s.convert(S.format,S.colorSpace),pe=s.convert(S.type),Ne=_(S.internalFormat,ge,pe,S.colorSpace),U=S.isVideoTexture!==!0,de=W.__version===void 0||N===!0,he=O.dataReady;let Me=C(S,ve);se(t.TEXTURE_CUBE_MAP,S);let ce;if(Pe){U&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Ne,ve.width,ve.height);for(let ee=0;ee<6;ee++){ce=ue[ee].mipmaps;for(let Te=0;Te<ce.length;Te++){const Ue=ce[Te];S.format!==ri?ge!==null?U?he&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,Ue.width,Ue.height,ge,Ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Ne,Ue.width,Ue.height,0,Ue.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,Ue.width,Ue.height,ge,pe,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Ne,Ue.width,Ue.height,0,ge,pe,Ue.data)}}}else{if(ce=S.mipmaps,U&&de){ce.length>0&&Me++;const ee=we(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Ne,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ie){U?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ue[ee].width,ue[ee].height,ge,pe,ue[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ne,ue[ee].width,ue[ee].height,0,ge,pe,ue[ee].data);for(let Te=0;Te<ce.length;Te++){const mt=ce[Te].image[ee].image;U?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,mt.width,mt.height,ge,pe,mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Ne,mt.width,mt.height,0,ge,pe,mt.data)}}else{U?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ge,pe,ue[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ne,ge,pe,ue[ee]);for(let Te=0;Te<ce.length;Te++){const Ue=ce[Te];U?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,ge,pe,Ue.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Ne,ge,pe,Ue.image[ee])}}}x(S)&&p(t.TEXTURE_CUBE_MAP),W.__version=O.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function oe(I,S,B,N,O,W){const ae=s.convert(B.format,B.colorSpace),te=s.convert(B.type),ye=_(B.internalFormat,ae,te,B.colorSpace),Pe=i.get(S),ie=i.get(B);if(ie.__renderTarget=S,!Pe.__hasExternalTextures){const ue=Math.max(1,S.width>>W),ve=Math.max(1,S.height>>W);O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?n.texImage3D(O,W,ye,ue,ve,S.depth,0,ae,te,null):n.texImage2D(O,W,ye,ue,ve,0,ae,te,null)}n.bindFramebuffer(t.FRAMEBUFFER,I),Et(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,N,O,ie.__webglTexture,0,k(S)):(O===t.TEXTURE_2D||O>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,N,O,ie.__webglTexture,W),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(I,S,B){if(t.bindRenderbuffer(t.RENDERBUFFER,I),S.depthBuffer){const N=S.depthTexture,O=N&&N.isDepthTexture?N.type:null,W=E(S.stencilBuffer,O),ae=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Et(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,k(S),W,S.width,S.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,k(S),W,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,W,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,I)}else{const N=S.textures;for(let O=0;O<N.length;O++){const W=N[O],ae=s.convert(W.format,W.colorSpace),te=s.convert(W.type),ye=_(W.internalFormat,ae,te,W.colorSpace);Et(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,k(S),ye,S.width,S.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,k(S),ye,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ye,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Re(I,S,B){const N=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=i.get(S.depthTexture);if(O.__renderTarget=S,(!O.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N){if(O.__webglInit===void 0&&(O.__webglInit=!0,S.depthTexture.addEventListener("dispose",M)),O.__webglTexture===void 0){O.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture),se(t.TEXTURE_CUBE_MAP,S.depthTexture);const Pe=s.convert(S.depthTexture.format),ie=s.convert(S.depthTexture.type);let ue;S.depthTexture.format===$i?ue=t.DEPTH_COMPONENT24:S.depthTexture.format===Kr&&(ue=t.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ue,S.width,S.height,0,Pe,ie,null)}}else z(S.depthTexture,0);const W=O.__webglTexture,ae=k(S),te=N?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,ye=S.depthTexture.format===Kr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===$i)Et(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ye,te,W,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,ye,te,W,0);else if(S.depthTexture.format===Kr)Et(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ye,te,W,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,ye,te,W,0);else throw new Error("Unknown depthTexture format")}function De(I){const S=i.get(I),B=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){const N=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),N){const O=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,N.removeEventListener("dispose",O)};N.addEventListener("dispose",O),S.__depthDisposeCallback=O}S.__boundDepthTexture=N}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let N=0;N<6;N++)Re(S.__webglFramebuffer[N],I,N);else{const N=I.texture.mipmaps;N&&N.length>0?Re(S.__webglFramebuffer[0],I,0):Re(S.__webglFramebuffer,I,0)}else if(B){S.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[N]),S.__webglDepthbuffer[N]===void 0)S.__webglDepthbuffer[N]=t.createRenderbuffer(),ke(S.__webglDepthbuffer[N],I,!1);else{const O=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer[N];t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,O,t.RENDERBUFFER,W)}}else{const N=I.texture.mipmaps;if(N&&N.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),ke(S.__webglDepthbuffer,I,!1);else{const O=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,O,t.RENDERBUFFER,W)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Lt(I,S,B){const N=i.get(I);S!==void 0&&oe(N.__webglFramebuffer,I,I.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&De(I)}function Ye(I){const S=I.texture,B=i.get(I),N=i.get(S);I.addEventListener("dispose",b);const O=I.textures,W=I.isWebGLCubeRenderTarget===!0,ae=O.length>1;if(ae||(N.__webglTexture===void 0&&(N.__webglTexture=t.createTexture()),N.__version=S.version,a.memory.textures++),W){B.__webglFramebuffer=[];for(let te=0;te<6;te++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[te]=[];for(let ye=0;ye<S.mipmaps.length;ye++)B.__webglFramebuffer[te][ye]=t.createFramebuffer()}else B.__webglFramebuffer[te]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let te=0;te<S.mipmaps.length;te++)B.__webglFramebuffer[te]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ae)for(let te=0,ye=O.length;te<ye;te++){const Pe=i.get(O[te]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=t.createTexture(),a.memory.textures++)}if(I.samples>0&&Et(I)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let te=0;te<O.length;te++){const ye=O[te];B.__webglColorRenderbuffer[te]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[te]);const Pe=s.convert(ye.format,ye.colorSpace),ie=s.convert(ye.type),ue=_(ye.internalFormat,Pe,ie,ye.colorSpace,I.isXRRenderTarget===!0),ve=k(I);t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,ue,I.width,I.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.RENDERBUFFER,B.__webglColorRenderbuffer[te])}t.bindRenderbuffer(t.RENDERBUFFER,null),I.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),ke(B.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(W){n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture),se(t.TEXTURE_CUBE_MAP,S);for(let te=0;te<6;te++)if(S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)oe(B.__webglFramebuffer[te][ye],I,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye);else oe(B.__webglFramebuffer[te],I,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);x(S)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){for(let te=0,ye=O.length;te<ye;te++){const Pe=O[te],ie=i.get(Pe);let ue=t.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ue=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,ie.__webglTexture),se(ue,Pe),oe(B.__webglFramebuffer,I,Pe,t.COLOR_ATTACHMENT0+te,ue,0),x(Pe)&&p(ue)}n.unbindTexture()}else{let te=t.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(te=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(te,N.__webglTexture),se(te,S),S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)oe(B.__webglFramebuffer[ye],I,S,t.COLOR_ATTACHMENT0,te,ye);else oe(B.__webglFramebuffer,I,S,t.COLOR_ATTACHMENT0,te,0);x(S)&&p(te),n.unbindTexture()}I.depthBuffer&&De(I)}function it(I){const S=I.textures;for(let B=0,N=S.length;B<N;B++){const O=S[B];if(x(O)){const W=g(I),ae=i.get(O).__webglTexture;n.bindTexture(W,ae),p(W),n.unbindTexture()}}}const st=[],ze=[];function yt(I){if(I.samples>0){if(Et(I)===!1){const S=I.textures,B=I.width,N=I.height;let O=t.COLOR_BUFFER_BIT;const W=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(I),te=S.length>1;if(te)for(let Pe=0;Pe<S.length;Pe++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const ye=I.texture.mipmaps;ye&&ye.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Pe=0;Pe<S.length;Pe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(O|=t.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(O|=t.STENCIL_BUFFER_BIT)),te){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[Pe]);const ie=i.get(S[Pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ie,0)}t.blitFramebuffer(0,0,B,N,0,0,B,N,O,t.NEAREST),l===!0&&(st.length=0,ze.length=0,st.push(t.COLOR_ATTACHMENT0+Pe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(st.push(W),ze.push(W),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ze)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),te)for(let Pe=0;Pe<S.length;Pe++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,ae.__webglColorRenderbuffer[Pe]);const ie=i.get(S[Pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const S=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function k(I){return Math.min(r.maxSamples,I.samples)}function Et(I){const S=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Qe(I){const S=a.render.frame;f.get(I)!==S&&(f.set(I,S),I.update())}function ut(I,S){const B=I.colorSpace,N=I.format,O=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||B!==aa&&B!==hr&&(Je.getTransfer(B)===ot?(N!==ri||O!==Rn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",B)),S}function we(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=F,this.setTexture2D=z,this.setTexture2DArray=X,this.setTexture3D=V,this.setTextureCube=j,this.rebindTextures=Lt,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function BR(t,e){function n(i,r=hr){let s;const a=Je.getTransfer(r);if(i===Rn)return t.UNSIGNED_BYTE;if(i===Ap)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Cp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ey)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ty)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qv)return t.BYTE;if(i===Jv)return t.SHORT;if(i===yo)return t.UNSIGNED_SHORT;if(i===Tp)return t.INT;if(i===Ai)return t.UNSIGNED_INT;if(i===yi)return t.FLOAT;if(i===Yi)return t.HALF_FLOAT;if(i===ny)return t.ALPHA;if(i===iy)return t.RGB;if(i===ri)return t.RGBA;if(i===$i)return t.DEPTH_COMPONENT;if(i===Kr)return t.DEPTH_STENCIL;if(i===ry)return t.RED;if(i===bp)return t.RED_INTEGER;if(i===sa)return t.RG;if(i===Rp)return t.RG_INTEGER;if(i===Pp)return t.RGBA_INTEGER;if(i===Wl||i===jl||i===Xl||i===ql)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ql)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nh||i===kh||i===Fh||i===Uh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oh||i===zh||i===Bh||i===Vh||i===Hh||i===Gh||i===Wh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Oh||i===zh)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vh)return s.COMPRESSED_R11_EAC;if(i===Hh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Gh)return s.COMPRESSED_RG11_EAC;if(i===Wh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jh||i===Xh||i===qh||i===Yh||i===$h||i===Kh||i===Zh||i===Qh||i===Jh||i===ed||i===td||i===nd||i===id||i===rd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===jh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$h)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ed)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===td)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===id)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sd||i===ad||i===od)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===sd)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ad)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===od)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ld||i===ud||i===cd||i===fd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ld)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ud)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===So?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const VR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class GR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new gy(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ci({vertexShader:VR,fragmentShader:HR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new jn(new Yu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WR extends ha{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,f=null,c=null,h=null,d=null,m=null;const v=typeof XRWebGLBinding<"u",x=new GR,p={},g=n.getContextAttributes();let _=null,E=null;const C=[],M=[],b=new rt;let y=null;const T=new Bn;T.viewport=new Rt;const R=new Bn;R.viewport=new Rt;const P=[T,R],F=new nT;let H=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ne=C[Q];return ne===void 0&&(ne=new Hc,C[Q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Q){let ne=C[Q];return ne===void 0&&(ne=new Hc,C[Q]=ne),ne.getGripSpace()},this.getHand=function(Q){let ne=C[Q];return ne===void 0&&(ne=new Hc,C[Q]=ne),ne.getHandSpace()};function z(Q){const ne=M.indexOf(Q.inputSource);if(ne===-1)return;const oe=C[ne];oe!==void 0&&(oe.update(Q.inputSource,Q.frame,u||a),oe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",V);for(let Q=0;Q<C.length;Q++){const ne=M[Q];ne!==null&&(M[Q]=null,C[Q].disconnect(ne))}H=null,Y=null,x.reset();for(const Q in p)delete p[Q];e.setRenderTarget(_),d=null,h=null,c=null,r=null,E=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return c===null&&v&&(c=new XRWebGLBinding(r,n)),c},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",X),r.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(b),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,ke=null,Re=null;g.depth&&(Re=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=g.stencil?Kr:$i,ke=g.stencil?So:Ai);const De={colorFormat:n.RGBA8,depthFormat:Re,scaleFactor:s};c=this.getBinding(),h=c.createProjectionLayer(De),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new Ti(h.textureWidth,h.textureHeight,{format:ri,type:Rn,depthTexture:new wo(h.textureWidth,h.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const oe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new Ti(d.framebufferWidth,d.framebufferHeight,{format:ri,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(Q){for(let ne=0;ne<Q.removed.length;ne++){const oe=Q.removed[ne],ke=M.indexOf(oe);ke>=0&&(M[ke]=null,C[ke].disconnect(oe))}for(let ne=0;ne<Q.added.length;ne++){const oe=Q.added[ne];let ke=M.indexOf(oe);if(ke===-1){for(let De=0;De<C.length;De++)if(De>=M.length){M.push(oe),ke=De;break}else if(M[De]===null){M[De]=oe,ke=De;break}if(ke===-1)break}const Re=C[ke];Re&&Re.connect(oe)}}const j=new K,Z=new K;function A(Q,ne,oe){j.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(oe.matrixWorld);const ke=j.distanceTo(Z),Re=ne.projectionMatrix.elements,De=oe.projectionMatrix.elements,Lt=Re[14]/(Re[10]-1),Ye=Re[14]/(Re[10]+1),it=(Re[9]+1)/Re[5],st=(Re[9]-1)/Re[5],ze=(Re[8]-1)/Re[0],yt=(De[8]+1)/De[0],k=Lt*ze,Et=Lt*yt,Qe=ke/(-ze+yt),ut=Qe*-ze;if(ne.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ut),Q.translateZ(Qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Re[10]===-1)Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const we=Lt+Qe,I=Ye+Qe,S=k-ut,B=Et+(ke-ut),N=it*Ye/I*we,O=st*Ye/I*we;Q.projectionMatrix.makePerspective(S,B,N,O,we,I),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function re(Q,ne){ne===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ne.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ne=Q.near,oe=Q.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(oe=x.depthFar)),F.near=R.near=T.near=ne,F.far=R.far=T.far=oe,(H!==F.near||Y!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),H=F.near,Y=F.far),F.layers.mask=Q.layers.mask|6,T.layers.mask=F.layers.mask&-5,R.layers.mask=F.layers.mask&-3;const ke=Q.parent,Re=F.cameras;re(F,ke);for(let De=0;De<Re.length;De++)re(Re[De],ke);Re.length===2?A(F,T,R):F.projectionMatrix.copy(T.projectionMatrix),se(Q,F,ke)};function se(Q,ne,oe){oe===null?Q.matrix.copy(ne.matrixWorld):(Q.matrix.copy(oe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ne.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=hd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(F)},this.getCameraTexture=function(Q){return p[Q]};let L=null;function Fe(Q,ne){if(f=ne.getViewerPose(u||a),m=ne,f!==null){const oe=f.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let ke=!1;oe.length!==F.cameras.length&&(F.cameras.length=0,ke=!0);for(let Ye=0;Ye<oe.length;Ye++){const it=oe[Ye];let st=null;if(d!==null)st=d.getViewport(it);else{const yt=c.getViewSubImage(h,it);st=yt.viewport,Ye===0&&(e.setRenderTargetTextures(E,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(E))}let ze=P[Ye];ze===void 0&&(ze=new Bn,ze.layers.enable(Ye),ze.viewport=new Rt,P[Ye]=ze),ze.matrix.fromArray(it.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(it.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(st.x,st.y,st.width,st.height),Ye===0&&(F.matrix.copy(ze.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ke===!0&&F.cameras.push(ze)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){c=i.getBinding();const Ye=c.getDepthInformation(oe[0]);Ye&&Ye.isValid&&Ye.texture&&x.init(Ye,r.renderState)}if(Re&&Re.includes("camera-access")&&v){e.state.unbindTexture(),c=i.getBinding();for(let Ye=0;Ye<oe.length;Ye++){const it=oe[Ye].camera;if(it){let st=p[it];st||(st=new gy,p[it]=st);const ze=c.getCameraImage(it);st.sourceTexture=ze}}}}for(let oe=0;oe<C.length;oe++){const ke=M[oe],Re=C[oe];ke!==null&&Re!==void 0&&Re.update(ke,ne,u||a)}L&&L(Q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),m=null}const Ge=new yy;Ge.setAnimationLoop(Fe),this.setAnimationLoop=function(Q){L=Q},this.dispose=function(){}}}const Or=new Ci,jR=new Tt;function XR(t,e){function n(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function i(x,p){p.color.getRGB(x.fogColor.value,xy(t)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function r(x,p,g,_,E){p.isMeshBasicMaterial?s(x,p):p.isMeshLambertMaterial?(s(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(x,p),c(x,p)):p.isMeshPhongMaterial?(s(x,p),f(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(x,p),h(x,p),p.isMeshPhysicalMaterial&&d(x,p,E)):p.isMeshMatcapMaterial?(s(x,p),m(x,p)):p.isMeshDepthMaterial?s(x,p):p.isMeshDistanceMaterial?(s(x,p),v(x,p)):p.isMeshNormalMaterial?s(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&o(x,p)):p.isPointsMaterial?l(x,p,g,_):p.isSpriteMaterial?u(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,n(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,n(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,n(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===dn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,n(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===dn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,n(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,n(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const g=e.get(p),_=g.envMap,E=g.envMapRotation;_&&(x.envMap.value=_,Or.copy(E),Or.x*=-1,Or.y*=-1,Or.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),x.envMapRotation.value.setFromMatrix4(jR.makeRotationFromEuler(Or)),x.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,x.aoMapTransform))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,n(p.map,x.mapTransform))}function o(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,g,_){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*g,x.scale.value=_*.5,p.map&&(x.map.value=p.map,n(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,n(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function u(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,n(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,n(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function f(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function c(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function h(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function d(x,p,g){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=g.texture,x.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function v(x,p){const g=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(g.matrixWorld),x.nearDistance.value=g.shadow.camera.near,x.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qR(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const E=_.program;i.uniformBlockBinding(g,E)}function u(g,_){let E=r[g.id];E===void 0&&(m(g),E=f(g),r[g.id]=E,g.addEventListener("dispose",x));const C=_.program;i.updateUBOMapping(g,C);const M=e.render.frame;s[g.id]!==M&&(h(g),s[g.id]=M)}function f(g){const _=c();g.__bindingPointIndex=_;const E=t.createBuffer(),C=g.__size,M=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,C,M),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,E),E}function c(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const _=r[g.id],E=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let M=0,b=E.length;M<b;M++){const y=Array.isArray(E[M])?E[M]:[E[M]];for(let T=0,R=y.length;T<R;T++){const P=y[T];if(d(P,M,T,C)===!0){const F=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let z=0;z<H.length;z++){const X=H[z],V=v(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,F+Y,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,Y),Y+=V.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(g,_,E,C){const M=g.value,b=_+"_"+E;if(C[b]===void 0)return typeof M=="number"||typeof M=="boolean"?C[b]=M:C[b]=M.clone(),!0;{const y=C[b];if(typeof M=="number"||typeof M=="boolean"){if(y!==M)return C[b]=M,!0}else if(y.equals(M)===!1)return y.copy(M),!0}return!1}function m(g){const _=g.uniforms;let E=0;const C=16;for(let b=0,y=_.length;b<y;b++){const T=Array.isArray(_[b])?_[b]:[_[b]];for(let R=0,P=T.length;R<P;R++){const F=T[R],H=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,z=H.length;Y<z;Y++){const X=H[Y],V=v(X),j=E%C,Z=j%V.boundary,A=j+Z;E+=Z,A!==0&&C-A<V.storage&&(E+=C-A),F.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=V.storage}}}const M=E%C;return M>0&&(E+=C-M),g.__size=E,g.__cache={},this}function v(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Oe("WebGLRenderer: Unsupported uniform value type.",g),_}function x(g){const _=g.target;_.removeEventListener("dispose",x);const E=a.indexOf(_.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:u,dispose:p}}const YR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pi=null;function $R(){return pi===null&&(pi=new Nw(YR,16,16,sa,Yi),pi.name="DFG_LUT",pi.minFilter=sn,pi.magFilter=sn,pi.wrapS=Bi,pi.wrapT=Bi,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}class KR{constructor(e={}){const{canvas:n=fw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Rn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const v=d,x=new Set([Pp,Rp,bp]),p=new Set([Rn,Ai,yo,So,Ap,Cp]),g=new Uint32Array(4),_=new Int32Array(4);let E=null,C=null;const M=[],b=[];let y=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let R=!1;this._outputColorSpace=Un;let P=0,F=0,H=null,Y=-1,z=null;const X=new Rt,V=new Rt;let j=null;const Z=new Ke(0);let A=0,re=n.width,se=n.height,L=1,Fe=null,Ge=null;const Q=new Rt(0,0,re,se),ne=new Rt(0,0,re,se);let oe=!1;const ke=new kp;let Re=!1,De=!1;const Lt=new Tt,Ye=new K,it=new Rt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function yt(){return H===null?L:1}let k=i;function Et(w,G){return n.getContext(w,G)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:c};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Mp}`),n.addEventListener("webglcontextlost",Te,!1),n.addEventListener("webglcontextrestored",Ue,!1),n.addEventListener("webglcontextcreationerror",mt,!1),k===null){const G="webgl2";if(k=Et(G,w),k===null)throw Et(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw nt("WebGLRenderer: "+w.message),w}let Qe,ut,we,I,S,B,N,O,W,ae,te,ye,Pe,ie,ue,ve,ge,pe,Ne,U,de,he,Me;function ce(){Qe=new KC(k),Qe.init(),de=new BR(k,Qe),ut=new HC(k,Qe,e,de),we=new OR(k,Qe),ut.reversedDepthBuffer&&h&&we.buffers.depth.setReversed(!0),I=new JC(k),S=new wR,B=new zR(k,Qe,we,S,ut,de,I),N=new $C(T),O=new rT(k),he=new BC(k,O),W=new ZC(k,O,I,he),ae=new tb(k,W,O,he,I),pe=new eb(k,ut,B),ue=new GC(S),te=new MR(T,N,Qe,ut,he,ue),ye=new XR(T,S),Pe=new AR,ie=new LR(Qe),ge=new zC(T,N,we,ae,m,l),ve=new UR(T,ae,ut),Me=new qR(k,I,ut,we),Ne=new VC(k,Qe,I),U=new QC(k,Qe,I),I.programs=te.programs,T.capabilities=ut,T.extensions=Qe,T.properties=S,T.renderLists=Pe,T.shadowMap=ve,T.state=we,T.info=I}ce(),v!==Rn&&(y=new ib(v,n.width,n.height,r,s));const ee=new WR(T,k);this.xr=ee,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=Qe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Qe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(w){w!==void 0&&(L=w,this.setSize(re,se,!1))},this.getSize=function(w){return w.set(re,se)},this.setSize=function(w,G,J=!0){if(ee.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}re=w,se=G,n.width=Math.floor(w*L),n.height=Math.floor(G*L),J===!0&&(n.style.width=w+"px",n.style.height=G+"px"),y!==null&&y.setSize(n.width,n.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(re*L,se*L).floor()},this.setDrawingBufferSize=function(w,G,J){re=w,se=G,L=J,n.width=Math.floor(w*J),n.height=Math.floor(G*J),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(v===Rn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(X)},this.getViewport=function(w){return w.copy(Q)},this.setViewport=function(w,G,J,$){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,G,J,$),we.viewport(X.copy(Q).multiplyScalar(L).round())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,G,J,$){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,G,J,$),we.scissor(V.copy(ne).multiplyScalar(L).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(w){we.setScissorTest(oe=w)},this.setOpaqueSort=function(w){Fe=w},this.setTransparentSort=function(w){Ge=w},this.getClearColor=function(w){return w.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,J=!0){let $=0;if(w){let q=!1;if(H!==null){const xe=H.texture.format;q=x.has(xe)}if(q){const xe=H.texture.type,Se=p.has(xe),_e=ge.getClearColor(),Ae=ge.getClearAlpha(),be=_e.r,Be=_e.g,je=_e.b;Se?(g[0]=be,g[1]=Be,g[2]=je,g[3]=Ae,k.clearBufferuiv(k.COLOR,0,g)):(_[0]=be,_[1]=Be,_[2]=je,_[3]=Ae,k.clearBufferiv(k.COLOR,0,_))}else $|=k.COLOR_BUFFER_BIT}G&&($|=k.DEPTH_BUFFER_BIT),J&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Te,!1),n.removeEventListener("webglcontextrestored",Ue,!1),n.removeEventListener("webglcontextcreationerror",mt,!1),ge.dispose(),Pe.dispose(),ie.dispose(),S.dispose(),N.dispose(),ae.dispose(),he.dispose(),Me.dispose(),te.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",rm),ee.removeEventListener("sessionend",sm),Ir.stop()};function Te(w){w.preventDefault(),bg("WebGLRenderer: Context Lost."),R=!0}function Ue(){bg("WebGLRenderer: Context Restored."),R=!1;const w=I.autoReset,G=ve.enabled,J=ve.autoUpdate,$=ve.needsUpdate,q=ve.type;ce(),I.autoReset=w,ve.enabled=G,ve.autoUpdate=J,ve.needsUpdate=$,ve.type=q}function mt(w){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function at(w){const G=w.target;G.removeEventListener("dispose",at),Ri(G)}function Ri(w){Pi(w),S.remove(w)}function Pi(w){const G=S.get(w).programs;G!==void 0&&(G.forEach(function(J){te.releaseProgram(J)}),w.isShaderMaterial&&te.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,J,$,q,xe){G===null&&(G=st);const Se=q.isMesh&&q.matrixWorld.determinant()<0,_e=LS(w,G,J,$,q);we.setMaterial($,Se);let Ae=J.index,be=1;if($.wireframe===!0){if(Ae=W.getWireframeAttribute(J),Ae===void 0)return;be=2}const Be=J.drawRange,je=J.attributes.position;let Ie=Be.start*be,ct=(Be.start+Be.count)*be;xe!==null&&(Ie=Math.max(Ie,xe.start*be),ct=Math.min(ct,(xe.start+xe.count)*be)),Ae!==null?(Ie=Math.max(Ie,0),ct=Math.min(ct,Ae.count)):je!=null&&(Ie=Math.max(Ie,0),ct=Math.min(ct,je.count));const Pt=ct-Ie;if(Pt<0||Pt===1/0)return;he.setup(q,$,_e,J,Ae);let Ct,ft=Ne;if(Ae!==null&&(Ct=O.get(Ae),ft=U,ft.setIndex(Ct)),q.isMesh)$.wireframe===!0?(we.setLineWidth($.wireframeLinewidth*yt()),ft.setMode(k.LINES)):ft.setMode(k.TRIANGLES);else if(q.isLine){let Qt=$.linewidth;Qt===void 0&&(Qt=1),we.setLineWidth(Qt*yt()),q.isLineSegments?ft.setMode(k.LINES):q.isLineLoop?ft.setMode(k.LINE_LOOP):ft.setMode(k.LINE_STRIP)}else q.isPoints?ft.setMode(k.POINTS):q.isSprite&&ft.setMode(k.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Tu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))ft.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Qt=q._multiDrawStarts,Ce=q._multiDrawCounts,wn=q._multiDrawCount,tt=Ae?O.get(Ae).bytesPerElement:1,$n=S.get($).currentProgram.getUniforms();for(let fi=0;fi<wn;fi++)$n.setValue(k,"_gl_DrawID",fi),ft.render(Qt[fi]/tt,Ce[fi])}else if(q.isInstancedMesh)ft.renderInstances(Ie,Pt,q.count);else if(J.isInstancedBufferGeometry){const Qt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ce=Math.min(J.instanceCount,Qt);ft.renderInstances(Ie,Pt,Ce)}else ft.render(Ie,Pt)};function im(w,G,J){w.transparent===!0&&w.side===vi&&w.forceSinglePass===!1?(w.side=dn,w.needsUpdate=!0,zo(w,G,J),w.side=Ar,w.needsUpdate=!0,zo(w,G,J),w.side=vi):zo(w,G,J)}this.compile=function(w,G,J=null){J===null&&(J=w),C=ie.get(J),C.init(G),b.push(C),J.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(C.pushLight(q),q.castShadow&&C.pushShadow(q))}),w!==J&&w.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(C.pushLight(q),q.castShadow&&C.pushShadow(q))}),C.setupLights();const $=new Set;return w.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const xe=q.material;if(xe)if(Array.isArray(xe))for(let Se=0;Se<xe.length;Se++){const _e=xe[Se];im(_e,J,q),$.add(_e)}else im(xe,J,q),$.add(xe)}),C=b.pop(),$},this.compileAsync=function(w,G,J=null){const $=this.compile(w,G,J);return new Promise(q=>{function xe(){if($.forEach(function(Se){S.get(Se).currentProgram.isReady()&&$.delete(Se)}),$.size===0){q(w);return}setTimeout(xe,10)}Qe.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ic=null;function IS(w){ic&&ic(w)}function rm(){Ir.stop()}function sm(){Ir.start()}const Ir=new yy;Ir.setAnimationLoop(IS),typeof self<"u"&&Ir.setContext(self),this.setAnimationLoop=function(w){ic=w,ee.setAnimationLoop(w),w===null?Ir.stop():Ir.start()},ee.addEventListener("sessionstart",rm),ee.addEventListener("sessionend",sm),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const J=ee.enabled===!0&&ee.isPresenting===!0,$=y!==null&&(H===null||J)&&y.begin(T,H);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(G),G=ee.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,G,H),C=ie.get(w,b.length),C.init(G),b.push(C),Lt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ke.setFromProjectionMatrix(Lt,Si,G.reversedDepth),De=this.localClippingEnabled,Re=ue.init(this.clippingPlanes,De),E=Pe.get(w,M.length),E.init(),M.push(E),ee.enabled===!0&&ee.isPresenting===!0){const Se=T.xr.getDepthSensingMesh();Se!==null&&rc(Se,G,-1/0,T.sortObjects)}rc(w,G,0,T.sortObjects),E.finish(),T.sortObjects===!0&&E.sort(Fe,Ge),ze=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,ze&&ge.addToRenderList(E,w),this.info.render.frame++,Re===!0&&ue.beginShadows();const q=C.state.shadowsArray;if(ve.render(q,w,G),Re===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&y.hasRenderPass())===!1){const Se=E.opaque,_e=E.transmissive;if(C.setupLights(),G.isArrayCamera){const Ae=G.cameras;if(_e.length>0)for(let be=0,Be=Ae.length;be<Be;be++){const je=Ae[be];om(Se,_e,w,je)}ze&&ge.render(w);for(let be=0,Be=Ae.length;be<Be;be++){const je=Ae[be];am(E,w,je,je.viewport)}}else _e.length>0&&om(Se,_e,w,G),ze&&ge.render(w),am(E,w,G)}H!==null&&F===0&&(B.updateMultisampleRenderTarget(H),B.updateRenderTargetMipmap(H)),$&&y.end(T),w.isScene===!0&&w.onAfterRender(T,w,G),he.resetDefaultState(),Y=-1,z=null,b.pop(),b.length>0?(C=b[b.length-1],Re===!0&&ue.setGlobalState(T.clippingPlanes,C.state.camera)):C=null,M.pop(),M.length>0?E=M[M.length-1]:E=null};function rc(w,G,J,$){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)C.pushLight(w),w.castShadow&&C.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ke.intersectsSprite(w)){$&&it.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Lt);const Se=ae.update(w),_e=w.material;_e.visible&&E.push(w,Se,_e,J,it.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ke.intersectsObject(w))){const Se=ae.update(w),_e=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),it.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),it.copy(Se.boundingSphere.center)),it.applyMatrix4(w.matrixWorld).applyMatrix4(Lt)),Array.isArray(_e)){const Ae=Se.groups;for(let be=0,Be=Ae.length;be<Be;be++){const je=Ae[be],Ie=_e[je.materialIndex];Ie&&Ie.visible&&E.push(w,Se,Ie,J,it.z,je)}}else _e.visible&&E.push(w,Se,_e,J,it.z,null)}}const xe=w.children;for(let Se=0,_e=xe.length;Se<_e;Se++)rc(xe[Se],G,J,$)}function am(w,G,J,$){const{opaque:q,transmissive:xe,transparent:Se}=w;C.setupLightsView(J),Re===!0&&ue.setGlobalState(T.clippingPlanes,J),$&&we.viewport(X.copy($)),q.length>0&&Oo(q,G,J),xe.length>0&&Oo(xe,G,J),Se.length>0&&Oo(Se,G,J),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function om(w,G,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[$.id]===void 0){const Ie=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[$.id]=new Ti(1,1,{generateMipmaps:!0,type:Ie?Yi:Rn,minFilter:$r,samples:Math.max(4,ut.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const xe=C.state.transmissionRenderTarget[$.id],Se=$.viewport||X;xe.setSize(Se.z*T.transmissionResolutionScale,Se.w*T.transmissionResolutionScale);const _e=T.getRenderTarget(),Ae=T.getActiveCubeFace(),be=T.getActiveMipmapLevel();T.setRenderTarget(xe),T.getClearColor(Z),A=T.getClearAlpha(),A<1&&T.setClearColor(16777215,.5),T.clear(),ze&&ge.render(J);const Be=T.toneMapping;T.toneMapping=wi;const je=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),C.setupLightsView($),Re===!0&&ue.setGlobalState(T.clippingPlanes,$),Oo(w,J,$),B.updateMultisampleRenderTarget(xe),B.updateRenderTargetMipmap(xe),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ct=0,Pt=G.length;ct<Pt;ct++){const Ct=G[ct],{object:ft,geometry:Qt,material:Ce,group:wn}=Ct;if(Ce.side===vi&&ft.layers.test($.layers)){const tt=Ce.side;Ce.side=dn,Ce.needsUpdate=!0,lm(ft,J,$,Qt,Ce,wn),Ce.side=tt,Ce.needsUpdate=!0,Ie=!0}}Ie===!0&&(B.updateMultisampleRenderTarget(xe),B.updateRenderTargetMipmap(xe))}T.setRenderTarget(_e,Ae,be),T.setClearColor(Z,A),je!==void 0&&($.viewport=je),T.toneMapping=Be}function Oo(w,G,J){const $=G.isScene===!0?G.overrideMaterial:null;for(let q=0,xe=w.length;q<xe;q++){const Se=w[q],{object:_e,geometry:Ae,group:be}=Se;let Be=Se.material;Be.allowOverride===!0&&$!==null&&(Be=$),_e.layers.test(J.layers)&&lm(_e,G,J,Ae,Be,be)}}function lm(w,G,J,$,q,xe){w.onBeforeRender(T,G,J,$,q,xe),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(T,G,J,$,w,xe),q.transparent===!0&&q.side===vi&&q.forceSinglePass===!1?(q.side=dn,q.needsUpdate=!0,T.renderBufferDirect(J,G,$,q,w,xe),q.side=Ar,q.needsUpdate=!0,T.renderBufferDirect(J,G,$,q,w,xe),q.side=vi):T.renderBufferDirect(J,G,$,q,w,xe),w.onAfterRender(T,G,J,$,q,xe)}function zo(w,G,J){G.isScene!==!0&&(G=st);const $=S.get(w),q=C.state.lights,xe=C.state.shadowsArray,Se=q.state.version,_e=te.getParameters(w,q.state,xe,G,J),Ae=te.getProgramCacheKey(_e);let be=$.programs;$.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,$.fog=G.fog;const Be=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;$.envMap=N.get(w.envMap||$.environment,Be),$.envMapRotation=$.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,be===void 0&&(w.addEventListener("dispose",at),be=new Map,$.programs=be);let je=be.get(Ae);if(je!==void 0){if($.currentProgram===je&&$.lightsStateVersion===Se)return cm(w,_e),je}else _e.uniforms=te.getUniforms(w),w.onBeforeCompile(_e,T),je=te.acquireProgram(_e,Ae),be.set(Ae,je),$.uniforms=_e.uniforms;const Ie=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=ue.uniform),cm(w,_e),$.needsLights=NS(w),$.lightsStateVersion=Se,$.needsLights&&(Ie.ambientLightColor.value=q.state.ambient,Ie.lightProbe.value=q.state.probe,Ie.directionalLights.value=q.state.directional,Ie.directionalLightShadows.value=q.state.directionalShadow,Ie.spotLights.value=q.state.spot,Ie.spotLightShadows.value=q.state.spotShadow,Ie.rectAreaLights.value=q.state.rectArea,Ie.ltc_1.value=q.state.rectAreaLTC1,Ie.ltc_2.value=q.state.rectAreaLTC2,Ie.pointLights.value=q.state.point,Ie.pointLightShadows.value=q.state.pointShadow,Ie.hemisphereLights.value=q.state.hemi,Ie.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ie.spotLightMatrix.value=q.state.spotLightMatrix,Ie.spotLightMap.value=q.state.spotLightMap,Ie.pointShadowMatrix.value=q.state.pointShadowMatrix),$.currentProgram=je,$.uniformsList=null,je}function um(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=Yl.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function cm(w,G){const J=S.get(w);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function LS(w,G,J,$,q){G.isScene!==!0&&(G=st),B.resetTextureUnits();const xe=G.fog,Se=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?G.environment:null,_e=H===null?T.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:aa,Ae=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,be=N.get($.envMap||Se,Ae),Be=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,je=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ie=!!J.morphAttributes.position,ct=!!J.morphAttributes.normal,Pt=!!J.morphAttributes.color;let Ct=wi;$.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ct=T.toneMapping);const ft=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Qt=ft!==void 0?ft.length:0,Ce=S.get($),wn=C.state.lights;if(Re===!0&&(De===!0||w!==z)){const Bt=w===z&&$.id===Y;ue.setState($,w,Bt)}let tt=!1;$.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==wn.state.version||Ce.outputColorSpace!==_e||q.isBatchedMesh&&Ce.batching===!1||!q.isBatchedMesh&&Ce.batching===!0||q.isBatchedMesh&&Ce.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ce.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ce.instancing===!1||!q.isInstancedMesh&&Ce.instancing===!0||q.isSkinnedMesh&&Ce.skinning===!1||!q.isSkinnedMesh&&Ce.skinning===!0||q.isInstancedMesh&&Ce.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ce.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ce.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ce.instancingMorph===!1&&q.morphTexture!==null||Ce.envMap!==be||$.fog===!0&&Ce.fog!==xe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ue.numPlanes||Ce.numIntersection!==ue.numIntersection)||Ce.vertexAlphas!==Be||Ce.vertexTangents!==je||Ce.morphTargets!==Ie||Ce.morphNormals!==ct||Ce.morphColors!==Pt||Ce.toneMapping!==Ct||Ce.morphTargetsCount!==Qt)&&(tt=!0):(tt=!0,Ce.__version=$.version);let $n=Ce.currentProgram;tt===!0&&($n=zo($,G,q));let fi=!1,Lr=!1,us=!1;const ht=$n.getUniforms(),jt=Ce.uniforms;if(we.useProgram($n.program)&&(fi=!0,Lr=!0,us=!0),$.id!==Y&&(Y=$.id,Lr=!0),fi||z!==w){we.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ht.setValue(k,"projectionMatrix",w.projectionMatrix),ht.setValue(k,"viewMatrix",w.matrixWorldInverse);const Ji=ht.map.cameraPosition;Ji!==void 0&&Ji.setValue(k,Ye.setFromMatrixPosition(w.matrixWorld)),ut.logarithmicDepthBuffer&&ht.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ht.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),z!==w&&(z=w,Lr=!0,us=!0)}if(Ce.needsLights&&(wn.state.directionalShadowMap.length>0&&ht.setValue(k,"directionalShadowMap",wn.state.directionalShadowMap,B),wn.state.spotShadowMap.length>0&&ht.setValue(k,"spotShadowMap",wn.state.spotShadowMap,B),wn.state.pointShadowMap.length>0&&ht.setValue(k,"pointShadowMap",wn.state.pointShadowMap,B)),q.isSkinnedMesh){ht.setOptional(k,q,"bindMatrix"),ht.setOptional(k,q,"bindMatrixInverse");const Bt=q.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),ht.setValue(k,"boneTexture",Bt.boneTexture,B))}q.isBatchedMesh&&(ht.setOptional(k,q,"batchingTexture"),ht.setValue(k,"batchingTexture",q._matricesTexture,B),ht.setOptional(k,q,"batchingIdTexture"),ht.setValue(k,"batchingIdTexture",q._indirectTexture,B),ht.setOptional(k,q,"batchingColorTexture"),q._colorsTexture!==null&&ht.setValue(k,"batchingColorTexture",q._colorsTexture,B));const Qi=J.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&pe.update(q,J,$n),(Lr||Ce.receiveShadow!==q.receiveShadow)&&(Ce.receiveShadow=q.receiveShadow,ht.setValue(k,"receiveShadow",q.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&G.environment!==null&&(jt.envMapIntensity.value=G.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=$R()),Lr&&(ht.setValue(k,"toneMappingExposure",T.toneMappingExposure),Ce.needsLights&&DS(jt,us),xe&&$.fog===!0&&ye.refreshFogUniforms(jt,xe),ye.refreshMaterialUniforms(jt,$,L,se,C.state.transmissionRenderTarget[w.id]),Yl.upload(k,um(Ce),jt,B)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Yl.upload(k,um(Ce),jt,B),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ht.setValue(k,"center",q.center),ht.setValue(k,"modelViewMatrix",q.modelViewMatrix),ht.setValue(k,"normalMatrix",q.normalMatrix),ht.setValue(k,"modelMatrix",q.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Bt=$.uniformsGroups;for(let Ji=0,cs=Bt.length;Ji<cs;Ji++){const fm=Bt[Ji];Me.update(fm,$n),Me.bind(fm,$n)}}return $n}function DS(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function NS(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(w,G,J){const $=S.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),S.get(w.texture).__webglTexture=G,S.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:J,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){const J=S.get(w);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0};const kS=k.createFramebuffer();this.setRenderTarget=function(w,G=0,J=0){H=w,P=G,F=J;let $=null,q=!1,xe=!1;if(w){const _e=S.get(w);if(_e.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(k.FRAMEBUFFER,_e.__webglFramebuffer),X.copy(w.viewport),V.copy(w.scissor),j=w.scissorTest,we.viewport(X),we.scissor(V),we.setScissorTest(j),Y=-1;return}else if(_e.__webglFramebuffer===void 0)B.setupRenderTarget(w);else if(_e.__hasExternalTextures)B.rebindTextures(w,S.get(w.texture).__webglTexture,S.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Be=w.depthTexture;if(_e.__boundDepthTexture!==Be){if(Be!==null&&S.has(Be)&&(w.width!==Be.image.width||w.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(w)}}const Ae=w.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(xe=!0);const be=S.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(be[G])?$=be[G][J]:$=be[G],q=!0):w.samples>0&&B.useMultisampledRTT(w)===!1?$=S.get(w).__webglMultisampledFramebuffer:Array.isArray(be)?$=be[J]:$=be,X.copy(w.viewport),V.copy(w.scissor),j=w.scissorTest}else X.copy(Q).multiplyScalar(L).floor(),V.copy(ne).multiplyScalar(L).floor(),j=oe;if(J!==0&&($=kS),we.bindFramebuffer(k.FRAMEBUFFER,$)&&we.drawBuffers(w,$),we.viewport(X),we.scissor(V),we.setScissorTest(j),q){const _e=S.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+G,_e.__webglTexture,J)}else if(xe){const _e=G;for(let Ae=0;Ae<w.textures.length;Ae++){const be=S.get(w.textures[Ae]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ae,be.__webglTexture,J,_e)}}else if(w!==null&&J!==0){const _e=S.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,_e.__webglTexture,J)}Y=-1},this.readRenderTargetPixels=function(w,G,J,$,q,xe,Se,_e=0){if(!(w&&w.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){we.bindFramebuffer(k.FRAMEBUFFER,Ae);try{const be=w.textures[_e],Be=be.format,je=be.type;if(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_e),!ut.textureFormatReadable(Be)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(je)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-$&&J>=0&&J<=w.height-q&&k.readPixels(G,J,$,q,de.convert(Be),de.convert(je),xe)}finally{const be=H!==null?S.get(H).__webglFramebuffer:null;we.bindFramebuffer(k.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(w,G,J,$,q,xe,Se,_e=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae)if(G>=0&&G<=w.width-$&&J>=0&&J<=w.height-q){we.bindFramebuffer(k.FRAMEBUFFER,Ae);const be=w.textures[_e],Be=be.format,je=be.type;if(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_e),!ut.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ie),k.bufferData(k.PIXEL_PACK_BUFFER,xe.byteLength,k.STREAM_READ),k.readPixels(G,J,$,q,de.convert(Be),de.convert(je),0);const ct=H!==null?S.get(H).__webglFramebuffer:null;we.bindFramebuffer(k.FRAMEBUFFER,ct);const Pt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await hw(k,Pt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ie),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,xe),k.deleteBuffer(Ie),k.deleteSync(Pt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,J=0){const $=Math.pow(2,-J),q=Math.floor(w.image.width*$),xe=Math.floor(w.image.height*$),Se=G!==null?G.x:0,_e=G!==null?G.y:0;B.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,J,0,0,Se,_e,q,xe),we.unbindTexture()};const FS=k.createFramebuffer(),US=k.createFramebuffer();this.copyTextureToTexture=function(w,G,J=null,$=null,q=0,xe=0){let Se,_e,Ae,be,Be,je,Ie,ct,Pt;const Ct=w.isCompressedTexture?w.mipmaps[xe]:w.image;if(J!==null)Se=J.max.x-J.min.x,_e=J.max.y-J.min.y,Ae=J.isBox3?J.max.z-J.min.z:1,be=J.min.x,Be=J.min.y,je=J.isBox3?J.min.z:0;else{const jt=Math.pow(2,-q);Se=Math.floor(Ct.width*jt),_e=Math.floor(Ct.height*jt),w.isDataArrayTexture?Ae=Ct.depth:w.isData3DTexture?Ae=Math.floor(Ct.depth*jt):Ae=1,be=0,Be=0,je=0}$!==null?(Ie=$.x,ct=$.y,Pt=$.z):(Ie=0,ct=0,Pt=0);const ft=de.convert(G.format),Qt=de.convert(G.type);let Ce;G.isData3DTexture?(B.setTexture3D(G,0),Ce=k.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(B.setTexture2DArray(G,0),Ce=k.TEXTURE_2D_ARRAY):(B.setTexture2D(G,0),Ce=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment);const wn=k.getParameter(k.UNPACK_ROW_LENGTH),tt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),$n=k.getParameter(k.UNPACK_SKIP_PIXELS),fi=k.getParameter(k.UNPACK_SKIP_ROWS),Lr=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ct.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ct.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,be),k.pixelStorei(k.UNPACK_SKIP_ROWS,Be),k.pixelStorei(k.UNPACK_SKIP_IMAGES,je);const us=w.isDataArrayTexture||w.isData3DTexture,ht=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){const jt=S.get(w),Qi=S.get(G),Bt=S.get(jt.__renderTarget),Ji=S.get(Qi.__renderTarget);we.bindFramebuffer(k.READ_FRAMEBUFFER,Bt.__webglFramebuffer),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let cs=0;cs<Ae;cs++)us&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,S.get(w).__webglTexture,q,je+cs),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,S.get(G).__webglTexture,xe,Pt+cs)),k.blitFramebuffer(be,Be,Se,_e,Ie,ct,Se,_e,k.DEPTH_BUFFER_BIT,k.NEAREST);we.bindFramebuffer(k.READ_FRAMEBUFFER,null),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(q!==0||w.isRenderTargetTexture||S.has(w)){const jt=S.get(w),Qi=S.get(G);we.bindFramebuffer(k.READ_FRAMEBUFFER,FS),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,US);for(let Bt=0;Bt<Ae;Bt++)us?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,jt.__webglTexture,q,je+Bt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,jt.__webglTexture,q),ht?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Qi.__webglTexture,xe,Pt+Bt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Qi.__webglTexture,xe),q!==0?k.blitFramebuffer(be,Be,Se,_e,Ie,ct,Se,_e,k.COLOR_BUFFER_BIT,k.NEAREST):ht?k.copyTexSubImage3D(Ce,xe,Ie,ct,Pt+Bt,be,Be,Se,_e):k.copyTexSubImage2D(Ce,xe,Ie,ct,be,Be,Se,_e);we.bindFramebuffer(k.READ_FRAMEBUFFER,null),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ht?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Ce,xe,Ie,ct,Pt,Se,_e,Ae,ft,Qt,Ct.data):G.isCompressedArrayTexture?k.compressedTexSubImage3D(Ce,xe,Ie,ct,Pt,Se,_e,Ae,ft,Ct.data):k.texSubImage3D(Ce,xe,Ie,ct,Pt,Se,_e,Ae,ft,Qt,Ct):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,xe,Ie,ct,Se,_e,ft,Qt,Ct.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,xe,Ie,ct,Ct.width,Ct.height,ft,Ct.data):k.texSubImage2D(k.TEXTURE_2D,xe,Ie,ct,Se,_e,ft,Qt,Ct);k.pixelStorei(k.UNPACK_ROW_LENGTH,wn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,tt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,$n),k.pixelStorei(k.UNPACK_SKIP_ROWS,fi),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Lr),xe===0&&G.generateMipmaps&&k.generateMipmap(Ce),we.unbindTexture()},this.initRenderTarget=function(w){S.get(w).__webglFramebuffer===void 0&&B.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?B.setTextureCube(w,0):w.isData3DTexture?B.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?B.setTexture2DArray(w,0):B.setTexture2D(w,0),we.unbindTexture()},this.resetState=function(){P=0,F=0,H=null,we.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}function ZR(){const t=dt.useRef(null);return dt.useEffect(()=>{if(!t.current)return;const e=new bw;e.fog=new Np(65795,.001);const n=new Bn(45,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=60,n.position.y=5;const i=new KR({alpha:!0,antialias:!0,powerPreference:"high-performance"});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.current.appendChild(i.domElement);const r=new Zw,s="https://unpkg.com/three-globe/example/img/earth-night.jpg",a="https://unpkg.com/three-globe/example/img/earth-topology.png",o="https://unpkg.com/three-globe/example/img/earth-water.png",l="https://unpkg.com/three-globe/example/img/earth-clouds.png",u=new Ba;u.rotation.z=-23.5*Math.PI/180,e.add(u);const f=new Za(15,64,64),c=new jg({map:r.load(s),bumpMap:r.load(a),bumpScale:.15,specularMap:r.load(o),specular:new Ke("grey")}),h=new jn(f,c);u.add(h);const d=new Za(15.2,64,64),m=new jg({map:r.load(l),transparent:!0,opacity:.8,blending:Mu,side:vi,depthWrite:!1}),v=new jn(d,m);u.add(v);const x=new Za(17.5,64,64),p=`
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,g=`
      varying vec3 vNormal;
      void main() {
        float intensity = pow(0.55 - dot(vNormal, vec3(0, 0, 1.0)), 4.0);
        gl_FragColor = vec4(0.1, 0.4, 1.0, 1.0) * intensity;
      }
    `,_=new ci({vertexShader:p,fragmentShader:g,blending:Mu,side:dn,transparent:!0}),E=new jn(x,_);e.add(E);const C=new Yn,M=3e3,b=new Float32Array(M*3);for(let ne=0;ne<M*3;ne++)b[ne]=(Math.random()-.5)*400;C.setAttribute("position",new oi(b,3));const y=()=>{const ne=document.createElement("canvas");ne.width=16,ne.height=16;const oe=ne.getContext("2d");return oe.beginPath(),oe.arc(8,8,8,0,Math.PI*2),oe.fillStyle="white",oe.fill(),new zw(ne)},T=new py({color:16777215,size:.4,map:y(),transparent:!0,opacity:.8,sizeAttenuation:!0,depthWrite:!1}),R=new Ow(C,T);e.add(R);const P=new eT(16777215,.2);e.add(P);const F=new Zg(16777215,2);F.position.set(30,20,20),e.add(F);const H=new Zg(3900150,1.5);H.position.set(-30,0,-20),e.add(H);let Y=0,z=0,X=0,V=0;const j=window.innerWidth/2,Z=window.innerHeight/2,A=ne=>{Y=(ne.clientX-j)*.001,z=(ne.clientY-Z)*.001};window.addEventListener("mousemove",A);let re=window.scrollY,se=window.scrollY;const L=()=>{se=window.scrollY};window.addEventListener("scroll",L,{passive:!0});const Fe=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",Fe);let Ge;const Q=()=>{Ge=requestAnimationFrame(Q),h.rotation.y+=.001,v.rotation.y+=.0013,R.rotation.y+=2e-4,X=Y*2,V=z*2,u.rotation.y+=(X-u.rotation.y)*.05,u.rotation.x+=(V-u.rotation.x)*.05,re+=(se-re)*.05,n.position.y=5+re*-.015,n.lookAt(e.position),i.render(e,n)};return Q(),()=>{cancelAnimationFrame(Ge),window.removeEventListener("mousemove",A),window.removeEventListener("scroll",L),window.removeEventListener("resize",Fe),t.current&&i.domElement&&t.current.removeChild(i.domElement),i.dispose(),f.dispose(),c.dispose(),d.dispose(),m.dispose(),x.dispose(),_.dispose(),C.dispose(),T.dispose()}},[]),D.jsx("div",{ref:t,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,pointerEvents:"none",background:"#010103"}})}function QR(t,e){const n={};return(t[t.length-1]===""?[...t,""]:t).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const JR=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,e2=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,t2={};function E0(t,e){return(t2.jsx?e2:JR).test(t)}const n2=/[ \t\n\f\r]/g;function i2(t){return typeof t=="object"?t.type==="text"?M0(t.value):!1:M0(t)}function M0(t){return t.replace(n2,"")===""}class ko{constructor(e,n,i){this.normal=n,this.property=e,i&&(this.space=i)}}ko.prototype.normal={};ko.prototype.property={};ko.prototype.space=void 0;function Ay(t,e){const n={},i={};for(const r of t)Object.assign(n,r.property),Object.assign(i,r.normal);return new ko(n,i,e)}function gd(t){return t.toLowerCase()}class Mn{constructor(e,n){this.attribute=n,this.property=e}}Mn.prototype.attribute="";Mn.prototype.booleanish=!1;Mn.prototype.boolean=!1;Mn.prototype.commaOrSpaceSeparated=!1;Mn.prototype.commaSeparated=!1;Mn.prototype.defined=!1;Mn.prototype.mustUseProperty=!1;Mn.prototype.number=!1;Mn.prototype.overloadedBoolean=!1;Mn.prototype.property="";Mn.prototype.spaceSeparated=!1;Mn.prototype.space=void 0;let r2=0;const Ve=ls(),Nt=ls(),xd=ls(),fe=ls(),gt=ls(),$s=ls(),Cn=ls();function ls(){return 2**++r2}const _d=Object.freeze(Object.defineProperty({__proto__:null,boolean:Ve,booleanish:Nt,commaOrSpaceSeparated:Cn,commaSeparated:$s,number:fe,overloadedBoolean:xd,spaceSeparated:gt},Symbol.toStringTag,{value:"Module"})),pf=Object.keys(_d);class Op extends Mn{constructor(e,n,i,r){let s=-1;if(super(e,n),w0(this,"space",r),typeof i=="number")for(;++s<pf.length;){const a=pf[s];w0(this,pf[s],(i&_d[a])===_d[a])}}}Op.prototype.defined=!0;function w0(t,e,n){n&&(t[e]=n)}function ga(t){const e={},n={};for(const[i,r]of Object.entries(t.properties)){const s=new Op(i,t.transform(t.attributes||{},i),r,t.space);t.mustUseProperty&&t.mustUseProperty.includes(i)&&(s.mustUseProperty=!0),e[i]=s,n[gd(i)]=i,n[gd(s.attribute)]=i}return new ko(e,n,t.space)}const Cy=ga({properties:{ariaActiveDescendant:null,ariaAtomic:Nt,ariaAutoComplete:null,ariaBusy:Nt,ariaChecked:Nt,ariaColCount:fe,ariaColIndex:fe,ariaColSpan:fe,ariaControls:gt,ariaCurrent:null,ariaDescribedBy:gt,ariaDetails:null,ariaDisabled:Nt,ariaDropEffect:gt,ariaErrorMessage:null,ariaExpanded:Nt,ariaFlowTo:gt,ariaGrabbed:Nt,ariaHasPopup:null,ariaHidden:Nt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:gt,ariaLevel:fe,ariaLive:null,ariaModal:Nt,ariaMultiLine:Nt,ariaMultiSelectable:Nt,ariaOrientation:null,ariaOwns:gt,ariaPlaceholder:null,ariaPosInSet:fe,ariaPressed:Nt,ariaReadOnly:Nt,ariaRelevant:null,ariaRequired:Nt,ariaRoleDescription:gt,ariaRowCount:fe,ariaRowIndex:fe,ariaRowSpan:fe,ariaSelected:Nt,ariaSetSize:fe,ariaSort:null,ariaValueMax:fe,ariaValueMin:fe,ariaValueNow:fe,ariaValueText:null,role:null},transform(t,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()}});function by(t,e){return e in t?t[e]:e}function Ry(t,e){return by(t,e.toLowerCase())}const s2=ga({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:$s,acceptCharset:gt,accessKey:gt,action:null,allow:null,allowFullScreen:Ve,allowPaymentRequest:Ve,allowUserMedia:Ve,alt:null,as:null,async:Ve,autoCapitalize:null,autoComplete:gt,autoFocus:Ve,autoPlay:Ve,blocking:gt,capture:null,charSet:null,checked:Ve,cite:null,className:gt,cols:fe,colSpan:null,content:null,contentEditable:Nt,controls:Ve,controlsList:gt,coords:fe|$s,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Ve,defer:Ve,dir:null,dirName:null,disabled:Ve,download:xd,draggable:Nt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Ve,formTarget:null,headers:gt,height:fe,hidden:xd,high:fe,href:null,hrefLang:null,htmlFor:gt,httpEquiv:gt,id:null,imageSizes:null,imageSrcSet:null,inert:Ve,inputMode:null,integrity:null,is:null,isMap:Ve,itemId:null,itemProp:gt,itemRef:gt,itemScope:Ve,itemType:gt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Ve,low:fe,manifest:null,max:null,maxLength:fe,media:null,method:null,min:null,minLength:fe,multiple:Ve,muted:Ve,name:null,nonce:null,noModule:Ve,noValidate:Ve,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Ve,optimum:fe,pattern:null,ping:gt,placeholder:null,playsInline:Ve,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Ve,referrerPolicy:null,rel:gt,required:Ve,reversed:Ve,rows:fe,rowSpan:fe,sandbox:gt,scope:null,scoped:Ve,seamless:Ve,selected:Ve,shadowRootClonable:Ve,shadowRootDelegatesFocus:Ve,shadowRootMode:null,shape:null,size:fe,sizes:null,slot:null,span:fe,spellCheck:Nt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:fe,step:null,style:null,tabIndex:fe,target:null,title:null,translate:null,type:null,typeMustMatch:Ve,useMap:null,value:Nt,width:fe,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:gt,axis:null,background:null,bgColor:null,border:fe,borderColor:null,bottomMargin:fe,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Ve,declare:Ve,event:null,face:null,frame:null,frameBorder:null,hSpace:fe,leftMargin:fe,link:null,longDesc:null,lowSrc:null,marginHeight:fe,marginWidth:fe,noResize:Ve,noHref:Ve,noShade:Ve,noWrap:Ve,object:null,profile:null,prompt:null,rev:null,rightMargin:fe,rules:null,scheme:null,scrolling:Nt,standby:null,summary:null,text:null,topMargin:fe,valueType:null,version:null,vAlign:null,vLink:null,vSpace:fe,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Ve,disableRemotePlayback:Ve,prefix:null,property:null,results:fe,security:null,unselectable:null},space:"html",transform:Ry}),a2=ga({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Cn,accentHeight:fe,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:fe,amplitude:fe,arabicForm:null,ascent:fe,attributeName:null,attributeType:null,azimuth:fe,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:fe,by:null,calcMode:null,capHeight:fe,className:gt,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:fe,diffuseConstant:fe,direction:null,display:null,dur:null,divisor:fe,dominantBaseline:null,download:Ve,dx:null,dy:null,edgeMode:null,editable:null,elevation:fe,enableBackground:null,end:null,event:null,exponent:fe,externalResourcesRequired:null,fill:null,fillOpacity:fe,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:$s,g2:$s,glyphName:$s,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:fe,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:fe,horizOriginX:fe,horizOriginY:fe,id:null,ideographic:fe,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:fe,k:fe,k1:fe,k2:fe,k3:fe,k4:fe,kernelMatrix:Cn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:fe,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:fe,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:fe,overlineThickness:fe,paintOrder:null,panose1:null,path:null,pathLength:fe,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:gt,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:fe,pointsAtY:fe,pointsAtZ:fe,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Cn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Cn,rev:Cn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Cn,requiredFeatures:Cn,requiredFonts:Cn,requiredFormats:Cn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:fe,specularExponent:fe,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:fe,strikethroughThickness:fe,string:null,stroke:null,strokeDashArray:Cn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:fe,strokeOpacity:fe,strokeWidth:null,style:null,surfaceScale:fe,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Cn,tabIndex:fe,tableValues:null,target:null,targetX:fe,targetY:fe,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Cn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:fe,underlineThickness:fe,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:fe,values:null,vAlphabetic:fe,vMathematical:fe,vectorEffect:null,vHanging:fe,vIdeographic:fe,version:null,vertAdvY:fe,vertOriginX:fe,vertOriginY:fe,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:fe,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:by}),Py=ga({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,e){return"xlink:"+e.slice(5).toLowerCase()}}),Iy=ga({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Ry}),Ly=ga({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,e){return"xml:"+e.slice(3).toLowerCase()}}),o2={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},l2=/[A-Z]/g,T0=/-[a-z]/g,u2=/^data[-\w.:]+$/i;function c2(t,e){const n=gd(e);let i=e,r=Mn;if(n in t.normal)return t.property[t.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&u2.test(e)){if(e.charAt(4)==="-"){const s=e.slice(5).replace(T0,h2);i="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=e.slice(4);if(!T0.test(s)){let a=s.replace(l2,f2);a.charAt(0)!=="-"&&(a="-"+a),e="data"+a}}r=Op}return new r(i,e)}function f2(t){return"-"+t.toLowerCase()}function h2(t){return t.charAt(1).toUpperCase()}const d2=Ay([Cy,s2,Py,Iy,Ly],"html"),zp=Ay([Cy,a2,Py,Iy,Ly],"svg");function p2(t){return t.join(" ").trim()}var Bp={},A0=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,m2=/\n/g,g2=/^\s*/,x2=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,_2=/^:\s*/,v2=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,y2=/^[;\s]*/,S2=/^\s+|\s+$/g,E2=`
`,C0="/",b0="*",jr="",M2="comment",w2="declaration";function T2(t,e){if(typeof t!="string")throw new TypeError("First argument must be a string");if(!t)return[];e=e||{};var n=1,i=1;function r(m){var v=m.match(m2);v&&(n+=v.length);var x=m.lastIndexOf(E2);i=~x?m.length-x:i+m.length}function s(){var m={line:n,column:i};return function(v){return v.position=new a(m),u(),v}}function a(m){this.start=m,this.end={line:n,column:i},this.source=e.source}a.prototype.content=t;function o(m){var v=new Error(e.source+":"+n+":"+i+": "+m);if(v.reason=m,v.filename=e.source,v.line=n,v.column=i,v.source=t,!e.silent)throw v}function l(m){var v=m.exec(t);if(v){var x=v[0];return r(x),t=t.slice(x.length),v}}function u(){l(g2)}function f(m){var v;for(m=m||[];v=c();)v!==!1&&m.push(v);return m}function c(){var m=s();if(!(C0!=t.charAt(0)||b0!=t.charAt(1))){for(var v=2;jr!=t.charAt(v)&&(b0!=t.charAt(v)||C0!=t.charAt(v+1));)++v;if(v+=2,jr===t.charAt(v-1))return o("End of comment missing");var x=t.slice(2,v-2);return i+=2,r(x),t=t.slice(v),i+=2,m({type:M2,comment:x})}}function h(){var m=s(),v=l(x2);if(v){if(c(),!l(_2))return o("property missing ':'");var x=l(v2),p=m({type:w2,property:R0(v[0].replace(A0,jr)),value:x?R0(x[0].replace(A0,jr)):jr});return l(y2),p}}function d(){var m=[];f(m);for(var v;v=h();)v!==!1&&(m.push(v),f(m));return m}return u(),d()}function R0(t){return t?t.replace(S2,jr):jr}var A2=T2,C2=Zl&&Zl.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Bp,"__esModule",{value:!0});Bp.default=R2;const b2=C2(A2);function R2(t,e){let n=null;if(!t||typeof t!="string")return n;const i=(0,b2.default)(t),r=typeof e=="function";return i.forEach(s=>{if(s.type!=="declaration")return;const{property:a,value:o}=s;r?e(a,o,s):o&&(n=n||{},n[a]=o)}),n}var Zu={};Object.defineProperty(Zu,"__esModule",{value:!0});Zu.camelCase=void 0;var P2=/^--[a-zA-Z0-9_-]+$/,I2=/-([a-z])/g,L2=/^[^-]+$/,D2=/^-(webkit|moz|ms|o|khtml)-/,N2=/^-(ms)-/,k2=function(t){return!t||L2.test(t)||P2.test(t)},F2=function(t,e){return e.toUpperCase()},P0=function(t,e){return"".concat(e,"-")},U2=function(t,e){return e===void 0&&(e={}),k2(t)?t:(t=t.toLowerCase(),e.reactCompat?t=t.replace(N2,P0):t=t.replace(D2,P0),t.replace(I2,F2))};Zu.camelCase=U2;var O2=Zl&&Zl.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},z2=O2(Bp),B2=Zu;function vd(t,e){var n={};return!t||typeof t!="string"||(0,z2.default)(t,function(i,r){i&&r&&(n[(0,B2.camelCase)(i,e)]=r)}),n}vd.default=vd;var V2=vd;const H2=bd(V2),Dy=Ny("end"),Vp=Ny("start");function Ny(t){return e;function e(n){const i=n&&n.position&&n.position[t]||{};if(typeof i.line=="number"&&i.line>0&&typeof i.column=="number"&&i.column>0)return{line:i.line,column:i.column,offset:typeof i.offset=="number"&&i.offset>-1?i.offset:void 0}}}function G2(t){const e=Vp(t),n=Dy(t);if(e&&n)return{start:e,end:n}}function Qa(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?I0(t.position):"start"in t||"end"in t?I0(t):"line"in t||"column"in t?yd(t):""}function yd(t){return L0(t&&t.line)+":"+L0(t&&t.column)}function I0(t){return yd(t&&t.start)+"-"+yd(t&&t.end)}function L0(t){return t&&typeof t=="number"?t:1}class ln extends Error{constructor(e,n,i){super(),typeof n=="string"&&(i=n,n=void 0);let r="",s={},a=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof e=="string"?r=e:!s.cause&&e&&(a=!0,r=e.message,s.cause=e),!s.ruleId&&!s.source&&typeof i=="string"){const l=i.indexOf(":");l===-1?s.ruleId=i:(s.source=i.slice(0,l),s.ruleId=i.slice(l+1))}if(!s.place&&s.ancestors&&s.ancestors){const l=s.ancestors[s.ancestors.length-1];l&&(s.place=l.position)}const o=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file="",this.message=r,this.line=o?o.line:void 0,this.name=Qa(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=a&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ln.prototype.file="";ln.prototype.name="";ln.prototype.reason="";ln.prototype.message="";ln.prototype.stack="";ln.prototype.column=void 0;ln.prototype.line=void 0;ln.prototype.ancestors=void 0;ln.prototype.cause=void 0;ln.prototype.fatal=void 0;ln.prototype.place=void 0;ln.prototype.ruleId=void 0;ln.prototype.source=void 0;const Hp={}.hasOwnProperty,W2=new Map,j2=/[A-Z]/g,X2=new Set(["table","tbody","thead","tfoot","tr"]),q2=new Set(["td","th"]),ky="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Y2(t,e){if(!e||e.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=e.filePath||void 0;let i;if(e.development){if(typeof e.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");i=nP(n,e.jsxDEV)}else{if(typeof e.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof e.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");i=tP(n,e.jsx,e.jsxs)}const r={Fragment:e.Fragment,ancestors:[],components:e.components||{},create:i,elementAttributeNameCase:e.elementAttributeNameCase||"react",evaluater:e.createEvaluater?e.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:e.ignoreInvalidStyle||!1,passKeys:e.passKeys!==!1,passNode:e.passNode||!1,schema:e.space==="svg"?zp:d2,stylePropertyNameCase:e.stylePropertyNameCase||"dom",tableCellAlignToStyle:e.tableCellAlignToStyle!==!1},s=Fy(r,t,void 0);return s&&typeof s!="string"?s:r.create(t,r.Fragment,{children:s||void 0},void 0)}function Fy(t,e,n){if(e.type==="element")return $2(t,e,n);if(e.type==="mdxFlowExpression"||e.type==="mdxTextExpression")return K2(t,e);if(e.type==="mdxJsxFlowElement"||e.type==="mdxJsxTextElement")return Q2(t,e,n);if(e.type==="mdxjsEsm")return Z2(t,e);if(e.type==="root")return J2(t,e,n);if(e.type==="text")return eP(t,e)}function $2(t,e,n){const i=t.schema;let r=i;e.tagName.toLowerCase()==="svg"&&i.space==="html"&&(r=zp,t.schema=r),t.ancestors.push(e);const s=Oy(t,e.tagName,!1),a=iP(t,e);let o=Wp(t,e);return X2.has(e.tagName)&&(o=o.filter(function(l){return typeof l=="string"?!i2(l):!0})),Uy(t,a,s,e),Gp(a,o),t.ancestors.pop(),t.schema=i,t.create(e,s,a,n)}function K2(t,e){if(e.data&&e.data.estree&&t.evaluater){const i=e.data.estree.body[0];return i.type,t.evaluater.evaluateExpression(i.expression)}To(t,e.position)}function Z2(t,e){if(e.data&&e.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(e.data.estree);To(t,e.position)}function Q2(t,e,n){const i=t.schema;let r=i;e.name==="svg"&&i.space==="html"&&(r=zp,t.schema=r),t.ancestors.push(e);const s=e.name===null?t.Fragment:Oy(t,e.name,!0),a=rP(t,e),o=Wp(t,e);return Uy(t,a,s,e),Gp(a,o),t.ancestors.pop(),t.schema=i,t.create(e,s,a,n)}function J2(t,e,n){const i={};return Gp(i,Wp(t,e)),t.create(e,t.Fragment,i,n)}function eP(t,e){return e.value}function Uy(t,e,n,i){typeof n!="string"&&n!==t.Fragment&&t.passNode&&(e.node=i)}function Gp(t,e){if(e.length>0){const n=e.length>1?e:e[0];n&&(t.children=n)}}function tP(t,e,n){return i;function i(r,s,a,o){const u=Array.isArray(a.children)?n:e;return o?u(s,a,o):u(s,a)}}function nP(t,e){return n;function n(i,r,s,a){const o=Array.isArray(s.children),l=Vp(i);return e(r,s,a,o,{columnNumber:l?l.column-1:void 0,fileName:t,lineNumber:l?l.line:void 0},void 0)}}function iP(t,e){const n={};let i,r;for(r in e.properties)if(r!=="children"&&Hp.call(e.properties,r)){const s=sP(t,r,e.properties[r]);if(s){const[a,o]=s;t.tableCellAlignToStyle&&a==="align"&&typeof o=="string"&&q2.has(e.tagName)?i=o:n[a]=o}}if(i){const s=n.style||(n.style={});s[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=i}return n}function rP(t,e){const n={};for(const i of e.attributes)if(i.type==="mdxJsxExpressionAttribute")if(i.data&&i.data.estree&&t.evaluater){const s=i.data.estree.body[0];s.type;const a=s.expression;a.type;const o=a.properties[0];o.type,Object.assign(n,t.evaluater.evaluateExpression(o.argument))}else To(t,e.position);else{const r=i.name;let s;if(i.value&&typeof i.value=="object")if(i.value.data&&i.value.data.estree&&t.evaluater){const o=i.value.data.estree.body[0];o.type,s=t.evaluater.evaluateExpression(o.expression)}else To(t,e.position);else s=i.value===null?!0:i.value;n[r]=s}return n}function Wp(t,e){const n=[];let i=-1;const r=t.passKeys?new Map:W2;for(;++i<e.children.length;){const s=e.children[i];let a;if(t.passKeys){const l=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(l){const u=r.get(l)||0;a=l+"-"+u,r.set(l,u+1)}}const o=Fy(t,s,a);o!==void 0&&n.push(o)}return n}function sP(t,e,n){const i=c2(t.schema,e);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=i.commaSeparated?QR(n):p2(n)),i.property==="style"){let r=typeof n=="object"?n:aP(t,String(n));return t.stylePropertyNameCase==="css"&&(r=oP(r)),["style",r]}return[t.elementAttributeNameCase==="react"&&i.space?o2[i.property]||i.property:i.attribute,n]}}function aP(t,e){try{return H2(e,{reactCompat:!0})}catch(n){if(t.ignoreInvalidStyle)return{};const i=n,r=new ln("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:i,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw r.file=t.filePath||void 0,r.url=ky+"#cannot-parse-style-attribute",r}}function Oy(t,e,n){let i;if(!n)i={type:"Literal",value:e};else if(e.includes(".")){const r=e.split(".");let s=-1,a;for(;++s<r.length;){const o=E0(r[s])?{type:"Identifier",name:r[s]}:{type:"Literal",value:r[s]};a=a?{type:"MemberExpression",object:a,property:o,computed:!!(s&&o.type==="Literal"),optional:!1}:o}i=a}else i=E0(e)&&!/^[a-z]/.test(e)?{type:"Identifier",name:e}:{type:"Literal",value:e};if(i.type==="Literal"){const r=i.value;return Hp.call(t.components,r)?t.components[r]:r}if(t.evaluater)return t.evaluater.evaluateExpression(i);To(t)}function To(t,e){const n=new ln("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:e,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=t.filePath||void 0,n.url=ky+"#cannot-handle-mdx-estrees-without-createevaluater",n}function oP(t){const e={};let n;for(n in t)Hp.call(t,n)&&(e[lP(n)]=t[n]);return e}function lP(t){let e=t.replace(j2,uP);return e.slice(0,3)==="ms-"&&(e="-"+e),e}function uP(t){return"-"+t.toLowerCase()}const mf={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},cP={};function jp(t,e){const n=cP,i=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,r=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return zy(t,i,r)}function zy(t,e,n){if(fP(t)){if("value"in t)return t.type==="html"&&!n?"":t.value;if(e&&"alt"in t&&t.alt)return t.alt;if("children"in t)return D0(t.children,e,n)}return Array.isArray(t)?D0(t,e,n):""}function D0(t,e,n){const i=[];let r=-1;for(;++r<t.length;)i[r]=zy(t[r],e,n);return i.join("")}function fP(t){return!!(t&&typeof t=="object")}const N0=document.createElement("i");function Xp(t){const e="&"+t+";";N0.innerHTML=e;const n=N0.textContent;return n.charCodeAt(n.length-1)===59&&t!=="semi"||n===e?!1:n}function Ln(t,e,n,i){const r=t.length;let s=0,a;if(e<0?e=-e>r?0:r+e:e=e>r?r:e,n=n>0?n:0,i.length<1e4)a=Array.from(i),a.unshift(e,n),t.splice(...a);else for(n&&t.splice(e,n);s<i.length;)a=i.slice(s,s+1e4),a.unshift(e,0),t.splice(...a),s+=1e4,e+=1e4}function Vn(t,e){return t.length>0?(Ln(t,t.length,0,e),t):e}const k0={}.hasOwnProperty;function By(t){const e={};let n=-1;for(;++n<t.length;)hP(e,t[n]);return e}function hP(t,e){let n;for(n in e){const r=(k0.call(t,n)?t[n]:void 0)||(t[n]={}),s=e[n];let a;if(s)for(a in s){k0.call(r,a)||(r[a]=[]);const o=s[a];dP(r[a],Array.isArray(o)?o:o?[o]:[])}}}function dP(t,e){let n=-1;const i=[];for(;++n<e.length;)(e[n].add==="after"?t:i).push(e[n]);Ln(t,0,0,i)}function Vy(t,e){const n=Number.parseInt(t,e);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function li(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const fn=Pr(/[A-Za-z]/),an=Pr(/[\dA-Za-z]/),pP=Pr(/[#-'*+\--9=?A-Z^-~]/);function Au(t){return t!==null&&(t<32||t===127)}const Sd=Pr(/\d/),mP=Pr(/[\dA-Fa-f]/),gP=Pr(/[!-/:-@[-`{-~]/);function Le(t){return t!==null&&t<-2}function pt(t){return t!==null&&(t<0||t===32)}function Xe(t){return t===-2||t===-1||t===32}const Qu=Pr(new RegExp("\\p{P}|\\p{S}","u")),ss=Pr(/\s/);function Pr(t){return e;function e(n){return n!==null&&n>-1&&t.test(String.fromCharCode(n))}}function xa(t){const e=[];let n=-1,i=0,r=0;for(;++n<t.length;){const s=t.charCodeAt(n);let a="";if(s===37&&an(t.charCodeAt(n+1))&&an(t.charCodeAt(n+2)))r=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(a=String.fromCharCode(s));else if(s>55295&&s<57344){const o=t.charCodeAt(n+1);s<56320&&o>56319&&o<57344?(a=String.fromCharCode(s,o),r=1):a="�"}else a=String.fromCharCode(s);a&&(e.push(t.slice(i,n),encodeURIComponent(a)),i=n+r+1,a=""),r&&(n+=r,r=0)}return e.join("")+t.slice(i)}function Ze(t,e,n,i){const r=i?i-1:Number.POSITIVE_INFINITY;let s=0;return a;function a(l){return Xe(l)?(t.enter(n),o(l)):e(l)}function o(l){return Xe(l)&&s++<r?(t.consume(l),o):(t.exit(n),e(l))}}const xP={tokenize:_P};function _P(t){const e=t.attempt(this.parser.constructs.contentInitial,i,r);let n;return e;function i(o){if(o===null){t.consume(o);return}return t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),Ze(t,e,"linePrefix")}function r(o){return t.enter("paragraph"),s(o)}function s(o){const l=t.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,a(o)}function a(o){if(o===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(o);return}return Le(o)?(t.consume(o),t.exit("chunkText"),s):(t.consume(o),a)}}const vP={tokenize:yP},F0={tokenize:SP};function yP(t){const e=this,n=[];let i=0,r,s,a;return o;function o(_){if(i<n.length){const E=n[i];return e.containerState=E[1],t.attempt(E[0].continuation,l,u)(_)}return u(_)}function l(_){if(i++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,r&&g();const E=e.events.length;let C=E,M;for(;C--;)if(e.events[C][0]==="exit"&&e.events[C][1].type==="chunkFlow"){M=e.events[C][1].end;break}p(i);let b=E;for(;b<e.events.length;)e.events[b][1].end={...M},b++;return Ln(e.events,C+1,0,e.events.slice(E)),e.events.length=b,u(_)}return o(_)}function u(_){if(i===n.length){if(!r)return h(_);if(r.currentConstruct&&r.currentConstruct.concrete)return m(_);e.interrupt=!!(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return e.containerState={},t.check(F0,f,c)(_)}function f(_){return r&&g(),p(i),h(_)}function c(_){return e.parser.lazy[e.now().line]=i!==n.length,a=e.now().offset,m(_)}function h(_){return e.containerState={},t.attempt(F0,d,m)(_)}function d(_){return i++,n.push([e.currentConstruct,e.containerState]),h(_)}function m(_){if(_===null){r&&g(),p(0),t.consume(_);return}return r=r||e.parser.flow(e.now()),t.enter("chunkFlow",{_tokenizer:r,contentType:"flow",previous:s}),v(_)}function v(_){if(_===null){x(t.exit("chunkFlow"),!0),p(0),t.consume(_);return}return Le(_)?(t.consume(_),x(t.exit("chunkFlow")),i=0,e.interrupt=void 0,o):(t.consume(_),v)}function x(_,E){const C=e.sliceStream(_);if(E&&C.push(null),_.previous=s,s&&(s.next=_),s=_,r.defineSkip(_.start),r.write(C),e.parser.lazy[_.start.line]){let M=r.events.length;for(;M--;)if(r.events[M][1].start.offset<a&&(!r.events[M][1].end||r.events[M][1].end.offset>a))return;const b=e.events.length;let y=b,T,R;for(;y--;)if(e.events[y][0]==="exit"&&e.events[y][1].type==="chunkFlow"){if(T){R=e.events[y][1].end;break}T=!0}for(p(i),M=b;M<e.events.length;)e.events[M][1].end={...R},M++;Ln(e.events,y+1,0,e.events.slice(b)),e.events.length=M}}function p(_){let E=n.length;for(;E-- >_;){const C=n[E];e.containerState=C[1],C[0].exit.call(e,t)}n.length=_}function g(){r.write([null]),s=void 0,r=void 0,e.containerState._closeFlow=void 0}}function SP(t,e,n){return Ze(t,t.attempt(this.parser.constructs.document,e,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function la(t){if(t===null||pt(t)||ss(t))return 1;if(Qu(t))return 2}function Ju(t,e,n){const i=[];let r=-1;for(;++r<t.length;){const s=t[r].resolveAll;s&&!i.includes(s)&&(e=s(e,n),i.push(s))}return e}const Ed={name:"attention",resolveAll:EP,tokenize:MP};function EP(t,e){let n=-1,i,r,s,a,o,l,u,f;for(;++n<t.length;)if(t[n][0]==="enter"&&t[n][1].type==="attentionSequence"&&t[n][1]._close){for(i=n;i--;)if(t[i][0]==="exit"&&t[i][1].type==="attentionSequence"&&t[i][1]._open&&e.sliceSerialize(t[i][1]).charCodeAt(0)===e.sliceSerialize(t[n][1]).charCodeAt(0)){if((t[i][1]._close||t[n][1]._open)&&(t[n][1].end.offset-t[n][1].start.offset)%3&&!((t[i][1].end.offset-t[i][1].start.offset+t[n][1].end.offset-t[n][1].start.offset)%3))continue;l=t[i][1].end.offset-t[i][1].start.offset>1&&t[n][1].end.offset-t[n][1].start.offset>1?2:1;const c={...t[i][1].end},h={...t[n][1].start};U0(c,-l),U0(h,l),a={type:l>1?"strongSequence":"emphasisSequence",start:c,end:{...t[i][1].end}},o={type:l>1?"strongSequence":"emphasisSequence",start:{...t[n][1].start},end:h},s={type:l>1?"strongText":"emphasisText",start:{...t[i][1].end},end:{...t[n][1].start}},r={type:l>1?"strong":"emphasis",start:{...a.start},end:{...o.end}},t[i][1].end={...a.start},t[n][1].start={...o.end},u=[],t[i][1].end.offset-t[i][1].start.offset&&(u=Vn(u,[["enter",t[i][1],e],["exit",t[i][1],e]])),u=Vn(u,[["enter",r,e],["enter",a,e],["exit",a,e],["enter",s,e]]),u=Vn(u,Ju(e.parser.constructs.insideSpan.null,t.slice(i+1,n),e)),u=Vn(u,[["exit",s,e],["enter",o,e],["exit",o,e],["exit",r,e]]),t[n][1].end.offset-t[n][1].start.offset?(f=2,u=Vn(u,[["enter",t[n][1],e],["exit",t[n][1],e]])):f=0,Ln(t,i-1,n-i+3,u),n=i+u.length-f-2;break}}for(n=-1;++n<t.length;)t[n][1].type==="attentionSequence"&&(t[n][1].type="data");return t}function MP(t,e){const n=this.parser.constructs.attentionMarkers.null,i=this.previous,r=la(i);let s;return a;function a(l){return s=l,t.enter("attentionSequence"),o(l)}function o(l){if(l===s)return t.consume(l),o;const u=t.exit("attentionSequence"),f=la(l),c=!f||f===2&&r||n.includes(l),h=!r||r===2&&f||n.includes(i);return u._open=!!(s===42?c:c&&(r||!h)),u._close=!!(s===42?h:h&&(f||!c)),e(l)}}function U0(t,e){t.column+=e,t.offset+=e,t._bufferIndex+=e}const wP={name:"autolink",tokenize:TP};function TP(t,e,n){let i=0;return r;function r(d){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(d),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),s}function s(d){return fn(d)?(t.consume(d),a):d===64?n(d):u(d)}function a(d){return d===43||d===45||d===46||an(d)?(i=1,o(d)):u(d)}function o(d){return d===58?(t.consume(d),i=0,l):(d===43||d===45||d===46||an(d))&&i++<32?(t.consume(d),o):(i=0,u(d))}function l(d){return d===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(d),t.exit("autolinkMarker"),t.exit("autolink"),e):d===null||d===32||d===60||Au(d)?n(d):(t.consume(d),l)}function u(d){return d===64?(t.consume(d),f):pP(d)?(t.consume(d),u):n(d)}function f(d){return an(d)?c(d):n(d)}function c(d){return d===46?(t.consume(d),i=0,f):d===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(d),t.exit("autolinkMarker"),t.exit("autolink"),e):h(d)}function h(d){if((d===45||an(d))&&i++<63){const m=d===45?h:c;return t.consume(d),m}return n(d)}}const Fo={partial:!0,tokenize:AP};function AP(t,e,n){return i;function i(s){return Xe(s)?Ze(t,r,"linePrefix")(s):r(s)}function r(s){return s===null||Le(s)?e(s):n(s)}}const Hy={continuation:{tokenize:bP},exit:RP,name:"blockQuote",tokenize:CP};function CP(t,e,n){const i=this;return r;function r(a){if(a===62){const o=i.containerState;return o.open||(t.enter("blockQuote",{_container:!0}),o.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(a),t.exit("blockQuoteMarker"),s}return n(a)}function s(a){return Xe(a)?(t.enter("blockQuotePrefixWhitespace"),t.consume(a),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),e):(t.exit("blockQuotePrefix"),e(a))}}function bP(t,e,n){const i=this;return r;function r(a){return Xe(a)?Ze(t,s,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):s(a)}function s(a){return t.attempt(Hy,e,n)(a)}}function RP(t){t.exit("blockQuote")}const Gy={name:"characterEscape",tokenize:PP};function PP(t,e,n){return i;function i(s){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(s),t.exit("escapeMarker"),r}function r(s){return gP(s)?(t.enter("characterEscapeValue"),t.consume(s),t.exit("characterEscapeValue"),t.exit("characterEscape"),e):n(s)}}const Wy={name:"characterReference",tokenize:IP};function IP(t,e,n){const i=this;let r=0,s,a;return o;function o(c){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(c),t.exit("characterReferenceMarker"),l}function l(c){return c===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(c),t.exit("characterReferenceMarkerNumeric"),u):(t.enter("characterReferenceValue"),s=31,a=an,f(c))}function u(c){return c===88||c===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(c),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),s=6,a=mP,f):(t.enter("characterReferenceValue"),s=7,a=Sd,f(c))}function f(c){if(c===59&&r){const h=t.exit("characterReferenceValue");return a===an&&!Xp(i.sliceSerialize(h))?n(c):(t.enter("characterReferenceMarker"),t.consume(c),t.exit("characterReferenceMarker"),t.exit("characterReference"),e)}return a(c)&&r++<s?(t.consume(c),f):n(c)}}const O0={partial:!0,tokenize:DP},z0={concrete:!0,name:"codeFenced",tokenize:LP};function LP(t,e,n){const i=this,r={partial:!0,tokenize:C};let s=0,a=0,o;return l;function l(M){return u(M)}function u(M){const b=i.events[i.events.length-1];return s=b&&b[1].type==="linePrefix"?b[2].sliceSerialize(b[1],!0).length:0,o=M,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),f(M)}function f(M){return M===o?(a++,t.consume(M),f):a<3?n(M):(t.exit("codeFencedFenceSequence"),Xe(M)?Ze(t,c,"whitespace")(M):c(M))}function c(M){return M===null||Le(M)?(t.exit("codeFencedFence"),i.interrupt?e(M):t.check(O0,v,E)(M)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),h(M))}function h(M){return M===null||Le(M)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),c(M)):Xe(M)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),Ze(t,d,"whitespace")(M)):M===96&&M===o?n(M):(t.consume(M),h)}function d(M){return M===null||Le(M)?c(M):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),m(M))}function m(M){return M===null||Le(M)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),c(M)):M===96&&M===o?n(M):(t.consume(M),m)}function v(M){return t.attempt(r,E,x)(M)}function x(M){return t.enter("lineEnding"),t.consume(M),t.exit("lineEnding"),p}function p(M){return s>0&&Xe(M)?Ze(t,g,"linePrefix",s+1)(M):g(M)}function g(M){return M===null||Le(M)?t.check(O0,v,E)(M):(t.enter("codeFlowValue"),_(M))}function _(M){return M===null||Le(M)?(t.exit("codeFlowValue"),g(M)):(t.consume(M),_)}function E(M){return t.exit("codeFenced"),e(M)}function C(M,b,y){let T=0;return R;function R(z){return M.enter("lineEnding"),M.consume(z),M.exit("lineEnding"),P}function P(z){return M.enter("codeFencedFence"),Xe(z)?Ze(M,F,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(z):F(z)}function F(z){return z===o?(M.enter("codeFencedFenceSequence"),H(z)):y(z)}function H(z){return z===o?(T++,M.consume(z),H):T>=a?(M.exit("codeFencedFenceSequence"),Xe(z)?Ze(M,Y,"whitespace")(z):Y(z)):y(z)}function Y(z){return z===null||Le(z)?(M.exit("codeFencedFence"),b(z)):y(z)}}}function DP(t,e,n){const i=this;return r;function r(a){return a===null?n(a):(t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),s)}function s(a){return i.parser.lazy[i.now().line]?n(a):e(a)}}const gf={name:"codeIndented",tokenize:kP},NP={partial:!0,tokenize:FP};function kP(t,e,n){const i=this;return r;function r(u){return t.enter("codeIndented"),Ze(t,s,"linePrefix",5)(u)}function s(u){const f=i.events[i.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?l(u):Le(u)?t.attempt(NP,a,l)(u):(t.enter("codeFlowValue"),o(u))}function o(u){return u===null||Le(u)?(t.exit("codeFlowValue"),a(u)):(t.consume(u),o)}function l(u){return t.exit("codeIndented"),e(u)}}function FP(t,e,n){const i=this;return r;function r(a){return i.parser.lazy[i.now().line]?n(a):Le(a)?(t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),r):Ze(t,s,"linePrefix",5)(a)}function s(a){const o=i.events[i.events.length-1];return o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?e(a):Le(a)?r(a):n(a)}}const UP={name:"codeText",previous:zP,resolve:OP,tokenize:BP};function OP(t){let e=t.length-4,n=3,i,r;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(i=n;++i<e;)if(t[i][1].type==="codeTextData"){t[n][1].type="codeTextPadding",t[e][1].type="codeTextPadding",n+=2,e-=2;break}}for(i=n-1,e++;++i<=e;)r===void 0?i!==e&&t[i][1].type!=="lineEnding"&&(r=i):(i===e||t[i][1].type==="lineEnding")&&(t[r][1].type="codeTextData",i!==r+2&&(t[r][1].end=t[i-1][1].end,t.splice(r+2,i-r-2),e-=i-r-2,i=r+2),r=void 0);return t}function zP(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function BP(t,e,n){let i=0,r,s;return a;function a(c){return t.enter("codeText"),t.enter("codeTextSequence"),o(c)}function o(c){return c===96?(t.consume(c),i++,o):(t.exit("codeTextSequence"),l(c))}function l(c){return c===null?n(c):c===32?(t.enter("space"),t.consume(c),t.exit("space"),l):c===96?(s=t.enter("codeTextSequence"),r=0,f(c)):Le(c)?(t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),l):(t.enter("codeTextData"),u(c))}function u(c){return c===null||c===32||c===96||Le(c)?(t.exit("codeTextData"),l(c)):(t.consume(c),u)}function f(c){return c===96?(t.consume(c),r++,f):r===i?(t.exit("codeTextSequence"),t.exit("codeText"),e(c)):(s.type="codeTextData",u(c))}}class VP{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,n){const i=n??Number.POSITIVE_INFINITY;return i<this.left.length?this.left.slice(e,i):e>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(e,n,i){const r=n||0;this.setCursor(Math.trunc(e));const s=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return i&&Da(this.left,i),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),Da(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),Da(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const n=this.left.splice(e,Number.POSITIVE_INFINITY);Da(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);Da(this.left,n.reverse())}}}function Da(t,e){let n=0;if(e.length<1e4)t.push(...e);else for(;n<e.length;)t.push(...e.slice(n,n+1e4)),n+=1e4}function jy(t){const e={};let n=-1,i,r,s,a,o,l,u;const f=new VP(t);for(;++n<f.length;){for(;n in e;)n=e[n];if(i=f.get(n),n&&i[1].type==="chunkFlow"&&f.get(n-1)[1].type==="listItemPrefix"&&(l=i[1]._tokenizer.events,s=0,s<l.length&&l[s][1].type==="lineEndingBlank"&&(s+=2),s<l.length&&l[s][1].type==="content"))for(;++s<l.length&&l[s][1].type!=="content";)l[s][1].type==="chunkText"&&(l[s][1]._isInFirstContentOfListItem=!0,s++);if(i[0]==="enter")i[1].contentType&&(Object.assign(e,HP(f,n)),n=e[n],u=!0);else if(i[1]._container){for(s=n,r=void 0;s--;)if(a=f.get(s),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(r&&(f.get(r)[1].type="lineEndingBlank"),a[1].type="lineEnding",r=s);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;r&&(i[1].end={...f.get(r)[1].start},o=f.slice(r,n),o.unshift(i),f.splice(r,n-r+1,o))}}return Ln(t,0,Number.POSITIVE_INFINITY,f.slice(0)),!u}function HP(t,e){const n=t.get(e)[1],i=t.get(e)[2];let r=e-1;const s=[];let a=n._tokenizer;a||(a=i.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const o=a.events,l=[],u={};let f,c,h=-1,d=n,m=0,v=0;const x=[v];for(;d;){for(;t.get(++r)[1]!==d;);s.push(r),d._tokenizer||(f=i.sliceStream(d),d.next||f.push(null),c&&a.defineSkip(d.start),d._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(f),d._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),c=d,d=d.next}for(d=n;++h<o.length;)o[h][0]==="exit"&&o[h-1][0]==="enter"&&o[h][1].type===o[h-1][1].type&&o[h][1].start.line!==o[h][1].end.line&&(v=h+1,x.push(v),d._tokenizer=void 0,d.previous=void 0,d=d.next);for(a.events=[],d?(d._tokenizer=void 0,d.previous=void 0):x.pop(),h=x.length;h--;){const p=o.slice(x[h],x[h+1]),g=s.pop();l.push([g,g+p.length-1]),t.splice(g,2,p)}for(l.reverse(),h=-1;++h<l.length;)u[m+l[h][0]]=m+l[h][1],m+=l[h][1]-l[h][0]-1;return u}const GP={resolve:jP,tokenize:XP},WP={partial:!0,tokenize:qP};function jP(t){return jy(t),t}function XP(t,e){let n;return i;function i(o){return t.enter("content"),n=t.enter("chunkContent",{contentType:"content"}),r(o)}function r(o){return o===null?s(o):Le(o)?t.check(WP,a,s)(o):(t.consume(o),r)}function s(o){return t.exit("chunkContent"),t.exit("content"),e(o)}function a(o){return t.consume(o),t.exit("chunkContent"),n.next=t.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}}function qP(t,e,n){const i=this;return r;function r(a){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),Ze(t,s,"linePrefix")}function s(a){if(a===null||Le(a))return n(a);const o=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?e(a):t.interrupt(i.parser.constructs.flow,n,e)(a)}}function Xy(t,e,n,i,r,s,a,o,l){const u=l||Number.POSITIVE_INFINITY;let f=0;return c;function c(p){return p===60?(t.enter(i),t.enter(r),t.enter(s),t.consume(p),t.exit(s),h):p===null||p===32||p===41||Au(p)?n(p):(t.enter(i),t.enter(a),t.enter(o),t.enter("chunkString",{contentType:"string"}),v(p))}function h(p){return p===62?(t.enter(s),t.consume(p),t.exit(s),t.exit(r),t.exit(i),e):(t.enter(o),t.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===62?(t.exit("chunkString"),t.exit(o),h(p)):p===null||p===60||Le(p)?n(p):(t.consume(p),p===92?m:d)}function m(p){return p===60||p===62||p===92?(t.consume(p),d):d(p)}function v(p){return!f&&(p===null||p===41||pt(p))?(t.exit("chunkString"),t.exit(o),t.exit(a),t.exit(i),e(p)):f<u&&p===40?(t.consume(p),f++,v):p===41?(t.consume(p),f--,v):p===null||p===32||p===40||Au(p)?n(p):(t.consume(p),p===92?x:v)}function x(p){return p===40||p===41||p===92?(t.consume(p),v):v(p)}}function qy(t,e,n,i,r,s){const a=this;let o=0,l;return u;function u(d){return t.enter(i),t.enter(r),t.consume(d),t.exit(r),t.enter(s),f}function f(d){return o>999||d===null||d===91||d===93&&!l||d===94&&!o&&"_hiddenFootnoteSupport"in a.parser.constructs?n(d):d===93?(t.exit(s),t.enter(r),t.consume(d),t.exit(r),t.exit(i),e):Le(d)?(t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),f):(t.enter("chunkString",{contentType:"string"}),c(d))}function c(d){return d===null||d===91||d===93||Le(d)||o++>999?(t.exit("chunkString"),f(d)):(t.consume(d),l||(l=!Xe(d)),d===92?h:c)}function h(d){return d===91||d===92||d===93?(t.consume(d),o++,c):c(d)}}function Yy(t,e,n,i,r,s){let a;return o;function o(h){return h===34||h===39||h===40?(t.enter(i),t.enter(r),t.consume(h),t.exit(r),a=h===40?41:h,l):n(h)}function l(h){return h===a?(t.enter(r),t.consume(h),t.exit(r),t.exit(i),e):(t.enter(s),u(h))}function u(h){return h===a?(t.exit(s),l(a)):h===null?n(h):Le(h)?(t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),Ze(t,u,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),f(h))}function f(h){return h===a||h===null||Le(h)?(t.exit("chunkString"),u(h)):(t.consume(h),h===92?c:f)}function c(h){return h===a||h===92?(t.consume(h),f):f(h)}}function Ja(t,e){let n;return i;function i(r){return Le(r)?(t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),n=!0,i):Xe(r)?Ze(t,i,n?"linePrefix":"lineSuffix")(r):e(r)}}const YP={name:"definition",tokenize:KP},$P={partial:!0,tokenize:ZP};function KP(t,e,n){const i=this;let r;return s;function s(d){return t.enter("definition"),a(d)}function a(d){return qy.call(i,t,o,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(d)}function o(d){return r=li(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),d===58?(t.enter("definitionMarker"),t.consume(d),t.exit("definitionMarker"),l):n(d)}function l(d){return pt(d)?Ja(t,u)(d):u(d)}function u(d){return Xy(t,f,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(d)}function f(d){return t.attempt($P,c,c)(d)}function c(d){return Xe(d)?Ze(t,h,"whitespace")(d):h(d)}function h(d){return d===null||Le(d)?(t.exit("definition"),i.parser.defined.push(r),e(d)):n(d)}}function ZP(t,e,n){return i;function i(o){return pt(o)?Ja(t,r)(o):n(o)}function r(o){return Yy(t,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(o)}function s(o){return Xe(o)?Ze(t,a,"whitespace")(o):a(o)}function a(o){return o===null||Le(o)?e(o):n(o)}}const QP={name:"hardBreakEscape",tokenize:JP};function JP(t,e,n){return i;function i(s){return t.enter("hardBreakEscape"),t.consume(s),r}function r(s){return Le(s)?(t.exit("hardBreakEscape"),e(s)):n(s)}}const e3={name:"headingAtx",resolve:t3,tokenize:n3};function t3(t,e){let n=t.length-2,i=3,r,s;return t[i][1].type==="whitespace"&&(i+=2),n-2>i&&t[n][1].type==="whitespace"&&(n-=2),t[n][1].type==="atxHeadingSequence"&&(i===n-1||n-4>i&&t[n-2][1].type==="whitespace")&&(n-=i+1===n?2:4),n>i&&(r={type:"atxHeadingText",start:t[i][1].start,end:t[n][1].end},s={type:"chunkText",start:t[i][1].start,end:t[n][1].end,contentType:"text"},Ln(t,i,n-i+1,[["enter",r,e],["enter",s,e],["exit",s,e],["exit",r,e]])),t}function n3(t,e,n){let i=0;return r;function r(f){return t.enter("atxHeading"),s(f)}function s(f){return t.enter("atxHeadingSequence"),a(f)}function a(f){return f===35&&i++<6?(t.consume(f),a):f===null||pt(f)?(t.exit("atxHeadingSequence"),o(f)):n(f)}function o(f){return f===35?(t.enter("atxHeadingSequence"),l(f)):f===null||Le(f)?(t.exit("atxHeading"),e(f)):Xe(f)?Ze(t,o,"whitespace")(f):(t.enter("atxHeadingText"),u(f))}function l(f){return f===35?(t.consume(f),l):(t.exit("atxHeadingSequence"),o(f))}function u(f){return f===null||f===35||pt(f)?(t.exit("atxHeadingText"),o(f)):(t.consume(f),u)}}const i3=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],B0=["pre","script","style","textarea"],r3={concrete:!0,name:"htmlFlow",resolveTo:o3,tokenize:l3},s3={partial:!0,tokenize:c3},a3={partial:!0,tokenize:u3};function o3(t){let e=t.length;for(;e--&&!(t[e][0]==="enter"&&t[e][1].type==="htmlFlow"););return e>1&&t[e-2][1].type==="linePrefix"&&(t[e][1].start=t[e-2][1].start,t[e+1][1].start=t[e-2][1].start,t.splice(e-2,2)),t}function l3(t,e,n){const i=this;let r,s,a,o,l;return u;function u(L){return f(L)}function f(L){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(L),c}function c(L){return L===33?(t.consume(L),h):L===47?(t.consume(L),s=!0,v):L===63?(t.consume(L),r=3,i.interrupt?e:A):fn(L)?(t.consume(L),a=String.fromCharCode(L),x):n(L)}function h(L){return L===45?(t.consume(L),r=2,d):L===91?(t.consume(L),r=5,o=0,m):fn(L)?(t.consume(L),r=4,i.interrupt?e:A):n(L)}function d(L){return L===45?(t.consume(L),i.interrupt?e:A):n(L)}function m(L){const Fe="CDATA[";return L===Fe.charCodeAt(o++)?(t.consume(L),o===Fe.length?i.interrupt?e:F:m):n(L)}function v(L){return fn(L)?(t.consume(L),a=String.fromCharCode(L),x):n(L)}function x(L){if(L===null||L===47||L===62||pt(L)){const Fe=L===47,Ge=a.toLowerCase();return!Fe&&!s&&B0.includes(Ge)?(r=1,i.interrupt?e(L):F(L)):i3.includes(a.toLowerCase())?(r=6,Fe?(t.consume(L),p):i.interrupt?e(L):F(L)):(r=7,i.interrupt&&!i.parser.lazy[i.now().line]?n(L):s?g(L):_(L))}return L===45||an(L)?(t.consume(L),a+=String.fromCharCode(L),x):n(L)}function p(L){return L===62?(t.consume(L),i.interrupt?e:F):n(L)}function g(L){return Xe(L)?(t.consume(L),g):R(L)}function _(L){return L===47?(t.consume(L),R):L===58||L===95||fn(L)?(t.consume(L),E):Xe(L)?(t.consume(L),_):R(L)}function E(L){return L===45||L===46||L===58||L===95||an(L)?(t.consume(L),E):C(L)}function C(L){return L===61?(t.consume(L),M):Xe(L)?(t.consume(L),C):_(L)}function M(L){return L===null||L===60||L===61||L===62||L===96?n(L):L===34||L===39?(t.consume(L),l=L,b):Xe(L)?(t.consume(L),M):y(L)}function b(L){return L===l?(t.consume(L),l=null,T):L===null||Le(L)?n(L):(t.consume(L),b)}function y(L){return L===null||L===34||L===39||L===47||L===60||L===61||L===62||L===96||pt(L)?C(L):(t.consume(L),y)}function T(L){return L===47||L===62||Xe(L)?_(L):n(L)}function R(L){return L===62?(t.consume(L),P):n(L)}function P(L){return L===null||Le(L)?F(L):Xe(L)?(t.consume(L),P):n(L)}function F(L){return L===45&&r===2?(t.consume(L),X):L===60&&r===1?(t.consume(L),V):L===62&&r===4?(t.consume(L),re):L===63&&r===3?(t.consume(L),A):L===93&&r===5?(t.consume(L),Z):Le(L)&&(r===6||r===7)?(t.exit("htmlFlowData"),t.check(s3,se,H)(L)):L===null||Le(L)?(t.exit("htmlFlowData"),H(L)):(t.consume(L),F)}function H(L){return t.check(a3,Y,se)(L)}function Y(L){return t.enter("lineEnding"),t.consume(L),t.exit("lineEnding"),z}function z(L){return L===null||Le(L)?H(L):(t.enter("htmlFlowData"),F(L))}function X(L){return L===45?(t.consume(L),A):F(L)}function V(L){return L===47?(t.consume(L),a="",j):F(L)}function j(L){if(L===62){const Fe=a.toLowerCase();return B0.includes(Fe)?(t.consume(L),re):F(L)}return fn(L)&&a.length<8?(t.consume(L),a+=String.fromCharCode(L),j):F(L)}function Z(L){return L===93?(t.consume(L),A):F(L)}function A(L){return L===62?(t.consume(L),re):L===45&&r===2?(t.consume(L),A):F(L)}function re(L){return L===null||Le(L)?(t.exit("htmlFlowData"),se(L)):(t.consume(L),re)}function se(L){return t.exit("htmlFlow"),e(L)}}function u3(t,e,n){const i=this;return r;function r(a){return Le(a)?(t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),s):n(a)}function s(a){return i.parser.lazy[i.now().line]?n(a):e(a)}}function c3(t,e,n){return i;function i(r){return t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),t.attempt(Fo,e,n)}}const f3={name:"htmlText",tokenize:h3};function h3(t,e,n){const i=this;let r,s,a;return o;function o(A){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(A),l}function l(A){return A===33?(t.consume(A),u):A===47?(t.consume(A),C):A===63?(t.consume(A),_):fn(A)?(t.consume(A),y):n(A)}function u(A){return A===45?(t.consume(A),f):A===91?(t.consume(A),s=0,m):fn(A)?(t.consume(A),g):n(A)}function f(A){return A===45?(t.consume(A),d):n(A)}function c(A){return A===null?n(A):A===45?(t.consume(A),h):Le(A)?(a=c,V(A)):(t.consume(A),c)}function h(A){return A===45?(t.consume(A),d):c(A)}function d(A){return A===62?X(A):A===45?h(A):c(A)}function m(A){const re="CDATA[";return A===re.charCodeAt(s++)?(t.consume(A),s===re.length?v:m):n(A)}function v(A){return A===null?n(A):A===93?(t.consume(A),x):Le(A)?(a=v,V(A)):(t.consume(A),v)}function x(A){return A===93?(t.consume(A),p):v(A)}function p(A){return A===62?X(A):A===93?(t.consume(A),p):v(A)}function g(A){return A===null||A===62?X(A):Le(A)?(a=g,V(A)):(t.consume(A),g)}function _(A){return A===null?n(A):A===63?(t.consume(A),E):Le(A)?(a=_,V(A)):(t.consume(A),_)}function E(A){return A===62?X(A):_(A)}function C(A){return fn(A)?(t.consume(A),M):n(A)}function M(A){return A===45||an(A)?(t.consume(A),M):b(A)}function b(A){return Le(A)?(a=b,V(A)):Xe(A)?(t.consume(A),b):X(A)}function y(A){return A===45||an(A)?(t.consume(A),y):A===47||A===62||pt(A)?T(A):n(A)}function T(A){return A===47?(t.consume(A),X):A===58||A===95||fn(A)?(t.consume(A),R):Le(A)?(a=T,V(A)):Xe(A)?(t.consume(A),T):X(A)}function R(A){return A===45||A===46||A===58||A===95||an(A)?(t.consume(A),R):P(A)}function P(A){return A===61?(t.consume(A),F):Le(A)?(a=P,V(A)):Xe(A)?(t.consume(A),P):T(A)}function F(A){return A===null||A===60||A===61||A===62||A===96?n(A):A===34||A===39?(t.consume(A),r=A,H):Le(A)?(a=F,V(A)):Xe(A)?(t.consume(A),F):(t.consume(A),Y)}function H(A){return A===r?(t.consume(A),r=void 0,z):A===null?n(A):Le(A)?(a=H,V(A)):(t.consume(A),H)}function Y(A){return A===null||A===34||A===39||A===60||A===61||A===96?n(A):A===47||A===62||pt(A)?T(A):(t.consume(A),Y)}function z(A){return A===47||A===62||pt(A)?T(A):n(A)}function X(A){return A===62?(t.consume(A),t.exit("htmlTextData"),t.exit("htmlText"),e):n(A)}function V(A){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(A),t.exit("lineEnding"),j}function j(A){return Xe(A)?Ze(t,Z,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(A):Z(A)}function Z(A){return t.enter("htmlTextData"),a(A)}}const qp={name:"labelEnd",resolveAll:g3,resolveTo:x3,tokenize:_3},d3={tokenize:v3},p3={tokenize:y3},m3={tokenize:S3};function g3(t){let e=-1;const n=[];for(;++e<t.length;){const i=t[e][1];if(n.push(t[e]),i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd"){const r=i.type==="labelImage"?4:2;i.type="data",e+=r}}return t.length!==n.length&&Ln(t,0,t.length,n),t}function x3(t,e){let n=t.length,i=0,r,s,a,o;for(;n--;)if(r=t[n][1],s){if(r.type==="link"||r.type==="labelLink"&&r._inactive)break;t[n][0]==="enter"&&r.type==="labelLink"&&(r._inactive=!0)}else if(a){if(t[n][0]==="enter"&&(r.type==="labelImage"||r.type==="labelLink")&&!r._balanced&&(s=n,r.type!=="labelLink")){i=2;break}}else r.type==="labelEnd"&&(a=n);const l={type:t[s][1].type==="labelLink"?"link":"image",start:{...t[s][1].start},end:{...t[t.length-1][1].end}},u={type:"label",start:{...t[s][1].start},end:{...t[a][1].end}},f={type:"labelText",start:{...t[s+i+2][1].end},end:{...t[a-2][1].start}};return o=[["enter",l,e],["enter",u,e]],o=Vn(o,t.slice(s+1,s+i+3)),o=Vn(o,[["enter",f,e]]),o=Vn(o,Ju(e.parser.constructs.insideSpan.null,t.slice(s+i+4,a-3),e)),o=Vn(o,[["exit",f,e],t[a-2],t[a-1],["exit",u,e]]),o=Vn(o,t.slice(a+1)),o=Vn(o,[["exit",l,e]]),Ln(t,s,t.length,o),t}function _3(t,e,n){const i=this;let r=i.events.length,s,a;for(;r--;)if((i.events[r][1].type==="labelImage"||i.events[r][1].type==="labelLink")&&!i.events[r][1]._balanced){s=i.events[r][1];break}return o;function o(h){return s?s._inactive?c(h):(a=i.parser.defined.includes(li(i.sliceSerialize({start:s.end,end:i.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(h),t.exit("labelMarker"),t.exit("labelEnd"),l):n(h)}function l(h){return h===40?t.attempt(d3,f,a?f:c)(h):h===91?t.attempt(p3,f,a?u:c)(h):a?f(h):c(h)}function u(h){return t.attempt(m3,f,c)(h)}function f(h){return e(h)}function c(h){return s._balanced=!0,n(h)}}function v3(t,e,n){return i;function i(c){return t.enter("resource"),t.enter("resourceMarker"),t.consume(c),t.exit("resourceMarker"),r}function r(c){return pt(c)?Ja(t,s)(c):s(c)}function s(c){return c===41?f(c):Xy(t,a,o,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function a(c){return pt(c)?Ja(t,l)(c):f(c)}function o(c){return n(c)}function l(c){return c===34||c===39||c===40?Yy(t,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):f(c)}function u(c){return pt(c)?Ja(t,f)(c):f(c)}function f(c){return c===41?(t.enter("resourceMarker"),t.consume(c),t.exit("resourceMarker"),t.exit("resource"),e):n(c)}}function y3(t,e,n){const i=this;return r;function r(o){return qy.call(i,t,s,a,"reference","referenceMarker","referenceString")(o)}function s(o){return i.parser.defined.includes(li(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?e(o):n(o)}function a(o){return n(o)}}function S3(t,e,n){return i;function i(s){return t.enter("reference"),t.enter("referenceMarker"),t.consume(s),t.exit("referenceMarker"),r}function r(s){return s===93?(t.enter("referenceMarker"),t.consume(s),t.exit("referenceMarker"),t.exit("reference"),e):n(s)}}const E3={name:"labelStartImage",resolveAll:qp.resolveAll,tokenize:M3};function M3(t,e,n){const i=this;return r;function r(o){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(o),t.exit("labelImageMarker"),s}function s(o){return o===91?(t.enter("labelMarker"),t.consume(o),t.exit("labelMarker"),t.exit("labelImage"),a):n(o)}function a(o){return o===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(o):e(o)}}const w3={name:"labelStartLink",resolveAll:qp.resolveAll,tokenize:T3};function T3(t,e,n){const i=this;return r;function r(a){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(a),t.exit("labelMarker"),t.exit("labelLink"),s}function s(a){return a===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(a):e(a)}}const xf={name:"lineEnding",tokenize:A3};function A3(t,e){return n;function n(i){return t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),Ze(t,e,"linePrefix")}}const $l={name:"thematicBreak",tokenize:C3};function C3(t,e,n){let i=0,r;return s;function s(u){return t.enter("thematicBreak"),a(u)}function a(u){return r=u,o(u)}function o(u){return u===r?(t.enter("thematicBreakSequence"),l(u)):i>=3&&(u===null||Le(u))?(t.exit("thematicBreak"),e(u)):n(u)}function l(u){return u===r?(t.consume(u),i++,l):(t.exit("thematicBreakSequence"),Xe(u)?Ze(t,o,"whitespace")(u):o(u))}}const xn={continuation:{tokenize:I3},exit:D3,name:"list",tokenize:P3},b3={partial:!0,tokenize:N3},R3={partial:!0,tokenize:L3};function P3(t,e,n){const i=this,r=i.events[i.events.length-1];let s=r&&r[1].type==="linePrefix"?r[2].sliceSerialize(r[1],!0).length:0,a=0;return o;function o(d){const m=i.containerState.type||(d===42||d===43||d===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!i.containerState.marker||d===i.containerState.marker:Sd(d)){if(i.containerState.type||(i.containerState.type=m,t.enter(m,{_container:!0})),m==="listUnordered")return t.enter("listItemPrefix"),d===42||d===45?t.check($l,n,u)(d):u(d);if(!i.interrupt||d===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),l(d)}return n(d)}function l(d){return Sd(d)&&++a<10?(t.consume(d),l):(!i.interrupt||a<2)&&(i.containerState.marker?d===i.containerState.marker:d===41||d===46)?(t.exit("listItemValue"),u(d)):n(d)}function u(d){return t.enter("listItemMarker"),t.consume(d),t.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||d,t.check(Fo,i.interrupt?n:f,t.attempt(b3,h,c))}function f(d){return i.containerState.initialBlankLine=!0,s++,h(d)}function c(d){return Xe(d)?(t.enter("listItemPrefixWhitespace"),t.consume(d),t.exit("listItemPrefixWhitespace"),h):n(d)}function h(d){return i.containerState.size=s+i.sliceSerialize(t.exit("listItemPrefix"),!0).length,e(d)}}function I3(t,e,n){const i=this;return i.containerState._closeFlow=void 0,t.check(Fo,r,s);function r(o){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,Ze(t,e,"listItemIndent",i.containerState.size+1)(o)}function s(o){return i.containerState.furtherBlankLines||!Xe(o)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,a(o)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,t.attempt(R3,e,a)(o))}function a(o){return i.containerState._closeFlow=!0,i.interrupt=void 0,Ze(t,t.attempt(xn,e,n),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o)}}function L3(t,e,n){const i=this;return Ze(t,r,"listItemIndent",i.containerState.size+1);function r(s){const a=i.events[i.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===i.containerState.size?e(s):n(s)}}function D3(t){t.exit(this.containerState.type)}function N3(t,e,n){const i=this;return Ze(t,r,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function r(s){const a=i.events[i.events.length-1];return!Xe(s)&&a&&a[1].type==="listItemPrefixWhitespace"?e(s):n(s)}}const V0={name:"setextUnderline",resolveTo:k3,tokenize:F3};function k3(t,e){let n=t.length,i,r,s;for(;n--;)if(t[n][0]==="enter"){if(t[n][1].type==="content"){i=n;break}t[n][1].type==="paragraph"&&(r=n)}else t[n][1].type==="content"&&t.splice(n,1),!s&&t[n][1].type==="definition"&&(s=n);const a={type:"setextHeading",start:{...t[i][1].start},end:{...t[t.length-1][1].end}};return t[r][1].type="setextHeadingText",s?(t.splice(r,0,["enter",a,e]),t.splice(s+1,0,["exit",t[i][1],e]),t[i][1].end={...t[s][1].end}):t[i][1]=a,t.push(["exit",a,e]),t}function F3(t,e,n){const i=this;let r;return s;function s(u){let f=i.events.length,c;for(;f--;)if(i.events[f][1].type!=="lineEnding"&&i.events[f][1].type!=="linePrefix"&&i.events[f][1].type!=="content"){c=i.events[f][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||c)?(t.enter("setextHeadingLine"),r=u,a(u)):n(u)}function a(u){return t.enter("setextHeadingLineSequence"),o(u)}function o(u){return u===r?(t.consume(u),o):(t.exit("setextHeadingLineSequence"),Xe(u)?Ze(t,l,"lineSuffix")(u):l(u))}function l(u){return u===null||Le(u)?(t.exit("setextHeadingLine"),e(u)):n(u)}}const U3={tokenize:O3};function O3(t){const e=this,n=t.attempt(Fo,i,t.attempt(this.parser.constructs.flowInitial,r,Ze(t,t.attempt(this.parser.constructs.flow,r,t.attempt(GP,r)),"linePrefix")));return n;function i(s){if(s===null){t.consume(s);return}return t.enter("lineEndingBlank"),t.consume(s),t.exit("lineEndingBlank"),e.currentConstruct=void 0,n}function r(s){if(s===null){t.consume(s);return}return t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),e.currentConstruct=void 0,n}}const z3={resolveAll:Ky()},B3=$y("string"),V3=$y("text");function $y(t){return{resolveAll:Ky(t==="text"?H3:void 0),tokenize:e};function e(n){const i=this,r=this.parser.constructs[t],s=n.attempt(r,a,o);return a;function a(f){return u(f)?s(f):o(f)}function o(f){if(f===null){n.consume(f);return}return n.enter("data"),n.consume(f),l}function l(f){return u(f)?(n.exit("data"),s(f)):(n.consume(f),l)}function u(f){if(f===null)return!0;const c=r[f];let h=-1;if(c)for(;++h<c.length;){const d=c[h];if(!d.previous||d.previous.call(i,i.previous))return!0}return!1}}}function Ky(t){return e;function e(n,i){let r=-1,s;for(;++r<=n.length;)s===void 0?n[r]&&n[r][1].type==="data"&&(s=r,r++):(!n[r]||n[r][1].type!=="data")&&(r!==s+2&&(n[s][1].end=n[r-1][1].end,n.splice(s+2,r-s-2),r=s+2),s=void 0);return t?t(n,i):n}}function H3(t,e){let n=0;for(;++n<=t.length;)if((n===t.length||t[n][1].type==="lineEnding")&&t[n-1][1].type==="data"){const i=t[n-1][1],r=e.sliceStream(i);let s=r.length,a=-1,o=0,l;for(;s--;){const u=r[s];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)o++,a--;if(a)break;a=-1}else if(u===-2)l=!0,o++;else if(u!==-1){s++;break}}if(e._contentTypeTextTrailing&&n===t.length&&(o=0),o){const u={type:n===t.length||l||o<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?a:i.start._bufferIndex+a,_index:i.start._index+s,line:i.end.line,column:i.end.column-o,offset:i.end.offset-o},end:{...i.end}};i.end={...u.start},i.start.offset===i.end.offset?Object.assign(i,u):(t.splice(n,0,["enter",u,e],["exit",u,e]),n+=2)}n++}return t}const G3={42:xn,43:xn,45:xn,48:xn,49:xn,50:xn,51:xn,52:xn,53:xn,54:xn,55:xn,56:xn,57:xn,62:Hy},W3={91:YP},j3={[-2]:gf,[-1]:gf,32:gf},X3={35:e3,42:$l,45:[V0,$l],60:r3,61:V0,95:$l,96:z0,126:z0},q3={38:Wy,92:Gy},Y3={[-5]:xf,[-4]:xf,[-3]:xf,33:E3,38:Wy,42:Ed,60:[wP,f3],91:w3,92:[QP,Gy],93:qp,95:Ed,96:UP},$3={null:[Ed,z3]},K3={null:[42,95]},Z3={null:[]},Q3=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:K3,contentInitial:W3,disable:Z3,document:G3,flow:X3,flowInitial:j3,insideSpan:$3,string:q3,text:Y3},Symbol.toStringTag,{value:"Module"}));function J3(t,e,n){let i={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const r={},s=[];let a=[],o=[];const l={attempt:b(C),check:b(M),consume:g,enter:_,exit:E,interrupt:b(M,{interrupt:!0})},u={code:null,containerState:{},defineSkip:v,events:[],now:m,parser:t,previous:null,sliceSerialize:h,sliceStream:d,write:c};let f=e.tokenize.call(u,l);return e.resolveAll&&s.push(e),u;function c(P){return a=Vn(a,P),x(),a[a.length-1]!==null?[]:(y(e,0),u.events=Ju(s,u.events,u),u.events)}function h(P,F){return tI(d(P),F)}function d(P){return eI(a,P)}function m(){const{_bufferIndex:P,_index:F,line:H,column:Y,offset:z}=i;return{_bufferIndex:P,_index:F,line:H,column:Y,offset:z}}function v(P){r[P.line]=P.column,R()}function x(){let P;for(;i._index<a.length;){const F=a[i._index];if(typeof F=="string")for(P=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===P&&i._bufferIndex<F.length;)p(F.charCodeAt(i._bufferIndex));else p(F)}}function p(P){f=f(P)}function g(P){Le(P)?(i.line++,i.column=1,i.offset+=P===-3?2:1,R()):P!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===a[i._index].length&&(i._bufferIndex=-1,i._index++)),u.previous=P}function _(P,F){const H=F||{};return H.type=P,H.start=m(),u.events.push(["enter",H,u]),o.push(H),H}function E(P){const F=o.pop();return F.end=m(),u.events.push(["exit",F,u]),F}function C(P,F){y(P,F.from)}function M(P,F){F.restore()}function b(P,F){return H;function H(Y,z,X){let V,j,Z,A;return Array.isArray(Y)?se(Y):"tokenize"in Y?se([Y]):re(Y);function re(Q){return ne;function ne(oe){const ke=oe!==null&&Q[oe],Re=oe!==null&&Q.null,De=[...Array.isArray(ke)?ke:ke?[ke]:[],...Array.isArray(Re)?Re:Re?[Re]:[]];return se(De)(oe)}}function se(Q){return V=Q,j=0,Q.length===0?X:L(Q[j])}function L(Q){return ne;function ne(oe){return A=T(),Z=Q,Q.partial||(u.currentConstruct=Q),Q.name&&u.parser.constructs.disable.null.includes(Q.name)?Ge():Q.tokenize.call(F?Object.assign(Object.create(u),F):u,l,Fe,Ge)(oe)}}function Fe(Q){return P(Z,A),z}function Ge(Q){return A.restore(),++j<V.length?L(V[j]):X}}}function y(P,F){P.resolveAll&&!s.includes(P)&&s.push(P),P.resolve&&Ln(u.events,F,u.events.length-F,P.resolve(u.events.slice(F),u)),P.resolveTo&&(u.events=P.resolveTo(u.events,u))}function T(){const P=m(),F=u.previous,H=u.currentConstruct,Y=u.events.length,z=Array.from(o);return{from:Y,restore:X};function X(){i=P,u.previous=F,u.currentConstruct=H,u.events.length=Y,o=z,R()}}function R(){i.line in r&&i.column<2&&(i.column=r[i.line],i.offset+=r[i.line]-1)}}function eI(t,e){const n=e.start._index,i=e.start._bufferIndex,r=e.end._index,s=e.end._bufferIndex;let a;if(n===r)a=[t[n].slice(i,s)];else{if(a=t.slice(n,r),i>-1){const o=a[0];typeof o=="string"?a[0]=o.slice(i):a.shift()}s>0&&a.push(t[r].slice(0,s))}return a}function tI(t,e){let n=-1;const i=[];let r;for(;++n<t.length;){const s=t[n];let a;if(typeof s=="string")a=s;else switch(s){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=e?" ":"	";break}case-1:{if(!e&&r)continue;a=" ";break}default:a=String.fromCharCode(s)}r=s===-2,i.push(a)}return i.join("")}function nI(t){const i={constructs:By([Q3,...(t||{}).extensions||[]]),content:r(xP),defined:[],document:r(vP),flow:r(U3),lazy:{},string:r(B3),text:r(V3)};return i;function r(s){return a;function a(o){return J3(i,s,o)}}}function iI(t){for(;!jy(t););return t}const H0=/[\0\t\n\r]/g;function rI(){let t=1,e="",n=!0,i;return r;function r(s,a,o){const l=[];let u,f,c,h,d;for(s=e+(typeof s=="string"?s.toString():new TextDecoder(a||void 0).decode(s)),c=0,e="",n&&(s.charCodeAt(0)===65279&&c++,n=void 0);c<s.length;){if(H0.lastIndex=c,u=H0.exec(s),h=u&&u.index!==void 0?u.index:s.length,d=s.charCodeAt(h),!u){e=s.slice(c);break}if(d===10&&c===h&&i)l.push(-3),i=void 0;else switch(i&&(l.push(-5),i=void 0),c<h&&(l.push(s.slice(c,h)),t+=h-c),d){case 0:{l.push(65533),t++;break}case 9:{for(f=Math.ceil(t/4)*4,l.push(-2);t++<f;)l.push(-1);break}case 10:{l.push(-4),t=1;break}default:i=!0,t=1}c=h+1}return o&&(i&&l.push(-5),e&&l.push(e),l.push(null)),l}}const sI=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function aI(t){return t.replace(sI,oI)}function oI(t,e,n){if(e)return e;if(n.charCodeAt(0)===35){const r=n.charCodeAt(1),s=r===120||r===88;return Vy(n.slice(s?2:1),s?16:10)}return Xp(n)||t}const Zy={}.hasOwnProperty;function lI(t,e,n){return e&&typeof e=="object"&&(n=e,e=void 0),uI(n)(iI(nI(n).document().write(rI()(t,e,!0))))}function uI(t){const e={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(Et),autolinkProtocol:T,autolinkEmail:T,atxHeading:s(st),blockQuote:s(Re),characterEscape:T,characterReference:T,codeFenced:s(De),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:s(De,a),codeText:s(Lt,a),codeTextData:T,data:T,codeFlowValue:T,definition:s(Ye),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:s(it),hardBreakEscape:s(ze),hardBreakTrailing:s(ze),htmlFlow:s(yt,a),htmlFlowData:T,htmlText:s(yt,a),htmlTextData:T,image:s(k),label:a,link:s(Et),listItem:s(ut),listItemValue:h,listOrdered:s(Qe,c),listUnordered:s(Qe),paragraph:s(we),reference:L,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:s(st),strong:s(I),thematicBreak:s(B)},exit:{atxHeading:l(),atxHeadingSequence:C,autolink:l(),autolinkEmail:ke,autolinkProtocol:oe,blockQuote:l(),characterEscapeValue:R,characterReferenceMarkerHexadecimal:Ge,characterReferenceMarkerNumeric:Ge,characterReferenceValue:Q,characterReference:ne,codeFenced:l(x),codeFencedFence:v,codeFencedFenceInfo:d,codeFencedFenceMeta:m,codeFlowValue:R,codeIndented:l(p),codeText:l(z),codeTextData:R,data:R,definition:l(),definitionDestinationString:E,definitionLabelString:g,definitionTitleString:_,emphasis:l(),hardBreakEscape:l(F),hardBreakTrailing:l(F),htmlFlow:l(H),htmlFlowData:R,htmlText:l(Y),htmlTextData:R,image:l(V),label:Z,labelText:j,lineEnding:P,link:l(X),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:Fe,resourceDestinationString:A,resourceTitleString:re,resource:se,setextHeading:l(y),setextHeadingLineSequence:b,setextHeadingText:M,strong:l(),thematicBreak:l()}};Qy(e,(t||{}).mdastExtensions||[]);const n={};return i;function i(N){let O={type:"root",children:[]};const W={stack:[O],tokenStack:[],config:e,enter:o,exit:u,buffer:a,resume:f,data:n},ae=[];let te=-1;for(;++te<N.length;)if(N[te][1].type==="listOrdered"||N[te][1].type==="listUnordered")if(N[te][0]==="enter")ae.push(te);else{const ye=ae.pop();te=r(N,ye,te)}for(te=-1;++te<N.length;){const ye=e[N[te][0]];Zy.call(ye,N[te][1].type)&&ye[N[te][1].type].call(Object.assign({sliceSerialize:N[te][2].sliceSerialize},W),N[te][1])}if(W.tokenStack.length>0){const ye=W.tokenStack[W.tokenStack.length-1];(ye[1]||G0).call(W,void 0,ye[0])}for(O.position={start:or(N.length>0?N[0][1].start:{line:1,column:1,offset:0}),end:or(N.length>0?N[N.length-2][1].end:{line:1,column:1,offset:0})},te=-1;++te<e.transforms.length;)O=e.transforms[te](O)||O;return O}function r(N,O,W){let ae=O-1,te=-1,ye=!1,Pe,ie,ue,ve;for(;++ae<=W;){const ge=N[ae];switch(ge[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ge[0]==="enter"?te++:te--,ve=void 0;break}case"lineEndingBlank":{ge[0]==="enter"&&(Pe&&!ve&&!te&&!ue&&(ue=ae),ve=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:ve=void 0}if(!te&&ge[0]==="enter"&&ge[1].type==="listItemPrefix"||te===-1&&ge[0]==="exit"&&(ge[1].type==="listUnordered"||ge[1].type==="listOrdered")){if(Pe){let pe=ae;for(ie=void 0;pe--;){const Ne=N[pe];if(Ne[1].type==="lineEnding"||Ne[1].type==="lineEndingBlank"){if(Ne[0]==="exit")continue;ie&&(N[ie][1].type="lineEndingBlank",ye=!0),Ne[1].type="lineEnding",ie=pe}else if(!(Ne[1].type==="linePrefix"||Ne[1].type==="blockQuotePrefix"||Ne[1].type==="blockQuotePrefixWhitespace"||Ne[1].type==="blockQuoteMarker"||Ne[1].type==="listItemIndent"))break}ue&&(!ie||ue<ie)&&(Pe._spread=!0),Pe.end=Object.assign({},ie?N[ie][1].start:ge[1].end),N.splice(ie||ae,0,["exit",Pe,ge[2]]),ae++,W++}if(ge[1].type==="listItemPrefix"){const pe={type:"listItem",_spread:!1,start:Object.assign({},ge[1].start),end:void 0};Pe=pe,N.splice(ae,0,["enter",pe,ge[2]]),ae++,W++,ue=void 0,ve=!0}}}return N[O][1]._spread=ye,W}function s(N,O){return W;function W(ae){o.call(this,N(ae),ae),O&&O.call(this,ae)}}function a(){this.stack.push({type:"fragment",children:[]})}function o(N,O,W){this.stack[this.stack.length-1].children.push(N),this.stack.push(N),this.tokenStack.push([O,W||void 0]),N.position={start:or(O.start),end:void 0}}function l(N){return O;function O(W){N&&N.call(this,W),u.call(this,W)}}function u(N,O){const W=this.stack.pop(),ae=this.tokenStack.pop();if(ae)ae[0].type!==N.type&&(O?O.call(this,N,ae[0]):(ae[1]||G0).call(this,N,ae[0]));else throw new Error("Cannot close `"+N.type+"` ("+Qa({start:N.start,end:N.end})+"): it’s not open");W.position.end=or(N.end)}function f(){return jp(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function h(N){if(this.data.expectingFirstListItemValue){const O=this.stack[this.stack.length-2];O.start=Number.parseInt(this.sliceSerialize(N),10),this.data.expectingFirstListItemValue=void 0}}function d(){const N=this.resume(),O=this.stack[this.stack.length-1];O.lang=N}function m(){const N=this.resume(),O=this.stack[this.stack.length-1];O.meta=N}function v(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function x(){const N=this.resume(),O=this.stack[this.stack.length-1];O.value=N.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function p(){const N=this.resume(),O=this.stack[this.stack.length-1];O.value=N.replace(/(\r?\n|\r)$/g,"")}function g(N){const O=this.resume(),W=this.stack[this.stack.length-1];W.label=O,W.identifier=li(this.sliceSerialize(N)).toLowerCase()}function _(){const N=this.resume(),O=this.stack[this.stack.length-1];O.title=N}function E(){const N=this.resume(),O=this.stack[this.stack.length-1];O.url=N}function C(N){const O=this.stack[this.stack.length-1];if(!O.depth){const W=this.sliceSerialize(N).length;O.depth=W}}function M(){this.data.setextHeadingSlurpLineEnding=!0}function b(N){const O=this.stack[this.stack.length-1];O.depth=this.sliceSerialize(N).codePointAt(0)===61?1:2}function y(){this.data.setextHeadingSlurpLineEnding=void 0}function T(N){const W=this.stack[this.stack.length-1].children;let ae=W[W.length-1];(!ae||ae.type!=="text")&&(ae=S(),ae.position={start:or(N.start),end:void 0},W.push(ae)),this.stack.push(ae)}function R(N){const O=this.stack.pop();O.value+=this.sliceSerialize(N),O.position.end=or(N.end)}function P(N){const O=this.stack[this.stack.length-1];if(this.data.atHardBreak){const W=O.children[O.children.length-1];W.position.end=or(N.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(O.type)&&(T.call(this,N),R.call(this,N))}function F(){this.data.atHardBreak=!0}function H(){const N=this.resume(),O=this.stack[this.stack.length-1];O.value=N}function Y(){const N=this.resume(),O=this.stack[this.stack.length-1];O.value=N}function z(){const N=this.resume(),O=this.stack[this.stack.length-1];O.value=N}function X(){const N=this.stack[this.stack.length-1];if(this.data.inReference){const O=this.data.referenceType||"shortcut";N.type+="Reference",N.referenceType=O,delete N.url,delete N.title}else delete N.identifier,delete N.label;this.data.referenceType=void 0}function V(){const N=this.stack[this.stack.length-1];if(this.data.inReference){const O=this.data.referenceType||"shortcut";N.type+="Reference",N.referenceType=O,delete N.url,delete N.title}else delete N.identifier,delete N.label;this.data.referenceType=void 0}function j(N){const O=this.sliceSerialize(N),W=this.stack[this.stack.length-2];W.label=aI(O),W.identifier=li(O).toLowerCase()}function Z(){const N=this.stack[this.stack.length-1],O=this.resume(),W=this.stack[this.stack.length-1];if(this.data.inReference=!0,W.type==="link"){const ae=N.children;W.children=ae}else W.alt=O}function A(){const N=this.resume(),O=this.stack[this.stack.length-1];O.url=N}function re(){const N=this.resume(),O=this.stack[this.stack.length-1];O.title=N}function se(){this.data.inReference=void 0}function L(){this.data.referenceType="collapsed"}function Fe(N){const O=this.resume(),W=this.stack[this.stack.length-1];W.label=O,W.identifier=li(this.sliceSerialize(N)).toLowerCase(),this.data.referenceType="full"}function Ge(N){this.data.characterReferenceType=N.type}function Q(N){const O=this.sliceSerialize(N),W=this.data.characterReferenceType;let ae;W?(ae=Vy(O,W==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ae=Xp(O);const te=this.stack[this.stack.length-1];te.value+=ae}function ne(N){const O=this.stack.pop();O.position.end=or(N.end)}function oe(N){R.call(this,N);const O=this.stack[this.stack.length-1];O.url=this.sliceSerialize(N)}function ke(N){R.call(this,N);const O=this.stack[this.stack.length-1];O.url="mailto:"+this.sliceSerialize(N)}function Re(){return{type:"blockquote",children:[]}}function De(){return{type:"code",lang:null,meta:null,value:""}}function Lt(){return{type:"inlineCode",value:""}}function Ye(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function it(){return{type:"emphasis",children:[]}}function st(){return{type:"heading",depth:0,children:[]}}function ze(){return{type:"break"}}function yt(){return{type:"html",value:""}}function k(){return{type:"image",title:null,url:"",alt:null}}function Et(){return{type:"link",title:null,url:"",children:[]}}function Qe(N){return{type:"list",ordered:N.type==="listOrdered",start:null,spread:N._spread,children:[]}}function ut(N){return{type:"listItem",spread:N._spread,checked:null,children:[]}}function we(){return{type:"paragraph",children:[]}}function I(){return{type:"strong",children:[]}}function S(){return{type:"text",value:""}}function B(){return{type:"thematicBreak"}}}function or(t){return{line:t.line,column:t.column,offset:t.offset}}function Qy(t,e){let n=-1;for(;++n<e.length;){const i=e[n];Array.isArray(i)?Qy(t,i):cI(t,i)}}function cI(t,e){let n;for(n in e)if(Zy.call(e,n))switch(n){case"canContainEols":{const i=e[n];i&&t[n].push(...i);break}case"transforms":{const i=e[n];i&&t[n].push(...i);break}case"enter":case"exit":{const i=e[n];i&&Object.assign(t[n],i);break}}}function G0(t,e){throw t?new Error("Cannot close `"+t.type+"` ("+Qa({start:t.start,end:t.end})+"): a different token (`"+e.type+"`, "+Qa({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+Qa({start:e.start,end:e.end})+") is still open")}function fI(t){const e=this;e.parser=n;function n(i){return lI(i,{...e.data("settings"),...t,extensions:e.data("micromarkExtensions")||[],mdastExtensions:e.data("fromMarkdownExtensions")||[]})}}function hI(t,e){const n={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(e),!0)};return t.patch(e,n),t.applyData(e,n)}function dI(t,e){const n={type:"element",tagName:"br",properties:{},children:[]};return t.patch(e,n),[t.applyData(e,n),{type:"text",value:`
`}]}function pI(t,e){const n=e.value?e.value+`
`:"",i={},r=e.lang?e.lang.split(/\s+/):[];r.length>0&&(i.className=["language-"+r[0]]);let s={type:"element",tagName:"code",properties:i,children:[{type:"text",value:n}]};return e.meta&&(s.data={meta:e.meta}),t.patch(e,s),s=t.applyData(e,s),s={type:"element",tagName:"pre",properties:{},children:[s]},t.patch(e,s),s}function mI(t,e){const n={type:"element",tagName:"del",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function gI(t,e){const n={type:"element",tagName:"em",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function xI(t,e){const n=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",i=String(e.identifier).toUpperCase(),r=xa(i.toLowerCase()),s=t.footnoteOrder.indexOf(i);let a,o=t.footnoteCounts.get(i);o===void 0?(o=0,t.footnoteOrder.push(i),a=t.footnoteOrder.length):a=s+1,o+=1,t.footnoteCounts.set(i,o);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+r,id:n+"fnref-"+r+(o>1?"-"+o:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};t.patch(e,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return t.patch(e,u),t.applyData(e,u)}function _I(t,e){const n={type:"element",tagName:"h"+e.depth,properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function vI(t,e){if(t.options.allowDangerousHtml){const n={type:"raw",value:e.value};return t.patch(e,n),t.applyData(e,n)}}function Jy(t,e){const n=e.referenceType;let i="]";if(n==="collapsed"?i+="[]":n==="full"&&(i+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return[{type:"text",value:"!["+e.alt+i}];const r=t.all(e),s=r[0];s&&s.type==="text"?s.value="["+s.value:r.unshift({type:"text",value:"["});const a=r[r.length-1];return a&&a.type==="text"?a.value+=i:r.push({type:"text",value:i}),r}function yI(t,e){const n=String(e.identifier).toUpperCase(),i=t.definitionById.get(n);if(!i)return Jy(t,e);const r={src:xa(i.url||""),alt:e.alt};i.title!==null&&i.title!==void 0&&(r.title=i.title);const s={type:"element",tagName:"img",properties:r,children:[]};return t.patch(e,s),t.applyData(e,s)}function SI(t,e){const n={src:xa(e.url)};e.alt!==null&&e.alt!==void 0&&(n.alt=e.alt),e.title!==null&&e.title!==void 0&&(n.title=e.title);const i={type:"element",tagName:"img",properties:n,children:[]};return t.patch(e,i),t.applyData(e,i)}function EI(t,e){const n={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};t.patch(e,n);const i={type:"element",tagName:"code",properties:{},children:[n]};return t.patch(e,i),t.applyData(e,i)}function MI(t,e){const n=String(e.identifier).toUpperCase(),i=t.definitionById.get(n);if(!i)return Jy(t,e);const r={href:xa(i.url||"")};i.title!==null&&i.title!==void 0&&(r.title=i.title);const s={type:"element",tagName:"a",properties:r,children:t.all(e)};return t.patch(e,s),t.applyData(e,s)}function wI(t,e){const n={href:xa(e.url)};e.title!==null&&e.title!==void 0&&(n.title=e.title);const i={type:"element",tagName:"a",properties:n,children:t.all(e)};return t.patch(e,i),t.applyData(e,i)}function TI(t,e,n){const i=t.all(e),r=n?AI(n):eS(e),s={},a=[];if(typeof e.checked=="boolean"){const f=i[0];let c;f&&f.type==="element"&&f.tagName==="p"?c=f:(c={type:"element",tagName:"p",properties:{},children:[]},i.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let o=-1;for(;++o<i.length;){const f=i[o];(r||o!==0||f.type!=="element"||f.tagName!=="p")&&a.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!r?a.push(...f.children):a.push(f)}const l=i[i.length-1];l&&(r||l.type!=="element"||l.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:s,children:a};return t.patch(e,u),t.applyData(e,u)}function AI(t){let e=!1;if(t.type==="list"){e=t.spread||!1;const n=t.children;let i=-1;for(;!e&&++i<n.length;)e=eS(n[i])}return e}function eS(t){const e=t.spread;return e??t.children.length>1}function CI(t,e){const n={},i=t.all(e);let r=-1;for(typeof e.start=="number"&&e.start!==1&&(n.start=e.start);++r<i.length;){const a=i[r];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:e.ordered?"ol":"ul",properties:n,children:t.wrap(i,!0)};return t.patch(e,s),t.applyData(e,s)}function bI(t,e){const n={type:"element",tagName:"p",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function RI(t,e){const n={type:"root",children:t.wrap(t.all(e))};return t.patch(e,n),t.applyData(e,n)}function PI(t,e){const n={type:"element",tagName:"strong",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function II(t,e){const n=t.all(e),i=n.shift(),r=[];if(i){const a={type:"element",tagName:"thead",properties:{},children:t.wrap([i],!0)};t.patch(e.children[0],a),r.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:t.wrap(n,!0)},o=Vp(e.children[1]),l=Dy(e.children[e.children.length-1]);o&&l&&(a.position={start:o,end:l}),r.push(a)}const s={type:"element",tagName:"table",properties:{},children:t.wrap(r,!0)};return t.patch(e,s),t.applyData(e,s)}function LI(t,e,n){const i=n?n.children:void 0,s=(i?i.indexOf(e):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,o=a?a.length:e.children.length;let l=-1;const u=[];for(;++l<o;){const c=e.children[l],h={},d=a?a[l]:void 0;d&&(h.align=d);let m={type:"element",tagName:s,properties:h,children:[]};c&&(m.children=t.all(c),t.patch(c,m),m=t.applyData(c,m)),u.push(m)}const f={type:"element",tagName:"tr",properties:{},children:t.wrap(u,!0)};return t.patch(e,f),t.applyData(e,f)}function DI(t,e){const n={type:"element",tagName:"td",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}const W0=9,j0=32;function NI(t){const e=String(t),n=/\r?\n|\r/g;let i=n.exec(e),r=0;const s=[];for(;i;)s.push(X0(e.slice(r,i.index),r>0,!0),i[0]),r=i.index+i[0].length,i=n.exec(e);return s.push(X0(e.slice(r),r>0,!1)),s.join("")}function X0(t,e,n){let i=0,r=t.length;if(e){let s=t.codePointAt(i);for(;s===W0||s===j0;)i++,s=t.codePointAt(i)}if(n){let s=t.codePointAt(r-1);for(;s===W0||s===j0;)r--,s=t.codePointAt(r-1)}return r>i?t.slice(i,r):""}function kI(t,e){const n={type:"text",value:NI(String(e.value))};return t.patch(e,n),t.applyData(e,n)}function FI(t,e){const n={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(e,n),t.applyData(e,n)}const UI={blockquote:hI,break:dI,code:pI,delete:mI,emphasis:gI,footnoteReference:xI,heading:_I,html:vI,imageReference:yI,image:SI,inlineCode:EI,linkReference:MI,link:wI,listItem:TI,list:CI,paragraph:bI,root:RI,strong:PI,table:II,tableCell:DI,tableRow:LI,text:kI,thematicBreak:FI,toml:Cl,yaml:Cl,definition:Cl,footnoteDefinition:Cl};function Cl(){}const tS=-1,ec=0,eo=1,Cu=2,Yp=3,$p=4,Kp=5,Zp=6,nS=7,iS=8,q0=typeof self=="object"?self:globalThis,OI=(t,e)=>{const n=(r,s)=>(t.set(s,r),r),i=r=>{if(t.has(r))return t.get(r);const[s,a]=e[r];switch(s){case ec:case tS:return n(a,r);case eo:{const o=n([],r);for(const l of a)o.push(i(l));return o}case Cu:{const o=n({},r);for(const[l,u]of a)o[i(l)]=i(u);return o}case Yp:return n(new Date(a),r);case $p:{const{source:o,flags:l}=a;return n(new RegExp(o,l),r)}case Kp:{const o=n(new Map,r);for(const[l,u]of a)o.set(i(l),i(u));return o}case Zp:{const o=n(new Set,r);for(const l of a)o.add(i(l));return o}case nS:{const{name:o,message:l}=a;return n(new q0[o](l),r)}case iS:return n(BigInt(a),r);case"BigInt":return n(Object(BigInt(a)),r);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:o}=new Uint8Array(a);return n(new DataView(o),a)}}return n(new q0[s](a),r)};return i},Y0=t=>OI(new Map,t)(0),Cs="",{toString:zI}={},{keys:BI}=Object,Na=t=>{const e=typeof t;if(e!=="object"||!t)return[ec,e];const n=zI.call(t).slice(8,-1);switch(n){case"Array":return[eo,Cs];case"Object":return[Cu,Cs];case"Date":return[Yp,Cs];case"RegExp":return[$p,Cs];case"Map":return[Kp,Cs];case"Set":return[Zp,Cs];case"DataView":return[eo,n]}return n.includes("Array")?[eo,n]:n.includes("Error")?[nS,n]:[Cu,n]},bl=([t,e])=>t===ec&&(e==="function"||e==="symbol"),VI=(t,e,n,i)=>{const r=(a,o)=>{const l=i.push(a)-1;return n.set(o,l),l},s=a=>{if(n.has(a))return n.get(a);let[o,l]=Na(a);switch(o){case ec:{let f=a;switch(l){case"bigint":o=iS,f=a.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+l);f=null;break;case"undefined":return r([tS],a)}return r([o,f],a)}case eo:{if(l){let h=a;return l==="DataView"?h=new Uint8Array(a.buffer):l==="ArrayBuffer"&&(h=new Uint8Array(a)),r([l,[...h]],a)}const f=[],c=r([o,f],a);for(const h of a)f.push(s(h));return c}case Cu:{if(l)switch(l){case"BigInt":return r([l,a.toString()],a);case"Boolean":case"Number":case"String":return r([l,a.valueOf()],a)}if(e&&"toJSON"in a)return s(a.toJSON());const f=[],c=r([o,f],a);for(const h of BI(a))(t||!bl(Na(a[h])))&&f.push([s(h),s(a[h])]);return c}case Yp:return r([o,a.toISOString()],a);case $p:{const{source:f,flags:c}=a;return r([o,{source:f,flags:c}],a)}case Kp:{const f=[],c=r([o,f],a);for(const[h,d]of a)(t||!(bl(Na(h))||bl(Na(d))))&&f.push([s(h),s(d)]);return c}case Zp:{const f=[],c=r([o,f],a);for(const h of a)(t||!bl(Na(h)))&&f.push(s(h));return c}}const{message:u}=a;return r([o,{name:l,message:u}],a)};return s},$0=(t,{json:e,lossy:n}={})=>{const i=[];return VI(!(e||n),!!e,new Map,i)(t),i},bu=typeof structuredClone=="function"?(t,e)=>e&&("json"in e||"lossy"in e)?Y0($0(t,e)):structuredClone(t):(t,e)=>Y0($0(t,e));function HI(t,e){const n=[{type:"text",value:"↩"}];return e>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(e)}]}),n}function GI(t,e){return"Back to reference "+(t+1)+(e>1?"-"+e:"")}function WI(t){const e=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",n=t.options.footnoteBackContent||HI,i=t.options.footnoteBackLabel||GI,r=t.options.footnoteLabel||"Footnotes",s=t.options.footnoteLabelTagName||"h2",a=t.options.footnoteLabelProperties||{className:["sr-only"]},o=[];let l=-1;for(;++l<t.footnoteOrder.length;){const u=t.footnoteById.get(t.footnoteOrder[l]);if(!u)continue;const f=t.all(u),c=String(u.identifier).toUpperCase(),h=xa(c.toLowerCase());let d=0;const m=[],v=t.footnoteCounts.get(c);for(;v!==void 0&&++d<=v;){m.length>0&&m.push({type:"text",value:" "});let g=typeof n=="string"?n:n(l,d);typeof g=="string"&&(g={type:"text",value:g}),m.push({type:"element",tagName:"a",properties:{href:"#"+e+"fnref-"+h+(d>1?"-"+d:""),dataFootnoteBackref:"",ariaLabel:typeof i=="string"?i:i(l,d),className:["data-footnote-backref"]},children:Array.isArray(g)?g:[g]})}const x=f[f.length-1];if(x&&x.type==="element"&&x.tagName==="p"){const g=x.children[x.children.length-1];g&&g.type==="text"?g.value+=" ":x.children.push({type:"text",value:" "}),x.children.push(...m)}else f.push(...m);const p={type:"element",tagName:"li",properties:{id:e+"fn-"+h},children:t.wrap(f,!0)};t.patch(u,p),o.push(p)}if(o.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...bu(a),id:"footnote-label"},children:[{type:"text",value:r}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(o,!0)},{type:"text",value:`
`}]}}const tc=function(t){if(t==null)return YI;if(typeof t=="function")return nc(t);if(typeof t=="object")return Array.isArray(t)?jI(t):XI(t);if(typeof t=="string")return qI(t);throw new Error("Expected function, string, or object as test")};function jI(t){const e=[];let n=-1;for(;++n<t.length;)e[n]=tc(t[n]);return nc(i);function i(...r){let s=-1;for(;++s<e.length;)if(e[s].apply(this,r))return!0;return!1}}function XI(t){const e=t;return nc(n);function n(i){const r=i;let s;for(s in t)if(r[s]!==e[s])return!1;return!0}}function qI(t){return nc(e);function e(n){return n&&n.type===t}}function nc(t){return e;function e(n,i,r){return!!($I(n)&&t.call(this,n,typeof i=="number"?i:void 0,r||void 0))}}function YI(){return!0}function $I(t){return t!==null&&typeof t=="object"&&"type"in t}const rS=[],KI=!0,Md=!1,ZI="skip";function sS(t,e,n,i){let r;typeof e=="function"&&typeof n!="function"?(i=n,n=e):r=e;const s=tc(r),a=i?-1:1;o(t,void 0,[])();function o(l,u,f){const c=l&&typeof l=="object"?l:{};if(typeof c.type=="string"){const d=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(l.type+(d?"<"+d+">":""))+")"})}return h;function h(){let d=rS,m,v,x;if((!e||s(l,u,f[f.length-1]||void 0))&&(d=QI(n(l,f)),d[0]===Md))return d;if("children"in l&&l.children){const p=l;if(p.children&&d[0]!==ZI)for(v=(i?p.children.length:-1)+a,x=f.concat(p);v>-1&&v<p.children.length;){const g=p.children[v];if(m=o(g,v,x)(),m[0]===Md)return m;v=typeof m[1]=="number"?m[1]:v+a}}return d}}}function QI(t){return Array.isArray(t)?t:typeof t=="number"?[KI,t]:t==null?rS:[t]}function Qp(t,e,n,i){let r,s,a;typeof e=="function"&&typeof n!="function"?(s=void 0,a=e,r=n):(s=e,a=n,r=i),sS(t,s,o,r);function o(l,u){const f=u[u.length-1],c=f?f.children.indexOf(l):void 0;return a(l,c,f)}}const wd={}.hasOwnProperty,JI={};function eL(t,e){const n=e||JI,i=new Map,r=new Map,s=new Map,a={...UI,...n.handlers},o={all:u,applyData:nL,definitionById:i,footnoteById:r,footnoteCounts:s,footnoteOrder:[],handlers:a,one:l,options:n,patch:tL,wrap:rL};return Qp(t,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const c=f.type==="definition"?i:r,h=String(f.identifier).toUpperCase();c.has(h)||c.set(h,f)}}),o;function l(f,c){const h=f.type,d=o.handlers[h];if(wd.call(o.handlers,h)&&d)return d(o,f,c);if(o.options.passThrough&&o.options.passThrough.includes(h)){if("children"in f){const{children:v,...x}=f,p=bu(x);return p.children=o.all(f),p}return bu(f)}return(o.options.unknownHandler||iL)(o,f,c)}function u(f){const c=[];if("children"in f){const h=f.children;let d=-1;for(;++d<h.length;){const m=o.one(h[d],f);if(m){if(d&&h[d-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=K0(m.value)),!Array.isArray(m)&&m.type==="element")){const v=m.children[0];v&&v.type==="text"&&(v.value=K0(v.value))}Array.isArray(m)?c.push(...m):c.push(m)}}}return c}}function tL(t,e){t.position&&(e.position=G2(t))}function nL(t,e){let n=e;if(t&&t.data){const i=t.data.hName,r=t.data.hChildren,s=t.data.hProperties;if(typeof i=="string")if(n.type==="element")n.tagName=i;else{const a="children"in n?n.children:[n];n={type:"element",tagName:i,properties:{},children:a}}n.type==="element"&&s&&Object.assign(n.properties,bu(s)),"children"in n&&n.children&&r!==null&&r!==void 0&&(n.children=r)}return n}function iL(t,e){const n=e.data||{},i="value"in e&&!(wd.call(n,"hProperties")||wd.call(n,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:t.all(e)};return t.patch(e,i),t.applyData(e,i)}function rL(t,e){const n=[];let i=-1;for(e&&n.push({type:"text",value:`
`});++i<t.length;)i&&n.push({type:"text",value:`
`}),n.push(t[i]);return e&&t.length>0&&n.push({type:"text",value:`
`}),n}function K0(t){let e=0,n=t.charCodeAt(e);for(;n===9||n===32;)e++,n=t.charCodeAt(e);return t.slice(e)}function Z0(t,e){const n=eL(t,e),i=n.one(t,void 0),r=WI(n),s=Array.isArray(i)?{type:"root",children:i}:i||{type:"root",children:[]};return r&&s.children.push({type:"text",value:`
`},r),s}function sL(t,e){return t&&"run"in t?async function(n,i){const r=Z0(n,{file:i,...e});await t.run(r,i)}:function(n,i){return Z0(n,{file:i,...t||e})}}function Q0(t){if(t)throw t}var Kl=Object.prototype.hasOwnProperty,aS=Object.prototype.toString,J0=Object.defineProperty,ex=Object.getOwnPropertyDescriptor,tx=function(e){return typeof Array.isArray=="function"?Array.isArray(e):aS.call(e)==="[object Array]"},nx=function(e){if(!e||aS.call(e)!=="[object Object]")return!1;var n=Kl.call(e,"constructor"),i=e.constructor&&e.constructor.prototype&&Kl.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!n&&!i)return!1;var r;for(r in e);return typeof r>"u"||Kl.call(e,r)},ix=function(e,n){J0&&n.name==="__proto__"?J0(e,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):e[n.name]=n.newValue},rx=function(e,n){if(n==="__proto__")if(Kl.call(e,n)){if(ex)return ex(e,n).value}else return;return e[n]},aL=function t(){var e,n,i,r,s,a,o=arguments[0],l=1,u=arguments.length,f=!1;for(typeof o=="boolean"&&(f=o,o=arguments[1]||{},l=2),(o==null||typeof o!="object"&&typeof o!="function")&&(o={});l<u;++l)if(e=arguments[l],e!=null)for(n in e)i=rx(o,n),r=rx(e,n),o!==r&&(f&&r&&(nx(r)||(s=tx(r)))?(s?(s=!1,a=i&&tx(i)?i:[]):a=i&&nx(i)?i:{},ix(o,{name:n,newValue:t(f,a,r)})):typeof r<"u"&&ix(o,{name:n,newValue:r}));return o};const _f=bd(aL);function Td(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function oL(){const t=[],e={run:n,use:i};return e;function n(...r){let s=-1;const a=r.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);o(null,...r);function o(l,...u){const f=t[++s];let c=-1;if(l){a(l);return}for(;++c<r.length;)(u[c]===null||u[c]===void 0)&&(u[c]=r[c]);r=u,f?lL(f,o)(...u):a(null,...u)}}function i(r){if(typeof r!="function")throw new TypeError("Expected `middelware` to be a function, not "+r);return t.push(r),e}}function lL(t,e){let n;return i;function i(...a){const o=t.length>a.length;let l;o&&a.push(r);try{l=t.apply(this,a)}catch(u){const f=u;if(o&&n)throw f;return r(f)}o||(l&&l.then&&typeof l.then=="function"?l.then(s,r):l instanceof Error?r(l):s(l))}function r(a,...o){n||(n=!0,e(a,...o))}function s(a){r(null,a)}}const gi={basename:uL,dirname:cL,extname:fL,join:hL,sep:"/"};function uL(t,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');Uo(t);let n=0,i=-1,r=t.length,s;if(e===void 0||e.length===0||e.length>t.length){for(;r--;)if(t.codePointAt(r)===47){if(s){n=r+1;break}}else i<0&&(s=!0,i=r+1);return i<0?"":t.slice(n,i)}if(e===t)return"";let a=-1,o=e.length-1;for(;r--;)if(t.codePointAt(r)===47){if(s){n=r+1;break}}else a<0&&(s=!0,a=r+1),o>-1&&(t.codePointAt(r)===e.codePointAt(o--)?o<0&&(i=r):(o=-1,i=a));return n===i?i=a:i<0&&(i=t.length),t.slice(n,i)}function cL(t){if(Uo(t),t.length===0)return".";let e=-1,n=t.length,i;for(;--n;)if(t.codePointAt(n)===47){if(i){e=n;break}}else i||(i=!0);return e<0?t.codePointAt(0)===47?"/":".":e===1&&t.codePointAt(0)===47?"//":t.slice(0,e)}function fL(t){Uo(t);let e=t.length,n=-1,i=0,r=-1,s=0,a;for(;e--;){const o=t.codePointAt(e);if(o===47){if(a){i=e+1;break}continue}n<0&&(a=!0,n=e+1),o===46?r<0?r=e:s!==1&&(s=1):r>-1&&(s=-1)}return r<0||n<0||s===0||s===1&&r===n-1&&r===i+1?"":t.slice(r,n)}function hL(...t){let e=-1,n;for(;++e<t.length;)Uo(t[e]),t[e]&&(n=n===void 0?t[e]:n+"/"+t[e]);return n===void 0?".":dL(n)}function dL(t){Uo(t);const e=t.codePointAt(0)===47;let n=pL(t,!e);return n.length===0&&!e&&(n="."),n.length>0&&t.codePointAt(t.length-1)===47&&(n+="/"),e?"/"+n:n}function pL(t,e){let n="",i=0,r=-1,s=0,a=-1,o,l;for(;++a<=t.length;){if(a<t.length)o=t.codePointAt(a);else{if(o===47)break;o=47}if(o===47){if(!(r===a-1||s===1))if(r!==a-1&&s===2){if(n.length<2||i!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",i=0):(n=n.slice(0,l),i=n.length-1-n.lastIndexOf("/")),r=a,s=0;continue}}else if(n.length>0){n="",i=0,r=a,s=0;continue}}e&&(n=n.length>0?n+"/..":"..",i=2)}else n.length>0?n+="/"+t.slice(r+1,a):n=t.slice(r+1,a),i=a-r-1;r=a,s=0}else o===46&&s>-1?s++:s=-1}return n}function Uo(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const mL={cwd:gL};function gL(){return"/"}function Ad(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function xL(t){if(typeof t=="string")t=new URL(t);else if(!Ad(t)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(t.protocol!=="file:"){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return _L(t)}function _L(t){if(t.hostname!==""){const i=new TypeError('File URL host must be "localhost" or empty on darwin');throw i.code="ERR_INVALID_FILE_URL_HOST",i}const e=t.pathname;let n=-1;for(;++n<e.length;)if(e.codePointAt(n)===37&&e.codePointAt(n+1)===50){const i=e.codePointAt(n+2);if(i===70||i===102){const r=new TypeError("File URL path must not include encoded / characters");throw r.code="ERR_INVALID_FILE_URL_PATH",r}}return decodeURIComponent(e)}const vf=["history","path","basename","stem","extname","dirname"];class oS{constructor(e){let n;e?Ad(e)?n={path:e}:typeof e=="string"||vL(e)?n={value:e}:n=e:n={},this.cwd="cwd"in n?"":mL.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let i=-1;for(;++i<vf.length;){const s=vf[i];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let r;for(r in n)vf.includes(r)||(this[r]=n[r])}get basename(){return typeof this.path=="string"?gi.basename(this.path):void 0}set basename(e){Sf(e,"basename"),yf(e,"basename"),this.path=gi.join(this.dirname||"",e)}get dirname(){return typeof this.path=="string"?gi.dirname(this.path):void 0}set dirname(e){sx(this.basename,"dirname"),this.path=gi.join(e||"",this.basename)}get extname(){return typeof this.path=="string"?gi.extname(this.path):void 0}set extname(e){if(yf(e,"extname"),sx(this.dirname,"extname"),e){if(e.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=gi.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){Ad(e)&&(e=xL(e)),Sf(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path=="string"?gi.basename(this.path,this.extname):void 0}set stem(e){Sf(e,"stem"),yf(e,"stem"),this.path=gi.join(this.dirname||"",e+(this.extname||""))}fail(e,n,i){const r=this.message(e,n,i);throw r.fatal=!0,r}info(e,n,i){const r=this.message(e,n,i);return r.fatal=void 0,r}message(e,n,i){const r=new ln(e,n,i);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(e||void 0).decode(this.value)}}function yf(t,e){if(t&&t.includes(gi.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+gi.sep+"`")}function Sf(t,e){if(!t)throw new Error("`"+e+"` cannot be empty")}function sx(t,e){if(!t)throw new Error("Setting `"+e+"` requires `path` to be set too")}function vL(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const yL=function(t){const i=this.constructor.prototype,r=i[t],s=function(){return r.apply(s,arguments)};return Object.setPrototypeOf(s,i),s},SL={}.hasOwnProperty;class Jp extends yL{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=oL()}copy(){const e=new Jp;let n=-1;for(;++n<this.attachers.length;){const i=this.attachers[n];e.use(...i)}return e.data(_f(!0,{},this.namespace)),e}data(e,n){return typeof e=="string"?arguments.length===2?(wf("data",this.frozen),this.namespace[e]=n,this):SL.call(this.namespace,e)&&this.namespace[e]||void 0:e?(wf("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...i]=this.attachers[this.freezeIndex];if(i[0]===!1)continue;i[0]===!0&&(i[0]=void 0);const r=n.call(e,...i);typeof r=="function"&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const n=Rl(e),i=this.parser||this.Parser;return Ef("parse",i),i(String(n),n)}process(e,n){const i=this;return this.freeze(),Ef("process",this.parser||this.Parser),Mf("process",this.compiler||this.Compiler),n?r(void 0,n):new Promise(r);function r(s,a){const o=Rl(e),l=i.parse(o);i.run(l,o,function(f,c,h){if(f||!c||!h)return u(f);const d=c,m=i.stringify(d,h);wL(m)?h.value=m:h.result=m,u(f,h)});function u(f,c){f||!c?a(f):s?s(c):n(void 0,c)}}}processSync(e){let n=!1,i;return this.freeze(),Ef("processSync",this.parser||this.Parser),Mf("processSync",this.compiler||this.Compiler),this.process(e,r),ox("processSync","process",n),i;function r(s,a){n=!0,Q0(s),i=a}}run(e,n,i){ax(e),this.freeze();const r=this.transformers;return!i&&typeof n=="function"&&(i=n,n=void 0),i?s(void 0,i):new Promise(s);function s(a,o){const l=Rl(n);r.run(e,l,u);function u(f,c,h){const d=c||e;f?o(f):a?a(d):i(void 0,d,h)}}}runSync(e,n){let i=!1,r;return this.run(e,n,s),ox("runSync","run",i),r;function s(a,o){Q0(a),r=o,i=!0}}stringify(e,n){this.freeze();const i=Rl(n),r=this.compiler||this.Compiler;return Mf("stringify",r),ax(e),r(e,i)}use(e,...n){const i=this.attachers,r=this.namespace;if(wf("use",this.frozen),e!=null)if(typeof e=="function")l(e,n);else if(typeof e=="object")Array.isArray(e)?o(e):a(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function s(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[f,...c]=u;l(f,c)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(u.plugins),u.settings&&(r.settings=_f(!0,r.settings,u.settings))}function o(u){let f=-1;if(u!=null)if(Array.isArray(u))for(;++f<u.length;){const c=u[f];s(c)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,f){let c=-1,h=-1;for(;++c<i.length;)if(i[c][0]===u){h=c;break}if(h===-1)i.push([u,...f]);else if(f.length>0){let[d,...m]=f;const v=i[h][1];Td(v)&&Td(d)&&(d=_f(!0,v,d)),i[h]=[u,d,...m]}}}}const EL=new Jp().freeze();function Ef(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function Mf(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function wf(t,e){if(e)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ax(t){if(!Td(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function ox(t,e,n){if(!n)throw new Error("`"+t+"` finished async. Use `"+e+"` instead")}function Rl(t){return ML(t)?t:new oS(t)}function ML(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function wL(t){return typeof t=="string"||TL(t)}function TL(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const AL="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",lx=[],ux={allowDangerousHtml:!0},CL=/^(https?|ircs?|mailto|xmpp)$/i,bL=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function RL(t){const e=PL(t),n=IL(t);return LL(e.runSync(e.parse(n),n),t)}function PL(t){const e=t.rehypePlugins||lx,n=t.remarkPlugins||lx,i=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...ux}:ux;return EL().use(fI).use(n).use(sL,i).use(e)}function IL(t){const e=t.children||"",n=new oS;return typeof e=="string"&&(n.value=e),n}function LL(t,e){const n=e.allowedElements,i=e.allowElement,r=e.components,s=e.disallowedElements,a=e.skipHtml,o=e.unwrapDisallowed,l=e.urlTransform||DL;for(const f of bL)Object.hasOwn(e,f.from)&&(""+f.from+(f.to?"use `"+f.to+"` instead":"remove it")+AL+f.id,void 0);return Qp(t,u),Y2(t,{Fragment:D.Fragment,components:r,ignoreInvalidStyle:!0,jsx:D.jsx,jsxs:D.jsxs,passKeys:!0,passNode:!0});function u(f,c,h){if(f.type==="raw"&&h&&typeof c=="number")return a?h.children.splice(c,1):h.children[c]={type:"text",value:f.value},c;if(f.type==="element"){let d;for(d in mf)if(Object.hasOwn(mf,d)&&Object.hasOwn(f.properties,d)){const m=f.properties[d],v=mf[d];(v===null||v.includes(f.tagName))&&(f.properties[d]=l(String(m||""),d,f))}}if(f.type==="element"){let d=n?!n.includes(f.tagName):s?s.includes(f.tagName):!1;if(!d&&i&&typeof c=="number"&&(d=!i(f,c,h)),d&&h&&typeof c=="number")return o&&f.children?h.children.splice(c,1,...f.children):h.children.splice(c,1),c}}}function DL(t){const e=t.indexOf(":"),n=t.indexOf("?"),i=t.indexOf("#"),r=t.indexOf("/");return e===-1||r!==-1&&e>r||n!==-1&&e>n||i!==-1&&e>i||CL.test(t.slice(0,e))?t:""}function cx(t,e){const n=String(t);if(typeof e!="string")throw new TypeError("Expected character");let i=0,r=n.indexOf(e);for(;r!==-1;)i++,r=n.indexOf(e,r+e.length);return i}function NL(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function kL(t,e,n){const r=tc((n||{}).ignore||[]),s=FL(e);let a=-1;for(;++a<s.length;)sS(t,"text",o);function o(u,f){let c=-1,h;for(;++c<f.length;){const d=f[c],m=h?h.children:void 0;if(r(d,m?m.indexOf(d):void 0,h))return;h=d}if(h)return l(u,f)}function l(u,f){const c=f[f.length-1],h=s[a][0],d=s[a][1];let m=0;const x=c.children.indexOf(u);let p=!1,g=[];h.lastIndex=0;let _=h.exec(u.value);for(;_;){const E=_.index,C={index:_.index,input:_.input,stack:[...f,u]};let M=d(..._,C);if(typeof M=="string"&&(M=M.length>0?{type:"text",value:M}:void 0),M===!1?h.lastIndex=E+1:(m!==E&&g.push({type:"text",value:u.value.slice(m,E)}),Array.isArray(M)?g.push(...M):M&&g.push(M),m=E+_[0].length,p=!0),!h.global)break;_=h.exec(u.value)}return p?(m<u.value.length&&g.push({type:"text",value:u.value.slice(m)}),c.children.splice(x,1,...g)):g=[u],x+g.length}}function FL(t){const e=[];if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!t[0]||Array.isArray(t[0])?t:[t];let i=-1;for(;++i<n.length;){const r=n[i];e.push([UL(r[0]),OL(r[1])])}return e}function UL(t){return typeof t=="string"?new RegExp(NL(t),"g"):t}function OL(t){return typeof t=="function"?t:function(){return t}}const Tf="phrasing",Af=["autolink","link","image","label"];function zL(){return{transforms:[XL],enter:{literalAutolink:VL,literalAutolinkEmail:Cf,literalAutolinkHttp:Cf,literalAutolinkWww:Cf},exit:{literalAutolink:jL,literalAutolinkEmail:WL,literalAutolinkHttp:HL,literalAutolinkWww:GL}}}function BL(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Tf,notInConstruct:Af},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Tf,notInConstruct:Af},{character:":",before:"[ps]",after:"\\/",inConstruct:Tf,notInConstruct:Af}]}}function VL(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function Cf(t){this.config.enter.autolinkProtocol.call(this,t)}function HL(t){this.config.exit.autolinkProtocol.call(this,t)}function GL(t){this.config.exit.data.call(this,t);const e=this.stack[this.stack.length-1];e.type,e.url="http://"+this.sliceSerialize(t)}function WL(t){this.config.exit.autolinkEmail.call(this,t)}function jL(t){this.exit(t)}function XL(t){kL(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,qL],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),YL]],{ignore:["link","linkReference"]})}function qL(t,e,n,i,r){let s="";if(!lS(r)||(/^w/i.test(e)&&(n=e+n,e="",s="http://"),!$L(n)))return!1;const a=KL(n+i);if(!a[0])return!1;const o={type:"link",title:null,url:s+e+a[0],children:[{type:"text",value:e+a[0]}]};return a[1]?[o,{type:"text",value:a[1]}]:o}function YL(t,e,n,i){return!lS(i,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+e+"@"+n,children:[{type:"text",value:e+"@"+n}]}}function $L(t){const e=t.split(".");return!(e.length<2||e[e.length-1]&&(/_/.test(e[e.length-1])||!/[a-zA-Z\d]/.test(e[e.length-1]))||e[e.length-2]&&(/_/.test(e[e.length-2])||!/[a-zA-Z\d]/.test(e[e.length-2])))}function KL(t){const e=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!e)return[t,void 0];t=t.slice(0,e.index);let n=e[0],i=n.indexOf(")");const r=cx(t,"(");let s=cx(t,")");for(;i!==-1&&r>s;)t+=n.slice(0,i+1),n=n.slice(i+1),i=n.indexOf(")"),s++;return[t,n]}function lS(t,e){const n=t.input.charCodeAt(t.index-1);return(t.index===0||ss(n)||Qu(n))&&(!e||n!==47)}uS.peek=sD;function ZL(){this.buffer()}function QL(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function JL(){this.buffer()}function eD(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function tD(t){const e=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=li(this.sliceSerialize(t)).toLowerCase(),n.label=e}function nD(t){this.exit(t)}function iD(t){const e=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=li(this.sliceSerialize(t)).toLowerCase(),n.label=e}function rD(t){this.exit(t)}function sD(){return"["}function uS(t,e,n,i){const r=n.createTracker(i);let s=r.move("[^");const a=n.enter("footnoteReference"),o=n.enter("reference");return s+=r.move(n.safe(n.associationId(t),{after:"]",before:s})),o(),a(),s+=r.move("]"),s}function aD(){return{enter:{gfmFootnoteCallString:ZL,gfmFootnoteCall:QL,gfmFootnoteDefinitionLabelString:JL,gfmFootnoteDefinition:eD},exit:{gfmFootnoteCallString:tD,gfmFootnoteCall:nD,gfmFootnoteDefinitionLabelString:iD,gfmFootnoteDefinition:rD}}}function oD(t){let e=!1;return t&&t.firstLineBlank&&(e=!0),{handlers:{footnoteDefinition:n,footnoteReference:uS},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(i,r,s,a){const o=s.createTracker(a);let l=o.move("[^");const u=s.enter("footnoteDefinition"),f=s.enter("label");return l+=o.move(s.safe(s.associationId(i),{before:l,after:"]"})),f(),l+=o.move("]:"),i.children&&i.children.length>0&&(o.shift(4),l+=o.move((e?`
`:" ")+s.indentLines(s.containerFlow(i,o.current()),e?cS:lD))),u(),l}}function lD(t,e,n){return e===0?t:cS(t,e,n)}function cS(t,e,n){return(n?"":"    ")+t}const uD=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];fS.peek=pD;function cD(){return{canContainEols:["delete"],enter:{strikethrough:hD},exit:{strikethrough:dD}}}function fD(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:uD}],handlers:{delete:fS}}}function hD(t){this.enter({type:"delete",children:[]},t)}function dD(t){this.exit(t)}function fS(t,e,n,i){const r=n.createTracker(i),s=n.enter("strikethrough");let a=r.move("~~");return a+=n.containerPhrasing(t,{...r.current(),before:a,after:"~"}),a+=r.move("~~"),s(),a}function pD(){return"~"}function mD(t){return t.length}function gD(t,e){const n=e||{},i=(n.align||[]).concat(),r=n.stringLength||mD,s=[],a=[],o=[],l=[];let u=0,f=-1;for(;++f<t.length;){const v=[],x=[];let p=-1;for(t[f].length>u&&(u=t[f].length);++p<t[f].length;){const g=xD(t[f][p]);if(n.alignDelimiters!==!1){const _=r(g);x[p]=_,(l[p]===void 0||_>l[p])&&(l[p]=_)}v.push(g)}a[f]=v,o[f]=x}let c=-1;if(typeof i=="object"&&"length"in i)for(;++c<u;)s[c]=fx(i[c]);else{const v=fx(i);for(;++c<u;)s[c]=v}c=-1;const h=[],d=[];for(;++c<u;){const v=s[c];let x="",p="";v===99?(x=":",p=":"):v===108?x=":":v===114&&(p=":");let g=n.alignDelimiters===!1?1:Math.max(1,l[c]-x.length-p.length);const _=x+"-".repeat(g)+p;n.alignDelimiters!==!1&&(g=x.length+g+p.length,g>l[c]&&(l[c]=g),d[c]=g),h[c]=_}a.splice(1,0,h),o.splice(1,0,d),f=-1;const m=[];for(;++f<a.length;){const v=a[f],x=o[f];c=-1;const p=[];for(;++c<u;){const g=v[c]||"";let _="",E="";if(n.alignDelimiters!==!1){const C=l[c]-(x[c]||0),M=s[c];M===114?_=" ".repeat(C):M===99?C%2?(_=" ".repeat(C/2+.5),E=" ".repeat(C/2-.5)):(_=" ".repeat(C/2),E=_):E=" ".repeat(C)}n.delimiterStart!==!1&&!c&&p.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&g==="")&&(n.delimiterStart!==!1||c)&&p.push(" "),n.alignDelimiters!==!1&&p.push(_),p.push(g),n.alignDelimiters!==!1&&p.push(E),n.padding!==!1&&p.push(" "),(n.delimiterEnd!==!1||c!==u-1)&&p.push("|")}m.push(n.delimiterEnd===!1?p.join("").replace(/ +$/,""):p.join(""))}return m.join(`
`)}function xD(t){return t==null?"":String(t)}function fx(t){const e=typeof t=="string"?t.codePointAt(0):0;return e===67||e===99?99:e===76||e===108?108:e===82||e===114?114:0}function _D(t,e,n,i){const r=n.enter("blockquote"),s=n.createTracker(i);s.move("> "),s.shift(2);const a=n.indentLines(n.containerFlow(t,s.current()),vD);return r(),a}function vD(t,e,n){return">"+(n?"":" ")+t}function yD(t,e){return hx(t,e.inConstruct,!0)&&!hx(t,e.notInConstruct,!1)}function hx(t,e,n){if(typeof e=="string"&&(e=[e]),!e||e.length===0)return n;let i=-1;for(;++i<e.length;)if(t.includes(e[i]))return!0;return!1}function dx(t,e,n,i){let r=-1;for(;++r<n.unsafe.length;)if(n.unsafe[r].character===`
`&&yD(n.stack,n.unsafe[r]))return/[ \t]/.test(i.before)?"":" ";return`\\
`}function SD(t,e){const n=String(t);let i=n.indexOf(e),r=i,s=0,a=0;if(typeof e!="string")throw new TypeError("Expected substring");for(;i!==-1;)i===r?++s>a&&(a=s):s=1,r=i+e.length,i=n.indexOf(e,r);return a}function ED(t,e){return!!(e.options.fences===!1&&t.value&&!t.lang&&/[^ \r\n]/.test(t.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value))}function MD(t){const e=t.options.fence||"`";if(e!=="`"&&e!=="~")throw new Error("Cannot serialize code with `"+e+"` for `options.fence`, expected `` ` `` or `~`");return e}function wD(t,e,n,i){const r=MD(n),s=t.value||"",a=r==="`"?"GraveAccent":"Tilde";if(ED(t,n)){const c=n.enter("codeIndented"),h=n.indentLines(s,TD);return c(),h}const o=n.createTracker(i),l=r.repeat(Math.max(SD(s,r)+1,3)),u=n.enter("codeFenced");let f=o.move(l);if(t.lang){const c=n.enter(`codeFencedLang${a}`);f+=o.move(n.safe(t.lang,{before:f,after:" ",encode:["`"],...o.current()})),c()}if(t.lang&&t.meta){const c=n.enter(`codeFencedMeta${a}`);f+=o.move(" "),f+=o.move(n.safe(t.meta,{before:f,after:`
`,encode:["`"],...o.current()})),c()}return f+=o.move(`
`),s&&(f+=o.move(s+`
`)),f+=o.move(l),u(),f}function TD(t,e,n){return(n?"":"    ")+t}function em(t){const e=t.options.quote||'"';if(e!=='"'&&e!=="'")throw new Error("Cannot serialize title with `"+e+"` for `options.quote`, expected `\"`, or `'`");return e}function AD(t,e,n,i){const r=em(n),s=r==='"'?"Quote":"Apostrophe",a=n.enter("definition");let o=n.enter("label");const l=n.createTracker(i);let u=l.move("[");return u+=l.move(n.safe(n.associationId(t),{before:u,after:"]",...l.current()})),u+=l.move("]: "),o(),!t.url||/[\0- \u007F]/.test(t.url)?(o=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(t.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(o=n.enter("destinationRaw"),u+=l.move(n.safe(t.url,{before:u,after:t.title?" ":`
`,...l.current()}))),o(),t.title&&(o=n.enter(`title${s}`),u+=l.move(" "+r),u+=l.move(n.safe(t.title,{before:u,after:r,...l.current()})),u+=l.move(r),o()),a(),u}function CD(t){const e=t.options.emphasis||"*";if(e!=="*"&&e!=="_")throw new Error("Cannot serialize emphasis with `"+e+"` for `options.emphasis`, expected `*`, or `_`");return e}function Ao(t){return"&#x"+t.toString(16).toUpperCase()+";"}function Ru(t,e,n){const i=la(t),r=la(e);return i===void 0?r===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:r===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:i===1?r===void 0?{inside:!1,outside:!1}:r===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:r===void 0?{inside:!1,outside:!1}:r===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}hS.peek=bD;function hS(t,e,n,i){const r=CD(n),s=n.enter("emphasis"),a=n.createTracker(i),o=a.move(r);let l=a.move(n.containerPhrasing(t,{after:r,before:o,...a.current()}));const u=l.charCodeAt(0),f=Ru(i.before.charCodeAt(i.before.length-1),u,r);f.inside&&(l=Ao(u)+l.slice(1));const c=l.charCodeAt(l.length-1),h=Ru(i.after.charCodeAt(0),c,r);h.inside&&(l=l.slice(0,-1)+Ao(c));const d=a.move(r);return s(),n.attentionEncodeSurroundingInfo={after:h.outside,before:f.outside},o+l+d}function bD(t,e,n){return n.options.emphasis||"*"}function RD(t,e){let n=!1;return Qp(t,function(i){if("value"in i&&/\r?\n|\r/.test(i.value)||i.type==="break")return n=!0,Md}),!!((!t.depth||t.depth<3)&&jp(t)&&(e.options.setext||n))}function PD(t,e,n,i){const r=Math.max(Math.min(6,t.depth||1),1),s=n.createTracker(i);if(RD(t,n)){const f=n.enter("headingSetext"),c=n.enter("phrasing"),h=n.containerPhrasing(t,{...s.current(),before:`
`,after:`
`});return c(),f(),h+`
`+(r===1?"=":"-").repeat(h.length-(Math.max(h.lastIndexOf("\r"),h.lastIndexOf(`
`))+1))}const a="#".repeat(r),o=n.enter("headingAtx"),l=n.enter("phrasing");s.move(a+" ");let u=n.containerPhrasing(t,{before:"# ",after:`
`,...s.current()});return/^[\t ]/.test(u)&&(u=Ao(u.charCodeAt(0))+u.slice(1)),u=u?a+" "+u:a,n.options.closeAtx&&(u+=" "+a),l(),o(),u}dS.peek=ID;function dS(t){return t.value||""}function ID(){return"<"}pS.peek=LD;function pS(t,e,n,i){const r=em(n),s=r==='"'?"Quote":"Apostrophe",a=n.enter("image");let o=n.enter("label");const l=n.createTracker(i);let u=l.move("![");return u+=l.move(n.safe(t.alt,{before:u,after:"]",...l.current()})),u+=l.move("]("),o(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(o=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(t.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(o=n.enter("destinationRaw"),u+=l.move(n.safe(t.url,{before:u,after:t.title?" ":")",...l.current()}))),o(),t.title&&(o=n.enter(`title${s}`),u+=l.move(" "+r),u+=l.move(n.safe(t.title,{before:u,after:r,...l.current()})),u+=l.move(r),o()),u+=l.move(")"),a(),u}function LD(){return"!"}mS.peek=DD;function mS(t,e,n,i){const r=t.referenceType,s=n.enter("imageReference");let a=n.enter("label");const o=n.createTracker(i);let l=o.move("![");const u=n.safe(t.alt,{before:l,after:"]",...o.current()});l+=o.move(u+"]["),a();const f=n.stack;n.stack=[],a=n.enter("reference");const c=n.safe(n.associationId(t),{before:l,after:"]",...o.current()});return a(),n.stack=f,s(),r==="full"||!u||u!==c?l+=o.move(c+"]"):r==="shortcut"?l=l.slice(0,-1):l+=o.move("]"),l}function DD(){return"!"}gS.peek=ND;function gS(t,e,n){let i=t.value||"",r="`",s=-1;for(;new RegExp("(^|[^`])"+r+"([^`]|$)").test(i);)r+="`";for(/[^ \r\n]/.test(i)&&(/^[ \r\n]/.test(i)&&/[ \r\n]$/.test(i)||/^`|`$/.test(i))&&(i=" "+i+" ");++s<n.unsafe.length;){const a=n.unsafe[s],o=n.compilePattern(a);let l;if(a.atBreak)for(;l=o.exec(i);){let u=l.index;i.charCodeAt(u)===10&&i.charCodeAt(u-1)===13&&u--,i=i.slice(0,u)+" "+i.slice(l.index+1)}}return r+i+r}function ND(){return"`"}function xS(t,e){const n=jp(t);return!!(!e.options.resourceLink&&t.url&&!t.title&&t.children&&t.children.length===1&&t.children[0].type==="text"&&(n===t.url||"mailto:"+n===t.url)&&/^[a-z][a-z+.-]+:/i.test(t.url)&&!/[\0- <>\u007F]/.test(t.url))}_S.peek=kD;function _S(t,e,n,i){const r=em(n),s=r==='"'?"Quote":"Apostrophe",a=n.createTracker(i);let o,l;if(xS(t,n)){const f=n.stack;n.stack=[],o=n.enter("autolink");let c=a.move("<");return c+=a.move(n.containerPhrasing(t,{before:c,after:">",...a.current()})),c+=a.move(">"),o(),n.stack=f,c}o=n.enter("link"),l=n.enter("label");let u=a.move("[");return u+=a.move(n.containerPhrasing(t,{before:u,after:"](",...a.current()})),u+=a.move("]("),l(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(l=n.enter("destinationLiteral"),u+=a.move("<"),u+=a.move(n.safe(t.url,{before:u,after:">",...a.current()})),u+=a.move(">")):(l=n.enter("destinationRaw"),u+=a.move(n.safe(t.url,{before:u,after:t.title?" ":")",...a.current()}))),l(),t.title&&(l=n.enter(`title${s}`),u+=a.move(" "+r),u+=a.move(n.safe(t.title,{before:u,after:r,...a.current()})),u+=a.move(r),l()),u+=a.move(")"),o(),u}function kD(t,e,n){return xS(t,n)?"<":"["}vS.peek=FD;function vS(t,e,n,i){const r=t.referenceType,s=n.enter("linkReference");let a=n.enter("label");const o=n.createTracker(i);let l=o.move("[");const u=n.containerPhrasing(t,{before:l,after:"]",...o.current()});l+=o.move(u+"]["),a();const f=n.stack;n.stack=[],a=n.enter("reference");const c=n.safe(n.associationId(t),{before:l,after:"]",...o.current()});return a(),n.stack=f,s(),r==="full"||!u||u!==c?l+=o.move(c+"]"):r==="shortcut"?l=l.slice(0,-1):l+=o.move("]"),l}function FD(){return"["}function tm(t){const e=t.options.bullet||"*";if(e!=="*"&&e!=="+"&&e!=="-")throw new Error("Cannot serialize items with `"+e+"` for `options.bullet`, expected `*`, `+`, or `-`");return e}function UD(t){const e=tm(t),n=t.options.bulletOther;if(!n)return e==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===e)throw new Error("Expected `bullet` (`"+e+"`) and `bulletOther` (`"+n+"`) to be different");return n}function OD(t){const e=t.options.bulletOrdered||".";if(e!=="."&&e!==")")throw new Error("Cannot serialize items with `"+e+"` for `options.bulletOrdered`, expected `.` or `)`");return e}function yS(t){const e=t.options.rule||"*";if(e!=="*"&&e!=="-"&&e!=="_")throw new Error("Cannot serialize rules with `"+e+"` for `options.rule`, expected `*`, `-`, or `_`");return e}function zD(t,e,n,i){const r=n.enter("list"),s=n.bulletCurrent;let a=t.ordered?OD(n):tm(n);const o=t.ordered?a==="."?")":".":UD(n);let l=e&&n.bulletLastUsed?a===n.bulletLastUsed:!1;if(!t.ordered){const f=t.children?t.children[0]:void 0;if((a==="*"||a==="-")&&f&&(!f.children||!f.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(l=!0),yS(n)===a&&f){let c=-1;for(;++c<t.children.length;){const h=t.children[c];if(h&&h.type==="listItem"&&h.children&&h.children[0]&&h.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(a=o),n.bulletCurrent=a;const u=n.containerFlow(t,i);return n.bulletLastUsed=a,n.bulletCurrent=s,r(),u}function BD(t){const e=t.options.listItemIndent||"one";if(e!=="tab"&&e!=="one"&&e!=="mixed")throw new Error("Cannot serialize items with `"+e+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return e}function VD(t,e,n,i){const r=BD(n);let s=n.bulletCurrent||tm(n);e&&e.type==="list"&&e.ordered&&(s=(typeof e.start=="number"&&e.start>-1?e.start:1)+(n.options.incrementListMarker===!1?0:e.children.indexOf(t))+s);let a=s.length+1;(r==="tab"||r==="mixed"&&(e&&e.type==="list"&&e.spread||t.spread))&&(a=Math.ceil(a/4)*4);const o=n.createTracker(i);o.move(s+" ".repeat(a-s.length)),o.shift(a);const l=n.enter("listItem"),u=n.indentLines(n.containerFlow(t,o.current()),f);return l(),u;function f(c,h,d){return h?(d?"":" ".repeat(a))+c:(d?s:s+" ".repeat(a-s.length))+c}}function HD(t,e,n,i){const r=n.enter("paragraph"),s=n.enter("phrasing"),a=n.containerPhrasing(t,i);return s(),r(),a}const GD=tc(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function WD(t,e,n,i){return(t.children.some(function(a){return GD(a)})?n.containerPhrasing:n.containerFlow).call(n,t,i)}function jD(t){const e=t.options.strong||"*";if(e!=="*"&&e!=="_")throw new Error("Cannot serialize strong with `"+e+"` for `options.strong`, expected `*`, or `_`");return e}SS.peek=XD;function SS(t,e,n,i){const r=jD(n),s=n.enter("strong"),a=n.createTracker(i),o=a.move(r+r);let l=a.move(n.containerPhrasing(t,{after:r,before:o,...a.current()}));const u=l.charCodeAt(0),f=Ru(i.before.charCodeAt(i.before.length-1),u,r);f.inside&&(l=Ao(u)+l.slice(1));const c=l.charCodeAt(l.length-1),h=Ru(i.after.charCodeAt(0),c,r);h.inside&&(l=l.slice(0,-1)+Ao(c));const d=a.move(r+r);return s(),n.attentionEncodeSurroundingInfo={after:h.outside,before:f.outside},o+l+d}function XD(t,e,n){return n.options.strong||"*"}function qD(t,e,n,i){return n.safe(t.value,i)}function YD(t){const e=t.options.ruleRepetition||3;if(e<3)throw new Error("Cannot serialize rules with repetition `"+e+"` for `options.ruleRepetition`, expected `3` or more");return e}function $D(t,e,n){const i=(yS(n)+(n.options.ruleSpaces?" ":"")).repeat(YD(n));return n.options.ruleSpaces?i.slice(0,-1):i}const ES={blockquote:_D,break:dx,code:wD,definition:AD,emphasis:hS,hardBreak:dx,heading:PD,html:dS,image:pS,imageReference:mS,inlineCode:gS,link:_S,linkReference:vS,list:zD,listItem:VD,paragraph:HD,root:WD,strong:SS,text:qD,thematicBreak:$D};function KD(){return{enter:{table:ZD,tableData:px,tableHeader:px,tableRow:JD},exit:{codeText:eN,table:QD,tableData:bf,tableHeader:bf,tableRow:bf}}}function ZD(t){const e=t._align;this.enter({type:"table",align:e.map(function(n){return n==="none"?null:n}),children:[]},t),this.data.inTable=!0}function QD(t){this.exit(t),this.data.inTable=void 0}function JD(t){this.enter({type:"tableRow",children:[]},t)}function bf(t){this.exit(t)}function px(t){this.enter({type:"tableCell",children:[]},t)}function eN(t){let e=this.resume();this.data.inTable&&(e=e.replace(/\\([\\|])/g,tN));const n=this.stack[this.stack.length-1];n.type,n.value=e,this.exit(t)}function tN(t,e){return e==="|"?e:t}function nN(t){const e=t||{},n=e.tableCellPadding,i=e.tablePipeAlign,r=e.stringLength,s=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:h,table:a,tableCell:l,tableRow:o}};function a(d,m,v,x){return u(f(d,v,x),d.align)}function o(d,m,v,x){const p=c(d,v,x),g=u([p]);return g.slice(0,g.indexOf(`
`))}function l(d,m,v,x){const p=v.enter("tableCell"),g=v.enter("phrasing"),_=v.containerPhrasing(d,{...x,before:s,after:s});return g(),p(),_}function u(d,m){return gD(d,{align:m,alignDelimiters:i,padding:n,stringLength:r})}function f(d,m,v){const x=d.children;let p=-1;const g=[],_=m.enter("table");for(;++p<x.length;)g[p]=c(x[p],m,v);return _(),g}function c(d,m,v){const x=d.children;let p=-1;const g=[],_=m.enter("tableRow");for(;++p<x.length;)g[p]=l(x[p],d,m,v);return _(),g}function h(d,m,v){let x=ES.inlineCode(d,m,v);return v.stack.includes("tableCell")&&(x=x.replace(/\|/g,"\\$&")),x}}function iN(){return{exit:{taskListCheckValueChecked:mx,taskListCheckValueUnchecked:mx,paragraph:sN}}}function rN(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:aN}}}function mx(t){const e=this.stack[this.stack.length-2];e.type,e.checked=t.type==="taskListCheckValueChecked"}function sN(t){const e=this.stack[this.stack.length-2];if(e&&e.type==="listItem"&&typeof e.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const i=n.children[0];if(i&&i.type==="text"){const r=e.children;let s=-1,a;for(;++s<r.length;){const o=r[s];if(o.type==="paragraph"){a=o;break}}a===n&&(i.value=i.value.slice(1),i.value.length===0?n.children.shift():n.position&&i.position&&typeof i.position.start.offset=="number"&&(i.position.start.column++,i.position.start.offset++,n.position.start=Object.assign({},i.position.start)))}}this.exit(t)}function aN(t,e,n,i){const r=t.children[0],s=typeof t.checked=="boolean"&&r&&r.type==="paragraph",a="["+(t.checked?"x":" ")+"] ",o=n.createTracker(i);s&&o.move(a);let l=ES.listItem(t,e,n,{...i,...o.current()});return s&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),l;function u(f){return f+a}}function oN(){return[zL(),aD(),cD(),KD(),iN()]}function lN(t){return{extensions:[BL(),oD(t),fD(),nN(t),rN()]}}const uN={tokenize:mN,partial:!0},MS={tokenize:gN,partial:!0},wS={tokenize:xN,partial:!0},TS={tokenize:_N,partial:!0},cN={tokenize:vN,partial:!0},AS={name:"wwwAutolink",tokenize:dN,previous:bS},CS={name:"protocolAutolink",tokenize:pN,previous:RS},Zi={name:"emailAutolink",tokenize:hN,previous:PS},bi={};function fN(){return{text:bi}}let zr=48;for(;zr<123;)bi[zr]=Zi,zr++,zr===58?zr=65:zr===91&&(zr=97);bi[43]=Zi;bi[45]=Zi;bi[46]=Zi;bi[95]=Zi;bi[72]=[Zi,CS];bi[104]=[Zi,CS];bi[87]=[Zi,AS];bi[119]=[Zi,AS];function hN(t,e,n){const i=this;let r,s;return a;function a(c){return!Cd(c)||!PS.call(i,i.previous)||nm(i.events)?n(c):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),o(c))}function o(c){return Cd(c)?(t.consume(c),o):c===64?(t.consume(c),l):n(c)}function l(c){return c===46?t.check(cN,f,u)(c):c===45||c===95||an(c)?(s=!0,t.consume(c),l):f(c)}function u(c){return t.consume(c),r=!0,l}function f(c){return s&&r&&fn(i.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),e(c)):n(c)}}function dN(t,e,n){const i=this;return r;function r(a){return a!==87&&a!==119||!bS.call(i,i.previous)||nm(i.events)?n(a):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(uN,t.attempt(MS,t.attempt(wS,s),n),n)(a))}function s(a){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),e(a)}}function pN(t,e,n){const i=this;let r="",s=!1;return a;function a(c){return(c===72||c===104)&&RS.call(i,i.previous)&&!nm(i.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),r+=String.fromCodePoint(c),t.consume(c),o):n(c)}function o(c){if(fn(c)&&r.length<5)return r+=String.fromCodePoint(c),t.consume(c),o;if(c===58){const h=r.toLowerCase();if(h==="http"||h==="https")return t.consume(c),l}return n(c)}function l(c){return c===47?(t.consume(c),s?u:(s=!0,l)):n(c)}function u(c){return c===null||Au(c)||pt(c)||ss(c)||Qu(c)?n(c):t.attempt(MS,t.attempt(wS,f),n)(c)}function f(c){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),e(c)}}function mN(t,e,n){let i=0;return r;function r(a){return(a===87||a===119)&&i<3?(i++,t.consume(a),r):a===46&&i===3?(t.consume(a),s):n(a)}function s(a){return a===null?n(a):e(a)}}function gN(t,e,n){let i,r,s;return a;function a(u){return u===46||u===95?t.check(TS,l,o)(u):u===null||pt(u)||ss(u)||u!==45&&Qu(u)?l(u):(s=!0,t.consume(u),a)}function o(u){return u===95?i=!0:(r=i,i=void 0),t.consume(u),a}function l(u){return r||i||!s?n(u):e(u)}}function xN(t,e){let n=0,i=0;return r;function r(a){return a===40?(n++,t.consume(a),r):a===41&&i<n?s(a):a===33||a===34||a===38||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===60||a===63||a===93||a===95||a===126?t.check(TS,e,s)(a):a===null||pt(a)||ss(a)?e(a):(t.consume(a),r)}function s(a){return a===41&&i++,t.consume(a),r}}function _N(t,e,n){return i;function i(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(t.consume(o),i):o===38?(t.consume(o),s):o===93?(t.consume(o),r):o===60||o===null||pt(o)||ss(o)?e(o):n(o)}function r(o){return o===null||o===40||o===91||pt(o)||ss(o)?e(o):i(o)}function s(o){return fn(o)?a(o):n(o)}function a(o){return o===59?(t.consume(o),i):fn(o)?(t.consume(o),a):n(o)}}function vN(t,e,n){return i;function i(s){return t.consume(s),r}function r(s){return an(s)?n(s):e(s)}}function bS(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||pt(t)}function RS(t){return!fn(t)}function PS(t){return!(t===47||Cd(t))}function Cd(t){return t===43||t===45||t===46||t===95||an(t)}function nm(t){let e=t.length,n=!1;for(;e--;){const i=t[e][1];if((i.type==="labelLink"||i.type==="labelImage")&&!i._balanced){n=!0;break}if(i._gfmAutolinkLiteralWalkedInto){n=!1;break}}return t.length>0&&!n&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const yN={tokenize:bN,partial:!0};function SN(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:TN,continuation:{tokenize:AN},exit:CN}},text:{91:{name:"gfmFootnoteCall",tokenize:wN},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:EN,resolveTo:MN}}}}function EN(t,e,n){const i=this;let r=i.events.length;const s=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let a;for(;r--;){const l=i.events[r][1];if(l.type==="labelImage"){a=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return o;function o(l){if(!a||!a._balanced)return n(l);const u=li(i.sliceSerialize({start:a.end,end:i.now()}));return u.codePointAt(0)!==94||!s.includes(u.slice(1))?n(l):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(l),t.exit("gfmFootnoteCallLabelMarker"),e(l))}}function MN(t,e){let n=t.length;for(;n--;)if(t[n][1].type==="labelImage"&&t[n][0]==="enter"){t[n][1];break}t[n+1][1].type="data",t[n+3][1].type="gfmFootnoteCallLabelMarker";const i={type:"gfmFootnoteCall",start:Object.assign({},t[n+3][1].start),end:Object.assign({},t[t.length-1][1].end)},r={type:"gfmFootnoteCallMarker",start:Object.assign({},t[n+3][1].end),end:Object.assign({},t[n+3][1].end)};r.end.column++,r.end.offset++,r.end._bufferIndex++;const s={type:"gfmFootnoteCallString",start:Object.assign({},r.end),end:Object.assign({},t[t.length-1][1].start)},a={type:"chunkString",contentType:"string",start:Object.assign({},s.start),end:Object.assign({},s.end)},o=[t[n+1],t[n+2],["enter",i,e],t[n+3],t[n+4],["enter",r,e],["exit",r,e],["enter",s,e],["enter",a,e],["exit",a,e],["exit",s,e],t[t.length-2],t[t.length-1],["exit",i,e]];return t.splice(n,t.length-n+1,...o),t}function wN(t,e,n){const i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let s=0,a;return o;function o(c){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(c),t.exit("gfmFootnoteCallLabelMarker"),l}function l(c){return c!==94?n(c):(t.enter("gfmFootnoteCallMarker"),t.consume(c),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",u)}function u(c){if(s>999||c===93&&!a||c===null||c===91||pt(c))return n(c);if(c===93){t.exit("chunkString");const h=t.exit("gfmFootnoteCallString");return r.includes(li(i.sliceSerialize(h)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(c),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),e):n(c)}return pt(c)||(a=!0),s++,t.consume(c),c===92?f:u}function f(c){return c===91||c===92||c===93?(t.consume(c),s++,u):u(c)}}function TN(t,e,n){const i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let s,a=0,o;return l;function l(m){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(m),t.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(m){return m===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(m),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",f):n(m)}function f(m){if(a>999||m===93&&!o||m===null||m===91||pt(m))return n(m);if(m===93){t.exit("chunkString");const v=t.exit("gfmFootnoteDefinitionLabelString");return s=li(i.sliceSerialize(v)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(m),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),h}return pt(m)||(o=!0),a++,t.consume(m),m===92?c:f}function c(m){return m===91||m===92||m===93?(t.consume(m),a++,f):f(m)}function h(m){return m===58?(t.enter("definitionMarker"),t.consume(m),t.exit("definitionMarker"),r.includes(s)||r.push(s),Ze(t,d,"gfmFootnoteDefinitionWhitespace")):n(m)}function d(m){return e(m)}}function AN(t,e,n){return t.check(Fo,e,t.attempt(yN,e,n))}function CN(t){t.exit("gfmFootnoteDefinition")}function bN(t,e,n){const i=this;return Ze(t,r,"gfmFootnoteDefinitionIndent",5);function r(s){const a=i.events[i.events.length-1];return a&&a[1].type==="gfmFootnoteDefinitionIndent"&&a[2].sliceSerialize(a[1],!0).length===4?e(s):n(s)}}function RN(t){let n=(t||{}).singleTilde;const i={name:"strikethrough",tokenize:s,resolveAll:r};return n==null&&(n=!0),{text:{126:i},insideSpan:{null:[i]},attentionMarkers:{null:[126]}};function r(a,o){let l=-1;for(;++l<a.length;)if(a[l][0]==="enter"&&a[l][1].type==="strikethroughSequenceTemporary"&&a[l][1]._close){let u=l;for(;u--;)if(a[u][0]==="exit"&&a[u][1].type==="strikethroughSequenceTemporary"&&a[u][1]._open&&a[l][1].end.offset-a[l][1].start.offset===a[u][1].end.offset-a[u][1].start.offset){a[l][1].type="strikethroughSequence",a[u][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},a[u][1].start),end:Object.assign({},a[l][1].end)},c={type:"strikethroughText",start:Object.assign({},a[u][1].end),end:Object.assign({},a[l][1].start)},h=[["enter",f,o],["enter",a[u][1],o],["exit",a[u][1],o],["enter",c,o]],d=o.parser.constructs.insideSpan.null;d&&Ln(h,h.length,0,Ju(d,a.slice(u+1,l),o)),Ln(h,h.length,0,[["exit",c,o],["enter",a[l][1],o],["exit",a[l][1],o],["exit",f,o]]),Ln(a,u-1,l-u+3,h),l=u+h.length-2;break}}for(l=-1;++l<a.length;)a[l][1].type==="strikethroughSequenceTemporary"&&(a[l][1].type="data");return a}function s(a,o,l){const u=this.previous,f=this.events;let c=0;return h;function h(m){return u===126&&f[f.length-1][1].type!=="characterEscape"?l(m):(a.enter("strikethroughSequenceTemporary"),d(m))}function d(m){const v=la(u);if(m===126)return c>1?l(m):(a.consume(m),c++,d);if(c<2&&!n)return l(m);const x=a.exit("strikethroughSequenceTemporary"),p=la(m);return x._open=!p||p===2&&!!v,x._close=!v||v===2&&!!p,o(m)}}}class PN{constructor(){this.map=[]}add(e,n,i){IN(this,e,n,i)}consume(e){if(this.map.sort(function(s,a){return s[0]-a[0]}),this.map.length===0)return;let n=this.map.length;const i=[];for(;n>0;)n-=1,i.push(e.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),e.length=this.map[n][0];i.push(e.slice()),e.length=0;let r=i.pop();for(;r;){for(const s of r)e.push(s);r=i.pop()}this.map.length=0}}function IN(t,e,n,i){let r=0;if(!(n===0&&i.length===0)){for(;r<t.map.length;){if(t.map[r][0]===e){t.map[r][1]+=n,t.map[r][2].push(...i);return}r+=1}t.map.push([e,n,i])}}function LN(t,e){let n=!1;const i=[];for(;e<t.length;){const r=t[e];if(n){if(r[0]==="enter")r[1].type==="tableContent"&&i.push(t[e+1][1].type==="tableDelimiterMarker"?"left":"none");else if(r[1].type==="tableContent"){if(t[e-1][1].type==="tableDelimiterMarker"){const s=i.length-1;i[s]=i[s]==="left"?"center":"right"}}else if(r[1].type==="tableDelimiterRow")break}else r[0]==="enter"&&r[1].type==="tableDelimiterRow"&&(n=!0);e+=1}return i}function DN(){return{flow:{null:{name:"table",tokenize:NN,resolveAll:kN}}}}function NN(t,e,n){const i=this;let r=0,s=0,a;return o;function o(R){let P=i.events.length-1;for(;P>-1;){const Y=i.events[P][1].type;if(Y==="lineEnding"||Y==="linePrefix")P--;else break}const F=P>-1?i.events[P][1].type:null,H=F==="tableHead"||F==="tableRow"?M:l;return H===M&&i.parser.lazy[i.now().line]?n(R):H(R)}function l(R){return t.enter("tableHead"),t.enter("tableRow"),u(R)}function u(R){return R===124||(a=!0,s+=1),f(R)}function f(R){return R===null?n(R):Le(R)?s>1?(s=0,i.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(R),t.exit("lineEnding"),d):n(R):Xe(R)?Ze(t,f,"whitespace")(R):(s+=1,a&&(a=!1,r+=1),R===124?(t.enter("tableCellDivider"),t.consume(R),t.exit("tableCellDivider"),a=!0,f):(t.enter("data"),c(R)))}function c(R){return R===null||R===124||pt(R)?(t.exit("data"),f(R)):(t.consume(R),R===92?h:c)}function h(R){return R===92||R===124?(t.consume(R),c):c(R)}function d(R){return i.interrupt=!1,i.parser.lazy[i.now().line]?n(R):(t.enter("tableDelimiterRow"),a=!1,Xe(R)?Ze(t,m,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(R):m(R))}function m(R){return R===45||R===58?x(R):R===124?(a=!0,t.enter("tableCellDivider"),t.consume(R),t.exit("tableCellDivider"),v):C(R)}function v(R){return Xe(R)?Ze(t,x,"whitespace")(R):x(R)}function x(R){return R===58?(s+=1,a=!0,t.enter("tableDelimiterMarker"),t.consume(R),t.exit("tableDelimiterMarker"),p):R===45?(s+=1,p(R)):R===null||Le(R)?E(R):C(R)}function p(R){return R===45?(t.enter("tableDelimiterFiller"),g(R)):C(R)}function g(R){return R===45?(t.consume(R),g):R===58?(a=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(R),t.exit("tableDelimiterMarker"),_):(t.exit("tableDelimiterFiller"),_(R))}function _(R){return Xe(R)?Ze(t,E,"whitespace")(R):E(R)}function E(R){return R===124?m(R):R===null||Le(R)?!a||r!==s?C(R):(t.exit("tableDelimiterRow"),t.exit("tableHead"),e(R)):C(R)}function C(R){return n(R)}function M(R){return t.enter("tableRow"),b(R)}function b(R){return R===124?(t.enter("tableCellDivider"),t.consume(R),t.exit("tableCellDivider"),b):R===null||Le(R)?(t.exit("tableRow"),e(R)):Xe(R)?Ze(t,b,"whitespace")(R):(t.enter("data"),y(R))}function y(R){return R===null||R===124||pt(R)?(t.exit("data"),b(R)):(t.consume(R),R===92?T:y)}function T(R){return R===92||R===124?(t.consume(R),y):y(R)}}function kN(t,e){let n=-1,i=!0,r=0,s=[0,0,0,0],a=[0,0,0,0],o=!1,l=0,u,f,c;const h=new PN;for(;++n<t.length;){const d=t[n],m=d[1];d[0]==="enter"?m.type==="tableHead"?(o=!1,l!==0&&(gx(h,e,l,u,f),f=void 0,l=0),u={type:"table",start:Object.assign({},m.start),end:Object.assign({},m.end)},h.add(n,0,[["enter",u,e]])):m.type==="tableRow"||m.type==="tableDelimiterRow"?(i=!0,c=void 0,s=[0,0,0,0],a=[0,n+1,0,0],o&&(o=!1,f={type:"tableBody",start:Object.assign({},m.start),end:Object.assign({},m.end)},h.add(n,0,[["enter",f,e]])),r=m.type==="tableDelimiterRow"?2:f?3:1):r&&(m.type==="data"||m.type==="tableDelimiterMarker"||m.type==="tableDelimiterFiller")?(i=!1,a[2]===0&&(s[1]!==0&&(a[0]=a[1],c=Pl(h,e,s,r,void 0,c),s=[0,0,0,0]),a[2]=n)):m.type==="tableCellDivider"&&(i?i=!1:(s[1]!==0&&(a[0]=a[1],c=Pl(h,e,s,r,void 0,c)),s=a,a=[s[1],n,0,0])):m.type==="tableHead"?(o=!0,l=n):m.type==="tableRow"||m.type==="tableDelimiterRow"?(l=n,s[1]!==0?(a[0]=a[1],c=Pl(h,e,s,r,n,c)):a[1]!==0&&(c=Pl(h,e,a,r,n,c)),r=0):r&&(m.type==="data"||m.type==="tableDelimiterMarker"||m.type==="tableDelimiterFiller")&&(a[3]=n)}for(l!==0&&gx(h,e,l,u,f),h.consume(e.events),n=-1;++n<e.events.length;){const d=e.events[n];d[0]==="enter"&&d[1].type==="table"&&(d[1]._align=LN(e.events,n))}return t}function Pl(t,e,n,i,r,s){const a=i===1?"tableHeader":i===2?"tableDelimiter":"tableData",o="tableContent";n[0]!==0&&(s.end=Object.assign({},bs(e.events,n[0])),t.add(n[0],0,[["exit",s,e]]));const l=bs(e.events,n[1]);if(s={type:a,start:Object.assign({},l),end:Object.assign({},l)},t.add(n[1],0,[["enter",s,e]]),n[2]!==0){const u=bs(e.events,n[2]),f=bs(e.events,n[3]),c={type:o,start:Object.assign({},u),end:Object.assign({},f)};if(t.add(n[2],0,[["enter",c,e]]),i!==2){const h=e.events[n[2]],d=e.events[n[3]];if(h[1].end=Object.assign({},d[1].end),h[1].type="chunkText",h[1].contentType="text",n[3]>n[2]+1){const m=n[2]+1,v=n[3]-n[2]-1;t.add(m,v,[])}}t.add(n[3]+1,0,[["exit",c,e]])}return r!==void 0&&(s.end=Object.assign({},bs(e.events,r)),t.add(r,0,[["exit",s,e]]),s=void 0),s}function gx(t,e,n,i,r){const s=[],a=bs(e.events,n);r&&(r.end=Object.assign({},a),s.push(["exit",r,e])),i.end=Object.assign({},a),s.push(["exit",i,e]),t.add(n+1,0,s)}function bs(t,e){const n=t[e],i=n[0]==="enter"?"start":"end";return n[1][i]}const FN={name:"tasklistCheck",tokenize:ON};function UN(){return{text:{91:FN}}}function ON(t,e,n){const i=this;return r;function r(l){return i.previous!==null||!i._gfmTasklistFirstContentOfListItem?n(l):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(l),t.exit("taskListCheckMarker"),s)}function s(l){return pt(l)?(t.enter("taskListCheckValueUnchecked"),t.consume(l),t.exit("taskListCheckValueUnchecked"),a):l===88||l===120?(t.enter("taskListCheckValueChecked"),t.consume(l),t.exit("taskListCheckValueChecked"),a):n(l)}function a(l){return l===93?(t.enter("taskListCheckMarker"),t.consume(l),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),o):n(l)}function o(l){return Le(l)?e(l):Xe(l)?t.check({tokenize:zN},e,n)(l):n(l)}}function zN(t,e,n){return Ze(t,i,"whitespace");function i(r){return r===null?n(r):e(r)}}function BN(t){return By([fN(),SN(),RN(t),DN(),UN()])}const VN={};function HN(t){const e=this,n=t||VN,i=e.data(),r=i.micromarkExtensions||(i.micromarkExtensions=[]),s=i.fromMarkdownExtensions||(i.fromMarkdownExtensions=[]),a=i.toMarkdownExtensions||(i.toMarkdownExtensions=[]);r.push(BN(n)),s.push(oN()),a.push(lN(n))}var xx;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(xx||(xx={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _x;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(_x||(_x={}));var vx;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(vx||(vx={}));var yx;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",t.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(yx||(yx={}));var Sx;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(Sx||(Sx={}));var Ex;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(Ex||(Ex={}));var Mx;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(Mx||(Mx={}));var to;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT",t.SPII="SPII",t.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",t.OTHER="OTHER"})(to||(to={}));var wx;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(wx||(wx={}));var Tx;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(Tx||(Tx={}));var Ax;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(Ax||(Ax={}));var Cx;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(Cx||(Cx={}));to.RECITATION,to.SAFETY,to.LANGUAGE;console.log("Is Gemini API Key loaded in this build?:",!1);const GN=({onClose:t})=>{const[e,n]=dt.useState([{role:"assistant",content:"Hi! I'm Jithendra's AI assistant. Ask me anything about his skills, projects, or background!"}]),[i,r]=dt.useState(""),[s,a]=dt.useState(!1),o=dt.useRef(null),l=()=>{var f;(f=o.current)==null||f.scrollIntoView({behavior:"smooth"})};dt.useEffect(()=>{l()},[e]);const u=async f=>{if(f.preventDefault(),!(!i.trim()||s)){n(c=>[...c,{role:"user",content:i},{role:"assistant",content:"It looks like the Gemini API Key is missing. Please add the `VITE_GEMINI_API_KEY` to your environment to chat with me!"}]),r("");return}};return D.jsxs("div",{className:"ai-chat-widget glass animate-fade-in",children:[D.jsxs("div",{className:"chat-header",children:[D.jsxs("div",{className:"chat-title",children:[D.jsx(Ic,{size:20,className:"text-highlight"}),D.jsx("span",{children:"AI Assistant"})]}),D.jsx("button",{className:"chat-close",onClick:t,"aria-label":"Close chat",children:D.jsx(Gv,{size:20})})]}),D.jsxs("div",{className:"chat-messages",children:[e.map((f,c)=>D.jsxs("div",{className:`chat-message ${f.role}`,children:[D.jsx("div",{className:"message-avatar",children:f.role==="assistant"?D.jsx(Ic,{size:16}):D.jsx(M1,{size:16})}),D.jsx("div",{className:"message-content",children:D.jsx(RL,{remarkPlugins:[HN],children:f.content})})]},c)),s&&D.jsxs("div",{className:"chat-message assistant",children:[D.jsx("div",{className:"message-avatar",children:D.jsx(Ic,{size:16})}),D.jsxs("div",{className:"message-content typing-indicator",children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]})]}),D.jsx("div",{ref:o})]}),D.jsxs("form",{onSubmit:u,className:"chat-input-area",children:[D.jsx("input",{type:"text",value:i,onChange:f=>r(f.target.value),placeholder:"Ask about Jithendra...",className:"chat-input"}),D.jsx("button",{type:"submit",className:"chat-send-btn",disabled:!i.trim()||s,children:D.jsx(S1,{size:18})})]})]})},WN=()=>{const[t,e]=dt.useState({x:0,y:0}),[n,i]=dt.useState(!1),[r,s]=dt.useState(!1),a=dt.useRef(null);dt.useEffect(()=>{const l=u=>{e({x:u.clientX,y:u.clientY})};return window.addEventListener("mousemove",l),()=>window.removeEventListener("mousemove",l)},[]);const o=7;if(a.current){const l=a.current.getBoundingClientRect(),u=l.left+l.width/2,f=l.top+l.height/2;Math.atan2(t.y-f,t.x-u),Math.min(Math.hypot(t.x-u,t.y-f)/30,o)}return D.jsxs("div",{className:"chatbot-wrapper",children:[r&&D.jsx(GN,{onClose:()=>s(!1)}),D.jsxs("div",{className:`splunk-robot-container ${r?"active":""}`,onClick:()=>s(l=>!l),title:"Click me to chat with Jithendra's AI assistant!",children:[D.jsx("div",{style:{position:"absolute",inset:0,zIndex:10,cursor:"pointer"}}),D.jsx("iframe",{src:"https://my.spline.design/genkubgreetingrobot-2JNl3ubuV2e81X7vsKI4DLhB/",frameBorder:"0",style:{position:"absolute",top:"-5px",left:"-15px",width:"200px",height:"200px",backgroundColor:"transparent",pointerEvents:"none"},title:"3D Greeting Robot"})]})]})};function jN(){return dt.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&i.target.classList.add("active")})},{threshold:.15});return document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(n=>t.observe(n)),()=>t.disconnect()},[]),D.jsxs("div",{className:"app-wrapper",children:[D.jsx(ZR,{}),D.jsx("nav",{className:"navbar glass",children:D.jsxs("div",{className:"nav-content",children:[D.jsxs("a",{href:"#home",className:"nav-logo-container",children:[D.jsx("img",{src:"/profile.jpg.png",alt:"JM Logo",className:"nav-logo-img",onError:t=>{t.target.style.display="none",t.target.nextSibling.style.display="flex"}}),D.jsx("span",{className:"nav-logo-fallback",style:{display:"none"},children:"JM."})]}),D.jsxs("div",{className:"nav-links",children:[D.jsx("a",{href:"#home",children:"Home"}),D.jsx("a",{href:"#about",children:"About"}),D.jsx("a",{href:"#skills",children:"Skills"}),D.jsx("a",{href:"#projects",children:"Projects"}),D.jsx("a",{href:"#experience",children:"Experience"}),D.jsx("a",{href:"#certifications",children:"Certs"}),D.jsx("a",{href:"#education",children:"Education"}),D.jsx("a",{href:"#contact",children:"Contact"})]})]})}),D.jsxs("main",{className:"container",children:[D.jsx(w1,{}),D.jsx(T1,{}),D.jsx(A1,{}),D.jsx(C1,{}),D.jsx(b1,{}),D.jsx(P1,{}),D.jsx(R1,{}),D.jsx(I1,{})]}),D.jsx(WN,{}),D.jsxs("footer",{className:"footer glass",children:[D.jsxs("p",{children:["© ",new Date().getFullYear()," Jithendra Mallela. All rights reserved."]}),D.jsxs("div",{className:"footer-links",children:[D.jsx("a",{href:"https://github.com/jithendra98",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),D.jsx("a",{href:"https://www.linkedin.com/in/mallela-jithendra-93j",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})]})]})]})}Rf.createRoot(document.getElementById("root")).render(D.jsx(JS.StrictMode,{children:D.jsx(jN,{})}));
