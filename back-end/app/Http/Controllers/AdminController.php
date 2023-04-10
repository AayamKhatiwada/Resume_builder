<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function adminLogin(Request $request)
    {
        $admin = Admin::where('name', $request->admin)->first();

        if (!$admin) {
            return ["error" => "Invalid email"];
        }
        if (!$admin || !Hash::check($request->password, $admin->password)) {
            return ["error" => "Password is incorrect"];
        }

        return ["admin" => "true"];
    }
}
