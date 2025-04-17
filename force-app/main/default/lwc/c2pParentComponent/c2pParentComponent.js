import { api, track, LightningElement } from 'lwc';

export default class c2pParentComponent extends LightningElement {
    showModal = false;
    msg;

    handleClick(event){
        this.showModal = true;
    }

    closeHandler(event){
        this.msg = event.detail.estacao;
        this.showModal = false;
    }
}