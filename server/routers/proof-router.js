const express = require('express');
const router = express.Router();

// const bodyParser = require('bodyParser');

const apiKey = process.env.PROOF_KEY;

var request = require('request');

//this would be re-assigned with live inputs coming from the DOM
var email = "elizabeth.xp.wong@gmail.com"
var password = "slogan brush shiver"

router.post('/', (req, res) => {
//sends information to the API
    request({
        method: 'POST',
        url: 'https://proofapi.herokuapp.com/sessions',
        headers: {
            'Content-Type': 'application/json'
        },
        body: `{  \"email\": \"${email}\",  \"password\": \"${password}\"}`
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', response.headers);
        console.log('Response:', body);
        //sends information from the API back to the DOM
        res.send(body)
    })
    
})

router.put('/videos', (req, res) => {
    //gets videos from the collection
    let auth_token = req.body.auth_token;
    console.log('token:', auth_token);
    var page = 1;
    var per_page = 10;
    request({
        method: 'GET',
        url: `https://proofapi.herokuapp.com/videos${page}&${per_page}`,
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token':  `${auth_token}`
        },
        
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', response.headers);
        console.log('Response:', body);
        //sends information from the API back to the DOM
        res.send(body)
    })

})

router.post('/newvideo', (req, res)=>{
let newVideo = req.body;
//sends new video information to the API
    request({
        method: 'POST',
        url: 'https://proofapi.herokuapp.com/videos',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token':  `${newVideo.auth_token}`
        },
        body: `{  \"title\": \"${newVideo.title}\",  \"url\": \"${newVideo.url}\",  \"slug\": \"${newVideo.slug}\"}`
    }, function (error, response, body) {
        console.log(error);
        
        console.log('Status:', response.statusCode);
        console.log('Headers:', response.headers);
        console.log('Response:', body);
        //sends information from the API back to the DOM
        res.send(body)
    })
    
})


module.exports = router;