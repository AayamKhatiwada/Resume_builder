<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserResume;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if ($user) {
            return ["error" => "Email already in use"];
        }

        $user = new User;
        $user->fname = $request->input('fname');
        $user->lname = $request->input('lname');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();

        return ["user" => $user];
    }

    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return ["error" => "Invalid email"];
        }
        if (!$user || !Hash::check($request->password, $user->password)) {
            return ["error" => "Password is incorrect"];
        }

        return ["user" => $user];
    }

    public function getAllUsers()
    {
        $users = User::with('resume')->get();

        return ["user" => $users];
    }

    public function deleteUser($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        // Delete the user's associated resumes
        UserResume::where('user_id', $id)->delete();

        // Delete the user
        $user->delete();

        return response()->json(['message' => 'User and resumes deleted successfully']);
    }
}
