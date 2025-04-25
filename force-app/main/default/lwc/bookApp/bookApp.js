import { api, track, LightningElement } from 'lwc';

export default class bookApp extends LightningElement {
    
    searchKey;
    url = 'https://www.googleapis.com/books/v1/volumes?q=';
    books;

    connectedCallback(){
        //this.fetchData();
    }

    fetchData(){
        fetch(this.url+this.searchKey)
        .then(response=>response.json())//necessário o .json() para transformar o response em json
        .then(data=>{
            console.log('here is the data: ',data)
            this.books = data
            console.log('BOOKS: ',this.books)
        })
        .catch(error=>console.error(error));
    }

    handleChange(event){
        this.searchKey = event.target.value;
    }

    searchBook(){
        this.fetchData();
    }
}