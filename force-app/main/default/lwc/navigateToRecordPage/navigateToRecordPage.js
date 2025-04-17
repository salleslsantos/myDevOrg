import { api, track, LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class navigateToRecordPage extends NavigationMixin (LightningElement) {
    recordViewMode(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId:'003Ke0000065AB2IAM',
                objectApiName: 'Contact',
                actionName: 'view'
            }
    })
}

recordEditMode(){
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            recordId:'003Ke0000065AB2IAM',
            objectApiName: 'Contact',
            actionName: 'edit'
        }
})
}
}