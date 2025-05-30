import { api, track, LightningElement, wire } from 'lwc';
import {getRelatedListCount} from 'lightning/uiRelatedListApi';

export default class getRelatedListCountDemo extends LightningElement {
    
    @api recordId;
    @api objectApiName;
    counter;

    connectedCallback() {
    console.log('recordId recebido: ', this.recordId);
    }

    @wire(getRelatedListCount,{
        parentRecordId: '0014P00002hwwt7QAA',
        //parentRecordId: '$recordId',
        relatedListId: 'Contacts'
    })
    recordCount({data,error}){
        if(data){
            console.log('deu bom: ',JSON.stringify(data));
            console.log('deu bom 2: ',data);
            console.log('recordId: ',this.recordId);
            this.counter = data.count;
        }
        if(error){
            console.log('deu ruim: ',error);
        }
    }

}