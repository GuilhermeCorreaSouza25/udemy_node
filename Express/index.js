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

app.listen(4000, function(error){
    if(error){
        console.log("Error in running the server", error);
    }else{
      console.log("Server is running on port", 4000);
    }

})