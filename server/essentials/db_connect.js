const mongoose = require('mongoose');

const Connect_db = async() => {
    await mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce-app").catch(err => (console.log(err)));
    console.log('DB Connected');
}

module.exports = Connect_db;