const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 8888;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('server/public'));

const dotenv = require('dotenv').config();

let proofRouter = require('./routers/proof-router');
app.use('/proof', proofRouter)


app.listen(PORT, function () {
    console.log('Listening on port:', PORT);

})