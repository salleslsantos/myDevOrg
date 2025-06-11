import { api, track, LightningElement, wire } from 'lwc';
import {IsConsoleNavigation,refreshTab, getFocusedTabInfo} from 'lightning/platformWorkspaceApi';

export default class refreshTabdemo extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleNavigation


    async handleRefresh(){
        if(this.isConsoleNavigation){
            const {tabId} = await getFocusedTabInfo();
            await refreshTab(tabId);
        }
    }
}