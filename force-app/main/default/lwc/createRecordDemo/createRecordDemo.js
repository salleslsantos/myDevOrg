import { api, wire, LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJ from '@salesforce/schema/Contact';

export default class createRecordDemo extends LightningElement {

    formFields={};

    handleChange(event){
        const {name, value} = event.target;
        this.formFields[name] = value;
        console.log('handleChange: ',this.formFields);
        console.log('const {name, value}: ',event.target);
        console.log('value: ',value);
        console.log('name: ',name);
    }

    handleClick(){
        const recordInput = {
            apiName: CONTACT_OBJ.objectApiName, 
            fields: this.formFields
        };
        
        createRecord(recordInput).then(result=>{
            this.showToast('Sucesso', 'Registro criado!', 'success');
        }).catch(error=>{
            this.showToast('Deu ruim', 'Registro falhou!', 'error');
            console.log('entrou no erro: ',error);
        })

    }

    showToast(title, message, variant){
        const evt = new ShowToastEvent({
            title,
            message,
            variant
    });
    
    this.dispatchEvent(evt);
}

}