public with sharing class pdfController {
    @AuraEnabled
    public static Attachment generatePdf(Id recordId, string htmlData){
        system.debug('ENTREI AQUI');
        system.debug('@api recordId: '+recordId);
        system.debug('htmlData: '+htmlData);

        Pagereference page = Page.renderAsPdf;
        //Aqui você está obtendo uma referência a uma página Visualforce chamada renderAsPdf
        page.getParameters().put('pdfText', htmlData);
        //Você está adicionando o conteúdo do HTML (htmlData) como parâmetro de URL chamado pdfText.Esse valor será recebido lá no controller da Visualforce Page

        contact con = new contact(Id = recordId);
        system.debug('id do contato: '+con.Id);

        Attachment att = new Attachment();
        att.name = 'invoice.pdf';
        att.ParentId = con.Id;
        att.body = page.getContentaspdf();
        //Esse método chama a página Visualforce (no caso renderAsPdf) e captura a resposta gerada como um arquivo PDF (Blob).Você usa isso para gerar o conteúdo real do PDF que será anexado ao registro
        att.IsPrivate = false;
        insert att;
        
        system.debug('id do anexo: '+att.Id);

        return att;
    }
    
}