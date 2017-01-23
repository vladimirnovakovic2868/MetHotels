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
    public config: Object;
    public rooms: Array;

    constructor(http: Http){
        // console.log('navbar')
        this.filter = {
            size: "Any",
            beds: "Any"
        };

        // console.log(config);

        http.get('/app/data/config.json')
            .map(config => config.json())
            .flatMap((config) => {
                this.config = config;
                return http.post(config.apiBaseUrl + "services/rooms.php");
            })
            .map(rooms => rooms.json())
            .subscribe(rooms => {
                this.rooms = rooms;
                console.log(rooms)
            });
    }

    submit() {
        console.log('submit filter form', this.filter)
    }
}