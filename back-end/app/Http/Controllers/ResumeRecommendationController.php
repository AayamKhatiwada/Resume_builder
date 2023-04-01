<?php

namespace App\Http\Controllers;

use App\Models\ResumeRecommendation;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ResumeRecommendationController extends Controller
{
    public function show(Request $request)
    {
        return ResumeRecommendation::all();
    }

    public function registerRecommendationResume(Request $request)
    {
        
        $resume = new ResumeRecommendation;
        $resume->slug = Str::slug($request->input('name'));
        $resume->title = $request->input('name');
        
        if($request->hasFile('image')){
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time().".".$extension;
            $file->move('uploads/recommendationImage/', $filename);
            $resume->image = $filename;
        }
        
        $resume->ResumeData = $request->input('htmlData');
        $resume->save();

        return ["resume" => $resume];
    }
}
