System.register(['angular2/core', 'angular2/router', "angular2/http", 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1;
    var AuthPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            AuthPageComponent = (function () {
                function AuthPageComponent(http, router) {
                    var _this = this;
                    this.http = http;
                    this.router = router;
                    this.user = {
                        email: '',
                        password: ''
                    };
                    if (localStorage.getItem('token') != null) {
                        this.router.parent.navigate(['./HomePage']);
                    }
                    else {
                        http.get('/app/data/config.json')
                            .map(function (config) { return config.json(); })
                            .subscribe(function (config) { return _this.config = config; });
                    }
                }
                AuthPageComponent.prototype.onSubmit = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var router = this.router;
                    this.http.post(this.config.apiBaseUrl + "services/login.php", JSON.stringify(this.user), {
                        headers: headers
                    })
                        .map(function (data) { return data.json(); })
                        .subscribe(function (data) {
                        console.log('received response', data);
                        if (data.error == null) {
                            localStorage.setItem('token', data.token);
                            localStorage.setItem('username', data.username);
                            router.parent.navigate(['./HomePage']);
                        }
                        else {
                            alert(data.error);
                        }
                    });
                };
                AuthPageComponent = __decorate([
                    core_1.Component({
                        selector: 'auth-page',
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                        templateUrl: '/app/template/auth-page.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], AuthPageComponent);
                return AuthPageComponent;
            }());
            exports_1("AuthPageComponent", AuthPageComponent);
        }
    }
});
//# sourceMappingURL=auth_page.component.js.map