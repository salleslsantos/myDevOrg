import { api, track, LightningElement } from 'lwc';

export default class buttonModal extends LightningElement {
    isOpen = false;

    handleClick(){
        this.isOpen = true;
    }
}