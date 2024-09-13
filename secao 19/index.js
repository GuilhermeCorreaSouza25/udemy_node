var database = require("./database");

var dados = {
    nome: "Sea of thieves",
    preco: 100.00
}

var query = database.insert(dados).into("games").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
});

