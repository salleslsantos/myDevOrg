public with sharing class pdfPageController {
    public String pdfText{get;set;}

    public pdfPageController(){
        pdfText = String.escapeSingleQuotes(
            //escapeSingleQuotes: Isso é usado para evitar problemas de parsing ou injeção quando essa string for usada no Visualforce. Exemplo: O cliente disse: 'quero desconto' vira O cliente disse: \'quero desconto\'
            ApexPages.currentPage().getParameters().get('pdfText')
        );
}
}