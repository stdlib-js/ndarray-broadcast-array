<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# broadcastArray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Broadcast an [ndarray][@stdlib/ndarray/ctor] to a specified shape.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-broadcast-array
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var broadcastArray = require( '@stdlib/ndarray-broadcast-array' );
```

#### broadcastArray( x, shape )

Broadcasts an [ndarray][@stdlib/ndarray/ctor] to a specified `shape`.

```javascript
var array = require( '@stdlib/ndarray-array' );

// Create a 2x2 ndarray:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>

// Broadcast to a 2x2x2 ndarray:
var y = broadcastArray( x, [ 2, 2, 2 ] );
// returns <ndarray>
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function throws an error if a provided [ndarray][@stdlib/ndarray/ctor] is [incompatible][@stdlib/ndarray/base/broadcast-shapes] with a provided shape.
-   The returned [ndarray][@stdlib/ndarray/ctor] is a **read-only** view on the input [ndarray][@stdlib/ndarray/ctor] data buffer. The view is typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to the input [ndarray][@stdlib/ndarray/ctor] may affect multiple elements. If you need to write to the input [ndarray][@stdlib/ndarray/ctor], copy the input [ndarray][@stdlib/ndarray/ctor] **before** broadcasting.
-   The function always returns a new [ndarray][@stdlib/ndarray/ctor] instance even if the input [ndarray][@stdlib/ndarray/ctor] shape and the desired shape are the same.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array = require( '@stdlib/ndarray-array' );
var numel = require( '@stdlib/ndarray-base-numel' );
var ind2sub = require( '@stdlib/ndarray-ind2sub' );
var broadcastArray = require( '@stdlib/ndarray-broadcast-array' );

// Create a 2x2 array:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>

// Broadcast the array to 3x2x2:
var y = broadcastArray( x, [ 3, 2, 2 ] );
// returns <ndarray>

// Retrieve the shape:
var sh = y.shape;
// returns [ 3, 2, 2 ]

// Retrieve the number of elements:
var N = numel( sh );

// Loop through the array elements...
var i;
for ( i = 0; i < N; i++ ) {
    console.log( 'Y[%s] = %d', ind2sub( sh, i ).join( ', ' ), y.iget( i ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-broadcast-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-broadcast-array

[test-image]: https://github.com/stdlib-js/ndarray-broadcast-array/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/ndarray-broadcast-array/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-broadcast-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-broadcast-array?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-broadcast-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-broadcast-array/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-broadcast-array/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-broadcast-array/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-broadcast-array/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-broadcast-array/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-broadcast-array/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes

</section>

<!-- /.links -->