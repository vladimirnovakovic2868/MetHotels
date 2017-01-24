System.register(['angular2/core', 'rxjs/Rx', 'angular2/router', "angular2/http", 'app/components/homepage_auth.component', 'app/components/homepage_user_info.component'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, homepage_auth_component_1, homepage_user_info_component_1;
    var RegisterPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (homepage_auth_component_1_1) {
                homepage_auth_component_1 = homepage_auth_component_1_1;
            },
            function (homepage_user_info_component_1_1) {
                homepage_user_info_component_1 = homepage_user_info_component_1_1;
            }],
        execute: function() {
            RegisterPageComponent = (function () {
                function RegisterPageComponent(router, http) {
                    var _this = this;
                    this.http = http;
                    this.router = router;
                    this.registerUser = {
                        email: '',
                        firstName: '',
                        lastName: '',
                        password: '',
                        confirmPassword: ''
                    };
                    if (localStorage.getItem('token') != null) {
                        router.parent.navigate(['./HomePage']);
                    }
                    else {
                        http.get('/app/data/config.json')
                            .map(function (config) { return config.json(); })
                            .subscribe(function (config) { return _this.config = config; });
                    }
                }
                RegisterPageComponent.prototype.onSubmit = function () {
                    if (this.registerUser.password == this.registerUser.confirmPassword) {
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/json');
                        var router = this.router;
                        this.http.post(this.config.apiBaseUrl + "services/register.php", JSON.stringify(this.registerUser), {
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
                    }
                    else {
                        alert('Password and confirm password missmatch');
                    }
                };
                RegisterPageComponent = __decorate([
                    core_1.Component({
                        selector: 'register-page',
                        directives: [
                            homepage_auth_component_1.HomepageAuthComponent,
                            homepage_user_info_component_1.HomepageUserInfoComponent
                        ],
                        templateUrl: '/app/template/register-page.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http])
                ], RegisterPageComponent);
                return RegisterPageComponent;
            }());
            exports_1("RegisterPageComponent", RegisterPageComponent);
        }
    }
});
//# sourceMappingURL=register_page.component.js.map