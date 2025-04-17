import { api, track, LightningElement } from 'lwc';

export default class helloConditionalRendering extends LightningElement {
    isVisible = false;

    handleClick(event){
        this.isVisible = true;
    }


}