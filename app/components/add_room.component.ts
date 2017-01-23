import {Component} from 'angular2/core';
import 'rxjs/Rx';
import { Http, Headers } from "angular2/http";

@Component({
    selector: 'add-room-form',
    templateUrl: '/app/template/add-room-form.html'
})

export class AddRoomComponent {
    public config: {
        apiBaseUrl: String
    };
    public http: any;
    public room: {
        hotel: Number;
        number: String;
        size: Number;
        beds: Number;
    };
    public hotels: Array;

    constructor(http: Http){
        this.http = http;

        this.room = {
            hotel: 0,
            number: '',
            size: 0,
            beds: 0
        };

        http.get('/app/data/config.json')
            .map(config => config.json())
            .flatMap((config) => {
                this.config = config;
                return http.post(config.apiBaseUrl + "services/hotels.php", "");
            })
            .map(hotels => hotels.json())
            .subscribe(hotels => {
                this.hotels = hotels;
                console.log(hotels);
            })
    }


    onSubmit () {

        // console.log('submit register', this.registerUser)

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(this.config.apiBaseUrl + "services/rooms.php",
            JSON.stringify(this.room), {
                headers: headers.append('Content-Type', 'application/json')
            }).subscribe(function (data) {
                console.log('received response', data)
                // set global user
            });
    }
}