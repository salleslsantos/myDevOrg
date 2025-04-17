import { api, track, LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJ from '@salesforce/schema/Contact';

export default class getListUiDemo extends LightningElement {

    contacts;

    @wire(getListUi, {
        objectApiName: CONTACT_OBJ,
        listViewApiName: 'AllContacts',
        pageSize:10
    })
    handleListView({data,error}){
        if(data){
            console.log('listview success:',data);
            this.contacts = data.records.records;
        }
        if(error){
            console.log('listview error');
        }
    }
}