const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',  // Gmail é tratado como um serviço especial, não precisa de 'host' ou 'port'
    auth: {
        user: 'guilhermecorreasouza@gmail.com',  // Seu email
        pass: 'Guilherme25,'  // Sua senha do Gmail ou App Password
    }
});

transporter.sendMail({
    from: 'Guilherme Correa <guilhermecorreasouza@gmail.com>',  // Remetente
    to: 'guilhermecorreasouza@outlook.com',  // Destinatário
    subject: 'Hello',  // Assunto do email
    text: 'Hello world',  // Corpo do email em texto
    html: "teste <a href='https://github.com.br'>Link</a>"  // Corpo do email em HTML
}).then(message => {
    console.log("Email enviado: ", message);
}).catch(error => {
    console.log("Erro ao enviar email: ", error);
});



// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: true,
//         auth: {
//             user: 'guilhermecorreasouza@gmail.com',
//             pass: 'Guilherme25,'
//         }
//     }
// });

// transporter.sendMail({
//     from: 'Guilherme Correa <guilhermecorreasouza@gmail.com>',
//     to: 'guilhermecorreasouza@outlook.com',
//     subject: 'Hello',
//     text: 'Hello world',
//     html: "teste <a href='https://github.com.br'>"
// }).then(message => {
//     console.log(message);
// }).catch(erro =>{
//     console.log(erro);
// })