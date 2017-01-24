System.register(['angular2/core', 'rxjs/Rx', 'app/components/add_hotel.component', 'app/components/add_room.component', 'angular2/router', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, add_hotel_component_1, add_room_component_1, router_1, http_1;
    var EditHotelsPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (add_hotel_component_1_1) {
                add_hotel_component_1 = add_hotel_component_1_1;
            },
            function (add_room_component_1_1) {
                add_room_component_1 = add_room_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            EditHotelsPageComponent = (function () {
                function EditHotelsPageComponent(http, router) {
                    var _this = this;
                    this.router = router;
                    this.http = http;
                    this.room = {
                        id: 0,
                        hotelId: 0,
                        number: '',
                        size: 0,
                        bedNumber: 0
                    };
                    this.router.parent.subscribe(function (val) {
                        if (localStorage.getItem('token') !== null) {
                            _this.isAuth = true;
                        }
                        else {
                            _this.isAuth = false;
                        }
                    });
                    if (localStorage.getItem('token') == null) {
                        router.parent.navigate(['./HomePage']);
                    }
                    http.get('/app/data/config.json')
                        .map(function (config) { return config.json(); })
                        .flatMap(function (config) {
                        _this.config = config;
                        return http.post(config.apiBaseUrl + "services/hotels.php", "");
                    })
                        .map(function (hotels) { return hotels.json(); })
                        .flatMap(function (hotels) {
                        _this.hotels = hotels;
                        return http.post(_this.config.apiBaseUrl + "services/rooms.php", "");
                    })
                        .map(function (rooms) { return rooms.json(); })
                        .subscribe(function (rooms) {
                        var newRoomArray = [];
                        var hotelArray = _this.hotels;
                        rooms.forEach(function (room) {
                            room['hotel'] = hotelArray.filter(function (hotel) { return hotel.id == room.hotelId; })[0];
                            newRoomArray.push(room);
                        });
                        _this.rooms = newRoomArray;
                        // $('table').DataTable();
                    });
                }
                EditHotelsPageComponent.prototype.onSubmit = function () {
                    var currentRoom = this.room;
                    var rooms = this.rooms;
                    var hotelArray = this.hotels;
                    var headers = new http_1.Headers();
                    var requestUrl = this.config.apiBaseUrl + "services/add-room.php";
                    var isRoomEditing = this.isRoomEditing;
                    headers.append('Content-Type', 'application/json');
                    if (isRoomEditing) {
                        requestUrl = this.config.apiBaseUrl + "services/edit-room.php";
                    }
                    this.http.post(requestUrl, JSON.stringify(this.room), {
                        headers: headers
                    })
                        .map(function (data) { return data.json(); })
                        .subscribe(function (data) {
                        console.log('received response', data);
                        // set global user
                        if (data.error != null) {
                            alert(data.error);
                        }
                        else {
                            if (!isRoomEditing) {
                                console.log('new');
                                currentRoom['hotel'] = hotelArray.filter(function (hotel) { return hotel.id == currentRoom.hotelId; })[0];
                                rooms.push(currentRoom);
                            }
                            else {
                                console.log('update');
                                rooms.forEach(function (room) {
                                    if (room.id == currentRoom.id) {
                                        room.id = currentRoom.id;
                                        room.hotelId = currentRoom.hotelId;
                                        room.hotel = hotelArray.filter(function (hotel) { return hotel.id == currentRoom.hotelId; })[0];
                                        room.number = currentRoom.number;
                                        room.size = currentRoom.size;
                                        room.bedNumber = currentRoom.bedNumber;
                                    }
                                });
                            }
                        }
                    });
                };
                EditHotelsPageComponent.prototype.clearRoomEditing = function (event) {
                    event.preventDefault();
                    this.room = {
                        id: 0,
                        hotelId: 0,
                        number: '',
                        size: 0,
                        bedNumber: 0
                    };
                    this.isRoomEditing = false;
                };
                EditHotelsPageComponent.prototype.editRoom = function (event, id) {
                    event.preventDefault();
                    var roomToEdit = this.rooms.filter(function (room) { return room.id == id; })[0];
                    this.room = {
                        id: roomToEdit.id,
                        hotelId: roomToEdit.hotelId,
                        number: roomToEdit.number,
                        size: roomToEdit.size,
                        bedNumber: roomToEdit.bedNumber
                    };
                    this.isRoomEditing = true;
                };
                EditHotelsPageComponent.prototype.deleteRoom = function (event, id) {
                    event.preventDefault();
                    var headers = new http_1.Headers();
                    var requestUrl = this.config.apiBaseUrl + "services/delete-room.php";
                    headers.append('Content-Type', 'application/json');
                    this.http.post(requestUrl, JSON.stringify({ 'id': id }), {
                        headers: headers
                    })
                        .map(function (data) { return data.json(); })
                        .subscribe(function (data) {
                        console.log('received response', data);
                    });
                    this.rooms = this.rooms.filter(function (room) { return room.id != id; });
                };
                EditHotelsPageComponent = __decorate([
                    core_1.Component({
                        selector: 'edit-hotels-page',
                        directives: [
                            add_hotel_component_1.AddHotelComponent,
                            add_room_component_1.AddRoomComponent
                        ],
                        templateUrl: '/app/template/edit-hotels.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], EditHotelsPageComponent);
                return EditHotelsPageComponent;
            }());
            exports_1("EditHotelsPageComponent", EditHotelsPageComponent);
        }
    }
});
//# sourceMappingURL=edit_hotels_page.component.js.map