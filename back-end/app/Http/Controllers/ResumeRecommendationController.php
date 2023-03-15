<?php

namespace App\Http\Controllers;

use App\Models\ResumeRecommendation;
use Illuminate\Http\Request;

class ResumeRecommendationController extends Controller
{
    public function show(Request $request)
    {
        return ResumeRecommendation::all();
    }
}
