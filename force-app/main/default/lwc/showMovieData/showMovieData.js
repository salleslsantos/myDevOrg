import { api, track, LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import {registerListener,unregisterAllListeners} from 'c/pubsub';

export default class showMovieData extends LightningElement {

    @api recordId;
    @api objectApiName;
    @wire (CurrentPageReference) pageRef;
    title;
    year;
    genre;
    director;
    awards;
    ratingTable;
    poster;
    actors;

    // This is an example of a variable tracked by LWC
    // the layout is rerendered if any tracked variable is changed
    @track variable = null;

    /**
     * Executed when the component is added to the DOM.
     * @returns {Promise<void> | void} 
     */
    async connectedCallback() {
        // Todo: remove me or add code
        registerListener('sendMovieData', this.handleReceivedMovieData, this);
        console.log('fulljson: ', this.movieInfo);
        console.log('title: ', this.title);
    }

    /**
     * Executed by the framework when the LWC component is removed 
     * from the DOM; use this to put any clean-up code when required
     * @returns {Promise<void> | void} 
     */
    disconnectedCallback() {
        // Todo: remove me or add code
        unregisterAllListeners();
    }

    handleReceivedMovieData(incomingData){
        //inicia aqui
        let movieInfoParsed = JSON.parse(incomingData);
        this.title = movieInfoParsed.Title;
        this.year = movieInfoParsed.Year;
        this.genre = movieInfoParsed.Genre;
        this.director = movieInfoParsed.Director;
        this.actors = movieInfoParsed.Actors;
        this.awards = movieInfoParsed.Awards;
        this.ratingTable = movieInfoParsed.Ratings;
        this.poster = movieInfoParsed.Poster;
    }
}