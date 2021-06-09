 
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
       nome: sessionStorage.getItem('@web/nome'),
       imagem: sessionStorage.getItem('@web/imagem'),
       logado_id: sessionStorage.getItem('@web/idUsu'),
       senha: sessionStorage.getItem('@web/senha'),
       usuario: [],
       
    }
    this.updateImg = this.updateImg.bind(this);
    this.returnUsuario = this.returnUsuario.bind(this);
    this.updatePerfil = this.updatePerfil.bind(this);
      }

     async returnUsuario(){
      var myHeaders = new Headers();
      myHeaders.append("Cookie", "essecookie=s%3AyuLjIoIiolSYbidY0NZ_P_klCdO9WjA2.%2FPlFn5bGUe86Zdt25OehvahBWW27zNzlqEJdYVbxEig");
  
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
         };

         fetch("http://localhost:8080/returnImg/"+this.state.logado_id, requestOptions)
         .then(response => response.json())
         .then(response => {this.setState({usuario: response || []})})
         .catch(error => console.log('error', error));
     }
     componentDidMount(){
         this.returnUsuario();
     }

     updatePerfil(e){
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Cookie", "essecookie=s%3AnwGVxw9nRYkwwUFK07w2tpZgjJ4PjwKe.46JJMG0bmiuHrid%2BeEmd%2F3YzFRcx1IbcIBPGFFnwlYM");
      
      var raw = JSON.stringify({
        "idUsu": this.state.logado_id,
        "nome": this.state.nome,
        "email": this.state.email,
        "senha": this.state.senha
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("http://localhost:8080/updatePerfil", requestOptions)
        .then(response => response.json())
        .then(response => {if(response === 1){
          alert('Alterado com Sucesso!!!')
          window.location.reload()
         }else{
          
         }})
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        e.preventDefault()
     }

      updateImg(e){
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "essecookie=s%3ApJZmOEEnnBgtzM9un-2ejMjsfNKOyGKp.bEqfoizoNGdxCJmrcetrDWZOXIG0uTSg0VA0B%2BagWDM");
        var fileInput = document.getElementById('file');
        var formdata = new FormData();
        formdata.append("file", fileInput.files[0], fileInput);
        formdata.append("idUsu", this.state.logado_id);
        formdata.append("senha", this.state.senha);
    
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
    
        fetch("http://localhost:8080/uploadImg", requestOptions)
          .then(response => response.json())
          .then(response => {if(response === 1){
            window.location.reload()
        }})
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
          }
    

  
  render(){
    sessionStorage.setItem('@web/imagem', this.state.usuario.imagem)
    sessionStorage.setItem('@web/nome', this.state.usuario.nome)
    sessionStorage.setItem('@web/email', this.state.usuario.email)
    return (
      <React.Fragment>
      <Head2/>
      <div class="container mt-3 bg-dark">
          <span style={{fontSize:18, color:'white'}}>Bem vindo: {this.state.nome}</span>
          <form class="m-3" onSubmit={this.updatePerfil}>
            <div class="form-group">
              <label for="exampleInputEmail1" class="text-success" >Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="form-group">
              <label class="text-success" for="exampleInputPassword1">Nome</label>
              <input type="text" value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})}  class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" class="btn btn-success mb-3">Alterar</button>
        </form>
        <form class="ml-3" onSubmit={this.updateImg}>
            <div class="btn-group " role="group" aria-label="Exemplo básico">
                <div class="wrap-input100 validate-input" data-validate="Enter imagem">
                    <span class="btn-show-pass">
                      <i class="zmdi zmdi-eye"></i>
                    </span>
                    <label class="btn btn-secondary" style={{fontSize:12, height:45}}>
                                      Imagem
                      <i class="fas fa-cloud-upload-alt ">
                          <input type="file" name="file" id="file" accept="image/x-png,image/gif,image/jpeg" hidden/>
                      </i>  
                    </label>
                  </div>
                <div class="row d-flex justify-content-center">
                      <div class="form-group">
                          <div class="col-sm-12">
                            <button type="submit" style={{fontSize:12, height:45}} class="btn btn-success ml-3">Mudar Imagem</button>
                          </div>
                        </div>
                    </div>
                  </div>
          </form>
        
      </div>
      <Footer/>
      </React.Fragment>
    );
  }
  
}