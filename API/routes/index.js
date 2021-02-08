const express = require('express');
const router = express.Router();
const pacienteControllers = require('../controllers/pacienteControllers');

module.exports = function(){

    //agregar pacientes via POST
    router.post('/pacientes', 
        pacienteControllers.nuevoCliente
    );

    //obtener todos los registros
    router.get('/pacientes',
        pacienteControllers.obtenerPacientes
    );

    //obtener unico regiatro
    router.get('/pacientes/:id',
        pacienteControllers.obtenerOnePaciente
    );

    //actualizar un registro
    router.put('/pacientes/:id',
        pacienteControllers.actualizarPaciente
    );

    //eliminar un registro
    router.delete('/pacientes/:id', 
        pacienteControllers.eliminarPaciente
    );





    return router;
}