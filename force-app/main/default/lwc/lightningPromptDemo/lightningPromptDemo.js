import { api, track, LightningElement } from 'lwc';
import LightningPrompt from 'lightning/prompt';

export default class lightningPromptDemo extends LightningElement {

    async handleClick() {
        const result = await LightningPrompt.open({
            message: 'Please answer below',
            theme: 'success',
            label: 'What´s ur name?', // this is the header text
            //defaultValue: 'initial input value', //this is optional
        });
        console.log('result: ',result);
    }
}