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
        let post_data = {
            email:email,
            password: password
          }
        //   console.log(post_data);
        this.api.postData(post_data,'/login').then((res)=>{
            if(res['status'] == 1){
                localStorage.setItem('token',res['token']);
                let user = res['message']['0'];
                // console.log(user['0'])
                localStorage.setItem('user_firstname',user['firstname']);
                localStorage.setItem('user_lastname',user['lastname']);
                // console.log(localStorage.getItem('user'));
                this.router.navigateByUrl('dashboard');
            }else{
                this.classname = 'alert alert-danger';
                this.alert = res['message'];
            }
        }).catch((err)=>{
            console.log(err);
        })
    };
}
