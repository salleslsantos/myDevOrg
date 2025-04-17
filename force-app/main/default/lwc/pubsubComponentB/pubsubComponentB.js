import { api, track, LightningElement } from 'lwc';
import pubsub from 'c/pubsubZ2H'

export default class pubsubComponentB extends LightningElement {
    messageFromA;
    inputB;
    
    connectedCallback(){
        this.callSubscriber();
    }

    callSubscriber(){
        pubsub.subscribe('componentA', (message)=>{
            this.messageFromA = message;
        })
    }

    publishHandlerB(){
        pubsub.publish('componentB', this.inputB);
        
    }

    inputHandlerB(event){
        this.inputB = event.target.value;
    }
    
}