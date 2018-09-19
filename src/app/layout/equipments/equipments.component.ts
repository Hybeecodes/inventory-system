import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ApiAgentService } from '../../shared/services/api-agent.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';


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
    showDetails(e,item){
        swal(`
            Equipment Name: ${item.name}
            Allocated To : ${item.allocatedTo.name}
        `);
    }
    deallocate(e,item){
        const equipmentId = item._id;
        this.api.getData(`/deallocate/${equipmentId}`).then((res)=>{
            if(res['status'] == 1){
                swal('Great!','Equipment Deallocated Successfully','success').then(()=>{
                    location.reload(true);
                })
            }
        })
    }
}
