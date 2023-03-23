<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResumeRecommendation extends Model
{
    use HasFactory;
    protected $fillable = [
        'slug',
        'title',
        'image',
        'ResumeData',
    ];
}
