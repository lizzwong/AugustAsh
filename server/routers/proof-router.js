const express = require('express');
const router = express.Router();

// const bodyParser = require('bodyParser');

const apiKey = process.env.PROOF_KEY;

var request = require('request');

let newBody = {};

router.post('/', (req, res) => {
    request({
        method: 'POST',
        url: 'https://proofapi.herokuapp.com/sessions',
        headers: {
            'Content-Type': 'application/json'
        },
        body: "{  \"email\": \"elizabeth.xp.wong@gmail.com\",  \"password\": \"slogan brush shiver\"}"
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
        let newBody = response
        res.send(newBody)
    })
    
})



module.exports = router;