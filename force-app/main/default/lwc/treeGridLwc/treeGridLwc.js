import { api, track, LightningElement, wire} from 'lwc';
import getAccCttList from '@salesforce/apex/AccountContact.getAccountContactList';

export default class treeGridLwc extends LightningElement {

    /*DATA*/
    gridData = [];

    @wire(getAccCttList)
    wiredData({data,error}){
        if(data){
            console.log('eis data: ',data);
            this.gridData = data.map(item=>{
                const {Contacts,...accounts}=item
                return {...accounts,"_children":Contacts}
                /*esse _children serve para criarmos a relação de pai-filho na tabale. 
                É possível gerar isso diretamente no apex também */
            })
            console.log(this.gridData);
        }
        if(error){
            console.log('eis error: ',error);
        }
    }

    /*COLUMNS*/
    gridColumns=[{
        label:'nome',
        fieldName:'Name',
        editable:'true',
        sortable:'true',
        type:'text'
    },
    {
        label:'telefone',
        fieldName:'Phone',
        type:'text'
    },
    {
        label:'site',
        fieldName:'Website',
        type:'url'
    }
]

}