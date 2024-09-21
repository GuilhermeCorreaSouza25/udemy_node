const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const appointmentService = require("./services/AppointmentService");
const AppointmentService = require("./services/AppointmentService");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

// Conexão com o MongoDB sem o useFindAndModify (removido na v6 do Mongoose)
mongoose.connect("mongodb://localhost:27017/agendamento");

// Rotas
app.get("/", (req, res) => {
    res.render("IndexView");
});

app.get("/cadastro", (req, res) => {
    res.render("createView");
});

app.post("/create", async (req, res) => {
    try {
        var status = await appointmentService.Create(
            req.body.name,
            req.body.email,
            req.body.description,
            req.body.cpf,
            req.body.date,
            req.body.time
        );

        if (status) {
            res.redirect("/");
        } else {
            res.send("Ocorreu uma falha!");
        }
    } catch (error) {
        console.error("Erro ao criar agendamento:", error);
        res.status(500).send("Erro no servidor");
    }
});

app.get("/getcalendar", async (req, res) => {
    try {
        var appointments = await AppointmentService.GetAll(false);
        res.json(appointments);
    } catch (error) {
        console.error("Erro ao obter calendário:", error);
        res.status(500).send("Erro no servidor");
    }
});

app.get("/event/:id", async (req, res) => {
    try {
        var appointment = await AppointmentService.GetById(req.params.id);
        console.log(appointment);
        res.render("EventView", { appo: appointment });
    } catch (error) {
        console.error("Erro ao obter evento:", error);
        res.status(500).send("Erro no servidor");
    }
});

app.post("/finish", async (req, res) => {
    try {
        var id = req.body.id;
        var result = await AppointmentService.Finish(id);
        res.redirect("/");
    } catch (error) {
        console.error("Erro ao finalizar agendamento:", error);
        res.status(500).send("Erro no servidor");
    }
});

app.get("/list", async (req, res) => {
    try {
        var appos = await AppointmentService.GetAll(true);
        res.render("ListView", { appos });
    } catch (error) {
        console.error("Erro ao listar agendamentos:", error);
        res.status(500).send("Erro no servidor");
    }
});

app.get("/searchresult", async (req, res) => {
    try {
        var appos = await AppointmentService.Search(req.query.search);
        res.render("ListView", { appos });
    } catch (error) {
        console.error("Erro ao buscar agendamentos:", error);
        res.status(500).send("Erro no servidor");
    }
});

// Configuração do intervalo para envio de notificações
var pollTime = 1000 * 60 * 5;

setInterval(async () => {
    try {
        await AppointmentService.SendNotification();
    } catch (error) {
        console.error("Erro ao enviar notificações:", error);
    }
}, pollTime);

// Iniciar o servidor
app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});
