import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head2 from '../components/head2';
import Footer from '../components/footer';
import { render } from '@testing-library/react';
import { Redirect } from 'react-router';

export default class criarInventario extends Component{

    constructor(props){
        super(props);
        this.state ={
            processo:'',
            nomeDado:'',
            nomeSistema:'',
            chave:'',
            finalidade:'',
            escopo:'',
            baseLegal:'',
            fundamentacao:'',
            descricao:'',
            armazenamento:'',
            retencao:'',
            estrategiaRemocao:'',
            operadores:'',
            informacao_sensivel:'',
            transferencia_int_dados:'',
            transferencia_int_dados_pais:'',
            consentimento_obtido:'',
            link_consentimento:'',
            observacoes:'',
            data_registro:'',
            
            redirect:false,
            empresa: [],
            idEmp: sessionStorage.getItem('@web/idEmp'),

        }
       this.InsertLugar = this.InsertInventario.bind(this)
       this.carregaEmpresas = this.carregaEmpresas.bind(this);
    }

    

    InsertInventario(e){
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "essecookie=s%3AynHuiNRC5GsarsqBctbtcrzviYBysJGx.tDpLc%2FYbaf4Rl4GLzMhmnZtRLnphipQPdlXpRKMti5s");
        
        var formdata = new FormData();
        formdata.append("nomeDado:'',", this.state.nomeDado);
        formdata.append("nomeSistema", this.state.nomeSistema);
        formdata.append("chave", this.state.chave);
        formdata.append("finalidade", this.state.finalidade);
        formdata.append("escopo", this.state.escopo);
        formdata.append("baseLegal", this.state.baseLegal);
        formdata.append("fundamentacao", this.state.fundamentacao);
        formdata.append("descricao", this.state.descricao);
        formdata.append("armazenamento", this.state.armazenamento);
        formdata.append("retencao", this.state.retencao);
        formdata.append("estrategiaRemocao", this.state.estrategiaRemocao);
        formdata.append("operadores", this.state.operadores);
        formdata.append("informacao_sensivel", this.state.informacao_sensivel);
        formdata.append("transferencia_int_dados", this.state.transferencia_int_dados);
        formdata.append("transferencia_int_dados_pais", this.state.transferencia_int_dados_pais);
        formdata.append("consentimento_obtido", this.state.consentimento_obtido);
        formdata.append("link_consentimento", this.state.link_consentimento);
        formdata.append("observacoes", this.state.observacoes);
        formdata.append("data_registro", this.state.data_registro);
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
        
        fetch("http://localhost:8080/criarInventario", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }

    componentDidMount(){
        var url_string = window.location.href;
        var url = new URL(url_string);
        this.state.to = url.searchParams.get("c");

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
                <div class="container text-center" style={{color: 'white'}}>Cadastrar Inventario</div>
            <form class="bg-dark"  onSubmit={this.InsertInventario}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">nomeDado </label>
                    <input value={this.state.nomeDado} onChange={(e) => this.setState({nomeDado: e.target.value})}  type="text" class="form-control p-2" id="nomeDado" placeholder="Informe um lugarNome" name="nomeDado"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">nomeSistema</label>
                    <input value={this.state.nomeSistema} onChange={(e) => this.setState({nomeSistema: e.target.value})} type="text" class="form-control p-2" id="nomeSistema" placeholder="Informe um equipe" name="nomeSistema"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">chave</label>
                    <input value={this.state.chave} onChange={(e) => this.setState({chave: e.target.value})}  type="text" class="form-control  p-2" id="chave" placeholder="Informe um responsavel" name="chave"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">finalidade</label>
                    <input value={this.state.finalidade} onChange={(e) => this.setState({finalidade: e.target.value})} type="text" class="form-control  p-2" id="finalidade" placeholder="informe o email" name="finalidade"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">escopo</label>
                    <input value={this.state.escopo} onChange={(e) => this.setState({escopo: e.target.value})} type="text" class="form-control  p-2" id="escopo" placeholder="informe o perfis" name="escopo"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">baseLegal</label>
                    <input value={this.state.baseLegal} onChange={(e) => this.setState({baseLegal: e.target.value})} type="text" class="form-control  p-2" id="baseLegal" placeholder="informe o baseLegal" name="baseLegal"/>
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">fundamentacao</label>
                    <input value={this.state.fundamentacao} onChange={(e) => this.setState({fundamentacao: e.target.value})} type="text" class="form-control  p-2" id="fundamentacao" placeholder="informe o fonte_acesso" name="fundamentacao"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">descricao</label>
                    <input value={this.state.descricao} onChange={(e) => this.setState({chave: e.target.value})}  type="text" class="form-control  p-2" id="descricao" placeholder="Informe um responsavel" name="descricao"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">armazenamento</label>
                    <input value={this.state.armazenamento} onChange={(e) => this.setState({armazenamento: e.target.value})}  type="text" class="form-control  p-2" id="armazenamento" placeholder="Informe um responsavel" name="armazenamento"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">retencao</label>
                    <input value={this.state.retencao} onChange={(e) => this.setState({retencao: e.target.value})}  type="text" class="form-control  p-2" id="retencao" placeholder="Informe um responsavel" name="retencao"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">estrategiaRemocao</label>
                    <input value={this.state.estrategiaRemocao} onChange={(e) => this.setState({estrategiaRemocao: e.target.value})}  type="text" class="form-control  p-2" id="descricao" placeholder="Informe um responsavel" name="estrategiaRemocao"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">operadores</label>
                    <input value={this.state.operadores} onChange={(e) => this.setState({operadores: e.target.value})}  type="text" class="form-control  p-2" id="operadores" placeholder="Informe um responsavel" name="operadores"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">informacao_sensivel</label>
                    <input value={this.state.informacao_sensivel} onChange={(e) => this.setState({informacao_sensivel: e.target.value})}  type="text" class="form-control  p-2" id="informacao_sensivel" placeholder="Informe um responsavel" name="informacao_sensivel"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">transferencia_int_dados</label>
                    <input value={this.state.transferencia_int_dados} onChange={(e) => this.setState({transferencia_int_dados: e.target.value})}  type="text" class="form-control  p-2" id="transferencia_int_dados" placeholder="Informe um responsavel" name="transferencia_int_dados"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">transferencia_int_dados_pais</label>
                    <input value={this.state.transferencia_int_dados_pais} onChange={(e) => this.setState({transferencia_int_dados_pais: e.target.value})}  type="text" class="form-control  p-2" id="transferencia_int_dados_pais" placeholder="Informe um responsavel" name="transferencia_int_dados_pais"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">consentimento_obtido</label>
                    <input value={this.state.consentimento_obtido} onChange={(e) => this.setState({consentimento_obtido: e.target.value})}  type="text" class="form-control  p-2" id="consentimento_obtido" placeholder="Informe um responsavel" name="consentimento_obtido"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">link_consentimento</label>
                    <input value={this.state.link_consentimento} onChange={(e) => this.setState({link_consentimento: e.target.value})}  type="text" class="form-control  p-2" id="link_consentimento" placeholder="Informe um responsavel" name="link_consentimento"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">observacoes</label>
                    <input value={this.state.observacoes} onChange={(e) => this.setState({observacoes: e.target.value})}  type="text" class="form-control  p-2" id="observacoes" placeholder="Informe um responsavel" name="observacoes"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">data_registro</label>
                    <input value={this.state.data_registro} onChange={(e) => this.setState({data_registro: e.target.value})}  type="text" class="form-control  p-2" id="data_registro" placeholder="Informe um responsavel" name="data_registro"/>
                </div>

 {/*
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-success">idEmp</label>
                    <select class="form-select" aria-label="Default select example" name="idEmp" id="idEmp">
                            {this.state.empresa.map(result =>(
                                <option value={result.idEmp} onChange={(e) => this.setState({idEmp: e.target.value})} >{result.razaosocial}, {result.idEmp} </option>
                            ))}
                    </select>
                </div>
               */} 

                <button type="submit" class="btn btn-success">Cadastrar</button>
                </form>
            </div>
        </div>

        
        
        <Footer/>
        </React.Fragment>
    );
}
}