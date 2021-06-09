 
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
            idUsu: sessionStorage.getItem('@web/idUsu'),
            senha: sessionStorage.getItem('@web/senha'),
            empresa: []
        }
        this.carregaEmpresas = this.carregaEmpresas.bind(this)
      }

      componentDidMount(){
        this.carregaEmpresas()
      }

      carregaEmpresas(){
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "essecookie=s%3Aoe7QJS1RVn6XCLTNT9ITYeRV6w-BVF3S.vtC04wjpCyoVv8G1Vchp1WY536RAlBlu1Wq4tM0%2Bto8");
    
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
    
        fetch("http://localhost:8080/empresasAll", requestOptions)
          .then(response => response.json())
          .then(response => {this.setState({empresa: response || []})})
          .catch(error => console.log('error', error));
      }
  
  render(){
    return (

      <React.Fragment>
      <Head2/>
      {this.state.empresa.map(result =>(
      <div class="bg-dark card text-light m-3 rounded border border-success" style={{height:60}}>
          <table>
            <td>
              <a class="ml-2" href={"http://localhost:3000/empresas?c="+result.idEmp} style={{fontSize:20, fontWeight:1000, color:'green'}}>{result.razaosocial}</a>
            </td>
            
            
          </table>
      </div>
      ))}

<a class="btn btn-success ml-4 mt-3" href="/criarEmpresa">Adicionar uma nova publicação</a>
      <Footer/>
      </React.Fragment>
    );
  }
  
}
