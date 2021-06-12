const express = require('express');
const bodyparse = require('body-parser');
const usuario = require('./database/models/usuario');
const empresa = require('./database/models/empresa');
const lugar = require('./database/models/lugar');
const path = require('path');
const app = express();
app.use('/imagens', express.static(path.join(__dirname, '/imagens')));
const bcrypt = require('bcrypt');
const cors = require('cors');
const session = require('express-session');
const multer = require('multer');


app.use(bodyparse.urlencoded({extended:false}));
app.use(bodyparse.json());
app.use(session({
    secret:'keyboard cat',
    name: 'essecookie',
    proxy: true,
    resave: true,
    saveUninitialized: true
}))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "imagens/")
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.ogirinalname + ".jpg")
    },
  })

  const upload = multer({ storage })

const porta = 8080;

app.use(cors());

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.get('/', (req, res) =>{
    res.send('Api do Curso');
});

app.get('/returnImg/:idUsu', (req,res)=>{
    const idUsu=req.params.idUsu;
    usuario.findOne({where:{idUsu:idUsu}}).then(result =>{
        if(result != undefined){
            res.json(result);
        }else{

        }
    })
})

app.post('/uploadImg', upload.single('file'), (req, res)=>{
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

app.post('/updatePerfil', (req, res)=>{
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

app.post('/registrar', function(req, res){
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

app.post('/criarEmpresa', upload.single('file'), (req, res) => {
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

app.get('/empresas/:idEmp', (req,res)=>{
    const idEmp = req.params.idEmp;
    empresa.findOne({where:{idEmp:idEmp}}).then(result =>{
        res.json(result)
    })
})

app.get('/empresasAll', (req,res)=>{
    empresa.findAll().then(result =>{
        res.json(result)
    })
})

app.post('/login', (req,res)=>{
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

app.listen(porta, () =>{
    console.log('listen porta: '+porta);
});