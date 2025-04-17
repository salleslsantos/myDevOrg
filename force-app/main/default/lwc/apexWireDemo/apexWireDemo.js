import { api, track, LightningElement, wire } from 'lwc';
import getAccList from '@salesforce/apex/AccountController.getAccountList';
import getAccListByType from '@salesforce/apex/AccountController.filterAccountByType';

export default class apexWireDemo extends LightningElement {

    accountList;
    varType = 'Technology Partner';

    //chamando propriedade
    @wire(getAccList)
    accData

    //chamando função
    @wire(getAccList)
    handleList({data,error}){
        console.log('XXXXXXXXXXXXXXXXXXX');
        if(data){
            console.log('data ORIGINAL: ',data);

            this.accountList = data.map(item=>{
                let newType = 'eu que mando no type';

                console.log('ENTREI AQUI!!!!');
                //console.log('accList: ',accountList);

                return {...item, newType}
            })
            console.log('spread: ',{...item,newType});
        }
        if(error){
            console.log('erroooou',error);
    }
}

@wire(getAccListByType, {
    type: '$varType' //preciso passar com $ porque wire é service reativo
})
handleListByType({data,error}){
    if(data){
        console.log('data from handleListByType: ',data);
    }
    if(error){
        console.log('error from handleListByType',error);
    }
}

}