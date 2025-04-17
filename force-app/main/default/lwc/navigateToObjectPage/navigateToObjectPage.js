import { api, track, LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';//para inserir valores padrões
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';

export default class navigateToObjectPage extends NavigationMixin (LightningElement) {

    navigateToNewRecord(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        })
    }

    navigateToNewRecordWithDefault(){
        //A função encodeDefaultFieldValues() recebe um objeto com 
        // valores padrão para os campos do registro que será criado.
        const defaultValue = encodeDefaultFieldValues({
            FirstName:'Gigi',
            LastName: 'Santos',
            Email: 'gigi@gmail.com'
        })
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state:{
                //Passa os valores padrão para preencher automaticamente os 
                //campos no formulário de criação.
                defaultFieldValues: defaultValue
            }
        })
    }

    navigateToListView(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
             attributes: {
                objectApiName: 'Contact',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            }
        })
    }

    navigateToFiles(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
             attributes: {
                objectApiName: 'ContentDocument',
                actionName: 'home'
            }
    })
}

}