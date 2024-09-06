// setTimeout(()=>{
//     console.log('Meu nome é guilherme')
// }, 5000)

// function enviarEmail(corpo, para, callback){
//     setTimeout(()=>{
//         console.log(`
//         Para: ${para}
//         ----------------
//         ${corpo}
//         ----------------
//         De: Guilherme
//         `)
//         callback()
//     }, 8000);
// }

// console.log('Inicio do envio de e-mail!');
// enviarEmail('Oi, seja bem vindo ao guia', 'guilhermecorreasouza@gmail.com', ()=>{
//     console.log('TUDO OK!');
// })
// console.log('Seu e-mail foi enviado, deve chegar em minutos');

// function enviarEmail(corpo, para){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let deuErro = true;
//             if(deuErro){
//                 resolve({time: 6, to: "guilhermecorreasouza@gmail.com"}); // OK
//             }else{
//                 reject("Fila cheia"); // FALHA
//             }
//         }, 5000);
//     });
// }

// enviarEmail("Olá mundo", "guilhermecorreasouza@gmail.com").then(({time, to})=>{
//     console.log(`
//         Tempo de envio: ${time}
//         ----------------
//         Para: ${to}
//         ----------------
//         Deu tudo certo!
//         `);
// }).catch((erro)=>{
//     console.log("Deu erro!" + erro);
// })

function pegarId(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(5);
        }, 1500);
    });
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("guilhermecorreasouza@gmail.com")
        }, 2000);
    });
}

function enviarEmail(corpo, para){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let deuErro = false;
            if(!deuErro){
                resolve({time: 6, to: `
                     + para +
                    `
                    }); // OK
            }
            else{
                reject("Fila cheia"); // FALHA
            }
        }
        , 5000);
    }
    );
}

// pegarId().then((id)=>{
//     buscarEmailNoBanco(id).then((email)=>{
//         enviarEmail(email,"Olá como vai?").then((resposta)=>{
//             console.log("Email enviado com sucesso!");
//         }
//         ).catch((erro)=>{
//             console.log(erro);
//         }
//         );
//     }
//     );
// })

async function principal(){
    var id = await pegarId();
    var email = await buscarEmailNoBanco(id);
    try{
        await enviarEmail("Olá, como vai?", email);
        console.log("Email enviado com sucesso!");
        }
    catch(erro){
        console.log(erro);
    }
    
}