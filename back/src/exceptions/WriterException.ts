import {IErrorModel, IFileErrors} from './IFileErrors'

class WriterException implements IFileErrors{
    objectError(message: string): IErrorModel {
        return {
            name: "Erro de gravação",
            message
        }
    }
}

export default WriterException