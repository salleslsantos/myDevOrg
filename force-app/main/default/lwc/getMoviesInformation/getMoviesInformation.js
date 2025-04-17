import { api, track, LightningElement, wire } from 'lwc';
import omdbData from '@salesforce/apex/SearchMovie.getMovieInformationFromOmdb';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class getMoviesInformation extends LightningElement {
    @wire (CurrentPageReference) pageRef;
    @api recordId;
    @api objectApiName;
    movieName = '';
    movieResponse = '';
    encodedMovieName = '';


    // This is an example of a variable tracked by LWC
    // the layout is rerendered if any tracked variable is changed
    @track variable = null;

    handleMovieName(event){
        this.movieName = event.target.value;
        console.log('handleMovieName: ',this.movieName);
     }

    handleSearch(event){
        this.encodedMovieName = this.movieName.trim().replace(/ /g, '+');
        console.log('encodedMovieName: ',this.encodedMovieName);

        omdbData({
            movieName: this.encodedMovieName
        }).then(result => {
            this.movieResponse = result;
            console.log('handleSearch: ',this.movieResponse);
            fireEvent(this.pageRef, 'sendMovieData',this.movieResponse);
            fireEvent(this.pageRef, 'sendMoviePoster',this.movieResponse);
            console.log('passei por aqui');
        });
    }

    /**
     * Executed when the component is added to the DOM.
     * @returns {Promise<void> | void} 
     */
    async connectedCallback() {
        // Todo: remove me or add code
    }

    /**
     * Executed by the framework when the LWC component is removed 
     * from the DOM; use this to put any clean-up code when required
     * @returns {Promise<void> | void} 
     */
    disconnectedCallback() {
        // Todo: remove me or add code
    }
}