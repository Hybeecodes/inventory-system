import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ApiAgentService } from '../../shared/services/api-agent.service';
import { Router } from '@angular/router';



@Component({
    selector: 'app-office',
    templateUrl: './add-office.component.html',
    styleUrls: ['./add-office.component.scss'],
    animations:[routerTransition()],
    providers:[ApiAgentService]
})
export class AddOfficeComponent implements OnInit {
    managers = [];
    constructor(
        public router: Router,
        public api: ApiAgentService
    ) {}

    ngOnInit() {
        this.getManagers();
    }

    getManagers(){
        this.api.getData('/managers').then((res)=>{
            if(res['status'] == 1){
                this.managers = res['message'];
            }
        }).catch((err)=>{

        })
    }

    addOffice(name,manager){
        console.log(name);
        this.api.postData({name:name,managerId:manager},'/office').then((res)=>{
            if(res['status'] == 1){
                this.router.navigateByUrl('offices');
            }else{

            }
        })
    }
}
