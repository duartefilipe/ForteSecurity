import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import inventarioLug from './pages/inventarioLug';
import home from './pages/home';
import login from './pages/login';
import registrar from './pages/registrar';
import empresas from './pages/empresas';
import perfil from './pages/perfil';
import criarEmpresa from './pages/criarEmpresa';
import criarInventario from './pages/criarInventario';
import perfilEmpresa from './pages/perfilEmpresa';
import criarLugar from './pages/criarLugar';


function route(){
    return(
        <BrowserRouter>
            {/* COMENTÁRIO JSX <Route path="/" exact component ={home}/>*/}
            <Route path="/" exact component ={login}/>
            <Route path="/inventarioLug" component ={inventarioLug}/>
            <Route path="/criarInventario" component ={criarInventario}/>
            <Route path="/login" component ={login}/>
            <Route path="/registrar" component ={registrar}/>
            <Route path="/empresas" component ={empresas}/>
            <Route path="/perfil" component ={perfil}/>
            <Route path="/criarEmpresa" component ={criarEmpresa}/>
            <Route path="/criarLugar" component ={criarLugar}/>
            <Route path="/perfilEmpresa" component ={perfilEmpresa}/>
        </BrowserRouter>
    )
}
export default route;