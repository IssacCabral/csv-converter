import Reader from "./controllers/Reader";
import ReaderException from "./exceptions/ReaderException";
const leitor = new Reader()

const path = "src/csv/users.csv"

async function main(){
    try{
        let dados = await leitor.read(path)
        if(dados === undefined){
            throw new ReaderException().objectError("Ocorreu um erro na leitura do arquivo")
        }
        console.log(dados)
    } catch(err){
        console.log(err)
    }
}

main()