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

'use strict';

// MODULES //

var isndarrayLike = require( '@stdlib/assert-is-ndarray-like' );
var isCollection = require( '@stdlib/assert-is-collection' );
var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var copy = require( '@stdlib/array-base-copy-indexed' );
var getDType = require( '@stdlib/ndarray-dtype' );
var getShape = require( '@stdlib/ndarray-shape' );
var getStrides = require( '@stdlib/ndarray-strides' );
var getOffset = require( '@stdlib/ndarray-offset' );
var getOrder = require( '@stdlib/ndarray-order' );
var getData = require( '@stdlib/ndarray-data-buffer' );
var format = require( '@stdlib/error-tools-fmtprodmsg' );


// MAIN //

/**
* Broadcasts an ndarray to a specified shape.
*
* ## Notes
*
* -   The returned array is a **read-only** view on the input array data buffer. The view is typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to the input array may affect multiple elements. If you need to write to the input array, copy the input array before broadcasting.
*
* @param {ndarray} x - input array
* @param {NonNegativeIntegerArray} shape - desired shape
* @throws {TypeError} first argument must be an ndarray
* @throws {TypeError} second argument must be an array of nonnegative integers
* @throws {Error} input array cannot have more dimensions than the desired shape
* @throws {Error} input array dimension sizes must be `1` or equal to the corresponding dimension in the provided shape
* @throws {Error} input array and desired shape must be broadcast compatible
* @returns {ndarray} broadcasted array
*
* @example
* var array = require( '@stdlib/ndarray-array' );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>
*
* var shx = x.shape;
* // returns [ 2, 2 ]
*
* var y = broadcastArray( x, [ 3, 2, 2 ] );
* // returns <ndarray>
*
* var shy = y.shape;
* // returns [ 3, 2, 2 ]
*
* var v = y.get( 0, 0, 0 );
* // returns 1
*
* v = y.get( 0, 0, 1 );
* // returns 2
*
* v = y.get( 1, 0, 0 );
* // returns 1
*
* v = y.get( 1, 1, 0 );
* // returns 3
*
* v = y.get( 2, 0, 0 );
* // returns 1
*
* v = y.get( 2, 1, 1 );
* // returns 4
*
* @example
* var array = require( '@stdlib/ndarray-array' );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>
*
* var y = broadcastArray( x, [ 3, 2 ] );
* // throws <Error>
*/
function broadcastArray( x, shape ) {
	var strides;
	var dim;
	var sh;
	var st;
	var N;
	var M;
	var d;
	var i;
	var j;

	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( '1jn4f', x ) );
	}
	if ( !isCollection( shape ) ) {
		throw new TypeError( format( '1jnF3', shape ) );
	}
	N = shape.length;
	sh = getShape( x );
	M = sh.length;
	if ( N < M ) {
		throw new Error( format('1jn0Z') );
	}
	// Initialize a strides array...
	strides = [];
	for ( i = 0; i < N; i++ ) {
		strides.push( 0 );
	}
	// Determine the output array strides...
	st = getStrides( x );
	for ( i = N-1; i >= 0; i-- ) {
		j = M - N + i;
		if ( j < 0 ) {
			// Prepended singleton dimension; stride is zero...
			continue;
		}
		d = sh[ j ];
		dim = shape[ i ];
		if ( !isNonNegativeInteger( dim ) ) {
			throw new TypeError( format( '1jnF3', '[' + shape.join( ',' ) + ']' ) );
		}
		if ( dim !== 0 && dim < d ) {
			throw new Error( format( '1jn5F', copy( sh ).join( ', ' ), copy( shape ).join( ', ' ), i ) );
		}
		if ( d === dim ) {
			strides[ i ] = st[ j ];
		} else if ( d === 1 ) {
			// In order to broadcast dimensions, we set the stride for that dimension to zero...
			strides[ i ] = 0;
		} else {
			// At this point, we know that `dim > d` and that `d` does not equal `1` (e.g., `dim=3` and `d=2`); in which case, the shapes are considered incompatible (even for desired shapes which are multiples of array dimensions, as might be desired when "tiling" an array; e.g., `dim=4` and `d=2`)...
			throw new Error( format( '1jn5G', copy( sh ).join( ', ' ), copy( shape ).join( ', ' ), i ) );
		}
	}
	return new x.constructor( getDType( x ), getData( x ), copy( shape ), strides, getOffset( x ), getOrder( x ), { // eslint-disable-line max-len
		'readonly': true
	});
}


// EXPORTS //

module.exports = broadcastArray;