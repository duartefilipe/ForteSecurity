 
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
      <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">nome</th>
            <th scope="col">CNPJ</th>
            <th scope="col">email</th>
            <th scope="col">Editar</th>
            <th scope="col">Deletar</th>
          </tr>
         
        </thead>
        
        {this.state.empresa.map(result =>(
          <tbody style={{fontSize:18, fontWeight:1000, color:'black'}}>
            <tr>
              <td><a class="ml-2" href={"http://localhost:3000/perfilEmpresa?c="+result.idEmp} style={{color:'black'}} >{result.razaosocial}</a></td>
              <td>{result.cnpj}</td>
              <td>{result.email}</td>
              <i class="fas fa-trash-alt"></i>
        
            </tr>
           
          </tbody>
          ))}
        </table>
        </div>

<a class="btn btn-success ml-4 mt-3" href="/criarEmpresa">Adicionar uma nova publicação</a>



      <Footer/>
      </React.Fragment>
    );
  }
  
}
