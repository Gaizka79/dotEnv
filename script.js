const env = require('dotenv').config('./.env');
const apikey = process.env.MY_KEY;

console.log(apikey);


document.getElementById(`btSakatu`).addEventListener('click', () => {
    alert(apikey);
});
