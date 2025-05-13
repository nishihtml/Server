require("colors");
var http = require("http");
var express = require("express");
var app = express();
app.use(express.static('./public'))
var server = http.createServer(app);
server.listen(80);
console.log('hello world'.rainbow)

let bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const uri = `mongodb+srv://gustavoyurinishi:@helloworld.waodpqp.mongodb.net/?retryWrites=true&w=majority&appName=helloworld`;
const client = new MongoClient(uri, { useNewUrlParser: true });
var dbo = client.db("helloworld")
var usuarios = dbo.collection("usuarios")

app.get("/cadastrar", function(requisicao, resposta){
    let nome = requisicao.body.nome;
    let login = requisicao.body.login;
    let senha = requisicao.body.senha;
    let nasc = requisicao.body.nascimento;
    console.log(nome, login, senha, nasc);
    resposta.render("resposta",{nome, login, senha, nasc});
})

app.post("/cadastrar", function(requisicao, resposta){
    nome = requisicao.body.nome;
    login = requisicao.body.login;
    senha = requisicao.body.senha;
    nasc = requisicao.body.nascimento;
    console.log(nome, login, senha, nasc);

    var data = { db_nome: nome, db_login: login, db_senha: senha, db_nasc: nasc };

    usuarios.insertOne(data, function(err){
        if(err){
            resposta.render("resposta",{status: "Erro" ,nome, login, senha, nasc});
        }else{
            resposta.render("resposta",{status: "Sucesso", nome, login, senha, nasc});
        }
    })
})

app.get("/login", function(requisicao, resposta){
    nome = requisicao.query.nome;
    login = requisicao.query.login;
    senha = requisicao.query.senha;
    nasc = requisicao.query.nascimento;
    resposta.render("resposta",{nome, login, senha, nasc})
})

app.post("/login", function(requisicao, resposta){
    let nome = requisicao.body.nome;
    let login = requisicao.body.login;
    let senha = requisicao.body.senha;
    let nasc = requisicao.body.nascimento;
    console.log(nome, login, senha, nasc);

    var data = { db_nome: nome, db_login: login, db_senha: senha, db_nasc: nasc };

    usuarios.insertOne(data, function(err){
        if(err){
            resposta.render("resposta",{status: "Erro" ,nome, login, senha, nasc});
        }else{
            resposta.render("resposta",{status: "Sucesso", nome, login, senha, nasc});
        }
    })
})

////LAB 09

app.get("/cadastrar_post", function(req, resp){
    let titulo = req.query.titulo;
    let resumo = req.query.resumo;
    let conteudo = req.query.conteudo
    resp.render("blog",{titulo, resumo, conteudo});
})

app.get("/listar", function(req, resp){
    usuarios.find().toArray(function(err, users){
        if (err){
            resp.status(500).json({erro:"erro"})
        }
        else{
            resp.json(users)
        }
    });
})

app.post("/cadastrar_post", function(req, resp){
    let titulo = req.body.titulo;
    let resumo = req.body.resumo;
    let conteudo = req.body.conteudo;

    var data = { db_titulo: titulo, db_resumo: resumo, db_conteudo: conteudo};

    usuarios.insertOne(data, function (err){
        if (err) {
            resp.render('blog', {resp: "Erro ao cadastrar o post :(", titulo, resumo, conteudo, })
        }else {
            resp.render('blog', {resp: "Post cadastrado com sucesso :D", titulo, resumo, conteudo, })        
        };
    });
})