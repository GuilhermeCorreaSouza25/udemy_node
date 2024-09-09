const fs = require("fs");
const util = require("util");


class Reader{
    constructor(){
        this.reader = util.promisify(fs.readFile);
    }

    async Read(filepath){
        try{
            return await this.reader(filepath,"utf-8")
        }catch(err){
            return undefined;
        }
    }
    // Read(filepath){
    //     fs.readFile(filepath, {encoding:'utf-8'}, (erro, dados) => {
    //         if (erro) {
    //             console.log(erro);
    //         } else {
    //             console.log(dados);
    //         }
    //     });
    // }
}

module.exports = Reader;