import {Component} from 'angular2/core';
import 'rxjs/Rx';
import { Http, Headers } from "angular2/http";

@Component({
    selector: 'add-hotel-form',
    templateUrl: '/app/template/add-hotel-form.html'
})

export class AddHotelComponent {
    public config: {
        apiBaseUrl: String
    };
    public http: any;
    public hotel: {
        name: String;
        city: String;
        stars: Number;
        description: String;
        image: String;
    };

    constructor(http: Http){
        this.http = http;

        this.hotel = {
            name: '',
            city: '',
            stars: 0,
            description: '',
            image: '',
        };

        http.get('/app/data/config.json')
            .map(config => config.json())
            .subscribe(config => this.config = config);
    }


    onSubmit () {

        // console.log('submit register', this.registerUser)

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(this.config.apiBaseUrl + "services/hotels.php",
            JSON.stringify(this.hotel), {
                headers: headers.append('Content-Type', 'application/json')
            }).subscribe(function (data) {
                console.log('received response', data)
                // set global user
            });
    }
}