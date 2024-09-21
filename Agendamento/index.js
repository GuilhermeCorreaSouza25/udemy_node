const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/agendamento");

app.get("/", (req, res) => {
    res.send("Hello World");
    }
);

app.get("/cadastro",(req, res) => {
    res.render("createView");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    }
);