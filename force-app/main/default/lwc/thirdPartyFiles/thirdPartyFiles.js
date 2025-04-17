import { api, track, LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment';
import {loadScript, loadStyle} from 'lightning/platformResourceLoader';
import ANIMATE from '@salesforce/resourceUrl/animate';

export default class thirdPartyFiles extends LightningElement {
    currentDate = '';
    isLibLoaded = false;
    //quero executar apenas uma vez, quando o html for executado.
    //por isso criamos esse boolean, assim não impactaremos a performance.
    //não usamos conectedCallback porque precisamos que a tela seja carregada.

    renderedCallback(){
        if(this.isLibLoaded){
            return
        }
        else{
            //o promisse não seria necessário aqui pois temos apenas um serviço assíncrono
            //se tivesse mais um, por exemplo jquery, o js aguardaria os dois serem carregados antes 
            //de continuar.
            Promise.all([
                loadScript(this, MOMENT+'/moment/moment.min.js'),
                loadStyle(this, ANIMATE+'/animate/animate.min.css')
            ]).then(()=>{
                //success
                this.setDateOnScreen();
            }).catch(error=>{
                // error
                console.log(error);
            })
            this.isLibLoaded=true;
        }
}
    setDateOnScreen(){
        this.currentDate = moment().format('LLLL');
    }
}