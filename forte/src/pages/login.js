import React,{Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from '../components/head';
import Footer from '../components/footer';
import { Redirect } from 'react-router';


export default class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
           email:'',
           senha:'',
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
            this.setState({user:response || [], redirect:true})
          }})
        
          .catch(error => console.log('error', error));
          
          e.preventDefault()
        }
    
      render(){
        if(this.state.redirect){
          sessionStorage.setItem('@web/id', this.state.user.idUsu);
          sessionStorage.setItem('@web/nome', this.state.user.nome);
          sessionStorage.setItem('@web/email', this.state.user.email);
          sessionStorage.setItem('@web/imagem', this.state.user.imagem);
          sessionStorage.setItem('@web/senha', this.state.senha)
          //sessionStorage.setItem('@web/senha', this.state.user.senha);
          return  <Redirect
                    to={{
                    pathname: "/forum",                
                    //state: { data: this.state.user }
                    }}
                />
        }
    return(
        <React.Fragment>
        <Head/>

        <div class="container mt-3 bg-dark">
            <div class="card p-3 bg-dark">
            <form class="bg-dark" onSubmit={this.login}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">Email</label>
                    <input value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} type="text" class="form-control bg-success p-2" id="email" placeholder="Informe um email" name="email"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label text-success">Password</label>
                    <input value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} type="password" class="form-control bg-success p-2" id="senha" placeholder="Informe uma senha" name="senha"/>
                </div>
                
                <button type="submit" class="btn btn-success">Login</button>
                </form>
            </div>
        </div>
        
        <Footer/>
        </React.Fragment>
    );
}
}