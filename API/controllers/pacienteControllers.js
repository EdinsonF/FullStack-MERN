const Paciente = require('../Models/Paciente.js');
//cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    //TODO : Insertar en la base de datos
    const paciente = new Paciente(req.body);
    
    try {       
        await paciente.save();
        res.json({ mensaje : 'Paciente agregado correctamente'});

    } catch (error) {
        console.log(error);
        next();
    }
   
}

//obtener registros
exports.obtenerPacientes = async (req, res, next) => {

    try {
        const pacientes = await Paciente.find({}); 
        res.json(pacientes);
    } catch (error) {
        console.log(error);
        next();
    }
    

}

//obtener un solo registro
exports.obtenerOnePaciente = async (req, res, next) => {
    
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}


//actualizar paciente
exports.actualizarPaciente = async (req, res, next) => {

    try {
        const paciente = await Paciente.findOneAndUpdate({_id: req.params.id}, req.body,{
            new: true
        });
        console.log(paciente);
        res.json({mensaje: "Paciente actualizado"});
    } catch (error) {
        console.log(error);
        next();
    }

}


//eliminar paciente
exports.eliminarPaciente = async (req,res, next) => {
    
    try{
        //console.log("modelo eliminar");
        //console.log(req.params.id);
    await Paciente.findByIdAndDelete(req.params.id);
        res.json({mensaje: "Paciente Elimindo"});
    }catch(error){
        console.log(error);
        next();
    }

}