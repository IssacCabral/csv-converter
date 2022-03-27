import {readFile} from 'fs'
import ReaderException from '../exceptions/ReaderException'

class Reader{
    read(filePath: string){
        readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
            if(err) throw new ReaderException().objectError("Ocorreu um erro de leitura no arquivo")
            console.log(data)
        })
    }
}

export default new Reader()
// throw new MyExceptions().readerException("falha ao ler o arquivo") 