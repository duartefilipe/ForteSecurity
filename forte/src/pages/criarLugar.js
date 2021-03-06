import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head2 from '../components/head2';
import Footer from '../components/footer';
import { render } from '@testing-library/react';
import { Redirect } from 'react-router';

export default class criarEmpresa extends Component {

    constructor(props) {
        super(props);
        this.state = {
            razaosocial: '',
            cnpj: '',
            email: '',
            perfil: '',
            redirect: false,
            empresa: [],
            idEmp: sessionStorage.getItem('@web/idEmp'),

        }
        this.InsertLugar = this.InsertLugar.bind(this)
        this.carregaEmpresas = this.carregaEmpresas.bind(this);
    }



    InsertLugar(e) {
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "essecookie=s%3AynHuiNRC5GsarsqBctbtcrzviYBysJGx.tDpLc%2FYbaf4Rl4GLzMhmnZtRLnphipQPdlXpRKMti5s");

        var formdata = new FormData();
        formdata.append("lugarNome", this.state.lugarNome);
        formdata.append("equipe", this.state.equipe);
        formdata.append("responsavel", this.state.responsavel);
        formdata.append("email", this.state.email);
        formdata.append("perfis", this.state.perfis);
        formdata.append("fonte_acesso", this.state.fonte_acesso);
        formdata.append("idEmp", this.state.idEmp);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/criarLugar", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    componentDidMount() {
        var url_string = window.location.href;
        var url = new URL(url_string);
        this.state.to = url.searchParams.get("c");

        this.carregaEmpresas()

    }

    carregaEmpresas() {
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "essecookie=s%3Aoe7QJS1RVn6XCLTNT9ITYeRV6w-BVF3S.vtC04wjpCyoVv8G1Vchp1WY536RAlBlu1Wq4tM0%2Bto8");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/empresasAll", requestOptions)
            .then(response => response.json())
            .then(response => { this.setState({ empresa: response || [] }) })
            .catch(error => console.log('error', error));
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect
                to={{
                    pathname: "/login",
                }}
            />
        }
        return (
            <React.Fragment>
                <Head2 />

                <div class="container mt-3 bg-dark">
                    <div class="card p-3 bg-dark">
                        <p style={{ fontSize: 12, color: 'green', marginRight: 5 }}>idemp: {this.state.empresa.idEmp}</p>
                        <form class="bg-dark" onSubmit={this.InsertLugar}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label text-success">lugar {this.state.idEmp} Nome </label>
                                <input value={this.state.lugarNome} onChange={(e) => this.setState({ lugarNome: e.target.value })} type="text" class="form-control p-2" id="lugarNome" placeholder="Informe um lugarNome" name="lugarNome" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label text-success">equipe</label>
                                <input value={this.state.equipe} onChange={(e) => this.setState({ equipe: e.target.value })} type="text" class="form-control p-2" id="equipe" placeholder="Informe um equipe" name="equipe" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label text-success">responsavel</label>
                                <input value={this.state.responsavel} onChange={(e) => this.setState({ responsavel: e.target.value })} type="text" class="form-control  p-2" id="responsavel" placeholder="Informe um responsavel" name="responsavel" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label text-success">email</label>
                                <input value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} type="text" class="form-control  p-2" id="email" placeholder="informe o email" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label text-success">Perfil</label>
                                <select id="perfil" className="custom-select" name="perfil" >
                                    <option selected disabled>Escolhe uma opção</option>
                                    <option value="1" >Admin</option>)
                                    <option value="2" >Empresa</option>)
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label text-success">fonte_acesso</label>
                                <input value={this.state.fonte_acesso} onChange={(e) => this.setState({ fonte_acesso: e.target.value })} type="text" class="form-control  p-2" id="fonte_acesso" placeholder="informe o fonte_acesso" name="fonte_acesso" />
                            </div>
                            
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label text-success">idEmp</label>
                                <select id="idEmp" className="custom-select" name="idEmp" onChange={(e) => this.setState({ idEmp: e.target.value })}  >
                                    <option selected disabled>Escolhe uma opção </option>
                                    {this.state.empresa.map(function (item, index) {return (
                                     <option value={item.idEmp} name="idEmp" id="idEmp">{item.razaosocial}, {item.idEmp} </option>)})}
                                </select>
                            </div>

                            <button type="submit" class="btn btn-success">Cadastrar</button>
                        </form>
                    </div>
                </div>



                <Footer />
            </React.Fragment>
        );
    }
}