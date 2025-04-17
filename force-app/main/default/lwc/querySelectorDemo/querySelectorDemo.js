import { api, track, LightningElement } from 'lwc';

export default class querySelectorDemo extends LightningElement {

    names = ["leo", "ju", "gigi", "miguel"];
    fetchDetails(){
        const elem = this.template.querySelector('h1');
        elem.style.border = "1px solid red";
        console.log(elem.innerText);

        const selectedUser = this.template.querySelectorAll('.selector');
        Array.from(selectedUser).forEach(element => {
            console.log(element.innerText)
        });
    }
}