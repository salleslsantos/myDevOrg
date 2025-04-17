import { api, track, LightningElement } from 'lwc';
import pubsub from 'c/pubsubZ2H'

export default class pubsubComponentA extends LightningElement {
    
    input;
    messageFromB;
    connectedCallback(){
        this.callSubscriber();
    }

    callSubscriber(){
        pubsub.subscribe('componentB', (message)=>{
        this.messageFromB = message;
        })
    }

    inputHandler(event){
        this.input = event.target.value;
    }

    publishHandler(){
        pubsub.publish('componentA', this.input);
    }
}