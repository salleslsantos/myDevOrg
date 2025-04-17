import { api, track, LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class navigateToWebPage extends NavigationMixin (LightningElement) {
    
    navigateToWeb(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: "https://www.google.com"
            }
    })
}

navigateToAura(){
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes:{
                componentName:'c__AuraNavigation'
            },
            state:{
                'c__id':'24021987'
            }
        })
}

    navigateToVfPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url:"/apex/navigateVf"
                }
    }).then(generatedUrl=>{
        window.open(generatedUrl,"_blank")
    })
    }
    
}