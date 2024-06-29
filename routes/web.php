<?php


use App\Http\Controllers;
use Illuminate\Support\Facades\Route;

Route::get('/', Controllers\HomeController::class)->name('home');
Route::resource('sales', Controllers\SaleController::class)->names('sales');
Route::resource('products', Controllers\ProductController::class)->names('products');