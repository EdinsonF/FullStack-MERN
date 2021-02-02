//importar express
const express = require('express');

//crear el servidor
const app = express();


//puerto y arranque
app.listen(4000, () =>{
    console.log("Servidor Iniciado");
});