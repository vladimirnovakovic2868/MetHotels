System.register(['angular2/core', 'rxjs/Rx', 'app/components/add_hotel.component', 'app/components/add_room.component', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, add_hotel_component_1, add_room_component_1, router_1;
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
            }],
        execute: function() {
            EditHotelsPageComponent = (function () {
                function EditHotelsPageComponent(router) {
                    this.isSignInActive = true;
                    if (localStorage.getItem('token') == null) {
                        router.parent.navigate(['./HomePage']);
                    }
                }
                EditHotelsPageComponent.prototype.openSignIn = function (event) {
                    event.preventDefault();
                    this.isSignInActive = true;
                };
                EditHotelsPageComponent.prototype.openRegister = function (event) {
                    event.preventDefault();
                    this.isSignInActive = false;
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
                    __metadata('design:paramtypes', [router_1.Router])
                ], EditHotelsPageComponent);
                return EditHotelsPageComponent;
            }());
            exports_1("EditHotelsPageComponent", EditHotelsPageComponent);
        }
    }
});
//# sourceMappingURL=edit_hotels_page.component.js.map