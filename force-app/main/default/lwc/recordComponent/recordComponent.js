import { api, track, LightningElement } from 'lwc';

export default class recordComponent extends LightningElement {
    @api recordId;
    @api objectApiName;
}