!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["bullet-train"]=e():t["bullet-train"]=e()}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=7)}([function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){window,t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function t(e,r,n){return r=Array.isArray(r)?r:r.split("."),(e=e[r[0]])&&r.length>1?t(e,r.slice(1)):void 0===e?n:e}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){return o(t,{all:{rules:e}},["all"]).then(function(t){return{result:t.all.result,rules:t.all.rules}})};var n=function(t){return t&&t.__esModule?t:{default:t}}(r(0)),o=function t(e,r,o){return new Promise(function(i,a){var u=o[o.length-1],s=(0,n.default)(r,o);if("all"===u||"any"===u||"none"===u)return Promise.all(s.rules.map(function(n,i){var a=["rules",i];return n.any?a=a.concat(["any"]):n.all?a=a.concat(["all"]):n.none&&(a=a.concat(["none"])),t(e,r,o.concat(a))})).then(function(t){var e=void 0;return"all"===u?e=!t.includes(!1):"any"===u?e=t.includes(!0):"none"===u&&(e=!t.includes(!0)),s.result=!!e,1===o.length&&i(r),i(e)});var c=!!function(t,e){var r=e.property,o=e.operator,i=e.value,a=(0,n.default)(t,r);switch(o){case"EQUAL":return a===i;case"NOT_EQUAL":return a!==i;case"GREATER_THAN":return a>i;case"GREATER_THAN_INCLUSIVE":return a>=i;case"LESS_THAN":return a<i;case"LESS_THAN_INCLUSIVE":return a<=i;case"CONTAINS":return a&&(a+"").includes(i);case"NOT_CONTAINS":return!a||!(a+"").includes(i);case"REGEX":return a&&new RegExp(i).test(a);default:return console.error("Invalid operator"),!1}}(e,s);return s.result=c,i(c)})}}])},function(t,e,r){"use strict";(function(e){var n,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=r(1),u=(n=a)&&n.__esModule?n:{default:n};var s=e.fetch,c=void 0,l="BULLET_TRAIN_DB",f=function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.getJSON=function(t,e,n){var o=r.environmentID,i={method:e||"GET",body:n,headers:{"x-environment-key":o}};return"GET"!==e&&(i.headers["Content-Type"]="application/json; charset=utf-8"),s(t,i).then(function(t){return t.json()})},this.getFlags=function(){var t=r.onChange,e=r.onError,n=r.identity,i=r.api,a=r.disableCache,s=function(e,n){var i=e.flags,s=e.traits,f={},h={},d={};i=i||[],s=s||[],i.forEach(function(t){f[t.feature.name.toLowerCase().replace(/ /g,"_")]={enabled:t.enabled,value:t.feature_state_value}}),s.forEach(function(t){h[t.trait_key.toLowerCase().replace(/ /g,"_")]=t.trait_value}),r.oldFlags=f,r.flags=f,r.traits=h,n?(r.segments||(n=n.map(function(t){return o({},t,{rules:JSON.parse(t.rules)})}),r.segments=n),Promise.all(r.segments.map(function(t){return(0,u.default)(h,t.rules).then(function(e){d[t.name]=e.result})})).then(function(){r.userSegments=d,a||c.setItem(l,JSON.stringify(r.flags)),t&&t(r.oldFlags,{isFromServer:!0})})):(a||c.setItem(l,JSON.stringify(r.flags)),t&&t(r.oldFlags,{isFromServer:!0}))};return n?Promise.all([r.getJSON(i+"identities/?identifier="+encodeURIComponent(n)),r.segments?Promise.resolve(r.segments):r.getJSON(i+"segments/")]).then(function(t){s(t[0],t[1])}).catch(function(t){var r=t.message;e&&e({message:r})}):Promise.all([r.getJSON(i+"flags/")]).then(function(t){s({flags:t[0]},null)}).catch(function(t){var r=t.message;e&&e({message:r})})},this.getValue=function(t){var e=r.flags&&r.flags[t],n=null;return e&&(n=e.value),n},this.getTrait=function(t){return r.traits&&r.traits[t]},this.setTrait=function(t,e){var n=r.getJSON,o={identity:{identifier:r.identity},trait_key:t,trait_value:e};return n(r.api+"traits/","POST",JSON.stringify(o)).then(r.getFlags)},this.incrementTrait=function(t,e){var n=r.getJSON,o=r.identity;return n(r.api+"traits/increment-value/","POST",JSON.stringify({trait_key:t,increment_by:e,identifier:o})).then(r.getFlags)},this.hasFeature=function(t){var e=r.flags&&r.flags[t],n=!1;return e&&e.enabled&&(n=!0),n},e.fetch&&(s=e.fetch),c=e.AsyncStorage}return i(t,[{key:"init",value:function(t){var e=this,r=t.environmentID,n=t.api,o=void 0===n?"https://api.bullet-train.io/api/v1/":n,i=t.onChange,a=t.disableCache,u=t.onError,s=t.defaultFlags;if(this.environmentID=r,this.api=o,this.interval=null,this.disableCache=a,this.onChange=i,this.onError=u,this.flags=Object.assign({},s)||{},this.initialised=!0,!r)throw"Please specify a environment id";if(!i)throw"Please specify an onChange event";a||c.getItem(l,function(t,r){e.flags=r?JSON.parse(r):s,e.flags&&i(null,{isFromServer:!1}),e.getFlags()})}},{key:"getAllFlags",value:function(){return this.flags}},{key:"identify",value:function(t){this.identity=t,this.initialised&&!this.interval&&this.getFlags()}},{key:"logout",value:function(){this.identity=null,this.initialised&&!this.interval&&this.getFlags()}},{key:"startListening",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;this.interval||(this.interval=setInterval(this.getFlags,t))}},{key:"stopListening",value:function(){clearInterval(this.interval)}}]),t}();t.exports=function(t){var e=t.fetch,r=t.AsyncStorage;return new f({fetch:e,AsyncStorage:r})}}).call(this,r(0))},function(t,e){!function(t){"use strict";if(!t.fetch){var e={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(e.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=function(t){return t&&DataView.prototype.isPrototypeOf(t)},o=ArrayBuffer.isView||function(t){return t&&r.indexOf(Object.prototype.toString.call(t))>-1};l.prototype.append=function(t,e){t=u(t),e=s(e);var r=this.map[t];this.map[t]=r?r+","+e:e},l.prototype.delete=function(t){delete this.map[u(t)]},l.prototype.get=function(t){return t=u(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(u(t))},l.prototype.set=function(t,e){this.map[u(t)]=s(e)},l.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},l.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),c(t)},l.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),c(t)},l.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),c(t)},e.iterable&&(l.prototype[Symbol.iterator]=l.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},y.call(v.prototype),y.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},g.error=function(){var t=new g(null,{status:0,statusText:""});return t.type="error",t};var a=[301,302,303,307,308];g.redirect=function(t,e){if(-1===a.indexOf(e))throw new RangeError("Invalid status code");return new g(null,{status:e,headers:{location:t}})},t.Headers=l,t.Request=v,t.Response=g,t.fetch=function(t,r){return new Promise(function(n,o){var i=new v(t,r),a=new XMLHttpRequest;a.onload=function(){var t,e,r={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new l,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;n(new g(o,r))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.open(i.method,i.url,!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&e.blob&&(a.responseType="blob"),i.headers.forEach(function(t,e){a.setRequestHeader(e,t)}),a.send(void 0===i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}function u(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function s(t){return"string"!=typeof t&&(t=String(t)),t}function c(t){var r={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(r[Symbol.iterator]=function(){return r}),r}function l(t){this.map={},t instanceof l?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function f(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function h(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function d(t){var e=new FileReader,r=h(e);return e.readAsArrayBuffer(t),r}function p(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(e.arrayBuffer&&e.blob&&n(t))this._bodyArrayBuffer=p(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!e.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!o(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=p(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var t,e,r,n=f(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=h(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}function v(t,e){var r,n,o=(e=e||{}).body;if(t instanceof v){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),i.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function b(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function g(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!=typeof self?self:this)},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){(function(t,r){var n=200,o="__lodash_hash_undefined__",i=800,a=16,u=9007199254740991,s="[object Arguments]",c="[object AsyncFunction]",l="[object Function]",f="[object GeneratorFunction]",h="[object Null]",d="[object Object]",p="[object Proxy]",y="[object Undefined]",v=/^\[object .+?Constructor\]$/,b=/^(?:0|[1-9]\d*)$/,g={};g["[object Float32Array]"]=g["[object Float64Array]"]=g["[object Int8Array]"]=g["[object Int16Array]"]=g["[object Int32Array]"]=g["[object Uint8Array]"]=g["[object Uint8ClampedArray]"]=g["[object Uint16Array]"]=g["[object Uint32Array]"]=!0,g[s]=g["[object Array]"]=g["[object ArrayBuffer]"]=g["[object Boolean]"]=g["[object DataView]"]=g["[object Date]"]=g["[object Error]"]=g[l]=g["[object Map]"]=g["[object Number]"]=g[d]=g["[object RegExp]"]=g["[object Set]"]=g["[object String]"]=g["[object WeakMap]"]=!1;var _="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,w=_||m||Function("return this")(),j="object"==typeof e&&e&&!e.nodeType&&e,O=j&&"object"==typeof r&&r&&!r.nodeType&&r,A=O&&O.exports===j,S=A&&_.process,P=function(){try{return S&&S.binding&&S.binding("util")}catch(t){}}(),T=P&&P.isTypedArray;function E(t,e){return"__proto__"==e?void 0:t[e]}var x,I,B,F=Array.prototype,U=Function.prototype,N=Object.prototype,R=w["__core-js_shared__"],C=U.toString,D=N.hasOwnProperty,L=(x=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+x:"",k=N.toString,M=C.call(Object),z=RegExp("^"+C.call(D).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),J=A?w.Buffer:void 0,G=w.Symbol,H=w.Uint8Array,q=J?J.allocUnsafe:void 0,$=(I=Object.getPrototypeOf,B=Object,function(t){return I(B(t))}),V=Object.create,X=N.propertyIsEnumerable,K=F.splice,Q=G?G.toStringTag:void 0,W=function(){try{var t=jt(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),Y=J?J.isBuffer:void 0,Z=Math.max,tt=Date.now,et=jt(w,"Map"),rt=jt(Object,"create"),nt=function(){function t(){}return function(e){if(!Ut(e))return{};if(V)return V(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();function ot(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ut(t){var e=this.__data__=new it(t);this.size=e.size}function st(t,e){var r=Et(t),n=!r&&Tt(t),o=!r&&!n&&It(t),i=!r&&!n&&!o&&Rt(t),a=r||n||o||i,u=a?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],s=u.length;for(var c in t)!e&&!D.call(t,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Ot(c,s))||u.push(c);return u}function ct(t,e,r){(void 0===r||Pt(t[e],r))&&(void 0!==r||e in t)||ht(t,e,r)}function lt(t,e,r){var n=t[e];D.call(t,e)&&Pt(n,r)&&(void 0!==r||e in t)||ht(t,e,r)}function ft(t,e){for(var r=t.length;r--;)if(Pt(t[r][0],e))return r;return-1}function ht(t,e,r){"__proto__"==e&&W?W(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}ot.prototype.clear=function(){this.__data__=rt?rt(null):{},this.size=0},ot.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ot.prototype.get=function(t){var e=this.__data__;if(rt){var r=e[t];return r===o?void 0:r}return D.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return rt?void 0!==e[t]:D.call(e,t)},ot.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=rt&&void 0===e?o:e,this},it.prototype.clear=function(){this.__data__=[],this.size=0},it.prototype.delete=function(t){var e=this.__data__,r=ft(e,t);return!(r<0||(r==e.length-1?e.pop():K.call(e,r,1),--this.size,0))},it.prototype.get=function(t){var e=this.__data__,r=ft(e,t);return r<0?void 0:e[r][1]},it.prototype.has=function(t){return ft(this.__data__,t)>-1},it.prototype.set=function(t,e){var r=this.__data__,n=ft(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this},at.prototype.clear=function(){this.size=0,this.__data__={hash:new ot,map:new(et||it),string:new ot}},at.prototype.delete=function(t){var e=wt(this,t).delete(t);return this.size-=e?1:0,e},at.prototype.get=function(t){return wt(this,t).get(t)},at.prototype.has=function(t){return wt(this,t).has(t)},at.prototype.set=function(t,e){var r=wt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this},ut.prototype.clear=function(){this.__data__=new it,this.size=0},ut.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},ut.prototype.get=function(t){return this.__data__.get(t)},ut.prototype.has=function(t){return this.__data__.has(t)},ut.prototype.set=function(t,e){var r=this.__data__;if(r instanceof it){var o=r.__data__;if(!et||o.length<n-1)return o.push([t,e]),this.size=++r.size,this;r=this.__data__=new at(o)}return r.set(t,e),this.size=r.size,this};var dt,pt=function(t,e,r){for(var n=-1,o=Object(t),i=r(t),a=i.length;a--;){var u=i[dt?a:++n];if(!1===e(o[u],u,o))break}return t};function yt(t){return null==t?void 0===t?y:h:Q&&Q in Object(t)?function(t){var e=D.call(t,Q),r=t[Q];try{t[Q]=void 0;var n=!0}catch(t){}var o=k.call(t);n&&(e?t[Q]=r:delete t[Q]);return o}(t):function(t){return k.call(t)}(t)}function vt(t){return Nt(t)&&yt(t)==s}function bt(t){return!(!Ut(t)||L&&L in t)&&(Bt(t)?z:v).test(function(t){if(null!=t){try{return C.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function gt(t){if(!Ut(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=At(t),r=[];for(var n in t)("constructor"!=n||!e&&D.call(t,n))&&r.push(n);return r}function _t(t,e,r,n,o){t!==e&&pt(e,function(i,a){if(Ut(i))o||(o=new ut),function(t,e,r,n,o,i,a){var u=E(t,r),s=E(e,r),c=a.get(s);if(c)return void ct(t,r,c);var l=i?i(u,s,r+"",t,e,a):void 0,f=void 0===l;if(f){var h=Et(s),p=!h&&It(s),y=!h&&!p&&Rt(s);l=s,h||p||y?Et(u)?l=u:Nt(m=u)&&xt(m)?l=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(u):p?(f=!1,l=function(t,e){if(e)return t.slice();var r=t.length,n=q?q(r):new t.constructor(r);return t.copy(n),n}(s,!0)):y?(f=!1,v=s,b=!0?(g=v.buffer,_=new g.constructor(g.byteLength),new H(_).set(new H(g)),_):v.buffer,l=new v.constructor(b,v.byteOffset,v.length)):l=[]:function(t){if(!Nt(t)||yt(t)!=d)return!1;var e=$(t);if(null===e)return!0;var r=D.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&C.call(r)==M}(s)||Tt(s)?(l=u,Tt(u)?l=function(t){return function(t,e,r,n){var o=!r;r||(r={});var i=-1,a=e.length;for(;++i<a;){var u=e[i],s=n?n(r[u],t[u],u,r,t):void 0;void 0===s&&(s=t[u]),o?ht(r,u,s):lt(r,u,s)}return r}(t,Ct(t))}(u):(!Ut(u)||n&&Bt(u))&&(l=function(t){return"function"!=typeof t.constructor||At(t)?{}:nt($(t))}(s))):f=!1}var v,b,g,_;var m;f&&(a.set(s,l),o(l,s,n,i,a),a.delete(s));ct(t,r,l)}(t,e,a,r,_t,n,o);else{var u=n?n(E(t,a),i,a+"",t,e,o):void 0;void 0===u&&(u=i),ct(t,a,u)}},Ct)}function mt(t,e){return St(function(t,e,r){return e=Z(void 0===e?t.length-1:e,0),function(){for(var n=arguments,o=-1,i=Z(n.length-e,0),a=Array(i);++o<i;)a[o]=n[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=n[o];return u[e]=r(a),function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,u)}}(t,e,kt),t+"")}function wt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function jt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return bt(r)?r:void 0}function Ot(t,e){var r=typeof t;return!!(e=null==e?u:e)&&("number"==r||"symbol"!=r&&b.test(t))&&t>-1&&t%1==0&&t<e}function At(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||N)}var St=function(t){var e=0,r=0;return function(){var n=tt(),o=a-(n-r);if(r=n,o>0){if(++e>=i)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(W?function(t,e){return W(t,"toString",{configurable:!0,enumerable:!1,value:(r=e,function(){return r}),writable:!0});var r}:kt);function Pt(t,e){return t===e||t!=t&&e!=e}var Tt=vt(function(){return arguments}())?vt:function(t){return Nt(t)&&D.call(t,"callee")&&!X.call(t,"callee")},Et=Array.isArray;function xt(t){return null!=t&&Ft(t.length)&&!Bt(t)}var It=Y||function(){return!1};function Bt(t){if(!Ut(t))return!1;var e=yt(t);return e==l||e==f||e==c||e==p}function Ft(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}function Ut(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Nt(t){return null!=t&&"object"==typeof t}var Rt=T?function(t){return function(e){return t(e)}}(T):function(t){return Nt(t)&&Ft(t.length)&&!!g[yt(t)]};function Ct(t){return xt(t)?st(t,!0):gt(t)}var Dt,Lt=(Dt=function(t,e,r){_t(t,e,r)},mt(function(t,e){var r=-1,n=e.length,o=n>1?e[n-1]:void 0,i=n>2?e[2]:void 0;for(o=Dt.length>3&&"function"==typeof o?(n--,o):void 0,i&&function(t,e,r){if(!Ut(r))return!1;var n=typeof e;return!!("number"==n?xt(r)&&Ot(e,r.length):"string"==n&&e in r)&&Pt(r[e],t)}(e[0],e[1],i)&&(o=n<3?void 0:o,n=1),t=Object(t);++r<n;){var a=e[r];a&&Dt(t,a,r,o)}return t}));function kt(t){return t}r.exports=Lt}).call(this,r(0),r(4)(t))},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=r(5),a=(n=i)&&n.__esModule?n:{default:n};var u={getItem:function(t,e){return u.multiGet([t]).then(function(t){return t[0][1]}).then(function(t){return e&&e(null,t),t}).catch(function(t){return e&&e(t,null),t})},setItem:function(t,e,r){return u.multiSet([[t,e]]).then(function(t){return r&&r(null,t),t}).catch(function(t){return r&&r(t,null),t})},getAllKeys:function(t){return Promise.resolve(Object.keys(localStorage)).then(function(e){return t&&t(null,e),e}).catch(function(e){return t&&t(e,null),e})},removeItem:function(t,e){return u.multiRemove([t]).then(function(){e&&e(null)}).catch(function(t){e&&e(t,null)})},clear:function(){return new Promise(function(t){window.localStorage.clear(),t()})},mergeItem:function(t,e){return u.multiMerge([[t,e]])},multiGet:function(t){return new Promise(function(e){e(t.reduce(function(t,e){return t.concat([[e,localStorage.getItem(e)]])},[]))})},multiSet:function(t){return new Promise(function(e,r){var n=[];return t.forEach(function(t){var e=o(t,2),r=e[0],i=e[1];try{localStorage.setItem(r,i)}catch(t){n.push(t)}}),n.length>0?r(n):e()})},multiMerge:function(t){return new Promise(function(e,r){var n=[];return t.forEach(function(t){var e=o(t,2),r=e[0],i=e[1],u=localStorage.getItem(r);if(u)try{localStorage.setItem(r,JSON.stringify((0,a.default)(JSON.parse(u),JSON.parse(i))))}catch(t){n.push(t)}}),n.length>0?r(n):e()})},multiRemove:function(t){return new Promise(function(e){t.forEach(function(t){return window.localStorage.removeItem(t)}),e()})},flushGetRequests:function(){console.warn("AsyncStorage.flushGetRequests: Not supported on `web`")}};e.default=u},function(t,e,r){"use strict";var n,o=r(6),i=(n=o)&&n.__esModule?n:{default:n};r(3);var a=r(2)({AsyncStorage:i.default,fetch:window.fetch});window.bulletTrain=a,t.exports=a}])});
//# sourceMappingURL=bullet-train.js.map