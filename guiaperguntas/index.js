const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/:nome/:lang", (req, res) => {
  var nome = req.params.nome;
  var lang = req.params.lang;
  var exibirMsg = false;

  var produtos = [
    {nome: "Doritos", preco: 3.14},
    {nome: "Coca-cola", preco: 5},
    {nome: "Leite", preco: 2.45},
    {nome: "Carne", preco: 25},
    {nome: "Arroz", preco: 10},
  ]

  res.render("index", {
    nome: nome,
    lang: lang,
    empresa: "Soter Tec",
    inscritos: 10,
    msg: exibirMsg,
    produtos: produtos
  });
});

app.listen(8080, () =>{
  console.log("App rodando!");
});