import { api, track, LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
//import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ACC_OBJ from '@salesforce/schema/Account';

export default class getPicklistValuesDemo extends LightningElement {
    recordtype;
    selectedIndustry = '';
    industryOpt = [];

    @wire(getObjectInfo, { objectApiName: ACC_OBJ })
    objectInfo({data,error}){
        if(data){
            console.log('getObjectInfo success: ',data);
            this.recordtype = data.defaultRecordTypeId;
            console.log('recordtype: ',this.recordtype);

        }
        if(error){
            console.log('error: ',error);
        }
    }

    //o $ garante que getPicklistValues seja chamado somente após recordtype ter um valor válido.
    @wire(getPicklistValues, {recordTypeId:'$recordtype',fieldApiName: INDUSTRY_FIELD})
    industryPicklist({data,error}){
        if(data){
            console.log('getPicklistValues success: ', data);
            this.industryOpt = [...this.generatePicklist(data)];
        }
        if(error){
            console.log('error: ', error);
        }
    }


    generatePicklist(data){
        return data.values.map(item=>({label:item.label, value: item.value}))
    }

    handleChange(event) {
        this.value = event.detail.value;
    }

}