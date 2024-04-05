const getAccessToken = require('./gettoken');

const code = '42994f68eeb651a4614e379a993dd424';

getAccessToken(code)
    .then(access_token => {
        console.log('Access token:', access_token);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
