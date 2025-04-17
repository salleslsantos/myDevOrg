import { api, track, LightningElement } from 'lwc';
//templates importados:
import signingTemplate from './signingTemplate.html';
import signupTemplate from './signupTemplate.html';
import renderTemplate from './renderMethod.html';

export default class renderMethod extends LightningElement {

    selectedBtn = '';

    //método que controla qual html mostrar:
    render(){
        console.log('render(): ',this.selectedBtn);
        return this.selectedBtn === 'Signin' ? signingTemplate : 
               this.selectedBtn === 'Signup' ? signupTemplate :
               renderTemplate; 
    }

    handleClick(event){
        this.selectedBtn = event.target.label;
        console.log('handleclick: ',this.selectedBtn);
    }

    handleSubmit(event){
        console.log(`${event.target.label} clicked`);
    }

}