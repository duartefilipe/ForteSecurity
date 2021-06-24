const express = require('express');
const bodyparse = require('body-parser');
const path = require('path');
const app = express();

const cors = require('cors');
const session = require('express-session');
import routes from '../application/routes/routes';
import banner from 'simple-banner';

// Banner da App
banner.set('[Forte API - NodeJS Service]', 0, 0)

app.use('/imagens', express.static(path.join(__dirname, '/imagens')));

app.use(bodyparse.urlencoded({extended:false}));

app.use(session({
    secret:'keyboard cat',
    name: 'essecookie',
    proxy: true,
    resave: true,
    saveUninitialized: true
}))

app.use(bodyparse.json());
app.use(cors());

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

//app.use('/forte-api', routes)
app.use(routes)

app.listen(process.env.PORT, () =>{
    console.log('listen porta: '+process.env.PORT);
});
