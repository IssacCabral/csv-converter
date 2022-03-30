type arrType = Array<string>
type arrArrType = Array<Array<string>>

class Table{
    private header: arrType
    private rows: arrArrType = []

    constructor(arr: Array<Array<string>>){
        this.header = arr[0] // cabeçalho da tabela
        arr.shift() // remover o primeiro elemento do array para incluirmos apenas as linhas em rows
        arr.forEach(row => {
            this.rows.push(row)
        })
    }

    get Header(){
        return this.header
    }

    get Rows(){
        return this.rows
    }

    get RowsCount(){
        return this.Rows.length
    }

    get ColumnCount(){
        return this.Header.length
    }
}

export default Table