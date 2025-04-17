import { api, track, LightningElement } from 'lwc';
import hasPermission from '@salesforce/customPermission/CustomPermissionLWC';
import FORM_FACTOR from '@salesforce/client/formFactor';
import USERID from '@salesforce/user/Id';
import ISGUEST from '@salesforce/user/isGuest';

export default class checkPermission extends LightningElement {

    form = FORM_FACTOR;
    userId = USERID;
    isGuest = ISGUEST;

    get hasCustomPermission(){
        return hasPermission;
    }
}