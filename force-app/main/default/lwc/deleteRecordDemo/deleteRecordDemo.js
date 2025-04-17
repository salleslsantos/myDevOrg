import { api, track, LightningElement } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class deleteRecordDemo extends LightningElement {

    recId;

    handleChange(event){
        this.recId = event.target.value;
    }

    handleDelete(){
        deleteRecord(this.recId).then((result)=>{
            console.log('registro removido');
            this.ShowToast("Registro removido", "success", "Atenção");
        })

    }

    ShowToast(message, variant, title){
        const evt = new ShowToastEvent({
            title,
            message,
            variant
        });
        this.dispatchEvent(evt);
    }

}