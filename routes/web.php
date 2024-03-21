<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/products', 'ProductController@index');
Route::get('/categories', 'ProductController@categories');
Route::get('/hoadons', 'ProductController@hoadons');
Route::get('/chitiethoadon/{id}', 'ProductController@chitiethoadon');
Route::get('/user', 'ProductController@user');