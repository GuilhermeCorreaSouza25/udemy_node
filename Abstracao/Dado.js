class Dado{
    constructor(faces){
        this.faces = faces;
    }

    rolar(){
       console.log("Resultado do dado: " + this.GetRandomIntInclusive(1, this.faces));
    }

    GetRandomIntInclusive(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

var d6 = new Dado(6);
var d12 = new Dado(12);
var d20 = new Dado(20);

d6.rolar();
d12.rolar();
d20.rolar();