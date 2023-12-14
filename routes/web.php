<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LanguangeController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;

Route::middleware('locale')->group(function () {

    Route::get('/', WelcomeController::class);
    Route::get('articles', fn () => inertia('Articles/Index'));
    Route::get('/dashboard', DashboardController::class)->middleware(['auth', 'verified'])->name('dashboard');

    Route::controller(LanguangeController::class)->group(function () {
        Route::get('language', 'create');
        Route::post('language', 'store');
    });

    require __DIR__.'/auth.php';
});
