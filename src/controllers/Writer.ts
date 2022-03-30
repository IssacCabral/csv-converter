import {writeFile} from 'fs'
import util from 'util'

class Writer{
    private writer: any

    constructor(){
        this.writer = util.promisify(writeFile)
    }

    async write(fileName: string, data: string){
        try{
            await this.writer(fileName, data)
            return true
        } catch(err){
            return false
        }
    }
}

export default new Writer()