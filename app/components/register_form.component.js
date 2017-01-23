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
    var RegisterFormComponent;
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
            RegisterFormComponent = (function () {
                function RegisterFormComponent(http) {
                    var _this = this;
                    this.http = http;
                    this.registerUser = {
                        email: '',
                        firstName: '',
                        lastName: '',
                        password: '',
                        confirmPassword: ''
                    };
                    http.get('/app/data/config.json')
                        .map(function (config) { return config.json(); })
                        .subscribe(function (config) { return _this.config = config; });
                }
                RegisterFormComponent.prototype.onSubmit = function () {
                    // console.log('submit register', this.registerUser)
                    if (this.registerUser.password == this.registerUser.confirmPassword) {
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/json');
                        this.http.post(this.config.apiBaseUrl + "register.php", JSON.stringify(this.registerUser), {
                            headers: headers.append('Content-Type', 'application/json')
                        }).subscribe(function (data) {
                            console.log('received response');
                        });
                    }
                    else {
                        alert('Password and confirm password missmatch');
                    }
                };
                RegisterFormComponent = __decorate([
                    core_1.Component({
                        selector: 'register-form',
                        templateUrl: '/app/template/register-form.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RegisterFormComponent);
                return RegisterFormComponent;
            }());
            exports_1("RegisterFormComponent", RegisterFormComponent);
        }
    }
});
//# sourceMappingURL=register_form.component.js.map