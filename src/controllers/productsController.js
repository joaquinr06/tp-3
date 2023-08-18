const Product = require('../database/models/Product');



const productController = {
    crear: async (req, res) => {
        try {
            let product = {
                name: req.body.name,
                price: req.body.price,
                discount: req.body.discount,
                category: req.body.category,
                description: req.body.description,
                Image: req.file.filename,
                colors: [req.body.colors]
            }
            const productDB = await Product.create(product)
            res.status(201).json(productDB)
        } catch (error) {
            if (error.errors.description) {
                return res.status(400).json('240 son los carácteres máximos permitidos')
            }
            res.status(500).json(error)
        }
    },
    update: async (req, res) => {
        try {
            const productUpdate = await Product.findByIdAndUpdate(req.params.id, req.body);
            return res.status(200).json(productUpdate);
        } catch (error) {
            console.log(error);
        }
    },
    listar: async (req, res) => {
        const products = await Product.find({});
        res.status(200).json(products);
    },
    id: async (req, res) => {
        try {
            const productId = await Product.findById(req.params.id);
            return res.json(productId);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            const productDelete = await Product.findByIdAndDelete(req.params.id, req.body);
            return res.status(200).json(productDelete);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = productController;