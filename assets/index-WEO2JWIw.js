(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var jd={exports:{}},Jo={};var Y_;function AM(){if(Y_)return Jo;Y_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:a,key:f,ref:l!==void 0?l:null,props:c}}return Jo.Fragment=t,Jo.jsx=i,Jo.jsxs=i,Jo}var Z_;function RM(){return Z_||(Z_=1,jd.exports=AM()),jd.exports}var zt=RM(),$d={exports:{}},se={};var K_;function CM(){if(K_)return se;K_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function M(w){return w===null||typeof w!="object"?null:(w=_&&w[_]||w["@@iterator"],typeof w=="function"?w:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,S={};function x(w,G,rt){this.props=w,this.context=G,this.refs=S,this.updater=rt||b}x.prototype.isReactComponent={},x.prototype.setState=function(w,G){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,G,"setState")},x.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function L(){}L.prototype=x.prototype;function z(w,G,rt){this.props=w,this.context=G,this.refs=S,this.updater=rt||b}var D=z.prototype=new L;D.constructor=z,R(D,x.prototype),D.isPureReactComponent=!0;var U=Array.isArray;function N(){}var I={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function O(w,G,rt){var pt=rt.ref;return{$$typeof:s,type:w,key:G,ref:pt!==void 0?pt:null,props:rt}}function V(w,G){return O(w.type,G,w.props)}function Y(w){return typeof w=="object"&&w!==null&&w.$$typeof===s}function K(w){var G={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(rt){return G[rt]})}var et=/\/+/g;function W(w,G){return typeof w=="object"&&w!==null&&w.key!=null?K(""+w.key):G.toString(36)}function Q(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(N,N):(w.status="pending",w.then(function(G){w.status==="pending"&&(w.status="fulfilled",w.value=G)},function(G){w.status==="pending"&&(w.status="rejected",w.reason=G)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function B(w,G,rt,pt,Tt){var Lt=typeof w;(Lt==="undefined"||Lt==="boolean")&&(w=null);var tt=!1;if(w===null)tt=!0;else switch(Lt){case"bigint":case"string":case"number":tt=!0;break;case"object":switch(w.$$typeof){case s:case t:tt=!0;break;case g:return tt=w._init,B(tt(w._payload),G,rt,pt,Tt)}}if(tt)return Tt=Tt(w),tt=pt===""?"."+W(w,0):pt,U(Tt)?(rt="",tt!=null&&(rt=tt.replace(et,"$&/")+"/"),B(Tt,G,rt,"",function(jt){return jt})):Tt!=null&&(Y(Tt)&&(Tt=V(Tt,rt+(Tt.key==null||w&&w.key===Tt.key?"":(""+Tt.key).replace(et,"$&/")+"/")+tt)),G.push(Tt)),1;tt=0;var mt=pt===""?".":pt+":";if(U(w))for(var At=0;At<w.length;At++)pt=w[At],Lt=mt+W(pt,At),tt+=B(pt,G,rt,Lt,Tt);else if(At=M(w),typeof At=="function")for(w=At.call(w),At=0;!(pt=w.next()).done;)pt=pt.value,Lt=mt+W(pt,At++),tt+=B(pt,G,rt,Lt,Tt);else if(Lt==="object"){if(typeof w.then=="function")return B(Q(w),G,rt,pt,Tt);throw G=String(w),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return tt}function H(w,G,rt){if(w==null)return w;var pt=[],Tt=0;return B(w,pt,"","",function(Lt){return G.call(rt,Lt,Tt++)}),pt}function lt(w){if(w._status===-1){var G=w._result;G=G(),G.then(function(rt){(w._status===0||w._status===-1)&&(w._status=1,w._result=rt)},function(rt){(w._status===0||w._status===-1)&&(w._status=2,w._result=rt)}),w._status===-1&&(w._status=0,w._result=G)}if(w._status===1)return w._result.default;throw w._result}var at=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},dt={map:H,forEach:function(w,G,rt){H(w,function(){G.apply(this,arguments)},rt)},count:function(w){var G=0;return H(w,function(){G++}),G},toArray:function(w){return H(w,function(G){return G})||[]},only:function(w){if(!Y(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return se.Activity=v,se.Children=dt,se.Component=x,se.Fragment=i,se.Profiler=l,se.PureComponent=z,se.StrictMode=a,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,se.__COMPILER_RUNTIME={__proto__:null,c:function(w){return I.H.useMemoCache(w)}},se.cache=function(w){return function(){return w.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(w,G,rt){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var pt=R({},w.props),Tt=w.key;if(G!=null)for(Lt in G.key!==void 0&&(Tt=""+G.key),G)!T.call(G,Lt)||Lt==="key"||Lt==="__self"||Lt==="__source"||Lt==="ref"&&G.ref===void 0||(pt[Lt]=G[Lt]);var Lt=arguments.length-2;if(Lt===1)pt.children=rt;else if(1<Lt){for(var tt=Array(Lt),mt=0;mt<Lt;mt++)tt[mt]=arguments[mt+2];pt.children=tt}return O(w.type,Tt,pt)},se.createContext=function(w){return w={$$typeof:f,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:c,_context:w},w},se.createElement=function(w,G,rt){var pt,Tt={},Lt=null;if(G!=null)for(pt in G.key!==void 0&&(Lt=""+G.key),G)T.call(G,pt)&&pt!=="key"&&pt!=="__self"&&pt!=="__source"&&(Tt[pt]=G[pt]);var tt=arguments.length-2;if(tt===1)Tt.children=rt;else if(1<tt){for(var mt=Array(tt),At=0;At<tt;At++)mt[At]=arguments[At+2];Tt.children=mt}if(w&&w.defaultProps)for(pt in tt=w.defaultProps,tt)Tt[pt]===void 0&&(Tt[pt]=tt[pt]);return O(w,Lt,Tt)},se.createRef=function(){return{current:null}},se.forwardRef=function(w){return{$$typeof:h,render:w}},se.isValidElement=Y,se.lazy=function(w){return{$$typeof:g,_payload:{_status:-1,_result:w},_init:lt}},se.memo=function(w,G){return{$$typeof:p,type:w,compare:G===void 0?null:G}},se.startTransition=function(w){var G=I.T,rt={};I.T=rt;try{var pt=w(),Tt=I.S;Tt!==null&&Tt(rt,pt),typeof pt=="object"&&pt!==null&&typeof pt.then=="function"&&pt.then(N,at)}catch(Lt){at(Lt)}finally{G!==null&&rt.types!==null&&(G.types=rt.types),I.T=G}},se.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},se.use=function(w){return I.H.use(w)},se.useActionState=function(w,G,rt){return I.H.useActionState(w,G,rt)},se.useCallback=function(w,G){return I.H.useCallback(w,G)},se.useContext=function(w){return I.H.useContext(w)},se.useDebugValue=function(){},se.useDeferredValue=function(w,G){return I.H.useDeferredValue(w,G)},se.useEffect=function(w,G){return I.H.useEffect(w,G)},se.useEffectEvent=function(w){return I.H.useEffectEvent(w)},se.useId=function(){return I.H.useId()},se.useImperativeHandle=function(w,G,rt){return I.H.useImperativeHandle(w,G,rt)},se.useInsertionEffect=function(w,G){return I.H.useInsertionEffect(w,G)},se.useLayoutEffect=function(w,G){return I.H.useLayoutEffect(w,G)},se.useMemo=function(w,G){return I.H.useMemo(w,G)},se.useOptimistic=function(w,G){return I.H.useOptimistic(w,G)},se.useReducer=function(w,G,rt){return I.H.useReducer(w,G,rt)},se.useRef=function(w){return I.H.useRef(w)},se.useState=function(w){return I.H.useState(w)},se.useSyncExternalStore=function(w,G,rt){return I.H.useSyncExternalStore(w,G,rt)},se.useTransition=function(){return I.H.useTransition()},se.version="19.2.4",se}var Q_;function Ip(){return Q_||(Q_=1,$d.exports=CM()),$d.exports}var xt=Ip(),th={exports:{}},jo={},eh={exports:{}},nh={};var J_;function wM(){return J_||(J_=1,(function(s){function t(B,H){var lt=B.length;B.push(H);t:for(;0<lt;){var at=lt-1>>>1,dt=B[at];if(0<l(dt,H))B[at]=H,B[lt]=dt,lt=at;else break t}}function i(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var H=B[0],lt=B.pop();if(lt!==H){B[0]=lt;t:for(var at=0,dt=B.length,w=dt>>>1;at<w;){var G=2*(at+1)-1,rt=B[G],pt=G+1,Tt=B[pt];if(0>l(rt,lt))pt<dt&&0>l(Tt,rt)?(B[at]=Tt,B[pt]=lt,at=pt):(B[at]=rt,B[G]=lt,at=G);else if(pt<dt&&0>l(Tt,lt))B[at]=Tt,B[pt]=lt,at=pt;else break t}}return H}function l(B,H){var lt=B.sortIndex-H.sortIndex;return lt!==0?lt:B.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,v=null,_=3,M=!1,b=!1,R=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function D(B){for(var H=i(p);H!==null;){if(H.callback===null)a(p);else if(H.startTime<=B)a(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(p)}}function U(B){if(R=!1,D(B),!b)if(i(m)!==null)b=!0,N||(N=!0,K());else{var H=i(p);H!==null&&Q(U,H.startTime-B)}}var N=!1,I=-1,T=5,O=-1;function V(){return S?!0:!(s.unstable_now()-O<T)}function Y(){if(S=!1,N){var B=s.unstable_now();O=B;var H=!0;try{t:{b=!1,R&&(R=!1,L(I),I=-1),M=!0;var lt=_;try{e:{for(D(B),v=i(m);v!==null&&!(v.expirationTime>B&&V());){var at=v.callback;if(typeof at=="function"){v.callback=null,_=v.priorityLevel;var dt=at(v.expirationTime<=B);if(B=s.unstable_now(),typeof dt=="function"){v.callback=dt,D(B),H=!0;break e}v===i(m)&&a(m),D(B)}else a(m);v=i(m)}if(v!==null)H=!0;else{var w=i(p);w!==null&&Q(U,w.startTime-B),H=!1}}break t}finally{v=null,_=lt,M=!1}H=void 0}}finally{H?K():N=!1}}}var K;if(typeof z=="function")K=function(){z(Y)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,W=et.port2;et.port1.onmessage=Y,K=function(){W.postMessage(null)}}else K=function(){x(Y,0)};function Q(B,H){I=x(function(){B(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(B){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var lt=_;_=H;try{return B()}finally{_=lt}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(B,H){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var lt=_;_=B;try{return H()}finally{_=lt}},s.unstable_scheduleCallback=function(B,H,lt){var at=s.unstable_now();switch(typeof lt=="object"&&lt!==null?(lt=lt.delay,lt=typeof lt=="number"&&0<lt?at+lt:at):lt=at,B){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=lt+dt,B={id:g++,callback:H,priorityLevel:B,startTime:lt,expirationTime:dt,sortIndex:-1},lt>at?(B.sortIndex=lt,t(p,B),i(m)===null&&B===i(p)&&(R?(L(I),I=-1):R=!0,Q(U,lt-at))):(B.sortIndex=dt,t(m,B),b||M||(b=!0,N||(N=!0,K()))),B},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(B){var H=_;return function(){var lt=_;_=H;try{return B.apply(this,arguments)}finally{_=lt}}}})(nh)),nh}var j_;function DM(){return j_||(j_=1,eh.exports=wM()),eh.exports}var ih={exports:{}},On={};var $_;function LM(){if($_)return On;$_=1;var s=Ip();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,On.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},On.flushSync=function(m){var p=f.T,g=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=p,a.p=g,a.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:M}):g==="script"&&a.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},On.requestFormReset=function(m){a.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},On.useFormStatus=function(){return f.H.useHostTransitionStatus()},On.version="19.2.4",On}var tv;function UM(){if(tv)return ih.exports;tv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),ih.exports=LM(),ih.exports}var ev;function NM(){if(ev)return jo;ev=1;var s=DM(),t=Ip(),i=UM();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(a(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(a(188));return n!==e?null:e}for(var r=e,o=n;;){var u=r.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===r)return m(u),e;if(d===o)return m(u),n;d=d.sibling}throw Error(a(188))}if(r.return!==o.return)r=u,o=d;else{for(var y=!1,C=u.child;C;){if(C===r){y=!0,r=u,o=d;break}if(C===o){y=!0,o=u,r=d;break}C=C.sibling}if(!y){for(C=d.child;C;){if(C===r){y=!0,r=d,o=u;break}if(C===o){y=!0,o=d,r=u;break}C=C.sibling}if(!y)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),z=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),Y=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=Y&&e[Y]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function W(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case U:return"Suspense";case N:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case z:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:W(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return W(e(n))}catch{}}return null}var Q=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt={pending:!1,data:null,method:null,action:null},at=[],dt=-1;function w(e){return{current:e}}function G(e){0>dt||(e.current=at[dt],at[dt]=null,dt--)}function rt(e,n){dt++,at[dt]=e.current,e.current=n}var pt=w(null),Tt=w(null),Lt=w(null),tt=w(null);function mt(e,n){switch(rt(Lt,n),rt(Tt,e),rt(pt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?g_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=g_(n),e=__(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(pt),rt(pt,e)}function At(){G(pt),G(Tt),G(Lt)}function jt(e){e.memoizedState!==null&&rt(tt,e);var n=pt.current,r=__(n,e.type);n!==r&&(rt(Tt,e),rt(pt,r))}function Ft(e){Tt.current===e&&(G(pt),G(Tt)),tt.current===e&&(G(tt),Yo._currentValue=lt)}var ae,an;function re(e){if(ae===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);ae=n&&n[1]||"",an=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ae+e+an}var xe=!1;function Oe(e,n){if(!e||xe)return"";xe=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Et=function(){throw Error()};if(Object.defineProperty(Et.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Et,[])}catch(ht){var ut=ht}Reflect.construct(e,[],Et)}else{try{Et.call()}catch(ht){ut=ht}e.call(Et.prototype)}}else{try{throw Error()}catch(ht){ut=ht}(Et=e())&&typeof Et.catch=="function"&&Et.catch(function(){})}}catch(ht){if(ht&&ut&&typeof ht.stack=="string")return[ht.stack,ut.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],C=d[1];if(y&&C){var F=y.split(`
`),ot=C.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ot.length&&!ot[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===ot.length)for(o=F.length-1,u=ot.length-1;1<=o&&0<=u&&F[o]!==ot[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==ot[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==ot[u]){var St=`
`+F[o].replace(" at new "," at ");return e.displayName&&St.includes("<anonymous>")&&(St=St.replace("<anonymous>",e.displayName)),St}while(1<=o&&0<=u);break}}}finally{xe=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?re(r):""}function ge(e,n){switch(e.tag){case 26:case 27:case 5:return re(e.type);case 16:return re("Lazy");case 13:return e.child!==n&&n!==null?re("Suspense Fallback"):re("Suspense");case 19:return re("SuspenseList");case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return re("Activity");default:return""}}function We(e){try{var n="",r=null;do n+=ge(e,r),r=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var rn=Object.prototype.hasOwnProperty,Tn=s.unstable_scheduleCallback,qe=s.unstable_cancelCallback,sn=s.unstable_shouldYield,Z=s.unstable_requestPaint,Pe=s.unstable_now,Le=s.unstable_getCurrentPriorityLevel,P=s.unstable_ImmediatePriority,E=s.unstable_UserBlockingPriority,$=s.unstable_NormalPriority,ct=s.unstable_LowPriority,gt=s.unstable_IdlePriority,Rt=s.log,Ut=s.unstable_setDisableYieldValue,_t=null,vt=null;function Ct(e){if(typeof Rt=="function"&&Ut(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(_t,e)}catch{}}var kt=Math.clz32?Math.clz32:Jt,Pt=Math.log,Nt=Math.LN2;function Jt(e){return e>>>=0,e===0?32:31-(Pt(e)/Nt|0)|0}var $t=256,ie=262144,q=4194304;function wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yt(e,n,r){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~d,o!==0?u=wt(o):(y&=C,y!==0?u=wt(y):r||(r=C&~e,r!==0&&(u=wt(r))))):(C=o&~d,C!==0?u=wt(C):y!==0?u=wt(y):r||(r=o&~e,r!==0&&(u=wt(r)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,r=n&-n,d>=r||d===32&&(r&4194048)!==0)?n:u}function Dt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ht(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(){var e=q;return q<<=1,(q&62914560)===0&&(q=4194304),e}function Qt(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function qt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function He(e,n,r,o,u,d){var y=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var C=e.entanglements,F=e.expirationTimes,ot=e.hiddenUpdates;for(r=y&~r;0<r;){var St=31-kt(r),Et=1<<St;C[St]=0,F[St]=-1;var ut=ot[St];if(ut!==null)for(ot[St]=null,St=0;St<ut.length;St++){var ht=ut[St];ht!==null&&(ht.lane&=-536870913)}r&=~Et}o!==0&&Re(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(y&~n))}function Re(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-kt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|r&261930}function qn(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var o=31-kt(r),u=1<<o;u&n|e[o]&n&&(e[o]|=n),r&=~u}}function ei(e,n){var r=n&-n;return r=(r&42)!==0?1:ro(r),(r&(e.suspendedLanes|n))!==0?0:r}function ro(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function so(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function oo(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:H_(e.type))}function $r(e,n){var r=H.p;try{return H.p=e,n()}finally{H.p=r}}var Vi=Math.random().toString(36).slice(2),hn="__reactFiber$"+Vi,Cn="__reactProps$"+Vi,Yn="__reactContainer$"+Vi,xr="__reactEvents$"+Vi,Cl="__reactListeners$"+Vi,wl="__reactHandles$"+Vi,Sr="__reactResources$"+Vi,Ia="__reactMarker$"+Vi;function Ba(e){delete e[hn],delete e[Cn],delete e[xr],delete e[Cl],delete e[wl]}function sa(e){var n=e[hn];if(n)return n;for(var r=e.parentNode;r;){if(n=r[Yn]||r[hn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=b_(e);e!==null;){if(r=e[hn])return r;e=b_(e)}return n}e=r,r=e.parentNode}return null}function oa(e){if(e=e[hn]||e[Yn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function yr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function za(e){var n=e[Sr];return n||(n=e[Sr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function pn(e){e[Ia]=!0}var Dl=new Set,lo={};function A(e,n){k(e,n),k(e+"Capture",n)}function k(e,n){for(lo[e]=n,e=0;e<n.length;e++)Dl.add(n[e])}var ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nt={},it={};function It(e){return rn.call(it,e)?!0:rn.call(nt,e)?!1:ft.test(e)?it[e]=!0:(nt[e]=!0,!1)}function Xt(e,n,r){if(It(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function Ot(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function Gt(e,n,r,o){if(o===null)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+o)}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ce(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function me(e,n,r){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){r=""+y,d.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(y){r=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Yt(e){if(!e._valueTracker){var n=ce(e)?"checked":"value";e._valueTracker=me(e,n,""+e[n])}}function Ce(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return e&&(o=ce(e)?e.checked?"true":"false":e.value),e=o,e!==r?(n.setValue(e),!0):!1}function Ke(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ye=/[\n"\\]/g;function de(e){return e.replace(Ye,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function mn(e,n,r,o,u,d,y,C){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Vt(n)):e.value!==""+Vt(n)&&(e.value=""+Vt(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?yn(e,y,Vt(n)):r!=null?yn(e,y,Vt(r)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+Vt(C):e.removeAttribute("name")}function Wt(e,n,r,o,u,d,y,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Yt(e);return}r=r!=null?""+Vt(r):"",n=n!=null?""+Vt(n):r,C||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Yt(e)}function yn(e,n,r){n==="number"&&Ke(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function he(e,n,r,o){if(e=e.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=n.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&o&&(e[r].defaultSelected=!0)}else{for(r=""+Vt(r),n=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Gn(e,n,r){if(n!=null&&(n=""+Vt(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+Vt(r):""}function ni(e,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(a(92));if(Q(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=Vt(n),e.defaultValue=r,o=e.textContent,o===r&&o!==""&&o!==null&&(e.value=o),Yt(e)}function Vn(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var Fa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ue(e,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,r):typeof r!="number"||r===0||Fa.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function $e(e,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&r[u]!==o&&Ue(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Ue(e,d,n[d])}function _i(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ge=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ki=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Di(e){return ki.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function vi(){}var Zu=null;function Ku(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ts=null,es=null;function mm(e){var n=oa(e);if(n&&(e=n.stateNode)){var r=e[Cn]||null;t:switch(e=n.stateNode,n.type){case"input":if(mn(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+de(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==e&&o.form===e.form){var u=o[Cn]||null;if(!u)throw Error(a(90));mn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===e.form&&Ce(o)}break t;case"textarea":Gn(e,r.value,r.defaultValue);break t;case"select":n=r.value,n!=null&&he(e,!!r.multiple,n,!1)}}}var Qu=!1;function gm(e,n,r){if(Qu)return e(n,r);Qu=!0;try{var o=e(n);return o}finally{if(Qu=!1,(ts!==null||es!==null)&&(_c(),ts&&(n=ts,e=es,es=ts=null,mm(n),e)))for(n=0;n<e.length;n++)mm(e[n])}}function co(e,n){var r=e.stateNode;if(r===null)return null;var o=r[Cn]||null;if(o===null)return null;r=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=!1;if(la)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Ju=!1}var Ha=null,ju=null,Ll=null;function _m(){if(Ll)return Ll;var e,n=ju,r=n.length,o,u="value"in Ha?Ha.value:Ha.textContent,d=u.length;for(e=0;e<r&&n[e]===u[e];e++);var y=r-e;for(o=1;o<=y&&n[r-o]===u[d-o];o++);return Ll=u.slice(e,1<o?1-o:void 0)}function Ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Nl(){return!0}function vm(){return!1}function Zn(e){function n(r,o,u,d,y){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(r=e[C],this[C]=r?r(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Nl:vm,this.isPropagationStopped=vm,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),n}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Zn(Mr),fo=v({},Mr,{view:0,detail:0}),bS=Zn(fo),$u,tf,ho,Pl=v({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ho&&(ho&&e.type==="mousemove"?($u=e.screenX-ho.screenX,tf=e.screenY-ho.screenY):tf=$u=0,ho=e),$u)},movementY:function(e){return"movementY"in e?e.movementY:tf}}),xm=Zn(Pl),TS=v({},Pl,{dataTransfer:0}),AS=Zn(TS),RS=v({},fo,{relatedTarget:0}),ef=Zn(RS),CS=v({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),wS=Zn(CS),DS=v({},Mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),LS=Zn(DS),US=v({},Mr,{data:0}),Sm=Zn(US),NS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function IS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=PS[e])?!!n[e]:!1}function nf(){return IS}var BS=v({},fo,{key:function(e){if(e.key){var n=NS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?OS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(e){return e.type==="keypress"?Ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zS=Zn(BS),FS=v({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ym=Zn(FS),HS=v({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),GS=Zn(HS),VS=v({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),kS=Zn(VS),XS=v({},Pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),WS=Zn(XS),qS=v({},Mr,{newState:0,oldState:0}),YS=Zn(qS),ZS=[9,13,27,32],af=la&&"CompositionEvent"in window,po=null;la&&"documentMode"in document&&(po=document.documentMode);var KS=la&&"TextEvent"in window&&!po,Mm=la&&(!af||po&&8<po&&11>=po),Em=" ",bm=!1;function Tm(e,n){switch(e){case"keyup":return ZS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Am(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ns=!1;function QS(e,n){switch(e){case"compositionend":return Am(n);case"keypress":return n.which!==32?null:(bm=!0,Em);case"textInput":return e=n.data,e===Em&&bm?null:e;default:return null}}function JS(e,n){if(ns)return e==="compositionend"||!af&&Tm(e,n)?(e=_m(),Ll=ju=Ha=null,ns=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Mm&&n.locale!=="ko"?null:n.data;default:return null}}var jS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!jS[e.type]:n==="textarea"}function Cm(e,n,r,o){ts?es?es.push(o):es=[o]:ts=o,n=bc(n,"onChange"),0<n.length&&(r=new Ol("onChange","change",null,r,o),e.push({event:r,listeners:n}))}var mo=null,go=null;function $S(e){u_(e,0)}function Il(e){var n=yr(e);if(Ce(n))return e}function wm(e,n){if(e==="change")return n}var Dm=!1;if(la){var rf;if(la){var sf="oninput"in document;if(!sf){var Lm=document.createElement("div");Lm.setAttribute("oninput","return;"),sf=typeof Lm.oninput=="function"}rf=sf}else rf=!1;Dm=rf&&(!document.documentMode||9<document.documentMode)}function Um(){mo&&(mo.detachEvent("onpropertychange",Nm),go=mo=null)}function Nm(e){if(e.propertyName==="value"&&Il(go)){var n=[];Cm(n,go,e,Ku(e)),gm($S,n)}}function ty(e,n,r){e==="focusin"?(Um(),mo=n,go=r,mo.attachEvent("onpropertychange",Nm)):e==="focusout"&&Um()}function ey(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Il(go)}function ny(e,n){if(e==="click")return Il(n)}function iy(e,n){if(e==="input"||e==="change")return Il(n)}function ay(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ii=typeof Object.is=="function"?Object.is:ay;function _o(e,n){if(ii(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!rn.call(n,u)||!ii(e[u],n[u]))return!1}return!0}function Om(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pm(e,n){var r=Om(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=n&&o>=n)return{node:r,offset:n-e};e=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Om(r)}}function Im(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Im(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Bm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ke(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Ke(e.document)}return n}function of(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ry=la&&"documentMode"in document&&11>=document.documentMode,is=null,lf=null,vo=null,cf=!1;function zm(e,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;cf||is==null||is!==Ke(o)||(o=is,"selectionStart"in o&&of(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),vo&&_o(vo,o)||(vo=o,o=bc(lf,"onSelect"),0<o.length&&(n=new Ol("onSelect","select",null,n,r),e.push({event:n,listeners:o}),n.target=is)))}function Er(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var as={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionrun:Er("Transition","TransitionRun"),transitionstart:Er("Transition","TransitionStart"),transitioncancel:Er("Transition","TransitionCancel"),transitionend:Er("Transition","TransitionEnd")},uf={},Fm={};la&&(Fm=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function br(e){if(uf[e])return uf[e];if(!as[e])return e;var n=as[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Fm)return uf[e]=n[r];return e}var Hm=br("animationend"),Gm=br("animationiteration"),Vm=br("animationstart"),sy=br("transitionrun"),oy=br("transitionstart"),ly=br("transitioncancel"),km=br("transitionend"),Xm=new Map,ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ff.push("scrollEnd");function Li(e,n){Xm.set(e,n),A(n,[e])}var Bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xi=[],rs=0,df=0;function zl(){for(var e=rs,n=df=rs=0;n<e;){var r=xi[n];xi[n++]=null;var o=xi[n];xi[n++]=null;var u=xi[n];xi[n++]=null;var d=xi[n];if(xi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&Wm(r,u,d)}}function Fl(e,n,r,o){xi[rs++]=e,xi[rs++]=n,xi[rs++]=r,xi[rs++]=o,df|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function hf(e,n,r,o){return Fl(e,n,r,o),Hl(e)}function Tr(e,n){return Fl(e,null,null,n),Hl(e)}function Wm(e,n,r){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r);for(var u=!1,d=e.return;d!==null;)d.childLanes|=r,o=d.alternate,o!==null&&(o.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-kt(r),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=r|536870912),d):null}function Hl(e){if(50<Ho)throw Ho=0,Md=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ss={};function cy(e,n,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(e,n,r,o){return new cy(e,n,r,o)}function pf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,n){var r=e.alternate;return r===null?(r=ai(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function qm(e,n){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Gl(e,n,r,o,u,d){var y=0;if(o=e,typeof e=="function")pf(e)&&(y=1);else if(typeof e=="string")y=pM(e,r,pt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case O:return e=ai(31,r,n,u),e.elementType=O,e.lanes=d,e;case R:return Ar(r.children,u,d,n);case S:y=8,u|=24;break;case x:return e=ai(12,r,n,u|2),e.elementType=x,e.lanes=d,e;case U:return e=ai(13,r,n,u),e.elementType=U,e.lanes=d,e;case N:return e=ai(19,r,n,u),e.elementType=N,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case z:y=10;break t;case L:y=9;break t;case D:y=11;break t;case I:y=14;break t;case T:y=16,o=null;break t}y=29,r=Error(a(130,e===null?"null":typeof e,"")),o=null}return n=ai(y,r,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function Ar(e,n,r,o){return e=ai(7,e,o,n),e.lanes=r,e}function mf(e,n,r){return e=ai(6,e,null,n),e.lanes=r,e}function Ym(e){var n=ai(18,null,null,0);return n.stateNode=e,n}function gf(e,n,r){return n=ai(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Zm=new WeakMap;function Si(e,n){if(typeof e=="object"&&e!==null){var r=Zm.get(e);return r!==void 0?r:(n={value:e,source:n,stack:We(n)},Zm.set(e,n),n)}return{value:e,source:n,stack:We(n)}}var os=[],ls=0,Vl=null,xo=0,yi=[],Mi=0,Ga=null,Xi=1,Wi="";function ua(e,n){os[ls++]=xo,os[ls++]=Vl,Vl=e,xo=n}function Km(e,n,r){yi[Mi++]=Xi,yi[Mi++]=Wi,yi[Mi++]=Ga,Ga=e;var o=Xi;e=Wi;var u=32-kt(o)-1;o&=~(1<<u),r+=1;var d=32-kt(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Xi=1<<32-kt(n)+u|r<<u|o,Wi=d+e}else Xi=1<<d|r<<u|o,Wi=e}function _f(e){e.return!==null&&(ua(e,1),Km(e,1,0))}function vf(e){for(;e===Vl;)Vl=os[--ls],os[ls]=null,xo=os[--ls],os[ls]=null;for(;e===Ga;)Ga=yi[--Mi],yi[Mi]=null,Wi=yi[--Mi],yi[Mi]=null,Xi=yi[--Mi],yi[Mi]=null}function Qm(e,n){yi[Mi++]=Xi,yi[Mi++]=Wi,yi[Mi++]=Ga,Xi=n.id,Wi=n.overflow,Ga=e}var wn=null,Qe=null,Ee=!1,Va=null,Ei=!1,xf=Error(a(519));function ka(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw So(Si(n,e)),xf}function Jm(e){var n=e.stateNode,r=e.type,o=e.memoizedProps;switch(n[hn]=e,n[Cn]=o,r){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(r=0;r<Vo.length;r++)ve(Vo[r],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Wt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),ni(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||p_(n.textContent,r)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=vi),n=!0):n=!1,n||ka(e,!0)}function jm(e){for(wn=e.return;wn;)switch(wn.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:wn=wn.return}}function cs(e){if(e!==wn)return!1;if(!Ee)return jm(e),Ee=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Bd(e.type,e.memoizedProps)),r=!r),r&&Qe&&ka(e),jm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Qe=E_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Qe=E_(e)}else n===27?(n=Qe,ir(e.type)?(e=Vd,Vd=null,Qe=e):Qe=n):Qe=wn?Ti(e.stateNode.nextSibling):null;return!0}function Rr(){Qe=wn=null,Ee=!1}function Sf(){var e=Va;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Va=null),e}function So(e){Va===null?Va=[e]:Va.push(e)}var yf=w(null),Cr=null,fa=null;function Xa(e,n,r){rt(yf,n._currentValue),n._currentValue=r}function da(e){e._currentValue=yf.current,G(yf)}function Mf(e,n,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===r)break;e=e.return}}function Ef(e,n,r,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;t:for(;d!==null;){var C=d;d=u;for(var F=0;F<n.length;F++)if(C.context===n[F]){d.lanes|=r,C=d.alternate,C!==null&&(C.lanes|=r),Mf(d.return,r,e),o||(y=null);break t}d=C.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(a(341));y.lanes|=r,d=y.alternate,d!==null&&(d.lanes|=r),Mf(y,r,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function us(e,n,r,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var C=u.type;ii(u.pendingProps.value,y.value)||(e!==null?e.push(C):e=[C])}}else if(u===tt.current){if(y=u.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Yo):e=[Yo])}u=u.return}e!==null&&Ef(n,e,r,o),n.flags|=262144}function kl(e){for(e=e.firstContext;e!==null;){if(!ii(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wr(e){Cr=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return $m(Cr,e)}function Xl(e,n){return Cr===null&&wr(e),$m(e,n)}function $m(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},fa===null){if(e===null)throw Error(a(308));fa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else fa=fa.next=n;return r}var uy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},fy=s.unstable_scheduleCallback,dy=s.unstable_NormalPriority,gn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bf(){return{controller:new uy,data:new Map,refCount:0}}function yo(e){e.refCount--,e.refCount===0&&fy(dy,function(){e.controller.abort()})}var Mo=null,Tf=0,fs=0,ds=null;function hy(e,n){if(Mo===null){var r=Mo=[];Tf=0,fs=Cd(),ds={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Tf++,n.then(t0,t0),n}function t0(){if(--Tf===0&&Mo!==null){ds!==null&&(ds.status="fulfilled");var e=Mo;Mo=null,fs=0,ds=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function py(e,n){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var e0=B.S;B.S=function(e,n){zg=Pe(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&hy(e,n),e0!==null&&e0(e,n)};var Dr=w(null);function Af(){var e=Dr.current;return e!==null?e:Ze.pooledCache}function Wl(e,n){n===null?rt(Dr,Dr.current):rt(Dr,n.pool)}function n0(){var e=Af();return e===null?null:{parent:gn._currentValue,pool:e}}var hs=Error(a(460)),Rf=Error(a(474)),ql=Error(a(542)),Yl={then:function(){}};function i0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function a0(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(vi,vi),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,s0(e),e;default:if(typeof n.status=="string")n.then(vi,vi);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,s0(e),e}throw Ur=n,hs}}function Lr(e){try{var n=e._init;return n(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Ur=r,hs):r}}var Ur=null;function r0(){if(Ur===null)throw Error(a(459));var e=Ur;return Ur=null,e}function s0(e){if(e===hs||e===ql)throw Error(a(483))}var ps=null,Eo=0;function Zl(e){var n=Eo;return Eo+=1,ps===null&&(ps=[]),a0(ps,e,n)}function bo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Kl(e,n){throw n.$$typeof===_?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function o0(e){function n(j,X){if(e){var st=j.deletions;st===null?(j.deletions=[X],j.flags|=16):st.push(X)}}function r(j,X){if(!e)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function o(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function u(j,X){return j=ca(j,X),j.index=0,j.sibling=null,j}function d(j,X,st){return j.index=st,e?(st=j.alternate,st!==null?(st=st.index,st<X?(j.flags|=67108866,X):st):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function y(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function C(j,X,st,Mt){return X===null||X.tag!==6?(X=mf(st,j.mode,Mt),X.return=j,X):(X=u(X,st),X.return=j,X)}function F(j,X,st,Mt){var te=st.type;return te===R?St(j,X,st.props.children,Mt,st.key):X!==null&&(X.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===T&&Lr(te)===X.type)?(X=u(X,st.props),bo(X,st),X.return=j,X):(X=Gl(st.type,st.key,st.props,null,j.mode,Mt),bo(X,st),X.return=j,X)}function ot(j,X,st,Mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==st.containerInfo||X.stateNode.implementation!==st.implementation?(X=gf(st,j.mode,Mt),X.return=j,X):(X=u(X,st.children||[]),X.return=j,X)}function St(j,X,st,Mt,te){return X===null||X.tag!==7?(X=Ar(st,j.mode,Mt,te),X.return=j,X):(X=u(X,st),X.return=j,X)}function Et(j,X,st){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=mf(""+X,j.mode,st),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return st=Gl(X.type,X.key,X.props,null,j.mode,st),bo(st,X),st.return=j,st;case b:return X=gf(X,j.mode,st),X.return=j,X;case T:return X=Lr(X),Et(j,X,st)}if(Q(X)||K(X))return X=Ar(X,j.mode,st,null),X.return=j,X;if(typeof X.then=="function")return Et(j,Zl(X),st);if(X.$$typeof===z)return Et(j,Xl(j,X),st);Kl(j,X)}return null}function ut(j,X,st,Mt){var te=X!==null?X.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return te!==null?null:C(j,X,""+st,Mt);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case M:return st.key===te?F(j,X,st,Mt):null;case b:return st.key===te?ot(j,X,st,Mt):null;case T:return st=Lr(st),ut(j,X,st,Mt)}if(Q(st)||K(st))return te!==null?null:St(j,X,st,Mt,null);if(typeof st.then=="function")return ut(j,X,Zl(st),Mt);if(st.$$typeof===z)return ut(j,X,Xl(j,st),Mt);Kl(j,st)}return null}function ht(j,X,st,Mt,te){if(typeof Mt=="string"&&Mt!==""||typeof Mt=="number"||typeof Mt=="bigint")return j=j.get(st)||null,C(X,j,""+Mt,te);if(typeof Mt=="object"&&Mt!==null){switch(Mt.$$typeof){case M:return j=j.get(Mt.key===null?st:Mt.key)||null,F(X,j,Mt,te);case b:return j=j.get(Mt.key===null?st:Mt.key)||null,ot(X,j,Mt,te);case T:return Mt=Lr(Mt),ht(j,X,st,Mt,te)}if(Q(Mt)||K(Mt))return j=j.get(st)||null,St(X,j,Mt,te,null);if(typeof Mt.then=="function")return ht(j,X,st,Zl(Mt),te);if(Mt.$$typeof===z)return ht(j,X,st,Xl(X,Mt),te);Kl(X,Mt)}return null}function Zt(j,X,st,Mt){for(var te=null,we=null,Kt=X,fe=X=0,ye=null;Kt!==null&&fe<st.length;fe++){Kt.index>fe?(ye=Kt,Kt=null):ye=Kt.sibling;var De=ut(j,Kt,st[fe],Mt);if(De===null){Kt===null&&(Kt=ye);break}e&&Kt&&De.alternate===null&&n(j,Kt),X=d(De,X,fe),we===null?te=De:we.sibling=De,we=De,Kt=ye}if(fe===st.length)return r(j,Kt),Ee&&ua(j,fe),te;if(Kt===null){for(;fe<st.length;fe++)Kt=Et(j,st[fe],Mt),Kt!==null&&(X=d(Kt,X,fe),we===null?te=Kt:we.sibling=Kt,we=Kt);return Ee&&ua(j,fe),te}for(Kt=o(Kt);fe<st.length;fe++)ye=ht(Kt,j,fe,st[fe],Mt),ye!==null&&(e&&ye.alternate!==null&&Kt.delete(ye.key===null?fe:ye.key),X=d(ye,X,fe),we===null?te=ye:we.sibling=ye,we=ye);return e&&Kt.forEach(function(lr){return n(j,lr)}),Ee&&ua(j,fe),te}function ee(j,X,st,Mt){if(st==null)throw Error(a(151));for(var te=null,we=null,Kt=X,fe=X=0,ye=null,De=st.next();Kt!==null&&!De.done;fe++,De=st.next()){Kt.index>fe?(ye=Kt,Kt=null):ye=Kt.sibling;var lr=ut(j,Kt,De.value,Mt);if(lr===null){Kt===null&&(Kt=ye);break}e&&Kt&&lr.alternate===null&&n(j,Kt),X=d(lr,X,fe),we===null?te=lr:we.sibling=lr,we=lr,Kt=ye}if(De.done)return r(j,Kt),Ee&&ua(j,fe),te;if(Kt===null){for(;!De.done;fe++,De=st.next())De=Et(j,De.value,Mt),De!==null&&(X=d(De,X,fe),we===null?te=De:we.sibling=De,we=De);return Ee&&ua(j,fe),te}for(Kt=o(Kt);!De.done;fe++,De=st.next())De=ht(Kt,j,fe,De.value,Mt),De!==null&&(e&&De.alternate!==null&&Kt.delete(De.key===null?fe:De.key),X=d(De,X,fe),we===null?te=De:we.sibling=De,we=De);return e&&Kt.forEach(function(TM){return n(j,TM)}),Ee&&ua(j,fe),te}function Xe(j,X,st,Mt){if(typeof st=="object"&&st!==null&&st.type===R&&st.key===null&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case M:t:{for(var te=st.key;X!==null;){if(X.key===te){if(te=st.type,te===R){if(X.tag===7){r(j,X.sibling),Mt=u(X,st.props.children),Mt.return=j,j=Mt;break t}}else if(X.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===T&&Lr(te)===X.type){r(j,X.sibling),Mt=u(X,st.props),bo(Mt,st),Mt.return=j,j=Mt;break t}r(j,X);break}else n(j,X);X=X.sibling}st.type===R?(Mt=Ar(st.props.children,j.mode,Mt,st.key),Mt.return=j,j=Mt):(Mt=Gl(st.type,st.key,st.props,null,j.mode,Mt),bo(Mt,st),Mt.return=j,j=Mt)}return y(j);case b:t:{for(te=st.key;X!==null;){if(X.key===te)if(X.tag===4&&X.stateNode.containerInfo===st.containerInfo&&X.stateNode.implementation===st.implementation){r(j,X.sibling),Mt=u(X,st.children||[]),Mt.return=j,j=Mt;break t}else{r(j,X);break}else n(j,X);X=X.sibling}Mt=gf(st,j.mode,Mt),Mt.return=j,j=Mt}return y(j);case T:return st=Lr(st),Xe(j,X,st,Mt)}if(Q(st))return Zt(j,X,st,Mt);if(K(st)){if(te=K(st),typeof te!="function")throw Error(a(150));return st=te.call(st),ee(j,X,st,Mt)}if(typeof st.then=="function")return Xe(j,X,Zl(st),Mt);if(st.$$typeof===z)return Xe(j,X,Xl(j,st),Mt);Kl(j,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,X!==null&&X.tag===6?(r(j,X.sibling),Mt=u(X,st),Mt.return=j,j=Mt):(r(j,X),Mt=mf(st,j.mode,Mt),Mt.return=j,j=Mt),y(j)):r(j,X)}return function(j,X,st,Mt){try{Eo=0;var te=Xe(j,X,st,Mt);return ps=null,te}catch(Kt){if(Kt===hs||Kt===ql)throw Kt;var we=ai(29,Kt,null,j.mode);return we.lanes=Mt,we.return=j,we}}}var Nr=o0(!0),l0=o0(!1),Wa=!1;function Cf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,n,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Hl(e),Wm(e,null,r),n}return Fl(e,o,n,r),Hl(e)}function To(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,qn(e,r)}}function Df(e,n){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,r=r.next}while(r!==null);d===null?u=d=n:d=d.next=n}else u=d=n;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var Lf=!1;function Ao(){if(Lf){var e=ds;if(e!==null)throw e}}function Ro(e,n,r,o){Lf=!1;var u=e.updateQueue;Wa=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var F=C,ot=F.next;F.next=null,y===null?d=ot:y.next=ot,y=F;var St=e.alternate;St!==null&&(St=St.updateQueue,C=St.lastBaseUpdate,C!==y&&(C===null?St.firstBaseUpdate=ot:C.next=ot,St.lastBaseUpdate=F))}if(d!==null){var Et=u.baseState;y=0,St=ot=F=null,C=d;do{var ut=C.lane&-536870913,ht=ut!==C.lane;if(ht?(Se&ut)===ut:(o&ut)===ut){ut!==0&&ut===fs&&(Lf=!0),St!==null&&(St=St.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Zt=e,ee=C;ut=n;var Xe=r;switch(ee.tag){case 1:if(Zt=ee.payload,typeof Zt=="function"){Et=Zt.call(Xe,Et,ut);break t}Et=Zt;break t;case 3:Zt.flags=Zt.flags&-65537|128;case 0:if(Zt=ee.payload,ut=typeof Zt=="function"?Zt.call(Xe,Et,ut):Zt,ut==null)break t;Et=v({},Et,ut);break t;case 2:Wa=!0}}ut=C.callback,ut!==null&&(e.flags|=64,ht&&(e.flags|=8192),ht=u.callbacks,ht===null?u.callbacks=[ut]:ht.push(ut))}else ht={lane:ut,tag:C.tag,payload:C.payload,callback:C.callback,next:null},St===null?(ot=St=ht,F=Et):St=St.next=ht,y|=ut;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ht=C,C=ht.next,ht.next=null,u.lastBaseUpdate=ht,u.shared.pending=null}}while(!0);St===null&&(F=Et),u.baseState=F,u.firstBaseUpdate=ot,u.lastBaseUpdate=St,d===null&&(u.shared.lanes=0),ja|=y,e.lanes=y,e.memoizedState=Et}}function c0(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function u0(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)c0(r[e],n)}var ms=w(null),Ql=w(0);function f0(e,n){e=ya,rt(Ql,e),rt(ms,n),ya=e|n.baseLanes}function Uf(){rt(Ql,ya),rt(ms,ms.current)}function Nf(){ya=Ql.current,G(ms),G(Ql)}var ri=w(null),bi=null;function Za(e){var n=e.alternate;rt(fn,fn.current&1),rt(ri,e),bi===null&&(n===null||ms.current!==null||n.memoizedState!==null)&&(bi=e)}function Of(e){rt(fn,fn.current),rt(ri,e),bi===null&&(bi=e)}function d0(e){e.tag===22?(rt(fn,fn.current),rt(ri,e),bi===null&&(bi=e)):Ka()}function Ka(){rt(fn,fn.current),rt(ri,ri.current)}function si(e){G(ri),bi===e&&(bi=null),G(fn)}var fn=w(0);function Jl(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Hd(r)||Gd(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ha=0,ue=null,Ve=null,_n=null,jl=!1,gs=!1,Or=!1,$l=0,Co=0,_s=null,my=0;function on(){throw Error(a(321))}function Pf(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!ii(e[r],n[r]))return!1;return!0}function If(e,n,r,o,u,d){return ha=d,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?K0:Jf,Or=!1,d=r(o,u),Or=!1,gs&&(d=p0(n,r,o,u)),h0(e),d}function h0(e){B.H=Lo;var n=Ve!==null&&Ve.next!==null;if(ha=0,_n=Ve=ue=null,jl=!1,Co=0,_s=null,n)throw Error(a(300));e===null||vn||(e=e.dependencies,e!==null&&kl(e)&&(vn=!0))}function p0(e,n,r,o){ue=e;var u=0;do{if(gs&&(_s=null),Co=0,gs=!1,25<=u)throw Error(a(301));if(u+=1,_n=Ve=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=Q0,d=n(r,o)}while(gs);return d}function gy(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?wo(n):n,e=e.useState()[0],(Ve!==null?Ve.memoizedState:null)!==e&&(ue.flags|=1024),n}function Bf(){var e=$l!==0;return $l=0,e}function zf(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function Ff(e){if(jl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}jl=!1}ha=0,_n=Ve=ue=null,gs=!1,Co=$l=0,_s=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?ue.memoizedState=_n=e:_n=_n.next=e,_n}function dn(){if(Ve===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var n=_n===null?ue.memoizedState:_n.next;if(n!==null)_n=n,Ve=e;else{if(e===null)throw ue.alternate===null?Error(a(467)):Error(a(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},_n===null?ue.memoizedState=_n=e:_n=_n.next=e}return _n}function tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wo(e){var n=Co;return Co+=1,_s===null&&(_s=[]),e=a0(_s,e,n),n=ue,(_n===null?n.memoizedState:_n.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?K0:Jf),e}function ec(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return wo(e);if(e.$$typeof===z)return Dn(e)}throw Error(a(438,String(e)))}function Hf(e){var n=null,r=ue.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=tc(),ue.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),o=0;o<e;o++)r[o]=V;return n.index++,r}function pa(e,n){return typeof n=="function"?n(e):n}function nc(e){var n=dn();return Gf(n,Ve,e)}function Gf(e,n,r){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var C=y=null,F=null,ot=n,St=!1;do{var Et=ot.lane&-536870913;if(Et!==ot.lane?(Se&Et)===Et:(ha&Et)===Et){var ut=ot.revertLane;if(ut===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null}),Et===fs&&(St=!0);else if((ha&ut)===ut){ot=ot.next,ut===fs&&(St=!0);continue}else Et={lane:0,revertLane:ot.revertLane,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},F===null?(C=F=Et,y=d):F=F.next=Et,ue.lanes|=ut,ja|=ut;Et=ot.action,Or&&r(d,Et),d=ot.hasEagerState?ot.eagerState:r(d,Et)}else ut={lane:Et,revertLane:ot.revertLane,gesture:ot.gesture,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},F===null?(C=F=ut,y=d):F=F.next=ut,ue.lanes|=Et,ja|=Et;ot=ot.next}while(ot!==null&&ot!==n);if(F===null?y=d:F.next=C,!ii(d,e.memoizedState)&&(vn=!0,St&&(r=ds,r!==null)))throw r;e.memoizedState=d,e.baseState=y,e.baseQueue=F,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Vf(e){var n=dn(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var o=r.dispatch,u=r.pending,d=n.memoizedState;if(u!==null){r.pending=null;var y=u=u.next;do d=e(d,y.action),y=y.next;while(y!==u);ii(d,n.memoizedState)||(vn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),r.lastRenderedState=d}return[d,o]}function m0(e,n,r){var o=ue,u=dn(),d=Ee;if(d){if(r===void 0)throw Error(a(407));r=r()}else r=n();var y=!ii((Ve||u).memoizedState,r);if(y&&(u.memoizedState=r,vn=!0),u=u.queue,Wf(v0.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,vs(9,{destroy:void 0},_0.bind(null,o,u,r,n),null),Ze===null)throw Error(a(349));d||(ha&127)!==0||g0(o,n,r)}return r}function g0(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=ue.updateQueue,n===null?(n=tc(),ue.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function _0(e,n,r,o){n.value=r,n.getSnapshot=o,x0(n)&&S0(e)}function v0(e,n,r){return r(function(){x0(n)&&S0(e)})}function x0(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!ii(e,r)}catch{return!0}}function S0(e){var n=Tr(e,2);n!==null&&$n(n,e,2)}function kf(e){var n=kn();if(typeof e=="function"){var r=e;if(e=r(),Or){Ct(!0);try{r()}finally{Ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},n}function y0(e,n,r,o){return e.baseState=r,Gf(e,Ve,typeof o=="function"?o:pa)}function _y(e,n,r,o,u){if(rc(e))throw Error(a(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};B.T!==null?r(!0):d.isTransition=!1,o(d),r=n.pending,r===null?(d.next=n.pending=d,M0(n,d)):(d.next=r.next,n.pending=r.next=d)}}function M0(e,n){var r=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=B.T,y={};B.T=y;try{var C=r(u,o),F=B.S;F!==null&&F(y,C),E0(e,n,C)}catch(ot){Xf(e,n,ot)}finally{d!==null&&y.types!==null&&(d.types=y.types),B.T=d}}else try{d=r(u,o),E0(e,n,d)}catch(ot){Xf(e,n,ot)}}function E0(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){b0(e,n,o)},function(o){return Xf(e,n,o)}):b0(e,n,r)}function b0(e,n,r){n.status="fulfilled",n.value=r,T0(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,M0(e,r)))}function Xf(e,n,r){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,T0(n),n=n.next;while(n!==o)}e.action=null}function T0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function A0(e,n){return n}function R0(e,n){if(Ee){var r=Ze.formState;if(r!==null){t:{var o=ue;if(Ee){if(Qe){e:{for(var u=Qe,d=Ei;u.nodeType!==8;){if(!d){u=null;break e}if(u=Ti(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Qe=Ti(u.nextSibling),o=u.data==="F!";break t}}ka(o)}o=!1}o&&(n=r[0])}}return r=kn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:A0,lastRenderedState:n},r.queue=o,r=q0.bind(null,ue,o),o.dispatch=r,o=kf(!1),d=Qf.bind(null,ue,!1,o.queue),o=kn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,r=_y.bind(null,ue,u,d,r),u.dispatch=r,o.memoizedState=e,[n,r,!1]}function C0(e){var n=dn();return w0(n,Ve,e)}function w0(e,n,r){if(n=Gf(e,n,A0)[0],e=nc(pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=wo(n)}catch(y){throw y===hs?ql:y}else o=n;n=dn();var u=n.queue,d=u.dispatch;return r!==n.memoizedState&&(ue.flags|=2048,vs(9,{destroy:void 0},vy.bind(null,u,r),null)),[o,d,e]}function vy(e,n){e.action=n}function D0(e){var n=dn(),r=Ve;if(r!==null)return w0(n,r,e);dn(),n=n.memoizedState,r=dn();var o=r.queue.dispatch;return r.memoizedState=e,[n,o,!1]}function vs(e,n,r,o){return e={tag:e,create:r,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=tc(),ue.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,n.lastEffect=e),e}function L0(){return dn().memoizedState}function ic(e,n,r,o){var u=kn();ue.flags|=e,u.memoizedState=vs(1|n,{destroy:void 0},r,o===void 0?null:o)}function ac(e,n,r,o){var u=dn();o=o===void 0?null:o;var d=u.memoizedState.inst;Ve!==null&&o!==null&&Pf(o,Ve.memoizedState.deps)?u.memoizedState=vs(n,d,r,o):(ue.flags|=e,u.memoizedState=vs(1|n,d,r,o))}function U0(e,n){ic(8390656,8,e,n)}function Wf(e,n){ac(2048,8,e,n)}function xy(e){ue.flags|=4;var n=ue.updateQueue;if(n===null)n=tc(),ue.updateQueue=n,n.events=[e];else{var r=n.events;r===null?n.events=[e]:r.push(e)}}function N0(e){var n=dn().memoizedState;return xy({ref:n,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function O0(e,n){return ac(4,2,e,n)}function P0(e,n){return ac(4,4,e,n)}function I0(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function B0(e,n,r){r=r!=null?r.concat([e]):null,ac(4,4,I0.bind(null,n,e),r)}function qf(){}function z0(e,n){var r=dn();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&Pf(n,o[1])?o[0]:(r.memoizedState=[e,n],e)}function F0(e,n){var r=dn();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&Pf(n,o[1]))return o[0];if(o=e(),Or){Ct(!0);try{e()}finally{Ct(!1)}}return r.memoizedState=[o,n],o}function Yf(e,n,r){return r===void 0||(ha&1073741824)!==0&&(Se&261930)===0?e.memoizedState=n:(e.memoizedState=r,e=Hg(),ue.lanes|=e,ja|=e,r)}function H0(e,n,r,o){return ii(r,n)?r:ms.current!==null?(e=Yf(e,r,o),ii(e,n)||(vn=!0),e):(ha&42)===0||(ha&1073741824)!==0&&(Se&261930)===0?(vn=!0,e.memoizedState=r):(e=Hg(),ue.lanes|=e,ja|=e,n)}function G0(e,n,r,o,u){var d=H.p;H.p=d!==0&&8>d?d:8;var y=B.T,C={};B.T=C,Qf(e,!1,n,r);try{var F=u(),ot=B.S;if(ot!==null&&ot(C,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var St=py(F,o);Do(e,n,St,ci(e))}else Do(e,n,o,ci(e))}catch(Et){Do(e,n,{then:function(){},status:"rejected",reason:Et},ci())}finally{H.p=d,y!==null&&C.types!==null&&(y.types=C.types),B.T=y}}function Sy(){}function Zf(e,n,r,o){if(e.tag!==5)throw Error(a(476));var u=V0(e).queue;G0(e,u,n,lt,r===null?Sy:function(){return k0(e),r(o)})}function V0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:lt,baseState:lt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:lt},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function k0(e){var n=V0(e);n.next===null&&(n=e.alternate.memoizedState),Do(e,n.next.queue,{},ci())}function Kf(){return Dn(Yo)}function X0(){return dn().memoizedState}function W0(){return dn().memoizedState}function yy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=ci();e=qa(r);var o=Ya(n,e,r);o!==null&&($n(o,n,r),To(o,n,r)),n={cache:bf()},e.payload=n;return}n=n.return}}function My(e,n,r){var o=ci();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},rc(e)?Y0(n,r):(r=hf(e,n,r,o),r!==null&&($n(r,e,o),Z0(r,n,o)))}function q0(e,n,r){var o=ci();Do(e,n,r,o)}function Do(e,n,r,o){var u={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(rc(e))Y0(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,C=d(y,r);if(u.hasEagerState=!0,u.eagerState=C,ii(C,y))return Fl(e,n,u,0),Ze===null&&zl(),!1}catch{}if(r=hf(e,n,u,o),r!==null)return $n(r,e,o),Z0(r,n,o),!0}return!1}function Qf(e,n,r,o){if(o={lane:2,revertLane:Cd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},rc(e)){if(n)throw Error(a(479))}else n=hf(e,r,o,2),n!==null&&$n(n,e,2)}function rc(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function Y0(e,n){gs=jl=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function Z0(e,n,r){if((r&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,qn(e,r)}}var Lo={readContext:Dn,use:ec,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};Lo.useEffectEvent=on;var K0={readContext:Dn,use:ec,useCallback:function(e,n){return kn().memoizedState=[e,n===void 0?null:n],e},useContext:Dn,useEffect:U0,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,ic(4194308,4,I0.bind(null,n,e),r)},useLayoutEffect:function(e,n){return ic(4194308,4,e,n)},useInsertionEffect:function(e,n){ic(4,2,e,n)},useMemo:function(e,n){var r=kn();n=n===void 0?null:n;var o=e();if(Or){Ct(!0);try{e()}finally{Ct(!1)}}return r.memoizedState=[o,n],o},useReducer:function(e,n,r){var o=kn();if(r!==void 0){var u=r(n);if(Or){Ct(!0);try{r(n)}finally{Ct(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=My.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=kn();return e={current:e},n.memoizedState=e},useState:function(e){e=kf(e);var n=e.queue,r=q0.bind(null,ue,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:qf,useDeferredValue:function(e,n){var r=kn();return Yf(r,e,n)},useTransition:function(){var e=kf(!1);return e=G0.bind(null,ue,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var o=ue,u=kn();if(Ee){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),Ze===null)throw Error(a(349));(Se&127)!==0||g0(o,n,r)}u.memoizedState=r;var d={value:r,getSnapshot:n};return u.queue=d,U0(v0.bind(null,o,d,e),[e]),o.flags|=2048,vs(9,{destroy:void 0},_0.bind(null,o,d,r,n),null),r},useId:function(){var e=kn(),n=Ze.identifierPrefix;if(Ee){var r=Wi,o=Xi;r=(o&~(1<<32-kt(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=$l++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=my++,n="_"+n+"r_"+r.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Kf,useFormState:R0,useActionState:R0,useOptimistic:function(e){var n=kn();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Qf.bind(null,ue,!0,r),r.dispatch=n,[e,n]},useMemoCache:Hf,useCacheRefresh:function(){return kn().memoizedState=yy.bind(null,ue)},useEffectEvent:function(e){var n=kn(),r={impl:e};return n.memoizedState=r,function(){if((Ne&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Jf={readContext:Dn,use:ec,useCallback:z0,useContext:Dn,useEffect:Wf,useImperativeHandle:B0,useInsertionEffect:O0,useLayoutEffect:P0,useMemo:F0,useReducer:nc,useRef:L0,useState:function(){return nc(pa)},useDebugValue:qf,useDeferredValue:function(e,n){var r=dn();return H0(r,Ve.memoizedState,e,n)},useTransition:function(){var e=nc(pa)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:wo(e),n]},useSyncExternalStore:m0,useId:X0,useHostTransitionStatus:Kf,useFormState:C0,useActionState:C0,useOptimistic:function(e,n){var r=dn();return y0(r,Ve,e,n)},useMemoCache:Hf,useCacheRefresh:W0};Jf.useEffectEvent=N0;var Q0={readContext:Dn,use:ec,useCallback:z0,useContext:Dn,useEffect:Wf,useImperativeHandle:B0,useInsertionEffect:O0,useLayoutEffect:P0,useMemo:F0,useReducer:Vf,useRef:L0,useState:function(){return Vf(pa)},useDebugValue:qf,useDeferredValue:function(e,n){var r=dn();return Ve===null?Yf(r,e,n):H0(r,Ve.memoizedState,e,n)},useTransition:function(){var e=Vf(pa)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:wo(e),n]},useSyncExternalStore:m0,useId:X0,useHostTransitionStatus:Kf,useFormState:D0,useActionState:D0,useOptimistic:function(e,n){var r=dn();return Ve!==null?y0(r,Ve,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Hf,useCacheRefresh:W0};Q0.useEffectEvent=N0;function jf(e,n,r,o){n=e.memoizedState,r=r(o,n),r=r==null?n:v({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var $f={enqueueSetState:function(e,n,r){e=e._reactInternals;var o=ci(),u=qa(o);u.payload=n,r!=null&&(u.callback=r),n=Ya(e,u,o),n!==null&&($n(n,e,o),To(n,e,o))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var o=ci(),u=qa(o);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=Ya(e,u,o),n!==null&&($n(n,e,o),To(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=ci(),o=qa(r);o.tag=2,n!=null&&(o.callback=n),n=Ya(e,o,r),n!==null&&($n(n,e,r),To(n,e,r))}};function J0(e,n,r,o,u,d,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!_o(r,o)||!_o(u,d):!0}function j0(e,n,r,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==e&&$f.enqueueReplaceState(n,n.state,null)}function Pr(e,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(e=e.defaultProps){r===n&&(r=v({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}function $0(e){Bl(e)}function tg(e){console.error(e)}function eg(e){Bl(e)}function sc(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ng(e,n,r){try{var o=e.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function td(e,n,r){return r=qa(r),r.tag=3,r.payload={element:null},r.callback=function(){sc(e,n)},r}function ig(e){return e=qa(e),e.tag=3,e}function ag(e,n,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){ng(n,r,o)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){ng(n,r,o),typeof u!="function"&&($a===null?$a=new Set([this]):$a.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function Ey(e,n,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&us(n,r,u,!0),r=ri.current,r!==null){switch(r.tag){case 31:case 13:return bi===null?vc():r.alternate===null&&ln===0&&(ln=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===Yl?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),Td(e,o,u)),!1;case 22:return r.flags|=65536,o===Yl?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),Td(e,o,u)),!1}throw Error(a(435,r.tag))}return Td(e,o,u),vc(),!1}if(Ee)return n=ri.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==xf&&(e=Error(a(422),{cause:o}),So(Si(e,r)))):(o!==xf&&(n=Error(a(423),{cause:o}),So(Si(n,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Si(o,r),u=td(e.stateNode,o,u),Df(e,u),ln!==4&&(ln=2)),!1;var d=Error(a(520),{cause:o});if(d=Si(d,r),Fo===null?Fo=[d]:Fo.push(d),ln!==4&&(ln=2),n===null)return!0;o=Si(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=td(r.stateNode,o,e),Df(r,e),!1;case 1:if(n=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&($a===null||!$a.has(d))))return r.flags|=65536,u&=-u,r.lanes|=u,u=ig(u),ag(u,e,r,o),Df(r,u),!1}r=r.return}while(r!==null);return!1}var ed=Error(a(461)),vn=!1;function Ln(e,n,r,o){n.child=e===null?l0(n,null,r,o):Nr(n,e.child,r,o)}function rg(e,n,r,o,u){r=r.render;var d=n.ref;if("ref"in o){var y={};for(var C in o)C!=="ref"&&(y[C]=o[C])}else y=o;return wr(n),o=If(e,n,r,y,d,u),C=Bf(),e!==null&&!vn?(zf(e,n,u),ma(e,n,u)):(Ee&&C&&_f(n),n.flags|=1,Ln(e,n,o,u),n.child)}function sg(e,n,r,o,u){if(e===null){var d=r.type;return typeof d=="function"&&!pf(d)&&d.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=d,og(e,n,d,o,u)):(e=Gl(r.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!cd(e,u)){var y=d.memoizedProps;if(r=r.compare,r=r!==null?r:_o,r(y,o)&&e.ref===n.ref)return ma(e,n,u)}return n.flags|=1,e=ca(d,o),e.ref=n.ref,e.return=n,n.child=e}function og(e,n,r,o,u){if(e!==null){var d=e.memoizedProps;if(_o(d,o)&&e.ref===n.ref)if(vn=!1,n.pendingProps=o=d,cd(e,u))(e.flags&131072)!==0&&(vn=!0);else return n.lanes=e.lanes,ma(e,n,u)}return nd(e,n,r,o,u)}function lg(e,n,r,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return cg(e,n,d,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wl(n,d!==null?d.cachePool:null),d!==null?f0(n,d):Uf(),d0(n);else return o=n.lanes=536870912,cg(e,n,d!==null?d.baseLanes|r:r,r,o)}else d!==null?(Wl(n,d.cachePool),f0(n,d),Ka(),n.memoizedState=null):(e!==null&&Wl(n,null),Uf(),Ka());return Ln(e,n,u,r),n.child}function Uo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function cg(e,n,r,o,u){var d=Af();return d=d===null?null:{parent:gn._currentValue,pool:d},n.memoizedState={baseLanes:r,cachePool:d},e!==null&&Wl(n,null),Uf(),d0(n),e!==null&&us(e,n,o,!0),n.childLanes=u,null}function oc(e,n){return n=cc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function ug(e,n,r){return Nr(n,e.child,null,r),e=oc(n,n.pendingProps),e.flags|=2,si(n),n.memoizedState=null,e}function by(e,n,r){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(o.mode==="hidden")return e=oc(n,o),n.lanes=536870912,Uo(null,e);if(Of(n),(e=Qe)?(e=M_(e,Ei),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:Xi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},r=Ym(e),r.return=n,n.child=r,wn=n,Qe=null)):e=null,e===null)throw ka(n);return n.lanes=536870912,null}return oc(n,o)}var d=e.memoizedState;if(d!==null){var y=d.dehydrated;if(Of(n),u)if(n.flags&256)n.flags&=-257,n=ug(e,n,r);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(vn||us(e,n,r,!1),u=(r&e.childLanes)!==0,vn||u){if(o=Ze,o!==null&&(y=ei(o,r),y!==0&&y!==d.retryLane))throw d.retryLane=y,Tr(e,y),$n(o,e,y),ed;vc(),n=ug(e,n,r)}else e=d.treeContext,Qe=Ti(y.nextSibling),wn=n,Ee=!0,Va=null,Ei=!1,e!==null&&Qm(n,e),n=oc(n,o),n.flags|=4096;return n}return e=ca(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function lc(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function nd(e,n,r,o,u){return wr(n),r=If(e,n,r,o,void 0,u),o=Bf(),e!==null&&!vn?(zf(e,n,u),ma(e,n,u)):(Ee&&o&&_f(n),n.flags|=1,Ln(e,n,r,u),n.child)}function fg(e,n,r,o,u,d){return wr(n),n.updateQueue=null,r=p0(n,o,r,u),h0(e),o=Bf(),e!==null&&!vn?(zf(e,n,d),ma(e,n,d)):(Ee&&o&&_f(n),n.flags|=1,Ln(e,n,r,d),n.child)}function dg(e,n,r,o,u){if(wr(n),n.stateNode===null){var d=ss,y=r.contextType;typeof y=="object"&&y!==null&&(d=Dn(y)),d=new r(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=$f,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Cf(n),y=r.contextType,d.context=typeof y=="object"&&y!==null?Dn(y):ss,d.state=n.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(jf(n,r,y,o),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&$f.enqueueReplaceState(d,d.state,null),Ro(n,o,d,u),Ao(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var C=n.memoizedProps,F=Pr(r,C);d.props=F;var ot=d.context,St=r.contextType;y=ss,typeof St=="object"&&St!==null&&(y=Dn(St));var Et=r.getDerivedStateFromProps;St=typeof Et=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,St||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||ot!==y)&&j0(n,d,o,y),Wa=!1;var ut=n.memoizedState;d.state=ut,Ro(n,o,d,u),Ao(),ot=n.memoizedState,C||ut!==ot||Wa?(typeof Et=="function"&&(jf(n,r,Et,o),ot=n.memoizedState),(F=Wa||J0(n,r,F,o,ut,ot,y))?(St||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ot),d.props=o,d.state=ot,d.context=y,o=F):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,wf(e,n),y=n.memoizedProps,St=Pr(r,y),d.props=St,Et=n.pendingProps,ut=d.context,ot=r.contextType,F=ss,typeof ot=="object"&&ot!==null&&(F=Dn(ot)),C=r.getDerivedStateFromProps,(ot=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==Et||ut!==F)&&j0(n,d,o,F),Wa=!1,ut=n.memoizedState,d.state=ut,Ro(n,o,d,u),Ao();var ht=n.memoizedState;y!==Et||ut!==ht||Wa||e!==null&&e.dependencies!==null&&kl(e.dependencies)?(typeof C=="function"&&(jf(n,r,C,o),ht=n.memoizedState),(St=Wa||J0(n,r,St,o,ut,ht,F)||e!==null&&e.dependencies!==null&&kl(e.dependencies))?(ot||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ht,F),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ht,F)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&ut===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ut===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ht),d.props=o,d.state=ht,d.context=F,o=St):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&ut===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ut===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,lc(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=Nr(n,e.child,null,u),n.child=Nr(n,null,r,u)):Ln(e,n,r,u),n.memoizedState=d.state,e=n.child):e=ma(e,n,u),e}function hg(e,n,r,o){return Rr(),n.flags|=256,Ln(e,n,r,o),n.child}var id={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ad(e){return{baseLanes:e,cachePool:n0()}}function rd(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=li),e}function pg(e,n,r){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(u?Za(n):Ka(),(e=Qe)?(e=M_(e,Ei),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:Xi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},r=Ym(e),r.return=n,n.child=r,wn=n,Qe=null)):e=null,e===null)throw ka(n);return Gd(e)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(Ka(),u=n.mode,C=cc({mode:"hidden",children:C},u),o=Ar(o,u,r,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=ad(r),o.childLanes=rd(e,y,r),n.memoizedState=id,Uo(null,o)):(Za(n),sd(n,C))}var F=e.memoizedState;if(F!==null&&(C=F.dehydrated,C!==null)){if(d)n.flags&256?(Za(n),n.flags&=-257,n=od(e,n,r)):n.memoizedState!==null?(Ka(),n.child=e.child,n.flags|=128,n=null):(Ka(),C=o.fallback,u=n.mode,o=cc({mode:"visible",children:o.children},u),C=Ar(C,u,r,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Nr(n,e.child,null,r),o=n.child,o.memoizedState=ad(r),o.childLanes=rd(e,y,r),n.memoizedState=id,n=Uo(null,o));else if(Za(n),Gd(C)){if(y=C.nextSibling&&C.nextSibling.dataset,y)var ot=y.dgst;y=ot,o=Error(a(419)),o.stack="",o.digest=y,So({value:o,source:null,stack:null}),n=od(e,n,r)}else if(vn||us(e,n,r,!1),y=(r&e.childLanes)!==0,vn||y){if(y=Ze,y!==null&&(o=ei(y,r),o!==0&&o!==F.retryLane))throw F.retryLane=o,Tr(e,o),$n(y,e,o),ed;Hd(C)||vc(),n=od(e,n,r)}else Hd(C)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,Qe=Ti(C.nextSibling),wn=n,Ee=!0,Va=null,Ei=!1,e!==null&&Qm(n,e),n=sd(n,o.children),n.flags|=4096);return n}return u?(Ka(),C=o.fallback,u=n.mode,F=e.child,ot=F.sibling,o=ca(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,ot!==null?C=ca(ot,C):(C=Ar(C,u,r,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,Uo(null,o),o=n.child,C=e.child.memoizedState,C===null?C=ad(r):(u=C.cachePool,u!==null?(F=gn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=n0(),C={baseLanes:C.baseLanes|r,cachePool:u}),o.memoizedState=C,o.childLanes=rd(e,y,r),n.memoizedState=id,Uo(e.child,o)):(Za(n),r=e.child,e=r.sibling,r=ca(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=r,n.memoizedState=null,r)}function sd(e,n){return n=cc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function cc(e,n){return e=ai(22,e,null,n),e.lanes=0,e}function od(e,n,r){return Nr(n,e.child,null,r),e=sd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function mg(e,n,r){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Mf(e.return,n,r)}function ld(e,n,r,o,u,d){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=r,y.tailMode=u,y.treeForkCount=d)}function gg(e,n,r){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var y=fn.current,C=(y&2)!==0;if(C?(y=y&1|2,n.flags|=128):y&=1,rt(fn,y),Ln(e,n,o,r),o=Ee?xo:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mg(e,r,n);else if(e.tag===19)mg(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(r=n.child,u=null;r!==null;)e=r.alternate,e!==null&&Jl(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),ld(n,!1,u,r,d,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Jl(e)===null){n.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}ld(n,!0,r,null,d,o);break;case"together":ld(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ma(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),ja|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(us(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,r=ca(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=ca(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function cd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&kl(e)))}function Ty(e,n,r){switch(n.tag){case 3:mt(n,n.stateNode.containerInfo),Xa(n,gn,e.memoizedState.cache),Rr();break;case 27:case 5:jt(n);break;case 4:mt(n,n.stateNode.containerInfo);break;case 10:Xa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Of(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Za(n),n.flags|=128,null):(r&n.child.childLanes)!==0?pg(e,n,r):(Za(n),e=ma(e,n,r),e!==null?e.sibling:null);Za(n);break;case 19:var u=(e.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(us(e,n,r,!1),o=(r&n.childLanes)!==0),u){if(o)return gg(e,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),rt(fn,fn.current),o)break;return null;case 22:return n.lanes=0,lg(e,n,r,n.pendingProps);case 24:Xa(n,gn,e.memoizedState.cache)}return ma(e,n,r)}function _g(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!cd(e,r)&&(n.flags&128)===0)return vn=!1,Ty(e,n,r);vn=(e.flags&131072)!==0}else vn=!1,Ee&&(n.flags&1048576)!==0&&Km(n,xo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Lr(n.elementType),n.type=e,typeof e=="function")pf(e)?(o=Pr(e,o),n.tag=1,n=dg(null,n,e,o,r)):(n.tag=0,n=nd(null,n,e,o,r));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=rg(null,n,e,o,r);break t}else if(u===I){n.tag=14,n=sg(null,n,e,o,r);break t}}throw n=W(e)||e,Error(a(306,n,""))}}return n;case 0:return nd(e,n,n.type,n.pendingProps,r);case 1:return o=n.type,u=Pr(o,n.pendingProps),dg(e,n,o,u,r);case 3:t:{if(mt(n,n.stateNode.containerInfo),e===null)throw Error(a(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,wf(e,n),Ro(n,o,null,r);var y=n.memoizedState;if(o=y.cache,Xa(n,gn,o),o!==d.cache&&Ef(n,[gn],r,!0),Ao(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=hg(e,n,o,r);break t}else if(o!==u){u=Si(Error(a(424)),n),So(u),n=hg(e,n,o,r);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Qe=Ti(e.firstChild),wn=n,Ee=!0,Va=null,Ei=!0,r=l0(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Rr(),o===u){n=ma(e,n,r);break t}Ln(e,n,o,r)}n=n.child}return n;case 26:return lc(e,n),e===null?(r=C_(n.type,null,n.pendingProps,null))?n.memoizedState=r:Ee||(r=n.type,e=n.pendingProps,o=Tc(Lt.current).createElement(r),o[hn]=n,o[Cn]=e,Un(o,r,e),pn(o),n.stateNode=o):n.memoizedState=C_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return jt(n),e===null&&Ee&&(o=n.stateNode=T_(n.type,n.pendingProps,Lt.current),wn=n,Ei=!0,u=Qe,ir(n.type)?(Vd=u,Qe=Ti(o.firstChild)):Qe=u),Ln(e,n,n.pendingProps.children,r),lc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((u=o=Qe)&&(o=eM(o,n.type,n.pendingProps,Ei),o!==null?(n.stateNode=o,wn=n,Qe=Ti(o.firstChild),Ei=!1,u=!0):u=!1),u||ka(n)),jt(n),u=n.type,d=n.pendingProps,y=e!==null?e.memoizedProps:null,o=d.children,Bd(u,d)?o=null:y!==null&&Bd(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=If(e,n,gy,null,null,r),Yo._currentValue=u),lc(e,n),Ln(e,n,o,r),n.child;case 6:return e===null&&Ee&&((e=r=Qe)&&(r=nM(r,n.pendingProps,Ei),r!==null?(n.stateNode=r,wn=n,Qe=null,e=!0):e=!1),e||ka(n)),null;case 13:return pg(e,n,r);case 4:return mt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Nr(n,null,o,r):Ln(e,n,o,r),n.child;case 11:return rg(e,n,n.type,n.pendingProps,r);case 7:return Ln(e,n,n.pendingProps,r),n.child;case 8:return Ln(e,n,n.pendingProps.children,r),n.child;case 12:return Ln(e,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,Xa(n,n.type,o.value),Ln(e,n,o.children,r),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,wr(n),u=Dn(u),o=o(u),n.flags|=1,Ln(e,n,o,r),n.child;case 14:return sg(e,n,n.type,n.pendingProps,r);case 15:return og(e,n,n.type,n.pendingProps,r);case 19:return gg(e,n,r);case 31:return by(e,n,r);case 22:return lg(e,n,r,n.pendingProps);case 24:return wr(n),o=Dn(gn),e===null?(u=Af(),u===null&&(u=Ze,d=bf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=r),u=d),n.memoizedState={parent:o,cache:u},Cf(n),Xa(n,gn,u)):((e.lanes&r)!==0&&(wf(e,n),Ro(n,null,null,r),Ao()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Xa(n,gn,o)):(o=d.cache,Xa(n,gn,o),o!==u.cache&&Ef(n,[gn],r,!0))),Ln(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function ga(e){e.flags|=4}function ud(e,n,r,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Xg())e.flags|=8192;else throw Ur=Yl,Rf}else e.flags&=-16777217}function vg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!N_(n))if(Xg())e.flags|=8192;else throw Ur=Yl,Rf}function uc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?bt():536870912,e.lanes|=n,Ms|=n)}function No(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(n)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=r,n}function Ay(e,n,r){var o=n.pendingProps;switch(vf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return r=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),da(gn),At(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(cs(n)?ga(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Sf())),Je(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(ga(n),d!==null?(Je(n),vg(n,d)):(Je(n),ud(n,u,null,o,r))):d?d!==e.memoizedState?(ga(n),Je(n),vg(n,d)):(Je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ga(n),Je(n),ud(n,u,e,o,r)),null;case 27:if(Ft(n),r=Lt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Je(n),null}e=pt.current,cs(n)?Jm(n):(e=T_(u,o,r),n.stateNode=e,ga(n))}return Je(n),null;case 5:if(Ft(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Je(n),null}if(d=pt.current,cs(n))Jm(n);else{var y=Tc(Lt.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}d[hn]=n,d[Cn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;t:switch(Un(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ga(n)}}return Je(n),ud(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,r),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ga(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(e=Lt.current,cs(n)){if(e=n.stateNode,r=n.memoizedProps,o=null,u=wn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[hn]=n,e=!!(e.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||p_(e.nodeValue,r)),e||ka(n,!0)}else e=Tc(e).createTextNode(o),e[hn]=n,n.stateNode=e}return Je(n),null;case 31:if(r=n.memoizedState,e===null||e.memoizedState!==null){if(o=cs(n),r!==null){if(e===null){if(!o)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[hn]=n}else Rr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),e=!1}else r=Sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(a(558))}return Je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=cs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[hn]=n}else Rr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=Sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,e=e!==null&&e.memoizedState!==null,r&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),r!==e&&r&&(n.child.flags|=8192),uc(n,n.updateQueue),Je(n),null);case 4:return At(),e===null&&Ud(n.stateNode.containerInfo),Je(n),null;case 10:return da(n.type),Je(n),null;case 19:if(G(fn),o=n.memoizedState,o===null)return Je(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)No(o,!1);else{if(ln!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Jl(e),d!==null){for(n.flags|=128,No(o,!1),e=d.updateQueue,n.updateQueue=e,uc(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)qm(r,e),r=r.sibling;return rt(fn,fn.current&1|2),Ee&&ua(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Pe()>mc&&(n.flags|=128,u=!0,No(o,!1),n.lanes=4194304)}else{if(!u)if(e=Jl(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,uc(n,e),No(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Ee)return Je(n),null}else 2*Pe()-o.renderingStartTime>mc&&r!==536870912&&(n.flags|=128,u=!0,No(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Pe(),e.sibling=null,r=fn.current,rt(fn,u?r&1|2:r&1),Ee&&ua(n,o.treeForkCount),e):(Je(n),null);case 22:case 23:return si(n),Nf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),r=n.updateQueue,r!==null&&uc(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),e!==null&&G(Dr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),da(gn),Je(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function Ry(e,n){switch(vf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return da(gn),At(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ft(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(a(340));Rr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(si(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Rr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G(fn),null;case 4:return At(),null;case 10:return da(n.type),null;case 22:case 23:return si(n),Nf(),e!==null&&G(Dr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return da(gn),null;case 25:return null;default:return null}}function xg(e,n){switch(vf(n),n.tag){case 3:da(gn),At();break;case 26:case 27:case 5:Ft(n);break;case 4:At();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:G(fn);break;case 10:da(n.type);break;case 22:case 23:si(n),Nf(),e!==null&&G(Dr);break;case 24:da(gn)}}function Oo(e,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&e)===e){o=void 0;var d=r.create,y=r.inst;o=d(),y.destroy=o}r=r.next}while(r!==u)}}catch(C){Be(n,n.return,C)}}function Qa(e,n,r){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var y=o.inst,C=y.destroy;if(C!==void 0){y.destroy=void 0,u=n;var F=r,ot=C;try{ot()}catch(St){Be(u,F,St)}}}o=o.next}while(o!==d)}}catch(St){Be(n,n.return,St)}}function Sg(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{u0(n,r)}catch(o){Be(e,e.return,o)}}}function yg(e,n,r){r.props=Pr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(o){Be(e,n,o)}}function Po(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof r=="function"?e.refCleanup=r(o):r.current=o}}catch(u){Be(e,n,u)}}function qi(e,n){var r=e.ref,o=e.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Be(e,n,u)}else r.current=null}function Mg(e){var n=e.type,r=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break t;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){Be(e,e.return,u)}}function fd(e,n,r){try{var o=e.stateNode;Ky(o,e.type,r,n),o[Cn]=n}catch(u){Be(e,e.return,u)}}function Eg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ir(e.type)||e.tag===4}function dd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Eg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ir(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hd(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(e),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=vi));else if(o!==4&&(o===27&&ir(e.type)&&(r=e.stateNode,n=null),e=e.child,e!==null))for(hd(e,n,r),e=e.sibling;e!==null;)hd(e,n,r),e=e.sibling}function fc(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(o!==4&&(o===27&&ir(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(fc(e,n,r),e=e.sibling;e!==null;)fc(e,n,r),e=e.sibling}function bg(e){var n=e.stateNode,r=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,o,r),n[hn]=e,n[Cn]=r}catch(d){Be(e,e.return,d)}}var _a=!1,xn=!1,pd=!1,Tg=typeof WeakSet=="function"?WeakSet:Set,An=null;function Cy(e,n){if(e=e.containerInfo,Pd=Uc,e=Bm(e),of(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break t}var y=0,C=-1,F=-1,ot=0,St=0,Et=e,ut=null;e:for(;;){for(var ht;Et!==r||u!==0&&Et.nodeType!==3||(C=y+u),Et!==d||o!==0&&Et.nodeType!==3||(F=y+o),Et.nodeType===3&&(y+=Et.nodeValue.length),(ht=Et.firstChild)!==null;)ut=Et,Et=ht;for(;;){if(Et===e)break e;if(ut===r&&++ot===u&&(C=y),ut===d&&++St===o&&(F=y),(ht=Et.nextSibling)!==null)break;Et=ut,ut=Et.parentNode}Et=ht}r=C===-1||F===-1?null:{start:C,end:F}}else r=null}r=r||{start:0,end:0}}else r=null;for(Id={focusedElem:e,selectionRange:r},Uc=!1,An=n;An!==null;)if(n=An,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,An=e;else for(;An!==null;){switch(n=An,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)u=e[r],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,r=n,u=d.memoizedProps,d=d.memoizedState,o=r.stateNode;try{var Zt=Pr(r.type,u);e=o.getSnapshotBeforeUpdate(Zt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Be(r,r.return,ee)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)Fd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Fd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,An=e;break}An=n.return}}function Ag(e,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:xa(e,r),o&4&&Oo(5,r);break;case 1:if(xa(e,r),o&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(y){Be(r,r.return,y)}else{var u=Pr(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Be(r,r.return,y)}}o&64&&Sg(r),o&512&&Po(r,r.return);break;case 3:if(xa(e,r),o&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{u0(e,n)}catch(y){Be(r,r.return,y)}}break;case 27:n===null&&o&4&&bg(r);case 26:case 5:xa(e,r),n===null&&o&4&&Mg(r),o&512&&Po(r,r.return);break;case 12:xa(e,r);break;case 31:xa(e,r),o&4&&wg(e,r);break;case 13:xa(e,r),o&4&&Dg(e,r),o&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=By.bind(null,r),iM(e,r))));break;case 22:if(o=r.memoizedState!==null||_a,!o){n=n!==null&&n.memoizedState!==null||xn,u=_a;var d=xn;_a=o,(xn=n)&&!d?Sa(e,r,(r.subtreeFlags&8772)!==0):xa(e,r),_a=u,xn=d}break;case 30:break;default:xa(e,r)}}function Rg(e){var n=e.alternate;n!==null&&(e.alternate=null,Rg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ba(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,Kn=!1;function va(e,n,r){for(r=r.child;r!==null;)Cg(e,n,r),r=r.sibling}function Cg(e,n,r){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(_t,r)}catch{}switch(r.tag){case 26:xn||qi(r,n),va(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:xn||qi(r,n);var o=tn,u=Kn;ir(r.type)&&(tn=r.stateNode,Kn=!1),va(e,n,r),Xo(r.stateNode),tn=o,Kn=u;break;case 5:xn||qi(r,n);case 6:if(o=tn,u=Kn,tn=null,va(e,n,r),tn=o,Kn=u,tn!==null)if(Kn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(r.stateNode)}catch(d){Be(r,n,d)}else try{tn.removeChild(r.stateNode)}catch(d){Be(r,n,d)}break;case 18:tn!==null&&(Kn?(e=tn,S_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Ds(e)):S_(tn,r.stateNode));break;case 4:o=tn,u=Kn,tn=r.stateNode.containerInfo,Kn=!0,va(e,n,r),tn=o,Kn=u;break;case 0:case 11:case 14:case 15:Qa(2,r,n),xn||Qa(4,r,n),va(e,n,r);break;case 1:xn||(qi(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&yg(r,n,o)),va(e,n,r);break;case 21:va(e,n,r);break;case 22:xn=(o=xn)||r.memoizedState!==null,va(e,n,r),xn=o;break;default:va(e,n,r)}}function wg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ds(e)}catch(r){Be(n,n.return,r)}}}function Dg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ds(e)}catch(r){Be(n,n.return,r)}}function wy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Tg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Tg),n;default:throw Error(a(435,e.tag))}}function dc(e,n){var r=wy(e);n.forEach(function(o){if(!r.has(o)){r.add(o);var u=zy.bind(null,e,o);o.then(u,u)}})}function Qn(e,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],d=e,y=n,C=y;t:for(;C!==null;){switch(C.tag){case 27:if(ir(C.type)){tn=C.stateNode,Kn=!1;break t}break;case 5:tn=C.stateNode,Kn=!1;break t;case 3:case 4:tn=C.stateNode.containerInfo,Kn=!0;break t}C=C.return}if(tn===null)throw Error(a(160));Cg(d,y,u),tn=null,Kn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Lg(n,e),n=n.sibling}var Ui=null;function Lg(e,n){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qn(n,e),Jn(e),o&4&&(Qa(3,e,e.return),Oo(3,e),Qa(5,e,e.return));break;case 1:Qn(n,e),Jn(e),o&512&&(xn||r===null||qi(r,r.return)),o&64&&_a&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=Ui;if(Qn(n,e),Jn(e),o&512&&(xn||r===null||qi(r,r.return)),o&4){var d=r!==null?r.memoizedState:null;if(o=e.memoizedState,r===null)if(o===null)if(e.stateNode===null){t:{o=e.type,r=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ia]||d[hn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Un(d,o,r),d[hn]=e,pn(d),o=d;break t;case"link":var y=L_("link","href",u).get(o+(r.href||""));if(y){for(var C=0;C<y.length;C++)if(d=y[C],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(C,1);break e}}d=u.createElement(o),Un(d,o,r),u.head.appendChild(d);break;case"meta":if(y=L_("meta","content",u).get(o+(r.content||""))){for(C=0;C<y.length;C++)if(d=y[C],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(C,1);break e}}d=u.createElement(o),Un(d,o,r),u.head.appendChild(d);break;default:throw Error(a(468,o))}d[hn]=e,pn(d),o=d}e.stateNode=o}else U_(u,e.type,e.stateNode);else e.stateNode=D_(u,o,e.memoizedProps);else d!==o?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,o===null?U_(u,e.type,e.stateNode):D_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&fd(e,e.memoizedProps,r.memoizedProps)}break;case 27:Qn(n,e),Jn(e),o&512&&(xn||r===null||qi(r,r.return)),r!==null&&o&4&&fd(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Qn(n,e),Jn(e),o&512&&(xn||r===null||qi(r,r.return)),e.flags&32){u=e.stateNode;try{Vn(u,"")}catch(Zt){Be(e,e.return,Zt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,fd(e,u,r!==null?r.memoizedProps:u)),o&1024&&(pd=!0);break;case 6:if(Qn(n,e),Jn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,r=e.stateNode;try{r.nodeValue=o}catch(Zt){Be(e,e.return,Zt)}}break;case 3:if(Cc=null,u=Ui,Ui=Ac(n.containerInfo),Qn(n,e),Ui=u,Jn(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Ds(n.containerInfo)}catch(Zt){Be(e,e.return,Zt)}pd&&(pd=!1,Ug(e));break;case 4:o=Ui,Ui=Ac(e.stateNode.containerInfo),Qn(n,e),Jn(e),Ui=o;break;case 12:Qn(n,e),Jn(e);break;case 31:Qn(n,e),Jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,dc(e,o)));break;case 13:Qn(n,e),Jn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(pc=Pe()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,dc(e,o)));break;case 22:u=e.memoizedState!==null;var F=r!==null&&r.memoizedState!==null,ot=_a,St=xn;if(_a=ot||u,xn=St||F,Qn(n,e),xn=St,_a=ot,Jn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||F||_a||xn||Ir(e)),r=null,n=e;;){if(n.tag===5||n.tag===26){if(r===null){F=r=n;try{if(d=F.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{C=F.stateNode;var Et=F.memoizedProps.style,ut=Et!=null&&Et.hasOwnProperty("display")?Et.display:null;C.style.display=ut==null||typeof ut=="boolean"?"":(""+ut).trim()}}catch(Zt){Be(F,F.return,Zt)}}}else if(n.tag===6){if(r===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(Zt){Be(F,F.return,Zt)}}}else if(n.tag===18){if(r===null){F=n;try{var ht=F.stateNode;u?y_(ht,!0):y_(F.stateNode,!1)}catch(Zt){Be(F,F.return,Zt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,dc(e,r))));break;case 19:Qn(n,e),Jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,dc(e,o)));break;case 30:break;case 21:break;default:Qn(n,e),Jn(e)}}function Jn(e){var n=e.flags;if(n&2){try{for(var r,o=e.return;o!==null;){if(Eg(o)){r=o;break}o=o.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var u=r.stateNode,d=dd(e);fc(e,d,u);break;case 5:var y=r.stateNode;r.flags&32&&(Vn(y,""),r.flags&=-33);var C=dd(e);fc(e,C,y);break;case 3:case 4:var F=r.stateNode.containerInfo,ot=dd(e);hd(e,ot,F);break;default:throw Error(a(161))}}catch(St){Be(e,e.return,St)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ug(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ug(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function xa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ag(e,n.alternate,n),n=n.sibling}function Ir(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Qa(4,n,n.return),Ir(n);break;case 1:qi(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&yg(n,n.return,r),Ir(n);break;case 27:Xo(n.stateNode);case 26:case 5:qi(n,n.return),Ir(n);break;case 22:n.memoizedState===null&&Ir(n);break;case 30:Ir(n);break;default:Ir(n)}e=e.sibling}}function Sa(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:Sa(u,d,r),Oo(4,d);break;case 1:if(Sa(u,d,r),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ot){Be(o,o.return,ot)}if(o=d,u=o.updateQueue,u!==null){var C=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)c0(F[u],C)}catch(ot){Be(o,o.return,ot)}}r&&y&64&&Sg(d),Po(d,d.return);break;case 27:bg(d);case 26:case 5:Sa(u,d,r),r&&o===null&&y&4&&Mg(d),Po(d,d.return);break;case 12:Sa(u,d,r);break;case 31:Sa(u,d,r),r&&y&4&&wg(u,d);break;case 13:Sa(u,d,r),r&&y&4&&Dg(u,d);break;case 22:d.memoizedState===null&&Sa(u,d,r),Po(d,d.return);break;case 30:break;default:Sa(u,d,r)}n=n.sibling}}function md(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&yo(r))}function gd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&yo(e))}function Ni(e,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ng(e,n,r,o),n=n.sibling}function Ng(e,n,r,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(e,n,r,o),u&2048&&Oo(9,n);break;case 1:Ni(e,n,r,o);break;case 3:Ni(e,n,r,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&yo(e)));break;case 12:if(u&2048){Ni(e,n,r,o),e=n.stateNode;try{var d=n.memoizedProps,y=d.id,C=d.onPostCommit;typeof C=="function"&&C(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Be(n,n.return,F)}}else Ni(e,n,r,o);break;case 31:Ni(e,n,r,o);break;case 13:Ni(e,n,r,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?Ni(e,n,r,o):Io(e,n):d._visibility&2?Ni(e,n,r,o):(d._visibility|=2,xs(e,n,r,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&md(y,n);break;case 24:Ni(e,n,r,o),u&2048&&gd(n.alternate,n);break;default:Ni(e,n,r,o)}}function xs(e,n,r,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,y=n,C=r,F=o,ot=y.flags;switch(y.tag){case 0:case 11:case 15:xs(d,y,C,F,u),Oo(8,y);break;case 23:break;case 22:var St=y.stateNode;y.memoizedState!==null?St._visibility&2?xs(d,y,C,F,u):Io(d,y):(St._visibility|=2,xs(d,y,C,F,u)),u&&ot&2048&&md(y.alternate,y);break;case 24:xs(d,y,C,F,u),u&&ot&2048&&gd(y.alternate,y);break;default:xs(d,y,C,F,u)}n=n.sibling}}function Io(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,o=n,u=o.flags;switch(o.tag){case 22:Io(r,o),u&2048&&md(o.alternate,o);break;case 24:Io(r,o),u&2048&&gd(o.alternate,o);break;default:Io(r,o)}n=n.sibling}}var Bo=8192;function Ss(e,n,r){if(e.subtreeFlags&Bo)for(e=e.child;e!==null;)Og(e,n,r),e=e.sibling}function Og(e,n,r){switch(e.tag){case 26:Ss(e,n,r),e.flags&Bo&&e.memoizedState!==null&&mM(r,Ui,e.memoizedState,e.memoizedProps);break;case 5:Ss(e,n,r);break;case 3:case 4:var o=Ui;Ui=Ac(e.stateNode.containerInfo),Ss(e,n,r),Ui=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Bo,Bo=16777216,Ss(e,n,r),Bo=o):Ss(e,n,r));break;default:Ss(e,n,r)}}function Pg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function zo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];An=o,Bg(o,e)}Pg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ig(e),e=e.sibling}function Ig(e){switch(e.tag){case 0:case 11:case 15:zo(e),e.flags&2048&&Qa(9,e,e.return);break;case 3:zo(e);break;case 12:zo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,hc(e)):zo(e);break;default:zo(e)}}function hc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];An=o,Bg(o,e)}Pg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Qa(8,n,n.return),hc(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,hc(n));break;default:hc(n)}e=e.sibling}}function Bg(e,n){for(;An!==null;){var r=An;switch(r.tag){case 0:case 11:case 15:Qa(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:yo(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,An=o;else t:for(r=e;An!==null;){o=An;var u=o.sibling,d=o.return;if(Rg(o),o===r){An=null;break t}if(u!==null){u.return=d,An=u;break t}An=d}}}var Dy={getCacheForType:function(e){var n=Dn(gn),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r},cacheSignal:function(){return Dn(gn).controller.signal}},Ly=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Ze=null,_e=null,Se=0,Ie=0,oi=null,Ja=!1,ys=!1,_d=!1,ya=0,ln=0,ja=0,Br=0,vd=0,li=0,Ms=0,Fo=null,jn=null,xd=!1,pc=0,zg=0,mc=1/0,gc=null,$a=null,Mn=0,tr=null,Es=null,Ma=0,Sd=0,yd=null,Fg=null,Ho=0,Md=null;function ci(){return(Ne&2)!==0&&Se!==0?Se&-Se:B.T!==null?Cd():oo()}function Hg(){if(li===0)if((Se&536870912)===0||Ee){var e=ie;ie<<=1,(ie&3932160)===0&&(ie=262144),li=e}else li=536870912;return e=ri.current,e!==null&&(e.flags|=32),li}function $n(e,n,r){(e===Ze&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(bs(e,0),er(e,Se,li,!1)),qt(e,r),((Ne&2)===0||e!==Ze)&&(e===Ze&&((Ne&2)===0&&(Br|=r),ln===4&&er(e,Se,li,!1)),Yi(e))}function Gg(e,n,r){if((Ne&6)!==0)throw Error(a(327));var o=!r&&(n&127)===0&&(n&e.expiredLanes)===0||Dt(e,n),u=o?Oy(e,n):bd(e,n,!0),d=o;do{if(u===0){ys&&!o&&er(e,n,0,!1);break}else{if(r=e.current.alternate,d&&!Uy(r)){u=bd(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var C=e;u=Fo;var F=C.current.memoizedState.isDehydrated;if(F&&(bs(C,y).flags|=256),y=bd(C,y,!1),y!==2){if(_d&&!F){C.errorRecoveryDisabledLanes|=d,Br|=d,u=4;break t}d=jn,jn=u,d!==null&&(jn===null?jn=d:jn.push.apply(jn,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){bs(e,0),er(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:er(o,n,li,!Ja);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=pc+300-Pe(),10<u)){if(er(o,n,li,!Ja),yt(o,0,!0)!==0)break t;Ma=n,o.timeoutHandle=v_(Vg.bind(null,o,r,jn,gc,xd,n,li,Br,Ms,Ja,d,"Throttled",-0,0),u);break t}Vg(o,r,jn,gc,xd,n,li,Br,Ms,Ja,d,null,-0,0)}}break}while(!0);Yi(e)}function Vg(e,n,r,o,u,d,y,C,F,ot,St,Et,ut,ht){if(e.timeoutHandle=-1,Et=n.subtreeFlags,Et&8192||(Et&16785408)===16785408){Et={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:vi},Og(n,d,Et);var Zt=(d&62914560)===d?pc-Pe():(d&4194048)===d?zg-Pe():0;if(Zt=gM(Et,Zt),Zt!==null){Ma=d,e.cancelPendingCommit=Zt(Qg.bind(null,e,n,d,r,o,u,y,C,F,St,Et,null,ut,ht)),er(e,d,y,!ot);return}}Qg(e,n,d,r,o,u,y,C,F)}function Uy(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],d=u.getSnapshot;u=u.value;try{if(!ii(d(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function er(e,n,r,o){n&=~vd,n&=~Br,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-kt(u),y=1<<d;o[d]=-1,u&=~y}r!==0&&Re(e,r,n)}function _c(){return(Ne&6)===0?(Go(0),!1):!0}function Ed(){if(_e!==null){if(Ie===0)var e=_e.return;else e=_e,fa=Cr=null,Ff(e),ps=null,Eo=0,e=_e;for(;e!==null;)xg(e.alternate,e),e=e.return;_e=null}}function bs(e,n){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,jy(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Ma=0,Ed(),Ze=e,_e=r=ca(e.current,null),Se=n,Ie=0,oi=null,Ja=!1,ys=Dt(e,n),_d=!1,Ms=li=vd=Br=ja=ln=0,jn=Fo=null,xd=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-kt(o),d=1<<u;n|=e[u],o&=~d}return ya=n,zl(),r}function kg(e,n){ue=null,B.H=Lo,n===hs||n===ql?(n=r0(),Ie=3):n===Rf?(n=r0(),Ie=4):Ie=n===ed?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,_e===null&&(ln=1,sc(e,Si(n,e.current)))}function Xg(){var e=ri.current;return e===null?!0:(Se&4194048)===Se?bi===null:(Se&62914560)===Se||(Se&536870912)!==0?e===bi:!1}function Wg(){var e=B.H;return B.H=Lo,e===null?Lo:e}function qg(){var e=B.A;return B.A=Dy,e}function vc(){ln=4,Ja||(Se&4194048)!==Se&&ri.current!==null||(ys=!0),(ja&134217727)===0&&(Br&134217727)===0||Ze===null||er(Ze,Se,li,!1)}function bd(e,n,r){var o=Ne;Ne|=2;var u=Wg(),d=qg();(Ze!==e||Se!==n)&&(gc=null,bs(e,n)),n=!1;var y=ln;t:do try{if(Ie!==0&&_e!==null){var C=_e,F=oi;switch(Ie){case 8:Ed(),y=6;break t;case 3:case 2:case 9:case 6:ri.current===null&&(n=!0);var ot=Ie;if(Ie=0,oi=null,Ts(e,C,F,ot),r&&ys){y=0;break t}break;default:ot=Ie,Ie=0,oi=null,Ts(e,C,F,ot)}}Ny(),y=ln;break}catch(St){kg(e,St)}while(!0);return n&&e.shellSuspendCounter++,fa=Cr=null,Ne=o,B.H=u,B.A=d,_e===null&&(Ze=null,Se=0,zl()),y}function Ny(){for(;_e!==null;)Yg(_e)}function Oy(e,n){var r=Ne;Ne|=2;var o=Wg(),u=qg();Ze!==e||Se!==n?(gc=null,mc=Pe()+500,bs(e,n)):ys=Dt(e,n);t:do try{if(Ie!==0&&_e!==null){n=_e;var d=oi;e:switch(Ie){case 1:Ie=0,oi=null,Ts(e,n,d,1);break;case 2:case 9:if(i0(d)){Ie=0,oi=null,Zg(n);break}n=function(){Ie!==2&&Ie!==9||Ze!==e||(Ie=7),Yi(e)},d.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:i0(d)?(Ie=0,oi=null,Zg(n)):(Ie=0,oi=null,Ts(e,n,d,7));break;case 5:var y=null;switch(_e.tag){case 26:y=_e.memoizedState;case 5:case 27:var C=_e;if(y?N_(y):C.stateNode.complete){Ie=0,oi=null;var F=C.sibling;if(F!==null)_e=F;else{var ot=C.return;ot!==null?(_e=ot,xc(ot)):_e=null}break e}}Ie=0,oi=null,Ts(e,n,d,5);break;case 6:Ie=0,oi=null,Ts(e,n,d,6);break;case 8:Ed(),ln=6;break t;default:throw Error(a(462))}}Py();break}catch(St){kg(e,St)}while(!0);return fa=Cr=null,B.H=o,B.A=u,Ne=r,_e!==null?0:(Ze=null,Se=0,zl(),ln)}function Py(){for(;_e!==null&&!sn();)Yg(_e)}function Yg(e){var n=_g(e.alternate,e,ya);e.memoizedProps=e.pendingProps,n===null?xc(e):_e=n}function Zg(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=fg(r,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=fg(r,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Ff(n);default:xg(r,n),n=_e=qm(n,ya),n=_g(r,n,ya)}e.memoizedProps=e.pendingProps,n===null?xc(e):_e=n}function Ts(e,n,r,o){fa=Cr=null,Ff(n),ps=null,Eo=0;var u=n.return;try{if(Ey(e,u,n,r,Se)){ln=1,sc(e,Si(r,e.current)),_e=null;return}}catch(d){if(u!==null)throw _e=u,d;ln=1,sc(e,Si(r,e.current)),_e=null;return}n.flags&32768?(Ee||o===1?e=!0:ys||(Se&536870912)!==0?e=!1:(Ja=e=!0,(o===2||o===9||o===3||o===6)&&(o=ri.current,o!==null&&o.tag===13&&(o.flags|=16384))),Kg(n,e)):xc(n)}function xc(e){var n=e;do{if((n.flags&32768)!==0){Kg(n,Ja);return}e=n.return;var r=Ay(n.alternate,n,ya);if(r!==null){_e=r;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);ln===0&&(ln=5)}function Kg(e,n){do{var r=Ry(e.alternate,e);if(r!==null){r.flags&=32767,_e=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=r}while(e!==null);ln=6,_e=null}function Qg(e,n,r,o,u,d,y,C,F){e.cancelPendingCommit=null;do Sc();while(Mn!==0);if((Ne&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(d=n.lanes|n.childLanes,d|=df,He(e,r,d,y,C,F),e===Ze&&(_e=Ze=null,Se=0),Es=n,tr=e,Ma=r,Sd=d,yd=u,Fg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Fy($,function(){return e_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=H.p,H.p=2,y=Ne,Ne|=4;try{Cy(e,n,r)}finally{Ne=y,H.p=u,B.T=o}}Mn=1,Jg(),jg(),$g()}}function Jg(){if(Mn===1){Mn=0;var e=tr,n=Es,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=B.T,B.T=null;var o=H.p;H.p=2;var u=Ne;Ne|=4;try{Lg(n,e);var d=Id,y=Bm(e.containerInfo),C=d.focusedElem,F=d.selectionRange;if(y!==C&&C&&C.ownerDocument&&Im(C.ownerDocument.documentElement,C)){if(F!==null&&of(C)){var ot=F.start,St=F.end;if(St===void 0&&(St=ot),"selectionStart"in C)C.selectionStart=ot,C.selectionEnd=Math.min(St,C.value.length);else{var Et=C.ownerDocument||document,ut=Et&&Et.defaultView||window;if(ut.getSelection){var ht=ut.getSelection(),Zt=C.textContent.length,ee=Math.min(F.start,Zt),Xe=F.end===void 0?ee:Math.min(F.end,Zt);!ht.extend&&ee>Xe&&(y=Xe,Xe=ee,ee=y);var j=Pm(C,ee),X=Pm(C,Xe);if(j&&X&&(ht.rangeCount!==1||ht.anchorNode!==j.node||ht.anchorOffset!==j.offset||ht.focusNode!==X.node||ht.focusOffset!==X.offset)){var st=Et.createRange();st.setStart(j.node,j.offset),ht.removeAllRanges(),ee>Xe?(ht.addRange(st),ht.extend(X.node,X.offset)):(st.setEnd(X.node,X.offset),ht.addRange(st))}}}}for(Et=[],ht=C;ht=ht.parentNode;)ht.nodeType===1&&Et.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Et.length;C++){var Mt=Et[C];Mt.element.scrollLeft=Mt.left,Mt.element.scrollTop=Mt.top}}Uc=!!Pd,Id=Pd=null}finally{Ne=u,H.p=o,B.T=r}}e.current=n,Mn=2}}function jg(){if(Mn===2){Mn=0;var e=tr,n=Es,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=B.T,B.T=null;var o=H.p;H.p=2;var u=Ne;Ne|=4;try{Ag(e,n.alternate,n)}finally{Ne=u,H.p=o,B.T=r}}Mn=3}}function $g(){if(Mn===4||Mn===3){Mn=0,Z();var e=tr,n=Es,r=Ma,o=Fg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,Es=tr=null,t_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&($a=null),so(r),n=n.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(_t,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=H.p,H.p=2,B.T=null;try{for(var d=e.onRecoverableError,y=0;y<o.length;y++){var C=o[y];d(C.value,{componentStack:C.stack})}}finally{B.T=n,H.p=u}}(Ma&3)!==0&&Sc(),Yi(e),u=e.pendingLanes,(r&261930)!==0&&(u&42)!==0?e===Md?Ho++:(Ho=0,Md=e):Ho=0,Go(0)}}function t_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,yo(n)))}function Sc(){return Jg(),jg(),$g(),e_()}function e_(){if(Mn!==5)return!1;var e=tr,n=Sd;Sd=0;var r=so(Ma),o=B.T,u=H.p;try{H.p=32>r?32:r,B.T=null,r=yd,yd=null;var d=tr,y=Ma;if(Mn=0,Es=tr=null,Ma=0,(Ne&6)!==0)throw Error(a(331));var C=Ne;if(Ne|=4,Ig(d.current),Ng(d,d.current,y,r),Ne=C,Go(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(_t,d)}catch{}return!0}finally{H.p=u,B.T=o,t_(e,n)}}function n_(e,n,r){n=Si(r,n),n=td(e.stateNode,n,2),e=Ya(e,n,2),e!==null&&(qt(e,2),Yi(e))}function Be(e,n,r){if(e.tag===3)n_(e,e,r);else for(;n!==null;){if(n.tag===3){n_(n,e,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&($a===null||!$a.has(o))){e=Si(r,e),r=ig(2),o=Ya(n,r,2),o!==null&&(ag(r,o,n,e),qt(o,2),Yi(o));break}}n=n.return}}function Td(e,n,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Ly;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(r)||(_d=!0,u.add(r),e=Iy.bind(null,e,n,r),n.then(e,e))}function Iy(e,n,r){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ze===e&&(Se&r)===r&&(ln===4||ln===3&&(Se&62914560)===Se&&300>Pe()-pc?(Ne&2)===0&&bs(e,0):vd|=r,Ms===Se&&(Ms=0)),Yi(e)}function i_(e,n){n===0&&(n=bt()),e=Tr(e,n),e!==null&&(qt(e,n),Yi(e))}function By(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),i_(e,r)}function zy(e,n){var r=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),i_(e,r)}function Fy(e,n){return Tn(e,n)}var yc=null,As=null,Ad=!1,Mc=!1,Rd=!1,nr=0;function Yi(e){e!==As&&e.next===null&&(As===null?yc=As=e:As=As.next=e),Mc=!0,Ad||(Ad=!0,Gy())}function Go(e,n){if(!Rd&&Mc){Rd=!0;do for(var r=!1,o=yc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,C=o.pingedLanes;d=(1<<31-kt(42|e)+1)-1,d&=u&~(y&~C),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,o_(o,d))}else d=Se,d=yt(o,o===Ze?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Dt(o,d)||(r=!0,o_(o,d));o=o.next}while(r);Rd=!1}}function Hy(){a_()}function a_(){Mc=Ad=!1;var e=0;nr!==0&&Jy()&&(e=nr);for(var n=Pe(),r=null,o=yc;o!==null;){var u=o.next,d=r_(o,n);d===0?(o.next=null,r===null?yc=u:r.next=u,u===null&&(As=r)):(r=o,(e!==0||(d&3)!==0)&&(Mc=!0)),o=u}Mn!==0&&Mn!==5||Go(e),nr!==0&&(nr=0)}function r_(e,n){for(var r=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var y=31-kt(d),C=1<<y,F=u[y];F===-1?((C&r)===0||(C&o)!==0)&&(u[y]=Ht(C,n)):F<=n&&(e.expiredLanes|=C),d&=~C}if(n=Ze,r=Se,r=yt(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,r===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&qe(o),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Dt(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(o!==null&&qe(o),so(r)){case 2:case 8:r=E;break;case 32:r=$;break;case 268435456:r=gt;break;default:r=$}return o=s_.bind(null,e),r=Tn(r,o),e.callbackPriority=n,e.callbackNode=r,n}return o!==null&&o!==null&&qe(o),e.callbackPriority=2,e.callbackNode=null,2}function s_(e,n){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Sc()&&e.callbackNode!==r)return null;var o=Se;return o=yt(e,e===Ze?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Gg(e,o,n),r_(e,Pe()),e.callbackNode!=null&&e.callbackNode===r?s_.bind(null,e):null)}function o_(e,n){if(Sc())return null;Gg(e,n,!0)}function Gy(){$y(function(){(Ne&6)!==0?Tn(P,Hy):a_()})}function Cd(){if(nr===0){var e=fs;e===0&&(e=$t,$t<<=1,($t&261888)===0&&($t=256)),nr=e}return nr}function l_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Di(""+e)}function c_(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function Vy(e,n,r,o,u){if(n==="submit"&&r&&r.stateNode===u){var d=l_((u[Cn]||null).action),y=o.submitter;y&&(n=(n=y[Cn]||null)?l_(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var C=new Ol("action","action",null,o,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(nr!==0){var F=y?c_(u,y):new FormData(u);Zf(r,{pending:!0,data:F,method:u.method,action:d},null,F)}}else typeof d=="function"&&(C.preventDefault(),F=y?c_(u,y):new FormData(u),Zf(r,{pending:!0,data:F,method:u.method,action:d},d,F))},currentTarget:u}]})}}for(var wd=0;wd<ff.length;wd++){var Dd=ff[wd],ky=Dd.toLowerCase(),Xy=Dd[0].toUpperCase()+Dd.slice(1);Li(ky,"on"+Xy)}Li(Hm,"onAnimationEnd"),Li(Gm,"onAnimationIteration"),Li(Vm,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(sy,"onTransitionRun"),Li(oy,"onTransitionStart"),Li(ly,"onTransitionCancel"),Li(km,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function u_(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var C=o[y],F=C.instance,ot=C.currentTarget;if(C=C.listener,F!==d&&u.isPropagationStopped())break t;d=C,u.currentTarget=ot;try{d(u)}catch(St){Bl(St)}u.currentTarget=null,d=F}else for(y=0;y<o.length;y++){if(C=o[y],F=C.instance,ot=C.currentTarget,C=C.listener,F!==d&&u.isPropagationStopped())break t;d=C,u.currentTarget=ot;try{d(u)}catch(St){Bl(St)}u.currentTarget=null,d=F}}}}function ve(e,n){var r=n[xr];r===void 0&&(r=n[xr]=new Set);var o=e+"__bubble";r.has(o)||(f_(n,e,2,!1),r.add(o))}function Ld(e,n,r){var o=0;n&&(o|=4),f_(r,e,o,n)}var Ec="_reactListening"+Math.random().toString(36).slice(2);function Ud(e){if(!e[Ec]){e[Ec]=!0,Dl.forEach(function(r){r!=="selectionchange"&&(Wy.has(r)||Ld(r,!1,e),Ld(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ec]||(n[Ec]=!0,Ld("selectionchange",!1,n))}}function f_(e,n,r,o){switch(H_(n)){case 2:var u=xM;break;case 8:u=SM;break;default:u=Yd}r=u.bind(null,n,r,e),u=void 0,!Ju||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,r,{capture:!0,passive:u}):e.addEventListener(n,r,!0):u!==void 0?e.addEventListener(n,r,{passive:u}):e.addEventListener(n,r,!1)}function Nd(e,n,r,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var C=o.stateNode.containerInfo;if(C===u)break;if(y===4)for(y=o.return;y!==null;){var F=y.tag;if((F===3||F===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;C!==null;){if(y=sa(C),y===null)return;if(F=y.tag,F===5||F===6||F===26||F===27){o=d=y;continue t}C=C.parentNode}}o=o.return}gm(function(){var ot=d,St=Ku(r),Et=[];t:{var ut=Xm.get(e);if(ut!==void 0){var ht=Ol,Zt=e;switch(e){case"keypress":if(Ul(r)===0)break t;case"keydown":case"keyup":ht=zS;break;case"focusin":Zt="focus",ht=ef;break;case"focusout":Zt="blur",ht=ef;break;case"beforeblur":case"afterblur":ht=ef;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=AS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=GS;break;case Hm:case Gm:case Vm:ht=wS;break;case km:ht=kS;break;case"scroll":case"scrollend":ht=bS;break;case"wheel":ht=WS;break;case"copy":case"cut":case"paste":ht=LS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=ym;break;case"toggle":case"beforetoggle":ht=YS}var ee=(n&4)!==0,Xe=!ee&&(e==="scroll"||e==="scrollend"),j=ee?ut!==null?ut+"Capture":null:ut;ee=[];for(var X=ot,st;X!==null;){var Mt=X;if(st=Mt.stateNode,Mt=Mt.tag,Mt!==5&&Mt!==26&&Mt!==27||st===null||j===null||(Mt=co(X,j),Mt!=null&&ee.push(ko(X,Mt,st))),Xe)break;X=X.return}0<ee.length&&(ut=new ht(ut,Zt,null,r,St),Et.push({event:ut,listeners:ee}))}}if((n&7)===0){t:{if(ut=e==="mouseover"||e==="pointerover",ht=e==="mouseout"||e==="pointerout",ut&&r!==Zu&&(Zt=r.relatedTarget||r.fromElement)&&(sa(Zt)||Zt[Yn]))break t;if((ht||ut)&&(ut=St.window===St?St:(ut=St.ownerDocument)?ut.defaultView||ut.parentWindow:window,ht?(Zt=r.relatedTarget||r.toElement,ht=ot,Zt=Zt?sa(Zt):null,Zt!==null&&(Xe=c(Zt),ee=Zt.tag,Zt!==Xe||ee!==5&&ee!==27&&ee!==6)&&(Zt=null)):(ht=null,Zt=ot),ht!==Zt)){if(ee=xm,Mt="onMouseLeave",j="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ee=ym,Mt="onPointerLeave",j="onPointerEnter",X="pointer"),Xe=ht==null?ut:yr(ht),st=Zt==null?ut:yr(Zt),ut=new ee(Mt,X+"leave",ht,r,St),ut.target=Xe,ut.relatedTarget=st,Mt=null,sa(St)===ot&&(ee=new ee(j,X+"enter",Zt,r,St),ee.target=st,ee.relatedTarget=Xe,Mt=ee),Xe=Mt,ht&&Zt)e:{for(ee=qy,j=ht,X=Zt,st=0,Mt=j;Mt;Mt=ee(Mt))st++;Mt=0;for(var te=X;te;te=ee(te))Mt++;for(;0<st-Mt;)j=ee(j),st--;for(;0<Mt-st;)X=ee(X),Mt--;for(;st--;){if(j===X||X!==null&&j===X.alternate){ee=j;break e}j=ee(j),X=ee(X)}ee=null}else ee=null;ht!==null&&d_(Et,ut,ht,ee,!1),Zt!==null&&Xe!==null&&d_(Et,Xe,Zt,ee,!0)}}t:{if(ut=ot?yr(ot):window,ht=ut.nodeName&&ut.nodeName.toLowerCase(),ht==="select"||ht==="input"&&ut.type==="file")var we=wm;else if(Rm(ut))if(Dm)we=iy;else{we=ey;var Kt=ty}else ht=ut.nodeName,!ht||ht.toLowerCase()!=="input"||ut.type!=="checkbox"&&ut.type!=="radio"?ot&&_i(ot.elementType)&&(we=wm):we=ny;if(we&&(we=we(e,ot))){Cm(Et,we,r,St);break t}Kt&&Kt(e,ut,ot),e==="focusout"&&ot&&ut.type==="number"&&ot.memoizedProps.value!=null&&yn(ut,"number",ut.value)}switch(Kt=ot?yr(ot):window,e){case"focusin":(Rm(Kt)||Kt.contentEditable==="true")&&(is=Kt,lf=ot,vo=null);break;case"focusout":vo=lf=is=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,zm(Et,r,St);break;case"selectionchange":if(ry)break;case"keydown":case"keyup":zm(Et,r,St)}var fe;if(af)t:{switch(e){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else ns?Tm(e,r)&&(ye="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ye="onCompositionStart");ye&&(Mm&&r.locale!=="ko"&&(ns||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&ns&&(fe=_m()):(Ha=St,ju="value"in Ha?Ha.value:Ha.textContent,ns=!0)),Kt=bc(ot,ye),0<Kt.length&&(ye=new Sm(ye,e,null,r,St),Et.push({event:ye,listeners:Kt}),fe?ye.data=fe:(fe=Am(r),fe!==null&&(ye.data=fe)))),(fe=KS?QS(e,r):JS(e,r))&&(ye=bc(ot,"onBeforeInput"),0<ye.length&&(Kt=new Sm("onBeforeInput","beforeinput",null,r,St),Et.push({event:Kt,listeners:ye}),Kt.data=fe)),Vy(Et,e,ot,r,St)}u_(Et,n)})}function ko(e,n,r){return{instance:e,listener:n,currentTarget:r}}function bc(e,n){for(var r=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=co(e,r),u!=null&&o.unshift(ko(e,u,d)),u=co(e,n),u!=null&&o.push(ko(e,u,d))),e.tag===3)return o;e=e.return}return[]}function qy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function d_(e,n,r,o,u){for(var d=n._reactName,y=[];r!==null&&r!==o;){var C=r,F=C.alternate,ot=C.stateNode;if(C=C.tag,F!==null&&F===o)break;C!==5&&C!==26&&C!==27||ot===null||(F=ot,u?(ot=co(r,d),ot!=null&&y.unshift(ko(r,ot,F))):u||(ot=co(r,d),ot!=null&&y.push(ko(r,ot,F)))),r=r.return}y.length!==0&&e.push({event:n,listeners:y})}var Yy=/\r\n?/g,Zy=/\u0000|\uFFFD/g;function h_(e){return(typeof e=="string"?e:""+e).replace(Yy,`
`).replace(Zy,"")}function p_(e,n){return n=h_(n),h_(e)===n}function ke(e,n,r,o,u,d){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Vn(e,""+o);break;case"className":Ot(e,"class",o);break;case"tabIndex":Ot(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ot(e,r,o);break;case"style":$e(e,o,d);break;case"data":if(n!=="object"){Ot(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=Di(""+o),e.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(n!=="input"&&ke(e,n,"name",u.name,u,null),ke(e,n,"formEncType",u.formEncType,u,null),ke(e,n,"formMethod",u.formMethod,u,null),ke(e,n,"formTarget",u.formTarget,u,null)):(ke(e,n,"encType",u.encType,u,null),ke(e,n,"method",u.method,u,null),ke(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=Di(""+o),e.setAttribute(r,o);break;case"onClick":o!=null&&(e.onclick=vi);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}r=Di(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""+o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":o===!0?e.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Xt(e,"popover",o);break;case"xlinkActuate":Gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Gt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Gt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Gt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Gt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Xt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Ge.get(r)||r,Xt(e,r,o))}}function Od(e,n,r,o,u,d){switch(r){case"style":$e(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof o=="string"?Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&Vn(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=vi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lo.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),d=e[Cn]||null,d=d!=null?d[r]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,o,u);break t}r in e?e[r]=o:o===!0?e.setAttribute(r,""):Xt(e,r,o)}}}function Un(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,u=!1,d;for(d in r)if(r.hasOwnProperty(d)){var y=r[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:ke(e,n,d,y,r,null)}}u&&ke(e,n,"srcSet",r.srcSet,r,null),o&&ke(e,n,"src",r.src,r,null);return;case"input":ve("invalid",e);var C=d=y=u=null,F=null,ot=null;for(o in r)if(r.hasOwnProperty(o)){var St=r[o];if(St!=null)switch(o){case"name":u=St;break;case"type":y=St;break;case"checked":F=St;break;case"defaultChecked":ot=St;break;case"value":d=St;break;case"defaultValue":C=St;break;case"children":case"dangerouslySetInnerHTML":if(St!=null)throw Error(a(137,n));break;default:ke(e,n,o,St,r,null)}}Wt(e,d,C,F,ot,y,u,!1);return;case"select":ve("invalid",e),o=y=d=null;for(u in r)if(r.hasOwnProperty(u)&&(C=r[u],C!=null))switch(u){case"value":d=C;break;case"defaultValue":y=C;break;case"multiple":o=C;default:ke(e,n,u,C,r,null)}n=d,r=y,e.multiple=!!o,n!=null?he(e,!!o,n,!1):r!=null&&he(e,!!o,r,!0);return;case"textarea":ve("invalid",e),d=u=o=null;for(y in r)if(r.hasOwnProperty(y)&&(C=r[y],C!=null))switch(y){case"value":o=C;break;case"defaultValue":u=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:ke(e,n,y,C,r,null)}ni(e,o,u,d);return;case"option":for(F in r)r.hasOwnProperty(F)&&(o=r[F],o!=null)&&(F==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":ke(e,n,F,o,r,null));return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<Vo.length;o++)ve(Vo[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ot in r)if(r.hasOwnProperty(ot)&&(o=r[ot],o!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:ke(e,n,ot,o,r,null)}return;default:if(_i(n)){for(St in r)r.hasOwnProperty(St)&&(o=r[St],o!==void 0&&Od(e,n,St,o,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(o=r[C],o!=null&&ke(e,n,C,o,r,null))}function Ky(e,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,C=null,F=null,ot=null,St=null;for(ht in r){var Et=r[ht];if(r.hasOwnProperty(ht)&&Et!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":F=Et;default:o.hasOwnProperty(ht)||ke(e,n,ht,null,o,Et)}}for(var ut in o){var ht=o[ut];if(Et=r[ut],o.hasOwnProperty(ut)&&(ht!=null||Et!=null))switch(ut){case"type":d=ht;break;case"name":u=ht;break;case"checked":ot=ht;break;case"defaultChecked":St=ht;break;case"value":y=ht;break;case"defaultValue":C=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(a(137,n));break;default:ht!==Et&&ke(e,n,ut,ht,o,Et)}}mn(e,y,C,F,ot,St,d,u);return;case"select":ht=y=C=ut=null;for(d in r)if(F=r[d],r.hasOwnProperty(d)&&F!=null)switch(d){case"value":break;case"multiple":ht=F;default:o.hasOwnProperty(d)||ke(e,n,d,null,o,F)}for(u in o)if(d=o[u],F=r[u],o.hasOwnProperty(u)&&(d!=null||F!=null))switch(u){case"value":ut=d;break;case"defaultValue":C=d;break;case"multiple":y=d;default:d!==F&&ke(e,n,u,d,o,F)}n=C,r=y,o=ht,ut!=null?he(e,!!r,ut,!1):!!o!=!!r&&(n!=null?he(e,!!r,n,!0):he(e,!!r,r?[]:"",!1));return;case"textarea":ht=ut=null;for(C in r)if(u=r[C],r.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:ke(e,n,C,null,o,u)}for(y in o)if(u=o[y],d=r[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":ut=u;break;case"defaultValue":ht=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==d&&ke(e,n,y,u,o,d)}Gn(e,ut,ht);return;case"option":for(var Zt in r)ut=r[Zt],r.hasOwnProperty(Zt)&&ut!=null&&!o.hasOwnProperty(Zt)&&(Zt==="selected"?e.selected=!1:ke(e,n,Zt,null,o,ut));for(F in o)ut=o[F],ht=r[F],o.hasOwnProperty(F)&&ut!==ht&&(ut!=null||ht!=null)&&(F==="selected"?e.selected=ut&&typeof ut!="function"&&typeof ut!="symbol":ke(e,n,F,ut,o,ht));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in r)ut=r[ee],r.hasOwnProperty(ee)&&ut!=null&&!o.hasOwnProperty(ee)&&ke(e,n,ee,null,o,ut);for(ot in o)if(ut=o[ot],ht=r[ot],o.hasOwnProperty(ot)&&ut!==ht&&(ut!=null||ht!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(a(137,n));break;default:ke(e,n,ot,ut,o,ht)}return;default:if(_i(n)){for(var Xe in r)ut=r[Xe],r.hasOwnProperty(Xe)&&ut!==void 0&&!o.hasOwnProperty(Xe)&&Od(e,n,Xe,void 0,o,ut);for(St in o)ut=o[St],ht=r[St],!o.hasOwnProperty(St)||ut===ht||ut===void 0&&ht===void 0||Od(e,n,St,ut,o,ht);return}}for(var j in r)ut=r[j],r.hasOwnProperty(j)&&ut!=null&&!o.hasOwnProperty(j)&&ke(e,n,j,null,o,ut);for(Et in o)ut=o[Et],ht=r[Et],!o.hasOwnProperty(Et)||ut===ht||ut==null&&ht==null||ke(e,n,Et,ut,o,ht)}function m_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Qy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var u=r[o],d=u.transferSize,y=u.initiatorType,C=u.duration;if(d&&C&&m_(y)){for(y=0,C=u.responseEnd,o+=1;o<r.length;o++){var F=r[o],ot=F.startTime;if(ot>C)break;var St=F.transferSize,Et=F.initiatorType;St&&m_(Et)&&(F=F.responseEnd,y+=St*(F<C?1:(C-ot)/(F-ot)))}if(--o,n+=8*(d+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Pd=null,Id=null;function Tc(e){return e.nodeType===9?e:e.ownerDocument}function g_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function __(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Bd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zd=null;function Jy(){var e=window.event;return e&&e.type==="popstate"?e===zd?!1:(zd=e,!0):(zd=null,!1)}var v_=typeof setTimeout=="function"?setTimeout:void 0,jy=typeof clearTimeout=="function"?clearTimeout:void 0,x_=typeof Promise=="function"?Promise:void 0,$y=typeof queueMicrotask=="function"?queueMicrotask:typeof x_<"u"?function(e){return x_.resolve(null).then(e).catch(tM)}:v_;function tM(e){setTimeout(function(){throw e})}function ir(e){return e==="head"}function S_(e,n){var r=n,o=0;do{var u=r.nextSibling;if(e.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(o===0){e.removeChild(u),Ds(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")Xo(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Xo(r);for(var d=r.firstChild;d;){var y=d.nextSibling,C=d.nodeName;d[Ia]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=y}}else r==="body"&&Xo(e.ownerDocument.body);r=u}while(r);Ds(n)}function y_(e,n){var r=e;e=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=o}while(r)}function Fd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Fd(r),Ba(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function eM(e,n,r,o){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ia])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Ti(e.nextSibling),e===null)break}return null}function nM(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Ti(e.nextSibling),e===null))return null;return e}function M_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ti(e.nextSibling),e===null))return null;return e}function Hd(e){return e.data==="$?"||e.data==="$~"}function Gd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function iM(e,n){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ti(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Vd=null;function E_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(n===0)return Ti(e.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}e=e.nextSibling}return null}function b_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return e;n--}else r!=="/$"&&r!=="/&"||n++}e=e.previousSibling}return null}function T_(e,n,r){switch(n=Tc(r),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Xo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ba(e)}var Ai=new Map,A_=new Set;function Ac(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ea=H.d;H.d={f:aM,r:rM,D:sM,C:oM,L:lM,m:cM,X:fM,S:uM,M:dM};function aM(){var e=Ea.f(),n=_c();return e||n}function rM(e){var n=oa(e);n!==null&&n.tag===5&&n.type==="form"?k0(n):Ea.r(e)}var Rs=typeof document>"u"?null:document;function R_(e,n,r){var o=Rs;if(o&&typeof n=="string"&&n){var u=de(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),A_.has(u)||(A_.add(u),e={rel:e,crossOrigin:r,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Un(n,"link",e),pn(n),o.head.appendChild(n)))}}function sM(e){Ea.D(e),R_("dns-prefetch",e,null)}function oM(e,n){Ea.C(e,n),R_("preconnect",e,n)}function lM(e,n,r){Ea.L(e,n,r);var o=Rs;if(o&&e&&n){var u='link[rel="preload"][as="'+de(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+de(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+de(r.imageSizes)+'"]')):u+='[href="'+de(e)+'"]';var d=u;switch(n){case"style":d=Cs(e);break;case"script":d=ws(e)}Ai.has(d)||(e=v({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),Ai.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Wo(d))||n==="script"&&o.querySelector(qo(d))||(n=o.createElement("link"),Un(n,"link",e),pn(n),o.head.appendChild(n)))}}function cM(e,n){Ea.m(e,n);var r=Rs;if(r&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+de(o)+'"][href="'+de(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ws(e)}if(!Ai.has(d)&&(e=v({rel:"modulepreload",href:e},n),Ai.set(d,e),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(qo(d)))return}o=r.createElement("link"),Un(o,"link",e),pn(o),r.head.appendChild(o)}}}function uM(e,n,r){Ea.S(e,n,r);var o=Rs;if(o&&e){var u=za(o).hoistableStyles,d=Cs(e);n=n||"default";var y=u.get(d);if(!y){var C={loading:0,preload:null};if(y=o.querySelector(Wo(d)))C.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},r),(r=Ai.get(d))&&kd(e,r);var F=y=o.createElement("link");pn(F),Un(F,"link",e),F._p=new Promise(function(ot,St){F.onload=ot,F.onerror=St}),F.addEventListener("load",function(){C.loading|=1}),F.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Rc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:C},u.set(d,y)}}}function fM(e,n){Ea.X(e,n);var r=Rs;if(r&&e){var o=za(r).hoistableScripts,u=ws(e),d=o.get(u);d||(d=r.querySelector(qo(u)),d||(e=v({src:e,async:!0},n),(n=Ai.get(u))&&Xd(e,n),d=r.createElement("script"),pn(d),Un(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function dM(e,n){Ea.M(e,n);var r=Rs;if(r&&e){var o=za(r).hoistableScripts,u=ws(e),d=o.get(u);d||(d=r.querySelector(qo(u)),d||(e=v({src:e,async:!0,type:"module"},n),(n=Ai.get(u))&&Xd(e,n),d=r.createElement("script"),pn(d),Un(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function C_(e,n,r,o){var u=(u=Lt.current)?Ac(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=Cs(r.href),r=za(u).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Cs(r.href);var d=za(u).hoistableStyles,y=d.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,y),(d=u.querySelector(Wo(e)))&&!d._p&&(y.instance=d,y.state.loading=5),Ai.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ai.set(e,r),d||hM(u,e,r,y.state))),n&&o===null)throw Error(a(528,""));return y}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ws(r),r=za(u).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Cs(e){return'href="'+de(e)+'"'}function Wo(e){return'link[rel="stylesheet"]['+e+"]"}function w_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function hM(e,n,r,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",r),pn(n),e.head.appendChild(n))}function ws(e){return'[src="'+de(e)+'"]'}function qo(e){return"script[async]"+e}function D_(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+de(r.href)+'"]');if(o)return n.instance=o,pn(o),o;var u=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),pn(o),Un(o,"style",u),Rc(o,r.precedence,e),n.instance=o;case"stylesheet":u=Cs(r.href);var d=e.querySelector(Wo(u));if(d)return n.state.loading|=4,n.instance=d,pn(d),d;o=w_(r),(u=Ai.get(u))&&kd(o,u),d=(e.ownerDocument||e).createElement("link"),pn(d);var y=d;return y._p=new Promise(function(C,F){y.onload=C,y.onerror=F}),Un(d,"link",o),n.state.loading|=4,Rc(d,r.precedence,e),n.instance=d;case"script":return d=ws(r.src),(u=e.querySelector(qo(d)))?(n.instance=u,pn(u),u):(o=r,(u=Ai.get(d))&&(o=v({},r),Xd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),pn(u),Un(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Rc(o,r.precedence,e));return n.instance}function Rc(e,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var C=o[y];if(C.dataset.precedence===n)d=C;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function kd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Cc=null;function L_(e,n,r){if(Cc===null){var o=new Map,u=Cc=new Map;u.set(r,o)}else u=Cc,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var d=r[u];if(!(d[Ia]||d[hn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=e+y;var C=o.get(y);C?C.push(d):o.set(y,[d])}}return o}function U_(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function pM(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function N_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function mM(e,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=Cs(o.href),d=n.querySelector(Wo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=wc.bind(e),n.then(e,e)),r.state.loading|=4,r.instance=d,pn(d);return}d=n.ownerDocument||n,o=w_(o),(u=Ai.get(u))&&kd(o,u),d=d.createElement("link"),pn(d);var y=d;y._p=new Promise(function(C,F){y.onload=C,y.onerror=F}),Un(d,"link",o),r.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=wc.bind(e),n.addEventListener("load",r),n.addEventListener("error",r))}}var Wd=0;function gM(e,n){return e.stylesheets&&e.count===0&&Lc(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var o=setTimeout(function(){if(e.stylesheets&&Lc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&Wd===0&&(Wd=62500*Qy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Wd?50:800)+n);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function wc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Dc=null;function Lc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Dc=new Map,n.forEach(_M,e),Dc=null,wc.call(e))}function _M(e,n){if(!(n.state.loading&4)){var r=Dc.get(e);if(r)var o=r.get(null);else{r=new Map,Dc.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),o=y)}o&&r.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=r.get(y)||o,d===o&&r.set(null,u),r.set(y,u),this.count++,o=wc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Yo={$$typeof:z,Provider:null,Consumer:null,_currentValue:lt,_currentValue2:lt,_threadCount:0};function vM(e,n,r,o,u,d,y,C,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qt(0),this.hiddenUpdates=Qt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function O_(e,n,r,o,u,d,y,C,F,ot,St,Et){return e=new vM(e,n,r,y,F,ot,St,Et,C),n=1,d===!0&&(n|=24),d=ai(3,null,null,n),e.current=d,d.stateNode=e,n=bf(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:r,cache:n},Cf(d),e}function P_(e){return e?(e=ss,e):ss}function I_(e,n,r,o,u,d){u=P_(u),o.context===null?o.context=u:o.pendingContext=u,o=qa(n),o.payload={element:r},d=d===void 0?null:d,d!==null&&(o.callback=d),r=Ya(e,o,n),r!==null&&($n(r,e,n),To(r,e,n))}function B_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function qd(e,n){B_(e,n),(e=e.alternate)&&B_(e,n)}function z_(e){if(e.tag===13||e.tag===31){var n=Tr(e,67108864);n!==null&&$n(n,e,67108864),qd(e,67108864)}}function F_(e){if(e.tag===13||e.tag===31){var n=ci();n=ro(n);var r=Tr(e,n);r!==null&&$n(r,e,n),qd(e,n)}}var Uc=!0;function xM(e,n,r,o){var u=B.T;B.T=null;var d=H.p;try{H.p=2,Yd(e,n,r,o)}finally{H.p=d,B.T=u}}function SM(e,n,r,o){var u=B.T;B.T=null;var d=H.p;try{H.p=8,Yd(e,n,r,o)}finally{H.p=d,B.T=u}}function Yd(e,n,r,o){if(Uc){var u=Zd(o);if(u===null)Nd(e,n,o,Nc,r),G_(e,o);else if(MM(u,e,n,r,o))o.stopPropagation();else if(G_(e,o),n&4&&-1<yM.indexOf(e)){for(;u!==null;){var d=oa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=wt(d.pendingLanes);if(y!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;y;){var F=1<<31-kt(y);C.entanglements[1]|=F,y&=~F}Yi(d),(Ne&6)===0&&(mc=Pe()+500,Go(0))}}break;case 31:case 13:C=Tr(d,2),C!==null&&$n(C,d,2),_c(),qd(d,2)}if(d=Zd(o),d===null&&Nd(e,n,o,Nc,r),d===u)break;u=d}u!==null&&o.stopPropagation()}else Nd(e,n,o,null,r)}}function Zd(e){return e=Ku(e),Kd(e)}var Nc=null;function Kd(e){if(Nc=null,e=sa(e),e!==null){var n=c(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=f(n),e!==null)return e;e=null}else if(r===31){if(e=h(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Nc=e,null}function H_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Le()){case P:return 2;case E:return 8;case $:case ct:return 32;case gt:return 268435456;default:return 32}default:return 32}}var Qd=!1,ar=null,rr=null,sr=null,Zo=new Map,Ko=new Map,or=[],yM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function G_(e,n){switch(e){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(n.pointerId)}}function Qo(e,n,r,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=oa(n),n!==null&&z_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function MM(e,n,r,o,u){switch(n){case"focusin":return ar=Qo(ar,e,n,r,o,u),!0;case"dragenter":return rr=Qo(rr,e,n,r,o,u),!0;case"mouseover":return sr=Qo(sr,e,n,r,o,u),!0;case"pointerover":var d=u.pointerId;return Zo.set(d,Qo(Zo.get(d)||null,e,n,r,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Ko.set(d,Qo(Ko.get(d)||null,e,n,r,o,u)),!0}return!1}function V_(e){var n=sa(e.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){e.blockedOn=n,$r(e.priority,function(){F_(r)});return}}else if(n===31){if(n=h(r),n!==null){e.blockedOn=n,$r(e.priority,function(){F_(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=Zd(e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);Zu=o,r.target.dispatchEvent(o),Zu=null}else return n=oa(r),n!==null&&z_(n),e.blockedOn=r,!1;n.shift()}return!0}function k_(e,n,r){Oc(e)&&r.delete(n)}function EM(){Qd=!1,ar!==null&&Oc(ar)&&(ar=null),rr!==null&&Oc(rr)&&(rr=null),sr!==null&&Oc(sr)&&(sr=null),Zo.forEach(k_),Ko.forEach(k_)}function Pc(e,n){e.blockedOn===n&&(e.blockedOn=null,Qd||(Qd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,EM)))}var Ic=null;function X_(e){Ic!==e&&(Ic=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Ic===e&&(Ic=null);for(var n=0;n<e.length;n+=3){var r=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Kd(o||r)===null)continue;break}var d=oa(r);d!==null&&(e.splice(n,3),n-=3,Zf(d,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function Ds(e){function n(F){return Pc(F,e)}ar!==null&&Pc(ar,e),rr!==null&&Pc(rr,e),sr!==null&&Pc(sr,e),Zo.forEach(n),Ko.forEach(n);for(var r=0;r<or.length;r++){var o=or[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<or.length&&(r=or[0],r.blockedOn===null);)V_(r),r.blockedOn===null&&or.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],d=r[o+1],y=u[Cn]||null;if(typeof d=="function")y||X_(r);else if(y){var C=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[Cn]||null)C=y.formAction;else if(Kd(u)!==null)continue}else C=y.action;typeof C=="function"?r[o+1]=C:(r.splice(o,3),o-=3),X_(r)}}}function W_(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Jd(e){this._internalRoot=e}Bc.prototype.render=Jd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,o=ci();I_(r,o,e,n,null,null)},Bc.prototype.unmount=Jd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;I_(e.current,2,null,e,null,null),_c(),n[Yn]=null}};function Bc(e){this._internalRoot=e}Bc.prototype.unstable_scheduleHydration=function(e){if(e){var n=oo();e={blockedOn:null,target:e,priority:n};for(var r=0;r<or.length&&n!==0&&n<or[r].priority;r++);or.splice(r,0,e),r===0&&V_(e)}};var q_=t.version;if(q_!=="19.2.4")throw Error(a(527,q_,"19.2.4"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var bM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zc.isDisabled&&zc.supportsFiber)try{_t=zc.inject(bM),vt=zc}catch{}}return jo.createRoot=function(e,n){if(!l(e))throw Error(a(299));var r=!1,o="",u=$0,d=tg,y=eg;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=O_(e,1,!1,null,null,r,o,null,u,d,y,W_),e[Yn]=n.current,Ud(e),new Jd(n)},jo.hydrateRoot=function(e,n,r){if(!l(e))throw Error(a(299));var o=!1,u="",d=$0,y=tg,C=eg,F=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.formState!==void 0&&(F=r.formState)),n=O_(e,1,!0,n,r??null,o,u,F,d,y,C,W_),n.context=P_(null),r=n.current,o=ci(),o=ro(o),u=qa(o),u.callback=null,Ya(r,u,o),r=o,n.current.lanes=r,qt(n,r),Yi(n),e[Yn]=n.current,Ud(e),new Bc(n)},jo.version="19.2.4",jo}var nv;function OM(){if(nv)return th.exports;nv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),th.exports=NM(),th.exports}var PM=OM();var Bp=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,mx=/^[\\/]{2}/;function IM(s,t){return t+s.replace(/\\/g,"/")}var iv="popstate";function av(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function BM(s={}){function t(l,c){let{pathname:f="/",search:h="",hash:m=""}=Qr(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Vh("",{pathname:f,search:h,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");h=p===-1?m:m.slice(0,p)}return h+"#"+(typeof c=="string"?c:qr(c))}function a(l,c){wi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return FM(t,i,a,s)}function en(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function wi(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function zM(){return Math.random().toString(36).substring(2,10)}function rv(s,t){return{usr:s.state,key:s.key,idx:t,masked:s.mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function Vh(s,t,i=null,a,l){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Qr(t):t,state:i,key:t&&t.key||a||zM(),mask:l}}function qr({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Qr(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let a=s.indexOf("?");a>=0&&(t.search=s.substring(a),s=s.substring(0,a)),s&&(t.pathname=s)}return t}function FM(s,t,i,a={}){let{window:l=document.defaultView,v5Compat:c=!1}=a,f=l.history,h="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function v(){h="POP";let S=g(),x=S==null?null:S-p;p=S,m&&m({action:h,location:R.location,delta:x})}function _(S,x){h="PUSH";let L=av(S)?S:Vh(R.location,S,x);i&&i(L,S),p=g()+1;let z=rv(L,p),D=R.createHref(L.mask||L);try{f.pushState(z,"",D)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;l.location.assign(D)}c&&m&&m({action:h,location:R.location,delta:1})}function M(S,x){h="REPLACE";let L=av(S)?S:Vh(R.location,S,x);i&&i(L,S),p=g();let z=rv(L,p),D=R.createHref(L.mask||L);f.replaceState(z,"",D),c&&m&&m({action:h,location:R.location,delta:0})}function b(S){return HM(l,S)}let R={get action(){return h},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(iv,v),m=S,()=>{l.removeEventListener(iv,v),m=null}},createHref(S){return t(l,S)},createURL:b,encodeLocation(S){let x=b(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:_,replace:M,go(S){return f.go(S)}};return R}function HM(s,t,i=!1){let a="http://localhost";s&&(a=s.location.origin!=="null"?s.location.origin:s.location.href),en(a,"No window.location.(origin|href) available to create URL");let l=typeof t=="string"?t:qr(t);return l=l.replace(/ $/,"%20"),!i&&mx.test(l)&&(l=a+l),new URL(l,a)}function gx(s,t,i="/"){return GM(s,t,i,!1)}function GM(s,t,i,a,l){let c=typeof t=="string"?Qr(t):t,f=Oa(c.pathname||"/",i);if(f==null)return null;let h=VM(s),m=null,p=$M(f);for(let g=0;m==null&&g<h.length;++g)m=jM(h[g],p,a);return m}function VM(s){let t=_x(s);return kM(t),t}function _x(s,t=[],i=[],a="",l=!1){let c=(f,h,m=l,p)=>{let g={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(a)&&m)return;en(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length)}let v=Hi([a,g.relativePath]),_=i.concat(g);f.children&&f.children.length>0&&(en(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),_x(f.children,t,_,v,m)),!(f.path==null&&!f.index)&&t.push({path:v,score:QM(v,f.index),routesMeta:_.map((M,b)=>{let[R,S]=Sx(M.relativePath,M.caseSensitive,b===_.length-1);return{...M,matcher:R,compiledParams:S}})})};return s.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of vx(f.path))c(f,h,!0,m)}),t}function vx(s){let t=s.split("/");if(t.length===0)return[];let[i,...a]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(a.length===0)return l?[c,""]:[c];let f=vx(a.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function kM(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:JM(t.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var XM=/^:[\w-]+$/,WM=3,qM=2,YM=1,ZM=10,KM=-2,sv=s=>s==="*";function QM(s,t){let i=s.split("/"),a=i.length;return i.some(sv)&&(a+=KM),t&&(a+=qM),i.filter(l=>!sv(l)).reduce((l,c)=>l+(XM.test(c)?WM:c===""?YM:ZM),a)}function JM(s,t){return s.length===t.length&&s.slice(0,-1).every((a,l)=>a===t[l])?s[s.length-1]-t[t.length-1]:0}function jM(s,t,i=!1){let{routesMeta:a}=s,l={},c="/",f=[];for(let h=0;h<a.length;++h){let m=a[h],p=h===a.length-1,g=c==="/"?t:t.slice(c.length)||"/",v={path:m.relativePath,caseSensitive:m.caseSensitive,end:p},_=m.matcher&&m.compiledParams?xx(v,g,m.matcher,m.compiledParams):Mu(v,g),M=m.route;if(!_&&p&&i&&!a[a.length-1].route.index&&(_=Mu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:Hi([c,_.pathname]),pathnameBase:n2(Hi([c,_.pathnameBase])),route:M}),_.pathnameBase!=="/"&&(c=Hi([c,_.pathnameBase]))}return f}function Mu(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,a]=Sx(s.path,s.caseSensitive,s.end);return xx(s,t,i,a)}function xx(s,t,i,a){let l=t.match(i);if(!l)return null;let c=l[0],f=js(c,1),h=l.slice(1);return{params:a.reduce((p,{paramName:g,isOptional:v},_)=>{if(g==="*"){let b=h[_]||"";f=js(c.slice(0,c.length-b.length),1)}const M=h[_];return v&&!M?p[g]=void 0:p[g]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function Sx(s,t=!1,i=!0){wi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let a=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m,p,g)=>{if(a.push({paramName:h,isOptional:m!=null}),m){let v=g.charAt(p+f.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(a.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),a]}function $M(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function Oa(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,a=s.charAt(i);return a&&a!=="/"?null:s.slice(i)||"/"}function t2(s,t="/"){let{pathname:i,search:a="",hash:l=""}=typeof s=="string"?Qr(s):s,c;return i?(i=yx(i),i.startsWith("/")||i.startsWith("\\")?c=ov(i.substring(1),"/"):c=ov(i,t)):c=t,{pathname:c,search:i2(a),hash:a2(l)}}function ov(s,t){let i=js(t).split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ah(s,t,i,a){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function e2(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function zp(s){let t=e2(s);return t.map((i,a)=>a===t.length-1?i.pathname:i.pathnameBase)}function Bu(s,t,i,a=!1){let l;typeof s=="string"?l=Qr(s):(l={...s},en(!l.pathname||!l.pathname.includes("?"),ah("?","pathname","search",l)),en(!l.pathname||!l.pathname.includes("#"),ah("#","pathname","hash",l)),en(!l.search||!l.search.includes("#"),ah("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let v=t.length-1;if(!a&&f.startsWith("..")){let _=f.split("/");for(;_[0]==="..";)_.shift(),v-=1;l.pathname=_.join("/")}h=v>=0?t[v]:"/"}let m=t2(l,h),p=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var yx=s=>s.replace(/[\\/]{2,}/g,"/"),Hi=s=>yx(s.join("/"));function js(s,t=0){let i=s.length;for(;i>t&&s.charCodeAt(i-1)===47;)i--;return i===s.length?s:s.slice(0,i)}var n2=s=>js(s).replace(/^\/*/,"/"),i2=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,a2=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,r2=class{constructor(s,t,i,a=!1){this.status=s,this.statusText=t||"",this.internal=a,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function s2(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function o2(s){let t=s.map(i=>i.route.path).filter(Boolean);return Hi(t)||"/"}var Mx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ex(s,t){let i=s;if(typeof i!="string"||!Bp.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let a=i,l=!1;if(Mx)try{let c=new URL(window.location.href),f=mx.test(i)?new URL(IM(i,c.protocol)):new URL(i),h=Oa(f.pathname,t);f.origin===c.origin&&h!=null?i=h+f.search+f.hash:l=!0}catch{wi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var lv=new URL("http://localhost");function Fp(s){if(s.createURL)return s.createURL("/");try{return new URL(s.createHref("/"),lv)}catch{return lv}}function rh(s,t){return s.origin===t.origin&&(s.origin!=="null"||s.protocol===t.protocol&&s.host===t.host)}function l2(s,t){if(s.startsWith("//"))return!0;let i=t.protocol.toLowerCase();return s.toLowerCase().startsWith(i)?t.host===""||s.slice(i.length).startsWith("//"):!1}function Hp(s,t,i,a){let l=null;try{l=s==null?null:new URL(s,i)}catch{}let c=new URL(t,i),f=l!=null&&!rh(l,i),h=!rh(c,i);if(a==="reject"){if(f||h)throw new Error("External navigation is not allowed")}else if(h&&(l==null||!l2(s,l)||!rh(l,c)))throw new Error("External navigation is not allowed")}var bx=["POST","PUT","PATCH","DELETE"];new Set(bx);var c2=["GET",...bx];new Set(c2);var u2=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function f2(s){try{return u2.includes(new URL(s).protocol)}catch{return!1}}var eo=xt.createContext(null);eo.displayName="DataRouter";var zu=xt.createContext(null);zu.displayName="DataRouterState";var Tx=xt.createContext(!1);function d2(){return xt.useContext(Tx)}var Ax=xt.createContext({isTransitioning:!1});Ax.displayName="ViewTransition";var h2=xt.createContext(new Map);h2.displayName="Fetchers";var p2=xt.createContext(null);p2.displayName="Await";var gi=xt.createContext(null);gi.displayName="Navigation";var bl=xt.createContext(null);bl.displayName="Location";var aa=xt.createContext({outlet:null,matches:[],isDataRoute:!1});aa.displayName="Route";var Gp=xt.createContext(null);Gp.displayName="RouteError";var Rx="REACT_ROUTER_ERROR",m2="REDIRECT",g2="ROUTE_ERROR_RESPONSE";function _2(s){if(s.startsWith(`${Rx}:${m2}:{`))try{let t=JSON.parse(s.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function v2(s){if(s.startsWith(`${Rx}:${g2}:{`))try{let t=JSON.parse(s.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new r2(t.status,t.statusText,t.data)}catch{}}function x2(s,{relative:t}={}){en(no(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=xt.useContext(gi),{hash:l,pathname:c,search:f}=Tl(s,{relative:t}),h=c;return i!=="/"&&(h=c==="/"?i:Hi([i,c])),a.createHref({pathname:h,search:f,hash:l})}function no(){return xt.useContext(bl)!=null}function ra(){return en(no(),"useLocation() may be used only in the context of a <Router> component."),xt.useContext(bl).location}var Cx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function wx(s){xt.useContext(gi).static||xt.useLayoutEffect(s)}function Vp(){let{isDataRoute:s}=xt.useContext(aa);return s?U2():S2()}function S2(){en(no(),"useNavigate() may be used only in the context of a <Router> component.");let s=xt.useContext(eo),{basename:t,navigator:i}=xt.useContext(gi),{matches:a}=xt.useContext(aa),{pathname:l}=ra(),c=JSON.stringify(zp(a)),f=xt.useRef(!1);return wx(()=>{f.current=!0}),xt.useCallback((m,p={})=>{if(wi(f.current,Cx),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=Bu(m,JSON.parse(c),l,p.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Hi([t,g.pathname])),Hp(typeof m=="string"?m:qr(m),i.createHref(g),Fp(i),"reject"),(p.replace?i.replace:i.push)(g,p.state,p)},[t,i,c,l,s])}xt.createContext(null);function Tl(s,{relative:t}={}){let{matches:i}=xt.useContext(aa),{pathname:a}=ra(),l=JSON.stringify(zp(i));return xt.useMemo(()=>Bu(s,JSON.parse(l),a,t==="path"),[s,l,a,t])}function y2(s,t){return Dx(s,t)}function Dx(s,t,i){en(no(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=xt.useContext(gi),{matches:l}=xt.useContext(aa),c=l[l.length-1],f=c?c.params:{},h=c?c.pathname:"/",m=c?c.pathnameBase:"/",p=c&&c.route;{let S=p&&p.path||"";Ux(h,!p||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let g=ra(),v;if(t){let S=typeof t=="string"?Qr(t):t;en(m==="/"||S.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${S.pathname}" was given in the \`location\` prop.`),v=S}else v=g;let _=v.pathname||"/",M=_;if(m!=="/"){let S=m.replace(/^\//,"").split("/");M="/"+_.replace(/^\//,"").split("/").slice(S.length).join("/")}let b=i&&i.state.matches.length?i.state.matches.map(S=>Object.assign(S,{route:i.manifest[S.route.id]||S.route})):gx(s,{pathname:M});wi(p||b!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),wi(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=A2(b&&b.map(S=>Object.assign({},S,{params:Object.assign({},f,S.params),pathname:Hi([m,a.encodeLocation?a.encodeLocation(S.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?m:Hi([m,a.encodeLocation?a.encodeLocation(S.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathnameBase])})),l,i);return t&&R?xt.createElement(bl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},R):R}function M2(){let s=L2(),t=s2(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,a="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=xt.createElement(xt.Fragment,null,xt.createElement("p",null,"💿 Hey developer 👋"),xt.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",xt.createElement("code",{style:c},"ErrorBoundary")," or"," ",xt.createElement("code",{style:c},"errorElement")," prop on your route.")),xt.createElement(xt.Fragment,null,xt.createElement("h2",null,"Unexpected Application Error!"),xt.createElement("h3",{style:{fontStyle:"italic"}},t),i?xt.createElement("pre",{style:l},i):null,f)}var E2=xt.createElement(M2,null),Lx=class extends xt.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){this.props.onError?this.props.onError(s,t):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=v2(s.digest);i&&(s=i)}let t=s!==void 0?xt.createElement(aa.Provider,{value:this.props.routeContext},xt.createElement(Gp.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?xt.createElement(b2,{error:s},t):t}};Lx.contextType=Tx;var sh=new WeakMap;function b2({children:s,error:t}){let{basename:i,navigator:a}=xt.useContext(gi);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let l=_2(t.digest);if(l){let c=sh.get(t);if(c)throw c;let f=Ex(l.location,i),h=f.absoluteURL||f.to;if(Hp(l.location,h,Fp(a),"allow-explicit"),f2(h))throw new Error("Invalid redirect location");if(Mx&&!sh.get(t))if(f.isExternal||l.reloadDocument)window.location.href=h;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:l.replace}));throw sh.set(t,m),m}return xt.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h}`})}}return s}function T2({routeContext:s,match:t,children:i}){let a=xt.useContext(eo);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),xt.createElement(aa.Provider,{value:s},i)}function A2(s,t=[],i){let a=i?.state;if(s==null){if(!a)return null;if(a.errors)s=a.matches;else if(t.length===0&&!a.initialized&&a.matches.length>0)s=a.matches;else return null}let l=s,c=a?.errors;if(c!=null){let g=l.findIndex(v=>v.route.id&&c?.[v.route.id]!==void 0);en(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,g+1))}let f=!1,h=-1;if(i&&a){f=a.renderFallback;for(let g=0;g<l.length;g++){let v=l[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=g),v.route.id){let{loaderData:_,errors:M}=a,b=v.route.loader&&!_.hasOwnProperty(v.route.id)&&(!M||M[v.route.id]===void 0);if(v.route.lazy||b){i.isStatic&&(f=!0),h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}}let m=i?.onError,p=a&&m?(g,v)=>{m(g,{location:a.location,params:a.matches?.[0]?.params??{},pattern:o2(a.matches),errorInfo:v})}:void 0;return l.reduceRight((g,v,_)=>{let M,b=!1,R=null,S=null;a&&(M=c&&v.route.id?c[v.route.id]:void 0,R=v.route.errorElement||E2,f&&(h<0&&_===0?(Ux("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,S=null):h===_&&(b=!0,S=v.route.hydrateFallbackElement||null)));let x=t.concat(l.slice(0,_+1)),L=()=>{let z;return M?z=R:b?z=S:v.route.Component?z=xt.createElement(v.route.Component,null):v.route.element?z=v.route.element:z=g,xt.createElement(T2,{match:v,routeContext:{outlet:g,matches:x,isDataRoute:a!=null},children:z})};return a&&(v.route.ErrorBoundary||v.route.errorElement||_===0)?xt.createElement(Lx,{location:a.location,revalidation:a.revalidation,component:R,error:M,children:L(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:p}):L()},null)}function kp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function R2(s){let t=xt.useContext(eo);return en(t,kp(s)),t}function C2(s){let t=xt.useContext(zu);return en(t,kp(s)),t}function w2(s){let t=xt.useContext(aa);return en(t,kp(s)),t}function Xp(s){let t=w2(s),i=t.matches[t.matches.length-1];return en(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function D2(){return Xp("useRouteId")}function L2(){let s=xt.useContext(Gp),t=C2("useRouteError"),i=Xp("useRouteError");return s!==void 0?s:t.errors?.[i]}function U2(){let{router:s}=R2("useNavigate"),t=Xp("useNavigate"),i=xt.useRef(!1);return wx(()=>{i.current=!0}),xt.useCallback(async(l,c={})=>{wi(i.current,Cx),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:t,...c}))},[s,t])}var cv={};function Ux(s,t,i){!t&&!cv[s]&&(cv[s]=!0,wi(!1,i))}xt.memo(N2);function N2({routes:s,manifest:t,future:i,state:a,isStatic:l,onError:c}){return Dx(s,void 0,{manifest:t,state:a,isStatic:l,onError:c})}function O2({to:s,replace:t,state:i,relative:a}){en(no(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l,navigator:c}=xt.useContext(gi);wi(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=xt.useContext(aa),{pathname:h}=ra(),m=Vp(),p=Bu(s,zp(f),h,a==="path");Hp(typeof s=="string"?s:qr(s),c.createHref(p),Fp(c),"reject");let g=JSON.stringify(p);return xt.useEffect(()=>{m(JSON.parse(g),{replace:t,state:i,relative:a})},[m,g,a,t,i]),null}function hu(s){en(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function P2({basename:s="/",children:t=null,location:i,navigationType:a="POP",navigator:l,static:c=!1,useTransitions:f}){en(!no(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),m=xt.useMemo(()=>({basename:h,navigator:l,static:c,useTransitions:f,future:{}}),[h,l,c,f]);typeof i=="string"&&(i=Qr(i));let{pathname:p="/",search:g="",hash:v="",state:_=null,key:M="default",mask:b}=i,R=xt.useMemo(()=>{let S=Oa(p,h);return S==null?null:{location:{pathname:S,search:g,hash:v,state:_,key:M,mask:b},navigationType:a}},[h,p,g,v,_,M,a,b]);return wi(R!=null,`<Router basename="${h}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:xt.createElement(gi.Provider,{value:m},xt.createElement(bl.Provider,{children:t,value:R}))}function I2({children:s,location:t}){return y2(kh(s),t)}function kh(s,t=[]){let i=[];return xt.Children.forEach(s,(a,l)=>{if(!xt.isValidElement(a))return;let c=[...t,l];if(a.type===xt.Fragment){i.push.apply(i,kh(a.props.children,c));return}en(a.type===hu,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),en(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=kh(a.props.children,c)),i.push(f)}),i}var pu="get",mu="application/x-www-form-urlencoded";function Fu(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function B2(s){return Fu(s)&&s.tagName.toLowerCase()==="button"}function z2(s){return Fu(s)&&s.tagName.toLowerCase()==="form"}function F2(s){return Fu(s)&&s.tagName.toLowerCase()==="input"}function H2(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function G2(s,t){return s.button===0&&(!t||t==="_self")&&!H2(s)}var Fc=null;function V2(){if(Fc===null)try{new FormData(document.createElement("form"),0),Fc=!1}catch{Fc=!0}return Fc}var k2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function oh(s){return s!=null&&!k2.has(s)?(wi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mu}"`),null):s}function X2(s,t){let i,a,l,c,f;if(z2(s)){let h=s.getAttribute("action");a=h?Oa(h,t):null,i=s.getAttribute("method")||pu,l=oh(s.getAttribute("enctype"))||mu,c=new FormData(s)}else if(B2(s)||F2(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(a=m?Oa(m,t):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||pu,l=oh(s.getAttribute("formenctype"))||oh(h.getAttribute("enctype"))||mu,c=new FormData(h,s),!V2()){let{name:p,type:g,value:v}=s;if(g==="image"){let _=p?`${p}.`:"";c.append(`${_}x`,"0"),c.append(`${_}y`,"0")}else p&&c.append(p,v)}}else{if(Fu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=pu,a=null,l=mu,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:a,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Wp(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Nx(s,t,i,a){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${a}`:l.pathname=`${l.pathname}.${a}`:l.pathname==="/"?l.pathname=`_root.${a}`:t&&Oa(l.pathname,t)==="/"?l.pathname=`${js(t)}/_root.${a}`:l.pathname=`${js(l.pathname)}.${a}`,l}async function W2(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function q2(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Y2(s,t,i){let a=await Promise.all(s.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await W2(c,i);return f.links?f.links():[]}return[]}));return J2(a.flat(1).filter(q2).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function uv(s,t,i,a,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?t.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?t.filter((m,p)=>{let g=a.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Z2(s,t,{includeHydrateFallback:i}={}){return K2(s.map(a=>{let l=t.routes[a.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function K2(s){return[...new Set(s)]}function Q2(s){let t={},i=Object.keys(s).sort();for(let a of i)t[a]=s[a];return t}function J2(s,t){let i=new Set;return new Set(t),s.reduce((a,l)=>{let c=JSON.stringify(Q2(l));return i.has(c)||(i.add(c),a.push({key:c,link:l})),a},[])}function qp(){let s=xt.useContext(eo);return Wp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function j2(){let s=xt.useContext(zu);return Wp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Yp=xt.createContext(void 0);Yp.displayName="FrameworkContext";function Hu(){let s=xt.useContext(Yp);return Wp(s,"You must render this element inside a <HydratedRouter> element"),s}function $2(s,t){let i=xt.useContext(Yp),[a,l]=xt.useState(!1),[c,f]=xt.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=t,_=xt.useRef(null);xt.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let R=x=>{x.forEach(L=>{f(L.isIntersecting)})},S=new IntersectionObserver(R,{threshold:.5});return _.current&&S.observe(_.current),()=>{S.disconnect()}}},[s]),xt.useEffect(()=>{if(a){let R=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(R)}}},[a]);let M=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,_,{}]:[c,_,{onFocus:$o(h,M),onBlur:$o(m,b),onMouseEnter:$o(p,M),onMouseLeave:$o(g,b),onTouchStart:$o(v,M)}]:[!1,_,{}]}function $o(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function tE({page:s,...t}){let i=d2(),{nonce:a}=Hu(),{router:l}=qp(),c=xt.useMemo(()=>gx(l.routes,s,l.basename),[l.routes,s,l.basename]);return c?(t.nonce==null&&a&&(t={...t,nonce:a}),i?xt.createElement(nE,{page:s,matches:c,...t}):xt.createElement(iE,{page:s,matches:c,...t})):null}function eE(s){let{manifest:t,routeModules:i}=Hu(),[a,l]=xt.useState([]);return xt.useEffect(()=>{let c=!1;return Y2(s,t,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,t,i]),a}function nE({page:s,matches:t,...i}){let a=ra(),{future:l}=Hu(),{basename:c}=qp(),f=xt.useMemo(()=>{if(s===a.pathname+a.search+a.hash)return[];let h=Nx(s,c,l.v8_trailingSlashAwareDataRequests,"rsc"),m=!1,p=[];for(let g of t)typeof g.route.shouldRevalidate=="function"?m=!0:p.push(g.route.id);return m&&p.length>0&&h.searchParams.set("_routes",p.join(",")),[h.pathname+h.search]},[c,l.v8_trailingSlashAwareDataRequests,s,a,t]);return xt.createElement(xt.Fragment,null,f.map(h=>xt.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...i})))}function iE({page:s,matches:t,...i}){let a=ra(),{future:l,manifest:c,routeModules:f}=Hu(),{basename:h}=qp(),{loaderData:m,matches:p}=j2(),g=xt.useMemo(()=>uv(s,t,p,c,a,"data"),[s,t,p,c,a]),v=xt.useMemo(()=>uv(s,t,p,c,a,"assets"),[s,t,p,c,a]),_=xt.useMemo(()=>{if(s===a.pathname+a.search+a.hash)return[];let R=new Set,S=!1;if(t.forEach(L=>{let z=c.routes[L.route.id];!z||!z.hasLoader||(!g.some(D=>D.route.id===L.route.id)&&L.route.id in m&&f[L.route.id]?.shouldRevalidate||z.hasClientLoader?S=!0:R.add(L.route.id))}),R.size===0)return[];let x=Nx(s,h,l.v8_trailingSlashAwareDataRequests,"data");return S&&R.size>0&&x.searchParams.set("_routes",t.filter(L=>R.has(L.route.id)).map(L=>L.route.id).join(",")),[x.pathname+x.search]},[h,l.v8_trailingSlashAwareDataRequests,m,a,c,g,t,s,f]),M=xt.useMemo(()=>Z2(v,c),[v,c]),b=eE(v);return xt.createElement(xt.Fragment,null,_.map(R=>xt.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...i})),M.map(R=>xt.createElement("link",{key:R,rel:"modulepreload",href:R,...i})),b.map(({key:R,link:S})=>xt.createElement("link",{key:R,nonce:i.nonce,...S,crossOrigin:S.crossOrigin??i.crossOrigin})))}function aE(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var rE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{rE&&(window.__reactRouterVersion="7.18.4")}catch{}function sE({basename:s,children:t,useTransitions:i,window:a}){let l=xt.useRef();l.current==null&&(l.current=BM({window:a,v5Compat:!0}));let c=l.current,[f,h]=xt.useState({action:c.action,location:c.location}),m=xt.useCallback(p=>{i===!1?h(p):xt.startTransition(()=>h(p))},[i]);return xt.useLayoutEffect(()=>c.listen(m),[c,m]),xt.createElement(P2,{basename:s,children:t,location:f.location,navigationType:f.action,navigator:c,useTransitions:i})}var Gu=xt.forwardRef(function({onClick:t,discover:i="render",prefetch:a="none",relative:l,reloadDocument:c,replace:f,mask:h,state:m,target:p,to:g,preventScrollReset:v,viewTransition:_,defaultShouldRevalidate:M,...b},R){let{basename:S,navigator:x,useTransitions:L}=xt.useContext(gi),z=typeof g=="string"&&Bp.test(g),D=Ex(g,S);g=D.to;let U=x2(g,{relative:l}),N=ra(),I=null;if(h){let Q=Bu(h,[],N.mask?N.mask.pathname:"/",!0);S!=="/"&&(Q.pathname=Q.pathname==="/"?S:Hi([S,Q.pathname])),I=x.createHref(Q)}let[T,O,V]=$2(a,b),Y=uE(g,{replace:f,mask:h,state:m,target:p,preventScrollReset:v,relative:l,viewTransition:_,defaultShouldRevalidate:M,useTransitions:L});function K(Q){t&&t(Q),Q.defaultPrevented||Y(Q)}let et=!(D.isExternal||c),W=xt.createElement("a",{...b,...V,href:(et?I:void 0)||D.absoluteURL||U,onClick:et?K:t,ref:aE(R,O),target:p,"data-discover":!z&&i==="render"?"true":void 0});return T&&!z?xt.createElement(xt.Fragment,null,W,xt.createElement(tE,{page:U})):W});Gu.displayName="Link";var oE=xt.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:a="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},g){let v=Tl(f,{relative:p.relative}),_=ra(),M=xt.useContext(zu),{navigator:b,basename:R}=xt.useContext(gi),S=M!=null&&mE(v)&&h===!0,x=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,L=_.pathname,z=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(L=L.toLowerCase(),z=z?z.toLowerCase():null,x=x.toLowerCase()),z&&R&&(z=Oa(z,R)||z);const D=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let U=L===x||!l&&L.startsWith(x)&&L.charAt(D)==="/",N=z!=null&&(z===x||!l&&z.startsWith(x)&&z.charAt(x.length)==="/"),I={isActive:U,isPending:N,isTransitioning:S},T=U?t:void 0,O;typeof a=="function"?O=a(I):O=[a,U?"active":null,N?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let V=typeof c=="function"?c(I):c;return xt.createElement(Gu,{...p,"aria-current":T,className:O,ref:g,style:V,to:f,viewTransition:h},typeof m=="function"?m(I):m)});oE.displayName="NavLink";var lE=xt.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:a,replace:l,state:c,method:f=pu,action:h,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:v,defaultShouldRevalidate:_,...M},b)=>{let{useTransitions:R}=xt.useContext(gi),S=hE(),x=pE(h,{relative:p}),L=f.toLowerCase()==="get"?"get":"post",z=typeof h=="string"&&Bp.test(h),D=U=>{if(m&&m(U),U.defaultPrevented)return;U.preventDefault();let N=U.nativeEvent.submitter,I=N?.getAttribute("formmethod")||f,T=()=>S(N||U.currentTarget,{fetcherKey:t,method:I,navigate:i,replace:l,state:c,relative:p,preventScrollReset:g,viewTransition:v,defaultShouldRevalidate:_});R&&i!==!1?xt.startTransition(()=>T()):T()};return xt.createElement("form",{ref:b,method:L,action:x,onSubmit:a?m:D,...M,"data-discover":!z&&s==="render"?"true":void 0})});lE.displayName="Form";function cE(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ox(s){let t=xt.useContext(eo);return en(t,cE(s)),t}function uE(s,{target:t,replace:i,mask:a,state:l,preventScrollReset:c,relative:f,viewTransition:h,defaultShouldRevalidate:m,useTransitions:p}={}){let g=Vp(),v=ra(),_=Tl(s,{relative:f});return xt.useCallback(M=>{if(G2(M,t)){M.preventDefault();let b=i!==void 0?i:qr(v)===qr(_),R=()=>g(s,{replace:b,mask:a,state:l,preventScrollReset:c,relative:f,viewTransition:h,defaultShouldRevalidate:m});p?xt.startTransition(()=>R()):R()}},[v,g,_,i,a,l,t,s,c,f,h,m,p])}var fE=0,dE=()=>`__${String(++fE)}__`;function hE(){let{router:s}=Ox("useSubmit"),{basename:t}=xt.useContext(gi),i=D2(),a=s.fetch,l=s.navigate;return xt.useCallback(async(c,f={})=>{let{action:h,method:m,encType:p,formData:g,body:v}=X2(c,t);if(f.navigate===!1){let _=f.fetcherKey||dE();await a(_,i,f.action||h,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:v,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:v,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[a,l,t,i])}function pE(s,{relative:t}={}){let{basename:i}=xt.useContext(gi),a=xt.useContext(aa);en(a,"useFormAction must be used inside a RouteContext");let[l]=a.matches.slice(-1),c={...Tl(s||".",{relative:t})},f=ra();if(s==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(v=>v).forEach(v=>h.append("index",v));let g=h.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Hi([i,c.pathname])),qr(c)}function mE(s,{relative:t}={}){let i=xt.useContext(Ax);en(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Ox("useViewTransitionState"),l=Tl(s,{relative:t});if(!i.isTransitioning)return!1;let c=Oa(i.currentLocation.pathname,a)||i.currentLocation.pathname,f=Oa(i.nextLocation.pathname,a)||i.nextLocation.pathname;return Mu(l.pathname,f)!=null||Mu(l.pathname,c)!=null}const Xh=[{path:"about",label:"About Me",o:.22,p:.026,t:40,a:20,r:40,tilt:0,base:"#8c857d",spots:[[.2,.35,.03,.05,"#5b5650"],[.5,.6,.04,.06,"#a49d94"],[.75,.4,.03,.04,"#5b5650"],[.35,.75,.025,.04,"#5b5650"],[.9,.55,.03,.05,"#5b5650"],[.1,.7,.03,.05,"#a49d94"]]},{path:"frameworks",label:"Frameworks",title:"Libraries & Frameworks",o:.33,p:.036,t:60,a:140,r:60,rev:!0,tilt:3,base:"#d9a24c",bands:[[.15,.3,"rgba(243,208,142,.5)"],[.5,.7,"rgba(185,127,53,.45)"]],spots:[[.3,.35,.14,.08,"#f3d08e"],[.65,.6,.16,.08,"#b97f35"],[.5,.2,.12,.05,"#f3d08e"],[.85,.5,.12,.07,"#f3d08e"]]},{path:"contact",label:"Contact",title:"Contact and Socials",o:.44,p:.04,t:80,a:250,r:14,tilt:.41,base:"#1f6fd1",spots:[[.22,.38,.09,.16,"#2f9a4f"],[.55,.55,.08,.14,"#3aa65a"],[.78,.35,.07,.12,"#2f9a4f"],[.4,.3,.05,.06,"#3aa65a"],[.7,.3,.1,.04,"rgba(255,255,255,.7)"],[.3,.65,.1,.035,"rgba(255,255,255,.6)"],[.9,.7,.08,.03,"rgba(255,255,255,.6)"],[.5,0,.6,.08,"#f0f6ff"],[.5,1,.6,.08,"#f0f6ff"]]},{path:"technologies",label:"Technologies",o:.56,p:.03,t:100,a:330,r:16,tilt:.44,base:"#c1440e",spots:[[.3,.5,.1,.12,"#7a2a0a"],[.65,.35,.07,.09,"#e07a4a"],[.8,.62,.08,.08,"#7a2a0a"],[.5,0,.6,.07,"#f0e0d8"],[.5,1,.6,.07,"#f0e0d8"]]},{path:"projects",label:"Projects",o:.69,p:.082,t:150,a:60,r:8,tilt:.05,base:"#c99a63",bands:[[.12,.2,"rgba(120,70,40,.55)"],[.3,.38,"rgba(150,90,50,.45)"],[.46,.56,"rgba(120,70,40,.5)"],[.66,.74,"rgba(150,90,50,.45)"],[.82,.88,"rgba(120,70,40,.5)"]],spots:[[.4,.62,.07,.05,"#b5472b"]]},{path:"experience",label:"Experience",o:.82,p:.058,t:190,a:200,r:9,tilt:.47,ring:!0,base:"#d4b36a",bands:[[.2,.3,"rgba(150,110,50,.4)"],[.45,.55,"rgba(150,110,50,.35)"],[.7,.78,"rgba(150,110,50,.4)"]],spots:[[.6,.4,.08,.03,"#f1dca0"]]},{path:"education",label:"Education",o:.92,p:.044,t:240,a:290,r:13,rev:!0,tilt:1.4,base:"#66c8cf",spots:[[.35,.45,.12,.05,"#a5ecec"],[.7,.65,.1,.05,"#4aa7b0"]]},{path:"blog",label:"Blog",o:1,p:.044,t:300,a:110,r:12,tilt:.5,base:"#4a63d6",spots:[[.3,.4,.08,.07,"#1f2f94"],[.65,.6,.12,.03,"rgba(255,255,255,.55)"]]},{path:"research",label:"Research",kind:"hole",pos:[-7.2,.2,-5]}];const Zp="186",gE=0,fv=1,_E=2,gu=1,vE=2,fl=3,Yr=0,ti=1,Bi=2,La=0,hl=1,pl=2,dv=3,hv=4,xE=5,Zs=100,SE=101,yE=102,ME=103,EE=104,bE=200,TE=201,AE=202,RE=203,Px=204,Ix=205,CE=206,wE=207,DE=208,LE=209,UE=210,NE=211,OE=212,PE=213,IE=214,Wh=0,qh=1,Yh=2,vl=3,Zh=4,Kh=5,Qh=6,Jh=7,Bx=0,BE=1,zE=2,$i=0,zx=1,Fx=2,Hx=3,Gx=4,Vx=5,kx=6,Xx=7,Wx=300,Zr=301,$s=302,lh=303,ch=304,Vu=306,jh=1e3,wa=1001,$h=1002,Nn=1003,FE=1004,Hc=1005,Bn=1006,uh=1007,kr=1008,mi=1009,qx=1010,Yx=1011,xl=1012,Kp=1013,ea=1014,Ji=1015,na=1016,Qp=1017,Jp=1018,Sl=1020,Zx=35902,Kx=35899,Qx=1021,Jx=1022,Fi=1023,Pa=1026,Xr=1027,jx=1028,jp=1029,Kr=1030,$p=1031,tm=1033,_u=33776,vu=33777,xu=33778,Su=33779,tp=35840,ep=35841,np=35842,ip=35843,ap=36196,rp=37492,sp=37496,op=37488,lp=37489,Eu=37490,cp=37491,up=37808,fp=37809,dp=37810,hp=37811,pp=37812,mp=37813,gp=37814,_p=37815,vp=37816,xp=37817,Sp=37818,yp=37819,Mp=37820,Ep=37821,bp=36492,Tp=36494,Ap=36495,Rp=36283,Cp=36284,bu=36285,wp=36286,HE=3200,Dp=0,GE=1,mr="",di="srgb",Tu="srgb-linear",Au="linear",ze="srgb",fh=7680,VE=519,kE=512,XE=513,WE=514,em=515,qE=516,YE=517,nm=518,ZE=519,$x=35044,pv="300 es",ji=2e3,yl=2001;function KE(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ru(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function QE(){const s=Ru("canvas");return s.style.display="block",s}const mv={};function Cu(...s){const t="THREE."+s.shift();console.log(t,...s)}function tS(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ne(...s){s=tS(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...s)}}function Ae(...s){s=tS(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...s)}}function Qs(...s){const t=s.join(" ");t in mv||(mv[t]=!0,ne(...s))}function JE(s,t,i){return new Promise(function(a,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:a()}}setTimeout(c,i)})}const jE={[Wh]:qh,[Yh]:Qh,[Zh]:Jh,[vl]:Kh,[qh]:Wh,[Qh]:Yh,[Jh]:Zh,[Kh]:vl};class Jr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(i)===-1&&a[t].push(i)}hasEventListener(t,i){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(i)!==-1}removeEventListener(t,i){const a=this._listeners;if(a===void 0)return;const l=a[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const a=i[t.type];if(a!==void 0){t.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gv=1234567;const ml=Math.PI/180,Ml=180/Math.PI;function Ua(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[a&255]+Pn[a>>8&255]+Pn[a>>16&255]+Pn[a>>24&255]).toLowerCase()}function Me(s,t,i){return Math.max(t,Math.min(i,s))}function im(s,t){return(s%t+t)%t}function $E(s,t,i,a,l){return a+(s-t)*(l-a)/(i-t)}function t1(s,t,i){return s!==t?(i-s)/(t-s):0}function gl(s,t,i){return(1-i)*s+i*t}function e1(s,t,i,a){return gl(s,t,1-Math.exp(-i*a))}function n1(s,t=1){return t-Math.abs(im(s,t*2)-t)}function i1(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function a1(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function r1(s,t){return s+Math.floor(Math.random()*(t-s+1))}function s1(s,t){return s+Math.random()*(t-s)}function o1(s){return s*(.5-Math.random())}function l1(s){s!==void 0&&(gv=s);let t=gv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function c1(s){return s*ml}function u1(s){return s*Ml}function f1(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function d1(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function h1(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function p1(s,t,i,a,l){const c=Math.cos,f=Math.sin,h=c(i/2),m=f(i/2),p=c((t+a)/2),g=f((t+a)/2),v=c((t-a)/2),_=f((t-a)/2),M=c((a-t)/2),b=f((a-t)/2);switch(l){case"XYX":s.set(h*g,m*v,m*_,h*p);break;case"YZY":s.set(m*_,h*g,m*v,h*p);break;case"ZXZ":s.set(m*v,m*_,h*g,h*p);break;case"XZX":s.set(h*g,m*b,m*M,h*p);break;case"YXY":s.set(m*M,h*g,m*b,h*p);break;case"ZYZ":s.set(m*b,m*M,h*g,h*p);break;default:ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function zi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Fe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const dh={DEG2RAD:ml,RAD2DEG:Ml,generateUUID:Ua,clamp:Me,euclideanModulo:im,mapLinear:$E,inverseLerp:t1,lerp:gl,damp:e1,pingpong:n1,smoothstep:i1,smootherstep:a1,randInt:r1,randFloat:s1,randFloatSpread:o1,seededRandom:l1,degToRad:c1,radToDeg:u1,isPowerOfTwo:f1,ceilPowerOfTwo:d1,floorPowerOfTwo:h1,setQuaternionFromProperEuler:p1,normalize:Fe,denormalize:zi},um=class um{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,a=this.y,l=t.elements;return this.x=l[0]*i+l[3]*a+l[6],this.y=l[1]*i+l[4]*a+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Me(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(Me(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y;return i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const a=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*a-f*l+t.x,this.y=c*l+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};um.prototype.isVector2=!0;let le=um;class io{constructor(t=0,i=0,a=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=a,this._w=l}static slerpFlat(t,i,a,l,c,f,h){let m=a[l+0],p=a[l+1],g=a[l+2],v=a[l+3],_=c[f+0],M=c[f+1],b=c[f+2],R=c[f+3];if(v!==R||m!==_||p!==M||g!==b){let S=m*_+p*M+g*b+v*R;S<0&&(_=-_,M=-M,b=-b,R=-R,S=-S);let x=1-h;if(S<.9995){const L=Math.acos(S),z=Math.sin(L);x=Math.sin(x*L)/z,h=Math.sin(h*L)/z,m=m*x+_*h,p=p*x+M*h,g=g*x+b*h,v=v*x+R*h}else{m=m*x+_*h,p=p*x+M*h,g=g*x+b*h,v=v*x+R*h;const L=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=L,p*=L,g*=L,v*=L}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,a,l,c,f){const h=a[l],m=a[l+1],p=a[l+2],g=a[l+3],v=c[f],_=c[f+1],M=c[f+2],b=c[f+3];return t[i]=h*b+g*v+m*M-p*_,t[i+1]=m*b+g*_+p*v-h*M,t[i+2]=p*b+g*M+h*_-m*v,t[i+3]=g*b-h*v-m*_-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,a,l){return this._x=t,this._y=i,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const a=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(a/2),g=h(l/2),v=h(c/2),_=m(a/2),M=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=_*g*v+p*M*b,this._y=p*M*v-_*g*b,this._z=p*g*b+_*M*v,this._w=p*g*v-_*M*b;break;case"YXZ":this._x=_*g*v+p*M*b,this._y=p*M*v-_*g*b,this._z=p*g*b-_*M*v,this._w=p*g*v+_*M*b;break;case"ZXY":this._x=_*g*v-p*M*b,this._y=p*M*v+_*g*b,this._z=p*g*b+_*M*v,this._w=p*g*v-_*M*b;break;case"ZYX":this._x=_*g*v-p*M*b,this._y=p*M*v+_*g*b,this._z=p*g*b-_*M*v,this._w=p*g*v+_*M*b;break;case"YZX":this._x=_*g*v+p*M*b,this._y=p*M*v+_*g*b,this._z=p*g*b-_*M*v,this._w=p*g*v-_*M*b;break;case"XZY":this._x=_*g*v-p*M*b,this._y=p*M*v-_*g*b,this._z=p*g*b+_*M*v,this._w=p*g*v+_*M*b;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const a=i/2,l=Math.sin(a);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,a=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],g=i[6],v=i[10],_=a+h+v;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(a>h&&a>v){const M=2*Math.sqrt(1+a-h-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>v){const M=2*Math.sqrt(1+h-a-v);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-a-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let a=t.dot(i)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,i){const a=this.angleTo(t);if(a===0)return this;const l=Math.min(1,i/a);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const a=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=a*g+f*h+l*p-c*m,this._y=l*g+f*m+c*h-a*p,this._z=c*g+f*p+a*m-l*h,this._w=f*g-a*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let a=t._x,l=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(a=-a,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+a*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+a*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,a){return this.copy(t).slerp(i,a)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fm=class fm{constructor(t=0,i=0,a=0){this.x=t,this.y=i,this.z=a}set(t,i,a){return a===void 0&&(a=this.z),this.x=t,this.y=i,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(_v.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(_v.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*a+c[6]*l,this.y=c[1]*i+c[4]*a+c[7]*l,this.z=c[2]*i+c[5]*a+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,a=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,a=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*a),g=2*(h*i-c*l),v=2*(c*a-f*i);return this.x=i+m*p+f*v-h*g,this.y=a+m*g+h*p-c*v,this.z=l+m*v+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*a+c[8]*l,this.y=c[1]*i+c[5]*a+c[9]*l,this.z=c[2]*i+c[6]*a+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Me(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const a=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-a*m,this.z=a*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const a=t.dot(this)/i;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return hh.copy(this).projectOnVector(t),this.sub(hh)}reflect(t){return this.sub(hh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(Me(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y,l=this.z-t.z;return i*i+a*a+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,a){const l=Math.sin(i)*t;return this.x=l*Math.sin(a),this.y=Math.cos(i)*t,this.z=l*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,a){return this.x=t*Math.sin(i),this.y=a,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=a,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(t),this.y=i,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fm.prototype.isVector3=!0;let J=fm;const hh=new J,_v=new io,dm=class dm{constructor(t,i,a,l,c,f,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,a,l,c,f,h,m,p)}set(t,i,a,l,c,f,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=a,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(t,i,a){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,l=i.elements,c=this.elements,f=a[0],h=a[3],m=a[6],p=a[1],g=a[4],v=a[7],_=a[2],M=a[5],b=a[8],R=l[0],S=l[3],x=l[6],L=l[1],z=l[4],D=l[7],U=l[2],N=l[5],I=l[8];return c[0]=f*R+h*L+m*U,c[3]=f*S+h*z+m*N,c[6]=f*x+h*D+m*I,c[1]=p*R+g*L+v*U,c[4]=p*S+g*z+v*N,c[7]=p*x+g*D+v*I,c[2]=_*R+M*L+b*U,c[5]=_*S+M*z+b*N,c[8]=_*x+M*D+b*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*h*p-a*c*g+a*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],a=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=g*f-h*p,_=h*m-g*c,M=p*c-f*m,b=i*v+a*_+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=v*R,t[1]=(l*p-g*a)*R,t[2]=(h*a-l*f)*R,t[3]=_*R,t[4]=(g*i-l*m)*R,t[5]=(l*c-h*i)*R,t[6]=M*R,t[7]=(a*m-p*i)*R,t[8]=(f*i-a*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,a,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return Qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ph.makeScale(t,i)),this}rotate(t){return Qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ph.makeRotation(-t)),this}translate(t,i){return Qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ph.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,a=t.elements;for(let l=0;l<9;l++)if(i[l]!==a[l])return!1;return!0}fromArray(t,i=0){for(let a=0;a<9;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dm.prototype.isMatrix3=!0;let oe=dm;const ph=new oe,vv=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xv=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function m1(){const s={enabled:!0,workingColorSpace:Tu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===ze&&(l.r=Na(l.r),l.g=Na(l.g),l.b=Na(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ze&&(l.r=Js(l.r),l.g=Js(l.g),l.b=Js(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===mr?Au:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Tu]:{primaries:t,whitePoint:a,transfer:Au,toXYZ:vv,fromXYZ:xv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:t,whitePoint:a,transfer:ze,toXYZ:vv,fromXYZ:xv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),s}const be=m1();function Na(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ls;class g1{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Ls===void 0&&(Ls=Ru("canvas")),Ls.width=t.width,Ls.height=t.height;const l=Ls.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),a=Ls}return a.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Ru("canvas");i.width=t.width,i.height=t.height;const a=i.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const l=a.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Na(c[f]/255)*255;return a.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(Na(i[a]/255)*255):i[a]=Na(i[a]);return{data:i,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _1=0;class am{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=Ua(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(mh(l[f].image)):c.push(mh(l[f]))}else c=mh(l);a.url=c}return i||(t.images[this.uuid]=a),a}}function mh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?g1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}let v1=0;const gh=new J;class zn extends Jr{constructor(t=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,a=wa,l=wa,c=Bn,f=kr,h=Fi,m=mi,p=zn.DEFAULT_ANISOTROPY,g=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=Ua(),this.name="",this.source=new am(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gh).x}get height(){return this.source.getSize(gh).y}get depth(){return this.source.getSize(gh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const a=t[i];if(a===void 0){ne(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ne(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jh:t.x=t.x-Math.floor(t.x);break;case wa:t.x=t.x<0?0:1;break;case $h:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jh:t.y=t.y-Math.floor(t.y);break;case wa:t.y=t.y<0?0:1;break;case $h:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Wx;zn.DEFAULT_ANISOTROPY=1;const hm=class hm{constructor(t=0,i=0,a=0,l=1){this.x=t,this.y=i,this.z=a,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,a,l){return this.x=t,this.y=i,this.z=a,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,a=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*a+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,a,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],_=m[1],M=m[5],b=m[9],R=m[2],S=m[6],x=m[10];if(Math.abs(g-_)<.01&&Math.abs(v-R)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+R)<.1&&Math.abs(b+S)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(p+1)/2,D=(M+1)/2,U=(x+1)/2,N=(g+_)/4,I=(v+R)/4,T=(b+S)/4;return z>D&&z>U?z<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(z),l=N/a,c=I/a):D>U?D<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),a=N/l,c=T/l):U<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(U),a=I/c,l=T/c),this.set(a,l,c,i),this}let L=Math.sqrt((S-b)*(S-b)+(v-R)*(v-R)+(_-g)*(_-g));return Math.abs(L)<.001&&(L=1),this.x=(S-b)/L,this.y=(v-R)/L,this.z=(_-g)/L,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this.w=Me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this.w=Me(this.w,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Me(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this.w=t.w+(i.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hm.prototype.isVector4=!0;let nn=hm;class x1 extends Jr{constructor(t=1,i=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=a.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:a.depth},c=new zn(l),f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveColorBuffer=a.resolveColorBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.storeMultisampledColorBuffer=a.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=a.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=a.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,a=1){if(this.width!==t||this.height!==i||this.depth!==a){this.width=t,this.height=i,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=a,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new am(l)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends x1{constructor(t=1,i=1,a={}){super(t,i,a),this.isWebGLRenderTarget=!0}}class eS extends zn{constructor(t=null,i=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:a,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class S1 extends zn{constructor(t=null,i=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:a,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Iu=class Iu{constructor(t,i,a,l,c,f,h,m,p,g,v,_,M,b,R,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,a,l,c,f,h,m,p,g,v,_,M,b,R,S)}set(t,i,a,l,c,f,h,m,p,g,v,_,M,b,R,S){const x=this.elements;return x[0]=t,x[4]=i,x[8]=a,x[12]=l,x[1]=c,x[5]=f,x[9]=h,x[13]=m,x[2]=p,x[6]=g,x[10]=v,x[14]=_,x[3]=M,x[7]=b,x[11]=R,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Iu().fromArray(this.elements)}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(t){const i=this.elements,a=t.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,a){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,i,a){return this.set(t.x,i.x,a.x,0,t.y,i.y,a.y,0,t.z,i.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,a=t.elements,l=1/Us.setFromMatrixColumn(t,0).length(),c=1/Us.setFromMatrixColumn(t,1).length(),f=1/Us.setFromMatrixColumn(t,2).length();return i[0]=a[0]*l,i[1]=a[1]*l,i[2]=a[2]*l,i[3]=0,i[4]=a[4]*c,i[5]=a[5]*c,i[6]=a[6]*c,i[7]=0,i[8]=a[8]*f,i[9]=a[9]*f,i[10]=a[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,a=t.x,l=t.y,c=t.z,f=Math.cos(a),h=Math.sin(a),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=f*g,M=f*v,b=h*g,R=h*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+b*p,i[5]=_-R*p,i[9]=-h*m,i[2]=R-_*p,i[6]=b+M*p,i[10]=f*m}else if(t.order==="YXZ"){const _=m*g,M=m*v,b=p*g,R=p*v;i[0]=_+R*h,i[4]=b*h-M,i[8]=f*p,i[1]=f*v,i[5]=f*g,i[9]=-h,i[2]=M*h-b,i[6]=R+_*h,i[10]=f*m}else if(t.order==="ZXY"){const _=m*g,M=m*v,b=p*g,R=p*v;i[0]=_-R*h,i[4]=-f*v,i[8]=b+M*h,i[1]=M+b*h,i[5]=f*g,i[9]=R-_*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const _=f*g,M=f*v,b=h*g,R=h*v;i[0]=m*g,i[4]=b*p-M,i[8]=_*p+R,i[1]=m*v,i[5]=R*p+_,i[9]=M*p-b,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const _=f*m,M=f*p,b=h*m,R=h*p;i[0]=m*g,i[4]=R-_*v,i[8]=b*v+M,i[1]=v,i[5]=f*g,i[9]=-h*g,i[2]=-p*g,i[6]=M*v+b,i[10]=_-R*v}else if(t.order==="XZY"){const _=f*m,M=f*p,b=h*m,R=h*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=_*v+R,i[5]=f*g,i[9]=M*v-b,i[2]=b*v-M,i[6]=h*g,i[10]=R*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(y1,t,M1)}lookAt(t,i,a){const l=this.elements;return ui.subVectors(t,i),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),cr.crossVectors(a,ui),cr.lengthSq()===0&&(Math.abs(a.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),cr.crossVectors(a,ui)),cr.normalize(),Gc.crossVectors(ui,cr),l[0]=cr.x,l[4]=Gc.x,l[8]=ui.x,l[1]=cr.y,l[5]=Gc.y,l[9]=ui.y,l[2]=cr.z,l[6]=Gc.z,l[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,l=i.elements,c=this.elements,f=a[0],h=a[4],m=a[8],p=a[12],g=a[1],v=a[5],_=a[9],M=a[13],b=a[2],R=a[6],S=a[10],x=a[14],L=a[3],z=a[7],D=a[11],U=a[15],N=l[0],I=l[4],T=l[8],O=l[12],V=l[1],Y=l[5],K=l[9],et=l[13],W=l[2],Q=l[6],B=l[10],H=l[14],lt=l[3],at=l[7],dt=l[11],w=l[15];return c[0]=f*N+h*V+m*W+p*lt,c[4]=f*I+h*Y+m*Q+p*at,c[8]=f*T+h*K+m*B+p*dt,c[12]=f*O+h*et+m*H+p*w,c[1]=g*N+v*V+_*W+M*lt,c[5]=g*I+v*Y+_*Q+M*at,c[9]=g*T+v*K+_*B+M*dt,c[13]=g*O+v*et+_*H+M*w,c[2]=b*N+R*V+S*W+x*lt,c[6]=b*I+R*Y+S*Q+x*at,c[10]=b*T+R*K+S*B+x*dt,c[14]=b*O+R*et+S*H+x*w,c[3]=L*N+z*V+D*W+U*lt,c[7]=L*I+z*Y+D*Q+U*at,c[11]=L*T+z*K+D*B+U*dt,c[15]=L*O+z*et+D*H+U*w,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],g=t[2],v=t[6],_=t[10],M=t[14],b=t[3],R=t[7],S=t[11],x=t[15],L=m*M-p*_,z=h*M-p*v,D=h*_-m*v,U=f*M-p*g,N=f*_-m*g,I=f*v-h*g;return i*(R*L-S*z+x*D)-a*(b*L-S*U+x*N)+l*(b*z-R*U+x*I)-c*(b*D-R*N+S*I)}determinantAffine(){const t=this.elements,i=t[0],a=t[4],l=t[8],c=t[1],f=t[5],h=t[9],m=t[2],p=t[6],g=t[10];return i*(f*g-h*p)-a*(c*g-h*m)+l*(c*p-f*m)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,a){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=a),this}invert(){const t=this.elements,i=t[0],a=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=t[9],_=t[10],M=t[11],b=t[12],R=t[13],S=t[14],x=t[15],L=i*h-a*f,z=i*m-l*f,D=i*p-c*f,U=a*m-l*h,N=a*p-c*h,I=l*p-c*m,T=g*R-v*b,O=g*S-_*b,V=g*x-M*b,Y=v*S-_*R,K=v*x-M*R,et=_*x-M*S,W=L*et-z*K+D*Y+U*V-N*O+I*T;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/W;return t[0]=(h*et-m*K+p*Y)*Q,t[1]=(l*K-a*et-c*Y)*Q,t[2]=(R*I-S*N+x*U)*Q,t[3]=(_*N-v*I-M*U)*Q,t[4]=(m*V-f*et-p*O)*Q,t[5]=(i*et-l*V+c*O)*Q,t[6]=(S*D-b*I-x*z)*Q,t[7]=(g*I-_*D+M*z)*Q,t[8]=(f*K-h*V+p*T)*Q,t[9]=(a*V-i*K-c*T)*Q,t[10]=(b*N-R*D+x*L)*Q,t[11]=(v*D-g*N-M*L)*Q,t[12]=(h*O-f*Y-m*T)*Q,t[13]=(i*Y-a*O+l*T)*Q,t[14]=(R*z-b*U-S*L)*Q,t[15]=(g*U-v*z+_*L)*Q,this}scale(t){const i=this.elements,a=t.x,l=t.y,c=t.z;return i[0]*=a,i[4]*=l,i[8]*=c,i[1]*=a,i[5]*=l,i[9]*=c,i[2]*=a,i[6]*=l,i[10]*=c,i[3]*=a,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,a,l))}makeTranslation(t,i,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const a=Math.cos(i),l=Math.sin(i),c=1-a,f=t.x,h=t.y,m=t.z,p=c*f,g=c*h;return this.set(p*f+a,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+a,g*m-l*f,0,p*m-l*h,g*m+l*f,c*m*m+a,0,0,0,0,1),this}makeScale(t,i,a){return this.set(t,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,i,a,l,c,f){return this.set(1,a,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,a){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,g=f+f,v=h+h,_=c*p,M=c*g,b=c*v,R=f*g,S=f*v,x=h*v,L=m*p,z=m*g,D=m*v,U=a.x,N=a.y,I=a.z;return l[0]=(1-(R+x))*U,l[1]=(M+D)*U,l[2]=(b-z)*U,l[3]=0,l[4]=(M-D)*N,l[5]=(1-(_+x))*N,l[6]=(S+L)*N,l[7]=0,l[8]=(b+z)*I,l[9]=(S-L)*I,l[10]=(1-(_+R))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,a){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),i.identity(),this;let f=Us.set(l[0],l[1],l[2]).length();const h=Us.set(l[4],l[5],l[6]).length(),m=Us.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Oi.copy(this);const p=1/f,g=1/h,v=1/m;return Oi.elements[0]*=p,Oi.elements[1]*=p,Oi.elements[2]*=p,Oi.elements[4]*=g,Oi.elements[5]*=g,Oi.elements[6]*=g,Oi.elements[8]*=v,Oi.elements[9]*=v,Oi.elements[10]*=v,i.setFromRotationMatrix(Oi),a.x=f,a.y=h,a.z=m,this}makePerspective(t,i,a,l,c,f,h=ji,m=!1){const p=this.elements,g=2*c/(i-t),v=2*c/(a-l),_=(i+t)/(i-t),M=(a+l)/(a-l);let b,R;if(m)b=c/(f-c),R=f*c/(f-c);else if(h===ji)b=-(f+c)/(f-c),R=-2*f*c/(f-c);else if(h===yl)b=-f/(f-c),R=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,a,l,c,f,h=ji,m=!1){const p=this.elements,g=2/(i-t),v=2/(a-l),_=-(i+t)/(i-t),M=-(a+l)/(a-l);let b,R;if(m)b=1/(f-c),R=f/(f-c);else if(h===ji)b=-2/(f-c),R=-(f+c)/(f-c);else if(h===yl)b=-1/(f-c),R=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,a=t.elements;for(let l=0;l<16;l++)if(i[l]!==a[l])return!1;return!0}fromArray(t,i=0){for(let a=0;a<16;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t[i+9]=a[9],t[i+10]=a[10],t[i+11]=a[11],t[i+12]=a[12],t[i+13]=a[13],t[i+14]=a[14],t[i+15]=a[15],t}};Iu.prototype.isMatrix4=!0;let je=Iu;const Us=new J,Oi=new je,y1=new J(0,0,0),M1=new J(1,1,1),cr=new J,Gc=new J,ui=new J,Sv=new je,yv=new io;class vr{constructor(t=0,i=0,a=0,l=vr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=a,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,a,l=this._order){return this._x=t,this._y=i,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,a=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],_=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,a){return Sv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sv,i,a)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return yv.setFromEuler(this),this.setFromQuaternion(yv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vr.DEFAULT_ORDER="XYZ";class rm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let E1=0;const Mv=new J,Ns=new io,ba=new je,Vc=new J,tl=new J,b1=new J,T1=new io,Ev=new J(1,0,0),bv=new J(0,1,0),Tv=new J(0,0,1),Av={type:"added"},A1={type:"removed"},Os={type:"childadded",child:null},_h={type:"childremoved",child:null};class Fn extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=Ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const t=new J,i=new vr,a=new io,l=new J(1,1,1);function c(){a.setFromEuler(i,!1)}function f(){i.setFromQuaternion(a,void 0,!1)}i._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new oe}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ns.setFromAxisAngle(t,i),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,i){return Ns.setFromAxisAngle(t,i),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(Ev,t)}rotateY(t){return this.rotateOnAxis(bv,t)}rotateZ(t){return this.rotateOnAxis(Tv,t)}translateOnAxis(t,i){return Mv.copy(t).applyQuaternion(this.quaternion),this.position.add(Mv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Ev,t)}translateY(t){return this.translateOnAxis(bv,t)}translateZ(t){return this.translateOnAxis(Tv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ba.copy(this.matrixWorld).invert())}lookAt(t,i,a){t.isVector3?Vc.copy(t):Vc.set(t,i,a);const l=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ba.lookAt(tl,Vc,this.up):ba.lookAt(Vc,tl,this.up),this.quaternion.setFromRotationMatrix(ba),l&&(ba.extractRotation(l.matrixWorld),Ns.setFromRotationMatrix(ba),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Av),Os.child=t,this.dispatchEvent(Os),Os.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(A1),_h.child=t,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ba.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ba.multiply(t.parent.matrixWorld)),t.applyMatrix4(ba),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Av),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,a=[]){this[t]===i&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,t,b1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,T1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,a=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*a-c[8]*l,c[13]+=a-c[1]*i-c[5]*a-c[9]*l,c[14]+=l-c[2]*i-c[6]*a-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].updateMatrixWorld(t)}updateWorldMatrix(t,i,a=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),i===!0){const c=this.children;for(let f=0,h=c.length;f<h;f++)c[f].updateWorldMatrix(!1,!0,a)}}toJSON(t){const i=t===void 0||typeof t=="string",a={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),v=f(t.shapes),_=f(t.skeletons),M=f(t.animations),b=f(t.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),M.length>0&&(a.animations=M),b.length>0&&(a.nodes=b)}return a.object=l,a;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let a=0;a<t.children.length;a++){const l=t.children[a];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Fn.DEFAULT_UP=new J(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hi extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const R1={type:"move"};class vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const a of t.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,a){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const R of t.hand.values()){const S=i.getJointPose(R,a),x=this._getHandJoint(p,R);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),M=.02,b=.005;p.inputState.pinching&&_>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(l=i.getPose(t.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(R1)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const a=new hi;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[i.jointName]=a,t.add(a)}return t.joints[i.jointName]}}const nS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},kc={h:0,s:0,l:0};function xh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Te{constructor(t,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,a)}set(t,i,a){if(i===void 0&&a===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(t,i,a,l=be.workingColorSpace){return this.r=t,this.g=i,this.b=a,be.colorSpaceToWorking(this,l),this}setHSL(t,i,a,l=be.workingColorSpace){if(t=im(t,1),i=Me(i,0,1),a=Me(a,0,1),i===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+i):a+i-a*i,f=2*a-c;this.r=xh(f,c,t+1/3),this.g=xh(f,c,t),this.b=xh(f,c,t-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(t,i=di){function a(c){c!==void 0&&parseFloat(c)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ne("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=di){const a=nS[t.toLowerCase()];return a!==void 0?this.setHex(a,i):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Na(t.r),this.g=Na(t.g),this.b=Na(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return be.workingToColorSpace(In.copy(this),t),Math.round(Me(In.r*255,0,255))*65536+Math.round(Me(In.g*255,0,255))*256+Math.round(Me(In.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=be.workingColorSpace){be.workingToColorSpace(In.copy(this),i);const a=In.r,l=In.g,c=In.b,f=Math.max(a,l,c),h=Math.min(a,l,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=g<=.5?v/(f+h):v/(2-f-h),f){case a:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-a)/v+2;break;case c:m=(a-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=be.workingColorSpace){return be.workingToColorSpace(In.copy(this),i),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=di){be.workingToColorSpace(In.copy(this),t);const i=In.r,a=In.g,l=In.b;return t!==di?`color(${t} ${i.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(t,i,a){return this.getHSL(ur),this.setHSL(ur.h+t,ur.s+i,ur.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,a){return this.r=t.r+(i.r-t.r)*a,this.g=t.g+(i.g-t.g)*a,this.b=t.b+(i.b-t.b)*a,this}lerpHSL(t,i){this.getHSL(ur),t.getHSL(kc);const a=gl(ur.h,kc.h,i),l=gl(ur.s,kc.s,i),c=gl(ur.l,kc.l,i);return this.setHSL(a,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,a=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*a+c[6]*l,this.g=c[1]*i+c[4]*a+c[7]*l,this.b=c[2]*i+c[5]*a+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Te;Te.NAMES=nS;class C1 extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vr,this.environmentIntensity=1,this.environmentRotation=new vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Pi=new J,Ta=new J,Sh=new J,Aa=new J,Ps=new J,Is=new J,Rv=new J,yh=new J,Mh=new J,Eh=new J,bh=new nn,Th=new nn,Ah=new nn;class Ci{constructor(t=new J,i=new J,a=new J){this.a=t,this.b=i,this.c=a}static getNormal(t,i,a,l){l.subVectors(a,i),Pi.subVectors(t,i),l.cross(Pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,a,l,c){Pi.subVectors(l,i),Ta.subVectors(a,i),Sh.subVectors(t,i);const f=Pi.dot(Pi),h=Pi.dot(Ta),m=Pi.dot(Sh),p=Ta.dot(Ta),g=Ta.dot(Sh),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const _=1/v,M=(p*m-h*g)*_,b=(f*g-h*m)*_;return c.set(1-M-b,b,M)}static containsPoint(t,i,a,l){return this.getBarycoord(t,i,a,l,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(t,i,a,l,c,f,h,m){return this.getBarycoord(t,i,a,l,Aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Aa.x),m.addScaledVector(f,Aa.y),m.addScaledVector(h,Aa.z),m)}static getInterpolatedAttribute(t,i,a,l,c,f){return bh.setScalar(0),Th.setScalar(0),Ah.setScalar(0),bh.fromBufferAttribute(t,i),Th.fromBufferAttribute(t,a),Ah.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(bh,c.x),f.addScaledVector(Th,c.y),f.addScaledVector(Ah,c.z),f}static isFrontFacing(t,i,a,l){return Pi.subVectors(a,i),Ta.subVectors(t,i),Pi.cross(Ta).dot(l)<0}set(t,i,a){return this.a.copy(t),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(t,i,a,l){return this.a.copy(t[i]),this.b.copy(t[a]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,a,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),Pi.cross(Ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ci.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,a,l,c){return Ci.getInterpolation(t,this.a,this.b,this.c,i,a,l,c)}containsPoint(t){return Ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const a=this.a,l=this.b,c=this.c;let f,h;Ps.subVectors(l,a),Is.subVectors(c,a),yh.subVectors(t,a);const m=Ps.dot(yh),p=Is.dot(yh);if(m<=0&&p<=0)return i.copy(a);Mh.subVectors(t,l);const g=Ps.dot(Mh),v=Is.dot(Mh);if(g>=0&&v<=g)return i.copy(l);const _=m*v-g*p;if(_<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(a).addScaledVector(Ps,f);Eh.subVectors(t,c);const M=Ps.dot(Eh),b=Is.dot(Eh);if(b>=0&&M<=b)return i.copy(c);const R=M*p-m*b;if(R<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(a).addScaledVector(Is,h);const S=g*b-M*v;if(S<=0&&v-g>=0&&M-b>=0)return Rv.subVectors(c,l),h=(v-g)/(v-g+(M-b)),i.copy(l).addScaledVector(Rv,h);const x=1/(S+R+_);return f=R*x,h=_*x,i.copy(a).addScaledVector(Ps,f).addScaledVector(Is,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Al{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i+=3)this.expandByPoint(Ii.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,a=t.count;i<a;i++)this.expandByPoint(Ii.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const a=Ii.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Ii):Ii.fromBufferAttribute(c,f),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Xc.copy(a.boundingBox)),Xc.applyMatrix4(t.matrixWorld),this.union(Xc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,a;return t.normal.x>0?(i=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),i<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(el),Wc.subVectors(this.max,el),Bs.subVectors(t.a,el),zs.subVectors(t.b,el),Fs.subVectors(t.c,el),fr.subVectors(zs,Bs),dr.subVectors(Fs,zs),zr.subVectors(Bs,Fs);let i=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-zr.z,zr.y,fr.z,0,-fr.x,dr.z,0,-dr.x,zr.z,0,-zr.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-zr.y,zr.x,0];return!Rh(i,Bs,zs,Fs,Wc)||(i=[1,0,0,0,1,0,0,0,1],!Rh(i,Bs,zs,Fs,Wc))?!1:(qc.crossVectors(fr,dr),i=[qc.x,qc.y,qc.z],Rh(i,Bs,zs,Fs,Wc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ra),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ra=[new J,new J,new J,new J,new J,new J,new J,new J],Ii=new J,Xc=new Al,Bs=new J,zs=new J,Fs=new J,fr=new J,dr=new J,zr=new J,el=new J,Wc=new J,qc=new J,Fr=new J;function Rh(s,t,i,a,l){for(let c=0,f=s.length-3;c<=f;c+=3){Fr.fromArray(s,c);const h=l.x*Math.abs(Fr.x)+l.y*Math.abs(Fr.y)+l.z*Math.abs(Fr.z),m=t.dot(Fr),p=i.dot(Fr),g=a.dot(Fr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const Sn=new J,Yc=new le;let w1=0;class ta extends Jr{constructor(t,i,a=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:w1++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=a,this.usage=$x,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,a){t*=this.itemSize,a*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[a+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)Yc.fromBufferAttribute(this,i),Yc.applyMatrix3(t),this.setXY(i,Yc.x,Yc.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix3(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(t){for(let i=0,a=this.count;i<a;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix4(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let i=0,a=this.count;i<a;i++)Sn.fromBufferAttribute(this,i),Sn.applyNormalMatrix(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let i=0,a=this.count;i<a;i++)Sn.fromBufferAttribute(this,i),Sn.transformDirection(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let a=this.array[t*this.itemSize+i];return this.normalized&&(a=zi(a,this.array)),a}setComponent(t,i,a){return this.normalized&&(a=Fe(a,this.array)),this.array[t*this.itemSize+i]=a,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=zi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=zi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=zi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=zi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,a){return t*=this.itemSize,this.normalized&&(i=Fe(i,this.array),a=Fe(a,this.array)),this.array[t+0]=i,this.array[t+1]=a,this}setXYZ(t,i,a,l){return t*=this.itemSize,this.normalized&&(i=Fe(i,this.array),a=Fe(a,this.array),l=Fe(l,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=l,this}setXYZW(t,i,a,l,c){return t*=this.itemSize,this.normalized&&(i=Fe(i,this.array),a=Fe(a,this.array),l=Fe(l,this.array),c=Fe(c,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class iS extends ta{constructor(t,i,a){super(new Uint16Array(t),i,a)}}class aS extends ta{constructor(t,i,a){super(new Uint32Array(t),i,a)}}class un extends ta{constructor(t,i,a){super(new Float32Array(t),i,a)}}const D1=new Al,nl=new J,Ch=new J;class ku{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const a=this.center;i!==void 0?a.copy(i):D1.setFromPoints(t).getCenter(a);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const a=this.center.distanceToSquared(t);return i.copy(t),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nl.subVectors(t,this.center);const i=nl.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),l=(a-this.radius)*.5;this.center.addScaledVector(nl,l/a),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ch.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nl.copy(t.center).add(Ch)),this.expandByPoint(nl.copy(t.center).sub(Ch))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let L1=0;const Ri=new je,wh=new Fn,Hs=new J,fi=new Al,il=new Al,Rn=new J;class Hn extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L1++}),this.uuid=Ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(KE(t)?aS:iS)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,a=0){this.groups.push({start:t,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new oe().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ri.makeRotationFromQuaternion(t),this.applyMatrix4(Ri),this}rotateX(t){return Ri.makeRotationX(t),this.applyMatrix4(Ri),this}rotateY(t){return Ri.makeRotationY(t),this.applyMatrix4(Ri),this}rotateZ(t){return Ri.makeRotationZ(t),this.applyMatrix4(Ri),this}translate(t,i,a){return Ri.makeTranslation(t,i,a),this.applyMatrix4(Ri),this}scale(t,i,a){return Ri.makeScale(t,i,a),this.applyMatrix4(Ri),this}lookAt(t){return wh.lookAt(t),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new un(a,3))}else{const a=Math.min(t.length,i.count);for(let l=0;l<a;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Al);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let a=0,l=i.length;a<l;a++){const c=i[a];fi.setFromBufferAttribute(c),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ku);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const a=this.boundingSphere.center;if(fi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];il.setFromBufferAttribute(h),this.morphTargetsRelative?(Rn.addVectors(fi.min,il.min),fi.expandByPoint(Rn),Rn.addVectors(fi.max,il.max),fi.expandByPoint(Rn)):(fi.expandByPoint(il.min),fi.expandByPoint(il.max))}fi.getCenter(a);let l=0;for(let c=0,f=t.count;c<f;c++)Rn.fromBufferAttribute(t,c),l=Math.max(l,a.distanceToSquared(Rn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Rn.fromBufferAttribute(h,p),m&&(Hs.fromBufferAttribute(t,p),Rn.add(Hs)),l=Math.max(l,a.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==a.count)&&(f=new ta(new Float32Array(4*a.count),4),this.setAttribute("tangent",f));const h=[],m=[];for(let T=0;T<a.count;T++)h[T]=new J,m[T]=new J;const p=new J,g=new J,v=new J,_=new le,M=new le,b=new le,R=new J,S=new J;function x(T,O,V){p.fromBufferAttribute(a,T),g.fromBufferAttribute(a,O),v.fromBufferAttribute(a,V),_.fromBufferAttribute(c,T),M.fromBufferAttribute(c,O),b.fromBufferAttribute(c,V),g.sub(p),v.sub(p),M.sub(_),b.sub(_);const Y=1/(M.x*b.y-b.x*M.y);isFinite(Y)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(Y),S.copy(v).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(Y),h[T].add(R),h[O].add(R),h[V].add(R),m[T].add(S),m[O].add(S),m[V].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let T=0,O=L.length;T<O;++T){const V=L[T],Y=V.start,K=V.count;for(let et=Y,W=Y+K;et<W;et+=3)x(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const z=new J,D=new J,U=new J,N=new J;function I(T){U.fromBufferAttribute(l,T),N.copy(U);const O=h[T];z.copy(O),z.sub(U.multiplyScalar(U.dot(O))).normalize(),D.crossVectors(N,O);const Y=D.dot(m[T])<0?-1:1;f.setXYZW(T,z.x,z.y,z.z,Y)}for(let T=0,O=L.length;T<O;++T){const V=L[T],Y=V.start,K=V.count;for(let et=Y,W=Y+K;et<W;et+=3)I(t.getX(et+0)),I(t.getX(et+1)),I(t.getX(et+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==i.count)a=new ta(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let _=0,M=a.count;_<M;_++)a.setXYZ(_,0,0,0);const l=new J,c=new J,f=new J,h=new J,m=new J,p=new J,g=new J,v=new J;if(t)for(let _=0,M=t.count;_<M;_+=3){const b=t.getX(_+0),R=t.getX(_+1),S=t.getX(_+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,S),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),h.fromBufferAttribute(a,b),m.fromBufferAttribute(a,R),p.fromBufferAttribute(a,S),h.add(g),m.add(g),p.add(g),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(R,m.x,m.y,m.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let _=0,M=i.count;_<M;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,a=t.count;i<a;i++)Rn.fromBufferAttribute(t,i),Rn.normalize(),t.setXYZ(i,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,v=h.normalized,_=new p.constructor(m.length*g);let M=0,b=0;for(let R=0,S=m.length;R<S;R++){h.isInterleavedBufferAttribute?M=m[R]*h.data.stride+h.offset:M=m[R]*g;for(let x=0;x<g;x++)_[b++]=p[M++]}return new ta(_,g,v)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Hn,a=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,a);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const _=p[g],M=t(_,a);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,_=p.length;v<_;v++){const M=p[v];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let _=0,M=v.length;_<M;_++)g.push(v[_].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class U1{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=$x,this.updateRanges=[],this.version=0,this.uuid=Ua()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,a){t*=this.stride,a*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[a+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ua()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(i,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ua()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const i={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}const Xn=new J;class wu{constructor(t,i,a,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=a,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,a=this.data.count;i<a;i++)Xn.fromBufferAttribute(this,i),Xn.applyMatrix4(t),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(t){for(let i=0,a=this.count;i<a;i++)Xn.fromBufferAttribute(this,i),Xn.applyNormalMatrix(t),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}transformDirection(t){for(let i=0,a=this.count;i<a;i++)Xn.fromBufferAttribute(this,i),Xn.transformDirection(t),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}getComponent(t,i){let a=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(a=zi(a,this.array)),a}setComponent(t,i,a){return this.normalized&&(a=Fe(a,this.array)),this.data.array[t*this.data.stride+this.offset+i]=a,this}setX(t,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=zi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=zi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=zi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=zi(i,this.array)),i}setXY(t,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=Fe(i,this.array),a=Fe(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=a,this}setXYZ(t,i,a,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Fe(i,this.array),a=Fe(a,this.array),l=Fe(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=a,this.data.array[t+2]=l,this}setXYZW(t,i,a,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Fe(i,this.array),a=Fe(a,this.array),l=Fe(l,this.array),c=Fe(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=a,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){Cu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new ta(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new wu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Cu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Dh=new J,N1=new J,O1=new oe;class pr{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,a,l){return this.normal.set(t,i,a),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,a){const l=Dh.subVectors(a,i).cross(N1.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,a=!0){const l=t.delta(Dh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const f=-(t.start.dot(this.normal)+this.constant)/c;return a===!0&&(f<0||f>1)?null:i.copy(t.start).addScaledVector(l,f)}intersectsLine(t){const i=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return i<0&&a>0||a<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const a=i||O1.getNormalMatrix(t),l=this.coplanarPoint(Dh).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let P1=0;class jr extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=Ua(),this.name="",this.type="Material",this.blending=hl,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Px,this.blendDst=Ix,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=VE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fh,this.stencilZFail=fh,this.stencilZPass=fh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const a=t[i];if(a===void 0){ne(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ne(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector2&&a&&a.isVector2||l&&l.isEuler&&a&&a.isEuler||l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,a.blending=this.blending,a.side=this.side,a.shadowSide=this.shadowSide,a.vertexColors=this.vertexColors,a.opacity=this.opacity,a.transparent=this.transparent,a.blendSrc=this.blendSrc,a.blendDst=this.blendDst,a.blendEquation=this.blendEquation,a.blendSrcAlpha=this.blendSrcAlpha,a.blendDstAlpha=this.blendDstAlpha,a.blendEquationAlpha=this.blendEquationAlpha,a.blendColor=this.blendColor.getHex(),a.blendAlpha=this.blendAlpha,a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.clipIntersection=this.clipIntersection,a.clipShadows=this.clipShadows,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,a.stencilWrite=this.stencilWrite,a.polygonOffset=this.polygonOffset,a.polygonOffsetFactor=this.polygonOffsetFactor,a.polygonOffsetUnits=this.polygonOffsetUnits,a.dithering=this.dithering,a.alphaTest=this.alphaTest,a.alphaHash=this.alphaHash,a.alphaToCoverage=this.alphaToCoverage,a.premultipliedAlpha=this.premultipliedAlpha,a.forceSinglePass=this.forceSinglePass,a.allowOverride=this.allowOverride,a.visible=this.visible,a.toneMapped=this.toneMapped,a.name=this.name,this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(a.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(a.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(a.rotation=this.rotation),this.depthPacking!==void 0&&(a.depthPacking=this.depthPacking),this.linewidth!==void 0&&(a.linewidth=this.linewidth),this.linecap!==void 0&&(a.linecap=this.linecap),this.linejoin!==void 0&&(a.linejoin=this.linejoin),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.wireframe!==void 0&&(a.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(a.flatShading=this.flatShading),this.fog!==void 0&&(a.fog=this.fog),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Te().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(a=>new pr().fromJSON(a))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let a=t.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new le().fromArray(a)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let a=null;if(i!==null){const l=i.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=i[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Lp extends jr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Gs;const al=new J,Vs=new J,ks=new J,Xs=new le,rl=new le,rS=new je,Zc=new J,sl=new J,Kc=new J,Cv=new le,Lh=new le,wv=new le;class Dv extends Fn{constructor(t=new Lp){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new Hn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new U1(i,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new wu(a,3,0,!1)),Gs.setAttribute("uv",new wu(a,2,3,!1))}this.geometry=Gs,this.material=t,this.center=new le(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,i){t.camera===null&&Ae('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),rS.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-ks.z);const a=this.material.rotation;let l,c;a!==0&&(c=Math.cos(a),l=Math.sin(a));const f=this.center;Qc(Zc.set(-.5,-.5,0),ks,f,Vs,l,c),Qc(sl.set(.5,-.5,0),ks,f,Vs,l,c),Qc(Kc.set(.5,.5,0),ks,f,Vs,l,c),Cv.set(0,0),Lh.set(1,0),wv.set(1,1);let h=t.ray.intersectTriangle(Zc,sl,Kc,!1,al);if(h===null&&(Qc(sl.set(-.5,.5,0),ks,f,Vs,l,c),Lh.set(0,1),h=t.ray.intersectTriangle(Zc,Kc,sl,!1,al),h===null))return;const m=t.ray.origin.distanceTo(al);m<t.near||m>t.far||i.push({distance:m,point:al.clone(),uv:Ci.getInterpolation(al,Zc,sl,Kc,Cv,Lh,wv,new le),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Qc(s,t,i,a,l,c){Xs.subVectors(s,i).addScalar(.5).multiply(a),l!==void 0?(rl.x=c*Xs.x-l*Xs.y,rl.y=l*Xs.x+c*Xs.y):rl.copy(Xs),s.copy(t),s.x+=rl.x,s.y+=rl.y,s.applyMatrix4(rS)}const Ca=new J,Uh=new J,Jc=new J,jc=new J;class sm{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ca)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ca.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ca.copy(this.origin).addScaledVector(this.direction,i),Ca.distanceToSquared(t))}distanceSqToSegment(t,i,a,l){Uh.copy(t).add(i).multiplyScalar(.5),Jc.copy(i).sub(t).normalize(),jc.copy(this.origin).sub(Uh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Jc),h=jc.dot(this.direction),m=-jc.dot(Jc),p=jc.lengthSq(),g=Math.abs(1-f*f);let v,_,M,b;if(g>0)if(v=f*m-h,_=f*h-m,b=c*g,v>=0)if(_>=-b)if(_<=b){const R=1/g;v*=R,_*=R,M=v*(v+f*_+2*h)+_*(f*v+_+2*m)+p}else _=c,v=Math.max(0,-(f*_+h)),M=-v*v+_*(_+2*m)+p;else _=-c,v=Math.max(0,-(f*_+h)),M=-v*v+_*(_+2*m)+p;else _<=-b?(v=Math.max(0,-(-f*c+h)),_=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+_*(_+2*m)+p):_<=b?(v=0,_=Math.min(Math.max(-c,-m),c),M=_*(_+2*m)+p):(v=Math.max(0,-(f*c+h)),_=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+_*(_+2*m)+p);else _=f>0?-c:c,v=Math.max(0,-(f*_+h)),M=-v*v+_*(_+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Uh).addScaledVector(Jc,_),M}intersectSphere(t,i){if(t.radius<0)return null;Ca.subVectors(t.center,this.origin);const a=Ca.dot(this.direction),l=Ca.dot(Ca)-a*a,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=a-f,m=a+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/i;return a>=0?a:null}intersectPlane(t,i){const a=this.distanceToPlane(t);return a===null?null:this.at(a,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let a,l,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(a=(t.min.x-_.x)*p,l=(t.max.x-_.x)*p):(a=(t.max.x-_.x)*p,l=(t.min.x-_.x)*p),g>=0?(c=(t.min.y-_.y)*g,f=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,f=(t.min.y-_.y)*g),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(t.min.z-_.z)*v,m=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,m=(t.min.z-_.z)*v),a>m||h>l)||((h>a||a!==a)&&(a=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,i)}intersectsBox(t){return this.intersectBox(t,Ca)!==null}intersectTriangle(t,i,a,l,c){const f=this.origin,h=this.direction,m=h.x,p=h.y,g=h.z,v=t.x-f.x,_=t.y-f.y,M=t.z-f.z,b=i.x-f.x,R=i.y-f.y,S=i.z-f.z,x=a.x-f.x,L=a.y-f.y,z=a.z-f.z,D=Math.abs(m),U=Math.abs(p),N=Math.abs(g);let I,T,O,V,Y,K,et,W,Q,B,H,lt;if(D>=U&&D>=N?(O=m,K=v,Q=b,lt=x,m>=0?(I=p,T=g,V=_,Y=M,et=R,W=S,B=L,H=z):(I=g,T=p,V=M,Y=_,et=S,W=R,B=z,H=L)):U>=N?(O=p,K=_,Q=R,lt=L,p>=0?(I=g,T=m,V=M,Y=v,et=S,W=b,B=z,H=x):(I=m,T=g,V=v,Y=M,et=b,W=S,B=x,H=z)):(O=g,K=M,Q=S,lt=z,g>=0?(I=m,T=p,V=v,Y=_,et=b,W=R,B=x,H=L):(I=p,T=m,V=_,Y=v,et=R,W=b,B=L,H=x)),O===0)return null;const at=I/O,dt=T/O,w=1/O,G=V-at*K,rt=Y-dt*K,pt=et-at*Q,Tt=W-dt*Q,Lt=B-at*lt,tt=H-dt*lt,mt=Lt*Tt-tt*pt,At=G*tt-rt*Lt,jt=pt*rt-Tt*G;if(l){if(mt<0||At<0||jt<0)return null}else if((mt<0||At<0||jt<0)&&(mt>0||At>0||jt>0))return null;const Ft=mt+At+jt;if(Ft===0)return null;const ae=w*(mt*K+At*Q+jt*lt);return(Ft>0?ae<0:ae>0)?null:this.at(ae/Ft,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gr extends jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.combine=Bx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Lv=new je,Hr=new sm,$c=new ku,Uv=new J,tu=new J,eu=new J,nu=new J,Nh=new J,iu=new J,Nv=new J,au=new J;class cn extends Fn{constructor(t=new Hn,i=new gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){iu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],v=c[m];g!==0&&(Nh.fromBufferAttribute(v,t),f?iu.addScaledVector(Nh,g):iu.addScaledVector(Nh.sub(i),g))}i.add(iu)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),$c.copy(a.boundingSphere),$c.applyMatrix4(c),Hr.copy(t.ray).recast(t.near),!($c.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere($c,Uv)===null||Hr.origin.distanceToSquared(Uv)>(t.far-t.near)**2))&&(Lv.copy(c).invert(),Hr.copy(t.ray).applyMatrix4(Lv),!(a.boundingBox!==null&&Hr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,i,Hr)))}_computeIntersections(t,i,a){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,R=_.length;b<R;b++){const S=_[b],x=f[S.materialIndex],L=Math.max(S.start,M.start),z=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let D=L,U=z;D<U;D+=3){const N=h.getX(D),I=h.getX(D+1),T=h.getX(D+2);l=ru(this,x,t,a,p,g,v,N,I,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(h.count,M.start+M.count);for(let S=b,x=R;S<x;S+=3){const L=h.getX(S),z=h.getX(S+1),D=h.getX(S+2);l=ru(this,f,t,a,p,g,v,L,z,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,R=_.length;b<R;b++){const S=_[b],x=f[S.materialIndex],L=Math.max(S.start,M.start),z=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let D=L,U=z;D<U;D+=3){const N=D,I=D+1,T=D+2;l=ru(this,x,t,a,p,g,v,N,I,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let S=b,x=R;S<x;S+=3){const L=S,z=S+1,D=S+2;l=ru(this,f,t,a,p,g,v,L,z,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function I1(s,t,i,a,l,c,f,h){let m;if(t.side===ti?m=a.intersectTriangle(f,c,l,!0,h):m=a.intersectTriangle(l,c,f,t.side===Yr,h),m===null)return null;au.copy(h),au.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(au);return p<i.near||p>i.far?null:{distance:p,point:au.clone(),object:s}}function ru(s,t,i,a,l,c,f,h,m,p){s.getVertexPosition(h,tu),s.getVertexPosition(m,eu),s.getVertexPosition(p,nu);const g=I1(s,t,i,a,tu,eu,nu,Nv);if(g){const v=new J;Ci.getBarycoord(Nv,tu,eu,nu,v),l&&(g.uv=Ci.getInterpolatedAttribute(l,h,m,p,v,new le)),c&&(g.uv1=Ci.getInterpolatedAttribute(c,h,m,p,v,new le)),f&&(g.normal=Ci.getInterpolatedAttribute(f,h,m,p,v,new J),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:m,c:p,normal:new J,materialIndex:0};Ci.getNormal(tu,eu,nu,_.normal),g.face=_,g.barycoord=v}return g}class B1 extends zn{constructor(t=null,i=1,a=1,l,c,f,h,m,p=Nn,g=Nn,v,_){super(null,f,h,m,p,g,l,c,v,_),this.isDataTexture=!0,this.image={data:t,width:i,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gr=new ku,z1=new le(.5,.5),su=new J;class om{constructor(t=new pr,i=new pr,a=new pr,l=new pr,c=new pr,f=new pr){this.planes=[t,i,a,l,c,f]}set(t,i,a,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(a),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,i=ji,a=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],v=c[5],_=c[6],M=c[7],b=c[8],R=c[9],S=c[10],x=c[11],L=c[12],z=c[13],D=c[14],U=c[15];if(l[0].setComponents(p-f,M-g,x-b,U-L).normalize(),l[1].setComponents(p+f,M+g,x+b,U+L).normalize(),l[2].setComponents(p+h,M+v,x+R,U+z).normalize(),l[3].setComponents(p-h,M-v,x-R,U-z).normalize(),a)l[4].setComponents(m,_,S,D).normalize(),l[5].setComponents(p-m,M-_,x-S,U-D).normalize();else if(l[4].setComponents(p-m,M-_,x-S,U-D).normalize(),i===ji)l[5].setComponents(p+m,M+_,x+S,U+D).normalize();else if(i===yl)l[5].setComponents(m,_,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(t){Gr.center.set(0,0,0);const i=z1.distanceTo(t.center);return Gr.radius=.7071067811865476+i,Gr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(t){const i=this.planes,a=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let a=0;a<6;a++){const l=i[a];if(su.x=l.normal.x>0?t.max.x:t.min.x,su.y=l.normal.y>0?t.max.y:t.min.y,su.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(su)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sS extends jr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Du=new J,Lu=new J,Ov=new je,ol=new sm,ou=new ku,Oh=new J,Pv=new J;class F1 extends Fn{constructor(t=new Hn,i=new sS){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,a=[0];for(let l=1,c=i.count;l<c;l++)Du.fromBufferAttribute(i,l-1),Lu.fromBufferAttribute(i,l),a[l]=a[l-1],a[l]+=Du.distanceTo(Lu);t.setAttribute("lineDistance",new un(a,1))}else ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const a=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),ou.copy(a.boundingSphere),ou.applyMatrix4(l),ou.radius+=c,t.ray.intersectsSphere(ou)===!1)return;Ov.copy(l).invert(),ol.copy(t.ray).applyMatrix4(Ov);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=a.index,_=a.attributes.position;if(g!==null){const M=Math.max(0,f.start),b=Math.min(g.count,f.start+f.count);for(let R=M,S=b-1;R<S;R+=p){const x=g.getX(R),L=g.getX(R+1),z=lu(this,t,ol,m,x,L,R);z&&i.push(z)}if(this.isLineLoop){const R=g.getX(b-1),S=g.getX(M),x=lu(this,t,ol,m,R,S,b-1);x&&i.push(x)}}else{const M=Math.max(0,f.start),b=Math.min(_.count,f.start+f.count);for(let R=M,S=b-1;R<S;R+=p){const x=lu(this,t,ol,m,R,R+1,R);x&&i.push(x)}if(this.isLineLoop){const R=lu(this,t,ol,m,b-1,M,b-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function lu(s,t,i,a,l,c,f){const h=s.geometry.attributes.position;if(Du.fromBufferAttribute(h,l),Lu.fromBufferAttribute(h,c),i.distanceSqToSegment(Du,Lu,Oh,Pv)>a)return;Oh.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Oh);if(!(p<t.near||p>t.far))return{distance:p,point:Pv.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}class H1 extends F1{constructor(t,i){super(t,i),this.isLineLoop=!0,this.type="LineLoop"}}class oS extends zn{constructor(t=[],i=Zr,a,l,c,f,h,m,p,g){super(t,i,a,l,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class G1 extends zn{constructor(t,i,a,l,c,f,h,m,p){super(t,i,a,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class El extends zn{constructor(t,i,a=ea,l,c,f,h=Nn,m=Nn,p,g=Pa,v=1){if(g!==Pa&&g!==Xr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:v};super(_,l,c,f,h,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new am(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class V1 extends El{constructor(t,i=ea,a=Zr,l,c,f=Nn,h=Nn,m,p=Pa){const g={width:t,height:t,depth:1},v=[g,g,g,g,g,g];super(t,t,i,a,l,c,f,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class lS extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class _r extends Hn{constructor(t=1,i=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],v=[];let _=0,M=0;b("z","y","x",-1,-1,a,i,t,f,c,0),b("z","y","x",1,-1,a,i,-t,f,c,1),b("x","z","y",1,1,t,a,i,l,f,2),b("x","z","y",1,-1,t,a,-i,l,f,3),b("x","y","z",1,-1,t,i,a,l,c,4),b("x","y","z",-1,-1,t,i,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new un(p,3)),this.setAttribute("normal",new un(g,3)),this.setAttribute("uv",new un(v,2));function b(R,S,x,L,z,D,U,N,I,T,O){const V=D/I,Y=U/T,K=D/2,et=U/2,W=N/2,Q=I+1,B=T+1;let H=0,lt=0;const at=new J;for(let dt=0;dt<B;dt++){const w=dt*Y-et;for(let G=0;G<Q;G++){const rt=G*V-K;at[R]=rt*L,at[S]=w*z,at[x]=W,p.push(at.x,at.y,at.z),at[R]=0,at[S]=0,at[x]=N>0?1:-1,g.push(at.x,at.y,at.z),v.push(G/I),v.push(1-dt/T),H+=1}}for(let dt=0;dt<T;dt++)for(let w=0;w<I;w++){const G=_+w+Q*dt,rt=_+w+Q*(dt+1),pt=_+(w+1)+Q*(dt+1),Tt=_+(w+1)+Q*dt;m.push(G,rt,Tt),m.push(rt,pt,Tt),lt+=6}h.addGroup(M,lt,O),M+=lt,_+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Xu extends Hn{constructor(t=1,i=1,a=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:a,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],v=[],_=[],M=[];let b=0;const R=[],S=a/2;let x=0;L(),f===!1&&(t>0&&z(!0),i>0&&z(!1)),this.setIndex(g),this.setAttribute("position",new un(v,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(M,2));function L(){const D=new J,U=new J;let N=0;const I=(i-t)/a;for(let T=0;T<=c;T++){const O=[],V=T/c,Y=V*(i-t)+t;for(let K=0;K<=l;K++){const et=K/l,W=et*m+h,Q=Math.sin(W),B=Math.cos(W);U.x=Y*Q,U.y=-V*a+S,U.z=Y*B,v.push(U.x,U.y,U.z),D.set(Q,I,B).normalize(),_.push(D.x,D.y,D.z),M.push(et,1-V),O.push(b++)}R.push(O)}for(let T=0;T<l;T++)for(let O=0;O<c;O++){const V=R[O][T],Y=R[O+1][T],K=R[O+1][T+1],et=R[O][T+1];(t>0||O!==0)&&(g.push(V,Y,et),N+=3),(i>0||O!==c-1)&&(g.push(Y,K,et),N+=3)}p.addGroup(x,N,0),x+=N}function z(D){const U=b,N=new le,I=new J;let T=0;const O=D===!0?t:i,V=D===!0?1:-1;for(let K=1;K<=l;K++)v.push(0,S*V,0),_.push(0,V,0),M.push(.5,.5),b++;const Y=b;for(let K=0;K<=l;K++){const W=K/l*m+h,Q=Math.cos(W),B=Math.sin(W);I.x=O*B,I.y=S*V,I.z=O*Q,v.push(I.x,I.y,I.z),_.push(0,V,0),N.x=Q*.5+.5,N.y=B*.5*V+.5,M.push(N.x,N.y),b++}for(let K=0;K<l;K++){const et=U+K,W=Y+K;D===!0?g.push(W,W+1,et):g.push(W+1,W,et),T+=3}p.addGroup(x,T,D===!0?1:2),x+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lm extends Xu{constructor(t=1,i=1,a=32,l=1,c=!1,f=0,h=Math.PI*2){super(0,t,i,a,l,c,f,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(t){return new lm(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wu extends Hn{constructor(t=1,i=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:a,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(a),m=Math.floor(l),p=h+1,g=m+1,v=t/h,_=i/m,M=[],b=[],R=[],S=[];for(let x=0;x<g;x++){const L=x*_-f;for(let z=0;z<p;z++){const D=z*v-c;b.push(D,-L,0),R.push(0,0,1),S.push(z/h),S.push(1-x/m)}}for(let x=0;x<m;x++)for(let L=0;L<h;L++){const z=L+p*x,D=L+p*(x+1),U=L+1+p*(x+1),N=L+1+p*x;M.push(z,D,N),M.push(D,U,N)}this.setIndex(M),this.setAttribute("position",new un(b,3)),this.setAttribute("normal",new un(R,3)),this.setAttribute("uv",new un(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Uu extends Hn{constructor(t=.5,i=1,a=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:a,phiSegments:l,thetaStart:c,thetaLength:f},a=Math.max(3,a),l=Math.max(1,l);const h=[],m=[],p=[],g=[];let v=t;const _=(i-t)/l,M=new J,b=new le;for(let R=0;R<=l;R++){for(let S=0;S<=a;S++){const x=c+S/a*f;M.x=v*Math.cos(x),M.y=v*Math.sin(x),m.push(M.x,M.y,M.z),p.push(0,0,1),b.x=(M.x/i+1)/2,b.y=(M.y/i+1)/2,g.push(b.x,b.y)}v+=_}for(let R=0;R<l;R++){const S=R*(a+1);for(let x=0;x<a;x++){const L=x+S,z=L,D=L+a+1,U=L+a+2,N=L+1;h.push(z,D,N),h.push(D,U,N)}}this.setIndex(h),this.setAttribute("position",new un(m,3)),this.setAttribute("normal",new un(p,3)),this.setAttribute("uv",new un(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Wr extends Hn{constructor(t=1,i=32,a=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:a,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),a=Math.max(2,Math.floor(a));const m=Math.min(f+h,Math.PI);let p=0;const g=[],v=new J,_=new J,M=[],b=[],R=[],S=[];for(let x=0;x<=a;x++){const L=[],z=x/a,D=f+z*h,U=t*Math.cos(D),N=Math.sqrt(t*t-U*U);let I=0;x===0&&f===0?I=.5/i:x===a&&m===Math.PI&&(I=-.5/i);for(let T=0;T<=i;T++){const O=T/i,V=l+O*c;v.x=-N*Math.cos(V),v.y=U,v.z=N*Math.sin(V),b.push(v.x,v.y,v.z),_.copy(v).normalize(),R.push(_.x,_.y,_.z),S.push(O+I,1-z),L.push(p++)}g.push(L)}for(let x=0;x<a;x++)for(let L=0;L<i;L++){const z=g[x][L+1],D=g[x][L],U=g[x+1][L],N=g[x+1][L+1];(x!==0||f>0)&&M.push(z,D,N),(x!==a-1||m<Math.PI)&&M.push(D,U,N)}this.setIndex(M),this.setAttribute("position",new un(b,3)),this.setAttribute("normal",new un(R,3)),this.setAttribute("uv",new un(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class cm extends Hn{constructor(t=1,i=.4,a=12,l=48,c=Math.PI*2,f=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:a,tubularSegments:l,arc:c,thetaStart:f,thetaLength:h},a=Math.floor(a),l=Math.floor(l);const m=[],p=[],g=[],v=[],_=new J,M=new J,b=new J;for(let R=0;R<=a;R++){const S=f+R/a*h;for(let x=0;x<=l;x++){const L=x/l*c;M.x=(t+i*Math.cos(S))*Math.cos(L),M.y=(t+i*Math.cos(S))*Math.sin(L),M.z=i*Math.sin(S),p.push(M.x,M.y,M.z),_.x=t*Math.cos(L),_.y=t*Math.sin(L),b.subVectors(M,_).normalize(),g.push(b.x,b.y,b.z),v.push(x/l),v.push(R/a)}}for(let R=1;R<=a;R++)for(let S=1;S<=l;S++){const x=(l+1)*R+S-1,L=(l+1)*(R-1)+S-1,z=(l+1)*(R-1)+S,D=(l+1)*R+S;m.push(x,L,D),m.push(L,z,D)}this.setIndex(m),this.setAttribute("position",new un(p,3)),this.setAttribute("normal",new un(g,3)),this.setAttribute("uv",new un(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cm(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function to(s){const t={};for(const i in s){t[i]={};for(const a in s[i]){const l=s[i][a];if(Iv(l))l.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][a]=null):t[i][a]=l.clone();else if(Array.isArray(l))if(Iv(l[0])){const c=[];for(let f=0,h=l.length;f<h;f++)c[f]=l[f].clone();t[i][a]=c}else t[i][a]=l.slice();else t[i][a]=l}}return t}function Wn(s){const t={};for(let i=0;i<s.length;i++){const a=to(s[i]);for(const l in a)t[l]=a[l]}return t}function Iv(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function k1(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function cS(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const X1={clone:to,merge:Wn};var W1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ia extends jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W1,this.fragmentShader=q1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=to(t.uniforms),this.uniformsGroups=k1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const a in t.uniforms){const l=t.uniforms[a];switch(this.uniforms[a]={},l.type){case"t":this.uniforms[a].value=i[l.value]||null;break;case"c":this.uniforms[a].value=new Te().setHex(l.value);break;case"v2":this.uniforms[a].value=new le().fromArray(l.value);break;case"v3":this.uniforms[a].value=new J().fromArray(l.value);break;case"v4":this.uniforms[a].value=new nn().fromArray(l.value);break;case"m3":this.uniforms[a].value=new oe().fromArray(l.value);break;case"m4":this.uniforms[a].value=new je().fromArray(l.value);break;default:this.uniforms[a].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const a in t.extensions)this.extensions[a]=t.extensions[a];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Y1 extends ia{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Up extends jr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dp,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Z1 extends jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class K1 extends jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class uS extends Fn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(t),this.intensity=i}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Ph=new je,Bv=new J,zv=new J;class Q1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new om,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera;Bv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Bv),zv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(zv),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(t,i,a,l){Ph.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),a.setFromProjectionMatrix(Ph,t.coordinateSystem,t.reversedDepth);const c=this._frameExtents,f=l?l.z/c.x:1,h=l?l.w/c.y:1,m=l?l.x/c.x:0,p=l?l.y/c.y:0;t.coordinateSystem===yl||t.reversedDepth?i.set(.5*f,0,0,.5*f+m,0,.5*h,0,.5*h+p,0,0,1,0,0,0,0,1):i.set(.5*f,0,0,.5*f+m,0,.5*h,0,.5*h+p,0,0,.5,.5,0,0,0,1),i.multiply(Ph)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const cu=new J,uu=new io,Zi=new J;class fS extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(cu,uu,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cu,uu,Zi.set(1,1,1)).invert()}updateWorldMatrix(t,i,a=!1){super.updateWorldMatrix(t,i,a),this.matrixWorld.decompose(cu,uu,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cu,uu,Zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hr=new J,Fv=new le,Hv=new le;class pi extends fS{constructor(t=50,i=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ml*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ml*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ml*2*Math.atan(Math.tan(ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,a){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-t/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(hr.x,hr.y).multiplyScalar(-t/hr.z)}getViewSize(t,i){return this.getViewBounds(t,Fv,Hv),i.subVectors(Hv,Fv)}setViewOffset(t,i,a,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ml*.5*this.fov)/this.zoom,a=2*i,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*a/p,l*=f.width/m,a*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class J1 extends Q1{constructor(){super(new pi(90,1,.5,500)),this.isPointLightShadow=!0}}class j1 extends uS{constructor(t,i,a=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=l,this.shadow=new J1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class dS extends fS{constructor(t=-1,i=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-t,f=a+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class $1 extends uS{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ws=-90,qs=1;class tb extends Fn{constructor(t,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Ws,qs,t,i);l.layers=this.layers,this.add(l);const c=new pi(Ws,qs,t,i);c.layers=this.layers,this.add(c);const f=new pi(Ws,qs,t,i);f.layers=this.layers,this.add(f);const h=new pi(Ws,qs,t,i);h.layers=this.layers,this.add(h);const m=new pi(Ws,qs,t,i);m.layers=this.layers,this.add(m);const p=new pi(Ws,qs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[a,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===ji)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===yl)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(a,0,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(a,1,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(a,2,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(a,3,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(a,4,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),a.texture.generateMipmaps=R,t.setRenderTarget(a,5,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(v,_,M),t.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class eb extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Gv=new je;class nb{constructor(t,i,a=0,l=1/0){this.ray=new sm(t,i),this.near=a,this.far=l,this.camera=null,this.layers=new rm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ae("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Gv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gv),this}intersectObject(t,i=!0,a=[]){return Np(t,this,a,i),a.sort(Vv),a}intersectObjects(t,i=!0,a=[]){for(let l=0,c=t.length;l<c;l++)Np(t[l],this,a,i);return a.sort(Vv),a}}function Vv(s,t){return s.distance-t.distance}function Np(s,t,i,a){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&a===!0){const c=s.children;for(let f=0,h=c.length;f<h;f++)Np(c[f],t,i,!0)}}const pm=class pm{constructor(t,i,a,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,a,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let a=0;a<4;a++)this.elements[a]=t[a+i];return this}set(t,i,a,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=a,c[3]=l,this}};pm.prototype.isMatrix2=!0;let kv=pm;function Xv(s,t,i,a){const l=ib(a);switch(i){case Qx:return s*t;case jx:return s*t/l.components*l.byteLength;case jp:return s*t/l.components*l.byteLength;case Kr:return s*t*2/l.components*l.byteLength;case $p:return s*t*2/l.components*l.byteLength;case Jx:return s*t*3/l.components*l.byteLength;case Fi:return s*t*4/l.components*l.byteLength;case tm:return s*t*4/l.components*l.byteLength;case _u:case vu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xu:case Su:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ep:case ip:return Math.max(s,16)*Math.max(t,8)/4;case tp:case np:return Math.max(s,8)*Math.max(t,8)/2;case ap:case rp:case op:case lp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case sp:case Eu:case cp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case up:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fp:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case dp:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case hp:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case pp:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case mp:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case gp:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case _p:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case vp:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case xp:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Sp:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case yp:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Mp:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ep:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case bp:case Tp:case Ap:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Rp:case Cp:return Math.ceil(s/4)*Math.ceil(t/4)*8;case bu:case wp:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ib(s){switch(s){case mi:case qx:return{byteLength:1,components:1};case xl:case Yx:case na:return{byteLength:2,components:1};case Qp:case Jp:return{byteLength:2,components:4};case ea:case Kp:case Ji:return{byteLength:4,components:1};case Zx:case Kx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zp}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zp);function hS(){let s=null,t=!1,i=null,a=null;function l(c,f){a=s.requestAnimationFrame(l),i(c,f)}return{start:function(){t!==!0&&i!==null&&s!==null&&(a=s.requestAnimationFrame(l),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function ab(s){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,v=p.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,p,g),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,m,p){const g=m.array,v=m.updateRanges;if(s.bindBuffer(p,h),v.length===0)s.bufferSubData(p,0,g);else{v.sort((M,b)=>M.start-b.start);let _=0;for(let M=1;M<v.length;M++){const b=v[_],R=v[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++_,v[_]=R)}v.length=_+1;for(let M=0,b=v.length;M<b;M++){const R=v[M];s.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(s.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var rb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sb=`#ifdef USE_ALPHAHASH
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
#endif`,ob=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ub=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fb=`#ifdef USE_AOMAP
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
#endif`,db=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hb=`#ifdef USE_BATCHING
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
#endif`,pb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_b=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vb=`#ifdef USE_IRIDESCENCE
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
#endif`,xb=`#ifdef USE_BUMPMAP
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
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ab=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Cb=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,wb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Db=`vec3 transformedNormal = objectNormal;
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
#endif`,Lb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ub=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ob=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ib=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
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
#endif`,Hb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qb=`#ifdef USE_GRADIENTMAP
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
}`,Yb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qb=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Jb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,jb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nT=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,iT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,aT=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rT=`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,lT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mT=`#if defined( USE_POINTS_UV )
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
#endif`,gT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_T=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ST=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yT=`#ifdef USE_MORPHTARGETS
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
#endif`,MT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ET=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,TT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,CT=`#ifdef USE_NORMALMAP
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
#endif`,wT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,PT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,VT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,kT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,XT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,WT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qT=`#ifdef USE_SKINNING
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
#endif`,YT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZT=`#ifdef USE_SKINNING
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
#endif`,KT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$T=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,t3=`#ifdef USE_TRANSMISSION
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
#endif`,e3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const r3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s3=`uniform sampler2D t2D;
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
}`,o3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f3=`#include <common>
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
}`,d3=`#if DEPTH_PACKING == 3200
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
}`,h3=`#define DISTANCE
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
}`,p3=`#define DISTANCE
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
void main() {
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
}`,m3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_3=`uniform float scale;
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
}`,v3=`uniform vec3 diffuse;
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
}`,x3=`#include <common>
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
}`,S3=`uniform vec3 diffuse;
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
}`,y3=`#define LAMBERT
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
}`,M3=`#define LAMBERT
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
}`,E3=`#define MATCAP
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
}`,b3=`#define MATCAP
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
}`,T3=`#define NORMAL
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
}`,A3=`#define NORMAL
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
}`,R3=`#define PHONG
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
}`,C3=`#define PHONG
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
}`,w3=`#define STANDARD
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
}`,D3=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,L3=`#define TOON
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
}`,U3=`#define TOON
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
}`,N3=`uniform float size;
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
}`,O3=`uniform vec3 diffuse;
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
}`,P3=`#include <common>
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
}`,I3=`uniform vec3 color;
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
}`,B3=`uniform float rotation;
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
}`,z3=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:rb,alphahash_pars_fragment:sb,alphamap_fragment:ob,alphamap_pars_fragment:lb,alphatest_fragment:cb,alphatest_pars_fragment:ub,aomap_fragment:fb,aomap_pars_fragment:db,batching_pars_vertex:hb,batching_vertex:pb,begin_vertex:mb,beginnormal_vertex:gb,bsdfs:_b,iridescence_fragment:vb,bumpmap_pars_fragment:xb,clipping_planes_fragment:Sb,clipping_planes_pars_fragment:yb,clipping_planes_pars_vertex:Mb,clipping_planes_vertex:Eb,color_fragment:bb,color_pars_fragment:Tb,color_pars_vertex:Ab,color_vertex:Rb,common:Cb,cube_uv_reflection_fragment:wb,defaultnormal_vertex:Db,displacementmap_pars_vertex:Lb,displacementmap_vertex:Ub,emissivemap_fragment:Nb,emissivemap_pars_fragment:Ob,colorspace_fragment:Pb,colorspace_pars_fragment:Ib,envmap_fragment:Bb,envmap_common_pars_fragment:zb,envmap_pars_fragment:Fb,envmap_pars_vertex:Hb,envmap_physical_pars_fragment:Jb,envmap_vertex:Gb,fog_vertex:Vb,fog_pars_vertex:kb,fog_fragment:Xb,fog_pars_fragment:Wb,gradientmap_pars_fragment:qb,lightmap_pars_fragment:Yb,lights_lambert_fragment:Zb,lights_lambert_pars_fragment:Kb,lights_pars_begin:Qb,lights_toon_fragment:jb,lights_toon_pars_fragment:$b,lights_phong_fragment:tT,lights_phong_pars_fragment:eT,lights_physical_fragment:nT,lights_physical_pars_fragment:iT,lights_fragment_begin:aT,lights_fragment_maps:rT,lights_fragment_end:sT,lightprobes_pars_fragment:oT,logdepthbuf_fragment:lT,logdepthbuf_pars_fragment:cT,logdepthbuf_pars_vertex:uT,logdepthbuf_vertex:fT,map_fragment:dT,map_pars_fragment:hT,map_particle_fragment:pT,map_particle_pars_fragment:mT,metalnessmap_fragment:gT,metalnessmap_pars_fragment:_T,morphinstance_vertex:vT,morphcolor_vertex:xT,morphnormal_vertex:ST,morphtarget_pars_vertex:yT,morphtarget_vertex:MT,normal_fragment_begin:ET,normal_fragment_maps:bT,normal_pars_fragment:TT,normal_pars_vertex:AT,normal_vertex:RT,normalmap_pars_fragment:CT,clearcoat_normal_fragment_begin:wT,clearcoat_normal_fragment_maps:DT,clearcoat_pars_fragment:LT,iridescence_pars_fragment:UT,opaque_fragment:NT,packing:OT,premultiplied_alpha_fragment:PT,project_vertex:IT,dithering_fragment:BT,dithering_pars_fragment:zT,roughnessmap_fragment:FT,roughnessmap_pars_fragment:HT,shadowmap_pars_fragment:GT,shadowmap_pars_vertex:VT,shadowmap_vertex:kT,shadowmask_pars_fragment:XT,skinbase_vertex:WT,skinning_pars_vertex:qT,skinning_vertex:YT,skinnormal_vertex:ZT,specularmap_fragment:KT,specularmap_pars_fragment:QT,tonemapping_fragment:JT,tonemapping_pars_fragment:jT,transmission_fragment:$T,transmission_pars_fragment:t3,uv_pars_fragment:e3,uv_pars_vertex:n3,uv_vertex:i3,worldpos_vertex:a3,background_vert:r3,background_frag:s3,backgroundCube_vert:o3,backgroundCube_frag:l3,cube_vert:c3,cube_frag:u3,depth_vert:f3,depth_frag:d3,distance_vert:h3,distance_frag:p3,equirect_vert:m3,equirect_frag:g3,linedashed_vert:_3,linedashed_frag:v3,meshbasic_vert:x3,meshbasic_frag:S3,meshlambert_vert:y3,meshlambert_frag:M3,meshmatcap_vert:E3,meshmatcap_frag:b3,meshnormal_vert:T3,meshnormal_frag:A3,meshphong_vert:R3,meshphong_frag:C3,meshphysical_vert:w3,meshphysical_frag:D3,meshtoon_vert:L3,meshtoon_frag:U3,points_vert:N3,points_frag:O3,shadow_vert:P3,shadow_frag:I3,sprite_vert:B3,sprite_frag:z3},Bt={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Qi={basic:{uniforms:Wn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Wn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Wn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Wn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Wn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new Te(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Wn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Wn([Bt.points,Bt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Wn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Wn([Bt.common,Bt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Wn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Wn([Bt.sprite,Bt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:Wn([Bt.common,Bt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:Wn([Bt.lights,Bt.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Qi.physical={uniforms:Wn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const fu={r:0,b:0,g:0},F3=new je,pS=new oe;pS.set(-1,0,0,0,1,0,0,0,1);function H3(s,t,i,a,l,c){const f=new Te(0);let h=l===!0?0:1,m,p,g=null,v=0,_=null;function M(L){let z=L.isScene===!0?L.background:null;if(z&&z.isTexture){const D=L.backgroundBlurriness>0;z=t.get(z,D)}return z}function b(L){let z=!1;const D=M(L);D===null?S(f,h):D&&D.isColor&&(S(D,1),z=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(L,z){const D=M(z);D&&(D.isCubeTexture||D.mapping===Vu)?(p===void 0&&(p=new cn(new _r(1,1,1),new ia({name:"BackgroundCubeMaterial",uniforms:to(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,N,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=D,p.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(F3.makeRotationFromEuler(z.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(pS),p.material.toneMapped=be.getTransfer(D.colorSpace)!==ze,(g!==D||v!==D.version||_!==s.toneMapping)&&(p.material.needsUpdate=!0,g=D,v=D.version,_=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new cn(new Wu(2,2),new ia({name:"BackgroundMaterial",uniforms:to(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=be.getTransfer(D.colorSpace)!==ze,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(g!==D||v!==D.version||_!==s.toneMapping)&&(m.material.needsUpdate=!0,g=D,v=D.version,_=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function S(L,z){L.getRGB(fu,cS(s)),i.buffers.color.setClear(fu.r,fu.g,fu.b,z,c)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,z=1){f.set(L),h=z,S(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,S(f,h)},render:b,addToRenderList:R,dispose:x}}function G3(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},l=_(null);let c=l,f=!1;function h(Y,K,et,W,Q){let B=!1;const H=v(Y,W,et,K);c!==H&&(c=H,p(c.object)),B=M(Y,W,et,Q),B&&b(Y,W,et,Q),Q!==null&&t.update(Q,s.ELEMENT_ARRAY_BUFFER),(B||f)&&(f=!1,D(Y,K,et,W),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function m(){return s.createVertexArray()}function p(Y){return s.bindVertexArray(Y)}function g(Y){return s.deleteVertexArray(Y)}function v(Y,K,et,W){const Q=W.wireframe===!0;let B=a[K.id];B===void 0&&(B={},a[K.id]=B);const H=Y.isInstancedMesh===!0?Y.id:0;let lt=B[H];lt===void 0&&(lt={},B[H]=lt);let at=lt[et.id];at===void 0&&(at={},lt[et.id]=at);let dt=at[Q];return dt===void 0&&(dt=_(m()),at[Q]=dt),dt}function _(Y){const K=[],et=[],W=[];for(let Q=0;Q<i;Q++)K[Q]=0,et[Q]=0,W[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:et,attributeDivisors:W,object:Y,attributes:{},index:null}}function M(Y,K,et,W){const Q=c.attributes,B=K.attributes;let H=0;const lt=et.getAttributes();for(const at in lt)if(lt[at].location>=0){const w=Q[at];let G=B[at];if(G===void 0&&(at==="instanceMatrix"&&Y.instanceMatrix&&(G=Y.instanceMatrix),at==="instanceColor"&&Y.instanceColor&&(G=Y.instanceColor)),w===void 0||w.attribute!==G||G&&w.data!==G.data)return!0;H++}return c.attributesNum!==H||c.index!==W}function b(Y,K,et,W){const Q={},B=K.attributes;let H=0;const lt=et.getAttributes();for(const at in lt)if(lt[at].location>=0){let w=B[at];w===void 0&&(at==="instanceMatrix"&&Y.instanceMatrix&&(w=Y.instanceMatrix),at==="instanceColor"&&Y.instanceColor&&(w=Y.instanceColor));const G={};G.attribute=w,w&&w.data&&(G.data=w.data),Q[at]=G,H++}c.attributes=Q,c.attributesNum=H,c.index=W}function R(){const Y=c.newAttributes;for(let K=0,et=Y.length;K<et;K++)Y[K]=0}function S(Y){x(Y,0)}function x(Y,K){const et=c.newAttributes,W=c.enabledAttributes,Q=c.attributeDivisors;et[Y]=1,W[Y]===0&&(s.enableVertexAttribArray(Y),W[Y]=1),Q[Y]!==K&&(s.vertexAttribDivisor(Y,K),Q[Y]=K)}function L(){const Y=c.newAttributes,K=c.enabledAttributes;for(let et=0,W=K.length;et<W;et++)K[et]!==Y[et]&&(s.disableVertexAttribArray(et),K[et]=0)}function z(Y,K,et,W,Q,B,H){H===!0?s.vertexAttribIPointer(Y,K,et,Q,B):s.vertexAttribPointer(Y,K,et,W,Q,B)}function D(Y,K,et,W){R();const Q=W.attributes,B=et.getAttributes(),H=K.defaultAttributeValues;for(const lt in B){const at=B[lt];if(at.location>=0){let dt=Q[lt];if(dt===void 0&&(lt==="instanceMatrix"&&Y.instanceMatrix&&(dt=Y.instanceMatrix),lt==="instanceColor"&&Y.instanceColor&&(dt=Y.instanceColor)),dt!==void 0){const w=dt.normalized,G=dt.itemSize,rt=t.get(dt);if(rt===void 0)continue;const pt=rt.buffer,Tt=rt.type,Lt=rt.bytesPerElement,tt=Tt===s.INT||Tt===s.UNSIGNED_INT||dt.gpuType===Kp;if(dt.isInterleavedBufferAttribute){const mt=dt.data,At=mt.stride,jt=dt.offset;if(mt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<at.locationSize;Ft++)x(at.location+Ft,mt.meshPerAttribute);Y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Ft=0;Ft<at.locationSize;Ft++)S(at.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let Ft=0;Ft<at.locationSize;Ft++)z(at.location+Ft,G/at.locationSize,Tt,w,At*Lt,(jt+G/at.locationSize*Ft)*Lt,tt)}else{if(dt.isInstancedBufferAttribute){for(let mt=0;mt<at.locationSize;mt++)x(at.location+mt,dt.meshPerAttribute);Y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let mt=0;mt<at.locationSize;mt++)S(at.location+mt);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let mt=0;mt<at.locationSize;mt++)z(at.location+mt,G/at.locationSize,Tt,w,G*Lt,G/at.locationSize*mt*Lt,tt)}}else if(H!==void 0){const w=H[lt];if(w!==void 0)switch(w.length){case 2:s.vertexAttrib2fv(at.location,w);break;case 3:s.vertexAttrib3fv(at.location,w);break;case 4:s.vertexAttrib4fv(at.location,w);break;default:s.vertexAttrib1fv(at.location,w)}}}}L()}function U(){O();for(const Y in a){const K=a[Y];for(const et in K){const W=K[et];for(const Q in W){const B=W[Q];for(const H in B)g(B[H].object),delete B[H];delete W[Q]}}delete a[Y]}}function N(Y){if(a[Y.id]===void 0)return;const K=a[Y.id];for(const et in K){const W=K[et];for(const Q in W){const B=W[Q];for(const H in B)g(B[H].object),delete B[H];delete W[Q]}}delete a[Y.id]}function I(Y){for(const K in a){const et=a[K];for(const W in et){const Q=et[W];if(Q[Y.id]===void 0)continue;const B=Q[Y.id];for(const H in B)g(B[H].object),delete B[H];delete Q[Y.id]}}}function T(Y){for(const K in a){const et=a[K],W=Y.isInstancedMesh===!0?Y.id:0,Q=et[W];if(Q!==void 0){for(const B in Q){const H=Q[B];for(const lt in H)g(H[lt].object),delete H[lt];delete Q[B]}delete et[W],Object.keys(et).length===0&&delete a[K]}}}function O(){V(),f=!0,c!==l&&(c=l,p(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:O,resetDefaultState:V,dispose:U,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:S,disableUnusedAttributes:L}}function V3(s,t,i){let a;function l(m){a=m}function c(m,p){s.drawArrays(a,m,p),i.update(p,a,1)}function f(m,p,g){g!==0&&(s.drawArraysInstanced(a,m,p,g),i.update(p,a,g))}function h(m,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,p,0,g);let _=0;for(let M=0;M<g;M++)_+=p[M];i.update(_,a,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function k3(s,t,i,a){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Fi&&a.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const T=I===na&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==mi&&I!==Ji&&!T&&a.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function m(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(ne("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),z=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),N=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:L,maxVaryings:z,maxFragmentUniforms:D,maxSamples:U,samples:N}}function X3(s){const t=this;let i=null,a=0,l=!1,c=!1;const f=new pr,h=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const M=v.length!==0||_||a!==0||l;return l=_,a=v.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){i=g(v,_,0)},this.setState=function(v,_,M){const b=v.clippingPlanes,R=v.clipIntersection,S=v.clipShadows,x=s.get(v);if(!l||b===null||b.length===0||c&&!S)c?g(null):p();else{const L=c?0:a,z=L*4;let D=x.clippingState||null;m.value=D,D=g(b,_,z,M);for(let U=0;U!==z;++U)D[U]=i[U];x.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(v,_,M,b){const R=v!==null?v.length:0;let S=null;if(R!==0){if(S=m.value,b!==!0||S===null){const x=M+R*4,L=_.matrixWorldInverse;h.getNormalMatrix(L),(S===null||S.length<x)&&(S=new Float32Array(x));for(let z=0,D=M;z!==R;++z,D+=4)f.copy(v[z]).applyMatrix4(L,h),f.normal.toArray(S,D),S[D+3]=f.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,S}}const Ks=4,W3=6,q3=20,Y3=256,ll=new dS,Wv=new Te;let Ih=null,Bh=0,zh=0,Fh=!1;const Z3=new J,Vr=new J;class qv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,a=.1,l=100,c={}){const{size:f=256,position:h=Z3}=c;Ih=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ih,Bh,zh),this._renderer.xr.enabled=Fh,t.scissorTest=!1,Ys(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Zr||t.mapping===$s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ih=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:na,format:Fi,colorSpace:Tu,depthBuffer:!1},l=Yv(t,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yv(t,i,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=K3(c)),this._blurMaterial=J3(c,t,i),this._ggxMaterial=Q3(c,t,i)}return l}_compileMaterial(t){const i=new cn(new Hn,t);this._renderer.compile(i,ll)}_sceneToCubeUV(t,i,a,l,c){const m=new pi(90,1,i,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,M=v.toneMapping;v.getClearColor(Wv),v.toneMapping=$i,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new cn(new _r,new gr({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,S=R.material;let x=!1;const L=t.background;L?L.isColor&&(S.color.copy(L),t.background=null,x=!0):(S.color.copy(Wv),x=!0);for(let z=0;z<6;z++){const D=z%3;D===0?(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[z],c.y,c.z)):D===1?(m.up.set(0,0,p[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[z],c.z)):(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[z]));const U=this._cubeSize;Ys(l,D*U,z>2?U:0,U,U),v.setRenderTarget(l),x&&v.render(R,m),v.render(t,m)}v.toneMapping=M,v.autoClear=_,t.background=L}_textureToCubeUV(t,i){const a=this._renderer,l=t.mapping===Zr||t.mapping===$s;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Ys(i,0,0,3*m,2*m),a.setRenderTarget(i),a.render(f,ll)}_applyPMREM(t){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=a}_applyGGXFilter(t,i,a){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[a];h.material=f;const m=f.uniforms,p=a/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-g*g),_=p*1.25,M=v*_,{_lodMax:b}=this,R=this._sizeLods[a],S=3*R*(a>b-Ks?a-b+Ks:0),x=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,Ys(c,S,x,3*R,2*R),l.setRenderTarget(c),l.render(h,ll),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-a,Ys(t,S,x,3*R,2*R),l.setRenderTarget(t),l.render(h,ll)}_blur(t,i,a,l){const c=this._pingPongRenderTarget,f=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(t,c,i,a,f),this._blurPass(c,t,a,a,f)}_blurPass(t,i,a,l,c){const f=this._renderer,h=this._blurMaterial,m=this._lodMeshes[l];m.material=h;const p=h.uniforms;p.envMap.value=t.texture,p.sigma.value=c,p.mipInt.value=this._lodMax-a;const g=this._sizeLods[l],v=3*g*(l>this._lodMax-Ks?l-this._lodMax+Ks:0),_=4*(this._cubeSize-g);Ys(i,v,_,3*g,2*g),f.setRenderTarget(i),f.render(m,ll)}}function K3(s){const t=[],i=[];let a=s;const l=s-Ks+1+W3;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);const h=1/(f-2),m=-h,p=1+h,g=[m,m,p,m,p,p,m,m,p,p,m,p],v=6,_=6,M=3,b=new Float32Array(M*_*v),R=new Float32Array(M*_*v);for(let x=0;x<v;x++){const L=x%3*2/3-1,z=x>2?0:-1,D=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];b.set(D,M*_*x);for(let U=0;U<_;U++){const N=g[U*2]*2-1,I=g[U*2+1]*2-1;x===0?Vr.set(1,I,N):x===1?Vr.set(-N,1,-I):x===2?Vr.set(-N,I,1):x===3?Vr.set(-1,I,-N):x===4?Vr.set(-N,-1,I):Vr.set(N,I,-1),Vr.toArray(R,(x*_+U)*M)}}const S=new Hn;S.setAttribute("position",new ta(b,M)),S.setAttribute("outputDirection",new ta(R,M)),i.push(new cn(S,null)),a>Ks&&a--}return{lodMeshes:i,sizeLods:t}}function Yv(s,t,i){const a=new Gi(s,t,i);return a.texture.mapping=Vu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Ys(s,t,i,a,l){s.viewport.set(t,i,a,l),s.scissor.set(t,i,a,l)}function Q3(s,t,i){return new ia({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Y3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function J3(s,t,i){return new ia({name:"SphericalGaussianBlur",defines:{SAMPLES:q3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function Zv(){return new ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function Kv(){return new ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function qu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class mS extends Gi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},l=[a,a,a,a,a,a];this.texture=new oS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new _r(5,5,5),c=new ia({name:"CubemapFromEquirect",uniforms:to(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ti,blending:La});c.uniforms.tEquirect.value=i;const f=new cn(l,c),h=i.minFilter;return i.minFilter===kr&&(i.minFilter=Bn),new tb(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,a=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,a,l);t.setRenderTarget(c)}}function j3(s){let t=new WeakMap,i=new WeakMap,a=null;function l(_,M=!1){return _==null?null:M?f(_):c(_)}function c(_){if(_&&_.isTexture){const M=_.mapping;if(M===lh||M===ch)if(t.has(_)){const b=t.get(_).texture;return h(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const R=new mS(b.height);return R.fromEquirectangularTexture(s,_),t.set(_,R),_.addEventListener("dispose",p),h(R.texture,_.mapping)}else return null}}return _}function f(_){if(_&&_.isTexture){const M=_.mapping,b=M===lh||M===ch,R=M===Zr||M===$s;if(b||R){let S=i.get(_);const x=S!==void 0?S.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==x)return a===null&&(a=new qv(s)),S=b?a.fromEquirectangular(_,S):a.fromCubemap(_,S),S.texture.pmremVersion=_.pmremVersion,i.set(_,S),S.texture;if(S!==void 0)return S.texture;{const L=_.image;return b&&L&&L.height>0||R&&L&&m(L)?(a===null&&(a=new qv(s)),S=b?a.fromEquirectangular(_):a.fromCubemap(_),S.texture.pmremVersion=_.pmremVersion,i.set(_,S),_.addEventListener("dispose",g),S.texture):null}}}return _}function h(_,M){return M===lh?_.mapping=Zr:M===ch&&(_.mapping=$s),_}function m(_){let M=0;const b=6;for(let R=0;R<b;R++)_[R]!==void 0&&M++;return M===b}function p(_){const M=_.target;M.removeEventListener("dispose",p);const b=t.get(M);b!==void 0&&(t.delete(M),b.dispose())}function g(_){const M=_.target;M.removeEventListener("dispose",g);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function v(){t=new WeakMap,i=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:l,dispose:v}}function $3(s){const t={};function i(a){if(t[a]!==void 0)return t[a];const l=s.getExtension(a);return t[a]=l,l}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const l=i(a);return l===null&&Qs("WebGLRenderer: "+a+" extension not supported."),l}}}function tA(s,t,i,a){const l={},c=new WeakMap;function f(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const b in _.attributes)t.remove(_.attributes[b]);_.removeEventListener("dispose",f),delete l[_.id];const M=c.get(_);M&&(t.remove(M),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(v,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const M in _)t.update(_[M],s.ARRAY_BUFFER)}function p(v){const _=[],M=v.index,b=v.attributes.position;let R=0;if(b===void 0)return;if(M!==null){const L=M.array;R=M.version;for(let z=0,D=L.length;z<D;z+=3){const U=L[z+0],N=L[z+1],I=L[z+2];_.push(U,N,N,I,I,U)}}else{const L=b.array;R=b.version;for(let z=0,D=L.length/3-1;z<D;z+=3){const U=z+0,N=z+1,I=z+2;_.push(U,N,N,I,I,U)}}const S=new(b.count>=65535?aS:iS)(_,1);S.version=R;const x=c.get(v);x&&t.remove(x),c.set(v,S)}function g(v){const _=c.get(v);if(_){const M=v.index;M!==null&&_.version<M.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function eA(s,t,i){let a;function l(v){a=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function m(v,_){s.drawElements(a,_,c,v*f),i.update(_,a,1)}function p(v,_,M){M!==0&&(s.drawElementsInstanced(a,_,c,v*f,M),i.update(_,a,M))}function g(v,_,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,_,0,c,v,0,M);let R=0;for(let S=0;S<M;S++)R+=_[S];i.update(R,a,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g}function nA(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:Ae("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:a}}function iA(s,t,i){const a=new WeakMap,l=new nn;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(h);if(_===void 0||_.count!==v){let V=function(){T.dispose(),a.delete(h),h.removeEventListener("dispose",V)};var M=V;_!==void 0&&_.texture.dispose();const b=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let D=0;b===!0&&(D=1),R===!0&&(D=2),S===!0&&(D=3);let U=h.attributes.position.count*D,N=1;U>t.maxTextureSize&&(N=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const I=new Float32Array(U*N*4*v),T=new eS(I,U,N,v);T.type=Ji,T.needsUpdate=!0;const O=D*4;for(let Y=0;Y<v;Y++){const K=x[Y],et=L[Y],W=z[Y],Q=U*N*4*Y;for(let B=0;B<K.count;B++){const H=B*O;b===!0&&(l.fromBufferAttribute(K,B),I[Q+H+0]=l.x,I[Q+H+1]=l.y,I[Q+H+2]=l.z,I[Q+H+3]=0),R===!0&&(l.fromBufferAttribute(et,B),I[Q+H+4]=l.x,I[Q+H+5]=l.y,I[Q+H+6]=l.z,I[Q+H+7]=0),S===!0&&(l.fromBufferAttribute(W,B),I[Q+H+8]=l.x,I[Q+H+9]=l.y,I[Q+H+10]=l.z,I[Q+H+11]=W.itemSize===4?l.w:1)}}_={count:v,texture:T,size:new le(U,N)},a.set(h,_),h.addEventListener("dispose",V)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let b=0;for(let S=0;S<p.length;S++)b+=p[S];const R=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",R),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function aA(s,t,i,a,l){let c=new WeakMap;function f(p){const g=l.render.frame,v=p.geometry,_=t.get(p,v);if(c.get(_)!==g&&(t.update(_),c.set(_,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==g&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),c.set(p,g))),p.isSkinnedMesh){const M=p.skeleton;c.get(M)!==g&&(M.update(),c.set(M,g))}return _}function h(){c=new WeakMap}function m(p){const g=p.target;g.removeEventListener("dispose",m),a.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:h}}const rA={[zx]:"LINEAR_TONE_MAPPING",[Fx]:"REINHARD_TONE_MAPPING",[Hx]:"CINEON_TONE_MAPPING",[Gx]:"ACES_FILMIC_TONE_MAPPING",[kx]:"AGX_TONE_MAPPING",[Xx]:"NEUTRAL_TONE_MAPPING",[Vx]:"CUSTOM_TONE_MAPPING"};function sA(s,t,i,a,l,c){const f=new Gi(t,i,{type:s,depthBuffer:l,stencilBuffer:c,samples:a?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,m=null;const p=new Hn;p.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new un([0,2,0,0,2,0],2));const g=new Y1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new cn(p,g),_=new dS(-1,1,1,-1,0,1);let M=null,b=null,R=!1,S,x=null,L=[],z=!1;this.setSize=function(D,U){f.setSize(D,U),h!==null&&h.setSize(D,U),m!==null&&m.setSize(D,U);for(let N=0;N<L.length;N++){const I=L[N];I.setSize&&I.setSize(D,U)}},this.setEffects=function(D){L=D,z=L.length>0&&L[0].isRenderPass===!0;const U=f.width,N=f.height;L.length>0&&h===null&&(h=new Gi(U,N,{type:na,depthBuffer:!1,stencilBuffer:!1}),m=new Gi(U,N,{type:na,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<L.length;I++){const T=L[I];T.setSize&&T.setSize(U,N)}},this.begin=function(D,U){if(R||D.toneMapping===$i&&L.length===0)return!1;if(x=U,U!==null){const N=U.width,I=U.height;(f.width!==N||f.height!==I)&&this.setSize(N,I)}return z===!1&&D.setRenderTarget(f),S=D.toneMapping,D.toneMapping=$i,!0},this.hasRenderPass=function(){return z},this.end=function(D,U){D.toneMapping=S,R=!0;let N=f,I=h;for(let T=0;T<L.length;T++){const O=L[T];O.enabled!==!1&&(O.render(D,I,N,U),O.needsSwap!==!1&&(N=I,I=I===h?m:h))}if(M!==D.outputColorSpace||b!==D.toneMapping){M=D.outputColorSpace,b=D.toneMapping,g.defines={},be.getTransfer(M)===ze&&(g.defines.SRGB_TRANSFER="");const T=rA[b];T&&(g.defines[T]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=N.texture,D.setRenderTarget(x),D.render(v,_),x=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){f.dispose(),h!==null&&h.dispose(),m!==null&&m.dispose(),p.dispose(),g.dispose()}}const gS=new zn,Op=new El(1,1),_S=new eS,vS=new S1,xS=new oS,Qv=[],Jv=[],jv=new Float32Array(16),$v=new Float32Array(9),tx=new Float32Array(4);function ao(s,t,i){const a=s[0];if(a<=0||a>0)return s;const l=t*i;let c=Qv[l];if(c===void 0&&(c=new Float32Array(l),Qv[l]=c),t!==0){a.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,s[f].toArray(c,h)}return c}function En(s,t){if(s.length!==t.length)return!1;for(let i=0,a=s.length;i<a;i++)if(s[i]!==t[i])return!1;return!0}function bn(s,t){for(let i=0,a=t.length;i<a;i++)s[i]=t[i]}function Yu(s,t){let i=Jv[t];i===void 0&&(i=new Int32Array(t),Jv[t]=i);for(let a=0;a!==t;++a)i[a]=s.allocateTextureUnit();return i}function oA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function lA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;s.uniform2fv(this.addr,t),bn(i,t)}}function cA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(En(i,t))return;s.uniform3fv(this.addr,t),bn(i,t)}}function uA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;s.uniform4fv(this.addr,t),bn(i,t)}}function fA(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(En(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),bn(i,t)}else{if(En(i,a))return;tx.set(a),s.uniformMatrix2fv(this.addr,!1,tx),bn(i,a)}}function dA(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(En(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),bn(i,t)}else{if(En(i,a))return;$v.set(a),s.uniformMatrix3fv(this.addr,!1,$v),bn(i,a)}}function hA(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(En(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),bn(i,t)}else{if(En(i,a))return;jv.set(a),s.uniformMatrix4fv(this.addr,!1,jv),bn(i,a)}}function pA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function mA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;s.uniform2iv(this.addr,t),bn(i,t)}}function gA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;s.uniform3iv(this.addr,t),bn(i,t)}}function _A(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;s.uniform4iv(this.addr,t),bn(i,t)}}function vA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function xA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;s.uniform2uiv(this.addr,t),bn(i,t)}}function SA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;s.uniform3uiv(this.addr,t),bn(i,t)}}function yA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;s.uniform4uiv(this.addr,t),bn(i,t)}}function MA(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Op.compareFunction=i.isReversedDepthBuffer()?nm:em,c=Op):c=gS,i.setTexture2D(t||c,l)}function EA(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture3D(t||vS,l)}function bA(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTextureCube(t||xS,l)}function TA(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture2DArray(t||_S,l)}function AA(s){switch(s){case 5126:return oA;case 35664:return lA;case 35665:return cA;case 35666:return uA;case 35674:return fA;case 35675:return dA;case 35676:return hA;case 5124:case 35670:return pA;case 35667:case 35671:return mA;case 35668:case 35672:return gA;case 35669:case 35673:return _A;case 5125:return vA;case 36294:return xA;case 36295:return SA;case 36296:return yA;case 35678:case 36198:case 36298:case 36306:case 35682:return MA;case 35679:case 36299:case 36307:return EA;case 35680:case 36300:case 36308:case 36293:return bA;case 36289:case 36303:case 36311:case 36292:return TA}}function RA(s,t){s.uniform1fv(this.addr,t)}function CA(s,t){const i=ao(t,this.size,2);s.uniform2fv(this.addr,i)}function wA(s,t){const i=ao(t,this.size,3);s.uniform3fv(this.addr,i)}function DA(s,t){const i=ao(t,this.size,4);s.uniform4fv(this.addr,i)}function LA(s,t){const i=ao(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function UA(s,t){const i=ao(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function NA(s,t){const i=ao(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function OA(s,t){s.uniform1iv(this.addr,t)}function PA(s,t){s.uniform2iv(this.addr,t)}function IA(s,t){s.uniform3iv(this.addr,t)}function BA(s,t){s.uniform4iv(this.addr,t)}function zA(s,t){s.uniform1uiv(this.addr,t)}function FA(s,t){s.uniform2uiv(this.addr,t)}function HA(s,t){s.uniform3uiv(this.addr,t)}function GA(s,t){s.uniform4uiv(this.addr,t)}function VA(s,t,i){const a=this.cache,l=t.length,c=Yu(i,l);En(a,c)||(s.uniform1iv(this.addr,c),bn(a,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=Op:f=gS;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||f,c[h])}function kA(s,t,i){const a=this.cache,l=t.length,c=Yu(i,l);En(a,c)||(s.uniform1iv(this.addr,c),bn(a,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||vS,c[f])}function XA(s,t,i){const a=this.cache,l=t.length,c=Yu(i,l);En(a,c)||(s.uniform1iv(this.addr,c),bn(a,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||xS,c[f])}function WA(s,t,i){const a=this.cache,l=t.length,c=Yu(i,l);En(a,c)||(s.uniform1iv(this.addr,c),bn(a,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||_S,c[f])}function qA(s){switch(s){case 5126:return RA;case 35664:return CA;case 35665:return wA;case 35666:return DA;case 35674:return LA;case 35675:return UA;case 35676:return NA;case 5124:case 35670:return OA;case 35667:case 35671:return PA;case 35668:case 35672:return IA;case 35669:case 35673:return BA;case 5125:return zA;case 36294:return FA;case 36295:return HA;case 36296:return GA;case 35678:case 36198:case 36298:case 36306:case 35682:return VA;case 35679:case 36299:case 36307:return kA;case 35680:case 36300:case 36308:case 36293:return XA;case 36289:case 36303:case 36311:case 36292:return WA}}class YA{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.setValue=AA(i.type)}}class ZA{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=qA(i.type)}}class KA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],a)}}}const Hh=/(\w+)(\])?(\[|\.)?/g;function ex(s,t){s.seq.push(t),s.map[t.id]=t}function QA(s,t,i){const a=s.name,l=a.length;for(Hh.lastIndex=0;;){const c=Hh.exec(a),f=Hh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){ex(i,p===void 0?new YA(h,s,t):new ZA(h,s,t));break}else{let v=i.map[h];v===void 0&&(v=new KA(h),ex(i,v)),i=v}}}class yu{constructor(t,i){this.seq=[],this.map={};const a=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<a;++f){const h=t.getActiveUniform(i,f),m=t.getUniformLocation(i,h.name);QA(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,a,l){const c=this.map[i];c!==void 0&&c.setValue(t,a,l)}setOptional(t,i,a){const l=i[a];l!==void 0&&this.setValue(t,a,l)}static upload(t,i,a,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const a=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&a.push(f)}return a}}function nx(s,t,i){const a=s.createShader(t);return s.shaderSource(a,i),s.compileShader(a),a}const JA=37297;let jA=0;function $A(s,t){const i=s.split(`
`),a=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;a.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return a.join(`
`)}const ix=new oe;function tR(s){be._getMatrix(ix,be.workingColorSpace,s);const t=`mat3( ${ix.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(s)){case Au:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ax(s,t,i){const a=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+$A(s.getShaderSource(t),h)}else return c}function eR(s,t){const i=tR(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const nR={[zx]:"Linear",[Fx]:"Reinhard",[Hx]:"Cineon",[Gx]:"ACESFilmic",[kx]:"AgX",[Xx]:"Neutral",[Vx]:"Custom"};function iR(s,t){const i=nR[t];return i===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const du=new J;function aR(){be.getLuminanceCoefficients(du);const s=du.x.toFixed(4),t=du.y.toFixed(4),i=du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dl).join(`
`)}function sR(s){const t=[];for(const i in s){const a=s[i];a!==!1&&t.push("#define "+i+" "+a)}return t.join(`
`)}function oR(s,t){const i={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=s.getActiveAttrib(t,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:h}}return i}function dl(s){return s!==""}function rx(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sx(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pp(s){return s.replace(lR,uR)}const cR=new Map;function uR(s,t){let i=pe[t];if(i===void 0){const a=cR.get(t);if(a!==void 0)i=pe[a],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Pp(i)}const fR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ox(s){return s.replace(fR,dR)}function dR(s,t,i,a){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function lx(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const hR={[gu]:"SHADOWMAP_TYPE_PCF",[fl]:"SHADOWMAP_TYPE_VSM"};function pR(s){return hR[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mR={[Zr]:"ENVMAP_TYPE_CUBE",[$s]:"ENVMAP_TYPE_CUBE",[Vu]:"ENVMAP_TYPE_CUBE_UV"};function gR(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":mR[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const _R={[$s]:"ENVMAP_MODE_REFRACTION"};function vR(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":_R[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xR={[Bx]:"ENVMAP_BLENDING_MULTIPLY",[BE]:"ENVMAP_BLENDING_MIX",[zE]:"ENVMAP_BLENDING_ADD"};function SR(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":xR[s.combine]||"ENVMAP_BLENDING_NONE"}function yR(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function MR(s,t,i,a){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=pR(i),p=gR(i),g=vR(i),v=SR(i),_=yR(i),M=rR(i),b=sR(c),R=l.createProgram();let S,x,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(dl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(dl).join(`
`),x.length>0&&(x+=`
`)):(S=[lx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dl).join(`
`),x=[lx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==$i?"#define TONE_MAPPING":"",i.toneMapping!==$i?pe.tonemapping_pars_fragment:"",i.toneMapping!==$i?iR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,eR("linearToOutputTexel",i.outputColorSpace),aR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(dl).join(`
`)),f=Pp(f),f=rx(f,i),f=sx(f,i),h=Pp(h),h=rx(h,i),h=sx(h,i),f=ox(f),h=ox(h),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",i.glslVersion===pv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===pv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const z=L+S+f,D=L+x+h,U=nx(l,l.VERTEX_SHADER,z),N=nx(l,l.FRAGMENT_SHADER,D);l.attachShader(R,U),l.attachShader(R,N),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function I(Y){if(s.debug.checkShaderErrors){const K=l.getProgramInfoLog(R)||"",et=l.getShaderInfoLog(U)||"",W=l.getShaderInfoLog(N)||"",Q=K.trim(),B=et.trim(),H=W.trim();let lt=!0,at=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(lt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,U,N);else{const dt=ax(l,U,"vertex"),w=ax(l,N,"fragment");Ae("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+Q+`
`+dt+`
`+w)}else Q!==""?ne("WebGLProgram: Program Info Log:",Q):(B===""||H==="")&&(at=!1);at&&(Y.diagnostics={runnable:lt,programLog:Q,vertexShader:{log:B,prefix:S},fragmentShader:{log:H,prefix:x}})}l.deleteShader(U),l.deleteShader(N),T=new yu(l,R),O=oR(l,R)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let O;this.getAttributes=function(){return O===void 0&&I(this),O};let V=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=l.getProgramParameter(R,JA)),V},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=jA++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=U,this.fragmentShader=N,this}let ER=0;class bR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,a){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let a=i.get(t);return a===void 0&&(a=new Set,i.set(t,a)),a}_getShaderStage(t){const i=this.shaderCache;let a=i.get(t);return a===void 0&&(a=new TR(t),i.set(t,a)),a}}class TR{constructor(t){this.id=ER++,this.code=t,this.usedTimes=0}}function AR(s){return s===Kr||s===Eu||s===bu}function RR(s,t,i,a,l,c){const f=new rm,h=new bR,m=new Set,p=[],g=new Map,v=a.logarithmicDepthBuffer;let _=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function R(T,O,V,Y,K,et){const W=Y.fog,Q=K.geometry,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?Y.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,lt=t.get(T.envMap||B,H),at=lt&&lt.mapping===Vu?lt.image.height:null,dt=M[T.type];T.precision!==null&&(_=a.getMaxPrecision(T.precision),_!==T.precision&&ne("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const w=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,G=w!==void 0?w.length:0;let rt=0;Q.morphAttributes.position!==void 0&&(rt=1),Q.morphAttributes.normal!==void 0&&(rt=2),Q.morphAttributes.color!==void 0&&(rt=3);let pt,Tt,Lt,tt;if(dt){const He=Qi[dt];pt=He.vertexShader,Tt=He.fragmentShader}else{pt=T.vertexShader,Tt=T.fragmentShader;const He=h.getVertexShaderStage(T),Re=h.getFragmentShaderStage(T);h.update(T,He,Re),Lt=He.id,tt=Re.id}const mt=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),jt=K.isInstancedMesh===!0,Ft=K.isBatchedMesh===!0,ae=!!T.map,an=!!T.matcap,re=!!lt,xe=!!T.aoMap,Oe=!!T.lightMap,ge=!!T.bumpMap&&T.wireframe===!1,We=!!T.normalMap,rn=!!T.displacementMap,Tn=!!T.emissiveMap,qe=!!T.metalnessMap,sn=!!T.roughnessMap,Z=T.anisotropy>0,Pe=T.clearcoat>0,Le=T.dispersion>0,P=T.retroreflectivity>0,E=T.iridescence>0,$=T.sheen>0,ct=T.transmission>0,gt=Z&&!!T.anisotropyMap,Rt=Pe&&!!T.clearcoatMap,Ut=Pe&&!!T.clearcoatNormalMap,_t=Pe&&!!T.clearcoatRoughnessMap,vt=E&&!!T.iridescenceMap,Ct=E&&!!T.iridescenceThicknessMap,kt=$&&!!T.sheenColorMap,Pt=$&&!!T.sheenRoughnessMap,Nt=!!T.specularMap,Jt=!!T.specularColorMap,$t=!!T.specularIntensityMap,ie=ct&&!!T.transmissionMap,q=ct&&!!T.thicknessMap,wt=!!T.gradientMap,yt=!!T.alphaMap,Dt=T.alphaTest>0,Ht=!!T.alphaHash,bt=!!T.extensions;let Qt=$i;T.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Qt=s.toneMapping);const qt={shaderID:dt,shaderType:T.type,shaderName:T.name,vertexShader:pt,fragmentShader:Tt,defines:T.defines,customVertexShaderID:Lt,customFragmentShaderID:tt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Ft,batchingColor:Ft&&K._colorsTexture!==null,instancing:jt,instancingColor:jt&&K.instanceColor!==null,instancingMorph:jt&&K.morphTexture!==null,outputColorSpace:mt===null?s.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:be.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:ae,matcap:an,envMap:re,envMapMode:re&&lt.mapping,envMapCubeUVHeight:at,aoMap:xe,lightMap:Oe,bumpMap:ge,normalMap:We,displacementMap:rn,emissiveMap:Tn,normalMapObjectSpace:We&&T.normalMapType===GE,normalMapTangentSpace:We&&T.normalMapType===Dp,packedNormalMap:We&&T.normalMapType===Dp&&AR(T.normalMap.format),metalnessMap:qe,roughnessMap:sn,anisotropy:Z,anisotropyMap:gt,clearcoat:Pe,clearcoatMap:Rt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:_t,dispersion:Le,retroreflection:P,iridescence:E,iridescenceMap:vt,iridescenceThicknessMap:Ct,sheen:$,sheenColorMap:kt,sheenRoughnessMap:Pt,specularMap:Nt,specularColorMap:Jt,specularIntensityMap:$t,transmission:ct,transmissionMap:ie,thicknessMap:q,gradientMap:wt,opaque:T.transparent===!1&&T.blending===hl&&T.alphaToCoverage===!1,alphaMap:yt,alphaTest:Dt,alphaHash:Ht,combine:T.combine,mapUv:ae&&b(T.map.channel),aoMapUv:xe&&b(T.aoMap.channel),lightMapUv:Oe&&b(T.lightMap.channel),bumpMapUv:ge&&b(T.bumpMap.channel),normalMapUv:We&&b(T.normalMap.channel),displacementMapUv:rn&&b(T.displacementMap.channel),emissiveMapUv:Tn&&b(T.emissiveMap.channel),metalnessMapUv:qe&&b(T.metalnessMap.channel),roughnessMapUv:sn&&b(T.roughnessMap.channel),anisotropyMapUv:gt&&b(T.anisotropyMap.channel),clearcoatMapUv:Rt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&b(T.sheenRoughnessMap.channel),specularMapUv:Nt&&b(T.specularMap.channel),specularColorMapUv:Jt&&b(T.specularColorMap.channel),specularIntensityMapUv:$t&&b(T.specularIntensityMap.channel),transmissionMapUv:ie&&b(T.transmissionMap.channel),thicknessMapUv:q&&b(T.thicknessMap.channel),alphaMapUv:yt&&b(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(We||Z),vertexNormals:!!Q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!Q.attributes.uv&&(ae||yt),fog:!!W,useFog:T.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Q.attributes.normal===void 0&&We===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:At,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:rt,numSunLights:O.sun.length,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numSunLightShadows:O.sunShadowMap.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:et.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:Qt,decodeVideoTexture:ae&&T.map.isVideoTexture===!0&&be.getTransfer(T.map.colorSpace)===ze,decodeVideoTextureEmissive:Tn&&T.emissiveMap.isVideoTexture===!0&&be.getTransfer(T.emissiveMap.colorSpace)===ze,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Bi,flipSided:T.side===ti,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:bt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&T.extensions.multiDraw===!0||Ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function S(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)O.push(V),O.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(x(O,T),L(O,T),O.push(s.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function x(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numSunLights),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numSunLightShadows),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function L(T,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.retroreflection&&f.enable(24),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),O.packedNormalMap&&f.enable(22),O.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),O.numLightProbeGrids>0&&f.enable(22),O.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function z(T){const O=M[T.type];let V;if(O){const Y=Qi[O];V=X1.clone(Y.uniforms)}else V=T.uniforms;return V}function D(T,O){let V=g.get(O);return V!==void 0?++V.usedTimes:(V=new MR(s,O,T,l),p.push(V),g.set(O,V)),V}function U(T){if(--T.usedTimes===0){const O=p.indexOf(T);p[O]=p[p.length-1],p.pop(),g.delete(T.cacheKey),T.destroy()}}function N(T){h.remove(T)}function I(){h.dispose()}return{getParameters:R,getProgramCacheKey:S,getUniforms:z,acquireProgram:D,releaseProgram:U,releaseShaderCache:N,programs:p,dispose:I}}function CR(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function a(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:a,update:l,dispose:c}}function wR(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function cx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ux(){const s=[];let t=0;const i=[],a=[],l=[];function c(){t=0,i.length=0,a.length=0,l.length=0}function f(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function h(_,M,b,R,S,x){let L=s[t];return L===void 0?(L={id:_.id,object:_,geometry:M,material:b,materialVariant:f(_),groupOrder:R,renderOrder:_.renderOrder,z:S,group:x},s[t]=L):(L.id=_.id,L.object=_,L.geometry=M,L.material=b,L.materialVariant=f(_),L.groupOrder=R,L.renderOrder=_.renderOrder,L.z=S,L.group=x),t++,L}function m(_,M,b,R,S,x,L){L.reversedDepth===!0&&(S=-S);const z=h(_,M,b,R,S,x);b.transmission>0?a.push(z):b.transparent===!0?l.push(z):i.push(z)}function p(_,M,b,R,S,x){const L=h(_,M,b,R,S,x);b.transmission>0?a.unshift(L):b.transparent===!0?l.unshift(L):i.unshift(L)}function g(_,M){i.length>1&&i.sort(_||wR),a.length>1&&a.sort(M||cx),l.length>1&&l.sort(M||cx)}function v(){for(let _=t,M=s.length;_<M;_++){const b=s[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:a,transparent:l,init:c,push:m,unshift:p,finish:v,sort:g}}function DR(){let s=new WeakMap;function t(a,l){const c=s.get(a);let f;return c===void 0?(f=new ux,s.set(a,[f])):l>=c.length?(f=new ux,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function LR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new J,color:new Te};break;case"SpotLight":i={position:new J,direction:new J,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new J,halfWidth:new J,halfHeight:new J};break}return s[t.id]=i,i}}}function UR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let NR=0;function OR(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function PR(s){const t=new LR,i=UR(),a={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new J);const l=new J,c=new je,f=new je;function h(p){let g=0,v=0,_=0;for(let K=0;K<9;K++)a.probe[K].set(0,0,0);let M=0,b=0,R=0,S=0,x=0,L=0,z=0,D=0,U=0,N=0,I=0,T=0,O=0,V=0;p.sort(OR);for(let K=0,et=p.length;K<et;K++){const W=p[K],Q=W.color,B=W.intensity,H=W.distance;let lt=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===Kr?lt=W.shadow.map.texture:lt=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)g+=Q.r*B,v+=Q.g*B,_+=Q.b*B;else if(W.isLightProbe){for(let at=0;at<9;at++)a.probe[at].addScaledVector(W.sh.coefficients[at],B);V++}else if(W.isSunLight){const at=t.get(W);if(at.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const dt=W.shadow,w=i.get(W);w.shadowIntensity=dt.intensity,w.shadowBias=dt.bias,w.shadowNormalBias=dt.normalBias,w.shadowRadius=dt.radius,w.shadowMapSize.copy(dt.mapSize).multiply(dt.getFrameExtents()),a.sunShadow[b]=w,a.sunShadowMap[b]=lt;const G=dt.getViewportCount();for(let rt=0;rt<G;rt++)a.sunShadowMatrix[R+rt]=dt.getMatrix(rt),a.sunShadowCascade[R+rt]=dt._cascadeData[rt];R+=G,b++}a.sun[M]=at,M++}else if(W.isDirectionalLight){const at=t.get(W);if(at.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const dt=W.shadow,w=i.get(W);w.shadowIntensity=dt.intensity,w.shadowBias=dt.bias,w.shadowNormalBias=dt.normalBias,w.shadowRadius=dt.radius,w.shadowMapSize=dt.mapSize,a.directionalShadow[S]=w,a.directionalShadowMap[S]=lt,a.directionalShadowMatrix[S]=W.shadow.matrix,U++}a.directional[S]=at,S++}else if(W.isSpotLight){const at=t.get(W);at.position.setFromMatrixPosition(W.matrixWorld),at.color.copy(Q).multiplyScalar(B),at.distance=H,at.coneCos=Math.cos(W.angle),at.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),at.decay=W.decay,a.spot[L]=at;const dt=W.shadow;if(W.map&&(a.spotLightMap[T]=W.map,T++,dt.updateMatrices(W),W.castShadow&&O++),a.spotLightMatrix[L]=dt.matrix,W.castShadow){const w=i.get(W);w.shadowIntensity=dt.intensity,w.shadowBias=dt.bias,w.shadowNormalBias=dt.normalBias,w.shadowRadius=dt.radius,w.shadowMapSize=dt.mapSize,a.spotShadow[L]=w,a.spotShadowMap[L]=lt,I++}L++}else if(W.isRectAreaLight){const at=t.get(W);at.color.copy(Q).multiplyScalar(B),at.halfWidth.set(W.width*.5,0,0),at.halfHeight.set(0,W.height*.5,0),a.rectArea[z]=at,z++}else if(W.isPointLight){const at=t.get(W);if(at.color.copy(W.color).multiplyScalar(W.intensity),at.distance=W.distance,at.decay=W.decay,W.castShadow){const dt=W.shadow,w=i.get(W);w.shadowIntensity=dt.intensity,w.shadowBias=dt.bias,w.shadowNormalBias=dt.normalBias,w.shadowRadius=dt.radius,w.shadowMapSize=dt.mapSize,w.shadowCameraNear=dt.camera.near,w.shadowCameraFar=dt.camera.far,a.pointShadow[x]=w,a.pointShadowMap[x]=lt,a.pointShadowMatrix[x]=W.shadow.matrix,N++}a.point[x]=at,x++}else if(W.isHemisphereLight){const at=t.get(W);at.skyColor.copy(W.color).multiplyScalar(B),at.groundColor.copy(W.groundColor).multiplyScalar(B),a.hemi[D]=at,D++}}z>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Bt.LTC_FLOAT_1,a.rectAreaLTC2=Bt.LTC_FLOAT_2):(a.rectAreaLTC1=Bt.LTC_HALF_1,a.rectAreaLTC2=Bt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const Y=a.hash;(Y.sunLength!==M||Y.directionalLength!==S||Y.pointLength!==x||Y.spotLength!==L||Y.rectAreaLength!==z||Y.hemiLength!==D||Y.numSunShadows!==b||Y.numDirectionalShadows!==U||Y.numPointShadows!==N||Y.numSpotShadows!==I||Y.numSpotMaps!==T||Y.numLightProbes!==V)&&(a.sun.length=M,a.directional.length=S,a.spot.length=L,a.rectArea.length=z,a.point.length=x,a.hemi.length=D,a.sunShadow.length=b,a.sunShadowMap.length=b,a.sunShadowMatrix.length=R,a.sunShadowCascade.length=R,a.directionalShadow.length=U,a.directionalShadowMap.length=U,a.directionalShadowMatrix.length=U,a.pointShadow.length=N,a.pointShadowMap.length=N,a.pointShadowMatrix.length=N,a.spotShadow.length=I,a.spotShadowMap.length=I,a.spotLightMatrix.length=I+T-O,a.spotLightMap.length=T,a.numSpotLightShadowsWithMaps=O,a.numLightProbes=V,Y.sunLength=M,Y.directionalLength=S,Y.pointLength=x,Y.spotLength=L,Y.rectAreaLength=z,Y.hemiLength=D,Y.numSunShadows=b,Y.numDirectionalShadows=U,Y.numPointShadows=N,Y.numSpotShadows=I,Y.numSpotMaps=T,Y.numLightProbes=V,a.version=NR++)}function m(p,g){let v=0,_=0,M=0,b=0,R=0,S=0;const x=g.matrixWorldInverse;for(let L=0,z=p.length;L<z;L++){const D=p[L];if(D.isSunLight){const U=a.sun[v];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(x),v++}else if(D.isDirectionalLight){const U=a.directional[_];U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),_++}else if(D.isSpotLight){const U=a.spot[b];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),b++}else if(D.isRectAreaLight){const U=a.rectArea[R];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(x),f.identity(),c.copy(D.matrixWorld),c.premultiply(x),f.extractRotation(c),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),R++}else if(D.isPointLight){const U=a.point[M];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(x),M++}else if(D.isHemisphereLight){const U=a.hemi[S];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(x),S++}}}return{setup:h,setupView:m,state:a}}function fx(s){const t=new PR(s),i=[],a=[],l=[];function c(_){v.camera=_,i.length=0,a.length=0,l.length=0}function f(_){i.push(_)}function h(_){a.push(_)}function m(_){l.push(_)}function p(){t.setup(i)}function g(_){t.setupView(i,_)}const v={lightsArray:i,shadowsArray:a,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:g,pushLight:f,pushShadow:h,pushLightProbeGrid:m}}function IR(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new fx(s),t.set(l,[h])):c>=f.length?(h=new fx(s),f.push(h)):h=f[c],h}function a(){t=new WeakMap}return{get:i,dispose:a}}const BR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zR=`uniform sampler2D shadow_pass;
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
}`,FR=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],HR=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],dx=new je,cl=new J,Gh=new J;function GR(s,t,i){let a=new om;const l=new le,c=new le,f=new nn,h=new Z1,m=new K1,p={},g=i.maxTextureSize,v={[Yr]:ti,[ti]:Yr,[Bi]:Bi},_=new ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:BR,fragmentShader:zR}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const b=new Hn;b.setAttribute("position",new ta(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new cn(b,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gu;let x=this.type;this.render=function(N,I,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===vE&&(ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gu);const O=s.getRenderTarget(),V=s.getActiveCubeFace(),Y=s.getActiveMipmapLevel(),K=s.state;K.setBlending(La),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const et=x!==this.type;et&&I.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(Q=>Q.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,Q=N.length;W<Q;W++){const B=N[W],H=B.shadow;if(H===void 0){ne("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const lt=H.getFrameExtents();l.multiply(lt),c.copy(H.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/lt.x),l.x=c.x*lt.x,H.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/lt.y),l.y=c.y*lt.y,H.mapSize.y=c.y));const at=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=at,H.map===null||et===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===fl){if(B.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Gi(l.x,l.y,{format:Kr,type:na,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new El(l.x,l.y,Ji),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=Pa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn}else B.isPointLight?(H.map=new mS(l.x),H.map.depthTexture=new V1(l.x,ea)):(H.map=new Gi(l.x,l.y),H.map.depthTexture=new El(l.x,l.y,ea)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=Pa,this.type===gu?(H.map.depthTexture.compareFunction=at?nm:em,H.map.depthTexture.minFilter=Bn,H.map.depthTexture.magFilter=Bn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==l.x||H.map.height!==l.y)&&H.map.setSize(l.x,l.y);const dt=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();B.isPointLight!==!0&&H.updateMatrices(B,T);for(let w=0;w<dt;w++){const G=H.getCamera(w);if(B.isPointLight){const rt=H.camera,pt=H.matrix,Tt=B.distance||rt.far;Tt!==rt.far&&(rt.far=Tt,rt.updateProjectionMatrix()),cl.setFromMatrixPosition(B.matrixWorld),rt.position.copy(cl),Gh.copy(rt.position),Gh.add(FR[w]),rt.up.copy(HR[w]),rt.lookAt(Gh),rt.updateMatrixWorld(),pt.makeTranslation(-cl.x,-cl.y,-cl.z),dx.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),H._frustum.setFromProjectionMatrix(dx,rt.coordinateSystem,rt.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,w),s.clear();else{w===0&&(s.setRenderTarget(H.map),s.clear());const rt=H.getViewport(w);f.set(c.x*rt.x,c.y*rt.y,c.x*rt.z,c.y*rt.w),K.viewport(f)}a=H.getFrustum(w),D(I,T,G,B,this.type)}H.isPointLightShadow!==!0&&this.type===fl&&L(H,T),H.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(O,V,Y)};function L(N,I){const T=t.update(R);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null?N.mapPass=new Gi(l.x,l.y,{format:Kr,type:na}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),_.uniforms.shadow_pass.value=N.map.depthTexture,_.uniforms.resolution.value.set(N.map.width,N.map.height),_.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(I,null,T,_,R,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value.set(N.map.width,N.map.height),M.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(I,null,T,M,R,null)}function z(N,I,T,O){let V=null;const Y=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(Y!==void 0)V=Y;else if(V=T.isPointLight===!0?m:h,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const K=V.uuid,et=I.uuid;let W=p[K];W===void 0&&(W={},p[K]=W);let Q=W[et];Q===void 0&&(Q=V.clone(),W[et]=Q,I.addEventListener("dispose",U)),V=Q}if(V.visible=I.visible,V.wireframe=I.wireframe,O===fl?V.side=I.shadowSide!==null?I.shadowSide:I.side:V.side=I.shadowSide!==null?I.shadowSide:v[I.side],V.alphaMap=I.alphaMap,V.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,V.map=I.map,V.clipShadows=I.clipShadows,V.clippingPlanes=I.clippingPlanes,V.clipIntersection=I.clipIntersection,V.displacementMap=I.displacementMap,V.displacementScale=I.displacementScale,V.displacementBias=I.displacementBias,V.wireframeLinewidth=I.wireframeLinewidth,V.linewidth=I.linewidth,T.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const K=s.properties.get(V);K.light=T}return V}function D(N,I,T,O,V){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&V===fl)&&(!N.frustumCulled||N.intersectsFrustum(a))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const et=t.update(N),W=N.material;if(Array.isArray(W)){const Q=et.groups;for(let B=0,H=Q.length;B<H;B++){const lt=Q[B],at=W[lt.materialIndex];if(at&&at.visible){const dt=z(N,at,O,V);N.onBeforeShadow(s,N,I,T,et,dt,lt),s.renderBufferDirect(T,null,et,dt,N,lt),N.onAfterShadow(s,N,I,T,et,dt,lt)}}}else if(W.visible){const Q=z(N,W,O,V);N.onBeforeShadow(s,N,I,T,et,Q,null),s.renderBufferDirect(T,null,et,Q,N,null),N.onAfterShadow(s,N,I,T,et,Q,null)}}const K=N.children;for(let et=0,W=K.length;et<W;et++)D(K[et],I,T,O,V)}function U(N){N.target.removeEventListener("dispose",U);for(const T in p){const O=p[T],V=N.target.uuid;V in O&&(O[V].dispose(),delete O[V])}}}function VR(s,t){function i(){let q=!1;const wt=new nn;let yt=null;const Dt=new nn(0,0,0,0);return{setMask:function(Ht){yt!==Ht&&!q&&(s.colorMask(Ht,Ht,Ht,Ht),yt=Ht)},setLocked:function(Ht){q=Ht},setClear:function(Ht,bt,Qt,qt,He){He===!0&&(Ht*=qt,bt*=qt,Qt*=qt),wt.set(Ht,bt,Qt,qt),Dt.equals(wt)===!1&&(s.clearColor(Ht,bt,Qt,qt),Dt.copy(wt))},reset:function(){q=!1,yt=null,Dt.set(-1,0,0,0)}}}function a(){let q=!1,wt=!1,yt=null,Dt=null,Ht=null;return{setReversed:function(bt){if(wt!==bt){const Qt=t.get("EXT_clip_control");bt?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT),wt=bt;const qt=Ht;Ht=null,this.setClear(qt)}},getReversed:function(){return wt},setTest:function(bt){bt?mt(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(bt){yt!==bt&&!q&&(s.depthMask(bt),yt=bt)},setFunc:function(bt){if(wt&&(bt=jE[bt]),Dt!==bt){switch(bt){case Wh:s.depthFunc(s.NEVER);break;case qh:s.depthFunc(s.ALWAYS);break;case Yh:s.depthFunc(s.LESS);break;case vl:s.depthFunc(s.LEQUAL);break;case Zh:s.depthFunc(s.EQUAL);break;case Kh:s.depthFunc(s.GEQUAL);break;case Qh:s.depthFunc(s.GREATER);break;case Jh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Dt=bt}},setLocked:function(bt){q=bt},setClear:function(bt){Ht!==bt&&(Ht=bt,wt&&(bt=1-bt),s.clearDepth(bt))},reset:function(){q=!1,yt=null,Dt=null,Ht=null,wt=!1}}}function l(){let q=!1,wt=null,yt=null,Dt=null,Ht=null,bt=null,Qt=null,qt=null,He=null;return{setTest:function(Re){q||(Re?mt(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(Re){wt!==Re&&!q&&(s.stencilMask(Re),wt=Re)},setFunc:function(Re,qn,ei){(yt!==Re||Dt!==qn||Ht!==ei)&&(s.stencilFunc(Re,qn,ei),yt=Re,Dt=qn,Ht=ei)},setOp:function(Re,qn,ei){(bt!==Re||Qt!==qn||qt!==ei)&&(s.stencilOp(Re,qn,ei),bt=Re,Qt=qn,qt=ei)},setLocked:function(Re){q=Re},setClear:function(Re){He!==Re&&(s.clearStencil(Re),He=Re)},reset:function(){q=!1,wt=null,yt=null,Dt=null,Ht=null,bt=null,Qt=null,qt=null,He=null}}}const c=new i,f=new a,h=new l,m=new WeakMap,p=new WeakMap;let g={},v={},_={},M=new WeakMap,b=[],R=null,S=!1,x=null,L=null,z=null,D=null,U=null,N=null,I=null,T=new Te(0,0,0),O=0,V=!1,Y=null,K=null,et=null,W=null,Q=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,lt=0;const at=s.getParameter(s.VERSION);at.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(at)[1]),H=lt>=1):at.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),H=lt>=2);let dt=null,w={};const G=s.getParameter(s.SCISSOR_BOX),rt=s.getParameter(s.VIEWPORT),pt=new nn().fromArray(G),Tt=new nn().fromArray(rt);function Lt(q,wt,yt,Dt){const Ht=new Uint8Array(4),bt=s.createTexture();s.bindTexture(q,bt),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qt=0;Qt<yt;Qt++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(wt,0,s.RGBA,1,1,Dt,0,s.RGBA,s.UNSIGNED_BYTE,Ht):s.texImage2D(wt+Qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ht);return bt}const tt={};tt[s.TEXTURE_2D]=Lt(s.TEXTURE_2D,s.TEXTURE_2D,1),tt[s.TEXTURE_CUBE_MAP]=Lt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[s.TEXTURE_2D_ARRAY]=Lt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),tt[s.TEXTURE_3D]=Lt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),mt(s.DEPTH_TEST),f.setFunc(vl),ge(!1),We(fv),mt(s.CULL_FACE),xe(La);function mt(q){g[q]!==!0&&(s.enable(q),g[q]=!0)}function At(q){g[q]!==!1&&(s.disable(q),g[q]=!1)}function jt(q,wt){return _[q]!==wt?(s.bindFramebuffer(q,wt),_[q]=wt,q===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=wt),q===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=wt),!0):!1}function Ft(q,wt){let yt=b,Dt=!1;if(q){yt=M.get(wt),yt===void 0&&(yt=[],M.set(wt,yt));const Ht=q.textures;if(yt.length!==Ht.length||yt[0]!==s.COLOR_ATTACHMENT0){for(let bt=0,Qt=Ht.length;bt<Qt;bt++)yt[bt]=s.COLOR_ATTACHMENT0+bt;yt.length=Ht.length,Dt=!0}}else yt[0]!==s.BACK&&(yt[0]=s.BACK,Dt=!0);Dt&&s.drawBuffers(yt)}function ae(q){return R!==q?(s.useProgram(q),R=q,!0):!1}const an={[Zs]:s.FUNC_ADD,[SE]:s.FUNC_SUBTRACT,[yE]:s.FUNC_REVERSE_SUBTRACT};an[ME]=s.MIN,an[EE]=s.MAX;const re={[bE]:s.ZERO,[TE]:s.ONE,[AE]:s.SRC_COLOR,[Px]:s.SRC_ALPHA,[UE]:s.SRC_ALPHA_SATURATE,[DE]:s.DST_COLOR,[CE]:s.DST_ALPHA,[RE]:s.ONE_MINUS_SRC_COLOR,[Ix]:s.ONE_MINUS_SRC_ALPHA,[LE]:s.ONE_MINUS_DST_COLOR,[wE]:s.ONE_MINUS_DST_ALPHA,[NE]:s.CONSTANT_COLOR,[OE]:s.ONE_MINUS_CONSTANT_COLOR,[PE]:s.CONSTANT_ALPHA,[IE]:s.ONE_MINUS_CONSTANT_ALPHA};function xe(q,wt,yt,Dt,Ht,bt,Qt,qt,He,Re){if(q===La){S===!0&&(At(s.BLEND),S=!1);return}if(S===!1&&(mt(s.BLEND),S=!0),q!==xE){if(q!==x||Re!==V){if((L!==Zs||U!==Zs)&&(s.blendEquation(s.FUNC_ADD),L=Zs,U=Zs),Re)switch(q){case hl:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pl:s.blendFunc(s.ONE,s.ONE);break;case dv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hv:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ae("WebGLState: Invalid blending: ",q);break}else switch(q){case hl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case dv:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hv:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",q);break}z=null,D=null,N=null,I=null,T.set(0,0,0),O=0,x=q,V=Re}return}Ht=Ht||wt,bt=bt||yt,Qt=Qt||Dt,(wt!==L||Ht!==U)&&(s.blendEquationSeparate(an[wt],an[Ht]),L=wt,U=Ht),(yt!==z||Dt!==D||bt!==N||Qt!==I)&&(s.blendFuncSeparate(re[yt],re[Dt],re[bt],re[Qt]),z=yt,D=Dt,N=bt,I=Qt),(qt.equals(T)===!1||He!==O)&&(s.blendColor(qt.r,qt.g,qt.b,He),T.copy(qt),O=He),x=q,V=!1}function Oe(q,wt){q.side===Bi?At(s.CULL_FACE):mt(s.CULL_FACE);let yt=q.side===ti;wt&&(yt=!yt),ge(yt),q.blending===hl&&q.transparent===!1?xe(La):xe(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const Dt=q.stencilWrite;h.setTest(Dt),Dt&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Tn(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?mt(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function ge(q){Y!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),Y=q)}function We(q){q!==gE?(mt(s.CULL_FACE),q!==K&&(q===fv?s.cullFace(s.BACK):q===_E?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),K=q}function rn(q){q!==et&&(H&&s.lineWidth(q),et=q)}function Tn(q,wt,yt){q?(mt(s.POLYGON_OFFSET_FILL),(W!==wt||Q!==yt)&&(W=wt,Q=yt,f.getReversed()&&(wt=-wt),s.polygonOffset(wt,yt))):At(s.POLYGON_OFFSET_FILL)}function qe(q){q?mt(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function sn(q){q===void 0&&(q=s.TEXTURE0+B-1),dt!==q&&(s.activeTexture(q),dt=q)}function Z(q,wt,yt){yt===void 0&&(dt===null?yt=s.TEXTURE0+B-1:yt=dt);let Dt=w[yt];Dt===void 0&&(Dt={type:void 0,texture:void 0},w[yt]=Dt),(Dt.type!==q||Dt.texture!==wt)&&(dt!==yt&&(s.activeTexture(yt),dt=yt),s.bindTexture(q,wt||tt[q]),Dt.type=q,Dt.texture=wt)}function Pe(){const q=w[dt];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Le(){try{s.compressedTexImage2D(...arguments)}catch(q){Ae("WebGLState:",q)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(q){Ae("WebGLState:",q)}}function E(){try{s.texSubImage2D(...arguments)}catch(q){Ae("WebGLState:",q)}}function $(){try{s.texSubImage3D(...arguments)}catch(q){Ae("WebGLState:",q)}}function ct(){try{s.compressedTexSubImage2D(...arguments)}catch(q){Ae("WebGLState:",q)}}function gt(){try{s.compressedTexSubImage3D(...arguments)}catch(q){Ae("WebGLState:",q)}}function Rt(){try{s.texStorage2D(...arguments)}catch(q){Ae("WebGLState:",q)}}function Ut(){try{s.texStorage3D(...arguments)}catch(q){Ae("WebGLState:",q)}}function _t(){try{s.texImage2D(...arguments)}catch(q){Ae("WebGLState:",q)}}function vt(){try{s.texImage3D(...arguments)}catch(q){Ae("WebGLState:",q)}}function Ct(q){return v[q]!==void 0?v[q]:s.getParameter(q)}function kt(q,wt){v[q]!==wt&&(s.pixelStorei(q,wt),v[q]=wt)}function Pt(q){pt.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),pt.copy(q))}function Nt(q){Tt.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),Tt.copy(q))}function Jt(q,wt){let yt=p.get(wt);yt===void 0&&(yt=new WeakMap,p.set(wt,yt));let Dt=yt.get(q);Dt===void 0&&(Dt=s.getUniformBlockIndex(wt,q.name),yt.set(q,Dt))}function $t(q,wt){const Dt=p.get(wt).get(q);m.get(wt)!==Dt&&(s.uniformBlockBinding(wt,Dt,q.__bindingPointIndex),m.set(wt,Dt))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},v={},dt=null,w={},_={},M=new WeakMap,b=[],R=null,S=!1,x=null,L=null,z=null,D=null,U=null,N=null,I=null,T=new Te(0,0,0),O=0,V=!1,Y=null,K=null,et=null,W=null,Q=null,pt.set(0,0,s.canvas.width,s.canvas.height),Tt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:mt,disable:At,bindFramebuffer:jt,drawBuffers:Ft,useProgram:ae,setBlending:xe,setMaterial:Oe,setFlipSided:ge,setCullFace:We,setLineWidth:rn,setPolygonOffset:Tn,setScissorTest:qe,activeTexture:sn,bindTexture:Z,unbindTexture:Pe,compressedTexImage2D:Le,compressedTexImage3D:P,texImage2D:_t,texImage3D:vt,pixelStorei:kt,getParameter:Ct,updateUBOMapping:Jt,uniformBlockBinding:$t,texStorage2D:Rt,texStorage3D:Ut,texSubImage2D:E,texSubImage3D:$,compressedTexSubImage2D:ct,compressedTexSubImage3D:gt,scissor:Pt,viewport:Nt,reset:ie}}function kR(s,t,i,a,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new le,g=new WeakMap,v=new Set;let _;const M=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(P,E){return b?new OffscreenCanvas(P,E):Ru("canvas")}function S(P,E,$){let ct=1;const gt=Le(P);if((gt.width>$||gt.height>$)&&(ct=$/Math.max(gt.width,gt.height)),ct<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Rt=Math.floor(ct*gt.width),Ut=Math.floor(ct*gt.height);_===void 0&&(_=R(Rt,Ut));const _t=E?R(Rt,Ut):_;return _t.width=Rt,_t.height=Ut,_t.getContext("2d").drawImage(P,0,0,Rt,Ut),ne("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+Rt+"x"+Ut+")."),_t}else return"data"in P&&ne("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),P;return P}function x(P){return P.generateMipmaps}function L(P){s.generateMipmap(P)}function z(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(P,E,$,ct,gt,Rt=!1){if(P!==null){if(s[P]!==void 0)return s[P];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ut;ct&&(Ut=t.get("EXT_texture_norm16"),Ut||ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _t=E;if(E===s.RED&&($===s.FLOAT&&(_t=s.R32F),$===s.HALF_FLOAT&&(_t=s.R16F),$===s.UNSIGNED_BYTE&&(_t=s.R8),$===s.UNSIGNED_SHORT&&Ut&&(_t=Ut.R16_EXT),$===s.SHORT&&Ut&&(_t=Ut.R16_SNORM_EXT)),E===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(_t=s.R8UI),$===s.UNSIGNED_SHORT&&(_t=s.R16UI),$===s.UNSIGNED_INT&&(_t=s.R32UI),$===s.BYTE&&(_t=s.R8I),$===s.SHORT&&(_t=s.R16I),$===s.INT&&(_t=s.R32I)),E===s.RG&&($===s.FLOAT&&(_t=s.RG32F),$===s.HALF_FLOAT&&(_t=s.RG16F),$===s.UNSIGNED_BYTE&&(_t=s.RG8),$===s.UNSIGNED_SHORT&&Ut&&(_t=Ut.RG16_EXT),$===s.SHORT&&Ut&&(_t=Ut.RG16_SNORM_EXT)),E===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(_t=s.RG8UI),$===s.UNSIGNED_SHORT&&(_t=s.RG16UI),$===s.UNSIGNED_INT&&(_t=s.RG32UI),$===s.BYTE&&(_t=s.RG8I),$===s.SHORT&&(_t=s.RG16I),$===s.INT&&(_t=s.RG32I)),E===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(_t=s.RGB8UI),$===s.UNSIGNED_SHORT&&(_t=s.RGB16UI),$===s.UNSIGNED_INT&&(_t=s.RGB32UI),$===s.BYTE&&(_t=s.RGB8I),$===s.SHORT&&(_t=s.RGB16I),$===s.INT&&(_t=s.RGB32I)),E===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(_t=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(_t=s.RGBA16UI),$===s.UNSIGNED_INT&&(_t=s.RGBA32UI),$===s.BYTE&&(_t=s.RGBA8I),$===s.SHORT&&(_t=s.RGBA16I),$===s.INT&&(_t=s.RGBA32I)),E===s.RGB&&($===s.UNSIGNED_SHORT&&Ut&&(_t=Ut.RGB16_EXT),$===s.SHORT&&Ut&&(_t=Ut.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(_t=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(_t=s.R11F_G11F_B10F)),E===s.RGBA){const vt=Rt?Au:be.getTransfer(gt);$===s.FLOAT&&(_t=s.RGBA32F),$===s.HALF_FLOAT&&(_t=s.RGBA16F),$===s.UNSIGNED_BYTE&&(_t=vt===ze?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&Ut&&(_t=Ut.RGBA16_EXT),$===s.SHORT&&Ut&&(_t=Ut.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(_t=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(_t=s.RGB5_A1)}return(_t===s.R16F||_t===s.R32F||_t===s.RG16F||_t===s.RG32F||_t===s.RGBA16F||_t===s.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function U(P,E){let $;return P?E===null||E===ea||E===Sl?$=s.DEPTH24_STENCIL8:E===Ji?$=s.DEPTH32F_STENCIL8:E===xl&&($=s.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ea||E===Sl?$=s.DEPTH_COMPONENT24:E===Ji?$=s.DEPTH_COMPONENT32F:E===xl&&($=s.DEPTH_COMPONENT16),$}function N(P,E){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==Nn&&P.minFilter!==Bn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function I(P){const E=P.target;E.removeEventListener("dispose",I),O(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&v.delete(E)}function T(P){const E=P.target;E.removeEventListener("dispose",T),Y(E)}function O(P){const E=a.get(P);if(E.__webglInit===void 0)return;const $=P.source,ct=M.get($);if(ct){const gt=ct[E.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&V(P),Object.keys(ct).length===0&&M.delete($)}a.remove(P)}function V(P){const E=a.get(P);s.deleteTexture(E.__webglTexture);const $=P.source,ct=M.get($);delete ct[E.__cacheKey],f.memory.textures--}function Y(P){const E=a.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),a.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(E.__webglFramebuffer[ct]))for(let gt=0;gt<E.__webglFramebuffer[ct].length;gt++)s.deleteFramebuffer(E.__webglFramebuffer[ct][gt]);else s.deleteFramebuffer(E.__webglFramebuffer[ct]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ct])}else{if(Array.isArray(E.__webglFramebuffer))for(let ct=0;ct<E.__webglFramebuffer.length;ct++)s.deleteFramebuffer(E.__webglFramebuffer[ct]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ct=0;ct<E.__webglColorRenderbuffer.length;ct++)E.__webglColorRenderbuffer[ct]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ct]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=P.textures;for(let ct=0,gt=$.length;ct<gt;ct++){const Rt=a.get($[ct]);Rt.__webglTexture&&(s.deleteTexture(Rt.__webglTexture),f.memory.textures--),a.remove($[ct])}a.remove(P)}let K=0;function et(){K=0}function W(){return K}function Q(P){K=P}function B(){const P=K;return P>=l.maxTextures&&ne("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+l.maxTextures),K+=1,P}function H(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function lt(P,E){const $=a.get(P);if(P.isVideoTexture&&Z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&$.__version!==P.version){const ct=P.image;if(ct===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{At($,P,E);return}}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+E)}function at(P,E){const $=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){At($,P,E);return}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+E)}function dt(P,E){const $=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){At($,P,E);return}i.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+E)}function w(P,E){const $=a.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&$.__version!==P.version){jt($,P,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+E)}const G={[jh]:s.REPEAT,[wa]:s.CLAMP_TO_EDGE,[$h]:s.MIRRORED_REPEAT},rt={[Nn]:s.NEAREST,[FE]:s.NEAREST_MIPMAP_NEAREST,[Hc]:s.NEAREST_MIPMAP_LINEAR,[Bn]:s.LINEAR,[uh]:s.LINEAR_MIPMAP_NEAREST,[kr]:s.LINEAR_MIPMAP_LINEAR},pt={[kE]:s.NEVER,[ZE]:s.ALWAYS,[XE]:s.LESS,[em]:s.LEQUAL,[WE]:s.EQUAL,[nm]:s.GEQUAL,[qE]:s.GREATER,[YE]:s.NOTEQUAL};function Tt(P,E){if(E.type===Ji&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Bn||E.magFilter===uh||E.magFilter===Hc||E.magFilter===kr||E.minFilter===Bn||E.minFilter===uh||E.minFilter===Hc||E.minFilter===kr)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,G[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,G[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,G[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,rt[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,rt[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,pt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Nn||E.minFilter!==Hc&&E.minFilter!==kr||E.type===Ji&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function Lt(P,E){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",I));const ct=E.source;let gt=M.get(ct);gt===void 0&&(gt={},M.set(ct,gt));const Rt=H(E);if(Rt!==P.__cacheKey){gt[Rt]===void 0&&(gt[Rt]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,$=!0),gt[Rt].usedTimes++;const Ut=gt[P.__cacheKey];Ut!==void 0&&(gt[P.__cacheKey].usedTimes--,Ut.usedTimes===0&&V(E)),P.__cacheKey=Rt,P.__webglTexture=gt[Rt].texture}return $}function tt(P,E,$){return Math.floor(Math.floor(P/$)/E)}function mt(P,E,$,ct){const Rt=P.updateRanges;if(Rt.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,$,ct,E.data);else{Rt.sort((kt,Pt)=>kt.start-Pt.start);let Ut=0;for(let kt=1;kt<Rt.length;kt++){const Pt=Rt[Ut],Nt=Rt[kt],Jt=Pt.start+Pt.count,$t=tt(Nt.start,E.width,4),ie=tt(Pt.start,E.width,4);Nt.start<=Jt+1&&$t===ie&&tt(Nt.start+Nt.count-1,E.width,4)===$t?Pt.count=Math.max(Pt.count,Nt.start+Nt.count-Pt.start):(++Ut,Rt[Ut]=Nt)}Rt.length=Ut+1;const _t=i.getParameter(s.UNPACK_ROW_LENGTH),vt=i.getParameter(s.UNPACK_SKIP_PIXELS),Ct=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let kt=0,Pt=Rt.length;kt<Pt;kt++){const Nt=Rt[kt],Jt=Math.floor(Nt.start/4),$t=Math.ceil(Nt.count/4),ie=Jt%E.width,q=Math.floor(Jt/E.width),wt=$t,yt=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),i.pixelStorei(s.UNPACK_SKIP_ROWS,q),i.texSubImage2D(s.TEXTURE_2D,0,ie,q,wt,yt,$,ct,E.data)}P.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,_t),i.pixelStorei(s.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(s.UNPACK_SKIP_ROWS,Ct)}}function At(P,E,$){let ct=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=s.TEXTURE_3D);const gt=Lt(P,E),Rt=E.source;i.bindTexture(ct,P.__webglTexture,s.TEXTURE0+$);const Ut=a.get(Rt);if(Rt.version!==Ut.__version||gt===!0){if(i.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const yt=be.getPrimaries(be.workingColorSpace),Dt=E.colorSpace===mr?null:be.getPrimaries(E.colorSpace),Ht=E.colorSpace===mr||yt===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht)}i.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let vt=S(E.image,!1,l.maxTextureSize);vt=Pe(E,vt);const Ct=c.convert(E.format,E.colorSpace),kt=c.convert(E.type);let Pt=D(E.internalFormat,Ct,kt,E.normalized,E.colorSpace,E.isVideoTexture);Tt(ct,E);let Nt;const Jt=E.mipmaps,$t=E.isVideoTexture!==!0,ie=Ut.__version===void 0||gt===!0,q=Rt.dataReady,wt=N(E,vt);if(E.isDepthTexture)Pt=U(E.format===Xr,E.type),ie&&($t?i.texStorage2D(s.TEXTURE_2D,1,Pt,vt.width,vt.height):i.texImage2D(s.TEXTURE_2D,0,Pt,vt.width,vt.height,0,Ct,kt,null));else if(E.isDataTexture)if(Jt.length>0){$t&&ie&&i.texStorage2D(s.TEXTURE_2D,wt,Pt,Jt[0].width,Jt[0].height);for(let yt=0,Dt=Jt.length;yt<Dt;yt++)Nt=Jt[yt],$t?q&&i.texSubImage2D(s.TEXTURE_2D,yt,0,0,Nt.width,Nt.height,Ct,kt,Nt.data):i.texImage2D(s.TEXTURE_2D,yt,Pt,Nt.width,Nt.height,0,Ct,kt,Nt.data);E.generateMipmaps=!1}else $t?(ie&&i.texStorage2D(s.TEXTURE_2D,wt,Pt,vt.width,vt.height),q&&mt(E,vt,Ct,kt)):i.texImage2D(s.TEXTURE_2D,0,Pt,vt.width,vt.height,0,Ct,kt,vt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){$t&&ie&&i.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Pt,Jt[0].width,Jt[0].height,vt.depth);for(let yt=0,Dt=Jt.length;yt<Dt;yt++)if(Nt=Jt[yt],E.format!==Fi)if(Ct!==null)if($t){if(q)if(E.layerUpdates.size>0){const Ht=Xv(Nt.width,Nt.height,E.format,E.type);for(const bt of E.layerUpdates){const Qt=Nt.data.subarray(bt*Ht/Nt.data.BYTES_PER_ELEMENT,(bt+1)*Ht/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,yt,0,0,bt,Nt.width,Nt.height,1,Ct,Qt)}}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,yt,0,0,0,Nt.width,Nt.height,vt.depth,Ct,Nt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,yt,Pt,Nt.width,Nt.height,vt.depth,0,Nt.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?q&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,yt,0,0,0,Nt.width,Nt.height,vt.depth,Ct,kt,Nt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,yt,Pt,Nt.width,Nt.height,vt.depth,0,Ct,kt,Nt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{$t&&ie&&i.texStorage2D(s.TEXTURE_2D,wt,Pt,Jt[0].width,Jt[0].height);for(let yt=0,Dt=Jt.length;yt<Dt;yt++)Nt=Jt[yt],E.format!==Fi?Ct!==null?$t?q&&i.compressedTexSubImage2D(s.TEXTURE_2D,yt,0,0,Nt.width,Nt.height,Ct,Nt.data):i.compressedTexImage2D(s.TEXTURE_2D,yt,Pt,Nt.width,Nt.height,0,Nt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?q&&i.texSubImage2D(s.TEXTURE_2D,yt,0,0,Nt.width,Nt.height,Ct,kt,Nt.data):i.texImage2D(s.TEXTURE_2D,yt,Pt,Nt.width,Nt.height,0,Ct,kt,Nt.data)}else if(E.isDataArrayTexture)if($t){if(ie&&i.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Pt,vt.width,vt.height,vt.depth),q)if(E.layerUpdates.size>0){const yt=Xv(vt.width,vt.height,E.format,E.type);for(const Dt of E.layerUpdates){const Ht=vt.data.subarray(Dt*yt/vt.data.BYTES_PER_ELEMENT,(Dt+1)*yt/vt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Dt,vt.width,vt.height,1,Ct,kt,Ht)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Ct,kt,vt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,vt.width,vt.height,vt.depth,0,Ct,kt,vt.data);else if(E.isData3DTexture)$t?(ie&&i.texStorage3D(s.TEXTURE_3D,wt,Pt,vt.width,vt.height,vt.depth),q&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Ct,kt,vt.data)):i.texImage3D(s.TEXTURE_3D,0,Pt,vt.width,vt.height,vt.depth,0,Ct,kt,vt.data);else if(E.isFramebufferTexture){if(ie)if($t)i.texStorage2D(s.TEXTURE_2D,wt,Pt,vt.width,vt.height);else{let yt=vt.width,Dt=vt.height;for(let Ht=0;Ht<wt;Ht++)i.texImage2D(s.TEXTURE_2D,Ht,Pt,yt,Dt,0,Ct,kt,null),yt>>=1,Dt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const yt=s.canvas;if(yt.hasAttribute("layoutsubtree")||yt.setAttribute("layoutsubtree","true"),vt.parentNode!==yt){yt.appendChild(vt),v.add(E),yt.onpaint=Dt=>{const Ht=Dt.changedElements;for(const bt of v)Ht.includes(bt.image)&&(bt.needsUpdate=!0)},yt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,vt);else{const Ht=s.RGBA,bt=s.RGBA,Qt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ht,bt,Qt,vt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Jt.length>0){if($t&&ie){const yt=Le(Jt[0]);i.texStorage2D(s.TEXTURE_2D,wt,Pt,yt.width,yt.height)}for(let yt=0,Dt=Jt.length;yt<Dt;yt++)Nt=Jt[yt],$t?q&&i.texSubImage2D(s.TEXTURE_2D,yt,0,0,Ct,kt,Nt):i.texImage2D(s.TEXTURE_2D,yt,Pt,Ct,kt,Nt);E.generateMipmaps=!1}else if($t){if(ie){const yt=Le(vt);i.texStorage2D(s.TEXTURE_2D,wt,Pt,yt.width,yt.height)}q&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ct,kt,vt)}else i.texImage2D(s.TEXTURE_2D,0,Pt,Ct,kt,vt);x(E)&&L(ct),Ut.__version=Rt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function jt(P,E,$){if(E.image.length!==6)return;const ct=Lt(P,E),gt=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+$);const Rt=a.get(gt);if(gt.version!==Rt.__version||ct===!0){i.activeTexture(s.TEXTURE0+$);const Ut=be.getPrimaries(be.workingColorSpace),_t=E.colorSpace===mr?null:be.getPrimaries(E.colorSpace),vt=E.colorSpace===mr||Ut===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Ct=E.isCompressedTexture||E.image[0].isCompressedTexture,kt=E.image[0]&&E.image[0].isDataTexture,Pt=[];for(let bt=0;bt<6;bt++)!Ct&&!kt?Pt[bt]=S(E.image[bt],!0,l.maxCubemapSize):Pt[bt]=kt?E.image[bt].image:E.image[bt],Pt[bt]=Pe(E,Pt[bt]);const Nt=Pt[0],Jt=c.convert(E.format,E.colorSpace),$t=c.convert(E.type),ie=D(E.internalFormat,Jt,$t,E.normalized,E.colorSpace),q=E.isVideoTexture!==!0,wt=Rt.__version===void 0||ct===!0,yt=gt.dataReady;let Dt=N(E,Nt);Tt(s.TEXTURE_CUBE_MAP,E);let Ht;if(Ct){q&&wt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Dt,ie,Nt.width,Nt.height);for(let bt=0;bt<6;bt++){Ht=Pt[bt].mipmaps;for(let Qt=0;Qt<Ht.length;Qt++){const qt=Ht[Qt];E.format!==Fi?Jt!==null?q?yt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Qt,0,0,qt.width,qt.height,Jt,qt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Qt,ie,qt.width,qt.height,0,qt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?yt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Qt,0,0,qt.width,qt.height,Jt,$t,qt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Qt,ie,qt.width,qt.height,0,Jt,$t,qt.data)}}}else{if(Ht=E.mipmaps,q&&wt){Ht.length>0&&Dt++;const bt=Le(Pt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Dt,ie,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(kt){q?yt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Pt[bt].width,Pt[bt].height,Jt,$t,Pt[bt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ie,Pt[bt].width,Pt[bt].height,0,Jt,$t,Pt[bt].data);for(let Qt=0;Qt<Ht.length;Qt++){const He=Ht[Qt].image[bt].image;q?yt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Qt+1,0,0,He.width,He.height,Jt,$t,He.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Qt+1,ie,He.width,He.height,0,Jt,$t,He.data)}}else{q?yt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Jt,$t,Pt[bt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ie,Jt,$t,Pt[bt]);for(let Qt=0;Qt<Ht.length;Qt++){const qt=Ht[Qt];q?yt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Qt+1,0,0,Jt,$t,qt.image[bt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Qt+1,ie,Jt,$t,qt.image[bt])}}}x(E)&&L(s.TEXTURE_CUBE_MAP),Rt.__version=gt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ft(P,E,$,ct,gt,Rt){const Ut=c.convert($.format,$.colorSpace),_t=c.convert($.type),vt=D($.internalFormat,Ut,_t,$.normalized,$.colorSpace),Ct=a.get(E),kt=a.get($);if(kt.__renderTarget=E,!Ct.__hasExternalTextures){const Pt=Math.max(1,E.width>>Rt),Nt=Math.max(1,E.height>>Rt);gt===s.TEXTURE_3D||gt===s.TEXTURE_2D_ARRAY?i.texImage3D(gt,Rt,vt,Pt,Nt,E.depth,0,Ut,_t,null):i.texImage2D(gt,Rt,vt,Pt,Nt,0,Ut,_t,null)}i.bindFramebuffer(s.FRAMEBUFFER,P),sn(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,gt,kt.__webglTexture,0,qe(E)):(gt===s.TEXTURE_2D||gt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ct,gt,kt.__webglTexture,Rt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(P,E,$){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){const ct=E.depthTexture,gt=ct&&ct.isDepthTexture?ct.type:null,Rt=U(E.stencilBuffer,gt),Ut=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;sn(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe(E),Rt,E.width,E.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe(E),Rt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Rt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ut,s.RENDERBUFFER,P)}else{const ct=E.textures;for(let gt=0;gt<ct.length;gt++){const Rt=ct[gt],Ut=c.convert(Rt.format,Rt.colorSpace),_t=c.convert(Rt.type),vt=D(Rt.internalFormat,Ut,_t,Rt.normalized,Rt.colorSpace);sn(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe(E),vt,E.width,E.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe(E),vt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,vt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function an(P,E,$){const ct=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const gt=a.get(E.depthTexture);if(gt.__renderTarget=E,(!gt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ct){if(gt.__webglInit===void 0&&(gt.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),gt.__webglTexture===void 0){gt.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,gt.__webglTexture),Tt(s.TEXTURE_CUBE_MAP,E.depthTexture);const Ct=c.convert(E.depthTexture.format),kt=c.convert(E.depthTexture.type);let Pt;E.depthTexture.format===Pa?Pt=s.DEPTH_COMPONENT24:E.depthTexture.format===Xr&&(Pt=s.DEPTH24_STENCIL8);for(let Nt=0;Nt<6;Nt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,Pt,E.width,E.height,0,Ct,kt,null)}}else lt(E.depthTexture,0);const Rt=gt.__webglTexture,Ut=qe(E),_t=ct?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,vt=E.depthTexture.format===Xr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Pa)sn(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,_t,Rt,0,Ut):s.framebufferTexture2D(s.FRAMEBUFFER,vt,_t,Rt,0);else if(E.depthTexture.format===Xr)sn(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,_t,Rt,0,Ut):s.framebufferTexture2D(s.FRAMEBUFFER,vt,_t,Rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(P){const E=a.get(P),$=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ct=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){const gt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",gt)};ct.addEventListener("dispose",gt),E.__depthDisposeCallback=gt}E.__boundDepthTexture=ct}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if($)for(let ct=0;ct<6;ct++)an(E.__webglFramebuffer[ct],P,ct);else{const ct=P.texture.mipmaps;ct&&ct.length>0?an(E.__webglFramebuffer[0],P,0):an(E.__webglFramebuffer,P,0)}else if($){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=s.createRenderbuffer(),ae(E.__webglDepthbuffer[ct],P,!1);else{const gt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=E.__webglDepthbuffer[ct];s.bindRenderbuffer(s.RENDERBUFFER,Rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,Rt)}}else{const ct=P.texture.mipmaps;if(ct&&ct.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),ae(E.__webglDepthbuffer,P,!1);else{const gt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,Rt)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(P,E,$){const ct=a.get(P);E!==void 0&&Ft(ct.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&re(P)}function Oe(P){const E=P.texture,$=a.get(P),ct=a.get(E);P.addEventListener("dispose",T);const gt=P.textures,Rt=P.isWebGLCubeRenderTarget===!0,Ut=gt.length>1;if(Ut||(ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture()),ct.__version=E.version,f.memory.textures++),Rt){$.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[_t]=[];for(let vt=0;vt<E.mipmaps.length;vt++)$.__webglFramebuffer[_t][vt]=s.createFramebuffer()}else $.__webglFramebuffer[_t]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let _t=0;_t<E.mipmaps.length;_t++)$.__webglFramebuffer[_t]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Ut)for(let _t=0,vt=gt.length;_t<vt;_t++){const Ct=a.get(gt[_t]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=s.createTexture(),f.memory.textures++)}if(P.samples>0&&sn(P)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let _t=0;_t<gt.length;_t++){const vt=gt[_t];$.__webglColorRenderbuffer[_t]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[_t]);const Ct=c.convert(vt.format,vt.colorSpace),kt=c.convert(vt.type),Pt=D(vt.internalFormat,Ct,kt,vt.normalized,vt.colorSpace,P.isXRRenderTarget===!0),Nt=qe(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,Pt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,$.__webglColorRenderbuffer[_t])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),ae($.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Rt){i.bindTexture(s.TEXTURE_CUBE_MAP,ct.__webglTexture),Tt(s.TEXTURE_CUBE_MAP,E);for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0)for(let vt=0;vt<E.mipmaps.length;vt++)Ft($.__webglFramebuffer[_t][vt],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,vt);else Ft($.__webglFramebuffer[_t],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);x(E)&&L(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ut){for(let _t=0,vt=gt.length;_t<vt;_t++){const Ct=gt[_t],kt=a.get(Ct);let Pt=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Pt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Pt,kt.__webglTexture),Tt(Pt,Ct),Ft($.__webglFramebuffer,P,Ct,s.COLOR_ATTACHMENT0+_t,Pt,0),x(Ct)&&L(Pt)}i.unbindTexture()}else{let _t=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_t=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(_t,ct.__webglTexture),Tt(_t,E),E.mipmaps&&E.mipmaps.length>0)for(let vt=0;vt<E.mipmaps.length;vt++)Ft($.__webglFramebuffer[vt],P,E,s.COLOR_ATTACHMENT0,_t,vt);else Ft($.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,_t,0);x(E)&&L(_t),i.unbindTexture()}P.depthBuffer&&re(P)}function ge(P){const E=P.textures;for(let $=0,ct=E.length;$<ct;$++){const gt=E[$];if(x(gt)){const Rt=z(P),Ut=a.get(gt).__webglTexture;i.bindTexture(Rt,Ut),L(Rt),i.unbindTexture()}}}const We=[],rn=[];function Tn(P){if(P.samples>0){if(sn(P)===!1){const E=P.textures,$=P.width,ct=P.height;let gt=s.COLOR_BUFFER_BIT;const Rt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ut=a.get(P),_t=E.length>1;if(_t)for(let Ct=0;Ct<E.length;Ct++)i.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const vt=P.texture.mipmaps;vt&&vt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Ct=0;Ct<E.length;Ct++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(gt|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(gt|=s.STENCIL_BUFFER_BIT)),_t){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ut.__webglColorRenderbuffer[Ct]);const kt=a.get(E[Ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,kt,0)}s.blitFramebuffer(0,0,$,ct,0,0,$,ct,gt,s.NEAREST),m===!0&&(We.length=0,rn.length=0,We.push(s.COLOR_ATTACHMENT0+Ct),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(We.push(Rt),rn.push(Rt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,rn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,We))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_t)for(let Ct=0;Ct<E.length;Ct++){i.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,Ut.__webglColorRenderbuffer[Ct]);const kt=a.get(E[Ct]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,kt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&m){const E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function qe(P){return Math.min(l.maxSamples,P.samples)}function sn(P){const E=a.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Z(P){const E=f.render.frame;g.get(P)!==E&&(g.set(P,E),P.update())}function Pe(P,E){const $=P.colorSpace,ct=P.format,gt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==Tu&&$!==mr&&(be.getTransfer($)===ze?(ct!==Fi||gt!==mi)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",$)),E}function Le(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=B,this.resetTextureUnits=et,this.getTextureUnits=W,this.setTextureUnits=Q,this.setTexture2D=lt,this.setTexture2DArray=at,this.setTexture3D=dt,this.setTextureCube=w,this.rebindTextures=xe,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=sn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function XR(s,t){function i(a,l=mr){let c;const f=be.getTransfer(l);if(a===mi)return s.UNSIGNED_BYTE;if(a===Qp)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Jp)return s.UNSIGNED_SHORT_5_5_5_1;if(a===Zx)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===Kx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===qx)return s.BYTE;if(a===Yx)return s.SHORT;if(a===xl)return s.UNSIGNED_SHORT;if(a===Kp)return s.INT;if(a===ea)return s.UNSIGNED_INT;if(a===Ji)return s.FLOAT;if(a===na)return s.HALF_FLOAT;if(a===Qx)return s.ALPHA;if(a===Jx)return s.RGB;if(a===Fi)return s.RGBA;if(a===Pa)return s.DEPTH_COMPONENT;if(a===Xr)return s.DEPTH_STENCIL;if(a===jx)return s.RED;if(a===jp)return s.RED_INTEGER;if(a===Kr)return s.RG;if(a===$p)return s.RG_INTEGER;if(a===tm)return s.RGBA_INTEGER;if(a===_u||a===vu||a===xu||a===Su)if(f===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===_u)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===_u)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===vu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===xu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Su)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===tp||a===ep||a===np||a===ip)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===tp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ep)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===np)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===ip)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ap||a===rp||a===sp||a===op||a===lp||a===Eu||a===cp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===ap||a===rp)return f===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===sp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===op)return c.COMPRESSED_R11_EAC;if(a===lp)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Eu)return c.COMPRESSED_RG11_EAC;if(a===cp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===up||a===fp||a===dp||a===hp||a===pp||a===mp||a===gp||a===_p||a===vp||a===xp||a===Sp||a===yp||a===Mp||a===Ep)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===up)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===fp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===dp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===hp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===pp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===mp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===gp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===_p)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===vp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===xp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Sp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===yp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Mp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Ep)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===bp||a===Tp||a===Ap)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===bp)return f===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Tp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Ap)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Rp||a===Cp||a===bu||a===wp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Rp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Cp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===bu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===wp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Sl?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:i}}const WR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qR=`
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

}`;class YR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const a=new lS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,a=new ia({vertexShader:WR,fragmentShader:qR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new cn(new Wu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZR extends Jr{constructor(t,i){super();const a=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,v=null,_=null,M=null,b=null;const R=typeof XRWebGLBinding<"u",S=new YR,x={},L=i.getContextAttributes();let z=null,D=null;const U=[],N=[],I=new le;let T=null,O=null;const V=new pi;V.viewport=new nn;const Y=new pi;Y.viewport=new nn;const K=[V,Y],et=new eb;let W=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let mt=U[tt];return mt===void 0&&(mt=new vh,U[tt]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(tt){let mt=U[tt];return mt===void 0&&(mt=new vh,U[tt]=mt),mt.getGripSpace()},this.getHand=function(tt){let mt=U[tt];return mt===void 0&&(mt=new vh,U[tt]=mt),mt.getHandSpace()};function B(tt){const mt=N.indexOf(tt.inputSource);if(mt===-1)return;const At=U[mt];At!==void 0&&(At.update(tt.inputSource,tt.frame,p||f),At.dispatchEvent({type:tt.type,data:tt.inputSource}))}function H(){l.removeEventListener("select",B),l.removeEventListener("selectstart",B),l.removeEventListener("selectend",B),l.removeEventListener("squeeze",B),l.removeEventListener("squeezestart",B),l.removeEventListener("squeezeend",B),l.removeEventListener("end",H),l.removeEventListener("inputsourceschange",lt);for(let tt=0;tt<U.length;tt++){const mt=N[tt];mt!==null&&(N[tt]=null,U[tt].disconnect(mt))}W=null,Q=null,S.reset();for(const tt in x)delete x[tt];if(t.setRenderTarget(z),M=null,_=null,v=null,l=null,D=null,Lt.stop(),a.isPresenting=!1,t.setPixelRatio(T),t.setSize(I.width,I.height,!1),O!==null){const tt=O.camera;tt.fov=O.fov,tt.zoom=O.zoom,tt.updateProjectionMatrix(),O=null}a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,a.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){h=tt,a.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(z=t.getRenderTarget(),l.addEventListener("select",B),l.addEventListener("selectstart",B),l.addEventListener("selectend",B),l.addEventListener("squeeze",B),l.addEventListener("squeezestart",B),l.addEventListener("squeezeend",B),l.addEventListener("end",H),l.addEventListener("inputsourceschange",lt),L.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(I),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,jt=null,Ft=null;L.depth&&(Ft=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=L.stencil?Xr:Pa,jt=L.stencil?Sl:ea);const ae={colorFormat:i.RGBA8,depthFormat:Ft,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(ae),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),D=new Gi(_.textureWidth,_.textureHeight,{format:Fi,type:mi,depthTexture:new El(_.textureWidth,_.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const At={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Gi(M.framebufferWidth,M.framebufferHeight,{format:Fi,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Lt.setContext(l),Lt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function lt(tt){for(let mt=0;mt<tt.removed.length;mt++){const At=tt.removed[mt],jt=N.indexOf(At);jt>=0&&(N[jt]=null,U[jt].disconnect(At))}for(let mt=0;mt<tt.added.length;mt++){const At=tt.added[mt];let jt=N.indexOf(At);if(jt===-1){for(let ae=0;ae<U.length;ae++)if(ae>=N.length){N.push(At),jt=ae;break}else if(N[ae]===null){N[ae]=At,jt=ae;break}if(jt===-1)break}const Ft=U[jt];Ft&&Ft.connect(At)}}const at=new J,dt=new J;function w(tt,mt,At){at.setFromMatrixPosition(mt.matrixWorld),dt.setFromMatrixPosition(At.matrixWorld);const jt=at.distanceTo(dt),Ft=mt.projectionMatrix.elements,ae=At.projectionMatrix.elements,an=Ft[14]/(Ft[10]-1),re=Ft[14]/(Ft[10]+1),xe=(Ft[9]+1)/Ft[5],Oe=(Ft[9]-1)/Ft[5],ge=(Ft[8]-1)/Ft[0],We=(ae[8]+1)/ae[0],rn=an*ge,Tn=an*We,qe=jt/(-ge+We),sn=qe*-ge;if(mt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(sn),tt.translateZ(qe),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Ft[10]===-1)tt.projectionMatrix.copy(mt.projectionMatrix),tt.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Z=an+qe,Pe=re+qe,Le=rn-sn,P=Tn+(jt-sn),E=xe*re/Pe*Z,$=Oe*re/Pe*Z;tt.projectionMatrix.makePerspective(Le,P,E,$,Z,Pe),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function G(tt,mt){mt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(mt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let mt=tt.near,At=tt.far;S.texture!==null&&(S.depthNear>0&&(mt=S.depthNear),S.depthFar>0&&(At=S.depthFar)),et.near=Y.near=V.near=mt,et.far=Y.far=V.far=At,(W!==et.near||Q!==et.far)&&(l.updateRenderState({depthNear:et.near,depthFar:et.far}),W=et.near,Q=et.far),et.layers.mask=tt.layers.mask|6,V.layers.mask=et.layers.mask&-5,Y.layers.mask=et.layers.mask&-3;const jt=tt.parent,Ft=et.cameras;G(et,jt);for(let ae=0;ae<Ft.length;ae++)G(Ft[ae],jt);Ft.length===2?w(et,V,Y):et.projectionMatrix.copy(V.projectionMatrix),O===null&&tt.isPerspectiveCamera&&(O={camera:tt,fov:tt.fov,zoom:tt.zoom}),rt(tt,et,jt)};function rt(tt,mt,At){At===null?tt.matrix.copy(mt.matrixWorld):(tt.matrix.copy(At.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(mt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(mt.projectionMatrix),tt.projectionMatrixInverse.copy(mt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Ml*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(tt){m=tt,_!==null&&(_.fixedFoveation=tt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=tt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(et)},this.getCameraTexture=function(tt){return x[tt]};let pt=null;function Tt(tt,mt){if(g=mt.getViewerPose(p||f),b=mt,g!==null){const At=g.views;M!==null&&(t.setRenderTargetFramebuffer(D,M.framebuffer),t.setRenderTarget(D));let jt=!1;At.length!==et.cameras.length&&(et.cameras.length=0,jt=!0);for(let re=0;re<At.length;re++){const xe=At[re];let Oe=null;if(M!==null)Oe=M.getViewport(xe);else{const We=v.getViewSubImage(_,xe);Oe=We.viewport,re===0&&(t.setRenderTargetTextures(D,We.colorTexture,We.depthStencilTexture),t.setRenderTarget(D))}let ge=K[re];ge===void 0&&(ge=new pi,ge.layers.enable(re),ge.viewport=new nn,K[re]=ge),ge.matrix.fromArray(xe.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(xe.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),re===0&&(et.matrix.copy(ge.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),jt===!0&&et.cameras.push(ge)}const Ft=l.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){v=a.getBinding();const re=v.getDepthInformation(At[0]);re&&re.isValid&&re.texture&&S.init(re,l.renderState)}if(Ft&&Ft.includes("camera-access")&&R){t.state.unbindTexture(),v=a.getBinding();for(let re=0;re<At.length;re++){const xe=At[re].camera;if(xe){let Oe=x[xe];Oe||(Oe=new lS,x[xe]=Oe);const ge=v.getCameraImage(xe);Oe.sourceTexture=ge}}}}for(let At=0;At<U.length;At++){const jt=N[At],Ft=U[At];jt!==null&&Ft!==void 0&&Ft.update(jt,mt,p||f)}pt&&pt(tt,mt),mt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:mt}),b=null}const Lt=new hS;Lt.setAnimationLoop(Tt),this.setAnimationLoop=function(tt){pt=tt},this.dispose=function(){}}}const KR=new je,SS=new oe;SS.set(-1,0,0,0,1,0,0,0,1);function QR(s,t){function i(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function a(S,x){x.color.getRGB(S.fogColor.value,cS(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function l(S,x,L,z,D){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(S,x):x.isMeshLambertMaterial?(c(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(S,x),v(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(S,x),_(S,x),x.isMeshPhysicalMaterial&&M(S,x,D)):x.isMeshMatcapMaterial?(c(S,x),b(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),R(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(f(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?m(S,x,L,z):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,i(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ti&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,i(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ti&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,i(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,i(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const L=t.get(x),z=L.envMap,D=L.envMapRotation;z&&(S.envMap.value=z,S.envMapRotation.value.setFromMatrix4(KR.makeRotationFromEuler(D)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(SS),S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,S.aoMapTransform))}function f(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function m(S,x,L,z){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*L,S.scale.value=z*.5,x.map&&(S.map.value=x.map,i(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function v(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,L){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ti&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.retroreflectivity>0&&(S.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,x){x.matcap&&(S.matcap.value=x.matcap)}function R(S,x){const L=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function JR(s,t,i,a){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,U){const N=U.program;a.uniformBlockBinding(D,N)}function p(D,U){let N=l[D.id];N===void 0&&(S(D),N=g(D),l[D.id]=N,D.addEventListener("dispose",L));const I=U.program;a.updateUBOMapping(D,I);const T=t.render.frame;c[D.id]!==T&&(_(D),c[D.id]=T)}function g(D){const U=v();D.__bindingPointIndex=U;const N=s.createBuffer(),I=D.__size,T=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,I,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,N),N}function v(){for(let D=0;D<h;D++)if(f.indexOf(D)===-1)return f.push(D),D;return Ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const U=l[D.id],N=D.uniforms,I=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let T=0,O=N.length;T<O;T++){const V=N[T];if(Array.isArray(V))for(let Y=0,K=V.length;Y<K;Y++)M(V[Y],T,Y,I);else M(V,T,0,I)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(D,U,N,I){if(R(D,U,N,I)===!0){const T=D.__offset,O=D.value;if(Array.isArray(O)){let V=0;for(let Y=0;Y<O.length;Y++){const K=O[Y],et=x(K);b(K,D.__data,V),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(V+=et.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(O,D.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,D.__data)}}function b(D,U,N){typeof D=="number"||typeof D=="boolean"?U[0]=D:D.isMatrix3?(U[0]=D.elements[0],U[1]=D.elements[1],U[2]=D.elements[2],U[3]=0,U[4]=D.elements[3],U[5]=D.elements[4],U[6]=D.elements[5],U[7]=0,U[8]=D.elements[6],U[9]=D.elements[7],U[10]=D.elements[8],U[11]=0):ArrayBuffer.isView(D)?U.set(new D.constructor(D.buffer,D.byteOffset,U.length)):D.toArray(U,N)}function R(D,U,N,I){const T=D.value,O=U+"_"+N;if(I[O]===void 0)return typeof T=="number"||typeof T=="boolean"?I[O]=T:ArrayBuffer.isView(T)?I[O]=T.slice():I[O]=T.clone(),!0;{const V=I[O];if(typeof T=="number"||typeof T=="boolean"){if(V!==T)return I[O]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(V.equals(T)===!1)return V.copy(T),!0}}return!1}function S(D){const U=D.uniforms;let N=0;const I=16;for(let O=0,V=U.length;O<V;O++){const Y=Array.isArray(U[O])?U[O]:[U[O]];for(let K=0,et=Y.length;K<et;K++){const W=Y[K],Q=Array.isArray(W.value)?W.value:[W.value];for(let B=0,H=Q.length;B<H;B++){const lt=Q[B],at=x(lt),dt=N%I,w=dt%at.boundary,G=dt+w;N+=w,G!==0&&I-G<at.storage&&(N+=I-G),W.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=N,N+=at.storage}}}const T=N%I;return T>0&&(N+=I-T),D.__size=N,D.__cache={},this}function x(D){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=48,U.storage=48):D.isMatrix4?(U.boundary=64,U.storage=64):D.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(U.boundary=16,U.storage=D.byteLength):ne("WebGLRenderer: Unsupported uniform value type.",D),U}function L(D){const U=D.target;U.removeEventListener("dispose",L);const N=f.indexOf(U.__bindingPointIndex);f.splice(N,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function z(){for(const D in l)s.deleteBuffer(l[D]);f=[],l={},c={}}return{bind:m,update:p,dispose:z}}const jR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ki=null;function $R(){return Ki===null&&(Ki=new B1(jR,16,16,Kr,na),Ki.name="DFG_LUT",Ki.minFilter=Bn,Ki.magFilter=Bn,Ki.wrapS=wa,Ki.wrapT=wa,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}class tC{constructor(t={}){const{canvas:i=QE(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:M=mi}=t;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=f;const R=M,S=new Set([tm,$p,jp]),x=new Set([mi,ea,xl,Sl,Qp,Jp]),L=new Uint32Array(4),z=new Int32Array(4),D=new J;let U=null,N=null;const I=[],T=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let Y=!1,K=null,et=null,W=null,Q=null;this._outputColorSpace=di;let B=0,H=0,lt=null,at=-1,dt=null;const w=new nn,G=new nn;let rt=null;const pt=new Te(0);let Tt=0,Lt=i.width,tt=i.height,mt=1,At=null,jt=null;const Ft=new nn(0,0,Lt,tt),ae=new nn(0,0,Lt,tt);let an=!1;const re=new om;let xe=!1,Oe=!1;const ge=new je,We=new J,rn=new nn,Tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function sn(){return lt===null?mt:1}let Z=a;function Pe(A,k){return i.getContext(A,k)}let Le,P,E,$,ct,gt,Rt,Ut,_t,vt,Ct,kt,Pt,Nt,Jt,$t,ie,q,wt,yt,Dt,Ht,bt;try{const A={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Zp}`),i.addEventListener("webglcontextlost",He,!1),i.addEventListener("webglcontextrestored",Re,!1),i.addEventListener("webglcontextcreationerror",qn,!1),Z===null){const k="webgl2";if(Z=Pe(k,A),Z===null)throw Pe(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(A){throw i.removeEventListener("webglcontextlost",He,!1),i.removeEventListener("webglcontextrestored",Re,!1),i.removeEventListener("webglcontextcreationerror",qn,!1),Ae("WebGLRenderer: "+A.message),A}function Qt(){Le=new $3(Z),Le.init(),Dt=new XR(Z,Le),P=new k3(Z,Le,t,Dt),E=new VR(Z,Le),P.reversedDepthBuffer&&_&&E.buffers.depth.setReversed(!0),et=Z.createFramebuffer(),W=Z.createFramebuffer(),Q=Z.createFramebuffer(),$=new nA(Z),ct=new CR,gt=new kR(Z,Le,E,ct,P,Dt,$),Rt=new j3(V),Ut=new ab(Z),Ht=new G3(Z,Ut),_t=new tA(Z,Ut,$,Ht),vt=new aA(Z,_t,Ut,Ht,$),q=new iA(Z,P,gt),Jt=new X3(ct),Ct=new RR(V,Rt,Le,P,Ht,Jt),kt=new QR(V,ct),Pt=new DR,Nt=new IR(Le),ie=new H3(V,Rt,E,vt,b,m),$t=new GR(V,vt,P),bt=new JR(Z,$,P,E),wt=new V3(Z,Le,$),yt=new eA(Z,Le,$),$.programs=Ct.programs,V.capabilities=P,V.extensions=Le,V.properties=ct,V.renderLists=Pt,V.shadowMap=$t,V.state=E,V.info=$}R!==mi&&(O=new sA(R,i.width,i.height,h,l,c));const qt=new ZR(V,Z);this.xr=qt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const A=Le.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Le.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(A){A!==void 0&&(mt=A,this.setSize(Lt,tt,!1))},this.getSize=function(A){return A.set(Lt,tt)},this.setSize=function(A,k,ft=!0){if(qt.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Lt=A,tt=k,i.width=Math.floor(A*mt),i.height=Math.floor(k*mt),ft===!0&&(i.style.width=A+"px",i.style.height=k+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(Lt*mt,tt*mt).floor()},this.setDrawingBufferSize=function(A,k,ft){Lt=A,tt=k,mt=ft,i.width=Math.floor(A*ft),i.height=Math.floor(k*ft),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(R===mi){Ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(Ft)},this.setViewport=function(A,k,ft,nt){A.isVector4?Ft.set(A.x,A.y,A.z,A.w):Ft.set(A,k,ft,nt),E.viewport(w.copy(Ft).multiplyScalar(mt).round())},this.getScissor=function(A){return A.copy(ae)},this.setScissor=function(A,k,ft,nt){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,k,ft,nt),E.scissor(G.copy(ae).multiplyScalar(mt).round())},this.getScissorTest=function(){return an},this.setScissorTest=function(A){E.setScissorTest(an=A)},this.setOpaqueSort=function(A){At=A},this.setTransparentSort=function(A){jt=A},this.getClearColor=function(A){return A.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,ft=!0){let nt=0;if(A){let it=!1;if(lt!==null){const It=lt.texture.format;it=S.has(It)}if(it){const It=lt.texture.type,Xt=x.has(It),Ot=ie.getClearColor(),Gt=ie.getClearAlpha(),Vt=Ot.r,ce=Ot.g,me=Ot.b;Xt?(L[0]=Vt,L[1]=ce,L[2]=me,L[3]=Gt,Z.clearBufferuiv(Z.COLOR,0,L)):(z[0]=Vt,z[1]=ce,z[2]=me,z[3]=Gt,Z.clearBufferiv(Z.COLOR,0,z))}else nt|=Z.COLOR_BUFFER_BIT}k&&(nt|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ft&&(nt|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&Z.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),K=A},this.dispose=function(){i.removeEventListener("webglcontextlost",He,!1),i.removeEventListener("webglcontextrestored",Re,!1),i.removeEventListener("webglcontextcreationerror",qn,!1),ie.dispose(),Pt.dispose(),Nt.dispose(),ct.dispose(),Rt.dispose(),vt.dispose(),Ht.dispose(),bt.dispose(),Ct.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",hn),qt.removeEventListener("sessionend",Cn),Yn.stop()};function He(A){A.preventDefault(),Cu("WebGLRenderer: Context Lost."),Y=!0}function Re(){Cu("WebGLRenderer: Context Restored."),Y=!1;const A=$.autoReset,k=$t.enabled,ft=$t.autoUpdate,nt=$t.needsUpdate,it=$t.type;Qt(),$.autoReset=A,$t.enabled=k,$t.autoUpdate=ft,$t.needsUpdate=nt,$t.type=it}function qn(A){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ei(A){const k=A.target;k.removeEventListener("dispose",ei),ro(k)}function ro(A){so(A),ct.remove(A)}function so(A){const k=ct.get(A).programs;k!==void 0&&(k.forEach(function(ft){Ct.releaseProgram(ft)}),A.isShaderMaterial&&Ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,ft,nt,it,It){k===null&&(k=Tn);const Xt=it.isMesh&&it.matrixWorld.determinantAffine()<0,Ot=za(A,k,ft,nt,it);E.setMaterial(nt,Xt);let Gt=ft.index,Vt=1;if(nt.wireframe===!0){if(Gt=_t.getWireframeAttribute(ft),Gt===void 0)return;Vt=2}const ce=ft.drawRange,me=ft.attributes.position;let Yt=ce.start*Vt,Ce=(ce.start+ce.count)*Vt;It!==null&&(Yt=Math.max(Yt,It.start*Vt),Ce=Math.min(Ce,(It.start+It.count)*Vt)),Gt!==null?(Yt=Math.max(Yt,0),Ce=Math.min(Ce,Gt.count)):me!=null&&(Yt=Math.max(Yt,0),Ce=Math.min(Ce,me.count));const Ke=Ce-Yt;if(Ke<0||Ke===1/0)return;Ht.setup(it,nt,Ot,ft,Gt);let Ye,de=wt;if(Gt!==null&&(Ye=Ut.get(Gt),de=yt,de.setIndex(Ye)),it.isMesh)nt.wireframe===!0?(E.setLineWidth(nt.wireframeLinewidth*sn()),de.setMode(Z.LINES)):de.setMode(Z.TRIANGLES);else if(it.isLine){let mn=nt.linewidth;mn===void 0&&(mn=1),E.setLineWidth(mn*sn()),it.isLineSegments?de.setMode(Z.LINES):it.isLineLoop?de.setMode(Z.LINE_LOOP):de.setMode(Z.LINE_STRIP)}else it.isPoints?de.setMode(Z.POINTS):it.isSprite&&de.setMode(Z.TRIANGLES);if(it.isBatchedMesh)if(Le.get("WEBGL_multi_draw"))de.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const mn=it._multiDrawStarts,Wt=it._multiDrawCounts,yn=it._multiDrawCount,he=Gt?Ut.get(Gt).bytesPerElement:1,Gn=ct.get(nt).currentProgram.getUniforms();for(let ni=0;ni<yn;ni++)Gn.setValue(Z,"_gl_DrawID",ni),de.render(mn[ni]/he,Wt[ni])}else if(it.isInstancedMesh)de.renderInstances(Yt,Ke,it.count);else if(ft.isInstancedBufferGeometry){const mn=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Wt=Math.min(ft.instanceCount,mn);de.renderInstances(Yt,Ke,Wt)}else de.render(Yt,Ke)};function oo(A,k,ft,nt){K!==null&&A.isNodeMaterial&&K.setObject(nt,A),xe===!0&&Jt.setState(A,ft,!1),A.transparent===!0&&A.side===Bi&&A.forceSinglePass===!1?(A.side=ti,A.needsUpdate=!0,Ba(A,k,nt),A.side=Yr,A.needsUpdate=!0,Ba(A,k,nt),A.side=Bi):Ba(A,k,nt)}this.compile=function(A,k,ft=null){ft===null&&(ft=A),K!==null&&K.renderStart(A,k,ft),N=Nt.get(ft),N.init(k),T.push(N),ft.traverseVisible(function(it){it.isLight&&it.layers.test(k.layers)&&(N.pushLight(it),it.castShadow&&N.pushShadow(it))}),A!==ft&&A.traverseVisible(function(it){it.isLight&&it.layers.test(k.layers)&&(N.pushLight(it),it.castShadow&&N.pushShadow(it))}),N.setupLights(),K!==null&&K.updateLights(N.state.lightsArray),Oe=this.localClippingEnabled,xe=Jt.init(this.clippingPlanes,Oe),xe===!0&&Jt.setGlobalState(this.clippingPlanes,k),K!==null&&$t.render(N.state.shadowsArray,ft,k);const nt=new Set;return A.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const It=it.material;if(It)if(Array.isArray(It))for(let Xt=0;Xt<It.length;Xt++){const Ot=It[Xt];oo(Ot,ft,k,it),nt.add(Ot)}else oo(It,ft,k,it),nt.add(It)}),N=T.pop(),K!==null&&K.renderEnd(),nt},this.compileAsync=function(A,k,ft=null){const nt=this.compile(A,k,ft);return new Promise(it=>{function It(){if(nt.forEach(function(Xt){const Gt=ct.get(Xt).currentProgram;(Gt===void 0||Gt.isReady())&&nt.delete(Xt)}),nt.size===0){it(A);return}setTimeout(It,10)}Le.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let $r=null;function Vi(A){$r&&$r(A)}function hn(){Yn.stop()}function Cn(){Yn.start()}const Yn=new hS;Yn.setAnimationLoop(Vi),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(A){$r=A,qt.setAnimationLoop(A),A===null?Yn.stop():Yn.start()},qt.addEventListener("sessionstart",hn),qt.addEventListener("sessionend",Cn),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;K!==null&&K.renderStart(A,k);const ft=qt.enabled===!0&&qt.isPresenting===!0,nt=O!==null&&(lt===null||ft)&&O.begin(V,lt);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(k),k=qt.getCamera()),A.isScene===!0&&A.onBeforeRender(V,A,k,lt),N=Nt.get(A,T.length),N.init(k),N.state.textureUnits=gt.getTextureUnits(),T.push(N),ge.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),re.setFromProjectionMatrix(ge,ji,k.reversedDepth),Oe=this.localClippingEnabled,xe=Jt.init(this.clippingPlanes,Oe),U=Pt.get(A,I.length),U.init(),I.push(U),qt.enabled===!0&&qt.isPresenting===!0){const Xt=V.xr.getDepthSensingMesh();Xt!==null&&xr(Xt,k,-1/0,V.sortObjects)}xr(A,k,0,V.sortObjects),U.finish(),K!==null&&K.updateLights(N.state.lightsArray),V.sortObjects===!0&&U.sort(At,jt),qe=qt.enabled===!1||qt.isPresenting===!1||qt.hasDepthSensing()===!1,qe&&ie.addToRenderList(U,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&Jt.beginShadows();const it=N.state.shadowsArray;if($t.render(it,A,k),xe===!0&&Jt.endShadows(),(nt&&O.hasRenderPass())===!1){const Xt=U.opaque,Ot=U.transmissive;if(N.setupLights(),k.isArrayCamera){const Gt=k.cameras;if(Ot.length>0)for(let Vt=0,ce=Gt.length;Vt<ce;Vt++){const me=Gt[Vt];wl(Xt,Ot,A,me)}qe&&ie.render(A);for(let Vt=0,ce=Gt.length;Vt<ce;Vt++){const me=Gt[Vt];Cl(U,A,me,me.viewport)}}else Ot.length>0&&wl(Xt,Ot,A,k),qe&&ie.render(A),Cl(U,A,k)}lt!==null&&H===0&&(gt.updateMultisampleRenderTarget(lt),gt.updateRenderTargetMipmap(lt)),nt&&O.end(V),A.isScene===!0&&A.onAfterRender(V,A,k),Ht.resetDefaultState(),at=-1,dt=null,T.pop(),T.length>0?(N=T[T.length-1],gt.setTextureUnits(N.state.textureUnits),xe===!0&&Jt.setGlobalState(V.clippingPlanes,N.state.camera)):N=null,I.pop(),I.length>0?U=I[I.length-1]:U=null,K!==null&&K.renderEnd()};function xr(A,k,ft,nt){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)ft=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(re)){nt&&rn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ge);const Xt=vt.update(A),Ot=A.material;Ot.visible&&U.push(A,Xt,Ot,ft,rn.z,null,k)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(re))){const Xt=vt.update(A),Ot=A.material;if(nt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),rn.copy(A.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),rn.copy(Xt.boundingSphere.center)),rn.applyMatrix4(A.matrixWorld).applyMatrix4(ge)),Array.isArray(Ot)){const Gt=Xt.groups;for(let Vt=0,ce=Gt.length;Vt<ce;Vt++){const me=Gt[Vt],Yt=Ot[me.materialIndex];Yt&&Yt.visible&&U.push(A,Xt,Yt,ft,rn.z,me,k)}}else Ot.visible&&U.push(A,Xt,Ot,ft,rn.z,null,k)}}const It=A.children;for(let Xt=0,Ot=It.length;Xt<Ot;Xt++)xr(It[Xt],k,ft,nt)}function Cl(A,k,ft,nt){const{opaque:it,transmissive:It,transparent:Xt}=A;N.setupLightsView(ft),xe===!0&&Jt.setGlobalState(V.clippingPlanes,ft),nt&&E.viewport(w.copy(nt)),it.length>0&&Sr(it,k,ft),It.length>0&&Sr(It,k,ft),Xt.length>0&&Sr(Xt,k,ft),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function wl(A,k,ft,nt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[nt.id]===void 0){const Yt=Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[nt.id]=new Gi(1,1,{generateMipmaps:!0,type:Yt?na:mi,minFilter:kr,samples:Math.max(4,P.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:be.workingColorSpace})}const It=N.state.transmissionRenderTarget[nt.id],Xt=nt.viewport||w;It.setSize(Xt.z*V.transmissionResolutionScale,Xt.w*V.transmissionResolutionScale);const Ot=V.getRenderTarget(),Gt=V.getActiveCubeFace(),Vt=V.getActiveMipmapLevel();V.setRenderTarget(It),V.getClearColor(pt),Tt=V.getClearAlpha(),Tt<1&&V.setClearColor(16777215,.5),V.clear(),qe&&ie.render(ft);const ce=V.toneMapping;V.toneMapping=$i;const me=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),N.setupLightsView(nt),xe===!0&&Jt.setGlobalState(V.clippingPlanes,nt),Sr(A,ft,nt),gt.updateMultisampleRenderTarget(It),gt.updateRenderTargetMipmap(It),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Ce=0,Ke=k.length;Ce<Ke;Ce++){const Ye=k[Ce],{object:de,geometry:mn,material:Wt,group:yn}=Ye;if(Wt.side===Bi&&de.layers.test(nt.layers)){const he=Wt.side;Wt.side=ti,Wt.needsUpdate=!0,Ia(de,ft,nt,mn,Wt,yn),Wt.side=he,Wt.needsUpdate=!0,Yt=!0}}Yt===!0&&(gt.updateMultisampleRenderTarget(It),gt.updateRenderTargetMipmap(It))}V.setRenderTarget(Ot,Gt,Vt),V.setClearColor(pt,Tt),me!==void 0&&(nt.viewport=me),V.toneMapping=ce}function Sr(A,k,ft){const nt=k.isScene===!0?k.overrideMaterial:null;for(let it=0,It=A.length;it<It;it++){const Xt=A[it],{object:Ot,geometry:Gt,group:Vt}=Xt;let ce=Xt.material;ce.allowOverride===!0&&nt!==null&&(ce=nt),Ot.layers.test(ft.layers)&&Ia(Ot,k,ft,Gt,ce,Vt)}}function Ia(A,k,ft,nt,it,It){K!==null&&it.isNodeMaterial&&K.setObject(A,it),A.onBeforeRender(V,k,ft,nt,it,It),A.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),it.onBeforeRender(V,k,ft,nt,A,It),it.transparent===!0&&it.side===Bi&&it.forceSinglePass===!1?(it.side=ti,it.needsUpdate=!0,V.renderBufferDirect(ft,k,nt,it,A,It),it.side=Yr,it.needsUpdate=!0,V.renderBufferDirect(ft,k,nt,it,A,It),it.side=Bi):V.renderBufferDirect(ft,k,nt,it,A,It),A.onAfterRender(V,k,ft,nt,it,It)}function Ba(A,k,ft){k.isScene!==!0&&(k=Tn);const nt=ct.get(A),it=N.state.lights,It=N.state.shadowsArray,Xt=it.state.version,Ot=Ct.getParameters(A,it.state,It,k,ft,N.state.lightProbeGridArray),Gt=Ct.getProgramCacheKey(Ot);let Vt=nt.programs;nt.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,nt.fog=k.fog;const ce=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;nt.envMap=Rt.get(A.envMap||nt.environment,ce),nt.envMapRotation=nt.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Vt===void 0&&(A.addEventListener("dispose",ei),Vt=new Map,nt.programs=Vt);let me=Vt.get(Gt);if(me!==void 0){if(nt.currentProgram===me&&nt.lightsStateVersion===Xt)return oa(A,Ot),me}else Ot.uniforms=Ct.getUniforms(A),K!==null&&A.isNodeMaterial&&K.build(A,ft,Ot),A.onBeforeCompile(Ot,V),me=Ct.acquireProgram(Ot,Gt),Vt.set(Gt,me),nt.uniforms=Ot.uniforms;const Yt=nt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Yt.clippingPlanes=Jt.uniform),oa(A,Ot),nt.needsLights=Dl(A),nt.lightsStateVersion=Xt,nt.needsLights&&(Yt.ambientLightColor.value=it.state.ambient,Yt.lightProbe.value=it.state.probe,Yt.sunLights.value=it.state.sun,Yt.sunLightShadows.value=it.state.sunShadow,Yt.directionalLights.value=it.state.directional,Yt.directionalLightShadows.value=it.state.directionalShadow,Yt.spotLights.value=it.state.spot,Yt.spotLightShadows.value=it.state.spotShadow,Yt.rectAreaLights.value=it.state.rectArea,Yt.ltc_1.value=it.state.rectAreaLTC1,Yt.ltc_2.value=it.state.rectAreaLTC2,Yt.pointLights.value=it.state.point,Yt.pointLightShadows.value=it.state.pointShadow,Yt.hemisphereLights.value=it.state.hemi,Yt.sunShadowMatrix.value=it.state.sunShadowMatrix,Yt.sunShadowCascade.value=it.state.sunShadowCascade,Yt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Yt.spotLightMatrix.value=it.state.spotLightMatrix,Yt.spotLightMap.value=it.state.spotLightMap,Yt.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.lightProbeGrid=N.state.lightProbeGridArray.length>0,nt.currentProgram=me,nt.uniformsList=null,me}function sa(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=yu.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function oa(A,k){const ft=ct.get(A);ft.outputColorSpace=k.outputColorSpace,ft.batching=k.batching,ft.batchingColor=k.batchingColor,ft.instancing=k.instancing,ft.instancingColor=k.instancingColor,ft.instancingMorph=k.instancingMorph,ft.skinning=k.skinning,ft.morphTargets=k.morphTargets,ft.morphNormals=k.morphNormals,ft.morphColors=k.morphColors,ft.morphTargetsCount=k.morphTargetsCount,ft.numClippingPlanes=k.numClippingPlanes,ft.numIntersection=k.numClipIntersection,ft.vertexAlphas=k.vertexAlphas,ft.vertexTangents=k.vertexTangents,ft.toneMapping=k.toneMapping}function yr(A,k){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;D.setFromMatrixPosition(k.matrixWorld);for(let ft=0,nt=A.length;ft<nt;ft++){const it=A[ft];if(it.texture!==null&&it.boundingBox.containsPoint(D))return it}return null}function za(A,k,ft,nt,it){k.isScene!==!0&&(k=Tn),gt.resetTextureUnits();const It=k.fog,Xt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?k.environment:null,Ot=lt===null?V.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:be.workingColorSpace,Gt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Vt=Rt.get(nt.envMap||Xt,Gt),ce=nt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,me=!!ft.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Yt=!!ft.morphAttributes.position,Ce=!!ft.morphAttributes.normal,Ke=!!ft.morphAttributes.color;let Ye=$i;nt.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ye=V.toneMapping);const de=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,mn=de!==void 0?de.length:0,Wt=ct.get(nt),yn=N.state.lights;if(xe===!0&&(Oe===!0||A!==dt)){const Ge=A===dt&&nt.id===at;Jt.setState(nt,A,Ge)}let he=!1;nt.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==yn.state.version||Wt.outputColorSpace!==Ot||it.isBatchedMesh&&Wt.batching===!1||!it.isBatchedMesh&&Wt.batching===!0||it.isBatchedMesh&&Wt.batchingColor===!0&&it._colorsTexture===null||it.isBatchedMesh&&Wt.batchingColor===!1&&it._colorsTexture!==null||it.isInstancedMesh&&Wt.instancing===!1||!it.isInstancedMesh&&Wt.instancing===!0||it.isSkinnedMesh&&Wt.skinning===!1||!it.isSkinnedMesh&&Wt.skinning===!0||it.isInstancedMesh&&Wt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Wt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Wt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Wt.instancingMorph===!1&&it.morphTexture!==null||Wt.envMap!==Vt||nt.fog===!0&&Wt.fog!==It||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Jt.numPlanes||Wt.numIntersection!==Jt.numIntersection)||Wt.vertexAlphas!==ce||Wt.vertexTangents!==me||Wt.morphTargets!==Yt||Wt.morphNormals!==Ce||Wt.morphColors!==Ke||Wt.toneMapping!==Ye||Wt.morphTargetsCount!==mn||!!Wt.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,Wt.__version=nt.version);let Gn=Wt.currentProgram;he===!0&&(Gn=Ba(nt,k,it),K&&nt.isNodeMaterial&&K.onUpdateProgram(nt,Gn,Wt));let ni=!1,Vn=!1,Fa=!1;const Ue=Gn.getUniforms(),$e=Wt.uniforms;if(E.useProgram(Gn.program)&&(ni=!0,Vn=!0,Fa=!0),nt.id!==at&&(at=nt.id,Vn=!0),Wt.needsLights){const Ge=yr(N.state.lightProbeGridArray,it);Wt.lightProbeGrid!==Ge&&(Wt.lightProbeGrid=Ge,Vn=!0)}if(ni||dt!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ue.setValue(Z,"projectionMatrix",A.projectionMatrix),Ue.setValue(Z,"viewMatrix",A.matrixWorldInverse);const ki=Ue.map.cameraPosition;ki!==void 0&&ki.setValue(Z,We.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&Ue.setValue(Z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ue.setValue(Z,"isOrthographic",A.isOrthographicCamera===!0),dt!==A&&(dt=A,Vn=!0,Fa=!0)}if(Wt.needsLights&&(yn.state.sunShadowMap.length>0&&Ue.setValue(Z,"sunShadowMap",yn.state.sunShadowMap,gt),yn.state.directionalShadowMap.length>0&&Ue.setValue(Z,"directionalShadowMap",yn.state.directionalShadowMap,gt),yn.state.spotShadowMap.length>0&&Ue.setValue(Z,"spotShadowMap",yn.state.spotShadowMap,gt),yn.state.pointShadowMap.length>0&&Ue.setValue(Z,"pointShadowMap",yn.state.pointShadowMap,gt)),it.isSkinnedMesh){Ue.setOptional(Z,it,"bindMatrix"),Ue.setOptional(Z,it,"bindMatrixInverse");const Ge=it.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),Ue.setValue(Z,"boneTexture",Ge.boneTexture,gt))}it.isBatchedMesh&&(Ue.setOptional(Z,it,"batchingTexture"),Ue.setValue(Z,"batchingTexture",it._matricesTexture,gt),Ue.setOptional(Z,it,"batchingIdTexture"),Ue.setValue(Z,"batchingIdTexture",it._indirectTexture,gt),Ue.setOptional(Z,it,"batchingColorTexture"),it._colorsTexture!==null&&Ue.setValue(Z,"batchingColorTexture",it._colorsTexture,gt));const _i=ft.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&q.update(it,ft,Gn),(Vn||Wt.receiveShadow!==it.receiveShadow)&&(Wt.receiveShadow=it.receiveShadow,Ue.setValue(Z,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&k.environment!==null&&($e.envMapIntensity.value=k.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=$R()),Vn){if(Ue.setValue(Z,"toneMappingExposure",V.toneMappingExposure),Wt.needsLights&&pn($e,Fa),It&&nt.fog===!0&&kt.refreshFogUniforms($e,It),kt.refreshMaterialUniforms($e,nt,mt,tt,N.state.transmissionRenderTarget[A.id]),Wt.needsLights&&Wt.lightProbeGrid){const Ge=Wt.lightProbeGrid;$e.probesSH.value=Ge.texture,$e.probesMin.value.copy(Ge.boundingBox.min),$e.probesMax.value.copy(Ge.boundingBox.max),$e.probesResolution.value.copy(Ge.resolution)}yu.upload(Z,sa(Wt),$e,gt)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(yu.upload(Z,sa(Wt),$e,gt),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ue.setValue(Z,"center",it.center),Ue.setValue(Z,"modelViewMatrix",it.modelViewMatrix),Ue.setValue(Z,"normalMatrix",it.normalMatrix),Ue.setValue(Z,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){const Ge=nt.uniformsGroups;for(let ki=0,Di=Ge.length;ki<Di;ki++){const vi=Ge[ki];bt.update(vi,Gn),bt.bind(vi,Gn)}}return Gn}function pn(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Dl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return lt},this.setRenderTargetTextures=function(A,k,ft){const nt=ct.get(A);nt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),ct.get(A.texture).__webglTexture=k,ct.get(A.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:ft,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const ft=ct.get(A);ft.__webglFramebuffer=k,ft.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,ft=0){lt=A,B=k,H=ft;let nt=null,it=!1,It=!1;if(A){const Ot=ct.get(A);if(Ot.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Z.FRAMEBUFFER,Ot.__webglFramebuffer),w.copy(A.viewport),G.copy(A.scissor),rt=A.scissorTest,E.viewport(w),E.scissor(G),E.setScissorTest(rt),at=-1;return}else if(Ot.__webglFramebuffer===void 0)gt.setupRenderTarget(A);else if(Ot.__hasExternalTextures)gt.rebindTextures(A,ct.get(A.texture).__webglTexture,ct.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ce=A.depthTexture;if(Ot.__boundDepthTexture!==ce){if(ce!==null&&ct.has(ce)&&(A.width!==ce.image.width||A.height!==ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(A)}}const Gt=A.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(It=!0);const Vt=ct.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Vt[k])?nt=Vt[k][ft]:nt=Vt[k],it=!0):A.samples>0&&gt.useMultisampledRTT(A)===!1?nt=ct.get(A).__webglMultisampledFramebuffer:Array.isArray(Vt)?nt=Vt[ft]:nt=Vt,w.copy(A.viewport),G.copy(A.scissor),rt=A.scissorTest}else w.copy(Ft).multiplyScalar(mt).floor(),G.copy(ae).multiplyScalar(mt).floor(),rt=an;if(ft!==0&&(nt=et),E.bindFramebuffer(Z.FRAMEBUFFER,nt)&&E.drawBuffers(A,nt),E.viewport(w),E.scissor(G),E.setScissorTest(rt),it){const Ot=ct.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ot.__webglTexture,ft)}else if(It){const Ot=k;for(let Gt=0;Gt<A.textures.length;Gt++){const Vt=ct.get(A.textures[Gt]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Gt,Vt.__webglTexture,ft,Ot)}}else if(A!==null&&ft!==0){const Ot=ct.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ot.__webglTexture,ft)}at=-1};function lo(A){const k=ct.get(A);return(k.__readFormat!==A.format||k.__readType!==A.type)&&(k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=P.textureFormatReadable(A.format),k.__typeReadable=P.textureTypeReadable(A.type)),k}this.readRenderTargetPixels=function(A,k,ft,nt,it,It,Xt,Ot=0){if(!(A&&A.isWebGLRenderTarget)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xt!==void 0&&(Gt=Gt[Xt]),Gt){E.bindFramebuffer(Z.FRAMEBUFFER,Gt);try{const Vt=A.textures[Ot],ce=Vt.format,me=Vt.type;A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Ot);const Yt=lo(Vt);if(Yt.__formatReadable===!1){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Yt.__typeReadable===!1){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-nt&&ft>=0&&ft<=A.height-it&&Z.readPixels(k,ft,nt,it,Dt.convert(ce),Dt.convert(me),It)}finally{const Vt=lt!==null?ct.get(lt).__webglFramebuffer:null;E.bindFramebuffer(Z.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(A,k,ft,nt,it,It,Xt,Ot=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xt!==void 0&&(Gt=Gt[Xt]),Gt)if(k>=0&&k<=A.width-nt&&ft>=0&&ft<=A.height-it){E.bindFramebuffer(Z.FRAMEBUFFER,Gt);const Vt=A.textures[Ot],ce=Vt.format,me=Vt.type;A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Ot);const Yt=lo(Vt);if(Yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ce),Z.bufferData(Z.PIXEL_PACK_BUFFER,It.byteLength,Z.STREAM_READ),Z.readPixels(k,ft,nt,it,Dt.convert(ce),Dt.convert(me),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);const Ke=lt!==null?ct.get(lt).__webglFramebuffer:null;E.bindFramebuffer(Z.FRAMEBUFFER,Ke);const Ye=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await JE(Z,Ye,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ce),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,It),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(Ce),Z.deleteSync(Ye),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,ft=0){const nt=Math.pow(2,-ft),it=Math.floor(A.image.width*nt),It=Math.floor(A.image.height*nt),Xt=k!==null?k.x:0,Ot=k!==null?k.y:0;gt.setTexture2D(A,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ft,0,0,Xt,Ot,it,It),E.unbindTexture()},this.copyTextureToTexture=function(A,k,ft=null,nt=null,it=0,It=0){let Xt,Ot,Gt,Vt,ce,me,Yt,Ce,Ke;const Ye=A.isCompressedTexture?A.mipmaps[It]:A.image;if(ft!==null)Xt=ft.max.x-ft.min.x,Ot=ft.max.y-ft.min.y,Gt=ft.isBox3?ft.max.z-ft.min.z:1,Vt=ft.min.x,ce=ft.min.y,me=ft.isBox3?ft.min.z:0;else{const $e=Math.pow(2,-it);Xt=Math.floor(Ye.width*$e),Ot=Math.floor(Ye.height*$e),A.isDataArrayTexture?Gt=Ye.depth:A.isData3DTexture?Gt=Math.floor(Ye.depth*$e):Gt=1,Vt=0,ce=0,me=0}nt!==null?(Yt=nt.x,Ce=nt.y,Ke=nt.z):(Yt=0,Ce=0,Ke=0);const de=Dt.convert(k.format),mn=Dt.convert(k.type);let Wt;k.isData3DTexture?(gt.setTexture3D(k,0),Wt=Z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(gt.setTexture2DArray(k,0),Wt=Z.TEXTURE_2D_ARRAY):(gt.setTexture2D(k,0),Wt=Z.TEXTURE_2D),E.activeTexture(Z.TEXTURE0),E.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,k.flipY),E.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),E.pixelStorei(Z.UNPACK_ALIGNMENT,k.unpackAlignment);const yn=E.getParameter(Z.UNPACK_ROW_LENGTH),he=E.getParameter(Z.UNPACK_IMAGE_HEIGHT),Gn=E.getParameter(Z.UNPACK_SKIP_PIXELS),ni=E.getParameter(Z.UNPACK_SKIP_ROWS),Vn=E.getParameter(Z.UNPACK_SKIP_IMAGES);E.pixelStorei(Z.UNPACK_ROW_LENGTH,Ye.width),E.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Ye.height),E.pixelStorei(Z.UNPACK_SKIP_PIXELS,Vt),E.pixelStorei(Z.UNPACK_SKIP_ROWS,ce),E.pixelStorei(Z.UNPACK_SKIP_IMAGES,me);const Fa=A.isDataArrayTexture||A.isData3DTexture,Ue=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const $e=ct.get(A),_i=ct.get(k),Ge=ct.get($e.__renderTarget),ki=ct.get(_i.__renderTarget);E.bindFramebuffer(Z.READ_FRAMEBUFFER,Ge.__webglFramebuffer),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Di=0;Di<Gt;Di++)Fa&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ct.get(A).__webglTexture,it,me+Di),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ct.get(k).__webglTexture,It,Ke+Di)),Z.blitFramebuffer(Vt,ce,Xt,Ot,Yt,Ce,Xt,Ot,Z.DEPTH_BUFFER_BIT,Z.NEAREST);E.bindFramebuffer(Z.READ_FRAMEBUFFER,null),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(it!==0||A.isRenderTargetTexture||ct.has(A)){const $e=ct.get(A),_i=ct.get(k);E.bindFramebuffer(Z.READ_FRAMEBUFFER,W),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Q);for(let Ge=0;Ge<Gt;Ge++)Fa?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,$e.__webglTexture,it,me+Ge):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,$e.__webglTexture,it),Ue?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,_i.__webglTexture,It,Ke+Ge):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,_i.__webglTexture,It),it!==0?Z.blitFramebuffer(Vt,ce,Xt,Ot,Yt,Ce,Xt,Ot,Z.COLOR_BUFFER_BIT,Z.NEAREST):Ue?Z.copyTexSubImage3D(Wt,It,Yt,Ce,Ke+Ge,Vt,ce,Xt,Ot):Z.copyTexSubImage2D(Wt,It,Yt,Ce,Vt,ce,Xt,Ot);E.bindFramebuffer(Z.READ_FRAMEBUFFER,null),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Ue?A.isDataTexture||A.isData3DTexture?Z.texSubImage3D(Wt,It,Yt,Ce,Ke,Xt,Ot,Gt,de,mn,Ye.data):k.isCompressedArrayTexture?Z.compressedTexSubImage3D(Wt,It,Yt,Ce,Ke,Xt,Ot,Gt,de,Ye.data):Z.texSubImage3D(Wt,It,Yt,Ce,Ke,Xt,Ot,Gt,de,mn,Ye):A.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,It,Yt,Ce,Xt,Ot,de,mn,Ye.data):A.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,It,Yt,Ce,Ye.width,Ye.height,de,Ye.data):Z.texSubImage2D(Z.TEXTURE_2D,It,Yt,Ce,Xt,Ot,de,mn,Ye);E.pixelStorei(Z.UNPACK_ROW_LENGTH,yn),E.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,he),E.pixelStorei(Z.UNPACK_SKIP_PIXELS,Gn),E.pixelStorei(Z.UNPACK_SKIP_ROWS,ni),E.pixelStorei(Z.UNPACK_SKIP_IMAGES,Vn),It===0&&k.generateMipmaps&&Z.generateMipmap(Wt),E.unbindTexture()},this.initRenderTarget=function(A){ct.get(A).__webglFramebuffer===void 0&&gt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?gt.setTextureCube(A,0):A.isData3DTexture?gt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?gt.setTexture2DArray(A,0):gt.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){B=0,H=0,lt=null,E.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),i.unpackColorSpace=be._getUnpackColorSpace()}}const Da=Math.PI*2,ul=5.6;function hx(s){const t=document.createElement("canvas");t.width=t.height=1;const i=t.getContext("2d",{willReadFrequently:!0});return i.fillStyle=s,i.fillRect(0,0,1,1),i.getImageData(0,0,1,1).data}function Rl(s){const t=new G1(s);return t.colorSpace=di,t.anisotropy=4,t}function yS({base:s,bands:t=[],spots:i=[]}){const c=document.createElement("canvas");c.width=1024,c.height=512;const f=c.getContext("2d");f.fillStyle=s,f.fillRect(0,0,1024,512);for(const[h,m,p]of t){const[g,v,_,M]=hx(p),b=f.createLinearGradient(0,h*512,0,m*512);b.addColorStop(0,`rgba(${g},${v},${_},0)`),b.addColorStop(.5,`rgba(${g},${v},${_},${M/255})`),b.addColorStop(1,`rgba(${g},${v},${_},0)`),f.fillStyle=b,f.fillRect(0,h*512,1024,(m-h)*512)}for(const[h,m,p,g,v]of i){const[_,M,b,R]=hx(v);for(const S of[-1024,0,1024]){f.save(),f.translate(h*1024+S,m*512),f.scale(p*1024,g*512);const x=f.createRadialGradient(0,0,0,0,0,1);x.addColorStop(0,`rgba(${_},${M},${b},${R/255})`),x.addColorStop(.55,`rgba(${_},${M},${b},${R/255})`),x.addColorStop(1,`rgba(${_},${M},${b},0)`),f.fillStyle=x,f.beginPath(),f.arc(0,0,1,0,Da),f.fill(),f.restore()}}for(let h=0;h<2500;h++)f.fillStyle=Math.random()<.5?"rgba(0,0,0,.07)":"rgba(255,255,255,.06)",f.fillRect(Math.random()*1024,Math.random()*512,2,2);return Rl(c)}function eC(){const s=[];for(let t=0;t<40;t++)s.push([Math.random(),Math.random(),.02+Math.random()*.05,.03+Math.random()*.06,Math.random()<.5?"rgba(255,230,120,.7)":"rgba(226,87,10,.55)"]);return yS({base:"#ff9a1f",spots:s})}function nC(){const s=document.createElement("canvas");s.width=s.height=256;const t=s.getContext("2d"),i=t.createRadialGradient(128,128,0,128,128,128);return i.addColorStop(0,"rgba(255,210,100,1)"),i.addColorStop(.2,"rgba(255,160,50,.55)"),i.addColorStop(1,"rgba(255,120,20,0)"),t.fillStyle=i,t.fillRect(0,0,256,256),Rl(s)}function iC(s){const i=document.createElement("canvas");i.width=i.height=512;const a=i.getContext("2d");a.lineWidth=1.6;for(let l=s*512/2;l<512/2;l+=1){const c=(l-s*512/2)/(256-s*512/2),f=c>.58&&c<.66?.05:1,h=(.3+.5*Math.abs(Math.sin(l*.4)))*f;a.strokeStyle=`rgba(225,205,150,${h})`,a.beginPath(),a.arc(512/2,512/2,l,0,Da),a.stroke()}return Rl(i)}function aC(s){const a=document.createElement("canvas");a.width=a.height=512;const l=a.getContext("2d"),c=f=>f<.25?"255,245,215":f<.6?"255,170,70":"210,80,25";for(let f=s*256;f<256;f+=1){const h=(f-s*256)/(256-s*256);l.strokeStyle=`rgba(${c(h)},${.5*(1-h)**1.5})`,l.lineWidth=1.5,l.beginPath(),l.arc(256,256,f,0,Da),l.stroke()}for(let f=0;f<900;f++){const h=Math.random()**1.4,m=s*256+h*(256-s*256),p=Math.random()*Da;l.strokeStyle=`rgba(${c(h)},${(.2+Math.random()*.6)*(1-h*.8)})`,l.lineWidth=1+Math.random()*2,l.beginPath(),l.arc(256,256,m,p,p+.1+Math.random()*.8),l.stroke()}return Rl(a)}function rC(){const s=document.createElement("canvas");s.width=s.height=256;const t=s.getContext("2d"),i=t.createRadialGradient(128,128,0,128,128,128);return i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(.27,"rgba(0,0,0,0)"),i.addColorStop(.3,"rgba(255,240,200,1)"),i.addColorStop(.38,"rgba(255,150,40,.65)"),i.addColorStop(.62,"rgba(255,100,20,.18)"),i.addColorStop(1,"rgba(255,100,20,0)"),t.fillStyle=i,t.fillRect(0,0,256,256),Rl(s)}function sC(){const s=new Up({color:12107980,metalness:.6,roughness:.4}),t=new Up({color:1784442,metalness:.3,roughness:.5,emissive:662080}),i=new gr({color:16771496}),a=new hi;a.add(new cn(new Xu(.08,.08,.8,16),s));const l=new hi,c=new cn(new cm(.36,.04,12,48),s);c.rotation.x=Math.PI/2,l.add(c);for(let m=0;m<4;m++){const p=new hi;p.rotation.y=m*Math.PI/2;const g=new cn(new _r(.36,.02,.02),s);g.position.x=.18,p.add(g),l.add(p)}for(let m=0;m<12;m++){const p=m/12*Da,g=new cn(new Wr(.018,8,6),i);g.position.set(Math.cos(p)*.4,0,Math.sin(p)*.4),l.add(g)}a.add(l);const f=new cn(new _r(1.5,.03,.03),s);f.position.y=.34,a.add(f);for(const m of[-1,1]){const p=new cn(new _r(.55,.015,.26),t);p.position.set(m*.95,.34,0),a.add(p)}const h=new cn(new lm(.09,.1,16),s);return h.position.y=.46,a.add(h),a.scale.setScalar(.85),a.rotation.z=.12,a.userData.wheel=l,a}function oC({container:s,planets:t,labels:i,onSelect:a}){const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=new tC({antialias:!0,alpha:!0});c.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.prepend(c.domElement);const f=new C1,h=new pi(40,1,.1,100);f.add(new $1(16777215,1)),f.add(new j1(16773590,3.2,0,0));const m=new cn(new Wr(.85,48,32),new gr({map:eC()})),p=new Dv(new Lp({map:nC(),blending:pl,transparent:!0,depthWrite:!1}));p.scale.setScalar(6.5),f.add(m,p);const g=[];function v(w,G,rt){const pt=new cn(new Wr(G,8,6),new gr({visible:!1}));pt.userData.index=rt,w.add(pt),g.push(pt)}function _(w,G){const rt=Math.max(.2,w.p*8),pt=w.o*ul,Tt=new hi;Tt.rotation.y=dh.degToRad(w.a);const Lt=new hi;Lt.position.x=pt;const tt=new hi;tt.rotation.z=w.tilt,Tt.add(Lt),Lt.add(tt);const mt=new cn(new Wr(rt,64,40),new Up({map:yS(w),roughness:1,metalness:0}));if(tt.add(mt),w.ring){const jt=rt*1.3,Ft=rt*2.4,ae=new cn(new Uu(jt,Ft,128),new gr({map:iC(jt/Ft),side:Bi,transparent:!0,depthWrite:!1}));ae.rotation.x=-Math.PI/2,tt.add(ae)}v(tt,Math.max(rt*1.7,.32),G);const At=[];for(let jt=0;jt<160;jt++)At.push(new J(Math.cos(jt/160*Da)*pt,0,Math.sin(jt/160*Da)*pt));return f.add(new H1(new Hn().setFromPoints(At),new sS({color:16777215,transparent:!0,opacity:.16}))),f.add(Tt),{p:w,pivot:Tt,holder:Lt,tilt:tt,mesh:mt,anchor:tt,dropBase:rt*(w.ring?1.35:1.1),scale:1}}function M(w,G){const pt=new hi;pt.position.set(...w.pos);const Tt=new hi;pt.add(Tt),Tt.add(new cn(new Wr(.8,48,32),new gr({color:0})));const Lt=new hi;Lt.rotation.x=-Math.PI/2+.45;const tt=new cn(new Uu(.8*1.35,.8*3.2,128),new gr({map:aC(1.35/3.2),side:Bi,transparent:!0,blending:pl,depthWrite:!1}));Lt.add(tt),Tt.add(Lt);const mt=new Dv(new Lp({map:rC(),blending:pl,transparent:!0,depthWrite:!1}));mt.scale.setScalar(.8*7.3),Tt.add(mt),v(Tt,.8*2.4,G);const At=sC();return At.position.y=.8*2.7,pt.add(At),f.add(pt),{p:w,body:Tt,disk:tt,station:At,baseY:At.position.y,anchor:pt,dropBase:1.9,scale:1}}const b=t.map((w,G)=>w.kind==="hole"?M(w,G):_(w,G));let R=1,S=1;const x=new J,L=[new J(0,-.8,ul+.4),new J(0,.5,-ul-.4),new J(-ul-.5,0,0),new J(ul+.5,0,0)];for(const w of t){if(w.kind!=="hole")continue;const[G,rt,pt]=w.pos;L.push(new J(G-2.5,rt,pt),new J(G,rt+2.9,pt),new J(G+2.5,rt,pt))}const z=(Math.min(...L.map(w=>w.x))+Math.max(...L.map(w=>w.x)))/2,D=[],U=()=>(h.updateMatrixWorld(),L.every(w=>(x.copy(w).project(h),Math.abs(x.x)<.97&&x.y>-.92&&x.y<.94)));function N(){R=s.clientWidth||1,S=s.clientHeight||1,c.setSize(R,S,!1),h.aspect=R/S,h.updateProjectionMatrix();const w=h.aspect<1,G=dh.degToRad(w?34:14),rt=Math.tan(dh.degToRad(h.fov/2)),pt=new J(z,0,w?0:4);for(let Tt=7;Tt<60;Tt+=.1){h.position.set(z,Tt*Math.sin(G),Tt*Math.cos(G)),pt.y=0,h.lookAt(pt),h.updateMatrixWorld(),D.length=0;for(const Lt of L)D.push(x.copy(Lt).project(h).y);if(pt.y=(Math.max(...D)+Math.min(...D))/2*Tt*rt,h.lookAt(pt),U())break}}const I=new ResizeObserver(N);I.observe(s),N();const T=new nb,O=new le;let V=-1;function Y(w){const G=c.domElement.getBoundingClientRect();O.set((w.clientX-G.left)/G.width*2-1,-((w.clientY-G.top)/G.height)*2+1),T.setFromCamera(O,h);const rt=T.intersectObjects(g,!1)[0];return rt?rt.object.userData.index:-1}function K(w){V=w,c.domElement.style.cursor=w>=0?"pointer":"",i.forEach((G,rt)=>G?.classList.toggle("hot",rt===w))}const et=w=>K(Y(w)),W=()=>K(-1),Q=w=>{const G=Y(w);G>=0&&a(t[G].path)},B=c.domElement;B.addEventListener("pointermove",et),B.addEventListener("pointerleave",W),B.addEventListener("click",Q);const H=i.map((w,G)=>{const rt=()=>K(G);return w?.addEventListener("pointerenter",rt),w?.addEventListener("pointerleave",W),rt}),lt=new J;let at=performance.now(),dt=0;return c.setAnimationLoop(w=>{const G=l?0:Math.min((w-at)/1e3,.1);at=w,dt+=G,m.rotation.y+=G*.05;for(const[rt,pt]of b.entries())pt.scale+=((V===rt?1.3:1)-pt.scale)*.15,pt.p.kind==="hole"?(pt.body.scale.setScalar(1+(pt.scale-1)*.5),pt.disk.rotation.z+=G*.5,pt.station.position.y=pt.baseY+Math.sin(dt*.8)*.08,pt.station.rotation.y+=G*.2,pt.station.userData.wheel.rotation.y+=G*.6):(pt.pivot.rotation.y+=G*Da/pt.p.t,pt.holder.rotation.y=-pt.pivot.rotation.y,pt.mesh.rotation.y+=(pt.p.rev?-1:1)*G*Da/pt.p.r,pt.tilt.scale.setScalar(pt.scale));c.render(f,h);for(const[rt,pt]of b.entries()){const Tt=i[rt];Tt&&(pt.anchor.getWorldPosition(lt),lt.y-=pt.dropBase*pt.scale,lt.project(h),Tt.style.transform=`translate(${(lt.x*.5+.5)*R}px, ${(-lt.y*.5+.5)*S}px) translate(-50%, 4px)`)}}),function(){c.setAnimationLoop(null),I.disconnect(),B.removeEventListener("pointermove",et),B.removeEventListener("pointerleave",W),B.removeEventListener("click",Q),i.forEach((G,rt)=>{G?.removeEventListener("pointerenter",H[rt]),G?.removeEventListener("pointerleave",W)}),f.traverse(G=>{G.geometry?.dispose(),G.material&&(G.material.map?.dispose(),G.material.dispose())}),c.dispose(),B.remove()}}function lC(){const s=xt.useRef(null),t=xt.useRef([]),i=Vp();return xt.useEffect(()=>oC({container:s.current,planets:Xh,labels:t.current,onSelect:a=>i(`/${a}`)}),[i]),zt.jsxs("main",{children:[zt.jsx("h1",{children:"Isaac Gonzalez"}),zt.jsx("p",{className:"hint",children:"Pick a planet to explore"}),zt.jsx("div",{className:"scene",ref:s,children:zt.jsx("nav",{className:"labels","aria-label":"Portfolio pages",children:Xh.map((a,l)=>zt.jsx(Gu,{to:`/${a.path}`,className:"planet-label",ref:c=>t.current[l]=c,children:a.label},a.path))})})]})}const cC="/assets/react-CHdo91hT.svg",uC="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20128%20128'%3e%3cpath%20d='m61.55%20128-21.84-12.68V40.55L6.81%2059.56l.08-28.32L61.55%200zM66.46%200v128l21.84-12.68V79.31l16.49%209.53-.1-24.63-16.39-9.36v-14.3l32.89%2019.01-.08-28.32z'%20fill='%23ff6f00'%20/%3e%3c/svg%3e",fC="/assets/Docker-DLqjD3tf.svg",dC="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3clinearGradient%20id='a'%20x1='38.78'%20x2='95.91'%20y1='41.59'%20y2='41.59'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2321d789'/%3e%3cstop%20offset='1'%20stop-color='%2307c3f2'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='-29.18'%20x2='88.46'%20y1='85.52'%20y2='-1.32'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='.01'%20stop-color='%23fcf84a'/%3e%3cstop%20offset='.11'%20stop-color='%23a7eb62'/%3e%3cstop%20offset='.21'%20stop-color='%235fe077'/%3e%3cstop%20offset='.27'%20stop-color='%2332da84'/%3e%3cstop%20offset='.31'%20stop-color='%2321d789'/%3e%3cstop%20offset='.58'%20stop-color='%2321d789'/%3e%3cstop%20offset='.6'%20stop-color='%2321d789'/%3e%3cstop%20offset='.69'%20stop-color='%2320d68c'/%3e%3cstop%20offset='.76'%20stop-color='%231ed497'/%3e%3cstop%20offset='.83'%20stop-color='%2319d1a9'/%3e%3cstop%20offset='.9'%20stop-color='%2313ccc2'/%3e%3cstop%20offset='.97'%20stop-color='%230bc6e1'/%3e%3cstop%20offset='1'%20stop-color='%2307c3f2'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='17.3'%20x2='36.92'%20y1='110.99'%20y2='49.42'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2321d789'/%3e%3cstop%20offset='.16'%20stop-color='%2324d888'/%3e%3cstop%20offset='.3'%20stop-color='%232fd985'/%3e%3cstop%20offset='.43'%20stop-color='%2341dc80'/%3e%3cstop%20offset='.55'%20stop-color='%235ae079'/%3e%3cstop%20offset='.67'%20stop-color='%237ae46f'/%3e%3cstop%20offset='.79'%20stop-color='%23a1ea64'/%3e%3cstop%20offset='.9'%20stop-color='%23cff157'/%3e%3cstop%20offset='1'%20stop-color='%23fcf84a'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%20x1='43.28'%20x2='85.97'%20y1='57.46'%20y2='.06'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2321d789'/%3e%3cstop%20offset='.09'%20stop-color='%2323d986'/%3e%3cstop%20offset='.17'%20stop-color='%232ade7b'/%3e%3cstop%20offset='.25'%20stop-color='%2336e669'/%3e%3cstop%20offset='.27'%20stop-color='%233bea62'/%3e%3cstop%20offset='.35'%20stop-color='%2347eb61'/%3e%3cstop%20offset='.49'%20stop-color='%2367ed5d'/%3e%3cstop%20offset='.69'%20stop-color='%239af156'/%3e%3cstop%20offset='.92'%20stop-color='%23e0f64d'/%3e%3cstop%20offset='1'%20stop-color='%23fcf84a'/%3e%3c/linearGradient%3e%3clinearGradient%20id='e'%20x1='108.58'%20x2='22.55'%20y1='64.77'%20y2='63.97'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='.39'%20stop-color='%23fcf84a'/%3e%3cstop%20offset='.46'%20stop-color='%23ecf74c'/%3e%3cstop%20offset='.61'%20stop-color='%23c1f451'/%3e%3cstop%20offset='.82'%20stop-color='%237eef5a'/%3e%3cstop%20offset='1'%20stop-color='%233bea62'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23a)'%20d='m87.54%2023.954%2034.194%2028.44-12.312%2025.051-20.614-5.717H70.973z'/%3e%3cpath%20fill='url(%23b)'%20d='m53.09%2042.423-6.619%2035.023-.634%2011.898-16.689%207.229-23.662%202.548%207.18-75.666L55.54%205.486l26.417%2017.323z'/%3e%3cpath%20fill='url(%23c)'%20d='m53.09%2042.423%203.218%2067.486-10.691%2012.605L5.486%2099.121l32.951-49.103z'/%3e%3cpath%20fill='url(%23d)'%20d='M97.243%2037.498H56.698L92.526%205.486z'/%3e%3cpath%20fill='url(%23e)'%20d='M122.514%20110.178%2086.82%20122.295%2039.289%20108.91%2053.09%2042.423l5.51-4.925%2028.94-2.718-2.621%2029.062%2023.016-8.923z'/%3e%3cpath%20d='M27.429%2027.429h73.143v73.143H27.429z'/%3e%3cpath%20fill='%23fff'%20d='M36.547%2086.747h27.429v4.571H36.547zm.024-50.176h11.215c6.534%200%2010.496%203.877%2010.496%209.472v.073c0%206.339-4.937%209.63-11.081%209.63h-4.534v8.216h-6.095zm10.801%2013.812c3.011%200%204.779-1.792%204.779-4.145v-.073c0-2.706-1.877-4.157-4.876-4.157h-4.608v8.375zm14.178-.024v-.073A13.909%2013.909%200%200%201%2075.825%2036.12a14.129%2014.129%200%200%201%2010.801%204.218l-3.828%204.425a10.155%2010.155%200%200%200-7.01-3.096c-4.62%200-7.948%203.84-7.948%208.533v.085c0%204.693%203.255%208.606%207.948%208.606%203.133%200%205.047-1.219%207.205-3.206l3.828%203.864a13.97%2013.97%200%200%201-11.227%204.876%2013.836%2013.836%200%200%201-14.043-14.068'/%3e%3c/svg%3e",hC="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20fill='%23F34F29'%20d='M124.737%2058.378L69.621%203.264c-3.172-3.174-8.32-3.174-11.497%200L46.68%2014.71l14.518%2014.518c3.375-1.139%207.243-.375%209.932%202.314%202.703%202.706%203.461%206.607%202.294%209.993l13.992%2013.993c3.385-1.167%207.292-.413%209.994%202.295%203.78%203.777%203.78%209.9%200%2013.679a9.673%209.673%200%2001-13.683%200%209.677%209.677%200%2001-2.105-10.521L68.574%2047.933l-.002%2034.341a9.708%209.708%200%20012.559%201.828c3.778%203.777%203.778%209.898%200%2013.683-3.779%203.777-9.904%203.777-13.679%200-3.778-3.784-3.778-9.905%200-13.683a9.65%209.65%200%20013.167-2.11V47.333a9.581%209.581%200%2001-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056%2020.333%203.264%2058.123a8.133%208.133%200%20000%2011.5l55.117%2055.114c3.174%203.174%208.32%203.174%2011.499%200l54.858-54.858a8.135%208.135%200%2000-.001-11.501z'/%3e%3c/svg%3e",pC="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cg%20fill='%23181616'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M64%205.103c-33.347%200-60.388%2027.035-60.388%2060.388%200%2026.682%2017.303%2049.317%2041.297%2057.303%203.017.56%204.125-1.31%204.125-2.905%200-1.44-.056-6.197-.082-11.243-16.8%203.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67%206.063.425%209.257%206.223%209.257%206.223%205.386%209.23%2014.127%206.562%2017.573%205.02.542-3.903%202.107-6.568%203.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843%200-6.593%202.36-11.98%206.223-16.21-.628-1.52-2.695-7.662.584-15.98%200%200%205.07-1.623%2016.61%206.19C53.7%2035%2058.867%2034.327%2064%2034.304c5.13.023%2010.3.694%2015.127%202.033%2011.526-7.813%2016.59-6.19%2016.59-6.19%203.287%208.317%201.22%2014.46.593%2015.98%203.872%204.23%206.215%209.617%206.215%2016.21%200%2023.194-14.127%2028.3-27.574%2029.796%202.167%201.874%204.097%205.55%204.097%2011.183%200%208.08-.07%2014.583-.07%2016.572%200%201.607%201.088%203.49%204.148%202.897%2023.98-7.994%2041.263-30.622%2041.263-57.294C124.388%2032.14%2097.35%205.104%2064%205.104z'/%3e%3cpath%20d='M26.484%2091.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395%201.04-.188.44.197.69.61.537.91zm2.446%202.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14%201.24.28.394.426.472.984.17%201.255zM31.312%2098.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025%201.35.507.368.545.368%201.19-.01%201.452zm3.261%203.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366%201.045-.264%201.564.23.527.486.686%201.18.333%201.543zm4.5%201.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7%201.512-.485.683.206%201.13.756.988%201.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877%200-.503.568-.91%201.29-.924.717-.013%201.306.387%201.306.88zm4.598-.782c.086.485-.413.984-1.126%201.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997%201.122-1.126.714-.123%201.354.17%201.444.663zm0%200'/%3e%3c/g%3e%3c/svg%3e",mC="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cmask%20id='a'%20width='128'%20height='128'%20x='0'%20y='0'%20maskUnits='userSpaceOnUse'%20style='mask-type:alpha'%3e%3cpath%20fill='%23fff'%20fill-rule='evenodd'%20d='M90.767%20127.126a7.968%207.968%200%200%200%206.35-.244l26.353-12.681a8%208%200%200%200%204.53-7.209V21.009a8%208%200%200%200-4.53-7.21L97.117%201.12a7.97%207.97%200%200%200-9.093%201.548l-50.45%2046.026L15.6%2032.013a5.328%205.328%200%200%200-6.807.302l-7.048%206.411a5.335%205.335%200%200%200-.006%207.888L20.796%2064%201.74%2081.387a5.336%205.336%200%200%200%20.006%207.887l7.048%206.411a5.327%205.327%200%200%200%206.807.303l21.974-16.68%2050.45%2046.025a7.96%207.96%200%200%200%202.743%201.793Zm5.252-92.183L57.74%2064l38.28%2029.058V34.943Z'%20clip-rule='evenodd'/%3e%3c/mask%3e%3cg%20mask='url(%23a)'%3e%3cpath%20fill='%230065A9'%20d='M123.471%2013.82%2097.097%201.12A7.973%207.973%200%200%200%2088%202.668L1.662%2081.387a5.333%205.333%200%200%200%20.006%207.887l7.052%206.411a5.333%205.333%200%200%200%206.811.303l103.971-78.875c3.488-2.646%208.498-.158%208.498%204.22v-.306a8.001%208.001%200%200%200-4.529-7.208Z'/%3e%3cg%20filter='url(%23b)'%3e%3cpath%20fill='%23007ACC'%20d='m123.471%20114.181-26.374%2012.698A7.973%207.973%200%200%201%2088%20125.333L1.662%2046.613a5.333%205.333%200%200%201%20.006-7.887l7.052-6.411a5.333%205.333%200%200%201%206.811-.303l103.971%2078.874c3.488%202.647%208.498.159%208.498-4.219v.306a8.001%208.001%200%200%201-4.529%207.208Z'/%3e%3c/g%3e%3cg%20filter='url(%23c)'%3e%3cpath%20fill='%231F9CF0'%20d='M97.098%20126.882A7.977%207.977%200%200%201%2088%20125.333c2.952%202.952%208%20.861%208-3.314V5.98c0-4.175-5.048-6.266-8-3.313a7.977%207.977%200%200%201%209.098-1.549L123.467%2013.8A8%208%200%200%201%20128%2021.01v85.982a8%208%200%200%201-4.533%207.21l-26.369%2012.681Z'/%3e%3c/g%3e%3cpath%20fill='url(%23d)'%20fill-rule='evenodd'%20d='M90.69%20127.126a7.968%207.968%200%200%200%206.349-.244l26.353-12.681a8%208%200%200%200%204.53-7.21V21.009a8%208%200%200%200-4.53-7.21L97.039%201.12a7.97%207.97%200%200%200-9.093%201.548l-50.45%2046.026-21.974-16.68a5.328%205.328%200%200%200-6.807.302l-7.048%206.411a5.336%205.336%200%200%200-.006%207.888L20.718%2064%201.662%2081.386a5.335%205.335%200%200%200%20.006%207.888l7.048%206.411a5.328%205.328%200%200%200%206.807.303l21.975-16.681%2050.45%2046.026a7.959%207.959%200%200%200%202.742%201.793Zm5.252-92.184L57.662%2064l38.28%2029.057V34.943Z'%20clip-rule='evenodd'%20opacity='0.25'%20style='mix-blend-mode:overlay'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='b'%20width='144.744'%20height='113.408'%20x='-8.41115'%20y='22.5944'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20result='hardAlpha'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='4.16667'/%3e%3cfeColorMatrix%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20mode='overlay'%20result='effect1_dropShadow_1_36'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow_1_36'%20result='shape'/%3e%3c/filter%3e%3cfilter%20id='c'%20width='56.6667'%20height='144.007'%20x='79.6667'%20y='-8.0035'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20result='hardAlpha'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='4.16667'/%3e%3cfeColorMatrix%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20mode='overlay'%20result='effect1_dropShadow_1_36'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow_1_36'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='d'%20x1='63.9222'%20x2='63.9222'%20y1='0.329902'%20y2='127.67'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23fff'/%3e%3cstop%20offset='1'%20stop-color='%23fff'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",gC="/assets/LA-DxOqnDJW.jpeg",_C="/assets/CougarAI-C7dEQceA.jpeg",vC="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20382%20382'%20xml:space='preserve'%3e%3cpath%20style='fill:%230077B7;'%20d='M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889%20C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z%20M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056%20H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806%20c5.554,0,10.056,4.502,10.056,10.056V329.844z%20M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1%20s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z%20M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73%20c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079%20c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426%20c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472%20L341.91,330.654L341.91,330.654z'/%3e%3c/svg%3e",xC=[{name:"TensorFlow",src:uC},{name:"Git",src:hC},{name:"Docker",src:fC},{name:"React",src:cC}],SC=[{name:"PyCharm",src:dC},{name:"VS Code",src:mC}],yC=[{name:"Linear Algbra Library",src:"https://github.com/ISucc34/LinAlgLibrary",img:gC,desc:"A small library for experimenting with matrix and vector operations."},{name:"Cougar AI Workshops",src:"https://github.com/ISucc34/CougarAI_Workshops",img:_C,desc:"Educational workshops for begginners to get hands on experience"},{name:"Portfolio",src:"https://github.com/ISucc34/My_Website",img:"",desc:"The website you see before you"}],MC=[{name:"GitHub",img:pC,src:"https://github.com/ISucc34"},{name:"LinkedIn",img:vC,src:"https://www.linkedin.com/in/isaac-gonzalez28/"}],px="ikgonza2@cougarnet.uh.edu",EC=["I'm a Computer Science student at the University of Houston (B.S., graduating May 2027) interested in AI, robotics, and human-computer interaction.","I'm the President of CougarAI, UH's AI student organization, an undergraduate researcher in the AWARE Lab, and an instructor at iCode, where I teach robotics, Python, and web development."],bC=[{title:"Bachelor of Science, Computer Science",org:"University of Houston",place:"Houston, TX",dates:"Aug. 2024 – May 2027"},{title:"Associate of Arts, Multidisciplinary Studies",org:"Houston Community College",place:"Houston, TX",dates:"June 2024"}],MS={title:"Undergraduate Researcher",org:"AWARE Lab, University of Houston",place:"Houston, TX",dates:"2026 – Present",bullets:["Conducting qualitative data analysis on interview transcripts to investigate how AI can support awareness, communication, and collaboration among noise-sensitive individuals and their allies","Reviewing HCI and AI literature to synthesize findings relevant to accessibility-focused human-AI interaction research"]},TC=[MS,{title:"Instructor",org:"iCode",place:"Houston, TX",dates:"Mar. 2026 – Present",bullets:["Instruct VEX robotics and 3D printing to 5–10 students through hands-on, project-based learning","Teach Python programming and web development, adapting lessons to different age groups and skill levels","Manage classroom logistics including hardware setup, troubleshooting, and curriculum delivery"]}],AC=[{title:"President & Workshop Committee",org:"CougarAI",dates:"Jan. 2025 – Present",bullets:["Direct strategy and operations for UH's AI student organization of 20+ officers, organizing speaker events, technical workshops, and applied ML project teams","Designed and facilitated hands-on workshops on computer vision, reinforcement learning, NumPy, and Pandas, enabling members to build ML pipelines from scratch"]},{title:"Drones Team Lead",org:"Drones Team",dates:"Jan. 2023 – May 2023",bullets:["Led a 5+ person team through full software/hardware integration, coordinating build schedule, component testing, and flight validation","Debugged hardware-software interface issues under time constraints to meet competition deadlines"]},{title:"Engineering Team Lead",org:"BEST Robotics",dates:"Aug. 2024 – Dec. 2024",bullets:["Managed a 10+ person engineering team, delegating tasks across mechanical, electrical, and software subgroups","Facilitated cross-functional communication to ensure deliverables met competition specifications"]}],RC=[{name:"DataJam | 3rd Place",date:"Nov. 2025"},{name:"CodeRED Hackathon | 3rd Place",date:"Oct. 2025"},{name:"BEST Robotics Regionals | 1st Place",date:"Mar. 2022"}],Nu={languages:["Python","C++","JavaScript","HTML/CSS"],aiml:["PyTorch","TensorFlow","scikit-learn","OpenCV","Gymnasium (RL)","MediaPipe","Ultralytics (YOLOv8)","Pandas","NumPy"],robotics:["VEX Robotics","Embedded C++","Isaac Sim","Fusion360","TinkerCAD","Arduino","Raspberry Pi"],tools:["React","Node.js","Docker","Git","Anaconda","Google Colab","VS Code","PyCharm","Linux"]};function _l({title:s,children:t}){return zt.jsxs("section",{className:"section",children:[s&&zt.jsx("h2",{children:s}),t]})}function Ou({title:s,org:t,place:i,dates:a,bullets:l}){return zt.jsxs("article",{className:"entry",children:[zt.jsxs("header",{children:[zt.jsx("h3",{children:s}),zt.jsx("span",{className:"dates",children:a})]}),zt.jsx("p",{className:"org",children:[t,i].filter(Boolean).join(" · ")}),l&&zt.jsx("ul",{children:l.map(c=>zt.jsx("li",{children:c},c))})]})}function Pu({title:s,items:t}){return zt.jsxs("div",{className:"skill-group",children:[zt.jsx("h3",{children:s}),zt.jsx("ul",{className:"chips",children:t.map(i=>zt.jsx("li",{children:i},i))})]})}function ES({items:s}){return zt.jsx("div",{className:"logos-container",children:s.map(t=>zt.jsx("div",{children:zt.jsx("img",{src:t.src||t.img,className:"logo",alt:`${t.name} logo`})},t.name))})}const CC=()=>zt.jsxs(zt.Fragment,{children:[zt.jsx(ES,{items:xC}),zt.jsx(Pu,{title:"AI / ML",items:Nu.aiml}),zt.jsx(Pu,{title:"Frameworks & Tools",items:Nu.tools})]}),wC=()=>zt.jsxs(zt.Fragment,{children:[zt.jsx(ES,{items:SC}),zt.jsx(Pu,{title:"Languages",items:Nu.languages}),zt.jsx(Pu,{title:"Robotics & Embedded",items:Nu.robotics})]});function DC(){return zt.jsx("div",{className:"projects",children:yC.map(s=>zt.jsxs("a",{className:"project-card",href:s.src,target:"_blank",rel:"noreferrer",children:[s.img&&zt.jsx("img",{className:"project-image",src:s.img,alt:""}),zt.jsxs("div",{className:"project-content",children:[zt.jsx("h3",{children:s.name}),zt.jsx("p",{children:s.desc})]})]},s.name))})}function LC(){return zt.jsxs(zt.Fragment,{children:[zt.jsx("div",{className:"logos-container",children:MC.map(s=>zt.jsx("a",{href:s.src,target:"_blank",rel:"noreferrer",children:zt.jsx("img",{src:s.img,className:"logo",alt:`${s.name} logo`})},s.name))}),zt.jsx("p",{className:"contact-email",children:zt.jsx("a",{href:`mailto:${px}`,children:px})})]})}const UC=()=>zt.jsx("div",{className:"prose",children:EC.map(s=>zt.jsx("p",{children:s},s))}),NC=()=>zt.jsx(_l,{children:bC.map(s=>zt.jsx(Ou,{...s},s.title))}),OC=()=>zt.jsx(_l,{children:zt.jsx(Ou,{...MS})}),PC=()=>zt.jsxs(zt.Fragment,{children:[zt.jsx(_l,{title:"Experience",children:TC.map(s=>zt.jsx(Ou,{...s},s.title))}),zt.jsx(_l,{title:"Leadership",children:AC.map(s=>zt.jsx(Ou,{...s},s.title))}),zt.jsx(_l,{title:"Awards",children:RC.map(s=>zt.jsxs("article",{className:"entry award",children:[zt.jsx("h3",{children:s.name}),zt.jsx("span",{className:"dates",children:s.date})]},s.name))})]}),IC=()=>zt.jsx("p",{className:"soon",children:"This page is still being built. Content coming soon."}),BC={frameworks:CC,technologies:wC,projects:DC,contact:LC,about:UC,education:NC,research:OC,experience:PC};function zC(){return zt.jsxs(I2,{children:[zt.jsx(hu,{path:"/",element:zt.jsx(lC,{})}),Xh.map(s=>{const t=BC[s.path]||IC;return zt.jsx(hu,{path:`/${s.path}`,element:zt.jsxs("main",{children:[zt.jsx(Gu,{to:"/",className:"back",children:"← Back to the solar system"}),zt.jsx("h1",{children:s.title||s.label}),zt.jsx(t,{})]})},s.path)}),zt.jsx(hu,{path:"*",element:zt.jsx(O2,{to:"/",replace:!0})})]})}PM.createRoot(document.getElementById("root")).render(zt.jsx(xt.StrictMode,{children:zt.jsx(sE,{children:zt.jsx(zC,{})})}));
