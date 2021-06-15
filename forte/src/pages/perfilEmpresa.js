 
import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head2 from '../components/head2';
import Footer from '../components/footer';

export default class Empresas extends Component{
    constructor(props){
        super(props);
        this.state ={
            email: sessionStorage.getItem('@web/email'),
            imagem: sessionStorage.getItem('@web/imagem'),
            nome: sessionStorage.getItem('@web/nome'),
            perfil: sessionStorage.getItem('@web/perfil'),
            idUsu: sessionStorage.getItem('@web/idUsu'),
            senha: sessionStorage.getItem('@web/senha'),
            to:'',
            empresa: [],
            lugar: []
        }
        this.carregaEmpresa = this.carregaEmpresa.bind(this);
        this.carregaLugares = this.carregaLugares.bind(this);
        this.exibe = this.exibe.bind(this);
      }

      componentDidMount(){
        var url_string = window.location.href;
        var url = new URL(url_string);
        this.state.to = url.searchParams.get("c");

        this.carregaEmpresa()
        this.carregaLugares()
    }

    carregaLugares(){
      var myHeaders = new Headers();
      myHeaders.append("Cookie", "essecookie=s%3AynHuiNRC5GsarsqBctbtcrzviYBysJGx.tDpLc%2FYbaf4Rl4GLzMhmnZtRLnphipQPdlXpRKMti5s");
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      fetch("http://localhost:8080/lugares/"+this.state.to, requestOptions)
        .then(response => response.json())
        .then(response => {this.setState({lugar:response || []})})
        .catch(error => console.log('error', error));
    }

    carregaEmpresa(){
      var myHeaders = new Headers();
      myHeaders.append("Cookie", "essecookie=s%3AqjKsVc4A6DzFOFAlvbRjTxv5NWWXK90Q.cDGt12Jc0zvXck7rMDd%2B4uy2puDekSGzbaBv%2BLSKkmo");

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("http://localhost:8080/empresas/"+this.state.to, requestOptions)
        .then(response => response.json())
        .then(response => {this.setState({empresa:response || []})})
        .catch(error => console.log('error', error));
    }

    exibe(v){
      if(v != undefined){
        return(
          <p style={{fontSize:12 , color:'green'}}>Perfil: {this.state.empresa.perfil}</p>
        )
      }
    }
  
  render(){
    return (

      <React.Fragment>
      <Head2/>

      <div class="container bg-dar">
        <a class="btn btn-success ml-4 mt-3" href="/criarLugar">Adicionar Lugar</a>
      </div>

     <div class="container mt-3 bg-dark">
         <div class="container mt-3 bg-dark row">
              <p style={{fontSize:12 , color:'green', marginRight:5}}>{this.state.empresa.razaosocial} |</p>
              <p style={{fontSize:12 , color:'green', marginRight:5}}>{this.state.empresa.cnpj} | </p>
              <p style={{fontSize:12 , color:'green', marginRight:5}}>{this.state.empresa.email}</p>
              {this.exibe(this.state.empresa.perfil)}{/*esse metodo verifica se o cmapo é nulo, se ele nao ofr vai exibi, caso seja nulo nao vai mostrar nada */}
         </div>
     </div>
<br/><br/>

     <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">LugarNome</th>
            <th scope="col">Equipe</th>
            <th scope="col">responsavel</th>
            <th scope="col">email</th>
            <th scope="col">perfis</th>
            <th scope="col">fonte_acesso</th>
          </tr>
         
        </thead>
        
        {this.state.lugar.map(result =>(
          <tbody style={{fontSize:18, fontWeight:1000, color:'black'}}>
            <tr>
              <td><a class="ml-2" href="#" style={{color:'black'}} >{result.lugarNome}</a></td>
              <td>{result.equipe}</td>
              <td>{result.responsavel}</td>
              <td>{result.email}</td>
              <td>{result.perfis}</td>
              <td>{result.fonte_acesso}</td>
              <i class="fas fa-trash-alt"></i>
        
            </tr>
           
          </tbody>
          ))}
        </table>
        </div>
        
      <Footer/>
      </React.Fragment>
    );
  }
  
}
