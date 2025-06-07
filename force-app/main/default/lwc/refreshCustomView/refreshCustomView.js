import { api, track, LightningElement } from 'lwc';
import ACC_LIST from '@salesforce/apex/AccountList.getAccount';
import {registerRefreshHandler} from 'lightning/refresh';

export default class refreshCustomView extends LightningElement {

    @api recordId ='0014P000027ZY8JQAW';
    rating;
    refreshId;
    counter = 0;

    connectedCallback(){
        this.refreshId = registerRefreshHandler(this,this.refreshHandler);
        this.getAccountList();
    }

    refreshHandler(){
        console.log('algo mudou, moçada!!!!');
        return new Promise(resolve=>{
            this.getAccountList();
            resolve(true);
        })
    }

    getAccountList(){
        this.counter = this.counter +1;
        console.log('# de chamadas: ', this.counter);
        ACC_LIST({
            "accId": this.recordId
        }).then(result=>{
            console.log('resultado: ',result);
            this.rating = result[0].Rating;
        })
    }
}