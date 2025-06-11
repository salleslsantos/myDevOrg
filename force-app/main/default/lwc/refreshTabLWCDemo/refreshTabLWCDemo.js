import { api, track, LightningElement, wire } from 'lwc';
import {IsConsoleNavigation,refreshTab, getFocusedTabInfo, setTabLabel, setTabIcon} from 'lightning/platformWorkspaceApi';

export default class refreshTabLWCDemo extends LightningElement {

    @wire(IsConsoleNavigation) isConsoleNavigation;
    
    
        async handleRefresh(){
            if(this.isConsoleNavigation){
                //setTabLabel(tabId,'eis seu novo nome!');
                //const { tabId } = await getFocusedTabInfo();
                const getTabInfo2Refresh = await getFocusedTabInfo();
                await refreshTab(getTabInfo2Refresh.tabId, {
                includeAllSubtabs: true
                })
            }
        }

        async handleNewLabel(){
            if(this.isConsoleNavigation){
                console.log('entrei no if');
                const getTabInfo = await getFocusedTabInfo();
                //setTabLabel(tabId,'eis seu novo nome!');
                console.log('getTabInfo.tabId: '+getTabInfo.tabId);
                setTabLabel(getTabInfo.tabId,'eis seu novo nome!');
            }
        }

        async handleNewIcon(){
            if(this.isConsoleNavigation){
                const getTabInfoForIcon = await getFocusedTabInfo();
                setTabIcon(getTabInfoForIcon.tabId,'utility:einstein');
            }
        }

}