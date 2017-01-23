import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

@Component({
    selector: 'special-offers',
    templateUrl: '/app/template/special-offers.html'
})

export class SpecialOffersComponent {
    public specialOffers: Array;
    public config: Object;

    constructor(http: Http){
        this.specialOffers = [];
        this.config = {};

        http.get('/app/data/specialOffers.json')
            .map(res => res.json())
            .subscribe(specialOffers => this.specialOffers = specialOffers);

        http.get('/app/data/config.json')
            .map(config => config.json())
            .subscribe(config => this.config = config);
    }
}