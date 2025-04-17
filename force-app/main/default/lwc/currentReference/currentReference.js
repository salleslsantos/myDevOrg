import { api, track, LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';

    
export default class currentReference extends LightningElement {
    @wire (CurrentPageReference) 
    varPageRef;


    get pageRef(){
        return this.varPageRef ? JSON.stringify(this.varPageRef) : 'nada';
    }
}