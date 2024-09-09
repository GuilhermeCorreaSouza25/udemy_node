class Filme{
    constructor(titulo, ano, genero, diretor, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.duracao = duracao;
        this.atores = [];
    }

    Reproduzir(){
        console.log('Reproduzindo...');
    }

    Pausar(){
        console.log('Pausado ||');
    }

    Avancar(){
        console.log('Avançar >>');
    }

    Fechar(){
        console.log('Fechando X');
    }

    Ficha(){
        console.log('Título: ' + this.titulo);
        console.log('Ano: ' + this.ano);
        console.log('Gênero: ' + this.genero);
        console.log('Diretor: ' + this.diretor);
        console.log('Atores: ' + this.atores);
        console.log('Duração: ' + this.duracao);
    }
}

var vingadores = new Filme("Vingadores 2", 2014, "Ação", "Joss Whedon", 160);

vingadores.Ficha();
// vingadores.titulo = 'Vingadores';
// vingadores.ano = 2014;
// vingadores.genero = 'Ação';

// console.log(vingadores);

// var batman = new Filme();

// batman.titulo = 'Batman';
// batman.ano = 2009;
// batman.genero = 'Ação';

// console.log(batman.titulo);
// console.log(batman.genero);