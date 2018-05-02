<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/*
|------------------------------------------------------
| show prducts
|------------------------------------------------------
| URl: /api/products
| Method: GET
| Description: Display a listing of the resource view
*/
Route::get('products', 'ProductsController@index');
/*
|------------------------------------------------------
| show prduct 
|------------------------------------------------------
| URl: /api/products/{product}
| Method: GET
| Description: Display a specific product
*/
Route::get('products/{product}', 'ProductsControlle@show');
/*
|------------------------------------------------------
| Create product
|------------------------------------------------------
| URl: /api/products
| Method: POST
| Description:create new product resource
*/
Route::post('products', 'ProductsController@store');
/*
|------------------------------------------------------
| update product
|------------------------------------------------------
| URl: /api/products/{product}
| Method: PUT
| Description: update a product resource
*/
Route::put('products/{pruduct}', 'ProductsController@update');
/*
|------------------------------------------------------
| delete product
|------------------------------------------------------
| URl: /api/products/{product}
| Method: DELETE
| Description: delete a product
*/
Route::delete('products/{product', 'ProductsController@destroy');