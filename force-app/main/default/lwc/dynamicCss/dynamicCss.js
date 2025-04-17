import { api, track, LightningElement } from 'lwc';

export default class dynamicCss extends LightningElement {

    percent = 0;

    changeHandler(event){
        this.percent = event.target.value;
    }

    get porcentagem(){
        return `width:${this.percent}%`;
        //esse valor é passado no parâmetro de width no html
    }
}