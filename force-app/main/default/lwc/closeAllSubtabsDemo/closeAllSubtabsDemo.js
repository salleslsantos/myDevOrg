import { api, track, LightningElement, wire } from 'lwc';
import {IsConsoleNavigation,closeTab, getFocusedTabInfo} from 'lightning/platformWorkspaceApi';

export default class closeAllSubtabsDemo extends LightningElement {

    @wire(IsConsoleNavigation)
    isConsoleNavigation;

    
    async closeAllSubtabs(){
        if(this.isConsoleNavigation){
            const subTabsId = await getFocusedTabInfo();
            console.log('subtabsId:',subTabsId);
            if(subTabsId.subtabs){
                subTabsId.subtabs.forEach(tab => {
                    closeTab(tab.tabId);

                });
            }
            
        }
    }

        async closeAcc(){
        if(this.isConsoleNavigation){
            const subTabsId = await getFocusedTabInfo();
            console.log('subtabsId:',subTabsId);
            if(subTabsId.subtabs){
                subTabsId.subtabs.forEach(tab => {
                    if(tab.iconAlt === 'Account'){
                    //poderia dizer para fechar apenas as abas de um determinado objeto olhando, 
                    // por exemplo, o ícone dele (tab.iconAlt === "Contact")
                        closeTab(tab.tabId);
                    }
                });
            }
            
        }          
    }
}