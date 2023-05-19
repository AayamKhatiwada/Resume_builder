<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Controller;
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

Route::post('adminCheck', [AdminController::class, 'adminLogin']);

Route::post('register', [UserController::class, 'register']);

Route::get('getAllUsers', [UserController::class, 'getAllUsers']);

Route::get('deleteUser/{id}', [UserController::class, 'deleteUser']);

Route::post('saveResume', [UserResumeController::class, 'store']);


Route::get('getResume/{id}', [UserResumeController::class, 'show']);

Route::get('getRecommendationResume', [ResumeRecommendationController::class, 'show']);

Route::get('getAllInfo', [Controller::class, 'getAllInfo']);

Route::get('deleteCommunityResume/{id}', [Controller::class, 'deleteCommunityResume']);

Route::get('getCommunityResume', [UserResumeController::class, 'communityResumes']);

Route::post('registerRecommendationResume', [ResumeRecommendationController::class, 'registerRecommendationResume']);

Route::post('updateRecommendationResume', [ResumeRecommendationController::class, 'updateRecommendationResume']);

Route::get('deleteRecommendationResume/{id}', [ResumeRecommendationController::class, 'deleteRecommendationResume']);
