//importar express
const express = require('express');
//conectar base de datos
const mongoose = require('./database.js');

//importar cors -> para validar nuestra api propia
const cors = require('cors');
//rutas
const routes = require('./routes');
const bodyParser = require('body-parser');




//crear el servidor
const app = express();

const port = process.env.PORT || 3000
//habilitar cors con permiso solo pa nuestro dominio
/* const listaBlanca = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        //console.log(origin);
        const existe = listaBlanca.some(dominio => dominio === origin);
        if(existe){
            callback(null, true);
        } else {
            callback(new Error('No permitido por Cors'));
        }
    }
} */

app.use(cors());
//finaliza el cors
app.get('/prueba', (req, res) => {
    res.send("Esta funcionando");
})
//habilitar el body-parser // middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//habilitar rutas
app.use('/', routes());

//puerto y arranque
app.listen(port, () =>{
    console.log("Servidor Iniciado en el puerto", port);
});