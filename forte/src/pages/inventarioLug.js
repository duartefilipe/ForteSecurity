
import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head2 from '../components/head2';
import Footer from '../components/footer';
import {Redirect} from "react-router";

export default class inventarioLug extends Component {
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
      inventario: [],
      redirect:false
    }
    this.carregaEmpresa = this.carregaEmpresa.bind(this);
    this.carregaLugares = this.carregaLugares.bind(this);
    this.carregaInventario = this.carregaInventario.bind(this);
    this.exibe = this.exibe.bind(this);
  }

  componentDidMount() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    this.state.to = url.searchParams.get("c");
    this.carregaEmpresa()
    this.carregaLugares()
    this.carregaInventario()
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

  carregaInventario() {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "essecookie=s%3AOzBwaF-fxcMFqoKNpKy8WhBjuyTHbc6t.irLLwrWoNHTWQJfcwbKvt1dHIuicGMHHzlEmNw452WE");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/inventario/"+this.state.to, requestOptions)
        .then(response => response.json())
        .then(response => { this.setState({ inventario: response || [] }) })
        .catch(error => console.log('error', error));
  }

  deleteInventario(idInv) {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "essecookie=s%3AMAWCoLATixdDdNqaYf9OEvphTG1jxf3j.x4m2QPja7wjL8ujYYRO3ShQDT3gZEmAAizkJCZGAjFY");
    var formdata = new FormData();
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/deleteInventario/"+idInv, requestOptions)
        .then(response =>{
          this.setState({redirect:true})
          alert('Deletado com sucesso!!!')
          window.location.replace('/empresas');
        })
  }

  exibe(v) {
    if (v != undefined) {
      return (
          <p style={{ fontSize: 12, color: 'green' }}>lugarNome: {this.state.lugar.lugarNome}</p>
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
              <p>{this.state.email} |</p>
            </div>
          </div>
          <br /><br />

          <div class="container">
            <div class="row">
              <h3>Inventarios Lugar: {this.state.lugar.lugarNome}</h3>
            </div>
            <div class="row">
              <table class="table table-responsive ">
                <thead>
                <tr>
                  <th scope="col">Delete</th>
                  <th scope="col">Update</th>

                  <th scope="col">processo</th>
                  <th scope="col">Equipe</th>
                  <th scope="col">responsavel</th>
                  <th scope="col">email</th>
                  <th scope="col">perfis</th>
                  <th scope="col">fonte_acesso</th>
                </tr>

                </thead>

                {this.state.inventario.map((result,a) =>
                    <tbody style={{ fontSize: 18, fontWeight: 1000, color: 'black' }}>
                    <tr>
                      <td>
                        <button type="submit" onClick={() => this.deleteInventario(result.idInv)}>delete</button>

                      </td>
                      <td>
                        <a class="ml-2" href="#" style={{ color: 'black' }} >Alterar</a>
                      </td>
                      {/*<td>{result.idEmp}</td>
              <td>{result.idLug}</td>*/}
                      <td>{result.processo}</td>
                      <td>{result.lugarInventario}</td>
                      <td>{result.nomeDado}</td>
                      <td>{result.nomeSistema}</td>
                      <td>{result.chave}</td>
                      <td>{result.finalidade}</td>
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
