(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Hi(e,t){const n=Object.create(null),o=e.split(",");for(let s=0;s<o.length;s++)n[o[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Id="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ld=Hi(Id);function Gc(e){return!!e||e===""}function Ue(e){if(oe(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=De(o)?Bd(o):Ue(o);if(s)for(const i in s)t[i]=s[i]}return t}else{if(De(e))return e;if(Ve(e))return e}}const Fd=/;(?![^(]*\))/g,Nd=/:(.+)/;function Bd(e){const t={};return e.split(Fd).forEach(n=>{if(n){const o=n.split(Nd);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Re(e){let t="";if(De(e))t=e;else if(oe(e))for(let n=0;n<e.length;n++){const o=Re(e[n]);o&&(t+=o+" ")}else if(Ve(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Le(e){if(!e)return null;let{class:t,style:n}=e;return t&&!De(t)&&(e.class=Re(t)),n&&(e.style=Ue(n)),e}const en=e=>De(e)?e:e==null?"":oe(e)||Ve(e)&&(e.toString===Qc||!ae(e.toString))?JSON.stringify(e,Zc,2):String(e),Zc=(e,t)=>t&&t.__v_isRef?Zc(e,t.value):lo(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,s])=>(n[`${o} =>`]=s,n),{})}:Xc(t)?{[`Set(${t.size})`]:[...t.values()]}:Ve(t)&&!oe(t)&&!eu(t)?String(t):t,Se={},io=[],Dt=()=>{},jd=()=>!1,Wd=/^on[^a-z]/,or=e=>Wd.test(e),zi=e=>e.startsWith("onUpdate:"),tt=Object.assign,qi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Vd=Object.prototype.hasOwnProperty,me=(e,t)=>Vd.call(e,t),oe=Array.isArray,lo=e=>sr(e)==="[object Map]",Xc=e=>sr(e)==="[object Set]",ae=e=>typeof e=="function",De=e=>typeof e=="string",Ui=e=>typeof e=="symbol",Ve=e=>e!==null&&typeof e=="object",Jc=e=>Ve(e)&&ae(e.then)&&ae(e.catch),Qc=Object.prototype.toString,sr=e=>Qc.call(e),Hd=e=>sr(e).slice(8,-1),eu=e=>sr(e)==="[object Object]",Yi=e=>De(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Rs=Hi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},zd=/-(\w)/g,Kt=rr(e=>e.replace(zd,(t,n)=>n?n.toUpperCase():"")),qd=/\B([A-Z])/g,Un=rr(e=>e.replace(qd,"-$1").toLowerCase()),ir=rr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Cr=rr(e=>e?`on${ir(e)}`:""),Qo=(e,t)=>!Object.is(e,t),ao=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Vs=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Jr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Nl;const Ud=()=>Nl||(Nl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let pt;class tu{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&pt&&(this.parent=pt,this.index=(pt.scopes||(pt.scopes=[])).push(this)-1)}run(t){if(this.active){const n=pt;try{return pt=this,t()}finally{pt=n}}}on(){pt=this}off(){pt=this.parent}stop(t){if(this.active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Yd(e){return new tu(e)}function Kd(e,t=pt){t&&t.active&&t.effects.push(e)}function nu(){return pt}function ou(e){pt&&pt.cleanups.push(e)}const Ki=e=>{const t=new Set(e);return t.w=0,t.n=0,t},su=e=>(e.w&vn)>0,ru=e=>(e.n&vn)>0,Gd=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=vn},Zd=e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const s=t[o];su(s)&&!ru(s)?s.delete(e):t[n++]=s,s.w&=~vn,s.n&=~vn}t.length=n}},Qr=new WeakMap;let Lo=0,vn=1;const ei=30;let Mt;const Bn=Symbol(""),ti=Symbol("");class Gi{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Kd(this,o)}run(){if(!this.active)return this.fn();let t=Mt,n=fn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Mt,Mt=this,fn=!0,vn=1<<++Lo,Lo<=ei?Gd(this):Bl(this),this.fn()}finally{Lo<=ei&&Zd(this),vn=1<<--Lo,Mt=this.parent,fn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Mt===this?this.deferStop=!0:this.active&&(Bl(this),this.onStop&&this.onStop(),this.active=!1)}}function Bl(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let fn=!0;const iu=[];function _o(){iu.push(fn),fn=!1}function bo(){const e=iu.pop();fn=e===void 0?!0:e}function yt(e,t,n){if(fn&&Mt){let o=Qr.get(e);o||Qr.set(e,o=new Map);let s=o.get(n);s||o.set(n,s=Ki()),lu(s)}}function lu(e,t){let n=!1;Lo<=ei?ru(e)||(e.n|=vn,n=!su(e)):n=!e.has(Mt),n&&(e.add(Mt),Mt.deps.push(e))}function tn(e,t,n,o,s,i){const l=Qr.get(e);if(!l)return;let a=[];if(t==="clear")a=[...l.values()];else if(n==="length"&&oe(e))l.forEach((c,u)=>{(u==="length"||u>=o)&&a.push(c)});else switch(n!==void 0&&a.push(l.get(n)),t){case"add":oe(e)?Yi(n)&&a.push(l.get("length")):(a.push(l.get(Bn)),lo(e)&&a.push(l.get(ti)));break;case"delete":oe(e)||(a.push(l.get(Bn)),lo(e)&&a.push(l.get(ti)));break;case"set":lo(e)&&a.push(l.get(Bn));break}if(a.length===1)a[0]&&ni(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);ni(Ki(c))}}function ni(e,t){const n=oe(e)?e:[...e];for(const o of n)o.computed&&jl(o);for(const o of n)o.computed||jl(o)}function jl(e,t){(e!==Mt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Xd=Hi("__proto__,__v_isRef,__isVue"),au=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ui)),Jd=Zi(),Qd=Zi(!1,!0),ef=Zi(!0),Wl=tf();function tf(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=be(this);for(let i=0,l=this.length;i<l;i++)yt(o,"get",i+"");const s=o[t](...n);return s===-1||s===!1?o[t](...n.map(be)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){_o();const o=be(this)[t].apply(this,n);return bo(),o}}),e}function Zi(e=!1,t=!1){return function(o,s,i){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&i===(e?t?vf:fu:t?du:pu).get(o))return o;const l=oe(o);if(!e&&l&&me(Wl,s))return Reflect.get(Wl,s,i);const a=Reflect.get(o,s,i);return(Ui(s)?au.has(s):Xd(s))||(e||yt(o,"get",s),t)?a:we(a)?l&&Yi(s)?a:a.value:Ve(a)?e?so(a):Me(a):a}}const nf=cu(),of=cu(!0);function cu(e=!1){return function(n,o,s,i){let l=n[o];if(es(l)&&we(l)&&!we(s))return!1;if(!e&&!es(s)&&(oi(s)||(s=be(s),l=be(l)),!oe(n)&&we(l)&&!we(s)))return l.value=s,!0;const a=oe(n)&&Yi(o)?Number(o)<n.length:me(n,o),c=Reflect.set(n,o,s,i);return n===be(i)&&(a?Qo(s,l)&&tn(n,"set",o,s):tn(n,"add",o,s)),c}}function sf(e,t){const n=me(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&n&&tn(e,"delete",t,void 0),o}function rf(e,t){const n=Reflect.has(e,t);return(!Ui(t)||!au.has(t))&&yt(e,"has",t),n}function lf(e){return yt(e,"iterate",oe(e)?"length":Bn),Reflect.ownKeys(e)}const uu={get:Jd,set:nf,deleteProperty:sf,has:rf,ownKeys:lf},af={get:ef,set(e,t){return!0},deleteProperty(e,t){return!0}},cf=tt({},uu,{get:Qd,set:of}),Xi=e=>e,lr=e=>Reflect.getPrototypeOf(e);function xs(e,t,n=!1,o=!1){e=e.__v_raw;const s=be(e),i=be(t);n||(t!==i&&yt(s,"get",t),yt(s,"get",i));const{has:l}=lr(s),a=o?Xi:n?el:ts;if(l.call(s,t))return a(e.get(t));if(l.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function Es(e,t=!1){const n=this.__v_raw,o=be(n),s=be(e);return t||(e!==s&&yt(o,"has",e),yt(o,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function As(e,t=!1){return e=e.__v_raw,!t&&yt(be(e),"iterate",Bn),Reflect.get(e,"size",e)}function Vl(e){e=be(e);const t=be(this);return lr(t).has.call(t,e)||(t.add(e),tn(t,"add",e,e)),this}function Hl(e,t){t=be(t);const n=be(this),{has:o,get:s}=lr(n);let i=o.call(n,e);i||(e=be(e),i=o.call(n,e));const l=s.call(n,e);return n.set(e,t),i?Qo(t,l)&&tn(n,"set",e,t):tn(n,"add",e,t),this}function zl(e){const t=be(this),{has:n,get:o}=lr(t);let s=n.call(t,e);s||(e=be(e),s=n.call(t,e)),o&&o.call(t,e);const i=t.delete(e);return s&&tn(t,"delete",e,void 0),i}function ql(){const e=be(this),t=e.size!==0,n=e.clear();return t&&tn(e,"clear",void 0,void 0),n}function Cs(e,t){return function(o,s){const i=this,l=i.__v_raw,a=be(l),c=t?Xi:e?el:ts;return!e&&yt(a,"iterate",Bn),l.forEach((u,p)=>o.call(s,c(u),c(p),i))}}function Os(e,t,n){return function(...o){const s=this.__v_raw,i=be(s),l=lo(i),a=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,u=s[e](...o),p=n?Xi:t?el:ts;return!t&&yt(i,"iterate",c?ti:Bn),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:a?[p(f[0]),p(f[1])]:p(f),done:d}},[Symbol.iterator](){return this}}}}function rn(e){return function(...t){return e==="delete"?!1:this}}function uf(){const e={get(i){return xs(this,i)},get size(){return As(this)},has:Es,add:Vl,set:Hl,delete:zl,clear:ql,forEach:Cs(!1,!1)},t={get(i){return xs(this,i,!1,!0)},get size(){return As(this)},has:Es,add:Vl,set:Hl,delete:zl,clear:ql,forEach:Cs(!1,!0)},n={get(i){return xs(this,i,!0)},get size(){return As(this,!0)},has(i){return Es.call(this,i,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:Cs(!0,!1)},o={get(i){return xs(this,i,!0,!0)},get size(){return As(this,!0)},has(i){return Es.call(this,i,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:Cs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Os(i,!1,!1),n[i]=Os(i,!0,!1),t[i]=Os(i,!1,!0),o[i]=Os(i,!0,!0)}),[e,n,t,o]}const[pf,df,ff,hf]=uf();function Ji(e,t){const n=t?e?hf:ff:e?df:pf;return(o,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(me(n,s)&&s in o?n:o,s,i)}const mf={get:Ji(!1,!1)},gf={get:Ji(!1,!0)},yf={get:Ji(!0,!1)},pu=new WeakMap,du=new WeakMap,fu=new WeakMap,vf=new WeakMap;function _f(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bf(e){return e.__v_skip||!Object.isExtensible(e)?0:_f(Hd(e))}function Me(e){return es(e)?e:Qi(e,!1,uu,mf,pu)}function wf(e){return Qi(e,!1,cf,gf,du)}function so(e){return Qi(e,!0,af,yf,fu)}function Qi(e,t,n,o,s){if(!Ve(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const l=bf(e);if(l===0)return e;const a=new Proxy(e,l===2?o:n);return s.set(e,a),a}function co(e){return es(e)?co(e.__v_raw):!!(e&&e.__v_isReactive)}function es(e){return!!(e&&e.__v_isReadonly)}function oi(e){return!!(e&&e.__v_isShallow)}function hu(e){return co(e)||es(e)}function be(e){const t=e&&e.__v_raw;return t?be(t):e}function ar(e){return Vs(e,"__v_skip",!0),e}const ts=e=>Ve(e)?Me(e):e,el=e=>Ve(e)?so(e):e;function tl(e){fn&&Mt&&(e=be(e),lu(e.dep||(e.dep=Ki())))}function nl(e,t){e=be(e),e.dep&&ni(e.dep)}function we(e){return!!(e&&e.__v_isRef===!0)}function V(e){return mu(e,!1)}function Nt(e){return mu(e,!0)}function mu(e,t){return we(e)?e:new kf(e,t)}class kf{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:be(t),this._value=n?t:ts(t)}get value(){return tl(this),this._value}set value(t){t=this.__v_isShallow?t:be(t),Qo(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:ts(t),nl(this))}}function w(e){return we(e)?e.value:e}const xf={get:(e,t,n)=>w(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return we(s)&&!we(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};function gu(e){return co(e)?e:new Proxy(e,xf)}class Ef{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:o}=t(()=>tl(this),()=>nl(this));this._get=n,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function Af(e){return new Ef(e)}function Cf(e){const t=oe(e)?new Array(e.length):{};for(const n in e)t[n]=Sf(e,n);return t}class Of{constructor(t,n,o){this._object=t,this._key=n,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Sf(e,t,n){const o=e[t];return we(o)?o:new Of(e,t,n)}class $f{constructor(t,n,o,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Gi(t,()=>{this._dirty||(this._dirty=!0,nl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const t=be(this);return tl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Pf(e,t,n=!1){let o,s;const i=ae(e);return i?(o=e,s=Dt):(o=e.get,s=e.set),new $f(o,s,i||!s,n)}function hn(e,t,n,o){let s;try{s=o?e(...o):e()}catch(i){cr(i,t,n)}return s}function It(e,t,n,o){if(ae(e)){const i=hn(e,t,n,o);return i&&Jc(i)&&i.catch(l=>{cr(l,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(It(e[i],t,n,o));return s}function cr(e,t,n,o=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const l=t.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,l,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){hn(c,null,10,[e,l,a]);return}}Tf(e,n,s,o)}function Tf(e,t,n,o=!0){console.error(e)}let Hs=!1,si=!1;const ht=[];let Jt=0;const Bo=[];let Fo=null,eo=0;const jo=[];let an=null,to=0;const yu=Promise.resolve();let ol=null,ri=null;function qe(e){const t=ol||yu;return e?t.then(this?e.bind(this):e):t}function Mf(e){let t=Jt+1,n=ht.length;for(;t<n;){const o=t+n>>>1;ns(ht[o])<e?t=o+1:n=o}return t}function vu(e){(!ht.length||!ht.includes(e,Hs&&e.allowRecurse?Jt+1:Jt))&&e!==ri&&(e.id==null?ht.push(e):ht.splice(Mf(e.id),0,e),_u())}function _u(){!Hs&&!si&&(si=!0,ol=yu.then(ku))}function Rf(e){const t=ht.indexOf(e);t>Jt&&ht.splice(t,1)}function bu(e,t,n,o){oe(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?o+1:o))&&n.push(e),_u()}function Df(e){bu(e,Fo,Bo,eo)}function If(e){bu(e,an,jo,to)}function ur(e,t=null){if(Bo.length){for(ri=t,Fo=[...new Set(Bo)],Bo.length=0,eo=0;eo<Fo.length;eo++)Fo[eo]();Fo=null,eo=0,ri=null,ur(e,t)}}function wu(e){if(ur(),jo.length){const t=[...new Set(jo)];if(jo.length=0,an){an.push(...t);return}for(an=t,an.sort((n,o)=>ns(n)-ns(o)),to=0;to<an.length;to++)an[to]();an=null,to=0}}const ns=e=>e.id==null?1/0:e.id;function ku(e){si=!1,Hs=!0,ur(e),ht.sort((n,o)=>ns(n)-ns(o));const t=Dt;try{for(Jt=0;Jt<ht.length;Jt++){const n=ht[Jt];n&&n.active!==!1&&hn(n,null,14)}}finally{Jt=0,ht.length=0,wu(),Hs=!1,ol=null,(ht.length||Bo.length||jo.length)&&ku(e)}}function Lf(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||Se;let s=n;const i=t.startsWith("update:"),l=i&&t.slice(7);if(l&&l in o){const p=`${l==="modelValue"?"model":l}Modifiers`,{number:f,trim:d}=o[p]||Se;d&&(s=n.map(h=>h.trim())),f&&(s=n.map(Jr))}let a,c=o[a=Cr(t)]||o[a=Cr(Kt(t))];!c&&i&&(c=o[a=Cr(Un(t))]),c&&It(c,e,6,s);const u=o[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,It(u,e,6,s)}}function xu(e,t,n=!1){const o=t.emitsCache,s=o.get(e);if(s!==void 0)return s;const i=e.emits;let l={},a=!1;if(!ae(e)){const c=u=>{const p=xu(u,t,!0);p&&(a=!0,tt(l,p))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(o.set(e,null),null):(oe(i)?i.forEach(c=>l[c]=null):tt(l,i),o.set(e,l),l)}function pr(e,t){return!e||!or(t)?!1:(t=t.slice(2).replace(/Once$/,""),me(e,t[0].toLowerCase()+t.slice(1))||me(e,Un(t))||me(e,t))}let Ke=null,dr=null;function zs(e){const t=Ke;return Ke=e,dr=e&&e.type.__scopeId||null,t}function Et(e){dr=e}function At(){dr=null}function ee(e,t=Ke,n){if(!t||e._n)return e;const o=(...s)=>{o._d&&na(-1);const i=zs(t),l=e(...s);return zs(i),o._d&&na(1),l};return o._n=!0,o._c=!0,o._d=!0,o}function Or(e){const{type:t,vnode:n,proxy:o,withProxy:s,props:i,propsOptions:[l],slots:a,attrs:c,emit:u,render:p,renderCache:f,data:d,setupState:h,ctx:m,inheritAttrs:b}=e;let _,C;const A=zs(e);try{if(n.shapeFlag&4){const O=s||o;_=zt(p.call(O,O,f,i,h,d,m)),C=c}else{const O=t;_=zt(O.length>1?O(i,{attrs:c,slots:a,emit:u}):O(i,null)),C=t.props?c:Ff(c)}}catch(O){Vo.length=0,cr(O,e,1),_=W(_n)}let E=_;if(C&&b!==!1){const O=Object.keys(C),{shapeFlag:F}=E;O.length&&F&7&&(l&&O.some(zi)&&(C=Nf(C,l)),E=qn(E,C))}return n.dirs&&(E=qn(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),_=E,zs(A),_}const Ff=e=>{let t;for(const n in e)(n==="class"||n==="style"||or(n))&&((t||(t={}))[n]=e[n]);return t},Nf=(e,t)=>{const n={};for(const o in e)(!zi(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function Bf(e,t,n){const{props:o,children:s,component:i}=e,{props:l,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?Ul(o,l,u):!!l;if(c&8){const p=t.dynamicProps;for(let f=0;f<p.length;f++){const d=p[f];if(l[d]!==o[d]&&!pr(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:o===l?!1:o?l?Ul(o,l,u):!0:!!l;return!1}function Ul(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const i=o[s];if(t[i]!==e[i]&&!pr(n,i))return!0}return!1}function jf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Eu=e=>e.__isSuspense;function Wf(e,t){t&&t.pendingBranch?oe(e)?t.effects.push(...e):t.effects.push(e):If(e)}function ft(e,t){if(He){let n=He.provides;const o=He.parent&&He.parent.provides;o===n&&(n=He.provides=Object.create(o)),n[e]=t}}function q(e,t,n=!1){const o=He||Ke;if(o){const s=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ae(t)?t.call(o.proxy):t}}function hs(e,t){return sl(e,null,t)}const Yl={};function ce(e,t,n){return sl(e,t,n)}function sl(e,t,{immediate:n,deep:o,flush:s,onTrack:i,onTrigger:l}=Se){const a=He;let c,u=!1,p=!1;if(we(e)?(c=()=>e.value,u=oi(e)):co(e)?(c=()=>e,o=!0):oe(e)?(p=!0,u=e.some(C=>co(C)||oi(C)),c=()=>e.map(C=>{if(we(C))return C.value;if(co(C))return In(C);if(ae(C))return hn(C,a,2)})):ae(e)?t?c=()=>hn(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),It(e,a,3,[d])}:c=Dt,t&&o){const C=c;c=()=>In(C())}let f,d=C=>{f=_.onStop=()=>{hn(C,a,4)}};if(rs)return d=Dt,t?n&&It(t,a,3,[c(),p?[]:void 0,d]):c(),Dt;let h=p?[]:Yl;const m=()=>{if(!!_.active)if(t){const C=_.run();(o||u||(p?C.some((A,E)=>Qo(A,h[E])):Qo(C,h)))&&(f&&f(),It(t,a,3,[C,h===Yl?void 0:h,d]),h=C)}else _.run()};m.allowRecurse=!!t;let b;s==="sync"?b=m:s==="post"?b=()=>ze(m,a&&a.suspense):b=()=>Df(m);const _=new Gi(c,b);return t?n?m():h=_.run():s==="post"?ze(_.run.bind(_),a&&a.suspense):_.run(),()=>{_.stop(),a&&a.scope&&qi(a.scope.effects,_)}}function Vf(e,t,n){const o=this.proxy,s=De(e)?e.includes(".")?Au(o,e):()=>o[e]:e.bind(o,o);let i;ae(t)?i=t:(i=t.handler,n=t);const l=He;mo(this);const a=sl(s,i.bind(o),n);return l?mo(l):jn(),a}function Au(e,t){const n=t.split(".");return()=>{let o=e;for(let s=0;s<n.length&&o;s++)o=o[n[s]];return o}}function In(e,t){if(!Ve(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),we(e))In(e.value,t);else if(oe(e))for(let n=0;n<e.length;n++)In(e[n],t);else if(Xc(e)||lo(e))e.forEach(n=>{In(n,t)});else if(eu(e))for(const n in e)In(e[n],t);return e}function Cu(e,t){e.shapeFlag&6&&e.component?Cu(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function de(e){return ae(e)?{setup:e,name:e.name}:e}const uo=e=>!!e.type.__asyncLoader,Ou=e=>e.type.__isKeepAlive,Hf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Yn(),o=n.ctx;if(!o.renderer)return()=>{const A=t.default&&t.default();return A&&A.length===1?A[0]:A};const s=new Map,i=new Set;let l=null;const a=n.suspense,{renderer:{p:c,m:u,um:p,o:{createElement:f}}}=o,d=f("div");o.activate=(A,E,O,F,I)=>{const j=A.component;u(A,E,O,0,a),c(j.vnode,A,E,O,j,a,F,A.slotScopeIds,I),ze(()=>{j.isDeactivated=!1,j.a&&ao(j.a);const X=A.props&&A.props.onVnodeMounted;X&&wt(X,j.parent,A)},a)},o.deactivate=A=>{const E=A.component;u(A,d,null,1,a),ze(()=>{E.da&&ao(E.da);const O=A.props&&A.props.onVnodeUnmounted;O&&wt(O,E.parent,A),E.isDeactivated=!0},a)};function h(A){Sr(A),p(A,n,a,!0)}function m(A){s.forEach((E,O)=>{const F=di(E.type);F&&(!A||!A(F))&&b(O)})}function b(A){const E=s.get(A);!l||E.type!==l.type?h(E):l&&Sr(l),s.delete(A),i.delete(A)}ce(()=>[e.include,e.exclude],([A,E])=>{A&&m(O=>No(A,O)),E&&m(O=>!No(E,O))},{flush:"post",deep:!0});let _=null;const C=()=>{_!=null&&s.set(_,$r(n.subTree))};return wo(C),Tu(C),hr(()=>{s.forEach(A=>{const{subTree:E,suspense:O}=n,F=$r(E);if(A.type===F.type){Sr(F);const I=F.component.da;I&&ze(I,O);return}h(A)})}),()=>{if(_=null,!t.default)return null;const A=t.default(),E=A[0];if(A.length>1)return l=null,A;if(!zn(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return l=null,E;let O=$r(E);const F=O.type,I=di(uo(O)?O.type.__asyncResolved||{}:F),{include:j,exclude:X,max:ie}=e;if(j&&(!I||!No(j,I))||X&&I&&No(X,I))return l=O,E;const fe=O.key==null?F:O.key,ge=s.get(fe);return O.el&&(O=qn(O),E.shapeFlag&128&&(E.ssContent=O)),_=fe,ge?(O.el=ge.el,O.component=ge.component,O.transition&&Cu(O,O.transition),O.shapeFlag|=512,i.delete(fe),i.add(fe)):(i.add(fe),ie&&i.size>parseInt(ie,10)&&b(i.values().next().value)),O.shapeFlag|=256,l=O,Eu(E.type)?E:O}}},Su=Hf;function No(e,t){return oe(e)?e.some(n=>No(n,t)):De(e)?e.split(",").includes(t):e.test?e.test(t):!1}function zf(e,t){$u(e,"a",t)}function qf(e,t){$u(e,"da",t)}function $u(e,t,n=He){const o=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(fr(t,o,n),n){let s=n.parent;for(;s&&s.parent;)Ou(s.parent.vnode)&&Uf(o,t,n,s),s=s.parent}}function Uf(e,t,n,o){const s=fr(t,e,o,!0);mr(()=>{qi(o[t],s)},n)}function Sr(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function $r(e){return e.shapeFlag&128?e.ssContent:e}function fr(e,t,n=He,o=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...l)=>{if(n.isUnmounted)return;_o(),mo(n);const a=It(t,n,e,l);return jn(),bo(),a});return o?s.unshift(i):s.push(i),i}}const nn=e=>(t,n=He)=>(!rs||e==="sp")&&fr(e,t,n),Pu=nn("bm"),wo=nn("m"),Yf=nn("bu"),Tu=nn("u"),hr=nn("bum"),mr=nn("um"),Kf=nn("sp"),Gf=nn("rtg"),Zf=nn("rtc");function Xf(e,t=He){fr("ec",e,t)}function Be(e,t){const n=Ke;if(n===null)return e;const o=yr(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[l,a,c,u=Se]=t[i];ae(l)&&(l={mounted:l,updated:l}),l.deep&&In(a),s.push({dir:l,instance:o,value:a,oldValue:void 0,arg:c,modifiers:u})}return e}function Cn(e,t,n,o){const s=e.dirs,i=t&&t.dirs;for(let l=0;l<s.length;l++){const a=s[l];i&&(a.oldValue=i[l].value);let c=a.dir[o];c&&(_o(),It(c,n,8,[e.el,a,e,t]),bo())}}const Mu="components",Jf="directives";function os(e,t){return Ru(Mu,e,!0,t)||e}const Qf=Symbol();function xt(e){return Ru(Jf,e)}function Ru(e,t,n=!0,o=!1){const s=Ke||He;if(s){const i=s.type;if(e===Mu){const a=di(i,!1);if(a&&(a===t||a===Kt(t)||a===ir(Kt(t))))return i}const l=Kl(s[e]||i[e],t)||Kl(s.appContext[e],t);return!l&&o?i:l}}function Kl(e,t){return e&&(e[t]||e[Kt(t)]||e[ir(Kt(t))])}function ms(e,t,n,o){let s;const i=n&&n[o];if(oe(e)||De(e)){s=new Array(e.length);for(let l=0,a=e.length;l<a;l++)s[l]=t(e[l],l,void 0,i&&i[l])}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i&&i[l])}else if(Ve(e))if(e[Symbol.iterator])s=Array.from(e,(l,a)=>t(l,a,void 0,i&&i[a]));else{const l=Object.keys(e);s=new Array(l.length);for(let a=0,c=l.length;a<c;a++){const u=l[a];s[a]=t(e[u],u,a,i&&i[a])}}else s=[];return n&&(n[o]=s),s}function vt(e,t,n={},o,s){if(Ke.isCE||Ke.parent&&uo(Ke.parent)&&Ke.parent.isCE)return W("slot",t==="default"?null:{name:t},o&&o());let i=e[t];i&&i._c&&(i._d=!1),k();const l=i&&Du(i(n)),a=Q(ke,{key:n.key||`_${t}`},l||(o?o():[]),l&&e._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Du(e){return e.some(t=>zn(t)?!(t.type===_n||t.type===ke&&!Du(t.children)):!0)?e:null}const ii=e=>e?qu(e)?yr(e)||e.proxy:ii(e.parent):null,qs=tt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ii(e.parent),$root:e=>ii(e.root),$emit:e=>e.emit,$options:e=>Lu(e),$forceUpdate:e=>e.f||(e.f=()=>vu(e.update)),$nextTick:e=>e.n||(e.n=qe.bind(e.proxy)),$watch:e=>Vf.bind(e)}),eh={get({_:e},t){const{ctx:n,setupState:o,data:s,props:i,accessCache:l,type:a,appContext:c}=e;let u;if(t[0]!=="$"){const h=l[t];if(h!==void 0)switch(h){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(o!==Se&&me(o,t))return l[t]=1,o[t];if(s!==Se&&me(s,t))return l[t]=2,s[t];if((u=e.propsOptions[0])&&me(u,t))return l[t]=3,i[t];if(n!==Se&&me(n,t))return l[t]=4,n[t];li&&(l[t]=0)}}const p=qs[t];let f,d;if(p)return t==="$attrs"&&yt(e,"get",t),p(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==Se&&me(n,t))return l[t]=4,n[t];if(d=c.config.globalProperties,me(d,t))return d[t]},set({_:e},t,n){const{data:o,setupState:s,ctx:i}=e;return s!==Se&&me(s,t)?(s[t]=n,!0):o!==Se&&me(o,t)?(o[t]=n,!0):me(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:s,propsOptions:i}},l){let a;return!!n[l]||e!==Se&&me(e,l)||t!==Se&&me(t,l)||(a=i[0])&&me(a,l)||me(o,l)||me(qs,l)||me(s.config.globalProperties,l)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:me(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let li=!0;function th(e){const t=Lu(e),n=e.proxy,o=e.ctx;li=!1,t.beforeCreate&&Gl(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:l,watch:a,provide:c,inject:u,created:p,beforeMount:f,mounted:d,beforeUpdate:h,updated:m,activated:b,deactivated:_,beforeDestroy:C,beforeUnmount:A,destroyed:E,unmounted:O,render:F,renderTracked:I,renderTriggered:j,errorCaptured:X,serverPrefetch:ie,expose:fe,inheritAttrs:ge,components:Te,directives:Fe,filters:Ye}=t;if(u&&nh(u,o,null,e.appContext.config.unwrapInjectedRef),l)for(const se in l){const Z=l[se];ae(Z)&&(o[se]=Z.bind(n))}if(s){const se=s.call(n,n);Ve(se)&&(e.data=Me(se))}if(li=!0,i)for(const se in i){const Z=i[se],he=ae(Z)?Z.bind(n,n):ae(Z.get)?Z.get.bind(n,n):Dt,Vt=!ae(Z)&&ae(Z.set)?Z.set.bind(n):Dt,Ze=S({get:he,set:Vt});Object.defineProperty(o,se,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:bt=>Ze.value=bt})}if(a)for(const se in a)Iu(a[se],o,n,se);if(c){const se=ae(c)?c.call(n):c;Reflect.ownKeys(se).forEach(Z=>{ft(Z,se[Z])})}p&&Gl(p,e,"c");function J(se,Z){oe(Z)?Z.forEach(he=>se(he.bind(n))):Z&&se(Z.bind(n))}if(J(Pu,f),J(wo,d),J(Yf,h),J(Tu,m),J(zf,b),J(qf,_),J(Xf,X),J(Zf,I),J(Gf,j),J(hr,A),J(mr,O),J(Kf,ie),oe(fe))if(fe.length){const se=e.exposed||(e.exposed={});fe.forEach(Z=>{Object.defineProperty(se,Z,{get:()=>n[Z],set:he=>n[Z]=he})})}else e.exposed||(e.exposed={});F&&e.render===Dt&&(e.render=F),ge!=null&&(e.inheritAttrs=ge),Te&&(e.components=Te),Fe&&(e.directives=Fe)}function nh(e,t,n=Dt,o=!1){oe(e)&&(e=ai(e));for(const s in e){const i=e[s];let l;Ve(i)?"default"in i?l=q(i.from||s,i.default,!0):l=q(i.from||s):l=q(i),we(l)&&o?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>l.value,set:a=>l.value=a}):t[s]=l}}function Gl(e,t,n){It(oe(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function Iu(e,t,n,o){const s=o.includes(".")?Au(n,o):()=>n[o];if(De(e)){const i=t[e];ae(i)&&ce(s,i)}else if(ae(e))ce(s,e.bind(n));else if(Ve(e))if(oe(e))e.forEach(i=>Iu(i,t,n,o));else{const i=ae(e.handler)?e.handler.bind(n):t[e.handler];ae(i)&&ce(s,i,e)}}function Lu(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:l}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!o?c=t:(c={},s.length&&s.forEach(u=>Us(c,u,l,!0)),Us(c,t,l)),i.set(t,c),c}function Us(e,t,n,o=!1){const{mixins:s,extends:i}=t;i&&Us(e,i,n,!0),s&&s.forEach(l=>Us(e,l,n,!0));for(const l in t)if(!(o&&l==="expose")){const a=oh[l]||n&&n[l];e[l]=a?a(e[l],t[l]):t[l]}return e}const oh={data:Zl,props:Pn,emits:Pn,methods:Pn,computed:Pn,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:Pn,directives:Pn,watch:rh,provide:Zl,inject:sh};function Zl(e,t){return t?e?function(){return tt(ae(e)?e.call(this,this):e,ae(t)?t.call(this,this):t)}:t:e}function sh(e,t){return Pn(ai(e),ai(t))}function ai(e){if(oe(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Xe(e,t){return e?[...new Set([].concat(e,t))]:t}function Pn(e,t){return e?tt(tt(Object.create(null),e),t):t}function rh(e,t){if(!e)return t;if(!t)return e;const n=tt(Object.create(null),e);for(const o in t)n[o]=Xe(e[o],t[o]);return n}function ih(e,t,n,o=!1){const s={},i={};Vs(i,gr,1),e.propsDefaults=Object.create(null),Fu(e,t,s,i);for(const l in e.propsOptions[0])l in s||(s[l]=void 0);n?e.props=o?s:wf(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function lh(e,t,n,o){const{props:s,attrs:i,vnode:{patchFlag:l}}=e,a=be(s),[c]=e.propsOptions;let u=!1;if((o||l>0)&&!(l&16)){if(l&8){const p=e.vnode.dynamicProps;for(let f=0;f<p.length;f++){let d=p[f];if(pr(e.emitsOptions,d))continue;const h=t[d];if(c)if(me(i,d))h!==i[d]&&(i[d]=h,u=!0);else{const m=Kt(d);s[m]=ci(c,a,m,h,e,!1)}else h!==i[d]&&(i[d]=h,u=!0)}}}else{Fu(e,t,s,i)&&(u=!0);let p;for(const f in a)(!t||!me(t,f)&&((p=Un(f))===f||!me(t,p)))&&(c?n&&(n[f]!==void 0||n[p]!==void 0)&&(s[f]=ci(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!me(t,f)&&!0)&&(delete i[f],u=!0)}u&&tn(e,"set","$attrs")}function Fu(e,t,n,o){const[s,i]=e.propsOptions;let l=!1,a;if(t)for(let c in t){if(Rs(c))continue;const u=t[c];let p;s&&me(s,p=Kt(c))?!i||!i.includes(p)?n[p]=u:(a||(a={}))[p]=u:pr(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,l=!0)}if(i){const c=be(n),u=a||Se;for(let p=0;p<i.length;p++){const f=i[p];n[f]=ci(s,c,f,u[f],e,!me(u,f))}}return l}function ci(e,t,n,o,s,i){const l=e[n];if(l!=null){const a=me(l,"default");if(a&&o===void 0){const c=l.default;if(l.type!==Function&&ae(c)){const{propsDefaults:u}=s;n in u?o=u[n]:(mo(s),o=u[n]=c.call(null,t),jn())}else o=c}l[0]&&(i&&!a?o=!1:l[1]&&(o===""||o===Un(n))&&(o=!0))}return o}function Nu(e,t,n=!1){const o=t.propsCache,s=o.get(e);if(s)return s;const i=e.props,l={},a=[];let c=!1;if(!ae(e)){const p=f=>{c=!0;const[d,h]=Nu(f,t,!0);tt(l,d),h&&a.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!i&&!c)return o.set(e,io),io;if(oe(i))for(let p=0;p<i.length;p++){const f=Kt(i[p]);Xl(f)&&(l[f]=Se)}else if(i)for(const p in i){const f=Kt(p);if(Xl(f)){const d=i[p],h=l[f]=oe(d)||ae(d)?{type:d}:d;if(h){const m=ea(Boolean,h.type),b=ea(String,h.type);h[0]=m>-1,h[1]=b<0||m<b,(m>-1||me(h,"default"))&&a.push(f)}}}const u=[l,a];return o.set(e,u),u}function Xl(e){return e[0]!=="$"}function Jl(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ql(e,t){return Jl(e)===Jl(t)}function ea(e,t){return oe(t)?t.findIndex(n=>Ql(n,e)):ae(t)&&Ql(t,e)?0:-1}const Bu=e=>e[0]==="_"||e==="$stable",rl=e=>oe(e)?e.map(zt):[zt(e)],ah=(e,t,n)=>{if(t._n)return t;const o=ee((...s)=>rl(t(...s)),n);return o._c=!1,o},ju=(e,t,n)=>{const o=e._ctx;for(const s in e){if(Bu(s))continue;const i=e[s];if(ae(i))t[s]=ah(s,i,o);else if(i!=null){const l=rl(i);t[s]=()=>l}}},Wu=(e,t)=>{const n=rl(t);e.slots.default=()=>n},ch=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=be(t),Vs(t,"_",n)):ju(t,e.slots={})}else e.slots={},t&&Wu(e,t);Vs(e.slots,gr,1)},uh=(e,t,n)=>{const{vnode:o,slots:s}=e;let i=!0,l=Se;if(o.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(tt(s,t),!n&&a===1&&delete s._):(i=!t.$stable,ju(t,s)),l=t}else t&&(Wu(e,t),l={default:1});if(i)for(const a in s)!Bu(a)&&!(a in l)&&delete s[a]};function Vu(){return{app:null,config:{isNativeTag:jd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ph=0;function dh(e,t){return function(o,s=null){ae(o)||(o=Object.assign({},o)),s!=null&&!Ve(s)&&(s=null);const i=Vu(),l=new Set;let a=!1;const c=i.app={_uid:ph++,_component:o,_props:s,_container:null,_context:i,_instance:null,version:Ph,get config(){return i.config},set config(u){},use(u,...p){return l.has(u)||(u&&ae(u.install)?(l.add(u),u.install(c,...p)):ae(u)&&(l.add(u),u(c,...p))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,p){return p?(i.components[u]=p,c):i.components[u]},directive(u,p){return p?(i.directives[u]=p,c):i.directives[u]},mount(u,p,f){if(!a){const d=W(o,s);return d.appContext=i,p&&t?t(d,u):e(d,u,f),a=!0,c._container=u,u.__vue_app__=c,yr(d.component)||d.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,p){return i.provides[u]=p,c}};return c}}function ui(e,t,n,o,s=!1){if(oe(e)){e.forEach((d,h)=>ui(d,t&&(oe(t)?t[h]:t),n,o,s));return}if(uo(o)&&!s)return;const i=o.shapeFlag&4?yr(o.component)||o.component.proxy:o.el,l=s?null:i,{i:a,r:c}=e,u=t&&t.r,p=a.refs===Se?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==c&&(De(u)?(p[u]=null,me(f,u)&&(f[u]=null)):we(u)&&(u.value=null)),ae(c))hn(c,a,12,[l,p]);else{const d=De(c),h=we(c);if(d||h){const m=()=>{if(e.f){const b=d?p[c]:c.value;s?oe(b)&&qi(b,i):oe(b)?b.includes(i)||b.push(i):d?(p[c]=[i],me(f,c)&&(f[c]=p[c])):(c.value=[i],e.k&&(p[e.k]=c.value))}else d?(p[c]=l,me(f,c)&&(f[c]=l)):h&&(c.value=l,e.k&&(p[e.k]=l))};l?(m.id=-1,ze(m,n)):m()}}}const ze=Wf;function fh(e){return hh(e)}function hh(e,t){const n=Ud();n.__VUE__=!0;const{insert:o,remove:s,patchProp:i,createElement:l,createText:a,createComment:c,setText:u,setElementText:p,parentNode:f,nextSibling:d,setScopeId:h=Dt,cloneNode:m,insertStaticContent:b}=e,_=(g,y,x,T=null,P=null,N=null,H=!1,L=null,B=!!y.dynamicChildren)=>{if(g===y)return;g&&!So(g,y)&&(T=U(g),st(g,P,N,!0),g=null),y.patchFlag===-2&&(B=!1,y.dynamicChildren=null);const{type:M,ref:K,shapeFlag:Y}=y;switch(M){case ll:C(g,y,x,T);break;case _n:A(g,y,x,T);break;case Pr:g==null&&E(y,x,T,H);break;case ke:Fe(g,y,x,T,P,N,H,L,B);break;default:Y&1?I(g,y,x,T,P,N,H,L,B):Y&6?Ye(g,y,x,T,P,N,H,L,B):(Y&64||Y&128)&&M.process(g,y,x,T,P,N,H,L,B,$e)}K!=null&&P&&ui(K,g&&g.ref,N,y||g,!y)},C=(g,y,x,T)=>{if(g==null)o(y.el=a(y.children),x,T);else{const P=y.el=g.el;y.children!==g.children&&u(P,y.children)}},A=(g,y,x,T)=>{g==null?o(y.el=c(y.children||""),x,T):y.el=g.el},E=(g,y,x,T)=>{[g.el,g.anchor]=b(g.children,y,x,T,g.el,g.anchor)},O=({el:g,anchor:y},x,T)=>{let P;for(;g&&g!==y;)P=d(g),o(g,x,T),g=P;o(y,x,T)},F=({el:g,anchor:y})=>{let x;for(;g&&g!==y;)x=d(g),s(g),g=x;s(y)},I=(g,y,x,T,P,N,H,L,B)=>{H=H||y.type==="svg",g==null?j(y,x,T,P,N,H,L,B):fe(g,y,P,N,H,L,B)},j=(g,y,x,T,P,N,H,L)=>{let B,M;const{type:K,props:Y,shapeFlag:G,transition:re,patchFlag:ye,dirs:Ae}=g;if(g.el&&m!==void 0&&ye===-1)B=g.el=m(g.el);else{if(B=g.el=l(g.type,N,Y&&Y.is,Y),G&8?p(B,g.children):G&16&&ie(g.children,B,null,T,P,N&&K!=="foreignObject",H,L),Ae&&Cn(g,null,T,"created"),Y){for(const Pe in Y)Pe!=="value"&&!Rs(Pe)&&i(B,Pe,null,Y[Pe],N,g.children,T,P,D);"value"in Y&&i(B,"value",null,Y.value),(M=Y.onVnodeBeforeMount)&&wt(M,T,g)}X(B,g,g.scopeId,H,T)}Ae&&Cn(g,null,T,"beforeMount");const Ce=(!P||P&&!P.pendingBranch)&&re&&!re.persisted;Ce&&re.beforeEnter(B),o(B,y,x),((M=Y&&Y.onVnodeMounted)||Ce||Ae)&&ze(()=>{M&&wt(M,T,g),Ce&&re.enter(B),Ae&&Cn(g,null,T,"mounted")},P)},X=(g,y,x,T,P)=>{if(x&&h(g,x),T)for(let N=0;N<T.length;N++)h(g,T[N]);if(P){let N=P.subTree;if(y===N){const H=P.vnode;X(g,H,H.scopeId,H.slotScopeIds,P.parent)}}},ie=(g,y,x,T,P,N,H,L,B=0)=>{for(let M=B;M<g.length;M++){const K=g[M]=L?cn(g[M]):zt(g[M]);_(null,K,y,x,T,P,N,H,L)}},fe=(g,y,x,T,P,N,H)=>{const L=y.el=g.el;let{patchFlag:B,dynamicChildren:M,dirs:K}=y;B|=g.patchFlag&16;const Y=g.props||Se,G=y.props||Se;let re;x&&On(x,!1),(re=G.onVnodeBeforeUpdate)&&wt(re,x,y,g),K&&Cn(y,g,x,"beforeUpdate"),x&&On(x,!0);const ye=P&&y.type!=="foreignObject";if(M?ge(g.dynamicChildren,M,L,x,T,ye,N):H||he(g,y,L,null,x,T,ye,N,!1),B>0){if(B&16)Te(L,y,Y,G,x,T,P);else if(B&2&&Y.class!==G.class&&i(L,"class",null,G.class,P),B&4&&i(L,"style",Y.style,G.style,P),B&8){const Ae=y.dynamicProps;for(let Ce=0;Ce<Ae.length;Ce++){const Pe=Ae[Ce],$t=Y[Pe],Zn=G[Pe];(Zn!==$t||Pe==="value")&&i(L,Pe,$t,Zn,P,g.children,x,T,D)}}B&1&&g.children!==y.children&&p(L,y.children)}else!H&&M==null&&Te(L,y,Y,G,x,T,P);((re=G.onVnodeUpdated)||K)&&ze(()=>{re&&wt(re,x,y,g),K&&Cn(y,g,x,"updated")},T)},ge=(g,y,x,T,P,N,H)=>{for(let L=0;L<y.length;L++){const B=g[L],M=y[L],K=B.el&&(B.type===ke||!So(B,M)||B.shapeFlag&70)?f(B.el):x;_(B,M,K,null,T,P,N,H,!0)}},Te=(g,y,x,T,P,N,H)=>{if(x!==T){for(const L in T){if(Rs(L))continue;const B=T[L],M=x[L];B!==M&&L!=="value"&&i(g,L,M,B,H,y.children,P,N,D)}if(x!==Se)for(const L in x)!Rs(L)&&!(L in T)&&i(g,L,x[L],null,H,y.children,P,N,D);"value"in T&&i(g,"value",x.value,T.value)}},Fe=(g,y,x,T,P,N,H,L,B)=>{const M=y.el=g?g.el:a(""),K=y.anchor=g?g.anchor:a("");let{patchFlag:Y,dynamicChildren:G,slotScopeIds:re}=y;re&&(L=L?L.concat(re):re),g==null?(o(M,x,T),o(K,x,T),ie(y.children,x,K,P,N,H,L,B)):Y>0&&Y&64&&G&&g.dynamicChildren?(ge(g.dynamicChildren,G,x,P,N,H,L),(y.key!=null||P&&y===P.subTree)&&il(g,y,!0)):he(g,y,x,K,P,N,H,L,B)},Ye=(g,y,x,T,P,N,H,L,B)=>{y.slotScopeIds=L,g==null?y.shapeFlag&512?P.ctx.activate(y,x,T,H,B):Ee(y,x,T,P,N,H,B):J(g,y,B)},Ee=(g,y,x,T,P,N,H)=>{const L=g.component=Eh(g,T,P);if(Ou(g)&&(L.ctx.renderer=$e),Ah(L),L.asyncDep){if(P&&P.registerDep(L,se),!g.el){const B=L.subTree=W(_n);A(null,B,y,x)}return}se(L,g,y,x,P,N,H)},J=(g,y,x)=>{const T=y.component=g.component;if(Bf(g,y,x))if(T.asyncDep&&!T.asyncResolved){Z(T,y,x);return}else T.next=y,Rf(T.update),T.update();else y.el=g.el,T.vnode=y},se=(g,y,x,T,P,N,H)=>{const L=()=>{if(g.isMounted){let{next:K,bu:Y,u:G,parent:re,vnode:ye}=g,Ae=K,Ce;On(g,!1),K?(K.el=ye.el,Z(g,K,H)):K=ye,Y&&ao(Y),(Ce=K.props&&K.props.onVnodeBeforeUpdate)&&wt(Ce,re,K,ye),On(g,!0);const Pe=Or(g),$t=g.subTree;g.subTree=Pe,_($t,Pe,f($t.el),U($t),g,P,N),K.el=Pe.el,Ae===null&&jf(g,Pe.el),G&&ze(G,P),(Ce=K.props&&K.props.onVnodeUpdated)&&ze(()=>wt(Ce,re,K,ye),P)}else{let K;const{el:Y,props:G}=y,{bm:re,m:ye,parent:Ae}=g,Ce=uo(y);if(On(g,!1),re&&ao(re),!Ce&&(K=G&&G.onVnodeBeforeMount)&&wt(K,Ae,y),On(g,!0),Y&&ue){const Pe=()=>{g.subTree=Or(g),ue(Y,g.subTree,g,P,null)};Ce?y.type.__asyncLoader().then(()=>!g.isUnmounted&&Pe()):Pe()}else{const Pe=g.subTree=Or(g);_(null,Pe,x,T,g,P,N),y.el=Pe.el}if(ye&&ze(ye,P),!Ce&&(K=G&&G.onVnodeMounted)){const Pe=y;ze(()=>wt(K,Ae,Pe),P)}(y.shapeFlag&256||Ae&&uo(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&g.a&&ze(g.a,P),g.isMounted=!0,y=x=T=null}},B=g.effect=new Gi(L,()=>vu(M),g.scope),M=g.update=()=>B.run();M.id=g.uid,On(g,!0),M()},Z=(g,y,x)=>{y.component=g;const T=g.vnode.props;g.vnode=y,g.next=null,lh(g,y.props,T,x),uh(g,y.children,x),_o(),ur(void 0,g.update),bo()},he=(g,y,x,T,P,N,H,L,B=!1)=>{const M=g&&g.children,K=g?g.shapeFlag:0,Y=y.children,{patchFlag:G,shapeFlag:re}=y;if(G>0){if(G&128){Ze(M,Y,x,T,P,N,H,L,B);return}else if(G&256){Vt(M,Y,x,T,P,N,H,L,B);return}}re&8?(K&16&&D(M,P,N),Y!==M&&p(x,Y)):K&16?re&16?Ze(M,Y,x,T,P,N,H,L,B):D(M,P,N,!0):(K&8&&p(x,""),re&16&&ie(Y,x,T,P,N,H,L,B))},Vt=(g,y,x,T,P,N,H,L,B)=>{g=g||io,y=y||io;const M=g.length,K=y.length,Y=Math.min(M,K);let G;for(G=0;G<Y;G++){const re=y[G]=B?cn(y[G]):zt(y[G]);_(g[G],re,x,null,P,N,H,L,B)}M>K?D(g,P,N,!0,!1,Y):ie(y,x,T,P,N,H,L,B,Y)},Ze=(g,y,x,T,P,N,H,L,B)=>{let M=0;const K=y.length;let Y=g.length-1,G=K-1;for(;M<=Y&&M<=G;){const re=g[M],ye=y[M]=B?cn(y[M]):zt(y[M]);if(So(re,ye))_(re,ye,x,null,P,N,H,L,B);else break;M++}for(;M<=Y&&M<=G;){const re=g[Y],ye=y[G]=B?cn(y[G]):zt(y[G]);if(So(re,ye))_(re,ye,x,null,P,N,H,L,B);else break;Y--,G--}if(M>Y){if(M<=G){const re=G+1,ye=re<K?y[re].el:T;for(;M<=G;)_(null,y[M]=B?cn(y[M]):zt(y[M]),x,ye,P,N,H,L,B),M++}}else if(M>G)for(;M<=Y;)st(g[M],P,N,!0),M++;else{const re=M,ye=M,Ae=new Map;for(M=ye;M<=G;M++){const at=y[M]=B?cn(y[M]):zt(y[M]);at.key!=null&&Ae.set(at.key,M)}let Ce,Pe=0;const $t=G-ye+1;let Zn=!1,Il=0;const Oo=new Array($t);for(M=0;M<$t;M++)Oo[M]=0;for(M=re;M<=Y;M++){const at=g[M];if(Pe>=$t){st(at,P,N,!0);continue}let Ht;if(at.key!=null)Ht=Ae.get(at.key);else for(Ce=ye;Ce<=G;Ce++)if(Oo[Ce-ye]===0&&So(at,y[Ce])){Ht=Ce;break}Ht===void 0?st(at,P,N,!0):(Oo[Ht-ye]=M+1,Ht>=Il?Il=Ht:Zn=!0,_(at,y[Ht],x,null,P,N,H,L,B),Pe++)}const Ll=Zn?mh(Oo):io;for(Ce=Ll.length-1,M=$t-1;M>=0;M--){const at=ye+M,Ht=y[at],Fl=at+1<K?y[at+1].el:T;Oo[M]===0?_(null,Ht,x,Fl,P,N,H,L,B):Zn&&(Ce<0||M!==Ll[Ce]?bt(Ht,x,Fl,2):Ce--)}}},bt=(g,y,x,T,P=null)=>{const{el:N,type:H,transition:L,children:B,shapeFlag:M}=g;if(M&6){bt(g.component.subTree,y,x,T);return}if(M&128){g.suspense.move(y,x,T);return}if(M&64){H.move(g,y,x,$e);return}if(H===ke){o(N,y,x);for(let Y=0;Y<B.length;Y++)bt(B[Y],y,x,T);o(g.anchor,y,x);return}if(H===Pr){O(g,y,x);return}if(T!==2&&M&1&&L)if(T===0)L.beforeEnter(N),o(N,y,x),ze(()=>L.enter(N),P);else{const{leave:Y,delayLeave:G,afterLeave:re}=L,ye=()=>o(N,y,x),Ae=()=>{Y(N,()=>{ye(),re&&re()})};G?G(N,ye,Ae):Ae()}else o(N,y,x)},st=(g,y,x,T=!1,P=!1)=>{const{type:N,props:H,ref:L,children:B,dynamicChildren:M,shapeFlag:K,patchFlag:Y,dirs:G}=g;if(L!=null&&ui(L,null,x,g,!0),K&256){y.ctx.deactivate(g);return}const re=K&1&&G,ye=!uo(g);let Ae;if(ye&&(Ae=H&&H.onVnodeBeforeUnmount)&&wt(Ae,y,g),K&6)z(g.component,x,T);else{if(K&128){g.suspense.unmount(x,T);return}re&&Cn(g,null,y,"beforeUnmount"),K&64?g.type.remove(g,y,x,P,$e,T):M&&(N!==ke||Y>0&&Y&64)?D(M,y,x,!1,!0):(N===ke&&Y&384||!P&&K&16)&&D(B,y,x),T&&sn(g)}(ye&&(Ae=H&&H.onVnodeUnmounted)||re)&&ze(()=>{Ae&&wt(Ae,y,g),re&&Cn(g,null,y,"unmounted")},x)},sn=g=>{const{type:y,el:x,anchor:T,transition:P}=g;if(y===ke){$(x,T);return}if(y===Pr){F(g);return}const N=()=>{s(x),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(g.shapeFlag&1&&P&&!P.persisted){const{leave:H,delayLeave:L}=P,B=()=>H(x,N);L?L(g.el,N,B):B()}else N()},$=(g,y)=>{let x;for(;g!==y;)x=d(g),s(g),g=x;s(y)},z=(g,y,x)=>{const{bum:T,scope:P,update:N,subTree:H,um:L}=g;T&&ao(T),P.stop(),N&&(N.active=!1,st(H,g,y,x)),L&&ze(L,y),ze(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},D=(g,y,x,T=!1,P=!1,N=0)=>{for(let H=N;H<g.length;H++)st(g[H],y,x,T,P)},U=g=>g.shapeFlag&6?U(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),ve=(g,y,x)=>{g==null?y._vnode&&st(y._vnode,null,null,!0):_(y._vnode||null,g,y,null,null,null,x),wu(),y._vnode=g},$e={p:_,um:st,m:bt,r:sn,mt:Ee,mc:ie,pc:he,pbc:ge,n:U,o:e};let pe,ue;return t&&([pe,ue]=t($e)),{render:ve,hydrate:pe,createApp:dh(ve,pe)}}function On({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function il(e,t,n=!1){const o=e.children,s=t.children;if(oe(o)&&oe(s))for(let i=0;i<o.length;i++){const l=o[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=cn(s[i]),a.el=l.el),n||il(l,a))}}function mh(e){const t=e.slice(),n=[0];let o,s,i,l,a;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(s=n[n.length-1],e[s]<u){t[o]=s,n.push(o);continue}for(i=0,l=n.length-1;i<l;)a=i+l>>1,e[n[a]]<u?i=a+1:l=a;u<e[n[i]]&&(i>0&&(t[o]=n[i-1]),n[i]=o)}}for(i=n.length,l=n[i-1];i-- >0;)n[i]=l,l=t[l];return n}const gh=e=>e.__isTeleport,Wo=e=>e&&(e.disabled||e.disabled===""),ta=e=>typeof SVGElement<"u"&&e instanceof SVGElement,pi=(e,t)=>{const n=e&&e.to;return De(n)?t?t(n):null:n},yh={__isTeleport:!0,process(e,t,n,o,s,i,l,a,c,u){const{mc:p,pc:f,pbc:d,o:{insert:h,querySelector:m,createText:b,createComment:_}}=u,C=Wo(t.props);let{shapeFlag:A,children:E,dynamicChildren:O}=t;if(e==null){const F=t.el=b(""),I=t.anchor=b("");h(F,n,o),h(I,n,o);const j=t.target=pi(t.props,m),X=t.targetAnchor=b("");j&&(h(X,j),l=l||ta(j));const ie=(fe,ge)=>{A&16&&p(E,fe,ge,s,i,l,a,c)};C?ie(n,I):j&&ie(j,X)}else{t.el=e.el;const F=t.anchor=e.anchor,I=t.target=e.target,j=t.targetAnchor=e.targetAnchor,X=Wo(e.props),ie=X?n:I,fe=X?F:j;if(l=l||ta(I),O?(d(e.dynamicChildren,O,ie,s,i,l,a),il(e,t,!0)):c||f(e,t,ie,fe,s,i,l,a,!1),C)X||Ss(t,n,F,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ge=t.target=pi(t.props,m);ge&&Ss(t,ge,null,u,0)}else X&&Ss(t,I,j,u,1)}},remove(e,t,n,o,{um:s,o:{remove:i}},l){const{shapeFlag:a,children:c,anchor:u,targetAnchor:p,target:f,props:d}=e;if(f&&i(p),(l||!Wo(d))&&(i(u),a&16))for(let h=0;h<c.length;h++){const m=c[h];s(m,t,n,!0,!!m.dynamicChildren)}},move:Ss,hydrate:vh};function Ss(e,t,n,{o:{insert:o},m:s},i=2){i===0&&o(e.targetAnchor,t,n);const{el:l,anchor:a,shapeFlag:c,children:u,props:p}=e,f=i===2;if(f&&o(l,t,n),(!f||Wo(p))&&c&16)for(let d=0;d<u.length;d++)s(u[d],t,n,2);f&&o(a,t,n)}function vh(e,t,n,o,s,i,{o:{nextSibling:l,parentNode:a,querySelector:c}},u){const p=t.target=pi(t.props,c);if(p){const f=p._lpa||p.firstChild;if(t.shapeFlag&16)if(Wo(t.props))t.anchor=u(l(e),t,a(e),n,o,s,i),t.targetAnchor=f;else{t.anchor=l(e);let d=f;for(;d;)if(d=l(d),d&&d.nodeType===8&&d.data==="teleport anchor"){t.targetAnchor=d,p._lpa=t.targetAnchor&&l(t.targetAnchor);break}u(f,t,p,n,o,s,i)}}return t.anchor&&l(t.anchor)}const _h=yh,ke=Symbol(void 0),ll=Symbol(void 0),_n=Symbol(void 0),Pr=Symbol(void 0),Vo=[];let Rt=null;function k(e=!1){Vo.push(Rt=e?null:[])}function bh(){Vo.pop(),Rt=Vo[Vo.length-1]||null}let ss=1;function na(e){ss+=e}function Hu(e){return e.dynamicChildren=ss>0?Rt||io:null,bh(),ss>0&&Rt&&Rt.push(e),e}function R(e,t,n,o,s,i){return Hu(r(e,t,n,o,s,i,!0))}function Q(e,t,n,o,s){return Hu(W(e,t,n,o,s,!0))}function zn(e){return e?e.__v_isVNode===!0:!1}function So(e,t){return e.type===t.type&&e.key===t.key}const gr="__vInternal",zu=({key:e})=>e!=null?e:null,Ds=({ref:e,ref_key:t,ref_for:n})=>e!=null?De(e)||we(e)||ae(e)?{i:Ke,r:e,k:t,f:!!n}:e:null;function r(e,t=null,n=null,o=0,s=null,i=e===ke?0:1,l=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zu(t),ref:t&&Ds(t),scopeId:dr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(al(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=De(n)?8:16),ss>0&&!l&&Rt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Rt.push(c),c}const W=wh;function wh(e,t=null,n=null,o=0,s=null,i=!1){if((!e||e===Qf)&&(e=_n),zn(e)){const a=qn(e,t,!0);return n&&al(a,n),ss>0&&!i&&Rt&&(a.shapeFlag&6?Rt[Rt.indexOf(e)]=a:Rt.push(a)),a.patchFlag|=-2,a}if($h(e)&&(e=e.__vccOpts),t){t=Ie(t);let{class:a,style:c}=t;a&&!De(a)&&(t.class=Re(a)),Ve(c)&&(hu(c)&&!oe(c)&&(c=tt({},c)),t.style=Ue(c))}const l=De(e)?1:Eu(e)?128:gh(e)?64:Ve(e)?4:ae(e)?2:0;return r(e,t,n,o,s,l,i,!0)}function Ie(e){return e?hu(e)||gr in e?tt({},e):e:null}function qn(e,t,n=!1){const{props:o,ref:s,patchFlag:i,children:l}=e,a=t?Lt(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&zu(a),ref:t&&t.ref?n&&s?oe(s)?s.concat(Ds(t)):[s,Ds(t)]:Ds(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ke?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qn(e.ssContent),ssFallback:e.ssFallback&&qn(e.ssFallback),el:e.el,anchor:e.anchor}}function v(e=" ",t=0){return W(ll,null,e,t)}function ne(e="",t=!1){return t?(k(),Q(_n,null,e)):W(_n,null,e)}function zt(e){return e==null||typeof e=="boolean"?W(_n):oe(e)?W(ke,null,e.slice()):typeof e=="object"?cn(e):W(ll,null,String(e))}function cn(e){return e.el===null||e.memo?e:qn(e)}function al(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(oe(t))n=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),al(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(gr in t)?t._ctx=Ke:s===3&&Ke&&(Ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ae(t)?(t={default:t,_ctx:Ke},n=32):(t=String(t),o&64?(n=16,t=[v(t)]):n=8);e.children=t,e.shapeFlag|=n}function Lt(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=Re([t.class,o.class]));else if(s==="style")t.style=Ue([t.style,o.style]);else if(or(s)){const i=t[s],l=o[s];l&&i!==l&&!(oe(i)&&i.includes(l))&&(t[s]=i?[].concat(i,l):l)}else s!==""&&(t[s]=o[s])}return t}function wt(e,t,n,o=null){It(e,t,7,[n,o])}const kh=Vu();let xh=0;function Eh(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||kh,i={uid:xh++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new tu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nu(o,s),emitsOptions:xu(o,s),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:o.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Lf.bind(null,i),e.ce&&e.ce(i),i}let He=null;const Yn=()=>He||Ke,mo=e=>{He=e,e.scope.on()},jn=()=>{He&&He.scope.off(),He=null};function qu(e){return e.vnode.shapeFlag&4}let rs=!1;function Ah(e,t=!1){rs=t;const{props:n,children:o}=e.vnode,s=qu(e);ih(e,n,s,t),ch(e,o);const i=s?Ch(e,t):void 0;return rs=!1,i}function Ch(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ar(new Proxy(e.ctx,eh));const{setup:o}=n;if(o){const s=e.setupContext=o.length>1?Sh(e):null;mo(e),_o();const i=hn(o,e,0,[e.props,s]);if(bo(),jn(),Jc(i)){if(i.then(jn,jn),t)return i.then(l=>{oa(e,l,t)}).catch(l=>{cr(l,e,0)});e.asyncDep=i}else oa(e,i,t)}else Uu(e,t)}function oa(e,t,n){ae(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ve(t)&&(e.setupState=gu(t)),Uu(e,n)}let sa;function Uu(e,t,n){const o=e.type;if(!e.render){if(!t&&sa&&!o.render){const s=o.template;if(s){const{isCustomElement:i,compilerOptions:l}=e.appContext.config,{delimiters:a,compilerOptions:c}=o,u=tt(tt({isCustomElement:i,delimiters:a},l),c);o.render=sa(s,u)}}e.render=o.render||Dt}mo(e),_o(),th(e),bo(),jn()}function Oh(e){return new Proxy(e.attrs,{get(t,n){return yt(e,"get","$attrs"),t[n]}})}function Sh(e){const t=o=>{e.exposed=o||{}};let n;return{get attrs(){return n||(n=Oh(e))},slots:e.slots,emit:e.emit,expose:t}}function yr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(gu(ar(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in qs)return qs[n](e)}}))}function di(e,t=!0){return ae(e)?e.displayName||e.name:e.name||t&&e.__name}function $h(e){return ae(e)&&"__vccOpts"in e}const S=(e,t)=>Pf(e,t,rs);function lt(e,t,n){const o=arguments.length;return o===2?Ve(t)&&!oe(t)?zn(t)?W(e,null,[t]):W(e,t):W(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&zn(n)&&(n=[n]),W(e,t,n))}const Ph="3.2.37",Th="http://www.w3.org/2000/svg",Mn=typeof document<"u"?document:null,ra=Mn&&Mn.createElement("template"),Mh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t?Mn.createElementNS(Th,e):Mn.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>Mn.createTextNode(e),createComment:e=>Mn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Mn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,o,s,i){const l=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ra.innerHTML=o?`<svg>${e}</svg>`:e;const a=ra.content;if(o){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Rh(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Dh(e,t,n){const o=e.style,s=De(n);if(n&&!s){for(const i in n)fi(o,i,n[i]);if(t&&!De(t))for(const i in t)n[i]==null&&fi(o,i,"")}else{const i=o.display;s?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=i)}}const ia=/\s*!important$/;function fi(e,t,n){if(oe(n))n.forEach(o=>fi(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Ih(e,t);ia.test(n)?e.setProperty(Un(o),n.replace(ia,""),"important"):e[o]=n}}const la=["Webkit","Moz","ms"],Tr={};function Ih(e,t){const n=Tr[t];if(n)return n;let o=Kt(t);if(o!=="filter"&&o in e)return Tr[t]=o;o=ir(o);for(let s=0;s<la.length;s++){const i=la[s]+o;if(i in e)return Tr[t]=i}return t}const aa="http://www.w3.org/1999/xlink";function Lh(e,t,n,o,s){if(o&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(aa,t.slice(6,t.length)):e.setAttributeNS(aa,t,n);else{const i=Ld(t);n==null||i&&!Gc(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Fh(e,t,n,o,s,i,l){if(t==="innerHTML"||t==="textContent"){o&&l(o,s,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Gc(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}const[Yu,Nh]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let hi=0;const Bh=Promise.resolve(),jh=()=>{hi=0},Wh=()=>hi||(Bh.then(jh),hi=Yu());function no(e,t,n,o){e.addEventListener(t,n,o)}function Vh(e,t,n,o){e.removeEventListener(t,n,o)}function Hh(e,t,n,o,s=null){const i=e._vei||(e._vei={}),l=i[t];if(o&&l)l.value=o;else{const[a,c]=zh(t);if(o){const u=i[t]=qh(o,s);no(e,a,u,c)}else l&&(Vh(e,a,l,c),i[t]=void 0)}}const ca=/(?:Once|Passive|Capture)$/;function zh(e){let t;if(ca.test(e)){t={};let n;for(;n=e.match(ca);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Un(e.slice(2)),t]}function qh(e,t){const n=o=>{const s=o.timeStamp||Yu();(Nh||s>=n.attached-1)&&It(Uh(o,n.value),t,5,[o])};return n.value=e,n.attached=Wh(),n}function Uh(e,t){if(oe(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>s=>!s._stopped&&o&&o(s))}else return t}const ua=/^on[a-z]/,Yh=(e,t,n,o,s=!1,i,l,a,c)=>{t==="class"?Rh(e,o,s):t==="style"?Dh(e,n,o):or(t)?zi(t)||Hh(e,t,n,o,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Kh(e,t,o,s))?Fh(e,t,o,i,l,a,c):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Lh(e,t,o,s))};function Kh(e,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&ua.test(t)&&ae(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ua.test(t)&&De(n)?!1:t in e}const pa=e=>{const t=e.props["onUpdate:modelValue"]||!1;return oe(t)?n=>ao(t,n):t};function Gh(e){e.target.composing=!0}function da(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Zh={created(e,{modifiers:{lazy:t,trim:n,number:o}},s){e._assign=pa(s);const i=o||s.props&&s.props.type==="number";no(e,t?"change":"input",l=>{if(l.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=Jr(a)),e._assign(a)}),n&&no(e,"change",()=>{e.value=e.value.trim()}),t||(no(e,"compositionstart",Gh),no(e,"compositionend",da),no(e,"change",da))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:s}},i){if(e._assign=pa(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||o&&e.value.trim()===t||(s||e.type==="number")&&Jr(e.value)===t))return;const l=t==null?"":t;e.value!==l&&(e.value=l)}},Xh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},fa=(e,t)=>n=>{if(!("key"in n))return;const o=Un(n.key);if(t.some(s=>s===o||Xh[s]===o))return e(n)},Ku={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):$o(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),$o(e,!0),o.enter(e)):o.leave(e,()=>{$o(e,!1)}):$o(e,t))},beforeUnmount(e,{value:t}){$o(e,t)}};function $o(e,t){e.style.display=t?e._vod:"none"}const Jh=tt({patchProp:Yh},Mh);let ha;function Qh(){return ha||(ha=fh(Jh))}const em=(...e)=>{const t=Qh().createApp(...e),{mount:n}=t;return t.mount=o=>{const s=tm(o);if(!s)return;const i=t._component;!ae(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const l=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),l},t};function tm(e){return De(e)?document.querySelector(e):e}var nm=Object.defineProperty,ma=Object.getOwnPropertySymbols,om=Object.prototype.hasOwnProperty,sm=Object.prototype.propertyIsEnumerable,ga=(e,t,n)=>t in e?nm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,rm=(e,t)=>{for(var n in t||(t={}))om.call(t,n)&&ga(e,n,t[n]);if(ma)for(var n of ma(t))sm.call(t,n)&&ga(e,n,t[n]);return e},Gu="usehead",ya="head:count",Mr="data-head-attrs",Zu="data-meta-body",im=(e,t,n)=>{const o=n.createElement(e);for(const s of Object.keys(t))if(s==="body"&&t.body===!0)o.setAttribute(Zu,"true");else{let i=t[s];if(s==="key"||i===!1)continue;s==="children"?o.textContent=i:o.setAttribute(s,i)}return o};function va(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){const o=t.cloneNode(!0);return o.setAttribute("nonce",""),o.nonce=n,n===e.nonce&&e.isEqualNode(o)}}return e.isEqualNode(t)}var lm=e=>{const t=["key","id","name","property"];for(const n of t){const o=typeof e.getAttribute=="function"?e.hasAttribute(n)?e.getAttribute(n):void 0:e[n];if(o!==void 0)return{name:n,value:o}}},am=()=>{const e=q(Gu);if(!e)throw new Error("You may forget to apply app.use(head)");return e},cm=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],um=(e,t)=>e==null?"":typeof e=="string"?e.replace("%s",t!=null?t:""):e(w(t)),pm=e=>{const t=[],n=Object.keys(e);for(const o of n)if(e[o]!=null)switch(o){case"title":t.push({tag:o,props:{children:e[o]}});break;case"titleTemplate":break;case"base":t.push({tag:o,props:rm({key:"default"},e[o])});break;default:if(cm.includes(o)){const s=e[o];Array.isArray(s)?s.forEach(i=>{t.push({tag:o,props:i})}):s&&t.push({tag:o,props:s})}break}return t},_a=(e,t)=>{const n=e.getAttribute(Mr);if(n)for(const s of n.split(","))s in t||e.removeAttribute(s);const o=[];for(const s in t){const i=t[s];i!=null&&(i===!1?e.removeAttribute(s):e.setAttribute(s,i),o.push(s))}o.length?e.setAttribute(Mr,o.join(",")):e.removeAttribute(Mr)},dm=(e=window.document,t,n)=>{var o,s;const i=e.head,l=e.body;let a=i.querySelector(`meta[name="${ya}"]`),c=l.querySelectorAll(`[${Zu}]`);const u=a?Number(a.getAttribute("content")):0,p=[],f=[];if(c)for(let h=0;h<c.length;h++)c[h]&&((o=c[h].tagName)==null?void 0:o.toLowerCase())===t&&f.push(c[h]);if(a)for(let h=0,m=a.previousElementSibling;h<u;h++,m=(m==null?void 0:m.previousElementSibling)||null)((s=m==null?void 0:m.tagName)==null?void 0:s.toLowerCase())===t&&p.push(m);else a=e.createElement("meta"),a.setAttribute("name",ya),a.setAttribute("content","0"),i.append(a);let d=n.map(h=>{var m;return{element:im(h.tag,h.props,e),body:(m=h.props.body)!=null?m:!1}});d=d.filter(h=>{for(let m=0;m<p.length;m++){const b=p[m];if(va(b,h.element))return p.splice(m,1),!1}for(let m=0;m<f.length;m++){const b=f[m];if(va(b,h.element))return f.splice(m,1),!1}return!0}),f.forEach(h=>{var m;return(m=h.parentNode)==null?void 0:m.removeChild(h)}),p.forEach(h=>{var m;return(m=h.parentNode)==null?void 0:m.removeChild(h)}),d.forEach(h=>{h.body===!0?l.insertAdjacentElement("beforeend",h.element):i.insertBefore(h.element,a)}),a.setAttribute("content",""+(u-p.length+d.filter(h=>!h.body).length))},fm=e=>{let t=[],n=new Set;e&&t.push(Nt(e));const o={install(s){s.config.globalProperties.$head=o,s.provide(Gu,o)},get headTags(){const s=[],i=t.map(l=>w(l).titleTemplate).reverse().find(l=>l!=null);return t.forEach(l=>{pm(w(l)).forEach(c=>{if(c.tag==="meta"||c.tag==="base"||c.tag==="script"){const u=lm(c.props);if(u){let p=-1;for(let f=0;f<s.length;f++){const d=s[f],h=d.props[u.name],m=c.props[u.name];if(d.tag===c.tag&&h===m){p=f;break}}p!==-1&&s.splice(p,1)}}i&&c.tag==="title"&&(c.props.children=um(i,c.props.children)),s.push(c)})}),s},addHeadObjs(s){t.push(s)},removeHeadObjs(s){t=t.filter(i=>i!==s)},updateDOM(s=window.document){let i,l={},a={};const c={};for(const p of o.headTags){if(p.tag==="title"){i=p.props.children;continue}if(p.tag==="htmlAttrs"){Object.assign(l,p.props);continue}if(p.tag==="bodyAttrs"){Object.assign(a,p.props);continue}c[p.tag]=c[p.tag]||[],c[p.tag].push(p)}i!==void 0&&(s.title=i),_a(s.documentElement,l),_a(s.body,a);const u=new Set([...Object.keys(c),...n]);for(const p of u)dm(s,p,c[p]||[]);n.clear(),Object.keys(c).forEach(p=>n.add(p))}};return o},hm=typeof window<"u",mm=e=>{const t=am(),n=V(e);t.addHeadObjs(n),hm&&(hs(()=>{t.updateDOM()}),hr(()=>{t.removeHeadObjs(n),t.updateDOM()}))};const Ho=Symbol("v-click-clicks"),Rn=Symbol("v-click-clicks-elements"),mi=Symbol("v-click-clicks-order-map"),zo=Symbol("v-click-clicks-disabled"),Xu=Symbol("slidev-slide-scale"),te=Symbol("slidev-slidev-context"),gm=Symbol("slidev-route"),ym=Symbol("slidev-slide-context"),Tn="slidev-vclick-target",Rr="slidev-vclick-hidden",vm="slidev-vclick-fade",Dr="slidev-vclick-hidden-explicitly",Po="slidev-vclick-current",$s="slidev-vclick-prior";function Ju(e){return e=e||[],Array.isArray(e)?e:[e]}function gi(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function _m(...e){let t,n,o;e.length===1?(t=0,o=1,[n]=e):[t,n,o=1]=e;const s=[];let i=t;for(;i<n;)s.push(i),i+=o||1;return s}function bm(e){return e!=null}function wm(e,t){return Object.fromEntries(Object.entries(e).map(([n,o])=>t(n,o)).filter(bm))}const Ln={theme:"seriph",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"dark",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",background:"/background.jpeg",class:"text-center"},_e=Ln;var Yc;const mn=(Yc=_e.aspectRatio)!=null?Yc:16/9;var Kc;const Wn=(Kc=_e.canvasWidth)!=null?Kc:980,Qu=Math.round(Wn/mn),ep=S(()=>wm(_e.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Ct(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Kn=Me({page:0,clicks:0});let km=[],xm=[];Ct(Kn,"$syncUp",!0);Ct(Kn,"$syncDown",!0);Ct(Kn,"$paused",!1);Ct(Kn,"$onSet",e=>km.push(e));Ct(Kn,"$onPatch",e=>xm.push(e));Ct(Kn,"$patch",async()=>!1);function tp(e,t,n=!1){const o=[];let s=!1,i=!1,l,a;const c=Me(t);function u(h){o.push(h)}function p(h,m){clearTimeout(l),s=!0,c[h]=m,l=setTimeout(()=>s=!1,0)}function f(h){s||(clearTimeout(a),i=!0,Object.entries(h).forEach(([m,b])=>{c[m]=b}),a=setTimeout(()=>i=!1,0))}function d(h){let m;n?n&&window.addEventListener("storage",_=>{_&&_.key===h&&_.newValue&&f(JSON.parse(_.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",_=>f(_.data)));function b(){!n&&m&&!i?m.postMessage(be(c)):n&&!i&&window.localStorage.setItem(h,JSON.stringify(c)),s||o.forEach(_=>_(c))}if(ce(c,b,{deep:!0}),n){const _=window.localStorage.getItem(h);_&&f(JSON.parse(_))}}return{init:d,onPatch:u,patch:p,state:c}}const{init:Em,onPatch:Am,patch:ba,state:Ir}=tp(Kn,{page:1,clicks:0}),Gn=Me({});let Cm=[],Om=[];Ct(Gn,"$syncUp",!0);Ct(Gn,"$syncDown",!0);Ct(Gn,"$paused",!1);Ct(Gn,"$onSet",e=>Cm.push(e));Ct(Gn,"$onPatch",e=>Om.push(e));Ct(Gn,"$patch",async()=>!1);const{init:Sm,onPatch:$m,patch:np,state:Ys}=tp(Gn,{},!1),Pm="modulepreload",Tm=function(e){return"/talk-about-monorepo/"+e},wa={},ko=function(t,n,o){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=Tm(s),s in wa)return;wa[s]=!0;const i=s.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${l}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":Pm,i||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),i)return new Promise((c,u)=>{a.addEventListener("load",c),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};function it(e,t,n){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,n),n):(e[t]=n,n)}function Mm(e,t){if(Array.isArray(e)){e.splice(t,1);return}delete e[t]}var ka;const Bt=typeof window<"u",Rm=e=>typeof e<"u",Dm=e=>typeof e=="function",op=e=>typeof e=="string",yi=()=>+Date.now(),Is=()=>{};Bt&&((ka=window==null?void 0:window.navigator)==null?void 0:ka.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Qe(e){return typeof e=="function"?e():w(e)}function Im(e,t){function n(...o){e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})}return n}const sp=e=>e();function Lm(e=sp){const t=V(!0);function n(){t.value=!1}function o(){t.value=!0}return{isActive:t,pause:n,resume:o,eventFilter:(...i)=>{t.value&&e(...i)}}}function Fm(e){return e}function Nm(e,t){var n;if(typeof e=="number")return e+t;const o=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",s=e.slice(o.length),i=parseFloat(o)+t;return Number.isNaN(i)?e:i+s}function bn(e){return nu()?(ou(e),!0):!1}function Bm(e){if(!we(e))return Me(e);const t=new Proxy({},{get(n,o,s){return w(Reflect.get(e.value,o,s))},set(n,o,s){return we(e.value[o])&&!we(s)?e.value[o].value=s:e.value[o]=s,!0},deleteProperty(n,o){return Reflect.deleteProperty(e.value,o)},has(n,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Me(t)}function jm(e){return typeof e=="function"?S(e):V(e)}var Wm=Object.defineProperty,Vm=Object.defineProperties,Hm=Object.getOwnPropertyDescriptors,xa=Object.getOwnPropertySymbols,zm=Object.prototype.hasOwnProperty,qm=Object.prototype.propertyIsEnumerable,Ea=(e,t,n)=>t in e?Wm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Um=(e,t)=>{for(var n in t||(t={}))zm.call(t,n)&&Ea(e,n,t[n]);if(xa)for(var n of xa(t))qm.call(t,n)&&Ea(e,n,t[n]);return e},Ym=(e,t)=>Vm(e,Hm(t));function Km(e){if(!we(e))return Cf(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=Af(()=>({get(){return e.value[n]},set(o){if(Array.isArray(e.value)){const s=[...e.value];s[n]=o,e.value=s}else{const s=Ym(Um({},e.value),{[n]:o});Object.setPrototypeOf(s,e.value),e.value=s}}}));return t}function Gm(e,t=!0){Yn()?Pu(e):t?e():qe(e)}function rp(e,t=!0){Yn()?wo(e):t?e():qe(e)}function Zm(e,t=1e3,n={}){const{immediate:o=!0,immediateCallback:s=!1}=n;let i=null;const l=V(!1);function a(){i&&(clearInterval(i),i=null)}function c(){l.value=!1,a()}function u(){w(t)<=0||(l.value=!0,s&&e(),a(),i=setInterval(e,Qe(t)))}if(o&&Bt&&u(),we(t)){const p=ce(t,()=>{l.value&&Bt&&u()});bn(p)}return bn(c),{isActive:l,pause:c,resume:u}}function Xm(e,t,n={}){const{immediate:o=!0}=n,s=V(!1);let i=null;function l(){i&&(clearTimeout(i),i=null)}function a(){s.value=!1,l()}function c(...u){l(),s.value=!0,i=setTimeout(()=>{s.value=!1,i=null,e(...u)},Qe(t))}return o&&(s.value=!0,Bt&&c()),bn(a),{isPending:s,start:c,stop:a}}function ip(e=!1,t={}){const{truthyValue:n=!0,falsyValue:o=!1}=t,s=we(e),i=V(e);function l(a){if(arguments.length)return i.value=a,i.value;{const c=Qe(n);return i.value=i.value===c?Qe(o):c,i.value}}return s?l:[i,l]}var Aa=Object.getOwnPropertySymbols,Jm=Object.prototype.hasOwnProperty,Qm=Object.prototype.propertyIsEnumerable,eg=(e,t)=>{var n={};for(var o in e)Jm.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Aa)for(var o of Aa(e))t.indexOf(o)<0&&Qm.call(e,o)&&(n[o]=e[o]);return n};function tg(e,t,n={}){const o=n,{eventFilter:s=sp}=o,i=eg(o,["eventFilter"]);return ce(e,Im(s,t),i)}var ng=Object.defineProperty,og=Object.defineProperties,sg=Object.getOwnPropertyDescriptors,Ks=Object.getOwnPropertySymbols,lp=Object.prototype.hasOwnProperty,ap=Object.prototype.propertyIsEnumerable,Ca=(e,t,n)=>t in e?ng(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,rg=(e,t)=>{for(var n in t||(t={}))lp.call(t,n)&&Ca(e,n,t[n]);if(Ks)for(var n of Ks(t))ap.call(t,n)&&Ca(e,n,t[n]);return e},ig=(e,t)=>og(e,sg(t)),lg=(e,t)=>{var n={};for(var o in e)lp.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Ks)for(var o of Ks(e))t.indexOf(o)<0&&ap.call(e,o)&&(n[o]=e[o]);return n};function ag(e,t,n={}){const o=n,{eventFilter:s}=o,i=lg(o,["eventFilter"]),{eventFilter:l,pause:a,resume:c,isActive:u}=Lm(s);return{stop:tg(e,t,ig(rg({},i),{eventFilter:l})),pause:a,resume:c,isActive:u}}function pn(e){var t;const n=Qe(e);return(t=n==null?void 0:n.$el)!=null?t:n}const nt=Bt?window:void 0,cg=Bt?window.document:void 0,ug=Bt?window.navigator:void 0;function xe(...e){let t,n,o,s;if(op(e[0])?([n,o,s]=e,t=nt):[t,n,o,s]=e,!t)return Is;let i=Is;const l=ce(()=>pn(t),c=>{i(),c&&(c.addEventListener(n,o,s),i=()=>{c.removeEventListener(n,o,s),i=Is})},{immediate:!0,flush:"post"}),a=()=>{l(),i()};return bn(a),a}function pg(e,t,n={}){const{window:o=nt,ignore:s,capture:i=!0,detectIframe:l=!1}=n;if(!o)return;const a=V(!0);let c;const u=d=>{o.clearTimeout(c);const h=pn(e),m=d.composedPath();!h||h===d.target||m.includes(h)||!a.value||s&&s.length>0&&s.some(b=>{const _=pn(b);return _&&(d.target===_||m.includes(_))})||t(d)},p=[xe(o,"click",u,{passive:!0,capture:i}),xe(o,"pointerdown",d=>{const h=pn(e);a.value=!!h&&!d.composedPath().includes(h)},{passive:!0}),xe(o,"pointerup",d=>{if(d.button===0){const h=d.composedPath();d.composedPath=()=>h,c=o.setTimeout(()=>u(d),50)}},{passive:!0}),l&&xe(o,"blur",d=>{var h;const m=pn(e);((h=document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(m!=null&&m.contains(document.activeElement))&&t(d)})].filter(Boolean);return()=>p.forEach(d=>d())}const dg=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function fg(e,t,n={}){const{target:o=nt,eventName:s="keydown",passive:i=!1}=n,l=dg(e);return xe(o,s,c=>{l(c)&&t(c)},i)}function hg(e={}){const{window:t=nt}=e,n=V(0);return t&&(xe(t,"blur",()=>n.value+=1,!0),xe(t,"focus",()=>n.value+=1,!0)),S(()=>(n.value,t==null?void 0:t.document.activeElement))}function vr(e,t=!1){const n=V(),o=()=>n.value=Boolean(e());return o(),rp(o,t),n}function Ls(e,t={}){const{window:n=nt}=t,o=vr(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const i=V(!1),l=()=>{!o.value||(s||(s=n.matchMedia(e)),i.value=s.matches)};return Gm(()=>{l(),s&&("addEventListener"in s?s.addEventListener("change",l):s.addListener(l),bn(()=>{"removeEventListener"in s?s.removeEventListener("change",l):s.removeListener(l)}))}),i}const mg={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var gg=Object.defineProperty,Oa=Object.getOwnPropertySymbols,yg=Object.prototype.hasOwnProperty,vg=Object.prototype.propertyIsEnumerable,Sa=(e,t,n)=>t in e?gg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_g=(e,t)=>{for(var n in t||(t={}))yg.call(t,n)&&Sa(e,n,t[n]);if(Oa)for(var n of Oa(t))vg.call(t,n)&&Sa(e,n,t[n]);return e};function bg(e,t={}){function n(a,c){let u=e[a];return c!=null&&(u=Nm(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=nt}=t;function s(a){return o?o.matchMedia(a).matches:!1}const i=a=>Ls(`(min-width: ${n(a)})`,t),l=Object.keys(e).reduce((a,c)=>(Object.defineProperty(a,c,{get:()=>i(c),enumerable:!0,configurable:!0}),a),{});return _g({greater:i,smaller(a){return Ls(`(max-width: ${n(a,-.1)})`,t)},between(a,c){return Ls(`(min-width: ${n(a)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(a){return s(`(min-width: ${n(a)})`)},isSmaller(a){return s(`(max-width: ${n(a,-.1)})`)},isInBetween(a,c){return s(`(min-width: ${n(a)}) and (max-width: ${n(c,-.1)})`)}},l)}function wg(e={}){const{navigator:t=ug,read:n=!1,source:o,copiedDuring:s=1500}=e,i=["copy","cut"],l=vr(()=>t&&"clipboard"in t),a=V(""),c=V(!1),u=Xm(()=>c.value=!1,s);function p(){t.clipboard.readText().then(d=>{a.value=d})}if(l.value&&n)for(const d of i)xe(d,p);async function f(d=Qe(o)){l.value&&d!=null&&(await t.clipboard.writeText(d),a.value=d,c.value=!0,u.start())}return{isSupported:l,text:a,copied:c,copy:f}}const vi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_i="__vueuse_ssr_handlers__";vi[_i]=vi[_i]||{};const kg=vi[_i];function xg(e,t){return kg[e]||t}function Eg(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var Ag=Object.defineProperty,$a=Object.getOwnPropertySymbols,Cg=Object.prototype.hasOwnProperty,Og=Object.prototype.propertyIsEnumerable,Pa=(e,t,n)=>t in e?Ag(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ta=(e,t)=>{for(var n in t||(t={}))Cg.call(t,n)&&Pa(e,n,t[n]);if($a)for(var n of $a(t))Og.call(t,n)&&Pa(e,n,t[n]);return e};const Sg={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Wt(e,t,n,o={}){var s;const{flush:i="pre",deep:l=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:p,window:f=nt,eventFilter:d,onError:h=j=>{console.error(j)}}=o,m=(p?Nt:V)(t);if(!n)try{n=xg("getDefaultStorage",()=>{var j;return(j=nt)==null?void 0:j.localStorage})()}catch(j){h(j)}if(!n)return m;const b=Qe(t),_=Eg(b),C=(s=o.serializer)!=null?s:Sg[_],{pause:A,resume:E}=ag(m,()=>O(m.value),{flush:i,deep:l,eventFilter:d});return f&&a&&xe(f,"storage",I),I(),m;function O(j){try{j==null?n.removeItem(e):n.setItem(e,C.write(j))}catch(X){h(X)}}function F(j){if(!(j&&j.key!==e)){A();try{const X=j?j.newValue:n.getItem(e);if(X==null)return c&&b!==null&&n.setItem(e,C.write(b)),b;if(!j&&u){const ie=C.read(X);return Dm(u)?u(ie,b):_==="object"&&!Array.isArray(ie)?Ta(Ta({},b),ie):ie}else return typeof X!="string"?X:C.read(X)}catch(X){h(X)}finally{E()}}}function I(j){j&&j.key!==e||(m.value=F(j))}}function $g(e){return Ls("(prefers-color-scheme: dark)",e)}var Pg=Object.defineProperty,Tg=Object.defineProperties,Mg=Object.getOwnPropertyDescriptors,Ma=Object.getOwnPropertySymbols,Rg=Object.prototype.hasOwnProperty,Dg=Object.prototype.propertyIsEnumerable,Ra=(e,t,n)=>t in e?Pg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ig=(e,t)=>{for(var n in t||(t={}))Rg.call(t,n)&&Ra(e,n,t[n]);if(Ma)for(var n of Ma(t))Dg.call(t,n)&&Ra(e,n,t[n]);return e},Lg=(e,t)=>Tg(e,Mg(t));function g3(e,t={}){var n,o;const s=(n=t.draggingElement)!=null?n:nt,i=V((o=Qe(t.initialValue))!=null?o:{x:0,y:0}),l=V(),a=d=>t.pointerTypes?t.pointerTypes.includes(d.pointerType):!0,c=d=>{Qe(t.preventDefault)&&d.preventDefault(),Qe(t.stopPropagation)&&d.stopPropagation()},u=d=>{var h;if(!a(d)||Qe(t.exact)&&d.target!==Qe(e))return;const m=Qe(e).getBoundingClientRect(),b={x:d.pageX-m.left,y:d.pageY-m.top};((h=t.onStart)==null?void 0:h.call(t,b,d))!==!1&&(l.value=b,c(d))},p=d=>{var h;!a(d)||!l.value||(i.value={x:d.pageX-l.value.x,y:d.pageY-l.value.y},(h=t.onMove)==null||h.call(t,i.value,d),c(d))},f=d=>{var h;!a(d)||!l.value||(l.value=void 0,(h=t.onEnd)==null||h.call(t,i.value,d),c(d))};return Bt&&(xe(e,"pointerdown",u,!0),xe(s,"pointermove",p,!0),xe(s,"pointerup",f,!0)),Lg(Ig({},Km(i)),{position:i,isDragging:S(()=>!!l.value),style:S(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var Da=Object.getOwnPropertySymbols,Fg=Object.prototype.hasOwnProperty,Ng=Object.prototype.propertyIsEnumerable,Bg=(e,t)=>{var n={};for(var o in e)Fg.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Da)for(var o of Da(e))t.indexOf(o)<0&&Ng.call(e,o)&&(n[o]=e[o]);return n};function jg(e,t,n={}){const o=n,{window:s=nt}=o,i=Bg(o,["window"]);let l;const a=vr(()=>s&&"ResizeObserver"in s),c=()=>{l&&(l.disconnect(),l=void 0)},u=ce(()=>pn(e),f=>{c(),a.value&&s&&f&&(l=new ResizeObserver(t),l.observe(f,i))},{immediate:!0,flush:"post"}),p=()=>{c(),u()};return bn(p),{isSupported:a,stop:p}}function Wg(e,t={}){const{immediate:n=!0,window:o=nt}=t,s=V(!1);let i=null;function l(){!s.value||!o||(e(),i=o.requestAnimationFrame(l))}function a(){!s.value&&o&&(s.value=!0,l())}function c(){s.value=!1,i!=null&&o&&(o.cancelAnimationFrame(i),i=null)}return n&&a(),bn(c),{isActive:s,pause:c,resume:a}}function Vg(e,t={width:0,height:0},n={}){const o=V(t.width),s=V(t.height);return jg(e,([i])=>{o.value=i.contentRect.width,s.value=i.contentRect.height},n),ce(()=>pn(e),i=>{o.value=i?t.width:0,s.value=i?t.height:0}),{width:o,height:s}}const Ia=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Hg(e,t={}){const{document:n=cg,autoExit:o=!1}=t,s=e||(n==null?void 0:n.querySelector("html")),i=V(!1);let l=Ia[0];const a=vr(()=>{if(n){for(const b of Ia)if(b[1]in n)return l=b,!0}else return!1;return!1}),[c,u,p,,f]=l;async function d(){!a.value||(n!=null&&n[p]&&await n[u](),i.value=!1)}async function h(){if(!a.value)return;await d();const b=pn(s);b&&(await b[c](),i.value=!0)}async function m(){i.value?await d():await h()}return n&&xe(n,f,()=>{i.value=!!(n!=null&&n[p])},!1),o&&bn(d),{isSupported:a,isFullscreen:i,enter:h,exit:d,toggle:m}}const zg={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function qg(e={}){const{reactive:t=!1,target:n=nt,aliasMap:o=zg,passive:s=!0,onEventFired:i=Is}=e,l=Me(new Set),a={toJSON(){return{}},current:l},c=t?Me(a):a,u=new Set,p=new Set;function f(b,_){b in c&&(t?c[b]=_:c[b].value=_)}function d(){for(const b of p)f(b,!1)}function h(b,_){var C,A;const E=(C=b.key)==null?void 0:C.toLowerCase(),F=[(A=b.code)==null?void 0:A.toLowerCase(),E].filter(Boolean);E&&(_?l.add(E):l.delete(E));for(const I of F)p.add(I),f(I,_);E==="meta"&&!_?(u.forEach(I=>{l.delete(I),f(I,!1)}),u.clear()):typeof b.getModifierState=="function"&&b.getModifierState("Meta")&&_&&[...l,...F].forEach(I=>u.add(I))}xe(n,"keydown",b=>(h(b,!0),i(b)),{passive:s}),xe(n,"keyup",b=>(h(b,!1),i(b)),{passive:s}),xe("blur",d,{passive:!0}),xe("focus",d,{passive:!0});const m=new Proxy(c,{get(b,_,C){if(typeof _!="string")return Reflect.get(b,_,C);if(_=_.toLowerCase(),_ in o&&(_=o[_]),!(_ in c))if(/[+_-]/.test(_)){const E=_.split(/[+_-]/g).map(O=>O.trim());c[_]=S(()=>E.every(O=>w(m[O])))}else c[_]=V(!1);const A=Reflect.get(b,_,C);return t?w(A):A}});return m}function y3(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:s={x:0,y:0},window:i=nt,eventFilter:l}=e,a=V(s.x),c=V(s.y),u=V(null),p=b=>{t==="page"?(a.value=b.pageX,c.value=b.pageY):t==="client"&&(a.value=b.clientX,c.value=b.clientY),u.value="mouse"},f=()=>{a.value=s.x,c.value=s.y},d=b=>{if(b.touches.length>0){const _=b.touches[0];t==="page"?(a.value=_.pageX,c.value=_.pageY):t==="client"&&(a.value=_.clientX,c.value=_.clientY),u.value="touch"}},h=b=>l===void 0?p(b):l(()=>p(b),{}),m=b=>l===void 0?d(b):l(()=>d(b),{});return i&&(xe(i,"mousemove",h,{passive:!0}),xe(i,"dragover",h,{passive:!0}),n&&(xe(i,"touchstart",m,{passive:!0}),xe(i,"touchmove",m,{passive:!0}),o&&xe(i,"touchend",f,{passive:!0}))),{x:a,y:c,sourceType:u}}var Qt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Qt||(Qt={}));function Ug(e,t={}){const n=jm(e),{threshold:o=50,onSwipe:s,onSwipeEnd:i,onSwipeStart:l}=t,a=Me({x:0,y:0}),c=(I,j)=>{a.x=I,a.y=j},u=Me({x:0,y:0}),p=(I,j)=>{u.x=I,u.y=j},f=S(()=>a.x-u.x),d=S(()=>a.y-u.y),{max:h,abs:m}=Math,b=S(()=>h(m(f.value),m(d.value))>=o),_=V(!1),C=V(!1),A=S(()=>b.value?m(f.value)>m(d.value)?f.value>0?Qt.LEFT:Qt.RIGHT:d.value>0?Qt.UP:Qt.DOWN:Qt.NONE),E=I=>t.pointerTypes?t.pointerTypes.includes(I.pointerType):!0,O=[xe(e,"pointerdown",I=>{var j,X;if(!E(I))return;C.value=!0,(X=(j=n.value)==null?void 0:j.style)==null||X.setProperty("touch-action","none");const ie=I.target;ie==null||ie.setPointerCapture(I.pointerId);const{clientX:fe,clientY:ge}=I;c(fe,ge),p(fe,ge),l==null||l(I)}),xe(e,"pointermove",I=>{if(!E(I)||!C.value)return;const{clientX:j,clientY:X}=I;p(j,X),!_.value&&b.value&&(_.value=!0),_.value&&(s==null||s(I))}),xe(e,"pointerup",I=>{var j,X;!E(I)||(_.value&&(i==null||i(I,A.value)),C.value=!1,_.value=!1,(X=(j=n.value)==null?void 0:j.style)==null||X.setProperty("touch-action","initial"))})],F=()=>O.forEach(I=>I());return{isSwiping:so(_),direction:so(A),posStart:so(a),posEnd:so(u),distanceX:f,distanceY:d,stop:F}}var Yg=Object.defineProperty,La=Object.getOwnPropertySymbols,Kg=Object.prototype.hasOwnProperty,Gg=Object.prototype.propertyIsEnumerable,Fa=(e,t,n)=>t in e?Yg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Zg=(e,t)=>{for(var n in t||(t={}))Kg.call(t,n)&&Fa(e,n,t[n]);if(La)for(var n of La(t))Gg.call(t,n)&&Fa(e,n,t[n]);return e};function v3(e={}){const{controls:t=!1,offset:n=0,immediate:o=!0,interval:s="requestAnimationFrame"}=e,i=V(yi()+n),l=()=>i.value=yi()+n,a=s==="requestAnimationFrame"?Wg(l,{immediate:o}):Zm(l,s,{immediate:o});return t?Zg({timestamp:i},a):i}var Xg=Object.defineProperty,Na=Object.getOwnPropertySymbols,Jg=Object.prototype.hasOwnProperty,Qg=Object.prototype.propertyIsEnumerable,Ba=(e,t,n)=>t in e?Xg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ey=(e,t)=>{for(var n in t||(t={}))Jg.call(t,n)&&Ba(e,n,t[n]);if(Na)for(var n of Na(t))Qg.call(t,n)&&Ba(e,n,t[n]);return e};const ty={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ey({linear:Fm},ty);function Ut(e,t,n,o={}){var s,i,l;const{passive:a=!1,eventName:c,deep:u=!1,defaultValue:p}=o,f=Yn(),d=n||(f==null?void 0:f.emit)||((s=f==null?void 0:f.$emit)==null?void 0:s.bind(f))||((l=(i=f==null?void 0:f.proxy)==null?void 0:i.$emit)==null?void 0:l.bind(f==null?void 0:f.proxy));let h=c;t||(t="modelValue"),h=c||h||`update:${t.toString()}`;const m=()=>Rm(e[t])?e[t]:p;if(a){const b=V(m());return ce(()=>e[t],_=>b.value=_),ce(b,_=>{(_!==e[t]||u)&&d(h,_)},{deep:u}),b}else return S({get(){return m()},set(b){d(h,b)}})}function _3({window:e=nt}={}){if(!e)return V(!1);const t=V(e.document.hasFocus());return xe(e,"blur",()=>{t.value=!1}),xe(e,"focus",()=>{t.value=!0}),t}function ny(e={}){const{window:t=nt,initialWidth:n=1/0,initialHeight:o=1/0,listenOrientation:s=!0}=e,i=V(n),l=V(o),a=()=>{t&&(i.value=t.innerWidth,l.value=t.innerHeight)};return a(),rp(a),xe("resize",a,{passive:!0}),s&&xe("orientationchange",a,{passive:!0}),{width:i,height:l}}/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const oo=typeof window<"u";function oy(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function Lr(e,t){const n={};for(const o in t){const s=t[o];n[o]=jt(s)?s.map(e):e(s)}return n}const qo=()=>{},jt=Array.isArray,sy=/\/$/,ry=e=>e.replace(sy,"");function Fr(e,t,n="/"){let o,s={},i="",l="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(o=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(o=o||t.slice(0,a),l=t.slice(a,t.length)),o=cy(o!=null?o:t,n),{fullPath:o+(i&&"?")+i+l,path:o,query:s,hash:l}}function iy(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ja(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ly(e,t,n){const o=t.matched.length-1,s=n.matched.length-1;return o>-1&&o===s&&go(t.matched[o],n.matched[s])&&cp(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function go(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function cp(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ay(e[n],t[n]))return!1;return!0}function ay(e,t){return jt(e)?Wa(e,t):jt(t)?Wa(t,e):e===t}function Wa(e,t){return jt(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function cy(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/");let s=n.length-1,i,l;for(i=0;i<o.length;i++)if(l=o[i],l!==".")if(l==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+o.slice(i-(i===o.length?1:0)).join("/")}var is;(function(e){e.pop="pop",e.push="push"})(is||(is={}));var Uo;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Uo||(Uo={}));function uy(e){if(!e)if(oo){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ry(e)}const py=/^[^#]+#/;function dy(e,t){return e.replace(py,"#")+t}function fy(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const _r=()=>({left:window.pageXOffset,top:window.pageYOffset});function hy(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=fy(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Va(e,t){return(history.state?history.state.position-t:-1)+e}const bi=new Map;function my(e,t){bi.set(e,t)}function gy(e){const t=bi.get(e);return bi.delete(e),t}let yy=()=>location.protocol+"//"+location.host;function up(e,t){const{pathname:n,search:o,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),ja(c,"")}return ja(n,e)+o+s}function vy(e,t,n,o){let s=[],i=[],l=null;const a=({state:d})=>{const h=up(e,location),m=n.value,b=t.value;let _=0;if(d){if(n.value=h,t.value=d,l&&l===m){l=null;return}_=b?d.position-b.position:0}else o(h);s.forEach(C=>{C(n.value,m,{delta:_,type:is.pop,direction:_?_>0?Uo.forward:Uo.back:Uo.unknown})})};function c(){l=n.value}function u(d){s.push(d);const h=()=>{const m=s.indexOf(d);m>-1&&s.splice(m,1)};return i.push(h),h}function p(){const{history:d}=window;!d.state||d.replaceState(Oe({},d.state,{scroll:_r()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",p),{pauseListeners:c,listen:u,destroy:f}}function Ha(e,t,n,o=!1,s=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:s?_r():null}}function _y(e){const{history:t,location:n}=window,o={value:up(e,n)},s={value:t.state};s.value||i(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,u,p){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:yy()+e+c;try{t[p?"replaceState":"pushState"](u,"",d),s.value=u}catch(h){console.error(h),n[p?"replace":"assign"](d)}}function l(c,u){const p=Oe({},t.state,Ha(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,p,!0),o.value=c}function a(c,u){const p=Oe({},s.value,t.state,{forward:c,scroll:_r()});i(p.current,p,!0);const f=Oe({},Ha(o.value,c,null),{position:p.position+1},u);i(c,f,!1),o.value=c}return{location:o,state:s,push:a,replace:l}}function by(e){e=uy(e);const t=_y(e),n=vy(e,t.state,t.location,t.replace);function o(i,l=!0){l||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:e,go:o,createHref:dy.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function wy(e){return typeof e=="string"||e&&typeof e=="object"}function pp(e){return typeof e=="string"||typeof e=="symbol"}const ln={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dp=Symbol("");var za;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(za||(za={}));function yo(e,t){return Oe(new Error,{type:e,[dp]:!0},t)}function Gt(e,t){return e instanceof Error&&dp in e&&(t==null||!!(e.type&t))}const qa="[^/]+?",ky={sensitive:!1,strict:!1,start:!0,end:!0},xy=/[.+*?^${}()[\]/\\]/g;function Ey(e,t){const n=Oe({},ky,t),o=[];let s=n.start?"^":"";const i=[];for(const u of e){const p=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const d=u[f];let h=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(xy,"\\$&"),h+=40;else if(d.type===1){const{value:m,repeatable:b,optional:_,regexp:C}=d;i.push({name:m,repeatable:b,optional:_});const A=C||qa;if(A!==qa){h+=10;try{new RegExp(`(${A})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${m}" (${A}): `+O.message)}}let E=b?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(E=_&&u.length<2?`(?:/${E})`:"/"+E),_&&(E+="?"),s+=E,h+=20,_&&(h+=-8),b&&(h+=-20),A===".*"&&(h+=-50)}p.push(h)}o.push(p)}if(n.strict&&n.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const l=new RegExp(s,n.sensitive?"":"i");function a(u){const p=u.match(l),f={};if(!p)return null;for(let d=1;d<p.length;d++){const h=p[d]||"",m=i[d-1];f[m.name]=h&&m.repeatable?h.split("/"):h}return f}function c(u){let p="",f=!1;for(const d of e){(!f||!p.endsWith("/"))&&(p+="/"),f=!1;for(const h of d)if(h.type===0)p+=h.value;else if(h.type===1){const{value:m,repeatable:b,optional:_}=h,C=m in u?u[m]:"";if(jt(C)&&!b)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const A=jt(C)?C.join("/"):C;if(!A)if(_)d.length<2&&(p.endsWith("/")?p=p.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);p+=A}}return p||"/"}return{re:l,score:o,keys:i,parse:a,stringify:c}}function Ay(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Cy(e,t){let n=0;const o=e.score,s=t.score;for(;n<o.length&&n<s.length;){const i=Ay(o[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-o.length)===1){if(Ua(o))return 1;if(Ua(s))return-1}return s.length-o.length}function Ua(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Oy={type:0,value:""},Sy=/[a-zA-Z0-9_]/;function $y(e){if(!e)return[[]];if(e==="/")return[[Oy]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=0,o=n;const s=[];let i;function l(){i&&s.push(i),i=[]}let a=0,c,u="",p="";function f(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),l()):c===":"?(f(),n=1):d();break;case 4:d(),n=o;break;case 1:c==="("?n=2:Sy.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:n=3:p+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,p="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),l(),s}function Py(e,t,n){const o=Ey($y(e.path),n),s=Oe(o,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Ty(e,t){const n=[],o=new Map;t=Ka({strict:!1,end:!0,sensitive:!1},t);function s(p){return o.get(p)}function i(p,f,d){const h=!d,m=Ry(p);m.aliasOf=d&&d.record;const b=Ka(t,p),_=[m];if("alias"in p){const E=typeof p.alias=="string"?[p.alias]:p.alias;for(const O of E)_.push(Oe({},m,{components:d?d.record.components:m.components,path:O,aliasOf:d?d.record:m}))}let C,A;for(const E of _){const{path:O}=E;if(f&&O[0]!=="/"){const F=f.record.path,I=F[F.length-1]==="/"?"":"/";E.path=f.record.path+(O&&I+O)}if(C=Py(E,f,b),d?d.alias.push(C):(A=A||C,A!==C&&A.alias.push(C),h&&p.name&&!Ya(C)&&l(p.name)),m.children){const F=m.children;for(let I=0;I<F.length;I++)i(F[I],C,d&&d.children[I])}d=d||C,c(C)}return A?()=>{l(A)}:qo}function l(p){if(pp(p)){const f=o.get(p);f&&(o.delete(p),n.splice(n.indexOf(f),1),f.children.forEach(l),f.alias.forEach(l))}else{const f=n.indexOf(p);f>-1&&(n.splice(f,1),p.record.name&&o.delete(p.record.name),p.children.forEach(l),p.alias.forEach(l))}}function a(){return n}function c(p){let f=0;for(;f<n.length&&Cy(p,n[f])>=0&&(p.record.path!==n[f].record.path||!fp(p,n[f]));)f++;n.splice(f,0,p),p.record.name&&!Ya(p)&&o.set(p.record.name,p)}function u(p,f){let d,h={},m,b;if("name"in p&&p.name){if(d=o.get(p.name),!d)throw yo(1,{location:p});b=d.record.name,h=Oe(My(f.params,d.keys.filter(A=>!A.optional).map(A=>A.name)),p.params),m=d.stringify(h)}else if("path"in p)m=p.path,d=n.find(A=>A.re.test(m)),d&&(h=d.parse(m),b=d.record.name);else{if(d=f.name?o.get(f.name):n.find(A=>A.re.test(f.path)),!d)throw yo(1,{location:p,currentLocation:f});b=d.record.name,h=Oe({},f.params,p.params),m=d.stringify(h)}const _=[];let C=d;for(;C;)_.unshift(C.record),C=C.parent;return{name:b,path:m,params:h,matched:_,meta:Iy(_)}}return e.forEach(p=>i(p)),{addRoute:i,resolve:u,removeRoute:l,getRoutes:a,getRecordMatcher:s}}function My(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function Ry(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Dy(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Dy(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="boolean"?n:n[o];return t}function Ya(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Iy(e){return e.reduce((t,n)=>Oe(t,n.meta),{})}function Ka(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function fp(e,t){return t.children.some(n=>n===e||fp(e,n))}const hp=/#/g,Ly=/&/g,Fy=/\//g,Ny=/=/g,By=/\?/g,mp=/\+/g,jy=/%5B/g,Wy=/%5D/g,gp=/%5E/g,Vy=/%60/g,yp=/%7B/g,Hy=/%7C/g,vp=/%7D/g,zy=/%20/g;function cl(e){return encodeURI(""+e).replace(Hy,"|").replace(jy,"[").replace(Wy,"]")}function qy(e){return cl(e).replace(yp,"{").replace(vp,"}").replace(gp,"^")}function wi(e){return cl(e).replace(mp,"%2B").replace(zy,"+").replace(hp,"%23").replace(Ly,"%26").replace(Vy,"`").replace(yp,"{").replace(vp,"}").replace(gp,"^")}function Uy(e){return wi(e).replace(Ny,"%3D")}function Yy(e){return cl(e).replace(hp,"%23").replace(By,"%3F")}function Ky(e){return e==null?"":Yy(e).replace(Fy,"%2F")}function Gs(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Gy(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<o.length;++s){const i=o[s].replace(mp," "),l=i.indexOf("="),a=Gs(l<0?i:i.slice(0,l)),c=l<0?null:Gs(i.slice(l+1));if(a in t){let u=t[a];jt(u)||(u=t[a]=[u]),u.push(c)}else t[a]=c}return t}function Ga(e){let t="";for(let n in e){const o=e[n];if(n=Uy(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(jt(o)?o.map(i=>i&&wi(i)):[o&&wi(o)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Zy(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=jt(o)?o.map(s=>s==null?null:""+s):o==null?o:""+o)}return t}const Xy=Symbol(""),Za=Symbol(""),ul=Symbol(""),_p=Symbol(""),ki=Symbol("");function To(){let e=[];function t(o){return e.push(o),()=>{const s=e.indexOf(o);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function un(e,t,n,o,s){const i=o&&(o.enterCallbacks[s]=o.enterCallbacks[s]||[]);return()=>new Promise((l,a)=>{const c=f=>{f===!1?a(yo(4,{from:n,to:t})):f instanceof Error?a(f):wy(f)?a(yo(2,{from:t,to:f})):(i&&o.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),l())},u=e.call(o&&o.instances[s],t,n,c);let p=Promise.resolve(u);e.length<3&&(p=p.then(c)),p.catch(f=>a(f))})}function Nr(e,t,n,o){const s=[];for(const i of e)for(const l in i.components){let a=i.components[l];if(!(t!=="beforeRouteEnter"&&!i.instances[l]))if(Jy(a)){const u=(a.__vccOpts||a)[t];u&&s.push(un(u,n,o,i,l))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${i.path}"`));const p=oy(u)?u.default:u;i.components[l]=p;const d=(p.__vccOpts||p)[t];return d&&un(d,n,o,i,l)()}))}}return s}function Jy(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Xa(e){const t=q(ul),n=q(_p),o=S(()=>t.resolve(w(e.to))),s=S(()=>{const{matched:c}=o.value,{length:u}=c,p=c[u-1],f=n.matched;if(!p||!f.length)return-1;const d=f.findIndex(go.bind(null,p));if(d>-1)return d;const h=Ja(c[u-2]);return u>1&&Ja(p)===h&&f[f.length-1].path!==h?f.findIndex(go.bind(null,c[u-2])):d}),i=S(()=>s.value>-1&&nv(n.params,o.value.params)),l=S(()=>s.value>-1&&s.value===n.matched.length-1&&cp(n.params,o.value.params));function a(c={}){return tv(c)?t[w(e.replace)?"replace":"push"](w(e.to)).catch(qo):Promise.resolve()}return{route:o,href:S(()=>o.value.href),isActive:i,isExactActive:l,navigate:a}}const Qy=de({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xa,setup(e,{slots:t}){const n=Me(Xa(e)),{options:o}=q(ul),s=S(()=>({[Qa(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Qa(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:lt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ev=Qy;function tv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function nv(e,t){for(const n in t){const o=t[n],s=e[n];if(typeof o=="string"){if(o!==s)return!1}else if(!jt(s)||s.length!==o.length||o.some((i,l)=>i!==s[l]))return!1}return!0}function Ja(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qa=(e,t,n)=>e!=null?e:t!=null?t:n,ov=de({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=q(ki),s=S(()=>e.route||o.value),i=q(Za,0),l=S(()=>{let u=w(i);const{matched:p}=s.value;let f;for(;(f=p[u])&&!f.components;)u++;return u}),a=S(()=>s.value.matched[l.value]);ft(Za,S(()=>l.value+1)),ft(Xy,a),ft(ki,s);const c=V();return ce(()=>[c.value,a.value,e.name],([u,p,f],[d,h,m])=>{p&&(p.instances[f]=u,h&&h!==p&&u&&u===d&&(p.leaveGuards.size||(p.leaveGuards=h.leaveGuards),p.updateGuards.size||(p.updateGuards=h.updateGuards))),u&&p&&(!h||!go(p,h)||!d)&&(p.enterCallbacks[f]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=s.value,p=e.name,f=a.value,d=f&&f.components[p];if(!d)return ec(n.default,{Component:d,route:u});const h=f.props[p],m=h?h===!0?u.params:typeof h=="function"?h(u):h:null,_=lt(d,Oe({},m,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(f.instances[p]=null)},ref:c}));return ec(n.default,{Component:_,route:u})||_}}});function ec(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const sv=ov;function rv(e){const t=Ty(e.routes,e),n=e.parseQuery||Gy,o=e.stringifyQuery||Ga,s=e.history,i=To(),l=To(),a=To(),c=Nt(ln);let u=ln;oo&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Lr.bind(null,$=>""+$),f=Lr.bind(null,Ky),d=Lr.bind(null,Gs);function h($,z){let D,U;return pp($)?(D=t.getRecordMatcher($),U=z):U=$,t.addRoute(U,D)}function m($){const z=t.getRecordMatcher($);z&&t.removeRoute(z)}function b(){return t.getRoutes().map($=>$.record)}function _($){return!!t.getRecordMatcher($)}function C($,z){if(z=Oe({},z||c.value),typeof $=="string"){const ue=Fr(n,$,z.path),g=t.resolve({path:ue.path},z),y=s.createHref(ue.fullPath);return Oe(ue,g,{params:d(g.params),hash:Gs(ue.hash),redirectedFrom:void 0,href:y})}let D;if("path"in $)D=Oe({},$,{path:Fr(n,$.path,z.path).path});else{const ue=Oe({},$.params);for(const g in ue)ue[g]==null&&delete ue[g];D=Oe({},$,{params:f($.params)}),z.params=f(z.params)}const U=t.resolve(D,z),ve=$.hash||"";U.params=p(d(U.params));const $e=iy(o,Oe({},$,{hash:qy(ve),path:U.path})),pe=s.createHref($e);return Oe({fullPath:$e,hash:ve,query:o===Ga?Zy($.query):$.query||{}},U,{redirectedFrom:void 0,href:pe})}function A($){return typeof $=="string"?Fr(n,$,c.value.path):Oe({},$)}function E($,z){if(u!==$)return yo(8,{from:z,to:$})}function O($){return j($)}function F($){return O(Oe(A($),{replace:!0}))}function I($){const z=$.matched[$.matched.length-1];if(z&&z.redirect){const{redirect:D}=z;let U=typeof D=="function"?D($):D;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=A(U):{path:U},U.params={}),Oe({query:$.query,hash:$.hash,params:"path"in U?{}:$.params},U)}}function j($,z){const D=u=C($),U=c.value,ve=$.state,$e=$.force,pe=$.replace===!0,ue=I(D);if(ue)return j(Oe(A(ue),{state:ve,force:$e,replace:pe}),z||D);const g=D;g.redirectedFrom=z;let y;return!$e&&ly(o,U,D)&&(y=yo(16,{to:g,from:U}),Vt(U,U,!0,!1)),(y?Promise.resolve(y):ie(g,U)).catch(x=>Gt(x)?Gt(x,2)?x:he(x):se(x,g,U)).then(x=>{if(x){if(Gt(x,2))return j(Oe({replace:pe},A(x.to),{state:ve,force:$e}),z||g)}else x=ge(g,U,!0,pe,ve);return fe(g,U,x),x})}function X($,z){const D=E($,z);return D?Promise.reject(D):Promise.resolve()}function ie($,z){let D;const[U,ve,$e]=iv($,z);D=Nr(U.reverse(),"beforeRouteLeave",$,z);for(const ue of U)ue.leaveGuards.forEach(g=>{D.push(un(g,$,z))});const pe=X.bind(null,$,z);return D.push(pe),Xn(D).then(()=>{D=[];for(const ue of i.list())D.push(un(ue,$,z));return D.push(pe),Xn(D)}).then(()=>{D=Nr(ve,"beforeRouteUpdate",$,z);for(const ue of ve)ue.updateGuards.forEach(g=>{D.push(un(g,$,z))});return D.push(pe),Xn(D)}).then(()=>{D=[];for(const ue of $.matched)if(ue.beforeEnter&&!z.matched.includes(ue))if(jt(ue.beforeEnter))for(const g of ue.beforeEnter)D.push(un(g,$,z));else D.push(un(ue.beforeEnter,$,z));return D.push(pe),Xn(D)}).then(()=>($.matched.forEach(ue=>ue.enterCallbacks={}),D=Nr($e,"beforeRouteEnter",$,z),D.push(pe),Xn(D))).then(()=>{D=[];for(const ue of l.list())D.push(un(ue,$,z));return D.push(pe),Xn(D)}).catch(ue=>Gt(ue,8)?ue:Promise.reject(ue))}function fe($,z,D){for(const U of a.list())U($,z,D)}function ge($,z,D,U,ve){const $e=E($,z);if($e)return $e;const pe=z===ln,ue=oo?history.state:{};D&&(U||pe?s.replace($.fullPath,Oe({scroll:pe&&ue&&ue.scroll},ve)):s.push($.fullPath,ve)),c.value=$,Vt($,z,D,pe),he()}let Te;function Fe(){Te||(Te=s.listen(($,z,D)=>{if(!sn.listening)return;const U=C($),ve=I(U);if(ve){j(Oe(ve,{replace:!0}),U).catch(qo);return}u=U;const $e=c.value;oo&&my(Va($e.fullPath,D.delta),_r()),ie(U,$e).catch(pe=>Gt(pe,12)?pe:Gt(pe,2)?(j(pe.to,U).then(ue=>{Gt(ue,20)&&!D.delta&&D.type===is.pop&&s.go(-1,!1)}).catch(qo),Promise.reject()):(D.delta&&s.go(-D.delta,!1),se(pe,U,$e))).then(pe=>{pe=pe||ge(U,$e,!1),pe&&(D.delta&&!Gt(pe,8)?s.go(-D.delta,!1):D.type===is.pop&&Gt(pe,20)&&s.go(-1,!1)),fe(U,$e,pe)}).catch(qo)}))}let Ye=To(),Ee=To(),J;function se($,z,D){he($);const U=Ee.list();return U.length?U.forEach(ve=>ve($,z,D)):console.error($),Promise.reject($)}function Z(){return J&&c.value!==ln?Promise.resolve():new Promise(($,z)=>{Ye.add([$,z])})}function he($){return J||(J=!$,Fe(),Ye.list().forEach(([z,D])=>$?D($):z()),Ye.reset()),$}function Vt($,z,D,U){const{scrollBehavior:ve}=e;if(!oo||!ve)return Promise.resolve();const $e=!D&&gy(Va($.fullPath,0))||(U||!D)&&history.state&&history.state.scroll||null;return qe().then(()=>ve($,z,$e)).then(pe=>pe&&hy(pe)).catch(pe=>se(pe,$,z))}const Ze=$=>s.go($);let bt;const st=new Set,sn={currentRoute:c,listening:!0,addRoute:h,removeRoute:m,hasRoute:_,getRoutes:b,resolve:C,options:e,push:O,replace:F,go:Ze,back:()=>Ze(-1),forward:()=>Ze(1),beforeEach:i.add,beforeResolve:l.add,afterEach:a.add,onError:Ee.add,isReady:Z,install($){const z=this;$.component("RouterLink",ev),$.component("RouterView",sv),$.config.globalProperties.$router=z,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>w(c)}),oo&&!bt&&c.value===ln&&(bt=!0,O(s.location).catch(ve=>{}));const D={};for(const ve in ln)D[ve]=S(()=>c.value[ve]);$.provide(ul,z),$.provide(_p,Me(D)),$.provide(ki,c);const U=$.unmount;st.add($),$.unmount=function(){st.delete($),st.size<1&&(u=ln,Te&&Te(),Te=null,c.value=ln,bt=!1,J=!1),U()}}};return sn}function Xn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function iv(e,t){const n=[],o=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let l=0;l<i;l++){const a=t.matched[l];a&&(e.matched.find(u=>go(u,a))?o.push(a):n.push(a));const c=e.matched[l];c&&(t.matched.find(u=>go(u,c))||s.push(c))}return[n,o,s]}const Br=V(!1),Yo=V(!1),ro=V(!1),lv=V(!0),xi=bg({xs:460,...mg}),Vn=ny(),bp=qg(),av=S(()=>Vn.height.value-Vn.width.value/mn>180),wp=Hg(Bt?document.body:null),po=hg(),cv=S(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=po.value)==null?void 0:e.tagName)||"")||((t=po.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),uv=S(()=>{var e;return["BUTTON","A"].includes(((e=po.value)==null?void 0:e.tagName)||"")});Wt("slidev-camera","default");Wt("slidev-mic","default");const Fs=Wt("slidev-scale",0),Je=Wt("slidev-show-overview",!1),jr=Wt("slidev-presenter-cursor",!0),tc=Wt("slidev-show-editor",!1);Wt("slidev-editor-width",Bt?window.innerWidth*.4:100);const kp=ip(Je);function nc(e,t,n,o=s=>s){return e*o(.5-t*(.5-n))}function pv(e){return[-e[0],-e[1]]}function Tt(e,t){return[e[0]+t[0],e[1]+t[1]]}function kt(e,t){return[e[0]-t[0],e[1]-t[1]]}function Pt(e,t){return[e[0]*t,e[1]*t]}function dv(e,t){return[e[0]/t,e[1]/t]}function Mo(e){return[e[1],-e[0]]}function fv(e,t){return e[0]*t[0]+e[1]*t[1]}function hv(e,t){return e[0]===t[0]&&e[1]===t[1]}function mv(e){return Math.hypot(e[0],e[1])}function gv(e){return e[0]*e[0]+e[1]*e[1]}function oc(e,t){return gv(kt(e,t))}function xp(e){return dv(e,mv(e))}function yv(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Ro(e,t,n){let o=Math.sin(n),s=Math.cos(n),i=e[0]-t[0],l=e[1]-t[1],a=i*s-l*o,c=i*o+l*s;return[a+t[0],c+t[1]]}function Ei(e,t,n){return Tt(e,Pt(kt(t,e),n))}function sc(e,t,n){return Tt(e,Pt(t,n))}var{min:Jn,PI:vv}=Math,rc=.275,Do=vv+1e-4;function _v(e,t={}){let{size:n=16,smoothing:o=.5,thinning:s=.5,simulatePressure:i=!0,easing:l=J=>J,start:a={},end:c={},last:u=!1}=t,{cap:p=!0,easing:f=J=>J*(2-J)}=a,{cap:d=!0,easing:h=J=>--J*J*J+1}=c;if(e.length===0||n<=0)return[];let m=e[e.length-1].runningLength,b=a.taper===!1?0:a.taper===!0?Math.max(n,m):a.taper,_=c.taper===!1?0:c.taper===!0?Math.max(n,m):c.taper,C=Math.pow(n*o,2),A=[],E=[],O=e.slice(0,10).reduce((J,se)=>{let Z=se.pressure;if(i){let he=Jn(1,se.distance/n),Vt=Jn(1,1-he);Z=Jn(1,J+(Vt-J)*(he*rc))}return(J+Z)/2},e[0].pressure),F=nc(n,s,e[e.length-1].pressure,l),I,j=e[0].vector,X=e[0].point,ie=X,fe=X,ge=ie;for(let J=0;J<e.length;J++){let{pressure:se}=e[J],{point:Z,vector:he,distance:Vt,runningLength:Ze}=e[J];if(J<e.length-1&&m-Ze<3)continue;if(s){if(i){let D=Jn(1,Vt/n),U=Jn(1,1-D);se=Jn(1,O+(U-O)*(D*rc))}F=nc(n,s,se,l)}else F=n/2;I===void 0&&(I=F);let bt=Ze<b?f(Ze/b):1,st=m-Ze<_?h((m-Ze)/_):1;if(F=Math.max(.01,F*Math.min(bt,st)),J===e.length-1){let D=Pt(Mo(he),F);A.push(kt(Z,D)),E.push(Tt(Z,D));continue}let sn=e[J+1].vector,$=fv(he,sn);if($<0){let D=Pt(Mo(j),F);for(let U=1/13,ve=0;ve<=1;ve+=U)fe=Ro(kt(Z,D),Z,Do*ve),A.push(fe),ge=Ro(Tt(Z,D),Z,Do*-ve),E.push(ge);X=fe,ie=ge;continue}let z=Pt(Mo(Ei(sn,he,$)),F);fe=kt(Z,z),(J<=1||oc(X,fe)>C)&&(A.push(fe),X=fe),ge=Tt(Z,z),(J<=1||oc(ie,ge)>C)&&(E.push(ge),ie=ge),O=se,j=he}let Te=e[0].point.slice(0,2),Fe=e.length>1?e[e.length-1].point.slice(0,2):Tt(e[0].point,[1,1]),Ye=[],Ee=[];if(e.length===1){if(!(b||_)||u){let J=sc(Te,xp(Mo(kt(Te,Fe))),-(I||F)),se=[];for(let Z=1/13,he=Z;he<=1;he+=Z)se.push(Ro(J,Te,Do*2*he));return se}}else{if(!(b||_&&e.length===1))if(p)for(let se=1/13,Z=se;Z<=1;Z+=se){let he=Ro(E[0],Te,Do*Z);Ye.push(he)}else{let se=kt(A[0],E[0]),Z=Pt(se,.5),he=Pt(se,.51);Ye.push(kt(Te,Z),kt(Te,he),Tt(Te,he),Tt(Te,Z))}let J=Mo(pv(e[e.length-1].vector));if(_||b&&e.length===1)Ee.push(Fe);else if(d){let se=sc(Fe,J,F);for(let Z=1/29,he=Z;he<1;he+=Z)Ee.push(Ro(se,Fe,Do*3*he))}else Ee.push(Tt(Fe,Pt(J,F)),Tt(Fe,Pt(J,F*.99)),kt(Fe,Pt(J,F*.99)),kt(Fe,Pt(J,F)))}return A.concat(Ee,E.reverse(),Ye)}function bv(e,t={}){var n;let{streamline:o=.5,size:s=16,last:i=!1}=t;if(e.length===0)return[];let l=.15+(1-o)*.85,a=Array.isArray(e[0])?e:e.map(({x:h,y:m,pressure:b=.5})=>[h,m,b]);if(a.length===2){let h=a[1];a=a.slice(0,-1);for(let m=1;m<5;m++)a.push(Ei(a[0],h,m/4))}a.length===1&&(a=[...a,[...Tt(a[0],[1,1]),...a[0].slice(2)]]);let c=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,p=0,f=c[0],d=a.length-1;for(let h=1;h<a.length;h++){let m=i&&h===d?a[h].slice(0,2):Ei(f.point,a[h],l);if(hv(f.point,m))continue;let b=yv(m,f.point);if(p+=b,h<d&&!u){if(p<s)continue;u=!0}f={point:m,pressure:a[h][2]>=0?a[h][2]:.5,vector:xp(kt(f.point,m)),distance:b,runningLength:p},c.push(f)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function wv(e,t={}){return _v(bv(e,t),t)}var kv=wv,xv=Object.defineProperty,ic=Object.getOwnPropertySymbols,Ev=Object.prototype.hasOwnProperty,Av=Object.prototype.propertyIsEnumerable,lc=(e,t,n)=>t in e?xv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ai=(e,t)=>{for(var n in t||(t={}))Ev.call(t,n)&&lc(e,n,t[n]);if(ic)for(var n of ic(t))Av.call(t,n)&&lc(e,n,t[n]);return e},Cv=()=>({events:{},emit(e,...t){(this.events[e]||[]).forEach(n=>n(...t))},on(e,t){return(this.events[e]=this.events[e]||[]).push(t),()=>this.events[e]=(this.events[e]||[]).filter(n=>n!==t)}});function Zs(e,t){return e-t}function Ov(e){return e<0?-1:1}function Xs(e){return[Math.abs(e),Ov(e)]}function Ep(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var Sv=2,Xt=Sv,xo=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t,n;const o=this.drauu.el,s=(t=this.drauu.options.coordinateScale)!=null?t:1;if(this.drauu.options.coordinateTransform===!1){const i=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-i.left)*s,y:(e.pageY-i.top)*s,pressure:e.pressure}}else{const i=this.drauu.svgPoint;i.x=e.clientX,i.y=e.clientY;const l=i.matrixTransform((n=o.getScreenCTM())==null?void 0:n.inverse());return{x:l.x*s,y:l.y*s,pressure:e.pressure}}}createElement(e,t){var n;const o=document.createElementNS("http://www.w3.org/2000/svg",e),s=t?Ai(Ai({},this.brush),t):this.brush;return o.setAttribute("fill",(n=s.fill)!=null?n:"transparent"),o.setAttribute("stroke",s.color),o.setAttribute("stroke-width",s.size.toString()),o.setAttribute("stroke-linecap","round"),s.dasharray&&o.setAttribute("stroke-dasharray",s.dasharray),o}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(Xt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},$v=class extends xo{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=kv(e,Ai({size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},this.brush.stylusOptions));if(!t.length)return"";const n=t.reduce((o,[s,i],l,a)=>{const[c,u]=a[(l+1)%a.length];return o.push(s,i,(s+c)/2,(i+u)/2),o},["M",...t[0],"Q"]);return n.push("Z"),n.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},Pv=class extends xo{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Xs(e.x-this.start.x),[o,s]=Xs(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(t,o);t=i,o=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[i,l]=[this.start.x,this.start.x+t*n].sort(Zs),[a,c]=[this.start.y,this.start.y+o*s].sort(Zs);this.attr("cx",(i+l)/2),this.attr("cy",(a+c)/2),this.attr("rx",(l-i)/2),this.attr("ry",(c-a)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Ap(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),s=document.createElementNS("http://www.w3.org/2000/svg","path");return s.setAttribute("fill",t),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),s.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(s),n.appendChild(o),n}var Tv=class extends xo{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Ep(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(Ap(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const o=e.x-this.start.x,s=e.y-this.start.y;if(s!==0){let i=o/s;i=Math.round(i),Math.abs(i)<=1?(t=this.start.x+s*i,n=this.start.y+s):(t=this.start.x+o,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Mv=class extends xo{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Xs(e.x-this.start.x),[o,s]=Xs(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(t,o);t=i,o=i}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[i,l]=[this.start.x,this.start.x+t*n].sort(Zs),[a,c]=[this.start.y,this.start.y+o*s].sort(Zs);this.attr("x",i),this.attr("y",a),this.attr("width",l-i),this.attr("height",c-a)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Rv(e,t){const n=e.x-t.x,o=e.y-t.y;return n*n+o*o}function Dv(e,t,n){let o=t.x,s=t.y,i=n.x-o,l=n.y-s;if(i!==0||l!==0){const a=((e.x-o)*i+(e.y-s)*l)/(i*i+l*l);a>1?(o=n.x,s=n.y):a>0&&(o+=i*a,s+=l*a)}return i=e.x-o,l=e.y-s,i*i+l*l}function Iv(e,t){let n=e[0];const o=[n];let s;for(let i=1,l=e.length;i<l;i++)s=e[i],Rv(s,n)>t&&(o.push(s),n=s);return n!==s&&s&&o.push(s),o}function Ci(e,t,n,o,s){let i=o,l=0;for(let a=t+1;a<n;a++){const c=Dv(e[a],e[t],e[n]);c>i&&(l=a,i=c)}i>o&&(l-t>1&&Ci(e,t,l,o,s),s.push(e[l]),n-l>1&&Ci(e,l,n,o,s))}function Lv(e,t){const n=e.length-1,o=[e[0]];return Ci(e,0,n,t,o),o.push(e[n]),o}function ac(e,t,n=!1){if(e.length<=2)return e;const o=t!==void 0?t*t:1;return e=n?e:Iv(e,o),e=Lv(e,o),e}var Fv=class extends xo{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Ep();const t=Ap(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=ac(this.points,1,!0),this.count=0),this.attr("d",uc(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",uc(ac(this.points,1,!0))),!e.getTotalLength()))}};function Nv(e,t){const n=t.x-e.x,o=t.y-e.y;return{length:Math.sqrt(Math.pow(n,2)+Math.pow(o,2)),angle:Math.atan2(o,n)}}function cc(e,t,n,o){const s=t||e,i=n||e,l=.2,a=Nv(s,i),c=a.angle+(o?Math.PI:0),u=a.length*l,p=e.x+Math.cos(c)*u,f=e.y+Math.sin(c)*u;return{x:p,y:f}}function Bv(e,t,n){const o=cc(n[t-1],n[t-2],e),s=cc(e,n[t-1],n[t+1],!0);return`C ${o.x.toFixed(Xt)},${o.y.toFixed(Xt)} ${s.x.toFixed(Xt)},${s.y.toFixed(Xt)} ${e.x.toFixed(Xt)},${e.y.toFixed(Xt)}`}function uc(e){return e.reduce((t,n,o,s)=>o===0?`M ${n.x.toFixed(Xt)},${n.y.toFixed(Xt)}`:`${t} ${Bv(n,o,s)}`,"")}var jv=class extends xo{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,o)=>{if(n&&n.length)for(let s=0;s<n.length;s++){const i=n[s];if(i.getTotalLength){const l=i.getTotalLength();for(let a=0;a<this.pathSubFactor;a++){const c=i.getPointAtLength(l*a/this.pathSubFactor),u=i.getPointAtLength(l*(a+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:a,element:o||i})}}else i.children&&t(i.children,i)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,o)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,o=e.x2,s=t.x1,i=t.x2,l=e.y1,a=e.y2,c=t.y1,u=t.y2,p=(n-o)*(c-u)-(l-a)*(s-i),f=(n*a-l*o)*(s-i)-(n-o)*(s*u-c*i),d=(n*a-l*o)*(c-u)-(l-a)*(s*u-c*i),h=(m,b,_)=>m>=b&&m<=_?!0:m>=_&&m<=b;if(p===0)return!1;{const m={x:f/p,y:d/p};return h(m.x,n,o)&&h(m.y,l,a)&&h(m.x,s,i)&&h(m.y,c,u)}}};function Wv(e){return{draw:new Fv(e),stylus:new $v(e),line:new Tv(e),rectangle:new Mv(e),ellipse:new Pv(e),eraseLine:new jv(e)}}var Vv=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Cv(),this._models=Wv(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),s=this.eventMove.bind(this),i=this.eventEnd.bind(this),l=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",s,{passive:!1}),window.addEventListener("pointerup",i,{passive:!1}),window.addEventListener("pointercancel",i,{passive:!1}),window.addEventListener("keydown",l,!1),window.addEventListener("keyup",l,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",s),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i),window.removeEventListener("keydown",l,!1),window.removeEventListener("keyup",l,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function Hv(e){return new Vv(e)}const Oi=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Yt=Wt("slidev-drawing-enabled",!1),b3=Wt("slidev-drawing-pinned",!1),zv=V(!1),qv=V(!1),Uv=V(!1),ls=V(!1),Fn=Bm(Wt("slidev-drawing-brush",{color:Oi[0],size:4,mode:"stylus"})),pc=V("stylus"),Cp=S(()=>_e.drawings.syncAll||qt.value);let as=!1;const Io=S({get(){return pc.value},set(e){pc.value=e,e==="arrow"?(Fn.mode="line",Fn.arrowEnd=!0):(Fn.mode=e,Fn.arrowEnd=!1)}}),Yv=Me({brush:Fn,acceptsInputTypes:S(()=>Yt.value?void 0:["pen"]),coordinateTransform:!1}),et=ar(Hv(Yv));function Kv(){et.clear(),Cp.value&&np(We.value,"")}function Op(){var e;qv.value=et.canRedo(),zv.value=et.canUndo(),Uv.value=!!((e=et.el)!=null&&e.children.length)}function Gv(e){as=!0;const t=Ys[e||We.value];t!=null?et.load(t):et.clear(),as=!1}et.on("changed",()=>{if(Op(),!as){const e=et.dump(),t=We.value;(Ys[t]||"")!==e&&Cp.value&&np(t,et.dump())}});$m(e=>{as=!0,e[We.value]!=null&&et.load(e[We.value]||""),as=!1,Op()});qe(()=>{ce(We,()=>{!et.mounted||Gv()},{immediate:!0})});et.on("start",()=>ls.value=!0);et.on("end",()=>ls.value=!1);window.addEventListener("keydown",e=>{if(!Yt.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?et.redo():et.undo():e.code==="Escape"?Yt.value=!1:e.code==="KeyL"&&t?Io.value="line":e.code==="KeyA"&&t?Io.value="arrow":e.code==="KeyS"&&t?Io.value="stylus":e.code==="KeyR"&&t?Io.value="rectangle":e.code==="KeyE"&&t?Io.value="ellipse":e.code==="KeyC"&&t?Kv():e.code.startsWith("Digit")&&t&&+e.code[5]<=Oi.length?Fn.color=Oi[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Ne(...e){return S(()=>e.every(t=>Qe(t)))}function ut(e){return S(()=>!Qe(e))}const dc=$g(),Wr=Wt("slidev-color-schema","auto"),Si=S(()=>_e.colorSchema!=="auto"),pl=S({get(){return Si.value?_e.colorSchema==="dark":Wr.value==="auto"?dc.value:Wr.value==="dark"},set(e){Si.value||(Wr.value=e===dc.value?"auto":e?"dark":"light")}}),Sp=ip(pl);Bt&&ce(pl,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const Ns=V(1),Bs=S(()=>je.length-1),mt=V(0),dl=V(0);function Zv(){mt.value>Ns.value&&(mt.value-=1)}function Xv(){mt.value<Bs.value&&(mt.value+=1)}function Jv(){if(mt.value>Ns.value){let e=mt.value-dl.value;e<Ns.value&&(e=Ns.value),mt.value=e}}function Qv(){if(mt.value<Bs.value){let e=mt.value+dl.value;e>Bs.value&&(e=Bs.value),mt.value=e}}function e_(){const{escape:e,space:t,shift:n,left:o,right:s,up:i,down:l,enter:a,d:c,g:u,o:p}=bp,f=[{name:"next_space",key:Ne(t,ut(n)),fn:gn,autoRepeat:!0},{name:"prev_space",key:Ne(t,n),fn:yn,autoRepeat:!0},{name:"next_right",key:Ne(s,ut(n),ut(Je)),fn:gn,autoRepeat:!0},{name:"prev_left",key:Ne(o,ut(n),ut(Je)),fn:yn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:gn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:yn,autoRepeat:!0},{name:"next_down",key:Ne(l,ut(Je)),fn:us,autoRepeat:!0},{name:"prev_up",key:Ne(i,ut(Je)),fn:()=>ps(!1),autoRepeat:!0},{name:"next_shift",key:Ne(s,n),fn:us,autoRepeat:!0},{name:"prev_shift",key:Ne(o,n),fn:()=>ps(!1),autoRepeat:!0},{name:"toggle_dark",key:Ne(c,ut(Yt)),fn:Sp},{name:"toggle_overview",key:Ne(p,ut(Yt)),fn:kp},{name:"hide_overview",key:Ne(e,ut(Yt)),fn:()=>Je.value=!1},{name:"goto",key:Ne(u,ut(Yt)),fn:()=>ro.value=!ro.value},{name:"next_overview",key:Ne(s,Je),fn:Xv},{name:"prev_overview",key:Ne(o,Je),fn:Zv},{name:"up_overview",key:Ne(i,Je),fn:Jv},{name:"down_overview",key:Ne(l,Je),fn:Qv},{name:"goto_from_overview",key:Ne(a,Je),fn:()=>{vo(mt.value),Je.value=!1}}];return{customShortcuts:[],defaultShortcuts:f}}const $p=Ne(ut(cv),ut(uv),lv);function t_(e,t,n=!1){typeof e=="string"&&(e=bp[e]);const o=Ne(e,$p);let s=0,i;const l=()=>{if(clearTimeout(i),!o.value){s=0;return}n&&(i=setTimeout(l,Math.max(1e3-s*250,150)),s++),t()};return ce(o,l,{flush:"sync"})}function n_(e,t){return fg(e,n=>{!$p.value||n.repeat||t()})}function o_(){const{customShortcuts:e,defaultShortcuts:t}=e_();new Map([...t,...e].map(o=>[o.key,o])).forEach(o=>{o.fn&&t_(o.key,o.fn,o.autoRepeat)}),n_("f",()=>wp.toggle())}const s_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},r_=r("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),i_=[r_];function l_(e,t){return k(),R("svg",s_,i_)}const a_={name:"carbon-close",render:l_};function fl(e){var n,o;const t=(o=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:o.no;return t!=null?`slidev-page-${t}`:""}const Pp=de({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;q(te);const n=V(),o=Vg(n),s=S(()=>t.width?t.width:o.width.value),i=S(()=>t.width?t.width/mn:o.height.value);t.width&&hs(()=>{n.value&&(n.value.style.width=`${s.value}px`,n.value.style.height=`${i.value}px`)});const l=S(()=>s.value/i.value),a=S(()=>t.scale?t.scale:l.value<mn?s.value/Wn:i.value*mn/Wn),c=S(()=>({height:`${Qu}px`,width:`${Wn}px`,transform:`translate(-50%, -50%) scale(${a.value})`})),u=S(()=>({"select-none":!_e.selectable,"slidev-code-line-numbers":_e.lineNumbers}));return ft(Xu,a),(p,f)=>(k(),R("div",{id:"slide-container",ref_key:"root",ref:n,class:Re(w(u))},[r("div",{id:"slide-content",style:Ue(w(c))},[vt(p.$slots,"default")],4),vt(p.$slots,"controls")],2))}});const hl=de({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Ut(e,"clicks",t),o=Ut(e,"clicksElements",t),s=Ut(e,"clicksDisabled",t),i=Ut(e,"clicksOrderMap",t);o.value.length=0,ft(gm,e.route),ft(ym,e.context),ft(Ho,n),ft(zo,s),ft(Rn,o),ft(mi,i)},render(){var e,t;return this.$props.is?lt(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),c_=["innerHTML"],u_=de({__name:"DrawingPreview",props:{page:null},setup(e){return q(te),(t,n)=>w(Ys)[e.page]?(k(),R("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:w(Ys)[e.page]},null,8,c_)):ne("v-if",!0)}}),p_={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},d_=["onClick"],f_=de({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const n=e;q(te);const o=Ut(n,"modelValue",t);function s(){o.value=!1}function i(h){vo(h),s()}function l(h){return h===mt.value}const a=xi.smaller("xs"),c=xi.smaller("sm"),u=4*16*2,p=2*16,f=S(()=>a.value?Vn.width.value-u:c.value?(Vn.width.value-u-p)/2:300),d=S(()=>Math.floor((Vn.width.value-u)/(f.value+p)));return hs(()=>{mt.value=We.value,dl.value=d.value}),(h,m)=>{const b=a_;return k(),R(ke,null,[Be(r("div",p_,[r("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Ue(`grid-template-columns: repeat(auto-fit,minmax(${w(f)}px,1fr))`)},[(k(!0),R(ke,null,ms(w(je).slice(0,-1),(_,C)=>(k(),R("div",{key:_.path,class:"relative"},[r("div",{class:Re(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":l(C+1)}]),onClick:A=>i(+_.path)},[(k(),Q(Pp,{key:_.path,width:w(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:ee(()=>[W(w(hl),{is:_==null?void 0:_.component,"clicks-disabled":!0,class:Re(w(fl)(_)),route:_,context:"overview"},null,8,["is","class","route"]),W(u_,{page:+_.path},null,8,["page"])]),_:2},1032,["width"]))],10,d_),r("div",{class:"absolute top-0 opacity-50",style:Ue(`left: ${w(f)+5}px`)},en(C+1),5)]))),128))],4)],512),[[Ku,w(o)]]),w(o)?(k(),R("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:s},[W(b)])):ne("v-if",!0)],64)}}});const h_="/talk-about-monorepo/assets/logo.b72bde5d.png",m_={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},g_=de({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;q(te);const o=Ut(n,"modelValue",t);function s(){o.value=!1}return(i,l)=>(k(),Q(Su,null,[w(o)?(k(),R("div",m_,[r("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:l[0]||(l[0]=a=>s())}),r("div",{class:Re(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[vt(i.$slots,"default")],2)])):ne("v-if",!0)],1024))}}),y_={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},v_=["innerHTML"],__=r("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[r("div",{class:"flex gap-1 children:my-auto"},[r("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),r("img",{class:"w-5 h-5",src:h_,alt:"Slidev"}),r("div",{style:{color:"#2082A6"}},[r("b",null,"Sli"),v("dev ")])])],-1),b_=de({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;q(te);const o=Ut(n,"modelValue",t),s=S(()=>typeof _e.info=="string");return(i,l)=>(k(),Q(g_,{modelValue:w(o),"onUpdate:modelValue":l[0]||(l[0]=a=>we(o)?o.value=a:null),class:"px-6 py-4"},{default:ee(()=>[r("div",y_,[w(s)?(k(),R("div",{key:0,class:"mb-4",innerHTML:w(_e).info},null,8,v_)):ne("v-if",!0),__])]),_:1},8,["modelValue"]))}});const w_=["disabled","onKeydown"],k_=de({__name:"Goto",setup(e){q(te);const t=V(),n=V(""),o=S(()=>{if(n.value.startsWith("/"))return!!je.find(l=>l.path===n.value.substring(1));{const l=+n.value;return!isNaN(l)&&l>0&&l<=qp.value}});function s(){o.value&&(n.value.startsWith("/")?vo(n.value.substring(1)):vo(+n.value)),i()}function i(){ro.value=!1}return ce(ro,async l=>{var a,c;l?(await qe(),n.value="",(a=t.value)==null||a.focus()):(c=t.value)==null||c.blur()}),ce(n,l=>{l.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(l,a)=>(k(),R("div",{id:"slidev-goto-dialog",class:Re(["fixed right-5 bg-main transform transition-all",w(ro)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Be(r("input",{ref_key:"input",ref:t,"onUpdate:modelValue":a[0]||(a[0]=c=>n.value=c),type:"text",disabled:!w(ro),class:Re(["outline-none bg-transparent",{"text-red-400":!w(o)&&n.value}]),placeholder:"Goto...",onKeydown:[fa(s,["enter"]),fa(i,["escape"])],onBlur:i},null,42,w_),[[Zh,n.value]])],2))}}),x_=de({__name:"Controls",setup(e){q(te);const t=Nt(),n=Nt();return(o,s)=>(k(),R(ke,null,[W(f_,{modelValue:w(Je),"onUpdate:modelValue":s[0]||(s[0]=i=>we(Je)?Je.value=i:null)},null,8,["modelValue"]),W(k_),w(t)?(k(),Q(w(t),{key:0})):ne("v-if",!0),w(n)?(k(),Q(w(n),{key:1,modelValue:w(Br),"onUpdate:modelValue":s[1]||(s[1]=i=>we(Br)?Br.value=i:null)},null,8,["modelValue"])):ne("v-if",!0),w(_e).info?(k(),Q(b_,{key:2,modelValue:w(Yo),"onUpdate:modelValue":s[2]||(s[2]=i=>we(Yo)?Yo.value=i:null)},null,8,["modelValue"])):ne("v-if",!0)],64))}}),E_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},A_=r("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),C_=[A_];function O_(e,t){return k(),R("svg",E_,C_)}const S_={name:"carbon-settings-adjust",render:O_},$_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},P_=r("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),T_=r("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),M_=[P_,T_];function R_(e,t){return k(),R("svg",$_,M_)}const D_={name:"carbon-information",render:R_},I_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},L_=r("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),F_=[L_];function N_(e,t){return k(),R("svg",I_,F_)}const B_={name:"carbon-download",render:N_},j_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},W_=r("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),V_=r("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),H_=[W_,V_];function z_(e,t){return k(),R("svg",j_,H_)}const q_={name:"carbon-user-speaker",render:z_},U_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Y_=r("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),K_=r("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),G_=[Y_,K_];function Z_(e,t){return k(),R("svg",U_,G_)}const X_={name:"carbon-presentation-file",render:Z_},J_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Q_=r("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),e0=[Q_];function t0(e,t){return k(),R("svg",J_,e0)}const n0={name:"carbon-pen",render:t0},o0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},s0=r("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),r0=r("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),i0=[s0,r0];function l0(e,t){return k(),R("svg",o0,i0)}const a0={name:"ph-cursor-duotone",render:l0},c0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},u0=r("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),p0=[u0];function d0(e,t){return k(),R("svg",c0,p0)}const Tp={name:"ph-cursor-fill",render:d0},f0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},h0=r("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),m0=[h0];function g0(e,t){return k(),R("svg",f0,m0)}const y0={name:"carbon-sun",render:g0},v0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_0=r("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),b0=[_0];function w0(e,t){return k(),R("svg",v0,b0)}const k0={name:"carbon-moon",render:w0},x0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},E0=r("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),A0=[E0];function C0(e,t){return k(),R("svg",x0,A0)}const O0={name:"carbon-apps",render:C0},S0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$0=r("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),P0=[$0];function T0(e,t){return k(),R("svg",S0,P0)}const Mp={name:"carbon-arrow-right",render:T0},M0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},R0=r("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),D0=[R0];function I0(e,t){return k(),R("svg",M0,D0)}const L0={name:"carbon-arrow-left",render:I0},F0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},N0=r("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),B0=[N0];function j0(e,t){return k(),R("svg",F0,B0)}const W0={name:"carbon-maximize",render:j0},V0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},H0=r("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),z0=[H0];function q0(e,t){return k(),R("svg",V0,z0)}const U0={name:"carbon-minimize",render:q0},Y0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},K0=r("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),G0=[K0];function Z0(e,t){return k(),R("svg",Y0,G0)}const X0={name:"carbon-checkmark",render:Z0},J0={class:"select-list"},Q0={class:"title"},eb={class:"items"},tb=["onClick"],nb=de({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;q(te);const o=Ut(n,"modelValue",t,{passive:!0});return(s,i)=>{const l=X0;return k(),R("div",J0,[r("div",Q0,en(e.title),1),r("div",eb,[(k(!0),R(ke,null,ms(e.items,a=>(k(),R("div",{key:a.value,class:Re(["item",{active:w(o)===a.value}]),onClick:()=>{var c;o.value=a.value,(c=a.onClick)==null||c.call(a)}},[W(l,{class:Re(["text-green-500",{"opacity-0":w(o)!==a.value}])},null,8,["class"]),v(" "+en(a.display||a.value),1)],10,tb))),128))])])}}});const _t=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n},ob=_t(nb,[["__scopeId","data-v-e4a7b634"]]),sb={class:"text-sm"},rb=de({__name:"Settings",setup(e){q(te);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,o)=>(k(),R("div",sb,[W(ob,{modelValue:w(Fs),"onUpdate:modelValue":o[0]||(o[0]=s=>we(Fs)?Fs.value=s:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),ib={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},lb=de({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;q(te);const o=Ut(n,"modelValue",t,{passive:!0}),s=V();return pg(s,()=>{o.value=!1}),(i,l)=>(k(),R("div",{ref_key:"el",ref:s,class:"flex relative"},[r("button",{class:Re({disabled:e.disabled}),onClick:l[0]||(l[0]=a=>o.value=!w(o))},[vt(i.$slots,"button",{class:Re({disabled:e.disabled})})],2),(k(),Q(Su,null,[w(o)?(k(),R("div",ib,[vt(i.$slots,"menu")])):ne("v-if",!0)],1024))],512))}}),ab={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},Ps={__name:"VerticalDivider",setup(e){return q(te),(t,n)=>(k(),R("div",ab))}},cb={render(){return[]}},ub={class:"icon-btn"},pb={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},db={class:"my-auto"},fb={class:"opacity-50"},hb=de({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;q(te);const n=xi.smaller("md"),{isFullscreen:o,toggle:s}=wp,i=S(()=>Pi.value?`?password=${Pi.value}`:""),l=S(()=>`/presenter/${We.value}${i.value}`),a=S(()=>`/${We.value}${i.value}`),c=V(),u=()=>{c.value&&po.value&&c.value.contains(po.value)&&po.value.blur()},p=S(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=Nt(),d=Nt();return ko(()=>import("./DrawingControls.d5888513.js"),["assets/DrawingControls.d5888513.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.076b7387.js"]).then(h=>d.value=h.default),(h,m)=>{const b=U0,_=W0,C=L0,A=Mp,E=O0,O=k0,F=y0,I=Tp,j=a0,X=n0,ie=X_,fe=os("RouterLink"),ge=q_,Te=B_,Fe=D_,Ye=S_;return k(),R("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[r("div",{class:Re(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",w(p)]),onMouseleave:u},[w(Zt)?ne("v-if",!0):(k(),R("button",{key:0,class:"icon-btn",onClick:m[0]||(m[0]=(...Ee)=>w(s)&&w(s)(...Ee))},[w(o)?(k(),Q(b,{key:0})):(k(),Q(_,{key:1}))])),r("button",{class:Re(["icon-btn",{disabled:!w(W8)}]),onClick:m[1]||(m[1]=(...Ee)=>w(yn)&&w(yn)(...Ee))},[W(C)],2),r("button",{class:Re(["icon-btn",{disabled:!w(j8)}]),title:"Next",onClick:m[2]||(m[2]=(...Ee)=>w(gn)&&w(gn)(...Ee))},[W(A)],2),w(Zt)?ne("v-if",!0):(k(),R("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=Ee=>w(kp)())},[W(E)])),w(Si)?ne("v-if",!0):(k(),R("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=Ee=>w(Sp)())},[w(pl)?(k(),Q(O,{key:0})):(k(),Q(F,{key:1}))])),W(Ps),w(Zt)?ne("v-if",!0):(k(),R(ke,{key:3},[!w(qt)&&!w(n)&&w(f)?(k(),R(ke,{key:0},[W(w(f)),W(Ps)],64)):ne("v-if",!0),w(qt)?(k(),R("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=Ee=>jr.value=!w(jr))},[w(jr)?(k(),Q(I,{key:0})):(k(),Q(j,{key:1,class:"opacity-50"}))])):ne("v-if",!0)],64)),!w(_e).drawings.presenterOnly&&!w(Zt)?(k(),R(ke,{key:4},[r("button",{class:"icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=Ee=>Yt.value=!w(Yt))},[W(X),w(Yt)?(k(),R("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Ue({background:w(Fn).color})},null,4)):ne("v-if",!0)]),W(Ps)],64)):ne("v-if",!0),w(Zt)?ne("v-if",!0):(k(),R(ke,{key:5},[w(qt)?(k(),Q(fe,{key:0,to:w(a),class:"icon-btn",title:"Play Mode"},{default:ee(()=>[W(ie)]),_:1},8,["to"])):ne("v-if",!0),w(F8)?(k(),Q(fe,{key:1,to:w(l),class:"icon-btn",title:"Presenter Mode"},{default:ee(()=>[W(ge)]),_:1},8,["to"])):ne("v-if",!0),ne("v-if",!0)],64)),(k(),R(ke,{key:6},[w(_e).download?(k(),R("button",{key:0,class:"icon-btn",onClick:m[8]||(m[8]=(...Ee)=>w(Ti)&&w(Ti)(...Ee))},[W(Te)])):ne("v-if",!0)],64)),!w(qt)&&w(_e).info&&!w(Zt)?(k(),R("button",{key:7,class:"icon-btn",onClick:m[9]||(m[9]=Ee=>Yo.value=!w(Yo))},[W(Fe)])):ne("v-if",!0),!w(qt)&&!w(Zt)?(k(),Q(lb,{key:8},{button:ee(()=>[r("button",ub,[W(Ye)])]),menu:ee(()=>[W(rb)]),_:1})):ne("v-if",!0),w(Zt)?ne("v-if",!0):(k(),Q(Ps,{key:9})),r("div",pb,[r("div",db,[v(en(w(We))+" ",1),r("span",fb,"/ "+en(w(qp)),1)])]),W(w(cb))],34)],512)}}}),Rp={render(){return[]}},Dp={render(){return[]}},mb={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},gb=de({__name:"PresenterMouse",setup(e){return q(te),(t,n)=>{const o=Tp;return w(Ir).cursor?(k(),R("div",mb,[W(o,{class:"absolute",style:Ue({left:`${w(Ir).cursor.x}%`,top:`${w(Ir).cursor.y}%`})},null,8,["style"])])):ne("v-if",!0)}}}),yb=de({__name:"SlidesShow",props:{context:null},setup(e){q(te),ce(dt,()=>{var n,o;((n=dt.value)==null?void 0:n.meta)&&dt.value.meta.preload!==!1&&(dt.value.meta.__preloaded=!0),((o=Vr.value)==null?void 0:o.meta)&&Vr.value.meta.preload!==!1&&(Vr.value.meta.__preloaded=!0)},{immediate:!0});const t=Nt();return ko(()=>import("./DrawingLayer.42798369.js"),[]).then(n=>t.value=n.default),(n,o)=>(k(),R(ke,null,[ne(" Global Bottom "),W(w(Dp)),ne(" Slides "),(k(!0),R(ke,null,ms(w(je),s=>{var i,l;return k(),R(ke,{key:s.path},[((i=s.meta)==null?void 0:i.__preloaded)||s===w(dt)?Be((k(),Q(w(hl),{key:0,is:s==null?void 0:s.component,clicks:s===w(dt)?w(Ft):0,"clicks-elements":((l=s.meta)==null?void 0:l.__clicksElements)||[],"clicks-disabled":!1,class:Re(w(fl)(s)),route:s,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Ku,s===w(dt)]]):ne("v-if",!0)],64)}),128)),ne(" Global Top "),W(w(Rp)),w(t)?(k(),Q(w(t),{key:0})):ne("v-if",!0),w(qt)?ne("v-if",!0):(k(),Q(gb,{key:1}))],64))}}),vb=de({__name:"Play",setup(e){q(te),o_();const t=V();function n(i){var l;tc.value||((l=i.target)==null?void 0:l.id)==="slide-container"&&(i.screenX/window.innerWidth>.6?gn():yn())}z8(t);const o=S(()=>av.value||tc.value);Nt();const s=Nt();return ko(()=>import("./DrawingControls.d5888513.js"),["assets/DrawingControls.d5888513.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.076b7387.js"]).then(i=>s.value=i.default),(i,l)=>(k(),R(ke,null,[r("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:Ue(w(ep))},[W(Pp,{class:"w-full h-full",style:Ue({background:"var(--slidev-slide-container-background, black)"}),width:w(fo)?w(Vn).width.value:void 0,scale:w(Fs),onPointerdown:n},{default:ee(()=>[W(yb,{context:"slide"})]),controls:ee(()=>[r("div",{class:Re(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[w(o)?"opacity-100 right-0":"opacity-0 p-2",w(ls)?"pointer-events-none":""]])},[W(hb,{class:"m-auto",persist:w(o)},null,8,["persist"])],2),!w(_e).drawings.presenterOnly&&!w(Zt)&&w(s)?(k(),Q(w(s),{key:0,class:"ml-0"})):ne("v-if",!0)]),_:1},8,["style","width","scale"]),ne("v-if",!0)],4),W(x_)],64))}});function Ip(e){const t=S(()=>e.value.path),n=S(()=>je.length-1),o=S(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),s=S(()=>xr(o.value)),i=S(()=>je.find(d=>d.path===`${o.value}`)),l=S(()=>{var d,h,m;return(m=(h=(d=i.value)==null?void 0:d.meta)==null?void 0:h.slide)==null?void 0:m.id}),a=S(()=>{var d,h;return(h=(d=i.value)==null?void 0:d.meta)==null?void 0:h.layout}),c=S(()=>je.find(d=>d.path===`${Math.min(je.length,o.value+1)}`)),u=S(()=>je.filter(d=>{var h,m;return(m=(h=d.meta)==null?void 0:h.slide)==null?void 0:m.title}).reduce((d,h)=>(vl(d,h),d),[])),p=S(()=>_l(u.value,i.value)),f=S(()=>bl(p.value));return{route:e,path:t,total:n,currentPage:o,currentPath:s,currentRoute:i,currentSlideId:l,currentLayout:a,nextRoute:c,rawTree:u,treeWithActiveStatuses:p,tree:f}}function Lp(e,t,n){const o=V(0);qe(()=>{gt.afterEach(async()=>{await qe(),o.value+=1})});const s=S(()=>{var c,u;return o.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),i=S(()=>{var c,u,p;return+((p=(u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)!=null?p:s.value.length)}),l=S(()=>n.value<je.length-1||e.value<i.value),a=S(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:s,clicksTotal:i,hasNext:l,hasPrev:a}}const _b=["id"],fc=de({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,o=Ut(n,"clicksElements",t),s=S(()=>({height:`${Qu}px`,width:`${Wn}px`})),i=Nt();ko(()=>import("./DrawingPreview.bf7ea28a.js"),[]).then(u=>i.value=u.default);const l=S(()=>n.clicks),a=Lp(l,n.nav.currentRoute,n.nav.currentPage),c=S(()=>`${n.route.path.toString().padStart(3,"0")}-${(l.value+1).toString().padStart(2,"0")}`);return ft(te,Me({nav:{...n.nav,...a},configs:_e,themeConfigs:S(()=>_e.themeConfig)})),(u,p)=>{var f;return k(),R("div",{id:w(c),class:"slide-container",style:Ue(w(s))},[W(w(Dp)),W(w(hl),{is:(f=e.route)==null?void 0:f.component,"clicks-elements":w(o),"onUpdate:clicks-elements":p[0]||(p[0]=d=>we(o)?o.value=d:null),clicks:w(l),"clicks-disabled":!1,class:Re(w(fl)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),w(i)?(k(),Q(w(i),{key:0,page:+e.route.path},null,8,["page"])):ne("v-if",!0),W(w(Rp))],12,_b)}}}),bb=de({__name:"PrintSlide",props:{route:null},setup(e){var i;const t=e;q(te);const n=Me(((i=t.route.meta)==null?void 0:i.__clicksElements)||[]),o=S(()=>t.route),s=Ip(o);return(l,a)=>(k(),R(ke,null,[W(fc,{"clicks-elements":n,"onUpdate:clicks-elements":a[0]||(a[0]=c=>we(n)?n.value=c:null),clicks:0,nav:w(s),route:w(o)},null,8,["clicks-elements","nav","route"]),w(Ko)?ne("v-if",!0):(k(!0),R(ke,{key:0},ms(n.length,c=>(k(),Q(fc,{key:c,clicks:c,nav:w(s),route:w(o)},null,8,["clicks","nav","route"]))),128))],64))}}),wb={id:"print-content"},kb=de({__name:"PrintContainer",props:{width:null},setup(e){const t=e;q(te);const n=S(()=>t.width),o=S(()=>t.width/mn),s=S(()=>n.value/o.value),i=S(()=>s.value<mn?n.value/Wn:o.value*mn/Wn),l=je.slice(0,-1),a=S(()=>({"select-none":!_e.selectable,"slidev-code-line-numbers":_e.lineNumbers}));return ft(Xu,i),(c,u)=>(k(),R("div",{id:"print-container",class:Re(w(a))},[r("div",wb,[(k(!0),R(ke,null,ms(w(l),p=>(k(),Q(bb,{key:p.path,route:p},null,8,["route"]))),128))]),vt(c.$slots,"controls")],2))}});const xb=de({__name:"Print",setup(e){q(te);const t=Ln.canvasWidth,n=Math.round(t/Ln.aspectRatio)+1;function o(s,{slots:i}){if(i.default)return lt("style",i.default())}return hs(()=>{fo?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(s,i)=>(k(),R(ke,null,[W(o,null,{default:ee(()=>[v(" @page { size: "+en(w(t))+"px "+en(n)+"px; margin: 0px; } ",1)]),_:1}),r("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Ue(w(ep))},[W(kb,{class:"w-full h-full",style:Ue({background:"var(--slidev-slide-container-background, black)"}),width:w(Vn).width.value},null,8,["style","width"])],4)],64))}});const Eb={class:"slidev-layout end"},Ab={__name:"end",setup(e){return q(te),(t,n)=>(k(),R("div",Eb," END "))}},Cb=_t(Ab,[["__scopeId","data-v-dfc14d32"]]),Ob={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Sb=r("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),$b=[Sb];function Pb(e,t){return k(),R("svg",Ob,$b)}const Tb={name:"carbon-logo-github",render:Pb};function hc(e){return e.startsWith("/")?"/talk-about-monorepo/"+e.slice(1):e}function Mb(e,t=!1){const n=e&&["#","rgb","hsl"].some(s=>e.indexOf(s)===0),o={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${hc(e)})`:`url("${hc(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const Rb={class:"my-auto w-full"},Db=de({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){const t=e;q(te);const n=S(()=>Mb(t.background,!0));return(o,s)=>(k(),R("div",{class:"slidev-layout cover text-center",style:Ue(w(n))},[r("div",Rb,[vt(o.$slots,"default")])],4))}}),Ib=r("h1",null,"Talk about Monorepo",-1),Lb=r("p",null,"Everything you need to know about monorepos",-1),Fb={class:"pt-12"},Nb=v(" start"),Bb={href:"https://github.com/tangdaoyuan/talk-about-monorepo",target:"_blank",alt:"GitHub",class:"abs-br m-6 text-xl icon-btn opacity-50 !border-none !hover:text-white"},jb={__name:"1",setup(e){const t={theme:"seriph",background:"/background.jpeg",class:"text-center",highlighter:"shiki",colorSchema:"dark",srcSequence:"./src/welcome.md"},n=q(te);return(o,s)=>{const i=Mp,l=Tb;return k(),Q(Db,Le(Ie(t)),{default:ee(()=>[Ib,Lb,r("div",Fb,[r("span",{onClick:s[0]||(s[0]=(...a)=>w(n).nav.next&&w(n).nav.next(...a)),class:"px-2 p-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[Nb,W(i,{class:"inline"})])]),r("a",Bb,[W(l)])]),_:1},16)}}};function mc(e){return e.startsWith("/")?"/talk-about-monorepo/"+e.slice(1):e}function Wb(e,t=!1){const n=e&&e[0]==="#"&&e.startsWith("rgb"),o={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${mc(e)})`:`url("${mc(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const Vb={class:"grid grid-cols-2 w-full h-full"},ml=de({__name:"image-right",props:{image:{type:String},class:{type:String}},setup(e){const t=e;q(te);const n=S(()=>Wb(t.image));return(o,s)=>(k(),R("div",Vb,[r("div",{class:Re(["slidev-layout default",t.class])},[vt(o.$slots,"default")],2),r("div",{class:"w-full w-full",style:Ue(w(n))},null,4)]))}});const Eo=e=>(Et("data-v-af535469"),e=e(),At(),e),Hb=Eo(()=>r("h1",null,"What is a Monorepo?",-1)),zb=Eo(()=>r("blockquote",null,[r("p",null,`"In version control systems, a monorepo ("mono" meaning 'single' and "repo" being short for 'repository') is a software development strategy where code for many projects is stored in the same repository."`),r("p",null,[r("a",{href:"https://en.wikipedia.org/wiki/Monorepo",target:"_blank",rel:"noopener"},"\u2014\u2014 wiki")])],-1)),qb=Eo(()=>r("br",null,null,-1)),Ub=Eo(()=>r("p",null,[v("MonoRepo is a "),r("strong",null,"software development strategy"),v(" where code for many projects is stored in the same repository. "),r("br")],-1)),Yb=Eo(()=>r("ul",null,[r("li",null,"\u{1F4A1} Monorepo is a strategy, not a technology."),r("li",null,"\u{1F511} strategy main premise is to keep code for many projects in the same repository.")],-1)),Kb=Eo(()=>r("br",null,null,-1)),Gb={__name:"2",setup(e){const t={layout:"image-right",image:"/monorepo.png",srcSequence:"./src/what-is-monorepo.md"};return q(te),(n,o)=>(k(),Q(ml,Le(Ie(t)),{default:ee(()=>[Hb,zb,qb,Ub,Yb,Kb]),_:1},16))}},Zb=_t(Gb,[["__scopeId","data-v-af535469"]]),Xb={class:"slidev-layout default"},ot={__name:"default",setup(e){return q(te),(t,n)=>(k(),R("div",Xb,[vt(t.$slots,"default")]))}};const Ao=e=>(Et("data-v-a3351fb9"),e=e(),At(),e),Jb=Ao(()=>r("h1",null,"And Next, What is a Monorepo?",-1)),Qb=Ao(()=>r("p",null,"With the advent of some monorepo tools (such as bazel, gradle, Lerna, Nx, \u2026etc), Monorepo alas has a new definition.",-1)),e1=Ao(()=>r("blockquote",null,[r("p",null,'"A monorepo is a single repository containing multiple distinct projects**, with well-defined relationships."'),r("p",null,[r("a",{href:"https://github.com/nrwl/monorepo.tools",target:"_blank",rel:"noopener"},"\u2014\u2014 nrwl")])],-1)),t1=Ao(()=>r("br",null,null,-1)),n1=Ao(()=>r("ul",null,[r("li",null,"\u{1F4A1} Monorepo is a strategy, not a technology."),r("li",null,"\u{1F511} strategy main premise is to keep code for many projects in the same repository."),r("li",null,[v("\u{1F511} Specially: if there are no "),r("strong",null,"well defined relationships"),v(" among projects, we would not call it a monorepo.")])],-1)),o1=Ao(()=>r("br",null,null,-1)),s1={__name:"3",setup(e){const t={srcSequence:"./src/what-is-monorepo2.md"};return q(te),(n,o)=>(k(),Q(ot,Le(Ie(t)),{default:ee(()=>[Jb,Qb,e1,t1,n1,o1]),_:1},16))}},r1=_t(s1,[["__scopeId","data-v-a3351fb9"]]),Fp=de({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var i,l;const e=xt("click"),t=xt("after"),n=(a,c,u)=>Be(a,[[c,this.at!=null?+this.at+u:null,"",{hide:this.hide,fade:this.fade}]]);let o=(l=(i=this.$slots).default)==null?void 0:l.call(i);if(!o)return;o=Ju(o);const s=a=>a.map((c,u)=>zn(c)?n(lt(c),u%this.every===0?e:t,Math.floor(u/this.every)):c);return o.length===1&&["ul","ol"].includes(o[0].type)&&Array.isArray(o[0].children)?lt(o[0],{},[s(o[0].children)]):s(o)}}),gs=de({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return W(Fp,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),br=de({render(){var o,s;const e=xt("after");function t(i,l){return Be(i,[[l]])}let n=(s=(o=this.$slots).default)==null?void 0:s.call(o);if(!!n)return n=Ju(n),n.map(i=>t(lt(i),e))}});const Ot=e=>(Et("data-v-21660e3f"),e=e(),At(),e),i1=Ot(()=>r("h1",null,"Monorepo vs Monolith",-1)),l1=Ot(()=>r("h2",null,"Monolith",-1)),a1=Ot(()=>r("br",null,null,-1)),c1=Ot(()=>r("ul",null,[r("li",null,"\u274C It forces us to release together."),r("li",null,"\u274C It lets other teams will change my code without my knowing."),r("li",null,"\u274C It creates a big ball of mud. It makes applications hard to understand and maintain."),r("li",null,"\u274C It doesn\u2019t scale.")],-1)),u1=Ot(()=>r("p",null,'If we encounter above problems, we might call it bad pratice, or a bad monorepo, or "monolith"',-1)),p1=Ot(()=>r("p",null,"Actually, we are often affected by lerna when we talk about our monorepo, it is not what Google, Facebook, Microsoft, or Uber mean when they talk about their monorepos.",-1)),d1=[l1,a1,c1,u1,p1],f1=Ot(()=>r("h2",null,"A Good Monorepo",-1)),h1=Ot(()=>r("br",null,null,-1)),m1=Ot(()=>r("ul",null,[r("li",null,"\u2705 A good CI/CD practice to build and store artifacts, and deploy them."),r("li",null,"\u2705 Configure ownership on the folder basis for Auth."),r("li",null,"\u2705 Remove unexpected dependencies and Public Api Management"),r("li",null,"\u2705 False proposition. you don\u2019t need to rebuild and retest what is affected.")],-1)),g1=Ot(()=>r("h2",null,"Real Challenges",-1)),y1=Ot(()=>r("br",null,null,-1)),v1=Ot(()=>r("ul",null,[r("li",null,"\u{1F4AA}\u{1F3FB} Trunk-based development is a lot more important"),r("li",null,"\u{1F4AA}\u{1F3FB} Not all services work well with monorepos"),r("li",null,"\u{1F4AA}\u{1F3FB} Require more sophisticated CI setup"),r("li",null,"\u{1F4AA}\u{1F3FB} Require you to think about large-scale changes")],-1)),_1={__name:"4",setup(e){const t={srcSequence:"./src/monorepo-vs-monolith.md"};return q(te),(n,o)=>{const s=br,i=gs,l=xt("click-hide");return k(),Q(ot,Le(Ie(t)),{default:ee(()=>[i1,Be((k(),R("div",null,d1)),[[l]]),W(s,null,{default:ee(()=>[f1,h1,m1]),_:1}),W(i,{at:"2"},{default:ee(()=>[g1,y1,v1]),_:1})]),_:1},16)}}},b1=_t(_1,[["__scopeId","data-v-21660e3f"]]);const kn=e=>(Et("data-v-d0d69e35"),e=e(),At(),e),w1=kn(()=>r("h1",null,"Why a Monorepo",-1)),k1=kn(()=>r("h2",null,"Polyrepo",-1)),x1=kn(()=>r("br",null,null,-1)),E1=kn(()=>r("blockquote",null,[r("p",null,"A polyrepo is the current standard way of developing applications: a repo for each team, application, or project. And it\u2019s common that each repo has a single build artifact, and simple build pipeline.")],-1)),A1=kn(()=>r("br",null,null,-1)),C1=kn(()=>r("h3",null,"Drawbacks",-1)),O1=kn(()=>r("br",null,null,-1)),S1=kn(()=>r("ul",null,[r("li",null,"\u{1F622} Cumbersome code sharing"),r("li",null,"\u{1F622} Significant code duplication"),r("li",null,"\u{1F622} Costly cross-repo changes to shared libraries and consumers"),r("li",null,"\u{1F622} Inconsistent tooling")],-1)),$1={__name:"5",setup(e){const t={layout:"image-right",image:"https://monorepo.tools/images/polyrepo-practice.svg",srcSequence:"./src/why-monorepo.md"};return q(te),(n,o)=>{const s=gs;return k(),Q(ml,Le(Ie(t)),{default:ee(()=>[w1,k1,x1,E1,A1,W(s,null,{default:ee(()=>[C1,O1,S1]),_:1})]),_:1},16)}}},P1=_t($1,[["__scopeId","data-v-d0d69e35"]]),T1=r("h1",null,"Why a Monorepo",-1),M1=r("h2",null,"Compared to a Polyrepo",-1),R1=r("br",null,null,-1),D1=r("ul",null,[r("li",null,"\u{1F44C} No overhead to create new projects"),r("li",null,"\u{1F44C} Everything at that current commit works together. Changes can be verified across all affected parts of the organization"),r("li",null,"\u{1F44C} One version of everything"),r("li",null,"\u{1F44C} Easy to split code into composable modules"),r("li",null,"\u{1F44C} Easier dependency management"),r("li",null,"\u{1F44C} Consistent developer experience")],-1),I1=r("h2",null,"Extra Feature",-1),L1=r("br",null,null,-1),F1=r("ul",null,[r("li",null,"\u{1F44C} Code editors and IDEs are \u201Cworkspace\u201D aware")],-1),N1={__name:"6",setup(e){const t={srcSequence:"./src/why-monorepo2.md"};return q(te),(n,o)=>{const s=gs;return k(),Q(ot,Le(Ie(t)),{default:ee(()=>[T1,M1,R1,D1,W(s,null,{default:ee(()=>[I1,L1,F1]),_:1})]),_:1},16)}}},B1=r("h1",null,"Monorepo tools try to solve",-1),j1={class:"grid grid-cols-2"},W1=r("div",null,[r("h2",null,"\u{1F680} Fast"),r("br"),r("ul",null,[r("li",null,"Local computation caching")]),ne(" The ability to store and replay file and process output of tasks. On the same machine, you will never build or test the same thing twice. "),r("ul",null,[r("li",null,"Local task orchestration")]),ne(" The ability to run tasks in the correct order and in parallel. All the listed tools can do it in about the same way, except Lerna, which is more limited. "),r("ul",null,[r("li",null,"Distributed computation caching")]),ne(" The ability to share cache artifacts across different environments. This means that your whole organisation, including CI agents, will never build or test the same thing twice. "),r("ul",null,[r("li",null,"Distributed task execution")]),ne(" The ability to distribute a command across many machines, while largely preserving the dev ergonomics of running it on a single machine.  "),r("ul",null,[r("li",null,"Transparent remote execution")]),ne(" The ability to execute any command on multiple machines while developing locally. "),r("ul",null,[r("li",null,"Detecting affected projects/packages")]),ne(" Determine what might be affected by a change, to run only build/test affected projects. ")],-1),V1=r("h2",null,"\u{1F914} Understandable",-1),H1=r("br",null,null,-1),z1=r("ul",null,[r("li",null,"Workspace analysis"),r("li",null,"Dependency graph visualization")],-1),q1=r("h2",null,"\u{1F4A1} Manageable",-1),U1=r("br",null,null,-1),Y1=r("ul",null,[r("li",null,"Source code sharing")],-1),K1=r("ul",null,[r("li",null,"Consistent tooling"),r("li",null,"Code generation"),r("li",null,"Project constraints and visibility")],-1),G1={__name:"7",setup(e){const t={srcSequence:"./src/monorepo-tools.md"};return q(te),(n,o)=>{const s=xt("click");return k(),Q(ot,Le(Ie(t)),{default:ee(()=>[B1,r("div",j1,[W1,Be((k(),R("div",null,[V1,H1,z1,q1,U1,Y1,ne(` Facilitates sharing of discrete pieces of source code.
  `),K1])),[[s]])])]),_:1},16)}}};const ys=e=>(Et("data-v-82fb0d83"),e=e(),At(),e),Z1=ys(()=>r("h1",null,"Monorepo tools",-1)),X1=ys(()=>r("table",null,[r("thead",null,[r("tr",null,[r("th",null,[r("strong",null,"Fast")]),r("th",{style:{"text-align":"center"}},"Bazel"),r("th",{style:{"text-align":"center"}},"Gradle"),r("th",{style:{"text-align":"center"}},"Lage"),r("th",{style:{"text-align":"center"}},"Nx"),r("th",{style:{"text-align":"center"}},"Pants"),r("th",{style:{"text-align":"center"}},"Rush"),r("th",{style:{"text-align":"center"}},"Lerna"),r("th",{style:{"text-align":"center"}},"Turborepo")])]),r("tbody",null,[r("tr",null,[r("td",null,"Local computation caching"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u274C"),r("td",{style:{"text-align":"center"}},"\u2705")]),r("tr",null,[r("td",null,"Local task orchestration"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u26A0\uFE0F"),r("td",{style:{"text-align":"center"}},"\u2705")]),r("tr",null,[r("td",null,"Distributed computation caching"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u274C"),r("td",{style:{"text-align":"center"}},"\u2705")]),r("tr",null,[r("td",null,"Distributed task execution"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u26A0\uFE0F"),r("td",{style:{"text-align":"center"}},"\u274C"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u26A0\uFE0F"),r("td",{style:{"text-align":"center"}},"\u274C"),r("td",{style:{"text-align":"center"}},"\u274C")]),r("tr",null,[r("td",null,"Transparent remote execution"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u274C"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u274C"),r("td",{style:{"text-align":"center"}},"\u274C"),r("td",{style:{"text-align":"center"}},"\u274C"),r("td",{style:{"text-align":"center"}},"\u274C"),r("td",{style:{"text-align":"center"}},"\u26A0\uFE0F")]),r("tr",null,[r("td",null,"Detecting affected projects/packages"),r("td",{style:{"text-align":"center"}},"\u26A0\uFE0F"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705")])])],-1)),J1=[X1],Q1=ys(()=>r("table",null,[r("thead",null,[r("tr",null,[r("th",null,[r("strong",null,"Understandable")]),r("th",{style:{"text-align":"center"}},"Bazel"),r("th",{style:{"text-align":"center"}},"Gradle"),r("th",{style:{"text-align":"center"}},"Lage"),r("th",{style:{"text-align":"center"}},"Nx"),r("th",{style:{"text-align":"center"}},"Pants"),r("th",{style:{"text-align":"center"}},"Rush"),r("th",{style:{"text-align":"center"}},"Lerna"),r("th",{style:{"text-align":"center"}},"Turborepo")])]),r("tbody",null,[r("tr",null,[r("td",null,"Workspace analysis"),r("td",{style:{"text-align":"center"}},"\u26A0\uFE0F"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705")]),r("tr",null,[r("td",null,"Dependency graph visualization"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u26A0\uFE0F"),r("td",{style:{"text-align":"center"}},"\u26A0\uFE0F"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u26A0\uFE0F"),r("td",{style:{"text-align":"center"}},"\u26A0\uFE0F"),r("td",{style:{"text-align":"center"}},"\u26A0\uFE0F"),r("td",{style:{"text-align":"center"}},"\u2705")])])],-1)),ew=ys(()=>r("br",null,null,-1)),tw=ys(()=>r("table",null,[r("thead",null,[r("tr",null,[r("th",null,[r("strong",null,"Manageable")]),r("th",{style:{"text-align":"center"}},"Bazel"),r("th",{style:{"text-align":"center"}},"Gradle"),r("th",{style:{"text-align":"center"}},"Lage"),r("th",{style:{"text-align":"center"}},"Nx"),r("th",{style:{"text-align":"center"}},"Pants"),r("th",{style:{"text-align":"center"}},"Rush"),r("th",{style:{"text-align":"center"}},"Lerna"),r("th",{style:{"text-align":"center"}},"Turborepo")])]),r("tbody",null,[r("tr",null,[r("td",null,"Source code sharing"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705")]),r("tr",null,[r("td",null,"Consistent tooling"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u274C"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u274C"),r("td",{style:{"text-align":"center"}},"\u274C"),r("td",{style:{"text-align":"center"}},"\u274C")]),r("tr",null,[r("td",null,"Code generation"),r("td",{style:{"text-align":"center"}},"\u26A0\uFE0F"),r("td",{style:{"text-align":"center"}},"\u26A0\uFE0F"),r("td",{style:{"text-align":"center"}},"\u26A0\uFE0F"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u26A0\uFE0F"),r("td",{style:{"text-align":"center"}},"\u26A0\uFE0F")]),r("tr",null,[r("td",null,"Project constraints and visibility"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u26A0\uFE0F"),r("td",{style:{"text-align":"center"}},"\u26A0\uFE0F"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u26A0\uFE0F"),r("td",{style:{"text-align":"center"}},"\u2705"),r("td",{style:{"text-align":"center"}},"\u26A0\uFE0F"),r("td",{style:{"text-align":"center"}},"\u26A0\uFE0F")])])],-1)),nw={__name:"8",setup(e){const t={srcSequence:"./src/monorepo-tools-compare.md"};return q(te),(n,o)=>{const s=br,i=xt("click-hide");return k(),Q(ot,Le(Ie(t)),{default:ee(()=>[Z1,Be((k(),R("div",null,J1)),[[i]]),W(s,null,{default:ee(()=>[Q1,ew,tw]),_:1})]),_:1},16)}}},ow=_t(nw,[["__scopeId","data-v-82fb0d83"]]),sw=r("h1",null,"Who uses a monorepo",-1),rw=r("p",null,"Now, almost all mid or large front-end projects",-1),iw=r("ul",null,[r("li",null,"react (yarn workspace)"),r("li",null,"vue 2 & 3 (pnpm workspace)"),r("li",null,"angular (bazel)"),r("li",null,"preact (custom)"),r("li",null,"alpine (npm workspace)"),r("li",null,"nextjs (pnpm workspace)"),r("li",null,"element-plus (pnpm workspace)"),r("li",null,"nuxt3 (lerna + yarn workspace)"),r("li",null,"\u2026etc")],-1),lw=r("h2",null,"\u{1F631} Wait\u2753 Workspace\u2753",-1),aw={__name:"9",setup(e){const t={srcSequence:"./src/who-use-monorepo.md"};return q(te),(n,o)=>{const s=gs;return k(),Q(ot,Le(Ie(t)),{default:ee(()=>[sw,rw,iw,W(s,null,{default:ee(()=>[lw]),_:1})]),_:1},16)}}},cw={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},uw=r("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),pw=[uw];function dw(e,t){return k(),R("svg",cw,pw)}const fw={name:"ph-clipboard",render:dw},hw={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},mw=r("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),gw=[mw];function yw(e,t){return k(),R("svg",hw,gw)}const vw={name:"ph-check-circle",render:yw};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Np(e){return typeof e>"u"||e===null}function _w(e){return typeof e=="object"&&e!==null}function bw(e){return Array.isArray(e)?e:Np(e)?[]:[e]}function ww(e,t){var n,o,s,i;if(t)for(i=Object.keys(t),n=0,o=i.length;n<o;n+=1)s=i[n],e[s]=t[s];return e}function kw(e,t){var n="",o;for(o=0;o<t;o+=1)n+=e;return n}function xw(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Ew=Np,Aw=_w,Cw=bw,Ow=kw,Sw=xw,$w=ww,gl={isNothing:Ew,isObject:Aw,toArray:Cw,repeat:Ow,isNegativeZero:Sw,extend:$w};function Bp(e,t){var n="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),o+" "+n):o}function cs(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Bp(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}cs.prototype=Object.create(Error.prototype);cs.prototype.constructor=cs;cs.prototype.toString=function(t){return this.name+": "+Bp(this,t)};var Dn=cs,Pw=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Tw=["scalar","sequence","mapping"];function Mw(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(o){t[String(o)]=n})}),t}function Rw(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(Pw.indexOf(n)===-1)throw new Dn('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=Mw(t.styleAliases||null),Tw.indexOf(this.kind)===-1)throw new Dn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Ge=Rw;function gc(e,t){var n=[];return e[t].forEach(function(o){var s=n.length;n.forEach(function(i,l){i.tag===o.tag&&i.kind===o.kind&&i.multi===o.multi&&(s=l)}),n[s]=o}),n}function Dw(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function o(s){s.multi?(e.multi[s.kind].push(s),e.multi.fallback.push(s)):e[s.kind][s.tag]=e.fallback[s.tag]=s}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(o);return e}function $i(e){return this.extend(e)}$i.prototype.extend=function(t){var n=[],o=[];if(t instanceof Ge)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new Dn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(i){if(!(i instanceof Ge))throw new Dn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(i.loadKind&&i.loadKind!=="scalar")throw new Dn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(i.multi)throw new Dn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(i){if(!(i instanceof Ge))throw new Dn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var s=Object.create($i.prototype);return s.implicit=(this.implicit||[]).concat(n),s.explicit=(this.explicit||[]).concat(o),s.compiledImplicit=gc(s,"implicit"),s.compiledExplicit=gc(s,"explicit"),s.compiledTypeMap=Dw(s.compiledImplicit,s.compiledExplicit),s};var Iw=$i,Lw=new Ge("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Fw=new Ge("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Nw=new Ge("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Bw=new Iw({explicit:[Lw,Fw,Nw]});function jw(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function Ww(){return null}function Vw(e){return e===null}var Hw=new Ge("tag:yaml.org,2002:null",{kind:"scalar",resolve:jw,construct:Ww,predicate:Vw,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function zw(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function qw(e){return e==="true"||e==="True"||e==="TRUE"}function Uw(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Yw=new Ge("tag:yaml.org,2002:bool",{kind:"scalar",resolve:zw,construct:qw,predicate:Uw,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Kw(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Gw(e){return 48<=e&&e<=55}function Zw(e){return 48<=e&&e<=57}function Xw(e){if(e===null)return!1;var t=e.length,n=0,o=!1,s;if(!t)return!1;if(s=e[n],(s==="-"||s==="+")&&(s=e[++n]),s==="0"){if(n+1===t)return!0;if(s=e[++n],s==="b"){for(n++;n<t;n++)if(s=e[n],s!=="_"){if(s!=="0"&&s!=="1")return!1;o=!0}return o&&s!=="_"}if(s==="x"){for(n++;n<t;n++)if(s=e[n],s!=="_"){if(!Kw(e.charCodeAt(n)))return!1;o=!0}return o&&s!=="_"}if(s==="o"){for(n++;n<t;n++)if(s=e[n],s!=="_"){if(!Gw(e.charCodeAt(n)))return!1;o=!0}return o&&s!=="_"}}if(s==="_")return!1;for(;n<t;n++)if(s=e[n],s!=="_"){if(!Zw(e.charCodeAt(n)))return!1;o=!0}return!(!o||s==="_")}function Jw(e){var t=e,n=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(n=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function Qw(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!gl.isNegativeZero(e)}var ek=new Ge("tag:yaml.org,2002:int",{kind:"scalar",resolve:Xw,construct:Jw,predicate:Qw,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),tk=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function nk(e){return!(e===null||!tk.test(e)||e[e.length-1]==="_")}function ok(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var sk=/^[-+]?[0-9]+e/;function rk(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(gl.isNegativeZero(e))return"-0.0";return n=e.toString(10),sk.test(n)?n.replace("e",".e"):n}function ik(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||gl.isNegativeZero(e))}var lk=new Ge("tag:yaml.org,2002:float",{kind:"scalar",resolve:nk,construct:ok,predicate:ik,represent:rk,defaultStyle:"lowercase"}),ak=Bw.extend({implicit:[Hw,Yw,ek,lk]}),ck=ak,jp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Wp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function uk(e){return e===null?!1:jp.exec(e)!==null||Wp.exec(e)!==null}function pk(e){var t,n,o,s,i,l,a,c=0,u=null,p,f,d;if(t=jp.exec(e),t===null&&(t=Wp.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],o=+t[2]-1,s=+t[3],!t[4])return new Date(Date.UTC(n,o,s));if(i=+t[4],l=+t[5],a=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(p=+t[10],f=+(t[11]||0),u=(p*60+f)*6e4,t[9]==="-"&&(u=-u)),d=new Date(Date.UTC(n,o,s,i,l,a,c)),u&&d.setTime(d.getTime()-u),d}function dk(e){return e.toISOString()}var fk=new Ge("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:uk,construct:pk,instanceOf:Date,represent:dk});function hk(e){return e==="<<"||e===null}var mk=new Ge("tag:yaml.org,2002:merge",{kind:"scalar",resolve:hk}),yl=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function gk(e){if(e===null)return!1;var t,n,o=0,s=e.length,i=yl;for(n=0;n<s;n++)if(t=i.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function yk(e){var t,n,o=e.replace(/[\r\n=]/g,""),s=o.length,i=yl,l=0,a=[];for(t=0;t<s;t++)t%4===0&&t&&(a.push(l>>16&255),a.push(l>>8&255),a.push(l&255)),l=l<<6|i.indexOf(o.charAt(t));return n=s%4*6,n===0?(a.push(l>>16&255),a.push(l>>8&255),a.push(l&255)):n===18?(a.push(l>>10&255),a.push(l>>2&255)):n===12&&a.push(l>>4&255),new Uint8Array(a)}function vk(e){var t="",n=0,o,s,i=e.length,l=yl;for(o=0;o<i;o++)o%3===0&&o&&(t+=l[n>>18&63],t+=l[n>>12&63],t+=l[n>>6&63],t+=l[n&63]),n=(n<<8)+e[o];return s=i%3,s===0?(t+=l[n>>18&63],t+=l[n>>12&63],t+=l[n>>6&63],t+=l[n&63]):s===2?(t+=l[n>>10&63],t+=l[n>>4&63],t+=l[n<<2&63],t+=l[64]):s===1&&(t+=l[n>>2&63],t+=l[n<<4&63],t+=l[64],t+=l[64]),t}function _k(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var bk=new Ge("tag:yaml.org,2002:binary",{kind:"scalar",resolve:gk,construct:yk,predicate:_k,represent:vk}),wk=Object.prototype.hasOwnProperty,kk=Object.prototype.toString;function xk(e){if(e===null)return!0;var t=[],n,o,s,i,l,a=e;for(n=0,o=a.length;n<o;n+=1){if(s=a[n],l=!1,kk.call(s)!=="[object Object]")return!1;for(i in s)if(wk.call(s,i))if(!l)l=!0;else return!1;if(!l)return!1;if(t.indexOf(i)===-1)t.push(i);else return!1}return!0}function Ek(e){return e!==null?e:[]}var Ak=new Ge("tag:yaml.org,2002:omap",{kind:"sequence",resolve:xk,construct:Ek}),Ck=Object.prototype.toString;function Ok(e){if(e===null)return!0;var t,n,o,s,i,l=e;for(i=new Array(l.length),t=0,n=l.length;t<n;t+=1){if(o=l[t],Ck.call(o)!=="[object Object]"||(s=Object.keys(o),s.length!==1))return!1;i[t]=[s[0],o[s[0]]]}return!0}function Sk(e){if(e===null)return[];var t,n,o,s,i,l=e;for(i=new Array(l.length),t=0,n=l.length;t<n;t+=1)o=l[t],s=Object.keys(o),i[t]=[s[0],o[s[0]]];return i}var $k=new Ge("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Ok,construct:Sk}),Pk=Object.prototype.hasOwnProperty;function Tk(e){if(e===null)return!0;var t,n=e;for(t in n)if(Pk.call(n,t)&&n[t]!==null)return!1;return!0}function Mk(e){return e!==null?e:{}}var Rk=new Ge("tag:yaml.org,2002:set",{kind:"mapping",resolve:Tk,construct:Mk});ck.extend({implicit:[fk,mk],explicit:[bk,Ak,$k,Rk]});function yc(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var Dk=new Array(256),Ik=new Array(256);for(var Qn=0;Qn<256;Qn++)Dk[Qn]=yc(Qn)?1:0,Ik[Qn]=yc(Qn);function Lk(e){return Array.from(new Set(e))}function vc(...e){let t,n,o;e.length===1?(t=0,o=1,[n]=e):[t,n,o=1]=e;const s=[];let i=t;for(;i<n;)s.push(i),i+=o||1;return s}function Fk(e,t){if(!t||t==="all"||t==="*")return vc(1,e+1);const n=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))n.push(+o);else{const[s,i]=o.split("-",2);n.push(...vc(+s,i?+i+1:e+1))}return Lk(n).filter(o=>o<=e).sort((o,s)=>o-s)}const Nk=["title"],wr=de({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;q(te);const n=q(Ho),o=q(Rn),s=q(zo);function i(f=5){const d=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=h.length;for(let b=0;b<f;b++)d.push(h.charAt(Math.floor(Math.random()*m)));return d.join("")}const l=V(),a=Yn();wo(()=>{const f=t.at==null?o==null?void 0:o.value.length:t.at,d=S(()=>s!=null&&s.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(f||0)),t.ranges.length-1)),h=S(()=>t.ranges[d.value]||"");if(t.ranges.length>=2&&!(s!=null&&s.value)){const m=i(),b=_m(t.ranges.length-1).map(_=>m+_);o!=null&&o.value&&(o.value.push(...b),mr(()=>b.forEach(_=>gi(o.value,_)),a))}hs(()=>{if(!l.value)return;const b=l.value.querySelector(".shiki-dark")?Array.from(l.value.querySelectorAll(".shiki")):[l.value];for(const _ of b){const C=Array.from(_.querySelectorAll(".line")),A=Fk(C.length,h.value);if(C.forEach((E,O)=>{const F=A.includes(O+1);E.classList.toggle(Tn,!0),E.classList.toggle("highlighted",F),E.classList.toggle("dishonored",!F)}),t.maxHeight){const E=_.querySelector(".line.highlighted");E&&E.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=wg();function p(){var d,h;const f=(h=(d=l.value)==null?void 0:d.querySelector(".slidev-code"))==null?void 0:h.textContent;f&&u(f)}return(f,d)=>{const h=vw,m=fw;return k(),R("div",{ref_key:"el",ref:l,class:"slidev-code-wrapper relative group",style:Ue({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[vt(f.$slots,"default"),w(_e).codeCopy?(k(),R("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:w(c)?"Copied":"Copy",onClick:d[0]||(d[0]=b=>p())},[w(c)?(k(),Q(h,{key:0,class:"p-2 w-8 h-8"})):(k(),Q(m,{key:1,class:"p-2 w-8 h-8"}))],8,Nk)):ne("v-if",!0)],4)}}});const xn=e=>(Et("data-v-235ef0ee"),e=e(),At(),e),Bk=xn(()=>r("h1",null,"Workspaces",-1)),jk=xn(()=>r("p",null,[v("In npm-cli official docs: "),r("br")],-1)),Wk=xn(()=>r("blockquote",null,[r("p",null,[v("Workspaces is a generic term that refers to the set of features in the npm cli that provides support to "),r("strong",null,"managing multiple packages"),v(" from your local file system from within a singular top-level, root package.")]),r("p",null,"This set of features makes up for a much more streamlined workflow handling linked packages from the local file system. Automating the linking process as part of npm install and avoiding manually having to use npm link in order to add references to packages that should be symlinked into the current node_modules folder.")],-1)),Vk=xn(()=>r("br",null,null,-1)),Hk=xn(()=>r("p",null,"Simple Configuration",-1)),zk=xn(()=>r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#858585"}},"{")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  "),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#E0A569"}},"name"),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#858585"}},":"),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#C98A7D"}},'"my-workspaces-powered-project"'),r("span",{style:{color:"#858585"}},",")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  "),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#E0A569"}},"workspaces"),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#858585"}},":"),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#858585"}},"[")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"    "),r("span",{style:{color:"#C98A7D"}},'"packages/a"'),r("span",{style:{color:"#858585"}},",")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"    "),r("span",{style:{color:"#C98A7D"}},'"packages/b"'),r("span",{style:{color:"#858585"}},",")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  "),r("span",{style:{color:"#858585"}},"]")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#858585"}},"}")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#8E8F8B"}},"{")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  "),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#B58451"}},"name"),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#8E8F8B"}},":"),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#B56959"}},'"my-workspaces-powered-project"'),r("span",{style:{color:"#8E8F8B"}},",")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  "),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#B58451"}},"workspaces"),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#8E8F8B"}},":"),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#8E8F8B"}},"[")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"    "),r("span",{style:{color:"#B56959"}},'"packages/a"'),r("span",{style:{color:"#8E8F8B"}},",")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"    "),r("span",{style:{color:"#B56959"}},'"packages/b"'),r("span",{style:{color:"#8E8F8B"}},",")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  "),r("span",{style:{color:"#8E8F8B"}},"]")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8E8F8B"}},"}")])])])],-1)),qk=xn(()=>r("p",null,"\u{1F4A1} Conclusion",-1)),Uk=xn(()=>r("p",null,[r("code",null,"Workspaces"),v(" can help to build a monorepo (npm >= 7)")],-1)),Yk={__name:"10",setup(e){const t={srcSequence:"./src/workspace.md"};return q(te),(n,o)=>{const s=wr,i=br,l=xt("click-hide");return k(),Q(ot,Le(Ie(t)),{default:ee(()=>[Bk,Be((k(),R("div",null,[jk,Wk,Vk,Hk,W(s,Lt({},{ranges:["all","4-5","all"]}),{default:ee(()=>[zk]),_:1},16)])),[[l]]),W(i,null,{default:ee(()=>[qk,Uk]),_:1})]),_:1},16)}}},Kk=_t(Yk,[["__scopeId","data-v-235ef0ee"]]),Gk="/talk-about-monorepo/pnpm-benchmark.svg";const En=e=>(Et("data-v-99c5c392"),e=e(),At(),e),Zk=En(()=>r("h1",null,"Yarn workspace and Pnpm workspace",-1)),Xk=En(()=>r("p",null,"In Yarn official docs",-1)),Jk=En(()=>r("p",null,[r("i",null,"Yarn workspace compare to Lerna: ")],-1)),Qk=En(()=>r("blockquote",null,[r("p",null,"Yarn\u2019s workspaces are the low-level primitives that tools like Lerna can (and do!) use. They will never try to support the high-level feature that Lerna offers, but by implementing the core logic of the resolution and linking steps inside Yarn itself we hope to enable new usages and improve performance.")],-1)),ex=En(()=>r("p",null,"In Pnpm official docs:",-1)),tx=En(()=>r("blockquote",null,[r("p",null,"pnpm has built-in support for monorepositories (AKA multi-package repositories, multi-project repositories, or monolithic repositories). You can create a workspace to unite multiple projects inside a single repository.")],-1)),nx={class:"flex items-center h-11/12"},ox={class:"w-1/2 h-full"},sx=En(()=>r("img",{class:"h-full",src:Gk},null,-1)),rx=[sx],ix={class:"w-1/2 h-full text-center flex items-center justify-center"},lx=En(()=>r("span",{class:"text-6xl"},"Pnpm > Yarn 1",-1)),ax=[lx],cx={__name:"11",setup(e){const t={clicks:2,srcSequence:"./src/yarn-vs-pnpm-workspace.md"};return q(te),(n,o)=>{const s=xt("click-hide"),i=xt("click");return k(),Q(ot,Le(Ie(t)),{default:ee(()=>[Zk,Be((k(),R("div",null,[Xk,Jk,Qk,ne(" From other way, yarn and yarn workspace have do lost of works that Lerna does  "),ex,tx,ne(" Pnpm say: my workspaces == monorepo ")])),[[s]]),r("div",nx,[Be((k(),R("div",ox,rx)),[[i,1]]),Be((k(),R("div",ix,ax)),[[i,2]])])]),_:1},16)}}},ux=_t(cx,[["__scopeId","data-v-99c5c392"]]),px=["href","innerHTML"],dx=["href"],fx=de({__name:"Link",props:{to:null,title:null},setup(e){return q(te),(t,n)=>{const o=os("RouterLink");return!w(fo)&&e.title?(k(),Q(o,{key:0,to:String(e.to),onClick:n[0]||(n[0]=s=>s.target.blur()),innerHTML:e.title},null,8,["to","innerHTML"])):!w(fo)&&!e.title?(k(),Q(o,{key:1,to:String(e.to),onClick:n[1]||(n[1]=s=>s.target.blur())},{default:ee(()=>[vt(t.$slots,"default")]),_:3},8,["to"])):w(fo)&&e.title?(k(),R("a",{key:2,href:`#${e.to}`,innerHTML:e.title},null,8,px)):(k(),R("a",{key:3,href:`#${e.to}`},[vt(t.$slots,"default")],8,dx))}}}),hx=r("h1",null,"Lerna",-1),mx=r("li",null,"Yarn or Pnpm already meets your requirement if you just want to construct a monorepo structure and work it with workspaces.",-1),gx=v("Actually, event if you want more, lerna hardly gives you. "),yx=r("li",null,"However, lerna changed stewardship to Nrwl on May 6 this year, and started to use NX to run tasks in lerna v5.1.0",-1),vx=r("br",null,null,-1),_x=v("Lerna v5.1.0+ == Nx"),bx={__name:"12",setup(e){const t={srcSequence:"./src/lerna-is-optional.md"};return q(te),(n,o)=>{const s=fx,i=Fp,l=os("center"),a=gs;return k(),Q(ot,Le(Ie(t)),{default:ee(()=>[hx,W(i,null,{default:ee(()=>[r("ul",null,[mx,r("li",null,[gx,W(s,{to:"/8",title:"reason in 'monorepo tools'"})]),yx])]),_:1}),vx,W(a,{at:"4"},{default:ee(()=>[r("p",null,[r("i",null,[r("b",null,[W(l,{class:"text-4xl"},{default:ee(()=>[_x]),_:1})])])])]),_:1})]),_:1},16)}}},wx=r("h1",null,"Practice",-1),kx=r("p",null,"Technology Selection Result",-1),xx=r("table",null,[r("thead",null,[r("tr",null,[r("th",null,[r("strong",null,"Selection")]),r("th",null,[r("strong",null,"Important features")])])]),r("tbody",null,[r("tr",null,[r("td",null,"Pnpm"),r("td",null,"Dependency Management and Workspace")]),r("tr",null,[r("td",null,"TurboRepo"),r("td",null,"Caching and Task Orchestration for JS & TS Monorepo")]),r("tr",null,[r("td",null,"Changeset"),r("td",null,"Versioning and Publishing")]),r("tr",null,[r("td",null,"Github Code Owners"),r("td",null,"Ownership on the folder basis")])])],-1),Ex={__name:"13",setup(e){const t={srcSequence:"./src/practice.md"};return q(te),(n,o)=>(k(),Q(ot,Le(Ie(t)),{default:ee(()=>[wx,kx,xx]),_:1},16))}};const An=e=>(Et("data-v-af4c2870"),e=e(),At(),e),Ax=An(()=>r("h1",null,"Project Setup",-1)),Cx=An(()=>r("p",null,[r("b",null,"Project Structure")],-1)),Ox=An(()=>r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#E0A569"}},".")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"\u251C\u2500\u2500 LICENSE")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"\u251C\u2500\u2500 README.md")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"\u251C\u2500\u2500 components")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"\u251C\u2500\u2500 node_modules")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"\u251C\u2500\u2500 package.json")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"\u251C\u2500\u2500 playground")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"\u251C\u2500\u2500 pnpm-lock.yaml")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"\u251C\u2500\u2500 pnpm-workspace.yaml")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"\u251C\u2500\u2500 presentation")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"\u2514\u2500\u2500 turbo.json")]),v(`
`),r("span",{class:"line"}),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"4 directories, 6 files")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#B58451"}},".")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"\u251C\u2500\u2500 LICENSE")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"\u251C\u2500\u2500 README.md")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"\u251C\u2500\u2500 components")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"\u251C\u2500\u2500 node_modules")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"\u251C\u2500\u2500 package.json")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"\u251C\u2500\u2500 playground")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"\u251C\u2500\u2500 pnpm-lock.yaml")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"\u251C\u2500\u2500 pnpm-workspace.yaml")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"\u251C\u2500\u2500 presentation")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"\u2514\u2500\u2500 turbo.json")]),v(`
`),r("span",{class:"line"}),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"4 directories, 6 files")])])])],-1)),Sx=An(()=>r("p",null,[r("i",null,"Pnpm-workspace.yaml")],-1)),$x=An(()=>r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#429988"}},"packages"),r("span",{style:{color:"#858585"}},":")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  "),r("span",{style:{color:"#858585"}},"-"),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#C98A7D"}},"presentation")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  "),r("span",{style:{color:"#858585"}},"-"),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#C98A7D"}},"components")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  "),r("span",{style:{color:"#858585"}},"-"),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#C98A7D"}},"playground")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#2F8A89"}},"packages"),r("span",{style:{color:"#8E8F8B"}},":")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  "),r("span",{style:{color:"#8E8F8B"}},"-"),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#B56959"}},"presentation")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  "),r("span",{style:{color:"#8E8F8B"}},"-"),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#B56959"}},"components")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  "),r("span",{style:{color:"#8E8F8B"}},"-"),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#B56959"}},"playground")])])])],-1)),Px=An(()=>r("p",null,[r("i",null,"presentation/package.json")],-1)),Tx=An(()=>r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#858585"}},"{")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  "),r("span",{style:{color:"#758575"}},"// ...")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"   "),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#E0A569"}},"dependencies"),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#858585"}},":"),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#858585"}},"{")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"    "),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#E0A569"}},"@tedy-talk/monorepo-components"),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#858585"}},":"),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#C98A7D"}},'"workspace: *"')]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  "),r("span",{style:{color:"#858585"}},"}")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#858585"}},"}")]),v(`
`),r("span",{class:"line"}),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#758575"}},"// The same is true for `playground`")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#8E8F8B"}},"{")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  "),r("span",{style:{color:"#A0ADA0"}},"// ...")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"   "),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#B58451"}},"dependencies"),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#8E8F8B"}},":"),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#8E8F8B"}},"{")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"    "),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#B58451"}},"@tedy-talk/monorepo-components"),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#8E8F8B"}},":"),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#B56959"}},'"workspace: *"')]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  "),r("span",{style:{color:"#8E8F8B"}},"}")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8E8F8B"}},"}")]),v(`
`),r("span",{class:"line"}),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#A0ADA0"}},"// The same is true for `playground`")])])])],-1)),Mx=An(()=>r("p",null,[v("Initialize it and now you have a local monorepo, or called "),r("code",null,"monolith"),v(".")],-1)),Rx={__name:"14",setup(e){const t={srcSequence:"./src/practice-structure.md"};return q(te),(n,o)=>{const s=wr,i=br,l=xt("click-hide");return k(),Q(ot,Le(Ie(t)),{default:ee(()=>[Ax,Be((k(),R("div",null,[Cx,W(s,Lt({},{ranges:[""]}),{default:ee(()=>[Ox]),_:1},16)])),[[l]]),W(i,null,{default:ee(()=>[Sx,W(s,Lt({},{ranges:[""]}),{default:ee(()=>[$x]),_:1},16),Px,W(s,Lt({},{ranges:[""]}),{default:ee(()=>[Tx]),_:1},16),Mx]),_:1})]),_:1},16)}}},Dx=_t(Rx,[["__scopeId","data-v-af4c2870"]]);var kr=e=>(Et("data-v-2964abc9"),e=e(),At(),e),Ix={class:"hello-comp"},Lx={class:"card"},Fx=kr(()=>r("p",null,[v(" Edit "),r("code",null,"components/HelloWorld.vue"),v(" to test HMR ")],-1)),Nx=kr(()=>r("p",null,[v(" Check out "),r("a",{href:"https://vuejs.org/guide/quick-start.html#local",target:"_blank"},"create-vue"),v(", the official Vue + Vite starter ")],-1)),Bx=kr(()=>r("p",null,[v(" Install "),r("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar"),v(" in your IDE for a better DX ")],-1)),jx=kr(()=>r("p",{class:"read-the-docs"},"Click on the Vite and Vue logos to learn more",-1)),Vp=de({props:{msg:{type:String,required:!0}},setup(e){const t=V(0);return(n,o)=>(k(),R("div",Ix,[r("h1",null,en(e.msg),1),r("div",Lx,[r("button",{type:"button",onClick:o[0]||(o[0]=s=>t.value++)},"count is "+en(t.value),1),Fx]),Nx,Bx,jx]))}});Vp.__scopeId="data-v-2964abc9";var Wx=Vp;const Vx={class:"w-full hello-comp"},Hx=de({__name:"HelloWorld",setup(e){return q(te),(t,n)=>(k(),R("div",Vx,[W(w(Wx),{msg:"now, "})]))}});const zx=r("h1",null,"Component",-1),qx=r("p",null,[v("The following "),r("code",null,"HelloWorld"),v(" Vue Component is from "),r("a",{href:"https://github.com/tangdaoyuan/talk-about-monorepo/tree/main/components",target:"_blank",rel:"noopener"},"Another workspace"),v(" :")],-1),Ux={__name:"15",setup(e){const t={srcSequence:"./src/component.md"};return q(te),(n,o)=>{const s=Hx;return k(),Q(ot,Le(Ie(t)),{default:ee(()=>[zx,qx,W(s)]),_:1},16)}}};const St=e=>(Et("data-v-7a8a8c08"),e=e(),At(),e),Yx=St(()=>r("h1",null,"TurboRepo",-1)),Kx=St(()=>r("blockquote",null,[r("p",null,[r("a",{href:"https://turborepo.org/docs",target:"_blank",rel:"noopener"},"Turborepo"),v(" is a blazing fast build system for JavaScript/TypeScript monorepos: codebases containing multiple projects, often using multiple frameworks, in a single unified code repository.")])],-1)),Gx=St(()=>r("p",null,"Pipeline and Cache Configuration",-1)),Zx=St(()=>r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"}),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#858585"}},"{")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  "),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#E0A569"}},"$schema"),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#858585"}},":"),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#C98A7D"}},'"https://turborepo.org/schema.json"'),r("span",{style:{color:"#858585"}},",")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  "),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#E0A569"}},"pipeline"),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#858585"}},":"),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#858585"}},"{")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"    "),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#E0A569"}},"build"),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#858585"}},":"),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#858585"}},"{")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"      "),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#E0A569"}},"dependsOn"),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#858585"}},":"),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#858585"}},"[")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"        "),r("span",{style:{color:"#758575"}},"// \"A package's `build` command depends on its dependencies'")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"        "),r("span",{style:{color:"#758575"}},"// and devDependencies' `build` commands being completed first\"")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"        "),r("span",{style:{color:"#C98A7D"}},'"^build"')]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"      "),r("span",{style:{color:"#858585"}},"],")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"      "),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#E0A569"}},"outputs"),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#858585"}},":"),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#858585"}},"[")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"        "),r("span",{style:{color:"#C98A7D"}},'"dist/**"'),r("span",{style:{color:"#858585"}},","),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#C98A7D"}},'"build/**"')]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"      "),r("span",{style:{color:"#858585"}},"]")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"    "),r("span",{style:{color:"#858585"}},"},")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"    "),r("span",{style:{color:"#758575"}},"// ...")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  "),r("span",{style:{color:"#858585"}},"}")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#858585"}},"}")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"}),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8E8F8B"}},"{")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  "),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#B58451"}},"$schema"),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#8E8F8B"}},":"),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#B56959"}},'"https://turborepo.org/schema.json"'),r("span",{style:{color:"#8E8F8B"}},",")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  "),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#B58451"}},"pipeline"),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#8E8F8B"}},":"),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#8E8F8B"}},"{")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"    "),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#B58451"}},"build"),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#8E8F8B"}},":"),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#8E8F8B"}},"{")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"      "),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#B58451"}},"dependsOn"),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#8E8F8B"}},":"),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#8E8F8B"}},"[")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"        "),r("span",{style:{color:"#A0ADA0"}},"// \"A package's `build` command depends on its dependencies'")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"        "),r("span",{style:{color:"#A0ADA0"}},"// and devDependencies' `build` commands being completed first\"")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"        "),r("span",{style:{color:"#B56959"}},'"^build"')]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"      "),r("span",{style:{color:"#8E8F8B"}},"],")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"      "),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#B58451"}},"outputs"),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#8E8F8B"}},":"),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#8E8F8B"}},"[")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"        "),r("span",{style:{color:"#B56959"}},'"dist/**"'),r("span",{style:{color:"#8E8F8B"}},","),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#B56959"}},'"build/**"')]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"      "),r("span",{style:{color:"#8E8F8B"}},"]")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"    "),r("span",{style:{color:"#8E8F8B"}},"},")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"    "),r("span",{style:{color:"#A0ADA0"}},"// ...")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  "),r("span",{style:{color:"#8E8F8B"}},"}")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8E8F8B"}},"}")])])])],-1)),Xx=St(()=>r("p",null,"Pipeline and Cache Configuration",-1)),Jx=St(()=>r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#858585"}},"{")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  ")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  "),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#E0A569"}},"scripts"),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#858585"}},":"),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#858585"}},"{")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"    "),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#E0A569"}},"build"),r("span",{style:{color:"#858585"}},'"'),r("span",{style:{color:"#858585"}},":"),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#C98A7D"}},'"turbo run build"'),r("span",{style:{color:"#858585"}},",")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"    "),r("span",{style:{color:"#758575"}},"// ...")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  "),r("span",{style:{color:"#858585"}},"},")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#858585"}},"}")]),v(`
`),r("span",{class:"line"})])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#8E8F8B"}},"{")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  ")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  "),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#B58451"}},"scripts"),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#8E8F8B"}},":"),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#8E8F8B"}},"{")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"    "),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#B58451"}},"build"),r("span",{style:{color:"#8E8F8B"}},'"'),r("span",{style:{color:"#8E8F8B"}},":"),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#B56959"}},'"turbo run build"'),r("span",{style:{color:"#8E8F8B"}},",")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"    "),r("span",{style:{color:"#A0ADA0"}},"// ...")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  "),r("span",{style:{color:"#8E8F8B"}},"},")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8E8F8B"}},"}")]),v(`
`),r("span",{class:"line"})])])],-1)),Qx=[Xx,Jx],e8=St(()=>r("p",null,"Result after second build (no files change)",-1)),t8=St(()=>r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"}),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#CB7676"}},">"),r("span",{style:{color:"#DBD7CA"}}," turbo run build")]),v(`
`),r("span",{class:"line"}),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"\u2022 Packages "),r("span",{style:{color:"#4D9375"}},"in"),r("span",{style:{color:"#DBD7CA"}}," scope: @tedy-talk/monorepo-components, @tedy-talk/presentation, playground")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"\u2022 Running build "),r("span",{style:{color:"#4D9375"}},"in"),r("span",{style:{color:"#DBD7CA"}}," 3 packages")]),v(`
`),r("span",{class:"line"}),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#758575"}},"# Omit the compiling details")]),v(`
`),r("span",{class:"line"}),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"Tasks:    3 successful, 3 total")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"Cached:    1 cached, 3 total")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  Time:    342ms >>> FULL TURBO")]),v(`
`),r("span",{class:"line"}),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#758575"}},"# First Build 7.82s")]),v(`
`),r("span",{class:"line"})])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"}),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#AB5959"}},">"),r("span",{style:{color:"#393A34"}}," turbo run build")]),v(`
`),r("span",{class:"line"}),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"\u2022 Packages "),r("span",{style:{color:"#1C6B48"}},"in"),r("span",{style:{color:"#393A34"}}," scope: @tedy-talk/monorepo-components, @tedy-talk/presentation, playground")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"\u2022 Running build "),r("span",{style:{color:"#1C6B48"}},"in"),r("span",{style:{color:"#393A34"}}," 3 packages")]),v(`
`),r("span",{class:"line"}),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#A0ADA0"}},"# Omit the compiling details")]),v(`
`),r("span",{class:"line"}),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"Tasks:    3 successful, 3 total")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"Cached:    1 cached, 3 total")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  Time:    342ms >>> FULL TURBO")]),v(`
`),r("span",{class:"line"}),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#A0ADA0"}},"# First Build 7.82s")]),v(`
`),r("span",{class:"line"})])])],-1)),n8=[e8,t8],o8=St(()=>r("p",null,[r("strong",null,"Remote Caching by Github Action")],-1)),s8=St(()=>r("ul",null,[r("li",null,"Caching across CI jobs or OS become easy by the feature"),r("li",null,"Local Development Convenient with Remote Caching"),r("li",null,"Support to Custom Remote Caches")],-1)),r8=St(()=>r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"}),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#758575"}},"# env:")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#858585"}},"    "),r("span",{style:{color:"#758575"}},"#  TURBO_TOKEN: ${{ secrets.TURBO_TOKEN }}")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#858585"}},"    "),r("span",{style:{color:"#758575"}},"#  TURBO_TEAM: ${{ secrets.TURBO_TEAM }}")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#858585"}},"    "),r("span",{style:{color:"#758575"}},"#  TURBO_REMOTE_ONLY: true")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"}),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#A0ADA0"}},"# env:")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8E8F8B"}},"    "),r("span",{style:{color:"#A0ADA0"}},"#  TURBO_TOKEN: ${{ secrets.TURBO_TOKEN }}")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8E8F8B"}},"    "),r("span",{style:{color:"#A0ADA0"}},"#  TURBO_TEAM: ${{ secrets.TURBO_TEAM }}")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8E8F8B"}},"    "),r("span",{style:{color:"#A0ADA0"}},"#  TURBO_REMOTE_ONLY: true")])])])],-1)),i8=St(()=>r("span",{class:"remote-config"},[r("p",null,[r("a",{href:"https://github.com/tangdaoyuan/talk-about-monorepo/blob/334bd70fa00e7d9b194cbf7e6353ec55cc6d7d96/.github/workflows/ci.yaml#L15",target:"_blank",rel:"noopener"},"Complete config Here")])],-1)),l8={__name:"16",setup(e){const t={clicks:3,srcSequence:"./src/turborepo.md"};return q(te),(n,o)=>{const s=wr,i=xt("click-hide"),l=xt("click");return k(),Q(ot,Le(Ie(t)),{default:ee(()=>[Yx,ne(" Need A Workspace Deps Relationship to Show Export Features "),Kx,Be((k(),R("div",null,[Gx,W(s,Lt({},{ranges:[""]}),{default:ee(()=>[Zx]),_:1},16)])),[[i]]),Be((k(),R("div",null,[Be((k(),R("div",null,Qx)),[[l,1]])])),[[i,2]]),Be((k(),R("div",null,[Be((k(),R("div",null,n8)),[[l,2]])])),[[i,3]]),Be((k(),R("div",null,[o8,s8,W(s,Lt({},{ranges:[""]}),{default:ee(()=>[r8]),_:1},16),i8])),[[l,3]])]),_:1},16)}}},a8=_t(l8,[["__scopeId","data-v-7a8a8c08"]]);const vs=e=>(Et("data-v-8653fd17"),e=e(),At(),e),c8=vs(()=>r("h1",null,"Changeset",-1)),u8=vs(()=>r("blockquote",null,[r("p",null,[v("The "),r("a",{href:"https://github.com/changesets/changesets",target:"_blank",rel:"noopener"},"changesets"),v(" workflow is designed to help when people are making changes, all the way through to publishing. It lets contributors declare how their changes should be released, then we automate updating package versions, and changelogs, and publishing new versions of packages based on the provided information.")])],-1)),p8=vs(()=>r("p",null,"Core commands",-1)),d8=vs(()=>r("ul",null,[r("li",null,[r("kbd",null,"pnpm changeset"),v(),r("i",null,"(produce changelog)")]),r("li",null,[r("kbd",null,"pnpm changeset version"),v(),r("i",null,"(consume changelog and versioning)")]),r("li",null,[r("kbd",null,"pnpm changeset publish"),v(),r("i",null,"(wrapper publish)")])],-1)),f8=vs(()=>r("span",{class:"remote-config"},[r("p",null,[r("a",{href:"https://github.com/tangdaoyuan/talk-about-monorepo/blob/334bd70fa00e7d9b194cbf7e6353ec55cc6d7d96/.github/workflows/release.yaml#L39",target:"_blank",rel:"noopener"},"Complete config here")])],-1)),h8={__name:"17",setup(e){const t={layout:"image-right",image:"/changeset-workflow.png",srcSequence:"./src/changeset.md"};return q(te),(n,o)=>(k(),Q(ml,Le(Ie(t)),{default:ee(()=>[c8,u8,p8,d8,f8]),_:1},16))}},m8=_t(h8,[["__scopeId","data-v-8653fd17"]]),g8=r("h1",null,"Github Code Owners",-1),y8=r("blockquote",null,[r("p",null,"You can use a CODEOWNERS file to define individuals or teams that are responsible for code in a repository.")],-1),v8=r("p",null,"You often hear about monorepo",-1),_8=r("blockquote",null,[r("p",null,"\u201CIt lets other teams will change my code without my knowing.\u201D")],-1),b8=r("p",null,[v("Now, solved by "),r("code",null,"CODEOWNERS")],-1),w8=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#758575"}},"# .github/CODEOWNERS")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"component/"),r("span",{style:{color:"#CB7676"}},"*"),r("span",{style:{color:"#DBD7CA"}}," @tangdaoyuan")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"playground/"),r("span",{style:{color:"#CB7676"}},"*"),r("span",{style:{color:"#DBD7CA"}}," @fourtreasure")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"presentation/"),r("span",{style:{color:"#CB7676"}},"*"),r("span",{style:{color:"#DBD7CA"}}," @tangdaoyuan")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#A0ADA0"}},"# .github/CODEOWNERS")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"component/"),r("span",{style:{color:"#AB5959"}},"*"),r("span",{style:{color:"#393A34"}}," @tangdaoyuan")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"playground/"),r("span",{style:{color:"#AB5959"}},"*"),r("span",{style:{color:"#393A34"}}," @fourtreasure")]),v(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"presentation/"),r("span",{style:{color:"#AB5959"}},"*"),r("span",{style:{color:"#393A34"}}," @tangdaoyuan")])])])],-1),k8=r("p",null,[v("If the developer modifies any file in "),r("code",null,"presentation"),v(" directory, a review pipeline include code owners specified in CODEOWNERS will start automatically in Merge Request phase.")],-1),x8={__name:"18",setup(e){const t={srcSequence:"./src/codeowners.md"};return q(te),(n,o)=>{const s=wr;return k(),Q(ot,Le(Ie(t)),{default:ee(()=>[g8,y8,v8,_8,b8,W(s,Lt({},{ranges:[""]}),{default:ee(()=>[w8]),_:1},16),k8]),_:1},16)}}},E8={class:"slidev-layout center h-full grid place-content-center"},A8={class:"my-auto"},C8={__name:"center",setup(e){return q(te),(t,n)=>(k(),R("div",E8,[r("div",A8,[vt(t.$slots,"default")])]))}},O8=r("h1",null,"Thank you",-1),S8={__name:"19",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./src/thanks.md"};return q(te),(n,o)=>(k(),Q(C8,Le(Ie(t)),{default:ee(()=>[O8]),_:1},16))}};const Hp=e=>(Et("data-v-25e9c0ab"),e=e(),At(),e),$8=Hp(()=>r("h1",null,"References",-1)),P8=Hp(()=>r("ul",null,[r("li",null,[r("a",{href:"https://en.wikipedia.org/wiki/Version_control",target:"_blank",rel:"noopener"},"Version control definition")]),r("li",null,[r("a",{href:"https://en.wikipedia.org/wiki/Monorepo",target:"_blank",rel:"noopener"},"Monorepo Definition")]),r("li",null,[r("a",{href:"https://blog.nrwl.io/misconceptions-about-monorepos-monorepo-monolith-df1250d4b03c",target:"_blank",rel:"noopener"},"Monorepo and monolith")]),r("li",null,[r("a",{href:"https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners",target:"_blank",rel:"noopener"},"Github code owners")]),r("li",null,[r("a",{href:"https://monorepo.tools/",target:"_blank",rel:"noopener"},"Monorepo tools")]),r("li",null,[r("a",{href:"https://docs.npmjs.com/cli/v8/using-npm/workspaces",target:"_blank",rel:"noopener"},"Workspaces")]),r("li",null,[r("a",{href:"https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/",target:"_blank",rel:"noopener"},"Yarn workspace and lerna")]),r("li",null,[r("a",{href:"https://classic.yarnpkg.com/lang/en/docs/workspaces/",target:"_blank",rel:"noopener"},"Yarn features about workspaces")]),r("li",null,[r("a",{href:"https://pnpm.io/workspaces",target:"_blank",rel:"noopener"},"Pnpm features about workspaces")]),r("li",null,[r("a",{href:"https://yarnpkg.com/benchmarks",target:"_blank",rel:"noopener"},"Pnpm and yarn benchmark")]),r("li",null,[r("a",{href:"https://lerna.js.org/docs/introduction",target:"_blank",rel:"noopener"},"Lerna")]),r("li",null,[r("a",{href:"https://github.com/changesets/changesets",target:"_blank",rel:"noopener"},"Changesets")]),r("li",null,[r("a",{href:"https://turborepo.org/docs",target:"_blank",rel:"noopener"},"Turborepo")]),r("li",null,[r("a",{href:"https://vercel.com/docs/concepts/monorepos/remote-caching",target:"_blank",rel:"noopener"},"Monorepos remote caching in Vercel")])],-1)),T8={__name:"20",setup(e){const t={srcSequence:"./src/reference.md"};return q(te),(n,o)=>(k(),Q(ot,Le(Ie(t)),{default:ee(()=>[$8,P8]),_:1},16))}},M8=_t(T8,[["__scopeId","data-v-25e9c0ab"]]),R8=[{path:"1",name:"page-1",component:jb,meta:{theme:"seriph",background:"/background.jpeg",class:"text-center",highlighter:"shiki",colorSchema:"dark",srcSequence:"./src/welcome.md",slide:{raw:null,title:"Talk about Monorepo",level:1,content:`# Talk about Monorepo

Everything you need to know about monorepos

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    start<carbon:arrow-right class="inline"/>
  </span>
</div>

<a href="https://github.com/tangdaoyuan/talk-about-monorepo" target="_blank" alt="GitHub" class="abs-br m-6 text-xl icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github />
</a>`,frontmatter:{theme:"seriph",background:"/background.jpeg",class:"text-center",highlighter:"shiki",colorSchema:"dark",srcSequence:"./src/welcome.md"},note:"welcome to the talk about monorepo",index:0,start:0,end:18,source:{filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/welcome.md",raw:`# Talk about Monorepo

Everything you need to know about monorepos

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    start<carbon:arrow-right class="inline"/>
  </span>
</div>

<a href="https://github.com/tangdaoyuan/talk-about-monorepo" target="_blank" alt="GitHub" class="abs-br m-6 text-xl icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github />
</a>

<!--
welcome to the talk about monorepo
-->
`,title:"Talk about Monorepo",level:1,content:`# Talk about Monorepo

Everything you need to know about monorepos

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    start<carbon:arrow-right class="inline"/>
  </span>
</div>

<a href="https://github.com/tangdaoyuan/talk-about-monorepo" target="_blank" alt="GitHub" class="abs-br m-6 text-xl icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github />
</a>`,frontmatter:{title:"Talk about Monorepo"},note:"welcome to the talk about monorepo",index:0,start:0,end:18},inline:{raw:`---
theme: seriph
background: /background.jpeg
class: 'text-center'
highlighter: shiki
colorSchema: 'dark'
src: ./src/welcome.md
---

<!-- what is monorepo -->`,content:"",frontmatter:{theme:"seriph",background:"/background.jpeg",class:"text-center",highlighter:"shiki",colorSchema:"dark"},note:"what is monorepo",index:0,start:0,end:10},filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/welcome.md",notesHTML:`<p>welcome to the talk about monorepo</p>
`,id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:Zb,meta:{title:"What is a Monorepo?",layout:"image-right",image:"/monorepo.png",srcSequence:"./src/what-is-monorepo.md",slide:{raw:null,title:"What is a Monorepo?",level:1,content:`# What is a Monorepo?

>"In version control systems, a monorepo ("mono" meaning 'single' and "repo" being short for 'repository') is a software development strategy where code for many projects is stored in the same repository."
> 
> [\u2014\u2014 wiki](https://en.wikipedia.org/wiki/Monorepo)

<br/>

MonoRepo is a **software development strategy** where code for many projects is stored in the same repository.
<br/>

- \u{1F4A1} Monorepo is a strategy, not a technology.
- \u{1F511} strategy main premise is to keep code for many projects in the same repository.

<br>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
blockquote  {
  p:last-child {
    text-align: right;
  }
}
</style>`,frontmatter:{title:"What is a Monorepo?",layout:"image-right",image:"/monorepo.png",srcSequence:"./src/what-is-monorepo.md"},index:1,start:0,end:33,source:{filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/what-is-monorepo.md",raw:`# What is a Monorepo?

>"In version control systems, a monorepo ("mono" meaning 'single' and "repo" being short for 'repository') is a software development strategy where code for many projects is stored in the same repository."
> 
> [\u2014\u2014 wiki](https://en.wikipedia.org/wiki/Monorepo)

<br/>

MonoRepo is a **software development strategy** where code for many projects is stored in the same repository.
<br/>

- \u{1F4A1} Monorepo is a strategy, not a technology.
- \u{1F511} strategy main premise is to keep code for many projects in the same repository.

<br>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
blockquote  {
  p:last-child {
    text-align: right;
  }
}
</style>
`,title:"What is a Monorepo?",level:1,content:`# What is a Monorepo?

>"In version control systems, a monorepo ("mono" meaning 'single' and "repo" being short for 'repository') is a software development strategy where code for many projects is stored in the same repository."
> 
> [\u2014\u2014 wiki](https://en.wikipedia.org/wiki/Monorepo)

<br/>

MonoRepo is a **software development strategy** where code for many projects is stored in the same repository.
<br/>

- \u{1F4A1} Monorepo is a strategy, not a technology.
- \u{1F511} strategy main premise is to keep code for many projects in the same repository.

<br>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
blockquote  {
  p:last-child {
    text-align: right;
  }
}
</style>`,frontmatter:{title:"What is a Monorepo?"},index:0,start:0,end:33},inline:{raw:`---
src: ./src/what-is-monorepo.md
layout: image-right
image: /monorepo.png
---

<!-- what is monorepo (next)-->`,content:"",frontmatter:{layout:"image-right",image:"/monorepo.png"},note:"what is monorepo (next)",index:1,start:10,end:17},filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/what-is-monorepo.md",notesHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:r1,meta:{title:"And Next, What is a Monorepo?",srcSequence:"./src/what-is-monorepo2.md",slide:{raw:null,title:"And Next, What is a Monorepo?",level:1,content:`# And Next, What is a Monorepo?

With the advent of some monorepo tools (such as bazel, gradle, Lerna, Nx, ...etc), Monorepo alas has a new definition.

>"A monorepo is a single repository containing multiple distinct projects**, with well-defined relationships."
> 
> [\u2014\u2014 nrwl](https://github.com/nrwl/monorepo.tools)

<br/>

- \u{1F4A1} Monorepo is a strategy, not a technology.
- \u{1F511} strategy main premise is to keep code for many projects in the same repository.
- \u{1F511} Specially: if there are no **well defined relationships** among projects, we would not call it a monorepo.

<br>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
blockquote  {
  p:last-child {
    text-align: right;
  }
}
</style>`,frontmatter:{title:"And Next, What is a Monorepo?",srcSequence:"./src/what-is-monorepo2.md"},index:2,start:0,end:33,source:{filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/what-is-monorepo2.md",raw:`# And Next, What is a Monorepo?

With the advent of some monorepo tools (such as bazel, gradle, Lerna, Nx, ...etc), Monorepo alas has a new definition.

>"A monorepo is a single repository containing multiple distinct projects**, with well-defined relationships."
> 
> [\u2014\u2014 nrwl](https://github.com/nrwl/monorepo.tools)

<br/>

- \u{1F4A1} Monorepo is a strategy, not a technology.
- \u{1F511} strategy main premise is to keep code for many projects in the same repository.
- \u{1F511} Specially: if there are no **well defined relationships** among projects, we would not call it a monorepo.

<br>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
blockquote  {
  p:last-child {
    text-align: right;
  }
}
</style>
`,title:"And Next, What is a Monorepo?",level:1,content:`# And Next, What is a Monorepo?

With the advent of some monorepo tools (such as bazel, gradle, Lerna, Nx, ...etc), Monorepo alas has a new definition.

>"A monorepo is a single repository containing multiple distinct projects**, with well-defined relationships."
> 
> [\u2014\u2014 nrwl](https://github.com/nrwl/monorepo.tools)

<br/>

- \u{1F4A1} Monorepo is a strategy, not a technology.
- \u{1F511} strategy main premise is to keep code for many projects in the same repository.
- \u{1F511} Specially: if there are no **well defined relationships** among projects, we would not call it a monorepo.

<br>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
blockquote  {
  p:last-child {
    text-align: right;
  }
}
</style>`,frontmatter:{title:"And Next, What is a Monorepo?"},index:0,start:0,end:33},inline:{raw:`---
src: ./src/what-is-monorepo2.md
---

<!-- monorepo !== monolith -->`,content:"",frontmatter:{},note:"monorepo !== monolith",index:2,start:17,end:22},filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/what-is-monorepo2.md",notesHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:b1,meta:{title:"Monorepo vs Monolith",srcSequence:"./src/monorepo-vs-monolith.md",slide:{raw:null,title:"Monorepo vs Monolith",level:1,content:`# Monorepo vs Monolith

<div v-click-hide>

## Monolith
<br/>

* \u274C It forces us to release together.
* \u274C It lets other teams will change my code without my knowing.
* \u274C It creates a big ball of mud. It makes applications hard to understand and maintain.
* \u274C It doesn\u2019t scale.

If we encounter above problems, we might call it bad pratice, or a bad monorepo, or "monolith"

Actually, we are often affected by lerna when we talk about our monorepo, it is not what Google, Facebook, Microsoft, or Uber mean when they talk about their monorepos.

</div>

<v-after>

## A Good Monorepo
<br/>

* \u2705 A good CI/CD practice to build and store artifacts, and deploy them.
* \u2705 Configure ownership on the folder basis for Auth.
* \u2705 Remove unexpected dependencies and Public Api Management
* \u2705 False proposition. you don't need to rebuild and retest what is affected.

</v-after>

<v-click at="2">

## Real Challenges
<br/>

* \u{1F4AA}\u{1F3FB} Trunk-based development is a lot more important
* \u{1F4AA}\u{1F3FB} Not all services work well with monorepos
* \u{1F4AA}\u{1F3FB} Require more sophisticated CI setup
* \u{1F4AA}\u{1F3FB} Require you to think about large-scale changes

</v-click>

<style>
.slidev-page-4,
.slidev-layout.my-custom-layout {
  .slidev-vclick-target {
    transition: opacity 300ms ease;
  }

  .slidev-vclick-hidden {
    transform: scale(0);
    display: none;
  }
}
</style>`,frontmatter:{title:"Monorepo vs Monolith",srcSequence:"./src/monorepo-vs-monolith.md"},index:3,start:0,end:56,source:{filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/monorepo-vs-monolith.md",raw:`# Monorepo vs Monolith

<div v-click-hide>

## Monolith
<br/>

* \u274C It forces us to release together.
* \u274C It lets other teams will change my code without my knowing.
* \u274C It creates a big ball of mud. It makes applications hard to understand and maintain.
* \u274C It doesn\u2019t scale.

If we encounter above problems, we might call it bad pratice, or a bad monorepo, or "monolith"

Actually, we are often affected by lerna when we talk about our monorepo, it is not what Google, Facebook, Microsoft, or Uber mean when they talk about their monorepos.

</div>

<v-after>

## A Good Monorepo
<br/>

* \u2705 A good CI/CD practice to build and store artifacts, and deploy them.
* \u2705 Configure ownership on the folder basis for Auth.
* \u2705 Remove unexpected dependencies and Public Api Management
* \u2705 False proposition. you don't need to rebuild and retest what is affected.

</v-after>

<v-click at="2">

## Real Challenges
<br/>

* \u{1F4AA}\u{1F3FB} Trunk-based development is a lot more important
* \u{1F4AA}\u{1F3FB} Not all services work well with monorepos
* \u{1F4AA}\u{1F3FB} Require more sophisticated CI setup
* \u{1F4AA}\u{1F3FB} Require you to think about large-scale changes

</v-click>

<style>
.slidev-page-4,
.slidev-layout.my-custom-layout {
  .slidev-vclick-target {
    transition: opacity 300ms ease;
  }

  .slidev-vclick-hidden {
    transform: scale(0);
    display: none;
  }
}
</style>
`,title:"Monorepo vs Monolith",level:1,content:`# Monorepo vs Monolith

<div v-click-hide>

## Monolith
<br/>

* \u274C It forces us to release together.
* \u274C It lets other teams will change my code without my knowing.
* \u274C It creates a big ball of mud. It makes applications hard to understand and maintain.
* \u274C It doesn\u2019t scale.

If we encounter above problems, we might call it bad pratice, or a bad monorepo, or "monolith"

Actually, we are often affected by lerna when we talk about our monorepo, it is not what Google, Facebook, Microsoft, or Uber mean when they talk about their monorepos.

</div>

<v-after>

## A Good Monorepo
<br/>

* \u2705 A good CI/CD practice to build and store artifacts, and deploy them.
* \u2705 Configure ownership on the folder basis for Auth.
* \u2705 Remove unexpected dependencies and Public Api Management
* \u2705 False proposition. you don't need to rebuild and retest what is affected.

</v-after>

<v-click at="2">

## Real Challenges
<br/>

* \u{1F4AA}\u{1F3FB} Trunk-based development is a lot more important
* \u{1F4AA}\u{1F3FB} Not all services work well with monorepos
* \u{1F4AA}\u{1F3FB} Require more sophisticated CI setup
* \u{1F4AA}\u{1F3FB} Require you to think about large-scale changes

</v-click>

<style>
.slidev-page-4,
.slidev-layout.my-custom-layout {
  .slidev-vclick-target {
    transition: opacity 300ms ease;
  }

  .slidev-vclick-hidden {
    transform: scale(0);
    display: none;
  }
}
</style>`,frontmatter:{title:"Monorepo vs Monolith"},index:0,start:0,end:56},inline:{raw:`---
src: ./src/monorepo-vs-monolith.md
---

<!-- monorepo vs polyRepo -->`,content:"",frontmatter:{},note:"monorepo vs polyRepo",index:3,start:22,end:27},filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/monorepo-vs-monolith.md",notesHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:P1,meta:{title:"Why a Monorepo",layout:"image-right",image:"https://monorepo.tools/images/polyrepo-practice.svg",srcSequence:"./src/why-monorepo.md",slide:{raw:null,title:"Why a Monorepo",level:1,content:`# Why a Monorepo

## Polyrepo

<br/>

> A polyrepo is the current standard way of developing applications: a repo for each team, application, or project. And it's common that each repo has a single build artifact, and simple build pipeline.

<br/>

<v-click>

### Drawbacks

<br/>

* \u{1F622} Cumbersome code sharing
* \u{1F622} Significant code duplication
* \u{1F622} Costly cross-repo changes to shared libraries and consumers
* \u{1F622} Inconsistent tooling

</v-click>

<style>
  div {
    background-size: contain;
  }
</style>`,frontmatter:{title:"Why a Monorepo",layout:"image-right",image:"https://monorepo.tools/images/polyrepo-practice.svg",srcSequence:"./src/why-monorepo.md"},index:4,start:0,end:29,source:{filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/why-monorepo.md",raw:`# Why a Monorepo

## Polyrepo

<br/>

> A polyrepo is the current standard way of developing applications: a repo for each team, application, or project. And it's common that each repo has a single build artifact, and simple build pipeline.

<br/>

<v-click>

### Drawbacks

<br/>

* \u{1F622} Cumbersome code sharing
* \u{1F622} Significant code duplication
* \u{1F622} Costly cross-repo changes to shared libraries and consumers
* \u{1F622} Inconsistent tooling

</v-click>

<style>
  div {
    background-size: contain;
  }
</style>
`,title:"Why a Monorepo",level:1,content:`# Why a Monorepo

## Polyrepo

<br/>

> A polyrepo is the current standard way of developing applications: a repo for each team, application, or project. And it's common that each repo has a single build artifact, and simple build pipeline.

<br/>

<v-click>

### Drawbacks

<br/>

* \u{1F622} Cumbersome code sharing
* \u{1F622} Significant code duplication
* \u{1F622} Costly cross-repo changes to shared libraries and consumers
* \u{1F622} Inconsistent tooling

</v-click>

<style>
  div {
    background-size: contain;
  }
</style>`,frontmatter:{title:"Why a Monorepo"},index:0,start:0,end:29},inline:{raw:`---
src: ./src/why-monorepo.md
layout: image-right
image: https://monorepo.tools/images/polyrepo-practice.svg

---

<!-- why monorepo -->`,content:"",frontmatter:{layout:"image-right",image:"https://monorepo.tools/images/polyrepo-practice.svg"},note:"why monorepo",index:4,start:27,end:35},filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/why-monorepo.md",notesHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:N1,meta:{title:"Why a Monorepo",srcSequence:"./src/why-monorepo2.md",slide:{raw:null,title:"Why a Monorepo",level:1,content:`# Why a Monorepo

## Compared to a Polyrepo

<br/>

* \u{1F44C} No overhead to create new projects
* \u{1F44C} Everything at that current commit works together. Changes can be verified across all affected parts of the organization
* \u{1F44C} One version of everything
* \u{1F44C} Easy to split code into composable modules
* \u{1F44C} Easier dependency management
* \u{1F44C} Consistent developer experience

<v-click>

## Extra Feature

<br/>
 
* \u{1F44C} Code editors and IDEs are \u201Cworkspace\u201D aware

</v-click>`,frontmatter:{title:"Why a Monorepo",srcSequence:"./src/why-monorepo2.md"},index:5,start:0,end:23,source:{filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/why-monorepo2.md",raw:`# Why a Monorepo

## Compared to a Polyrepo

<br/>

* \u{1F44C} No overhead to create new projects
* \u{1F44C} Everything at that current commit works together. Changes can be verified across all affected parts of the organization
* \u{1F44C} One version of everything
* \u{1F44C} Easy to split code into composable modules
* \u{1F44C} Easier dependency management
* \u{1F44C} Consistent developer experience

<v-click>

## Extra Feature

<br/>
 
* \u{1F44C} Code editors and IDEs are \u201Cworkspace\u201D aware

</v-click>
`,title:"Why a Monorepo",level:1,content:`# Why a Monorepo

## Compared to a Polyrepo

<br/>

* \u{1F44C} No overhead to create new projects
* \u{1F44C} Everything at that current commit works together. Changes can be verified across all affected parts of the organization
* \u{1F44C} One version of everything
* \u{1F44C} Easy to split code into composable modules
* \u{1F44C} Easier dependency management
* \u{1F44C} Consistent developer experience

<v-click>

## Extra Feature

<br/>
 
* \u{1F44C} Code editors and IDEs are \u201Cworkspace\u201D aware

</v-click>`,frontmatter:{title:"Why a Monorepo"},index:0,start:0,end:23},inline:{raw:`---
src: ./src/why-monorepo2.md
---

<!-- monorepo tools -->
`,content:"",frontmatter:{},note:"monorepo tools",index:5,start:35,end:41},filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/why-monorepo2.md",notesHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:G1,meta:{title:"Monorepo tools try to solve",srcSequence:"./src/monorepo-tools.md",slide:{raw:null,title:"Monorepo tools try to solve",level:1,content:`# Monorepo tools try to solve

<div class="grid grid-cols-2">

<div>

## \u{1F680} Fast

<br/>

  - Local computation caching
  <!-- The ability to store and replay file and process output of tasks. On the same machine, you will never build or test the same thing twice. -->
  - Local task orchestration
  <!-- The ability to run tasks in the correct order and in parallel. All the listed tools can do it in about the same way, except Lerna, which is more limited. -->
  - Distributed computation caching
  <!-- The ability to share cache artifacts across different environments. This means that your whole organisation, including CI agents, will never build or test the same thing twice. -->
  - Distributed task execution
  <!-- The ability to distribute a command across many machines, while largely preserving the dev ergonomics of running it on a single machine.  -->
  - Transparent remote execution
  <!-- The ability to execute any command on multiple machines while developing locally. -->
  - Detecting affected projects/packages
  <!-- Determine what might be affected by a change, to run only build/test affected projects. -->

</div>

<div v-click>

## \u{1F914} Understandable

<br/>

  - Workspace analysis
  - Dependency graph visualization

## \u{1F4A1} Manageable

<br/>

  - Source code sharing
  <!-- Facilitates sharing of discrete pieces of source code.
  -->
  - Consistent tooling
  - Code generation
  - Project constraints and visibility

</div>

</div>`,frontmatter:{title:"Monorepo tools try to solve",srcSequence:"./src/monorepo-tools.md"},index:6,start:0,end:49,source:{filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/monorepo-tools.md",raw:`# Monorepo tools try to solve

<div class="grid grid-cols-2">

<div>

## \u{1F680} Fast

<br/>

  - Local computation caching
  <!-- The ability to store and replay file and process output of tasks. On the same machine, you will never build or test the same thing twice. -->
  - Local task orchestration
  <!-- The ability to run tasks in the correct order and in parallel. All the listed tools can do it in about the same way, except Lerna, which is more limited. -->
  - Distributed computation caching
  <!-- The ability to share cache artifacts across different environments. This means that your whole organisation, including CI agents, will never build or test the same thing twice. -->
  - Distributed task execution
  <!-- The ability to distribute a command across many machines, while largely preserving the dev ergonomics of running it on a single machine.  -->
  - Transparent remote execution
  <!-- The ability to execute any command on multiple machines while developing locally. -->
  - Detecting affected projects/packages
  <!-- Determine what might be affected by a change, to run only build/test affected projects. -->

</div>

<div v-click>

## \u{1F914} Understandable

<br/>

  - Workspace analysis
  - Dependency graph visualization

## \u{1F4A1} Manageable

<br/>

  - Source code sharing
  <!-- Facilitates sharing of discrete pieces of source code.
  -->
  - Consistent tooling
  - Code generation
  - Project constraints and visibility

</div>

</div>
`,title:"Monorepo tools try to solve",level:1,content:`# Monorepo tools try to solve

<div class="grid grid-cols-2">

<div>

## \u{1F680} Fast

<br/>

  - Local computation caching
  <!-- The ability to store and replay file and process output of tasks. On the same machine, you will never build or test the same thing twice. -->
  - Local task orchestration
  <!-- The ability to run tasks in the correct order and in parallel. All the listed tools can do it in about the same way, except Lerna, which is more limited. -->
  - Distributed computation caching
  <!-- The ability to share cache artifacts across different environments. This means that your whole organisation, including CI agents, will never build or test the same thing twice. -->
  - Distributed task execution
  <!-- The ability to distribute a command across many machines, while largely preserving the dev ergonomics of running it on a single machine.  -->
  - Transparent remote execution
  <!-- The ability to execute any command on multiple machines while developing locally. -->
  - Detecting affected projects/packages
  <!-- Determine what might be affected by a change, to run only build/test affected projects. -->

</div>

<div v-click>

## \u{1F914} Understandable

<br/>

  - Workspace analysis
  - Dependency graph visualization

## \u{1F4A1} Manageable

<br/>

  - Source code sharing
  <!-- Facilitates sharing of discrete pieces of source code.
  -->
  - Consistent tooling
  - Code generation
  - Project constraints and visibility

</div>

</div>`,frontmatter:{title:"Monorepo tools try to solve"},index:0,start:0,end:49},inline:{raw:`---
src: ./src/monorepo-tools.md
---
`,content:"",frontmatter:{},index:6,start:41,end:45},filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/monorepo-tools.md",notesHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:ow,meta:{title:"Monorepo tools",srcSequence:"./src/monorepo-tools-compare.md",slide:{raw:null,title:"Monorepo tools",level:1,content:`# Monorepo tools

<div v-click-hide>

| **Fast** | Bazel|  Gradle | Lage | Nx | Pants | Rush | Lerna | Turborepo|
|-------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| Local computation caching | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u274C | \u2705 |
| Local task orchestration | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u26A0\uFE0F | \u2705 |
| Distributed computation caching | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u274C| \u2705 |
| Distributed task execution | \u2705 | \u26A0\uFE0F | \u274C | \u2705 | \u2705 | \u26A0\uFE0F | \u274C | \u274C |
| Transparent remote execution | \u2705 | \u274C | \u2705 | \u274C | \u274C | \u274C | \u274C | \u26A0\uFE0F |
| Detecting affected projects/packages | \u26A0\uFE0F | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 |\u2705 | \u2705 |

</div>

<v-after>

| **Understandable** | Bazel|  Gradle | Lage | Nx | Pants | Rush | Lerna | Turborepo|
|-------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| Workspace analysis | \u26A0\uFE0F | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 |
| Dependency graph visualization | \u2705 | \u26A0\uFE0F | \u26A0\uFE0F | \u2705 | \u26A0\uFE0F | \u26A0\uFE0F | \u26A0\uFE0F | \u2705 |

<br/>

| **Manageable** | Bazel|  Gradle | Lage | Nx | Pants | Rush | Lerna | Turborepo|
|-------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| Source code sharing | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 |
| Consistent tooling | \u2705 | \u2705 | \u274C | \u2705 | \u2705 | \u274C | \u274C | \u274C |
| Code generation | \u26A0\uFE0F | \u26A0\uFE0F | \u26A0\uFE0F | \u2705 | \u2705 | \u2705 | \u26A0\uFE0F | \u26A0\uFE0F |
| Project constraints and visibility | \u2705 | \u26A0\uFE0F | \u26A0\uFE0F | \u2705 | \u26A0\uFE0F | \u2705 | \u26A0\uFE0F | \u26A0\uFE0F |

</v-after>

<style>
  .slidev-page-8,
  .slidev-layout.my-custom-layout {
    .slidev-vclick-target {
      transition: all 500ms ease;
    }

    .slidev-vclick-hidden {
      transform:  scale(0);
      position: absolute;
    }
  }
</style>`,frontmatter:{title:"Monorepo tools",srcSequence:"./src/monorepo-tools-compare.md"},index:7,start:0,end:47,source:{filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/monorepo-tools-compare.md",raw:`# Monorepo tools

<div v-click-hide>

| **Fast** | Bazel|  Gradle | Lage | Nx | Pants | Rush | Lerna | Turborepo|
|-------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| Local computation caching | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u274C | \u2705 |
| Local task orchestration | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u26A0\uFE0F | \u2705 |
| Distributed computation caching | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u274C| \u2705 |
| Distributed task execution | \u2705 | \u26A0\uFE0F | \u274C | \u2705 | \u2705 | \u26A0\uFE0F | \u274C | \u274C |
| Transparent remote execution | \u2705 | \u274C | \u2705 | \u274C | \u274C | \u274C | \u274C | \u26A0\uFE0F |
| Detecting affected projects/packages | \u26A0\uFE0F | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 |\u2705 | \u2705 |

</div>

<v-after>

| **Understandable** | Bazel|  Gradle | Lage | Nx | Pants | Rush | Lerna | Turborepo|
|-------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| Workspace analysis | \u26A0\uFE0F | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 |
| Dependency graph visualization | \u2705 | \u26A0\uFE0F | \u26A0\uFE0F | \u2705 | \u26A0\uFE0F | \u26A0\uFE0F | \u26A0\uFE0F | \u2705 |

<br/>

| **Manageable** | Bazel|  Gradle | Lage | Nx | Pants | Rush | Lerna | Turborepo|
|-------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| Source code sharing | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 |
| Consistent tooling | \u2705 | \u2705 | \u274C | \u2705 | \u2705 | \u274C | \u274C | \u274C |
| Code generation | \u26A0\uFE0F | \u26A0\uFE0F | \u26A0\uFE0F | \u2705 | \u2705 | \u2705 | \u26A0\uFE0F | \u26A0\uFE0F |
| Project constraints and visibility | \u2705 | \u26A0\uFE0F | \u26A0\uFE0F | \u2705 | \u26A0\uFE0F | \u2705 | \u26A0\uFE0F | \u26A0\uFE0F |

</v-after>

<style>
  .slidev-page-8,
  .slidev-layout.my-custom-layout {
    .slidev-vclick-target {
      transition: all 500ms ease;
    }

    .slidev-vclick-hidden {
      transform:  scale(0);
      position: absolute;
    }
  }
</style>
`,title:"Monorepo tools",level:1,content:`# Monorepo tools

<div v-click-hide>

| **Fast** | Bazel|  Gradle | Lage | Nx | Pants | Rush | Lerna | Turborepo|
|-------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| Local computation caching | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u274C | \u2705 |
| Local task orchestration | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u26A0\uFE0F | \u2705 |
| Distributed computation caching | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u274C| \u2705 |
| Distributed task execution | \u2705 | \u26A0\uFE0F | \u274C | \u2705 | \u2705 | \u26A0\uFE0F | \u274C | \u274C |
| Transparent remote execution | \u2705 | \u274C | \u2705 | \u274C | \u274C | \u274C | \u274C | \u26A0\uFE0F |
| Detecting affected projects/packages | \u26A0\uFE0F | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 |\u2705 | \u2705 |

</div>

<v-after>

| **Understandable** | Bazel|  Gradle | Lage | Nx | Pants | Rush | Lerna | Turborepo|
|-------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| Workspace analysis | \u26A0\uFE0F | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 |
| Dependency graph visualization | \u2705 | \u26A0\uFE0F | \u26A0\uFE0F | \u2705 | \u26A0\uFE0F | \u26A0\uFE0F | \u26A0\uFE0F | \u2705 |

<br/>

| **Manageable** | Bazel|  Gradle | Lage | Nx | Pants | Rush | Lerna | Turborepo|
|-------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| Source code sharing | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 |
| Consistent tooling | \u2705 | \u2705 | \u274C | \u2705 | \u2705 | \u274C | \u274C | \u274C |
| Code generation | \u26A0\uFE0F | \u26A0\uFE0F | \u26A0\uFE0F | \u2705 | \u2705 | \u2705 | \u26A0\uFE0F | \u26A0\uFE0F |
| Project constraints and visibility | \u2705 | \u26A0\uFE0F | \u26A0\uFE0F | \u2705 | \u26A0\uFE0F | \u2705 | \u26A0\uFE0F | \u26A0\uFE0F |

</v-after>

<style>
  .slidev-page-8,
  .slidev-layout.my-custom-layout {
    .slidev-vclick-target {
      transition: all 500ms ease;
    }

    .slidev-vclick-hidden {
      transform:  scale(0);
      position: absolute;
    }
  }
</style>`,frontmatter:{title:"Monorepo tools"},index:0,start:0,end:47},inline:{raw:`---
src: ./src/monorepo-tools-compare.md
---

<!-- who use monorepo -->
`,content:"",frontmatter:{},note:"who use monorepo",index:7,start:45,end:51},filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/monorepo-tools-compare.md",notesHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:aw,meta:{title:"Who uses a monorepo",srcSequence:"./src/who-use-monorepo.md",slide:{raw:null,title:"Who uses a monorepo",level:1,content:`# Who uses a monorepo

Now, almost all mid or large front-end projects

* react (yarn workspace)
* vue 2 & 3 (pnpm workspace)
* angular (bazel)
* preact (custom)
* alpine (npm workspace)
* nextjs (pnpm workspace)
* element-plus (pnpm workspace)
* nuxt3 (lerna + yarn workspace)
* ...etc

<v-click>

## \u{1F631} Wait\u2753 Workspace\u2753

</v-click>`,frontmatter:{title:"Who uses a monorepo",srcSequence:"./src/who-use-monorepo.md"},index:8,start:0,end:20,source:{filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/who-use-monorepo.md",raw:`# Who uses a monorepo

Now, almost all mid or large front-end projects

* react (yarn workspace)
* vue 2 & 3 (pnpm workspace)
* angular (bazel)
* preact (custom)
* alpine (npm workspace)
* nextjs (pnpm workspace)
* element-plus (pnpm workspace)
* nuxt3 (lerna + yarn workspace)
* ...etc

<v-click>

## \u{1F631} Wait\u2753 Workspace\u2753

</v-click>
`,title:"Who uses a monorepo",level:1,content:`# Who uses a monorepo

Now, almost all mid or large front-end projects

* react (yarn workspace)
* vue 2 & 3 (pnpm workspace)
* angular (bazel)
* preact (custom)
* alpine (npm workspace)
* nextjs (pnpm workspace)
* element-plus (pnpm workspace)
* nuxt3 (lerna + yarn workspace)
* ...etc

<v-click>

## \u{1F631} Wait\u2753 Workspace\u2753

</v-click>`,frontmatter:{title:"Who uses a monorepo"},index:0,start:0,end:20},inline:{raw:`---
src: ./src/who-use-monorepo.md
---

<!-- workspace -->`,content:"",frontmatter:{},note:"workspace",index:8,start:51,end:56},filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/who-use-monorepo.md",notesHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Kk,meta:{title:"Workspaces",srcSequence:"./src/workspace.md",slide:{raw:null,title:"Workspaces",level:1,content:`# Workspaces

<div v-click-hide>

In npm-cli official docs:
<br/>

> Workspaces is a generic term that refers to the set of features in the npm cli that provides support to **managing multiple packages** from your local file system from within a singular top-level, root package.
>
> This set of features makes up for a much more streamlined workflow handling linked packages from the local file system. Automating the linking process as part of npm install and avoiding manually having to use npm link in order to add references to packages that should be symlinked into the current node_modules folder.

<br/>

Simple Configuration

\`\`\`json {all|4-5|all}
{
  "name": "my-workspaces-powered-project",
  "workspaces": [
    "packages/a",
    "packages/b",
  ]
}
\`\`\`
</div>

<v-after>

\u{1F4A1} Conclusion

\`Workspaces\` can help to build a monorepo (npm >= 7)

</v-after>

<style>
  .slidev-page-10,
  .slidev-layout.my-custom-layout {
    .slidev-vclick-target {
      transition: all 500ms ease;
    }

    .slidev-vclick-hidden {
      transform:  scale(0);
      position: absolute;
    }
  }
</style>`,frontmatter:{title:"Workspaces",srcSequence:"./src/workspace.md"},index:9,start:0,end:48,source:{filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/workspace.md",raw:`# Workspaces

<div v-click-hide>

In npm-cli official docs:
<br/>

> Workspaces is a generic term that refers to the set of features in the npm cli that provides support to **managing multiple packages** from your local file system from within a singular top-level, root package.
>
> This set of features makes up for a much more streamlined workflow handling linked packages from the local file system. Automating the linking process as part of npm install and avoiding manually having to use npm link in order to add references to packages that should be symlinked into the current node_modules folder.

<br/>

Simple Configuration

\`\`\`json {all|4-5|all}
{
  "name": "my-workspaces-powered-project",
  "workspaces": [
    "packages/a",
    "packages/b",
  ]
}
\`\`\`
</div>

<v-after>

\u{1F4A1} Conclusion

\`Workspaces\` can help to build a monorepo (npm >= 7)

</v-after>

<style>
  .slidev-page-10,
  .slidev-layout.my-custom-layout {
    .slidev-vclick-target {
      transition: all 500ms ease;
    }

    .slidev-vclick-hidden {
      transform:  scale(0);
      position: absolute;
    }
  }
</style>
`,title:"Workspaces",level:1,content:`# Workspaces

<div v-click-hide>

In npm-cli official docs:
<br/>

> Workspaces is a generic term that refers to the set of features in the npm cli that provides support to **managing multiple packages** from your local file system from within a singular top-level, root package.
>
> This set of features makes up for a much more streamlined workflow handling linked packages from the local file system. Automating the linking process as part of npm install and avoiding manually having to use npm link in order to add references to packages that should be symlinked into the current node_modules folder.

<br/>

Simple Configuration

\`\`\`json {all|4-5|all}
{
  "name": "my-workspaces-powered-project",
  "workspaces": [
    "packages/a",
    "packages/b",
  ]
}
\`\`\`
</div>

<v-after>

\u{1F4A1} Conclusion

\`Workspaces\` can help to build a monorepo (npm >= 7)

</v-after>

<style>
  .slidev-page-10,
  .slidev-layout.my-custom-layout {
    .slidev-vclick-target {
      transition: all 500ms ease;
    }

    .slidev-vclick-hidden {
      transform:  scale(0);
      position: absolute;
    }
  }
</style>`,frontmatter:{title:"Workspaces"},index:0,start:0,end:48},inline:{raw:`---
src: ./src/workspace.md
---

<!-- yarn workspace vs pnpm workspace -->`,content:"",frontmatter:{},note:"yarn workspace vs pnpm workspace",index:9,start:56,end:61},filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/workspace.md",notesHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:ux,meta:{title:"Yarn workspace and Pnpm workspace",clicks:2,srcSequence:"./src/yarn-vs-pnpm-workspace.md",slide:{raw:null,title:"Yarn workspace and Pnpm workspace",level:1,content:`# Yarn workspace and Pnpm workspace

<div v-click-hide>

In Yarn official docs

<i>Yarn workspace compare to Lerna: </i>

> Yarn\u2019s workspaces are the low-level primitives that tools like Lerna can (and do!) use. They will never try to support the high-level feature that Lerna offers, but by implementing the core logic of the resolution and linking steps inside Yarn itself we hope to enable new usages and improve performance.

<!-- From other way, yarn and yarn workspace have do lost of works that Lerna does  -->


In Pnpm official docs:

> pnpm has built-in support for monorepositories (AKA multi-package repositories, multi-project repositories, or monolithic repositories). You can create a workspace to unite multiple projects inside a single repository.

<!-- Pnpm say: my workspaces == monorepo -->

</div>

<div class="flex items-center h-11/12">
  <div v-click="1" class="w-1/2 h-full">
    <img class="h-full" src="/pnpm-benchmark.svg" />
  </div>
  <div v-click="2" class="w-1/2 h-full text-center flex items-center justify-center" >
    <span class="text-6xl">Pnpm > Yarn 1</span>
  </div>
</div>

<style>
  .slidev-page-11,
  .slidev-layout.my-custom-layout {
    .slidev-vclick-target {
      transition: all 500ms ease;
    }

    .slidev-vclick-hidden {
      transform:  scale(0);
      position: absolute;
    }
  }
</style>`,frontmatter:{title:"Yarn workspace and Pnpm workspace",clicks:2,srcSequence:"./src/yarn-vs-pnpm-workspace.md"},index:10,start:0,end:44,source:{filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/yarn-vs-pnpm-workspace.md",raw:`# Yarn workspace and Pnpm workspace

<div v-click-hide>

In Yarn official docs

<i>Yarn workspace compare to Lerna: </i>

> Yarn\u2019s workspaces are the low-level primitives that tools like Lerna can (and do!) use. They will never try to support the high-level feature that Lerna offers, but by implementing the core logic of the resolution and linking steps inside Yarn itself we hope to enable new usages and improve performance.

<!-- From other way, yarn and yarn workspace have do lost of works that Lerna does  -->


In Pnpm official docs:

> pnpm has built-in support for monorepositories (AKA multi-package repositories, multi-project repositories, or monolithic repositories). You can create a workspace to unite multiple projects inside a single repository.

<!-- Pnpm say: my workspaces == monorepo -->

</div>

<div class="flex items-center h-11/12">
  <div v-click="1" class="w-1/2 h-full">
    <img class="h-full" src="/pnpm-benchmark.svg" />
  </div>
  <div v-click="2" class="w-1/2 h-full text-center flex items-center justify-center" >
    <span class="text-6xl">Pnpm > Yarn 1</span>
  </div>
</div>

<style>
  .slidev-page-11,
  .slidev-layout.my-custom-layout {
    .slidev-vclick-target {
      transition: all 500ms ease;
    }

    .slidev-vclick-hidden {
      transform:  scale(0);
      position: absolute;
    }
  }
</style>
`,title:"Yarn workspace and Pnpm workspace",level:1,content:`# Yarn workspace and Pnpm workspace

<div v-click-hide>

In Yarn official docs

<i>Yarn workspace compare to Lerna: </i>

> Yarn\u2019s workspaces are the low-level primitives that tools like Lerna can (and do!) use. They will never try to support the high-level feature that Lerna offers, but by implementing the core logic of the resolution and linking steps inside Yarn itself we hope to enable new usages and improve performance.

<!-- From other way, yarn and yarn workspace have do lost of works that Lerna does  -->


In Pnpm official docs:

> pnpm has built-in support for monorepositories (AKA multi-package repositories, multi-project repositories, or monolithic repositories). You can create a workspace to unite multiple projects inside a single repository.

<!-- Pnpm say: my workspaces == monorepo -->

</div>

<div class="flex items-center h-11/12">
  <div v-click="1" class="w-1/2 h-full">
    <img class="h-full" src="/pnpm-benchmark.svg" />
  </div>
  <div v-click="2" class="w-1/2 h-full text-center flex items-center justify-center" >
    <span class="text-6xl">Pnpm > Yarn 1</span>
  </div>
</div>

<style>
  .slidev-page-11,
  .slidev-layout.my-custom-layout {
    .slidev-vclick-target {
      transition: all 500ms ease;
    }

    .slidev-vclick-hidden {
      transform:  scale(0);
      position: absolute;
    }
  }
</style>`,frontmatter:{title:"Yarn workspace and Pnpm workspace"},index:0,start:0,end:44},inline:{raw:`---
src: ./src/yarn-vs-pnpm-workspace.md
clicks: 2
---

<!-- lerna is optional -->`,content:"",frontmatter:{clicks:2},note:"lerna is optional",index:10,start:61,end:67},filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/yarn-vs-pnpm-workspace.md",notesHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:bx,meta:{title:"Lerna",srcSequence:"./src/lerna-is-optional.md",slide:{raw:null,title:"Lerna",level:1,content:`# Lerna

<v-clicks>
  
  * Yarn or Pnpm already meets your requirement if you just want to construct a monorepo structure and work it with workspaces.
  * Actually, event if you want more, lerna hardly gives you. <Link to="/8" title="reason in 'monorepo tools'"/>
  * However, lerna changed stewardship to Nrwl on May 6 this year, and started to use NX to run tasks in lerna v5.1.0

</v-clicks>

<br />

<v-click at="4">

<i><b><center class="text-4xl">Lerna v5.1.0+ == Nx</center></b></i>

</v-click>`,frontmatter:{title:"Lerna",srcSequence:"./src/lerna-is-optional.md"},index:11,start:0,end:19,source:{filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/lerna-is-optional.md",raw:`# Lerna

<v-clicks>
  
  * Yarn or Pnpm already meets your requirement if you just want to construct a monorepo structure and work it with workspaces.
  * Actually, event if you want more, lerna hardly gives you. <Link to="/8" title="reason in 'monorepo tools'"/>
  * However, lerna changed stewardship to Nrwl on May 6 this year, and started to use NX to run tasks in lerna v5.1.0

</v-clicks>

<br />

<v-click at="4">

<i><b><center class="text-4xl">Lerna v5.1.0+ == Nx</center></b></i>

</v-click>

`,title:"Lerna",level:1,content:`# Lerna

<v-clicks>
  
  * Yarn or Pnpm already meets your requirement if you just want to construct a monorepo structure and work it with workspaces.
  * Actually, event if you want more, lerna hardly gives you. <Link to="/8" title="reason in 'monorepo tools'"/>
  * However, lerna changed stewardship to Nrwl on May 6 this year, and started to use NX to run tasks in lerna v5.1.0

</v-clicks>

<br />

<v-click at="4">

<i><b><center class="text-4xl">Lerna v5.1.0+ == Nx</center></b></i>

</v-click>`,frontmatter:{title:"Lerna"},index:0,start:0,end:19},inline:{raw:`---
src: ./src/lerna-is-optional.md
---

<!-- Practice  -->`,content:"",frontmatter:{},note:"Practice",index:11,start:67,end:72},filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/lerna-is-optional.md",notesHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Ex,meta:{title:"Practice",srcSequence:"./src/practice.md",slide:{raw:null,title:"Practice",level:1,content:`# Practice


Technology Selection Result

| **Selection** | **Important features** |
|----|-----|
| Pnpm | Dependency Management and Workspace |
| TurboRepo | Caching and Task Orchestration for  JS  & TS Monorepo |
| Changeset | Versioning and Publishing  |
| Github Code Owners | Ownership on the folder basis  |`,frontmatter:{title:"Practice",srcSequence:"./src/practice.md"},index:12,start:0,end:14,source:{filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/practice.md",raw:`# Practice


Technology Selection Result

| **Selection** | **Important features** |
|----|-----|
| Pnpm | Dependency Management and Workspace |
| TurboRepo | Caching and Task Orchestration for  JS  & TS Monorepo |
| Changeset | Versioning and Publishing  |
| Github Code Owners | Ownership on the folder basis  |


`,title:"Practice",level:1,content:`# Practice


Technology Selection Result

| **Selection** | **Important features** |
|----|-----|
| Pnpm | Dependency Management and Workspace |
| TurboRepo | Caching and Task Orchestration for  JS  & TS Monorepo |
| Changeset | Versioning and Publishing  |
| Github Code Owners | Ownership on the folder basis  |`,frontmatter:{title:"Practice"},index:0,start:0,end:14},inline:{raw:`---
src: ./src/practice.md
---

<!-- Project structure -->`,content:"",frontmatter:{},note:"Project structure",index:12,start:72,end:77},filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/practice.md",notesHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Dx,meta:{title:"Project Setup",srcSequence:"./src/practice-structure.md",slide:{raw:null,title:"Project Setup",level:1,content:`# Project Setup


<div v-click-hide>

<b>Project Structure</b>


\`\`\`bash
.
\u251C\u2500\u2500 LICENSE
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 components
\u251C\u2500\u2500 node_modules
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 playground
\u251C\u2500\u2500 pnpm-lock.yaml
\u251C\u2500\u2500 pnpm-workspace.yaml
\u251C\u2500\u2500 presentation
\u2514\u2500\u2500 turbo.json

4 directories, 6 files

\`\`\`
</div>


<v-after>

<i>Pnpm-workspace.yaml</i>

\`\`\`yaml
packages:
  - presentation
  - components
  - playground
\`\`\`

<i>presentation/package.json</i>

\`\`\`jsonc
{
  // ...
   "dependencies": {
    "@tedy-talk/monorepo-components": "workspace: *"
  }
}

// The same is true for \`playground\`
\`\`\`

Initialize it and now you have a local monorepo, or called \`monolith\`.


</v-after>


<style>
  .slidev-page-14,
  .slidev-layout.my-custom-layout {
    .slidev-vclick-target {
      transition: all 500ms ease;
    }

    .slidev-vclick-hidden {
      transform:  scale(0);
      position: absolute;
    }
  }
</style>`,frontmatter:{title:"Project Setup",srcSequence:"./src/practice-structure.md"},index:13,start:0,end:71,source:{filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/practice-structure.md",raw:`# Project Setup


<div v-click-hide>

<b>Project Structure</b>


\`\`\`bash
.
\u251C\u2500\u2500 LICENSE
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 components
\u251C\u2500\u2500 node_modules
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 playground
\u251C\u2500\u2500 pnpm-lock.yaml
\u251C\u2500\u2500 pnpm-workspace.yaml
\u251C\u2500\u2500 presentation
\u2514\u2500\u2500 turbo.json

4 directories, 6 files

\`\`\`
</div>


<v-after>

<i>Pnpm-workspace.yaml</i>

\`\`\`yaml
packages:
  - presentation
  - components
  - playground
\`\`\`

<i>presentation/package.json</i>

\`\`\`jsonc
{
  // ...
   "dependencies": {
    "@tedy-talk/monorepo-components": "workspace: *"
  }
}

// The same is true for \`playground\`
\`\`\`

Initialize it and now you have a local monorepo, or called \`monolith\`.


</v-after>


<style>
  .slidev-page-14,
  .slidev-layout.my-custom-layout {
    .slidev-vclick-target {
      transition: all 500ms ease;
    }

    .slidev-vclick-hidden {
      transform:  scale(0);
      position: absolute;
    }
  }
</style>
`,title:"Project Setup",level:1,content:`# Project Setup


<div v-click-hide>

<b>Project Structure</b>


\`\`\`bash
.
\u251C\u2500\u2500 LICENSE
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 components
\u251C\u2500\u2500 node_modules
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 playground
\u251C\u2500\u2500 pnpm-lock.yaml
\u251C\u2500\u2500 pnpm-workspace.yaml
\u251C\u2500\u2500 presentation
\u2514\u2500\u2500 turbo.json

4 directories, 6 files

\`\`\`
</div>


<v-after>

<i>Pnpm-workspace.yaml</i>

\`\`\`yaml
packages:
  - presentation
  - components
  - playground
\`\`\`

<i>presentation/package.json</i>

\`\`\`jsonc
{
  // ...
   "dependencies": {
    "@tedy-talk/monorepo-components": "workspace: *"
  }
}

// The same is true for \`playground\`
\`\`\`

Initialize it and now you have a local monorepo, or called \`monolith\`.


</v-after>


<style>
  .slidev-page-14,
  .slidev-layout.my-custom-layout {
    .slidev-vclick-target {
      transition: all 500ms ease;
    }

    .slidev-vclick-hidden {
      transform:  scale(0);
      position: absolute;
    }
  }
</style>`,frontmatter:{title:"Project Setup"},index:0,start:0,end:71},inline:{raw:`---
src: ./src/practice-structure.md
---

<!-- HelloWorld Component -->`,content:"",frontmatter:{},note:"HelloWorld Component",index:13,start:77,end:82},filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/practice-structure.md",notesHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Ux,meta:{title:"Component",srcSequence:"./src/component.md",slide:{raw:null,title:"Component",level:1,content:`# Component

The following \`HelloWorld\` Vue Component is from [Another workspace](https://github.com/tangdaoyuan/talk-about-monorepo/tree/main/components) :

<HelloWorld />`,frontmatter:{title:"Component",srcSequence:"./src/component.md"},index:14,start:0,end:6,source:{filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/component.md",raw:`# Component

The following \`HelloWorld\` Vue Component is from [Another workspace](https://github.com/tangdaoyuan/talk-about-monorepo/tree/main/components) :

<HelloWorld />
`,title:"Component",level:1,content:`# Component

The following \`HelloWorld\` Vue Component is from [Another workspace](https://github.com/tangdaoyuan/talk-about-monorepo/tree/main/components) :

<HelloWorld />`,frontmatter:{title:"Component"},index:0,start:0,end:6},inline:{raw:`---
src: ./src/component.md
---

<!-- TurboRepo -->`,content:"",frontmatter:{},note:"TurboRepo",index:14,start:82,end:87},filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/component.md",notesHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:a8,meta:{title:"TurboRepo",clicks:3,srcSequence:"./src/turborepo.md",slide:{raw:null,title:"TurboRepo",level:1,content:`# TurboRepo

<!-- Need A Workspace Deps Relationship to Show Export Features -->

> [Turborepo](https://turborepo.org/docs) is a blazing fast build system for JavaScript/TypeScript monorepos: codebases containing multiple projects, often using multiple frameworks, in a single unified code repository.

<div v-click-hide>

Pipeline and Cache Configuration

\`\`\`jsonc

{
  "$schema": "https://turborepo.org/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": [
        // "A package's \`build\` command depends on its dependencies'
        // and devDependencies' \`build\` commands being completed first"
        "^build"
      ],
      "outputs": [
        "dist/**", "build/**"
      ]
    },
    // ...
  }
}

\`\`\`

</div>

<div v-click-hide="2">
  <div v-click="1">

  Pipeline and Cache Configuration

  \`\`\`jsonc
  {
    
    "scripts": {
      "build": "turbo run build",
      // ...
    },
  }

  \`\`\`

  </div>
</div>


<div v-click-hide="3">
  <div v-click="2">

  Result after second build (no files change)


  \`\`\`bash

  > turbo run build

  \u2022 Packages in scope: @tedy-talk/monorepo-components, @tedy-talk/presentation, playground
  \u2022 Running build in 3 packages

  # Omit the compiling details

  Tasks:    3 successful, 3 total
  Cached:    1 cached, 3 total
    Time:    342ms >>> FULL TURBO

  # First Build 7.82s

  \`\`\`

  </div>
</div>

<div v-click="3">

**Remote Caching by Github Action**

* Caching across CI jobs or OS become easy by the feature
* Local Development Convenient with Remote Caching
* Support to Custom Remote Caches


\`\`\`yaml

# env:
    #  TURBO_TOKEN: \${{ secrets.TURBO_TOKEN }}
    #  TURBO_TEAM: \${{ secrets.TURBO_TEAM }}
    #  TURBO_REMOTE_ONLY: true

\`\`\`


<span class="remote-config">

 [Complete config Here](https://github.com/tangdaoyuan/talk-about-monorepo/blob/334bd70fa00e7d9b194cbf7e6353ec55cc6d7d96/.github/workflows/ci.yaml#L15)

</span>

</div>

<style>
  .slidev-page-16,
  .slidev-layout.my-custom-layout {
    .slidev-vclick-target {
      transition: all 500ms ease;
    }

    .slidev-vclick-hidden {
      transform:  scale(0);
      position: absolute;
    }
  }
  .remote-config a {
    font-size: 10px;
    border-bottom: none
  }
</style>`,frontmatter:{title:"TurboRepo",clicks:3,srcSequence:"./src/turborepo.md"},index:15,start:0,end:124,source:{filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/turborepo.md",raw:`# TurboRepo

<!-- Need A Workspace Deps Relationship to Show Export Features -->

> [Turborepo](https://turborepo.org/docs) is a blazing fast build system for JavaScript/TypeScript monorepos: codebases containing multiple projects, often using multiple frameworks, in a single unified code repository.

<div v-click-hide>

Pipeline and Cache Configuration

\`\`\`jsonc

{
  "$schema": "https://turborepo.org/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": [
        // "A package's \`build\` command depends on its dependencies'
        // and devDependencies' \`build\` commands being completed first"
        "^build"
      ],
      "outputs": [
        "dist/**", "build/**"
      ]
    },
    // ...
  }
}

\`\`\`

</div>

<div v-click-hide="2">
  <div v-click="1">

  Pipeline and Cache Configuration

  \`\`\`jsonc
  {
    
    "scripts": {
      "build": "turbo run build",
      // ...
    },
  }

  \`\`\`

  </div>
</div>


<div v-click-hide="3">
  <div v-click="2">

  Result after second build (no files change)


  \`\`\`bash

  > turbo run build

  \u2022 Packages in scope: @tedy-talk/monorepo-components, @tedy-talk/presentation, playground
  \u2022 Running build in 3 packages

  # Omit the compiling details

  Tasks:    3 successful, 3 total
  Cached:    1 cached, 3 total
    Time:    342ms >>> FULL TURBO

  # First Build 7.82s

  \`\`\`

  </div>
</div>

<div v-click="3">

**Remote Caching by Github Action**

* Caching across CI jobs or OS become easy by the feature
* Local Development Convenient with Remote Caching
* Support to Custom Remote Caches


\`\`\`yaml

# env:
    #  TURBO_TOKEN: \${{ secrets.TURBO_TOKEN }}
    #  TURBO_TEAM: \${{ secrets.TURBO_TEAM }}
    #  TURBO_REMOTE_ONLY: true

\`\`\`


<span class="remote-config">

 [Complete config Here](https://github.com/tangdaoyuan/talk-about-monorepo/blob/334bd70fa00e7d9b194cbf7e6353ec55cc6d7d96/.github/workflows/ci.yaml#L15)

</span>

</div>

<style>
  .slidev-page-16,
  .slidev-layout.my-custom-layout {
    .slidev-vclick-target {
      transition: all 500ms ease;
    }

    .slidev-vclick-hidden {
      transform:  scale(0);
      position: absolute;
    }
  }
  .remote-config a {
    font-size: 10px;
    border-bottom: none
  }
</style>
`,title:"TurboRepo",level:1,content:`# TurboRepo

<!-- Need A Workspace Deps Relationship to Show Export Features -->

> [Turborepo](https://turborepo.org/docs) is a blazing fast build system for JavaScript/TypeScript monorepos: codebases containing multiple projects, often using multiple frameworks, in a single unified code repository.

<div v-click-hide>

Pipeline and Cache Configuration

\`\`\`jsonc

{
  "$schema": "https://turborepo.org/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": [
        // "A package's \`build\` command depends on its dependencies'
        // and devDependencies' \`build\` commands being completed first"
        "^build"
      ],
      "outputs": [
        "dist/**", "build/**"
      ]
    },
    // ...
  }
}

\`\`\`

</div>

<div v-click-hide="2">
  <div v-click="1">

  Pipeline and Cache Configuration

  \`\`\`jsonc
  {
    
    "scripts": {
      "build": "turbo run build",
      // ...
    },
  }

  \`\`\`

  </div>
</div>


<div v-click-hide="3">
  <div v-click="2">

  Result after second build (no files change)


  \`\`\`bash

  > turbo run build

  \u2022 Packages in scope: @tedy-talk/monorepo-components, @tedy-talk/presentation, playground
  \u2022 Running build in 3 packages

  # Omit the compiling details

  Tasks:    3 successful, 3 total
  Cached:    1 cached, 3 total
    Time:    342ms >>> FULL TURBO

  # First Build 7.82s

  \`\`\`

  </div>
</div>

<div v-click="3">

**Remote Caching by Github Action**

* Caching across CI jobs or OS become easy by the feature
* Local Development Convenient with Remote Caching
* Support to Custom Remote Caches


\`\`\`yaml

# env:
    #  TURBO_TOKEN: \${{ secrets.TURBO_TOKEN }}
    #  TURBO_TEAM: \${{ secrets.TURBO_TEAM }}
    #  TURBO_REMOTE_ONLY: true

\`\`\`


<span class="remote-config">

 [Complete config Here](https://github.com/tangdaoyuan/talk-about-monorepo/blob/334bd70fa00e7d9b194cbf7e6353ec55cc6d7d96/.github/workflows/ci.yaml#L15)

</span>

</div>

<style>
  .slidev-page-16,
  .slidev-layout.my-custom-layout {
    .slidev-vclick-target {
      transition: all 500ms ease;
    }

    .slidev-vclick-hidden {
      transform:  scale(0);
      position: absolute;
    }
  }
  .remote-config a {
    font-size: 10px;
    border-bottom: none
  }
</style>`,frontmatter:{title:"TurboRepo"},index:0,start:0,end:124},inline:{raw:`---
src: ./src/turborepo.md
clicks: 3
---

<!-- Version and Publish -->`,content:"",frontmatter:{clicks:3},note:"Version and Publish",index:15,start:87,end:93},filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/turborepo.md",notesHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:m8,meta:{title:"Changeset",layout:"image-right",image:"/changeset-workflow.png",srcSequence:"./src/changeset.md",slide:{raw:null,title:"Changeset",level:1,content:`# Changeset

> The [changesets](https://github.com/changesets/changesets) workflow is designed to help when people are making changes, all the way through to publishing. It lets contributors declare how their changes should be released, then we automate updating package versions, and changelogs, and publishing new versions of packages based on the provided information.

Core commands

* <kbd>pnpm changeset</kbd> <i>(produce changelog)</i>
* <kbd>pnpm changeset version</kbd> <i>(consume changelog and versioning)</i>
* <kbd>pnpm changeset publish</kbd> <i>(wrapper publish)</i>

<span class="remote-config">

 [Complete config here](https://github.com/tangdaoyuan/talk-about-monorepo/blob/334bd70fa00e7d9b194cbf7e6353ec55cc6d7d96/.github/workflows/release.yaml#L39)

</span>

<style>
  .remote-config a {
    font-size: 10px;
    border-bottom: none
  }
</style>`,frontmatter:{title:"Changeset",layout:"image-right",image:"/changeset-workflow.png",srcSequence:"./src/changeset.md"},index:16,start:0,end:23,source:{filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/changeset.md",raw:`# Changeset

> The [changesets](https://github.com/changesets/changesets) workflow is designed to help when people are making changes, all the way through to publishing. It lets contributors declare how their changes should be released, then we automate updating package versions, and changelogs, and publishing new versions of packages based on the provided information.

Core commands

* <kbd>pnpm changeset</kbd> <i>(produce changelog)</i>
* <kbd>pnpm changeset version</kbd> <i>(consume changelog and versioning)</i>
* <kbd>pnpm changeset publish</kbd> <i>(wrapper publish)</i>

<span class="remote-config">

 [Complete config here](https://github.com/tangdaoyuan/talk-about-monorepo/blob/334bd70fa00e7d9b194cbf7e6353ec55cc6d7d96/.github/workflows/release.yaml#L39)

</span>

<style>
  .remote-config a {
    font-size: 10px;
    border-bottom: none
  }
</style>
`,title:"Changeset",level:1,content:`# Changeset

> The [changesets](https://github.com/changesets/changesets) workflow is designed to help when people are making changes, all the way through to publishing. It lets contributors declare how their changes should be released, then we automate updating package versions, and changelogs, and publishing new versions of packages based on the provided information.

Core commands

* <kbd>pnpm changeset</kbd> <i>(produce changelog)</i>
* <kbd>pnpm changeset version</kbd> <i>(consume changelog and versioning)</i>
* <kbd>pnpm changeset publish</kbd> <i>(wrapper publish)</i>

<span class="remote-config">

 [Complete config here](https://github.com/tangdaoyuan/talk-about-monorepo/blob/334bd70fa00e7d9b194cbf7e6353ec55cc6d7d96/.github/workflows/release.yaml#L39)

</span>

<style>
  .remote-config a {
    font-size: 10px;
    border-bottom: none
  }
</style>`,frontmatter:{title:"Changeset"},index:0,start:0,end:23},inline:{raw:`---
src: ./src/changeset.md
layout: image-right
image: /changeset-workflow.png
---

<!-- Code Owners -->`,content:"",frontmatter:{layout:"image-right",image:"/changeset-workflow.png"},note:"Code Owners",index:16,start:93,end:100},filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/changeset.md",notesHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:x8,meta:{title:"Github Code Owners",srcSequence:"./src/codeowners.md",slide:{raw:null,title:"Github Code Owners",level:1,content:`# Github Code Owners

> You can use a CODEOWNERS file to define individuals or teams that are responsible for code in a repository.

You often hear about monorepo

> \u201CIt lets other teams will change my code without my knowing.\u201D

Now, solved by \`CODEOWNERS\`


\`\`\`bash
# .github/CODEOWNERS
component/* @tangdaoyuan
playground/* @fourtreasure
presentation/* @tangdaoyuan

\`\`\`

If the developer modifies any file in \`presentation\` directory, a review pipeline include code owners specified in CODEOWNERS will start automatically in Merge Request phase.`,frontmatter:{title:"Github Code Owners",srcSequence:"./src/codeowners.md"},index:17,start:0,end:21,source:{filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/codeowners.md",raw:`# Github Code Owners

> You can use a CODEOWNERS file to define individuals or teams that are responsible for code in a repository.

You often hear about monorepo

> \u201CIt lets other teams will change my code without my knowing.\u201D

Now, solved by \`CODEOWNERS\`


\`\`\`bash
# .github/CODEOWNERS
component/* @tangdaoyuan
playground/* @fourtreasure
presentation/* @tangdaoyuan

\`\`\`

If the developer modifies any file in \`presentation\` directory, a review pipeline include code owners specified in CODEOWNERS will start automatically in Merge Request phase.
`,title:"Github Code Owners",level:1,content:`# Github Code Owners

> You can use a CODEOWNERS file to define individuals or teams that are responsible for code in a repository.

You often hear about monorepo

> \u201CIt lets other teams will change my code without my knowing.\u201D

Now, solved by \`CODEOWNERS\`


\`\`\`bash
# .github/CODEOWNERS
component/* @tangdaoyuan
playground/* @fourtreasure
presentation/* @tangdaoyuan

\`\`\`

If the developer modifies any file in \`presentation\` directory, a review pipeline include code owners specified in CODEOWNERS will start automatically in Merge Request phase.`,frontmatter:{title:"Github Code Owners"},index:0,start:0,end:21},inline:{raw:`---
src: ./src/codeowners.md
---

<!-- Thanks -->`,content:"",frontmatter:{},note:"Thanks",index:17,start:100,end:105},filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/codeowners.md",notesHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:S8,meta:{title:"Thank you",layout:"center",class:"text-center",srcSequence:"./src/thanks.md",slide:{raw:null,title:"Thank you",level:1,content:"# Thank you",frontmatter:{title:"Thank you",layout:"center",class:"text-center",srcSequence:"./src/thanks.md"},index:18,start:0,end:2,source:{filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/thanks.md",raw:`# Thank you
`,title:"Thank you",level:1,content:"# Thank you",frontmatter:{title:"Thank you"},index:0,start:0,end:2},inline:{raw:`---
src: ./src/thanks.md
layout: center
class: text-center
---

<!-- References -->`,content:"",frontmatter:{layout:"center",class:"text-center"},note:"References",index:18,start:105,end:112},filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/thanks.md",notesHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:M8,meta:{title:"References",srcSequence:"./src/reference.md",slide:{raw:null,title:"References",level:1,content:`# References

* [Version control definition](https://en.wikipedia.org/wiki/Version_control)
* [Monorepo Definition](https://en.wikipedia.org/wiki/Monorepo)
* [Monorepo and monolith](https://blog.nrwl.io/misconceptions-about-monorepos-monorepo-monolith-df1250d4b03c)
* [Github code owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
* [Monorepo tools](https://monorepo.tools/)
* [Workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces)
* [Yarn workspace and lerna](https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/)
* [Yarn features about workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/)
* [Pnpm features about workspaces](https://pnpm.io/workspaces)
* [Pnpm and yarn benchmark](https://yarnpkg.com/benchmarks)
* [Lerna](https://lerna.js.org/docs/introduction)
* [Changesets](https://github.com/changesets/changesets)
* [Turborepo](https://turborepo.org/docs)
* [Monorepos remote caching in Vercel](https://vercel.com/docs/concepts/monorepos/remote-caching)


<style>
  .slidev-layout li {
    line-height: 1.5em
  }
  .slidev-layout a {
    border-bottom: none;
    font-size: 12px;
  }
</style>`,frontmatter:{title:"References",srcSequence:"./src/reference.md"},index:19,start:0,end:28,source:{filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/reference.md",raw:`# References

* [Version control definition](https://en.wikipedia.org/wiki/Version_control)
* [Monorepo Definition](https://en.wikipedia.org/wiki/Monorepo)
* [Monorepo and monolith](https://blog.nrwl.io/misconceptions-about-monorepos-monorepo-monolith-df1250d4b03c)
* [Github code owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
* [Monorepo tools](https://monorepo.tools/)
* [Workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces)
* [Yarn workspace and lerna](https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/)
* [Yarn features about workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/)
* [Pnpm features about workspaces](https://pnpm.io/workspaces)
* [Pnpm and yarn benchmark](https://yarnpkg.com/benchmarks)
* [Lerna](https://lerna.js.org/docs/introduction)
* [Changesets](https://github.com/changesets/changesets)
* [Turborepo](https://turborepo.org/docs)
* [Monorepos remote caching in Vercel](https://vercel.com/docs/concepts/monorepos/remote-caching)


<style>
  .slidev-layout li {
    line-height: 1.5em
  }
  .slidev-layout a {
    border-bottom: none;
    font-size: 12px;
  }
</style>
`,title:"References",level:1,content:`# References

* [Version control definition](https://en.wikipedia.org/wiki/Version_control)
* [Monorepo Definition](https://en.wikipedia.org/wiki/Monorepo)
* [Monorepo and monolith](https://blog.nrwl.io/misconceptions-about-monorepos-monorepo-monolith-df1250d4b03c)
* [Github code owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
* [Monorepo tools](https://monorepo.tools/)
* [Workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces)
* [Yarn workspace and lerna](https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/)
* [Yarn features about workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/)
* [Pnpm features about workspaces](https://pnpm.io/workspaces)
* [Pnpm and yarn benchmark](https://yarnpkg.com/benchmarks)
* [Lerna](https://lerna.js.org/docs/introduction)
* [Changesets](https://github.com/changesets/changesets)
* [Turborepo](https://turborepo.org/docs)
* [Monorepos remote caching in Vercel](https://vercel.com/docs/concepts/monorepos/remote-caching)


<style>
  .slidev-layout li {
    line-height: 1.5em
  }
  .slidev-layout a {
    border-bottom: none;
    font-size: 12px;
  }
</style>`,frontmatter:{title:"References"},index:0,start:0,end:28},inline:{raw:`---
src: ./src/reference.md
---
`,content:"",frontmatter:{},index:19,start:112,end:116},filepath:"/home/runner/work/talk-about-monorepo/talk-about-monorepo/presentation/src/reference.md",notesHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",component:Cb,meta:{layout:"end"}}],je=R8,D8=[{name:"play",path:"/",component:vb,children:[...je]},{name:"print",path:"/print",component:xb},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>ko(()=>import("./Presenter.0b75a1f9.js"),["assets/Presenter.0b75a1f9.js","assets/Presenter.ca711259.css","assets/DrawingControls.vue_vue_type_script_setup_true_lang.076b7387.js"]),beforeEnter:e=>{if(!Ln.remote||Ln.remote===e.query.password)return!0;if(Ln.remote&&e.query.password===void 0){const t=prompt("Enter password");if(Ln.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],gt=rv({history:by("/talk-about-monorepo/"),routes:D8});function I8(e,t,{mode:n="replace"}={}){return S({get(){const o=gt.currentRoute.value.query[e];return o==null?t!=null?t:null:Array.isArray(o)?o.filter(Boolean):o},set(o){qe(()=>{gt[w(n)]({query:{...gt.currentRoute.value.query,[e]:o}})})}})}const zp=V(0);qe(()=>{gt.afterEach(async()=>{await qe(),zp.value+=1})});const on=S(()=>gt.currentRoute.value),fo=S(()=>on.value.query.print!==void 0),L8=S(()=>on.value.query.print==="clicks"),Zt=S(()=>on.value.query.embedded!==void 0),qt=S(()=>on.value.path.startsWith("/presenter")),Ko=S(()=>fo.value&&!L8.value),Pi=S(()=>on.value.query.password),F8=S(()=>!qt.value&&(!_e.remote||Pi.value===_e.remote)),_c=I8("clicks","0"),qp=S(()=>je.length-1),N8=S(()=>on.value.path),We=S(()=>parseInt(N8.value.split(/\//g).slice(-1)[0])||1);S(()=>xr(We.value));const dt=S(()=>je.find(e=>e.path===`${We.value}`));S(()=>{var e,t,n;return(n=(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});S(()=>{var e,t;return(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.layout});const Vr=S(()=>je.find(e=>e.path===`${Math.min(je.length,We.value+1)}`)),B8=S(()=>{var e,t;return zp.value,((t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Ft=S({get(){if(Ko.value)return 99999;let e=+(_c.value||0);return isNaN(e)&&(e=0),e},set(e){_c.value=e.toString()}}),Js=S(()=>{var e,t,n;return+((n=(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?n:B8.value.length)}),j8=S(()=>We.value<je.length-1||Ft.value<Js.value),W8=S(()=>We.value>1||Ft.value>0),V8=S(()=>je.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(vl(e,t),e),[])),H8=S(()=>_l(V8.value,dt.value));S(()=>bl(H8.value));function gn(){Js.value<=Ft.value?us():Ft.value+=1}async function yn(){Ft.value<=0?await ps():Ft.value-=1}function xr(e){return qt.value?`/presenter/${e}`:`/${e}`}function us(){const e=Math.min(je.length,We.value+1);return vo(e)}async function ps(e=!0){const t=Math.max(1,We.value-1);await vo(t),e&&Js.value&&gt.replace({query:{...on.value.query,clicks:Js.value}})}function vo(e,t){return gt.push({path:xr(e),query:{...on.value.query,clicks:t}})}function z8(e){const t=V(0),{direction:n,distanceX:o,distanceY:s}=Ug(e,{onSwipeStart(i){i.pointerType==="touch"&&(ls.value||(t.value=yi()))},onSwipeEnd(i){if(i.pointerType!=="touch"||!t.value||ls.value)return;const l=Math.abs(o.value),a=Math.abs(s.value);l/window.innerWidth>.3||l>100?n.value===Qt.LEFT?gn():yn():(a/window.innerHeight>.4||a>200)&&(n.value===Qt.DOWN?ps():us())}})}async function Ti(){const{saveAs:e}=await ko(()=>import("./FileSaver.min.7a0f3ea9.js").then(t=>t.F),[]);e(op(_e.download)?_e.download:_e.exportFilename?`${_e.exportFilename}.pdf`:"/talk-about-monorepo/slidev-exported.pdf",`${_e.title}.pdf`)}async function q8(e){var t,n;if(e==null){const o=(n=(t=dt.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function vl(e,t,n=1){var s,i,l,a,c;const o=(i=(s=t.meta)==null?void 0:s.slide)==null?void 0:i.level;o&&o>n&&e.length>0?vl(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((l=t.meta)==null?void 0:l.hideInToc),title:(c=(a=t.meta)==null?void 0:a.slide)==null?void 0:c.title})}function _l(e,t,n=!1,o){return e.map(s=>{const i={...s,active:s.path===(t==null?void 0:t.path),hasActiveParent:n};return i.children.length>0&&(i.children=_l(i.children,t,i.active||i.hasActiveParent,i)),o&&(i.active||i.activeParent)&&(o.activeParent=!0),i})}function bl(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:bl(n.children,t+1)}))}function U8(){const e=_e.titleTemplate.replace("%s",_e.title||"Slidev");mm({title:e}),Em(`${e} - shared`),Sm(`${e} - drawings`);function t(){qt.value&&(ba("page",+We.value),ba("clicks",Ft.value))}gt.afterEach(t),ce(Ft,t),Am(n=>{(+n.page!=+We.value||Ft.value!==n.clicks)&&gt.replace({path:xr(n.page),query:{...gt.currentRoute.value.query,clicks:n.clicks||0}})})}const Y8=de({__name:"App",setup(e){return q(te),U8(),(t,n)=>{const o=os("RouterView"),s=os("StarportCarrier");return k(),R(ke,null,[W(o),W(s)],64)}}});const K8=({app:e,router:t})=>{};function Hr(e){return e!==null&&typeof e=="object"}function Mi(e,t,n=".",o){if(!Hr(t))return Mi(e,{},n,o);const s=Object.assign({},t);for(const i in e){if(i==="__proto__"||i==="constructor")continue;const l=e[i];l!=null&&(o&&o(s,i,l,n)||(Array.isArray(l)&&Array.isArray(s[i])?s[i]=l.concat(s[i]):Hr(l)&&Hr(s[i])?s[i]=Mi(l,s[i],(n?`${n}.`:"")+i.toString(),o):s[i]=l))}return s}function G8(e){return(...t)=>t.reduce((n,o)=>Mi(n,o,"",e),{})}const Z8=G8();var bc;const Go=typeof window<"u",X8=Object.prototype.toString,J8=e=>typeof e=="number",Q8=e=>typeof e=="string",Qs=e=>X8.call(e)==="[object Object]",Hn=()=>{};Go&&((bc=window==null?void 0:window.navigator)==null?void 0:bc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function wl(e){return nu()?(ou(e),!0):!1}function kl(e){Yn()&&mr(e)}function e2(e,t,n){const o=ce(e,(...s)=>(qe(()=>o()),t(...s)),n)}function wn(e){var t;const n=w(e);return(t=n==null?void 0:n.$el)!=null?t:n}const xl=Go?window:void 0;function t2(...e){let t,n,o,s;if(Q8(e[0])?([n,o,s]=e,t=xl):[t,n,o,s]=e,!t)return Hn;let i=Hn;const l=ce(()=>wn(t),c=>{i(),c&&(c.addEventListener(n,o,s),i=()=>{c.removeEventListener(n,o,s),i=Hn})},{immediate:!0,flush:"post"}),a=()=>{l(),i()};return wl(a),a}const Ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Di="__vueuse_ssr_handlers__";Ri[Di]=Ri[Di]||{};Ri[Di];function n2(e,t={}){const{immediate:n=!0,window:o=xl}=t,s=V(!1);let i=null;function l(){!s.value||!o||(e(),i=o.requestAnimationFrame(l))}function a(){!s.value&&o&&(s.value=!0,l())}function c(){s.value=!1,i!=null&&o&&(o.cancelAnimationFrame(i),i=null)}return n&&a(),wl(c),{isActive:s,pause:c,resume:a}}function o2(e,t,n={}){const{root:o,rootMargin:s="0px",threshold:i=.1,window:l=xl}=n,a=l&&"IntersectionObserver"in l;let c=Hn;const u=a?ce(()=>({el:wn(e),root:wn(o)}),({el:f,root:d})=>{if(c(),!f)return;const h=new IntersectionObserver(t,{root:d,rootMargin:s,threshold:i});h.observe(f),c=()=>{h.disconnect(),c=Hn}},{immediate:!0,flush:"post"}):Hn,p=()=>{c(),u()};return wl(p),{isSupported:a,stop:p}}var wc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(wc||(wc={}));const Up=1/60*1e3,s2=typeof performance<"u"?()=>performance.now():()=>Date.now(),Yp=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(s2()),Up);function r2(e){let t=[],n=[],o=0,s=!1,i=!1;const l=new WeakSet,a={schedule:(c,u=!1,p=!1)=>{const f=p&&s,d=f?t:n;return u&&l.add(c),d.indexOf(c)===-1&&(d.push(c),f&&s&&(o=t.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),l.delete(c)},process:c=>{if(s){i=!0;return}if(s=!0,[t,n]=[n,t],n.length=0,o=t.length,o)for(let u=0;u<o;u++){const p=t[u];p(c),l.has(p)&&(a.schedule(p),e())}s=!1,i&&(i=!1,a.process(c))}};return a}const i2=40;let Ii=!0,ds=!1,Li=!1;const ho={delta:0,timestamp:0},_s=["read","update","preRender","render","postRender"],Er=_s.reduce((e,t)=>(e[t]=r2(()=>ds=!0),e),{}),Fi=_s.reduce((e,t)=>{const n=Er[t];return e[t]=(o,s=!1,i=!1)=>(ds||c2(),n.schedule(o,s,i)),e},{}),l2=_s.reduce((e,t)=>(e[t]=Er[t].cancel,e),{});_s.reduce((e,t)=>(e[t]=()=>Er[t].process(ho),e),{});const a2=e=>Er[e].process(ho),Kp=e=>{ds=!1,ho.delta=Ii?Up:Math.max(Math.min(e-ho.timestamp,i2),1),ho.timestamp=e,Li=!0,_s.forEach(a2),Li=!1,ds&&(Ii=!1,Yp(Kp))},c2=()=>{ds=!0,Ii=!0,Li||Yp(Kp)},Gp=()=>ho;function Zp(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(n[o[s]]=e[o[s]]);return n}var u2=function(){},kc=function(){};const Ni=(e,t,n)=>Math.min(Math.max(n,e),t),zr=.001,p2=.01,xc=10,d2=.05,f2=1;function h2({duration:e=800,bounce:t=.25,velocity:n=0,mass:o=1}){let s,i;u2(e<=xc*1e3);let l=1-t;l=Ni(d2,f2,l),e=Ni(p2,xc,e/1e3),l<1?(s=u=>{const p=u*l,f=p*e,d=p-n,h=Bi(u,l),m=Math.exp(-f);return zr-d/h*m},i=u=>{const f=u*l*e,d=f*n+n,h=Math.pow(l,2)*Math.pow(u,2)*e,m=Math.exp(-f),b=Bi(Math.pow(u,2),l);return(-s(u)+zr>0?-1:1)*((d-h)*m)/b}):(s=u=>{const p=Math.exp(-u*e),f=(u-n)*e+1;return-zr+p*f},i=u=>{const p=Math.exp(-u*e),f=(n-u)*(e*e);return p*f});const a=5/e,c=g2(s,i,a);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*o;return{stiffness:u,damping:l*2*Math.sqrt(o*u),duration:e}}}const m2=12;function g2(e,t,n){let o=n;for(let s=1;s<m2;s++)o=o-e(o)/t(o);return o}function Bi(e,t){return e*Math.sqrt(1-t*t)}const y2=["duration","bounce"],v2=["stiffness","damping","mass"];function Ec(e,t){return t.some(n=>e[n]!==void 0)}function _2(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Ec(e,v2)&&Ec(e,y2)){const n=h2(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function El(e){var{from:t=0,to:n=1,restSpeed:o=2,restDelta:s}=e,i=Zp(e,["from","to","restSpeed","restDelta"]);const l={done:!1,value:t};let{stiffness:a,damping:c,mass:u,velocity:p,duration:f,isResolvedFromDuration:d}=_2(i),h=Ac,m=Ac;function b(){const _=p?-(p/1e3):0,C=n-t,A=c/(2*Math.sqrt(a*u)),E=Math.sqrt(a/u)/1e3;if(s===void 0&&(s=Math.min(Math.abs(n-t)/100,.4)),A<1){const O=Bi(E,A);h=F=>{const I=Math.exp(-A*E*F);return n-I*((_+A*E*C)/O*Math.sin(O*F)+C*Math.cos(O*F))},m=F=>{const I=Math.exp(-A*E*F);return A*E*I*(Math.sin(O*F)*(_+A*E*C)/O+C*Math.cos(O*F))-I*(Math.cos(O*F)*(_+A*E*C)-O*C*Math.sin(O*F))}}else if(A===1)h=O=>n-Math.exp(-E*O)*(C+(_+E*C)*O);else{const O=E*Math.sqrt(A*A-1);h=F=>{const I=Math.exp(-A*E*F),j=Math.min(O*F,300);return n-I*((_+A*E*C)*Math.sinh(j)+O*C*Math.cosh(j))/O}}}return b(),{next:_=>{const C=h(_);if(d)l.done=_>=f;else{const A=m(_)*1e3,E=Math.abs(A)<=o,O=Math.abs(n-C)<=s;l.done=E&&O}return l.value=l.done?n:C,l},flipTarget:()=>{p=-p,[t,n]=[n,t],b()}}}El.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Ac=e=>0,Xp=(e,t,n)=>{const o=t-e;return o===0?1:(n-e)/o},Al=(e,t,n)=>-n*e+n*t+e,Jp=(e,t)=>n=>Math.max(Math.min(n,t),e),Zo=e=>e%1?Number(e.toFixed(5)):e,fs=/(-)?([\d]*\.?[\d])+/g,ji=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,b2=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function bs(e){return typeof e=="string"}const ws={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Xo=Object.assign(Object.assign({},ws),{transform:Jp(0,1)}),Ts=Object.assign(Object.assign({},ws),{default:1}),Cl=e=>({test:t=>bs(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Sn=Cl("deg"),Jo=Cl("%"),le=Cl("px"),Cc=Object.assign(Object.assign({},Jo),{parse:e=>Jo.parse(e)/100,transform:e=>Jo.transform(e*100)}),Ol=(e,t)=>n=>Boolean(bs(n)&&b2.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Qp=(e,t,n)=>o=>{if(!bs(o))return o;const[s,i,l,a]=o.match(fs);return{[e]:parseFloat(s),[t]:parseFloat(i),[n]:parseFloat(l),alpha:a!==void 0?parseFloat(a):1}},Nn={test:Ol("hsl","hue"),parse:Qp("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:o=1})=>"hsla("+Math.round(e)+", "+Jo.transform(Zo(t))+", "+Jo.transform(Zo(n))+", "+Zo(Xo.transform(o))+")"},w2=Jp(0,255),qr=Object.assign(Object.assign({},ws),{transform:e=>Math.round(w2(e))}),dn={test:Ol("rgb","red"),parse:Qp("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:o=1})=>"rgba("+qr.transform(e)+", "+qr.transform(t)+", "+qr.transform(n)+", "+Zo(Xo.transform(o))+")"};function k2(e){let t="",n="",o="",s="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),o=e.substr(5,2),s=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),o=e.substr(3,1),s=e.substr(4,1),t+=t,n+=n,o+=o,s+=s),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(o,16),alpha:s?parseInt(s,16)/255:1}}const Wi={test:Ol("#"),parse:k2,transform:dn.transform},rt={test:e=>dn.test(e)||Wi.test(e)||Nn.test(e),parse:e=>dn.test(e)?dn.parse(e):Nn.test(e)?Nn.parse(e):Wi.parse(e),transform:e=>bs(e)?e:e.hasOwnProperty("red")?dn.transform(e):Nn.transform(e)},ed="${c}",td="${n}";function x2(e){var t,n,o,s;return isNaN(e)&&bs(e)&&((n=(t=e.match(fs))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((s=(o=e.match(ji))===null||o===void 0?void 0:o.length)!==null&&s!==void 0?s:0)>0}function nd(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const o=e.match(ji);o&&(n=o.length,e=e.replace(ji,ed),t.push(...o.map(rt.parse)));const s=e.match(fs);return s&&(e=e.replace(fs,td),t.push(...s.map(ws.parse))),{values:t,numColors:n,tokenised:e}}function od(e){return nd(e).values}function sd(e){const{values:t,numColors:n,tokenised:o}=nd(e),s=t.length;return i=>{let l=o;for(let a=0;a<s;a++)l=l.replace(a<n?ed:td,a<n?rt.transform(i[a]):Zo(i[a]));return l}}const E2=e=>typeof e=="number"?0:e;function A2(e){const t=od(e);return sd(e)(t.map(E2))}const ks={test:x2,parse:od,createTransformer:sd,getAnimatableNone:A2},C2=new Set(["brightness","contrast","saturate","opacity"]);function O2(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=n.match(fs)||[];if(!o)return e;const s=n.replace(o,"");let i=C2.has(t)?1:0;return o!==n&&(i*=100),t+"("+i+s+")"}const S2=/([a-z-]*)\(.*?\)/g,Vi=Object.assign(Object.assign({},ks),{getAnimatableNone:e=>{const t=e.match(S2);return t?t.map(O2).join(" "):e}});function Ur(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Oc({hue:e,saturation:t,lightness:n,alpha:o}){e/=360,t/=100,n/=100;let s=0,i=0,l=0;if(!t)s=i=l=n;else{const a=n<.5?n*(1+t):n+t-n*t,c=2*n-a;s=Ur(c,a,e+1/3),i=Ur(c,a,e),l=Ur(c,a,e-1/3)}return{red:Math.round(s*255),green:Math.round(i*255),blue:Math.round(l*255),alpha:o}}const $2=(e,t,n)=>{const o=e*e,s=t*t;return Math.sqrt(Math.max(0,n*(s-o)+o))},P2=[Wi,dn,Nn],Sc=e=>P2.find(t=>t.test(e)),rd=(e,t)=>{let n=Sc(e),o=Sc(t),s=n.parse(e),i=o.parse(t);n===Nn&&(s=Oc(s),n=dn),o===Nn&&(i=Oc(i),o=dn);const l=Object.assign({},s);return a=>{for(const c in l)c!=="alpha"&&(l[c]=$2(s[c],i[c],a));return l.alpha=Al(s.alpha,i.alpha,a),n.transform(l)}},T2=e=>typeof e=="number",M2=(e,t)=>n=>t(e(n)),id=(...e)=>e.reduce(M2);function ld(e,t){return T2(e)?n=>Al(e,t,n):rt.test(e)?rd(e,t):cd(e,t)}const ad=(e,t)=>{const n=[...e],o=n.length,s=e.map((i,l)=>ld(i,t[l]));return i=>{for(let l=0;l<o;l++)n[l]=s[l](i);return n}},R2=(e,t)=>{const n=Object.assign(Object.assign({},e),t),o={};for(const s in n)e[s]!==void 0&&t[s]!==void 0&&(o[s]=ld(e[s],t[s]));return s=>{for(const i in o)n[i]=o[i](s);return n}};function $c(e){const t=ks.parse(e),n=t.length;let o=0,s=0,i=0;for(let l=0;l<n;l++)o||typeof t[l]=="number"?o++:t[l].hue!==void 0?i++:s++;return{parsed:t,numNumbers:o,numRGB:s,numHSL:i}}const cd=(e,t)=>{const n=ks.createTransformer(t),o=$c(e),s=$c(t);return o.numHSL===s.numHSL&&o.numRGB===s.numRGB&&o.numNumbers>=s.numNumbers?id(ad(o.parsed,s.parsed),n):l=>`${l>0?t:e}`},D2=(e,t)=>n=>Al(e,t,n);function I2(e){if(typeof e=="number")return D2;if(typeof e=="string")return rt.test(e)?rd:cd;if(Array.isArray(e))return ad;if(typeof e=="object")return R2}function L2(e,t,n){const o=[],s=n||I2(e[0]),i=e.length-1;for(let l=0;l<i;l++){let a=s(e[l],e[l+1]);if(t){const c=Array.isArray(t)?t[l]:t;a=id(c,a)}o.push(a)}return o}function F2([e,t],[n]){return o=>n(Xp(e,t,o))}function N2(e,t){const n=e.length,o=n-1;return s=>{let i=0,l=!1;if(s<=e[0]?l=!0:s>=e[o]&&(i=o-1,l=!0),!l){let c=1;for(;c<n&&!(e[c]>s||c===o);c++);i=c-1}const a=Xp(e[i],e[i+1],s);return t[i](a)}}function ud(e,t,{clamp:n=!0,ease:o,mixer:s}={}){const i=e.length;kc(i===t.length),kc(!o||!Array.isArray(o)||o.length===i-1),e[0]>e[i-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const l=L2(t,o,s),a=i===2?F2(e,l):N2(e,l);return n?c=>a(Ni(e[0],e[i-1],c)):a}const Ar=e=>t=>1-e(1-t),Sl=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,B2=e=>t=>Math.pow(t,e),pd=e=>t=>t*t*((e+1)*t-e),j2=e=>{const t=pd(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},dd=1.525,W2=4/11,V2=8/11,H2=9/10,fd=e=>e,$l=B2(2),z2=Ar($l),hd=Sl($l),md=e=>1-Math.sin(Math.acos(e)),gd=Ar(md),q2=Sl(gd),Pl=pd(dd),U2=Ar(Pl),Y2=Sl(Pl),K2=j2(dd),G2=4356/361,Z2=35442/1805,X2=16061/1805,er=e=>{if(e===1||e===0)return e;const t=e*e;return e<W2?7.5625*t:e<V2?9.075*t-9.9*e+3.4:e<H2?G2*t-Z2*e+X2:10.8*e*e-20.52*e+10.72},J2=Ar(er),Q2=e=>e<.5?.5*(1-er(1-e*2)):.5*er(e*2-1)+.5;function e5(e,t){return e.map(()=>t||hd).splice(0,e.length-1)}function t5(e){const t=e.length;return e.map((n,o)=>o!==0?o/(t-1):0)}function n5(e,t){return e.map(n=>n*t)}function js({from:e=0,to:t=1,ease:n,offset:o,duration:s=300}){const i={done:!1,value:e},l=Array.isArray(t)?t:[e,t],a=n5(o&&o.length===l.length?o:t5(l),s);function c(){return ud(a,l,{ease:Array.isArray(n)?n:e5(l,n)})}let u=c();return{next:p=>(i.value=u(p),i.done=p>=s,i),flipTarget:()=>{l.reverse(),u=c()}}}function o5({velocity:e=0,from:t=0,power:n=.8,timeConstant:o=350,restDelta:s=.5,modifyTarget:i}){const l={done:!1,value:t};let a=n*e;const c=t+a,u=i===void 0?c:i(c);return u!==c&&(a=u-t),{next:p=>{const f=-a*Math.exp(-p/o);return l.done=!(f>s||f<-s),l.value=l.done?u:u+f,l},flipTarget:()=>{}}}const Pc={keyframes:js,spring:El,decay:o5};function s5(e){if(Array.isArray(e.to))return js;if(Pc[e.type])return Pc[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?js:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?El:js}function yd(e,t,n=0){return e-t-n}function r5(e,t,n=0,o=!0){return o?yd(t+-e,t,n):t-(e-t)+n}function i5(e,t,n,o){return o?e>=t+n:e<=-n}const l5=e=>{const t=({delta:n})=>e(n);return{start:()=>Fi.update(t,!0),stop:()=>l2.update(t)}};function vd(e){var t,n,{from:o,autoplay:s=!0,driver:i=l5,elapsed:l=0,repeat:a=0,repeatType:c="loop",repeatDelay:u=0,onPlay:p,onStop:f,onComplete:d,onRepeat:h,onUpdate:m}=e,b=Zp(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:_}=b,C,A=0,E=b.duration,O,F=!1,I=!0,j;const X=s5(b);!((n=(t=X).needsInterpolation)===null||n===void 0)&&n.call(t,o,_)&&(j=ud([0,100],[o,_],{clamp:!1}),o=0,_=100);const ie=X(Object.assign(Object.assign({},b),{from:o,to:_}));function fe(){A++,c==="reverse"?(I=A%2===0,l=r5(l,E,u,I)):(l=yd(l,E,u),c==="mirror"&&ie.flipTarget()),F=!1,h&&h()}function ge(){C.stop(),d&&d()}function Te(Ye){if(I||(Ye=-Ye),l+=Ye,!F){const Ee=ie.next(Math.max(0,l));O=Ee.value,j&&(O=j(O)),F=I?Ee.done:l<=0}m==null||m(O),F&&(A===0&&(E!=null||(E=l)),A<a?i5(l,E,u,I)&&fe():ge())}function Fe(){p==null||p(),C=i(Te),C.start()}return s&&Fe(),{stop:()=>{f==null||f(),C.stop()}}}function _d(e,t){return t?e*(1e3/t):0}function a5({from:e=0,velocity:t=0,min:n,max:o,power:s=.8,timeConstant:i=750,bounceStiffness:l=500,bounceDamping:a=10,restDelta:c=1,modifyTarget:u,driver:p,onUpdate:f,onComplete:d,onStop:h}){let m;function b(E){return n!==void 0&&E<n||o!==void 0&&E>o}function _(E){return n===void 0?o:o===void 0||Math.abs(n-E)<Math.abs(o-E)?n:o}function C(E){m==null||m.stop(),m=vd(Object.assign(Object.assign({},E),{driver:p,onUpdate:O=>{var F;f==null||f(O),(F=E.onUpdate)===null||F===void 0||F.call(E,O)},onComplete:d,onStop:h}))}function A(E){C(Object.assign({type:"spring",stiffness:l,damping:a,restDelta:c},E))}if(b(e))A({from:e,velocity:t,to:_(e)});else{let E=s*t+e;typeof u<"u"&&(E=u(E));const O=_(E),F=O===n?-1:1;let I,j;const X=ie=>{I=j,j=ie,t=_d(ie-I,Gp().delta),(F===1&&ie>O||F===-1&&ie<O)&&A({from:ie,to:O,velocity:t})};C({type:"decay",from:e,velocity:t,timeConstant:i,power:s,restDelta:c,modifyTarget:u,onUpdate:b(E)?X:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const bd=(e,t)=>1-3*t+3*e,wd=(e,t)=>3*t-6*e,kd=e=>3*e,tr=(e,t,n)=>((bd(t,n)*e+wd(t,n))*e+kd(t))*e,xd=(e,t,n)=>3*bd(t,n)*e*e+2*wd(t,n)*e+kd(t),c5=1e-7,u5=10;function p5(e,t,n,o,s){let i,l,a=0;do l=t+(n-t)/2,i=tr(l,o,s)-e,i>0?n=l:t=l;while(Math.abs(i)>c5&&++a<u5);return l}const d5=8,f5=.001;function h5(e,t,n,o){for(let s=0;s<d5;++s){const i=xd(t,n,o);if(i===0)return t;t-=(tr(t,n,o)-e)/i}return t}const Ws=11,Ms=1/(Ws-1);function m5(e,t,n,o){if(e===t&&n===o)return fd;const s=new Float32Array(Ws);for(let l=0;l<Ws;++l)s[l]=tr(l*Ms,e,n);function i(l){let a=0,c=1;const u=Ws-1;for(;c!==u&&s[c]<=l;++c)a+=Ms;--c;const p=(l-s[c])/(s[c+1]-s[c]),f=a+p*Ms,d=xd(f,e,n);return d>=f5?h5(l,f,e,n):d===0?f:p5(l,a,a+Ms,e,n)}return l=>l===0||l===1?l:tr(i(l),t,o)}const Yr={};class g5{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,o){if(!!this.subscriptions.size)for(const s of this.subscriptions)s(t,n,o)}clear(){this.subscriptions.clear()}}const Tc=e=>!isNaN(parseFloat(e));class y5{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new g5,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:s}=Gp();this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s),Fi.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Fi.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=Tc(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Tc(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?_d(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:o}=t(n);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function v5(e){return new y5(e)}const{isArray:_5}=Array;function b5(){const e=V({}),t=o=>{const s=i=>{!e.value[i]||(e.value[i].stop(),e.value[i].destroy(),Mm(e.value,i))};o?_5(o)?o.forEach(s):s(o):Object.keys(e.value).forEach(s)},n=(o,s,i)=>{if(e.value[o])return e.value[o];const l=v5(s);return l.onChange(a=>{it(i,o,a)}),it(e.value,o,l),l};return kl(t),{motionValues:e,get:n,stop:t}}const w5=e=>Array.isArray(e),$n=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Kr=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),k5=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Gr=()=>({type:"keyframes",ease:"linear",duration:300}),x5=e=>({type:"keyframes",duration:800,values:e}),Mc={default:k5,x:$n,y:$n,z:$n,rotate:$n,rotateX:$n,rotateY:$n,rotateZ:$n,scaleX:Kr,scaleY:Kr,scale:Kr,backgroundColor:Gr,color:Gr,opacity:Gr},Ed=(e,t)=>{let n;return w5(t)?n=x5:n=Mc[e]||Mc.default,{to:t,...n(t)}},Rc={...ws,transform:Math.round},Ad={color:rt,backgroundColor:rt,outlineColor:rt,fill:rt,stroke:rt,borderColor:rt,borderTopColor:rt,borderRightColor:rt,borderBottomColor:rt,borderLeftColor:rt,borderWidth:le,borderTopWidth:le,borderRightWidth:le,borderBottomWidth:le,borderLeftWidth:le,borderRadius:le,radius:le,borderTopLeftRadius:le,borderTopRightRadius:le,borderBottomRightRadius:le,borderBottomLeftRadius:le,width:le,maxWidth:le,height:le,maxHeight:le,size:le,top:le,right:le,bottom:le,left:le,padding:le,paddingTop:le,paddingRight:le,paddingBottom:le,paddingLeft:le,margin:le,marginTop:le,marginRight:le,marginBottom:le,marginLeft:le,rotate:Sn,rotateX:Sn,rotateY:Sn,rotateZ:Sn,scale:Ts,scaleX:Ts,scaleY:Ts,scaleZ:Ts,skew:Sn,skewX:Sn,skewY:Sn,distance:le,translateX:le,translateY:le,translateZ:le,x:le,y:le,z:le,perspective:le,transformPerspective:le,opacity:Xo,originX:Cc,originY:Cc,originZ:le,zIndex:Rc,filter:Vi,WebkitFilter:Vi,fillOpacity:Xo,strokeOpacity:Xo,numOctaves:Rc},Tl=e=>Ad[e],Cd=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function E5(e,t){let n=Tl(e);return n!==Vi&&(n=ks),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const A5={linear:fd,easeIn:$l,easeInOut:hd,easeOut:z2,circIn:md,circInOut:q2,circOut:gd,backIn:Pl,backInOut:Y2,backOut:U2,anticipate:K2,bounceIn:J2,bounceInOut:Q2,bounceOut:er},Dc=e=>{if(Array.isArray(e)){const[t,n,o,s]=e;return m5(t,n,o,s)}else if(typeof e=="string")return A5[e];return e},C5=e=>Array.isArray(e)&&typeof e[0]!="number",Ic=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&ks.test(t)&&!t.startsWith("url("));function O5(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function S5({ease:e,times:t,delay:n,...o}){const s={...o};return t&&(s.offset=t),e&&(s.ease=C5(e)?e.map(Dc):Dc(e)),n&&(s.elapsed=-n),s}function $5(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),O5(t),P5(e)||(e={...e,...Ed(n,t.to)}),{...t,...S5(e)}}function P5({delay:e,repeat:t,repeatType:n,repeatDelay:o,from:s,...i}){return!!Object.keys(i).length}function T5(e,t){return e[t]||e.default||e}function M5(e,t,n,o,s){const i=T5(o,e);let l=i.from===null||i.from===void 0?t.get():i.from;const a=Ic(e,n);l==="none"&&a&&typeof n=="string"&&(l=E5(e,n));const c=Ic(e,l);function u(f){const d={from:l,to:n,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:h=>t.set(h)};return i.type==="inertia"||i.type==="decay"?a5({...d,...i}):vd({...$5(i,d,e),onUpdate:h=>{d.onUpdate(h),i.onUpdate&&i.onUpdate(h)},onComplete:()=>{o.onComplete&&o.onComplete(),s&&s(),f&&f()}})}function p(f){return t.set(n),o.onComplete&&o.onComplete(),s&&s(),f&&f(),{stop:()=>{}}}return!c||!a||i.type===!1?p:u}function R5(){const{motionValues:e,stop:t,get:n}=b5();return{motionValues:e,stop:t,push:(s,i,l,a={},c)=>{const u=l[s],p=n(s,u,l);if(a&&a.immediate){p.set(i);return}const f=M5(s,p,i,a,c);p.start(f)}}}function D5(e,t={},{motionValues:n,push:o,stop:s}=R5()){const i=w(t),l=V(!1),a=ce(n,d=>{l.value=Object.values(d).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0}),c=d=>{if(!i||!i[d])throw new Error(`The variant ${d} does not exist.`);return i[d]},u=d=>(typeof d=="string"&&(d=c(d)),Promise.all(Object.entries(d).map(([h,m])=>{if(h!=="transition")return new Promise(b=>{o(h,m,e,d.transition||Ed(h,d[h]),b)})}).filter(Boolean)));return{isAnimating:l,apply:u,set:d=>{const h=Qs(d)?d:c(d);Object.entries(h).forEach(([m,b])=>{m!=="transition"&&o(m,b,e,{immediate:!0})})},stopTransitions:()=>{a(),s()},leave:async d=>{let h;if(i&&(i.leave&&(h=i.leave),!i.leave&&i.initial&&(h=i.initial)),!h){d();return}await u(h),d()}}}const Ml=typeof window<"u",I5=()=>Ml&&window.onpointerdown===null,L5=()=>Ml&&window.ontouchstart===null,F5=()=>Ml&&window.onmousedown===null;function N5({target:e,state:t,variants:n,apply:o}){const s=w(n),i=[],l=(...m)=>{const b=t2.apply(null,m);return i.push(b),b},a=V(!1),c=V(!1),u=V(!1),p=S(()=>{let m=[];return s&&(s.hovered&&(m=[...m,...Object.keys(s.hovered)]),s.tapped&&(m=[...m,...Object.keys(s.tapped)]),s.focused&&(m=[...m,...Object.keys(s.focused)])),m}),f=S(()=>{const m={};Object.assign(m,t.value),a.value&&s.hovered&&Object.assign(m,s.hovered),c.value&&s.tapped&&Object.assign(m,s.tapped),u.value&&s.focused&&Object.assign(m,s.focused);for(const b in m)p.value.includes(b)||delete m[b];return m});s.hovered&&(l(e,"mouseenter",()=>{a.value=!0}),l(e,"mouseleave",()=>{a.value=!1,c.value=!1}),l(e,"mouseout",()=>{a.value=!1,c.value=!1})),s.tapped&&(F5()&&(l(e,"mousedown",()=>{c.value=!0}),l(e,"mouseup",()=>{c.value=!1})),I5()&&(l(e,"pointerdown",()=>{c.value=!0}),l(e,"pointerup",()=>{c.value=!1})),L5()&&(l(e,"touchstart",()=>{c.value=!0}),l(e,"touchend",()=>{c.value=!1}))),s.focused&&(l(e,"focus",()=>{u.value=!0}),l(e,"blur",()=>{u.value=!1}));const d=ce(f,o);return{stop:()=>{i.forEach(m=>m()),d()}}}function B5({set:e,target:t,variants:n,variant:o}){const s=w(n);return{stop:ce(()=>t,()=>{!s||(s.initial&&e("initial"),s.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}}function j5({state:e,apply:t}){return{stop:ce(e,o=>{o&&t(o)},{immediate:!0})}}function W5({target:e,variants:t,variant:n}){const o=w(t);let s=Hn;if(o&&(o.visible||o.visibleOnce)){const{stop:i}=o2(e,([{isIntersecting:l}])=>{o.visible?l?n.value="visible":n.value="initial":o.visibleOnce&&(l?n.value!=="visibleOnce"&&(n.value="visibleOnce"):n.value||(n.value="initial"))});s=i}return{stop:s}}function V5(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const n=V([]);if(t.lifeCycleHooks){const{stop:s}=B5(e);n.value.push(s)}if(t.syncVariants){const{stop:s}=j5(e);n.value.push(s)}if(t.visibilityHooks){const{stop:s}=W5(e);n.value.push(s)}if(t.eventListeners){const{stop:s}=N5(e);n.value.push(s)}const o=()=>n.value.forEach(s=>s());return kl(o),{stop:o}}function Od(e={}){const t=Me({...e}),n=V({});return ce(t,()=>{const o={};for(const[s,i]of Object.entries(t)){const l=Tl(s),a=Cd(i,l);o[s]=a}n.value=o},{immediate:!0,deep:!0}),{state:t,style:n}}const H5=["","X","Y","Z"],z5=["perspective","translate","scale","rotate","skew"],Sd=["transformPerspective","x","y","z"];z5.forEach(e=>{H5.forEach(t=>{const n=e+t;Sd.push(n)})});const q5=new Set(Sd);function Rl(e){return q5.has(e)}const U5=new Set(["originX","originY","originZ"]);function $d(e){return U5.has(e)}function Y5(e){const t={},n={};return Object.entries(e).forEach(([o,s])=>{Rl(o)||$d(o)?t[o]=s:n[o]=s}),{transform:t,style:n}}function K5(e,t){let n,o;const{state:s,style:i}=Od(),l=ce(()=>wn(e),u=>{if(!!u){o=u;for(const p of Object.keys(Ad))u.style[p]===null||u.style[p]===""||Rl(p)||$d(p)||it(s,p,u.style[p]);n&&Object.entries(n).forEach(([p,f])=>it(u.style,p,f)),t&&t(s)}},{immediate:!0}),a=ce(i,u=>{if(!o){n=u;return}for(const p in u)it(o.style,p,u[p])},{immediate:!0});return{style:s,stop:()=>{o=void 0,n=void 0,l(),a()}}}const G5={x:"translateX",y:"translateY",z:"translateZ"};function Pd(e={},t=!0){const n=Me({...e}),o=V("");return ce(n,s=>{let i="",l=!1;t&&(s.x||s.y||s.z)&&(i+=`translate3d(${[s.x||0,s.y||0,s.z||0].map(le.transform).join(",")}) `,l=!0);for(const[a,c]of Object.entries(s)){if(t&&(a==="x"||a==="y"||a==="z"))continue;const u=Tl(a),p=Cd(c,u);i+=`${G5[a]||a}(${p}) `}t&&!l&&(i+="translateZ(0px) "),o.value=i.trim()},{immediate:!0,deep:!0}),{state:n,transform:o}}function Z5(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,s)=>{if(!s)return o;const[i,l]=s.split("("),c=l.split(",").map(p=>n(p.endsWith(")")?p.replace(")",""):p.trim())),u=c.length===1?c[0]:c;return{...o,[i]:u}},{})}function X5(e,t){Object.entries(Z5(t)).forEach(([n,o])=>{o=parseFloat(o);const s=["x","y","z"];if(n==="translate3d"){if(o===0){s.forEach(i=>{it(e,i,0)});return}o.forEach((i,l)=>{it(e,s[l],i)});return}if(n==="translateX"){it(e,"x",o);return}if(n==="translateY"){it(e,"y",o);return}if(n==="translateZ"){it(e,"z",o);return}it(e,n,o)})}function J5(e,t){let n,o;const{state:s,transform:i}=Pd(),l=ce(()=>wn(e),u=>{!u||(o=u,u.style.transform&&X5(s,u.style.transform),n&&(u.style.transform=n),t&&t(s))},{immediate:!0}),a=ce(i,u=>{if(!o){n=u;return}o.style.transform=u},{immediate:!0});return{transform:s,stop:()=>{n=void 0,o=void 0,l(),a()}}}function Q5(e,t){const n=Me({}),o=f=>{Object.entries(f).forEach(([d,h])=>{it(n,d,h)})},{style:s,stop:i}=K5(e,o),{transform:l,stop:a}=J5(e,o),c=ce(n,f=>{Object.entries(f).forEach(([d,h])=>{const m=Rl(d)?l:s;m[d]&&m[d]===h||it(m,d,h)})},{immediate:!0,deep:!0}),u=ce(()=>wn(e),f=>{!f||t&&o(t)},{immediate:!0});return{motionProperties:n,style:s,transform:l,stop:()=>{i(),a(),c(),u()}}}function eE(e={}){const t=w(e),n=V();return{state:S(()=>{if(!!n.value)return t[n.value]}),variant:n}}function tE(e,t={},n){const{motionProperties:o,stop:s}=Q5(e),{variant:i,state:l}=eE(t),a=D5(o,t),c={target:e,variant:i,variants:t,state:l,motionProperties:o,...a,stop:(p=!1)=>{}},{stop:u}=V5(c,n);return c.stop=(p=!1)=>{const f=()=>{c.stopTransitions(),s(),u()};if(!p&&t.value&&t.value.leave){const d=ce(c.isAnimating,h=>{h||(d(),f())})}else f()},kl(()=>c.stop()),e2(()=>wn(e),p=>{!p||p!=null&&p.motionInstance&&(c.stop(),Object.assign(c,p.motionInstance))}),c}const nE=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],oE=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&Qs(n.variants)&&(t.value={...t.value,...n.variants}),nE.forEach(o=>{if(o==="delay"){if(n&&n[o]&&J8(n[o])){const s=n[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={...t.value.enter.transition,delay:s}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={...t.value.visible.transition,delay:s}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={...t.value.visibleOnce.transition,delay:s}))}return}o==="visible-once"&&(o="visibleOnce"),n&&n[o]&&Qs(n[o])&&(t.value[o]=n[o])}))},Zr=e=>{const t=(o,s,i)=>{const l=s.value&&typeof s.value=="string"?s.value:i.key;l&&Yr[l]&&Yr[l].stop();const a=V(e||{});typeof s.value=="object"&&(a.value=s.value),oE(i,a);const c=tE(o,a);o.motionInstance=c,l&&it(Yr,l,c)},n=o=>{o.motionInstance&&o.motionInstance.stop()};return{created:t,unmounted:n,bind:t,unbind:n,getSSRProps(o,s){const{initial:i}=o.value||s&&s.props||{},l=Z8((e==null?void 0:e.initial)||{},i||{});if(!l||Object.keys(l).length===0)return;const{transform:a,style:c}=Y5(l),{transform:u}=Pd(a),{style:p}=Od(c);return u.value&&(p.value.transform=u.value),{style:p.value}}}},sE={initial:{opacity:0},enter:{opacity:1}},rE={initial:{opacity:0},visible:{opacity:1}},iE={initial:{opacity:0},visibleOnce:{opacity:1}},lE={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},aE={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},cE={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},uE={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},pE={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},dE={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},fE={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},hE={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},mE={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},gE={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},yE={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},vE={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},_E={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},bE={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},wE={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},kE={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},xE={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},EE={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},AE={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},CE={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},OE={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},SE={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},$E={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},PE={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},TE={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},ME={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},RE={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Lc={__proto__:null,fade:sE,fadeVisible:rE,fadeVisibleOnce:iE,pop:lE,popVisible:aE,popVisibleOnce:cE,rollBottom:_E,rollLeft:uE,rollRight:fE,rollTop:gE,rollVisibleBottom:bE,rollVisibleLeft:pE,rollVisibleRight:hE,rollVisibleTop:yE,rollVisibleOnceBottom:wE,rollVisibleOnceLeft:dE,rollVisibleOnceRight:mE,rollVisibleOnceTop:vE,slideBottom:TE,slideLeft:kE,slideRight:AE,slideTop:SE,slideVisibleBottom:ME,slideVisibleLeft:xE,slideVisibleRight:CE,slideVisibleTop:$E,slideVisibleOnceBottom:RE,slideVisibleOnceLeft:EE,slideVisibleOnceRight:OE,slideVisibleOnceTop:PE};function DE(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,s=>`-${s}`).toLowerCase().replace(/\s+/g,"-").replace(o,s=>n.charAt(t.indexOf(s))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const IE={install(e,t){if(e.directive("motion",Zr()),!t||t&&!t.excludePresets)for(const n in Lc){const o=Lc[n];e.directive(`motion-${DE(n)}`,Zr(o))}if(t&&t.directives)for(const n in t.directives){const o=t.directives[n];o.initial,e.directive(`motion-${n}`,Zr(o))}}},Dl="vue-starport-injection",Td="vue-starport-options",LE={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Md={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var FE=Object.defineProperty,nr=Object.getOwnPropertySymbols,Rd=Object.prototype.hasOwnProperty,Dd=Object.prototype.propertyIsEnumerable,Fc=(e,t,n)=>t in e?FE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,NE=(e,t)=>{for(var n in t||(t={}))Rd.call(t,n)&&Fc(e,n,t[n]);if(nr)for(var n of nr(t))Dd.call(t,n)&&Fc(e,n,t[n]);return e},Nc=(e,t)=>{var n={};for(var o in e)Rd.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&nr)for(var o of nr(e))t.indexOf(o)<0&&Dd.call(e,o)&&(n[o]=e[o]);return n};const BE=de({name:"StarportProxy",props:NE({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Md),setup(e,t){const n=q(Dl),o=S(()=>n.getInstance(e.port,e.component)),s=V(),i=o.value.generateId(),l=V(!1);return o.value.isVisible||(o.value.land(),l.value=!0),wo(async()=>{o.value.el||(o.value.el=s.value,await qe(),l.value=!0,o.value.rect.update())}),hr(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,l.value=!1,!o.value.options.keepAlive&&(await qe(),await qe(),!o.value.el&&n.dispose(o.value.port))}),ce(()=>e,async()=>{o.value.props&&await qe();const a=e,{props:c}=a,u=Nc(a,["props"]);o.value.props=c||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const a=e,{initialProps:c,mountedProps:u}=a,p=Nc(a,["initialProps","mountedProps"]),f=Lt(p,(l.value?u:c)||{});return lt("div",Lt(f,{id:i,ref:s,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?lt(t.slots.default):void 0)}}});var jE=Object.defineProperty,WE=Object.defineProperties,VE=Object.getOwnPropertyDescriptors,Bc=Object.getOwnPropertySymbols,HE=Object.prototype.hasOwnProperty,zE=Object.prototype.propertyIsEnumerable,jc=(e,t,n)=>t in e?jE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qE=(e,t)=>{for(var n in t||(t={}))HE.call(t,n)&&jc(e,n,t[n]);if(Bc)for(var n of Bc(t))zE.call(t,n)&&jc(e,n,t[n]);return e},UE=(e,t)=>WE(e,VE(t));const YE=de({name:"Starport",inheritAttrs:!0,props:Md,setup(e,t){const n=V(!1);return wo(()=>{n.value=!0}),()=>{var l,a;const o=(a=(l=t.slots).default)==null?void 0:a.call(l);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const s=o[0];let i=s.type;return(!Qs(i)||zn(i))&&(i={render(){return o}}),lt(BE,UE(qE({},e),{key:e.port,component:ar(i),props:s.props}))}}});function KE(e){const t=Me({height:0,width:0,left:0,top:0,update:o,listen:i,pause:l,margin:"0px",padding:"0px"}),n=Go?document.documentElement||document.body:void 0;function o(){if(!Go)return;const a=wn(e);if(!a)return;const{height:c,width:u,left:p,top:f}=a.getBoundingClientRect(),d=window.getComputedStyle(a),h=d.margin,m=d.padding;Object.assign(t,{height:c,width:u,left:p,top:n.scrollTop+f,margin:h,padding:m})}const s=n2(o,{immediate:!1});function i(){!Go||(o(),s.resume())}function l(){s.pause()}return t}let GE=(e,t=21)=>(n=t)=>{let o="",s=n;for(;s--;)o+=e[Math.random()*e.length|0];return o};const Wc=GE("abcdefghijklmnopqrstuvwxyz",5);function Vc(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function ZE(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var XE=Object.defineProperty,Hc=Object.getOwnPropertySymbols,JE=Object.prototype.hasOwnProperty,QE=Object.prototype.propertyIsEnumerable,zc=(e,t,n)=>t in e?XE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xr=(e,t)=>{for(var n in t||(t={}))JE.call(t,n)&&zc(e,n,t[n]);if(Hc)for(var n of Hc(t))QE.call(t,n)&&zc(e,n,t[n]);return e};function e3(e,t,n={}){const o=ZE(t),s=Vc(o)||Wc(),i=V(),l=V(null),a=V(!1),c=V(!1),u=Yd(!0),p=V({}),f=S(()=>Xr(Xr(Xr({},LE),n),p.value)),d=V(0);let h;u.run(()=>{h=KE(i),ce(i,async C=>{C&&(c.value=!0),await qe(),i.value||(c.value=!1)})});const m=Vc(e);function b(){return`starport-${s}-${m}-${Wc()}`}const _=b();return Me({el:i,id:_,port:e,props:l,rect:h,scope:u,isLanded:a,isVisible:c,options:f,liftOffTime:d,component:t,componentName:o,componentId:s,generateId:b,setLocalOptions(C={}){p.value=JSON.parse(JSON.stringify(C))},elRef(){return i},liftOff(){!a.value||(a.value=!1,d.value=Date.now(),h.listen())},land(){a.value||(a.value=!0,h.pause())}})}function t3(e){const t=Me(new Map);function n(s,i){let l=t.get(s);return l||(l=e3(s,i,e),t.set(s,l)),l.component=i,l}function o(s){var i;(i=t.get(s))==null||i.scope.stop(),t.delete(s)}return{portMap:t,dispose:o,getInstance:n}}var n3=Object.defineProperty,o3=Object.defineProperties,s3=Object.getOwnPropertyDescriptors,qc=Object.getOwnPropertySymbols,r3=Object.prototype.hasOwnProperty,i3=Object.prototype.propertyIsEnumerable,Uc=(e,t,n)=>t in e?n3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l3=(e,t)=>{for(var n in t||(t={}))r3.call(t,n)&&Uc(e,n,t[n]);if(qc)for(var n of qc(t))i3.call(t,n)&&Uc(e,n,t[n]);return e},a3=(e,t)=>o3(e,s3(t));const c3=de({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=q(Dl);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=S(()=>t.getInstance(e.port,e.component)),o=S(()=>{var l;return((l=n.value.el)==null?void 0:l.id)||n.value.id}),s=S(()=>{const l=Date.now()-n.value.liftOffTime,a=Math.max(0,n.value.options.duration-l),c=n.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?a3(l3({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${a}ms`,transitionTimingFunction:n.value.options.easing}),u)}),i={};return()=>{const l=!!(n.value.isLanded&&n.value.el);return lt("div",{style:s.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},lt(_h,{to:l?`#${o.value}`:"body",disabled:!l},lt(n.value.component,Lt(i,n.value.props))))}}}),u3=de({name:"StarportCarrier",setup(e,{slots:t}){const n=t3(q(Td,{}));return Yn().appContext.app.provide(Dl,n),()=>{var s;return[(s=t.default)==null?void 0:s.call(t),Array.from(n.portMap.entries()).map(([i,{component:l}])=>lt(c3,{key:i,port:i,component:l}))]}}});function p3(e={}){return{install(t){t.provide(Td,e),t.component("Starport",YE),t.component("StarportCarrier",u3)}}}function d3(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(IE),e.app.use(p3({keepAlive:!0})),K8(e)}function ct(e,t,n){var o,s;return(s=((o=e.instance)==null?void 0:o.$).provides[t])!=null?s:n}function f3(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var p,f,d,h;if(Ko.value||((p=ct(n,zo))==null?void 0:p.value))return;const o=ct(n,Rn),s=ct(n,Ho),i=ct(n,mi),l=n.modifiers.hide!==!1&&n.modifiers.hide!=null,a=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((f=o==null?void 0:o.value)==null?void 0:f.length)||0,u=a?vm:Rr;if(o&&!((d=o==null?void 0:o.value)!=null&&d.includes(t))&&o.value.push(t),n.value===null&&(n.value=o==null?void 0:o.value.length),!(i!=null&&i.value.has(n.value)))i==null||i.value.set(n.value,[t]);else if(!((h=i==null?void 0:i.value.get(n.value))!=null&&h.includes(t))){const m=(i==null?void 0:i.value.get(n.value))||[];i==null||i.value.set(n.value,[t].concat(m))}t==null||t.classList.toggle(Tn,!0),s&&ce(s,()=>{var C;const m=(C=s==null?void 0:s.value)!=null?C:0,b=n.value!=null?m>=n.value:m>c;t.classList.contains(Dr)||t.classList.toggle(u,!b),l!==!1&&l!==void 0&&t.classList.toggle(u,b),t.classList.toggle(Po,!1);const _=i==null?void 0:i.value.get(m);_==null||_.forEach((A,E)=>{A.classList.toggle($s,!1),E===_.length-1?A.classList.toggle(Po,!0):A.classList.toggle($s,!0)}),t.classList.contains(Po)||t.classList.toggle($s,b)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Tn,!1);const o=ct(n,Rn);o!=null&&o.value&&gi(o.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var a,c;if(Ko.value||((a=ct(n,zo))==null?void 0:a.value))return;const o=ct(n,Rn),s=ct(n,Ho),i=ct(n,mi),l=o==null?void 0:o.value.length;n.value===void 0&&(n.value=o==null?void 0:o.value.length),i!=null&&i.value.has(n.value)?(c=i==null?void 0:i.value.get(n.value))==null||c.push(t):i==null||i.value.set(n.value,[t]),t==null||t.classList.toggle(Tn,!0),s&&ce(s,()=>{var p,f,d;const u=((p=s.value)!=null?p:0)>=((d=(f=n.value)!=null?f:l)!=null?d:0);t.classList.contains(Dr)||t.classList.toggle(Rr,!u),t.classList.toggle(Po,!1),t.classList.contains(Po)||t.classList.toggle($s,u)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Tn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var l,a,c;if(Ko.value||((l=ct(n,zo))==null?void 0:l.value))return;const o=ct(n,Rn),s=ct(n,Ho),i=((a=o==null?void 0:o.value)==null?void 0:a.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(t))&&o.value.push(t),t==null||t.classList.toggle(Tn,!0),s&&ce(s,()=>{var f;const u=(f=s==null?void 0:s.value)!=null?f:0,p=n.value!=null?u>=n.value:u>i;t.classList.toggle(Rr,p),t.classList.toggle(Dr,p)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Tn,!1);const o=ct(n,Rn);o!=null&&o.value&&gi(o.value,t)}})}}}function h3(e,t){const n=Ip(e),o=Lp(t,n.currentRoute,n.currentPage);return{nav:{...n,...o,downloadPDF:Ti,next:gn,nextSlide:us,openInEditor:q8,prev:yn,prevSlide:ps},configs:_e,themeConfigs:S(()=>_e.themeConfig)}}function m3(){return{install(e){const t=h3(on,Ft);e.provide(te,Me(t))}}}const Co=em(Y8);Co.use(gt);Co.use(fm());Co.use(f3());Co.use(m3());d3({app:Co,router:gt});Co.mount("#app");export{Io as $,ne as A,we as B,Je as C,f_ as D,Et as E,ke as F,At as G,Ft as H,Js as I,j8 as J,Vr as K,Ir as L,ls as M,jr as N,ep as O,yb as P,fl as Q,hb as R,hl as S,We as T,qp as U,k_ as V,_t as W,Wt as X,g3 as Y,vt as Z,Pp as _,r as a,Ps as a0,ms as a1,Fn as a2,Yt as a3,Oi as a4,zv as a5,qv as a6,Uv as a7,Kv as a8,Be as a9,Ku as aa,b3 as ab,et as ac,n0 as ad,Xu as ae,Gv as af,hr as ag,u_ as ah,S as b,R as c,de as d,te as e,dt as f,Q as g,w as h,q as i,o_ as j,z8 as k,_e as l,mm as m,Re as n,k as o,wo as p,Me as q,V as r,y3 as s,en as t,v3 as u,_3 as v,ce as w,W as x,Ue as y,ee as z};
