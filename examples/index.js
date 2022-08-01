/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var Complex64Array = require( '@stdlib/array-complex64' );
var ccopy = require( './../lib' );

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