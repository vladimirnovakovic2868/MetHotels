import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers } from "angular2/http";
import 'rxjs/Rx';
import { SignInFormComponent } from 'app/components/sign_in_form.component';

@Component({
    selector: 'auth-page',
    directives: [
        ROUTER_DIRECTIVES
        // SignInFormComponent
    ],
    templateUrl: '/app/template/auth-page.html'
})

export class AuthPageComponent {
    public router: Router;
    public config: {
        apiBaseUrl: String
    };
    public http: Http;
    public user: {
        email: String;
        password: String;
    };


    constructor(http: Http, router: Router){
        this.http = http;
        this.router = router;

        this.user = {
            email: '',
            password: ''
        };

        if(localStorage.getItem('token') != null){
            this.router.parent.navigate(['./HomePage']);
        }else {
            http.get('/app/data/config.json')
                .map(config => config.json())
                .subscribe(config => this.config = config);
        }
    }


    onSubmit () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var router = this.router;

        this.http.post(this.config.apiBaseUrl + "services/login.php",
            JSON.stringify(this.user), {
                headers: headers
            })
            .map(data => data.json())
            .subscribe(function (data) {
                console.log('received response', data)

                if(data.error == null){
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('username', data.username);
                    router.parent.navigate(['./HomePage']);
                }else {
                    alert(data.error);
                }
            });
    }
}