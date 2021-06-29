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
            processo: '',
            lugarInventario: '',
            nomeDado: '',
            nomeSistema: '',
            chave: '',
            finalidade: '',
            escopo: '',
            baseLegal: '',
            fundamentacao: '',
            descricao: '',
            armazenamento: '',
            retencao: '',
            estrategiaRemocao: '',
            operadores: '',
            informacao_sensivel: '',
            transferencia_int_dados: '',
            transferencia_int_dados_pais: '',
            consentimento_obtido: '',
            link_consentimento: '',
            observacoes: '',
            data_registro: '',
            lugar: [],
            redirect:false

        }
        this.InsertInventario = this.InsertInventario.bind(this)
        this.carregaLugares = this.carregaLugares.bind(this);

    }

    componentDidMount() {
        var url_string = window.location.href;
        var url = new URL(url_string);
        this.state.to = url.searchParams.get("c");
        this.carregaLugares();
    }

    carregaLugares() {
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "essecookie=s%3AaC6b-AQF7tfzFizaNW7SMeDaOGYX0Dok.1MbZEzJVnYyna%2FsxGvDFD7AKAT6jgWjpxR%2BVdxQ5Lzc");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/lugaresAll", requestOptions)
            .then(response => response.json())
            .then(response => { this.setState({ lugar: response || [] }) })
            .catch(error => console.log('error', error));
    }

    InsertInventario(e){
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "essecookie=s%3AynHuiNRC5GsarsqBctbtcrzviYBysJGx.tDpLc%2FYbaf4Rl4GLzMhmnZtRLnphipQPdlXpRKMti5s");

        var formdata = new FormData();
        formdata.append("processo", this.state.processo);
            formdata.append("lugarInventario", this.state.lugarInventario);
            formdata.append("nomeDado", this.state.nomeDado);
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
            formdata.append("idLug", this.state.idLug);

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


render(){
    return(
        <React.Fragment>
        <Head2/>
        
        <div class="container mt-3 bg-dark">
                <div class="row text-center" style={{color: 'white'}}>
                    <h3>Cadastrar Inventario</h3>                        
                </div>
            <div class="card p-3 bg-dark">
                
            <form class="bg-dark" onSubmit={this.InsertInventario}>
                <div class="mb-3">
                    <label class="form-label text-success">processo </label>
                    <input value={this.state.processo} onChange={(e) => this.setState({processo: e.target.value})}
                           type="text"  class="form-control p-2" id="processo" name="processo" placeholder="Informe um processo"/>
                </div>
                <div class="mb-3">
                    <label class="form-label text-success">lugarInventario </label>
                    <input value={this.state.lugarInventario} onChange={(e) => this.setState({lugarInventario: e.target.value})}
                           type="text" class="form-control p-2" id="lugarInventario" name="lugarInventario" placeholder="Informe um lugar Inventario"/>
                </div>
                <div class="mb-3">
                    <label class="form-label text-success">nomeDado </label>
                    <input value={this.state.nomeDado} onChange={(e) => this.setState({nomeDado: e.target.value})}
                           type="text" class="form-control p-2" id="nomeDado" placeholder="Informe um lugarNome" name="nomeDado"/>
                </div>
                <div class="mb-3">
                    <label class="form-label text-success">nomeSistema</label>
                    <input value={this.state.nomeSistema} onChange={(e) => this.setState({nomeSistema: e.target.value})}
                           type="text" class="form-control p-2" id="nomeSistema" placeholder="Informe um equipe" name="nomeSistema"/>
                </div>
                <div class="mb-3">
                    <label class="form-label text-success">chave</label>
                    <input value={this.state.chave} onChange={(e) => this.setState({chave: e.target.value})}
                           type="text" class="form-control  p-2" id="chave" placeholder="Informe um chave" name="chave"/>
                </div>
                <div class="mb-3">
                    <label class="form-label text-success">finalidade</label>
                    <input value={this.state.finalidade} onChange={(e) => this.setState({finalidade: e.target.value})}
                           type="text" class="form-control  p-2" id="finalidade" placeholder="informe o finalidade" name="finalidade"/>
                </div>
                <div class="mb-3">
                    <label class="form-label text-success">escopo</label>
                    <input value={this.state.escopo} onChange={(e) => this.setState({escopo: e.target.value})}
                           type="text" class="form-control  p-2" id="escopo" placeholder="informe o escopo" name="escopo"/>
                </div>
                <div class="mb-3">
                    <label class="form-label text-success">baseLegal</label>
                    <input value={this.state.baseLegal} onChange={(e) => this.setState({baseLegal: e.target.value})}
                           type="text" class="form-control  p-2" id="baseLegal" placeholder="informe o baseLegal" name="baseLegal"/>
                </div>
                <div class="mb-3">
                    <label class="form-label text-success">fundamentacao</label>
                    <input value={this.state.fundamentacao} onChange={(e) => this.setState({fundamentacao: e.target.value})}
                           type="text" class="form-control  p-2" id="fundamentacao" placeholder="informe o fundamentacao" name="fundamentacao"/>
                </div>
                <div class="mb-3">
                    <label class="form-label text-success">descricao</label>
                    <input value={this.state.descricao} onChange={(e) => this.setState({descricao: e.target.value})}
                           type="text" class="form-control  p-2" id="descricao" placeholder="Informe um descricao" name="descricao"/>
                </div>
                <div class="mb-3">
                    <label class="form-label text-success">armazenamento</label>
                    <input value={this.state.armazenamento} onChange={(e) => this.setState({armazenamento: e.target.value})}
                           type="text" class="form-control  p-2" id="armazenamento" placeholder="Informe um armazenamento" name="armazenamento"/>
                </div>
                <div class="mb-3">
                    <label class="form-label text-success">retencao</label>
                    <input value={this.state.retencao} onChange={(e) => this.setState({retencao: e.target.value})}
                           type="text" class="form-control  p-2" id="retencao" placeholder="Informe um retencao" name="retencao"/>
                </div>
                <div class="mb-3">
                    <label class="form-label text-success">estrategiaRemocao</label>
                    <input value={this.state.estrategiaRemocao} onChange={(e) => this.setState({estrategiaRemocao: e.target.value})}
                           type="text" class="form-control  p-2" id="descricao" placeholder="Informe um estrategiaRemocao" name="estrategiaRemocao"/>
                </div>
                <div class="mb-3">
                    <label class="form-label text-success">operadores</label>
                    <input value={this.state.operadores} onChange={(e) => this.setState({operadores: e.target.value})}
                           type="text" class="form-control  p-2" id="operadores" placeholder="Informe um operadores" name="operadores"/>
                </div>
                <div class="mb-3">
                    <label class="form-label text-success">informacao_sensivel</label>
                    <input value={this.state.informacao_sensivel} onChange={(e) => this.setState({informacao_sensivel: e.target.value})}
                           type="text" class="form-control  p-2" id="informacao_sensivel" placeholder="Informe um informacao_sensivel" name="informacao_sensivel"/>
                </div>
                <div class="mb-3">
                    <label class="form-label text-success">transferencia_int_dados</label>
                    <input value={this.state.transferencia_int_dados} onChange={(e) => this.setState({transferencia_int_dados: e.target.value})}
                           type="text" class="form-control  p-2" id="transferencia_int_dados" placeholder="Informe um transferencia_int_dados" name="transferencia_int_dados"/>
                </div>
                <div class="mb-3">
                    <label class="form-label text-success">transferencia_int_dados_pais</label>
                    <input value={this.state.transferencia_int_dados_pais} onChange={(e) => this.setState({transferencia_int_dados_pais: e.target.value})}
                           type="text" class="form-control  p-2" id="transferencia_int_dados_pais" placeholder="Informe um transferencia_int_dados_pais" name="transferencia_int_dados_pais"/>
                </div>
                <div class="mb-3">
                    <label class="form-label text-success">consentimento_obtido</label>
                    <input value={this.state.consentimento_obtido} onChange={(e) => this.setState({consentimento_obtido: e.target.value})}
                           type="text" class="form-control  p-2" id="consentimento_obtido" placeholder="Informe um consentimento_obtido" name="consentimento_obtido"/>
                </div>
                <div class="mb-3">
                    <label class="form-label text-success">link_consentimento</label>
                    <input value={this.state.link_consentimento} onChange={(e) => this.setState({link_consentimento: e.target.value})}
                           type="text" class="form-control  p-2" id="link_consentimento" placeholder="Informe um link_consentimento" name="link_consentimento"/>
                </div>
                <div class="mb-3">
                    <label class="form-label text-success">observacoes</label>
                    <input value={this.state.observacoes} onChange={(e) => this.setState({observacoes: e.target.value})}
                           type="text" class="form-control  p-2" id="observacoes" placeholder="Informe um observacoes" name="observacoes"/>
                </div>
                <div class="mb-3">
                    <label class="form-label text-success">data_registro</label>
                    <input value={this.state.data_registro} onChange={(e) => this.setState({data_registro: e.target.value})}
                           type="text" class="form-control  p-2" id="data_registro" placeholder="Informe um data_registro" name="data_registro"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-success">lugar</label>
                    <select id="idLug" className="custom-select" name="idLug"
                            onChange={(e) => this.setState({idLug: e.target.value})}>
                        <option selected disabled>Escolhe uma opção</option>
                        {this.state.lugar.map(function (item, index) {
                            return (
                                <option value={item.idLug} name="idLug" id="idLug">{item.lugarNome}, {item.idLug} </option>)
                        })}
                    </select>
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