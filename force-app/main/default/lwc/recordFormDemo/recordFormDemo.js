import { api, track, LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJ from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class recordFormDemo extends LightningElement {
    
    @api recordId; //consigo acessar o id do registro
    
    objectName = ACCOUNT_OBJ;
    fieldList = [NAME_FIELD, ANNUAL_REVENUE_FIELD, TYPE_FIELD, INDUSTRY_FIELD];

    successHandler(event){ 
        let msg = 'registro criado: '+event.detail.id;
        this.fireToast('Success', msg, 'success');

    }

    fireToast(title, message, variant){
        console.log('entrei no showToast');
        console.log('title: ' + title);
        console.log('message: ' + message);
        console.log('variant: ' + variant);
        const evt = new ShowToastEvent({
            title,
            message,
            variant
        })
        this.dispatchEvent(evt);
    }
}