import { api, track, LightningElement } from 'lwc';
//componente filho
export default class lifeCycleParent extends LightningElement {
    constructor(){
        super();
        console.log('child constructor called');
    }

    connectedCallback(){
        console.log('child connectedCallback called');
        throw new Error('loading on child component failed');
    }

    renderedCallback(){
        console.log('child renderedCallback called');
    }

    disconnectedCallback(){
        //importante em questão de performance e memory leak
        alert('child disconnectedCallback called');
    }
}