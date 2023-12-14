<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LanguangeController extends Controller
{
    public function create()
    {
        // dd(session('locale'));
        return inertia('Language/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required'],
        ]);

        session(['locale' => $request->name]);

        return back();
    }
}
