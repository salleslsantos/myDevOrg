import { api, track, LightningElement, wire } from 'lwc';
import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPP_OBJ from '@salesforce/schema/Opportunity';

export default class getObjectInfoDemo extends LightningElement {
    defaultRecordTypeId;
    apiName;

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo({data,error}){
        if(data){
            console.log('data: ',data);
            this.defaultRecordTypeId = data.defaultRecordTypeId;
            this.apiName = data.apiName;
        }
        if(error){
            console.log('error: ',error);
        }
    }

    objInfos;
    objApiNames = [ACCOUNT_OBJECT, OPP_OBJ];
    @wire(getObjectInfos, { objectApiNames: '$objApiNames' })
    objInfoHandler({data}){
        if(data){
            console.log('data obj infos: ',data);
            this.objInfos = data;
        }
    }
}