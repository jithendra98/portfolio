(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var ou=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Uh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jx={exports:{}},zu={},Xx={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Na=Symbol.for("react.element"),oE=Symbol.for("react.portal"),aE=Symbol.for("react.fragment"),lE=Symbol.for("react.strict_mode"),uE=Symbol.for("react.profiler"),cE=Symbol.for("react.provider"),fE=Symbol.for("react.context"),dE=Symbol.for("react.forward_ref"),hE=Symbol.for("react.suspense"),pE=Symbol.for("react.memo"),mE=Symbol.for("react.lazy"),Em=Symbol.iterator;function gE(t){return t===null||typeof t!="object"?null:(t=Em&&t[Em]||t["@@iterator"],typeof t=="function"?t:null)}var qx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yx=Object.assign,$x={};function mo(t,e,n){this.props=t,this.context=e,this.refs=$x,this.updater=n||qx}mo.prototype.isReactComponent={};mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Kx(){}Kx.prototype=mo.prototype;function Oh(t,e,n){this.props=t,this.context=e,this.refs=$x,this.updater=n||qx}var zh=Oh.prototype=new Kx;zh.constructor=Oh;Yx(zh,mo.prototype);zh.isPureReactComponent=!0;var Mm=Array.isArray,Zx=Object.prototype.hasOwnProperty,Bh={current:null},Jx={key:!0,ref:!0,__self:!0,__source:!0};function Qx(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Zx.call(e,i)&&!Jx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Na,type:t,key:s,ref:o,props:r,_owner:Bh.current}}function xE(t,e){return{$$typeof:Na,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Na}function _E(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wm=/\/+/g;function pc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_E(""+t.key):e.toString(36)}function zl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Na:case oE:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+pc(o,0):i,Mm(r)?(n="",t!=null&&(n=t.replace(wm,"$&/")+"/"),zl(r,e,n,"",function(u){return u})):r!=null&&(Hh(r)&&(r=xE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(wm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Mm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+pc(s,a);o+=zl(s,e,n,l,r)}else if(l=gE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+pc(s,a++),o+=zl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(t,e,n){if(t==null)return t;var i=[],r=0;return zl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function vE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mn={current:null},Bl={transition:null},yE={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:Bl,ReactCurrentOwner:Bh};function e_(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!Hh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=mo;qe.Fragment=aE;qe.Profiler=uE;qe.PureComponent=Oh;qe.StrictMode=lE;qe.Suspense=hE;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yE;qe.act=e_;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Yx({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Zx.call(e,l)&&!Jx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Na,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:fE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cE,_context:t},t.Consumer=t};qe.createElement=Qx;qe.createFactory=function(t){var e=Qx.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:dE,render:t}};qe.isValidElement=Hh;qe.lazy=function(t){return{$$typeof:mE,_payload:{_status:-1,_result:t},_init:vE}};qe.memo=function(t,e){return{$$typeof:pE,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Bl.transition;Bl.transition={};try{t()}finally{Bl.transition=e}};qe.unstable_act=e_;qe.useCallback=function(t,e){return mn.current.useCallback(t,e)};qe.useContext=function(t){return mn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return mn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return mn.current.useEffect(t,e)};qe.useId=function(){return mn.current.useId()};qe.useImperativeHandle=function(t,e,n){return mn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return mn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return mn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return mn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return mn.current.useReducer(t,e,n)};qe.useRef=function(t){return mn.current.useRef(t)};qe.useState=function(t){return mn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return mn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return mn.current.useTransition()};qe.version="18.3.1";Xx.exports=qe;var ht=Xx.exports;const SE=Uh(ht);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var EE=ht,ME=Symbol.for("react.element"),wE=Symbol.for("react.fragment"),TE=Object.prototype.hasOwnProperty,AE=EE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,CE={key:!0,ref:!0,__self:!0,__source:!0};function t_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)TE.call(e,i)&&!CE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ME,type:t,key:s,ref:o,props:r,_owner:AE.current}}zu.Fragment=wE;zu.jsx=t_;zu.jsxs=t_;jx.exports=zu;var D=jx.exports,Of={},n_={exports:{}},kn={},i_={exports:{}},r_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,Z){var A=j.length;j.push(Z);e:for(;0<A;){var re=A-1>>>1,se=j[re];if(0<r(se,Z))j[re]=Z,j[A]=se,A=re;else break e}}function n(j){return j.length===0?null:j[0]}function i(j){if(j.length===0)return null;var Z=j[0],A=j.pop();if(A!==Z){j[0]=A;e:for(var re=0,se=j.length,L=se>>>1;re<L;){var Fe=2*(re+1)-1,Ge=j[Fe],J=Fe+1,ne=j[J];if(0>r(Ge,A))J<se&&0>r(ne,Ge)?(j[re]=ne,j[J]=A,re=J):(j[re]=Ge,j[Fe]=A,re=Fe);else if(J<se&&0>r(ne,A))j[re]=ne,j[J]=A,re=J;else break e}}return Z}function r(j,Z){var A=j.sortIndex-Z.sortIndex;return A!==0?A:j.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,c=null,d=3,h=!1,m=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(j){for(var Z=n(u);Z!==null;){if(Z.callback===null)i(u);else if(Z.startTime<=j)i(u),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(u)}}function E(j){if(v=!1,_(j),!m)if(n(l)!==null)m=!0,X(C);else{var Z=n(u);Z!==null&&H(E,Z.startTime-j)}}function C(j,Z){m=!1,v&&(v=!1,p(y),y=-1),h=!0;var A=d;try{for(_(Z),c=n(l);c!==null&&(!(c.expirationTime>Z)||j&&!P());){var re=c.callback;if(typeof re=="function"){c.callback=null,d=c.priorityLevel;var se=re(c.expirationTime<=Z);Z=t.unstable_now(),typeof se=="function"?c.callback=se:c===n(l)&&i(l),_(Z)}else i(l);c=n(l)}if(c!==null)var L=!0;else{var Fe=n(u);Fe!==null&&H(E,Fe.startTime-Z),L=!1}return L}finally{c=null,d=A,h=!1}}var M=!1,b=null,y=-1,T=5,R=-1;function P(){return!(t.unstable_now()-R<T)}function F(){if(b!==null){var j=t.unstable_now();R=j;var Z=!0;try{Z=b(!0,j)}finally{Z?V():(M=!1,b=null)}}else M=!1}var V;if(typeof g=="function")V=function(){g(F)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,z=Y.port2;Y.port1.onmessage=F,V=function(){z.postMessage(null)}}else V=function(){x(F,0)};function X(j){b=j,M||(M=!0,V())}function H(j,Z){y=x(function(){j(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,X(C))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(j){switch(d){case 1:case 2:case 3:var Z=3;break;default:Z=d}var A=d;d=Z;try{return j()}finally{d=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,Z){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var A=d;d=j;try{return Z()}finally{d=A}},t.unstable_scheduleCallback=function(j,Z,A){var re=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?re+A:re):A=re,j){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=A+se,j={id:f++,callback:Z,priorityLevel:j,startTime:A,expirationTime:se,sortIndex:-1},A>re?(j.sortIndex=A,e(u,j),n(l)===null&&j===n(u)&&(v?(p(y),y=-1):v=!0,H(E,A-re))):(j.sortIndex=se,e(l,j),m||h||(m=!0,X(C))),j},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(j){var Z=d;return function(){var A=d;d=Z;try{return j.apply(this,arguments)}finally{d=A}}}})(r_);i_.exports=r_;var bE=i_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RE=ht,Nn=bE;function le(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s_=new Set,la={};function cs(t,e){to(t,e),to(t+"Capture",e)}function to(t,e){for(la[t]=e,t=0;t<e.length;t++)s_.add(e[t])}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zf=Object.prototype.hasOwnProperty,PE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tm={},Am={};function IE(t){return zf.call(Am,t)?!0:zf.call(Tm,t)?!1:PE.test(t)?Am[t]=!0:(Tm[t]=!0,!1)}function LE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function DE(t,e,n,i){if(e===null||typeof e>"u"||LE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Zt[t]=new gn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Zt[e]=new gn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Zt[t]=new gn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Zt[t]=new gn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Zt[t]=new gn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Zt[t]=new gn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Zt[t]=new gn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Zt[t]=new gn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Zt[t]=new gn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vh=/[\-:]([a-z])/g;function Gh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vh,Gh);Zt[e]=new gn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vh,Gh);Zt[e]=new gn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vh,Gh);Zt[e]=new gn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Zt[t]=new gn(t,1,!1,t.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Zt[t]=new gn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wh(t,e,n,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(DE(e,n,r,i)&&(n=null),i||r===null?IE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Zi=RE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$a=Symbol.for("react.element"),Ns=Symbol.for("react.portal"),ks=Symbol.for("react.fragment"),jh=Symbol.for("react.strict_mode"),Bf=Symbol.for("react.profiler"),o_=Symbol.for("react.provider"),a_=Symbol.for("react.context"),Xh=Symbol.for("react.forward_ref"),Hf=Symbol.for("react.suspense"),Vf=Symbol.for("react.suspense_list"),qh=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),l_=Symbol.for("react.offscreen"),Cm=Symbol.iterator;function wo(t){return t===null||typeof t!="object"?null:(t=Cm&&t[Cm]||t["@@iterator"],typeof t=="function"?t:null)}var At=Object.assign,mc;function Ho(t){if(mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mc=e&&e[1]||""}return`
`+mc+t}var gc=!1;function xc(t,e){if(!t||gc)return"";gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{gc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ho(t):""}function NE(t){switch(t.tag){case 5:return Ho(t.type);case 16:return Ho("Lazy");case 13:return Ho("Suspense");case 19:return Ho("SuspenseList");case 0:case 2:case 15:return t=xc(t.type,!1),t;case 11:return t=xc(t.type.render,!1),t;case 1:return t=xc(t.type,!0),t;default:return""}}function Gf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ks:return"Fragment";case Ns:return"Portal";case Bf:return"Profiler";case jh:return"StrictMode";case Hf:return"Suspense";case Vf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case a_:return(t.displayName||"Context")+".Consumer";case o_:return(t._context.displayName||"Context")+".Provider";case Xh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qh:return e=t.displayName||null,e!==null?e:Gf(t.type)||"Memo";case ur:e=t._payload,t=t._init;try{return Gf(t(e))}catch{}}return null}function kE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gf(e);case 8:return e===jh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function u_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function FE(t){var e=u_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ka(t){t._valueTracker||(t._valueTracker=FE(t))}function c_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=u_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function au(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wf(t,e){var n=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function f_(t,e){e=e.checked,e!=null&&Wh(t,"checked",e,!1)}function jf(t,e){f_(t,e);var n=Cr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xf(t,e.type,Cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Rm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xf(t,e,n){(e!=="number"||au(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vo=Array.isArray;function Xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Cr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function qf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Pm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(le(92));if(Vo(n)){if(1<n.length)throw Error(le(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cr(n)}}function d_(t,e){var n=Cr(e.value),i=Cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Im(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function h_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?h_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,p_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ua(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},UE=["Webkit","ms","Moz","O"];Object.keys(Yo).forEach(function(t){UE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Yo[e]=Yo[t]})});function m_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Yo.hasOwnProperty(t)&&Yo[t]?(""+e).trim():e+"px"}function g_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=m_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var OE=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $f(t,e){if(e){if(OE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function Kf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zf=null;function Yh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jf=null,qs=null,Ys=null;function Lm(t){if(t=Ua(t)){if(typeof Jf!="function")throw Error(le(280));var e=t.stateNode;e&&(e=Wu(e),Jf(t.stateNode,t.type,e))}}function x_(t){qs?Ys?Ys.push(t):Ys=[t]:qs=t}function __(){if(qs){var t=qs,e=Ys;if(Ys=qs=null,Lm(t),e)for(t=0;t<e.length;t++)Lm(e[t])}}function v_(t,e){return t(e)}function y_(){}var _c=!1;function S_(t,e,n){if(_c)return t(e,n);_c=!0;try{return v_(t,e,n)}finally{_c=!1,(qs!==null||Ys!==null)&&(y_(),__())}}function ca(t,e){var n=t.stateNode;if(n===null)return null;var i=Wu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(le(231,e,typeof n));return n}var Qf=!1;if(ji)try{var To={};Object.defineProperty(To,"passive",{get:function(){Qf=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{Qf=!1}function zE(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var $o=!1,lu=null,uu=!1,ed=null,BE={onError:function(t){$o=!0,lu=t}};function HE(t,e,n,i,r,s,o,a,l){$o=!1,lu=null,zE.apply(BE,arguments)}function VE(t,e,n,i,r,s,o,a,l){if(HE.apply(this,arguments),$o){if($o){var u=lu;$o=!1,lu=null}else throw Error(le(198));uu||(uu=!0,ed=u)}}function fs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function E_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dm(t){if(fs(t)!==t)throw Error(le(188))}function GE(t){var e=t.alternate;if(!e){if(e=fs(t),e===null)throw Error(le(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Dm(r),t;if(s===i)return Dm(r),e;s=s.sibling}throw Error(le(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(le(189))}}if(n.alternate!==i)throw Error(le(190))}if(n.tag!==3)throw Error(le(188));return n.stateNode.current===n?t:e}function M_(t){return t=GE(t),t!==null?w_(t):null}function w_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=w_(t);if(e!==null)return e;t=t.sibling}return null}var T_=Nn.unstable_scheduleCallback,Nm=Nn.unstable_cancelCallback,WE=Nn.unstable_shouldYield,jE=Nn.unstable_requestPaint,It=Nn.unstable_now,XE=Nn.unstable_getCurrentPriorityLevel,$h=Nn.unstable_ImmediatePriority,A_=Nn.unstable_UserBlockingPriority,cu=Nn.unstable_NormalPriority,qE=Nn.unstable_LowPriority,C_=Nn.unstable_IdlePriority,Bu=null,Mi=null;function YE(t){if(Mi&&typeof Mi.onCommitFiberRoot=="function")try{Mi.onCommitFiberRoot(Bu,t,void 0,(t.current.flags&128)===128)}catch{}}var oi=Math.clz32?Math.clz32:ZE,$E=Math.log,KE=Math.LN2;function ZE(t){return t>>>=0,t===0?32:31-($E(t)/KE|0)|0}var Ja=64,Qa=4194304;function Go(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Go(a):(s&=o,s!==0&&(i=Go(s)))}else o=n&~r,o!==0?i=Go(o):s!==0&&(i=Go(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-oi(e),r=1<<n,i|=t[n],e&=~r;return i}function JE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function QE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-oi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=JE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function td(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function b_(){var t=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),t}function vc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-oi(e),t[e]=n}function eM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-oi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Kh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-oi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function R_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var P_,Zh,I_,L_,D_,nd=!1,el=[],_r=null,vr=null,yr=null,fa=new Map,da=new Map,dr=[],tM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function km(t,e){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(e.pointerId)}}function Ao(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ua(e),e!==null&&Zh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function nM(t,e,n,i,r){switch(e){case"focusin":return _r=Ao(_r,t,e,n,i,r),!0;case"dragenter":return vr=Ao(vr,t,e,n,i,r),!0;case"mouseover":return yr=Ao(yr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return fa.set(s,Ao(fa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,da.set(s,Ao(da.get(s)||null,t,e,n,i,r)),!0}return!1}function N_(t){var e=$r(t.target);if(e!==null){var n=fs(e);if(n!==null){if(e=n.tag,e===13){if(e=E_(n),e!==null){t.blockedOn=e,D_(t.priority,function(){I_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=id(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zf=i,n.target.dispatchEvent(i),Zf=null}else return e=Ua(n),e!==null&&Zh(e),t.blockedOn=n,!1;e.shift()}return!0}function Fm(t,e,n){Hl(t)&&n.delete(e)}function iM(){nd=!1,_r!==null&&Hl(_r)&&(_r=null),vr!==null&&Hl(vr)&&(vr=null),yr!==null&&Hl(yr)&&(yr=null),fa.forEach(Fm),da.forEach(Fm)}function Co(t,e){t.blockedOn===e&&(t.blockedOn=null,nd||(nd=!0,Nn.unstable_scheduleCallback(Nn.unstable_NormalPriority,iM)))}function ha(t){function e(r){return Co(r,t)}if(0<el.length){Co(el[0],t);for(var n=1;n<el.length;n++){var i=el[n];i.blockedOn===t&&(i.blockedOn=null)}}for(_r!==null&&Co(_r,t),vr!==null&&Co(vr,t),yr!==null&&Co(yr,t),fa.forEach(e),da.forEach(e),n=0;n<dr.length;n++)i=dr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)N_(n),n.blockedOn===null&&dr.shift()}var $s=Zi.ReactCurrentBatchConfig,du=!0;function rM(t,e,n,i){var r=lt,s=$s.transition;$s.transition=null;try{lt=1,Jh(t,e,n,i)}finally{lt=r,$s.transition=s}}function sM(t,e,n,i){var r=lt,s=$s.transition;$s.transition=null;try{lt=4,Jh(t,e,n,i)}finally{lt=r,$s.transition=s}}function Jh(t,e,n,i){if(du){var r=id(t,e,n,i);if(r===null)Rc(t,e,i,hu,n),km(t,i);else if(nM(r,t,e,n,i))i.stopPropagation();else if(km(t,i),e&4&&-1<tM.indexOf(t)){for(;r!==null;){var s=Ua(r);if(s!==null&&P_(s),s=id(t,e,n,i),s===null&&Rc(t,e,i,hu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Rc(t,e,i,null,n)}}var hu=null;function id(t,e,n,i){if(hu=null,t=Yh(i),t=$r(t),t!==null)if(e=fs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=E_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hu=t,null}function k_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XE()){case $h:return 1;case A_:return 4;case cu:case qE:return 16;case C_:return 536870912;default:return 16}default:return 16}}var mr=null,Qh=null,Vl=null;function F_(){if(Vl)return Vl;var t,e=Qh,n=e.length,i,r="value"in mr?mr.value:mr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Vl=r.slice(t,1<i?1-i:void 0)}function Gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function Um(){return!1}function Fn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tl:Um,this.isPropagationStopped=Um,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),e}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ep=Fn(go),Fa=At({},go,{view:0,detail:0}),oM=Fn(Fa),yc,Sc,bo,Hu=At({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bo&&(bo&&t.type==="mousemove"?(yc=t.screenX-bo.screenX,Sc=t.screenY-bo.screenY):Sc=yc=0,bo=t),yc)},movementY:function(t){return"movementY"in t?t.movementY:Sc}}),Om=Fn(Hu),aM=At({},Hu,{dataTransfer:0}),lM=Fn(aM),uM=At({},Fa,{relatedTarget:0}),Ec=Fn(uM),cM=At({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),fM=Fn(cM),dM=At({},go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hM=Fn(dM),pM=At({},go,{data:0}),zm=Fn(pM),mM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _M(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=xM[t])?!!e[t]:!1}function tp(){return _M}var vM=At({},Fa,{key:function(t){if(t.key){var e=mM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tp,charCode:function(t){return t.type==="keypress"?Gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yM=Fn(vM),SM=At({},Hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bm=Fn(SM),EM=At({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tp}),MM=Fn(EM),wM=At({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),TM=Fn(wM),AM=At({},Hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),CM=Fn(AM),bM=[9,13,27,32],np=ji&&"CompositionEvent"in window,Ko=null;ji&&"documentMode"in document&&(Ko=document.documentMode);var RM=ji&&"TextEvent"in window&&!Ko,U_=ji&&(!np||Ko&&8<Ko&&11>=Ko),Hm=" ",Vm=!1;function O_(t,e){switch(t){case"keyup":return bM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function z_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fs=!1;function PM(t,e){switch(t){case"compositionend":return z_(e);case"keypress":return e.which!==32?null:(Vm=!0,Hm);case"textInput":return t=e.data,t===Hm&&Vm?null:t;default:return null}}function IM(t,e){if(Fs)return t==="compositionend"||!np&&O_(t,e)?(t=F_(),Vl=Qh=mr=null,Fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return U_&&e.locale!=="ko"?null:e.data;default:return null}}var LM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!LM[t.type]:e==="textarea"}function B_(t,e,n,i){x_(i),e=pu(e,"onChange"),0<e.length&&(n=new ep("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Zo=null,pa=null;function DM(t){Z_(t,0)}function Vu(t){var e=zs(t);if(c_(e))return t}function NM(t,e){if(t==="change")return e}var H_=!1;if(ji){var Mc;if(ji){var wc="oninput"in document;if(!wc){var Wm=document.createElement("div");Wm.setAttribute("oninput","return;"),wc=typeof Wm.oninput=="function"}Mc=wc}else Mc=!1;H_=Mc&&(!document.documentMode||9<document.documentMode)}function jm(){Zo&&(Zo.detachEvent("onpropertychange",V_),pa=Zo=null)}function V_(t){if(t.propertyName==="value"&&Vu(pa)){var e=[];B_(e,pa,t,Yh(t)),S_(DM,e)}}function kM(t,e,n){t==="focusin"?(jm(),Zo=e,pa=n,Zo.attachEvent("onpropertychange",V_)):t==="focusout"&&jm()}function FM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vu(pa)}function UM(t,e){if(t==="click")return Vu(e)}function OM(t,e){if(t==="input"||t==="change")return Vu(e)}function zM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ci=typeof Object.is=="function"?Object.is:zM;function ma(t,e){if(ci(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!zf.call(e,r)||!ci(t[r],e[r]))return!1}return!0}function Xm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qm(t,e){var n=Xm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xm(n)}}function G_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?G_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function W_(){for(var t=window,e=au();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=au(t.document)}return e}function ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function BM(t){var e=W_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&G_(n.ownerDocument.documentElement,n)){if(i!==null&&ip(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=qm(n,s);var o=qm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var HM=ji&&"documentMode"in document&&11>=document.documentMode,Us=null,rd=null,Jo=null,sd=!1;function Ym(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sd||Us==null||Us!==au(i)||(i=Us,"selectionStart"in i&&ip(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Jo&&ma(Jo,i)||(Jo=i,i=pu(rd,"onSelect"),0<i.length&&(e=new ep("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Us)))}function nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},Tc={},j_={};ji&&(j_=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Gu(t){if(Tc[t])return Tc[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in j_)return Tc[t]=e[n];return t}var X_=Gu("animationend"),q_=Gu("animationiteration"),Y_=Gu("animationstart"),$_=Gu("transitionend"),K_=new Map,$m="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(t,e){K_.set(t,e),cs(e,[t])}for(var Ac=0;Ac<$m.length;Ac++){var Cc=$m[Ac],VM=Cc.toLowerCase(),GM=Cc[0].toUpperCase()+Cc.slice(1);Pr(VM,"on"+GM)}Pr(X_,"onAnimationEnd");Pr(q_,"onAnimationIteration");Pr(Y_,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr($_,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function Km(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,VE(i,e,void 0,t),t.currentTarget=null}function Z_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Km(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Km(r,a,u),s=l}}}if(uu)throw t=ed,uu=!1,ed=null,t}function _t(t,e){var n=e[cd];n===void 0&&(n=e[cd]=new Set);var i=t+"__bubble";n.has(i)||(J_(e,t,2,!1),n.add(i))}function bc(t,e,n){var i=0;e&&(i|=4),J_(n,t,i,e)}var il="_reactListening"+Math.random().toString(36).slice(2);function ga(t){if(!t[il]){t[il]=!0,s_.forEach(function(n){n!=="selectionchange"&&(WM.has(n)||bc(n,!1,t),bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[il]||(e[il]=!0,bc("selectionchange",!1,e))}}function J_(t,e,n,i){switch(k_(e)){case 1:var r=rM;break;case 4:r=sM;break;default:r=Jh}n=r.bind(null,e,n,t),r=void 0,!Qf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Rc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=$r(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}S_(function(){var u=s,f=Yh(n),c=[];e:{var d=K_.get(t);if(d!==void 0){var h=ep,m=t;switch(t){case"keypress":if(Gl(n)===0)break e;case"keydown":case"keyup":h=yM;break;case"focusin":m="focus",h=Ec;break;case"focusout":m="blur",h=Ec;break;case"beforeblur":case"afterblur":h=Ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=lM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=MM;break;case X_:case q_:case Y_:h=fM;break;case $_:h=TM;break;case"scroll":h=oM;break;case"wheel":h=CM;break;case"copy":case"cut":case"paste":h=hM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Bm}var v=(e&4)!==0,x=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var g=u,_;g!==null;){_=g;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,p!==null&&(E=ca(g,p),E!=null&&v.push(xa(g,E,_)))),x)break;g=g.return}0<v.length&&(d=new h(d,m,null,n,f),c.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",d&&n!==Zf&&(m=n.relatedTarget||n.fromElement)&&($r(m)||m[Xi]))break e;if((h||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?$r(m):null,m!==null&&(x=fs(m),m!==x||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(v=Om,E="onMouseLeave",p="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=Bm,E="onPointerLeave",p="onPointerEnter",g="pointer"),x=h==null?d:zs(h),_=m==null?d:zs(m),d=new v(E,g+"leave",h,n,f),d.target=x,d.relatedTarget=_,E=null,$r(f)===u&&(v=new v(p,g+"enter",m,n,f),v.target=_,v.relatedTarget=x,E=v),x=E,h&&m)t:{for(v=h,p=m,g=0,_=v;_;_=ms(_))g++;for(_=0,E=p;E;E=ms(E))_++;for(;0<g-_;)v=ms(v),g--;for(;0<_-g;)p=ms(p),_--;for(;g--;){if(v===p||p!==null&&v===p.alternate)break t;v=ms(v),p=ms(p)}v=null}else v=null;h!==null&&Zm(c,d,h,v,!1),m!==null&&x!==null&&Zm(c,x,m,v,!0)}}e:{if(d=u?zs(u):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var C=NM;else if(Gm(d))if(H_)C=OM;else{C=FM;var M=kM}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=UM);if(C&&(C=C(t,u))){B_(c,C,n,f);break e}M&&M(t,d,u),t==="focusout"&&(M=d._wrapperState)&&M.controlled&&d.type==="number"&&Xf(d,"number",d.value)}switch(M=u?zs(u):window,t){case"focusin":(Gm(M)||M.contentEditable==="true")&&(Us=M,rd=u,Jo=null);break;case"focusout":Jo=rd=Us=null;break;case"mousedown":sd=!0;break;case"contextmenu":case"mouseup":case"dragend":sd=!1,Ym(c,n,f);break;case"selectionchange":if(HM)break;case"keydown":case"keyup":Ym(c,n,f)}var b;if(np)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Fs?O_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(U_&&n.locale!=="ko"&&(Fs||y!=="onCompositionStart"?y==="onCompositionEnd"&&Fs&&(b=F_()):(mr=f,Qh="value"in mr?mr.value:mr.textContent,Fs=!0)),M=pu(u,y),0<M.length&&(y=new zm(y,t,null,n,f),c.push({event:y,listeners:M}),b?y.data=b:(b=z_(n),b!==null&&(y.data=b)))),(b=RM?PM(t,n):IM(t,n))&&(u=pu(u,"onBeforeInput"),0<u.length&&(f=new zm("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=b))}Z_(c,e)})}function xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ca(t,n),s!=null&&i.unshift(xa(t,s,r)),s=ca(t,e),s!=null&&i.push(xa(t,s,r))),t=t.return}return i}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ca(n,s),l!=null&&o.unshift(xa(n,l,a))):r||(l=ca(n,s),l!=null&&o.push(xa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var jM=/\r\n?/g,XM=/\u0000|\uFFFD/g;function Jm(t){return(typeof t=="string"?t:""+t).replace(jM,`
`).replace(XM,"")}function rl(t,e,n){if(e=Jm(e),Jm(t)!==e&&n)throw Error(le(425))}function mu(){}var od=null,ad=null;function ld(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ud=typeof setTimeout=="function"?setTimeout:void 0,qM=typeof clearTimeout=="function"?clearTimeout:void 0,Qm=typeof Promise=="function"?Promise:void 0,YM=typeof queueMicrotask=="function"?queueMicrotask:typeof Qm<"u"?function(t){return Qm.resolve(null).then(t).catch($M)}:ud;function $M(t){setTimeout(function(){throw t})}function Pc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ha(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ha(e)}function Sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function eg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xo=Math.random().toString(36).slice(2),vi="__reactFiber$"+xo,_a="__reactProps$"+xo,Xi="__reactContainer$"+xo,cd="__reactEvents$"+xo,KM="__reactListeners$"+xo,ZM="__reactHandles$"+xo;function $r(t){var e=t[vi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xi]||n[vi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=eg(t);t!==null;){if(n=t[vi])return n;t=eg(t)}return e}t=n,n=t.parentNode}return null}function Ua(t){return t=t[vi]||t[Xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(le(33))}function Wu(t){return t[_a]||null}var fd=[],Bs=-1;function Ir(t){return{current:t}}function vt(t){0>Bs||(t.current=fd[Bs],fd[Bs]=null,Bs--)}function xt(t,e){Bs++,fd[Bs]=t.current,t.current=e}var br={},ln=Ir(br),Sn=Ir(!1),ns=br;function no(t,e){var n=t.type.contextTypes;if(!n)return br;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function En(t){return t=t.childContextTypes,t!=null}function gu(){vt(Sn),vt(ln)}function tg(t,e,n){if(ln.current!==br)throw Error(le(168));xt(ln,e),xt(Sn,n)}function Q_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,kE(t)||"Unknown",r));return At({},n,i)}function xu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,ns=ln.current,xt(ln,t),xt(Sn,Sn.current),!0}function ng(t,e,n){var i=t.stateNode;if(!i)throw Error(le(169));n?(t=Q_(t,e,ns),i.__reactInternalMemoizedMergedChildContext=t,vt(Sn),vt(ln),xt(ln,t)):vt(Sn),xt(Sn,n)}var Oi=null,ju=!1,Ic=!1;function ev(t){Oi===null?Oi=[t]:Oi.push(t)}function JM(t){ju=!0,ev(t)}function Lr(){if(!Ic&&Oi!==null){Ic=!0;var t=0,e=lt;try{var n=Oi;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Oi=null,ju=!1}catch(r){throw Oi!==null&&(Oi=Oi.slice(t+1)),T_($h,Lr),r}finally{lt=e,Ic=!1}}return null}var Hs=[],Vs=0,_u=null,vu=0,zn=[],Bn=0,is=null,zi=1,Bi="";function Gr(t,e){Hs[Vs++]=vu,Hs[Vs++]=_u,_u=t,vu=e}function tv(t,e,n){zn[Bn++]=zi,zn[Bn++]=Bi,zn[Bn++]=is,is=t;var i=zi;t=Bi;var r=32-oi(i)-1;i&=~(1<<r),n+=1;var s=32-oi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,zi=1<<32-oi(e)+r|n<<r|i,Bi=s+t}else zi=1<<s|n<<r|i,Bi=t}function rp(t){t.return!==null&&(Gr(t,1),tv(t,1,0))}function sp(t){for(;t===_u;)_u=Hs[--Vs],Hs[Vs]=null,vu=Hs[--Vs],Hs[Vs]=null;for(;t===is;)is=zn[--Bn],zn[Bn]=null,Bi=zn[--Bn],zn[Bn]=null,zi=zn[--Bn],zn[Bn]=null}var Ln=null,In=null,St=!1,ii=null;function nv(t,e){var n=Gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ig(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ln=t,In=Sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ln=t,In=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=is!==null?{id:zi,overflow:Bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ln=t,In=null,!0):!1;default:return!1}}function dd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hd(t){if(St){var e=In;if(e){var n=e;if(!ig(t,e)){if(dd(t))throw Error(le(418));e=Sr(n.nextSibling);var i=Ln;e&&ig(t,e)?nv(i,n):(t.flags=t.flags&-4097|2,St=!1,Ln=t)}}else{if(dd(t))throw Error(le(418));t.flags=t.flags&-4097|2,St=!1,Ln=t}}}function rg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ln=t}function sl(t){if(t!==Ln)return!1;if(!St)return rg(t),St=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ld(t.type,t.memoizedProps)),e&&(e=In)){if(dd(t))throw iv(),Error(le(418));for(;e;)nv(t,e),e=Sr(e.nextSibling)}if(rg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(le(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){In=Sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}In=null}}else In=Ln?Sr(t.stateNode.nextSibling):null;return!0}function iv(){for(var t=In;t;)t=Sr(t.nextSibling)}function io(){In=Ln=null,St=!1}function op(t){ii===null?ii=[t]:ii.push(t)}var QM=Zi.ReactCurrentBatchConfig;function Ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(le(309));var i=n.stateNode}if(!i)throw Error(le(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(le(284));if(!n._owner)throw Error(le(290,t))}return t}function ol(t,e){throw t=Object.prototype.toString.call(e),Error(le(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sg(t){var e=t._init;return e(t._payload)}function rv(t){function e(p,g){if(t){var _=p.deletions;_===null?(p.deletions=[g],p.flags|=16):_.push(g)}}function n(p,g){if(!t)return null;for(;g!==null;)e(p,g),g=g.sibling;return null}function i(p,g){for(p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function r(p,g){return p=Tr(p,g),p.index=0,p.sibling=null,p}function s(p,g,_){return p.index=_,t?(_=p.alternate,_!==null?(_=_.index,_<g?(p.flags|=2,g):_):(p.flags|=2,g)):(p.flags|=1048576,g)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,g,_,E){return g===null||g.tag!==6?(g=Oc(_,p.mode,E),g.return=p,g):(g=r(g,_),g.return=p,g)}function l(p,g,_,E){var C=_.type;return C===ks?f(p,g,_.props.children,E,_.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ur&&sg(C)===g.type)?(E=r(g,_.props),E.ref=Ro(p,g,_),E.return=p,E):(E=Kl(_.type,_.key,_.props,null,p.mode,E),E.ref=Ro(p,g,_),E.return=p,E)}function u(p,g,_,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=zc(_,p.mode,E),g.return=p,g):(g=r(g,_.children||[]),g.return=p,g)}function f(p,g,_,E,C){return g===null||g.tag!==7?(g=ts(_,p.mode,E,C),g.return=p,g):(g=r(g,_),g.return=p,g)}function c(p,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Oc(""+g,p.mode,_),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case $a:return _=Kl(g.type,g.key,g.props,null,p.mode,_),_.ref=Ro(p,null,g),_.return=p,_;case Ns:return g=zc(g,p.mode,_),g.return=p,g;case ur:var E=g._init;return c(p,E(g._payload),_)}if(Vo(g)||wo(g))return g=ts(g,p.mode,_,null),g.return=p,g;ol(p,g)}return null}function d(p,g,_,E){var C=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(p,g,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case $a:return _.key===C?l(p,g,_,E):null;case Ns:return _.key===C?u(p,g,_,E):null;case ur:return C=_._init,d(p,g,C(_._payload),E)}if(Vo(_)||wo(_))return C!==null?null:f(p,g,_,E,null);ol(p,_)}return null}function h(p,g,_,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(_)||null,a(g,p,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case $a:return p=p.get(E.key===null?_:E.key)||null,l(g,p,E,C);case Ns:return p=p.get(E.key===null?_:E.key)||null,u(g,p,E,C);case ur:var M=E._init;return h(p,g,_,M(E._payload),C)}if(Vo(E)||wo(E))return p=p.get(_)||null,f(g,p,E,C,null);ol(g,E)}return null}function m(p,g,_,E){for(var C=null,M=null,b=g,y=g=0,T=null;b!==null&&y<_.length;y++){b.index>y?(T=b,b=null):T=b.sibling;var R=d(p,b,_[y],E);if(R===null){b===null&&(b=T);break}t&&b&&R.alternate===null&&e(p,b),g=s(R,g,y),M===null?C=R:M.sibling=R,M=R,b=T}if(y===_.length)return n(p,b),St&&Gr(p,y),C;if(b===null){for(;y<_.length;y++)b=c(p,_[y],E),b!==null&&(g=s(b,g,y),M===null?C=b:M.sibling=b,M=b);return St&&Gr(p,y),C}for(b=i(p,b);y<_.length;y++)T=h(b,p,y,_[y],E),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?y:T.key),g=s(T,g,y),M===null?C=T:M.sibling=T,M=T);return t&&b.forEach(function(P){return e(p,P)}),St&&Gr(p,y),C}function v(p,g,_,E){var C=wo(_);if(typeof C!="function")throw Error(le(150));if(_=C.call(_),_==null)throw Error(le(151));for(var M=C=null,b=g,y=g=0,T=null,R=_.next();b!==null&&!R.done;y++,R=_.next()){b.index>y?(T=b,b=null):T=b.sibling;var P=d(p,b,R.value,E);if(P===null){b===null&&(b=T);break}t&&b&&P.alternate===null&&e(p,b),g=s(P,g,y),M===null?C=P:M.sibling=P,M=P,b=T}if(R.done)return n(p,b),St&&Gr(p,y),C;if(b===null){for(;!R.done;y++,R=_.next())R=c(p,R.value,E),R!==null&&(g=s(R,g,y),M===null?C=R:M.sibling=R,M=R);return St&&Gr(p,y),C}for(b=i(p,b);!R.done;y++,R=_.next())R=h(b,p,y,R.value,E),R!==null&&(t&&R.alternate!==null&&b.delete(R.key===null?y:R.key),g=s(R,g,y),M===null?C=R:M.sibling=R,M=R);return t&&b.forEach(function(F){return e(p,F)}),St&&Gr(p,y),C}function x(p,g,_,E){if(typeof _=="object"&&_!==null&&_.type===ks&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case $a:e:{for(var C=_.key,M=g;M!==null;){if(M.key===C){if(C=_.type,C===ks){if(M.tag===7){n(p,M.sibling),g=r(M,_.props.children),g.return=p,p=g;break e}}else if(M.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ur&&sg(C)===M.type){n(p,M.sibling),g=r(M,_.props),g.ref=Ro(p,M,_),g.return=p,p=g;break e}n(p,M);break}else e(p,M);M=M.sibling}_.type===ks?(g=ts(_.props.children,p.mode,E,_.key),g.return=p,p=g):(E=Kl(_.type,_.key,_.props,null,p.mode,E),E.ref=Ro(p,g,_),E.return=p,p=E)}return o(p);case Ns:e:{for(M=_.key;g!==null;){if(g.key===M)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(p,g.sibling),g=r(g,_.children||[]),g.return=p,p=g;break e}else{n(p,g);break}else e(p,g);g=g.sibling}g=zc(_,p.mode,E),g.return=p,p=g}return o(p);case ur:return M=_._init,x(p,g,M(_._payload),E)}if(Vo(_))return m(p,g,_,E);if(wo(_))return v(p,g,_,E);ol(p,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(p,g.sibling),g=r(g,_),g.return=p,p=g):(n(p,g),g=Oc(_,p.mode,E),g.return=p,p=g),o(p)):n(p,g)}return x}var ro=rv(!0),sv=rv(!1),yu=Ir(null),Su=null,Gs=null,ap=null;function lp(){ap=Gs=Su=null}function up(t){var e=yu.current;vt(yu),t._currentValue=e}function pd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ks(t,e){Su=t,ap=Gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yn=!0),t.firstContext=null)}function qn(t){var e=t._currentValue;if(ap!==t)if(t={context:t,memoizedValue:e,next:null},Gs===null){if(Su===null)throw Error(le(308));Gs=t,Su.dependencies={lanes:0,firstContext:t}}else Gs=Gs.next=t;return e}var Kr=null;function cp(t){Kr===null?Kr=[t]:Kr.push(t)}function ov(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,cp(e)):(n.next=r.next,r.next=n),e.interleaved=n,qi(t,i)}function qi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cr=!1;function fp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function av(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,qi(t,n)}return r=i.interleaved,r===null?(e.next=e,cp(i)):(e.next=r.next,r.next=e),i.interleaved=e,qi(t,n)}function Wl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kh(t,n)}}function og(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Eu(t,e,n,i){var r=t.updateQueue;cr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var c=r.baseState;o=0,f=u=l=null,a=s;do{var d=a.lane,h=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,v=a;switch(d=e,h=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){c=m.call(h,c,d);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,d=typeof m=="function"?m.call(h,c,d):m,d==null)break e;c=At({},c,d);break e;case 2:cr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else h={eventTime:h,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=h,l=c):f=f.next=h,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=c),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ss|=o,t.lanes=o,t.memoizedState=c}}function ag(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var Oa={},wi=Ir(Oa),va=Ir(Oa),ya=Ir(Oa);function Zr(t){if(t===Oa)throw Error(le(174));return t}function dp(t,e){switch(xt(ya,e),xt(va,t),xt(wi,Oa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yf(e,t)}vt(wi),xt(wi,e)}function so(){vt(wi),vt(va),vt(ya)}function lv(t){Zr(ya.current);var e=Zr(wi.current),n=Yf(e,t.type);e!==n&&(xt(va,t),xt(wi,n))}function hp(t){va.current===t&&(vt(wi),vt(va))}var Mt=Ir(0);function Mu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lc=[];function pp(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var jl=Zi.ReactCurrentDispatcher,Dc=Zi.ReactCurrentBatchConfig,rs=0,wt=null,Ft=null,Vt=null,wu=!1,Qo=!1,Sa=0,e1=0;function Qt(){throw Error(le(321))}function mp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ci(t[n],e[n]))return!1;return!0}function gp(t,e,n,i,r,s){if(rs=s,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jl.current=t===null||t.memoizedState===null?r1:s1,t=n(i,r),Qo){s=0;do{if(Qo=!1,Sa=0,25<=s)throw Error(le(301));s+=1,Vt=Ft=null,e.updateQueue=null,jl.current=o1,t=n(i,r)}while(Qo)}if(jl.current=Tu,e=Ft!==null&&Ft.next!==null,rs=0,Vt=Ft=wt=null,wu=!1,e)throw Error(le(300));return t}function xp(){var t=Sa!==0;return Sa=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?wt.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function Yn(){if(Ft===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var e=Vt===null?wt.memoizedState:Vt.next;if(e!==null)Vt=e,Ft=t;else{if(t===null)throw Error(le(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Vt===null?wt.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function Ea(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=Yn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=Ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((rs&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=i):l=l.next=c,wt.lanes|=f,ss|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ci(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,wt.lanes|=s,ss|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kc(t){var e=Yn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ci(s,e.memoizedState)||(yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function uv(){}function cv(t,e){var n=wt,i=Yn(),r=e(),s=!ci(i.memoizedState,r);if(s&&(i.memoizedState=r,yn=!0),i=i.queue,_p(hv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(n.flags|=2048,Ma(9,dv.bind(null,n,i,r,e),void 0,null),Gt===null)throw Error(le(349));rs&30||fv(n,e,r)}return r}function fv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function dv(t,e,n,i){e.value=n,e.getSnapshot=i,pv(e)&&mv(t)}function hv(t,e,n){return n(function(){pv(e)&&mv(t)})}function pv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ci(t,n)}catch{return!0}}function mv(t){var e=qi(t,1);e!==null&&ai(e,t,1,-1)}function lg(t){var e=gi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},e.queue=t,t=t.dispatch=i1.bind(null,wt,t),[e.memoizedState,t]}function Ma(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function gv(){return Yn().memoizedState}function Xl(t,e,n,i){var r=gi();wt.flags|=t,r.memoizedState=Ma(1|e,n,void 0,i===void 0?null:i)}function Xu(t,e,n,i){var r=Yn();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var o=Ft.memoizedState;if(s=o.destroy,i!==null&&mp(i,o.deps)){r.memoizedState=Ma(e,n,s,i);return}}wt.flags|=t,r.memoizedState=Ma(1|e,n,s,i)}function ug(t,e){return Xl(8390656,8,t,e)}function _p(t,e){return Xu(2048,8,t,e)}function xv(t,e){return Xu(4,2,t,e)}function _v(t,e){return Xu(4,4,t,e)}function vv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yv(t,e,n){return n=n!=null?n.concat([t]):null,Xu(4,4,vv.bind(null,e,t),n)}function vp(){}function Sv(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&mp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ev(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&mp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Mv(t,e,n){return rs&21?(ci(n,e)||(n=b_(),wt.lanes|=n,ss|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=n)}function t1(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=Dc.transition;Dc.transition={};try{t(!1),e()}finally{lt=n,Dc.transition=i}}function wv(){return Yn().memoizedState}function n1(t,e,n){var i=wr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Tv(t))Av(e,n);else if(n=ov(t,e,n,i),n!==null){var r=hn();ai(n,t,i,r),Cv(n,e,i)}}function i1(t,e,n){var i=wr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tv(t))Av(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ci(a,o)){var l=e.interleaved;l===null?(r.next=r,cp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ov(t,e,r,i),n!==null&&(r=hn(),ai(n,t,i,r),Cv(n,e,i))}}function Tv(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function Av(t,e){Qo=wu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Cv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kh(t,n)}}var Tu={readContext:qn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},r1={readContext:qn,useCallback:function(t,e){return gi().memoizedState=[t,e===void 0?null:e],t},useContext:qn,useEffect:ug,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4194308,4,vv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xl(4,2,t,e)},useMemo:function(t,e){var n=gi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=gi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=n1.bind(null,wt,t),[i.memoizedState,t]},useRef:function(t){var e=gi();return t={current:t},e.memoizedState=t},useState:lg,useDebugValue:vp,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=lg(!1),e=t[0];return t=t1.bind(null,t[1]),gi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=wt,r=gi();if(St){if(n===void 0)throw Error(le(407));n=n()}else{if(n=e(),Gt===null)throw Error(le(349));rs&30||fv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ug(hv.bind(null,i,s,t),[t]),i.flags|=2048,Ma(9,dv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=gi(),e=Gt.identifierPrefix;if(St){var n=Bi,i=zi;n=(i&~(1<<32-oi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=e1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},s1={readContext:qn,useCallback:Sv,useContext:qn,useEffect:_p,useImperativeHandle:yv,useInsertionEffect:xv,useLayoutEffect:_v,useMemo:Ev,useReducer:Nc,useRef:gv,useState:function(){return Nc(Ea)},useDebugValue:vp,useDeferredValue:function(t){var e=Yn();return Mv(e,Ft.memoizedState,t)},useTransition:function(){var t=Nc(Ea)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:uv,useSyncExternalStore:cv,useId:wv,unstable_isNewReconciler:!1},o1={readContext:qn,useCallback:Sv,useContext:qn,useEffect:_p,useImperativeHandle:yv,useInsertionEffect:xv,useLayoutEffect:_v,useMemo:Ev,useReducer:kc,useRef:gv,useState:function(){return kc(Ea)},useDebugValue:vp,useDeferredValue:function(t){var e=Yn();return Ft===null?e.memoizedState=t:Mv(e,Ft.memoizedState,t)},useTransition:function(){var t=kc(Ea)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:uv,useSyncExternalStore:cv,useId:wv,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=At({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function md(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qu={isMounted:function(t){return(t=t._reactInternals)?fs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=hn(),r=wr(t),s=Vi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,r),e!==null&&(ai(e,t,r,i),Wl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=hn(),r=wr(t),s=Vi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,r),e!==null&&(ai(e,t,r,i),Wl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),i=wr(t),r=Vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Er(t,r,i),e!==null&&(ai(e,t,i,n),Wl(e,t,i))}};function cg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ma(n,i)||!ma(r,s):!0}function bv(t,e,n){var i=!1,r=br,s=e.contextType;return typeof s=="object"&&s!==null?s=qn(s):(r=En(e)?ns:ln.current,i=e.contextTypes,s=(i=i!=null)?no(t,r):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function fg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&qu.enqueueReplaceState(e,e.state,null)}function gd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},fp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=qn(s):(s=En(e)?ns:ln.current,r.context=no(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(md(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&qu.enqueueReplaceState(r,r.state,null),Eu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function oo(t,e){try{var n="",i=e;do n+=NE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Fc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var a1=typeof WeakMap=="function"?WeakMap:Map;function Rv(t,e,n){n=Vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Cu||(Cu=!0,Cd=i),xd(t,e)},n}function Pv(t,e,n){n=Vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xd(t,e),typeof i!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new a1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=S1.bind(null,t,e,n),e.then(t,t))}function hg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vi(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var l1=Zi.ReactCurrentOwner,yn=!1;function fn(t,e,n,i){e.child=t===null?sv(e,null,n,i):ro(e,t.child,n,i)}function mg(t,e,n,i,r){n=n.render;var s=e.ref;return Ks(e,r),i=gp(t,e,n,i,s,r),n=xp(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(St&&n&&rp(e),e.flags|=1,fn(t,e,i,r),e.child)}function gg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Cp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Iv(t,e,s,i,r)):(t=Kl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ma,n(o,i)&&t.ref===e.ref)return Yi(t,e,r)}return e.flags|=1,t=Tr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Iv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ma(s,i)&&t.ref===e.ref)if(yn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(yn=!0);else return e.lanes=t.lanes,Yi(t,e,r)}return _d(t,e,n,i,r)}function Lv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(js,Rn),Rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xt(js,Rn),Rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,xt(js,Rn),Rn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,xt(js,Rn),Rn|=i;return fn(t,e,r,n),e.child}function Dv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _d(t,e,n,i,r){var s=En(n)?ns:ln.current;return s=no(e,s),Ks(e,r),n=gp(t,e,n,i,s,r),i=xp(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(St&&i&&rp(e),e.flags|=1,fn(t,e,n,r),e.child)}function xg(t,e,n,i,r){if(En(n)){var s=!0;xu(e)}else s=!1;if(Ks(e,r),e.stateNode===null)ql(t,e),bv(e,n,i),gd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=qn(u):(u=En(n)?ns:ln.current,u=no(e,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&fg(e,o,i,u),cr=!1;var d=e.memoizedState;o.state=d,Eu(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Sn.current||cr?(typeof f=="function"&&(md(e,n,f,i),l=e.memoizedState),(a=cr||cg(e,n,a,i,d,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,av(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:ti(e.type,a),o.props=u,c=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=En(n)?ns:ln.current,l=no(e,l));var h=n.getDerivedStateFromProps;(f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||d!==l)&&fg(e,o,i,l),cr=!1,d=e.memoizedState,o.state=d,Eu(e,i,o,r);var m=e.memoizedState;a!==c||d!==m||Sn.current||cr?(typeof h=="function"&&(md(e,n,h,i),m=e.memoizedState),(u=cr||cg(e,n,u,i,d,m,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return vd(t,e,n,i,s,r)}function vd(t,e,n,i,r,s){Dv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ng(e,n,!1),Yi(t,e,s);i=e.stateNode,l1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ro(e,t.child,null,s),e.child=ro(e,null,a,s)):fn(t,e,a,s),e.memoizedState=i.state,r&&ng(e,n,!0),e.child}function Nv(t){var e=t.stateNode;e.pendingContext?tg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tg(t,e.context,!1),dp(t,e.containerInfo)}function _g(t,e,n,i,r){return io(),op(r),e.flags|=256,fn(t,e,n,i),e.child}var yd={dehydrated:null,treeContext:null,retryLane:0};function Sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function kv(t,e,n){var i=e.pendingProps,r=Mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),xt(Mt,r&1),t===null)return hd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ku(o,i,0,null),t=ts(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sd(n),e.memoizedState=yd,t):yp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return u1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Tr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Tr(a,s):(s=ts(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Sd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=yd,i}return s=t.child,t=s.sibling,i=Tr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function yp(t,e){return e=Ku({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function al(t,e,n,i){return i!==null&&op(i),ro(e,t.child,null,n),t=yp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function u1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Fc(Error(le(422))),al(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ku({mode:"visible",children:i.children},r,0,null),s=ts(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ro(e,t.child,null,o),e.child.memoizedState=Sd(o),e.memoizedState=yd,s);if(!(e.mode&1))return al(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(le(419)),i=Fc(s,i,void 0),al(t,e,o,i)}if(a=(o&t.childLanes)!==0,yn||a){if(i=Gt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,qi(t,r),ai(i,t,r,-1))}return Ap(),i=Fc(Error(le(421))),al(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=E1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,In=Sr(r.nextSibling),Ln=e,St=!0,ii=null,t!==null&&(zn[Bn++]=zi,zn[Bn++]=Bi,zn[Bn++]=is,zi=t.id,Bi=t.overflow,is=e),e=yp(e,i.children),e.flags|=4096,e)}function vg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),pd(t.return,e,n)}function Uc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Fv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(fn(t,e,i.children,n),i=Mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vg(t,n,e);else if(t.tag===19)vg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(xt(Mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Mu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Uc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Mu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Uc(e,!0,n,null,s);break;case"together":Uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ql(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ss|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(le(153));if(e.child!==null){for(t=e.child,n=Tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function c1(t,e,n){switch(e.tag){case 3:Nv(e),io();break;case 5:lv(e);break;case 1:En(e.type)&&xu(e);break;case 4:dp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(yu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(Mt,Mt.current&1),e.flags|=128,null):n&e.child.childLanes?kv(t,e,n):(xt(Mt,Mt.current&1),t=Yi(t,e,n),t!==null?t.sibling:null);xt(Mt,Mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Fv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(Mt,Mt.current),i)break;return null;case 22:case 23:return e.lanes=0,Lv(t,e,n)}return Yi(t,e,n)}var Uv,Ed,Ov,zv;Uv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ed=function(){};Ov=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Zr(wi.current);var s=null;switch(n){case"input":r=Wf(t,r),i=Wf(t,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=qf(t,r),i=qf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=mu)}$f(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(la.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(la.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&_t("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};zv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Po(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function f1(t,e,n){var i=e.pendingProps;switch(sp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return En(e.type)&&gu(),en(e),null;case 3:return i=e.stateNode,so(),vt(Sn),vt(ln),pp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(Pd(ii),ii=null))),Ed(t,e),en(e),null;case 5:hp(e);var r=Zr(ya.current);if(n=e.type,t!==null&&e.stateNode!=null)Ov(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return en(e),null}if(t=Zr(wi.current),sl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[vi]=e,i[_a]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<Wo.length;r++)_t(Wo[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":bm(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":Pm(i,s),_t("invalid",i)}$f(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&rl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&rl(i.textContent,a,t),r=["children",""+a]):la.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_t("scroll",i)}switch(n){case"input":Ka(i),Rm(i,s,!0);break;case"textarea":Ka(i),Im(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=mu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=h_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[vi]=e,t[_a]=i,Uv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Kf(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<Wo.length;r++)_t(Wo[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":bm(t,i),r=Wf(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),_t("invalid",t);break;case"textarea":Pm(t,i),r=qf(t,i),_t("invalid",t);break;default:r=i}$f(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?g_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&p_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ua(t,l):typeof l=="number"&&ua(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(la.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&Wh(t,s,l,o))}switch(n){case"input":Ka(t),Rm(t,i,!1);break;case"textarea":Ka(t),Im(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Cr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=mu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)zv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(n=Zr(ya.current),Zr(wi.current),sl(e)){if(i=e.stateNode,n=e.memoizedProps,i[vi]=e,(s=i.nodeValue!==n)&&(t=Ln,t!==null))switch(t.tag){case 3:rl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&rl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[vi]=e,e.stateNode=i}return en(e),null;case 13:if(vt(Mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(St&&In!==null&&e.mode&1&&!(e.flags&128))iv(),io(),e.flags|=98560,s=!1;else if(s=sl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[vi]=e}else io(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else ii!==null&&(Pd(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Mt.current&1?Ut===0&&(Ut=3):Ap())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return so(),Ed(t,e),t===null&&ga(e.stateNode.containerInfo),en(e),null;case 10:return up(e.type._context),en(e),null;case 17:return En(e.type)&&gu(),en(e),null;case 19:if(vt(Mt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Po(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Mu(t),o!==null){for(e.flags|=128,Po(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xt(Mt,Mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&It()>ao&&(e.flags|=128,i=!0,Po(s,!1),e.lanes=4194304)}else{if(!i)if(t=Mu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!St)return en(e),null}else 2*It()-s.renderingStartTime>ao&&n!==1073741824&&(e.flags|=128,i=!0,Po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,n=Mt.current,xt(Mt,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return Tp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Rn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function d1(t,e){switch(sp(e),e.tag){case 1:return En(e.type)&&gu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return so(),vt(Sn),vt(ln),pp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hp(e),null;case 13:if(vt(Mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(le(340));io()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(Mt),null;case 4:return so(),null;case 10:return up(e.type._context),null;case 22:case 23:return Tp(),null;case 24:return null;default:return null}}var ll=!1,rn=!1,h1=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Ws(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function Md(t,e,n){try{n()}catch(i){bt(t,e,i)}}var yg=!1;function p1(t,e){if(od=du,t=W_(),ip(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,c=t,d=null;t:for(;;){for(var h;c!==n||r!==0&&c.nodeType!==3||(a=o+r),c!==s||i!==0&&c.nodeType!==3||(l=o+i),c.nodeType===3&&(o+=c.nodeValue.length),(h=c.firstChild)!==null;)d=c,c=h;for(;;){if(c===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++f===i&&(l=o),(h=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ad={focusedElem:t,selectionRange:n},du=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,x=m.memoizedState,p=e.stateNode,g=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:ti(e.type,v),x);p.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(E){bt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return m=yg,yg=!1,m}function ea(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Md(e,n,s)}r=r.next}while(r!==i)}}function Yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Bv(t){var e=t.alternate;e!==null&&(t.alternate=null,Bv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vi],delete e[_a],delete e[cd],delete e[KM],delete e[ZM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hv(t){return t.tag===5||t.tag===3||t.tag===4}function Sg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=mu));else if(i!==4&&(t=t.child,t!==null))for(Td(t,e,n),t=t.sibling;t!==null;)Td(t,e,n),t=t.sibling}function Ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ad(t,e,n),t=t.sibling;t!==null;)Ad(t,e,n),t=t.sibling}var Xt=null,ni=!1;function tr(t,e,n){for(n=n.child;n!==null;)Vv(t,e,n),n=n.sibling}function Vv(t,e,n){if(Mi&&typeof Mi.onCommitFiberUnmount=="function")try{Mi.onCommitFiberUnmount(Bu,n)}catch{}switch(n.tag){case 5:rn||Ws(n,e);case 6:var i=Xt,r=ni;Xt=null,tr(t,e,n),Xt=i,ni=r,Xt!==null&&(ni?(t=Xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xt.removeChild(n.stateNode));break;case 18:Xt!==null&&(ni?(t=Xt,n=n.stateNode,t.nodeType===8?Pc(t.parentNode,n):t.nodeType===1&&Pc(t,n),ha(t)):Pc(Xt,n.stateNode));break;case 4:i=Xt,r=ni,Xt=n.stateNode.containerInfo,ni=!0,tr(t,e,n),Xt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Md(n,e,o),r=r.next}while(r!==i)}tr(t,e,n);break;case 1:if(!rn&&(Ws(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){bt(n,e,a)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,tr(t,e,n),rn=i):tr(t,e,n);break;default:tr(t,e,n)}}function Eg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new h1),e.forEach(function(i){var r=M1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xt=a.stateNode,ni=!1;break e;case 3:Xt=a.stateNode.containerInfo,ni=!0;break e;case 4:Xt=a.stateNode.containerInfo,ni=!0;break e}a=a.return}if(Xt===null)throw Error(le(160));Vv(s,o,r),Xt=null,ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){bt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gv(e,t),e=e.sibling}function Gv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(e,t),hi(t),i&4){try{ea(3,t,t.return),Yu(3,t)}catch(v){bt(t,t.return,v)}try{ea(5,t,t.return)}catch(v){bt(t,t.return,v)}}break;case 1:Zn(e,t),hi(t),i&512&&n!==null&&Ws(n,n.return);break;case 5:if(Zn(e,t),hi(t),i&512&&n!==null&&Ws(n,n.return),t.flags&32){var r=t.stateNode;try{ua(r,"")}catch(v){bt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&f_(r,s),Kf(a,o);var u=Kf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],c=l[o+1];f==="style"?g_(r,c):f==="dangerouslySetInnerHTML"?p_(r,c):f==="children"?ua(r,c):Wh(r,f,c,u)}switch(a){case"input":jf(r,s);break;case"textarea":d_(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Xs(r,!!s.multiple,h,!1):d!==!!s.multiple&&(s.defaultValue!=null?Xs(r,!!s.multiple,s.defaultValue,!0):Xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[_a]=s}catch(v){bt(t,t.return,v)}}break;case 6:if(Zn(e,t),hi(t),i&4){if(t.stateNode===null)throw Error(le(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){bt(t,t.return,v)}}break;case 3:if(Zn(e,t),hi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ha(e.containerInfo)}catch(v){bt(t,t.return,v)}break;case 4:Zn(e,t),hi(t);break;case 13:Zn(e,t),hi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Mp=It())),i&4&&Eg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(u=rn)||f,Zn(e,t),rn=u):Zn(e,t),hi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(Ee=t,f=t.child;f!==null;){for(c=Ee=f;Ee!==null;){switch(d=Ee,h=d.child,d.tag){case 0:case 11:case 14:case 15:ea(4,d,d.return);break;case 1:Ws(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){bt(i,n,v)}}break;case 5:Ws(d,d.return);break;case 22:if(d.memoizedState!==null){wg(c);continue}}h!==null?(h.return=d,Ee=h):wg(c)}f=f.sibling}e:for(f=null,c=t;;){if(c.tag===5){if(f===null){f=c;try{r=c.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=m_("display",o))}catch(v){bt(t,t.return,v)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){bt(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Zn(e,t),hi(t),i&4&&Eg(t);break;case 21:break;default:Zn(e,t),hi(t)}}function hi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Hv(n)){var i=n;break e}n=n.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ua(r,""),i.flags&=-33);var s=Sg(t);Ad(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Sg(t);Td(t,a,o);break;default:throw Error(le(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function m1(t,e,n){Ee=t,Wv(t)}function Wv(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ll;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||rn;a=ll;var u=rn;if(ll=o,(rn=l)&&!u)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?Tg(r):l!==null?(l.return=o,Ee=l):Tg(r);for(;s!==null;)Ee=s,Wv(s),s=s.sibling;Ee=r,ll=a,rn=u}Mg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):Mg(t)}}function Mg(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||Yu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ag(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ag(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&ha(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}rn||e.flags&512&&wd(e)}catch(d){bt(e,e.return,d)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function wg(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Tg(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yu(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{wd(e)}catch(l){bt(e,s,l)}break;case 5:var o=e.return;try{wd(e)}catch(l){bt(e,o,l)}}}catch(l){bt(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var g1=Math.ceil,Au=Zi.ReactCurrentDispatcher,Sp=Zi.ReactCurrentOwner,Wn=Zi.ReactCurrentBatchConfig,et=0,Gt=null,kt=null,Yt=0,Rn=0,js=Ir(0),Ut=0,wa=null,ss=0,$u=0,Ep=0,ta=null,vn=null,Mp=0,ao=1/0,Ui=null,Cu=!1,Cd=null,Mr=null,ul=!1,gr=null,bu=0,na=0,bd=null,Yl=-1,$l=0;function hn(){return et&6?It():Yl!==-1?Yl:Yl=It()}function wr(t){return t.mode&1?et&2&&Yt!==0?Yt&-Yt:QM.transition!==null?($l===0&&($l=b_()),$l):(t=lt,t!==0||(t=window.event,t=t===void 0?16:k_(t.type)),t):1}function ai(t,e,n,i){if(50<na)throw na=0,bd=null,Error(le(185));ka(t,n,i),(!(et&2)||t!==Gt)&&(t===Gt&&(!(et&2)&&($u|=n),Ut===4&&hr(t,Yt)),Mn(t,i),n===1&&et===0&&!(e.mode&1)&&(ao=It()+500,ju&&Lr()))}function Mn(t,e){var n=t.callbackNode;QE(t,e);var i=fu(t,t===Gt?Yt:0);if(i===0)n!==null&&Nm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Nm(n),e===1)t.tag===0?JM(Ag.bind(null,t)):ev(Ag.bind(null,t)),YM(function(){!(et&6)&&Lr()}),n=null;else{switch(R_(i)){case 1:n=$h;break;case 4:n=A_;break;case 16:n=cu;break;case 536870912:n=C_;break;default:n=cu}n=Jv(n,jv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jv(t,e){if(Yl=-1,$l=0,et&6)throw Error(le(327));var n=t.callbackNode;if(Zs()&&t.callbackNode!==n)return null;var i=fu(t,t===Gt?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ru(t,i);else{e=i;var r=et;et|=2;var s=qv();(Gt!==t||Yt!==e)&&(Ui=null,ao=It()+500,es(t,e));do try{v1();break}catch(a){Xv(t,a)}while(!0);lp(),Au.current=s,et=r,kt!==null?e=0:(Gt=null,Yt=0,e=Ut)}if(e!==0){if(e===2&&(r=td(t),r!==0&&(i=r,e=Rd(t,r))),e===1)throw n=wa,es(t,0),hr(t,i),Mn(t,It()),n;if(e===6)hr(t,i);else{if(r=t.current.alternate,!(i&30)&&!x1(r)&&(e=Ru(t,i),e===2&&(s=td(t),s!==0&&(i=s,e=Rd(t,s))),e===1))throw n=wa,es(t,0),hr(t,i),Mn(t,It()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:Wr(t,vn,Ui);break;case 3:if(hr(t,i),(i&130023424)===i&&(e=Mp+500-It(),10<e)){if(fu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ud(Wr.bind(null,t,vn,Ui),e);break}Wr(t,vn,Ui);break;case 4:if(hr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-oi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*g1(i/1960))-i,10<i){t.timeoutHandle=ud(Wr.bind(null,t,vn,Ui),i);break}Wr(t,vn,Ui);break;case 5:Wr(t,vn,Ui);break;default:throw Error(le(329))}}}return Mn(t,It()),t.callbackNode===n?jv.bind(null,t):null}function Rd(t,e){var n=ta;return t.current.memoizedState.isDehydrated&&(es(t,e).flags|=256),t=Ru(t,e),t!==2&&(e=vn,vn=n,e!==null&&Pd(e)),t}function Pd(t){vn===null?vn=t:vn.push.apply(vn,t)}function x1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ci(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(t,e){for(e&=~Ep,e&=~$u,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-oi(e),i=1<<n;t[n]=-1,e&=~i}}function Ag(t){if(et&6)throw Error(le(327));Zs();var e=fu(t,0);if(!(e&1))return Mn(t,It()),null;var n=Ru(t,e);if(t.tag!==0&&n===2){var i=td(t);i!==0&&(e=i,n=Rd(t,i))}if(n===1)throw n=wa,es(t,0),hr(t,e),Mn(t,It()),n;if(n===6)throw Error(le(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,vn,Ui),Mn(t,It()),null}function wp(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(ao=It()+500,ju&&Lr())}}function os(t){gr!==null&&gr.tag===0&&!(et&6)&&Zs();var e=et;et|=1;var n=Wn.transition,i=lt;try{if(Wn.transition=null,lt=1,t)return t()}finally{lt=i,Wn.transition=n,et=e,!(et&6)&&Lr()}}function Tp(){Rn=js.current,vt(js)}function es(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,qM(n)),kt!==null)for(n=kt.return;n!==null;){var i=n;switch(sp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&gu();break;case 3:so(),vt(Sn),vt(ln),pp();break;case 5:hp(i);break;case 4:so();break;case 13:vt(Mt);break;case 19:vt(Mt);break;case 10:up(i.type._context);break;case 22:case 23:Tp()}n=n.return}if(Gt=t,kt=t=Tr(t.current,null),Yt=Rn=e,Ut=0,wa=null,Ep=$u=ss=0,vn=ta=null,Kr!==null){for(e=0;e<Kr.length;e++)if(n=Kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Kr=null}return t}function Xv(t,e){do{var n=kt;try{if(lp(),jl.current=Tu,wu){for(var i=wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}wu=!1}if(rs=0,Vt=Ft=wt=null,Qo=!1,Sa=0,Sp.current=null,n===null||n.return===null){Ut=1,wa=e,kt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=hg(o);if(h!==null){h.flags&=-257,pg(h,o,a,s,e),h.mode&1&&dg(s,u,e),e=h,l=u;var m=e.updateQueue;if(m===null){var v=new Set;v.add(l),e.updateQueue=v}else m.add(l);break e}else{if(!(e&1)){dg(s,u,e),Ap();break e}l=Error(le(426))}}else if(St&&a.mode&1){var x=hg(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),pg(x,o,a,s,e),op(oo(l,a));break e}}s=l=oo(l,a),Ut!==4&&(Ut=2),ta===null?ta=[s]:ta.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Rv(s,l,e);og(s,p);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Mr===null||!Mr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Pv(s,a,e);og(s,E);break e}}s=s.return}while(s!==null)}$v(n)}catch(C){e=C,kt===n&&n!==null&&(kt=n=n.return);continue}break}while(!0)}function qv(){var t=Au.current;return Au.current=Tu,t===null?Tu:t}function Ap(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Gt===null||!(ss&268435455)&&!($u&268435455)||hr(Gt,Yt)}function Ru(t,e){var n=et;et|=2;var i=qv();(Gt!==t||Yt!==e)&&(Ui=null,es(t,e));do try{_1();break}catch(r){Xv(t,r)}while(!0);if(lp(),et=n,Au.current=i,kt!==null)throw Error(le(261));return Gt=null,Yt=0,Ut}function _1(){for(;kt!==null;)Yv(kt)}function v1(){for(;kt!==null&&!WE();)Yv(kt)}function Yv(t){var e=Zv(t.alternate,t,Rn);t.memoizedProps=t.pendingProps,e===null?$v(t):kt=e,Sp.current=null}function $v(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=d1(n,e),n!==null){n.flags&=32767,kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,kt=null;return}}else if(n=f1(n,e,Rn),n!==null){kt=n;return}if(e=e.sibling,e!==null){kt=e;return}kt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Wr(t,e,n){var i=lt,r=Wn.transition;try{Wn.transition=null,lt=1,y1(t,e,n,i)}finally{Wn.transition=r,lt=i}return null}function y1(t,e,n,i){do Zs();while(gr!==null);if(et&6)throw Error(le(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(le(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(eM(t,s),t===Gt&&(kt=Gt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ul||(ul=!0,Jv(cu,function(){return Zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Wn.transition,Wn.transition=null;var o=lt;lt=1;var a=et;et|=4,Sp.current=null,p1(t,n),Gv(n,t),BM(ad),du=!!od,ad=od=null,t.current=n,m1(n),jE(),et=a,lt=o,Wn.transition=s}else t.current=n;if(ul&&(ul=!1,gr=t,bu=r),s=t.pendingLanes,s===0&&(Mr=null),YE(n.stateNode),Mn(t,It()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Cu)throw Cu=!1,t=Cd,Cd=null,t;return bu&1&&t.tag!==0&&Zs(),s=t.pendingLanes,s&1?t===bd?na++:(na=0,bd=t):na=0,Lr(),null}function Zs(){if(gr!==null){var t=R_(bu),e=Wn.transition,n=lt;try{if(Wn.transition=null,lt=16>t?16:t,gr===null)var i=!1;else{if(t=gr,gr=null,bu=0,et&6)throw Error(le(331));var r=et;for(et|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ee=u;Ee!==null;){var f=Ee;switch(f.tag){case 0:case 11:case 15:ea(8,f,s)}var c=f.child;if(c!==null)c.return=f,Ee=c;else for(;Ee!==null;){f=Ee;var d=f.sibling,h=f.return;if(Bv(f),f===u){Ee=null;break}if(d!==null){d.return=h,Ee=d;break}Ee=h}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ea(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Ee=p;break e}Ee=s.return}}var g=t.current;for(Ee=g;Ee!==null;){o=Ee;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Ee=_;else e:for(o=g;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yu(9,a)}}catch(C){bt(a,a.return,C)}if(a===o){Ee=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,Ee=E;break e}Ee=a.return}}if(et=r,Lr(),Mi&&typeof Mi.onPostCommitFiberRoot=="function")try{Mi.onPostCommitFiberRoot(Bu,t)}catch{}i=!0}return i}finally{lt=n,Wn.transition=e}}return!1}function Cg(t,e,n){e=oo(n,e),e=Rv(t,e,1),t=Er(t,e,1),e=hn(),t!==null&&(ka(t,1,e),Mn(t,e))}function bt(t,e,n){if(t.tag===3)Cg(t,t,n);else for(;e!==null;){if(e.tag===3){Cg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Mr===null||!Mr.has(i))){t=oo(n,t),t=Pv(e,t,1),e=Er(e,t,1),t=hn(),e!==null&&(ka(e,1,t),Mn(e,t));break}}e=e.return}}function S1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,Gt===t&&(Yt&n)===n&&(Ut===4||Ut===3&&(Yt&130023424)===Yt&&500>It()-Mp?es(t,0):Ep|=n),Mn(t,e)}function Kv(t,e){e===0&&(t.mode&1?(e=Qa,Qa<<=1,!(Qa&130023424)&&(Qa=4194304)):e=1);var n=hn();t=qi(t,e),t!==null&&(ka(t,e,n),Mn(t,n))}function E1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Kv(t,n)}function M1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),Kv(t,n)}var Zv;Zv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)yn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yn=!1,c1(t,e,n);yn=!!(t.flags&131072)}else yn=!1,St&&e.flags&1048576&&tv(e,vu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ql(t,e),t=e.pendingProps;var r=no(e,ln.current);Ks(e,n),r=gp(null,e,i,t,r,n);var s=xp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(i)?(s=!0,xu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,fp(e),r.updater=qu,e.stateNode=r,r._reactInternals=e,gd(e,i,t,n),e=vd(null,e,i,!0,s,n)):(e.tag=0,St&&s&&rp(e),fn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ql(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=T1(i),t=ti(i,t),r){case 0:e=_d(null,e,i,t,n);break e;case 1:e=xg(null,e,i,t,n);break e;case 11:e=mg(null,e,i,t,n);break e;case 14:e=gg(null,e,i,ti(i.type,t),n);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),_d(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),xg(t,e,i,r,n);case 3:e:{if(Nv(e),t===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,av(t,e),Eu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=oo(Error(le(423)),e),e=_g(t,e,i,n,r);break e}else if(i!==r){r=oo(Error(le(424)),e),e=_g(t,e,i,n,r);break e}else for(In=Sr(e.stateNode.containerInfo.firstChild),Ln=e,St=!0,ii=null,n=sv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(io(),i===r){e=Yi(t,e,n);break e}fn(t,e,i,n)}e=e.child}return e;case 5:return lv(e),t===null&&hd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ld(i,r)?o=null:s!==null&&ld(i,s)&&(e.flags|=32),Dv(t,e),fn(t,e,o,n),e.child;case 6:return t===null&&hd(e),null;case 13:return kv(t,e,n);case 4:return dp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ro(e,null,i,n):fn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),mg(t,e,i,r,n);case 7:return fn(t,e,e.pendingProps,n),e.child;case 8:return fn(t,e,e.pendingProps.children,n),e.child;case 12:return fn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,xt(yu,i._currentValue),i._currentValue=o,s!==null)if(ci(s.value,o)){if(s.children===r.children&&!Sn.current){e=Yi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Vi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),pd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(le(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),pd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}fn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ks(e,n),r=qn(r),i=i(r),e.flags|=1,fn(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),gg(t,e,i,r,n);case 15:return Iv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),ql(t,e),e.tag=1,En(i)?(t=!0,xu(e)):t=!1,Ks(e,n),bv(e,i,r),gd(e,i,r,n),vd(null,e,i,!0,t,n);case 19:return Fv(t,e,n);case 22:return Lv(t,e,n)}throw Error(le(156,e.tag))};function Jv(t,e){return T_(t,e)}function w1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,n,i){return new w1(t,e,n,i)}function Cp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function T1(t){if(typeof t=="function")return Cp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xh)return 11;if(t===qh)return 14}return 2}function Tr(t,e){var n=t.alternate;return n===null?(n=Gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Kl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Cp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ks:return ts(n.children,r,s,e);case jh:o=8,r|=8;break;case Bf:return t=Gn(12,n,e,r|2),t.elementType=Bf,t.lanes=s,t;case Hf:return t=Gn(13,n,e,r),t.elementType=Hf,t.lanes=s,t;case Vf:return t=Gn(19,n,e,r),t.elementType=Vf,t.lanes=s,t;case l_:return Ku(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case o_:o=10;break e;case a_:o=9;break e;case Xh:o=11;break e;case qh:o=14;break e;case ur:o=16,i=null;break e}throw Error(le(130,t==null?t:typeof t,""))}return e=Gn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ts(t,e,n,i){return t=Gn(7,t,i,e),t.lanes=n,t}function Ku(t,e,n,i){return t=Gn(22,t,i,e),t.elementType=l_,t.lanes=n,t.stateNode={isHidden:!1},t}function Oc(t,e,n){return t=Gn(6,t,null,e),t.lanes=n,t}function zc(t,e,n){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function A1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vc(0),this.expirationTimes=vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function bp(t,e,n,i,r,s,o,a,l){return t=new A1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fp(s),t}function C1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ns,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Qv(t){if(!t)return br;t=t._reactInternals;e:{if(fs(t)!==t||t.tag!==1)throw Error(le(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(t.tag===1){var n=t.type;if(En(n))return Q_(t,n,e)}return e}function ey(t,e,n,i,r,s,o,a,l){return t=bp(n,i,!0,t,r,s,o,a,l),t.context=Qv(null),n=t.current,i=hn(),r=wr(n),s=Vi(i,r),s.callback=e??null,Er(n,s,r),t.current.lanes=r,ka(t,r,i),Mn(t,i),t}function Zu(t,e,n,i){var r=e.current,s=hn(),o=wr(r);return n=Qv(n),e.context===null?e.context=n:e.pendingContext=n,e=Vi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Er(r,e,o),t!==null&&(ai(t,r,o,s),Wl(t,r,o)),o}function Pu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rp(t,e){bg(t,e),(t=t.alternate)&&bg(t,e)}function b1(){return null}var ty=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pp(t){this._internalRoot=t}Ju.prototype.render=Pp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(le(409));Zu(t,e,null,null)};Ju.prototype.unmount=Pp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;os(function(){Zu(null,t,null,null)}),e[Xi]=null}};function Ju(t){this._internalRoot=t}Ju.prototype.unstable_scheduleHydration=function(t){if(t){var e=L_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dr.length&&e!==0&&e<dr[n].priority;n++);dr.splice(n,0,t),n===0&&N_(t)}};function Ip(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rg(){}function R1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Pu(o);s.call(u)}}var o=ey(e,i,t,0,null,!1,!1,"",Rg);return t._reactRootContainer=o,t[Xi]=o.current,ga(t.nodeType===8?t.parentNode:t),os(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Pu(l);a.call(u)}}var l=bp(t,0,!1,null,null,!1,!1,"",Rg);return t._reactRootContainer=l,t[Xi]=l.current,ga(t.nodeType===8?t.parentNode:t),os(function(){Zu(e,l,n,i)}),l}function ec(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Pu(o);a.call(l)}}Zu(e,o,t,r)}else o=R1(n,e,t,r,i);return Pu(o)}P_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Go(e.pendingLanes);n!==0&&(Kh(e,n|1),Mn(e,It()),!(et&6)&&(ao=It()+500,Lr()))}break;case 13:os(function(){var i=qi(t,1);if(i!==null){var r=hn();ai(i,t,1,r)}}),Rp(t,1)}};Zh=function(t){if(t.tag===13){var e=qi(t,134217728);if(e!==null){var n=hn();ai(e,t,134217728,n)}Rp(t,134217728)}};I_=function(t){if(t.tag===13){var e=wr(t),n=qi(t,e);if(n!==null){var i=hn();ai(n,t,e,i)}Rp(t,e)}};L_=function(){return lt};D_=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};Jf=function(t,e,n){switch(e){case"input":if(jf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Wu(i);if(!r)throw Error(le(90));c_(i),jf(i,r)}}}break;case"textarea":d_(t,n);break;case"select":e=n.value,e!=null&&Xs(t,!!n.multiple,e,!1)}};v_=wp;y_=os;var P1={usingClientEntryPoint:!1,Events:[Ua,zs,Wu,x_,__,wp]},Io={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},I1={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=M_(t),t===null?null:t.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance||b1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Bu=cl.inject(I1),Mi=cl}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P1;kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ip(e))throw Error(le(200));return C1(t,e,null,n)};kn.createRoot=function(t,e){if(!Ip(t))throw Error(le(299));var n=!1,i="",r=ty;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=bp(t,1,!1,null,null,n,!1,i,r),t[Xi]=e.current,ga(t.nodeType===8?t.parentNode:t),new Pp(e)};kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(le(188)):(t=Object.keys(t).join(","),Error(le(268,t)));return t=M_(e),t=t===null?null:t.stateNode,t};kn.flushSync=function(t){return os(t)};kn.hydrate=function(t,e,n){if(!Qu(e))throw Error(le(200));return ec(null,t,e,!0,n)};kn.hydrateRoot=function(t,e,n){if(!Ip(t))throw Error(le(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=ty;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ey(e,null,t,1,n??null,r,!1,s,o),t[Xi]=e.current,ga(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ju(e)};kn.render=function(t,e,n){if(!Qu(e))throw Error(le(200));return ec(null,t,e,!1,n)};kn.unmountComponentAtNode=function(t){if(!Qu(t))throw Error(le(40));return t._reactRootContainer?(os(function(){ec(null,null,t,!1,function(){t._reactRootContainer=null,t[Xi]=null})}),!0):!1};kn.unstable_batchedUpdates=wp;kn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Qu(n))throw Error(le(200));if(t==null||t._reactInternals===void 0)throw Error(le(38));return ec(t,e,n,!1,i)};kn.version="18.3.1-next-f1338f8080-20240426";function ny(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ny)}catch(t){console.error(t)}}ny(),n_.exports=kn;var L1=n_.exports,Pg=L1;Of.createRoot=Pg.createRoot,Of.hydrateRoot=Pg.hydrateRoot;/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var D1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Wt=(t,e)=>{const n=ht.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...u},f)=>ht.createElement("svg",{ref:f,...D1,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${N1(t)}`,a].join(" "),...u},[...e.map(([c,d])=>ht.createElement(c,d)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=Wt("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=Wt("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=Wt("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=Wt("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=Wt("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=Wt("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=Wt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=Wt("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=Wt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=Wt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=Wt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=Wt("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=Wt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=Wt("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=Wt("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=Wt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=Wt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=Wt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),X1=()=>{const[t,e]=ht.useState(""),[n,i]=ht.useState(!1),[r,s]=ht.useState(0),[o,a]=ht.useState(150),l=["Aspiring Software Engineer","Full Stack Developer","Data Science Learner","AI & RAG Enthusiast"];ht.useEffect(()=>{let f=setTimeout(()=>{u()},o);return()=>clearTimeout(f)},[t,n]);const u=()=>{const f=r%l.length,c=l[f];e(n?c.substring(0,t.length-1):c.substring(0,t.length+1)),!n&&t===c?(setTimeout(()=>i(!0),1500),a(100)):n&&t===""?(i(!1),s(r+1),a(150)):a(n?50:100)};return D.jsx("section",{className:"hero glass animate-fade-in",id:"home",children:D.jsxs("div",{className:"hero-content",children:[D.jsxs("div",{className:"hero-header",children:[D.jsxs("div",{className:"avatar-container",children:[D.jsx("img",{src:"/profile.jpg.png",alt:"Jithendra Mallela",className:"hero-avatar",onError:f=>{f.target.style.display="none",f.target.nextSibling.style.display="flex"}}),D.jsx("div",{className:"avatar-fallback",style:{display:"none"},children:"JM"})]}),D.jsxs("div",{className:"hero-titles",children:[D.jsx("h1",{className:"hero-title",children:"Jithendra Mallela"}),D.jsxs("h2",{className:"hero-subtitle",children:[D.jsx("span",{className:"typing-text",children:t}),D.jsx("span",{className:"cursor",children:"|"})]})]})]}),D.jsx("p",{className:"hero-description",children:"Passionate about building scalable web applications, intelligent solutions using AI/RAG, and solving complex problems with modern technologies."}),D.jsxs("div",{className:"hero-links",children:[D.jsxs("a",{href:"/resume.pdf",download:"Jithendra_Mallela_Resume.pdf",className:"hero-link",style:{background:"var(--accent-gradient)",borderColor:"transparent",color:"#fff"},children:[D.jsx(z1,{size:20}),D.jsx("span",{children:"Download Resume"})]}),D.jsxs("a",{href:"mailto:mallelajithendra2004@gmail.com",className:"hero-link",children:[D.jsx(ry,{size:20}),D.jsx("span",{children:"Email"})]}),D.jsxs("a",{href:"https://www.linkedin.com/in/mallela-jithendra-93j",target:"_blank",rel:"noopener noreferrer",className:"hero-link",children:[D.jsx(Id,{size:20}),D.jsx("span",{children:"LinkedIn"})]}),D.jsxs("a",{href:"https://github.com/jithendra98",target:"_blank",rel:"noopener noreferrer",className:"hero-link",children:[D.jsx(Iu,{size:20}),D.jsx("span",{children:"GitHub"})]}),D.jsxs("a",{href:"tel:+919652276818",className:"hero-link",children:[D.jsx(H1,{size:20}),D.jsx("span",{children:"+91-9652276818"})]})]})]})})},q1=()=>{const t=[{icon:D.jsx(U1,{size:24}),title:"Full Stack",desc:"Building scalable web apps"},{icon:D.jsx(F1,{size:24}),title:"AI/RAG",desc:"Implementing intelligent solutions"},{icon:D.jsx(V1,{size:24}),title:"Problem Solver",desc:"Tackling complex challenges"},{icon:D.jsx(O1,{size:24}),title:"Continuous Learner",desc:"Always exploring new tech"}];return D.jsxs("section",{id:"about",className:"animate-fade-in",children:[D.jsx("h2",{className:"section-title",children:"About Me"}),D.jsxs("div",{className:"about-grid",children:[D.jsxs("div",{className:"about-text glass hover-lift reveal-left",children:[D.jsxs("h3",{children:["Hello, I'm ",D.jsx("span",{className:"highlight",children:"Jithendra"}),"! 👋"]}),D.jsxs("p",{children:["I am a passionate aspiring ",D.jsx("strong",{className:"text-highlight",children:"Software Engineer"})," and ",D.jsx("strong",{className:"text-highlight",children:"Data Science"})," learner based in India. My journey in tech is driven by an insatiable curiosity for how things work and a desire to build solutions that make a real impact."]}),D.jsxs("p",{children:["I specialize in bridging the gap between elegant ",D.jsx("strong",{className:"text-highlight",children:"frontend interfaces"})," and robust ",D.jsx("strong",{className:"text-highlight",children:"backend architectures"}),". Recently, I've been diving deep into the world of ",D.jsx("strong",{className:"text-highlight",children:"Artificial Intelligence"})," and ",D.jsx("strong",{className:"text-highlight",children:"Retrieval-Augmented Generation (RAG)"}),", exploring how we can use intelligent models to solve complex, real-world problems."]}),D.jsxs("p",{children:["When I'm not coding, you can find me exploring new technologies, participating in continuous learning, or brainstorming my next big project. I believe in writing ",D.jsx("strong",{className:"text-highlight",children:"clean code"}),", building intuitive user experiences, and constantly pushing the boundaries of what's possible."]})]}),D.jsx("div",{className:"about-stats reveal-right",children:t.map((e,n)=>D.jsxs("div",{className:"stat-card glass hover-lift",children:[D.jsx("div",{className:"stat-icon",children:e.icon}),D.jsxs("div",{className:"stat-info",children:[D.jsx("h4",{children:e.title}),D.jsx("p",{children:e.desc})]})]},n))})]})]})},Y1=()=>{const t=[{category:"Languages",items:["Java","Python","TypeScript","JavaScript (ES6+)"]},{category:"Web Technologies",items:["HTML","CSS","React.js","Next.js 14","Node.js","Express.js","REST API","Tailwind CSS"]},{category:"Tools & Platforms",items:["MySQL","PostgreSQL","Prisma ORM","Docker","Git","GitHub","Postman","Power BI","Excel"]},{category:"Soft Skills",items:["Problem-Solving","Team Player","Adaptability"]}];return D.jsxs("section",{className:"skills-section animate-fade-in",style:{animationDelay:"0.2s"},id:"skills",children:[D.jsx("h2",{className:"section-title reveal",children:"Skills & Technologies"}),D.jsx("div",{className:"skills-grid",children:t.map((e,n)=>D.jsxs("div",{className:"skill-card glass reveal-right",children:[D.jsx("h3",{className:"skill-category",children:e.category}),D.jsx("div",{className:"skill-items",children:e.items.map((i,r)=>D.jsx("span",{className:"skill-badge",children:i},r))})]},n))})]})},$1=()=>{const t=[{title:"AI-Powered Research Assistant using RAG",date:"Dec 2025 - Feb 2026",points:["Built an AI-powered Research Assistant using RAG architecture to enable accurate question answering over PDF documents.","Integrated FAISS vector database with embeddings for fast semantic search and efficient document retrieval.","Designed a Streamlit-based interactive chat interface using LLMs to deliver context-aware answers with source references."],tech:["Python","RAG","LangChain","FAISS","Streamlit","OpenAI API"],links:{demo:"https://ai-powered-research-assistant-rag.streamlit.app/",github:"https://github.com/jithendra98/AI-Powered-Research-Assistant-using-RAG"}},{title:"AI-Interview Coach Web App",date:"Aug 2025 - Jan 2026",points:["Built an AI mock interview platform using Django and GPT-3.5 that generates role-specific questions with AI-scored feedback.","Developed a smart resume analyser using LangChain + OpenAI to parse files and identify missing keywords.","Deployed on Render using Gunicorn and Whitenoise for static file serving with SQLite."],tech:["Python","Django","OpenAI","LangChain","SQLite","Render"],links:{demo:"https://ai-interview-coach-web-app.onrender.com/",github:"https://github.com/jithendra98/ai-interview-coach-web-app?tab=readme-ov-file"}}];return D.jsxs("section",{className:"projects-section animate-fade-in",style:{animationDelay:"0.4s"},id:"projects",children:[D.jsx("h2",{className:"section-title reveal",children:"Featured Projects"}),D.jsx("div",{className:"projects-grid",children:t.map((e,n)=>D.jsxs("div",{className:"project-card glass hover-lift reveal",children:[D.jsxs("div",{className:"project-header",children:[D.jsx("h3",{className:"project-title",children:e.title}),D.jsx("span",{className:"project-date",children:e.date})]}),D.jsx("ul",{className:"project-points",children:e.points.map((i,r)=>D.jsx("li",{children:i},r))}),D.jsx("div",{className:"project-tech",children:e.tech.map((i,r)=>D.jsx("span",{className:"tech-badge",children:i},r))}),D.jsxs("div",{className:"project-links",children:[D.jsxs("a",{href:e.links.demo,className:"project-link",target:"_blank",rel:"noopener noreferrer",children:[D.jsx(B1,{size:16})," Live Demo"]}),D.jsxs("a",{href:e.links.github,className:"project-link",target:"_blank",rel:"noopener noreferrer",children:[D.jsx(Iu,{size:16})," GitHub"]})]})]},n))})]})},K1=()=>{const t=[{title:"Data Science - Interns Elite",date:"June 2025 - August 2025",points:["Completed an industrial training program focused on core concepts of Data Science.","Gained hands-on experience in data preprocessing, visualization, and building predictive models.","Developed proficiency in applying statistical techniques and machine learning algorithms."],tech:["Python","Pandas","Scikit-learn","Power BI","MySQL"]}];return D.jsxs("section",{className:"experience-section animate-fade-in",style:{animationDelay:"0.5s"},id:"experience",children:[D.jsx("h2",{className:"section-title reveal",children:"Training & Experience"}),D.jsx("div",{className:"timeline",children:t.map((e,n)=>D.jsxs("div",{className:"timeline-item glass reveal-left",children:[D.jsx("h3",{className:"timeline-title",children:e.title}),D.jsx("div",{className:"timeline-meta",children:D.jsxs("span",{children:[D.jsx(iy,{size:14})," ",e.date]})}),D.jsx("ul",{className:"timeline-points",children:e.points.map((i,r)=>D.jsx("li",{children:i},r))}),D.jsx("div",{className:"timeline-tech-small",children:e.tech.map((i,r)=>D.jsx("span",{className:"tech-badge-small",children:i},r))})]},n))})]})},Z1=()=>{const t=[{institution:"Lovely Professional University",degree:"Bachelor of Technology, Computer Science and Engineering",score:"CGPA: 7.00",location:"Phagwara, Punjab",date:"August 2023 - Present"},{institution:"Narayana Junior College",degree:"Intermediate",score:"Percentage: 76.1%",location:"Chilakaluripet, Andhra Pradesh",date:"August 2021 - May 2022"},{institution:"AMG Residential High School",degree:"Matriculation",score:"CGPA: 78.2%",location:"Chilakaluripet, Andhra Pradesh",date:"July 2019 - April 2020"}];return D.jsxs("section",{className:"education-section animate-fade-in",style:{animationDelay:"0.9s"},id:"education",children:[D.jsx("h2",{className:"section-title reveal",children:"Education"}),D.jsx("div",{className:"timeline",children:t.map((e,n)=>D.jsxs("div",{className:"timeline-item glass reveal-right",children:[D.jsx("h3",{className:"timeline-title",children:e.institution}),D.jsx("h4",{className:"timeline-subtitle",children:e.degree}),D.jsx("p",{className:"timeline-score",children:e.score}),D.jsxs("div",{className:"timeline-meta",children:[D.jsxs("span",{children:[D.jsx(sy,{size:14})," ",e.location]}),D.jsxs("span",{children:[D.jsx(iy,{size:14})," ",e.date]})]})]},n))})]})},J1=()=>{const[t,e]=ht.useState(null),n=[{title:"Java Skill Up | GeeksforGeeks",date:"January 2026",path:"/GFG JAVA Certificate.pdf"},{title:"Data Science Industrial Training | InternsElite",date:"August 2025",path:"/Certificate of Training-MALLELA JITHENDRA_Data Science_IT_2025_DS-T6_TC-10256_InternsElite.pdf"},{title:"Cloud Computing | NPTEL",date:"April 2025",highlight:"Elite with 60%",path:"/Cloud Computing.pdf"},{title:"Full Stack Development with MERN | thingQbator",date:"December 2025",path:"/1766658276420_MallelaJithendra_Course-Excellence.pdf"},{title:"Oracle Cloud Infrastructure | Oracle",date:"December 2025",path:"/oracle eCertificate.pdf"},{title:"Chatbot or smart Assistant Development | thingQbator",date:"December 2025",path:"/1766657649704_MallelaJithendra_Course-Excellence.pdf"},{title:"Responsive Web Design Developer | freeCodeCamp",date:"November 2023",path:"/freecodecamp.pdf"}];return D.jsxs("section",{className:"certifications-section animate-fade-in",style:{animationDelay:"0.8s"},id:"certifications",children:[D.jsx("h2",{className:"section-title reveal",children:"Certifications & Achievements"}),D.jsxs("div",{className:"achievements-card glass mb-8 reveal",children:[D.jsxs("h3",{className:"achievements-title",children:[D.jsx(W1,{size:20,className:"inline-icon"})," Key Achievements"]}),D.jsxs("ul",{className:"achievements-list",children:[D.jsx("li",{children:"Completed NPTEL Certification in Cloud Computing, securing Elite with 60%."}),D.jsx("li",{children:"Secured 2nd Prize at the State-Level Science Congress. Recognized and awarded in the competition."})]})]}),D.jsx("div",{className:"certs-grid",children:n.map((i,r)=>D.jsxs("div",{className:"cert-card glass hover-lift reveal",children:[D.jsx(k1,{className:"cert-icon",size:24}),D.jsxs("div",{className:"cert-details",children:[D.jsx("h4",{children:i.title}),D.jsx("span",{className:"cert-date",children:i.date}),i.highlight&&D.jsx("span",{className:"cert-highlight",children:i.highlight})]}),D.jsx("button",{onClick:()=>e(i),className:"cert-link",style:{background:"none",border:"none",cursor:"pointer",padding:0,outline:"none",fontFamily:"inherit",textAlign:"left"},children:"View Certificate"})]},r))}),t&&D.jsx("div",{className:"modal-overlay",onClick:()=>e(null),children:D.jsxs("div",{className:"modal-content",onClick:i=>i.stopPropagation(),children:[D.jsxs("div",{className:"modal-header",children:[D.jsx("h3",{className:"modal-title",children:t.title}),D.jsx("button",{className:"modal-close",onClick:()=>e(null),children:D.jsx(oy,{size:24})})]}),D.jsx("div",{className:"modal-body",children:D.jsx("iframe",{src:t.path,title:t.title})})]})})]})},Q1=()=>{const[t,e]=ht.useState({name:"",email:"",subject:"",message:""}),[n,i]=ht.useState(null),r=o=>{e(a=>({...a,[o.target.name]:o.target.value}))},s=async o=>{o.preventDefault(),i("sending");const a=new FormData;a.append("access_key","12e78d81-f7f6-4895-82a6-8b8258ef1f9b"),a.append("name",t.name),a.append("email",t.email),a.append("subject",t.subject),a.append("message",t.message);try{const f=await(await fetch("https://api.web3forms.com/submit",{method:"POST",body:a})).json();f.success?(i("sent"),e({name:"",email:"",subject:"",message:""}),setTimeout(()=>i(null),5e3)):(console.error("Web3Forms Error:",f),i("error"))}catch(u){console.error("Fetch Error:",u),i("error")}};return D.jsxs("section",{id:"contact",children:[D.jsx("h2",{className:"section-title",children:"Get In Touch"}),D.jsxs("div",{className:"contact-wrapper",children:[D.jsxs("div",{className:"contact-info",children:[D.jsxs("div",{className:"contact-info-card glass hover-lift",children:[D.jsx("span",{className:"contact-icon",children:D.jsx(ry,{size:24})}),D.jsxs("div",{children:[D.jsx("h4",{children:"Email"}),D.jsx("a",{href:"mailto:jithendra.mallela@example.com",children:"mallelajithendra2004@gmail.com"})]})]}),D.jsxs("div",{className:"contact-info-card glass hover-lift",children:[D.jsx("span",{className:"contact-icon",children:D.jsx(Id,{size:24})}),D.jsxs("div",{children:[D.jsx("h4",{children:"LinkedIn"}),D.jsx("a",{href:"https://www.linkedin.com/in/mallela-jithendra-93j",target:"_blank",rel:"noopener noreferrer",className:"social-icon-link",children:D.jsx(Id,{size:20})})]})]}),D.jsxs("div",{className:"contact-info-card glass hover-lift",children:[D.jsx("span",{className:"contact-icon",children:D.jsx(Iu,{size:24})}),D.jsxs("div",{children:[D.jsx("h4",{children:"GitHub"}),D.jsx("a",{href:"https://github.com/jithendra98",target:"_blank",rel:"noopener noreferrer",className:"social-icon-link",children:D.jsx(Iu,{size:20})})]})]}),D.jsxs("div",{className:"contact-info-card glass hover-lift",children:[D.jsx("span",{className:"contact-icon",children:D.jsx(sy,{size:24})}),D.jsxs("div",{children:[D.jsx("h4",{children:"Location"}),D.jsx("p",{children:"India"})]})]})]}),D.jsxs("form",{className:"contact-form glass",onSubmit:s,children:[D.jsx("h3",{className:"contact-form-heading",children:"Send a Message"}),D.jsxs("div",{className:"contact-form-row",children:[D.jsxs("div",{className:"contact-field",children:[D.jsx("label",{htmlFor:"contact-name",children:"Your Name"}),D.jsx("input",{id:"contact-name",type:"text",name:"name",placeholder:"Jithendra Mallela",value:t.name,onChange:r,required:!0})]}),D.jsxs("div",{className:"contact-field",children:[D.jsx("label",{htmlFor:"contact-email",children:"Email Address"}),D.jsx("input",{id:"contact-email",type:"email",name:"email",placeholder:"you@example.com",value:t.email,onChange:r,pattern:"[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$",title:"Please enter a complete email address containing an @ and a domain like .com",required:!0})]})]}),D.jsxs("div",{className:"contact-field",children:[D.jsx("label",{htmlFor:"contact-subject",children:"Subject"}),D.jsx("input",{id:"contact-subject",type:"text",name:"subject",placeholder:"Collaboration / Opportunity / Question",value:t.subject,onChange:r,required:!0})]}),D.jsxs("div",{className:"contact-field",children:[D.jsx("label",{htmlFor:"contact-message",children:"Message"}),D.jsx("textarea",{id:"contact-message",name:"message",rows:6,placeholder:"Write your message here…",value:t.message,onChange:r,required:!0})]}),D.jsx("button",{type:"submit",className:"contact-submit-btn",disabled:n==="sending",children:n==="sending"?D.jsx("span",{className:"btn-spinner"}):n==="sent"?"✓ Message Sent!":D.jsx(D.Fragment,{children:"Send Message  ➤"})}),n==="sent"&&D.jsx("p",{className:"contact-success",children:"Thank you for your message! I'll get back to you soon. 🎉"})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lp="183",ew=0,Ig=1,tw=2,Zl=1,nw=2,jo=3,Rr=0,pn=1,yi=2,Gi=0,Js=1,Lu=2,Lg=3,Dg=4,iw=5,Xr=100,rw=101,sw=102,ow=103,aw=104,lw=200,uw=201,cw=202,fw=203,Ld=204,Dd=205,dw=206,hw=207,pw=208,mw=209,gw=210,xw=211,_w=212,vw=213,yw=214,Nd=0,kd=1,Fd=2,lo=3,Ud=4,Od=5,zd=6,Bd=7,Dp=0,Sw=1,Ew=2,Ti=0,ay=1,ly=2,uy=3,cy=4,fy=5,dy=6,hy=7,py=300,as=301,uo=302,Hc=303,Vc=304,tc=306,Hd=1e3,Hi=1001,Vd=1002,qt=1003,Mw=1004,fl=1005,on=1006,Gc=1007,Jr=1008,Pn=1009,my=1010,gy=1011,Ta=1012,Np=1013,Ci=1014,Si=1015,$i=1016,kp=1017,Fp=1018,Aa=1020,xy=35902,_y=35899,vy=1021,yy=1022,si=1023,Ki=1026,Qr=1027,Sy=1028,Up=1029,co=1030,Op=1031,zp=1033,Jl=33776,Ql=33777,eu=33778,tu=33779,Gd=35840,Wd=35841,jd=35842,Xd=35843,qd=36196,Yd=37492,$d=37496,Kd=37488,Zd=37489,Jd=37490,Qd=37491,eh=37808,th=37809,nh=37810,ih=37811,rh=37812,sh=37813,oh=37814,ah=37815,lh=37816,uh=37817,ch=37818,fh=37819,dh=37820,hh=37821,ph=36492,mh=36494,gh=36495,xh=36283,_h=36284,vh=36285,yh=36286,ww=3200,Ey=0,Tw=1,pr="",On="srgb",fo="srgb-linear",Du="linear",at="srgb",gs=7680,Ng=519,Aw=512,Cw=513,bw=514,Bp=515,Rw=516,Pw=517,Hp=518,Iw=519,kg=35044,Fg="300 es",Ei=2e3,Ca=2001;function Lw(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ba(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Dw(){const t=ba("canvas");return t.style.display="block",t}const Ug={};function Og(...t){const e="THREE."+t.shift();console.log(e,...t)}function My(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Oe(...t){t=My(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function nt(...t){t=My(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Nu(...t){const e=t.join(" ");e in Ug||(Ug[e]=!0,Oe(...t))}function Nw(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const kw={[Nd]:kd,[Fd]:zd,[Ud]:Bd,[lo]:Od,[kd]:Nd,[zd]:Fd,[Bd]:Ud,[Od]:lo};class _o{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wc=Math.PI/180,Sh=180/Math.PI;function za(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function Fw(t,e){return(t%e+e)%e}function jc(t,e,n){return(1-n)*t+n*e}function Lo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function xn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,n=0){rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],c=i[r+3],d=s[o+0],h=s[o+1],m=s[o+2],v=s[o+3];if(c!==v||l!==d||u!==h||f!==m){let x=l*d+u*h+f*m+c*v;x<0&&(d=-d,h=-h,m=-m,v=-v,x=-x);let p=1-a;if(x<.9995){const g=Math.acos(x),_=Math.sin(g);p=Math.sin(p*g)/_,a=Math.sin(a*g)/_,l=l*p+d*a,u=u*p+h*a,f=f*p+m*a,c=c*p+v*a}else{l=l*p+d*a,u=u*p+h*a,f=f*p+m*a,c=c*p+v*a;const g=1/Math.sqrt(l*l+u*u+f*f+c*c);l*=g,u*=g,f*=g,c*=g}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=c}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],c=s[o],d=s[o+1],h=s[o+2],m=s[o+3];return e[n]=a*m+f*c+l*h-u*d,e[n+1]=l*m+f*d+u*c-a*h,e[n+2]=u*m+f*h+a*d-l*c,e[n+3]=f*m-a*c-l*d-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),c=a(s/2),d=l(i/2),h=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=d*f*c+u*h*m,this._y=u*h*c-d*f*m,this._z=u*f*m+d*h*c,this._w=u*f*c-d*h*m;break;case"YXZ":this._x=d*f*c+u*h*m,this._y=u*h*c-d*f*m,this._z=u*f*m-d*h*c,this._w=u*f*c+d*h*m;break;case"ZXY":this._x=d*f*c-u*h*m,this._y=u*h*c+d*f*m,this._z=u*f*m+d*h*c,this._w=u*f*c-d*h*m;break;case"ZYX":this._x=d*f*c-u*h*m,this._y=u*h*c+d*f*m,this._z=u*f*m-d*h*c,this._w=u*f*c+d*h*m;break;case"YZX":this._x=d*f*c+u*h*m,this._y=u*h*c+d*f*m,this._z=u*f*m-d*h*c,this._w=u*f*c-d*h*m;break;case"XZY":this._x=d*f*c-u*h*m,this._y=u*h*c-d*f*m,this._z=u*f*m+d*h*c,this._w=u*f*c+d*h*m;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],c=n[10],d=i+a+c;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(f-l)*h,this._y=(s-u)*h,this._z=(o-r)*h}else if(i>a&&i>c){const h=2*Math.sqrt(1+i-a-c);this._w=(f-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+u)/h}else if(a>c){const h=2*Math.sqrt(1+a-i-c);this._w=(s-u)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+f)/h}else{const h=2*Math.sqrt(1+c-i-a);this._w=(o-r)/h,this._x=(s+u)/h,this._y=(l+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const u=Math.acos(a),f=Math.sin(u);l=Math.sin(l*u)/f,n=Math.sin(n*u)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),c=2*(s*i-o*n);return this.x=n+l*u+o*c-a*f,this.y=i+l*f+a*u-s*c,this.z=r+l*c+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xc.copy(this).projectOnVector(e),this.sub(Xc)}reflect(e){return this.sub(Xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xc=new K,zg=new vo;class Ve{constructor(e,n,i,r,s,o,a,l,u){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],c=i[7],d=i[2],h=i[5],m=i[8],v=r[0],x=r[3],p=r[6],g=r[1],_=r[4],E=r[7],C=r[2],M=r[5],b=r[8];return s[0]=o*v+a*g+l*C,s[3]=o*x+a*_+l*M,s[6]=o*p+a*E+l*b,s[1]=u*v+f*g+c*C,s[4]=u*x+f*_+c*M,s[7]=u*p+f*E+c*b,s[2]=d*v+h*g+m*C,s[5]=d*x+h*_+m*M,s[8]=d*p+h*E+m*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],c=f*o-a*u,d=a*l-f*s,h=u*s-o*l,m=n*c+i*d+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=c*v,e[1]=(r*u-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(f*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=h*v,e[7]=(i*l-u*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(qc.makeScale(e,n)),this}rotate(e){return this.premultiply(qc.makeRotation(-e)),this}translate(e,n){return this.premultiply(qc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qc=new Ve,Bg=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hg=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uw(){const t={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(r.r=Qs(r.r),r.g=Qs(r.g),r.b=Qs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pr?Du:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Nu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Nu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[fo]:{primaries:e,whitePoint:i,transfer:Du,toXYZ:Bg,fromXYZ:Hg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Bg,fromXYZ:Hg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),t}const Qe=Uw();function Wi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Qs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let xs;class Ow{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{xs===void 0&&(xs=ba("canvas")),xs.width=e.width,xs.height=e.height;const r=xs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=xs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ba("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Wi(n[i]/255)*255):n[i]=Wi(n[i]);return{data:n,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zw=0;class Vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zw++}),this.uuid=za(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yc(r[o].image)):s.push(Yc(r[o]))}else s=Yc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Yc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ow.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let Bw=0;const $c=new K;class $t extends _o{constructor(e=$t.DEFAULT_IMAGE,n=$t.DEFAULT_MAPPING,i=Hi,r=Hi,s=on,o=Jr,a=si,l=Pn,u=$t.DEFAULT_ANISOTROPY,f=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bw++}),this.uuid=za(),this.name="",this.source=new Vp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($c).x}get height(){return this.source.getSize($c).y}get depth(){return this.source.getSize($c).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==py)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hd:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case Vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hd:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case Vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=py;$t.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],c=l[8],d=l[1],h=l[5],m=l[9],v=l[2],x=l[6],p=l[10];if(Math.abs(f-d)<.01&&Math.abs(c-v)<.01&&Math.abs(m-x)<.01){if(Math.abs(f+d)<.1&&Math.abs(c+v)<.1&&Math.abs(m+x)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,E=(h+1)/2,C=(p+1)/2,M=(f+d)/4,b=(c+v)/4,y=(m+x)/4;return _>E&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=M/i,s=b/i):E>C?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=M/r,s=y/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=b/s,r=y/s),this.set(i,r,s,n),this}let g=Math.sqrt((x-m)*(x-m)+(c-v)*(c-v)+(d-f)*(d-f));return Math.abs(g)<.001&&(g=1),this.x=(x-m)/g,this.y=(c-v)/g,this.z=(d-f)/g,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hw extends _o{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new $t(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Vp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends Hw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class wy extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vw extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tt{constructor(e,n,i,r,s,o,a,l,u,f,c,d,h,m,v,x){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,c,d,h,m,v,x)}set(e,n,i,r,s,o,a,l,u,f,c,d,h,m,v,x){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=f,p[10]=c,p[14]=d,p[3]=h,p[7]=m,p[11]=v,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/_s.setFromMatrixColumn(e,0).length(),s=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),c=Math.sin(s);if(e.order==="XYZ"){const d=o*f,h=o*c,m=a*f,v=a*c;n[0]=l*f,n[4]=-l*c,n[8]=u,n[1]=h+m*u,n[5]=d-v*u,n[9]=-a*l,n[2]=v-d*u,n[6]=m+h*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,h=l*c,m=u*f,v=u*c;n[0]=d+v*a,n[4]=m*a-h,n[8]=o*u,n[1]=o*c,n[5]=o*f,n[9]=-a,n[2]=h*a-m,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,h=l*c,m=u*f,v=u*c;n[0]=d-v*a,n[4]=-o*c,n[8]=m+h*a,n[1]=h+m*a,n[5]=o*f,n[9]=v-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,h=o*c,m=a*f,v=a*c;n[0]=l*f,n[4]=m*u-h,n[8]=d*u+v,n[1]=l*c,n[5]=v*u+d,n[9]=h*u-m,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*u,m=a*l,v=a*u;n[0]=l*f,n[4]=v-d*c,n[8]=m*c+h,n[1]=c,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=h*c+m,n[10]=d-v*c}else if(e.order==="XZY"){const d=o*l,h=o*u,m=a*l,v=a*u;n[0]=l*f,n[4]=-c,n[8]=u*f,n[1]=d*c+v,n[5]=o*f,n[9]=h*c-m,n[2]=m*c-h,n[6]=a*f,n[10]=v*c+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gw,e,Ww)}lookAt(e,n,i){const r=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),nr.crossVectors(i,An),nr.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),nr.crossVectors(i,An)),nr.normalize(),dl.crossVectors(An,nr),r[0]=nr.x,r[4]=dl.x,r[8]=An.x,r[1]=nr.y,r[5]=dl.y,r[9]=An.y,r[2]=nr.z,r[6]=dl.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],c=i[5],d=i[9],h=i[13],m=i[2],v=i[6],x=i[10],p=i[14],g=i[3],_=i[7],E=i[11],C=i[15],M=r[0],b=r[4],y=r[8],T=r[12],R=r[1],P=r[5],F=r[9],V=r[13],Y=r[2],z=r[6],X=r[10],H=r[14],j=r[3],Z=r[7],A=r[11],re=r[15];return s[0]=o*M+a*R+l*Y+u*j,s[4]=o*b+a*P+l*z+u*Z,s[8]=o*y+a*F+l*X+u*A,s[12]=o*T+a*V+l*H+u*re,s[1]=f*M+c*R+d*Y+h*j,s[5]=f*b+c*P+d*z+h*Z,s[9]=f*y+c*F+d*X+h*A,s[13]=f*T+c*V+d*H+h*re,s[2]=m*M+v*R+x*Y+p*j,s[6]=m*b+v*P+x*z+p*Z,s[10]=m*y+v*F+x*X+p*A,s[14]=m*T+v*V+x*H+p*re,s[3]=g*M+_*R+E*Y+C*j,s[7]=g*b+_*P+E*z+C*Z,s[11]=g*y+_*F+E*X+C*A,s[15]=g*T+_*V+E*H+C*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],c=e[6],d=e[10],h=e[14],m=e[3],v=e[7],x=e[11],p=e[15],g=l*h-u*d,_=a*h-u*c,E=a*d-l*c,C=o*h-u*f,M=o*d-l*f,b=o*c-a*f;return n*(v*g-x*_+p*E)-i*(m*g-x*C+p*M)+r*(m*_-v*C+p*b)-s*(m*E-v*M+x*b)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],c=e[9],d=e[10],h=e[11],m=e[12],v=e[13],x=e[14],p=e[15],g=n*a-i*o,_=n*l-r*o,E=n*u-s*o,C=i*l-r*a,M=i*u-s*a,b=r*u-s*l,y=f*v-c*m,T=f*x-d*m,R=f*p-h*m,P=c*x-d*v,F=c*p-h*v,V=d*p-h*x,Y=g*V-_*F+E*P+C*R-M*T+b*y;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/Y;return e[0]=(a*V-l*F+u*P)*z,e[1]=(r*F-i*V-s*P)*z,e[2]=(v*b-x*M+p*C)*z,e[3]=(d*M-c*b-h*C)*z,e[4]=(l*R-o*V-u*T)*z,e[5]=(n*V-r*R+s*T)*z,e[6]=(x*E-m*b-p*_)*z,e[7]=(f*b-d*E+h*_)*z,e[8]=(o*F-a*R+u*y)*z,e[9]=(i*R-n*F-s*y)*z,e[10]=(m*M-v*E+p*g)*z,e[11]=(c*E-f*M-h*g)*z,e[12]=(a*T-o*P-l*y)*z,e[13]=(n*P-i*T+r*y)*z,e[14]=(v*_-m*C-x*g)*z,e[15]=(f*C-c*_+d*g)*z,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,c=a+a,d=s*u,h=s*f,m=s*c,v=o*f,x=o*c,p=a*c,g=l*u,_=l*f,E=l*c,C=i.x,M=i.y,b=i.z;return r[0]=(1-(v+p))*C,r[1]=(h+E)*C,r[2]=(m-_)*C,r[3]=0,r[4]=(h-E)*M,r[5]=(1-(d+p))*M,r[6]=(x+g)*M,r[7]=0,r[8]=(m+_)*b,r[9]=(x-g)*b,r[10]=(1-(d+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=_s.set(r[0],r[1],r[2]).length();const a=_s.set(r[4],r[5],r[6]).length(),l=_s.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Jn.copy(this);const u=1/o,f=1/a,c=1/l;return Jn.elements[0]*=u,Jn.elements[1]*=u,Jn.elements[2]*=u,Jn.elements[4]*=f,Jn.elements[5]*=f,Jn.elements[6]*=f,Jn.elements[8]*=c,Jn.elements[9]*=c,Jn.elements[10]*=c,n.setFromRotationMatrix(Jn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Ei,l=!1){const u=this.elements,f=2*s/(n-e),c=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,v;if(l)m=s/(o-s),v=o*s/(o-s);else if(a===Ei)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Ca)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=c,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei,l=!1){const u=this.elements,f=2/(n-e),c=2/(i-r),d=-(n+e)/(n-e),h=-(i+r)/(i-r);let m,v;if(l)m=1/(o-s),v=o/(o-s);else if(a===Ei)m=-2/(o-s),v=-(o+s)/(o-s);else if(a===Ca)m=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=c,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=m,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const _s=new K,Jn=new Tt,Gw=new K(0,0,0),Ww=new K(1,1,1),nr=new K,dl=new K,An=new K,Vg=new Tt,Gg=new vo;class bi{constructor(e=0,n=0,i=0,r=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],c=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,h),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,h),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Vg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gg.setFromEuler(this),this.setFromQuaternion(Gg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Ty{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jw=0;const Wg=new K,vs=new vo,Li=new Tt,hl=new K,Do=new K,Xw=new K,qw=new vo,jg=new K(1,0,0),Xg=new K(0,1,0),qg=new K(0,0,1),Yg={type:"added"},Yw={type:"removed"},ys={type:"childadded",child:null},Kc={type:"childremoved",child:null};class Kt extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jw++}),this.uuid=za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new K,n=new bi,i=new vo,r=new K(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ve}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ty,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(jg,e)}rotateY(e){return this.rotateOnAxis(Xg,e)}rotateZ(e){return this.rotateOnAxis(qg,e)}translateOnAxis(e,n){return Wg.copy(e).applyQuaternion(this.quaternion),this.position.add(Wg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(jg,e)}translateY(e){return this.translateOnAxis(Xg,e)}translateZ(e){return this.translateOnAxis(qg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?hl.copy(e):hl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Do,hl,this.up):Li.lookAt(hl,Do,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),vs.setFromRotationMatrix(Li),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yg),ys.child=e,this.dispatchEvent(ys),ys.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Yw),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yg),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,Xw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,qw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const c=l[u];s(e.shapes,c)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),c=o(e.shapes),d=o(e.skeletons),h=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),c.length>0&&(i.shapes=c),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Kt.DEFAULT_UP=new K(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xo extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $w={type:"move"};class Zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const x=n.getJointPose(v,i),p=this._getHandJoint(u,v);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const f=u.joints["index-finger-tip"],c=u.joints["thumb-tip"],d=f.position.distanceTo(c.position),h=.02,m=.005;u.inputState.pinching&&d>h+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=h-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($w)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Xo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Ay={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},pl={h:0,s:0,l:0};function Jc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=Fw(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Jc(o,s,e+1/3),this.g=Jc(o,s,e),this.b=Jc(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,n=On){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=On){const i=Ay[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return Qe.workingToColorSpace(nn.copy(this),e),Math.round($e(nn.r*255,0,255))*65536+Math.round($e(nn.g*255,0,255))*256+Math.round($e(nn.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const c=o-a;switch(u=f<=.5?c/(o+a):c/(2-o-a),o){case i:l=(r-s)/c+(r<s?6:0);break;case r:l=(s-i)/c+2;break;case s:l=(i-r)/c+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Qe.workingColorSpace){return Qe.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=On){Qe.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==On?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+n,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ir),e.getHSL(pl);const i=jc(ir.h,pl.h,n),r=jc(ir.s,pl.s,n),s=jc(ir.l,pl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Ke;Ke.NAMES=Ay;class Gp{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ke(e),this.density=n}clone(){return new Gp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Kw extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Qn=new K,Di=new K,Qc=new K,Ni=new K,Ss=new K,Es=new K,$g=new K,ef=new K,tf=new K,nf=new K,rf=new Rt,sf=new Rt,of=new Rt;class ri{constructor(e=new K,n=new K,i=new K){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Qn.subVectors(e,n),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Qn.subVectors(r,n),Di.subVectors(i,n),Qc.subVectors(e,n);const o=Qn.dot(Qn),a=Qn.dot(Di),l=Qn.dot(Qc),u=Di.dot(Di),f=Di.dot(Qc),c=o*u-a*a;if(c===0)return s.set(0,0,0),null;const d=1/c,h=(u*l-a*f)*d,m=(o*f-a*l)*d;return s.set(1-h-m,m,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(o,Ni.y),l.addScaledVector(a,Ni.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return rf.setScalar(0),sf.setScalar(0),of.setScalar(0),rf.fromBufferAttribute(e,n),sf.fromBufferAttribute(e,i),of.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(rf,s.x),o.addScaledVector(sf,s.y),o.addScaledVector(of,s.z),o}static isFrontFacing(e,n,i,r){return Qn.subVectors(i,n),Di.subVectors(e,n),Qn.cross(Di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),Qn.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ss.subVectors(r,i),Es.subVectors(s,i),ef.subVectors(e,i);const l=Ss.dot(ef),u=Es.dot(ef);if(l<=0&&u<=0)return n.copy(i);tf.subVectors(e,r);const f=Ss.dot(tf),c=Es.dot(tf);if(f>=0&&c<=f)return n.copy(r);const d=l*c-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Ss,o);nf.subVectors(e,s);const h=Ss.dot(nf),m=Es.dot(nf);if(m>=0&&h<=m)return n.copy(s);const v=h*u-l*m;if(v<=0&&u>=0&&m<=0)return a=u/(u-m),n.copy(i).addScaledVector(Es,a);const x=f*m-h*c;if(x<=0&&c-f>=0&&h-m>=0)return $g.subVectors(s,r),a=(c-f)/(c-f+(h-m)),n.copy(r).addScaledVector($g,a);const p=1/(x+v+d);return o=v*p,a=d*p,n.copy(i).addScaledVector(Ss,o).addScaledVector(Es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ba{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ml.copy(i.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),gl.subVectors(this.max,No),Ms.subVectors(e.a,No),ws.subVectors(e.b,No),Ts.subVectors(e.c,No),rr.subVectors(ws,Ms),sr.subVectors(Ts,ws),Fr.subVectors(Ms,Ts);let n=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Fr.z,Fr.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Fr.z,0,-Fr.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Fr.y,Fr.x,0];return!af(n,Ms,ws,Ts,gl)||(n=[1,0,0,0,1,0,0,0,1],!af(n,Ms,ws,Ts,gl))?!1:(xl.crossVectors(rr,sr),n=[xl.x,xl.y,xl.z],af(n,Ms,ws,Ts,gl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ki=[new K,new K,new K,new K,new K,new K,new K,new K],ei=new K,ml=new Ba,Ms=new K,ws=new K,Ts=new K,rr=new K,sr=new K,Fr=new K,No=new K,gl=new K,xl=new K,Ur=new K;function af(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ur.fromArray(t,s);const a=r.x*Math.abs(Ur.x)+r.y*Math.abs(Ur.y)+r.z*Math.abs(Ur.z),l=e.dot(Ur),u=n.dot(Ur),f=i.dot(Ur);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const Dt=new K,_l=new rt;let Zw=0;class li{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=kg,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_l.fromBufferAttribute(this,n),_l.applyMatrix3(e),this.setXY(n,_l.x,_l.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Lo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array),s=xn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kg&&(e.usage=this.usage),e}}class Cy extends li{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class by extends li{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class jn extends li{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Jw=new Ba,ko=new K,lf=new K;class nc{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Jw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const n=ko.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ko,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(lf)),this.expandByPoint(ko.copy(e.center).sub(lf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Qw=0;const Un=new Tt,uf=new Kt,As=new K,Cn=new Ba,Fo=new Ba,Ht=new K;class $n extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qw++}),this.uuid=za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lw(e)?by:Cy)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return uf.lookAt(e),uf.updateMatrix(),this.applyMatrix4(uf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ba);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(Cn.min,Fo.min),Cn.expandByPoint(Ht),Ht.addVectors(Cn.max,Fo.max),Cn.expandByPoint(Ht)):(Cn.expandByPoint(Fo.min),Cn.expandByPoint(Fo.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Ht.fromBufferAttribute(a,u),l&&(As.fromBufferAttribute(e,u),Ht.add(As)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new K,l[y]=new K;const u=new K,f=new K,c=new K,d=new rt,h=new rt,m=new rt,v=new K,x=new K;function p(y,T,R){u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,T),c.fromBufferAttribute(i,R),d.fromBufferAttribute(s,y),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,R),f.sub(u),c.sub(u),h.sub(d),m.sub(d);const P=1/(h.x*m.y-m.x*h.y);isFinite(P)&&(v.copy(f).multiplyScalar(m.y).addScaledVector(c,-h.y).multiplyScalar(P),x.copy(c).multiplyScalar(h.x).addScaledVector(f,-m.x).multiplyScalar(P),a[y].add(v),a[T].add(v),a[R].add(v),l[y].add(x),l[T].add(x),l[R].add(x))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let y=0,T=g.length;y<T;++y){const R=g[y],P=R.start,F=R.count;for(let V=P,Y=P+F;V<Y;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const _=new K,E=new K,C=new K,M=new K;function b(y){C.fromBufferAttribute(r,y),M.copy(C);const T=a[y];_.copy(T),_.sub(C.multiplyScalar(C.dot(T))).normalize(),E.crossVectors(M,T);const P=E.dot(l[y])<0?-1:1;o.setXYZW(y,_.x,_.y,_.z,P)}for(let y=0,T=g.length;y<T;++y){const R=g[y],P=R.start,F=R.count;for(let V=P,Y=P+F;V<Y;V+=3)b(e.getX(V+0)),b(e.getX(V+1)),b(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new K,s=new K,o=new K,a=new K,l=new K,u=new K,f=new K,c=new K;if(e)for(let d=0,h=e.count;d<h;d+=3){const m=e.getX(d+0),v=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,x),f.subVectors(o,s),c.subVectors(r,s),f.cross(c),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,x),a.add(f),l.add(f),u.add(f),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),c.subVectors(r,s),f.cross(c),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,c=a.normalized,d=new u.constructor(l.length*f);let h=0,m=0;for(let v=0,x=l.length;v<x;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*f;for(let p=0;p<f;p++)d[m++]=u[h++]}return new li(d,f,c)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $n,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,c=u.length;f<c;f++){const d=u[f],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let c=0,d=u.length;c<d;c++){const h=u[c];f.push(h.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],c=s[u];for(let d=0,h=c.length;d<h;d++)f.push(c[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const c=o[u];this.addGroup(c.start,c.count,c.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let eT=0;class yo extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eT++}),this.uuid=za(),this.name="",this.type="Material",this.blending=Js,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Dd,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ng,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Oe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==Rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ld&&(i.blendSrc=this.blendSrc),this.blendDst!==Dd&&(i.blendDst=this.blendDst),this.blendEquation!==Xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ng&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Fi=new K,cf=new K,vl=new K,or=new K,ff=new K,yl=new K,df=new K;class Ry{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,n),Fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){cf.copy(e).add(n).multiplyScalar(.5),vl.copy(n).sub(e).normalize(),or.copy(this.origin).sub(cf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(vl),a=or.dot(this.direction),l=-or.dot(vl),u=or.lengthSq(),f=Math.abs(1-o*o);let c,d,h,m;if(f>0)if(c=o*l-a,d=o*a-l,m=s*f,c>=0)if(d>=-m)if(d<=m){const v=1/f;c*=v,d*=v,h=c*(c+o*d+2*a)+d*(o*c+d+2*l)+u}else d=s,c=Math.max(0,-(o*d+a)),h=-c*c+d*(d+2*l)+u;else d=-s,c=Math.max(0,-(o*d+a)),h=-c*c+d*(d+2*l)+u;else d<=-m?(c=Math.max(0,-(-o*s+a)),d=c>0?-s:Math.min(Math.max(-s,-l),s),h=-c*c+d*(d+2*l)+u):d<=m?(c=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+u):(c=Math.max(0,-(o*s+a)),d=c>0?s:Math.min(Math.max(-s,-l),s),h=-c*c+d*(d+2*l)+u);else d=o>0?-s:s,c=Math.max(0,-(o*d+a)),h=-c*c+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(cf).addScaledVector(vl,d),h}intersectSphere(e,n){Fi.subVectors(e.center,this.origin);const i=Fi.dot(this.direction),r=Fi.dot(Fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,c=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),c>=0?(a=(e.min.z-d.z)*c,l=(e.max.z-d.z)*c):(a=(e.max.z-d.z)*c,l=(e.min.z-d.z)*c),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,n,i,r,s){ff.subVectors(n,e),yl.subVectors(i,e),df.crossVectors(ff,yl);let o=this.direction.dot(df),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;or.subVectors(this.origin,e);const l=a*this.direction.dot(yl.crossVectors(or,yl));if(l<0)return null;const u=a*this.direction.dot(ff.cross(or));if(u<0||l+u>o)return null;const f=-a*or.dot(df);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Py extends yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Dp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kg=new Tt,Or=new Ry,Sl=new nc,Zg=new K,El=new K,Ml=new K,wl=new K,hf=new K,Tl=new K,Jg=new K,Al=new K;class Xn extends Kt{constructor(e=new $n,n=new Py){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Tl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],c=s[l];f!==0&&(hf.fromBufferAttribute(c,e),o?Tl.addScaledVector(hf,f):Tl.addScaledVector(hf.sub(n),f))}n.add(Tl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(s),Or.copy(e.ray).recast(e.near),!(Sl.containsPoint(Or.origin)===!1&&(Or.intersectSphere(Sl,Zg)===null||Or.origin.distanceToSquared(Zg)>(e.far-e.near)**2))&&(Kg.copy(s).invert(),Or.copy(e.ray).applyMatrix4(Kg),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,c=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const x=d[m],p=o[x.materialIndex],g=Math.max(x.start,h.start),_=Math.min(a.count,Math.min(x.start+x.count,h.start+h.count));for(let E=g,C=_;E<C;E+=3){const M=a.getX(E),b=a.getX(E+1),y=a.getX(E+2);r=Cl(this,p,e,i,u,f,c,M,b,y),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const m=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let x=m,p=v;x<p;x+=3){const g=a.getX(x),_=a.getX(x+1),E=a.getX(x+2);r=Cl(this,o,e,i,u,f,c,g,_,E),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const x=d[m],p=o[x.materialIndex],g=Math.max(x.start,h.start),_=Math.min(l.count,Math.min(x.start+x.count,h.start+h.count));for(let E=g,C=_;E<C;E+=3){const M=E,b=E+1,y=E+2;r=Cl(this,p,e,i,u,f,c,M,b,y),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const m=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let x=m,p=v;x<p;x+=3){const g=x,_=x+1,E=x+2;r=Cl(this,o,e,i,u,f,c,g,_,E),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function tT(t,e,n,i,r,s,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Rr,a),l===null)return null;Al.copy(a),Al.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Al);return u<n.near||u>n.far?null:{distance:u,point:Al.clone(),object:t}}function Cl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,El),t.getVertexPosition(l,Ml),t.getVertexPosition(u,wl);const f=tT(t,e,n,i,El,Ml,wl,Jg);if(f){const c=new K;ri.getBarycoord(Jg,El,Ml,wl,c),r&&(f.uv=ri.getInterpolatedAttribute(r,a,l,u,c,new rt)),s&&(f.uv1=ri.getInterpolatedAttribute(s,a,l,u,c,new rt)),o&&(f.normal=ri.getInterpolatedAttribute(o,a,l,u,c,new K),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new K,materialIndex:0};ri.getNormal(El,Ml,wl,d.normal),f.face=d,f.barycoord=c}return f}class nT extends $t{constructor(e=null,n=1,i=1,r,s,o,a,l,u=qt,f=qt,c,d){super(null,o,a,l,u,f,r,s,c,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pf=new K,iT=new K,rT=new Ve;class jr{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=pf.subVectors(i,n).cross(iT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(pf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||rT.getNormalMatrix(e),r=this.coplanarPoint(pf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new nc,sT=new rt(.5,.5),bl=new K;class Wp{constructor(e=new jr,n=new jr,i=new jr,r=new jr,s=new jr,o=new jr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],f=s[4],c=s[5],d=s[6],h=s[7],m=s[8],v=s[9],x=s[10],p=s[11],g=s[12],_=s[13],E=s[14],C=s[15];if(r[0].setComponents(u-o,h-f,p-m,C-g).normalize(),r[1].setComponents(u+o,h+f,p+m,C+g).normalize(),r[2].setComponents(u+a,h+c,p+v,C+_).normalize(),r[3].setComponents(u-a,h-c,p-v,C-_).normalize(),i)r[4].setComponents(l,d,x,E).normalize(),r[5].setComponents(u-l,h-d,p-x,C-E).normalize();else if(r[4].setComponents(u-l,h-d,p-x,C-E).normalize(),n===Ei)r[5].setComponents(u+l,h+d,p+x,C+E).normalize();else if(n===Ca)r[5].setComponents(l,d,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){zr.center.set(0,0,0);const n=sT.distanceTo(e.center);return zr.radius=.7071067811865476+n,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(bl.x=r.normal.x>0?e.max.x:e.min.x,bl.y=r.normal.y>0?e.max.y:e.min.y,bl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Iy extends yo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qg=new Tt,Eh=new Ry,Rl=new nc,Pl=new K;class oT extends Kt{constructor(e=new $n,n=new Iy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rl.copy(i.boundingSphere),Rl.applyMatrix4(r),Rl.radius+=s,e.ray.intersectsSphere(Rl)===!1)return;Qg.copy(r).invert(),Eh.copy(e.ray).applyMatrix4(Qg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,c=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),h=Math.min(u.count,o.start+o.count);for(let m=d,v=h;m<v;m++){const x=u.getX(m);Pl.fromBufferAttribute(c,x),e0(Pl,x,l,r,e,n,this)}}else{const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let m=d,v=h;m<v;m++)Pl.fromBufferAttribute(c,m),e0(Pl,m,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function e0(t,e,n,i,r,s,o){const a=Eh.distanceSqToPoint(t);if(a<n){const l=new K;Eh.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ly extends $t{constructor(e=[],n=as,i,r,s,o,a,l,u,f){super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aT extends $t{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ra extends $t{constructor(e,n,i=Ci,r,s,o,a=qt,l=qt,u,f=Ki,c=1){if(f!==Ki&&f!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:c};super(d,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class lT extends Ra{constructor(e,n=Ci,i=as,r,s,o=qt,a=qt,l,u=Ki){const f={width:e,height:e,depth:1},c=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,u),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dy extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ha extends $n{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],c=[];let d=0,h=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new jn(u,3)),this.setAttribute("normal",new jn(f,3)),this.setAttribute("uv",new jn(c,2));function m(v,x,p,g,_,E,C,M,b,y,T){const R=E/b,P=C/y,F=E/2,V=C/2,Y=M/2,z=b+1,X=y+1;let H=0,j=0;const Z=new K;for(let A=0;A<X;A++){const re=A*P-V;for(let se=0;se<z;se++){const L=se*R-F;Z[v]=L*g,Z[x]=re*_,Z[p]=Y,u.push(Z.x,Z.y,Z.z),Z[v]=0,Z[x]=0,Z[p]=M>0?1:-1,f.push(Z.x,Z.y,Z.z),c.push(se/b),c.push(1-A/y),H+=1}}for(let A=0;A<y;A++)for(let re=0;re<b;re++){const se=d+re+z*A,L=d+re+z*(A+1),Fe=d+(re+1)+z*(A+1),Ge=d+(re+1)+z*A;l.push(se,L,Ge),l.push(L,Fe,Ge),j+=6}a.addGroup(h,j,T),h+=j,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ic extends $n{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,c=e/a,d=n/l,h=[],m=[],v=[],x=[];for(let p=0;p<f;p++){const g=p*d-o;for(let _=0;_<u;_++){const E=_*c-s;m.push(E,-g,0),v.push(0,0,1),x.push(_/a),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let g=0;g<a;g++){const _=g+u*p,E=g+u*(p+1),C=g+1+u*(p+1),M=g+1+u*p;h.push(_,E,M),h.push(E,C,M)}this.setIndex(h),this.setAttribute("position",new jn(m,3)),this.setAttribute("normal",new jn(v,3)),this.setAttribute("uv",new jn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.width,e.height,e.widthSegments,e.heightSegments)}}class ia extends $n{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const f=[],c=new K,d=new K,h=[],m=[],v=[],x=[];for(let p=0;p<=i;p++){const g=[],_=p/i;let E=0;p===0&&o===0?E=.5/n:p===i&&l===Math.PI&&(E=-.5/n);for(let C=0;C<=n;C++){const M=C/n;c.x=-e*Math.cos(r+M*s)*Math.sin(o+_*a),c.y=e*Math.cos(o+_*a),c.z=e*Math.sin(r+M*s)*Math.sin(o+_*a),m.push(c.x,c.y,c.z),d.copy(c).normalize(),v.push(d.x,d.y,d.z),x.push(M+E,1-_),g.push(u++)}f.push(g)}for(let p=0;p<i;p++)for(let g=0;g<n;g++){const _=f[p][g+1],E=f[p][g],C=f[p+1][g],M=f[p+1][g+1];(p!==0||o>0)&&h.push(_,E,M),(p!==i-1||l<Math.PI)&&h.push(E,C,M)}this.setIndex(h),this.setAttribute("position",new jn(m,3)),this.setAttribute("normal",new jn(v,3)),this.setAttribute("uv",new jn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ho(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=ho(t[n]);for(const r in i)e[r]=i[r]}return e}function uT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ny(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const cT={clone:ho,merge:cn};var fT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fT,this.fragmentShader=dT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=uT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class hT extends fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class t0 extends yo{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ke(16777215),this.specular=new Ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ey,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Dp,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pT extends yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ww,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mT extends yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mf={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(n0(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!n0(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function n0(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class gT{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,c){return u.push(f,c),this},this.removeHandler=function(f){const c=u.indexOf(f);return c!==-1&&u.splice(c,2),this},this.getHandler=function(f){for(let c=0,d=u.length;c<d;c+=2){const h=u[c],m=u[c+1];if(h.global&&(h.lastIndex=0),h.test(f))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const xT=new gT;class jp{constructor(e){this.manager=e!==void 0?e:xT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}jp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cs=new WeakMap;class _T extends jp{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=mf.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0);else{let c=Cs.get(o);c===void 0&&(c=[],Cs.set(o,c)),c.push({onLoad:n,onError:r})}return o}const a=ba("img");function l(){f(),n&&n(this);const c=Cs.get(this)||[];for(let d=0;d<c.length;d++){const h=c[d];h.onLoad&&h.onLoad(this)}Cs.delete(this),s.manager.itemEnd(e)}function u(c){f(),r&&r(c),mf.remove(`image:${e}`);const d=Cs.get(this)||[];for(let h=0;h<d.length;h++){const m=d[h];m.onError&&m.onError(c)}Cs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),mf.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class vT extends jp{constructor(e){super(e)}load(e,n,i,r){const s=new $t,o=new _T(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class ky extends Kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const gf=new Tt,i0=new K,r0=new K;class yT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wp,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;i0.setFromMatrixPosition(e.matrixWorld),n.position.copy(i0),r0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(r0),n.updateMatrixWorld(),gf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gf,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Ca||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Il=new K,Ll=new vo,pi=new K;class Fy extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Il,Ll,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Ll,pi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Il,Ll,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Ll,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ar=new K,s0=new rt,o0=new rt;class Hn extends Fy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Sh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sh*2*Math.atan(Math.tan(Wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,n){return this.getViewBounds(e,s0,o0),n.subVectors(o0,s0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Wc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Xp extends Fy{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class ST extends yT{constructor(){super(new Xp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class a0 extends ky{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new ST}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class ET extends ky{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const bs=-90,Rs=1;class MT extends Kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Hn(bs,Rs,e,n);r.layers=this.layers,this.add(r);const s=new Hn(bs,Rs,e,n);s.layers=this.layers,this.add(s);const o=new Hn(bs,Rs,e,n);o.layers=this.layers,this.add(o);const a=new Hn(bs,Rs,e,n);a.layers=this.layers,this.add(a);const l=new Hn(bs,Rs,e,n);l.layers=this.layers,this.add(l);const u=new Hn(bs,Rs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(c,d,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class wT extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function l0(t,e,n,i){const r=TT(i);switch(n){case vy:return t*e;case Sy:return t*e/r.components*r.byteLength;case Up:return t*e/r.components*r.byteLength;case co:return t*e*2/r.components*r.byteLength;case Op:return t*e*2/r.components*r.byteLength;case yy:return t*e*3/r.components*r.byteLength;case si:return t*e*4/r.components*r.byteLength;case zp:return t*e*4/r.components*r.byteLength;case Jl:case Ql:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case eu:case tu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wd:case Xd:return Math.max(t,16)*Math.max(e,8)/4;case Gd:case jd:return Math.max(t,8)*Math.max(e,8)/2;case qd:case Yd:case Kd:case Zd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $d:case Jd:case Qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case nh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ih:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case rh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case sh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case oh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ah:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case lh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case uh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ch:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case fh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case dh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case hh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ph:case mh:case gh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case xh:case _h:return Math.ceil(t/4)*Math.ceil(e/4)*8;case vh:case yh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function TT(t){switch(t){case Pn:case my:return{byteLength:1,components:1};case Ta:case gy:case $i:return{byteLength:2,components:1};case kp:case Fp:return{byteLength:2,components:4};case Ci:case Np:case Si:return{byteLength:4,components:1};case xy:case _y:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lp}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Uy(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function AT(t){const e=new WeakMap;function n(a,l){const u=a.array,f=a.usage,c=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,f),a.onUploadCallback();let h;if(u instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=t.SHORT;else if(u instanceof Uint32Array)h=t.UNSIGNED_INT;else if(u instanceof Int32Array)h=t.INT;else if(u instanceof Int8Array)h=t.BYTE;else if(u instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:c}}function i(a,l,u){const f=l.array,c=l.updateRanges;if(t.bindBuffer(u,a),c.length===0)t.bufferSubData(u,0,f);else{c.sort((h,m)=>h.start-m.start);let d=0;for(let h=1;h<c.length;h++){const m=c[d],v=c[h];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,c[d]=v)}c.length=d+1;for(let h=0,m=c.length;h<m;h++){const v=c[h];t.bufferSubData(u,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var CT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bT=`#ifdef USE_ALPHAHASH
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
#endif`,RT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DT=`#ifdef USE_AOMAP
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
#endif`,NT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kT=`#ifdef USE_BATCHING
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
#endif`,FT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,BT=`#ifdef USE_IRIDESCENCE
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
#endif`,HT=`#ifdef USE_BUMPMAP
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
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,YT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$T=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,KT=`#define PI 3.141592653589793
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
} // validated`,ZT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,JT=`vec3 transformedNormal = objectNormal;
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
#endif`,QT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iA="gl_FragColor = linearToOutputTexel( gl_FragColor );",rA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sA=`#ifdef USE_ENVMAP
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
#endif`,oA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,aA=`#ifdef USE_ENVMAP
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
#endif`,lA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uA=`#ifdef USE_ENVMAP
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
#endif`,cA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pA=`#ifdef USE_GRADIENTMAP
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
}`,mA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_A=`uniform bool receiveShadow;
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
#endif`,vA=`#ifdef USE_ENVMAP
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
#endif`,yA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wA=`PhysicalMaterial material;
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
#endif`,TA=`uniform sampler2D dfgLUT;
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
}`,AA=`
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
#endif`,CA=`#if defined( RE_IndirectDiffuse )
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
#endif`,bA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,FA=`#if defined( USE_POINTS_UV )
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
#endif`,UA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VA=`#ifdef USE_MORPHTARGETS
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
#endif`,GA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,XA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$A=`#ifdef USE_NORMALMAP
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
#endif`,KA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fC=`float getShadowMask() {
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
}`,dC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hC=`#ifdef USE_SKINNING
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
#endif`,pC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mC=`#ifdef USE_SKINNING
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
#endif`,gC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_C=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yC=`#ifdef USE_TRANSMISSION
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
#endif`,SC=`#ifdef USE_TRANSMISSION
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
#endif`,EC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CC=`uniform sampler2D t2D;
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
}`,bC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,PC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LC=`#include <common>
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
}`,DC=`#if DEPTH_PACKING == 3200
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
}`,NC=`#define DISTANCE
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
}`,kC=`#define DISTANCE
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
}`,FC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OC=`uniform float scale;
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
}`,zC=`uniform vec3 diffuse;
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
}`,BC=`#include <common>
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
}`,HC=`uniform vec3 diffuse;
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
}`,VC=`#define LAMBERT
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
}`,GC=`#define LAMBERT
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
}`,WC=`#define MATCAP
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
}`,jC=`#define MATCAP
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
}`,XC=`#define NORMAL
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
}`,qC=`#define NORMAL
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
}`,YC=`#define PHONG
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
}`,$C=`#define PHONG
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
}`,KC=`#define STANDARD
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
}`,ZC=`#define STANDARD
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
}`,JC=`#define TOON
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
}`,QC=`#define TOON
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
}`,eb=`uniform float size;
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
}`,tb=`uniform vec3 diffuse;
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
}`,nb=`#include <common>
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
}`,ib=`uniform vec3 color;
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
}`,rb=`uniform float rotation;
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
}`,sb=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:CT,alphahash_pars_fragment:bT,alphamap_fragment:RT,alphamap_pars_fragment:PT,alphatest_fragment:IT,alphatest_pars_fragment:LT,aomap_fragment:DT,aomap_pars_fragment:NT,batching_pars_vertex:kT,batching_vertex:FT,begin_vertex:UT,beginnormal_vertex:OT,bsdfs:zT,iridescence_fragment:BT,bumpmap_pars_fragment:HT,clipping_planes_fragment:VT,clipping_planes_pars_fragment:GT,clipping_planes_pars_vertex:WT,clipping_planes_vertex:jT,color_fragment:XT,color_pars_fragment:qT,color_pars_vertex:YT,color_vertex:$T,common:KT,cube_uv_reflection_fragment:ZT,defaultnormal_vertex:JT,displacementmap_pars_vertex:QT,displacementmap_vertex:eA,emissivemap_fragment:tA,emissivemap_pars_fragment:nA,colorspace_fragment:iA,colorspace_pars_fragment:rA,envmap_fragment:sA,envmap_common_pars_fragment:oA,envmap_pars_fragment:aA,envmap_pars_vertex:lA,envmap_physical_pars_fragment:vA,envmap_vertex:uA,fog_vertex:cA,fog_pars_vertex:fA,fog_fragment:dA,fog_pars_fragment:hA,gradientmap_pars_fragment:pA,lightmap_pars_fragment:mA,lights_lambert_fragment:gA,lights_lambert_pars_fragment:xA,lights_pars_begin:_A,lights_toon_fragment:yA,lights_toon_pars_fragment:SA,lights_phong_fragment:EA,lights_phong_pars_fragment:MA,lights_physical_fragment:wA,lights_physical_pars_fragment:TA,lights_fragment_begin:AA,lights_fragment_maps:CA,lights_fragment_end:bA,logdepthbuf_fragment:RA,logdepthbuf_pars_fragment:PA,logdepthbuf_pars_vertex:IA,logdepthbuf_vertex:LA,map_fragment:DA,map_pars_fragment:NA,map_particle_fragment:kA,map_particle_pars_fragment:FA,metalnessmap_fragment:UA,metalnessmap_pars_fragment:OA,morphinstance_vertex:zA,morphcolor_vertex:BA,morphnormal_vertex:HA,morphtarget_pars_vertex:VA,morphtarget_vertex:GA,normal_fragment_begin:WA,normal_fragment_maps:jA,normal_pars_fragment:XA,normal_pars_vertex:qA,normal_vertex:YA,normalmap_pars_fragment:$A,clearcoat_normal_fragment_begin:KA,clearcoat_normal_fragment_maps:ZA,clearcoat_pars_fragment:JA,iridescence_pars_fragment:QA,opaque_fragment:eC,packing:tC,premultiplied_alpha_fragment:nC,project_vertex:iC,dithering_fragment:rC,dithering_pars_fragment:sC,roughnessmap_fragment:oC,roughnessmap_pars_fragment:aC,shadowmap_pars_fragment:lC,shadowmap_pars_vertex:uC,shadowmap_vertex:cC,shadowmask_pars_fragment:fC,skinbase_vertex:dC,skinning_pars_vertex:hC,skinning_vertex:pC,skinnormal_vertex:mC,specularmap_fragment:gC,specularmap_pars_fragment:xC,tonemapping_fragment:_C,tonemapping_pars_fragment:vC,transmission_fragment:yC,transmission_pars_fragment:SC,uv_pars_fragment:EC,uv_pars_vertex:MC,uv_vertex:wC,worldpos_vertex:TC,background_vert:AC,background_frag:CC,backgroundCube_vert:bC,backgroundCube_frag:RC,cube_vert:PC,cube_frag:IC,depth_vert:LC,depth_frag:DC,distance_vert:NC,distance_frag:kC,equirect_vert:FC,equirect_frag:UC,linedashed_vert:OC,linedashed_frag:zC,meshbasic_vert:BC,meshbasic_frag:HC,meshlambert_vert:VC,meshlambert_frag:GC,meshmatcap_vert:WC,meshmatcap_frag:jC,meshnormal_vert:XC,meshnormal_frag:qC,meshphong_vert:YC,meshphong_frag:$C,meshphysical_vert:KC,meshphysical_frag:ZC,meshtoon_vert:JC,meshtoon_frag:QC,points_vert:eb,points_frag:tb,shadow_vert:nb,shadow_frag:ib,sprite_vert:rb,sprite_frag:sb},me={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},_i={basic:{uniforms:cn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:cn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:cn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:cn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:cn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ke(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:cn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:cn([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:cn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:cn([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:cn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:cn([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:cn([me.common,me.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:cn([me.lights,me.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};_i.physical={uniforms:cn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Dl={r:0,b:0,g:0},Br=new bi,ob=new Tt;function ab(t,e,n,i,r,s){const o=new Ke(0);let a=r===!0?0:1,l,u,f=null,c=0,d=null;function h(g){let _=g.isScene===!0?g.background:null;if(_&&_.isTexture){const E=g.backgroundBlurriness>0;_=e.get(_,E)}return _}function m(g){let _=!1;const E=h(g);E===null?x(o,a):E&&E.isColor&&(x(E,1),_=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(g,_){const E=h(_);E&&(E.isCubeTexture||E.mapping===tc)?(u===void 0&&(u=new Xn(new Ha(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:ho(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,M,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Br.copy(_.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ob.makeRotationFromEuler(Br)),u.material.toneMapped=Qe.getTransfer(E.colorSpace)!==at,(f!==E||c!==E.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,f=E,c=E.version,d=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Xn(new ic(2,2),new fi({name:"BackgroundMaterial",uniforms:ho(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(E.colorSpace)!==at,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||c!==E.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=E,c=E.version,d=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function x(g,_){g.getRGB(Dl,Ny(t)),n.buffers.color.setClear(Dl.r,Dl.g,Dl.b,_,s)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,_=1){o.set(g),a=_,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,x(o,a)},render:m,addToRenderList:v,dispose:p}}function lb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(P,F,V,Y,z){let X=!1;const H=c(P,Y,V,F);s!==H&&(s=H,u(s.object)),X=h(P,Y,V,z),X&&m(P,Y,V,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,E(P,F,V,Y),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function u(P){return t.bindVertexArray(P)}function f(P){return t.deleteVertexArray(P)}function c(P,F,V,Y){const z=Y.wireframe===!0;let X=i[F.id];X===void 0&&(X={},i[F.id]=X);const H=P.isInstancedMesh===!0?P.id:0;let j=X[H];j===void 0&&(j={},X[H]=j);let Z=j[V.id];Z===void 0&&(Z={},j[V.id]=Z);let A=Z[z];return A===void 0&&(A=d(l()),Z[z]=A),A}function d(P){const F=[],V=[],Y=[];for(let z=0;z<n;z++)F[z]=0,V[z]=0,Y[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:Y,object:P,attributes:{},index:null}}function h(P,F,V,Y){const z=s.attributes,X=F.attributes;let H=0;const j=V.getAttributes();for(const Z in j)if(j[Z].location>=0){const re=z[Z];let se=X[Z];if(se===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(se=P.instanceColor)),re===void 0||re.attribute!==se||se&&re.data!==se.data)return!0;H++}return s.attributesNum!==H||s.index!==Y}function m(P,F,V,Y){const z={},X=F.attributes;let H=0;const j=V.getAttributes();for(const Z in j)if(j[Z].location>=0){let re=X[Z];re===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(re=P.instanceColor));const se={};se.attribute=re,re&&re.data&&(se.data=re.data),z[Z]=se,H++}s.attributes=z,s.attributesNum=H,s.index=Y}function v(){const P=s.newAttributes;for(let F=0,V=P.length;F<V;F++)P[F]=0}function x(P){p(P,0)}function p(P,F){const V=s.newAttributes,Y=s.enabledAttributes,z=s.attributeDivisors;V[P]=1,Y[P]===0&&(t.enableVertexAttribArray(P),Y[P]=1),z[P]!==F&&(t.vertexAttribDivisor(P,F),z[P]=F)}function g(){const P=s.newAttributes,F=s.enabledAttributes;for(let V=0,Y=F.length;V<Y;V++)F[V]!==P[V]&&(t.disableVertexAttribArray(V),F[V]=0)}function _(P,F,V,Y,z,X,H){H===!0?t.vertexAttribIPointer(P,F,V,z,X):t.vertexAttribPointer(P,F,V,Y,z,X)}function E(P,F,V,Y){v();const z=Y.attributes,X=V.getAttributes(),H=F.defaultAttributeValues;for(const j in X){const Z=X[j];if(Z.location>=0){let A=z[j];if(A===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(A=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(A=P.instanceColor)),A!==void 0){const re=A.normalized,se=A.itemSize,L=e.get(A);if(L===void 0)continue;const Fe=L.buffer,Ge=L.type,J=L.bytesPerElement,ne=Ge===t.INT||Ge===t.UNSIGNED_INT||A.gpuType===Np;if(A.isInterleavedBufferAttribute){const ae=A.data,ke=ae.stride,Re=A.offset;if(ae.isInstancedInterleavedBuffer){for(let De=0;De<Z.locationSize;De++)p(Z.location+De,ae.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let De=0;De<Z.locationSize;De++)x(Z.location+De);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let De=0;De<Z.locationSize;De++)_(Z.location+De,se/Z.locationSize,Ge,re,ke*J,(Re+se/Z.locationSize*De)*J,ne)}else{if(A.isInstancedBufferAttribute){for(let ae=0;ae<Z.locationSize;ae++)p(Z.location+ae,A.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let ae=0;ae<Z.locationSize;ae++)x(Z.location+ae);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let ae=0;ae<Z.locationSize;ae++)_(Z.location+ae,se/Z.locationSize,Ge,re,se*J,se/Z.locationSize*ae*J,ne)}}else if(H!==void 0){const re=H[j];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(Z.location,re);break;case 3:t.vertexAttrib3fv(Z.location,re);break;case 4:t.vertexAttrib4fv(Z.location,re);break;default:t.vertexAttrib1fv(Z.location,re)}}}}g()}function C(){T();for(const P in i){const F=i[P];for(const V in F){const Y=F[V];for(const z in Y){const X=Y[z];for(const H in X)f(X[H].object),delete X[H];delete Y[z]}}delete i[P]}}function M(P){if(i[P.id]===void 0)return;const F=i[P.id];for(const V in F){const Y=F[V];for(const z in Y){const X=Y[z];for(const H in X)f(X[H].object),delete X[H];delete Y[z]}}delete i[P.id]}function b(P){for(const F in i){const V=i[F];for(const Y in V){const z=V[Y];if(z[P.id]===void 0)continue;const X=z[P.id];for(const H in X)f(X[H].object),delete X[H];delete z[P.id]}}}function y(P){for(const F in i){const V=i[F],Y=P.isInstancedMesh===!0?P.id:0,z=V[Y];if(z!==void 0){for(const X in z){const H=z[X];for(const j in H)f(H[j].object),delete H[j];delete z[X]}delete V[Y],Object.keys(V).length===0&&delete i[F]}}}function T(){R(),o=!0,s!==r&&(s=r,u(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:C,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:x,disableUnusedAttributes:g}}function ub(t,e,n){let i;function r(u){i=u}function s(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function o(u,f,c){c!==0&&(t.drawArraysInstanced(i,u,f,c),n.update(f,i,c))}function a(u,f,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,c);let h=0;for(let m=0;m<c;m++)h+=f[m];n.update(h,i,1)}function l(u,f,c,d){if(c===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<u.length;m++)o(u[m],f[m],d[m]);else{h.multiDrawArraysInstancedWEBGL(i,u,0,f,0,d,0,c);let m=0;for(let v=0;v<c;v++)m+=f[v]*d[v];n.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==si&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const y=b===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Pn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Si&&!y)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(Oe("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const c=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),M=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:c,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:E,maxSamples:C,samples:M}}function fb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new jr,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const h=c.length!==0||d||i!==0||r;return r=d,i=c.length,h},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,d){n=f(c,d,0)},this.setState=function(c,d,h){const m=c.clippingPlanes,v=c.clipIntersection,x=c.clipShadows,p=t.get(c);if(!r||m===null||m.length===0||s&&!x)s?f(null):u();else{const g=s?0:i,_=g*4;let E=p.clippingState||null;l.value=E,E=f(m,d,_,h);for(let C=0;C!==_;++C)E[C]=n[C];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(c,d,h,m){const v=c!==null?c.length:0;let x=null;if(v!==0){if(x=l.value,m!==!0||x===null){const p=h+v*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(x===null||x.length<p)&&(x=new Float32Array(p));for(let _=0,E=h;_!==v;++_,E+=4)o.copy(c[_]).applyMatrix4(g,a),o.normal.toArray(x,E),x[E+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}const xr=4,u0=[.125,.215,.35,.446,.526,.582],qr=20,db=256,Uo=new Xp,c0=new Ke;let xf=null,_f=0,vf=0,yf=!1;const hb=new K;class f0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=hb}=s;xf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=p0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=h0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xf,_f,vf),this._renderer.xr.enabled=yf,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===as||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:$i,format:si,colorSpace:fo,depthBuffer:!1},r=d0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=d0(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=pb(s)),this._blurMaterial=gb(s,e,n),this._ggxMaterial=mb(s,e,n)}return r}_compileMaterial(e){const n=new Xn(new $n,e);this._renderer.compile(n,Uo)}_sceneToCubeUV(e,n,i,r,s){const l=new Hn(90,1,n,i),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(c0),c.toneMapping=Ti,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xn(new Ha,new Py({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,x=v.material;let p=!1;const g=e.background;g?g.isColor&&(x.color.copy(g),e.background=null,p=!0):(x.color.copy(c0),p=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(l.up.set(0,u[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[_],s.y,s.z)):E===1?(l.up.set(0,0,u[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[_],s.z)):(l.up.set(0,u[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[_]));const C=this._cubeSize;Ps(r,E*C,_>2?C:0,C,C),c.setRenderTarget(r),p&&c.render(v,l),c.render(e,l)}c.toneMapping=h,c.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===as||e.mapping===uo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=p0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=h0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ps(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Uo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,u=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),c=Math.sqrt(u*u-f*f),d=0+u*1.25,h=c*d,{_lodMax:m}=this,v=this._sizeLods[i],x=3*v*(i>m-xr?i-m+xr:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=m-n,Ps(s,x,p,3*v,2*v),r.setRenderTarget(s),r.render(a,Uo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Ps(e,x,p,3*v,2*v),r.setRenderTarget(e),r.render(a,Uo)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const f=3,c=this._lodMeshes[r];c.material=u;const d=u.uniforms,h=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*qr-1),v=s/m,x=isFinite(s)?1+Math.floor(f*v):qr;x>qr&&Oe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${qr}`);const p=[];let g=0;for(let b=0;b<qr;++b){const y=b/v,T=Math.exp(-y*y/2);p.push(T),b===0?g+=T:b<x&&(g+=2*T)}for(let b=0;b<p.length;b++)p[b]=p[b]/g;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-i;const E=this._sizeLods[r],C=3*E*(r>_-xr?r-_+xr:0),M=4*(this._cubeSize-E);Ps(n,C,M,3*E,2*E),l.setRenderTarget(n),l.render(c,Uo)}}function pb(t){const e=[],n=[],i=[];let r=t;const s=t-xr+1+u0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-xr?l=u0[o-t+xr-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),f=-u,c=1+u,d=[f,f,c,f,c,c,f,f,c,c,f,c],h=6,m=6,v=3,x=2,p=1,g=new Float32Array(v*m*h),_=new Float32Array(x*m*h),E=new Float32Array(p*m*h);for(let M=0;M<h;M++){const b=M%3*2/3-1,y=M>2?0:-1,T=[b,y,0,b+2/3,y,0,b+2/3,y+1,0,b,y,0,b+2/3,y+1,0,b,y+1,0];g.set(T,v*m*M),_.set(d,x*m*M);const R=[M,M,M,M,M,M];E.set(R,p*m*M)}const C=new $n;C.setAttribute("position",new li(g,v)),C.setAttribute("uv",new li(_,x)),C.setAttribute("faceIndex",new li(E,p)),i.push(new Xn(C,null)),r>xr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function d0(t,e,n){const i=new Ai(t,e,n);return i.texture.mapping=tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ps(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function mb(t,e,n){return new fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:db,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function gb(t,e,n){const i=new Float32Array(qr),r=new K(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function h0(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function p0(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function rc(){return`

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
	`}class Oy extends Ai{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ly(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ha(5,5,5),s=new fi({name:"CubemapFromEquirect",uniforms:ho(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Gi});s.uniforms.tEquirect.value=n;const o=new Xn(r,s),a=n.minFilter;return n.minFilter===Jr&&(n.minFilter=on),new MT(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function xb(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,h=!1){return d==null?null:h?o(d):s(d)}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Hc||h===Vc)if(e.has(d)){const m=e.get(d).texture;return a(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const v=new Oy(m.height);return v.fromEquirectangularTexture(t,d),e.set(d,v),d.addEventListener("dispose",u),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const h=d.mapping,m=h===Hc||h===Vc,v=h===as||h===uo;if(m||v){let x=n.get(d);const p=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new f0(t)),x=m?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),x.texture;if(x!==void 0)return x.texture;{const g=d.image;return m&&g&&g.height>0||v&&g&&l(g)?(i===null&&(i=new f0(t)),x=m?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),d.addEventListener("dispose",f),x.texture):null}}}return d}function a(d,h){return h===Hc?d.mapping=as:h===Vc&&(d.mapping=uo),d}function l(d){let h=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&h++;return h===m}function u(d){const h=d.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function f(d){const h=d.target;h.removeEventListener("dispose",f);const m=n.get(h);m!==void 0&&(n.delete(h),m.dispose())}function c(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:c}}function _b(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Nu("WebGLRenderer: "+i+" extension not supported."),r}}}function vb(t,e,n,i){const r={},s=new WeakMap;function o(c){const d=c.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(c,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(c){const d=c.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function u(c){const d=[],h=c.index,m=c.attributes.position;let v=0;if(m===void 0)return;if(h!==null){const g=h.array;v=h.version;for(let _=0,E=g.length;_<E;_+=3){const C=g[_+0],M=g[_+1],b=g[_+2];d.push(C,M,M,b,b,C)}}else{const g=m.array;v=m.version;for(let _=0,E=g.length/3-1;_<E;_+=3){const C=_+0,M=_+1,b=_+2;d.push(C,M,M,b,b,C)}}const x=new(m.count>=65535?by:Cy)(d,1);x.version=v;const p=s.get(c);p&&e.remove(p),s.set(c,x)}function f(c){const d=s.get(c);if(d){const h=c.index;h!==null&&d.version<h.version&&u(c)}else u(c);return s.get(c)}return{get:a,update:l,getWireframeAttribute:f}}function yb(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*o),n.update(h,i,1)}function u(d,h,m){m!==0&&(t.drawElementsInstanced(i,h,s,d*o,m),n.update(h,i,m))}function f(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,m);let x=0;for(let p=0;p<m;p++)x+=h[p];n.update(x,i,1)}function c(d,h,m,v){if(m===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<d.length;p++)u(d[p]/o,h[p],v[p]);else{x.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,v,0,m);let p=0;for(let g=0;g<m;g++)p+=h[g]*v[g];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=c}function Sb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:nt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Eb(t,e,n){const i=new WeakMap,r=new Rt;function s(o,a,l){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==c){let R=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",R)};var h=R;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let E=0;m===!0&&(E=1),v===!0&&(E=2),x===!0&&(E=3);let C=a.attributes.position.count*E,M=1;C>e.maxTextureSize&&(M=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*M*4*c),y=new wy(b,C,M,c);y.type=Si,y.needsUpdate=!0;const T=E*4;for(let P=0;P<c;P++){const F=p[P],V=g[P],Y=_[P],z=C*M*4*P;for(let X=0;X<F.count;X++){const H=X*T;m===!0&&(r.fromBufferAttribute(F,X),b[z+H+0]=r.x,b[z+H+1]=r.y,b[z+H+2]=r.z,b[z+H+3]=0),v===!0&&(r.fromBufferAttribute(V,X),b[z+H+4]=r.x,b[z+H+5]=r.y,b[z+H+6]=r.z,b[z+H+7]=0),x===!0&&(r.fromBufferAttribute(Y,X),b[z+H+8]=r.x,b[z+H+9]=r.y,b[z+H+10]=r.z,b[z+H+11]=Y.itemSize===4?r.w:1)}}d={count:c,texture:y,size:new rt(C,M)},i.set(a,d),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let x=0;x<u.length;x++)m+=u[x];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function Mb(t,e,n,i,r){let s=new WeakMap;function o(u){const f=r.render.frame,c=u.geometry,d=e.get(u,c);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==f&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,f))),u.isSkinnedMesh){const h=u.skeleton;s.get(h)!==f&&(h.update(),s.set(h,f))}return d}function a(){s=new WeakMap}function l(u){const f=u.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const wb={[ay]:"LINEAR_TONE_MAPPING",[ly]:"REINHARD_TONE_MAPPING",[uy]:"CINEON_TONE_MAPPING",[cy]:"ACES_FILMIC_TONE_MAPPING",[dy]:"AGX_TONE_MAPPING",[hy]:"NEUTRAL_TONE_MAPPING",[fy]:"CUSTOM_TONE_MAPPING"};function Tb(t,e,n,i,r){const s=new Ai(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),o=new Ai(e,n,{type:$i,depthBuffer:!1,stencilBuffer:!1}),a=new $n;a.setAttribute("position",new jn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new jn([0,2,0,0,2,0],2));const l=new hT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Xn(a,l),f=new Xp(-1,1,1,-1,0,1);let c=null,d=null,h=!1,m,v=null,x=[],p=!1;this.setSize=function(g,_){s.setSize(g,_),o.setSize(g,_);for(let E=0;E<x.length;E++){const C=x[E];C.setSize&&C.setSize(g,_)}},this.setEffects=function(g){x=g,p=x.length>0&&x[0].isRenderPass===!0;const _=s.width,E=s.height;for(let C=0;C<x.length;C++){const M=x[C];M.setSize&&M.setSize(_,E)}},this.begin=function(g,_){if(h||g.toneMapping===Ti&&x.length===0)return!1;if(v=_,_!==null){const E=_.width,C=_.height;(s.width!==E||s.height!==C)&&this.setSize(E,C)}return p===!1&&g.setRenderTarget(s),m=g.toneMapping,g.toneMapping=Ti,!0},this.hasRenderPass=function(){return p},this.end=function(g,_){g.toneMapping=m,h=!0;let E=s,C=o;for(let M=0;M<x.length;M++){const b=x[M];if(b.enabled!==!1&&(b.render(g,C,E,_),b.needsSwap!==!1)){const y=E;E=C,C=y}}if(c!==g.outputColorSpace||d!==g.toneMapping){c=g.outputColorSpace,d=g.toneMapping,l.defines={},Qe.getTransfer(c)===at&&(l.defines.SRGB_TRANSFER="");const M=wb[d];M&&(l.defines[M]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,g.setRenderTarget(v),g.render(u,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const zy=new $t,Mh=new Ra(1,1),By=new wy,Hy=new Vw,Vy=new Ly,m0=[],g0=[],x0=new Float32Array(16),_0=new Float32Array(9),v0=new Float32Array(4);function So(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=m0[r];if(s===void 0&&(s=new Float32Array(r),m0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function sc(t,e){let n=g0[e];n===void 0&&(n=new Int32Array(e),g0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Ab(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Cb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function bb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function Rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function Pb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Ot(n,i))return;v0.set(i),t.uniformMatrix2fv(this.addr,!1,v0),zt(n,i)}}function Ib(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Ot(n,i))return;_0.set(i),t.uniformMatrix3fv(this.addr,!1,_0),zt(n,i)}}function Lb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Ot(n,i))return;x0.set(i),t.uniformMatrix4fv(this.addr,!1,x0),zt(n,i)}}function Db(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Nb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function Fb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function Ub(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function Bb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function Hb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Mh.compareFunction=n.isReversedDepthBuffer()?Hp:Bp,s=Mh):s=zy,n.setTexture2D(e||s,r)}function Vb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Hy,r)}function Gb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Vy,r)}function Wb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||By,r)}function jb(t){switch(t){case 5126:return Ab;case 35664:return Cb;case 35665:return bb;case 35666:return Rb;case 35674:return Pb;case 35675:return Ib;case 35676:return Lb;case 5124:case 35670:return Db;case 35667:case 35671:return Nb;case 35668:case 35672:return kb;case 35669:case 35673:return Fb;case 5125:return Ub;case 36294:return Ob;case 36295:return zb;case 36296:return Bb;case 35678:case 36198:case 36298:case 36306:case 35682:return Hb;case 35679:case 36299:case 36307:return Vb;case 35680:case 36300:case 36308:case 36293:return Gb;case 36289:case 36303:case 36311:case 36292:return Wb}}function Xb(t,e){t.uniform1fv(this.addr,e)}function qb(t,e){const n=So(e,this.size,2);t.uniform2fv(this.addr,n)}function Yb(t,e){const n=So(e,this.size,3);t.uniform3fv(this.addr,n)}function $b(t,e){const n=So(e,this.size,4);t.uniform4fv(this.addr,n)}function Kb(t,e){const n=So(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Zb(t,e){const n=So(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Jb(t,e){const n=So(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Qb(t,e){t.uniform1iv(this.addr,e)}function eR(t,e){t.uniform2iv(this.addr,e)}function tR(t,e){t.uniform3iv(this.addr,e)}function nR(t,e){t.uniform4iv(this.addr,e)}function iR(t,e){t.uniform1uiv(this.addr,e)}function rR(t,e){t.uniform2uiv(this.addr,e)}function sR(t,e){t.uniform3uiv(this.addr,e)}function oR(t,e){t.uniform4uiv(this.addr,e)}function aR(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Mh:o=zy;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function lR(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Hy,s[o])}function uR(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Vy,s[o])}function cR(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||By,s[o])}function fR(t){switch(t){case 5126:return Xb;case 35664:return qb;case 35665:return Yb;case 35666:return $b;case 35674:return Kb;case 35675:return Zb;case 35676:return Jb;case 5124:case 35670:return Qb;case 35667:case 35671:return eR;case 35668:case 35672:return tR;case 35669:case 35673:return nR;case 5125:return iR;case 36294:return rR;case 36295:return sR;case 36296:return oR;case 35678:case 36198:case 36298:case 36306:case 35682:return aR;case 35679:case 36299:case 36307:return lR;case 35680:case 36300:case 36308:case 36293:return uR;case 36289:case 36303:case 36311:case 36292:return cR}}class dR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jb(n.type)}}class hR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fR(n.type)}}class pR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Sf=/(\w+)(\])?(\[|\.)?/g;function y0(t,e){t.seq.push(e),t.map[e.id]=e}function mR(t,e,n){const i=t.name,r=i.length;for(Sf.lastIndex=0;;){const s=Sf.exec(i),o=Sf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){y0(n,u===void 0?new dR(a,t,e):new hR(a,t,e));break}else{let c=n.map[a];c===void 0&&(c=new pR(a),y0(n,c)),n=c}}}class nu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);mR(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function S0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const gR=37297;let xR=0;function _R(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const E0=new Ve;function vR(t){Qe._getMatrix(E0,Qe.workingColorSpace,t);const e=`mat3( ${E0.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case Du:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function M0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+_R(t.getShaderSource(e),a)}else return s}function yR(t,e){const n=vR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const SR={[ay]:"Linear",[ly]:"Reinhard",[uy]:"Cineon",[cy]:"ACESFilmic",[dy]:"AgX",[hy]:"Neutral",[fy]:"Custom"};function ER(t,e){const n=SR[e];return n===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Nl=new K;function MR(){Qe.getLuminanceCoefficients(Nl);const t=Nl.x.toFixed(4),e=Nl.y.toFixed(4),n=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function TR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function AR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function qo(t){return t!==""}function w0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function T0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CR=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(t){return t.replace(CR,RR)}const bR=new Map;function RR(t,e){let n=We[e];if(n===void 0){const i=bR.get(e);if(i!==void 0)n=We[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wh(n)}const PR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A0(t){return t.replace(PR,IR)}function IR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function C0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const LR={[Zl]:"SHADOWMAP_TYPE_PCF",[jo]:"SHADOWMAP_TYPE_VSM"};function DR(t){return LR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const NR={[as]:"ENVMAP_TYPE_CUBE",[uo]:"ENVMAP_TYPE_CUBE",[tc]:"ENVMAP_TYPE_CUBE_UV"};function kR(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":NR[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const FR={[uo]:"ENVMAP_MODE_REFRACTION"};function UR(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":FR[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const OR={[Dp]:"ENVMAP_BLENDING_MULTIPLY",[Sw]:"ENVMAP_BLENDING_MIX",[Ew]:"ENVMAP_BLENDING_ADD"};function zR(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":OR[t.combine]||"ENVMAP_BLENDING_NONE"}function BR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function HR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=DR(n),u=kR(n),f=UR(n),c=zR(n),d=BR(n),h=wR(n),m=TR(s),v=r.createProgram();let x,p,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(qo).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(qo).join(`
`),p.length>0&&(p+=`
`)):(x=[C0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),p=[C0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ti?"#define TONE_MAPPING":"",n.toneMapping!==Ti?We.tonemapping_pars_fragment:"",n.toneMapping!==Ti?ER("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,yR("linearToOutputTexel",n.outputColorSpace),MR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(qo).join(`
`)),o=wh(o),o=w0(o,n),o=T0(o,n),a=wh(a),a=w0(a,n),a=T0(a,n),o=A0(o),a=A0(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",n.glslVersion===Fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=g+x+o,E=g+p+a,C=S0(r,r.VERTEX_SHADER,_),M=S0(r,r.FRAGMENT_SHADER,E);r.attachShader(v,C),r.attachShader(v,M),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function b(P){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(v)||"",V=r.getShaderInfoLog(C)||"",Y=r.getShaderInfoLog(M)||"",z=F.trim(),X=V.trim(),H=Y.trim();let j=!0,Z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,C,M);else{const A=M0(r,C,"vertex"),re=M0(r,M,"fragment");nt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+A+`
`+re)}else z!==""?Oe("WebGLProgram: Program Info Log:",z):(X===""||H==="")&&(Z=!1);Z&&(P.diagnostics={runnable:j,programLog:z,vertexShader:{log:X,prefix:x},fragmentShader:{log:H,prefix:p}})}r.deleteShader(C),r.deleteShader(M),y=new nu(r,v),T=AR(r,v)}let y;this.getUniforms=function(){return y===void 0&&b(this),y};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(v,gR)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xR++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=M,this}let VR=0;class GR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new WR(e),n.set(e,i)),i}}class WR{constructor(e){this.id=VR++,this.code=e,this.usedTimes=0}}function jR(t,e,n,i,r,s){const o=new Ty,a=new GR,l=new Set,u=[],f=new Map,c=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,T,R,P,F){const V=P.fog,Y=F.geometry,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,H=e.get(y.envMap||z,X),j=H&&H.mapping===tc?H.image.height:null,Z=h[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&Oe("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const A=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,re=A!==void 0?A.length:0;let se=0;Y.morphAttributes.position!==void 0&&(se=1),Y.morphAttributes.normal!==void 0&&(se=2),Y.morphAttributes.color!==void 0&&(se=3);let L,Fe,Ge,J;if(Z){const ot=_i[Z];L=ot.vertexShader,Fe=ot.fragmentShader}else L=y.vertexShader,Fe=y.fragmentShader,a.update(y),Ge=a.getVertexShaderID(y),J=a.getFragmentShaderID(y);const ne=t.getRenderTarget(),ae=t.state.buffers.depth.getReversed(),ke=F.isInstancedMesh===!0,Re=F.isBatchedMesh===!0,De=!!y.map,Lt=!!y.matcap,Ye=!!H,it=!!y.aoMap,st=!!y.lightMap,ze=!!y.bumpMap,yt=!!y.normalMap,k=!!y.displacementMap,Et=!!y.emissiveMap,Je=!!y.metalnessMap,ut=!!y.roughnessMap,we=y.anisotropy>0,I=y.clearcoat>0,S=y.dispersion>0,B=y.iridescence>0,N=y.sheen>0,O=y.transmission>0,W=we&&!!y.anisotropyMap,oe=I&&!!y.clearcoatMap,te=I&&!!y.clearcoatNormalMap,ye=I&&!!y.clearcoatRoughnessMap,Pe=B&&!!y.iridescenceMap,ie=B&&!!y.iridescenceThicknessMap,ue=N&&!!y.sheenColorMap,ve=N&&!!y.sheenRoughnessMap,ge=!!y.specularMap,pe=!!y.specularColorMap,Ne=!!y.specularIntensityMap,U=O&&!!y.transmissionMap,he=O&&!!y.thicknessMap,de=!!y.gradientMap,Me=!!y.alphaMap,ce=y.alphaTest>0,ee=!!y.alphaHash,Te=!!y.extensions;let Ue=Ti;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ue=t.toneMapping);const mt={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:L,fragmentShader:Fe,defines:y.defines,customVertexShaderID:Ge,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Re,batchingColor:Re&&F._colorsTexture!==null,instancing:ke,instancingColor:ke&&F.instanceColor!==null,instancingMorph:ke&&F.morphTexture!==null,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:fo,alphaToCoverage:!!y.alphaToCoverage,map:De,matcap:Lt,envMap:Ye,envMapMode:Ye&&H.mapping,envMapCubeUVHeight:j,aoMap:it,lightMap:st,bumpMap:ze,normalMap:yt,displacementMap:k,emissiveMap:Et,normalMapObjectSpace:yt&&y.normalMapType===Tw,normalMapTangentSpace:yt&&y.normalMapType===Ey,metalnessMap:Je,roughnessMap:ut,anisotropy:we,anisotropyMap:W,clearcoat:I,clearcoatMap:oe,clearcoatNormalMap:te,clearcoatRoughnessMap:ye,dispersion:S,iridescence:B,iridescenceMap:Pe,iridescenceThicknessMap:ie,sheen:N,sheenColorMap:ue,sheenRoughnessMap:ve,specularMap:ge,specularColorMap:pe,specularIntensityMap:Ne,transmission:O,transmissionMap:U,thicknessMap:he,gradientMap:de,opaque:y.transparent===!1&&y.blending===Js&&y.alphaToCoverage===!1,alphaMap:Me,alphaTest:ce,alphaHash:ee,combine:y.combine,mapUv:De&&m(y.map.channel),aoMapUv:it&&m(y.aoMap.channel),lightMapUv:st&&m(y.lightMap.channel),bumpMapUv:ze&&m(y.bumpMap.channel),normalMapUv:yt&&m(y.normalMap.channel),displacementMapUv:k&&m(y.displacementMap.channel),emissiveMapUv:Et&&m(y.emissiveMap.channel),metalnessMapUv:Je&&m(y.metalnessMap.channel),roughnessMapUv:ut&&m(y.roughnessMap.channel),anisotropyMapUv:W&&m(y.anisotropyMap.channel),clearcoatMapUv:oe&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:ve&&m(y.sheenRoughnessMap.channel),specularMapUv:ge&&m(y.specularMap.channel),specularColorMapUv:pe&&m(y.specularColorMap.channel),specularIntensityMapUv:Ne&&m(y.specularIntensityMap.channel),transmissionMapUv:U&&m(y.transmissionMap.channel),thicknessMapUv:he&&m(y.thicknessMap.channel),alphaMapUv:Me&&m(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(yt||we),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(De||Me),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||Y.attributes.normal===void 0&&yt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:c,reversedDepthBuffer:ae,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:se,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ue,decodeVideoTexture:De&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===at,decodeVideoTextureEmissive:Et&&y.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(y.emissiveMap.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===yi,flipSided:y.side===pn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Te&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&y.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function x(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)T.push(R),T.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(p(T,y),g(T,y),T.push(t.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function p(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function g(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),y.push(o.mask)}function _(y){const T=h[y.type];let R;if(T){const P=_i[T];R=cT.clone(P.uniforms)}else R=y.uniforms;return R}function E(y,T){let R=f.get(T);return R!==void 0?++R.usedTimes:(R=new HR(t,T,y,r),u.push(R),f.set(T,R)),R}function C(y){if(--y.usedTimes===0){const T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),f.delete(y.cacheKey),y.destroy()}}function M(y){a.remove(y)}function b(){a.dispose()}return{getParameters:v,getProgramCacheKey:x,getUniforms:_,acquireProgram:E,releaseProgram:C,releaseShaderCache:M,programs:u,dispose:b}}function XR(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function qR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function b0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function R0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,m,v,x,p){let g=t[e];return g===void 0?(g={id:d.id,object:d,geometry:h,material:m,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:x,group:p},t[e]=g):(g.id=d.id,g.object=d,g.geometry=h,g.material=m,g.materialVariant=o(d),g.groupOrder=v,g.renderOrder=d.renderOrder,g.z=x,g.group=p),e++,g}function l(d,h,m,v,x,p){const g=a(d,h,m,v,x,p);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):n.push(g)}function u(d,h,m,v,x,p){const g=a(d,h,m,v,x,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):n.unshift(g)}function f(d,h){n.length>1&&n.sort(d||qR),i.length>1&&i.sort(h||b0),r.length>1&&r.sort(h||b0)}function c(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:c,sort:f}}function YR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new R0,t.set(i,[o])):r>=s.length?(o=new R0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function $R(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new Ke};break;case"SpotLight":n={position:new K,direction:new K,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new K,halfWidth:new K,halfHeight:new K};break}return t[e.id]=n,n}}}function KR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ZR=0;function JR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function QR(t){const e=new $R,n=KR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new K);const r=new K,s=new Tt,o=new Tt;function a(u){let f=0,c=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,m=0,v=0,x=0,p=0,g=0,_=0,E=0,C=0,M=0,b=0;u.sort(JR);for(let T=0,R=u.length;T<R;T++){const P=u[T],F=P.color,V=P.intensity,Y=P.distance;let z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===co?z=P.shadow.map.texture:z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=F.r*V,c+=F.g*V,d+=F.b*V;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],V);b++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const H=P.shadow,j=n.get(P);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,i.directionalShadow[h]=j,i.directionalShadowMap[h]=z,i.directionalShadowMatrix[h]=P.shadow.matrix,g++}i.directional[h]=X,h++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(F).multiplyScalar(V),X.distance=Y,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[v]=X;const H=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,H.updateMatrices(P),P.castShadow&&M++),i.spotLightMatrix[v]=H.matrix,P.castShadow){const j=n.get(P);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=z,E++}v++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(F).multiplyScalar(V),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=X,x++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const H=P.shadow,j=n.get(P);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,j.shadowCameraNear=H.camera.near,j.shadowCameraFar=H.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=z,i.pointShadowMatrix[m]=P.shadow.matrix,_++}i.point[m]=X,m++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(V),X.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[p]=X,p++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=c,i.ambient[2]=d;const y=i.hash;(y.directionalLength!==h||y.pointLength!==m||y.spotLength!==v||y.rectAreaLength!==x||y.hemiLength!==p||y.numDirectionalShadows!==g||y.numPointShadows!==_||y.numSpotShadows!==E||y.numSpotMaps!==C||y.numLightProbes!==b)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=x,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=E+C-M,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=b,y.directionalLength=h,y.pointLength=m,y.spotLength=v,y.rectAreaLength=x,y.hemiLength=p,y.numDirectionalShadows=g,y.numPointShadows=_,y.numSpotShadows=E,y.numSpotMaps=C,y.numLightProbes=b,i.version=ZR++)}function l(u,f){let c=0,d=0,h=0,m=0,v=0;const x=f.matrixWorldInverse;for(let p=0,g=u.length;p<g;p++){const _=u[p];if(_.isDirectionalLight){const E=i.directional[c];E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(x),c++}else if(_.isSpotLight){const E=i.spot[h];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(x),E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(x),h++}else if(_.isRectAreaLight){const E=i.rectArea[m];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(x),o.identity(),s.copy(_.matrixWorld),s.premultiply(x),o.extractRotation(s),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(x),d++}else if(_.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(x),v++}}}return{setup:a,setupView:l,state:i}}function P0(t){const e=new QR(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function e2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new P0(t),e.set(r,[a])):s>=o.length?(a=new P0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const t2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n2=`uniform sampler2D shadow_pass;
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
}`,i2=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],r2=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],I0=new Tt,Oo=new K,Ef=new K;function s2(t,e,n){let i=new Wp;const r=new rt,s=new rt,o=new Rt,a=new pT,l=new mT,u={},f=n.maxTextureSize,c={[Rr]:pn,[pn]:Rr,[yi]:yi},d=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:t2,fragmentShader:n2}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const m=new $n;m.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Xn(m,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl;let p=this.type;this.render=function(M,b,y){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||M.length===0)return;this.type===nw&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Zl);const T=t.getRenderTarget(),R=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Gi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=p!==this.type;V&&b.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(z=>z.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,z=M.length;Y<z;Y++){const X=M[Y],H=X.shadow;if(H===void 0){Oe("WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const j=H.getFrameExtents();r.multiply(j),s.copy(H.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/j.x),r.x=s.x*j.x,H.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/j.y),r.y=s.y*j.y,H.mapSize.y=s.y));const Z=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Z,H.map===null||V===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===jo){if(X.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ai(r.x,r.y,{format:co,type:$i,minFilter:on,magFilter:on,generateMipmaps:!1}),H.map.texture.name=X.name+".shadowMap",H.map.depthTexture=new Ra(r.x,r.y,Si),H.map.depthTexture.name=X.name+".shadowMapDepth",H.map.depthTexture.format=Ki,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qt,H.map.depthTexture.magFilter=qt}else X.isPointLight?(H.map=new Oy(r.x),H.map.depthTexture=new lT(r.x,Ci)):(H.map=new Ai(r.x,r.y),H.map.depthTexture=new Ra(r.x,r.y,Ci)),H.map.depthTexture.name=X.name+".shadowMap",H.map.depthTexture.format=Ki,this.type===Zl?(H.map.depthTexture.compareFunction=Z?Hp:Bp,H.map.depthTexture.minFilter=on,H.map.depthTexture.magFilter=on):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qt,H.map.depthTexture.magFilter=qt);H.camera.updateProjectionMatrix()}const A=H.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<A;re++){if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,re),t.clear();else{re===0&&(t.setRenderTarget(H.map),t.clear());const se=H.getViewport(re);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),F.viewport(o)}if(X.isPointLight){const se=H.camera,L=H.matrix,Fe=X.distance||se.far;Fe!==se.far&&(se.far=Fe,se.updateProjectionMatrix()),Oo.setFromMatrixPosition(X.matrixWorld),se.position.copy(Oo),Ef.copy(se.position),Ef.add(i2[re]),se.up.copy(r2[re]),se.lookAt(Ef),se.updateMatrixWorld(),L.makeTranslation(-Oo.x,-Oo.y,-Oo.z),I0.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),H._frustum.setFromProjectionMatrix(I0,se.coordinateSystem,se.reversedDepth)}else H.updateMatrices(X);i=H.getFrustum(),E(b,y,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===jo&&g(H,y),H.needsUpdate=!1}p=this.type,x.needsUpdate=!1,t.setRenderTarget(T,R,P)};function g(M,b){const y=e.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,h.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ai(r.x,r.y,{format:co,type:$i})),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(b,null,y,d,v,null),h.uniforms.shadow_pass.value=M.mapPass.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(b,null,y,h,v,null)}function _(M,b,y,T){let R=null;const P=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)R=P;else if(R=y.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const F=R.uuid,V=b.uuid;let Y=u[F];Y===void 0&&(Y={},u[F]=Y);let z=Y[V];z===void 0&&(z=R.clone(),Y[V]=z,b.addEventListener("dispose",C)),R=z}if(R.visible=b.visible,R.wireframe=b.wireframe,T===jo?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:c[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const F=t.properties.get(R);F.light=y}return R}function E(M,b,y,T,R){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===jo)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);const V=e.update(M),Y=M.material;if(Array.isArray(Y)){const z=V.groups;for(let X=0,H=z.length;X<H;X++){const j=z[X],Z=Y[j.materialIndex];if(Z&&Z.visible){const A=_(M,Z,T,R);M.onBeforeShadow(t,M,b,y,V,A,j),t.renderBufferDirect(y,null,V,A,M,j),M.onAfterShadow(t,M,b,y,V,A,j)}}}else if(Y.visible){const z=_(M,Y,T,R);M.onBeforeShadow(t,M,b,y,V,z,null),t.renderBufferDirect(y,null,V,z,M,null),M.onAfterShadow(t,M,b,y,V,z,null)}}const F=M.children;for(let V=0,Y=F.length;V<Y;V++)E(F[V],b,y,T,R)}function C(M){M.target.removeEventListener("dispose",C);for(const y in u){const T=u[y],R=M.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function o2(t,e){function n(){let U=!1;const he=new Rt;let de=null;const Me=new Rt(0,0,0,0);return{setMask:function(ce){de!==ce&&!U&&(t.colorMask(ce,ce,ce,ce),de=ce)},setLocked:function(ce){U=ce},setClear:function(ce,ee,Te,Ue,mt){mt===!0&&(ce*=Ue,ee*=Ue,Te*=Ue),he.set(ce,ee,Te,Ue),Me.equals(he)===!1&&(t.clearColor(ce,ee,Te,Ue),Me.copy(he))},reset:function(){U=!1,de=null,Me.set(-1,0,0,0)}}}function i(){let U=!1,he=!1,de=null,Me=null,ce=null;return{setReversed:function(ee){if(he!==ee){const Te=e.get("EXT_clip_control");ee?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),he=ee;const Ue=ce;ce=null,this.setClear(Ue)}},getReversed:function(){return he},setTest:function(ee){ee?ne(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(ee){de!==ee&&!U&&(t.depthMask(ee),de=ee)},setFunc:function(ee){if(he&&(ee=kw[ee]),Me!==ee){switch(ee){case Nd:t.depthFunc(t.NEVER);break;case kd:t.depthFunc(t.ALWAYS);break;case Fd:t.depthFunc(t.LESS);break;case lo:t.depthFunc(t.LEQUAL);break;case Ud:t.depthFunc(t.EQUAL);break;case Od:t.depthFunc(t.GEQUAL);break;case zd:t.depthFunc(t.GREATER);break;case Bd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Me=ee}},setLocked:function(ee){U=ee},setClear:function(ee){ce!==ee&&(ce=ee,he&&(ee=1-ee),t.clearDepth(ee))},reset:function(){U=!1,de=null,Me=null,ce=null,he=!1}}}function r(){let U=!1,he=null,de=null,Me=null,ce=null,ee=null,Te=null,Ue=null,mt=null;return{setTest:function(ot){U||(ot?ne(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(ot){he!==ot&&!U&&(t.stencilMask(ot),he=ot)},setFunc:function(ot,Pi,Ii){(de!==ot||Me!==Pi||ce!==Ii)&&(t.stencilFunc(ot,Pi,Ii),de=ot,Me=Pi,ce=Ii)},setOp:function(ot,Pi,Ii){(ee!==ot||Te!==Pi||Ue!==Ii)&&(t.stencilOp(ot,Pi,Ii),ee=ot,Te=Pi,Ue=Ii)},setLocked:function(ot){U=ot},setClear:function(ot){mt!==ot&&(t.clearStencil(ot),mt=ot)},reset:function(){U=!1,he=null,de=null,Me=null,ce=null,ee=null,Te=null,Ue=null,mt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let f={},c={},d=new WeakMap,h=[],m=null,v=!1,x=null,p=null,g=null,_=null,E=null,C=null,M=null,b=new Ke(0,0,0),y=0,T=!1,R=null,P=null,F=null,V=null,Y=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,H=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=H>=1):j.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=H>=2);let Z=null,A={};const re=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),L=new Rt().fromArray(re),Fe=new Rt().fromArray(se);function Ge(U,he,de,Me){const ce=new Uint8Array(4),ee=t.createTexture();t.bindTexture(U,ee),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Te=0;Te<de;Te++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,Me,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(he+Te,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return ee}const J={};J[t.TEXTURE_2D]=Ge(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=Ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=Ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=Ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(t.DEPTH_TEST),o.setFunc(lo),ze(!1),yt(Ig),ne(t.CULL_FACE),it(Gi);function ne(U){f[U]!==!0&&(t.enable(U),f[U]=!0)}function ae(U){f[U]!==!1&&(t.disable(U),f[U]=!1)}function ke(U,he){return c[U]!==he?(t.bindFramebuffer(U,he),c[U]=he,U===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=he),U===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Re(U,he){let de=h,Me=!1;if(U){de=d.get(he),de===void 0&&(de=[],d.set(he,de));const ce=U.textures;if(de.length!==ce.length||de[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,Te=ce.length;ee<Te;ee++)de[ee]=t.COLOR_ATTACHMENT0+ee;de.length=ce.length,Me=!0}}else de[0]!==t.BACK&&(de[0]=t.BACK,Me=!0);Me&&t.drawBuffers(de)}function De(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const Lt={[Xr]:t.FUNC_ADD,[rw]:t.FUNC_SUBTRACT,[sw]:t.FUNC_REVERSE_SUBTRACT};Lt[ow]=t.MIN,Lt[aw]=t.MAX;const Ye={[lw]:t.ZERO,[uw]:t.ONE,[cw]:t.SRC_COLOR,[Ld]:t.SRC_ALPHA,[gw]:t.SRC_ALPHA_SATURATE,[pw]:t.DST_COLOR,[dw]:t.DST_ALPHA,[fw]:t.ONE_MINUS_SRC_COLOR,[Dd]:t.ONE_MINUS_SRC_ALPHA,[mw]:t.ONE_MINUS_DST_COLOR,[hw]:t.ONE_MINUS_DST_ALPHA,[xw]:t.CONSTANT_COLOR,[_w]:t.ONE_MINUS_CONSTANT_COLOR,[vw]:t.CONSTANT_ALPHA,[yw]:t.ONE_MINUS_CONSTANT_ALPHA};function it(U,he,de,Me,ce,ee,Te,Ue,mt,ot){if(U===Gi){v===!0&&(ae(t.BLEND),v=!1);return}if(v===!1&&(ne(t.BLEND),v=!0),U!==iw){if(U!==x||ot!==T){if((p!==Xr||E!==Xr)&&(t.blendEquation(t.FUNC_ADD),p=Xr,E=Xr),ot)switch(U){case Js:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lu:t.blendFunc(t.ONE,t.ONE);break;case Lg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",U);break}else switch(U){case Js:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lu:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Lg:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dg:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",U);break}g=null,_=null,C=null,M=null,b.set(0,0,0),y=0,x=U,T=ot}return}ce=ce||he,ee=ee||de,Te=Te||Me,(he!==p||ce!==E)&&(t.blendEquationSeparate(Lt[he],Lt[ce]),p=he,E=ce),(de!==g||Me!==_||ee!==C||Te!==M)&&(t.blendFuncSeparate(Ye[de],Ye[Me],Ye[ee],Ye[Te]),g=de,_=Me,C=ee,M=Te),(Ue.equals(b)===!1||mt!==y)&&(t.blendColor(Ue.r,Ue.g,Ue.b,mt),b.copy(Ue),y=mt),x=U,T=!1}function st(U,he){U.side===yi?ae(t.CULL_FACE):ne(t.CULL_FACE);let de=U.side===pn;he&&(de=!de),ze(de),U.blending===Js&&U.transparent===!1?it(Gi):it(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Me=U.stencilWrite;a.setTest(Me),Me&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Et(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(U){R!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),R=U)}function yt(U){U!==ew?(ne(t.CULL_FACE),U!==P&&(U===Ig?t.cullFace(t.BACK):U===tw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),P=U}function k(U){U!==F&&(X&&t.lineWidth(U),F=U)}function Et(U,he,de){U?(ne(t.POLYGON_OFFSET_FILL),(V!==he||Y!==de)&&(V=he,Y=de,o.getReversed()&&(he=-he),t.polygonOffset(he,de))):ae(t.POLYGON_OFFSET_FILL)}function Je(U){U?ne(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function ut(U){U===void 0&&(U=t.TEXTURE0+z-1),Z!==U&&(t.activeTexture(U),Z=U)}function we(U,he,de){de===void 0&&(Z===null?de=t.TEXTURE0+z-1:de=Z);let Me=A[de];Me===void 0&&(Me={type:void 0,texture:void 0},A[de]=Me),(Me.type!==U||Me.texture!==he)&&(Z!==de&&(t.activeTexture(de),Z=de),t.bindTexture(U,he||J[U]),Me.type=U,Me.texture=he)}function I(){const U=A[Z];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{t.compressedTexImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function B(){try{t.compressedTexImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function N(){try{t.texSubImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function O(){try{t.texSubImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function oe(){try{t.compressedTexSubImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function te(){try{t.texStorage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function ye(){try{t.texStorage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function Pe(){try{t.texImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function ie(){try{t.texImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function ue(U){L.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),L.copy(U))}function ve(U){Fe.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Fe.copy(U))}function ge(U,he){let de=u.get(he);de===void 0&&(de=new WeakMap,u.set(he,de));let Me=de.get(U);Me===void 0&&(Me=t.getUniformBlockIndex(he,U.name),de.set(U,Me))}function pe(U,he){const Me=u.get(he).get(U);l.get(he)!==Me&&(t.uniformBlockBinding(he,Me,U.__bindingPointIndex),l.set(he,Me))}function Ne(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},Z=null,A={},c={},d=new WeakMap,h=[],m=null,v=!1,x=null,p=null,g=null,_=null,E=null,C=null,M=null,b=new Ke(0,0,0),y=0,T=!1,R=null,P=null,F=null,V=null,Y=null,L.set(0,0,t.canvas.width,t.canvas.height),Fe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:ae,bindFramebuffer:ke,drawBuffers:Re,useProgram:De,setBlending:it,setMaterial:st,setFlipSided:ze,setCullFace:yt,setLineWidth:k,setPolygonOffset:Et,setScissorTest:Je,activeTexture:ut,bindTexture:we,unbindTexture:I,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:Pe,texImage3D:ie,updateUBOMapping:ge,uniformBlockBinding:pe,texStorage2D:te,texStorage3D:ye,texSubImage2D:N,texSubImage3D:O,compressedTexSubImage2D:W,compressedTexSubImage3D:oe,scissor:ue,viewport:ve,reset:Ne}}function a2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new rt,f=new WeakMap;let c;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,S){return h?new OffscreenCanvas(I,S):ba("canvas")}function v(I,S,B){let N=1;const O=we(I);if((O.width>B||O.height>B)&&(N=B/Math.max(O.width,O.height)),N<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const W=Math.floor(N*O.width),oe=Math.floor(N*O.height);c===void 0&&(c=m(W,oe));const te=S?m(W,oe):c;return te.width=W,te.height=oe,te.getContext("2d").drawImage(I,0,0,W,oe),Oe("WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+W+"x"+oe+")."),te}else return"data"in I&&Oe("WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),I;return I}function x(I){return I.generateMipmaps}function p(I){t.generateMipmap(I)}function g(I){return I.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?t.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(I,S,B,N,O=!1){if(I!==null){if(t[I]!==void 0)return t[I];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let W=S;if(S===t.RED&&(B===t.FLOAT&&(W=t.R32F),B===t.HALF_FLOAT&&(W=t.R16F),B===t.UNSIGNED_BYTE&&(W=t.R8)),S===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(W=t.R8UI),B===t.UNSIGNED_SHORT&&(W=t.R16UI),B===t.UNSIGNED_INT&&(W=t.R32UI),B===t.BYTE&&(W=t.R8I),B===t.SHORT&&(W=t.R16I),B===t.INT&&(W=t.R32I)),S===t.RG&&(B===t.FLOAT&&(W=t.RG32F),B===t.HALF_FLOAT&&(W=t.RG16F),B===t.UNSIGNED_BYTE&&(W=t.RG8)),S===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(W=t.RG8UI),B===t.UNSIGNED_SHORT&&(W=t.RG16UI),B===t.UNSIGNED_INT&&(W=t.RG32UI),B===t.BYTE&&(W=t.RG8I),B===t.SHORT&&(W=t.RG16I),B===t.INT&&(W=t.RG32I)),S===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(W=t.RGB8UI),B===t.UNSIGNED_SHORT&&(W=t.RGB16UI),B===t.UNSIGNED_INT&&(W=t.RGB32UI),B===t.BYTE&&(W=t.RGB8I),B===t.SHORT&&(W=t.RGB16I),B===t.INT&&(W=t.RGB32I)),S===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(W=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(W=t.RGBA16UI),B===t.UNSIGNED_INT&&(W=t.RGBA32UI),B===t.BYTE&&(W=t.RGBA8I),B===t.SHORT&&(W=t.RGBA16I),B===t.INT&&(W=t.RGBA32I)),S===t.RGB&&(B===t.UNSIGNED_INT_5_9_9_9_REV&&(W=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(W=t.R11F_G11F_B10F)),S===t.RGBA){const oe=O?Du:Qe.getTransfer(N);B===t.FLOAT&&(W=t.RGBA32F),B===t.HALF_FLOAT&&(W=t.RGBA16F),B===t.UNSIGNED_BYTE&&(W=oe===at?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(W=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(W=t.RGB5_A1)}return(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function E(I,S){let B;return I?S===null||S===Ci||S===Aa?B=t.DEPTH24_STENCIL8:S===Si?B=t.DEPTH32F_STENCIL8:S===Ta&&(B=t.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ci||S===Aa?B=t.DEPTH_COMPONENT24:S===Si?B=t.DEPTH_COMPONENT32F:S===Ta&&(B=t.DEPTH_COMPONENT16),B}function C(I,S){return x(I)===!0||I.isFramebufferTexture&&I.minFilter!==qt&&I.minFilter!==on?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function M(I){const S=I.target;S.removeEventListener("dispose",M),y(S),S.isVideoTexture&&f.delete(S)}function b(I){const S=I.target;S.removeEventListener("dispose",b),R(S)}function y(I){const S=i.get(I);if(S.__webglInit===void 0)return;const B=I.source,N=d.get(B);if(N){const O=N[S.__cacheKey];O.usedTimes--,O.usedTimes===0&&T(I),Object.keys(N).length===0&&d.delete(B)}i.remove(I)}function T(I){const S=i.get(I);t.deleteTexture(S.__webglTexture);const B=I.source,N=d.get(B);delete N[S.__cacheKey],o.memory.textures--}function R(I){const S=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(S.__webglFramebuffer[N]))for(let O=0;O<S.__webglFramebuffer[N].length;O++)t.deleteFramebuffer(S.__webglFramebuffer[N][O]);else t.deleteFramebuffer(S.__webglFramebuffer[N]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[N])}else{if(Array.isArray(S.__webglFramebuffer))for(let N=0;N<S.__webglFramebuffer.length;N++)t.deleteFramebuffer(S.__webglFramebuffer[N]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let N=0;N<S.__webglColorRenderbuffer.length;N++)S.__webglColorRenderbuffer[N]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[N]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=I.textures;for(let N=0,O=B.length;N<O;N++){const W=i.get(B[N]);W.__webglTexture&&(t.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(B[N])}i.remove(I)}let P=0;function F(){P=0}function V(){const I=P;return I>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),P+=1,I}function Y(I){const S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function z(I,S){const B=i.get(I);if(I.isVideoTexture&&Je(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&B.__version!==I.version){const N=I.image;if(N===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{J(B,I,S);return}}else I.isExternalTexture&&(B.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+S)}function X(I,S){const B=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&B.__version!==I.version){J(B,I,S);return}else I.isExternalTexture&&(B.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+S)}function H(I,S){const B=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&B.__version!==I.version){J(B,I,S);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+S)}function j(I,S){const B=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&B.__version!==I.version){ne(B,I,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+S)}const Z={[Hd]:t.REPEAT,[Hi]:t.CLAMP_TO_EDGE,[Vd]:t.MIRRORED_REPEAT},A={[qt]:t.NEAREST,[Mw]:t.NEAREST_MIPMAP_NEAREST,[fl]:t.NEAREST_MIPMAP_LINEAR,[on]:t.LINEAR,[Gc]:t.LINEAR_MIPMAP_NEAREST,[Jr]:t.LINEAR_MIPMAP_LINEAR},re={[Aw]:t.NEVER,[Iw]:t.ALWAYS,[Cw]:t.LESS,[Bp]:t.LEQUAL,[bw]:t.EQUAL,[Hp]:t.GEQUAL,[Rw]:t.GREATER,[Pw]:t.NOTEQUAL};function se(I,S){if(S.type===Si&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===on||S.magFilter===Gc||S.magFilter===fl||S.magFilter===Jr||S.minFilter===on||S.minFilter===Gc||S.minFilter===fl||S.minFilter===Jr)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(I,t.TEXTURE_WRAP_S,Z[S.wrapS]),t.texParameteri(I,t.TEXTURE_WRAP_T,Z[S.wrapT]),(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)&&t.texParameteri(I,t.TEXTURE_WRAP_R,Z[S.wrapR]),t.texParameteri(I,t.TEXTURE_MAG_FILTER,A[S.magFilter]),t.texParameteri(I,t.TEXTURE_MIN_FILTER,A[S.minFilter]),S.compareFunction&&(t.texParameteri(I,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(I,t.TEXTURE_COMPARE_FUNC,re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===qt||S.minFilter!==fl&&S.minFilter!==Jr||S.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(I,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function L(I,S){let B=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",M));const N=S.source;let O=d.get(N);O===void 0&&(O={},d.set(N,O));const W=Y(S);if(W!==I.__cacheKey){O[W]===void 0&&(O[W]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),O[W].usedTimes++;const oe=O[I.__cacheKey];oe!==void 0&&(O[I.__cacheKey].usedTimes--,oe.usedTimes===0&&T(S)),I.__cacheKey=W,I.__webglTexture=O[W].texture}return B}function Fe(I,S,B){return Math.floor(Math.floor(I/B)/S)}function Ge(I,S,B,N){const W=I.updateRanges;if(W.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,B,N,S.data);else{W.sort((ie,ue)=>ie.start-ue.start);let oe=0;for(let ie=1;ie<W.length;ie++){const ue=W[oe],ve=W[ie],ge=ue.start+ue.count,pe=Fe(ve.start,S.width,4),Ne=Fe(ue.start,S.width,4);ve.start<=ge+1&&pe===Ne&&Fe(ve.start+ve.count-1,S.width,4)===pe?ue.count=Math.max(ue.count,ve.start+ve.count-ue.start):(++oe,W[oe]=ve)}W.length=oe+1;const te=t.getParameter(t.UNPACK_ROW_LENGTH),ye=t.getParameter(t.UNPACK_SKIP_PIXELS),Pe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let ie=0,ue=W.length;ie<ue;ie++){const ve=W[ie],ge=Math.floor(ve.start/4),pe=Math.ceil(ve.count/4),Ne=ge%S.width,U=Math.floor(ge/S.width),he=pe,de=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,Ne,U,he,de,B,N,S.data)}I.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,te),t.pixelStorei(t.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(t.UNPACK_SKIP_ROWS,Pe)}}function J(I,S,B){let N=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(N=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(N=t.TEXTURE_3D);const O=L(I,S),W=S.source;n.bindTexture(N,I.__webglTexture,t.TEXTURE0+B);const oe=i.get(W);if(W.version!==oe.__version||O===!0){n.activeTexture(t.TEXTURE0+B);const te=Qe.getPrimaries(Qe.workingColorSpace),ye=S.colorSpace===pr?null:Qe.getPrimaries(S.colorSpace),Pe=S.colorSpace===pr||te===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ie=v(S.image,!1,r.maxTextureSize);ie=ut(S,ie);const ue=s.convert(S.format,S.colorSpace),ve=s.convert(S.type);let ge=_(S.internalFormat,ue,ve,S.colorSpace,S.isVideoTexture);se(N,S);let pe;const Ne=S.mipmaps,U=S.isVideoTexture!==!0,he=oe.__version===void 0||O===!0,de=W.dataReady,Me=C(S,ie);if(S.isDepthTexture)ge=E(S.format===Qr,S.type),he&&(U?n.texStorage2D(t.TEXTURE_2D,1,ge,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,ge,ie.width,ie.height,0,ue,ve,null));else if(S.isDataTexture)if(Ne.length>0){U&&he&&n.texStorage2D(t.TEXTURE_2D,Me,ge,Ne[0].width,Ne[0].height);for(let ce=0,ee=Ne.length;ce<ee;ce++)pe=Ne[ce],U?de&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,pe.width,pe.height,ue,ve,pe.data):n.texImage2D(t.TEXTURE_2D,ce,ge,pe.width,pe.height,0,ue,ve,pe.data);S.generateMipmaps=!1}else U?(he&&n.texStorage2D(t.TEXTURE_2D,Me,ge,ie.width,ie.height),de&&Ge(S,ie,ue,ve)):n.texImage2D(t.TEXTURE_2D,0,ge,ie.width,ie.height,0,ue,ve,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&he&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,ge,Ne[0].width,Ne[0].height,ie.depth);for(let ce=0,ee=Ne.length;ce<ee;ce++)if(pe=Ne[ce],S.format!==si)if(ue!==null)if(U){if(de)if(S.layerUpdates.size>0){const Te=l0(pe.width,pe.height,S.format,S.type);for(const Ue of S.layerUpdates){const mt=pe.data.subarray(Ue*Te/pe.data.BYTES_PER_ELEMENT,(Ue+1)*Te/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,Ue,pe.width,pe.height,1,ue,mt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,pe.width,pe.height,ie.depth,ue,pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ce,ge,pe.width,pe.height,ie.depth,0,pe.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?de&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,pe.width,pe.height,ie.depth,ue,ve,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ce,ge,pe.width,pe.height,ie.depth,0,ue,ve,pe.data)}else{U&&he&&n.texStorage2D(t.TEXTURE_2D,Me,ge,Ne[0].width,Ne[0].height);for(let ce=0,ee=Ne.length;ce<ee;ce++)pe=Ne[ce],S.format!==si?ue!==null?U?de&&n.compressedTexSubImage2D(t.TEXTURE_2D,ce,0,0,pe.width,pe.height,ue,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ce,ge,pe.width,pe.height,0,pe.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?de&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,pe.width,pe.height,ue,ve,pe.data):n.texImage2D(t.TEXTURE_2D,ce,ge,pe.width,pe.height,0,ue,ve,pe.data)}else if(S.isDataArrayTexture)if(U){if(he&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,ge,ie.width,ie.height,ie.depth),de)if(S.layerUpdates.size>0){const ce=l0(ie.width,ie.height,S.format,S.type);for(const ee of S.layerUpdates){const Te=ie.data.subarray(ee*ce/ie.data.BYTES_PER_ELEMENT,(ee+1)*ce/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,ie.width,ie.height,1,ue,ve,Te)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ue,ve,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,ie.width,ie.height,ie.depth,0,ue,ve,ie.data);else if(S.isData3DTexture)U?(he&&n.texStorage3D(t.TEXTURE_3D,Me,ge,ie.width,ie.height,ie.depth),de&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ue,ve,ie.data)):n.texImage3D(t.TEXTURE_3D,0,ge,ie.width,ie.height,ie.depth,0,ue,ve,ie.data);else if(S.isFramebufferTexture){if(he)if(U)n.texStorage2D(t.TEXTURE_2D,Me,ge,ie.width,ie.height);else{let ce=ie.width,ee=ie.height;for(let Te=0;Te<Me;Te++)n.texImage2D(t.TEXTURE_2D,Te,ge,ce,ee,0,ue,ve,null),ce>>=1,ee>>=1}}else if(Ne.length>0){if(U&&he){const ce=we(Ne[0]);n.texStorage2D(t.TEXTURE_2D,Me,ge,ce.width,ce.height)}for(let ce=0,ee=Ne.length;ce<ee;ce++)pe=Ne[ce],U?de&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,ue,ve,pe):n.texImage2D(t.TEXTURE_2D,ce,ge,ue,ve,pe);S.generateMipmaps=!1}else if(U){if(he){const ce=we(ie);n.texStorage2D(t.TEXTURE_2D,Me,ge,ce.width,ce.height)}de&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,ve,ie)}else n.texImage2D(t.TEXTURE_2D,0,ge,ue,ve,ie);x(S)&&p(N),oe.__version=W.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function ne(I,S,B){if(S.image.length!==6)return;const N=L(I,S),O=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+B);const W=i.get(O);if(O.version!==W.__version||N===!0){n.activeTexture(t.TEXTURE0+B);const oe=Qe.getPrimaries(Qe.workingColorSpace),te=S.colorSpace===pr?null:Qe.getPrimaries(S.colorSpace),ye=S.colorSpace===pr||oe===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Pe=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,ue=[];for(let ee=0;ee<6;ee++)!Pe&&!ie?ue[ee]=v(S.image[ee],!0,r.maxCubemapSize):ue[ee]=ie?S.image[ee].image:S.image[ee],ue[ee]=ut(S,ue[ee]);const ve=ue[0],ge=s.convert(S.format,S.colorSpace),pe=s.convert(S.type),Ne=_(S.internalFormat,ge,pe,S.colorSpace),U=S.isVideoTexture!==!0,he=W.__version===void 0||N===!0,de=O.dataReady;let Me=C(S,ve);se(t.TEXTURE_CUBE_MAP,S);let ce;if(Pe){U&&he&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Ne,ve.width,ve.height);for(let ee=0;ee<6;ee++){ce=ue[ee].mipmaps;for(let Te=0;Te<ce.length;Te++){const Ue=ce[Te];S.format!==si?ge!==null?U?de&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,Ue.width,Ue.height,ge,Ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Ne,Ue.width,Ue.height,0,Ue.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,Ue.width,Ue.height,ge,pe,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Ne,Ue.width,Ue.height,0,ge,pe,Ue.data)}}}else{if(ce=S.mipmaps,U&&he){ce.length>0&&Me++;const ee=we(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Ne,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ie){U?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ue[ee].width,ue[ee].height,ge,pe,ue[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ne,ue[ee].width,ue[ee].height,0,ge,pe,ue[ee].data);for(let Te=0;Te<ce.length;Te++){const mt=ce[Te].image[ee].image;U?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,mt.width,mt.height,ge,pe,mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Ne,mt.width,mt.height,0,ge,pe,mt.data)}}else{U?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ge,pe,ue[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ne,ge,pe,ue[ee]);for(let Te=0;Te<ce.length;Te++){const Ue=ce[Te];U?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,ge,pe,Ue.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Ne,ge,pe,Ue.image[ee])}}}x(S)&&p(t.TEXTURE_CUBE_MAP),W.__version=O.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function ae(I,S,B,N,O,W){const oe=s.convert(B.format,B.colorSpace),te=s.convert(B.type),ye=_(B.internalFormat,oe,te,B.colorSpace),Pe=i.get(S),ie=i.get(B);if(ie.__renderTarget=S,!Pe.__hasExternalTextures){const ue=Math.max(1,S.width>>W),ve=Math.max(1,S.height>>W);O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?n.texImage3D(O,W,ye,ue,ve,S.depth,0,oe,te,null):n.texImage2D(O,W,ye,ue,ve,0,oe,te,null)}n.bindFramebuffer(t.FRAMEBUFFER,I),Et(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,N,O,ie.__webglTexture,0,k(S)):(O===t.TEXTURE_2D||O>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,N,O,ie.__webglTexture,W),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(I,S,B){if(t.bindRenderbuffer(t.RENDERBUFFER,I),S.depthBuffer){const N=S.depthTexture,O=N&&N.isDepthTexture?N.type:null,W=E(S.stencilBuffer,O),oe=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Et(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,k(S),W,S.width,S.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,k(S),W,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,W,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,I)}else{const N=S.textures;for(let O=0;O<N.length;O++){const W=N[O],oe=s.convert(W.format,W.colorSpace),te=s.convert(W.type),ye=_(W.internalFormat,oe,te,W.colorSpace);Et(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,k(S),ye,S.width,S.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,k(S),ye,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ye,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Re(I,S,B){const N=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=i.get(S.depthTexture);if(O.__renderTarget=S,(!O.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N){if(O.__webglInit===void 0&&(O.__webglInit=!0,S.depthTexture.addEventListener("dispose",M)),O.__webglTexture===void 0){O.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture),se(t.TEXTURE_CUBE_MAP,S.depthTexture);const Pe=s.convert(S.depthTexture.format),ie=s.convert(S.depthTexture.type);let ue;S.depthTexture.format===Ki?ue=t.DEPTH_COMPONENT24:S.depthTexture.format===Qr&&(ue=t.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ue,S.width,S.height,0,Pe,ie,null)}}else z(S.depthTexture,0);const W=O.__webglTexture,oe=k(S),te=N?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,ye=S.depthTexture.format===Qr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ki)Et(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ye,te,W,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,ye,te,W,0);else if(S.depthTexture.format===Qr)Et(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ye,te,W,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,ye,te,W,0);else throw new Error("Unknown depthTexture format")}function De(I){const S=i.get(I),B=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){const N=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),N){const O=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,N.removeEventListener("dispose",O)};N.addEventListener("dispose",O),S.__depthDisposeCallback=O}S.__boundDepthTexture=N}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let N=0;N<6;N++)Re(S.__webglFramebuffer[N],I,N);else{const N=I.texture.mipmaps;N&&N.length>0?Re(S.__webglFramebuffer[0],I,0):Re(S.__webglFramebuffer,I,0)}else if(B){S.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[N]),S.__webglDepthbuffer[N]===void 0)S.__webglDepthbuffer[N]=t.createRenderbuffer(),ke(S.__webglDepthbuffer[N],I,!1);else{const O=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer[N];t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,O,t.RENDERBUFFER,W)}}else{const N=I.texture.mipmaps;if(N&&N.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),ke(S.__webglDepthbuffer,I,!1);else{const O=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,O,t.RENDERBUFFER,W)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Lt(I,S,B){const N=i.get(I);S!==void 0&&ae(N.__webglFramebuffer,I,I.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&De(I)}function Ye(I){const S=I.texture,B=i.get(I),N=i.get(S);I.addEventListener("dispose",b);const O=I.textures,W=I.isWebGLCubeRenderTarget===!0,oe=O.length>1;if(oe||(N.__webglTexture===void 0&&(N.__webglTexture=t.createTexture()),N.__version=S.version,o.memory.textures++),W){B.__webglFramebuffer=[];for(let te=0;te<6;te++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[te]=[];for(let ye=0;ye<S.mipmaps.length;ye++)B.__webglFramebuffer[te][ye]=t.createFramebuffer()}else B.__webglFramebuffer[te]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let te=0;te<S.mipmaps.length;te++)B.__webglFramebuffer[te]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(oe)for(let te=0,ye=O.length;te<ye;te++){const Pe=i.get(O[te]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=t.createTexture(),o.memory.textures++)}if(I.samples>0&&Et(I)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let te=0;te<O.length;te++){const ye=O[te];B.__webglColorRenderbuffer[te]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[te]);const Pe=s.convert(ye.format,ye.colorSpace),ie=s.convert(ye.type),ue=_(ye.internalFormat,Pe,ie,ye.colorSpace,I.isXRRenderTarget===!0),ve=k(I);t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,ue,I.width,I.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.RENDERBUFFER,B.__webglColorRenderbuffer[te])}t.bindRenderbuffer(t.RENDERBUFFER,null),I.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),ke(B.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(W){n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture),se(t.TEXTURE_CUBE_MAP,S);for(let te=0;te<6;te++)if(S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)ae(B.__webglFramebuffer[te][ye],I,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye);else ae(B.__webglFramebuffer[te],I,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);x(S)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){for(let te=0,ye=O.length;te<ye;te++){const Pe=O[te],ie=i.get(Pe);let ue=t.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ue=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,ie.__webglTexture),se(ue,Pe),ae(B.__webglFramebuffer,I,Pe,t.COLOR_ATTACHMENT0+te,ue,0),x(Pe)&&p(ue)}n.unbindTexture()}else{let te=t.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(te=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(te,N.__webglTexture),se(te,S),S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)ae(B.__webglFramebuffer[ye],I,S,t.COLOR_ATTACHMENT0,te,ye);else ae(B.__webglFramebuffer,I,S,t.COLOR_ATTACHMENT0,te,0);x(S)&&p(te),n.unbindTexture()}I.depthBuffer&&De(I)}function it(I){const S=I.textures;for(let B=0,N=S.length;B<N;B++){const O=S[B];if(x(O)){const W=g(I),oe=i.get(O).__webglTexture;n.bindTexture(W,oe),p(W),n.unbindTexture()}}}const st=[],ze=[];function yt(I){if(I.samples>0){if(Et(I)===!1){const S=I.textures,B=I.width,N=I.height;let O=t.COLOR_BUFFER_BIT;const W=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(I),te=S.length>1;if(te)for(let Pe=0;Pe<S.length;Pe++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const ye=I.texture.mipmaps;ye&&ye.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Pe=0;Pe<S.length;Pe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(O|=t.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(O|=t.STENCIL_BUFFER_BIT)),te){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[Pe]);const ie=i.get(S[Pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ie,0)}t.blitFramebuffer(0,0,B,N,0,0,B,N,O,t.NEAREST),l===!0&&(st.length=0,ze.length=0,st.push(t.COLOR_ATTACHMENT0+Pe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(st.push(W),ze.push(W),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ze)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),te)for(let Pe=0;Pe<S.length;Pe++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,oe.__webglColorRenderbuffer[Pe]);const ie=i.get(S[Pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const S=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function k(I){return Math.min(r.maxSamples,I.samples)}function Et(I){const S=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Je(I){const S=o.render.frame;f.get(I)!==S&&(f.set(I,S),I.update())}function ut(I,S){const B=I.colorSpace,N=I.format,O=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||B!==fo&&B!==pr&&(Qe.getTransfer(B)===at?(N!==si||O!==Pn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",B)),S}function we(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=z,this.setTexture2DArray=X,this.setTexture3D=H,this.setTextureCube=j,this.rebindTextures=Lt,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function l2(t,e){function n(i,r=pr){let s;const o=Qe.getTransfer(r);if(i===Pn)return t.UNSIGNED_BYTE;if(i===kp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Fp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===xy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===_y)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===my)return t.BYTE;if(i===gy)return t.SHORT;if(i===Ta)return t.UNSIGNED_SHORT;if(i===Np)return t.INT;if(i===Ci)return t.UNSIGNED_INT;if(i===Si)return t.FLOAT;if(i===$i)return t.HALF_FLOAT;if(i===vy)return t.ALPHA;if(i===yy)return t.RGB;if(i===si)return t.RGBA;if(i===Ki)return t.DEPTH_COMPONENT;if(i===Qr)return t.DEPTH_STENCIL;if(i===Sy)return t.RED;if(i===Up)return t.RED_INTEGER;if(i===co)return t.RG;if(i===Op)return t.RG_INTEGER;if(i===zp)return t.RGBA_INTEGER;if(i===Jl||i===Ql||i===eu||i===tu)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Jl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===eu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Jl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ql)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===eu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gd||i===Wd||i===jd||i===Xd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Gd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qd||i===Yd||i===$d||i===Kd||i===Zd||i===Jd||i===Qd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===qd||i===Yd)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$d)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Kd)return s.COMPRESSED_R11_EAC;if(i===Zd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Jd)return s.COMPRESSED_RG11_EAC;if(i===Qd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah||i===lh||i===uh||i===ch||i===fh||i===dh||i===hh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===eh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===th)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ih)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ah)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ch)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ph||i===mh||i===gh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ph)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xh||i===_h||i===vh||i===yh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===xh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_h)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Aa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const u2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c2=`
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

}`;class f2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Dy(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new fi({vertexShader:u2,fragmentShader:c2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xn(new ic(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class d2 extends _o{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,c=null,d=null,h=null,m=null;const v=typeof XRWebGLBinding<"u",x=new f2,p={},g=n.getContextAttributes();let _=null,E=null;const C=[],M=[],b=new rt;let y=null;const T=new Hn;T.viewport=new Rt;const R=new Hn;R.viewport=new Rt;const P=[T,R],F=new wT;let V=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=C[J];return ne===void 0&&(ne=new Zc,C[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=C[J];return ne===void 0&&(ne=new Zc,C[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=C[J];return ne===void 0&&(ne=new Zc,C[J]=ne),ne.getHandSpace()};function z(J){const ne=M.indexOf(J.inputSource);if(ne===-1)return;const ae=C[ne];ae!==void 0&&(ae.update(J.inputSource,J.frame,u||o),ae.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",H);for(let J=0;J<C.length;J++){const ne=M[J];ne!==null&&(M[J]=null,C[J].disconnect(ne))}V=null,Y=null,x.reset();for(const J in p)delete p[J];e.setRenderTarget(_),h=null,d=null,c=null,r=null,E=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(J){u=J},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return c===null&&v&&(c=new XRWebGLBinding(r,n)),c},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",X),r.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(b),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,ke=null,Re=null;g.depth&&(Re=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=g.stencil?Qr:Ki,ke=g.stencil?Aa:Ci);const De={colorFormat:n.RGBA8,depthFormat:Re,scaleFactor:s};c=this.getBinding(),d=c.createProjectionLayer(De),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Ai(d.textureWidth,d.textureHeight,{format:si,type:Pn,depthTexture:new Ra(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ae={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new Ai(h.framebufferWidth,h.framebufferHeight,{format:si,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(J){for(let ne=0;ne<J.removed.length;ne++){const ae=J.removed[ne],ke=M.indexOf(ae);ke>=0&&(M[ke]=null,C[ke].disconnect(ae))}for(let ne=0;ne<J.added.length;ne++){const ae=J.added[ne];let ke=M.indexOf(ae);if(ke===-1){for(let De=0;De<C.length;De++)if(De>=M.length){M.push(ae),ke=De;break}else if(M[De]===null){M[De]=ae,ke=De;break}if(ke===-1)break}const Re=C[ke];Re&&Re.connect(ae)}}const j=new K,Z=new K;function A(J,ne,ae){j.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(ae.matrixWorld);const ke=j.distanceTo(Z),Re=ne.projectionMatrix.elements,De=ae.projectionMatrix.elements,Lt=Re[14]/(Re[10]-1),Ye=Re[14]/(Re[10]+1),it=(Re[9]+1)/Re[5],st=(Re[9]-1)/Re[5],ze=(Re[8]-1)/Re[0],yt=(De[8]+1)/De[0],k=Lt*ze,Et=Lt*yt,Je=ke/(-ze+yt),ut=Je*-ze;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ut),J.translateZ(Je),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Re[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const we=Lt+Je,I=Ye+Je,S=k-ut,B=Et+(ke-ut),N=it*Ye/I*we,O=st*Ye/I*we;J.projectionMatrix.makePerspective(S,B,N,O,we,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function re(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ne=J.near,ae=J.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(ae=x.depthFar)),F.near=R.near=T.near=ne,F.far=R.far=T.far=ae,(V!==F.near||Y!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),V=F.near,Y=F.far),F.layers.mask=J.layers.mask|6,T.layers.mask=F.layers.mask&-5,R.layers.mask=F.layers.mask&-3;const ke=J.parent,Re=F.cameras;re(F,ke);for(let De=0;De<Re.length;De++)re(Re[De],ke);Re.length===2?A(F,T,R):F.projectionMatrix.copy(T.projectionMatrix),se(J,F,ke)};function se(J,ne,ae){ae===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(ae.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Sh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(F)},this.getCameraTexture=function(J){return p[J]};let L=null;function Fe(J,ne){if(f=ne.getViewerPose(u||o),m=ne,f!==null){const ae=f.views;h!==null&&(e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E));let ke=!1;ae.length!==F.cameras.length&&(F.cameras.length=0,ke=!0);for(let Ye=0;Ye<ae.length;Ye++){const it=ae[Ye];let st=null;if(h!==null)st=h.getViewport(it);else{const yt=c.getViewSubImage(d,it);st=yt.viewport,Ye===0&&(e.setRenderTargetTextures(E,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(E))}let ze=P[Ye];ze===void 0&&(ze=new Hn,ze.layers.enable(Ye),ze.viewport=new Rt,P[Ye]=ze),ze.matrix.fromArray(it.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(it.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(st.x,st.y,st.width,st.height),Ye===0&&(F.matrix.copy(ze.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ke===!0&&F.cameras.push(ze)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){c=i.getBinding();const Ye=c.getDepthInformation(ae[0]);Ye&&Ye.isValid&&Ye.texture&&x.init(Ye,r.renderState)}if(Re&&Re.includes("camera-access")&&v){e.state.unbindTexture(),c=i.getBinding();for(let Ye=0;Ye<ae.length;Ye++){const it=ae[Ye].camera;if(it){let st=p[it];st||(st=new Dy,p[it]=st);const ze=c.getCameraImage(it);st.sourceTexture=ze}}}}for(let ae=0;ae<C.length;ae++){const ke=M[ae],Re=C[ae];ke!==null&&Re!==void 0&&Re.update(ke,ne,u||o)}L&&L(J,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),m=null}const Ge=new Uy;Ge.setAnimationLoop(Fe),this.setAnimationLoop=function(J){L=J},this.dispose=function(){}}}const Hr=new bi,h2=new Tt;function p2(t,e){function n(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function i(x,p){p.color.getRGB(x.fogColor.value,Ny(t)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function r(x,p,g,_,E){p.isMeshBasicMaterial?s(x,p):p.isMeshLambertMaterial?(s(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(x,p),c(x,p)):p.isMeshPhongMaterial?(s(x,p),f(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(x,p),d(x,p),p.isMeshPhysicalMaterial&&h(x,p,E)):p.isMeshMatcapMaterial?(s(x,p),m(x,p)):p.isMeshDepthMaterial?s(x,p):p.isMeshDistanceMaterial?(s(x,p),v(x,p)):p.isMeshNormalMaterial?s(x,p):p.isLineBasicMaterial?(o(x,p),p.isLineDashedMaterial&&a(x,p)):p.isPointsMaterial?l(x,p,g,_):p.isSpriteMaterial?u(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,n(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,n(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,n(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===pn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,n(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===pn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,n(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,n(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const g=e.get(p),_=g.envMap,E=g.envMapRotation;_&&(x.envMap.value=_,Hr.copy(E),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),x.envMapRotation.value.setFromMatrix4(h2.makeRotationFromEuler(Hr)),x.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,x.aoMapTransform))}function o(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,n(p.map,x.mapTransform))}function a(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,g,_){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*g,x.scale.value=_*.5,p.map&&(x.map.value=p.map,n(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,n(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function u(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,n(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,n(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function f(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function c(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function d(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function h(x,p,g){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=g.texture,x.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function v(x,p){const g=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(g.matrixWorld),x.nearDistance.value=g.shadow.camera.near,x.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function m2(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const E=_.program;i.uniformBlockBinding(g,E)}function u(g,_){let E=r[g.id];E===void 0&&(m(g),E=f(g),r[g.id]=E,g.addEventListener("dispose",x));const C=_.program;i.updateUBOMapping(g,C);const M=e.render.frame;s[g.id]!==M&&(d(g),s[g.id]=M)}function f(g){const _=c();g.__bindingPointIndex=_;const E=t.createBuffer(),C=g.__size,M=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,C,M),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,E),E}function c(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const _=r[g.id],E=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let M=0,b=E.length;M<b;M++){const y=Array.isArray(E[M])?E[M]:[E[M]];for(let T=0,R=y.length;T<R;T++){const P=y[T];if(h(P,M,T,C)===!0){const F=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let z=0;z<V.length;z++){const X=V[z],H=v(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,F+Y,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,Y),Y+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(g,_,E,C){const M=g.value,b=_+"_"+E;if(C[b]===void 0)return typeof M=="number"||typeof M=="boolean"?C[b]=M:C[b]=M.clone(),!0;{const y=C[b];if(typeof M=="number"||typeof M=="boolean"){if(y!==M)return C[b]=M,!0}else if(y.equals(M)===!1)return y.copy(M),!0}return!1}function m(g){const _=g.uniforms;let E=0;const C=16;for(let b=0,y=_.length;b<y;b++){const T=Array.isArray(_[b])?_[b]:[_[b]];for(let R=0,P=T.length;R<P;R++){const F=T[R],V=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,z=V.length;Y<z;Y++){const X=V[Y],H=v(X),j=E%C,Z=j%H.boundary,A=j+Z;E+=Z,A!==0&&C-A<H.storage&&(E+=C-A),F.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=H.storage}}}const M=E%C;return M>0&&(E+=C-M),g.__size=E,g.__cache={},this}function v(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Oe("WebGLRenderer: Unsupported uniform value type.",g),_}function x(g){const _=g.target;_.removeEventListener("dispose",x);const E=o.indexOf(_.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}const g2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mi=null;function x2(){return mi===null&&(mi=new nT(g2,16,16,co,$i),mi.name="DFG_LUT",mi.minFilter=on,mi.magFilter=on,mi.wrapS=Hi,mi.wrapT=Hi,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}class _2{constructor(e={}){const{canvas:n=Dw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Pn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const v=h,x=new Set([zp,Op,Up]),p=new Set([Pn,Ci,Ta,Aa,kp,Fp]),g=new Uint32Array(4),_=new Int32Array(4);let E=null,C=null;const M=[],b=[];let y=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let R=!1;this._outputColorSpace=On;let P=0,F=0,V=null,Y=-1,z=null;const X=new Rt,H=new Rt;let j=null;const Z=new Ke(0);let A=0,re=n.width,se=n.height,L=1,Fe=null,Ge=null;const J=new Rt(0,0,re,se),ne=new Rt(0,0,re,se);let ae=!1;const ke=new Wp;let Re=!1,De=!1;const Lt=new Tt,Ye=new K,it=new Rt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function yt(){return V===null?L:1}let k=i;function Et(w,G){return n.getContext(w,G)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:c};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lp}`),n.addEventListener("webglcontextlost",Te,!1),n.addEventListener("webglcontextrestored",Ue,!1),n.addEventListener("webglcontextcreationerror",mt,!1),k===null){const G="webgl2";if(k=Et(G,w),k===null)throw Et(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw nt("WebGLRenderer: "+w.message),w}let Je,ut,we,I,S,B,N,O,W,oe,te,ye,Pe,ie,ue,ve,ge,pe,Ne,U,he,de,Me;function ce(){Je=new _b(k),Je.init(),he=new l2(k,Je),ut=new cb(k,Je,e,he),we=new o2(k,Je),ut.reversedDepthBuffer&&d&&we.buffers.depth.setReversed(!0),I=new Sb(k),S=new XR,B=new a2(k,Je,we,S,ut,he,I),N=new xb(T),O=new AT(k),de=new lb(k,O),W=new vb(k,O,I,de),oe=new Mb(k,W,O,de,I),pe=new Eb(k,ut,B),ue=new fb(S),te=new jR(T,N,Je,ut,de,ue),ye=new p2(T,S),Pe=new YR,ie=new e2(Je),ge=new ab(T,N,we,oe,m,l),ve=new s2(T,oe,ut),Me=new m2(k,I,ut,we),Ne=new ub(k,Je,I),U=new yb(k,Je,I),I.programs=te.programs,T.capabilities=ut,T.extensions=Je,T.properties=S,T.renderLists=Pe,T.shadowMap=ve,T.state=we,T.info=I}ce(),v!==Pn&&(y=new Tb(v,n.width,n.height,r,s));const ee=new d2(T,k);this.xr=ee,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=Je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(w){w!==void 0&&(L=w,this.setSize(re,se,!1))},this.getSize=function(w){return w.set(re,se)},this.setSize=function(w,G,Q=!0){if(ee.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}re=w,se=G,n.width=Math.floor(w*L),n.height=Math.floor(G*L),Q===!0&&(n.style.width=w+"px",n.style.height=G+"px"),y!==null&&y.setSize(n.width,n.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(re*L,se*L).floor()},this.setDrawingBufferSize=function(w,G,Q){re=w,se=G,L=Q,n.width=Math.floor(w*Q),n.height=Math.floor(G*Q),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(v===Pn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(X)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,G,Q,$){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,G,Q,$),we.viewport(X.copy(J).multiplyScalar(L).round())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,G,Q,$){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,G,Q,$),we.scissor(H.copy(ne).multiplyScalar(L).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(w){we.setScissorTest(ae=w)},this.setOpaqueSort=function(w){Fe=w},this.setTransparentSort=function(w){Ge=w},this.getClearColor=function(w){return w.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,Q=!0){let $=0;if(w){let q=!1;if(V!==null){const xe=V.texture.format;q=x.has(xe)}if(q){const xe=V.texture.type,Se=p.has(xe),_e=ge.getClearColor(),Ae=ge.getClearAlpha(),be=_e.r,Be=_e.g,je=_e.b;Se?(g[0]=be,g[1]=Be,g[2]=je,g[3]=Ae,k.clearBufferuiv(k.COLOR,0,g)):(_[0]=be,_[1]=Be,_[2]=je,_[3]=Ae,k.clearBufferiv(k.COLOR,0,_))}else $|=k.COLOR_BUFFER_BIT}G&&($|=k.DEPTH_BUFFER_BIT),Q&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Te,!1),n.removeEventListener("webglcontextrestored",Ue,!1),n.removeEventListener("webglcontextcreationerror",mt,!1),ge.dispose(),Pe.dispose(),ie.dispose(),S.dispose(),N.dispose(),oe.dispose(),de.dispose(),Me.dispose(),te.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",pm),ee.removeEventListener("sessionend",mm),Nr.stop()};function Te(w){w.preventDefault(),Og("WebGLRenderer: Context Lost."),R=!0}function Ue(){Og("WebGLRenderer: Context Restored."),R=!1;const w=I.autoReset,G=ve.enabled,Q=ve.autoUpdate,$=ve.needsUpdate,q=ve.type;ce(),I.autoReset=w,ve.enabled=G,ve.autoUpdate=Q,ve.needsUpdate=$,ve.type=q}function mt(w){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ot(w){const G=w.target;G.removeEventListener("dispose",ot),Pi(G)}function Pi(w){Ii(w),S.remove(w)}function Ii(w){const G=S.get(w).programs;G!==void 0&&(G.forEach(function(Q){te.releaseProgram(Q)}),w.isShaderMaterial&&te.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,Q,$,q,xe){G===null&&(G=st);const Se=q.isMesh&&q.matrixWorld.determinant()<0,_e=eE(w,G,Q,$,q);we.setMaterial($,Se);let Ae=Q.index,be=1;if($.wireframe===!0){if(Ae=W.getWireframeAttribute(Q),Ae===void 0)return;be=2}const Be=Q.drawRange,je=Q.attributes.position;let Ie=Be.start*be,ct=(Be.start+Be.count)*be;xe!==null&&(Ie=Math.max(Ie,xe.start*be),ct=Math.min(ct,(xe.start+xe.count)*be)),Ae!==null?(Ie=Math.max(Ie,0),ct=Math.min(ct,Ae.count)):je!=null&&(Ie=Math.max(Ie,0),ct=Math.min(ct,je.count));const Pt=ct-Ie;if(Pt<0||Pt===1/0)return;de.setup(q,$,_e,Q,Ae);let Ct,ft=Ne;if(Ae!==null&&(Ct=O.get(Ae),ft=U,ft.setIndex(Ct)),q.isMesh)$.wireframe===!0?(we.setLineWidth($.wireframeLinewidth*yt()),ft.setMode(k.LINES)):ft.setMode(k.TRIANGLES);else if(q.isLine){let Jt=$.linewidth;Jt===void 0&&(Jt=1),we.setLineWidth(Jt*yt()),q.isLineSegments?ft.setMode(k.LINES):q.isLineLoop?ft.setMode(k.LINE_LOOP):ft.setMode(k.LINE_STRIP)}else q.isPoints?ft.setMode(k.POINTS):q.isSprite&&ft.setMode(k.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Nu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))ft.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Jt=q._multiDrawStarts,Ce=q._multiDrawCounts,Tn=q._multiDrawCount,tt=Ae?O.get(Ae).bytesPerElement:1,Kn=S.get($).currentProgram.getUniforms();for(let di=0;di<Tn;di++)Kn.setValue(k,"_gl_DrawID",di),ft.render(Jt[di]/tt,Ce[di])}else if(q.isInstancedMesh)ft.renderInstances(Ie,Pt,q.count);else if(Q.isInstancedBufferGeometry){const Jt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ce=Math.min(Q.instanceCount,Jt);ft.renderInstances(Ie,Pt,Ce)}else ft.render(Ie,Pt)};function hm(w,G,Q){w.transparent===!0&&w.side===yi&&w.forceSinglePass===!1?(w.side=pn,w.needsUpdate=!0,qa(w,G,Q),w.side=Rr,w.needsUpdate=!0,qa(w,G,Q),w.side=yi):qa(w,G,Q)}this.compile=function(w,G,Q=null){Q===null&&(Q=w),C=ie.get(Q),C.init(G),b.push(C),Q.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(C.pushLight(q),q.castShadow&&C.pushShadow(q))}),w!==Q&&w.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(C.pushLight(q),q.castShadow&&C.pushShadow(q))}),C.setupLights();const $=new Set;return w.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const xe=q.material;if(xe)if(Array.isArray(xe))for(let Se=0;Se<xe.length;Se++){const _e=xe[Se];hm(_e,Q,q),$.add(_e)}else hm(xe,Q,q),$.add(xe)}),C=b.pop(),$},this.compileAsync=function(w,G,Q=null){const $=this.compile(w,G,Q);return new Promise(q=>{function xe(){if($.forEach(function(Se){S.get(Se).currentProgram.isReady()&&$.delete(Se)}),$.size===0){q(w);return}setTimeout(xe,10)}Je.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let dc=null;function QS(w){dc&&dc(w)}function pm(){Nr.stop()}function mm(){Nr.start()}const Nr=new Uy;Nr.setAnimationLoop(QS),typeof self<"u"&&Nr.setContext(self),this.setAnimationLoop=function(w){dc=w,ee.setAnimationLoop(w),w===null?Nr.stop():Nr.start()},ee.addEventListener("sessionstart",pm),ee.addEventListener("sessionend",mm),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const Q=ee.enabled===!0&&ee.isPresenting===!0,$=y!==null&&(V===null||Q)&&y.begin(T,V);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(G),G=ee.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,G,V),C=ie.get(w,b.length),C.init(G),b.push(C),Lt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ke.setFromProjectionMatrix(Lt,Ei,G.reversedDepth),De=this.localClippingEnabled,Re=ue.init(this.clippingPlanes,De),E=Pe.get(w,M.length),E.init(),M.push(E),ee.enabled===!0&&ee.isPresenting===!0){const Se=T.xr.getDepthSensingMesh();Se!==null&&hc(Se,G,-1/0,T.sortObjects)}hc(w,G,0,T.sortObjects),E.finish(),T.sortObjects===!0&&E.sort(Fe,Ge),ze=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,ze&&ge.addToRenderList(E,w),this.info.render.frame++,Re===!0&&ue.beginShadows();const q=C.state.shadowsArray;if(ve.render(q,w,G),Re===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&y.hasRenderPass())===!1){const Se=E.opaque,_e=E.transmissive;if(C.setupLights(),G.isArrayCamera){const Ae=G.cameras;if(_e.length>0)for(let be=0,Be=Ae.length;be<Be;be++){const je=Ae[be];xm(Se,_e,w,je)}ze&&ge.render(w);for(let be=0,Be=Ae.length;be<Be;be++){const je=Ae[be];gm(E,w,je,je.viewport)}}else _e.length>0&&xm(Se,_e,w,G),ze&&ge.render(w),gm(E,w,G)}V!==null&&F===0&&(B.updateMultisampleRenderTarget(V),B.updateRenderTargetMipmap(V)),$&&y.end(T),w.isScene===!0&&w.onAfterRender(T,w,G),de.resetDefaultState(),Y=-1,z=null,b.pop(),b.length>0?(C=b[b.length-1],Re===!0&&ue.setGlobalState(T.clippingPlanes,C.state.camera)):C=null,M.pop(),M.length>0?E=M[M.length-1]:E=null};function hc(w,G,Q,$){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)C.pushLight(w),w.castShadow&&C.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ke.intersectsSprite(w)){$&&it.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Lt);const Se=oe.update(w),_e=w.material;_e.visible&&E.push(w,Se,_e,Q,it.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ke.intersectsObject(w))){const Se=oe.update(w),_e=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),it.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),it.copy(Se.boundingSphere.center)),it.applyMatrix4(w.matrixWorld).applyMatrix4(Lt)),Array.isArray(_e)){const Ae=Se.groups;for(let be=0,Be=Ae.length;be<Be;be++){const je=Ae[be],Ie=_e[je.materialIndex];Ie&&Ie.visible&&E.push(w,Se,Ie,Q,it.z,je)}}else _e.visible&&E.push(w,Se,_e,Q,it.z,null)}}const xe=w.children;for(let Se=0,_e=xe.length;Se<_e;Se++)hc(xe[Se],G,Q,$)}function gm(w,G,Q,$){const{opaque:q,transmissive:xe,transparent:Se}=w;C.setupLightsView(Q),Re===!0&&ue.setGlobalState(T.clippingPlanes,Q),$&&we.viewport(X.copy($)),q.length>0&&Xa(q,G,Q),xe.length>0&&Xa(xe,G,Q),Se.length>0&&Xa(Se,G,Q),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function xm(w,G,Q,$){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[$.id]===void 0){const Ie=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[$.id]=new Ai(1,1,{generateMipmaps:!0,type:Ie?$i:Pn,minFilter:Jr,samples:Math.max(4,ut.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const xe=C.state.transmissionRenderTarget[$.id],Se=$.viewport||X;xe.setSize(Se.z*T.transmissionResolutionScale,Se.w*T.transmissionResolutionScale);const _e=T.getRenderTarget(),Ae=T.getActiveCubeFace(),be=T.getActiveMipmapLevel();T.setRenderTarget(xe),T.getClearColor(Z),A=T.getClearAlpha(),A<1&&T.setClearColor(16777215,.5),T.clear(),ze&&ge.render(Q);const Be=T.toneMapping;T.toneMapping=Ti;const je=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),C.setupLightsView($),Re===!0&&ue.setGlobalState(T.clippingPlanes,$),Xa(w,Q,$),B.updateMultisampleRenderTarget(xe),B.updateRenderTargetMipmap(xe),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ct=0,Pt=G.length;ct<Pt;ct++){const Ct=G[ct],{object:ft,geometry:Jt,material:Ce,group:Tn}=Ct;if(Ce.side===yi&&ft.layers.test($.layers)){const tt=Ce.side;Ce.side=pn,Ce.needsUpdate=!0,_m(ft,Q,$,Jt,Ce,Tn),Ce.side=tt,Ce.needsUpdate=!0,Ie=!0}}Ie===!0&&(B.updateMultisampleRenderTarget(xe),B.updateRenderTargetMipmap(xe))}T.setRenderTarget(_e,Ae,be),T.setClearColor(Z,A),je!==void 0&&($.viewport=je),T.toneMapping=Be}function Xa(w,G,Q){const $=G.isScene===!0?G.overrideMaterial:null;for(let q=0,xe=w.length;q<xe;q++){const Se=w[q],{object:_e,geometry:Ae,group:be}=Se;let Be=Se.material;Be.allowOverride===!0&&$!==null&&(Be=$),_e.layers.test(Q.layers)&&_m(_e,G,Q,Ae,Be,be)}}function _m(w,G,Q,$,q,xe){w.onBeforeRender(T,G,Q,$,q,xe),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(T,G,Q,$,w,xe),q.transparent===!0&&q.side===yi&&q.forceSinglePass===!1?(q.side=pn,q.needsUpdate=!0,T.renderBufferDirect(Q,G,$,q,w,xe),q.side=Rr,q.needsUpdate=!0,T.renderBufferDirect(Q,G,$,q,w,xe),q.side=yi):T.renderBufferDirect(Q,G,$,q,w,xe),w.onAfterRender(T,G,Q,$,q,xe)}function qa(w,G,Q){G.isScene!==!0&&(G=st);const $=S.get(w),q=C.state.lights,xe=C.state.shadowsArray,Se=q.state.version,_e=te.getParameters(w,q.state,xe,G,Q),Ae=te.getProgramCacheKey(_e);let be=$.programs;$.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,$.fog=G.fog;const Be=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;$.envMap=N.get(w.envMap||$.environment,Be),$.envMapRotation=$.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,be===void 0&&(w.addEventListener("dispose",ot),be=new Map,$.programs=be);let je=be.get(Ae);if(je!==void 0){if($.currentProgram===je&&$.lightsStateVersion===Se)return ym(w,_e),je}else _e.uniforms=te.getUniforms(w),w.onBeforeCompile(_e,T),je=te.acquireProgram(_e,Ae),be.set(Ae,je),$.uniforms=_e.uniforms;const Ie=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=ue.uniform),ym(w,_e),$.needsLights=nE(w),$.lightsStateVersion=Se,$.needsLights&&(Ie.ambientLightColor.value=q.state.ambient,Ie.lightProbe.value=q.state.probe,Ie.directionalLights.value=q.state.directional,Ie.directionalLightShadows.value=q.state.directionalShadow,Ie.spotLights.value=q.state.spot,Ie.spotLightShadows.value=q.state.spotShadow,Ie.rectAreaLights.value=q.state.rectArea,Ie.ltc_1.value=q.state.rectAreaLTC1,Ie.ltc_2.value=q.state.rectAreaLTC2,Ie.pointLights.value=q.state.point,Ie.pointLightShadows.value=q.state.pointShadow,Ie.hemisphereLights.value=q.state.hemi,Ie.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ie.spotLightMatrix.value=q.state.spotLightMatrix,Ie.spotLightMap.value=q.state.spotLightMap,Ie.pointShadowMatrix.value=q.state.pointShadowMatrix),$.currentProgram=je,$.uniformsList=null,je}function vm(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=nu.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function ym(w,G){const Q=S.get(w);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function eE(w,G,Q,$,q){G.isScene!==!0&&(G=st),B.resetTextureUnits();const xe=G.fog,Se=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?G.environment:null,_e=V===null?T.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:fo,Ae=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,be=N.get($.envMap||Se,Ae),Be=$.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,je=!!Q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ie=!!Q.morphAttributes.position,ct=!!Q.morphAttributes.normal,Pt=!!Q.morphAttributes.color;let Ct=Ti;$.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ct=T.toneMapping);const ft=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Jt=ft!==void 0?ft.length:0,Ce=S.get($),Tn=C.state.lights;if(Re===!0&&(De===!0||w!==z)){const Bt=w===z&&$.id===Y;ue.setState($,w,Bt)}let tt=!1;$.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Tn.state.version||Ce.outputColorSpace!==_e||q.isBatchedMesh&&Ce.batching===!1||!q.isBatchedMesh&&Ce.batching===!0||q.isBatchedMesh&&Ce.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ce.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ce.instancing===!1||!q.isInstancedMesh&&Ce.instancing===!0||q.isSkinnedMesh&&Ce.skinning===!1||!q.isSkinnedMesh&&Ce.skinning===!0||q.isInstancedMesh&&Ce.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ce.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ce.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ce.instancingMorph===!1&&q.morphTexture!==null||Ce.envMap!==be||$.fog===!0&&Ce.fog!==xe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ue.numPlanes||Ce.numIntersection!==ue.numIntersection)||Ce.vertexAlphas!==Be||Ce.vertexTangents!==je||Ce.morphTargets!==Ie||Ce.morphNormals!==ct||Ce.morphColors!==Pt||Ce.toneMapping!==Ct||Ce.morphTargetsCount!==Jt)&&(tt=!0):(tt=!0,Ce.__version=$.version);let Kn=Ce.currentProgram;tt===!0&&(Kn=qa($,G,q));let di=!1,kr=!1,hs=!1;const dt=Kn.getUniforms(),jt=Ce.uniforms;if(we.useProgram(Kn.program)&&(di=!0,kr=!0,hs=!0),$.id!==Y&&(Y=$.id,kr=!0),di||z!==w){we.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),dt.setValue(k,"projectionMatrix",w.projectionMatrix),dt.setValue(k,"viewMatrix",w.matrixWorldInverse);const er=dt.map.cameraPosition;er!==void 0&&er.setValue(k,Ye.setFromMatrixPosition(w.matrixWorld)),ut.logarithmicDepthBuffer&&dt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&dt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),z!==w&&(z=w,kr=!0,hs=!0)}if(Ce.needsLights&&(Tn.state.directionalShadowMap.length>0&&dt.setValue(k,"directionalShadowMap",Tn.state.directionalShadowMap,B),Tn.state.spotShadowMap.length>0&&dt.setValue(k,"spotShadowMap",Tn.state.spotShadowMap,B),Tn.state.pointShadowMap.length>0&&dt.setValue(k,"pointShadowMap",Tn.state.pointShadowMap,B)),q.isSkinnedMesh){dt.setOptional(k,q,"bindMatrix"),dt.setOptional(k,q,"bindMatrixInverse");const Bt=q.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),dt.setValue(k,"boneTexture",Bt.boneTexture,B))}q.isBatchedMesh&&(dt.setOptional(k,q,"batchingTexture"),dt.setValue(k,"batchingTexture",q._matricesTexture,B),dt.setOptional(k,q,"batchingIdTexture"),dt.setValue(k,"batchingIdTexture",q._indirectTexture,B),dt.setOptional(k,q,"batchingColorTexture"),q._colorsTexture!==null&&dt.setValue(k,"batchingColorTexture",q._colorsTexture,B));const Qi=Q.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&pe.update(q,Q,Kn),(kr||Ce.receiveShadow!==q.receiveShadow)&&(Ce.receiveShadow=q.receiveShadow,dt.setValue(k,"receiveShadow",q.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&G.environment!==null&&(jt.envMapIntensity.value=G.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=x2()),kr&&(dt.setValue(k,"toneMappingExposure",T.toneMappingExposure),Ce.needsLights&&tE(jt,hs),xe&&$.fog===!0&&ye.refreshFogUniforms(jt,xe),ye.refreshMaterialUniforms(jt,$,L,se,C.state.transmissionRenderTarget[w.id]),nu.upload(k,vm(Ce),jt,B)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(nu.upload(k,vm(Ce),jt,B),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&dt.setValue(k,"center",q.center),dt.setValue(k,"modelViewMatrix",q.modelViewMatrix),dt.setValue(k,"normalMatrix",q.normalMatrix),dt.setValue(k,"modelMatrix",q.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Bt=$.uniformsGroups;for(let er=0,ps=Bt.length;er<ps;er++){const Sm=Bt[er];Me.update(Sm,Kn),Me.bind(Sm,Kn)}}return Kn}function tE(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function nE(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(w,G,Q){const $=S.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),S.get(w.texture).__webglTexture=G,S.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){const Q=S.get(w);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0};const iE=k.createFramebuffer();this.setRenderTarget=function(w,G=0,Q=0){V=w,P=G,F=Q;let $=null,q=!1,xe=!1;if(w){const _e=S.get(w);if(_e.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(k.FRAMEBUFFER,_e.__webglFramebuffer),X.copy(w.viewport),H.copy(w.scissor),j=w.scissorTest,we.viewport(X),we.scissor(H),we.setScissorTest(j),Y=-1;return}else if(_e.__webglFramebuffer===void 0)B.setupRenderTarget(w);else if(_e.__hasExternalTextures)B.rebindTextures(w,S.get(w.texture).__webglTexture,S.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Be=w.depthTexture;if(_e.__boundDepthTexture!==Be){if(Be!==null&&S.has(Be)&&(w.width!==Be.image.width||w.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(w)}}const Ae=w.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(xe=!0);const be=S.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(be[G])?$=be[G][Q]:$=be[G],q=!0):w.samples>0&&B.useMultisampledRTT(w)===!1?$=S.get(w).__webglMultisampledFramebuffer:Array.isArray(be)?$=be[Q]:$=be,X.copy(w.viewport),H.copy(w.scissor),j=w.scissorTest}else X.copy(J).multiplyScalar(L).floor(),H.copy(ne).multiplyScalar(L).floor(),j=ae;if(Q!==0&&($=iE),we.bindFramebuffer(k.FRAMEBUFFER,$)&&we.drawBuffers(w,$),we.viewport(X),we.scissor(H),we.setScissorTest(j),q){const _e=S.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+G,_e.__webglTexture,Q)}else if(xe){const _e=G;for(let Ae=0;Ae<w.textures.length;Ae++){const be=S.get(w.textures[Ae]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ae,be.__webglTexture,Q,_e)}}else if(w!==null&&Q!==0){const _e=S.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,_e.__webglTexture,Q)}Y=-1},this.readRenderTargetPixels=function(w,G,Q,$,q,xe,Se,_e=0){if(!(w&&w.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){we.bindFramebuffer(k.FRAMEBUFFER,Ae);try{const be=w.textures[_e],Be=be.format,je=be.type;if(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_e),!ut.textureFormatReadable(Be)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(je)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-$&&Q>=0&&Q<=w.height-q&&k.readPixels(G,Q,$,q,he.convert(Be),he.convert(je),xe)}finally{const be=V!==null?S.get(V).__webglFramebuffer:null;we.bindFramebuffer(k.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(w,G,Q,$,q,xe,Se,_e=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae)if(G>=0&&G<=w.width-$&&Q>=0&&Q<=w.height-q){we.bindFramebuffer(k.FRAMEBUFFER,Ae);const be=w.textures[_e],Be=be.format,je=be.type;if(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_e),!ut.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ie),k.bufferData(k.PIXEL_PACK_BUFFER,xe.byteLength,k.STREAM_READ),k.readPixels(G,Q,$,q,he.convert(Be),he.convert(je),0);const ct=V!==null?S.get(V).__webglFramebuffer:null;we.bindFramebuffer(k.FRAMEBUFFER,ct);const Pt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Nw(k,Pt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ie),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,xe),k.deleteBuffer(Ie),k.deleteSync(Pt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,Q=0){const $=Math.pow(2,-Q),q=Math.floor(w.image.width*$),xe=Math.floor(w.image.height*$),Se=G!==null?G.x:0,_e=G!==null?G.y:0;B.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,Q,0,0,Se,_e,q,xe),we.unbindTexture()};const rE=k.createFramebuffer(),sE=k.createFramebuffer();this.copyTextureToTexture=function(w,G,Q=null,$=null,q=0,xe=0){let Se,_e,Ae,be,Be,je,Ie,ct,Pt;const Ct=w.isCompressedTexture?w.mipmaps[xe]:w.image;if(Q!==null)Se=Q.max.x-Q.min.x,_e=Q.max.y-Q.min.y,Ae=Q.isBox3?Q.max.z-Q.min.z:1,be=Q.min.x,Be=Q.min.y,je=Q.isBox3?Q.min.z:0;else{const jt=Math.pow(2,-q);Se=Math.floor(Ct.width*jt),_e=Math.floor(Ct.height*jt),w.isDataArrayTexture?Ae=Ct.depth:w.isData3DTexture?Ae=Math.floor(Ct.depth*jt):Ae=1,be=0,Be=0,je=0}$!==null?(Ie=$.x,ct=$.y,Pt=$.z):(Ie=0,ct=0,Pt=0);const ft=he.convert(G.format),Jt=he.convert(G.type);let Ce;G.isData3DTexture?(B.setTexture3D(G,0),Ce=k.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(B.setTexture2DArray(G,0),Ce=k.TEXTURE_2D_ARRAY):(B.setTexture2D(G,0),Ce=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment);const Tn=k.getParameter(k.UNPACK_ROW_LENGTH),tt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Kn=k.getParameter(k.UNPACK_SKIP_PIXELS),di=k.getParameter(k.UNPACK_SKIP_ROWS),kr=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ct.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ct.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,be),k.pixelStorei(k.UNPACK_SKIP_ROWS,Be),k.pixelStorei(k.UNPACK_SKIP_IMAGES,je);const hs=w.isDataArrayTexture||w.isData3DTexture,dt=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){const jt=S.get(w),Qi=S.get(G),Bt=S.get(jt.__renderTarget),er=S.get(Qi.__renderTarget);we.bindFramebuffer(k.READ_FRAMEBUFFER,Bt.__webglFramebuffer),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,er.__webglFramebuffer);for(let ps=0;ps<Ae;ps++)hs&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,S.get(w).__webglTexture,q,je+ps),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,S.get(G).__webglTexture,xe,Pt+ps)),k.blitFramebuffer(be,Be,Se,_e,Ie,ct,Se,_e,k.DEPTH_BUFFER_BIT,k.NEAREST);we.bindFramebuffer(k.READ_FRAMEBUFFER,null),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(q!==0||w.isRenderTargetTexture||S.has(w)){const jt=S.get(w),Qi=S.get(G);we.bindFramebuffer(k.READ_FRAMEBUFFER,rE),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,sE);for(let Bt=0;Bt<Ae;Bt++)hs?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,jt.__webglTexture,q,je+Bt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,jt.__webglTexture,q),dt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Qi.__webglTexture,xe,Pt+Bt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Qi.__webglTexture,xe),q!==0?k.blitFramebuffer(be,Be,Se,_e,Ie,ct,Se,_e,k.COLOR_BUFFER_BIT,k.NEAREST):dt?k.copyTexSubImage3D(Ce,xe,Ie,ct,Pt+Bt,be,Be,Se,_e):k.copyTexSubImage2D(Ce,xe,Ie,ct,be,Be,Se,_e);we.bindFramebuffer(k.READ_FRAMEBUFFER,null),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else dt?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Ce,xe,Ie,ct,Pt,Se,_e,Ae,ft,Jt,Ct.data):G.isCompressedArrayTexture?k.compressedTexSubImage3D(Ce,xe,Ie,ct,Pt,Se,_e,Ae,ft,Ct.data):k.texSubImage3D(Ce,xe,Ie,ct,Pt,Se,_e,Ae,ft,Jt,Ct):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,xe,Ie,ct,Se,_e,ft,Jt,Ct.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,xe,Ie,ct,Ct.width,Ct.height,ft,Ct.data):k.texSubImage2D(k.TEXTURE_2D,xe,Ie,ct,Se,_e,ft,Jt,Ct);k.pixelStorei(k.UNPACK_ROW_LENGTH,Tn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,tt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Kn),k.pixelStorei(k.UNPACK_SKIP_ROWS,di),k.pixelStorei(k.UNPACK_SKIP_IMAGES,kr),xe===0&&G.generateMipmaps&&k.generateMipmap(Ce),we.unbindTexture()},this.initRenderTarget=function(w){S.get(w).__webglFramebuffer===void 0&&B.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?B.setTextureCube(w,0):w.isData3DTexture?B.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?B.setTexture2DArray(w,0):B.setTexture2D(w,0),we.unbindTexture()},this.resetState=function(){P=0,F=0,V=null,we.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}}function v2(){const t=ht.useRef(null);return ht.useEffect(()=>{if(!t.current)return;const e=new Kw;e.fog=new Gp(65795,.001);const n=new Hn(45,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=60,n.position.y=5;const i=new _2({alpha:!0,antialias:!0,powerPreference:"high-performance"});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.current.appendChild(i.domElement);const r=new vT,s="https://unpkg.com/three-globe/example/img/earth-night.jpg",o="https://unpkg.com/three-globe/example/img/earth-topology.png",a="https://unpkg.com/three-globe/example/img/earth-water.png",l="https://unpkg.com/three-globe/example/img/earth-clouds.png",u=new Xo;u.rotation.z=-23.5*Math.PI/180,e.add(u);const f=new ia(15,64,64),c=new t0({map:r.load(s),bumpMap:r.load(o),bumpScale:.15,specularMap:r.load(a),specular:new Ke("grey")}),d=new Xn(f,c);u.add(d);const h=new ia(15.2,64,64),m=new t0({map:r.load(l),transparent:!0,opacity:.8,blending:Lu,side:yi,depthWrite:!1}),v=new Xn(h,m);u.add(v);const x=new ia(17.5,64,64),p=`
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
    `,_=new fi({vertexShader:p,fragmentShader:g,blending:Lu,side:pn,transparent:!0}),E=new Xn(x,_);e.add(E);const C=new $n,M=3e3,b=new Float32Array(M*3);for(let ne=0;ne<M*3;ne++)b[ne]=(Math.random()-.5)*400;C.setAttribute("position",new li(b,3));const y=()=>{const ne=document.createElement("canvas");ne.width=16,ne.height=16;const ae=ne.getContext("2d");return ae.beginPath(),ae.arc(8,8,8,0,Math.PI*2),ae.fillStyle="white",ae.fill(),new aT(ne)},T=new Iy({color:16777215,size:.4,map:y(),transparent:!0,opacity:.8,sizeAttenuation:!0,depthWrite:!1}),R=new oT(C,T);e.add(R);const P=new ET(16777215,.2);e.add(P);const F=new a0(16777215,2);F.position.set(30,20,20),e.add(F);const V=new a0(3900150,1.5);V.position.set(-30,0,-20),e.add(V);let Y=0,z=0,X=0,H=0;const j=window.innerWidth/2,Z=window.innerHeight/2,A=ne=>{Y=(ne.clientX-j)*.001,z=(ne.clientY-Z)*.001};window.addEventListener("mousemove",A);let re=window.scrollY,se=window.scrollY;const L=()=>{se=window.scrollY};window.addEventListener("scroll",L,{passive:!0});const Fe=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",Fe);let Ge;const J=()=>{Ge=requestAnimationFrame(J),d.rotation.y+=.001,v.rotation.y+=.0013,R.rotation.y+=2e-4,X=Y*2,H=z*2,u.rotation.y+=(X-u.rotation.y)*.05,u.rotation.x+=(H-u.rotation.x)*.05,re+=(se-re)*.05,n.position.y=5+re*-.015,n.lookAt(e.position),i.render(e,n)};return J(),()=>{cancelAnimationFrame(Ge),window.removeEventListener("mousemove",A),window.removeEventListener("scroll",L),window.removeEventListener("resize",Fe),t.current&&i.domElement&&t.current.removeChild(i.domElement),i.dispose(),f.dispose(),c.dispose(),h.dispose(),m.dispose(),x.dispose(),_.dispose(),C.dispose(),T.dispose()}},[]),D.jsx("div",{ref:t,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,pointerEvents:"none",background:"#010103"}})}function y2(t,e){const n={};return(t[t.length-1]===""?[...t,""]:t).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const S2=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,E2=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,M2={};function L0(t,e){return(M2.jsx?E2:S2).test(t)}const w2=/[ \t\n\f\r]/g;function T2(t){return typeof t=="object"?t.type==="text"?D0(t.value):!1:D0(t)}function D0(t){return t.replace(w2,"")===""}class Va{constructor(e,n,i){this.normal=n,this.property=e,i&&(this.space=i)}}Va.prototype.normal={};Va.prototype.property={};Va.prototype.space=void 0;function Gy(t,e){const n={},i={};for(const r of t)Object.assign(n,r.property),Object.assign(i,r.normal);return new Va(n,i,e)}function Th(t){return t.toLowerCase()}class wn{constructor(e,n){this.attribute=n,this.property=e}}wn.prototype.attribute="";wn.prototype.booleanish=!1;wn.prototype.boolean=!1;wn.prototype.commaOrSpaceSeparated=!1;wn.prototype.commaSeparated=!1;wn.prototype.defined=!1;wn.prototype.mustUseProperty=!1;wn.prototype.number=!1;wn.prototype.overloadedBoolean=!1;wn.prototype.property="";wn.prototype.spaceSeparated=!1;wn.prototype.space=void 0;let A2=0;const He=ds(),Nt=ds(),Ah=ds(),fe=ds(),gt=ds(),eo=ds(),bn=ds();function ds(){return 2**++A2}const Ch=Object.freeze(Object.defineProperty({__proto__:null,boolean:He,booleanish:Nt,commaOrSpaceSeparated:bn,commaSeparated:eo,number:fe,overloadedBoolean:Ah,spaceSeparated:gt},Symbol.toStringTag,{value:"Module"})),Mf=Object.keys(Ch);class qp extends wn{constructor(e,n,i,r){let s=-1;if(super(e,n),N0(this,"space",r),typeof i=="number")for(;++s<Mf.length;){const o=Mf[s];N0(this,Mf[s],(i&Ch[o])===Ch[o])}}}qp.prototype.defined=!0;function N0(t,e,n){n&&(t[e]=n)}function Eo(t){const e={},n={};for(const[i,r]of Object.entries(t.properties)){const s=new qp(i,t.transform(t.attributes||{},i),r,t.space);t.mustUseProperty&&t.mustUseProperty.includes(i)&&(s.mustUseProperty=!0),e[i]=s,n[Th(i)]=i,n[Th(s.attribute)]=i}return new Va(e,n,t.space)}const Wy=Eo({properties:{ariaActiveDescendant:null,ariaAtomic:Nt,ariaAutoComplete:null,ariaBusy:Nt,ariaChecked:Nt,ariaColCount:fe,ariaColIndex:fe,ariaColSpan:fe,ariaControls:gt,ariaCurrent:null,ariaDescribedBy:gt,ariaDetails:null,ariaDisabled:Nt,ariaDropEffect:gt,ariaErrorMessage:null,ariaExpanded:Nt,ariaFlowTo:gt,ariaGrabbed:Nt,ariaHasPopup:null,ariaHidden:Nt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:gt,ariaLevel:fe,ariaLive:null,ariaModal:Nt,ariaMultiLine:Nt,ariaMultiSelectable:Nt,ariaOrientation:null,ariaOwns:gt,ariaPlaceholder:null,ariaPosInSet:fe,ariaPressed:Nt,ariaReadOnly:Nt,ariaRelevant:null,ariaRequired:Nt,ariaRoleDescription:gt,ariaRowCount:fe,ariaRowIndex:fe,ariaRowSpan:fe,ariaSelected:Nt,ariaSetSize:fe,ariaSort:null,ariaValueMax:fe,ariaValueMin:fe,ariaValueNow:fe,ariaValueText:null,role:null},transform(t,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()}});function jy(t,e){return e in t?t[e]:e}function Xy(t,e){return jy(t,e.toLowerCase())}const C2=Eo({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:eo,acceptCharset:gt,accessKey:gt,action:null,allow:null,allowFullScreen:He,allowPaymentRequest:He,allowUserMedia:He,alt:null,as:null,async:He,autoCapitalize:null,autoComplete:gt,autoFocus:He,autoPlay:He,blocking:gt,capture:null,charSet:null,checked:He,cite:null,className:gt,cols:fe,colSpan:null,content:null,contentEditable:Nt,controls:He,controlsList:gt,coords:fe|eo,crossOrigin:null,data:null,dateTime:null,decoding:null,default:He,defer:He,dir:null,dirName:null,disabled:He,download:Ah,draggable:Nt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:He,formTarget:null,headers:gt,height:fe,hidden:Ah,high:fe,href:null,hrefLang:null,htmlFor:gt,httpEquiv:gt,id:null,imageSizes:null,imageSrcSet:null,inert:He,inputMode:null,integrity:null,is:null,isMap:He,itemId:null,itemProp:gt,itemRef:gt,itemScope:He,itemType:gt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:He,low:fe,manifest:null,max:null,maxLength:fe,media:null,method:null,min:null,minLength:fe,multiple:He,muted:He,name:null,nonce:null,noModule:He,noValidate:He,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:He,optimum:fe,pattern:null,ping:gt,placeholder:null,playsInline:He,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:He,referrerPolicy:null,rel:gt,required:He,reversed:He,rows:fe,rowSpan:fe,sandbox:gt,scope:null,scoped:He,seamless:He,selected:He,shadowRootClonable:He,shadowRootDelegatesFocus:He,shadowRootMode:null,shape:null,size:fe,sizes:null,slot:null,span:fe,spellCheck:Nt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:fe,step:null,style:null,tabIndex:fe,target:null,title:null,translate:null,type:null,typeMustMatch:He,useMap:null,value:Nt,width:fe,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:gt,axis:null,background:null,bgColor:null,border:fe,borderColor:null,bottomMargin:fe,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:He,declare:He,event:null,face:null,frame:null,frameBorder:null,hSpace:fe,leftMargin:fe,link:null,longDesc:null,lowSrc:null,marginHeight:fe,marginWidth:fe,noResize:He,noHref:He,noShade:He,noWrap:He,object:null,profile:null,prompt:null,rev:null,rightMargin:fe,rules:null,scheme:null,scrolling:Nt,standby:null,summary:null,text:null,topMargin:fe,valueType:null,version:null,vAlign:null,vLink:null,vSpace:fe,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:He,disableRemotePlayback:He,prefix:null,property:null,results:fe,security:null,unselectable:null},space:"html",transform:Xy}),b2=Eo({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:bn,accentHeight:fe,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:fe,amplitude:fe,arabicForm:null,ascent:fe,attributeName:null,attributeType:null,azimuth:fe,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:fe,by:null,calcMode:null,capHeight:fe,className:gt,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:fe,diffuseConstant:fe,direction:null,display:null,dur:null,divisor:fe,dominantBaseline:null,download:He,dx:null,dy:null,edgeMode:null,editable:null,elevation:fe,enableBackground:null,end:null,event:null,exponent:fe,externalResourcesRequired:null,fill:null,fillOpacity:fe,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:eo,g2:eo,glyphName:eo,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:fe,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:fe,horizOriginX:fe,horizOriginY:fe,id:null,ideographic:fe,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:fe,k:fe,k1:fe,k2:fe,k3:fe,k4:fe,kernelMatrix:bn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:fe,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:fe,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:fe,overlineThickness:fe,paintOrder:null,panose1:null,path:null,pathLength:fe,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:gt,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:fe,pointsAtY:fe,pointsAtZ:fe,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:bn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:bn,rev:bn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:bn,requiredFeatures:bn,requiredFonts:bn,requiredFormats:bn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:fe,specularExponent:fe,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:fe,strikethroughThickness:fe,string:null,stroke:null,strokeDashArray:bn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:fe,strokeOpacity:fe,strokeWidth:null,style:null,surfaceScale:fe,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:bn,tabIndex:fe,tableValues:null,target:null,targetX:fe,targetY:fe,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:bn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:fe,underlineThickness:fe,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:fe,values:null,vAlphabetic:fe,vMathematical:fe,vectorEffect:null,vHanging:fe,vIdeographic:fe,version:null,vertAdvY:fe,vertOriginX:fe,vertOriginY:fe,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:fe,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:jy}),qy=Eo({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,e){return"xlink:"+e.slice(5).toLowerCase()}}),Yy=Eo({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Xy}),$y=Eo({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,e){return"xml:"+e.slice(3).toLowerCase()}}),R2={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},P2=/[A-Z]/g,k0=/-[a-z]/g,I2=/^data[-\w.:]+$/i;function L2(t,e){const n=Th(e);let i=e,r=wn;if(n in t.normal)return t.property[t.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&I2.test(e)){if(e.charAt(4)==="-"){const s=e.slice(5).replace(k0,N2);i="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=e.slice(4);if(!k0.test(s)){let o=s.replace(P2,D2);o.charAt(0)!=="-"&&(o="-"+o),e="data"+o}}r=qp}return new r(i,e)}function D2(t){return"-"+t.toLowerCase()}function N2(t){return t.charAt(1).toUpperCase()}const k2=Gy([Wy,C2,qy,Yy,$y],"html"),Yp=Gy([Wy,b2,qy,Yy,$y],"svg");function F2(t){return t.join(" ").trim()}var $p={},F0=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,U2=/\n/g,O2=/^\s*/,z2=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,B2=/^:\s*/,H2=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,V2=/^[;\s]*/,G2=/^\s+|\s+$/g,W2=`
`,U0="/",O0="*",Yr="",j2="comment",X2="declaration";function q2(t,e){if(typeof t!="string")throw new TypeError("First argument must be a string");if(!t)return[];e=e||{};var n=1,i=1;function r(m){var v=m.match(U2);v&&(n+=v.length);var x=m.lastIndexOf(W2);i=~x?m.length-x:i+m.length}function s(){var m={line:n,column:i};return function(v){return v.position=new o(m),u(),v}}function o(m){this.start=m,this.end={line:n,column:i},this.source=e.source}o.prototype.content=t;function a(m){var v=new Error(e.source+":"+n+":"+i+": "+m);if(v.reason=m,v.filename=e.source,v.line=n,v.column=i,v.source=t,!e.silent)throw v}function l(m){var v=m.exec(t);if(v){var x=v[0];return r(x),t=t.slice(x.length),v}}function u(){l(O2)}function f(m){var v;for(m=m||[];v=c();)v!==!1&&m.push(v);return m}function c(){var m=s();if(!(U0!=t.charAt(0)||O0!=t.charAt(1))){for(var v=2;Yr!=t.charAt(v)&&(O0!=t.charAt(v)||U0!=t.charAt(v+1));)++v;if(v+=2,Yr===t.charAt(v-1))return a("End of comment missing");var x=t.slice(2,v-2);return i+=2,r(x),t=t.slice(v),i+=2,m({type:j2,comment:x})}}function d(){var m=s(),v=l(z2);if(v){if(c(),!l(B2))return a("property missing ':'");var x=l(H2),p=m({type:X2,property:z0(v[0].replace(F0,Yr)),value:x?z0(x[0].replace(F0,Yr)):Yr});return l(V2),p}}function h(){var m=[];f(m);for(var v;v=d();)v!==!1&&(m.push(v),f(m));return m}return u(),h()}function z0(t){return t?t.replace(G2,Yr):Yr}var Y2=q2,$2=ou&&ou.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty($p,"__esModule",{value:!0});$p.default=Z2;const K2=$2(Y2);function Z2(t,e){let n=null;if(!t||typeof t!="string")return n;const i=(0,K2.default)(t),r=typeof e=="function";return i.forEach(s=>{if(s.type!=="declaration")return;const{property:o,value:a}=s;r?e(o,a,s):a&&(n=n||{},n[o]=a)}),n}var oc={};Object.defineProperty(oc,"__esModule",{value:!0});oc.camelCase=void 0;var J2=/^--[a-zA-Z0-9_-]+$/,Q2=/-([a-z])/g,eP=/^[^-]+$/,tP=/^-(webkit|moz|ms|o|khtml)-/,nP=/^-(ms)-/,iP=function(t){return!t||eP.test(t)||J2.test(t)},rP=function(t,e){return e.toUpperCase()},B0=function(t,e){return"".concat(e,"-")},sP=function(t,e){return e===void 0&&(e={}),iP(t)?t:(t=t.toLowerCase(),e.reactCompat?t=t.replace(nP,B0):t=t.replace(tP,B0),t.replace(Q2,rP))};oc.camelCase=sP;var oP=ou&&ou.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},aP=oP($p),lP=oc;function bh(t,e){var n={};return!t||typeof t!="string"||(0,aP.default)(t,function(i,r){i&&r&&(n[(0,lP.camelCase)(i,e)]=r)}),n}bh.default=bh;var uP=bh;const cP=Uh(uP),Ky=Zy("end"),Kp=Zy("start");function Zy(t){return e;function e(n){const i=n&&n.position&&n.position[t]||{};if(typeof i.line=="number"&&i.line>0&&typeof i.column=="number"&&i.column>0)return{line:i.line,column:i.column,offset:typeof i.offset=="number"&&i.offset>-1?i.offset:void 0}}}function fP(t){const e=Kp(t),n=Ky(t);if(e&&n)return{start:e,end:n}}function ra(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?H0(t.position):"start"in t||"end"in t?H0(t):"line"in t||"column"in t?Rh(t):""}function Rh(t){return V0(t&&t.line)+":"+V0(t&&t.column)}function H0(t){return Rh(t&&t.start)+"-"+Rh(t&&t.end)}function V0(t){return t&&typeof t=="number"?t:1}class un extends Error{constructor(e,n,i){super(),typeof n=="string"&&(i=n,n=void 0);let r="",s={},o=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof e=="string"?r=e:!s.cause&&e&&(o=!0,r=e.message,s.cause=e),!s.ruleId&&!s.source&&typeof i=="string"){const l=i.indexOf(":");l===-1?s.ruleId=i:(s.source=i.slice(0,l),s.ruleId=i.slice(l+1))}if(!s.place&&s.ancestors&&s.ancestors){const l=s.ancestors[s.ancestors.length-1];l&&(s.place=l.position)}const a=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=r,this.line=a?a.line:void 0,this.name=ra(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=o&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}un.prototype.file="";un.prototype.name="";un.prototype.reason="";un.prototype.message="";un.prototype.stack="";un.prototype.column=void 0;un.prototype.line=void 0;un.prototype.ancestors=void 0;un.prototype.cause=void 0;un.prototype.fatal=void 0;un.prototype.place=void 0;un.prototype.ruleId=void 0;un.prototype.source=void 0;const Zp={}.hasOwnProperty,dP=new Map,hP=/[A-Z]/g,pP=new Set(["table","tbody","thead","tfoot","tr"]),mP=new Set(["td","th"]),Jy="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function gP(t,e){if(!e||e.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=e.filePath||void 0;let i;if(e.development){if(typeof e.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");i=wP(n,e.jsxDEV)}else{if(typeof e.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof e.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");i=MP(n,e.jsx,e.jsxs)}const r={Fragment:e.Fragment,ancestors:[],components:e.components||{},create:i,elementAttributeNameCase:e.elementAttributeNameCase||"react",evaluater:e.createEvaluater?e.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:e.ignoreInvalidStyle||!1,passKeys:e.passKeys!==!1,passNode:e.passNode||!1,schema:e.space==="svg"?Yp:k2,stylePropertyNameCase:e.stylePropertyNameCase||"dom",tableCellAlignToStyle:e.tableCellAlignToStyle!==!1},s=Qy(r,t,void 0);return s&&typeof s!="string"?s:r.create(t,r.Fragment,{children:s||void 0},void 0)}function Qy(t,e,n){if(e.type==="element")return xP(t,e,n);if(e.type==="mdxFlowExpression"||e.type==="mdxTextExpression")return _P(t,e);if(e.type==="mdxJsxFlowElement"||e.type==="mdxJsxTextElement")return yP(t,e,n);if(e.type==="mdxjsEsm")return vP(t,e);if(e.type==="root")return SP(t,e,n);if(e.type==="text")return EP(t,e)}function xP(t,e,n){const i=t.schema;let r=i;e.tagName.toLowerCase()==="svg"&&i.space==="html"&&(r=Yp,t.schema=r),t.ancestors.push(e);const s=tS(t,e.tagName,!1),o=TP(t,e);let a=Qp(t,e);return pP.has(e.tagName)&&(a=a.filter(function(l){return typeof l=="string"?!T2(l):!0})),eS(t,o,s,e),Jp(o,a),t.ancestors.pop(),t.schema=i,t.create(e,s,o,n)}function _P(t,e){if(e.data&&e.data.estree&&t.evaluater){const i=e.data.estree.body[0];return i.type,t.evaluater.evaluateExpression(i.expression)}Pa(t,e.position)}function vP(t,e){if(e.data&&e.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(e.data.estree);Pa(t,e.position)}function yP(t,e,n){const i=t.schema;let r=i;e.name==="svg"&&i.space==="html"&&(r=Yp,t.schema=r),t.ancestors.push(e);const s=e.name===null?t.Fragment:tS(t,e.name,!0),o=AP(t,e),a=Qp(t,e);return eS(t,o,s,e),Jp(o,a),t.ancestors.pop(),t.schema=i,t.create(e,s,o,n)}function SP(t,e,n){const i={};return Jp(i,Qp(t,e)),t.create(e,t.Fragment,i,n)}function EP(t,e){return e.value}function eS(t,e,n,i){typeof n!="string"&&n!==t.Fragment&&t.passNode&&(e.node=i)}function Jp(t,e){if(e.length>0){const n=e.length>1?e:e[0];n&&(t.children=n)}}function MP(t,e,n){return i;function i(r,s,o,a){const u=Array.isArray(o.children)?n:e;return a?u(s,o,a):u(s,o)}}function wP(t,e){return n;function n(i,r,s,o){const a=Array.isArray(s.children),l=Kp(i);return e(r,s,o,a,{columnNumber:l?l.column-1:void 0,fileName:t,lineNumber:l?l.line:void 0},void 0)}}function TP(t,e){const n={};let i,r;for(r in e.properties)if(r!=="children"&&Zp.call(e.properties,r)){const s=CP(t,r,e.properties[r]);if(s){const[o,a]=s;t.tableCellAlignToStyle&&o==="align"&&typeof a=="string"&&mP.has(e.tagName)?i=a:n[o]=a}}if(i){const s=n.style||(n.style={});s[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=i}return n}function AP(t,e){const n={};for(const i of e.attributes)if(i.type==="mdxJsxExpressionAttribute")if(i.data&&i.data.estree&&t.evaluater){const s=i.data.estree.body[0];s.type;const o=s.expression;o.type;const a=o.properties[0];a.type,Object.assign(n,t.evaluater.evaluateExpression(a.argument))}else Pa(t,e.position);else{const r=i.name;let s;if(i.value&&typeof i.value=="object")if(i.value.data&&i.value.data.estree&&t.evaluater){const a=i.value.data.estree.body[0];a.type,s=t.evaluater.evaluateExpression(a.expression)}else Pa(t,e.position);else s=i.value===null?!0:i.value;n[r]=s}return n}function Qp(t,e){const n=[];let i=-1;const r=t.passKeys?new Map:dP;for(;++i<e.children.length;){const s=e.children[i];let o;if(t.passKeys){const l=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(l){const u=r.get(l)||0;o=l+"-"+u,r.set(l,u+1)}}const a=Qy(t,s,o);a!==void 0&&n.push(a)}return n}function CP(t,e,n){const i=L2(t.schema,e);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=i.commaSeparated?y2(n):F2(n)),i.property==="style"){let r=typeof n=="object"?n:bP(t,String(n));return t.stylePropertyNameCase==="css"&&(r=RP(r)),["style",r]}return[t.elementAttributeNameCase==="react"&&i.space?R2[i.property]||i.property:i.attribute,n]}}function bP(t,e){try{return cP(e,{reactCompat:!0})}catch(n){if(t.ignoreInvalidStyle)return{};const i=n,r=new un("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:i,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw r.file=t.filePath||void 0,r.url=Jy+"#cannot-parse-style-attribute",r}}function tS(t,e,n){let i;if(!n)i={type:"Literal",value:e};else if(e.includes(".")){const r=e.split(".");let s=-1,o;for(;++s<r.length;){const a=L0(r[s])?{type:"Identifier",name:r[s]}:{type:"Literal",value:r[s]};o=o?{type:"MemberExpression",object:o,property:a,computed:!!(s&&a.type==="Literal"),optional:!1}:a}i=o}else i=L0(e)&&!/^[a-z]/.test(e)?{type:"Identifier",name:e}:{type:"Literal",value:e};if(i.type==="Literal"){const r=i.value;return Zp.call(t.components,r)?t.components[r]:r}if(t.evaluater)return t.evaluater.evaluateExpression(i);Pa(t)}function Pa(t,e){const n=new un("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:e,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=t.filePath||void 0,n.url=Jy+"#cannot-handle-mdx-estrees-without-createevaluater",n}function RP(t){const e={};let n;for(n in t)Zp.call(t,n)&&(e[PP(n)]=t[n]);return e}function PP(t){let e=t.replace(hP,IP);return e.slice(0,3)==="ms-"&&(e="-"+e),e}function IP(t){return"-"+t.toLowerCase()}const wf={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},LP={};function em(t,e){const n=LP,i=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,r=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return nS(t,i,r)}function nS(t,e,n){if(DP(t)){if("value"in t)return t.type==="html"&&!n?"":t.value;if(e&&"alt"in t&&t.alt)return t.alt;if("children"in t)return G0(t.children,e,n)}return Array.isArray(t)?G0(t,e,n):""}function G0(t,e,n){const i=[];let r=-1;for(;++r<t.length;)i[r]=nS(t[r],e,n);return i.join("")}function DP(t){return!!(t&&typeof t=="object")}const W0=document.createElement("i");function tm(t){const e="&"+t+";";W0.innerHTML=e;const n=W0.textContent;return n.charCodeAt(n.length-1)===59&&t!=="semi"||n===e?!1:n}function Dn(t,e,n,i){const r=t.length;let s=0,o;if(e<0?e=-e>r?0:r+e:e=e>r?r:e,n=n>0?n:0,i.length<1e4)o=Array.from(i),o.unshift(e,n),t.splice(...o);else for(n&&t.splice(e,n);s<i.length;)o=i.slice(s,s+1e4),o.unshift(e,0),t.splice(...o),s+=1e4,e+=1e4}function Vn(t,e){return t.length>0?(Dn(t,t.length,0,e),t):e}const j0={}.hasOwnProperty;function iS(t){const e={};let n=-1;for(;++n<t.length;)NP(e,t[n]);return e}function NP(t,e){let n;for(n in e){const r=(j0.call(t,n)?t[n]:void 0)||(t[n]={}),s=e[n];let o;if(s)for(o in s){j0.call(r,o)||(r[o]=[]);const a=s[o];kP(r[o],Array.isArray(a)?a:a?[a]:[])}}}function kP(t,e){let n=-1;const i=[];for(;++n<e.length;)(e[n].add==="after"?t:i).push(e[n]);Dn(t,0,0,i)}function rS(t,e){const n=Number.parseInt(t,e);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function ui(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const dn=Dr(/[A-Za-z]/),an=Dr(/[\dA-Za-z]/),FP=Dr(/[#-'*+\--9=?A-Z^-~]/);function ku(t){return t!==null&&(t<32||t===127)}const Ph=Dr(/\d/),UP=Dr(/[\dA-Fa-f]/),OP=Dr(/[!-/:-@[-`{-~]/);function Le(t){return t!==null&&t<-2}function pt(t){return t!==null&&(t<0||t===32)}function Xe(t){return t===-2||t===-1||t===32}const ac=Dr(new RegExp("\\p{P}|\\p{S}","u")),ls=Dr(/\s/);function Dr(t){return e;function e(n){return n!==null&&n>-1&&t.test(String.fromCharCode(n))}}function Mo(t){const e=[];let n=-1,i=0,r=0;for(;++n<t.length;){const s=t.charCodeAt(n);let o="";if(s===37&&an(t.charCodeAt(n+1))&&an(t.charCodeAt(n+2)))r=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(o=String.fromCharCode(s));else if(s>55295&&s<57344){const a=t.charCodeAt(n+1);s<56320&&a>56319&&a<57344?(o=String.fromCharCode(s,a),r=1):o="�"}else o=String.fromCharCode(s);o&&(e.push(t.slice(i,n),encodeURIComponent(o)),i=n+r+1,o=""),r&&(n+=r,r=0)}return e.join("")+t.slice(i)}function Ze(t,e,n,i){const r=i?i-1:Number.POSITIVE_INFINITY;let s=0;return o;function o(l){return Xe(l)?(t.enter(n),a(l)):e(l)}function a(l){return Xe(l)&&s++<r?(t.consume(l),a):(t.exit(n),e(l))}}const zP={tokenize:BP};function BP(t){const e=t.attempt(this.parser.constructs.contentInitial,i,r);let n;return e;function i(a){if(a===null){t.consume(a);return}return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),Ze(t,e,"linePrefix")}function r(a){return t.enter("paragraph"),s(a)}function s(a){const l=t.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,o(a)}function o(a){if(a===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(a);return}return Le(a)?(t.consume(a),t.exit("chunkText"),s):(t.consume(a),o)}}const HP={tokenize:VP},X0={tokenize:GP};function VP(t){const e=this,n=[];let i=0,r,s,o;return a;function a(_){if(i<n.length){const E=n[i];return e.containerState=E[1],t.attempt(E[0].continuation,l,u)(_)}return u(_)}function l(_){if(i++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,r&&g();const E=e.events.length;let C=E,M;for(;C--;)if(e.events[C][0]==="exit"&&e.events[C][1].type==="chunkFlow"){M=e.events[C][1].end;break}p(i);let b=E;for(;b<e.events.length;)e.events[b][1].end={...M},b++;return Dn(e.events,C+1,0,e.events.slice(E)),e.events.length=b,u(_)}return a(_)}function u(_){if(i===n.length){if(!r)return d(_);if(r.currentConstruct&&r.currentConstruct.concrete)return m(_);e.interrupt=!!(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return e.containerState={},t.check(X0,f,c)(_)}function f(_){return r&&g(),p(i),d(_)}function c(_){return e.parser.lazy[e.now().line]=i!==n.length,o=e.now().offset,m(_)}function d(_){return e.containerState={},t.attempt(X0,h,m)(_)}function h(_){return i++,n.push([e.currentConstruct,e.containerState]),d(_)}function m(_){if(_===null){r&&g(),p(0),t.consume(_);return}return r=r||e.parser.flow(e.now()),t.enter("chunkFlow",{_tokenizer:r,contentType:"flow",previous:s}),v(_)}function v(_){if(_===null){x(t.exit("chunkFlow"),!0),p(0),t.consume(_);return}return Le(_)?(t.consume(_),x(t.exit("chunkFlow")),i=0,e.interrupt=void 0,a):(t.consume(_),v)}function x(_,E){const C=e.sliceStream(_);if(E&&C.push(null),_.previous=s,s&&(s.next=_),s=_,r.defineSkip(_.start),r.write(C),e.parser.lazy[_.start.line]){let M=r.events.length;for(;M--;)if(r.events[M][1].start.offset<o&&(!r.events[M][1].end||r.events[M][1].end.offset>o))return;const b=e.events.length;let y=b,T,R;for(;y--;)if(e.events[y][0]==="exit"&&e.events[y][1].type==="chunkFlow"){if(T){R=e.events[y][1].end;break}T=!0}for(p(i),M=b;M<e.events.length;)e.events[M][1].end={...R},M++;Dn(e.events,y+1,0,e.events.slice(b)),e.events.length=M}}function p(_){let E=n.length;for(;E-- >_;){const C=n[E];e.containerState=C[1],C[0].exit.call(e,t)}n.length=_}function g(){r.write([null]),s=void 0,r=void 0,e.containerState._closeFlow=void 0}}function GP(t,e,n){return Ze(t,t.attempt(this.parser.constructs.document,e,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function po(t){if(t===null||pt(t)||ls(t))return 1;if(ac(t))return 2}function lc(t,e,n){const i=[];let r=-1;for(;++r<t.length;){const s=t[r].resolveAll;s&&!i.includes(s)&&(e=s(e,n),i.push(s))}return e}const Ih={name:"attention",resolveAll:WP,tokenize:jP};function WP(t,e){let n=-1,i,r,s,o,a,l,u,f;for(;++n<t.length;)if(t[n][0]==="enter"&&t[n][1].type==="attentionSequence"&&t[n][1]._close){for(i=n;i--;)if(t[i][0]==="exit"&&t[i][1].type==="attentionSequence"&&t[i][1]._open&&e.sliceSerialize(t[i][1]).charCodeAt(0)===e.sliceSerialize(t[n][1]).charCodeAt(0)){if((t[i][1]._close||t[n][1]._open)&&(t[n][1].end.offset-t[n][1].start.offset)%3&&!((t[i][1].end.offset-t[i][1].start.offset+t[n][1].end.offset-t[n][1].start.offset)%3))continue;l=t[i][1].end.offset-t[i][1].start.offset>1&&t[n][1].end.offset-t[n][1].start.offset>1?2:1;const c={...t[i][1].end},d={...t[n][1].start};q0(c,-l),q0(d,l),o={type:l>1?"strongSequence":"emphasisSequence",start:c,end:{...t[i][1].end}},a={type:l>1?"strongSequence":"emphasisSequence",start:{...t[n][1].start},end:d},s={type:l>1?"strongText":"emphasisText",start:{...t[i][1].end},end:{...t[n][1].start}},r={type:l>1?"strong":"emphasis",start:{...o.start},end:{...a.end}},t[i][1].end={...o.start},t[n][1].start={...a.end},u=[],t[i][1].end.offset-t[i][1].start.offset&&(u=Vn(u,[["enter",t[i][1],e],["exit",t[i][1],e]])),u=Vn(u,[["enter",r,e],["enter",o,e],["exit",o,e],["enter",s,e]]),u=Vn(u,lc(e.parser.constructs.insideSpan.null,t.slice(i+1,n),e)),u=Vn(u,[["exit",s,e],["enter",a,e],["exit",a,e],["exit",r,e]]),t[n][1].end.offset-t[n][1].start.offset?(f=2,u=Vn(u,[["enter",t[n][1],e],["exit",t[n][1],e]])):f=0,Dn(t,i-1,n-i+3,u),n=i+u.length-f-2;break}}for(n=-1;++n<t.length;)t[n][1].type==="attentionSequence"&&(t[n][1].type="data");return t}function jP(t,e){const n=this.parser.constructs.attentionMarkers.null,i=this.previous,r=po(i);let s;return o;function o(l){return s=l,t.enter("attentionSequence"),a(l)}function a(l){if(l===s)return t.consume(l),a;const u=t.exit("attentionSequence"),f=po(l),c=!f||f===2&&r||n.includes(l),d=!r||r===2&&f||n.includes(i);return u._open=!!(s===42?c:c&&(r||!d)),u._close=!!(s===42?d:d&&(f||!c)),e(l)}}function q0(t,e){t.column+=e,t.offset+=e,t._bufferIndex+=e}const XP={name:"autolink",tokenize:qP};function qP(t,e,n){let i=0;return r;function r(h){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),s}function s(h){return dn(h)?(t.consume(h),o):h===64?n(h):u(h)}function o(h){return h===43||h===45||h===46||an(h)?(i=1,a(h)):u(h)}function a(h){return h===58?(t.consume(h),i=0,l):(h===43||h===45||h===46||an(h))&&i++<32?(t.consume(h),a):(i=0,u(h))}function l(h){return h===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.exit("autolink"),e):h===null||h===32||h===60||ku(h)?n(h):(t.consume(h),l)}function u(h){return h===64?(t.consume(h),f):FP(h)?(t.consume(h),u):n(h)}function f(h){return an(h)?c(h):n(h)}function c(h){return h===46?(t.consume(h),i=0,f):h===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.exit("autolink"),e):d(h)}function d(h){if((h===45||an(h))&&i++<63){const m=h===45?d:c;return t.consume(h),m}return n(h)}}const Ga={partial:!0,tokenize:YP};function YP(t,e,n){return i;function i(s){return Xe(s)?Ze(t,r,"linePrefix")(s):r(s)}function r(s){return s===null||Le(s)?e(s):n(s)}}const sS={continuation:{tokenize:KP},exit:ZP,name:"blockQuote",tokenize:$P};function $P(t,e,n){const i=this;return r;function r(o){if(o===62){const a=i.containerState;return a.open||(t.enter("blockQuote",{_container:!0}),a.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(o),t.exit("blockQuoteMarker"),s}return n(o)}function s(o){return Xe(o)?(t.enter("blockQuotePrefixWhitespace"),t.consume(o),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),e):(t.exit("blockQuotePrefix"),e(o))}}function KP(t,e,n){const i=this;return r;function r(o){return Xe(o)?Ze(t,s,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):s(o)}function s(o){return t.attempt(sS,e,n)(o)}}function ZP(t){t.exit("blockQuote")}const oS={name:"characterEscape",tokenize:JP};function JP(t,e,n){return i;function i(s){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(s),t.exit("escapeMarker"),r}function r(s){return OP(s)?(t.enter("characterEscapeValue"),t.consume(s),t.exit("characterEscapeValue"),t.exit("characterEscape"),e):n(s)}}const aS={name:"characterReference",tokenize:QP};function QP(t,e,n){const i=this;let r=0,s,o;return a;function a(c){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(c),t.exit("characterReferenceMarker"),l}function l(c){return c===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(c),t.exit("characterReferenceMarkerNumeric"),u):(t.enter("characterReferenceValue"),s=31,o=an,f(c))}function u(c){return c===88||c===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(c),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),s=6,o=UP,f):(t.enter("characterReferenceValue"),s=7,o=Ph,f(c))}function f(c){if(c===59&&r){const d=t.exit("characterReferenceValue");return o===an&&!tm(i.sliceSerialize(d))?n(c):(t.enter("characterReferenceMarker"),t.consume(c),t.exit("characterReferenceMarker"),t.exit("characterReference"),e)}return o(c)&&r++<s?(t.consume(c),f):n(c)}}const Y0={partial:!0,tokenize:tI},$0={concrete:!0,name:"codeFenced",tokenize:eI};function eI(t,e,n){const i=this,r={partial:!0,tokenize:C};let s=0,o=0,a;return l;function l(M){return u(M)}function u(M){const b=i.events[i.events.length-1];return s=b&&b[1].type==="linePrefix"?b[2].sliceSerialize(b[1],!0).length:0,a=M,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),f(M)}function f(M){return M===a?(o++,t.consume(M),f):o<3?n(M):(t.exit("codeFencedFenceSequence"),Xe(M)?Ze(t,c,"whitespace")(M):c(M))}function c(M){return M===null||Le(M)?(t.exit("codeFencedFence"),i.interrupt?e(M):t.check(Y0,v,E)(M)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),d(M))}function d(M){return M===null||Le(M)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),c(M)):Xe(M)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),Ze(t,h,"whitespace")(M)):M===96&&M===a?n(M):(t.consume(M),d)}function h(M){return M===null||Le(M)?c(M):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),m(M))}function m(M){return M===null||Le(M)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),c(M)):M===96&&M===a?n(M):(t.consume(M),m)}function v(M){return t.attempt(r,E,x)(M)}function x(M){return t.enter("lineEnding"),t.consume(M),t.exit("lineEnding"),p}function p(M){return s>0&&Xe(M)?Ze(t,g,"linePrefix",s+1)(M):g(M)}function g(M){return M===null||Le(M)?t.check(Y0,v,E)(M):(t.enter("codeFlowValue"),_(M))}function _(M){return M===null||Le(M)?(t.exit("codeFlowValue"),g(M)):(t.consume(M),_)}function E(M){return t.exit("codeFenced"),e(M)}function C(M,b,y){let T=0;return R;function R(z){return M.enter("lineEnding"),M.consume(z),M.exit("lineEnding"),P}function P(z){return M.enter("codeFencedFence"),Xe(z)?Ze(M,F,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(z):F(z)}function F(z){return z===a?(M.enter("codeFencedFenceSequence"),V(z)):y(z)}function V(z){return z===a?(T++,M.consume(z),V):T>=o?(M.exit("codeFencedFenceSequence"),Xe(z)?Ze(M,Y,"whitespace")(z):Y(z)):y(z)}function Y(z){return z===null||Le(z)?(M.exit("codeFencedFence"),b(z)):y(z)}}}function tI(t,e,n){const i=this;return r;function r(o){return o===null?n(o):(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),s)}function s(o){return i.parser.lazy[i.now().line]?n(o):e(o)}}const Tf={name:"codeIndented",tokenize:iI},nI={partial:!0,tokenize:rI};function iI(t,e,n){const i=this;return r;function r(u){return t.enter("codeIndented"),Ze(t,s,"linePrefix",5)(u)}function s(u){const f=i.events[i.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?o(u):n(u)}function o(u){return u===null?l(u):Le(u)?t.attempt(nI,o,l)(u):(t.enter("codeFlowValue"),a(u))}function a(u){return u===null||Le(u)?(t.exit("codeFlowValue"),o(u)):(t.consume(u),a)}function l(u){return t.exit("codeIndented"),e(u)}}function rI(t,e,n){const i=this;return r;function r(o){return i.parser.lazy[i.now().line]?n(o):Le(o)?(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),r):Ze(t,s,"linePrefix",5)(o)}function s(o){const a=i.events[i.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(o):Le(o)?r(o):n(o)}}const sI={name:"codeText",previous:aI,resolve:oI,tokenize:lI};function oI(t){let e=t.length-4,n=3,i,r;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(i=n;++i<e;)if(t[i][1].type==="codeTextData"){t[n][1].type="codeTextPadding",t[e][1].type="codeTextPadding",n+=2,e-=2;break}}for(i=n-1,e++;++i<=e;)r===void 0?i!==e&&t[i][1].type!=="lineEnding"&&(r=i):(i===e||t[i][1].type==="lineEnding")&&(t[r][1].type="codeTextData",i!==r+2&&(t[r][1].end=t[i-1][1].end,t.splice(r+2,i-r-2),e-=i-r-2,i=r+2),r=void 0);return t}function aI(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function lI(t,e,n){let i=0,r,s;return o;function o(c){return t.enter("codeText"),t.enter("codeTextSequence"),a(c)}function a(c){return c===96?(t.consume(c),i++,a):(t.exit("codeTextSequence"),l(c))}function l(c){return c===null?n(c):c===32?(t.enter("space"),t.consume(c),t.exit("space"),l):c===96?(s=t.enter("codeTextSequence"),r=0,f(c)):Le(c)?(t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),l):(t.enter("codeTextData"),u(c))}function u(c){return c===null||c===32||c===96||Le(c)?(t.exit("codeTextData"),l(c)):(t.consume(c),u)}function f(c){return c===96?(t.consume(c),r++,f):r===i?(t.exit("codeTextSequence"),t.exit("codeText"),e(c)):(s.type="codeTextData",u(c))}}class uI{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,n){const i=n??Number.POSITIVE_INFINITY;return i<this.left.length?this.left.slice(e,i):e>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(e,n,i){const r=n||0;this.setCursor(Math.trunc(e));const s=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return i&&zo(this.left,i),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),zo(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),zo(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const n=this.left.splice(e,Number.POSITIVE_INFINITY);zo(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);zo(this.left,n.reverse())}}}function zo(t,e){let n=0;if(e.length<1e4)t.push(...e);else for(;n<e.length;)t.push(...e.slice(n,n+1e4)),n+=1e4}function lS(t){const e={};let n=-1,i,r,s,o,a,l,u;const f=new uI(t);for(;++n<f.length;){for(;n in e;)n=e[n];if(i=f.get(n),n&&i[1].type==="chunkFlow"&&f.get(n-1)[1].type==="listItemPrefix"&&(l=i[1]._tokenizer.events,s=0,s<l.length&&l[s][1].type==="lineEndingBlank"&&(s+=2),s<l.length&&l[s][1].type==="content"))for(;++s<l.length&&l[s][1].type!=="content";)l[s][1].type==="chunkText"&&(l[s][1]._isInFirstContentOfListItem=!0,s++);if(i[0]==="enter")i[1].contentType&&(Object.assign(e,cI(f,n)),n=e[n],u=!0);else if(i[1]._container){for(s=n,r=void 0;s--;)if(o=f.get(s),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(r&&(f.get(r)[1].type="lineEndingBlank"),o[1].type="lineEnding",r=s);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;r&&(i[1].end={...f.get(r)[1].start},a=f.slice(r,n),a.unshift(i),f.splice(r,n-r+1,a))}}return Dn(t,0,Number.POSITIVE_INFINITY,f.slice(0)),!u}function cI(t,e){const n=t.get(e)[1],i=t.get(e)[2];let r=e-1;const s=[];let o=n._tokenizer;o||(o=i.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const a=o.events,l=[],u={};let f,c,d=-1,h=n,m=0,v=0;const x=[v];for(;h;){for(;t.get(++r)[1]!==h;);s.push(r),h._tokenizer||(f=i.sliceStream(h),h.next||f.push(null),c&&o.defineSkip(h.start),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(f),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),c=h,h=h.next}for(h=n;++d<a.length;)a[d][0]==="exit"&&a[d-1][0]==="enter"&&a[d][1].type===a[d-1][1].type&&a[d][1].start.line!==a[d][1].end.line&&(v=d+1,x.push(v),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(o.events=[],h?(h._tokenizer=void 0,h.previous=void 0):x.pop(),d=x.length;d--;){const p=a.slice(x[d],x[d+1]),g=s.pop();l.push([g,g+p.length-1]),t.splice(g,2,p)}for(l.reverse(),d=-1;++d<l.length;)u[m+l[d][0]]=m+l[d][1],m+=l[d][1]-l[d][0]-1;return u}const fI={resolve:hI,tokenize:pI},dI={partial:!0,tokenize:mI};function hI(t){return lS(t),t}function pI(t,e){let n;return i;function i(a){return t.enter("content"),n=t.enter("chunkContent",{contentType:"content"}),r(a)}function r(a){return a===null?s(a):Le(a)?t.check(dI,o,s)(a):(t.consume(a),r)}function s(a){return t.exit("chunkContent"),t.exit("content"),e(a)}function o(a){return t.consume(a),t.exit("chunkContent"),n.next=t.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}}function mI(t,e,n){const i=this;return r;function r(o){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),Ze(t,s,"linePrefix")}function s(o){if(o===null||Le(o))return n(o);const a=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(o):t.interrupt(i.parser.constructs.flow,n,e)(o)}}function uS(t,e,n,i,r,s,o,a,l){const u=l||Number.POSITIVE_INFINITY;let f=0;return c;function c(p){return p===60?(t.enter(i),t.enter(r),t.enter(s),t.consume(p),t.exit(s),d):p===null||p===32||p===41||ku(p)?n(p):(t.enter(i),t.enter(o),t.enter(a),t.enter("chunkString",{contentType:"string"}),v(p))}function d(p){return p===62?(t.enter(s),t.consume(p),t.exit(s),t.exit(r),t.exit(i),e):(t.enter(a),t.enter("chunkString",{contentType:"string"}),h(p))}function h(p){return p===62?(t.exit("chunkString"),t.exit(a),d(p)):p===null||p===60||Le(p)?n(p):(t.consume(p),p===92?m:h)}function m(p){return p===60||p===62||p===92?(t.consume(p),h):h(p)}function v(p){return!f&&(p===null||p===41||pt(p))?(t.exit("chunkString"),t.exit(a),t.exit(o),t.exit(i),e(p)):f<u&&p===40?(t.consume(p),f++,v):p===41?(t.consume(p),f--,v):p===null||p===32||p===40||ku(p)?n(p):(t.consume(p),p===92?x:v)}function x(p){return p===40||p===41||p===92?(t.consume(p),v):v(p)}}function cS(t,e,n,i,r,s){const o=this;let a=0,l;return u;function u(h){return t.enter(i),t.enter(r),t.consume(h),t.exit(r),t.enter(s),f}function f(h){return a>999||h===null||h===91||h===93&&!l||h===94&&!a&&"_hiddenFootnoteSupport"in o.parser.constructs?n(h):h===93?(t.exit(s),t.enter(r),t.consume(h),t.exit(r),t.exit(i),e):Le(h)?(t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),f):(t.enter("chunkString",{contentType:"string"}),c(h))}function c(h){return h===null||h===91||h===93||Le(h)||a++>999?(t.exit("chunkString"),f(h)):(t.consume(h),l||(l=!Xe(h)),h===92?d:c)}function d(h){return h===91||h===92||h===93?(t.consume(h),a++,c):c(h)}}function fS(t,e,n,i,r,s){let o;return a;function a(d){return d===34||d===39||d===40?(t.enter(i),t.enter(r),t.consume(d),t.exit(r),o=d===40?41:d,l):n(d)}function l(d){return d===o?(t.enter(r),t.consume(d),t.exit(r),t.exit(i),e):(t.enter(s),u(d))}function u(d){return d===o?(t.exit(s),l(o)):d===null?n(d):Le(d)?(t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),Ze(t,u,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),f(d))}function f(d){return d===o||d===null||Le(d)?(t.exit("chunkString"),u(d)):(t.consume(d),d===92?c:f)}function c(d){return d===o||d===92?(t.consume(d),f):f(d)}}function sa(t,e){let n;return i;function i(r){return Le(r)?(t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),n=!0,i):Xe(r)?Ze(t,i,n?"linePrefix":"lineSuffix")(r):e(r)}}const gI={name:"definition",tokenize:_I},xI={partial:!0,tokenize:vI};function _I(t,e,n){const i=this;let r;return s;function s(h){return t.enter("definition"),o(h)}function o(h){return cS.call(i,t,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function a(h){return r=ui(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),h===58?(t.enter("definitionMarker"),t.consume(h),t.exit("definitionMarker"),l):n(h)}function l(h){return pt(h)?sa(t,u)(h):u(h)}function u(h){return uS(t,f,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function f(h){return t.attempt(xI,c,c)(h)}function c(h){return Xe(h)?Ze(t,d,"whitespace")(h):d(h)}function d(h){return h===null||Le(h)?(t.exit("definition"),i.parser.defined.push(r),e(h)):n(h)}}function vI(t,e,n){return i;function i(a){return pt(a)?sa(t,r)(a):n(a)}function r(a){return fS(t,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function s(a){return Xe(a)?Ze(t,o,"whitespace")(a):o(a)}function o(a){return a===null||Le(a)?e(a):n(a)}}const yI={name:"hardBreakEscape",tokenize:SI};function SI(t,e,n){return i;function i(s){return t.enter("hardBreakEscape"),t.consume(s),r}function r(s){return Le(s)?(t.exit("hardBreakEscape"),e(s)):n(s)}}const EI={name:"headingAtx",resolve:MI,tokenize:wI};function MI(t,e){let n=t.length-2,i=3,r,s;return t[i][1].type==="whitespace"&&(i+=2),n-2>i&&t[n][1].type==="whitespace"&&(n-=2),t[n][1].type==="atxHeadingSequence"&&(i===n-1||n-4>i&&t[n-2][1].type==="whitespace")&&(n-=i+1===n?2:4),n>i&&(r={type:"atxHeadingText",start:t[i][1].start,end:t[n][1].end},s={type:"chunkText",start:t[i][1].start,end:t[n][1].end,contentType:"text"},Dn(t,i,n-i+1,[["enter",r,e],["enter",s,e],["exit",s,e],["exit",r,e]])),t}function wI(t,e,n){let i=0;return r;function r(f){return t.enter("atxHeading"),s(f)}function s(f){return t.enter("atxHeadingSequence"),o(f)}function o(f){return f===35&&i++<6?(t.consume(f),o):f===null||pt(f)?(t.exit("atxHeadingSequence"),a(f)):n(f)}function a(f){return f===35?(t.enter("atxHeadingSequence"),l(f)):f===null||Le(f)?(t.exit("atxHeading"),e(f)):Xe(f)?Ze(t,a,"whitespace")(f):(t.enter("atxHeadingText"),u(f))}function l(f){return f===35?(t.consume(f),l):(t.exit("atxHeadingSequence"),a(f))}function u(f){return f===null||f===35||pt(f)?(t.exit("atxHeadingText"),a(f)):(t.consume(f),u)}}const TI=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],K0=["pre","script","style","textarea"],AI={concrete:!0,name:"htmlFlow",resolveTo:RI,tokenize:PI},CI={partial:!0,tokenize:LI},bI={partial:!0,tokenize:II};function RI(t){let e=t.length;for(;e--&&!(t[e][0]==="enter"&&t[e][1].type==="htmlFlow"););return e>1&&t[e-2][1].type==="linePrefix"&&(t[e][1].start=t[e-2][1].start,t[e+1][1].start=t[e-2][1].start,t.splice(e-2,2)),t}function PI(t,e,n){const i=this;let r,s,o,a,l;return u;function u(L){return f(L)}function f(L){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(L),c}function c(L){return L===33?(t.consume(L),d):L===47?(t.consume(L),s=!0,v):L===63?(t.consume(L),r=3,i.interrupt?e:A):dn(L)?(t.consume(L),o=String.fromCharCode(L),x):n(L)}function d(L){return L===45?(t.consume(L),r=2,h):L===91?(t.consume(L),r=5,a=0,m):dn(L)?(t.consume(L),r=4,i.interrupt?e:A):n(L)}function h(L){return L===45?(t.consume(L),i.interrupt?e:A):n(L)}function m(L){const Fe="CDATA[";return L===Fe.charCodeAt(a++)?(t.consume(L),a===Fe.length?i.interrupt?e:F:m):n(L)}function v(L){return dn(L)?(t.consume(L),o=String.fromCharCode(L),x):n(L)}function x(L){if(L===null||L===47||L===62||pt(L)){const Fe=L===47,Ge=o.toLowerCase();return!Fe&&!s&&K0.includes(Ge)?(r=1,i.interrupt?e(L):F(L)):TI.includes(o.toLowerCase())?(r=6,Fe?(t.consume(L),p):i.interrupt?e(L):F(L)):(r=7,i.interrupt&&!i.parser.lazy[i.now().line]?n(L):s?g(L):_(L))}return L===45||an(L)?(t.consume(L),o+=String.fromCharCode(L),x):n(L)}function p(L){return L===62?(t.consume(L),i.interrupt?e:F):n(L)}function g(L){return Xe(L)?(t.consume(L),g):R(L)}function _(L){return L===47?(t.consume(L),R):L===58||L===95||dn(L)?(t.consume(L),E):Xe(L)?(t.consume(L),_):R(L)}function E(L){return L===45||L===46||L===58||L===95||an(L)?(t.consume(L),E):C(L)}function C(L){return L===61?(t.consume(L),M):Xe(L)?(t.consume(L),C):_(L)}function M(L){return L===null||L===60||L===61||L===62||L===96?n(L):L===34||L===39?(t.consume(L),l=L,b):Xe(L)?(t.consume(L),M):y(L)}function b(L){return L===l?(t.consume(L),l=null,T):L===null||Le(L)?n(L):(t.consume(L),b)}function y(L){return L===null||L===34||L===39||L===47||L===60||L===61||L===62||L===96||pt(L)?C(L):(t.consume(L),y)}function T(L){return L===47||L===62||Xe(L)?_(L):n(L)}function R(L){return L===62?(t.consume(L),P):n(L)}function P(L){return L===null||Le(L)?F(L):Xe(L)?(t.consume(L),P):n(L)}function F(L){return L===45&&r===2?(t.consume(L),X):L===60&&r===1?(t.consume(L),H):L===62&&r===4?(t.consume(L),re):L===63&&r===3?(t.consume(L),A):L===93&&r===5?(t.consume(L),Z):Le(L)&&(r===6||r===7)?(t.exit("htmlFlowData"),t.check(CI,se,V)(L)):L===null||Le(L)?(t.exit("htmlFlowData"),V(L)):(t.consume(L),F)}function V(L){return t.check(bI,Y,se)(L)}function Y(L){return t.enter("lineEnding"),t.consume(L),t.exit("lineEnding"),z}function z(L){return L===null||Le(L)?V(L):(t.enter("htmlFlowData"),F(L))}function X(L){return L===45?(t.consume(L),A):F(L)}function H(L){return L===47?(t.consume(L),o="",j):F(L)}function j(L){if(L===62){const Fe=o.toLowerCase();return K0.includes(Fe)?(t.consume(L),re):F(L)}return dn(L)&&o.length<8?(t.consume(L),o+=String.fromCharCode(L),j):F(L)}function Z(L){return L===93?(t.consume(L),A):F(L)}function A(L){return L===62?(t.consume(L),re):L===45&&r===2?(t.consume(L),A):F(L)}function re(L){return L===null||Le(L)?(t.exit("htmlFlowData"),se(L)):(t.consume(L),re)}function se(L){return t.exit("htmlFlow"),e(L)}}function II(t,e,n){const i=this;return r;function r(o){return Le(o)?(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),s):n(o)}function s(o){return i.parser.lazy[i.now().line]?n(o):e(o)}}function LI(t,e,n){return i;function i(r){return t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),t.attempt(Ga,e,n)}}const DI={name:"htmlText",tokenize:NI};function NI(t,e,n){const i=this;let r,s,o;return a;function a(A){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(A),l}function l(A){return A===33?(t.consume(A),u):A===47?(t.consume(A),C):A===63?(t.consume(A),_):dn(A)?(t.consume(A),y):n(A)}function u(A){return A===45?(t.consume(A),f):A===91?(t.consume(A),s=0,m):dn(A)?(t.consume(A),g):n(A)}function f(A){return A===45?(t.consume(A),h):n(A)}function c(A){return A===null?n(A):A===45?(t.consume(A),d):Le(A)?(o=c,H(A)):(t.consume(A),c)}function d(A){return A===45?(t.consume(A),h):c(A)}function h(A){return A===62?X(A):A===45?d(A):c(A)}function m(A){const re="CDATA[";return A===re.charCodeAt(s++)?(t.consume(A),s===re.length?v:m):n(A)}function v(A){return A===null?n(A):A===93?(t.consume(A),x):Le(A)?(o=v,H(A)):(t.consume(A),v)}function x(A){return A===93?(t.consume(A),p):v(A)}function p(A){return A===62?X(A):A===93?(t.consume(A),p):v(A)}function g(A){return A===null||A===62?X(A):Le(A)?(o=g,H(A)):(t.consume(A),g)}function _(A){return A===null?n(A):A===63?(t.consume(A),E):Le(A)?(o=_,H(A)):(t.consume(A),_)}function E(A){return A===62?X(A):_(A)}function C(A){return dn(A)?(t.consume(A),M):n(A)}function M(A){return A===45||an(A)?(t.consume(A),M):b(A)}function b(A){return Le(A)?(o=b,H(A)):Xe(A)?(t.consume(A),b):X(A)}function y(A){return A===45||an(A)?(t.consume(A),y):A===47||A===62||pt(A)?T(A):n(A)}function T(A){return A===47?(t.consume(A),X):A===58||A===95||dn(A)?(t.consume(A),R):Le(A)?(o=T,H(A)):Xe(A)?(t.consume(A),T):X(A)}function R(A){return A===45||A===46||A===58||A===95||an(A)?(t.consume(A),R):P(A)}function P(A){return A===61?(t.consume(A),F):Le(A)?(o=P,H(A)):Xe(A)?(t.consume(A),P):T(A)}function F(A){return A===null||A===60||A===61||A===62||A===96?n(A):A===34||A===39?(t.consume(A),r=A,V):Le(A)?(o=F,H(A)):Xe(A)?(t.consume(A),F):(t.consume(A),Y)}function V(A){return A===r?(t.consume(A),r=void 0,z):A===null?n(A):Le(A)?(o=V,H(A)):(t.consume(A),V)}function Y(A){return A===null||A===34||A===39||A===60||A===61||A===96?n(A):A===47||A===62||pt(A)?T(A):(t.consume(A),Y)}function z(A){return A===47||A===62||pt(A)?T(A):n(A)}function X(A){return A===62?(t.consume(A),t.exit("htmlTextData"),t.exit("htmlText"),e):n(A)}function H(A){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(A),t.exit("lineEnding"),j}function j(A){return Xe(A)?Ze(t,Z,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(A):Z(A)}function Z(A){return t.enter("htmlTextData"),o(A)}}const nm={name:"labelEnd",resolveAll:OI,resolveTo:zI,tokenize:BI},kI={tokenize:HI},FI={tokenize:VI},UI={tokenize:GI};function OI(t){let e=-1;const n=[];for(;++e<t.length;){const i=t[e][1];if(n.push(t[e]),i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd"){const r=i.type==="labelImage"?4:2;i.type="data",e+=r}}return t.length!==n.length&&Dn(t,0,t.length,n),t}function zI(t,e){let n=t.length,i=0,r,s,o,a;for(;n--;)if(r=t[n][1],s){if(r.type==="link"||r.type==="labelLink"&&r._inactive)break;t[n][0]==="enter"&&r.type==="labelLink"&&(r._inactive=!0)}else if(o){if(t[n][0]==="enter"&&(r.type==="labelImage"||r.type==="labelLink")&&!r._balanced&&(s=n,r.type!=="labelLink")){i=2;break}}else r.type==="labelEnd"&&(o=n);const l={type:t[s][1].type==="labelLink"?"link":"image",start:{...t[s][1].start},end:{...t[t.length-1][1].end}},u={type:"label",start:{...t[s][1].start},end:{...t[o][1].end}},f={type:"labelText",start:{...t[s+i+2][1].end},end:{...t[o-2][1].start}};return a=[["enter",l,e],["enter",u,e]],a=Vn(a,t.slice(s+1,s+i+3)),a=Vn(a,[["enter",f,e]]),a=Vn(a,lc(e.parser.constructs.insideSpan.null,t.slice(s+i+4,o-3),e)),a=Vn(a,[["exit",f,e],t[o-2],t[o-1],["exit",u,e]]),a=Vn(a,t.slice(o+1)),a=Vn(a,[["exit",l,e]]),Dn(t,s,t.length,a),t}function BI(t,e,n){const i=this;let r=i.events.length,s,o;for(;r--;)if((i.events[r][1].type==="labelImage"||i.events[r][1].type==="labelLink")&&!i.events[r][1]._balanced){s=i.events[r][1];break}return a;function a(d){return s?s._inactive?c(d):(o=i.parser.defined.includes(ui(i.sliceSerialize({start:s.end,end:i.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(d),t.exit("labelMarker"),t.exit("labelEnd"),l):n(d)}function l(d){return d===40?t.attempt(kI,f,o?f:c)(d):d===91?t.attempt(FI,f,o?u:c)(d):o?f(d):c(d)}function u(d){return t.attempt(UI,f,c)(d)}function f(d){return e(d)}function c(d){return s._balanced=!0,n(d)}}function HI(t,e,n){return i;function i(c){return t.enter("resource"),t.enter("resourceMarker"),t.consume(c),t.exit("resourceMarker"),r}function r(c){return pt(c)?sa(t,s)(c):s(c)}function s(c){return c===41?f(c):uS(t,o,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function o(c){return pt(c)?sa(t,l)(c):f(c)}function a(c){return n(c)}function l(c){return c===34||c===39||c===40?fS(t,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):f(c)}function u(c){return pt(c)?sa(t,f)(c):f(c)}function f(c){return c===41?(t.enter("resourceMarker"),t.consume(c),t.exit("resourceMarker"),t.exit("resource"),e):n(c)}}function VI(t,e,n){const i=this;return r;function r(a){return cS.call(i,t,s,o,"reference","referenceMarker","referenceString")(a)}function s(a){return i.parser.defined.includes(ui(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?e(a):n(a)}function o(a){return n(a)}}function GI(t,e,n){return i;function i(s){return t.enter("reference"),t.enter("referenceMarker"),t.consume(s),t.exit("referenceMarker"),r}function r(s){return s===93?(t.enter("referenceMarker"),t.consume(s),t.exit("referenceMarker"),t.exit("reference"),e):n(s)}}const WI={name:"labelStartImage",resolveAll:nm.resolveAll,tokenize:jI};function jI(t,e,n){const i=this;return r;function r(a){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(a),t.exit("labelImageMarker"),s}function s(a){return a===91?(t.enter("labelMarker"),t.consume(a),t.exit("labelMarker"),t.exit("labelImage"),o):n(a)}function o(a){return a===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(a):e(a)}}const XI={name:"labelStartLink",resolveAll:nm.resolveAll,tokenize:qI};function qI(t,e,n){const i=this;return r;function r(o){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(o),t.exit("labelMarker"),t.exit("labelLink"),s}function s(o){return o===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(o):e(o)}}const Af={name:"lineEnding",tokenize:YI};function YI(t,e){return n;function n(i){return t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),Ze(t,e,"linePrefix")}}const iu={name:"thematicBreak",tokenize:$I};function $I(t,e,n){let i=0,r;return s;function s(u){return t.enter("thematicBreak"),o(u)}function o(u){return r=u,a(u)}function a(u){return u===r?(t.enter("thematicBreakSequence"),l(u)):i>=3&&(u===null||Le(u))?(t.exit("thematicBreak"),e(u)):n(u)}function l(u){return u===r?(t.consume(u),i++,l):(t.exit("thematicBreakSequence"),Xe(u)?Ze(t,a,"whitespace")(u):a(u))}}const _n={continuation:{tokenize:QI},exit:t3,name:"list",tokenize:JI},KI={partial:!0,tokenize:n3},ZI={partial:!0,tokenize:e3};function JI(t,e,n){const i=this,r=i.events[i.events.length-1];let s=r&&r[1].type==="linePrefix"?r[2].sliceSerialize(r[1],!0).length:0,o=0;return a;function a(h){const m=i.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!i.containerState.marker||h===i.containerState.marker:Ph(h)){if(i.containerState.type||(i.containerState.type=m,t.enter(m,{_container:!0})),m==="listUnordered")return t.enter("listItemPrefix"),h===42||h===45?t.check(iu,n,u)(h):u(h);if(!i.interrupt||h===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),l(h)}return n(h)}function l(h){return Ph(h)&&++o<10?(t.consume(h),l):(!i.interrupt||o<2)&&(i.containerState.marker?h===i.containerState.marker:h===41||h===46)?(t.exit("listItemValue"),u(h)):n(h)}function u(h){return t.enter("listItemMarker"),t.consume(h),t.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||h,t.check(Ga,i.interrupt?n:f,t.attempt(KI,d,c))}function f(h){return i.containerState.initialBlankLine=!0,s++,d(h)}function c(h){return Xe(h)?(t.enter("listItemPrefixWhitespace"),t.consume(h),t.exit("listItemPrefixWhitespace"),d):n(h)}function d(h){return i.containerState.size=s+i.sliceSerialize(t.exit("listItemPrefix"),!0).length,e(h)}}function QI(t,e,n){const i=this;return i.containerState._closeFlow=void 0,t.check(Ga,r,s);function r(a){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,Ze(t,e,"listItemIndent",i.containerState.size+1)(a)}function s(a){return i.containerState.furtherBlankLines||!Xe(a)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,o(a)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,t.attempt(ZI,e,o)(a))}function o(a){return i.containerState._closeFlow=!0,i.interrupt=void 0,Ze(t,t.attempt(_n,e,n),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function e3(t,e,n){const i=this;return Ze(t,r,"listItemIndent",i.containerState.size+1);function r(s){const o=i.events[i.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===i.containerState.size?e(s):n(s)}}function t3(t){t.exit(this.containerState.type)}function n3(t,e,n){const i=this;return Ze(t,r,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function r(s){const o=i.events[i.events.length-1];return!Xe(s)&&o&&o[1].type==="listItemPrefixWhitespace"?e(s):n(s)}}const Z0={name:"setextUnderline",resolveTo:i3,tokenize:r3};function i3(t,e){let n=t.length,i,r,s;for(;n--;)if(t[n][0]==="enter"){if(t[n][1].type==="content"){i=n;break}t[n][1].type==="paragraph"&&(r=n)}else t[n][1].type==="content"&&t.splice(n,1),!s&&t[n][1].type==="definition"&&(s=n);const o={type:"setextHeading",start:{...t[i][1].start},end:{...t[t.length-1][1].end}};return t[r][1].type="setextHeadingText",s?(t.splice(r,0,["enter",o,e]),t.splice(s+1,0,["exit",t[i][1],e]),t[i][1].end={...t[s][1].end}):t[i][1]=o,t.push(["exit",o,e]),t}function r3(t,e,n){const i=this;let r;return s;function s(u){let f=i.events.length,c;for(;f--;)if(i.events[f][1].type!=="lineEnding"&&i.events[f][1].type!=="linePrefix"&&i.events[f][1].type!=="content"){c=i.events[f][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||c)?(t.enter("setextHeadingLine"),r=u,o(u)):n(u)}function o(u){return t.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===r?(t.consume(u),a):(t.exit("setextHeadingLineSequence"),Xe(u)?Ze(t,l,"lineSuffix")(u):l(u))}function l(u){return u===null||Le(u)?(t.exit("setextHeadingLine"),e(u)):n(u)}}const s3={tokenize:o3};function o3(t){const e=this,n=t.attempt(Ga,i,t.attempt(this.parser.constructs.flowInitial,r,Ze(t,t.attempt(this.parser.constructs.flow,r,t.attempt(fI,r)),"linePrefix")));return n;function i(s){if(s===null){t.consume(s);return}return t.enter("lineEndingBlank"),t.consume(s),t.exit("lineEndingBlank"),e.currentConstruct=void 0,n}function r(s){if(s===null){t.consume(s);return}return t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),e.currentConstruct=void 0,n}}const a3={resolveAll:hS()},l3=dS("string"),u3=dS("text");function dS(t){return{resolveAll:hS(t==="text"?c3:void 0),tokenize:e};function e(n){const i=this,r=this.parser.constructs[t],s=n.attempt(r,o,a);return o;function o(f){return u(f)?s(f):a(f)}function a(f){if(f===null){n.consume(f);return}return n.enter("data"),n.consume(f),l}function l(f){return u(f)?(n.exit("data"),s(f)):(n.consume(f),l)}function u(f){if(f===null)return!0;const c=r[f];let d=-1;if(c)for(;++d<c.length;){const h=c[d];if(!h.previous||h.previous.call(i,i.previous))return!0}return!1}}}function hS(t){return e;function e(n,i){let r=-1,s;for(;++r<=n.length;)s===void 0?n[r]&&n[r][1].type==="data"&&(s=r,r++):(!n[r]||n[r][1].type!=="data")&&(r!==s+2&&(n[s][1].end=n[r-1][1].end,n.splice(s+2,r-s-2),r=s+2),s=void 0);return t?t(n,i):n}}function c3(t,e){let n=0;for(;++n<=t.length;)if((n===t.length||t[n][1].type==="lineEnding")&&t[n-1][1].type==="data"){const i=t[n-1][1],r=e.sliceStream(i);let s=r.length,o=-1,a=0,l;for(;s--;){const u=r[s];if(typeof u=="string"){for(o=u.length;u.charCodeAt(o-1)===32;)a++,o--;if(o)break;o=-1}else if(u===-2)l=!0,a++;else if(u!==-1){s++;break}}if(e._contentTypeTextTrailing&&n===t.length&&(a=0),a){const u={type:n===t.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?o:i.start._bufferIndex+o,_index:i.start._index+s,line:i.end.line,column:i.end.column-a,offset:i.end.offset-a},end:{...i.end}};i.end={...u.start},i.start.offset===i.end.offset?Object.assign(i,u):(t.splice(n,0,["enter",u,e],["exit",u,e]),n+=2)}n++}return t}const f3={42:_n,43:_n,45:_n,48:_n,49:_n,50:_n,51:_n,52:_n,53:_n,54:_n,55:_n,56:_n,57:_n,62:sS},d3={91:gI},h3={[-2]:Tf,[-1]:Tf,32:Tf},p3={35:EI,42:iu,45:[Z0,iu],60:AI,61:Z0,95:iu,96:$0,126:$0},m3={38:aS,92:oS},g3={[-5]:Af,[-4]:Af,[-3]:Af,33:WI,38:aS,42:Ih,60:[XP,DI],91:XI,92:[yI,oS],93:nm,95:Ih,96:sI},x3={null:[Ih,a3]},_3={null:[42,95]},v3={null:[]},y3=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:_3,contentInitial:d3,disable:v3,document:f3,flow:p3,flowInitial:h3,insideSpan:x3,string:m3,text:g3},Symbol.toStringTag,{value:"Module"}));function S3(t,e,n){let i={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const r={},s=[];let o=[],a=[];const l={attempt:b(C),check:b(M),consume:g,enter:_,exit:E,interrupt:b(M,{interrupt:!0})},u={code:null,containerState:{},defineSkip:v,events:[],now:m,parser:t,previous:null,sliceSerialize:d,sliceStream:h,write:c};let f=e.tokenize.call(u,l);return e.resolveAll&&s.push(e),u;function c(P){return o=Vn(o,P),x(),o[o.length-1]!==null?[]:(y(e,0),u.events=lc(s,u.events,u),u.events)}function d(P,F){return M3(h(P),F)}function h(P){return E3(o,P)}function m(){const{_bufferIndex:P,_index:F,line:V,column:Y,offset:z}=i;return{_bufferIndex:P,_index:F,line:V,column:Y,offset:z}}function v(P){r[P.line]=P.column,R()}function x(){let P;for(;i._index<o.length;){const F=o[i._index];if(typeof F=="string")for(P=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===P&&i._bufferIndex<F.length;)p(F.charCodeAt(i._bufferIndex));else p(F)}}function p(P){f=f(P)}function g(P){Le(P)?(i.line++,i.column=1,i.offset+=P===-3?2:1,R()):P!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===o[i._index].length&&(i._bufferIndex=-1,i._index++)),u.previous=P}function _(P,F){const V=F||{};return V.type=P,V.start=m(),u.events.push(["enter",V,u]),a.push(V),V}function E(P){const F=a.pop();return F.end=m(),u.events.push(["exit",F,u]),F}function C(P,F){y(P,F.from)}function M(P,F){F.restore()}function b(P,F){return V;function V(Y,z,X){let H,j,Z,A;return Array.isArray(Y)?se(Y):"tokenize"in Y?se([Y]):re(Y);function re(J){return ne;function ne(ae){const ke=ae!==null&&J[ae],Re=ae!==null&&J.null,De=[...Array.isArray(ke)?ke:ke?[ke]:[],...Array.isArray(Re)?Re:Re?[Re]:[]];return se(De)(ae)}}function se(J){return H=J,j=0,J.length===0?X:L(J[j])}function L(J){return ne;function ne(ae){return A=T(),Z=J,J.partial||(u.currentConstruct=J),J.name&&u.parser.constructs.disable.null.includes(J.name)?Ge():J.tokenize.call(F?Object.assign(Object.create(u),F):u,l,Fe,Ge)(ae)}}function Fe(J){return P(Z,A),z}function Ge(J){return A.restore(),++j<H.length?L(H[j]):X}}}function y(P,F){P.resolveAll&&!s.includes(P)&&s.push(P),P.resolve&&Dn(u.events,F,u.events.length-F,P.resolve(u.events.slice(F),u)),P.resolveTo&&(u.events=P.resolveTo(u.events,u))}function T(){const P=m(),F=u.previous,V=u.currentConstruct,Y=u.events.length,z=Array.from(a);return{from:Y,restore:X};function X(){i=P,u.previous=F,u.currentConstruct=V,u.events.length=Y,a=z,R()}}function R(){i.line in r&&i.column<2&&(i.column=r[i.line],i.offset+=r[i.line]-1)}}function E3(t,e){const n=e.start._index,i=e.start._bufferIndex,r=e.end._index,s=e.end._bufferIndex;let o;if(n===r)o=[t[n].slice(i,s)];else{if(o=t.slice(n,r),i>-1){const a=o[0];typeof a=="string"?o[0]=a.slice(i):o.shift()}s>0&&o.push(t[r].slice(0,s))}return o}function M3(t,e){let n=-1;const i=[];let r;for(;++n<t.length;){const s=t[n];let o;if(typeof s=="string")o=s;else switch(s){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=e?" ":"	";break}case-1:{if(!e&&r)continue;o=" ";break}default:o=String.fromCharCode(s)}r=s===-2,i.push(o)}return i.join("")}function w3(t){const i={constructs:iS([y3,...(t||{}).extensions||[]]),content:r(zP),defined:[],document:r(HP),flow:r(s3),lazy:{},string:r(l3),text:r(u3)};return i;function r(s){return o;function o(a){return S3(i,s,a)}}}function T3(t){for(;!lS(t););return t}const J0=/[\0\t\n\r]/g;function A3(){let t=1,e="",n=!0,i;return r;function r(s,o,a){const l=[];let u,f,c,d,h;for(s=e+(typeof s=="string"?s.toString():new TextDecoder(o||void 0).decode(s)),c=0,e="",n&&(s.charCodeAt(0)===65279&&c++,n=void 0);c<s.length;){if(J0.lastIndex=c,u=J0.exec(s),d=u&&u.index!==void 0?u.index:s.length,h=s.charCodeAt(d),!u){e=s.slice(c);break}if(h===10&&c===d&&i)l.push(-3),i=void 0;else switch(i&&(l.push(-5),i=void 0),c<d&&(l.push(s.slice(c,d)),t+=d-c),h){case 0:{l.push(65533),t++;break}case 9:{for(f=Math.ceil(t/4)*4,l.push(-2);t++<f;)l.push(-1);break}case 10:{l.push(-4),t=1;break}default:i=!0,t=1}c=d+1}return a&&(i&&l.push(-5),e&&l.push(e),l.push(null)),l}}const C3=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function b3(t){return t.replace(C3,R3)}function R3(t,e,n){if(e)return e;if(n.charCodeAt(0)===35){const r=n.charCodeAt(1),s=r===120||r===88;return rS(n.slice(s?2:1),s?16:10)}return tm(n)||t}const pS={}.hasOwnProperty;function P3(t,e,n){return e&&typeof e=="object"&&(n=e,e=void 0),I3(n)(T3(w3(n).document().write(A3()(t,e,!0))))}function I3(t){const e={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(Et),autolinkProtocol:T,autolinkEmail:T,atxHeading:s(st),blockQuote:s(Re),characterEscape:T,characterReference:T,codeFenced:s(De),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:s(De,o),codeText:s(Lt,o),codeTextData:T,data:T,codeFlowValue:T,definition:s(Ye),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:s(it),hardBreakEscape:s(ze),hardBreakTrailing:s(ze),htmlFlow:s(yt,o),htmlFlowData:T,htmlText:s(yt,o),htmlTextData:T,image:s(k),label:o,link:s(Et),listItem:s(ut),listItemValue:d,listOrdered:s(Je,c),listUnordered:s(Je),paragraph:s(we),reference:L,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:s(st),strong:s(I),thematicBreak:s(B)},exit:{atxHeading:l(),atxHeadingSequence:C,autolink:l(),autolinkEmail:ke,autolinkProtocol:ae,blockQuote:l(),characterEscapeValue:R,characterReferenceMarkerHexadecimal:Ge,characterReferenceMarkerNumeric:Ge,characterReferenceValue:J,characterReference:ne,codeFenced:l(x),codeFencedFence:v,codeFencedFenceInfo:h,codeFencedFenceMeta:m,codeFlowValue:R,codeIndented:l(p),codeText:l(z),codeTextData:R,data:R,definition:l(),definitionDestinationString:E,definitionLabelString:g,definitionTitleString:_,emphasis:l(),hardBreakEscape:l(F),hardBreakTrailing:l(F),htmlFlow:l(V),htmlFlowData:R,htmlText:l(Y),htmlTextData:R,image:l(H),label:Z,labelText:j,lineEnding:P,link:l(X),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:Fe,resourceDestinationString:A,resourceTitleString:re,resource:se,setextHeading:l(y),setextHeadingLineSequence:b,setextHeadingText:M,strong:l(),thematicBreak:l()}};mS(e,(t||{}).mdastExtensions||[]);const n={};return i;function i(N){let O={type:"root",children:[]};const W={stack:[O],tokenStack:[],config:e,enter:a,exit:u,buffer:o,resume:f,data:n},oe=[];let te=-1;for(;++te<N.length;)if(N[te][1].type==="listOrdered"||N[te][1].type==="listUnordered")if(N[te][0]==="enter")oe.push(te);else{const ye=oe.pop();te=r(N,ye,te)}for(te=-1;++te<N.length;){const ye=e[N[te][0]];pS.call(ye,N[te][1].type)&&ye[N[te][1].type].call(Object.assign({sliceSerialize:N[te][2].sliceSerialize},W),N[te][1])}if(W.tokenStack.length>0){const ye=W.tokenStack[W.tokenStack.length-1];(ye[1]||Q0).call(W,void 0,ye[0])}for(O.position={start:lr(N.length>0?N[0][1].start:{line:1,column:1,offset:0}),end:lr(N.length>0?N[N.length-2][1].end:{line:1,column:1,offset:0})},te=-1;++te<e.transforms.length;)O=e.transforms[te](O)||O;return O}function r(N,O,W){let oe=O-1,te=-1,ye=!1,Pe,ie,ue,ve;for(;++oe<=W;){const ge=N[oe];switch(ge[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ge[0]==="enter"?te++:te--,ve=void 0;break}case"lineEndingBlank":{ge[0]==="enter"&&(Pe&&!ve&&!te&&!ue&&(ue=oe),ve=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:ve=void 0}if(!te&&ge[0]==="enter"&&ge[1].type==="listItemPrefix"||te===-1&&ge[0]==="exit"&&(ge[1].type==="listUnordered"||ge[1].type==="listOrdered")){if(Pe){let pe=oe;for(ie=void 0;pe--;){const Ne=N[pe];if(Ne[1].type==="lineEnding"||Ne[1].type==="lineEndingBlank"){if(Ne[0]==="exit")continue;ie&&(N[ie][1].type="lineEndingBlank",ye=!0),Ne[1].type="lineEnding",ie=pe}else if(!(Ne[1].type==="linePrefix"||Ne[1].type==="blockQuotePrefix"||Ne[1].type==="blockQuotePrefixWhitespace"||Ne[1].type==="blockQuoteMarker"||Ne[1].type==="listItemIndent"))break}ue&&(!ie||ue<ie)&&(Pe._spread=!0),Pe.end=Object.assign({},ie?N[ie][1].start:ge[1].end),N.splice(ie||oe,0,["exit",Pe,ge[2]]),oe++,W++}if(ge[1].type==="listItemPrefix"){const pe={type:"listItem",_spread:!1,start:Object.assign({},ge[1].start),end:void 0};Pe=pe,N.splice(oe,0,["enter",pe,ge[2]]),oe++,W++,ue=void 0,ve=!0}}}return N[O][1]._spread=ye,W}function s(N,O){return W;function W(oe){a.call(this,N(oe),oe),O&&O.call(this,oe)}}function o(){this.stack.push({type:"fragment",children:[]})}function a(N,O,W){this.stack[this.stack.length-1].children.push(N),this.stack.push(N),this.tokenStack.push([O,W||void 0]),N.position={start:lr(O.start),end:void 0}}function l(N){return O;function O(W){N&&N.call(this,W),u.call(this,W)}}function u(N,O){const W=this.stack.pop(),oe=this.tokenStack.pop();if(oe)oe[0].type!==N.type&&(O?O.call(this,N,oe[0]):(oe[1]||Q0).call(this,N,oe[0]));else throw new Error("Cannot close `"+N.type+"` ("+ra({start:N.start,end:N.end})+"): it’s not open");W.position.end=lr(N.end)}function f(){return em(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function d(N){if(this.data.expectingFirstListItemValue){const O=this.stack[this.stack.length-2];O.start=Number.parseInt(this.sliceSerialize(N),10),this.data.expectingFirstListItemValue=void 0}}function h(){const N=this.resume(),O=this.stack[this.stack.length-1];O.lang=N}function m(){const N=this.resume(),O=this.stack[this.stack.length-1];O.meta=N}function v(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function x(){const N=this.resume(),O=this.stack[this.stack.length-1];O.value=N.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function p(){const N=this.resume(),O=this.stack[this.stack.length-1];O.value=N.replace(/(\r?\n|\r)$/g,"")}function g(N){const O=this.resume(),W=this.stack[this.stack.length-1];W.label=O,W.identifier=ui(this.sliceSerialize(N)).toLowerCase()}function _(){const N=this.resume(),O=this.stack[this.stack.length-1];O.title=N}function E(){const N=this.resume(),O=this.stack[this.stack.length-1];O.url=N}function C(N){const O=this.stack[this.stack.length-1];if(!O.depth){const W=this.sliceSerialize(N).length;O.depth=W}}function M(){this.data.setextHeadingSlurpLineEnding=!0}function b(N){const O=this.stack[this.stack.length-1];O.depth=this.sliceSerialize(N).codePointAt(0)===61?1:2}function y(){this.data.setextHeadingSlurpLineEnding=void 0}function T(N){const W=this.stack[this.stack.length-1].children;let oe=W[W.length-1];(!oe||oe.type!=="text")&&(oe=S(),oe.position={start:lr(N.start),end:void 0},W.push(oe)),this.stack.push(oe)}function R(N){const O=this.stack.pop();O.value+=this.sliceSerialize(N),O.position.end=lr(N.end)}function P(N){const O=this.stack[this.stack.length-1];if(this.data.atHardBreak){const W=O.children[O.children.length-1];W.position.end=lr(N.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(O.type)&&(T.call(this,N),R.call(this,N))}function F(){this.data.atHardBreak=!0}function V(){const N=this.resume(),O=this.stack[this.stack.length-1];O.value=N}function Y(){const N=this.resume(),O=this.stack[this.stack.length-1];O.value=N}function z(){const N=this.resume(),O=this.stack[this.stack.length-1];O.value=N}function X(){const N=this.stack[this.stack.length-1];if(this.data.inReference){const O=this.data.referenceType||"shortcut";N.type+="Reference",N.referenceType=O,delete N.url,delete N.title}else delete N.identifier,delete N.label;this.data.referenceType=void 0}function H(){const N=this.stack[this.stack.length-1];if(this.data.inReference){const O=this.data.referenceType||"shortcut";N.type+="Reference",N.referenceType=O,delete N.url,delete N.title}else delete N.identifier,delete N.label;this.data.referenceType=void 0}function j(N){const O=this.sliceSerialize(N),W=this.stack[this.stack.length-2];W.label=b3(O),W.identifier=ui(O).toLowerCase()}function Z(){const N=this.stack[this.stack.length-1],O=this.resume(),W=this.stack[this.stack.length-1];if(this.data.inReference=!0,W.type==="link"){const oe=N.children;W.children=oe}else W.alt=O}function A(){const N=this.resume(),O=this.stack[this.stack.length-1];O.url=N}function re(){const N=this.resume(),O=this.stack[this.stack.length-1];O.title=N}function se(){this.data.inReference=void 0}function L(){this.data.referenceType="collapsed"}function Fe(N){const O=this.resume(),W=this.stack[this.stack.length-1];W.label=O,W.identifier=ui(this.sliceSerialize(N)).toLowerCase(),this.data.referenceType="full"}function Ge(N){this.data.characterReferenceType=N.type}function J(N){const O=this.sliceSerialize(N),W=this.data.characterReferenceType;let oe;W?(oe=rS(O,W==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):oe=tm(O);const te=this.stack[this.stack.length-1];te.value+=oe}function ne(N){const O=this.stack.pop();O.position.end=lr(N.end)}function ae(N){R.call(this,N);const O=this.stack[this.stack.length-1];O.url=this.sliceSerialize(N)}function ke(N){R.call(this,N);const O=this.stack[this.stack.length-1];O.url="mailto:"+this.sliceSerialize(N)}function Re(){return{type:"blockquote",children:[]}}function De(){return{type:"code",lang:null,meta:null,value:""}}function Lt(){return{type:"inlineCode",value:""}}function Ye(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function it(){return{type:"emphasis",children:[]}}function st(){return{type:"heading",depth:0,children:[]}}function ze(){return{type:"break"}}function yt(){return{type:"html",value:""}}function k(){return{type:"image",title:null,url:"",alt:null}}function Et(){return{type:"link",title:null,url:"",children:[]}}function Je(N){return{type:"list",ordered:N.type==="listOrdered",start:null,spread:N._spread,children:[]}}function ut(N){return{type:"listItem",spread:N._spread,checked:null,children:[]}}function we(){return{type:"paragraph",children:[]}}function I(){return{type:"strong",children:[]}}function S(){return{type:"text",value:""}}function B(){return{type:"thematicBreak"}}}function lr(t){return{line:t.line,column:t.column,offset:t.offset}}function mS(t,e){let n=-1;for(;++n<e.length;){const i=e[n];Array.isArray(i)?mS(t,i):L3(t,i)}}function L3(t,e){let n;for(n in e)if(pS.call(e,n))switch(n){case"canContainEols":{const i=e[n];i&&t[n].push(...i);break}case"transforms":{const i=e[n];i&&t[n].push(...i);break}case"enter":case"exit":{const i=e[n];i&&Object.assign(t[n],i);break}}}function Q0(t,e){throw t?new Error("Cannot close `"+t.type+"` ("+ra({start:t.start,end:t.end})+"): a different token (`"+e.type+"`, "+ra({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+ra({start:e.start,end:e.end})+") is still open")}function D3(t){const e=this;e.parser=n;function n(i){return P3(i,{...e.data("settings"),...t,extensions:e.data("micromarkExtensions")||[],mdastExtensions:e.data("fromMarkdownExtensions")||[]})}}function N3(t,e){const n={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(e),!0)};return t.patch(e,n),t.applyData(e,n)}function k3(t,e){const n={type:"element",tagName:"br",properties:{},children:[]};return t.patch(e,n),[t.applyData(e,n),{type:"text",value:`
`}]}function F3(t,e){const n=e.value?e.value+`
`:"",i={},r=e.lang?e.lang.split(/\s+/):[];r.length>0&&(i.className=["language-"+r[0]]);let s={type:"element",tagName:"code",properties:i,children:[{type:"text",value:n}]};return e.meta&&(s.data={meta:e.meta}),t.patch(e,s),s=t.applyData(e,s),s={type:"element",tagName:"pre",properties:{},children:[s]},t.patch(e,s),s}function U3(t,e){const n={type:"element",tagName:"del",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function O3(t,e){const n={type:"element",tagName:"em",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function z3(t,e){const n=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",i=String(e.identifier).toUpperCase(),r=Mo(i.toLowerCase()),s=t.footnoteOrder.indexOf(i);let o,a=t.footnoteCounts.get(i);a===void 0?(a=0,t.footnoteOrder.push(i),o=t.footnoteOrder.length):o=s+1,a+=1,t.footnoteCounts.set(i,a);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+r,id:n+"fnref-"+r+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};t.patch(e,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return t.patch(e,u),t.applyData(e,u)}function B3(t,e){const n={type:"element",tagName:"h"+e.depth,properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function H3(t,e){if(t.options.allowDangerousHtml){const n={type:"raw",value:e.value};return t.patch(e,n),t.applyData(e,n)}}function gS(t,e){const n=e.referenceType;let i="]";if(n==="collapsed"?i+="[]":n==="full"&&(i+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return[{type:"text",value:"!["+e.alt+i}];const r=t.all(e),s=r[0];s&&s.type==="text"?s.value="["+s.value:r.unshift({type:"text",value:"["});const o=r[r.length-1];return o&&o.type==="text"?o.value+=i:r.push({type:"text",value:i}),r}function V3(t,e){const n=String(e.identifier).toUpperCase(),i=t.definitionById.get(n);if(!i)return gS(t,e);const r={src:Mo(i.url||""),alt:e.alt};i.title!==null&&i.title!==void 0&&(r.title=i.title);const s={type:"element",tagName:"img",properties:r,children:[]};return t.patch(e,s),t.applyData(e,s)}function G3(t,e){const n={src:Mo(e.url)};e.alt!==null&&e.alt!==void 0&&(n.alt=e.alt),e.title!==null&&e.title!==void 0&&(n.title=e.title);const i={type:"element",tagName:"img",properties:n,children:[]};return t.patch(e,i),t.applyData(e,i)}function W3(t,e){const n={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};t.patch(e,n);const i={type:"element",tagName:"code",properties:{},children:[n]};return t.patch(e,i),t.applyData(e,i)}function j3(t,e){const n=String(e.identifier).toUpperCase(),i=t.definitionById.get(n);if(!i)return gS(t,e);const r={href:Mo(i.url||"")};i.title!==null&&i.title!==void 0&&(r.title=i.title);const s={type:"element",tagName:"a",properties:r,children:t.all(e)};return t.patch(e,s),t.applyData(e,s)}function X3(t,e){const n={href:Mo(e.url)};e.title!==null&&e.title!==void 0&&(n.title=e.title);const i={type:"element",tagName:"a",properties:n,children:t.all(e)};return t.patch(e,i),t.applyData(e,i)}function q3(t,e,n){const i=t.all(e),r=n?Y3(n):xS(e),s={},o=[];if(typeof e.checked=="boolean"){const f=i[0];let c;f&&f.type==="element"&&f.tagName==="p"?c=f:(c={type:"element",tagName:"p",properties:{},children:[]},i.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let a=-1;for(;++a<i.length;){const f=i[a];(r||a!==0||f.type!=="element"||f.tagName!=="p")&&o.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!r?o.push(...f.children):o.push(f)}const l=i[i.length-1];l&&(r||l.type!=="element"||l.tagName!=="p")&&o.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:s,children:o};return t.patch(e,u),t.applyData(e,u)}function Y3(t){let e=!1;if(t.type==="list"){e=t.spread||!1;const n=t.children;let i=-1;for(;!e&&++i<n.length;)e=xS(n[i])}return e}function xS(t){const e=t.spread;return e??t.children.length>1}function $3(t,e){const n={},i=t.all(e);let r=-1;for(typeof e.start=="number"&&e.start!==1&&(n.start=e.start);++r<i.length;){const o=i[r];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:e.ordered?"ol":"ul",properties:n,children:t.wrap(i,!0)};return t.patch(e,s),t.applyData(e,s)}function K3(t,e){const n={type:"element",tagName:"p",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function Z3(t,e){const n={type:"root",children:t.wrap(t.all(e))};return t.patch(e,n),t.applyData(e,n)}function J3(t,e){const n={type:"element",tagName:"strong",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function Q3(t,e){const n=t.all(e),i=n.shift(),r=[];if(i){const o={type:"element",tagName:"thead",properties:{},children:t.wrap([i],!0)};t.patch(e.children[0],o),r.push(o)}if(n.length>0){const o={type:"element",tagName:"tbody",properties:{},children:t.wrap(n,!0)},a=Kp(e.children[1]),l=Ky(e.children[e.children.length-1]);a&&l&&(o.position={start:a,end:l}),r.push(o)}const s={type:"element",tagName:"table",properties:{},children:t.wrap(r,!0)};return t.patch(e,s),t.applyData(e,s)}function eL(t,e,n){const i=n?n.children:void 0,s=(i?i.indexOf(e):1)===0?"th":"td",o=n&&n.type==="table"?n.align:void 0,a=o?o.length:e.children.length;let l=-1;const u=[];for(;++l<a;){const c=e.children[l],d={},h=o?o[l]:void 0;h&&(d.align=h);let m={type:"element",tagName:s,properties:d,children:[]};c&&(m.children=t.all(c),t.patch(c,m),m=t.applyData(c,m)),u.push(m)}const f={type:"element",tagName:"tr",properties:{},children:t.wrap(u,!0)};return t.patch(e,f),t.applyData(e,f)}function tL(t,e){const n={type:"element",tagName:"td",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}const ex=9,tx=32;function nL(t){const e=String(t),n=/\r?\n|\r/g;let i=n.exec(e),r=0;const s=[];for(;i;)s.push(nx(e.slice(r,i.index),r>0,!0),i[0]),r=i.index+i[0].length,i=n.exec(e);return s.push(nx(e.slice(r),r>0,!1)),s.join("")}function nx(t,e,n){let i=0,r=t.length;if(e){let s=t.codePointAt(i);for(;s===ex||s===tx;)i++,s=t.codePointAt(i)}if(n){let s=t.codePointAt(r-1);for(;s===ex||s===tx;)r--,s=t.codePointAt(r-1)}return r>i?t.slice(i,r):""}function iL(t,e){const n={type:"text",value:nL(String(e.value))};return t.patch(e,n),t.applyData(e,n)}function rL(t,e){const n={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(e,n),t.applyData(e,n)}const sL={blockquote:N3,break:k3,code:F3,delete:U3,emphasis:O3,footnoteReference:z3,heading:B3,html:H3,imageReference:V3,image:G3,inlineCode:W3,linkReference:j3,link:X3,listItem:q3,list:$3,paragraph:K3,root:Z3,strong:J3,table:Q3,tableCell:tL,tableRow:eL,text:iL,thematicBreak:rL,toml:kl,yaml:kl,definition:kl,footnoteDefinition:kl};function kl(){}const _S=-1,uc=0,oa=1,Fu=2,im=3,rm=4,sm=5,om=6,vS=7,yS=8,ix=typeof self=="object"?self:globalThis,oL=(t,e)=>{const n=(r,s)=>(t.set(s,r),r),i=r=>{if(t.has(r))return t.get(r);const[s,o]=e[r];switch(s){case uc:case _S:return n(o,r);case oa:{const a=n([],r);for(const l of o)a.push(i(l));return a}case Fu:{const a=n({},r);for(const[l,u]of o)a[i(l)]=i(u);return a}case im:return n(new Date(o),r);case rm:{const{source:a,flags:l}=o;return n(new RegExp(a,l),r)}case sm:{const a=n(new Map,r);for(const[l,u]of o)a.set(i(l),i(u));return a}case om:{const a=n(new Set,r);for(const l of o)a.add(i(l));return a}case vS:{const{name:a,message:l}=o;return n(new ix[a](l),r)}case yS:return n(BigInt(o),r);case"BigInt":return n(Object(BigInt(o)),r);case"ArrayBuffer":return n(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:a}=new Uint8Array(o);return n(new DataView(a),o)}}return n(new ix[s](o),r)};return i},rx=t=>oL(new Map,t)(0),Is="",{toString:aL}={},{keys:lL}=Object,Bo=t=>{const e=typeof t;if(e!=="object"||!t)return[uc,e];const n=aL.call(t).slice(8,-1);switch(n){case"Array":return[oa,Is];case"Object":return[Fu,Is];case"Date":return[im,Is];case"RegExp":return[rm,Is];case"Map":return[sm,Is];case"Set":return[om,Is];case"DataView":return[oa,n]}return n.includes("Array")?[oa,n]:n.includes("Error")?[vS,n]:[Fu,n]},Fl=([t,e])=>t===uc&&(e==="function"||e==="symbol"),uL=(t,e,n,i)=>{const r=(o,a)=>{const l=i.push(o)-1;return n.set(a,l),l},s=o=>{if(n.has(o))return n.get(o);let[a,l]=Bo(o);switch(a){case uc:{let f=o;switch(l){case"bigint":a=yS,f=o.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+l);f=null;break;case"undefined":return r([_S],o)}return r([a,f],o)}case oa:{if(l){let d=o;return l==="DataView"?d=new Uint8Array(o.buffer):l==="ArrayBuffer"&&(d=new Uint8Array(o)),r([l,[...d]],o)}const f=[],c=r([a,f],o);for(const d of o)f.push(s(d));return c}case Fu:{if(l)switch(l){case"BigInt":return r([l,o.toString()],o);case"Boolean":case"Number":case"String":return r([l,o.valueOf()],o)}if(e&&"toJSON"in o)return s(o.toJSON());const f=[],c=r([a,f],o);for(const d of lL(o))(t||!Fl(Bo(o[d])))&&f.push([s(d),s(o[d])]);return c}case im:return r([a,o.toISOString()],o);case rm:{const{source:f,flags:c}=o;return r([a,{source:f,flags:c}],o)}case sm:{const f=[],c=r([a,f],o);for(const[d,h]of o)(t||!(Fl(Bo(d))||Fl(Bo(h))))&&f.push([s(d),s(h)]);return c}case om:{const f=[],c=r([a,f],o);for(const d of o)(t||!Fl(Bo(d)))&&f.push(s(d));return c}}const{message:u}=o;return r([a,{name:l,message:u}],o)};return s},sx=(t,{json:e,lossy:n}={})=>{const i=[];return uL(!(e||n),!!e,new Map,i)(t),i},Uu=typeof structuredClone=="function"?(t,e)=>e&&("json"in e||"lossy"in e)?rx(sx(t,e)):structuredClone(t):(t,e)=>rx(sx(t,e));function cL(t,e){const n=[{type:"text",value:"↩"}];return e>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(e)}]}),n}function fL(t,e){return"Back to reference "+(t+1)+(e>1?"-"+e:"")}function dL(t){const e=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",n=t.options.footnoteBackContent||cL,i=t.options.footnoteBackLabel||fL,r=t.options.footnoteLabel||"Footnotes",s=t.options.footnoteLabelTagName||"h2",o=t.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let l=-1;for(;++l<t.footnoteOrder.length;){const u=t.footnoteById.get(t.footnoteOrder[l]);if(!u)continue;const f=t.all(u),c=String(u.identifier).toUpperCase(),d=Mo(c.toLowerCase());let h=0;const m=[],v=t.footnoteCounts.get(c);for(;v!==void 0&&++h<=v;){m.length>0&&m.push({type:"text",value:" "});let g=typeof n=="string"?n:n(l,h);typeof g=="string"&&(g={type:"text",value:g}),m.push({type:"element",tagName:"a",properties:{href:"#"+e+"fnref-"+d+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof i=="string"?i:i(l,h),className:["data-footnote-backref"]},children:Array.isArray(g)?g:[g]})}const x=f[f.length-1];if(x&&x.type==="element"&&x.tagName==="p"){const g=x.children[x.children.length-1];g&&g.type==="text"?g.value+=" ":x.children.push({type:"text",value:" "}),x.children.push(...m)}else f.push(...m);const p={type:"element",tagName:"li",properties:{id:e+"fn-"+d},children:t.wrap(f,!0)};t.patch(u,p),a.push(p)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Uu(o),id:"footnote-label"},children:[{type:"text",value:r}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(a,!0)},{type:"text",value:`
`}]}}const cc=function(t){if(t==null)return gL;if(typeof t=="function")return fc(t);if(typeof t=="object")return Array.isArray(t)?hL(t):pL(t);if(typeof t=="string")return mL(t);throw new Error("Expected function, string, or object as test")};function hL(t){const e=[];let n=-1;for(;++n<t.length;)e[n]=cc(t[n]);return fc(i);function i(...r){let s=-1;for(;++s<e.length;)if(e[s].apply(this,r))return!0;return!1}}function pL(t){const e=t;return fc(n);function n(i){const r=i;let s;for(s in t)if(r[s]!==e[s])return!1;return!0}}function mL(t){return fc(e);function e(n){return n&&n.type===t}}function fc(t){return e;function e(n,i,r){return!!(xL(n)&&t.call(this,n,typeof i=="number"?i:void 0,r||void 0))}}function gL(){return!0}function xL(t){return t!==null&&typeof t=="object"&&"type"in t}const SS=[],_L=!0,Lh=!1,vL="skip";function ES(t,e,n,i){let r;typeof e=="function"&&typeof n!="function"?(i=n,n=e):r=e;const s=cc(r),o=i?-1:1;a(t,void 0,[])();function a(l,u,f){const c=l&&typeof l=="object"?l:{};if(typeof c.type=="string"){const h=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(d,"name",{value:"node ("+(l.type+(h?"<"+h+">":""))+")"})}return d;function d(){let h=SS,m,v,x;if((!e||s(l,u,f[f.length-1]||void 0))&&(h=yL(n(l,f)),h[0]===Lh))return h;if("children"in l&&l.children){const p=l;if(p.children&&h[0]!==vL)for(v=(i?p.children.length:-1)+o,x=f.concat(p);v>-1&&v<p.children.length;){const g=p.children[v];if(m=a(g,v,x)(),m[0]===Lh)return m;v=typeof m[1]=="number"?m[1]:v+o}}return h}}}function yL(t){return Array.isArray(t)?t:typeof t=="number"?[_L,t]:t==null?SS:[t]}function am(t,e,n,i){let r,s,o;typeof e=="function"&&typeof n!="function"?(s=void 0,o=e,r=n):(s=e,o=n,r=i),ES(t,s,a,r);function a(l,u){const f=u[u.length-1],c=f?f.children.indexOf(l):void 0;return o(l,c,f)}}const Dh={}.hasOwnProperty,SL={};function EL(t,e){const n=e||SL,i=new Map,r=new Map,s=new Map,o={...sL,...n.handlers},a={all:u,applyData:wL,definitionById:i,footnoteById:r,footnoteCounts:s,footnoteOrder:[],handlers:o,one:l,options:n,patch:ML,wrap:AL};return am(t,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const c=f.type==="definition"?i:r,d=String(f.identifier).toUpperCase();c.has(d)||c.set(d,f)}}),a;function l(f,c){const d=f.type,h=a.handlers[d];if(Dh.call(a.handlers,d)&&h)return h(a,f,c);if(a.options.passThrough&&a.options.passThrough.includes(d)){if("children"in f){const{children:v,...x}=f,p=Uu(x);return p.children=a.all(f),p}return Uu(f)}return(a.options.unknownHandler||TL)(a,f,c)}function u(f){const c=[];if("children"in f){const d=f.children;let h=-1;for(;++h<d.length;){const m=a.one(d[h],f);if(m){if(h&&d[h-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=ox(m.value)),!Array.isArray(m)&&m.type==="element")){const v=m.children[0];v&&v.type==="text"&&(v.value=ox(v.value))}Array.isArray(m)?c.push(...m):c.push(m)}}}return c}}function ML(t,e){t.position&&(e.position=fP(t))}function wL(t,e){let n=e;if(t&&t.data){const i=t.data.hName,r=t.data.hChildren,s=t.data.hProperties;if(typeof i=="string")if(n.type==="element")n.tagName=i;else{const o="children"in n?n.children:[n];n={type:"element",tagName:i,properties:{},children:o}}n.type==="element"&&s&&Object.assign(n.properties,Uu(s)),"children"in n&&n.children&&r!==null&&r!==void 0&&(n.children=r)}return n}function TL(t,e){const n=e.data||{},i="value"in e&&!(Dh.call(n,"hProperties")||Dh.call(n,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:t.all(e)};return t.patch(e,i),t.applyData(e,i)}function AL(t,e){const n=[];let i=-1;for(e&&n.push({type:"text",value:`
`});++i<t.length;)i&&n.push({type:"text",value:`
`}),n.push(t[i]);return e&&t.length>0&&n.push({type:"text",value:`
`}),n}function ox(t){let e=0,n=t.charCodeAt(e);for(;n===9||n===32;)e++,n=t.charCodeAt(e);return t.slice(e)}function ax(t,e){const n=EL(t,e),i=n.one(t,void 0),r=dL(n),s=Array.isArray(i)?{type:"root",children:i}:i||{type:"root",children:[]};return r&&s.children.push({type:"text",value:`
`},r),s}function CL(t,e){return t&&"run"in t?async function(n,i){const r=ax(n,{file:i,...e});await t.run(r,i)}:function(n,i){return ax(n,{file:i,...t||e})}}function lx(t){if(t)throw t}var ru=Object.prototype.hasOwnProperty,MS=Object.prototype.toString,ux=Object.defineProperty,cx=Object.getOwnPropertyDescriptor,fx=function(e){return typeof Array.isArray=="function"?Array.isArray(e):MS.call(e)==="[object Array]"},dx=function(e){if(!e||MS.call(e)!=="[object Object]")return!1;var n=ru.call(e,"constructor"),i=e.constructor&&e.constructor.prototype&&ru.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!n&&!i)return!1;var r;for(r in e);return typeof r>"u"||ru.call(e,r)},hx=function(e,n){ux&&n.name==="__proto__"?ux(e,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):e[n.name]=n.newValue},px=function(e,n){if(n==="__proto__")if(ru.call(e,n)){if(cx)return cx(e,n).value}else return;return e[n]},bL=function t(){var e,n,i,r,s,o,a=arguments[0],l=1,u=arguments.length,f=!1;for(typeof a=="boolean"&&(f=a,a=arguments[1]||{},l=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});l<u;++l)if(e=arguments[l],e!=null)for(n in e)i=px(a,n),r=px(e,n),a!==r&&(f&&r&&(dx(r)||(s=fx(r)))?(s?(s=!1,o=i&&fx(i)?i:[]):o=i&&dx(i)?i:{},hx(a,{name:n,newValue:t(f,o,r)})):typeof r<"u"&&hx(a,{name:n,newValue:r}));return a};const Cf=Uh(bL);function Nh(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function RL(){const t=[],e={run:n,use:i};return e;function n(...r){let s=-1;const o=r.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);a(null,...r);function a(l,...u){const f=t[++s];let c=-1;if(l){o(l);return}for(;++c<r.length;)(u[c]===null||u[c]===void 0)&&(u[c]=r[c]);r=u,f?PL(f,a)(...u):o(null,...u)}}function i(r){if(typeof r!="function")throw new TypeError("Expected `middelware` to be a function, not "+r);return t.push(r),e}}function PL(t,e){let n;return i;function i(...o){const a=t.length>o.length;let l;a&&o.push(r);try{l=t.apply(this,o)}catch(u){const f=u;if(a&&n)throw f;return r(f)}a||(l&&l.then&&typeof l.then=="function"?l.then(s,r):l instanceof Error?r(l):s(l))}function r(o,...a){n||(n=!0,e(o,...a))}function s(o){r(null,o)}}const xi={basename:IL,dirname:LL,extname:DL,join:NL,sep:"/"};function IL(t,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');Wa(t);let n=0,i=-1,r=t.length,s;if(e===void 0||e.length===0||e.length>t.length){for(;r--;)if(t.codePointAt(r)===47){if(s){n=r+1;break}}else i<0&&(s=!0,i=r+1);return i<0?"":t.slice(n,i)}if(e===t)return"";let o=-1,a=e.length-1;for(;r--;)if(t.codePointAt(r)===47){if(s){n=r+1;break}}else o<0&&(s=!0,o=r+1),a>-1&&(t.codePointAt(r)===e.codePointAt(a--)?a<0&&(i=r):(a=-1,i=o));return n===i?i=o:i<0&&(i=t.length),t.slice(n,i)}function LL(t){if(Wa(t),t.length===0)return".";let e=-1,n=t.length,i;for(;--n;)if(t.codePointAt(n)===47){if(i){e=n;break}}else i||(i=!0);return e<0?t.codePointAt(0)===47?"/":".":e===1&&t.codePointAt(0)===47?"//":t.slice(0,e)}function DL(t){Wa(t);let e=t.length,n=-1,i=0,r=-1,s=0,o;for(;e--;){const a=t.codePointAt(e);if(a===47){if(o){i=e+1;break}continue}n<0&&(o=!0,n=e+1),a===46?r<0?r=e:s!==1&&(s=1):r>-1&&(s=-1)}return r<0||n<0||s===0||s===1&&r===n-1&&r===i+1?"":t.slice(r,n)}function NL(...t){let e=-1,n;for(;++e<t.length;)Wa(t[e]),t[e]&&(n=n===void 0?t[e]:n+"/"+t[e]);return n===void 0?".":kL(n)}function kL(t){Wa(t);const e=t.codePointAt(0)===47;let n=FL(t,!e);return n.length===0&&!e&&(n="."),n.length>0&&t.codePointAt(t.length-1)===47&&(n+="/"),e?"/"+n:n}function FL(t,e){let n="",i=0,r=-1,s=0,o=-1,a,l;for(;++o<=t.length;){if(o<t.length)a=t.codePointAt(o);else{if(a===47)break;a=47}if(a===47){if(!(r===o-1||s===1))if(r!==o-1&&s===2){if(n.length<2||i!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",i=0):(n=n.slice(0,l),i=n.length-1-n.lastIndexOf("/")),r=o,s=0;continue}}else if(n.length>0){n="",i=0,r=o,s=0;continue}}e&&(n=n.length>0?n+"/..":"..",i=2)}else n.length>0?n+="/"+t.slice(r+1,o):n=t.slice(r+1,o),i=o-r-1;r=o,s=0}else a===46&&s>-1?s++:s=-1}return n}function Wa(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const UL={cwd:OL};function OL(){return"/"}function kh(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function zL(t){if(typeof t=="string")t=new URL(t);else if(!kh(t)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(t.protocol!=="file:"){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return BL(t)}function BL(t){if(t.hostname!==""){const i=new TypeError('File URL host must be "localhost" or empty on darwin');throw i.code="ERR_INVALID_FILE_URL_HOST",i}const e=t.pathname;let n=-1;for(;++n<e.length;)if(e.codePointAt(n)===37&&e.codePointAt(n+1)===50){const i=e.codePointAt(n+2);if(i===70||i===102){const r=new TypeError("File URL path must not include encoded / characters");throw r.code="ERR_INVALID_FILE_URL_PATH",r}}return decodeURIComponent(e)}const bf=["history","path","basename","stem","extname","dirname"];class wS{constructor(e){let n;e?kh(e)?n={path:e}:typeof e=="string"||HL(e)?n={value:e}:n=e:n={},this.cwd="cwd"in n?"":UL.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let i=-1;for(;++i<bf.length;){const s=bf[i];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let r;for(r in n)bf.includes(r)||(this[r]=n[r])}get basename(){return typeof this.path=="string"?xi.basename(this.path):void 0}set basename(e){Pf(e,"basename"),Rf(e,"basename"),this.path=xi.join(this.dirname||"",e)}get dirname(){return typeof this.path=="string"?xi.dirname(this.path):void 0}set dirname(e){mx(this.basename,"dirname"),this.path=xi.join(e||"",this.basename)}get extname(){return typeof this.path=="string"?xi.extname(this.path):void 0}set extname(e){if(Rf(e,"extname"),mx(this.dirname,"extname"),e){if(e.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=xi.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){kh(e)&&(e=zL(e)),Pf(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path=="string"?xi.basename(this.path,this.extname):void 0}set stem(e){Pf(e,"stem"),Rf(e,"stem"),this.path=xi.join(this.dirname||"",e+(this.extname||""))}fail(e,n,i){const r=this.message(e,n,i);throw r.fatal=!0,r}info(e,n,i){const r=this.message(e,n,i);return r.fatal=void 0,r}message(e,n,i){const r=new un(e,n,i);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(e||void 0).decode(this.value)}}function Rf(t,e){if(t&&t.includes(xi.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+xi.sep+"`")}function Pf(t,e){if(!t)throw new Error("`"+e+"` cannot be empty")}function mx(t,e){if(!t)throw new Error("Setting `"+e+"` requires `path` to be set too")}function HL(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const VL=function(t){const i=this.constructor.prototype,r=i[t],s=function(){return r.apply(s,arguments)};return Object.setPrototypeOf(s,i),s},GL={}.hasOwnProperty;class lm extends VL{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=RL()}copy(){const e=new lm;let n=-1;for(;++n<this.attachers.length;){const i=this.attachers[n];e.use(...i)}return e.data(Cf(!0,{},this.namespace)),e}data(e,n){return typeof e=="string"?arguments.length===2?(Df("data",this.frozen),this.namespace[e]=n,this):GL.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Df("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...i]=this.attachers[this.freezeIndex];if(i[0]===!1)continue;i[0]===!0&&(i[0]=void 0);const r=n.call(e,...i);typeof r=="function"&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const n=Ul(e),i=this.parser||this.Parser;return If("parse",i),i(String(n),n)}process(e,n){const i=this;return this.freeze(),If("process",this.parser||this.Parser),Lf("process",this.compiler||this.Compiler),n?r(void 0,n):new Promise(r);function r(s,o){const a=Ul(e),l=i.parse(a);i.run(l,a,function(f,c,d){if(f||!c||!d)return u(f);const h=c,m=i.stringify(h,d);XL(m)?d.value=m:d.result=m,u(f,d)});function u(f,c){f||!c?o(f):s?s(c):n(void 0,c)}}}processSync(e){let n=!1,i;return this.freeze(),If("processSync",this.parser||this.Parser),Lf("processSync",this.compiler||this.Compiler),this.process(e,r),xx("processSync","process",n),i;function r(s,o){n=!0,lx(s),i=o}}run(e,n,i){gx(e),this.freeze();const r=this.transformers;return!i&&typeof n=="function"&&(i=n,n=void 0),i?s(void 0,i):new Promise(s);function s(o,a){const l=Ul(n);r.run(e,l,u);function u(f,c,d){const h=c||e;f?a(f):o?o(h):i(void 0,h,d)}}}runSync(e,n){let i=!1,r;return this.run(e,n,s),xx("runSync","run",i),r;function s(o,a){lx(o),r=a,i=!0}}stringify(e,n){this.freeze();const i=Ul(n),r=this.compiler||this.Compiler;return Lf("stringify",r),gx(e),r(e,i)}use(e,...n){const i=this.attachers,r=this.namespace;if(Df("use",this.frozen),e!=null)if(typeof e=="function")l(e,n);else if(typeof e=="object")Array.isArray(e)?a(e):o(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function s(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[f,...c]=u;l(f,c)}else o(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function o(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(r.settings=Cf(!0,r.settings,u.settings))}function a(u){let f=-1;if(u!=null)if(Array.isArray(u))for(;++f<u.length;){const c=u[f];s(c)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,f){let c=-1,d=-1;for(;++c<i.length;)if(i[c][0]===u){d=c;break}if(d===-1)i.push([u,...f]);else if(f.length>0){let[h,...m]=f;const v=i[d][1];Nh(v)&&Nh(h)&&(h=Cf(!0,v,h)),i[d]=[u,h,...m]}}}}const WL=new lm().freeze();function If(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function Lf(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function Df(t,e){if(e)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function gx(t){if(!Nh(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function xx(t,e,n){if(!n)throw new Error("`"+t+"` finished async. Use `"+e+"` instead")}function Ul(t){return jL(t)?t:new wS(t)}function jL(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function XL(t){return typeof t=="string"||qL(t)}function qL(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const YL="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",_x=[],vx={allowDangerousHtml:!0},$L=/^(https?|ircs?|mailto|xmpp)$/i,KL=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function ZL(t){const e=JL(t),n=QL(t);return eD(e.runSync(e.parse(n),n),t)}function JL(t){const e=t.rehypePlugins||_x,n=t.remarkPlugins||_x,i=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...vx}:vx;return WL().use(D3).use(n).use(CL,i).use(e)}function QL(t){const e=t.children||"",n=new wS;return typeof e=="string"&&(n.value=e),n}function eD(t,e){const n=e.allowedElements,i=e.allowElement,r=e.components,s=e.disallowedElements,o=e.skipHtml,a=e.unwrapDisallowed,l=e.urlTransform||tD;for(const f of KL)Object.hasOwn(e,f.from)&&(""+f.from+(f.to?"use `"+f.to+"` instead":"remove it")+YL+f.id,void 0);return am(t,u),gP(t,{Fragment:D.Fragment,components:r,ignoreInvalidStyle:!0,jsx:D.jsx,jsxs:D.jsxs,passKeys:!0,passNode:!0});function u(f,c,d){if(f.type==="raw"&&d&&typeof c=="number")return o?d.children.splice(c,1):d.children[c]={type:"text",value:f.value},c;if(f.type==="element"){let h;for(h in wf)if(Object.hasOwn(wf,h)&&Object.hasOwn(f.properties,h)){const m=f.properties[h],v=wf[h];(v===null||v.includes(f.tagName))&&(f.properties[h]=l(String(m||""),h,f))}}if(f.type==="element"){let h=n?!n.includes(f.tagName):s?s.includes(f.tagName):!1;if(!h&&i&&typeof c=="number"&&(h=!i(f,c,d)),h&&d&&typeof c=="number")return a&&f.children?d.children.splice(c,1,...f.children):d.children.splice(c,1),c}}}function tD(t){const e=t.indexOf(":"),n=t.indexOf("?"),i=t.indexOf("#"),r=t.indexOf("/");return e===-1||r!==-1&&e>r||n!==-1&&e>n||i!==-1&&e>i||$L.test(t.slice(0,e))?t:""}function yx(t,e){const n=String(t);if(typeof e!="string")throw new TypeError("Expected character");let i=0,r=n.indexOf(e);for(;r!==-1;)i++,r=n.indexOf(e,r+e.length);return i}function nD(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function iD(t,e,n){const r=cc((n||{}).ignore||[]),s=rD(e);let o=-1;for(;++o<s.length;)ES(t,"text",a);function a(u,f){let c=-1,d;for(;++c<f.length;){const h=f[c],m=d?d.children:void 0;if(r(h,m?m.indexOf(h):void 0,d))return;d=h}if(d)return l(u,f)}function l(u,f){const c=f[f.length-1],d=s[o][0],h=s[o][1];let m=0;const x=c.children.indexOf(u);let p=!1,g=[];d.lastIndex=0;let _=d.exec(u.value);for(;_;){const E=_.index,C={index:_.index,input:_.input,stack:[...f,u]};let M=h(..._,C);if(typeof M=="string"&&(M=M.length>0?{type:"text",value:M}:void 0),M===!1?d.lastIndex=E+1:(m!==E&&g.push({type:"text",value:u.value.slice(m,E)}),Array.isArray(M)?g.push(...M):M&&g.push(M),m=E+_[0].length,p=!0),!d.global)break;_=d.exec(u.value)}return p?(m<u.value.length&&g.push({type:"text",value:u.value.slice(m)}),c.children.splice(x,1,...g)):g=[u],x+g.length}}function rD(t){const e=[];if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!t[0]||Array.isArray(t[0])?t:[t];let i=-1;for(;++i<n.length;){const r=n[i];e.push([sD(r[0]),oD(r[1])])}return e}function sD(t){return typeof t=="string"?new RegExp(nD(t),"g"):t}function oD(t){return typeof t=="function"?t:function(){return t}}const Nf="phrasing",kf=["autolink","link","image","label"];function aD(){return{transforms:[pD],enter:{literalAutolink:uD,literalAutolinkEmail:Ff,literalAutolinkHttp:Ff,literalAutolinkWww:Ff},exit:{literalAutolink:hD,literalAutolinkEmail:dD,literalAutolinkHttp:cD,literalAutolinkWww:fD}}}function lD(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Nf,notInConstruct:kf},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Nf,notInConstruct:kf},{character:":",before:"[ps]",after:"\\/",inConstruct:Nf,notInConstruct:kf}]}}function uD(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function Ff(t){this.config.enter.autolinkProtocol.call(this,t)}function cD(t){this.config.exit.autolinkProtocol.call(this,t)}function fD(t){this.config.exit.data.call(this,t);const e=this.stack[this.stack.length-1];e.type,e.url="http://"+this.sliceSerialize(t)}function dD(t){this.config.exit.autolinkEmail.call(this,t)}function hD(t){this.exit(t)}function pD(t){iD(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,mD],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),gD]],{ignore:["link","linkReference"]})}function mD(t,e,n,i,r){let s="";if(!TS(r)||(/^w/i.test(e)&&(n=e+n,e="",s="http://"),!xD(n)))return!1;const o=_D(n+i);if(!o[0])return!1;const a={type:"link",title:null,url:s+e+o[0],children:[{type:"text",value:e+o[0]}]};return o[1]?[a,{type:"text",value:o[1]}]:a}function gD(t,e,n,i){return!TS(i,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+e+"@"+n,children:[{type:"text",value:e+"@"+n}]}}function xD(t){const e=t.split(".");return!(e.length<2||e[e.length-1]&&(/_/.test(e[e.length-1])||!/[a-zA-Z\d]/.test(e[e.length-1]))||e[e.length-2]&&(/_/.test(e[e.length-2])||!/[a-zA-Z\d]/.test(e[e.length-2])))}function _D(t){const e=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!e)return[t,void 0];t=t.slice(0,e.index);let n=e[0],i=n.indexOf(")");const r=yx(t,"(");let s=yx(t,")");for(;i!==-1&&r>s;)t+=n.slice(0,i+1),n=n.slice(i+1),i=n.indexOf(")"),s++;return[t,n]}function TS(t,e){const n=t.input.charCodeAt(t.index-1);return(t.index===0||ls(n)||ac(n))&&(!e||n!==47)}AS.peek=CD;function vD(){this.buffer()}function yD(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function SD(){this.buffer()}function ED(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function MD(t){const e=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ui(this.sliceSerialize(t)).toLowerCase(),n.label=e}function wD(t){this.exit(t)}function TD(t){const e=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ui(this.sliceSerialize(t)).toLowerCase(),n.label=e}function AD(t){this.exit(t)}function CD(){return"["}function AS(t,e,n,i){const r=n.createTracker(i);let s=r.move("[^");const o=n.enter("footnoteReference"),a=n.enter("reference");return s+=r.move(n.safe(n.associationId(t),{after:"]",before:s})),a(),o(),s+=r.move("]"),s}function bD(){return{enter:{gfmFootnoteCallString:vD,gfmFootnoteCall:yD,gfmFootnoteDefinitionLabelString:SD,gfmFootnoteDefinition:ED},exit:{gfmFootnoteCallString:MD,gfmFootnoteCall:wD,gfmFootnoteDefinitionLabelString:TD,gfmFootnoteDefinition:AD}}}function RD(t){let e=!1;return t&&t.firstLineBlank&&(e=!0),{handlers:{footnoteDefinition:n,footnoteReference:AS},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(i,r,s,o){const a=s.createTracker(o);let l=a.move("[^");const u=s.enter("footnoteDefinition"),f=s.enter("label");return l+=a.move(s.safe(s.associationId(i),{before:l,after:"]"})),f(),l+=a.move("]:"),i.children&&i.children.length>0&&(a.shift(4),l+=a.move((e?`
`:" ")+s.indentLines(s.containerFlow(i,a.current()),e?CS:PD))),u(),l}}function PD(t,e,n){return e===0?t:CS(t,e,n)}function CS(t,e,n){return(n?"":"    ")+t}const ID=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];bS.peek=FD;function LD(){return{canContainEols:["delete"],enter:{strikethrough:ND},exit:{strikethrough:kD}}}function DD(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:ID}],handlers:{delete:bS}}}function ND(t){this.enter({type:"delete",children:[]},t)}function kD(t){this.exit(t)}function bS(t,e,n,i){const r=n.createTracker(i),s=n.enter("strikethrough");let o=r.move("~~");return o+=n.containerPhrasing(t,{...r.current(),before:o,after:"~"}),o+=r.move("~~"),s(),o}function FD(){return"~"}function UD(t){return t.length}function OD(t,e){const n=e||{},i=(n.align||[]).concat(),r=n.stringLength||UD,s=[],o=[],a=[],l=[];let u=0,f=-1;for(;++f<t.length;){const v=[],x=[];let p=-1;for(t[f].length>u&&(u=t[f].length);++p<t[f].length;){const g=zD(t[f][p]);if(n.alignDelimiters!==!1){const _=r(g);x[p]=_,(l[p]===void 0||_>l[p])&&(l[p]=_)}v.push(g)}o[f]=v,a[f]=x}let c=-1;if(typeof i=="object"&&"length"in i)for(;++c<u;)s[c]=Sx(i[c]);else{const v=Sx(i);for(;++c<u;)s[c]=v}c=-1;const d=[],h=[];for(;++c<u;){const v=s[c];let x="",p="";v===99?(x=":",p=":"):v===108?x=":":v===114&&(p=":");let g=n.alignDelimiters===!1?1:Math.max(1,l[c]-x.length-p.length);const _=x+"-".repeat(g)+p;n.alignDelimiters!==!1&&(g=x.length+g+p.length,g>l[c]&&(l[c]=g),h[c]=g),d[c]=_}o.splice(1,0,d),a.splice(1,0,h),f=-1;const m=[];for(;++f<o.length;){const v=o[f],x=a[f];c=-1;const p=[];for(;++c<u;){const g=v[c]||"";let _="",E="";if(n.alignDelimiters!==!1){const C=l[c]-(x[c]||0),M=s[c];M===114?_=" ".repeat(C):M===99?C%2?(_=" ".repeat(C/2+.5),E=" ".repeat(C/2-.5)):(_=" ".repeat(C/2),E=_):E=" ".repeat(C)}n.delimiterStart!==!1&&!c&&p.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&g==="")&&(n.delimiterStart!==!1||c)&&p.push(" "),n.alignDelimiters!==!1&&p.push(_),p.push(g),n.alignDelimiters!==!1&&p.push(E),n.padding!==!1&&p.push(" "),(n.delimiterEnd!==!1||c!==u-1)&&p.push("|")}m.push(n.delimiterEnd===!1?p.join("").replace(/ +$/,""):p.join(""))}return m.join(`
`)}function zD(t){return t==null?"":String(t)}function Sx(t){const e=typeof t=="string"?t.codePointAt(0):0;return e===67||e===99?99:e===76||e===108?108:e===82||e===114?114:0}function BD(t,e,n,i){const r=n.enter("blockquote"),s=n.createTracker(i);s.move("> "),s.shift(2);const o=n.indentLines(n.containerFlow(t,s.current()),HD);return r(),o}function HD(t,e,n){return">"+(n?"":" ")+t}function VD(t,e){return Ex(t,e.inConstruct,!0)&&!Ex(t,e.notInConstruct,!1)}function Ex(t,e,n){if(typeof e=="string"&&(e=[e]),!e||e.length===0)return n;let i=-1;for(;++i<e.length;)if(t.includes(e[i]))return!0;return!1}function Mx(t,e,n,i){let r=-1;for(;++r<n.unsafe.length;)if(n.unsafe[r].character===`
`&&VD(n.stack,n.unsafe[r]))return/[ \t]/.test(i.before)?"":" ";return`\\
`}function GD(t,e){const n=String(t);let i=n.indexOf(e),r=i,s=0,o=0;if(typeof e!="string")throw new TypeError("Expected substring");for(;i!==-1;)i===r?++s>o&&(o=s):s=1,r=i+e.length,i=n.indexOf(e,r);return o}function WD(t,e){return!!(e.options.fences===!1&&t.value&&!t.lang&&/[^ \r\n]/.test(t.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value))}function jD(t){const e=t.options.fence||"`";if(e!=="`"&&e!=="~")throw new Error("Cannot serialize code with `"+e+"` for `options.fence`, expected `` ` `` or `~`");return e}function XD(t,e,n,i){const r=jD(n),s=t.value||"",o=r==="`"?"GraveAccent":"Tilde";if(WD(t,n)){const c=n.enter("codeIndented"),d=n.indentLines(s,qD);return c(),d}const a=n.createTracker(i),l=r.repeat(Math.max(GD(s,r)+1,3)),u=n.enter("codeFenced");let f=a.move(l);if(t.lang){const c=n.enter(`codeFencedLang${o}`);f+=a.move(n.safe(t.lang,{before:f,after:" ",encode:["`"],...a.current()})),c()}if(t.lang&&t.meta){const c=n.enter(`codeFencedMeta${o}`);f+=a.move(" "),f+=a.move(n.safe(t.meta,{before:f,after:`
`,encode:["`"],...a.current()})),c()}return f+=a.move(`
`),s&&(f+=a.move(s+`
`)),f+=a.move(l),u(),f}function qD(t,e,n){return(n?"":"    ")+t}function um(t){const e=t.options.quote||'"';if(e!=='"'&&e!=="'")throw new Error("Cannot serialize title with `"+e+"` for `options.quote`, expected `\"`, or `'`");return e}function YD(t,e,n,i){const r=um(n),s=r==='"'?"Quote":"Apostrophe",o=n.enter("definition");let a=n.enter("label");const l=n.createTracker(i);let u=l.move("[");return u+=l.move(n.safe(n.associationId(t),{before:u,after:"]",...l.current()})),u+=l.move("]: "),a(),!t.url||/[\0- \u007F]/.test(t.url)?(a=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(t.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(a=n.enter("destinationRaw"),u+=l.move(n.safe(t.url,{before:u,after:t.title?" ":`
`,...l.current()}))),a(),t.title&&(a=n.enter(`title${s}`),u+=l.move(" "+r),u+=l.move(n.safe(t.title,{before:u,after:r,...l.current()})),u+=l.move(r),a()),o(),u}function $D(t){const e=t.options.emphasis||"*";if(e!=="*"&&e!=="_")throw new Error("Cannot serialize emphasis with `"+e+"` for `options.emphasis`, expected `*`, or `_`");return e}function Ia(t){return"&#x"+t.toString(16).toUpperCase()+";"}function Ou(t,e,n){const i=po(t),r=po(e);return i===void 0?r===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:r===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:i===1?r===void 0?{inside:!1,outside:!1}:r===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:r===void 0?{inside:!1,outside:!1}:r===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}RS.peek=KD;function RS(t,e,n,i){const r=$D(n),s=n.enter("emphasis"),o=n.createTracker(i),a=o.move(r);let l=o.move(n.containerPhrasing(t,{after:r,before:a,...o.current()}));const u=l.charCodeAt(0),f=Ou(i.before.charCodeAt(i.before.length-1),u,r);f.inside&&(l=Ia(u)+l.slice(1));const c=l.charCodeAt(l.length-1),d=Ou(i.after.charCodeAt(0),c,r);d.inside&&(l=l.slice(0,-1)+Ia(c));const h=o.move(r);return s(),n.attentionEncodeSurroundingInfo={after:d.outside,before:f.outside},a+l+h}function KD(t,e,n){return n.options.emphasis||"*"}function ZD(t,e){let n=!1;return am(t,function(i){if("value"in i&&/\r?\n|\r/.test(i.value)||i.type==="break")return n=!0,Lh}),!!((!t.depth||t.depth<3)&&em(t)&&(e.options.setext||n))}function JD(t,e,n,i){const r=Math.max(Math.min(6,t.depth||1),1),s=n.createTracker(i);if(ZD(t,n)){const f=n.enter("headingSetext"),c=n.enter("phrasing"),d=n.containerPhrasing(t,{...s.current(),before:`
`,after:`
`});return c(),f(),d+`
`+(r===1?"=":"-").repeat(d.length-(Math.max(d.lastIndexOf("\r"),d.lastIndexOf(`
`))+1))}const o="#".repeat(r),a=n.enter("headingAtx"),l=n.enter("phrasing");s.move(o+" ");let u=n.containerPhrasing(t,{before:"# ",after:`
`,...s.current()});return/^[\t ]/.test(u)&&(u=Ia(u.charCodeAt(0))+u.slice(1)),u=u?o+" "+u:o,n.options.closeAtx&&(u+=" "+o),l(),a(),u}PS.peek=QD;function PS(t){return t.value||""}function QD(){return"<"}IS.peek=eN;function IS(t,e,n,i){const r=um(n),s=r==='"'?"Quote":"Apostrophe",o=n.enter("image");let a=n.enter("label");const l=n.createTracker(i);let u=l.move("![");return u+=l.move(n.safe(t.alt,{before:u,after:"]",...l.current()})),u+=l.move("]("),a(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(a=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(t.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(a=n.enter("destinationRaw"),u+=l.move(n.safe(t.url,{before:u,after:t.title?" ":")",...l.current()}))),a(),t.title&&(a=n.enter(`title${s}`),u+=l.move(" "+r),u+=l.move(n.safe(t.title,{before:u,after:r,...l.current()})),u+=l.move(r),a()),u+=l.move(")"),o(),u}function eN(){return"!"}LS.peek=tN;function LS(t,e,n,i){const r=t.referenceType,s=n.enter("imageReference");let o=n.enter("label");const a=n.createTracker(i);let l=a.move("![");const u=n.safe(t.alt,{before:l,after:"]",...a.current()});l+=a.move(u+"]["),o();const f=n.stack;n.stack=[],o=n.enter("reference");const c=n.safe(n.associationId(t),{before:l,after:"]",...a.current()});return o(),n.stack=f,s(),r==="full"||!u||u!==c?l+=a.move(c+"]"):r==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function tN(){return"!"}DS.peek=nN;function DS(t,e,n){let i=t.value||"",r="`",s=-1;for(;new RegExp("(^|[^`])"+r+"([^`]|$)").test(i);)r+="`";for(/[^ \r\n]/.test(i)&&(/^[ \r\n]/.test(i)&&/[ \r\n]$/.test(i)||/^`|`$/.test(i))&&(i=" "+i+" ");++s<n.unsafe.length;){const o=n.unsafe[s],a=n.compilePattern(o);let l;if(o.atBreak)for(;l=a.exec(i);){let u=l.index;i.charCodeAt(u)===10&&i.charCodeAt(u-1)===13&&u--,i=i.slice(0,u)+" "+i.slice(l.index+1)}}return r+i+r}function nN(){return"`"}function NS(t,e){const n=em(t);return!!(!e.options.resourceLink&&t.url&&!t.title&&t.children&&t.children.length===1&&t.children[0].type==="text"&&(n===t.url||"mailto:"+n===t.url)&&/^[a-z][a-z+.-]+:/i.test(t.url)&&!/[\0- <>\u007F]/.test(t.url))}kS.peek=iN;function kS(t,e,n,i){const r=um(n),s=r==='"'?"Quote":"Apostrophe",o=n.createTracker(i);let a,l;if(NS(t,n)){const f=n.stack;n.stack=[],a=n.enter("autolink");let c=o.move("<");return c+=o.move(n.containerPhrasing(t,{before:c,after:">",...o.current()})),c+=o.move(">"),a(),n.stack=f,c}a=n.enter("link"),l=n.enter("label");let u=o.move("[");return u+=o.move(n.containerPhrasing(t,{before:u,after:"](",...o.current()})),u+=o.move("]("),l(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(l=n.enter("destinationLiteral"),u+=o.move("<"),u+=o.move(n.safe(t.url,{before:u,after:">",...o.current()})),u+=o.move(">")):(l=n.enter("destinationRaw"),u+=o.move(n.safe(t.url,{before:u,after:t.title?" ":")",...o.current()}))),l(),t.title&&(l=n.enter(`title${s}`),u+=o.move(" "+r),u+=o.move(n.safe(t.title,{before:u,after:r,...o.current()})),u+=o.move(r),l()),u+=o.move(")"),a(),u}function iN(t,e,n){return NS(t,n)?"<":"["}FS.peek=rN;function FS(t,e,n,i){const r=t.referenceType,s=n.enter("linkReference");let o=n.enter("label");const a=n.createTracker(i);let l=a.move("[");const u=n.containerPhrasing(t,{before:l,after:"]",...a.current()});l+=a.move(u+"]["),o();const f=n.stack;n.stack=[],o=n.enter("reference");const c=n.safe(n.associationId(t),{before:l,after:"]",...a.current()});return o(),n.stack=f,s(),r==="full"||!u||u!==c?l+=a.move(c+"]"):r==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function rN(){return"["}function cm(t){const e=t.options.bullet||"*";if(e!=="*"&&e!=="+"&&e!=="-")throw new Error("Cannot serialize items with `"+e+"` for `options.bullet`, expected `*`, `+`, or `-`");return e}function sN(t){const e=cm(t),n=t.options.bulletOther;if(!n)return e==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===e)throw new Error("Expected `bullet` (`"+e+"`) and `bulletOther` (`"+n+"`) to be different");return n}function oN(t){const e=t.options.bulletOrdered||".";if(e!=="."&&e!==")")throw new Error("Cannot serialize items with `"+e+"` for `options.bulletOrdered`, expected `.` or `)`");return e}function US(t){const e=t.options.rule||"*";if(e!=="*"&&e!=="-"&&e!=="_")throw new Error("Cannot serialize rules with `"+e+"` for `options.rule`, expected `*`, `-`, or `_`");return e}function aN(t,e,n,i){const r=n.enter("list"),s=n.bulletCurrent;let o=t.ordered?oN(n):cm(n);const a=t.ordered?o==="."?")":".":sN(n);let l=e&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!t.ordered){const f=t.children?t.children[0]:void 0;if((o==="*"||o==="-")&&f&&(!f.children||!f.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(l=!0),US(n)===o&&f){let c=-1;for(;++c<t.children.length;){const d=t.children[c];if(d&&d.type==="listItem"&&d.children&&d.children[0]&&d.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(o=a),n.bulletCurrent=o;const u=n.containerFlow(t,i);return n.bulletLastUsed=o,n.bulletCurrent=s,r(),u}function lN(t){const e=t.options.listItemIndent||"one";if(e!=="tab"&&e!=="one"&&e!=="mixed")throw new Error("Cannot serialize items with `"+e+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return e}function uN(t,e,n,i){const r=lN(n);let s=n.bulletCurrent||cm(n);e&&e.type==="list"&&e.ordered&&(s=(typeof e.start=="number"&&e.start>-1?e.start:1)+(n.options.incrementListMarker===!1?0:e.children.indexOf(t))+s);let o=s.length+1;(r==="tab"||r==="mixed"&&(e&&e.type==="list"&&e.spread||t.spread))&&(o=Math.ceil(o/4)*4);const a=n.createTracker(i);a.move(s+" ".repeat(o-s.length)),a.shift(o);const l=n.enter("listItem"),u=n.indentLines(n.containerFlow(t,a.current()),f);return l(),u;function f(c,d,h){return d?(h?"":" ".repeat(o))+c:(h?s:s+" ".repeat(o-s.length))+c}}function cN(t,e,n,i){const r=n.enter("paragraph"),s=n.enter("phrasing"),o=n.containerPhrasing(t,i);return s(),r(),o}const fN=cc(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function dN(t,e,n,i){return(t.children.some(function(o){return fN(o)})?n.containerPhrasing:n.containerFlow).call(n,t,i)}function hN(t){const e=t.options.strong||"*";if(e!=="*"&&e!=="_")throw new Error("Cannot serialize strong with `"+e+"` for `options.strong`, expected `*`, or `_`");return e}OS.peek=pN;function OS(t,e,n,i){const r=hN(n),s=n.enter("strong"),o=n.createTracker(i),a=o.move(r+r);let l=o.move(n.containerPhrasing(t,{after:r,before:a,...o.current()}));const u=l.charCodeAt(0),f=Ou(i.before.charCodeAt(i.before.length-1),u,r);f.inside&&(l=Ia(u)+l.slice(1));const c=l.charCodeAt(l.length-1),d=Ou(i.after.charCodeAt(0),c,r);d.inside&&(l=l.slice(0,-1)+Ia(c));const h=o.move(r+r);return s(),n.attentionEncodeSurroundingInfo={after:d.outside,before:f.outside},a+l+h}function pN(t,e,n){return n.options.strong||"*"}function mN(t,e,n,i){return n.safe(t.value,i)}function gN(t){const e=t.options.ruleRepetition||3;if(e<3)throw new Error("Cannot serialize rules with repetition `"+e+"` for `options.ruleRepetition`, expected `3` or more");return e}function xN(t,e,n){const i=(US(n)+(n.options.ruleSpaces?" ":"")).repeat(gN(n));return n.options.ruleSpaces?i.slice(0,-1):i}const zS={blockquote:BD,break:Mx,code:XD,definition:YD,emphasis:RS,hardBreak:Mx,heading:JD,html:PS,image:IS,imageReference:LS,inlineCode:DS,link:kS,linkReference:FS,list:aN,listItem:uN,paragraph:cN,root:dN,strong:OS,text:mN,thematicBreak:xN};function _N(){return{enter:{table:vN,tableData:wx,tableHeader:wx,tableRow:SN},exit:{codeText:EN,table:yN,tableData:Uf,tableHeader:Uf,tableRow:Uf}}}function vN(t){const e=t._align;this.enter({type:"table",align:e.map(function(n){return n==="none"?null:n}),children:[]},t),this.data.inTable=!0}function yN(t){this.exit(t),this.data.inTable=void 0}function SN(t){this.enter({type:"tableRow",children:[]},t)}function Uf(t){this.exit(t)}function wx(t){this.enter({type:"tableCell",children:[]},t)}function EN(t){let e=this.resume();this.data.inTable&&(e=e.replace(/\\([\\|])/g,MN));const n=this.stack[this.stack.length-1];n.type,n.value=e,this.exit(t)}function MN(t,e){return e==="|"?e:t}function wN(t){const e=t||{},n=e.tableCellPadding,i=e.tablePipeAlign,r=e.stringLength,s=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:d,table:o,tableCell:l,tableRow:a}};function o(h,m,v,x){return u(f(h,v,x),h.align)}function a(h,m,v,x){const p=c(h,v,x),g=u([p]);return g.slice(0,g.indexOf(`
`))}function l(h,m,v,x){const p=v.enter("tableCell"),g=v.enter("phrasing"),_=v.containerPhrasing(h,{...x,before:s,after:s});return g(),p(),_}function u(h,m){return OD(h,{align:m,alignDelimiters:i,padding:n,stringLength:r})}function f(h,m,v){const x=h.children;let p=-1;const g=[],_=m.enter("table");for(;++p<x.length;)g[p]=c(x[p],m,v);return _(),g}function c(h,m,v){const x=h.children;let p=-1;const g=[],_=m.enter("tableRow");for(;++p<x.length;)g[p]=l(x[p],h,m,v);return _(),g}function d(h,m,v){let x=zS.inlineCode(h,m,v);return v.stack.includes("tableCell")&&(x=x.replace(/\|/g,"\\$&")),x}}function TN(){return{exit:{taskListCheckValueChecked:Tx,taskListCheckValueUnchecked:Tx,paragraph:CN}}}function AN(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:bN}}}function Tx(t){const e=this.stack[this.stack.length-2];e.type,e.checked=t.type==="taskListCheckValueChecked"}function CN(t){const e=this.stack[this.stack.length-2];if(e&&e.type==="listItem"&&typeof e.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const i=n.children[0];if(i&&i.type==="text"){const r=e.children;let s=-1,o;for(;++s<r.length;){const a=r[s];if(a.type==="paragraph"){o=a;break}}o===n&&(i.value=i.value.slice(1),i.value.length===0?n.children.shift():n.position&&i.position&&typeof i.position.start.offset=="number"&&(i.position.start.column++,i.position.start.offset++,n.position.start=Object.assign({},i.position.start)))}}this.exit(t)}function bN(t,e,n,i){const r=t.children[0],s=typeof t.checked=="boolean"&&r&&r.type==="paragraph",o="["+(t.checked?"x":" ")+"] ",a=n.createTracker(i);s&&a.move(o);let l=zS.listItem(t,e,n,{...i,...a.current()});return s&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),l;function u(f){return f+o}}function RN(){return[aD(),bD(),LD(),_N(),TN()]}function PN(t){return{extensions:[lD(),RD(t),DD(),wN(t),AN()]}}const IN={tokenize:UN,partial:!0},BS={tokenize:ON,partial:!0},HS={tokenize:zN,partial:!0},VS={tokenize:BN,partial:!0},LN={tokenize:HN,partial:!0},GS={name:"wwwAutolink",tokenize:kN,previous:jS},WS={name:"protocolAutolink",tokenize:FN,previous:XS},Ji={name:"emailAutolink",tokenize:NN,previous:qS},Ri={};function DN(){return{text:Ri}}let Vr=48;for(;Vr<123;)Ri[Vr]=Ji,Vr++,Vr===58?Vr=65:Vr===91&&(Vr=97);Ri[43]=Ji;Ri[45]=Ji;Ri[46]=Ji;Ri[95]=Ji;Ri[72]=[Ji,WS];Ri[104]=[Ji,WS];Ri[87]=[Ji,GS];Ri[119]=[Ji,GS];function NN(t,e,n){const i=this;let r,s;return o;function o(c){return!Fh(c)||!qS.call(i,i.previous)||fm(i.events)?n(c):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),a(c))}function a(c){return Fh(c)?(t.consume(c),a):c===64?(t.consume(c),l):n(c)}function l(c){return c===46?t.check(LN,f,u)(c):c===45||c===95||an(c)?(s=!0,t.consume(c),l):f(c)}function u(c){return t.consume(c),r=!0,l}function f(c){return s&&r&&dn(i.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),e(c)):n(c)}}function kN(t,e,n){const i=this;return r;function r(o){return o!==87&&o!==119||!jS.call(i,i.previous)||fm(i.events)?n(o):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(IN,t.attempt(BS,t.attempt(HS,s),n),n)(o))}function s(o){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),e(o)}}function FN(t,e,n){const i=this;let r="",s=!1;return o;function o(c){return(c===72||c===104)&&XS.call(i,i.previous)&&!fm(i.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),r+=String.fromCodePoint(c),t.consume(c),a):n(c)}function a(c){if(dn(c)&&r.length<5)return r+=String.fromCodePoint(c),t.consume(c),a;if(c===58){const d=r.toLowerCase();if(d==="http"||d==="https")return t.consume(c),l}return n(c)}function l(c){return c===47?(t.consume(c),s?u:(s=!0,l)):n(c)}function u(c){return c===null||ku(c)||pt(c)||ls(c)||ac(c)?n(c):t.attempt(BS,t.attempt(HS,f),n)(c)}function f(c){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),e(c)}}function UN(t,e,n){let i=0;return r;function r(o){return(o===87||o===119)&&i<3?(i++,t.consume(o),r):o===46&&i===3?(t.consume(o),s):n(o)}function s(o){return o===null?n(o):e(o)}}function ON(t,e,n){let i,r,s;return o;function o(u){return u===46||u===95?t.check(VS,l,a)(u):u===null||pt(u)||ls(u)||u!==45&&ac(u)?l(u):(s=!0,t.consume(u),o)}function a(u){return u===95?i=!0:(r=i,i=void 0),t.consume(u),o}function l(u){return r||i||!s?n(u):e(u)}}function zN(t,e){let n=0,i=0;return r;function r(o){return o===40?(n++,t.consume(o),r):o===41&&i<n?s(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?t.check(VS,e,s)(o):o===null||pt(o)||ls(o)?e(o):(t.consume(o),r)}function s(o){return o===41&&i++,t.consume(o),r}}function BN(t,e,n){return i;function i(a){return a===33||a===34||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===63||a===95||a===126?(t.consume(a),i):a===38?(t.consume(a),s):a===93?(t.consume(a),r):a===60||a===null||pt(a)||ls(a)?e(a):n(a)}function r(a){return a===null||a===40||a===91||pt(a)||ls(a)?e(a):i(a)}function s(a){return dn(a)?o(a):n(a)}function o(a){return a===59?(t.consume(a),i):dn(a)?(t.consume(a),o):n(a)}}function HN(t,e,n){return i;function i(s){return t.consume(s),r}function r(s){return an(s)?n(s):e(s)}}function jS(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||pt(t)}function XS(t){return!dn(t)}function qS(t){return!(t===47||Fh(t))}function Fh(t){return t===43||t===45||t===46||t===95||an(t)}function fm(t){let e=t.length,n=!1;for(;e--;){const i=t[e][1];if((i.type==="labelLink"||i.type==="labelImage")&&!i._balanced){n=!0;break}if(i._gfmAutolinkLiteralWalkedInto){n=!1;break}}return t.length>0&&!n&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const VN={tokenize:KN,partial:!0};function GN(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:qN,continuation:{tokenize:YN},exit:$N}},text:{91:{name:"gfmFootnoteCall",tokenize:XN},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:WN,resolveTo:jN}}}}function WN(t,e,n){const i=this;let r=i.events.length;const s=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let o;for(;r--;){const l=i.events[r][1];if(l.type==="labelImage"){o=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return a;function a(l){if(!o||!o._balanced)return n(l);const u=ui(i.sliceSerialize({start:o.end,end:i.now()}));return u.codePointAt(0)!==94||!s.includes(u.slice(1))?n(l):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(l),t.exit("gfmFootnoteCallLabelMarker"),e(l))}}function jN(t,e){let n=t.length;for(;n--;)if(t[n][1].type==="labelImage"&&t[n][0]==="enter"){t[n][1];break}t[n+1][1].type="data",t[n+3][1].type="gfmFootnoteCallLabelMarker";const i={type:"gfmFootnoteCall",start:Object.assign({},t[n+3][1].start),end:Object.assign({},t[t.length-1][1].end)},r={type:"gfmFootnoteCallMarker",start:Object.assign({},t[n+3][1].end),end:Object.assign({},t[n+3][1].end)};r.end.column++,r.end.offset++,r.end._bufferIndex++;const s={type:"gfmFootnoteCallString",start:Object.assign({},r.end),end:Object.assign({},t[t.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},s.start),end:Object.assign({},s.end)},a=[t[n+1],t[n+2],["enter",i,e],t[n+3],t[n+4],["enter",r,e],["exit",r,e],["enter",s,e],["enter",o,e],["exit",o,e],["exit",s,e],t[t.length-2],t[t.length-1],["exit",i,e]];return t.splice(n,t.length-n+1,...a),t}function XN(t,e,n){const i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let s=0,o;return a;function a(c){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(c),t.exit("gfmFootnoteCallLabelMarker"),l}function l(c){return c!==94?n(c):(t.enter("gfmFootnoteCallMarker"),t.consume(c),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",u)}function u(c){if(s>999||c===93&&!o||c===null||c===91||pt(c))return n(c);if(c===93){t.exit("chunkString");const d=t.exit("gfmFootnoteCallString");return r.includes(ui(i.sliceSerialize(d)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(c),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),e):n(c)}return pt(c)||(o=!0),s++,t.consume(c),c===92?f:u}function f(c){return c===91||c===92||c===93?(t.consume(c),s++,u):u(c)}}function qN(t,e,n){const i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let s,o=0,a;return l;function l(m){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(m),t.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(m){return m===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(m),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",f):n(m)}function f(m){if(o>999||m===93&&!a||m===null||m===91||pt(m))return n(m);if(m===93){t.exit("chunkString");const v=t.exit("gfmFootnoteDefinitionLabelString");return s=ui(i.sliceSerialize(v)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(m),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),d}return pt(m)||(a=!0),o++,t.consume(m),m===92?c:f}function c(m){return m===91||m===92||m===93?(t.consume(m),o++,f):f(m)}function d(m){return m===58?(t.enter("definitionMarker"),t.consume(m),t.exit("definitionMarker"),r.includes(s)||r.push(s),Ze(t,h,"gfmFootnoteDefinitionWhitespace")):n(m)}function h(m){return e(m)}}function YN(t,e,n){return t.check(Ga,e,t.attempt(VN,e,n))}function $N(t){t.exit("gfmFootnoteDefinition")}function KN(t,e,n){const i=this;return Ze(t,r,"gfmFootnoteDefinitionIndent",5);function r(s){const o=i.events[i.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?e(s):n(s)}}function ZN(t){let n=(t||{}).singleTilde;const i={name:"strikethrough",tokenize:s,resolveAll:r};return n==null&&(n=!0),{text:{126:i},insideSpan:{null:[i]},attentionMarkers:{null:[126]}};function r(o,a){let l=-1;for(;++l<o.length;)if(o[l][0]==="enter"&&o[l][1].type==="strikethroughSequenceTemporary"&&o[l][1]._close){let u=l;for(;u--;)if(o[u][0]==="exit"&&o[u][1].type==="strikethroughSequenceTemporary"&&o[u][1]._open&&o[l][1].end.offset-o[l][1].start.offset===o[u][1].end.offset-o[u][1].start.offset){o[l][1].type="strikethroughSequence",o[u][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},o[u][1].start),end:Object.assign({},o[l][1].end)},c={type:"strikethroughText",start:Object.assign({},o[u][1].end),end:Object.assign({},o[l][1].start)},d=[["enter",f,a],["enter",o[u][1],a],["exit",o[u][1],a],["enter",c,a]],h=a.parser.constructs.insideSpan.null;h&&Dn(d,d.length,0,lc(h,o.slice(u+1,l),a)),Dn(d,d.length,0,[["exit",c,a],["enter",o[l][1],a],["exit",o[l][1],a],["exit",f,a]]),Dn(o,u-1,l-u+3,d),l=u+d.length-2;break}}for(l=-1;++l<o.length;)o[l][1].type==="strikethroughSequenceTemporary"&&(o[l][1].type="data");return o}function s(o,a,l){const u=this.previous,f=this.events;let c=0;return d;function d(m){return u===126&&f[f.length-1][1].type!=="characterEscape"?l(m):(o.enter("strikethroughSequenceTemporary"),h(m))}function h(m){const v=po(u);if(m===126)return c>1?l(m):(o.consume(m),c++,h);if(c<2&&!n)return l(m);const x=o.exit("strikethroughSequenceTemporary"),p=po(m);return x._open=!p||p===2&&!!v,x._close=!v||v===2&&!!p,a(m)}}}class JN{constructor(){this.map=[]}add(e,n,i){QN(this,e,n,i)}consume(e){if(this.map.sort(function(s,o){return s[0]-o[0]}),this.map.length===0)return;let n=this.map.length;const i=[];for(;n>0;)n-=1,i.push(e.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),e.length=this.map[n][0];i.push(e.slice()),e.length=0;let r=i.pop();for(;r;){for(const s of r)e.push(s);r=i.pop()}this.map.length=0}}function QN(t,e,n,i){let r=0;if(!(n===0&&i.length===0)){for(;r<t.map.length;){if(t.map[r][0]===e){t.map[r][1]+=n,t.map[r][2].push(...i);return}r+=1}t.map.push([e,n,i])}}function ek(t,e){let n=!1;const i=[];for(;e<t.length;){const r=t[e];if(n){if(r[0]==="enter")r[1].type==="tableContent"&&i.push(t[e+1][1].type==="tableDelimiterMarker"?"left":"none");else if(r[1].type==="tableContent"){if(t[e-1][1].type==="tableDelimiterMarker"){const s=i.length-1;i[s]=i[s]==="left"?"center":"right"}}else if(r[1].type==="tableDelimiterRow")break}else r[0]==="enter"&&r[1].type==="tableDelimiterRow"&&(n=!0);e+=1}return i}function tk(){return{flow:{null:{name:"table",tokenize:nk,resolveAll:ik}}}}function nk(t,e,n){const i=this;let r=0,s=0,o;return a;function a(R){let P=i.events.length-1;for(;P>-1;){const Y=i.events[P][1].type;if(Y==="lineEnding"||Y==="linePrefix")P--;else break}const F=P>-1?i.events[P][1].type:null,V=F==="tableHead"||F==="tableRow"?M:l;return V===M&&i.parser.lazy[i.now().line]?n(R):V(R)}function l(R){return t.enter("tableHead"),t.enter("tableRow"),u(R)}function u(R){return R===124||(o=!0,s+=1),f(R)}function f(R){return R===null?n(R):Le(R)?s>1?(s=0,i.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(R),t.exit("lineEnding"),h):n(R):Xe(R)?Ze(t,f,"whitespace")(R):(s+=1,o&&(o=!1,r+=1),R===124?(t.enter("tableCellDivider"),t.consume(R),t.exit("tableCellDivider"),o=!0,f):(t.enter("data"),c(R)))}function c(R){return R===null||R===124||pt(R)?(t.exit("data"),f(R)):(t.consume(R),R===92?d:c)}function d(R){return R===92||R===124?(t.consume(R),c):c(R)}function h(R){return i.interrupt=!1,i.parser.lazy[i.now().line]?n(R):(t.enter("tableDelimiterRow"),o=!1,Xe(R)?Ze(t,m,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(R):m(R))}function m(R){return R===45||R===58?x(R):R===124?(o=!0,t.enter("tableCellDivider"),t.consume(R),t.exit("tableCellDivider"),v):C(R)}function v(R){return Xe(R)?Ze(t,x,"whitespace")(R):x(R)}function x(R){return R===58?(s+=1,o=!0,t.enter("tableDelimiterMarker"),t.consume(R),t.exit("tableDelimiterMarker"),p):R===45?(s+=1,p(R)):R===null||Le(R)?E(R):C(R)}function p(R){return R===45?(t.enter("tableDelimiterFiller"),g(R)):C(R)}function g(R){return R===45?(t.consume(R),g):R===58?(o=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(R),t.exit("tableDelimiterMarker"),_):(t.exit("tableDelimiterFiller"),_(R))}function _(R){return Xe(R)?Ze(t,E,"whitespace")(R):E(R)}function E(R){return R===124?m(R):R===null||Le(R)?!o||r!==s?C(R):(t.exit("tableDelimiterRow"),t.exit("tableHead"),e(R)):C(R)}function C(R){return n(R)}function M(R){return t.enter("tableRow"),b(R)}function b(R){return R===124?(t.enter("tableCellDivider"),t.consume(R),t.exit("tableCellDivider"),b):R===null||Le(R)?(t.exit("tableRow"),e(R)):Xe(R)?Ze(t,b,"whitespace")(R):(t.enter("data"),y(R))}function y(R){return R===null||R===124||pt(R)?(t.exit("data"),b(R)):(t.consume(R),R===92?T:y)}function T(R){return R===92||R===124?(t.consume(R),y):y(R)}}function ik(t,e){let n=-1,i=!0,r=0,s=[0,0,0,0],o=[0,0,0,0],a=!1,l=0,u,f,c;const d=new JN;for(;++n<t.length;){const h=t[n],m=h[1];h[0]==="enter"?m.type==="tableHead"?(a=!1,l!==0&&(Ax(d,e,l,u,f),f=void 0,l=0),u={type:"table",start:Object.assign({},m.start),end:Object.assign({},m.end)},d.add(n,0,[["enter",u,e]])):m.type==="tableRow"||m.type==="tableDelimiterRow"?(i=!0,c=void 0,s=[0,0,0,0],o=[0,n+1,0,0],a&&(a=!1,f={type:"tableBody",start:Object.assign({},m.start),end:Object.assign({},m.end)},d.add(n,0,[["enter",f,e]])),r=m.type==="tableDelimiterRow"?2:f?3:1):r&&(m.type==="data"||m.type==="tableDelimiterMarker"||m.type==="tableDelimiterFiller")?(i=!1,o[2]===0&&(s[1]!==0&&(o[0]=o[1],c=Ol(d,e,s,r,void 0,c),s=[0,0,0,0]),o[2]=n)):m.type==="tableCellDivider"&&(i?i=!1:(s[1]!==0&&(o[0]=o[1],c=Ol(d,e,s,r,void 0,c)),s=o,o=[s[1],n,0,0])):m.type==="tableHead"?(a=!0,l=n):m.type==="tableRow"||m.type==="tableDelimiterRow"?(l=n,s[1]!==0?(o[0]=o[1],c=Ol(d,e,s,r,n,c)):o[1]!==0&&(c=Ol(d,e,o,r,n,c)),r=0):r&&(m.type==="data"||m.type==="tableDelimiterMarker"||m.type==="tableDelimiterFiller")&&(o[3]=n)}for(l!==0&&Ax(d,e,l,u,f),d.consume(e.events),n=-1;++n<e.events.length;){const h=e.events[n];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=ek(e.events,n))}return t}function Ol(t,e,n,i,r,s){const o=i===1?"tableHeader":i===2?"tableDelimiter":"tableData",a="tableContent";n[0]!==0&&(s.end=Object.assign({},Ds(e.events,n[0])),t.add(n[0],0,[["exit",s,e]]));const l=Ds(e.events,n[1]);if(s={type:o,start:Object.assign({},l),end:Object.assign({},l)},t.add(n[1],0,[["enter",s,e]]),n[2]!==0){const u=Ds(e.events,n[2]),f=Ds(e.events,n[3]),c={type:a,start:Object.assign({},u),end:Object.assign({},f)};if(t.add(n[2],0,[["enter",c,e]]),i!==2){const d=e.events[n[2]],h=e.events[n[3]];if(d[1].end=Object.assign({},h[1].end),d[1].type="chunkText",d[1].contentType="text",n[3]>n[2]+1){const m=n[2]+1,v=n[3]-n[2]-1;t.add(m,v,[])}}t.add(n[3]+1,0,[["exit",c,e]])}return r!==void 0&&(s.end=Object.assign({},Ds(e.events,r)),t.add(r,0,[["exit",s,e]]),s=void 0),s}function Ax(t,e,n,i,r){const s=[],o=Ds(e.events,n);r&&(r.end=Object.assign({},o),s.push(["exit",r,e])),i.end=Object.assign({},o),s.push(["exit",i,e]),t.add(n+1,0,s)}function Ds(t,e){const n=t[e],i=n[0]==="enter"?"start":"end";return n[1][i]}const rk={name:"tasklistCheck",tokenize:ok};function sk(){return{text:{91:rk}}}function ok(t,e,n){const i=this;return r;function r(l){return i.previous!==null||!i._gfmTasklistFirstContentOfListItem?n(l):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(l),t.exit("taskListCheckMarker"),s)}function s(l){return pt(l)?(t.enter("taskListCheckValueUnchecked"),t.consume(l),t.exit("taskListCheckValueUnchecked"),o):l===88||l===120?(t.enter("taskListCheckValueChecked"),t.consume(l),t.exit("taskListCheckValueChecked"),o):n(l)}function o(l){return l===93?(t.enter("taskListCheckMarker"),t.consume(l),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),a):n(l)}function a(l){return Le(l)?e(l):Xe(l)?t.check({tokenize:ak},e,n)(l):n(l)}}function ak(t,e,n){return Ze(t,i,"whitespace");function i(r){return r===null?n(r):e(r)}}function lk(t){return iS([DN(),GN(),ZN(t),tk(),sk()])}const uk={};function ck(t){const e=this,n=t||uk,i=e.data(),r=i.micromarkExtensions||(i.micromarkExtensions=[]),s=i.fromMarkdownExtensions||(i.fromMarkdownExtensions=[]),o=i.toMarkdownExtensions||(i.toMarkdownExtensions=[]);r.push(lk(n)),s.push(RN()),o.push(PN(n))}var Cx;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(Cx||(Cx={}));/**
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
 */var bx;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(bx||(bx={}));var Rx;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(Rx||(Rx={}));/**
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
 */const Px=["user","model","function","system"];var Ix;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",t.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(Ix||(Ix={}));var Lx;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(Lx||(Lx={}));var Dx;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(Dx||(Dx={}));var Nx;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(Nx||(Nx={}));var aa;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT",t.SPII="SPII",t.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",t.OTHER="OTHER"})(aa||(aa={}));var kx;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(kx||(kx={}));var Fx;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(Fx||(Fx={}));var Ux;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(Ux||(Ux={}));/**
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
 */class sn extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class Ls extends sn{constructor(e,n){super(e),this.response=n}}class YS extends sn{constructor(e,n,i,r){super(e),this.status=n,this.statusText=i,this.errorDetails=r}}class Ar extends sn{}class $S extends sn{}/**
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
 */const fk="https://generativelanguage.googleapis.com",dk="v1beta",hk="0.24.1",pk="genai-js";var us;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(us||(us={}));class mk{constructor(e,n,i,r,s){this.model=e,this.task=n,this.apiKey=i,this.stream=r,this.requestOptions=s}toString(){var e,n;const i=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||dk;let s=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||fk}/${i}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}function gk(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${pk}/${hk}`),e.join(" ")}async function xk(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",gk(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let i=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(i){if(!(i instanceof Headers))try{i=new Headers(i)}catch(r){throw new Ar(`unable to convert customHeaders value ${JSON.stringify(i)} to Headers: ${r.message}`)}for(const[r,s]of i.entries()){if(r==="x-goog-api-key")throw new Ar(`Cannot set reserved header name ${r}`);if(r==="x-goog-api-client")throw new Ar(`Header name ${r} can only be set using the apiClient field`);n.append(r,s)}}return n}async function _k(t,e,n,i,r,s){const o=new mk(t,e,n,i,s);return{url:o.toString(),fetchOptions:Object.assign(Object.assign({},Ek(s)),{method:"POST",headers:await xk(o),body:r})}}async function ja(t,e,n,i,r,s={},o=fetch){const{url:a,fetchOptions:l}=await _k(t,e,n,i,r,s);return vk(a,l,o)}async function vk(t,e,n=fetch){let i;try{i=await n(t,e)}catch(r){yk(r,t)}return i.ok||await Sk(i,t),i}function yk(t,e){let n=t;throw n.name==="AbortError"?(n=new $S(`Request aborted when fetching ${e.toString()}: ${t.message}`),n.stack=t.stack):t instanceof YS||t instanceof Ar||(n=new sn(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function Sk(t,e){let n="",i;try{const r=await t.json();n=r.error.message,r.error.details&&(n+=` ${JSON.stringify(r.error.details)}`,i=r.error.details)}catch{}throw new YS(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,i)}function Ek(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
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
 */function dm(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),su(t.candidates[0]))throw new Ls(`${fr(t)}`,t);return Mk(t)}else if(t.promptFeedback)throw new Ls(`Text not available. ${fr(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),su(t.candidates[0]))throw new Ls(`${fr(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Ox(t)[0]}else if(t.promptFeedback)throw new Ls(`Function call not available. ${fr(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),su(t.candidates[0]))throw new Ls(`${fr(t)}`,t);return Ox(t)}else if(t.promptFeedback)throw new Ls(`Function call not available. ${fr(t)}`,t)},t}function Mk(t){var e,n,i,r;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(r=(i=t.candidates)===null||i===void 0?void 0:i[0].content)===null||r===void 0?void 0:r.parts)o.text&&s.push(o.text),o.executableCode&&s.push("\n```"+o.executableCode.language+`
`+o.executableCode.code+"\n```\n"),o.codeExecutionResult&&s.push("\n```\n"+o.codeExecutionResult.output+"\n```\n");return s.length>0?s.join(""):""}function Ox(t){var e,n,i,r;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(r=(i=t.candidates)===null||i===void 0?void 0:i[0].content)===null||r===void 0?void 0:r.parts)o.functionCall&&s.push(o.functionCall);if(s.length>0)return s}const wk=[aa.RECITATION,aa.SAFETY,aa.LANGUAGE];function su(t){return!!t.finishReason&&wk.includes(t.finishReason)}function fr(t){var e,n,i;let r="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)r+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(r+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(r+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((i=t.candidates)===null||i===void 0)&&i[0]){const s=t.candidates[0];su(s)&&(r+=`Candidate was blocked due to ${s.finishReason}`,s.finishMessage&&(r+=`: ${s.finishMessage}`))}return r}function La(t){return this instanceof La?(this.v=t,this):new La(t)}function Tk(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=n.apply(t,e||[]),r,s=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(d){i[d]&&(r[d]=function(h){return new Promise(function(m,v){s.push([d,h,m,v])>1||a(d,h)})})}function a(d,h){try{l(i[d](h))}catch(m){c(s[0][3],m)}}function l(d){d.value instanceof La?Promise.resolve(d.value.v).then(u,f):c(s[0][2],d)}function u(d){a("next",d)}function f(d){a("throw",d)}function c(d,h){d(h),s.shift(),s.length&&a(s[0][0],s[0][1])}}/**
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
 */const zx=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Ak(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=Rk(e),[i,r]=n.tee();return{stream:bk(i),response:Ck(r)}}async function Ck(t){const e=[],n=t.getReader();for(;;){const{done:i,value:r}=await n.read();if(i)return dm(Pk(e));e.push(r)}}function bk(t){return Tk(this,arguments,function*(){const n=t.getReader();for(;;){const{value:i,done:r}=yield La(n.read());if(r)break;yield yield La(dm(i))}})}function Rk(t){const e=t.getReader();return new ReadableStream({start(i){let r="";return s();function s(){return e.read().then(({value:o,done:a})=>{if(a){if(r.trim()){i.error(new sn("Failed to parse stream"));return}i.close();return}r+=o;let l=r.match(zx),u;for(;l;){try{u=JSON.parse(l[1])}catch{i.error(new sn(`Error parsing JSON response: "${l[1]}"`));return}i.enqueue(u),r=r.substring(l[0].length),l=r.match(zx)}return s()}).catch(o=>{let a=o;throw a.stack=o.stack,a.name==="AbortError"?a=new $S("Request aborted when reading from the stream"):a=new sn("Error reading from the stream"),a})}}})}function Pk(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const i of t){if(i.candidates){let r=0;for(const s of i.candidates)if(n.candidates||(n.candidates=[]),n.candidates[r]||(n.candidates[r]={index:r}),n.candidates[r].citationMetadata=s.citationMetadata,n.candidates[r].groundingMetadata=s.groundingMetadata,n.candidates[r].finishReason=s.finishReason,n.candidates[r].finishMessage=s.finishMessage,n.candidates[r].safetyRatings=s.safetyRatings,s.content&&s.content.parts){n.candidates[r].content||(n.candidates[r].content={role:s.content.role||"user",parts:[]});const o={};for(const a of s.content.parts)a.text&&(o.text=a.text),a.functionCall&&(o.functionCall=a.functionCall),a.executableCode&&(o.executableCode=a.executableCode),a.codeExecutionResult&&(o.codeExecutionResult=a.codeExecutionResult),Object.keys(o).length===0&&(o.text=""),n.candidates[r].content.parts.push(o)}r++}i.usageMetadata&&(n.usageMetadata=i.usageMetadata)}return n}/**
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
 */async function KS(t,e,n,i){const r=await ja(e,us.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),i);return Ak(r)}async function ZS(t,e,n,i){const s=await(await ja(e,us.GENERATE_CONTENT,t,!1,JSON.stringify(n),i)).json();return{response:dm(s)}}/**
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
 */function JS(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function Da(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return Ik(e)}function Ik(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let i=!1,r=!1;for(const s of t)"functionResponse"in s?(n.parts.push(s),r=!0):(e.parts.push(s),i=!0);if(i&&r)throw new sn("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!i&&!r)throw new sn("No content is provided for sending chat message.");return i?e:n}function Lk(t,e){var n;let i={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const r=t.generateContentRequest!=null;if(t.contents){if(r)throw new Ar("CountTokensRequest must have one of contents or generateContentRequest, not both.");i.contents=t.contents}else if(r)i=Object.assign(Object.assign({},i),t.generateContentRequest);else{const s=Da(t);i.contents=[s]}return{generateContentRequest:i}}function Bx(t){let e;return t.contents?e=t:e={contents:[Da(t)]},t.systemInstruction&&(e.systemInstruction=JS(t.systemInstruction)),e}function Dk(t){return typeof t=="string"||Array.isArray(t)?{content:Da(t)}:t}/**
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
 */const Hx=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Nk={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function kk(t){let e=!1;for(const n of t){const{role:i,parts:r}=n;if(!e&&i!=="user")throw new sn(`First content should be with role 'user', got ${i}`);if(!Px.includes(i))throw new sn(`Each item should include role field. Got ${i} but valid roles are: ${JSON.stringify(Px)}`);if(!Array.isArray(r))throw new sn("Content should have 'parts' property with an array of Parts");if(r.length===0)throw new sn("Each Content should have at least one part");const s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const a of r)for(const l of Hx)l in a&&(s[l]+=1);const o=Nk[i];for(const a of Hx)if(!o.includes(a)&&s[a]>0)throw new sn(`Content with role '${i}' can't contain '${a}' part`);e=!0}}function Vx(t){var e;if(t.candidates===void 0||t.candidates.length===0)return!1;const n=(e=t.candidates[0])===null||e===void 0?void 0:e.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const i of n.parts)if(i===void 0||Object.keys(i).length===0||i.text!==void 0&&i.text==="")return!1;return!0}/**
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
 */const Gx="SILENT_ERROR";class Fk{constructor(e,n,i,r={}){this.model=n,this.params=i,this._requestOptions=r,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,i!=null&&i.history&&(kk(i.history),this._history=i.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var i,r,s,o,a,l;await this._sendPromise;const u=Da(e),f={safetySettings:(i=this.params)===null||i===void 0?void 0:i.safetySettings,generationConfig:(r=this.params)===null||r===void 0?void 0:r.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,u]},c=Object.assign(Object.assign({},this._requestOptions),n);let d;return this._sendPromise=this._sendPromise.then(()=>ZS(this._apiKey,this.model,f,c)).then(h=>{var m;if(Vx(h.response)){this._history.push(u);const v=Object.assign({parts:[],role:"model"},(m=h.response.candidates)===null||m===void 0?void 0:m[0].content);this._history.push(v)}else{const v=fr(h.response);v&&console.warn(`sendMessage() was unsuccessful. ${v}. Inspect response object for details.`)}d=h}).catch(h=>{throw this._sendPromise=Promise.resolve(),h}),await this._sendPromise,d}async sendMessageStream(e,n={}){var i,r,s,o,a,l;await this._sendPromise;const u=Da(e),f={safetySettings:(i=this.params)===null||i===void 0?void 0:i.safetySettings,generationConfig:(r=this.params)===null||r===void 0?void 0:r.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,u]},c=Object.assign(Object.assign({},this._requestOptions),n),d=KS(this._apiKey,this.model,f,c);return this._sendPromise=this._sendPromise.then(()=>d).catch(h=>{throw new Error(Gx)}).then(h=>h.response).then(h=>{if(Vx(h)){this._history.push(u);const m=Object.assign({},h.candidates[0].content);m.role||(m.role="model"),this._history.push(m)}else{const m=fr(h);m&&console.warn(`sendMessageStream() was unsuccessful. ${m}. Inspect response object for details.`)}}).catch(h=>{h.message!==Gx&&console.error(h)}),d}}/**
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
 */async function Uk(t,e,n,i){return(await ja(e,us.COUNT_TOKENS,t,!1,JSON.stringify(n),i)).json()}/**
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
 */async function Ok(t,e,n,i){return(await ja(e,us.EMBED_CONTENT,t,!1,JSON.stringify(n),i)).json()}async function zk(t,e,n,i){const r=n.requests.map(o=>Object.assign(Object.assign({},o),{model:e}));return(await ja(e,us.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:r}),i)).json()}/**
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
 */class Wx{constructor(e,n,i={}){this.apiKey=e,this._requestOptions=i,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=JS(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var i;const r=Bx(e),s=Object.assign(Object.assign({},this._requestOptions),n);return ZS(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(i=this.cachedContent)===null||i===void 0?void 0:i.name},r),s)}async generateContentStream(e,n={}){var i;const r=Bx(e),s=Object.assign(Object.assign({},this._requestOptions),n);return KS(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(i=this.cachedContent)===null||i===void 0?void 0:i.name},r),s)}startChat(e){var n;return new Fk(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const i=Lk(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),r=Object.assign(Object.assign({},this._requestOptions),n);return Uk(this.apiKey,this.model,i,r)}async embedContent(e,n={}){const i=Dk(e),r=Object.assign(Object.assign({},this._requestOptions),n);return Ok(this.apiKey,this.model,i,r)}async batchEmbedContents(e,n={}){const i=Object.assign(Object.assign({},this._requestOptions),n);return zk(this.apiKey,this.model,e,i)}}/**
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
 */class Bk{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new sn("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Wx(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,i){if(!e.name)throw new Ar("Cached content must contain a `name` field.");if(!e.model)throw new Ar("Cached content must contain a `model` field.");const r=["model","systemInstruction"];for(const o of r)if(n!=null&&n[o]&&e[o]&&(n==null?void 0:n[o])!==e[o]){if(o==="model"){const a=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,l=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(a===l)continue}throw new Ar(`Different value for "${o}" specified in modelParams (${n[o]}) and cachedContent (${e[o]})`)}const s=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new Wx(this.apiKey,s,i)}}const Hk="AIzaSyAaZmqsHhGqvowjcv4Hah_98tFaRJG0ufQ",Vk=new Bk(Hk),Gk=`
You are the AI Assistant for Jithendra Mallela's portfolio website. Your purpose is to answer questions about him professionally and enthusiastically. 

Here are some facts about Jithendra:
- Pursuing a B.Tech degree in Computer Science/Engineering (SEM 6).
- Aspiring Software Engineer and Data Science learner based in India.
- Enthusiastic about Full Stack Web Development, Artificial Intelligence, and Retrieval-Augmented Generation (RAG).
- Skills: Python, React, JavaScript, HTML, CSS, Tailwind, AI tools, LangChain, FAISS, Django, OpenAI API.
- Projects:
  1. AI-Powered Research Assistant using RAG (Dec 2025 - Feb 2026): Python, RAG, LangChain, FAISS, Streamlit. Allows Q&A over PDF logic.
  2. AI-Interview Coach Web App (Aug 2025 - Jan 2026): Django, OpenAI, LangChain. AI-scored feedback and resume analyzer.
- Personal traits: Continuous learner, problem solver, driven to build high-impact solutions.

Guidelines:
- If a user asks a question, provide a concise, helpful answer based on these facts.
- Do not make up information that isn't provided here. If you don't know, suggest they contact Jithendra directly through the Contact section.
- Write in a friendly, professional, but conversational tone.
- Keep responses relatively brief (max 2-3 short paragraphs), as this is a small chat widget.
`,Wk=({onClose:t})=>{const[e,n]=ht.useState([{role:"assistant",content:"Hi! I'm Jithendra's AI assistant. Ask me anything about his skills, projects, or background!"}]),[i,r]=ht.useState(""),[s,o]=ht.useState(!1),a=ht.useRef(null),l=()=>{var f;(f=a.current)==null||f.scrollIntoView({behavior:"smooth"})};ht.useEffect(()=>{l()},[e]);const u=async f=>{if(f.preventDefault(),!i.trim()||s)return;const c=i.trim();r(""),n(d=>[...d,{role:"user",content:c}]),o(!0);try{const v=(await Vk.getGenerativeModel({model:"gemini-2.5-flash"}).startChat({history:[{role:"user",parts:[{text:"System instructions: "+Gk}]},{role:"model",parts:[{text:"Understood! I am ready to answer questions about Jithendra Mallela."}]},...e.filter(x=>x.role!=="assistant"||x.content!=="Hi! I'm Jithendra's AI assistant. Ask me anything about his skills, projects, or background!").map(x=>({role:x.role==="assistant"?"model":"user",parts:[{text:x.content}]}))]}).sendMessage(c)).response.text();n(x=>[...x,{role:"assistant",content:v}])}catch(d){console.error("Gemini API Error:",d),n(h=>[...h,{role:"assistant",content:"Oops! Something went wrong while connecting to my brain. Please try again later."}])}finally{o(!1)}};return D.jsxs("div",{className:"ai-chat-widget glass animate-fade-in",children:[D.jsxs("div",{className:"chat-header",children:[D.jsxs("div",{className:"chat-title",children:[D.jsx(Bc,{size:20,className:"text-highlight"}),D.jsx("span",{children:"AI Assistant"})]}),D.jsx("button",{className:"chat-close",onClick:t,"aria-label":"Close chat",children:D.jsx(oy,{size:20})})]}),D.jsxs("div",{className:"chat-messages",children:[e.map((f,c)=>D.jsxs("div",{className:`chat-message ${f.role}`,children:[D.jsx("div",{className:"message-avatar",children:f.role==="assistant"?D.jsx(Bc,{size:16}):D.jsx(j1,{size:16})}),D.jsx("div",{className:"message-content",children:D.jsx(ZL,{remarkPlugins:[ck],children:f.content})})]},c)),s&&D.jsxs("div",{className:"chat-message assistant",children:[D.jsx("div",{className:"message-avatar",children:D.jsx(Bc,{size:16})}),D.jsxs("div",{className:"message-content typing-indicator",children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]})]}),D.jsx("div",{ref:a})]}),D.jsxs("form",{onSubmit:u,className:"chat-input-area",children:[D.jsx("input",{type:"text",value:i,onChange:f=>r(f.target.value),placeholder:"Ask about Jithendra...",className:"chat-input"}),D.jsx("button",{type:"submit",className:"chat-send-btn",disabled:!i.trim()||s,children:D.jsx(G1,{size:18})})]})]})},jk=()=>{const[t,e]=ht.useState({x:0,y:0}),[n,i]=ht.useState(!1),[r,s]=ht.useState(!1),o=ht.useRef(null);ht.useEffect(()=>{const l=u=>{e({x:u.clientX,y:u.clientY})};return window.addEventListener("mousemove",l),()=>window.removeEventListener("mousemove",l)},[]);const a=7;if(o.current){const l=o.current.getBoundingClientRect(),u=l.left+l.width/2,f=l.top+l.height/2;Math.atan2(t.y-f,t.x-u),Math.min(Math.hypot(t.x-u,t.y-f)/30,a)}return D.jsxs("div",{className:"chatbot-wrapper",children:[r&&D.jsx(Wk,{onClose:()=>s(!1)}),D.jsxs("div",{className:`splunk-robot-container ${r?"active":""}`,onClick:()=>s(l=>!l),title:"Click me to chat with Jithendra's AI assistant!",children:[D.jsx("div",{style:{position:"absolute",inset:0,zIndex:10,cursor:"pointer"}}),D.jsx("iframe",{src:"https://my.spline.design/genkubgreetingrobot-2JNl3ubuV2e81X7vsKI4DLhB/",frameBorder:"0",style:{position:"absolute",top:"-5px",left:"-15px",width:"200px",height:"200px",backgroundColor:"transparent",pointerEvents:"none"},title:"3D Greeting Robot"})]})]})};function Xk(){return ht.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&i.target.classList.add("active")})},{threshold:.15});return document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(n=>t.observe(n)),()=>t.disconnect()},[]),D.jsxs("div",{className:"app-wrapper",children:[D.jsx(v2,{}),D.jsx("nav",{className:"navbar glass",children:D.jsxs("div",{className:"nav-content",children:[D.jsxs("a",{href:"#home",className:"nav-logo-container",children:[D.jsx("img",{src:"/profile.jpg.png",alt:"JM Logo",className:"nav-logo-img",onError:t=>{t.target.style.display="none",t.target.nextSibling.style.display="flex"}}),D.jsx("span",{className:"nav-logo-fallback",style:{display:"none"},children:"JM."})]}),D.jsxs("div",{className:"nav-links",children:[D.jsx("a",{href:"#home",children:"Home"}),D.jsx("a",{href:"#about",children:"About"}),D.jsx("a",{href:"#skills",children:"Skills"}),D.jsx("a",{href:"#projects",children:"Projects"}),D.jsx("a",{href:"#experience",children:"Experience"}),D.jsx("a",{href:"#certifications",children:"Certs"}),D.jsx("a",{href:"#education",children:"Education"}),D.jsx("a",{href:"#contact",children:"Contact"})]})]})}),D.jsxs("main",{className:"container",children:[D.jsx(X1,{}),D.jsx(q1,{}),D.jsx(Y1,{}),D.jsx($1,{}),D.jsx(K1,{}),D.jsx(J1,{}),D.jsx(Z1,{}),D.jsx(Q1,{})]}),D.jsx(jk,{}),D.jsxs("footer",{className:"footer glass",children:[D.jsxs("p",{children:["© ",new Date().getFullYear()," Jithendra Mallela. All rights reserved."]}),D.jsxs("div",{className:"footer-links",children:[D.jsx("a",{href:"https://github.com/jithendra98",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),D.jsx("a",{href:"https://www.linkedin.com/in/mallela-jithendra-93j",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})]})]})]})}Of.createRoot(document.getElementById("root")).render(D.jsx(SE.StrictMode,{children:D.jsx(Xk,{})}));
