<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Contact;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        // Validation des données
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);


        if ($validator->fails()) {
            // Retourner les erreurs de validation avec un statut 422
            return response()->json(['errors' => $validator->errors()], 422);
        }

            // Récupérer les données validées
    $validatedData = $validator->validated();

       Contact::create($validatedData);
    
        return response()->json(['message' => 'je suis le controller']);
    }
}
