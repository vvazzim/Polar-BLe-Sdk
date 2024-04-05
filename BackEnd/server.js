const express = require('express');
const app = express();
const PORT = 3000;

// Importez la fonction pour générer des données d'ECG simulées
const generateECGData = require('./ecgData'); // Assurez-vous que le chemin d'accès est correct

// Point de terminaison pour fournir les données d'ECG
app.get('/ecg-data', (req, res) => {
    const ecgData = generateECGData(); // Utilisez la fonction pour générer les données d'ECG
    res.json(ecgData);
});

// Générer les données d'ECG
const ecgData = generateECGData();

// Afficher les données d'ECG
console.log(ecgData);

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
