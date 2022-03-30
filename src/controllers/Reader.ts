import {readFile} from 'fs'
import ReaderException from '../exceptions/ReaderException'
import util from 'util'

// class Reader{
//     async read(filePath: string){
//         try{
//             const data = await readFile(filePath, {encoding: 'utf-8'})
//             return data
//         } catch(err){
//             console.log(err)
//         }
        
//         // if(data == undefined){
//         //     throw new ReaderException().objectError("Ocorreu um erro na leitura do arquivo")
//         // }
                
//         // return data
//     }
// }

class Reader{
    private reader: any
    
    constructor(){
        this.reader = util.promisify(readFile)
    }

    async read(filePath: string){
        try{
            return await this.reader(filePath, "utf-8")
        } catch(err){
            return undefined
        }
    }
}

export default new Reader()