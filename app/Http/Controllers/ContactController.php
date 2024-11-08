<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Contact;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        // Message d'erreurs
        $message = [
            'name.required' => 'Veuillez saisir un nom.',
            'email.required' => 'Veuillez saisir une adresse e-mail.',
            'message.required' => 'Veuillez saisir un message.',
            'email.email' => 'L\'adresse e-mail n\'est pas valide.',
            'message.min' => 'Votre message doit faire minimum :min caractères',
            'message.max' => 'Votre message est trop long.',
            'email.max' => 'Votre email est trop long.',
            'nom.max' => 'Votre nom est trop long.'
        ];
        // Validation des données
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|min:3|max:2000',
        ], $message);


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
