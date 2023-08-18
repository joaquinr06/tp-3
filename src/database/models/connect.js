const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/loDePipo')
        console.log('conectado a la DB');
    } catch (error) {
        console.log(error);
    }
}
