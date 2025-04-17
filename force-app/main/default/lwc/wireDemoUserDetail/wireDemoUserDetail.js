import { api, track, LightningElement, wire } from 'lwc';
import id from '@salesforce/user/Id';
import { getRecord} from 'lightning/uiRecordApi';
import FIELD_EMAIL from '@salesforce/schema/User.Email';
import FIELD_NAME from '@salesforce/schema/User.Name';
import FIELD_PHONE from '@salesforce/schema/User.Phone';
import FIELD_TITLE from '@salesforce/schema/User.Title';

const fields = [FIELD_NAME, FIELD_EMAIL, FIELD_PHONE, FIELD_TITLE];

export default class wireDemoUserDetail extends LightningElement {
    userId = id;
    //0054P000009tigNQAQ
    userDetail;
    userDetailProperty;

    @wire(getRecord, {recordId:'$userId',fields})
    userDetailHandler(response){
        console.log(response);
        let data = response.data;
        let error = response.error;

        if(data){
            this.userDetail = data.fields;
            console.log('data.fields: ',this.userDetail)
        }
    }

    @wire(getRecord, {recordId:'$userId',fields})
    userDetailProperty;
    //é uma boa prática fazer como no código anterior
}