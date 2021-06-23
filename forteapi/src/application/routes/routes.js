import express from "express";

const usuario = require('../../infrastructure/database/models/usuario');
const empresa = require('../../infrastructure/database/models/empresa');
const lugar = require('../../infrastructure/database/models/lugar');
const inventario = require('../../infrastructure/database/models/inventario');
import multer from 'multer'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "imagens/")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.ogirinalname + ".jpg")
    },
})
const upload = multer({ storage })
const routes = express.Router()

routes.get('/', (req, res) =>{
    res.send('Api do Curso');
});

routes.get('/returnImg/:idUsu', (req,res)=>{
    const idUsu=req.params.idUsu;
    usuario.findOne({where:{idUsu:idUsu}}).then(result =>{
        if(result != undefined){
            res.json(result);
        }else{

        }
    })
})

routes.post('/uploadImg', upload.single('file'), (req, res)=>{
    const idUsu= req.body.idUsu;
    const senha = req.body.senha;
    //essa parte da senha é por questao de segurança para não ser possivel alterar a foto do usuario sem estar logado
    usuario.findOne({where:{idUsu:idUsu}}).then(result =>{
        var verify = bcrypt.compareSync(senha,result.senha);
        if(verify){
            usuario.update({imagem: 'http://localhost:8080/imagens/'+req.file.filename},{where:{idUsu:idUsu}})
            return res.json(1);
        }else{
            return res.json('Voce não está logado par alterar')
        }
    })
})

routes.post('/updatePerfil', (req, res)=>{
    const idUsu= req.body.idUsu;
    const email = req.body.email;
    const nome = req.body.nome;
    const senha = req.body.senha;
    //essa parte da senha é por questao de segurança para não ser possivel alterar a foto do usuario sem estar logado
    usuario.findOne({where:{idUsu:idUsu}}).then(result =>{
        var verify = bcrypt.compareSync(senha,result.senha);
        if(verify){
            //faz as verificações e se der certo a senha da o update no campo email
            usuario.update({email: email},{where:{idUsu:idUsu}})
            usuario.update({nome: nome},{where:{idUsu:idUsu}})
            return res.json(1);
        }else{
            return res.json('Voce não está logado par alterar')
        }
    })
})

routes.post('/registrar', function(req, res){
    const nome =req.body.nome;
    const senha =req.body.senha;
    const email =req.body.email;
    const perfil =req.body.perfil;
    const imagem =req.body.imagem;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(senha, salt);
    usuario.findOne({where:{email:email}}).then(result =>{
        if(result != null){
            return res.json("Já existe")
        }else{
            usuario.create({
                nome: nome,
                senha: hash,
                email: email,
                perfil: perfil,
                imagem: imagem,
            }).then(() => {return res.json("Sucesso ao gravar")})
        }})
})

routes.post('/criarEmpresa', upload.single('file'), (req, res) => {
    const razaosocial = req.body.razaosocial;
    const cnpj = req.body.cnpj;
    const email = req.body.email;
    const perfil = req.body.perfil;
    const username = req.body.username;

    empresa.create({
        razaosocial:razaosocial,
        cnpj:cnpj,
        email:email,
        perfil:perfil,
        username:username

    }).then(() =>{return res.json("Sucesso ao gravar")})
})

routes.post('/criarLugar', upload.single('file'), (req, res) => {
    const lugarNome = req.body.lugarNome;
    const equipe = req.body.equipe;
    const responsavel = req.body.responsavel;
    const email = req.body.email;
    const perfis = req.body.perfis;
    const fonte_acesso = req.body.fonte_acesso;
    const idEmp = req.body.idEmp;

    lugar.create({
        lugarNome:lugarNome,
        equipe:equipe,
        responsavel:responsavel,
        email:email,
        perfis:perfis,
        fonte_acesso:fonte_acesso,
        idEmp:idEmp

    }).then(() =>{return res.json("Sucesso ao gravar lugar")})
})

routes.get('/empresas/:idEmp', (req,res)=>{
    const idEmp = req.params.idEmp;
    empresa.findOne({where:{idEmp:idEmp}}).then(result =>{
        res.json(result)
    })
})

routes.post('/deleteLugar/:idLug', (req,res)=>{
    const idLug= req.params.idLug;
    lugar.destroy({where: { idLug: idLug}})
        .then(console.log('deletado inventario'));
    return res.json(1);
})

routes.get('/empresasAll', (req,res)=>{
    empresa.findAll().then(result =>{
        res.json(result)
    })
})

routes.get('/lugares/:idEmp', (req,res)=>{
    const idEmp = req.params.idEmp;
    lugar.findAll({where:{idEmp:idEmp}}).then(result =>{
        res.json(result)
    })
})

routes.get('/inventario/:idLug', (req,res)=>{
    const idLug = req.params.idLug;
    inventario.findAll({where:{idLug:idLug}}).then(result =>{
        res.json(result)
    })
})

routes.get('/inventarioAll', (req,res)=>{
    inventario.findAll().then(result =>{
        res.json(result)
    })
})

routes.post('/login', (req,res)=>{
    const email = req.body.email;
    const senha = req.body.senha;

    usuario.findOne({where:{email:email}}).then(result =>{
        var verify = bcrypt.compareSync(senha,result.senha);

        if(verify){

            req.session.result = {
                idUsu: result.idUsu,
                nome: result.nome,
                email: result.email,
                imagem: result.imagem,
                perfil: result.perfil,
                // senha: result.senha

            }


            return res.send(req.session.result)
        }else{
            return res.json(1)
        }
    })
})

export default routes
