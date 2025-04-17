import { api, track, LightningElement } from 'lwc';

export default class p2cSliderComponent extends LightningElement {
    val = 20;

    changeHandler(event){
        this.val = event.target.value;
    }

    @api resetSlider(){ //deixando o método público
        this.val = 50;
    }
}