import {Component} from 'angular2/core';
import 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';
import { Http, Headers } from "angular2/http";
import { RoomPipe } from '../pipes/rooms.pipe';
import { RoomSizePipe } from '../pipes/room_size.pipe';
import { RoomBedNumberPipe } from '../pipes/room-bed-number.pipe';

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

    constructor(http: Http){
        this.filter = {
            size: "Any",
            beds: "Any"
        };

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
                $('table').DataTable();
            });
    }
}