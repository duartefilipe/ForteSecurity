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
            to:'',
            empresa: [],
            lugar: []
        }
       
        this.carregaInventario = this.carregaInventario.bind(this);

      }

      componentDidMount(){
        var url_string = window.location.href;
        var url = new URL(url_string);
        this.state.to = url.searchParams.get("c");

        this.carregaInventario()
    }

    carregaInventario(){
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "essecookie=s%3AqjKsVc4A6DzFOFAlvbRjTxv5NWWXK90Q.cDGt12Jc0zvXck7rMDd%2B4uy2puDekSGzbaBv%2BLSKkmo");
  
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
  
        fetch("http://localhost:8080/inventario/"+this.state.to, requestOptions)
          .then(response => response.json())
          .then(response => {this.setState({empresa:response || []})})
          .catch(error => console.log('error', error));
      }

render(){
    return (

      <React.Fragment>
        <div class=' container bg-dark' style={{height: '85vh'}}>
            <h1 class='text-success'>Inventario!!!</h1>
        </div>

      <Footer/>
      </React.Fragment>
    );
  }
  
}