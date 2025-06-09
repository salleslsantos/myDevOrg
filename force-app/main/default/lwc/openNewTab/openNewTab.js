import { api, track, LightningElement } from 'lwc';
import {openTab} from 'lightning/platformWorkspaceApi';

export default class openNewTab extends LightningElement {

    recId = '0034P00003CoaZXQAZ';
    url = '/lightning/r/Contact/003Ke0000043m25IAA/view';

    openTabRecord(){
        console.log('entrei no click');
        openTab({
                recordId: this.recId,
                label: 'óia nóis aqui!!!',
                focus: true
            }).catch(error=>{
                console.log('deu ruim!');
            })

    }

    openTabUrl(){
        console.log('entrei no url');
        openTab({
                url: this.url,
                label: 'óia a URL aqui!!!',
                focus: true
            }).catch(error=>{
                console.log('deu ruim!');
            })

    }

    openPageRef(){
        openTab({
                pageReference:{
                    type: 'standard__objectPage',
                     attributes:{
                         objectApiName: 'Account',
                         actionName: 'list'
                }
            },
                    label:'account list',
                    focus: true
            }).catch(error=>{
                console.log('deu ruim!');
            })
    }
}