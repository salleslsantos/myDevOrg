import { api, track, LightningElement } from 'lwc';
import checkPostalCode from '@salesforce/apex/PostalCodeInformation.getDataFromPostalCode';
import weatherData from '@salesforce/apex/WeatherInformation.getWeatherDataFromAPI';

export default class weatherProject extends LightningElement {

    @api recordId;
    @api objectApiName;

    // This is an example of a variable tracked by LWC
    // the layout is rerendered if any tracked variable is changed
    @track variable = null;
    postalCodeValue = '';
    postalCode = '';
    address = '';
    state = '';
    city = '';
    block = '';
    statusCode='';
    complement='';
    zoomLevel = 15;
    mapMarkers = [];
    showMap = false;
    showWeather = false;
    temperature ='';
    iconURL = '';
    weatherText = '';
    weatherDatatable = [];
    columns = [];
    datetimelog = new Date();

    /**
     * Executed when the component is added to the DOM.
     * @returns {Promise<void> | void} 
     */

    columns = [
        { label: 'Time', fieldName: 'time' },
        { label: 'Temperature', fieldName: 'tempC' },
    ];

    

    handleWeatherData(event){
        console.log('entrei no handleWeatherData');
        console.log('showWeather (before): ',this.showWeather);
        console.log('city: ',this.city);

        weatherData({
            city: this.city
        }).then(
            (result) => {
                let parsedDataWeather = JSON.parse(result);
                this.temperature = parsedDataWeather.current.temp_c;
                this.iconURL = parsedDataWeather.current.condition.icon;
                this.weatherText = parsedDataWeather.current.condition.text;
                console.log('temperature: ',this.temperature);
                console.log('iconURL: ',this.iconURL);
                this.showWeather = true;
                console.log('showWeather (after): ',this.showWeather);
                console.log('temperature: ',this.temperature);
                console.log('iconURL: ',this.iconURL);

               
            }
        );
        

    }

    handlePostalCodeChange(event) {
        this.postalCode = event.target.value;
        console.log('postalCode: ',this.postalCode);
    }

    handleSearchPostalCode(event) {
        console.log('entrei no handleSearchPostalCode');
        checkPostalCode(
            {
                postalCode: this.postalCode 
            }
            
        ).then(
            (result) => {
                //let parsedData = JSON.parse(result);
                let parsedData = result;
                this.address = parsedData.logradouro;
                this.state = parsedData.estado;
                this.city = parsedData.localidade;
                this.block = parsedData.bairro;
                this.complement = parsedData.complemento;
                this.postalCodeValue = parsedData.cep;
                this.statusCode = result.statusCode;
                
                this.mapMarkers = [
                    {
                        location: {
                            Street:this.address,
                            City:this.city,
                            State:this.state,
                            PostalCode:this.postalCode,
                        },
                    },
                ];

            }
        ).catch(
            (error) => {
                console.log('deu ruim mané: ', error);
            }
        );        
        }

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