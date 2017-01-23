import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
import { NavbarComponent } from './navbar.component';
import { LocationsSectionComponent } from './locations_section.component';
import { SpecialOffersComponent } from './special_offers.component';
import { HomepageUserInfoComponent } from './homepage_user_info.component';
import { HomepageAuthComponent } from './homepage_auth.component';
import { ReserveRoomComponent } from './reserve_room.component';

@Component({
    selector: 'met-hotels',
    directives: [
        NavbarComponent,
        LocationsSectionComponent,
        SpecialOffersComponent,
        HomepageUserInfoComponent,
        HomepageAuthComponent,
        ReserveRoomComponent
    ],
    templateUrl: '/app/template/app.html'
})

export class AppComponent {
    user: null;
    constructor(http: Http){
        // http.get('/app/data/korisnici.json')
        //     .map(res => res.json())
        //     .subscribe(korisnici => this.korisnici = korisnici);
    }
}