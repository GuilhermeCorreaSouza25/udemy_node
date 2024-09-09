class Animal{

    constructor(nome, idade, preco){
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    }

    ChecarEstoque(){
        return 10;
    }
}

class Cachorro extends Animal{
    
        constructor(nome, idade, preco){
            super(nome, idade, preco);
        }
    
        Latir(){
            return "Au Au";
        }
}

var dog = new Cachorro("Bob", 5, 250);

console.log(dog.ChecarEstoque());
console.log(dog.Latir());