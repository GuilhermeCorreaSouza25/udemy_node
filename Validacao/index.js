var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var session = require("express-session");
var flash =  require("express-flash");
var cookieParser = require("cookie-parser");

// biblioteca Validator.js

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(cookieParser("senha123fdad"));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(flash());

app.get("/", (req, res) => {
    var emailError = req.flash("emailError");
    var nomeError = req.flash("nomeError");
    var pontosError = req.flash("pontosError");

    var email = req.flash("email");
    var nome = req.flash("nome");
    var pontos = req.flash("pontos");

    emailError = (emailError == undefined || emailError.length == 0) ? undefined : emailError;
    nomeError = (nomeError == undefined || nomeError.length == 0) ? undefined : nomeError;
    pontosError = (pontosError == undefined || pontosError.length == 0) ? undefined : pontosError;

    email = (email == undefined || email.length == 0) ? undefined : email;
    nome = (nome == undefined || nome.length == 0) ? undefined : nome;
    pontos = (pontos == undefined || pontos.length == 0) ? undefined : pontos;

    res.render("index", {emailError, nomeError, pontosError, email: email, nome: nome, pontos: pontos});

    // res.render("index")
})

app.post("/form", (req, res) => {
    var {email, nome, pontos} = req.body;
    var emailError;
    var nomeError;
    var pontosError;

    if(email == undefined || email == ""){
        emailError = "O campo e-mail é obrigatório"
    }

    if(nome == undefined || nome == ""){
        nomeError = "O campo nome é obrigatório"
    }

    if(pontos == undefined || pontos < 20){
        pontosError = "O campo pontos é obrigatório"
    }

    if(emailError != undefined || nomeError != undefined || pontosError != undefined){
        // res.render("index", {emailError, nomeError, pontosError});
        req.flash("emailError", emailError);
        req.flash("nomeError", nomeError);
        req.flash("pontosError", pontosError);

        req.flash("email", email);
        req.flash("nome", nome);
        req.flash("pontos", pontos);

        res.redirect("/");
    }else{
        res.send("Formulário enviado com sucesso")
    }
})

app.listen(8000, (req, res) => {
    console.log("Servidor rodando na porta 8000");
})