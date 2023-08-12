const products = require('../data/products.json')


const home = {
    lobby: (req, res) => {
        let select = products.filter(select => select.category == 'visited');
        res.json(select);
    }
}

module.exports = home
