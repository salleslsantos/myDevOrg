import StartDate from '@salesforce/schema/Contract.StartDate';
import { api, track, LightningElement } from 'lwc';

export default class dataValidation extends LightningElement {

    startdate;
    enddate;
    notValid = false;

    changeHandler(event){
        const{name,value} = event.target;
        this[name] = value;
        console.log('name: ', name);
        console.log('value: ', value);

    }

    clickHandler(){
        if(this.checkDates(this.startdate, this.enddate)){
            console.log('datas corretas');
            this.notValid = false;
        }
        else{
            console.log('datas incorretas');
            this.notValid = true;
        }

    }

    checkDates(startdate, enddate){

        if(startdate < enddate){
            return true;
        }
        else{
            return false;
        }
    }

}