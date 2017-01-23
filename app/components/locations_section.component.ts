import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
// import { config } from './../config';

@Component({
    selector: 'locations-section',
    templateUrl: '/app/template/locations-section.html'
})

export class LocationsSectionComponent {
    public locations: Array;
    public config: Object;

    constructor(http: Http){
        this.locations = null;
        this.config = {};

        http.get('/app/data/locations.json')
            .map(res => res.json())
            .subscribe(locations => this.locations = locations);

        http.get('/app/data/config.json')
            .map(config => config.json())
            .subscribe(config => this.config = config);
    }
}