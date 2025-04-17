import { api, track, LightningElement, wire } from 'lwc';
import ACCOUNT_OBJ  from '@salesforce/schema/Account';
import { getPicklistValuesByRecordType, getObjectInfo } from 'lightning/uiObjectInfoApi';

export default class getPicklistValuesByRecordTypeDemo extends LightningElement {

    recType;

    @wire(getObjectInfo,{ objectApiName:ACCOUNT_OBJ})
    objInfo({data,error}){
    if(data){
            console.log('data-picklist by rectype: ',data);
            this.recType = data.defaultRecordTypeId;
            console.log('rectype: ',this.recType);
    }
    }

    @wire (getPicklistValuesByRecordType, {
        objectApiName: ACCOUNT_OBJ,
        recordTypeId:'$recType'})
        picklistHandler({data,error}){
            if(data){
                console.log('picklist by rectype: ',data);
            }
            if(error){
                console.log('error: ',error);
            }
        }

}