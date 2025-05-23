import { api, track, LightningElement } from 'lwc';

export default class googleAction extends LightningElement {
    @api recordId;

    @api invoke(){
        console.log('invoke clicked');
        console.log('ID: ',this.recordId);
        window.open("www.google.com.br","_blank");
    }

}