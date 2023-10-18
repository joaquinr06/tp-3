const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number },
    description: { type: String, maxlength: 240 },
    category: { type: String },
    image: { type: String },
    colors: [String]
},{
    timestamps: true
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;