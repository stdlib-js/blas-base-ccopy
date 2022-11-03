// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,o=Object.prototype,n=o.toString,l=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,u=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var i,c,y,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(f.call(e,t)||u.call(e,t)?(i=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=i):e[t]=r.value),y="get"in r,p="set"in r,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&l&&l.call(e,t,r.get),p&&a&&a.call(e,t,r.set),e};var i,c=e,y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),p=Object.prototype.toString,b=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"";i=y&&"symbol"==typeof Symbol.toStringTag?function(e){var t,r,o,n,l;if(null==e)return p.call(e);r=e[_],l=_,t=null!=(n=e)&&b.call(n,l);try{e[_]=void 0}catch(t){return p.call(e)}return o=p.call(e),t?e[_]=r:delete e[_],o}:function(e){return p.call(e)};var d,s=i,m="function"==typeof Float32Array,v=Number.POSITIVE_INFINITY,g="function"==typeof Float32Array?Float32Array:null,h="function"==typeof Float32Array?Float32Array:void 0;d=function(){var e,t,r;if("function"!=typeof g)return!1;try{t=new g([1,3.14,-3.14,5e40]),r=t,e=(m&&r instanceof Float32Array||"[object Float32Array]"===s(r))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===v}catch(t){e=!1}return e}()?h:function(){throw new Error("not implemented")};var w=d;function j(e,t,r,o,n){var l,a,f,u,i,c,y;if(e<=0)return o;if(l=new w(t.buffer,t.byteOffset,2*t.length),a=new w(o.buffer,o.byteOffset,2*o.length),1===r&&1===n){for(y=0;y<2*e;y+=2)a[y]=l[y],a[y+1]=l[y+1];return o}for(i=r<0?2*(1-e)*r:0,c=n<0?2*(1-e)*n:0,f=2*r,u=2*n,y=0;y<e;y++)a[c]=l[i],a[c+1]=l[i+1],i+=f,c+=u;return o}return c(j,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,o,n,l,a){var f,u,i,c,y,p,b;if(e<=0)return n;for(f=new w(t.buffer,t.byteOffset,2*t.length),u=new w(n.buffer,n.byteOffset,2*n.length),i=2*r,c=2*l,y=2*o,p=2*a,b=0;b<e;b++)u[p]=f[y],u[p+1]=f[y+1],y+=i,p+=c;return n}}),j},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).ccopy=t();
//# sourceMappingURL=index.js.map