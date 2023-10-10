// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-copy-indexed@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtype@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-shape@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-strides@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-offset@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-order@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-data-buffer@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function p(p,l){var j,f,g,c,v,u,y,b,w;if(!e(p))throw new TypeError(h("invalid argument. First argument must be an ndarray. Value: `%s`.",p));if(!r(l))throw new TypeError(h("invalid argument. Second argument must be an array of nonnegative integers. Value: `%s`.",l));if((v=l.length)<(u=(g=i(p)).length))throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(j=[],b=0;b<v;b++)j.push(0);for(c=a(p),b=v-1;b>=0;b--)if(!((w=u-v+b)<0)){if(y=g[w],f=l[b],!s(f))throw new TypeError(h("invalid argument. Second argument must be an array of nonnegative integers. Value: `%s`.","["+l.join(",")+"]"));if(0!==f&&f<y)throw new Error(h("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",n(g).join(", "),n(l).join(", "),b));if(y===f)j[b]=c[w];else{if(1!==y)throw new Error(h("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",n(g).join(", "),n(l).join(", "),b));j[b]=0}}return new p.constructor(t(p),m(p),n(l),j,d(p),o(p),{readonly:!0})}export{p as default};
//# sourceMappingURL=index.mjs.map
