import { api, track, LightningElement } from 'lwc';

export default class shadowDomStyling extends LightningElement {
     renderedCallback(){
        //the renderedCallback() lifecycle hook is called after the 
        // component has been rendered in the DOM
        const style = document.createElement('style');// esse comando cria um <style></style>
        style.innerText = `c-shadow-dom-styling .slds-button{
        background: red;
        color: white;
        }`
        this.template.querySelector('lightning-button').appendChild(style);
}
}