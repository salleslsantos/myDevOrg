import { api, track, LightningElement, wire } from 'lwc';//necessário incluir o wire
import {CurrentPageReference} from 'lightning/navigation';//apontamento de página
import {registerListener,unregisterAllListeners} from 'c/pubsub';//inserido o register e unregister do pubsub


export default class subscriber extends LightningElement {

    outputMsg = '';
    inputMsg = '';
    @wire (CurrentPageReference) pageRef;

    connectedCallback() {
        //o handleMessageReceived é um método que tem como input o payload do publisher
        registerListener('sendMessage', this.handleMessageReceived,this);
    }

    handleMessageReceived(objPayload){
        //o nome objPayload vem do mensagem recebido do publisher. Pode ser qualquer nome
        this.outputMsg = objPayload;
    }

    disconnectedCallback() {
        unregisterAllListeners();
    }
}