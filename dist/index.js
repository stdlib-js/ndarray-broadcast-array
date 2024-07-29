"use strict";var f=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var c=f(function(I,m){"use strict";var l=require("@stdlib/assert-is-ndarray-like"),p=require("@stdlib/assert-is-collection"),y=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,o=require("@stdlib/array-base-copy-indexed"),w=require("@stdlib/ndarray-dtype"),q=require("@stdlib/ndarray-shape"),b=require("@stdlib/ndarray-strides"),j=require("@stdlib/ndarray-offset"),D=require("@stdlib/ndarray-order"),E=require("@stdlib/ndarray-data-buffer"),u=require("@stdlib/string-format");function A(a,r){var i,n,t,h,s,g,d,e,v;if(!l(a))throw new TypeError(u("invalid argument. First argument must be an ndarray. Value: `%s`.",a));if(!p(r))throw new TypeError(u("invalid argument. Second argument must be an array of nonnegative integers. Value: `%s`.",r));if(s=r.length,t=q(a),g=t.length,s<g)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=[],e=0;e<s;e++)i.push(0);for(h=b(a),e=s-1;e>=0;e--)if(v=g-s+e,!(v<0)){if(d=t[v],n=r[e],!y(n))throw new TypeError(u("invalid argument. Second argument must be an array of nonnegative integers. Value: `%s`.","["+r.join(",")+"]"));if(n!==0&&n<d)throw new Error(u("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",o(t).join(", "),o(r).join(", "),e));if(d===n)i[e]=h[v];else if(d===1)i[e]=0;else throw new Error(u("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",o(t).join(", "),o(r).join(", "),e))}return new a.constructor(w(a),E(a),o(r),i,j(a),D(a),{readonly:!0})}m.exports=A});var S=c();module.exports=S;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
