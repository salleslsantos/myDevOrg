import { api, track, LightningElement } from 'lwc';

export default class quizAppZeroToHeroNewVersion extends LightningElement {

    allNotSelected = true;
    selectedRadioValue;
    selectedRadioName;
    selectedItem = {};
    size = '';
    //arrayWithAnswers;

    myQuestions = [
        {
          id:"Q1",
          question: "Qual a nacionalidade de Giannis?",
          options:{
            a: "Grécia",
            b: "Alemanha",
            c: "EUA",
            d: "Brasil"
          },
          correct: "a"
        },
        {
          id:"Q2",
          question: "Quem venceu as olimpíadas de 2024?",
          options:{
            a: "Sérvia",
            b: "EUA",
            c: "Alemanha",
            d: "França"
          },
          correct: "b"
        },
        {
          id:"Q3",
          question: "Quem foi o MVP da última temporada da NBA?",
          options:{
            a: "Luka Doncic",
            b: "LeBron James",
            c: "Nikola Jokic",
            d: "Shai"
          },
          correct: "c"
        },
          {
          id:"Q4",
          question: "Quantos brasileiros jogam na NBA hoje?",
          options:{
            a: "4",
            b: "3",
            c: "2",
            d: "1"
          },
          correct: "d"
        }
        ]

    submitHandler(event){
        // event.preventDefault()
        //selectedItem = {Q1:'a', Q2:'b', Q3:'c', Q4:'d'}
        //resposta certa está em myQuestions.correct
        //preciso validar se valor do Q1 = ao correct do Q1
        console.log('entrei no submitHandler');
        let arrayWithAnswers = this.myQuestions.filter(item=> this.selectedItem[item.id]=== item.correct);
        this.size = arrayWithAnswers.length;
        console.log('array: ',this.arrayWithAnswers);
        console.log('size: ',this.size);
    }

    resetHandler(){
        this.selectedItem = {};
        this.selectedItem = { ...this.selectedItem };
    }

    handleSelectedRadio(event){
        this.selectedRadioValue = event.target.value;
        this.selectedRadioName = event.target.name;
        console.log('value: ',this.selectedRadioValue);
        console.log('name: ',this.selectedRadioName);

        this.selectedItem[this.selectedRadioName] = this.selectedRadioValue; 
        console.log('selectedItem: ',this.selectedItem);
        
        if(this.myQuestions.length === Object.keys(this.selectedItem).length){
            console.log('myQuestions: ',this.myQuestions.length);
            console.log('selectedItem: ',Object.keys(this.selectedItem).length);
            this.allNotSelected = false;
        }
    }
}