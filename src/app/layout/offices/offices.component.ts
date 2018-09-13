import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ApiAgentService } from '../../shared/services/api-agent.service';
import { Router } from '@angular/router';



@Component({
    selector: 'app-offices',
    templateUrl: './offices.component.html',
    styleUrls: ['./offices.component.scss'],
    animations:[routerTransition()],
    providers:[ApiAgentService]
})
export class OfficesComponent implements OnInit {
    offices = [];
    equipCount = [];
    constructor(
        public api:ApiAgentService,
        public router: Router
    ) {}

    ngOnInit(
    ) {
        this.api.getData('/offices').then((res)=>{
            if(res['status'] ==1){
                console.log(res);
                this.offices = res['message'];
            }
        })
       
    }
}
