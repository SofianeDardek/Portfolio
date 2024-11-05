<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\SkillsController;

// Routes d'API : On definit d'abord toutes les routes d'API pour s'assurer qu'elles sont traitées par Laravel.
// Cela permet d'éviter qu'elles soient interceptées par la route générique {any}, qui redirige vers l'application React.
Route::prefix('api')->group(function () {
    Route::post('/contact', [ContactController::class, 'store']);
    Route::get('/skills', [SkillsController::class, 'index']);
});


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


