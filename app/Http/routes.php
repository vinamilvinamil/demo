<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'WelcomeController@index');

Route::get('/app/v1/employees/{id?}', 'Employees@index');
Route::post('/app/v1/employees', 'Employees@store');
Route::post('/app/v1/employees/{id}', 'Employees@update');
Route::delete('/app/v1/employees/{id}', 'Employees@destroy');
