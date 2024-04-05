// Projet/Back/ecgData.js

// Fonction pour générer des données d'ECG simulées
function generateECGData() {
    const numSamples = 1000; // Nombre d'échantillons d'ECG
    const ecgData = [];

    // Génération de données d'ECG aléatoires
    for (let i = 0; i < numSamples; i++) {
        const ecgValue = Math.random() * 2 - 1; // Valeur d'ECG aléatoire entre -1 et 1
        ecgData.push(ecgValue);
    }

    return ecgData;
}

// Fonction pour renvoyer les données d'ECG au format JSON
function getECGDataJSON() {
    const ecgData = generateECGData();
    return JSON.stringify(ecgData);
}

module.exports = getECGDataJSON;
