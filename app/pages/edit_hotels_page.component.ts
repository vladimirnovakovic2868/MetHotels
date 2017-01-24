import {Component} from 'angular2/core';
import 'rxjs/Rx';
import { AddHotelComponent } from 'app/components/add_hotel.component';
import { AddRoomComponent } from 'app/components/add_room.component';
import {Router} from 'angular2/router';
import {Http Headers} from 'angular2/http';

@Component({
    selector: 'edit-hotels-page',
    directives: [
        AddHotelComponent,
        AddRoomComponent
    ],
    templateUrl: '/app/template/edit-hotels.html'
})

export class EditHotelsPageComponent {
    public config: {
        apiBaseUrl: String
    };
    public rooms: Array;
    public hotels: Array;
    public router: Router;
    public isAuth: Boolean;
    public http: Http;
    public room: {
        id: Number;
        hotelId: Number;
        number: String;
        size: Number;
        bedNumber: Number;
    };
    public hotels: Array;
    public isRoomEditing: Boolean;

    constructor(http: Http, router: Router){
        this.router = router;
        this.http = http;

        this.room = {
            id: 0,
            hotelId: 0,
            number: '',
            size: 0,
            bedNumber: 0
        };

        this.router.parent.subscribe((val) => {
            if(localStorage.getItem('token') !== null){
                this.isAuth = true;
            }else{
                this.isAuth = false;
            }
        });

        if(localStorage.getItem('token') == null){
            router.parent.navigate(['./HomePage']);
        }

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

    onSubmit () {
        var currentRoom = this.room;
        var rooms = this.rooms;
        var hotelArray = this.hotels;
        var headers = new Headers();
        var requestUrl = this.config.apiBaseUrl + "services/add-room.php";
        var isRoomEditing = this.isRoomEditing;
        headers.append('Content-Type', 'application/json');

        if(isRoomEditing){
            requestUrl = this.config.apiBaseUrl + "services/edit-room.php";
        }

        this.http.post(requestUrl,
            JSON.stringify(this.room), {
                headers: headers
            })
            .map(data => data.json())
            .subscribe(function (data) {
                console.log('received response', data)
                // set global user
                if(data.error!=null){
                    alert(data.error);
                }else {
                    if(!isRoomEditing) {
                        console.log('new')
                        currentRoom['hotel'] = hotelArray.filter(hotel => hotel.id == currentRoom.hotelId)[0];
                        rooms.push(currentRoom);
                    }else {
                        console.log('update')
                        rooms.forEach(function(room){
                            if(room.id==currentRoom.id){
                                room.id= currentRoom.id;
                                room.hotelId= currentRoom.hotelId;
                                room.hotel= hotelArray.filter(hotel => hotel.id == currentRoom.hotelId)[0];
                                room.number= currentRoom.number;
                                room.size= currentRoom.size;
                                room.bedNumber= currentRoom.bedNumber;
                            }
                        });
                        // rooms =  rooms.filter(room => room.id !== currentRoom.id);
                        // console.log(rooms)
                    }
                }
            });
    }

    clearRoomEditing(event) {
        event.preventDefault();
        this.room = {
            id: 0,
            hotelId: 0,
            number: '',
            size: 0,
            bedNumber: 0
        };
        this.isRoomEditing = false;
    }

    editRoom(event, id) {
        event.preventDefault();
        var roomToEdit = this.rooms.filter(room => room.id == id)[0];
        this.room = {
            id: roomToEdit.id,
            hotelId: roomToEdit.hotelId,
            number: roomToEdit.number,
            size: roomToEdit.size,
            bedNumber: roomToEdit.bedNumber
        };
        this.isRoomEditing = true;
    }

    deleteRoom(event, id) {
        event.preventDefault();
        var headers = new Headers();
        var requestUrl = this.config.apiBaseUrl + "services/delete-room.php";
        headers.append('Content-Type', 'application/json');

        this.http.post(requestUrl,
            JSON.stringify({'id': id}), {
                headers: headers
            })
            .map(data => data.json())
            .subscribe(function (data) {
                console.log('received response', data)
            });
        this.rooms =  this.rooms.filter(room => room.id != id);
    }
}