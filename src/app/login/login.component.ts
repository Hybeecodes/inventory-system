import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { ApiAgentService } from '../shared/services/api-agent.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers: [ApiAgentService]
})
export class LoginComponent implements OnInit {
    constructor(
        public router: Router,
        public api: ApiAgentService
    ) {}

    title = 'Nacoss Inventory Management System';
    login = {
        email:'',
        password:''
    }
    submitted =false;
    alert = '';
    classname = '';
   

    ngOnInit() {}

    onLoggedin(email,password) {
        this.submitted = true;
        console.log(email);
        let post_data = {
            email:email,
            password: password
          }
          console.log(post_data);
        this.api.postData(post_data,'/login').then((res)=>{
            if(res['status'] == 1){
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('token',res['token']);
                localStorage.setItem('user',JSON.stringify(res['message']));
                this.router.navigateByUrl('dashboard');
            }else{
                this.classname = 'alert alert-danger';
                this.alert = res['message'];
            }
        });
    };
}
