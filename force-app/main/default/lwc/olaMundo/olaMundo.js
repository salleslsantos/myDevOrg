import { track, LightningElement } from 'lwc';

export default class olaMundo extends LightningElement {
    fullname = 'zero 2 hero';
    title = 'lwc';

    changeHandler(event){
        this.title = event.target.value;
    }

    address = {
        city: 'osasco',
        country: 'brazil',
        state: 'sp',
        zip: '06184-130'
    }

    trackHandler(event){
        //this.address.city = event.target.value; 
        //dessa forma, o campo city não é atualizado 
        // automaticamente por se tratar de um objeto 
        // (array teria o mesmo comportamento).
        //para ajustar, podemos incluir @track no objeto, porém não é uma boa prática
        //editar uma propriedade.
        
        this.address = {...this.address, "city": event.target.value};
        //sem necessidade de @track.
    }

    //getter
    users = ["johndoe", "janedoe", "joesmith", "johngordon", "janemarie", "janejones"];

    //modo porco:
    name1;
    name1 = this.users[0];

    //usando get:
    get firstName(){
        return this.users[0].toUpperCase();
    }
}