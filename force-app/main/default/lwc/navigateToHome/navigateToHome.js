import { api, track, LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class navigateToHome extends NavigationMixin (LightningElement) {

    navigateToHome(){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage', 
            //Especifica que a navegação será para uma página padrão do Salesforce 
            // (como Home, Relatórios ou Chatter).
            attributes:{
                pageName: 'home'
                //Especifica que a página de destino é a Home.
            }
        })

    }

    navigateToChatterPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage', 
            //Especifica que a navegação será para uma página padrão do Salesforce 
            // (como Home, Relatórios ou Chatter).
            attributes:{
                pageName: 'chatter'
                //Especifica que a página de destino é o chatter.
            }
        })

    }
}