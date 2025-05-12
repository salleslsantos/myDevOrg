import { api, track, LightningElement, wire } from 'lwc';
import {getObjectInfo, getPicklistValues} from 'lightning/uiObjectInfoApi';
import CAR_OBJECT from '@salesforce/schema/Car__c';
import CATEGORY from '@salesforce/schema/Car__c.Category__c';
import MAKE from '@salesforce/schema/Car__c.Make__c';

export default class carFilter extends LightningElement {

    wiredCategories;
    wiredMake;
    recTypeFromCar;

    filters={
        searchKey:'',
        maxPrice:999999
    }
    

    @wire(getObjectInfo,{objectApiName:CAR_OBJECT})
    objectInfo({data,error}){
        if(data){
            console.log('data: ',data);
            this.recTypeFromCar = data.defaultRecordTypeId;
        }
        if(error){
            console.log('error: ', error);
        }
    }

    @wire(getPicklistValues, 
        { 
            recordTypeId: '$recTypeFromCar', 
            fieldApiName: CATEGORY 
        })
        categories({data,error}){
            if(data){
                this.wiredCategories = data;
                console.log('wiredCategories: ',this.wiredCategories);
            }
            if(error){
                console.log('cat error: ', error);
            }
    }

    @wire(getPicklistValues, 
        { 
            recordTypeId: '$recTypeFromCar', 
            fieldApiName: MAKE 
        })
        make({data,error}){
            if(data){
                this.wiredMake = data;
                console.log('wiredMake: ',this.wiredMake);
            }
            if(error){
                console.log('make error: ', error);
            }
    }

    handleCheckbox(event){
        const{name, value} = event.target;
        console.log('name: ',name);
        console.log('value: ',value);
    }


    handleSearch(event){
        this.filters.searchKey = event.target.value;
        console.log('filters.searchKey',this.filters.searchKey);
    }

    handleSlider(event){
        this.filters.maxPrice = event.target.value;
        console.log('filters.maxPrice',this.filters.maxPrice);
    }
}