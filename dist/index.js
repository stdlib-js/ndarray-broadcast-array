"use strict";var f=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var c=f(function(I,m){
var l=require('@stdlib/assert-is-ndarray-like/dist'),p=require('@stdlib/assert-is-collection/dist'),y=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/array-base-copy-indexed/dist'),w=require('@stdlib/ndarray-dtype/dist'),q=require('@stdlib/ndarray-shape/dist'),b=require('@stdlib/ndarray-strides/dist'),j=require('@stdlib/ndarray-offset/dist'),D=require('@stdlib/ndarray-order/dist'),E=require('@stdlib/ndarray-data-buffer/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist');function A(a,r){var i,n,t,h,s,g,d,e,v;if(!l(a))throw new TypeError(u('1jn4f',a));if(!p(r))throw new TypeError(u('1jnF3',r));if(s=r.length,t=q(a),g=t.length,s<g)throw new Error(format('1jn0Z'));for(i=[],e=0;e<s;e++)i.push(0);for(h=b(a),e=s-1;e>=0;e--)if(v=g-s+e,!(v<0)){if(d=t[v],n=r[e],!y(n))throw new TypeError(u('1jnF3',"["+r.join(",")+"]"));if(n!==0&&n<d)throw new Error(u('1jn5F',o(t).join(", "),o(r).join(", "),e));if(d===n)i[e]=h[v];else if(d===1)i[e]=0;else throw new Error(u('1jn5G',o(t).join(", "),o(r).join(", "),e))}return new a.constructor(w(a),E(a),o(r),i,j(a),D(a),{readonly:!0})}m.exports=A
});var S=c();module.exports=S;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
