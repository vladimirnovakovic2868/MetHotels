import {Component} from 'angular2/core';
import 'rxjs/Rx';

import { LocationsSectionComponent } from 'app/components/locations_section.component';
import { SpecialOffersComponent } from 'app/components/special_offers.component';

@Component({
    selector: 'home-page',
    directives: [
        LocationsSectionComponent,
        SpecialOffersComponent,
    ],
    templateUrl: '/app/template/home-page.html'
})

export class HomePageComponent {
    public isSignInActive: Boolean;
    public user: any;

    constructor(){
        this.isSignInActive = true;
        this.user = null;
        // console.log('navbar')
    }

    openSignIn(event) {
        event.preventDefault();

        this.isSignInActive = true;
    }

    openRegister(event) {
        event.preventDefault();

        this.isSignInActive = false;
    }

}