import {Component} from 'angular2/core';
import 'rxjs/Rx';
import { Http, Headers } from "angular2/http";
import {Router, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: 'register-form',
    templateUrl: '/app/template/register-form.html'
})

export class RegisterFormComponent {
    public http: any;
    public headers: any;
    public config: any;
    public registerUser: {
        email: String,
        firstName: String,
        lastName: String,
        password: String,
        confirmPassword: String
    };
    public router: Router;

    constructor(http: Http){
        this.http = http;

        this.registerUser = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: ''
        };

        http.get('/app/data/config.json')
            .map(config => config.json())
            .subscribe(config => this.config = config);
    }

    onSubmit() {
        if (this.registerUser.password == this.registerUser.confirmPassword) {

            var headers = new Headers();
            headers.append('Content-Type', 'application/json');

            this.http.post(this.config.apiBaseUrl + "services/register.php",
                JSON.stringify(this.registerUser), {
                    headers: headers.append('Content-Type', 'application/json')
                })
                .map(data => data.json())
                .subscribe(function (data) {
                    console.log('received response', data)

                    if(data.error == null){
                        localStorage.setItem('token', data.token);
                        localStorage.setItem('username', data.username);
                        this.router.navigate(['./HomePage']);
                    }else {
                        alert(data.error);
                    }
                });

        } else {
            alert('Password and confirm password missmatch');
        }
    }
}