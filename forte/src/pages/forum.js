 
import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head2 from '../components/head2';
import Footer from '../components/footer';

export default class Forum extends Component{
    constructor(props){
        super(props);
        this.state ={
            email: sessionStorage.getItem('@web/email'),
            imagem: sessionStorage.getItem('@web/imagem'),
            nome: sessionStorage.getItem('@web/nome'),
            perfil: sessionStorage.getItem('@web/perfil'),
            senha: sessionStorage.getItem('@web/senha'),
        }
      }
  
  render(){
    return (

      <React.Fragment>
      <Head2/>
     <div class="container mt-3 bg-dark">
         <h1 class="text-light">Nome: {this.state.nome}</h1>
         <h1 class="text-light">Email: {this.state.email}</h1>
         <h1 class="text-light">Perfil: {this.state.perfil}</h1>
         <img class="d-block w-100 image-fluid" src={this.state.imagem}/>
     </div>
      <Footer/>
      </React.Fragment>
    );
  }
  
}
