const mongoose = require('mongoose');

const Clothing_item_model = mongoose.Schema({
    product_name: {
        type: String,
        required: [true, 'Please enter the product name.']
    },

    product_specified_gender: {
        type: String,
        required: [true, 'Please enter the gender.']
    },

    product_price: {
        type: Number,
        required: [true, 'Please enter the price.']
    },

    product_img: {
        type: [String],
        required: [True, 'Please add the product image.']
    }
});

module.exports = mongoose.Model('clothing_items', Clothing_item_model);