class Processor{
    static process(data: string){
        let line = data.split('\r\n')
        let rows = line.map(line => {
            return line.split(",")
        })
        
        return rows
    }
}

export default Processor