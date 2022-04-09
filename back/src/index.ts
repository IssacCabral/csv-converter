import reader from "./controllers/Reader";
import writer from "./controllers/Writer";
import PDFWriter from "./controllers/PDFWriter";

import ReaderException from "./exceptions/ReaderException";
import WriterException from "./exceptions/WriterException";
import Processor from "./controllers/Processor";
import Table from "./controllers/Table";
import HtmlParser from "./controllers/HTMLParser";

const path = "src/csv/users.csv"

async function main(){
    var dados
    var htmlProcessado: any
    var dadosProcessados: any

    try{
        dados = await reader.read(path)
        if(dados === undefined){
            throw new ReaderException().objectError("Ocorreu um erro na leitura do arquivo")
        }
        dadosProcessados = Processor.process(dados)
        const table = new Table(dadosProcessados)
        htmlProcessado = await HtmlParser.parse(table)
    } catch(err){
        console.log(err)
    }

    try{
        let writeResult = await writer.write("./html/" + Date.now() + ".html", htmlProcessado)
        if(!writeResult) throw new WriterException().objectError("Ocorreu um erro de escrita no arquivo!")
        PDFWriter.writePdf("./pdf/" + Date.now() + ".pdf", htmlProcessado)
        
    } catch(err){
        console.log(err)
    }
}

main()