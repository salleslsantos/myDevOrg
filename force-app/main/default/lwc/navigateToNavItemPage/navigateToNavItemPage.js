import { api, track, LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class navigateToNavItemPage extends NavigationMixin (LightningElement) {
    navigateToTab(){
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                 apiName: 'Styling_in_LWC'
            }
    })
}

    navigateToRelRec(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId:'0014P000027ZY8KQAW',
                objectApiName:'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            }
    })

}
}