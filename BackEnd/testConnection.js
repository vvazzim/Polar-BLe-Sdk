const axios = require('axios');

// Endpoint pour obtenir des informations sur l'utilisateur
async function testConnection() {
    const accessToken = 'c46fe7b7163d241c73a89bf2d43fffe8';
    const url = 'https://www.polaraccesslink.com/v3/users';

    try {
        const response = await axios.get(url, {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });

        console.log('Connection successful, data:', response.data);
    } catch (error) {
        console.error('Failed to connect:', error.message);
    }
}

module.exports = testConnection;
