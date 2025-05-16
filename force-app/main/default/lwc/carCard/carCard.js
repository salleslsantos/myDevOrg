import { api, track, LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';
import CATEGORY from '@salesforce/schema/Car__c.Category__c';
import MAKE from '@salesforce/schema/Car__c.Make__c';
import MSRP from '@salesforce/schema/Car__c.MSRP__c';
import FUEL from '@salesforce/schema/Car__c.Fuel_type__c';
import SEATS from '@salesforce/schema/Car__c.Number_of_seats__c';
import CONTROL from '@salesforce/schema/Car__c.Control__c';
import PICTURE from '@salesforce/schema/Car__c.Picture_URL__c';
import NAME from '@salesforce/schema/Car__c.Name';



export default class carCard extends LightningElement {

    recordId = 'a1DKe000000oQlGMAU';
    name;
    category;
    make;
    msrp;
    fuel;
    pictureUrl;
    control;
    seats;

    @wire(getRecord,{
        recordId: '$recordId',
        fields:[CATEGORY,MAKE,MSRP,FUEL,SEATS,CONTROL,PICTURE,NAME]
    })
    carCardRecord({data,error}){
        if(data){
            console.log(data);
            this.name = data.fields.Name.value;
            this.category = data.fields.Category__c.value;
            this.make = data.fields.Make__c.value;
            this.msrp = data.fields.MSRP__c.value;
            this.fuel = data.fields.Fuel_type__c.value;
            this.control = data.fields.Control__c.value;
            this.pictureUrl = data.fields.Picture_URL__c.value;
            this.seats = data.fields.Number_of_seats__c.value;
        }
        }
        if(error){
            console.log('deu ruim: ',error);
        }
    }