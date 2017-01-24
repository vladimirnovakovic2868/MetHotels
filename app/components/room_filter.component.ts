import {Component} from 'angular2/core';
import 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';
import { Http, Headers } from "angular2/http";
import { RoomPipe } from '../pipes/rooms.pipe';
import { RoomSizePipe } from '../pipes/room_size.pipe';
import { RoomBedNumberPipe } from '../pipes/room-bed-number.pipe';
import { Router } from 'angular2/router';

@Component({
    selector: 'room-filter',
    pipes: [ RoomPipe, RoomSizePipe, RoomBedNumberPipe ],
    templateUrl: '/app/template/room-filter.html'
})

export class RoomFilterComponent {
    public filter: {
        size: String,
        beds: String
    };
    public config: {
        apiBaseUrl: String
    };
    public rooms: Array;
    public hotels: Array;
    public router: Router;
    public isAuth: Boolean;

    constructor(http: Http, router: Router){
        this.filter = {
            size: "Any",
            beds: "Any"
        };

        this.router = router;
        this.router.parent.subscribe((val) => {
            if(localStorage.getItem('token') !== null){
                this.isAuth = true;
            }else{
                this.isAuth = false;
            }
        });

        http.get('/app/data/config.json')
            .map(config => config.json())
            .flatMap((config) => {
                this.config = config;
                return http.post(config.apiBaseUrl + "services/hotels.php", "");
            })
            .map(hotels => hotels.json())
            .flatMap(hotels => {
                this.hotels = hotels;
                return http.post(this.config.apiBaseUrl + "services/rooms.php", "");
            })
            .map(rooms => rooms.json())
            .subscribe((rooms) => {
                var newRoomArray = [];
                var hotelArray = this.hotels;

                rooms.forEach(function(room){
                    room['hotel'] = hotelArray.filter(hotel => hotel.id == room.hotelId)[0];
                    newRoomArray.push(room);
                });

                this.rooms = newRoomArray;
                // $('table').DataTable();
            });
    }
}