const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db_connect = require('./essentials/db_connect');

server = express();
server.use(cors()); 
server.use(bodyParser.json({limit: '4mb'})); 

db_connect();

server.listen(4000, () => {
    console.log("Server UP");
});


server.get('/api/get-hello', async(req, res) => {
    console.log("Reached");
    res.json("Ok");
});