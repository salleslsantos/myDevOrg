import { api, track, LightningElement } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
//import STAGE from '@salesforce/schema/Opportunity.StageName';
//import ID_FIELD from '@salesforce/schema/Opportunity.Id';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class closedAction extends LightningElement {
    
    @api recordId;
    
    @api invoke(){
        //invoke é chamado quando clicamos no botão da quick action
    
        //montagem do objeto que será chamado no update record
        const fields = {
        Id: this.recordId,
        StageName: 'Closed'
        };
        const recordInput = {fields};

        //não deve usar @wire com updateRecord, porque updateRecord é uma função que 
        // você chama diretamente — diferente de outras funções como getRecord, 
        // que sim podem ser usadas com @wire.
        
        updateRecord(recordInput).then(()=>{
            //chamar modal
            this.callToast('deu bom!!!', 'registro criado!!!', 'success');
        }).catch(error=>{
            this.callToast('deu ruim!!!', 'não encerrou!!!!', 'error');
        })
    }

    callToast(title, message, variant){
        this.dispatchEvent(new ShowToastEvent({
            title, message, variant
        }))

    }


}