import { api, track, LightningElement } from 'lwc';

export default class quizApp extends LightningElement {

    handleSubmit(){
        this.counter = 0;
        this.allCorrect = false;
        this.allCorrect = false;
        
        if(this.resp1 == 'Q1A1'){
            this.counter = 1;
        }
        if(this.resp2 == 'Q2A2'){
            this.counter = this.counter + 1;
        }
        if(this.resp3 == 'Q3A3'){
            this.counter = this.counter + 1;
        }

        if(this.counter == 3){
            this.allCorrect = true;
        }
        if(this.counter!=3){
            this.almostCorrect = true;
        }

    }

    handleReset(){
        this.buttonState = false;
        this.selected = '';

    }

    selected = '';;
    question = '';;
    resp1 = '';
    resp2 = '';;
    resp3 = '';;
    buttonState = false;
    allCorrect = false;
    almostCorrect = false;
    counter = 0;

    handleRadioSelected(event){
        this.selected = event.target.value;
        this.question = event.target.name;
        this.buttonState = true;
        console.log('selecionei a opção: ', this.selected);
        console.log('pergunta: ', this.question);

        if(this.question == 'pergunta1'){
            this.resp1 = this.selected;
            console.log('resposta: ', this.resp1);
        }
        else if(this.question == 'pergunta2'){
            this.resp2 = this.selected;
            console.log('resposta: ', this.resp2);
        }
        else{
            this.resp3 = this.selected;
            console.log('resposta: ', this.resp3); 
        }
    }

    value;
    get question1() {
        return [
            { label: 'Armador', value: 'Q1A1' },
            { label: 'Ala/armador', value: 'Q1A2' },
            { label: 'Ala', value: 'Q1A3' }
        ];
    }

    get question2() {
        return [
            { label: 'Croácia', value: 'Q2A1' },
            { label: 'Sérvia', value: 'Q2A2' },
            { label: 'Rússia', value: 'Q2A3' }
        ];
    }

    get question3() {
        return [
            { label: 'Valtinho', value: 'Q3A1' },
            { label: 'Demétrius', value: 'Q3A2' },
            { label: 'Marcelinho Huertas', value: 'Q3A3' }
        ];
    }
}