import pdf from 'html-pdf'

class PDFWriter{
    static writePdf(fileName: string, html: string){
        pdf.create(html, {}).toFile(fileName, (err) => {})
    }
}

export default PDFWriter