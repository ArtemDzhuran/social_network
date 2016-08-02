<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class AuthController extends Controller
{
    function login() {

      return view('auth.login');
    }

    function register(){

      return view('auth.register');
    }
}
