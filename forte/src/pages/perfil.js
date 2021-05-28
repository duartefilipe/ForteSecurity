 
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
        }
      }
  
  render(){
    return (

      <React.Fragment>
      <Head2/>
     <div class="container mt-3 bg-dark">
         <h1 class="text-light">Bem vindo:  {this.state.nome}</h1>
        <div class="row">
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Nome</label>
    <input type="text" value={this.state.nome} class="form-control" id="nome" aria-describedby="nome" placeholder="Nome"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" value={this.state.email} class="form-control" id="email" aria-describedby="email" placeholder="email"/>
  </div>
   
  <button type="submit" class="mt-3 mb-3 btn btn-primary">Submit</button>
</form>

<form class="ml-3" >
            <div class="btn-group " role="group" aria-label="Exemplo básico">
                <div class="wrap-input100 validate-input" data-validate="Enter imagem">
                    <span class="btn-show-pass">
                      <i class="zmdi zmdi-eye"></i>
                    </span>
                    <label class="btn btn-secondary" style={{fontSize:12, height:45}}>
                                      Selecion uma Imagem
                      <i class="fas fa-cloud-upload-alt ">
                          <input type="file" name="file" id="file" accept="image/x-png,image/gif,image/jpeg" hidden/>
                      </i>  
                    </label>
                  </div>
                <div class="row d-flex justify-content-center">
                      <div class="form-group">
                          <div class="col-sm-12">
                            <button type="submit" style={{fontSize:12, height:45}} class="btn btn-success ml-3">Mudar Imagem</button>
                          </div>
                        </div>
                    </div>
                  </div>
          </form>

        </div>
     </div>
      <Footer/>
      </React.Fragment>
    );
  }
  
}
