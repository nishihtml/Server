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
const uri = `mongodb+srv://gustavoyurinishi:AArnls6hzbdoeg94@helloworld.waodpqp.mongodb.net/?retryWrites=true&w=majority&appName=helloworld`;
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

app.post("/login", function(requisicao, resposta){
    nome = requisicao.query.nome;
    login = requisicao.query.login;
    senha = requisicao.query.senha;
    nasc = requisicao.query.nascimento;
    resposta.render("resposta",{nome, login, senha, nasc})
})

app.get("/cadastrar_post", function(req, resp){
    titulo = req.query.titulo;
    resumo = req.query.resumo;
    conteudo = req.query.conteudo

    resp.render("resp",{titulo, resumo, conteudo});
})

app.post("/cadastrar_post", function(req, resp){
    titulo = req.body.titulo;
    resumo = req.body.resumo;
    conteudo = req.body.conteudo;
    resp.render("resp",{titulo, resumo, conteudo});

    var data = { db_titulo: req.body.titulo, db_resumo: req.body.resumo, db_conteudo: req.body.conteudo };

    usuarios.insertOne(data, function (err){
        if (err) {
            resp.render('resposta_post', {blog: "Erro ao cadastrar o post :("})
        }else {
            resp.render('resposta_post', {blog: "Post cadastrado com sucesso :D"})        
        };
    });
})