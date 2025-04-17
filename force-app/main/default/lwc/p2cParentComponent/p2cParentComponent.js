import { api, track, LightningElement } from 'lwc';

export default class p2cParentComponent extends LightningElement {
    valor=0;
    carouselData=[
        {
        src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
        header:"Primeira cartão",
        description: "Primeira descrição."
    },
    {
        src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
        header:"Segundo cartão",
        description: "Segunda descrição."
    },
    {
        src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
        header:"Terceiro cartão",
        description: "Terceira descrição"
    }
    ]   

    handlePercentage(event){
        this.valor = event.target.value;
    }

    handleClick(event){
        this.template.querySelector('c-p2c-slider-component').resetSlider();
    }
}