const mongoose = require('mongoose');

const client_model = mongoose.Schema({
    'name': {
        type: String,
        required: [true, 'Please enter the client name']
    },
    'email': {
        type: String,
        required: [true, 'Please enter the clients email.']
    },
    'phone': {
        type: String,
        required: [true, 'Please enter the clients phone number.']
    },
    'password': {
        type: String,
        required: [true, 'Please enter the password']
    }
})

module.exports = mongoose.model('client_accounts', client_model);