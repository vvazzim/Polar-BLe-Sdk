// Ajouté au début du script
const axios = require('axios');
const express = require('express');
const app = express();
const PORT = 3000;

const clientId = 'e33abfd4-56b6-4950-8754-9066c7f0189f';
const clientSecret = '63baf176-9e3f-4e3e-a1e6-9cb40feaaa5a';
const code = '96ad8eb61ef66ff75bdd21953416c3d6'; // Obtenu après que l'utilisateur a autorisé l'application
const redirectUri = 'http://localhost:3000/callback';

//// Importer la fonction testConnection depuis testConnection.js
//const testConnection = require('./testConnection');
//
//// Appeler la fonction testConnection
//testConnection();




// Importer la fonction pour générer des données d'ECG simulées
const generateECGData = require('./ecgData');

// Point de terminaison pour fournir les données d'ECG
app.get('/ecg-data', (req, res) => {
    // Ici, vous pouvez envoyer les données d'ECG à partir de la source où elles sont stockées
    // Vous pouvez envoyer les données sous forme de tableau JSON par exemple
    const ecgData = [generateECGData]; // Remplacez ... par vos données d'ECG réelles
    res.json(ecgData);
});

// Générer les données d'ECG
const ecgData = generateECGData();

// Afficher les données d'ECG
console.log(ecgData);
