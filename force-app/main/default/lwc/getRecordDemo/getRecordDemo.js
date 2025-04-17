import { api, track, LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue, getFieldDisplayValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

export default class getRecordDemo extends LightningElement {
    @api recordId;
    name;
    annualRev;
    phone;
    annualRevDisplay;
    @wire(getRecord, 
        { 
            recordId: '$recordId', 
            fields: [NAME_FIELD, PHONE_FIELD, ANNUALREVENUE_FIELD] 
        })
        wiredRecord({ error, data }){
            if(data){
                console.log('wiredRecord data: ',data);
                //this.name = data.fields.Name.value;
                this.name = getFieldValue(data, NAME_FIELD);
                this.annualRev = data.fields.AnnualRevenue.value;
                this.annualRevDisplay = getFieldDisplayValue(data, ANNUALREVENUE_FIELD);
                this.phone = data.fields.Phone.value;
            }
            if(error){
                console.log('wiredRecord error: ',error);
            }
        }
}