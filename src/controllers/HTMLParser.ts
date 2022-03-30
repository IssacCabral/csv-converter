import ejs from 'ejs'

class HtmlParser{
    static async parse(table: any){
        return await ejs.renderFile("src/html/table.ejs", {header: table.Header, rows: table.Rows})
    }
}

export default HtmlParser