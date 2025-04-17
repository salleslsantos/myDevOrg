import { api, track, LightningElement, wire } from 'lwc'; //necessário incluir o wire
import { fireEvent } from 'c/pubsub'; //inserido o fireEvent do pubsub
import {CurrentPageReference} from 'lightning/navigation'; //apontamento de página

export default class publisher extends LightningElement {

    @wire(CurrentPageReference) pageRef;
    inputCity = '';

    handleNameChange(event) {
        this.inputCity = event.target.value;
    }

    handleData(){   
        //devemos passar a página que estamos, o nome do evento e payload
        fireEvent(this.pageRef, 'sendMessage', this.inputCity);
    }
}