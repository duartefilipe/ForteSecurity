import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import inventario from './pages/inventario';
import home from './pages/home';
import login from './pages/login';
import registrar from './pages/registrar';
import forum from './pages/forum';
import perfil from './pages/perfil';
import criarEmpresa from './pages/criarEmpresa';
import empresas from './pages/empresas';

function route(){
    return(
        <BrowserRouter>
            <Route path="/" exact component ={home}/>
            <Route path="/inventario" component ={inventario}/>
            <Route path="/login" component ={login}/>
            <Route path="/registrar" component ={registrar}/>
            <Route path="/forum" component ={forum}/>
            <Route path="/perfil" component ={perfil}/>
            <Route path="/criarEmpresa" component ={criarEmpresa}/>
            <Route path="/empresas" component ={empresas}/>
        </BrowserRouter>
    )
}
export default route;