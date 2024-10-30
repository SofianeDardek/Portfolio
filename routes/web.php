<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::get('{any}', function () {
    return view('app'); // Renvoie la vue Blade "app.blade.php" où React est monté
})->where('any', '.*');

/*
Route::prefix('api')->group(function () {
    Route::post('/contact', function (Request $request) {
        return response()->json(['message' => 'Message reçu avec succès']);
    });
});
*/


Route::prefix('api')->group(function () {
    Route::post('/contact', [ContactController::class, 'store']);
});
