import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, Router, ROUTER_PROVIDERS } from 'angular2/router';
import 'rxjs/Rx';
import { NavbarComponent } from './navbar.component';

import { HomePageComponent } from 'app/pages/home_page.component';
import { AuthPageComponent } from 'app/pages/auth_page.component';
import { EditHotelsPageComponent } from 'app/pages/edit_hotels_page.component';
import { FindRoomPageComponent } from 'app/pages/find_room_page.component';
import { RegisterPageComponent } from 'app/pages/register_page.component';

@Component({
    selector: 'met-hotels',
    directives: [
        ROUTER_DIRECTIVES,
        NavbarComponent,
    ],
    providers: [ROUTER_PROVIDERS],
    templateUrl: '/app/template/app.html'
})

@RouteConfig ([
    {path:'/', name: 'HomePage', component: HomePageComponent, useAsDefault: true},
    {path:'/sign-in', name:'SignInPage', component: AuthPageComponent},
    {path:'/register', name:'RegisterPage', component: RegisterPageComponent},
    {path:'/edit-hotels', name:'EditHotelsPage', component: EditHotelsPageComponent},
    {path:'/find-room', name:'FindRoomPage', component: FindRoomPageComponent},
])

export class AppComponent {
    public username: String;
    public router: Router;
    public isAuth: String;

    constructor(router: Router) {
        this.router = router;
        router.subscribe((val) => {
            if(localStorage.getItem('token') !== null){
                this.isAuth = "yes";
                this.username = localStorage.getItem('username');
            }else{
                this.isAuth = "no";
            }
        });

        if(localStorage.getItem('username') != null){
            this.username = localStorage.getItem('username');
        }
    }

    logout(event) {
        event.preventDefault();

        localStorage.removeItem("token");
        localStorage.removeItem("username");

        if(localStorage.getItem('token') !== null){
            this.isAuth = "yes";
        }else{
            this.isAuth = "no";
        }

        this.router.navigate(['./HomePage']);
        this.username = null;
    }
}