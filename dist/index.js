"use strict";var p=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var y=p(function(H,m){
var j=require('@stdlib/strided-base-reinterpret-complex64/dist');function g(r,e,i,u,a,s,n){var o,c,x,d,v,t,q;if(r<=0)return a;for(o=j(e,0),c=j(a,0),x=i*2,d=s*2,v=u*2,t=n*2,q=0;q<r;q++)c[t]=o[v],c[t+1]=o[v+1],v+=x,t+=d;return a}m.exports=g
});var R=p(function(I,w){
var l=require('@stdlib/strided-base-stride2offset/dist'),h=y();function k(r,e,i,u,a){var s=l(r,i),n=l(r,a);return h(r,e,i,s,u,a,n)}w.exports=k
});var O=p(function(J,E){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),A=y();z(_,"ndarray",A);E.exports=_
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=O(),f,b=C(B(__dirname,"./native.js"));D(b)?f=F:f=b;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
