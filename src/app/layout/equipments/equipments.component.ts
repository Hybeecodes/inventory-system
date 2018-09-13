import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ApiAgentService } from '../../shared/services/api-agent.service';
import { Router } from '@angular/router';



@Component({
    selector: 'app-equipment-types',
    templateUrl: './equipments.component.html',
    styleUrls: ['./equipments.component.scss'],
    animations:[routerTransition()],
    providers:[ApiAgentService]
})
export class EquipmentsComponent implements OnInit {
    equipments = [];
    equipCount = [];
    constructor(
        public api:ApiAgentService,
        public router: Router
    ) {}

    ngOnInit(
    ) {
        this.api.getData('/equipments').then((res)=>{
            if(res['status'] ==1){
                console.log(res);
                this.equipments = res['message'];
            }
        })
       
    }
}
