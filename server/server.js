const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db_connect = require('./essentials/db_connect');
const Client = require('./models/users/client/client');

server = express();
server.use(cors()); 
server.use(bodyParser.json({limit: '4mb'})); 

db_connect();

server.listen(4000, () => {
    console.log("Server UP");
});


server.post('/api/verify-customer', async(req, res) => {
    const response_from_db = await Client.find({"email": req.body.email, "password": req.body.password});
    res.json(response_from_db);
});