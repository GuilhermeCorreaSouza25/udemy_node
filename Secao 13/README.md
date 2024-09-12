# API de Jogos
API para listar os jogos cadastrados no banco de dados de acordo com o usuário logado no sistema.
## Endpoints
### GET /games
Esse endpoint é responsável por retornar todos os jogos cadastrados no banco de dados.
#### Parametros
Nenhum
#### Respostas
##### OK! 200
Caso essa resposta aconteça você vai receber a listagem de todos os jogos.

Exemplo de resposta:
```
[
    {
        "id": 1,
        "name": "Call of Duty",
        "year": 2019,
        "price": 60
    },
    {
        "id": 2,
        "name": "Sea of thieves",
        "year": 2019,
        "price": 32
    },
    {
        "id": 3,
        "name": "Minecraft",
        "year": 2012,
        "price": 45
    }
]
```
##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição. Motivos token inválido, Token expirado.

Exemplo de resposta:
```
{
    "err": "Token inválido"
}
```





### POST /auth
Esse endpoint é responsável por fazer o processo de login.
#### Parametros
email: E-mail do usuário cadastrado no sistema.

password: Senha do usuário cadastrado no sistema, com aquele determinado e-mail.

Exemplo:
```
{
    "email": "joao@teste.com",
    "password": 123456
}
```
#### Respostas
##### OK! 200
Caso essa resposta aconteça você vai receber o token JWT para conseguir acessar endpoints protegidos na API.

Exemplo de resposta:
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJqb2FvQHRlc3RlLmNvbSIsImlhdCI6MTcyNjE4NTIyNywiZXhwIjoxNzI2MzU4MDI3fQ.SM3oB8v4tv9RAdDGV5iLh1Wo5W7Awi4uanbJ7Rx41n8"
}
```
##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição. Motivos senha ou e-mail incorretos.

Exemplo de resposta:
```
{
    "err": "Credenciais inválidas!"
}
```
