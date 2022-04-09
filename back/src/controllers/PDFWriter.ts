import pdf from 'html-pdf'
import PdfException from '../exceptions/PdfException'
class PDFWriter{
    static writePdf(fileName: string, html: string){
        pdf.create(html, {}).toFile(fileName, (err) => {
            if(err){
                throw new PdfException().objectError("Houve um erro ao gravar o arquivo PDF") 
            }
        })
    }
}

export default PDFWriter