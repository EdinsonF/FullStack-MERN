const mongoose = require('mongoose');

const DB = 'mongodb://localhost/veterinaria';

mongoose.connect(DB)
    .then(db => console.log('Base de Datos Conectada'))
    .catch(err => console.log(err));

    module.exports = mongoose;
