import {Component} from 'angular2/core';
import 'rxjs/Rx';
import { AddHotelComponent } from 'app/components/add_hotel.component';
import { AddRoomComponent } from 'app/components/add_room.component';
import {Router, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: 'edit-hotels-page',
    directives: [
        AddHotelComponent,
        AddRoomComponent
    ],
    templateUrl: '/app/template/edit-hotels.html'
})

export class EditHotelsPageComponent {
    public isSignInActive: Boolean;

    openSignIn(event) {
        event.preventDefault();

        this.isSignInActive = true;
    }

    openRegister(event) {
        event.preventDefault();

        this.isSignInActive = false;
    }

    constructor(router: Router){
        this.isSignInActive = true;

        if(localStorage.getItem('token') == null){
            router.parent.navigate(['./HomePage']);
        }
    }
}