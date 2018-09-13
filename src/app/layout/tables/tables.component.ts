import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ApiAgentService } from '../../shared/services/api-agent.service';
import { Router } from '@angular/router';



@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()],
    providers:[ApiAgentService]
})
export class TablesComponent implements OnInit {
    allocations= [];
    constructor(
        public router: Router,
        public api: ApiAgentService
    ) {}

    ngOnInit() {
        this.getAllocations();
    }

    getAllocations(){
        this.api.getData('/allocations').then((allocations:any)=>{
            console.log(allocations)
            if(allocations['status'] ==1){
                this.allocations = allocations['message'];
            }
        }).catch((err)=>{

        })
    }
}
