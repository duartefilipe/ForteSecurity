 
import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../components/head';
import Footer from '../components/footer';

export default class Forum extends Component{
    constructor(props){
        super(props);
        this.state ={
            email: sessionStorage.getItem('@web/email'),
            imagem: sessionStorage.getItem('@web/imagem'),
            nome: sessionStorage.getItem('@web/nome'),
            senha: sessionStorage.getItem('@web/senha'),
        }
      }
  
  render(){
    return (

      <React.Fragment>
      <Head/>
     <div class="container mt-3 bg-dark">
         <h1 class="text-light">{this.state.email}</h1>
         <img class="d-block w-100 image-fluid" src={this.state.imagem}/>
         
     </div>
      <Footer/>
      </React.Fragment>
    );
  }
  
}
