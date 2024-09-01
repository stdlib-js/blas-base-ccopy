"use strict";var x=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var j=x(function(H,w){
var l=require('@stdlib/strided-base-reinterpret-complex64/dist');function h(e,i,o,s,a){var u,n,c,f,v,t,r;if(e<=0)return s;if(u=l(i,0),n=l(s,0),o===1&&a===1){for(r=0;r<e*2;r+=2)n[r]=u[r],n[r+1]=u[r+1];return s}for(o<0?v=2*(1-e)*o:v=0,a<0?t=2*(1-e)*a:t=0,c=o*2,f=a*2,r=0;r<e;r++)n[t]=u[v],n[t+1]=u[v+1],v+=c,t+=f;return s}w.exports=h
});var _=x(function(I,R){
var m=require('@stdlib/strided-base-reinterpret-complex64/dist');function k(e,i,o,s,a,u,n){var c,f,v,t,r,p,q;if(e<=0)return a;for(c=m(i,0),f=m(a,0),v=o*2,t=u*2,r=s*2,p=n*2,q=0;q<e;q++)f[p]=c[r],f[p+1]=c[r+1],r+=v,p+=t;return a}R.exports=k
});var b=x(function(J,O){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=j(),A=_();z(E,"ndarray",A);O.exports=E
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=b(),y,g=C(B(__dirname,"./native.js"));D(g)?y=F:y=g;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
