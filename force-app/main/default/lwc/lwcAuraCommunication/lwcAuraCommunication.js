import { api, track, LightningElement } from 'lwc';

export default class lwcAuraCommunication extends LightningElement {
    @api title;

    callAura(){
       const event = new CustomEvent('pineapple', {
            detail: {
                "msg": "hello from lwc!"
            }
        }
                    )
                    this.dispatchEvent(event);
}
}