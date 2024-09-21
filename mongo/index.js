const mongoose = require("mongoose");
const articleModel = require('./article')


mongoose.connect("mongodb://localhost:27017/aprendendoMongo");

const Article = mongoose.model("Article", articleModel);


Article.findByIdAndUpdate("66ee0336419dd9596f51b656", {title: "Teste", author: "Souza", body: "testando update"}).then(() => {
    console.log("update realizado com sucesso");
}).catch(erro => {
    console.log("Erro ao realizar update");
})


// Article.find({'_id': '66ee0490a63f77fd20ab0a9c'}).then(article => {
//     console.log(article);
// }).catch(erro => {
//     console.log(erro);
// })

// Article.findByIdAndDelete("66ee0490a63f77fd20ab0a9c").then(() => {
//     console.log("Artigo deletado com sucesso!");
// }).catch(erro => {
//     console.log(erro);
// })

// Article.find({}).then(articles => {
//     console.log(articles);
// }).catch(erro => {
//     console.log(erro);
// })

// const artigo = new Article({title: "Analise de sentimentos no Twitter e Whatsapp",
//             author: "Guilherme Corrêa",
//             body: "Uma análise de dados relacionados a mensagens compartilhadas no twitter e whatsapp com o tema de meio ambiente",
//             special: true,
//             resume:{
//                 content: "Uma analise de sentimentos das mensagens dos datasets produzidos",
//                 author: "Guilherme Corrêa"
//             }
//         });

// artigo.save().then(() => {
//     console.log("Artigo salvo com sucesso!");
// }).catch(err => {
//     console.log(err);
// });