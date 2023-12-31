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
                image: req.file.filename,
                colors: [req.body.colors]
            }
            const productDB = await Product.create(product)
            res.status(201).json(productDB)
        } catch (error) {
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
    },
    buscador: async (req, res) => {
        console.log(req.query.name);
        if (!req.query.name) {
            return res.status(404).json({ message: "product not found" })
        }
        const product = await Product.find({ "name": { $regex: '.*' + req.query.name + '.*' } });
        res.json(product);
    }
}
module.exports = productController;