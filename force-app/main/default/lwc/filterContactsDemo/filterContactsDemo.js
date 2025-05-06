import { api, track, LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/FilterContacts.getContactList';

export default class filterContactsDemo extends LightningElement {

    headings=["Id", "Name", "Email", "Title"];
    fullTableData=[];
    filteredData=[];

    @wire(getContacts)
    handleContacts({data,error}){
        if(data){
            console.log('aqui está o data: ',data);
            this.fullTableData = data;
            this.filteredData = data;
            console.log('filteredData: ',this.filteredData);
        }
        if(error){
            console.log('aqui está o data: ',error);
        }
    }

    filterHandler(event){
        const{value} = event.target;
        console.log('valor: ', value);
        if(value){
            this.filteredData = this.fullTableData.filter(eachObj=>{
                //Object.keys(eachObj)=["Id", "Name", "Email", "Title"]
                return Object.keys(eachObj).some(key=>{
                    return eachObj[key].toLowerCase().includes(value);
                })
            })
        }
        else{
            this.filteredData = this.fullTableData;
        }
        
    }

    sortHandler(){
        
    }

}