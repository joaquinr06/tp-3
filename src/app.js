const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const home = require('./routes/homeRoute');
const product = require('./routes/productsRoute');
const error = require('./middlewares/error');

/* Base de datos */
//const mongodb = 'mongodb://localhost:27017/loDePipo'

mongoose.connect('mongodb://127.0.0.1:27017/loDePipo')
    .then(() => console.log('Conectado a la db'))
    .catch(e => console.log('error'));

/* Configuraciones de la app */
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Rutas */
app.use('/', home);
app.use('/products', product)

/* handle error */
app.use(error);

/* Server */
app.listen(3000, () => console.log('Server andando joya'));