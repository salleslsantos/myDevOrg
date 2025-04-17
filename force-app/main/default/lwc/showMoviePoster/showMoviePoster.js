import { api, track, LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener,unregisterAllListeners } from 'c/pubsub';
export default class showMoviePoster extends LightningElement {

    @api recordId;
    @api objectApiName;

    // This is an example of a variable tracked by LWC
    // the layout is rerendered if any tracked variable is changed
    @track variable = null;
    @wire (CurrentPageReference) pageRef;
    showPoster;
    title;

    /**
     * Executed when the component is added to the DOM.
     * @returns {Promise<void> | void} 
     */
    async connectedCallback() {
        // Todo: remove me or add code
        //registerListener('sendMovieData', this.handleReceivedPosterData, this);
        registerListener('sendMoviePoster', this.handleReceivedPosterData, this);
        console.log('json: ',this.incomingData);
    }
    handleReceivedPosterData(incomingData){
        let showPosterParsed = JSON.parse(incomingData);
        this.showPoster = showPosterParsed.Poster;
        this.title = showPosterParsed.Title;
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
}