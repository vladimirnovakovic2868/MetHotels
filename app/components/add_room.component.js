System.register(['angular2/core', 'rxjs/Rx', "angular2/http"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var AddRoomComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AddRoomComponent = (function () {
                function AddRoomComponent(http) {
                    var _this = this;
                    this.http = http;
                    this.room = {
                        hotel: 0,
                        number: '',
                        size: 0,
                        beds: 0
                    };
                    http.get('/app/data/config.json')
                        .map(function (config) { return config.json(); })
                        .flatMap(function (config) {
                        _this.config = config;
                        return http.post(config.apiBaseUrl + "services/hotels.php", "");
                    })
                        .map(function (hotels) { return hotels.json(); })
                        .subscribe(function (hotels) {
                        _this.hotels = hotels;
                        console.log(hotels);
                    });
                }
                AddRoomComponent.prototype.onSubmit = function () {
                    // console.log('submit register', this.registerUser)
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    this.http.post(this.config.apiBaseUrl + "services/rooms.php", JSON.stringify(this.room), {
                        headers: headers.append('Content-Type', 'application/json')
                    }).subscribe(function (data) {
                        console.log('received response', data);
                        // set global user
                    });
                };
                AddRoomComponent = __decorate([
                    core_1.Component({
                        selector: 'add-room-form',
                        templateUrl: '/app/template/add-room-form.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AddRoomComponent);
                return AddRoomComponent;
            }());
            exports_1("AddRoomComponent", AddRoomComponent);
        }
    }
});
//# sourceMappingURL=add_room.component.js.map