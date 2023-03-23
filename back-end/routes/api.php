<?php

use App\Http\Controllers\ResumeRecommendationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserResumeController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', [UserController::class, 'login']);

Route::post('register', [UserController::class, 'register']);

Route::post('saveResume', [UserResumeController::class, 'store']);


Route::get('getResume/{id}', [UserResumeController::class, 'show']);

Route::get('getRecommendationResume', [ResumeRecommendationController::class, 'show']);
