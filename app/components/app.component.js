System.register(['angular2/core', 'angular2/router', 'rxjs/Rx', './navbar.component', 'app/pages/home_page.component', 'app/pages/auth_page.component', 'app/pages/edit_hotels_page.component', 'app/pages/find_room_page.component', 'app/pages/register_page.component'], function(exports_1, context_1) {
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
    var core_1, router_1, navbar_component_1, home_page_component_1, auth_page_component_1, edit_hotels_page_component_1, find_room_page_component_1, register_page_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (home_page_component_1_1) {
                home_page_component_1 = home_page_component_1_1;
            },
            function (auth_page_component_1_1) {
                auth_page_component_1 = auth_page_component_1_1;
            },
            function (edit_hotels_page_component_1_1) {
                edit_hotels_page_component_1 = edit_hotels_page_component_1_1;
            },
            function (find_room_page_component_1_1) {
                find_room_page_component_1 = find_room_page_component_1_1;
            },
            function (register_page_component_1_1) {
                register_page_component_1 = register_page_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router) {
                    var _this = this;
                    this.router = router;
                    router.subscribe(function (val) {
                        if (localStorage.getItem('token') !== null) {
                            _this.isAuth = "yes";
                            _this.username = localStorage.getItem('username');
                        }
                        else {
                            _this.isAuth = "no";
                        }
                    });
                    if (localStorage.getItem('username') != null) {
                        this.username = localStorage.getItem('username');
                    }
                }
                AppComponent.prototype.logout = function (event) {
                    event.preventDefault();
                    localStorage.removeItem("token");
                    localStorage.removeItem("username");
                    if (localStorage.getItem('token') !== null) {
                        this.isAuth = "yes";
                    }
                    else {
                        this.isAuth = "no";
                    }
                    this.router.navigate(['./HomePage']);
                    this.username = null;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'met-hotels',
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            navbar_component_1.NavbarComponent,
                        ],
                        providers: [router_1.ROUTER_PROVIDERS],
                        templateUrl: '/app/template/app.html'
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'HomePage', component: home_page_component_1.HomePageComponent, useAsDefault: true },
                        { path: '/sign-in', name: 'SignInPage', component: auth_page_component_1.AuthPageComponent },
                        { path: '/register', name: 'RegisterPage', component: register_page_component_1.RegisterPageComponent },
                        { path: '/edit-hotels', name: 'EditHotelsPage', component: edit_hotels_page_component_1.EditHotelsPageComponent },
                        { path: '/find-room', name: 'FindRoomPage', component: find_room_page_component_1.FindRoomPageComponent },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map