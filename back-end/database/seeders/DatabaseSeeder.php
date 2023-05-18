<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Admin;
use App\Models\ResumeRecommendation;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $user = new User;
        $user->fname = "Aayam";
        $user->lname = "Khatiwada";
        $user->email = "aayam@gmail.com";
        $user->password = Hash::make("123");
        $user->save();

        $user = new Admin;
        $user->name = "admin";
        $user->password = Hash::make("admin");
        $user->save();

    }
}
