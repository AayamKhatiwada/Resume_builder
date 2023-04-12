<?php

namespace App\Http\Controllers;

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
}
