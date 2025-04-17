import { api, track, LightningElement } from 'lwc';

export default class looping extends LightningElement {
    carList = ["Ford","Audi","Fiat","Renault","BMW","Volkswagen","Volvo","Chrysler","Dodge","Lexus","Mazda"];

    nbbTeams = [
        {
            id:1,
            team: "bauru",
            city: "bauru",
        },
        {
            id:2,
            team: "pinheiros",
            city: "'sao paulo"
        },
        {
            id:3,
            team: "flamengo",
            city: "rio de janeiro"
        }
    ]

   
}