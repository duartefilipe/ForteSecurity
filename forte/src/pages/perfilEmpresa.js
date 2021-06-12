 
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
        }
        this.carregaEmpresa = this.carregaEmpresa.bind(this);
        this.exibe = this.exibe.bind(this);
      }

      componentDidMount(){
        var url_string = window.location.href;
        var url = new URL(url_string);
        this.state.to = url.searchParams.get("c");

        this.carregaEmpresa()
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
     <div class="container mt-3 bg-dark">


         <div class="container mt-3 bg-dark">
              <p style={{fontSize:12 , color:'green'}}>{this.state.empresa.razaosocial}</p>
              <p style={{fontSize:12 , color:'green'}}>{this.state.empresa.cnpj}</p>
              <p style={{fontSize:12 , color:'green'}}>{this.state.empresa.email}</p>
              {this.exibe(this.state.empresa.perfil)}{/*esse metodo verifica se o cmapo é nulo, se ele nao ofr vai exibi, caso seja nulo nao vai mostrar nada */}
         </div>
          
     </div>
      <Footer/>
      </React.Fragment>
    );
  }
  
}
