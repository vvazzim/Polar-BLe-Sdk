// gettoken.js

const axios = require('axios');

const clientId = 'e33abfd4-56b6-4950-8754-9066c7f0189f';
const clientSecret = '63baf176-9e3f-4e3e-a1e6-9cb40feaaa5a';
const code = '96ad8eb61ef66ff75bdd21953416c3d6'; // Obtenu après que l'utilisateur a autorisé l'application
const redirectUri = 'google.com';

const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

axios.post('https://polarremote.com/v2/oauth2/authorize', `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}`, {
    headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
    .then(response => {
        console.log('Token request successful. Response:', response.data);
        console.log('Access token:', response.data.access_token);
        // Stocker le token d'accès dans votre application
    })
    .catch(error => {
        console.error('Error:', error);
    });
