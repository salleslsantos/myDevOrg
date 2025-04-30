import { api, track, LightningElement, wire } from 'lwc';
import getAccLst from '@salesforce/apex/MapControllerLWC.getAccountRecords';

export default class mapsInLwc extends LightningElement {

    mapMarkers=[];
    mapTitle = 'Maps in LWC!!!'

    @wire(getAccLst)
    handleAccountList({data,error}){
        if(data){
            console.log('data: ',data);
            this.pinPlacesInMap(data);
        }
        if(error){
            console.error('error: ',error);
        }
    }

    pinPlacesInMap(data){
        this.mapMarkers = data.map(item=>{
            return  {
                    location: {
                        City: item.BillingCity,
                        Country: item.BillingCountry,
                        PostalCode: item.BillingPostalCode,
                        State: item.BillingState,
                        Street: item.BillingStreet,
                        Name: item.Name
                    },
                    value: 'location001',
                    title: 'Places to see',
                    description:'LWC: zero to hero',
                    icon: 'action:map',
                }
        })
         
    }

    handleMarkerSelect(){

    }

}