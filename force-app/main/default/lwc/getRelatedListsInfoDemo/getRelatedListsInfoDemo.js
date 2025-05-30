import { api, track, LightningElement, wire } from 'lwc';
import {getRelatedListsInfo} from 'lightning/uiRelatedListApi';

export default class getRelatedListsInfoDemo extends LightningElement {

   @wire(getRelatedListsInfo, {
            parentObjectApiName: 'Account'
            //recordTypeId: opcional
        })
        getRelLists({data,error}){
            if(data){
                console.log('relatedLists: ', data);
                console,log(JSON.stringify(data));
                console.log('data.relatedLists',data.relatedLists);
            }
            if(error){
                console.log('nok',error);
            }
        }
}