import { api, track, LightningElement } from 'lwc';

export default class c2pModalComponent extends LightningElement {
    
    closeHandler(){
        const myEvent = new CustomEvent('banana', {
            detail: {//precisa ser detail....é o valor esperado pelo js
                fruta: 'Hello banana',
                estacao: 'verão'
            }
        });
        
        //o nome do evento deve ser sempre uma string minúscula
        this.dispatchEvent(myEvent);
    }
}