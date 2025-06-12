import { api, track, LightningElement, wire } from 'lwc';
import { openTab, disableTabClose, IsConsoleNavigation, getFocusedTabInfo } from 'lightning/platformWorkspaceApi';

export default class disableTabDemo extends LightningElement {
    @wire(IsConsoleNavigation) 
    isConsoleNavigation;
    

    
    async handleChange(event){
        console.log('entrei no método');
        if(this.isConsoleNavigation){
            console.log('entrei no IF');
            const tabInfo = await getFocusedTabInfo();
            console.log('toggle: ',event.detail.checked);
            console.log('tabInfo.tabId: ',tabInfo.tabId);
            await disableTabClose(tabInfo.tabId, event.detail.checked);
        }

    }
}