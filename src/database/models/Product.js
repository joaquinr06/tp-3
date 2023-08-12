const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        Type: String,
        required: true
    },
    price: {
        Type: Number,
        required: true
    },
    discount: {
        Type: Number,
        required: true
    },
    description: {
        Type: String,
        required: true
    },
    category: {
        Type: String,
        required: true
    },
    image: {
        Type: String,
        required: true
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;