import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Sidebar from "./Components/Sidebar";

import Home from './pages/Home'
import Despacho from './pages/Despacho'
import Historial from './pages/Historial'
import Perfil from './pages/Perfil'
import Inventario from './pages/Inventario'
import Usuarios from './pages/Usuarios'
import CrearUsuario from './Components/crearUsuario'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App" style={{display: 'flex'}}>
      <Router>
        <Sidebar style={{flex: '1 auto', marginRight: '10px'}}/>
        <Routes>
            <Route exact path='/'  element={<Home/>}/> 
            <Route path='/home'  element={<Home/>}/> 
            <Route path='/despacho'  element={<Despacho/>}/> 
            <Route path='/perfil'  element={<Perfil/>}/> 
            <Route path='/inventario'  element={<Inventario/>}/> 
            <Route path='/historial'  element={<Historial/>}/> 
            <Route path='/usuarios' element={<Usuarios/>}/>
            <Route path='/crearUsuario' element={<CrearUsuario/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
