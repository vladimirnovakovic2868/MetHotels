System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var SpecialOffersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            SpecialOffersComponent = (function () {
                function SpecialOffersComponent(http) {
                    var _this = this;
                    this.specialOffers = [];
                    this.config = {};
                    http.get('/app/data/specialOffers.json')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (specialOffers) { return _this.specialOffers = specialOffers; });
                    http.get('/app/data/config.json')
                        .map(function (config) { return config.json(); })
                        .subscribe(function (config) { return _this.config = config; });
                }
                SpecialOffersComponent = __decorate([
                    core_1.Component({
                        selector: 'special-offers',
                        templateUrl: '/app/template/special-offers.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SpecialOffersComponent);
                return SpecialOffersComponent;
            }());
            exports_1("SpecialOffersComponent", SpecialOffersComponent);
        }
    }
});
//# sourceMappingURL=special_offers.component.js.map