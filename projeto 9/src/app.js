// Dependências
let express = require("express");
let app = express();
let mongoose = require("mongoose");
let userSchema = require("./models/User"); // Importa o esquema, não o modelo diretamente
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let JWTSecret = "adhuasidihfgiuaghaiysduqwherjqfjhbjaskhgdtysxtyqwyietqwrghbhvnmkn"
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Conexão com MongoDB
mongoose.connect("mongodb://localhost:27017/projeto9").then(() => {
    console.log("Conexão com o MongoDB realizada com sucesso");
}).catch(erro => {
    console.log(erro);
});

// Criação do modelo User a partir do esquema importado
let User = mongoose.model("User", userSchema);

// Rotas
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/user", async (req, res) => {
    
    if(req.body.name == "" || req.body.email == "" || req.body.password == ""){
        res.sendStatus(400);
        return;
    }

    try {
        let user = await User.findOne({"email": req.body.email})
        if(user != undefined){
            res.statusCode = 400;
            res.json({error: "E-mail já cadastrado"});
            return;
        }

        let password = req.body.password;
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(password, salt);
        
        let newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        });
        await newUser.save();  // Salva o novo usuário no banco
        res.json({ email: req.body.email });  // Retorna o email como resposta
    } catch (erro) {
        console.log(erro);
        res.status(500).send("Erro ao criar usuário");
    }
});

app.post("/auth", async(req, res) => {
    let { email, password } = req.body;

    let user = await User.findOne({"email": email})
    if(user == undefined){
        res.statusCode = 400;
        res.json({errors: {email: "E-mail não cadastrado"}})
        return;
    }

    let isPasswordRight = await bcrypt.compare(password,user.password);

    if(!isPasswordRight){
        res.statusCode = 400;
        res.json({errors: {password: "Senha incorreta"}})
        return;
    }

    jwt.sign({email, name: user.name, id: user._id}, JWTSecret, {expiresIn:'48h'}, (err, token) => {
        if(err){
            res.status(400).json({error: "Falha interna"});
        } else {
            res.status(200).json({token});
        }
    })
})

app.delete("user/:email", async (req, res) => {
    await User.deleteOne({"email": req.params.email});
    res.sendStatus(200);
})

// Exportar o app
module.exports = app;
