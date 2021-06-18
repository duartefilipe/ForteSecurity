import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../components/head';
import { Redirect } from 'react-router';
import Imagem1 from '../img/forte_security_partners_arc.png';

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state ={
       email:'',
       senha:'',
       perfil:'',
       redirect:false,
       usuario:[],
       mgs:'',
    }


    this.login = this.login.bind(this);
  }
  login(e){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "essecookie=s%3A6l2S6RMFeX9oX0acmwegmPkQ1mtCDfET.%2FQRi8Wp4RtRTxjodKW1O5N9OsjBiIv1zXg5u%2FCEDZB0");

    var raw = JSON.stringify({"email":this.state.email,"senha":this.state.senha});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/login", requestOptions)
      .then(response => response.json())
      .then(response => {if(response === 1){
        this.setState({mgs:"Email ou senha invalidos"})
      }else{
        this.setState({usuario:response || [], redirect:true})
      }})
    .then(result => console.log(result))
      .catch(error => console.log('error', error));
      
      e.preventDefault()
    }

  render(){
    if(this.state.redirect){
      sessionStorage.setItem('@web/idUsu', this.state.usuario.idUsu);
      sessionStorage.setItem('@web/nome', this.state.usuario.nome);
      sessionStorage.setItem('@web/email', this.state.usuario.email);
      sessionStorage.setItem('@web/perfil', this.state.usuario.perfil);
      sessionStorage.setItem('@web/imagem', this.state.usuario.imagem);
      sessionStorage.setItem('@web/senha', this.state.senha);
      //sessionStorage.setItem('@web/senha', this.state.user.senha);
      return  <Redirect
                to={{
                pathname: "/empresas",                
                //state: { data: this.state.user }
                }}
            />
    }
    return (

      <React.Fragment>
      {/* 
    <div class="container mt-3 bg-dark">
        <div class="card p-3 bg-dark">
            <span class="text-success"> {this.state.mgs}</span>
        </div>
      </div>
*/}



  
  <div class="container teste" >
         
         <div class="card p-3 bg-dark">
         
         <form onSubmit={this.login} > 
             <div class="form-group">
                 <label class="text-success" for="exampleInputEmail1">Email address</label>
                 <input type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}  class="form-control bg-light p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
             </div>
             <div class="form-group">
                 <label class="text-success" for="exampleInputPassword1">Password</label>
                 <input type="password" class="form-control bg-light" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}  id="exampleInputPassword1" placeholder="Password"/>
             </div>
 
             <button type="submit" class="btn btn-success">Login</button>
         </form>
         </div>
     </div>


{/* comentario    */}
      </React.Fragment>
    );
  }
  
}

/**import React, { Component } from 'react';
import '../App.css';
import '../css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from '../components/head';
import Footer from '../components/footer';
import { Redirect } from 'react-router';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      senha2: '',
      redirect: false,
      usuario: [],
      mgs: '',
    }


    this.login = this.login.bind(this);
    this.cadastrar = this.cadastrar.bind(this);
  }



  cadastrar(e) {
    if (this.state.senha !== this.state.senha2) {
      alert("Informe duas senhas iguais")
    } else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({ "nome": this.state.nome, "email": this.state.email, "senha": this.state.senha, "perfil": 1, "imagem": "https://e-tinet.com/wp-content/uploads/2020/02/adicionar-usuario-no-linux.jpg" });
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:8080/registrar", requestOptions)
        .then(response => response.json())
        .then(response => {
          if (response == 'Já existe esse email') {
            alert('Já existe esse email cadastrado!!!')
          } else {
            this.setState({ redirect: true })
            alert('Cadastrado com sucesso!!!')

          }
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    e.preventDefault()

  }

  login(e) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "essecookie=s%3A6l2S6RMFeX9oX0acmwegmPkQ1mtCDfET.%2FQRi8Wp4RtRTxjodKW1O5N9OsjBiIv1zXg5u%2FCEDZB0");

    var raw = JSON.stringify({ "email": this.state.email, "senha": this.state.senha });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/login", requestOptions)
      .then(response => response.json())
      .then(response => {
        if (response === 1) {
          this.setState({ mgs: "Email ou senha invalidos" })
        } else {
          this.setState({ user: response || [], redirect: true })
        }
      })

      .catch(error => console.log('error', error));

    e.preventDefault()
  }

  render() {
    if (this.state.redirect) {
      sessionStorage.setItem('@web/id', this.state.user.idUsu);
      sessionStorage.setItem('@web/nome', this.state.user.nome);
      sessionStorage.setItem('@web/email', this.state.user.email);
      sessionStorage.setItem('@web/imagem', this.state.user.imagem);
      sessionStorage.setItem('@web/senha', this.state.senha)
      //sessionStorage.setItem('@web/senha', this.state.user.senha);
      return <Redirect
        to={{
          pathname: "/forum",
          //state: { data: this.state.user }
        }}
      />
    }
    return (
      <React.Fragment>
        <Head />
        <div class="d-flex justify-content-center">
          <div class="row">
            <div class="col-md-6 mx-auto p-0">
              <div class="card">
                <div class="login-box">
                  <div class="login-snip">
                    <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
                    <label for="tab-1" class="tab">Login</label>
                    <input id="tab-2" type="radio" name="tab" class="sign-up" />
                    <label for="tab-2" class="tab">Sign Up</label>
                    <div class="login-space">
                      <form onSubmit={this.login}>
                        <div class="login">
                          <div class="group">
                            <label for="user" class="label">Username</label>
                            <input value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} id="email" name="email" type="text" class="input" placeholder="Enter your email" /> </div>
                          <div class="group">
                            <label for="pass" class="label">Password</label>
                            <input value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} id="senha" name="senha" type="password" class="input" data-type="password" placeholder="Enter your password" /> </div>
                          <div class="group"> <input type="submit" class="button" value="Sign In" />
                          </div>
                          <div class="hr"></div>
                        </div>
                      </form>
                      <form onSubmit={this.cadastrar}>
                        <div class="sign-up-form">
                          <div class="group">
                            <label for="user" class="label">Nome</label>
                            <input value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })} id="nome" name="nome" type="text" class="input" placeholder="Create your Username" /> </div>
                          <div class="group">
                            <div class="group">
                              <label for="user" class="label">email</label>
                              <input value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} id="email" name="email" type="text" class="input" placeholder="Create your Username" /> </div>
                            <div class="group">
                              <label for="pass" class="label">Senha</label>
                              <input value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} id="senha" name="senha" type="password" class="input" data-type="password" placeholder="Create your password" /> </div>
                            <div class="group">
                              <label for="pass" class="label">Repeta a Senha</label>
                              <input value={this.state.senha2} onChange={(e) => this.setState({ senha2: e.target.value })} id="senha2" name="senha2" type="password" class="input" data-type="password" placeholder="Repeat your password" /> </div>
                            <div class="group">
                              <label for="pass" class="label">Email Address</label>
                              <input id="pass" type="text" class="input" placeholder="Enter your email address" />
                            </div>
                            <div class="group">
                              <input type="submit" class="button" value="Sign Up" />
                            </div>
                            </div>
                          </div>
                      </form>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <Footer />
      </React.Fragment>
    );
  }
} */