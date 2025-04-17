import { api, track, LightningElement } from 'lwc';

export default class setterDemoChild extends LightningElement {
    userDetail;

    @api
    get detail(){
        return this.userDetail;
    }

    //setter runs first!!!
    set detail(data){
        let newEmail = 'salles.lsantos@gmail.com';
        //se não usar o spread operator, estou um erro na tela.
        //não podemos alterar uma propriedade do objeto diretamente.
        this.userDetail = {...data, email : newEmail};
    }
}