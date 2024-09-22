let app = require("../src/app");
let supertest = require("supertest");
let request = supertest(app);

let mainUser = {name: "admin", email: "admin@gmail.com", password:"admin"}

beforeAll(() => {
    return request.post("/user").send(mainUser)
})

afterAll(() => {
    return request.delete(`/user/${mainUser.email}`)
})

describe("Cadastro de usuário",() => {
    test("Deve cadastrar um usuário com sucesso",() => {
        let time = Date.now();
        let email = `${time}@gmail.com`;

        let user = {
            name: "Guilherme",
            email,
            password: "123456"
        };

        return request.post("/user")
        .send(user)
        .then(res => {
            expect(res.statusCode).toEqual(200);
            expect(res.body.email).toEqual(email);
        }).catch(erro => {
            console.log(erro)
        })

    })

    test("Deve impedir que um usuário se cadastre com os dados vazios",() =>{
        let user = {
            name: "",
            email: "",
            password: ""
        };

        return request.post("/user")
        .send(user)
        .then(res => {
            expect(res.statusCode).toEqual(400);
        }).catch(erro => {
            console.log(erro)
        })
    })
    
    test("Deve impedir que um usuário se cadastre com o email repetido",() =>{
        let time = Date.now();
        let email = `${time}@gmail.com`;
        let user = {
            name: "Guilherme",
            email,
            password: "123456"
        };

        return request.post("/user").send(user).then(res => {
            expect(res.statusCode).toEqual(200);
            expect(res.body.email).toEqual(email);

            request.post("/user").send(user).then(res => {
                expect(res.statusCode).toEqual(400);
                expect(res.body.error).toEqual("E-mail já cadastrado")
            }).catch(erro => {
                console.log(erro)
            })

        }).catch(erro => {
            console.log(erro)
        })
    })
})