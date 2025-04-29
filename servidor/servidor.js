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

// Métodos e actions

app.get("/cadastrar", function(requisicao, resposta){
    let nome = requisicao.query.nome;
    let login = requisicao.query.login;
    let senha = requisicao.query.senha;
    let nasc = requisicao.query.nascimento;

    console.log(nome, login, senha, nasc)
})

app.post("/cadastrar", function(requisicao, resposta){
    let nome = requisicao.body.nome;
    let login = requisicao.body.login;
    let senha = requisicao.body.senha;
    let nasc = requisicao.body.nascimento;
    console.log(nome, login, senha, nasc);
    resposta.render("resposta",{nome, login, senha, nasc});
})

app.get("/login", function(requisicao, resposta){
    let log_nome = requisicao.query.nome;
    let log_login = requisicao.query.login;
    let log_senha = requisicao.query.senha;
    let log_nasc = requisicao.query.nascimento;
    if(log_nome == nome && log_login == login && log_senha == senha && log_nasc == nasc)
        {resposta.redirect("projetos.html")}
    else{window.alert("Tenta de novo")}
})

app.post("/login", function(requisicao, resposta){
    let log_nome = requisicao.body.nome;
    let log_login = requisicao.body.login;
    let log_senha = requisicao.body.senha;
    let log_nasc = requisicao.body.nascimento;
    if(log_nome == nome && log_login == login && log_senha == senha && log_nasc == nasc)
        {resposta.redirect("projetos.html")}
    else{window.alert("Tenta de novo")}
})
