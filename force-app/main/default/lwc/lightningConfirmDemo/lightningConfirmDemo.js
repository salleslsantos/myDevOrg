import { api, track, LightningElement } from 'lwc';
import LightningConfirm from 'lightning/confirm';


export default class lightningConfirmDemo extends LightningElement {
    async handleClick(event){
        const result = await LightningConfirm.open({
            message: 'We´re gonna close this thing!',
            theme:'success',
            //variant: 'headerless',
            label: 'Are you sure?!',
            // setting theme would have no effect
        });
        console.log('result: ',result);
        if(result){
            location.reload();
        }
    }
}