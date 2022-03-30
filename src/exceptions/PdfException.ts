import {IFileErrors, IErrorModel} from './IFileErrors'

class PdfException implements IFileErrors{
    objectError(message: string): IErrorModel {
        return {
            name: "Erro de escrita no pdf",
            message
        }
    }
}

export default PdfException