import {IFileErrors, IErrorModel} from './IFileErrors'

class ReaderException implements IFileErrors{
    objectError(message: string): IErrorModel {
        return {
            name: "Erro de Leitura",
            message
        }
    }
}

export default ReaderException