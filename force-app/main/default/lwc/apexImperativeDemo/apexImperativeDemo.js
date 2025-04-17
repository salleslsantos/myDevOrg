import { api, track, LightningElement } from 'lwc';
import getAccList from '@salesforce/apex/AccountController.getAccountList';

export default class apexImperativeDemo extends LightningElement {
    accs;

    handleClick(){
        getAccList()
        .then((result) =>{
            this.accs = result;
            console.log('xxxxxx',this.accs);
        })
        .catch((error)=>{

        });
    }
}
