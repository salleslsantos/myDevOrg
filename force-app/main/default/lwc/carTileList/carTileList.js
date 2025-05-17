import { api, track, LightningElement, wire } from 'lwc';
import getCars from '@salesforce/apex/CarController.getCars';

export default class carTileList extends LightningElement {

    cars;

    @wire(getCars)
    cars({data,error}){
        if(data){
            console.log('registros de cars: ',data);
            this.cars = data;
        }
        if(error){
            console.log('deu ruim',error);
        }
    }
}