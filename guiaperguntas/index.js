const express = require("express");
const app = express();
const bodyParser =  require("body-parser")
const connection = require('./database/database')

//database
connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com o banco de dados!")
  })
  .catch((msgErro) => {
    console.log(msgErro);
  }
);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',(req,res) =>{
  res.render("index");
})

app.get('/perguntar', (req,res)=>{
  res.render("perguntar");
})

app.post('/salvarpergunta', (req, res)=>{
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  res.send("Formulário recebido!")
})
// app.get("/:nome/:lang", (req, res) => {
//   var nome = req.params.nome;
//   var lang = req.params.lang;
//   var exibirMsg = false;

//   var produtos = [
//     {nome: "Doritos", preco: 3.14},
//     {nome: "Coca-cola", preco: 5},
//     {nome: "Leite", preco: 2.45},
//     {nome: "Carne", preco: 25},
//     {nome: "Arroz", preco: 10},
//   ]

//   res.render("index", {
//     nome: nome,
//     lang: lang,
//     empresa: "Soter Tec",
//     inscritos: 10,
//     msg: exibirMsg,
//     produtos: produtos
//   });
// });

app.listen(8080, () =>{
  console.log("App rodando!");
});