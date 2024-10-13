<?php

use Illuminate\Support\Facades\Route;

Route::get('{any}', function () {
    return view('app'); // Renvoie la vue Blade "app.blade.php" où React est monté
})->where('any', '.*');
