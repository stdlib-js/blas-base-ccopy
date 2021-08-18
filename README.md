<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# ccopy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Copy values from one complex single-precision floating-point vector to another complex single-precision floating-point vector.

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-base-ccopy
```

</section>

<section class="usage">

## Usage

```javascript
var ccopy = require( '@stdlib/blas-base-ccopy' );
```

#### ccopy( N, x, strideX, y, strideY )

Copies values from `x` into `y`.

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

ccopy( x.length, x, 1, y, 1 );

var z = y.get( 0 );
// returns <Complex64>

var re = real( z );
// returns 1.0

var im = imag( z );
// returns 2.0
```

The function has the following parameters:

-   **N**: number of values to copy.
-   **x**: input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: index increment for `x`.
-   **y**: destination [`Complex64Array`][@stdlib/array/complex64].
-   **strideY**: index increment for `y`.

The `N` and `stride` parameters determine how values from `x` are copied into `y`. For example, to copy in reverse order every other value in `x` into the first `N` elements of `y`,

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var floor = require( '@stdlib/math-base-special-floor' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var N = floor( x.length / 2 );

ccopy( N, x, -2, y, 1 );

var z = y.get( 0 );
// returns <Complex64>

var re = real( z );
// returns 5.0

var im = imag( z );
// returns 6.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var floor = require( '@stdlib/math-base-special-floor' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );

// Initial arrays...
var x0 = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y0 = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Complex64Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

var N = floor( x0.length / 2 );

// Copy in reverse order every other value from `x1` into `y1`...
ccopy( N, x1, -2, y1, 1 );

var z = y0.get( 2 );
// returns <Complex64>

var re = real( z );
// returns 7.0

var im = imag( z );
// returns 8.0
```

#### ccopy.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Copies values from `x` into `y` using alternative indexing semantics.

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

ccopy.ndarray( x.length, x, 1, 0, y, 1, 0 );

var z = y.get( 0 );
// returns <Complex64>

var re = real( z );
// returns 1.0

var im = imag( z );
// returns 2.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to copy every other value in `x` starting from the second value into the last `N` elements in `y` where `x[i] = y[n]`, `x[i+2] = y[n-1]`,...,

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var floor = require( '@stdlib/math-base-special-floor' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var N = floor( x.length / 2 );

ccopy.ndarray( N, x, 2, 1, y, -1, y.length-1 );

var z = y.get( y.length-1 );
// returns <Complex64>

var re = real( z );
// returns 3.0

var im = imag( z );
// returns 4.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `y` unchanged.
-   `ccopy()` corresponds to the [BLAS][blas] level 1 function [`ccopy`][ccopy].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var Complex64Array = require( '@stdlib/array-complex64' );
var ccopy = require( '@stdlib/blas-base-ccopy' );

var re = discreteUniform.factory( 0, 10 );
var im = discreteUniform.factory( -5, 5 );

var x = new Complex64Array( 10 );
var y = new Complex64Array( 10 );

var i;
for ( i = 0; i < x.length; i++ ) {
    x.set( [ re(), im() ], i );
    y.set( [ re(), im() ], i );
}
console.log( x.get( 0 ).toString() );
console.log( y.get( 0 ).toString() );

// Copy elements from `x` into `y` starting from the end of `y`:
ccopy( x.length, x, 1, y, -1 );
console.log( y.get( y.length-1 ).toString() );
```

</section>

<!-- /.examples -->


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

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-ccopy.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-ccopy

[test-image]: https://github.com/stdlib-js/blas-base-ccopy/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/blas-base-ccopy/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-ccopy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-ccopy?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-ccopy.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-ccopy/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-ccopy/main/LICENSE

[blas]: http://www.netlib.org/blas

[ccopy]: http://www.netlib.org/lapack/explore-html/da/df6/group__complex__blas__level1.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

</section>

<!-- /.links -->
