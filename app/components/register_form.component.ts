import {Component} from 'angular2/core';
import 'rxjs/Rx';
import { Http, Headers } from "angular2/http"

@Component({
    selector: 'register-form',
    templateUrl: '/app/template/register-form.html'
})

export class RegisterFormComponent {
    public http: any;
    public headers: any;
    public config: any;
    public registerUser: Object;
    public registerUser.email: String;
    public registerUser.firstName: String;
    public registerUser.lastName: String;
    public registerUser.password: String;
    public registerUser.confirmPassword: String;

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

        // console.log('submit register', this.registerUser)

        if (this.registerUser.password == this.registerUser.confirmPassword) {

            var headers = new Headers();
            headers.append('Content-Type', 'application/json');

            this.http.post(this.config.apiBaseUrl + "register.php",
                JSON.stringify(this.registerUser), {
                    headers: headers.append('Content-Type', 'application/json')
            }).subscribe(function (data) {
                console.log('received response')
            });

        } else {
            alert('Password and confirm password missmatch');
        }
    }
}