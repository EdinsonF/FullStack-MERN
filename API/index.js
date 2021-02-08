//importar express
const express = require('express');
//conectar base de datos
const mongoose = require('./database.js');
//rutas
const routes = require('./routes');
const bodyParser = require('body-parser');

//crear el servidor
const app = express();

//habilitar el body-parser // middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//habilitar rutas
app.use('/', routes());

//puerto y arranque
app.listen(4000, () =>{
    console.log("Servidor Iniciado");
});