import {Component} from 'angular2/core';
import 'rxjs/Rx';
import { Router, RouterLink } from 'angular2/router';

@Component({
    selector: 'navbar',
    directives: [RouterLink],
    templateUrl: '/app/template/navbar.html'
})

export class NavbarComponent {
    public username: String;
    public router: Router;

    constructor(){
        if(localStorage.getItem('username') != null){
            this.username = localStorage.getItem('username');
        }
    }

    logout(event) {
        event.preventDefault();

        console.log('logout');
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        // this.router.navigate(['./HomePage']);
    }
}