import {Component} from 'angular2/core';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router';
import { Http, Headers } from "angular2/http";
import { HomepageAuthComponent } from 'app/components/homepage_auth.component';
import { HomepageUserInfoComponent } from 'app/components/homepage_user_info.component';

@Component({
    selector: 'register-page',
    directives: [
        HomepageAuthComponent,
        HomepageUserInfoComponent
    ],
    templateUrl: '/app/template/register-page.html'
})

export class RegisterPageComponent {
    public router: Router;
    public http: Http;
    public headers: any;
    public config: any;
    public registerUser: {
        email: String,
        firstName: String,
        lastName: String,
        password: String,
        confirmPassword: String
    };

    constructor(router: Router, http: Http){

        this.http = http;
        this.router = router;

        this.registerUser = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: ''
        };

        if(localStorage.getItem('token') != null){
            router.parent.navigate(['./HomePage']);
        }else {
            http.get('/app/data/config.json')
                .map(config => config.json())
                .subscribe(config => this.config = config);
        }
    }

    onSubmit() {
        if (this.registerUser.password == this.registerUser.confirmPassword) {

            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            var router = this.router;

            this.http.post(this.config.apiBaseUrl + "services/register.php",
                JSON.stringify(this.registerUser), {
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

        } else {
            alert('Password and confirm password missmatch');
        }
    }
}