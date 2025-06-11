import { api, track, LightningElement, wire } from 'lwc';
import {IsConsoleNavigation, closeTab, getFocusedTabInfo} from 'lightning/platformWorkspaceApi';

export default class closeTabDemo extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleNavigation;
    
    closeTabBtn(){
        if(this.isConsoleNavigation){
            getFocusedTabInfo().then(resultado=>{
                console.log('focused info here: ',resultado);
                closeTab(resultado.tabId);
            })
        }
    }
}