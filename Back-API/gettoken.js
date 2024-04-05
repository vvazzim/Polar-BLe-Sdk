const axios = require('axios');

const clientId = 'f9ca9e20-28a2-42fa-912e-baec75eb4b13';
const clientSecret = '2d81bbcb-57b6-4497-8808-f5146656f8fe';
const redirectUri = 'http://localhost:3000';
const responseType = 'code';

const authorizationCode = '025c03cbcae97da9afd5e54261f70ec2';

async function getAccessToken(code) {
    try {
        console.log('Fetching access token...');
        const response = await axios.post('https://polarremote.com/v2/oauth2/token',
            `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}`,
            {
                headers: {
                    'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );
        console.log('Access token response:', response.data);
        return {
            accessToken: response.data.access_token,
            userId: response.data.x_user_id
        };
    } catch (error) {
        console.error('Failed to get access token:', error.message);
        throw error;
    }
}

async function createExerciseTransaction(userId, accessToken) {
    try {
        console.log('Creating exercise transaction...');
        const response = await axios.post(`https://www.polaraccesslink.com/v3/users/${userId}/exercise-transactions`, null, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });
        console.log('Exercise transaction created successfully:', response.data);
        return response.data['transaction-id']; // Accès correct à l'ID de transaction
    } catch (error) {
        console.error('Error creating exercise transaction:', error.message);
        throw error;
    }
}

getAccessToken(authorizationCode)
    .then(response => {
        console.log('User ID:', response);
        return createExerciseTransaction(response.userId, response.accessToken);
    })
    .then(transactionId => {
        console.log('Transaction ID:', transactionId);
    })
    .catch(error => console.error('Error:', error.message));
