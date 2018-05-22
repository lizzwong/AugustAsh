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
    // console.log('token:', auth_token);
    var page = 1;
    var per_page = 10;
    request({
        method: 'GET',
        url: `https://proofapi.herokuapp.com/videos/${page}&${per_page}`,
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
        res.send(body);
    })
    
})


///THIS IS ANY VOTE RELATED CRUD////

//adds a vote to a video
router.post('/videovote', (req,res)=> {
 let video = req.body;

    request({
        method: 'POST',
        url: `https://proofapi.herokuapp.com/videos/${video.video_id}/votes`,
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': `${video.auth_token}`
        },
        body: "{  \"opinion\": 1}"
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', response.headers);
        console.log('Response:', body);
        res.send(body);
    });
})

//gets votes for a video id
router.put('/videovote', (req,res)=>{
    let video = req.body;

    request({
        method: 'GET',
        url: `https://proofapi.herokuapp.com/videos/${video.video_id}/votes`,
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': `${video.auth_token}`
        }
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', response.headers);
        console.log('Response:', body);
        res.send(body);
    });
})

//get invidual vote
router.put('/singlevote', (req, res) => {
    let vote = req.body;

    request({
        method: 'GET',
        url: `https://proofapi.herokuapp.com/votes/${vote_id}`,
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': `${vote.auth_token}`
        }
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', response.headers);
        console.log('Response:', body);
        res.send(body);
    });
})

//this will delete a single vote
router.delete('/singlevote', (req, res) => {
    let vote = req.body;

    request({
        method: 'DELETE',
        url: `https://proofapi.herokuapp.com/votes/${vote_id}`,
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': `${vote.auth_token}`
        }
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', response.headers);
        console.log('Response:', body);
        res.send(body);
    });
})
///END VOTE RELATED CRUD///



///THIS IS FOR VIEW RELATED CRUD///

//adds a view to a video
router.post('/videoview', (req, res) => {
    let video = req.body;

    request({
        method: 'POST',
        url: 'https://proofapi.herokuapp.com/views',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': `${video.auth_token}`
        },
        body: `{  \"video_id\": \"${video.video_id}\"}`
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
        res.send(body)
    });
})


//gets videos views
router.put('/videoview', (req, res) => {
    let video = req.body;

    request({
        method: 'GET',
        url: `https://proofapi.herokuapp.com/videos/${video.video_id}/views`,
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': `${video.auth_token}`
        }
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', response.headers);
        console.log('Response:', body);
        res.send(body);
    });
})

//this will get a single view
router.put('/singleview', (req, res) => {
    let view = req.body;

    request({
        method: 'GET',
        url: `https://proofapi.herokuapp.com/views/${view_id}`,
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': `${view.auth_token}`
        }
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', response.headers);
        console.log('Response:', body);
        res.send(body);
    });
})


//this will delete an invididual view
router.delete('/singleview', (req, res) => {
    let view = req.body;

    request({
        method: 'DELETE',
        url: `https://proofapi.herokuapp.com/views/${view_id}`,
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': `${view.auth_token}`
        }
    }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', response.headers);
        console.log('Response:', body);
        res.send(body);
    });
})
///THIS ENDS ALL VIEW RELATED CRUD///

module.exports = router;