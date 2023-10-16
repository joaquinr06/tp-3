const path = require('path');
const express = require('express');
const app = express();
const home = require('./routes/homeRoute');
const product = require('./routes/productsRoute');
const error = require('./middlewares/error');
const mongodb = require('./database/models/connect');
const cors = require('cors');


/* Base de datos */
//const mongodb = 'mongodb://localhost:27017/loDePipo'
mongodb();



/* Configuraciones de la app */
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

/* Rutas */
app.use('/', home);
app.use('/products', product);

/* handle error */
app.use(error);

/* Server */
const puerto = 3001;
app.listen(puerto, () => console.log(`Servidor andando joya en el puerto ${puerto}`));