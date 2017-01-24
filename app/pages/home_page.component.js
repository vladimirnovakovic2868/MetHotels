System.register(['angular2/core', 'rxjs/Rx', 'app/components/locations_section.component', 'app/components/special_offers.component'], function(exports_1, context_1) {
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
    var core_1, locations_section_component_1, special_offers_component_1;
    var HomePageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (locations_section_component_1_1) {
                locations_section_component_1 = locations_section_component_1_1;
            },
            function (special_offers_component_1_1) {
                special_offers_component_1 = special_offers_component_1_1;
            }],
        execute: function() {
            HomePageComponent = (function () {
                function HomePageComponent() {
                    this.isSignInActive = true;
                    this.user = null;
                    // console.log('navbar')
                }
                HomePageComponent.prototype.openSignIn = function (event) {
                    event.preventDefault();
                    this.isSignInActive = true;
                };
                HomePageComponent.prototype.openRegister = function (event) {
                    event.preventDefault();
                    this.isSignInActive = false;
                };
                HomePageComponent = __decorate([
                    core_1.Component({
                        selector: 'home-page',
                        directives: [
                            locations_section_component_1.LocationsSectionComponent,
                            special_offers_component_1.SpecialOffersComponent,
                        ],
                        templateUrl: '/app/template/home-page.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomePageComponent);
                return HomePageComponent;
            }());
            exports_1("HomePageComponent", HomePageComponent);
        }
    }
});
//# sourceMappingURL=home_page.component.js.map