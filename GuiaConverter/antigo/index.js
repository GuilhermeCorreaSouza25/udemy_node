const fs = require("fs");

fs.readFile("./usuario.json", {encoding:'utf-8'}, (erro, dados) => {
    if (erro) {
        console.log("Erro ao ler o arquivo");
    } else {
        const conteudo = JSON.parse(dados);
        console.log(conteudo);

        conteudo.nome = "Guilherme";
        conteudo.curso = "Formação React";
        conteudo.categoria ="React";

        fs.writeFile("./usuario.json", JSON.stringify(conteudo), (erro) => {
            if (erro) {
                console.log("Erro ao criar o arquivo");
            }
        })
    }
})




// fs.writeFile("./guilherme.correa", "Nome: Guilherme",(err) => {
//     if(err){
//         console.log("Erro ao criar o arquivo");
//     }
// })




// fs.readFile("./guilherme.correa",{encoding: 'utf-8'}, (erro, dados) => {
//     if (erro) {
//         console.log("Erro ao ler o arquivo");
//     } else {
//         console.log(dados);
//     }
// })