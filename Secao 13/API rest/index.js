const express = require("express");
const app = express();
const bodyParser =  require("body-parser");

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


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
    ]
}


app.get("/games", (req, res) => {
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

app.listen(45678, () => {
    console.log("Server running on port 45678")
})