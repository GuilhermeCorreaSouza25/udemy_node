const express = require("express");
const app = express();
const multer = require("multer");

app.set('view engine', 'ejs');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + Date.now());
    }
})

const upload = multer({storage});

app.get("/", (req, res) => {
    res.render('index');
})

app.post("/upload", upload.single("file"), (req, res) => {
    res.send("Arquivo recebido");
})

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
})