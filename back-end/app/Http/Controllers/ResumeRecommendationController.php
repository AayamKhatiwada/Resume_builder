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

    public function updateRecommendationResume(Request $request)
    {

        $resume = ResumeRecommendation::updateOrCreate(
            ['slug' => $request->input('slug')], // find resume by slug
            [
                'title' => $request->input('title'),
                'slug' => $request->input('slug'),
                'ResumeData' => $request->input('data'),
            ] // update or create a new resume
        );

        return ["resume" => $resume];
    }

    public function deleteRecommendationResume($id)
    {
        $resume = ResumeRecommendation::findOrFail($id); // Find the resume by ID
        $resume->delete();

        return ["data" => "Resume Deleted successful"];
    }
}
