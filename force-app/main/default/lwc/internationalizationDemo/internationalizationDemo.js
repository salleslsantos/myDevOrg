import { api, track, LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/locale';//aqui estou usando a localização do usuário
import CURRENCY from '@salesforce/i18n/currency';

export default class internationalizationDemo extends LightningElement {
    number = 1234.567;

    //Intl.NumberFormat is a built-in JavaScript API that formats numbers based on a 
    // given locale and formatting options.
    numeroFomatado = new Intl.NumberFormat(LOCALE,{
        style: 'currency',
        currency: 'BRL',
        currencyDisplay: 'symbol'
    }).format(this.number);

    //forcei uma formatação de ar-EG(Arabic)
    numeroFomatado2 = new Intl.NumberFormat('ar-EG',{
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'symbol'
    }).format(this.number);


}