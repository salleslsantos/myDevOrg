import { api, track, LightningElement, wire } from 'lwc';
import {IsConsoleNavigation,openSubtab,EnclosingTabId} from 'lightning/platformWorkspaceApi';

export default class openSubtabDemo extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleNavigation;

    @wire(EnclosingTabId)
    parentTabId;

    openSubtabRecord(){
        console.log('isConsoleNavigation: ',this.isConsoleNavigation);
        if(this.isConsoleNavigation){
            openSubtab(this.parentTabId,{
                recordId:'0014P00002hwwzPQAQ',
                label:'subtab',
                focus:true
            }).catch(error=>{
                console.log('deu erro: ',error);
            })

        }

    }

    openSubtabUrl(){
        if(this.isConsoleNavigation){
            openSubtabDemo(parentTabId,{
                recordId:'',
                label:'subtab',
                focus:true
            }).catch(error=>{
                console.log(error);
            })

        }

    }

    openPageRef(){
        if(this.isConsoleNavigation){
            openSubtabDemo(parentTabId,{
                recordId:'',
                label:'subtab',
                focus:true
            }).catch(error=>{
                console.log(error);
            })

        }

    }

}