<?php

namespace App\Http\Controllers;

use App\Models\UserResume;
use Illuminate\Http\Request;

class UserResumeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return ["include_in_community" => $request->input('include_in_community')? 1:0];
        $resume = UserResume::updateOrCreate(
            ['slug' => $request->input('slug')], // find resume by slug
            [
                'user_id' => $request->input('user_id'),
                'title' => $request->input('title'),
                'slug' => $request->input('slug'),
                'ResumeData' => $request->input('data'),
                'include_in_community' => $request->input('include_in_community')? 1:0
            ] // update or create a new resume
        );

        return ["resume" => $resume];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserResume  $userResume
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // return UserResume::where("user_id", $id);
        return UserResume::where("user_id", $id)->get()->toArray();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserResume  $userResume
     * @return \Illuminate\Http\Response
     */
    public function edit(UserResume $userResume)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserResume  $userResume
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserResume $userResume)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserResume  $userResume
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserResume $userResume)
    {
        //
    }
}
