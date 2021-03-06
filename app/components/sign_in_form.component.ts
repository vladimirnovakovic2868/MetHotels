import {Component} from 'angular2/core';
import 'rxjs/Rx';
import { Http, Headers } from "angular2/http";

@Component({
    selector: 'sign-in-form',
    templateUrl: '/app/template/sign-in-form.html'
})

export class SignInFormComponent {
    public config: {
        apiBaseUrl: String
    };
    public http: any;
    public user: {
        email: String;
        password: String;
    };

    constructor(http: Http){
        this.http = http;

        this.user = {
            email: '',
            password: ''
        };

        http.get('/app/data/config.json')
            .map(config => config.json())
            .subscribe(config => this.config = config);
    }


    onSubmit () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(this.config.apiBaseUrl + "services/login.php",
            JSON.stringify(this.user), {
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
    }
}