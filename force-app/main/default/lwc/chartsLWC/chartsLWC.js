import { api, track, LightningElement } from 'lwc';
import {loadScript} from 'lightning/platformResourceLoader';
import chartLwc from '@salesforce/resourceUrl/chartJs';

export default class chartsLWC extends LightningElement {
    renderSwitch;
    chart;

    renderedCallback(){
        if(this.renderSwitch){
            return;
        }
        loadScript(this, chartLwc+'/chartJs/Chart.js')
            .then(()=>{
                console.log('chartJs.js loaded');
                this.renderSwitch = true;
                this.loadChart();
            })
            .catch(error=>{
                console.error('deu ruim: ',error);
    })
}

    loadChart(){
        window.Chart.platform.disableCSSInjection = true;//????
        const canvas = document.createElement('canvas');
        this.template.querySelector('div.chart').appendChild(canvas);
        const ctx = canvas.getContext('2d');
        this.chart = new window.Chart(ctx, this.config());
    }

    config(){
        return {
            type: 'bar',
            data: {
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          }
    }

}