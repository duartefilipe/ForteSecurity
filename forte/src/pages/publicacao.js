import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from '../components/head';
import Footer from '../components/footer';

function Registrar(){
    return(
        <React.Fragment>
        <Head/>

        <div class="container mt-3 bg-dark">
            <div class="card p-3 bg-dark">
            <form class="bg-dark">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">Titulo da publicação</label>
                    <input type="email" class="form-control bg-success p-2" id="exampleInputEmail1" name="" aria-describedby="emailHelp"/>
                   
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label text-success">Texto</label>
                    <textarea type="text" rows="3" class="form-control bg-success p-2" id="exampleInputPassword1"/>
                </div>
              
                <button type="submit" class="btn btn-success">Publicar</button>
                </form>
            </div>
        </div>
        
        <Footer/>
        </React.Fragment>
    );
}

export default Registrar;