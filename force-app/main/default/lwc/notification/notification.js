import { api, track, LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class notification extends LightningElement {
    handleClickOne(){
        this.fireToast('Sucesso!','esse é o corpo do toast!','success');
    }

    handleClickTwo(){
        this.fireToast('Errou!','esse é o corpo do toast!','error');
    }

    handleClickThree(){
        this.fireToast('Atenção!','esse é o corpo do toast!','warning');
    }

    handleClickFour(){
        this.fireToast('Informação!','esse é o corpo do toast!','info');
    }

    fireToast(title, message, variant){
        console.log('entrei no showToast');
        const evt = new ShowToastEvent({
            title,
            message,
            variant,
            mode:'sticky'
        })
        this.dispatchEvent(evt);
    }
}