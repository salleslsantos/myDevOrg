import { api, track, LightningElement } from 'lwc';
import ACCOUNT_OBJ from '@salesforce/schema/Account';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class recordEditCustom extends LightningElement {
    objName = ACCOUNT_OBJ;
    inputValue='';

    handleChange(event){
        this.inputValue = event.target.value;
    }

    handleSubmit(event){
        event.preventDefault();//stop page refresh
        const inputCmp = this.template.querySelector('lightning-input');
        const value = inputCmp.value;

        if(!value.includes('Australia')){
            inputCmp.setCustomValidity('the account must include australia!');
        }
        else{
            inputCmp.setCustomValidity('');
            const fields = event.detail.fields;
            fields.Name = value;
            this.template.querySelector('lightning-record-edit-form').submit(fields);
        }
        inputCmp.reportValidity();//throw error on screen
    }

    successHandler(event){
        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'Account created',
            variant: 'success'
        });

        this.dispatchEvent(evt);
    }

}