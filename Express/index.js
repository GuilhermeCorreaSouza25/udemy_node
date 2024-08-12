const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hello World"); // apenas uma resposta por rota
});

app.get("/about", function(req, res){
    res.send("Hello About");
});

app.get("/contact", function(req, res){
    res.send("Hello Contact");
});

app.get("/blog/:artigo?", function(req, res){
    var artigo = req.params.artigo;
    if(artigo){
        res.send("<h2>Artigo: " + artigo + "</h2>");
    } else{
        res.send("Bem-vindo ao meu blog");
    }
})

app.get("/canal/youtube", function(req, res){
    var canal = req.query["canal"];
    res.send(canal)
})

app.listen(4000, function(error){
    if(error){
        console.log("Error in running the server", error);
    }else{
      console.log("Server is running on port", 4000);
    }
})