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

app.get('/', (req, res) =>{
    res.redirect("public/projetos.html")
})

var mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const uri = `mongodb+srv://gustavoyurinishi:@helloworld.waodpqp.mongodb.net/?retryWrites=true&w=majority&appName=helloworld`;


const client = new MongoClient(uri, { useNewUrlParser: true });
var dbo = client.db("helloworld")
var usuarios = dbo.collection("usuarios")
var posts = dbo.collection("posts")
var clientes = dbo.collection("clientes")
var carros = dbo.collection("carros")

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

    var data = { db_nome: nome, db_login: login, db_senha: senha, db_nasc: nasc };

    usuarios.insertOne(data, function(err){
        if(err){
            resposta.render("resposta",{status: "Erro" ,nome, login, senha, nasc});
        }else{
            resposta.render("resposta",{status: "Sucesso", nome, login, senha, nasc});
        }
    })
})

app.get("/logar", function(requisicao, resposta){
    nome = requisicao.query.nome;
    login = requisicao.query.login;
    senha = requisicao.query.senha;
    nasc = requisicao.query.nascimento;
    resposta.render("resposta",{nome, login, senha, nasc})
})

app.post('/logar', function(requisicao, resposta){
    let nome = requisicao.body.nome;
    let login = requisicao.body.login;
    let senha = requisicao.body.senha;
    let nasc = requisicao.body.nasc;
    console.log(nome, login, senha, nasc);

    var data = { db_nome: nome, db_login: login, db_senha: senha, db_nasc: nasc }

    usuarios.find(data).toArray(function(err, items){
        console.log(items)
        if(items.length == 0){
            resposta.render("resposta_login",{status: "usuario/senha não encontrado"});
        }else if(err){
            resposta.render("resposta_login",{status: "erro ao logar"});
        }else{
            resposta.render("resposta_login",{status: "usuario "+login+" logado"});
        }
    })

})

////LAB 09

app.post("/cadastrar_post", function(req, resp){

    let data = { db_titulo: req.body.titulo, db_resumo: req.body.resumo, db_conteudo: req.body.conteudo };

    posts.insertOne(data, function(err, items) {
        console.log(items);
        if (items.length == 0) {
          resp.render('blog.ejs')
        }else {
          resp.render('blog.ejs')        
        };
      });
})

app.get("/listar_posts", function(req, resp) {

    // busca todos os usuarios no banco de dados
    posts.find().toArray(function(err, items) {
        // renderiza a resposta para o navegador
        resp.render("blog.ejs", { posts: items });
      });

});

//////LAB 10

app.get("/cadastrar_usuario", function(requisicao, resposta){
    let nome = requisicao.query.nome;
    let login = requisicao.query.login;
    let senha = requisicao.query.senha;

    console.log(nome, login, senha)
})

app.post("/cadastrar _usuario", function(requisicao, resposta){
    let nome = requisicao.body.nome;
    let login = requisicao.body.login;
    let senha = requisicao.body.senha;
    console.log(nome, login, senha);

    var data = { db_nome: nome, db_login: login, db_senha: senha,};

    clientes.insertOne(data, function(err){
        if(err){
            resposta.render("resposta",{status: "Erro" ,nome, login, senha});
        }else{
            resposta.render("resposta",{status: "Sucesso", nome, login, senha});
        }
    })
})

app.get("/logar_usuario", function(requisicao, resposta){
    let nome = requisicao.query.nome;
    let login = requisicao.query.login;
    let senha = requisicao.query.senha;
    resposta.render("resposta",{nome, login, senha})
})

app.post('/logar_usuario', function(requisicao, resposta){
    let nome = requisicao.body.nome;
    let login = requisicao.body.login;
    let senha = requisicao.body.senha;  
    console.log(nome, login, senha);

    var data = { db_nome: nome, db_login: login, db_senha: senha,}

    clientes.find(data).toArray(function(err, items){
        console.log(items)
        if(items.length == 0){
            resposta.render("resposta_login",{status: "usuario/senha não encontrado"});
        }else if(err){
            resposta.render("resposta_login",{status: "erro ao logar"});
        }else{
            resposta.render("resposta_login",{status: "usuario "+login+" logado"});
        }
    })
})

app.get("/cadastrar_carro", function(requisicao, resposta){
    let marca = requisicao.query.marca;
    let modelo = requisicao.query.modelo;
    let ano = requisicao.query.ano;
    let qtd_disponivel = requisicao.query.qtd_disponivel;

    console.log(marca, modelo, ano, qtd_disponivel)
})

app.post("/cadastrar_carro", function(requisicao, resposta){
    let marca = requisicao.body.marca;
    let modelo = requisicao.body.modelo;
    let ano = requisicao.body.ano;
    let qtd_disponivel = requisicao.body.qtd_disponivel;
    console.log(marca, modelo, ano, qtd_disponivel);

    var data = { db_marca: marca, db_modelo: modelo, db_ano: ano, db_qtd_disponivel: qtd_disponivel };

    carros.insertOne(data, function(err){
        if(err){
            resposta.render("resposta",{status: "Erro" , marca, modelo, ano, qtd_disponivel});
        }else{
            resposta.render("resposta",{status: "Sucesso", marca, modelo, ano, qtd_disponivel});
        }
    })
})

app.post('/atualizar_carro', function(requisicao, resposta){
    let marca = requisicao.body.marca;
    let modelo = requisicao.body.modelo;
    let ano = requisicao.body.ano;
    let qtd_disponivel = requisicao.body.qtd_disponivel;

    let data = { db_marca: marca, db_modelo: modelo, db_ano: ano, db_qtd_disponivel: qtd_disponivel }
    let new_data = { $set: {db_marca: marca, db_modelo: modelo, db_ano: ano, db_qtd_disponivel: qtd_disponivel}}

    carros.updateOne(data, new_data, function(err, result){
        console.log(result);
    
        if (result.modifiedCount == 0) {
            resposta.render('resposta_login', {status: "Carro não encontrado!"})
        }else if (err) {
            resposta.render('resposta_login', {status: "Erro ao atualizar Carro!"})
        }else {
            resposta.render('resposta_login', {status: "Carro atualizado com sucesso!"})        
        };
    })

})


app.post('/remover_carro', function(requisicao, resposta){
    let marca = requisicao.body.marca;
    let modelo = requisicao.body.modelo;
    let ano = requisicao.body.ano;

    let data = { db_marca: marca, db_modelo: modelo, db_ano: ano }

    usuarios.deleteOne(data, function(err, result){
        console.log(result);

          if (result.deletedCount == 0) {
            resposta.render('resposta_login', {status: "Carro não encontrado!"})
          }else if (err) {
            resposta.render('resposta_login', {status: "Erro ao remover carro!"})
          }else {
            resposta.render('resposta_login', {status: "Carro removido com sucesso!"})        
          };
    })
})

app.get("/listar_carros", function(req, resp) {

    // busca todos os usuarios no banco de dados
    carros.find().toArray(function(err, items) {
        // renderiza a resposta para o navegador
        resp.render("lista_carros.ejs", { carros: items });
      });

});