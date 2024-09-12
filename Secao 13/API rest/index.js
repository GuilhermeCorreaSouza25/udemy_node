const express = require("express");
const app = express();
const bodyParser =  require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const JWTSecret = "ahsjdohasjhfuiafueghrhjgeanadbssahduatreea"

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


function auth(req, res, next){
    const authToken = req.headers['authorization']
    
    if(authToken != undefined){
        const bearer = authToken.split(' ');
        var token = bearer[1];
        jwt.verify(token, JWTSecret, (err, data) => {
            if(err){
                res.status(401).json({err: "Token inválido"})
            }else{
                req.token = token;
                req.loggedUser = {id: data.id, email: data.email};
                next();
            }
        })
    }
}


var DB = {
    "games": [
        {
            id: 1,
            name: "Call of Duty",
            year: 2019,
            price: 60
        },
        {
            id: 2,
            name: "Sea of thieves",
            year: 2019,
            price: 32
        },
        {
            id: 3,
            name: "Minecraft",
            year: 2012,
            price: 45
        }
    ],
    "users": [
        {
            id: 1,
            name: "Lucas",
            email: "lucas@teste.com",
            password: "123456"
        },
        {
            id: 2,
            name: "João",
            email: "joao@teste.com",
            password: "123456"
        }
    ]
}


app.get("/games",auth, (req, res) => {
    res.statusCode = 200;
    res.json(DB.games)
})

app.get("/games/:id", (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
        var id = parseInt(req.params.id)
        var game = DB.games.find(g => g.id == id)
        if(game != undefined){
            res.statusCode = 200
            res.json(game)
        }else{
            res.sendStatus(404)
        }
    }
})

app.post("/games", (req, res) => {
    var {name, year, price} = req.body

    DB.games.push({
        id: 4,
        name,
        year,
        price
    })

    res.sendStatus(200)
})


app.delete("/games/:id", (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
        var id = parseInt(req.params.id)
        var index = DB.games.findIndex(g => g.id == id)
        if(index == -1){
            res.sendStatus(404)
        }else{
            DB.games.splice(index, 1)
            res.sendStatus(200)
        }
    }
})


app.put("/games/:id", (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
        var id = parseInt(req.params.id)
        var game = DB.games.find(g => g.id == id)
        if(game != undefined){
            var {name, year, price} = req.body

            if(name != undefined){
                game.name = name
            }

            if(year != undefined){
                game.year = year
            }

            if(price != undefined){
                game.price = price
            }

            res.sendStatus(200)
        }else{
            res.sendStatus(404)
        }
    }
})

app.post("/auth", (req, res) => {
    var {email, password} = req.body

    if(email != undefined){
        var user = DB.users.find(u => u.email == email)
        if(user != undefined){
            if(user.password == password){
                jwt.sign({id: user.id, email: user.email}, JWTSecret, {expiresIn: "48h"}, (err, token) => {
                    if(err){
                        res.status(400)
                        res.json({err: "Falha interna"})
                    }else{
                        res.status(200)
                        res.json({token: token})
                    }
                })
            }else{
                res.status(401)
                res.json({err: "Credenciais inválidas"})
            }

        }else{
            res.sendStatus(404)
        }
    }else{
        res.sendStatus(400)
    }
})

app.listen(45678, () => {
    console.log("Server running on port 45678")
})