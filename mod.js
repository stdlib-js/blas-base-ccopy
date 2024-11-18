// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function a(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+a(n):a(n)+r,i&&(r="-"+r)),r}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,a,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(a=r.arg,c=parseInt(a,10),!isFinite(c)){if(!t(a))throw new Error("invalid integer. Value: "+a);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(a=(-c).toString(e),r.precision&&(a=i(a,r.precision,r.padRight)),a="-"+a):(a=c.toString(e),c||r.precision?r.precision&&(a=i(a,r.precision,r.padRight)):a="",r.sign&&(a=r.sign+a)),16===e&&(r.alternate&&(a="0x"+a),a=r.specifier===o.call(r.specifier)?o.call(a):n.call(a)),8===e&&r.alternate&&"0"!==a.charAt(0)&&(a="0"+a),a}var s=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var e,a,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+a);i=r.arg}switch(r.specifier){case"e":case"E":a=i.toExponential(r.precision);break;case"f":case"F":a=i.toFixed(r.precision);break;case"g":case"G":s(i)<1e-4?((e=r.precision)>0&&(e-=1),a=i.toExponential(e)):a=i.toPrecision(r.precision),r.alternate||(a=u.call(a,v,"$1e"),a=u.call(a,b,"e"),a=u.call(a,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return a=u.call(a,f,"e+0$1"),a=u.call(a,g,"e-0$1"),r.alternate&&(a=u.call(a,d,"$1."),a=u.call(a,h,"$1.e")),i>=0&&r.sign&&(a=r.sign+a),a=r.specifier===p.call(r.specifier)?p.call(a):l.call(a)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,E=Array.isArray;function S(r){return r!=r}function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,a,n,o,s,l,p,u,f,g,d,h;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",l=1,p=0;p<r.length;p++)if(a=r[p],"string"==typeof a)s+=a;else{if(e=void 0!==a.precision,!(a=k(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+a+"`.");for(a.mapping&&(l=a.mapping),t=a.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=t.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===a.width){if(a.width=parseInt(arguments[l],10),l+=1,S(a.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(e&&"*"===a.precision){if(a.precision=parseInt(arguments[l],10),l+=1,S(a.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,e=!1)}switch(a.arg=arguments[l],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(a.padZeros=!1),a.arg=c(a);break;case"s":a.maxWidth=e?a.precision:-1,a.arg=String(a.arg);break;case"c":if(!S(a.arg)){if((o=parseInt(a.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=S(o)?String(a.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(a.precision=6),a.arg=w(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=i(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=(f=a.arg,g=a.width,d=a.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+m(h):m(h)+f)),s+=a.arg||"",l+=1}return s}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,a,i;for(t=[],i=0,a=F.exec(r);a;)(e=r.slice(i,F.lastIndex-a[0].length)).length&&t.push(e),t.push(A(a)),i=F.lastIndex,a=F.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function j(r){var e,t;if("string"!=typeof r)throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[T(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var I,V=Object.prototype,O=V.toString,$=V.__defineGetter__,P=V.__defineSetter__,C=V.__lookupGetter__,R=V.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var a,i,n,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||R.call(r,e)?(a=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=a):r[e]=t.value),n="get"in t,o="set"in t,i&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&$&&$.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};var Z=I;function G(r,e){return e>0?0:(1-r)*e}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var N=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;var M,U="function"==typeof Symbol?Symbol:void 0,X="function"==typeof U?U.toStringTag:"";M=L&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,a,i,n;if(null==r)return N.call(r);t=r[X],n=X,e=null!=(i=r)&&W.call(i,n);try{r[X]=void 0}catch(e){return N.call(r)}return a=N.call(r),e?r[X]=t:delete r[X],a}:function(r){return N.call(r)};var Y=M,z="function"==typeof Float32Array;var B=Number.POSITIVE_INFINITY,q="function"==typeof Float32Array?Float32Array:null;var D,H="function"==typeof Float32Array?Float32Array:void 0;D=function(){var r,e,t;if("function"!=typeof q)return!1;try{e=new q([1,3.14,-3.14,5e40]),t=e,r=(z&&t instanceof Float32Array||"[object Float32Array]"===Y(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===B}catch(e){r=!1}return r}()?H:function(){throw new Error("not implemented")};var J=D;function K(r,e){return new J(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function Q(r,e,t,a,i,n,o){var c,s,l,p,u,f,g;if(r<=0)return i;for(c=K(e,0),s=K(i,0),l=2*t,p=2*n,u=2*a,f=2*o,g=0;g<r;g++)s[f]=c[u],s[f+1]=c[u+1],u+=l,f+=p;return i}function rr(r,e,t,a,i){return Q(r,e,t,G(r,t),a,i,G(r,i))}Z(rr,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:Q});export{rr as default,Q as ndarray};
//# sourceMappingURL=mod.js.map
