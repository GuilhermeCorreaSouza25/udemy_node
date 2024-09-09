class Leitor{
    Ler(caminho){
        return "Conteúdo do arquivo!";
    }
}

class Escritor{
    Escrever(arquivo, conteudo){
        console.log(`Conteúdo escrito: ${conteudo}`);
    }
}

class Criador{
    Criar(nome){
        console.log(`Arquivo criado: ${nome}`);
    }
}

class Deletador{
    Deletar(nome){
        console.log(`Arquivo deletado: ${nome}`);
    }
}

class GerenciadorDeUsuarios{
    constructor(){
        this.criador = new Criador();
        this.escritor = new Escritor();
    }

    SalvarListaDeUsuarios(lista){
        this.criador.Criar("usuarios.txt");
        this.escritor.Escrever("usuarios.txt", lista);
    }
}

class ManipuladorDeArquivo{
    constructor(nomeDoArquivo){
        this.nomeDoArquivo = nomeDoArquivo;
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador = new Criador();
        this.deletador = new Deletador();
    }
}

var manipulador = new ManipuladorDeArquivo("meuarquivo.txt");

manipulador.leitor.Ler();
manipulador.escritor.Escrever();
manipulador.criador.Criar();
manipulador.deletador.Deletar();

var gerenciador = new GerenciadorDeUsuarios();

gerenciador.SalvarListaDeUsuarios(["Victor", "Gabriel", "João"]);