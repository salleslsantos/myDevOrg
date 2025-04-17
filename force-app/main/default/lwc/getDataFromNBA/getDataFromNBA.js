import {api,track,LightningElement} from 'lwc';
import DataNBA from '@salesforce/apex/GetDataFromNBA.getNBAPlayerStats';
import playerId from '@salesforce/apex/playerPhoto.getPlayerIdPhotoByName';
import teamId from '@salesforce/apex/playerPhoto.getTeamIdPhotoByName';

export default class getDataFromNBA extends LightningElement {

    @api recordId;
    @api objectApiName;

    // This is an example of a variable tracked by LWC
    // the layout is rerendered if any tracked variable is changed
    @track variable = null;

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

        name = '';
        team = '';
        //teamLogo = 'https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg';
        teamLogo = '';
        role = '';
        points = '';
        ppg = '';
        rebounds = '';
        rpg = '';
        assist = '';
        apg = '';
        block = '';
        bpg = '';
        steal = '';
        spg = '';
        playerPhoto = 'https://cdn.nba.com/headshots/nba/latest/1040x760/00000.png?imwidth=260&imheight=190';

        playerName = '';
        encodedPlayerName = '';

        handlePlayerName(event) {
        this.playerName = event.target.value;
        console.log('playerName: ', this.playerName);
        }

        handleSearch(event) {
            console.log('entrou no handleSearch');
            const encodedPlayerName = encodeURIComponent(this.playerName);
            console.log('encodedPlayerName: ', encodedPlayerName);

            DataNBA({
                player: encodedPlayerName
                }).then(
                (data) => {
                    console.log('player: this.playerName', this.encodedPlayerName);

                    console.log('data: ', data);
                    let parsedData = JSON.parse(data).filter(record => record.season === 2023);
                    console.log('parsedData: ', parsedData);

                    let filterData = parsedData[0];

                    this.name = filterData.playerName;
                    this.team = filterData.team;
                    this.role = filterData.position;
                    this.points = filterData.points;
                    this.games = filterData.games;
                    this.rebounds = filterData.totalRb;
                    this.block = filterData.blocks;
                    this.assist = filterData.assists;
                    this.steal = filterData.steals;
                    this.ppg = (this.points/this.games).toFixed(2);
                    this.rpg = (this.rebounds/this.games).toFixed(2);
                    this.apg = (this.assist/this.games).toFixed(2);
                    this.bpg = (this.block/this.games).toFixed(2);
                    this.spg = (this.steal/this.games).toFixed(2);


                    console.log('name: ', this.name);
                    console.log('team: ', this.team);
                    console.log('role: ', this.role);
                    console.log('points: ', this.points);
                    console.log('games: ', this.games);
                    console.log('rebounds: ', this.rebounds);
                    console.log('blocks: ', this.block);
                    console.log('assists: ', this.assist);
                    console.log('steals: ', this.steal);


            });

            //buscar foto
            playerId({
                playerNameFromSearch : this.playerName
                }).then(
                    (dataFromPhoto) => {
                    console.log('dataFromPhoto: ', dataFromPhoto);
                    this.playerPhoto = 'https://cdn.nba.com/headshots/nba/latest/1040x760/' + dataFromPhoto + '.png?imwidth=260&imheight=190';
                    console.log('playerPhoto: ', this.playerPhoto);
                            });

            teamId({
                teamLogoFromSearch : this.playerName
            }).then(
                (teamdata) => {
                    console.log('teamdata: ', teamdata);
                    this.teamLogo = 'https://cdn.nba.com/logos/nba/'+teamdata+'/global/L/logo.svg';
                    console.log('team logo: ', this.teamLogo);
                }
            );
            
        
        }
     
}