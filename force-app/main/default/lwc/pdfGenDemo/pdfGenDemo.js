import { api, LightningElement } from 'lwc';
import generatePdf from '@salesforce/apex/pdfController.generatePdf'

export default class pdfGenDemo extends LightningElement {
    
    @api recordId;
    imageUrl = 'https://logospng.org/download/nba/logo-nba-2048.png';
    invoiceData={
            invoiceNumber:"INV-0015",
            invoiceDate:"06/15/2020",
            companyName:"salles co"
    }
    clientData={
        client:'Acme corp',
        username: 'john smith',
        email: 'john@nocompany.com'
    }
    services=[
        {name: 'consultant fee', amount:10000},
        {name: 'analyst fee', amount:20000},
        {name: 'manager fee', amount:30000}
    ]

    pdfHandler(){
        let content = this.template.querySelector('.container');
        console.log('@api recordId: ',this.recordId);
        console.log('conteúdo do container: ',content.outerHTML);
        generatePdf({
            recordId: this.recordId,
            htmlData: content.outerHTML
        }).then(result=>{
            console.log('deu bom no result: ',result);
        }).catch(error=>{
            console.error('deu ruim no result : ',error);
        })
    }


}