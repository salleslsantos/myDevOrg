import { api, track, LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';

export default class lightningAlertDemo extends LightningElement {

    tipo;
    msg;
    head;

    handleClick(event){

        this.tipo = event.target.value;
        this.msg = 'this is the ' + event.target.value + ' message';
        this.head = event.target.label;

        LightningAlert.open({
            message: this.msg,
            theme: this.tipo,
            label: this.head
        });
    }
}