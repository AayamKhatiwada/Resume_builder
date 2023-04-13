<?php

namespace App\Http\Controllers;

use App\Models\ResumeRecommendation;
use App\Models\User;
use App\Models\UserResume;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function communityResumes()
    {
        // return UserResume::where("user_id", $id);
        return UserResume::where("include_in_community", 1)->get()->toArray();
    }

    public function getAllInfo()
    {
        $userCount = User::count();
        $resume = UserResume::count();
        $communityResume = UserResume::where("include_in_community", 1)->count();
        $recommendationResume = ResumeRecommendation::count();
        return response()->json(['user_count' => $userCount, 'resumes' => $resume, 'commmunity_resume' => $communityResume, "recommendationResume" => $recommendationResume]);
    }
}
