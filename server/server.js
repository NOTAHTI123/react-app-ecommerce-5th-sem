const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db_connect = require('./essentials/db_connect');
const Client = require('./models/users/client/client');
const client = require('./models/users/client/client');

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

server.post('/api/create-customer-account', async(req, res) => {
    const confirm_exist = await Client.find({"email": req.body.email})
    confirm_exist_string = await JSON.stringify(confirm_exist);

    
    if(confirm_exist_string == '[]') {
        // create
        let client_account = new client();
        client_account.name = req.body.username;
        client_account.email = req.body.email;
        client_account.phone = req.body.phone;
        client_account.password = req.body.password;

        await client_account.save();
        res.json("customer_account_created");
    }
    else {
        res.json("customer_account_already_exists_error");
    }
}) 