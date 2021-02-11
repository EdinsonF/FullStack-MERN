import React,{useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import clienteAxios from './config/axios';
//Componentes
import Paciente from './Components/Paciente';
import CrearCita from './Components/CrearCita';
import ObtenerCita from './Components/ObtenerCita';


function App() {
  
    //Estado de la aplocacion
    const [citas, guardarCitas] = useState([]);

    useEffect( () => {
      const consultarAPI = () =>{
        clienteAxios.get('/pacientes')
          .then(respuesta => {
            //colocar en el State
            //console.log(respuesta.data);
            guardarCitas(respuesta.data);
          })
          .catch(error => {
            console.log(error)
          })
    }

    consultarAPI();
  }, []);
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ () =>  <Paciente citas={citas}/>}/>

        <Route exact path="/create" component={CrearCita}/>

        <Route exact path="/cita/:id" component={ObtenerCita}/>


      </Switch>
    </Router>
  );
}

export default App;
