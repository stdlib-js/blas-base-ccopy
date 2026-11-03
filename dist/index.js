"use strict";var p=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var y=p(function(H,m){
var j=require('@stdlib/strided-base-reinterpret-complex64/dist');function g(e,r,a,u,i,s,n){var o,c,x,d,v,t,q;if(e<=0)return i;for(o=j(r,0),c=j(i,0),x=a*2,d=s*2,v=u*2,t=n*2,q=0;q<e;q++)c[t]=o[v],c[t+1]=o[v+1],v+=x,t+=d;return i}m.exports=g
});var R=p(function(I,w){
var l=require('@stdlib/strided-base-stride2offset/dist'),h=y();function k(e,r,a,u,i){var s=l(e,a),n=l(e,i);return h(e,r,a,s,u,i,n)}w.exports=k
});var O=p(function(J,E){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),A=y();z(_,"ndarray",A);E.exports=_
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=O(),f,b=C(B(__dirname,"./native.js"));D(b)?f=F:f=b;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
