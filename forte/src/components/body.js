import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagem1 from '../img/alcatraz.jpg';

function Body(){
    return(
        <div class="container-md bg-dark" style={{height: '85vh'}}>
            <h1 class="text-success text-center">Maior Forte de segurança</h1>
            <img class="img-fluid p-3" alt="Imagem responsiva" style={{ height: '60vh', width: '100%'}} src={Imagem1}/>
        </div>
    );
}

export default Body;