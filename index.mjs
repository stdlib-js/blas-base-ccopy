// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@v0.2.0-esm/index.mjs";function s(e,r,s,n,d,i,o){var m,a,f,l,p,j,u;if(e<=0)return d;for(m=t(r,0),a=t(d,0),f=2*s,l=2*i,p=2*n,j=2*o,u=0;u<e;u++)a[j]=m[p],a[j+1]=m[p+1],p+=f,j+=l;return d}function n(e,t,n,d,i){return s(e,t,n,r(e,n),d,i,r(e,i))}e(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
