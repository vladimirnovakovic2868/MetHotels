System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', './navbar.component', './locations_section.component', './special_offers.component', './homepage_user_info.component', './homepage_auth.component', './reserve_room.component'], function(exports_1, context_1) {
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
    var core_1, http_1, navbar_component_1, locations_section_component_1, special_offers_component_1, homepage_user_info_component_1, homepage_auth_component_1, reserve_room_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (locations_section_component_1_1) {
                locations_section_component_1 = locations_section_component_1_1;
            },
            function (special_offers_component_1_1) {
                special_offers_component_1 = special_offers_component_1_1;
            },
            function (homepage_user_info_component_1_1) {
                homepage_user_info_component_1 = homepage_user_info_component_1_1;
            },
            function (homepage_auth_component_1_1) {
                homepage_auth_component_1 = homepage_auth_component_1_1;
            },
            function (reserve_room_component_1_1) {
                reserve_room_component_1 = reserve_room_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(http) {
                    this.user = null;
                    // http.get('/app/data/korisnici.json')
                    //     .map(res => res.json())
                    //     .subscribe(korisnici => this.korisnici = korisnici);
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'met-hotels',
                        directives: [
                            navbar_component_1.NavbarComponent,
                            locations_section_component_1.LocationsSectionComponent,
                            special_offers_component_1.SpecialOffersComponent,
                            homepage_user_info_component_1.HomepageUserInfoComponent,
                            homepage_auth_component_1.HomepageAuthComponent,
                            reserve_room_component_1.ReserveRoomComponent
                        ],
                        templateUrl: '/app/template/app.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map