System.register(['angular2/core', 'rxjs/Rx', 'rxjs/add/operator/mergeMap', "angular2/http", '../pipes/rooms.pipe', '../pipes/room_size.pipe', '../pipes/room-bed-number.pipe'], function(exports_1, context_1) {
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
    var core_1, http_1, rooms_pipe_1, room_size_pipe_1, room_bed_number_pipe_1;
    var RoomFilterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (rooms_pipe_1_1) {
                rooms_pipe_1 = rooms_pipe_1_1;
            },
            function (room_size_pipe_1_1) {
                room_size_pipe_1 = room_size_pipe_1_1;
            },
            function (room_bed_number_pipe_1_1) {
                room_bed_number_pipe_1 = room_bed_number_pipe_1_1;
            }],
        execute: function() {
            RoomFilterComponent = (function () {
                function RoomFilterComponent(http) {
                    var _this = this;
                    this.filter = {
                        size: "Any",
                        beds: "Any"
                    };
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
                        $('table').DataTable();
                    });
                }
                RoomFilterComponent = __decorate([
                    core_1.Component({
                        selector: 'room-filter',
                        pipes: [rooms_pipe_1.RoomPipe, room_size_pipe_1.RoomSizePipe, room_bed_number_pipe_1.RoomBedNumberPipe],
                        templateUrl: '/app/template/room-filter.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RoomFilterComponent);
                return RoomFilterComponent;
            }());
            exports_1("RoomFilterComponent", RoomFilterComponent);
        }
    }
});
//# sourceMappingURL=room_filter.component.js.map