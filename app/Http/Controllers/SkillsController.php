<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\Skill;

class SkillsController extends Controller
{
    public function index() : JsonResponse
    {
        $skills = Skill::all();
        return response()->json($skills);
    }
}
