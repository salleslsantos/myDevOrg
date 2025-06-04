import { api, track, LightningElement } from 'lwc';

export default class newConditionals extends LightningElement {

    team;
    changeHandler(event){
        this.team = event.target.value;
        console.log('team: ',this.team);
    }

    get lakers(){
        if(this.team === 'lakers'){
            return true;
        }
    }

    get nuggets(){
        if(this.team === 'nuggets'){
            return true;
        }
    }
}