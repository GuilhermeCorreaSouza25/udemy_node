var express = require('express')
var app = express();
var http = require("http").createServer(app)
var io = require('socket.io')(http);

io.on("connection", (socket) => {

    socket.on("disconnect", () => {
        console.log("Client disconnected " + socket.id);
    })


    // socket.on("boasvindas", (data => {
    //     console.log("EXECUTANDO EVENTO DE BOAS VINDAS")
    //     console.log(data);
    // }))

    // socket.on("palavra", (data) => {
    //     console.log("EXECUTANDO EVENTO DE PALAVRA")
    //     console.log(data);
    //     socket.emit("resultado", data + " show de bola");
    // })
})


app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
})


http.listen(3000, () => {
    console.log('listening on *:3000');
})