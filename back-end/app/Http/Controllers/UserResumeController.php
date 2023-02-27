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
        $resume = new UserResume();
        $resume->user_id = $request->input('user_id');
        $resume->title = $request->input('title');
        $resume->ResumeData = $request->input('data');
        $resume->save();

        return ["resume" => $resume];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserResume  $userResume
     * @return \Illuminate\Http\Response
     */
    public function show(UserResume $userResume)
    {
        //
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
