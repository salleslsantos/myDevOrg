import { api, LightningElement } from 'lwc';//necessário incluir o api

export default class p2cAlertComponent extends LightningElement {
    //valores que vêem do componente pai.
    @api message;
    @api cardHeading;
    @api number;
    @api isValid;
}