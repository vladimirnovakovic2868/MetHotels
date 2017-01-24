import {Component} from 'angular2/core';
import 'rxjs/Rx';
import { RoomFilterComponent } from 'app/components/room_filter.component';

@Component({
    selector: 'home-page',
    directives: [
        RoomFilterComponent
    ],
    templateUrl: '/app/template/find-room-page.html'
})

export class FindRoomPageComponent {
    constructor(){

    }
}