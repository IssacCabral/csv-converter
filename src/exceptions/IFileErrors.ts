interface IErrorModel{
    name: string
    message: string
}

interface IFileErrors{
    objectError(message: string): IErrorModel
}

export {IFileErrors, IErrorModel}