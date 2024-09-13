var database = require("./database");

// var dados = [
//     {
//         nome: "Call of Duty",
//         preco: 120.00
//     },
//     {
//         nome: "Call of Duty 2",
//         preco: 245.00
//     },
//     {
//         nome: "GTA V",
//         preco: 32.68
//     }
// ]

// INSERT
// var query = database.insert(dados).into("games").then(data =>{
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// SELECT
// database.select(["id", "preco"]).table("games").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

// WHERE
// database.select()
//         .whereRaw("nome = 'GTA V' OR preco > 120")
//         .table("games").then(data => {
//             console.log(data);
//         }).catch(err => {
//             console.log(err);
//         });

// DELETE
// database.where({id: 3}).delete().table("games").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// UPDATE
database.where({id: 1}).update({preco: 100}).table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});