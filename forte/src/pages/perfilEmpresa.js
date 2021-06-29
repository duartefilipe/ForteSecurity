
import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head2 from '../components/head2';
import Footer from '../components/footer';
import {Redirect} from "react-router";

export default class Empresas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: sessionStorage.getItem('@web/email'),
      imagem: sessionStorage.getItem('@web/imagem'),
      nome: sessionStorage.getItem('@web/nome'),
      perfil: sessionStorage.getItem('@web/perfil'),
      idUsu: sessionStorage.getItem('@web/idUsu'),
      senha: sessionStorage.getItem('@web/senha'),
      to: '',
      empresa: [],
      lugar: [],
      redirect:false
    }
    this.carregaEmpresa = this.carregaEmpresa.bind(this);
    this.carregaLugares = this.carregaLugares.bind(this);
    this.deleteLugar = this.deleteLugar.bind(this);
    this.exibe = this.exibe.bind(this);
  }

  componentDidMount() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    this.state.to = url.searchParams.get("c");
    this.carregaEmpresa()
    this.carregaLugares()
  }

  carregaLugares() {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "essecookie=s%3AynHuiNRC5GsarsqBctbtcrzviYBysJGx.tDpLc%2FYbaf4Rl4GLzMhmnZtRLnphipQPdlXpRKMti5s");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch("http://localhost:8080/lugares/" + this.state.to, requestOptions)
        .then(response => response.json())
        .then(response => { this.setState({ lugar: response || [] }) })
        .catch(error => console.log('error', error));
    console.log("meu teste")
    console.log(this.state.result)
  }

  carregaEmpresa() {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "essecookie=s%3AqjKsVc4A6DzFOFAlvbRjTxv5NWWXK90Q.cDGt12Jc0zvXck7rMDd%2B4uy2puDekSGzbaBv%2BLSKkmo");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/empresas/" + this.state.to, requestOptions)
        .then(response => response.json())
        .then(response => { this.setState({ empresa: response || [] }) })
        .catch(error => console.log('error', error));
  }

  deleteLugar(idLug) {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "essecookie=s%3AMAWCoLATixdDdNqaYf9OEvphTG1jxf3j.x4m2QPja7wjL8ujYYRO3ShQDT3gZEmAAizkJCZGAjFY");

    var formdata = new FormData();

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/deleteLugar/"+idLug, requestOptions)
        .then(response =>{
          this.setState({redirect:true})
          alert('Deletado com sucesso!!!')
          window.location.replace('/empresas');
        })
  }

  exibe(v) {
    if (v != undefined) {
      return (
          <p style={{ fontSize: 12, color: 'green' }}>Perfil: {this.state.empresa.perfil}</p>
      )
    }
  }

  render() {
    if(this.state.redirect === true){
      return  <Redirect to={{pathname: "/perfilEmpresa?c="+this.state.to}}/>
    }
    return (

        <React.Fragment>
          <Head2 />

          <div class="container mt-3 bg-light">
            <div class="row">
              <p>{this.state.empresa.razaosocial} |</p>
              <p>{this.state.empresa.cnpj} | </p>
              <p>{this.state.empresa.email}</p>
              <p>{this.state.empresa.perfil}</p>
            </div>
          </div>
          <br /><br />

          <div class="container">
            <div class="row">
              <h3>Lugares da empresa: {this.state.empresa.razaosocial}</h3>
            </div>
            <div class="row">
              <table class="table table-responsive ">
                <thead>
                <tr>
                  <th scope="col">Delete</th>
                  <th scope="col">Update</th>
                  {/*<th scope="col">idEmp</th>
                <th scope="col">idLug</th> */}
                  <th scope="col">LugarNome</th>
                  <th scope="col">Equipe</th>
                  <th scope="col">responsavel</th>
                  <th scope="col">email</th>
                  <th scope="col">perfis</th>
                  <th scope="col">fonte_acesso</th>
                </tr>

                </thead>

                {this.state.lugar.map((result,a) =>
                    <tbody style={{ fontSize: 18, fontWeight: 1000, color: 'black' }}>
                    <tr>
                      <td>
                        <button type="submit" onClick={() => this.deleteLugar(result.idLug)}>delete</button>
                      </td>
                      <td>
                        <a class="ml-2" href="#" style={{ color: 'black' }} >Alterar</a>
                      </td>
                      {/*<td>{result.idEmp}</td>
              <td>{result.idLug}</td>*/}
                      <td><a class="ml-2" href={"http://localhost:3000/inventarioLug?c="+result.idLug} style={{ color: 'black' }} >{result.lugarNome}</a></td>
                      <td>{result.equipe}</td>
                      <td>{result.responsavel}</td>
                      <td>{result.email}</td>
                      <td>{result.perfis}</td>
                      <td>{result.fonte_acesso}</td>
                      <i class="fas fa-trash-alt"></i>

                    </tr>

                    </tbody>
                )}
              </table>
            </div>
          </div>

          <Footer />
        </React.Fragment>
    );
  }

}
