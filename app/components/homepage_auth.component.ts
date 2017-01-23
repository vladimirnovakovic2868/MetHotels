import {Component} from 'angular2/core';
import 'rxjs/Rx';
import { SignInFormComponent } from './sign_in_form.component';
import { RegisterFormComponent } from 'app/components/register_form.component';

@Component({
    selector: 'homepage-auth',
    directives: [
        SignInFormComponent,
        RegisterFormComponent
    ],
    templateUrl: '/app/template/homepage-auth.html'
})

export class HomepageAuthComponent {
    public isSignInActive: Boolean;

    openSignIn(event) {
        event.preventDefault();

        this.isSignInActive = true;
    }

    openRegister(event) {
        event.preventDefault();

        this.isSignInActive = false;
    }

    constructor(){
        this.isSignInActive = true;
        // console.log('navbar')
    }
}