import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiAgentService } from '../../shared/services/api-agent.service';
import swal from 'sweetalert';

@Component({
    selector: 'app-bs-element',
    templateUrl: './bs-element.component.html',
    styleUrls: ['./bs-element.component.scss'],
    animations: [routerTransition()]
})
export class BsElementComponent implements OnInit {
    equipment: any;
    offices: any;
    constructor(
        public router: Router,
        public api: ApiAgentService,
        public route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.getEquipment();
        this.getOffices();
    }

    getEquipment(){
        const id = this.route.snapshot.params.id;
        this.api.getData(`/equipment/${id}`).then((res)=>{
            if(res['status'] == 1){
                this.equipment = res['message'];
            }
        }).catch((err)=>{

        })
    }

    getOffices(){
        this.api.getData('/offices').then((res)=>{
            if(res['status'] ==1){
                console.log(res);
                this.offices = res['message'];
            }
        })
    }

    allocateEquipment(officeId){
        const equipmentId = this.equipment._id;
        this.api.postData({equipmentId:equipmentId,officeId:officeId},'/allocate').then((res)=>{
            if(res['status'] == 1){
                swal('Great!','Equipment Allocated Successfully','success').then(()=>{
                    this.router.navigateByUrl('/equipments')
                })
            }
        })
    }
}
