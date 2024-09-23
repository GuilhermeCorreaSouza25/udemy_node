var pdf = require("html-pdf");
var ejs = require("ejs");


var nome = "Guilherme Correa";
var curso = "Formação Nodejs";
var categoria =  "JavaScript"


ejs.renderFile("./index.ejs", {nome: nome, curso: curso, categoria: categoria}, (err, html) => {
    if(err) return console.log(err);
    pdf.create(html,{}).toFile("./teste.pdf", (err, res) => {
        if(err) return console.log(err);
        console.log(res);
    })
})

// var conteudo = `
//     <h1 style='color: red'>Meu nome é Guilherme</h1>
//     <hr>
//     <p>Eu tenho 28 anos</p>
// `

// pdf.create(conteudo,{}).toFile("./teste.pdf", (err, res) => {
//     if(err) return console.log(err);
//     console.log(res);
// })