import { api, track, LightningElement } from 'lwc';
import searchAcc from '@salesforce/apex/AccountController.findAccount';

export default class apexImperativeWithParamsDemo extends LightningElement {
    
    search='';
    accs;

    handleChange(event){
        this.search = event.target.value;
        console.log('change: ',this.search);
    }

    handleClick(){
        searchAcc({
            searchKey: this.search
        })
            .then((result)=>{
                this.accs = result;
                console.log('YYYYYY',result);
            })
            .catch((error)=>{
                console.log(error)
            });

        
    }
}