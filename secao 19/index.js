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
// database.where({id: 1}).update({preco: 100}).table("games").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// ORDER BY
// database.select().table("games").orderBy("preco", "desc").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });


// Associated inserts
// database.insert({
//     nome: "Blizzard",
//     game_id: 3
// }).table("estudios").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

// JOIN
// database.select().table("games").innerJoin("estudios","estudios.game_id","games.id").then(data => {
//     var estudioGamesArray = data;
//     var game = {
//         id: 0,
//         nome: "",
//         estudios: []
//     }
//     game.id = data[0].id;
//     game.nome = data[0].nome;

//     data.forEach(estudio => {
//         game.estudios.push({nome: estudio.estudio_nome});
//     });

//     console.log(game);
// }).catch(err => {
//     console.log(err);
// });

// database.select([
//         "estudios.nome as estudio_nome",
//         "games.nome as game_nome",
//         "games.preco"
//     ]).table("games_estudios")
//     .innerJoin("games","games.id","games_estudios.game_id")
//     .innerJoin("estudios","estudios.id","games_estudios.estudio_id")
//     .then(data =>{
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
// })

// Transactions
async function testeTransacao(){
    try{
        await database.transaction(async trans => {
            await database.insert({nome: "Microsoft"}).table("estudios");
            await database.insert({nome: "Apple"}).table("estudios");
            await database.insert({nome: "Alphabet"}).table("estudios");
            await database.insert({nome: "Amazon"}).table("estudios");
            await database.insert({nome: "Meta,Inc."}).table("estudios");
            await database.insert({nome: "Tencent"}).table("estudios");
            await database.insert({nome: "Disney"}).table("estudios");
        })
    }catch(err){
        console.log(err);
    }
}
testeTransacao();
