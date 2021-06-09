import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head2 from '../components/head2';
import Footer from '../components/footer';
import { render } from '@testing-library/react';
import { Redirect } from 'react-router';

export default class criarEmpresa extends Component{

    constructor(props){
        super(props);
        this.state ={
            razaosocial:'',
            cnpj:'',
            email:'',
            perfil:'',
            redirect:false,
            username: sessionStorage.getItem('@web/nome'),

        }
       this.InsertEmpresa = this.InsertEmpresa.bind(this)
    }

    InsertEmpresa(e){
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "essecookie=s%3AjvCtLUvFKER84oIcIqNXNEC-T0ms34Fj.9on%2BmRDwfou3rCo5bvC8YqjX4mQGdbr8MmTk%2F%2Ff3vkI");

        var formdata = new FormData();
        formdata.append("razaosocial", this.state.razaosocial);
        formdata.append("cnpj", this.state.cnpj);
        formdata.append("email", this.state.email);
        formdata.append("perfil", this.state.perfil);
        formdata.append("username", this.state.username);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/criarEmpresa", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .then(alert('inserido com sucesso'))
        .catch(error => console.log('error', error));
    }

render(){
    if(this.state.redirect === true){
        return <Redirect
        to={{
          pathname: "/forum",  
        }}
          />
      }
    return(
        <React.Fragment>
        <Head2/>

        <div class="container mt-3 bg-dark">
            <div class="card p-3 bg-dark">
            <form class="bg-dark"  onSubmit={this.InsertEmpresa}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">Razão Social</label>
                    <input value={this.state.razaosocial} onChange={(e) => this.setState({razaosocial: e.target.value})}  type="text" class="form-control p-2" id="razao_social" placeholder="Informe um razao_social" name="razao_social"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">CNPJ</label>
                    <input value={this.state.cnpj} onChange={(e) => this.setState({cnpj: e.target.value})} type="text" class="form-control p-2" id="cnpj" placeholder="Informe um cnpj" name="cnpj"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">Email</label>
                    <input value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}  type="text" class="form-control  p-2" id="email" placeholder="Informe um email" name="email"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">Perfil</label>
                    <input value={this.state.perfil} onChange={(e) => this.setState({perfil: e.target.value})} type="text" class="form-control  p-2" id="perfil" placeholder="informe o perfil" name="perfil"/>
                </div>
                <button type="submit" class="btn btn-success">Cadastrar</button>
                </form>
            </div>
        </div>
        
        <Footer/>
        </React.Fragment>
    );
}
}