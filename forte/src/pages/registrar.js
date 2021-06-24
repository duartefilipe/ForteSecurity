import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from '../components/head';
import Footer from '../components/footer';
import { Redirect } from 'react-router';

export default class Registrar extends Component{

    constructor(props){
        super(props);
        this.state ={
            nome:'',
            email:'',
            perfil:'',
            senha:'',
            senha2:'',
            redirect:false
        }

        this.cadastrar = this.cadastrar.bind(this);

    }
    cadastrar(e){
        if(this.state.senha !== this.state.senha2){
            alert("Informe duas senhas iguais")
        }else{
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
      
            var raw = JSON.stringify({
                "nome":this.state.nome,
                "email":this.state.email,
                "senha":this.state.senha,
                "perfil":1, 
                "imagem":"https://www.diaadiaarapongas.com.br/userfiles/usuario_classificadoss/usuario.jpg"});

            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };
      
            fetch("http://localhost:8080/registrar", requestOptions)
              .then(response => response.json())
              .then(response =>{
                if(response == 'Já existe esse email'){
                    alert('Já existe esse email cadastrado!!!')
                }else{
                    this.setState({redirect:true})
                    alert('Cadastrado com sucesso!!!')

                }
            })
              .then(result => console.log(result))
              .catch(error => console.log('error', error));
        }

        e.preventDefault()

    }

render(){
    if(this.state.redirect === true){
        return  <Redirect to={{pathname: "/login"}}/>
    }
    return(
        <React.Fragment>
        <Head/>

        <div class="container mt-3 bg-dark">
            <div class="card p-3 bg-dark">
            <form class="bg-dark" onSubmit={this.cadastrar}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">Nome</label>
                    <input value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})} type="text" class="form-control bg-success p-2" id="nome" placeholder="Informe um nome" name="nome"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">Email</label>
                    <input value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} type="text" class="form-control bg-success p-2" id="email" placeholder="Informe um email" name="email"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">Senha</label>
                    <input value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} type="password" class="form-control bg-success p-2" id="senha" placeholder="Informe uma senha" name="senha"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">Repita a Senha</label>
                    <input value={this.state.senha2} onChange={(e) => this.setState({senha2: e.target.value})} type="password" class="form-control bg-success p-2" id="senha2" placeholder="Repita a senha informada" name="senha2"/>
                </div>
                <button type="submit" class="btn btn-success">Registrar</button>
                </form>
            </div>
        </div>
        
        <Footer/>
        </React.Fragment>
    );
}
}