import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ApiAgentService } from '../../shared/services/api-agent.service';
import { Router } from '@angular/router';



@Component({
    selector: 'app-equipment',
    templateUrl: './add-equipment.component.html',
    styleUrls: ['./add-equipment.component.scss'],
    animations:[routerTransition()],
    providers:[ApiAgentService]
})
export class AddEquipmentComponent implements OnInit {
    equipmentTypes = [];
    constructor(
        public router: Router,
        public api: ApiAgentService
    ) {}

    ngOnInit() {
        this.getEquipmentType();
    }

    getEquipmentType(){
        this.api.getData('/getAllEquipmentTypes').then((res)=>{
            if(res['status'] == 1){
                this.equipmentTypes = res['message'];
            }
        }).catch((err)=>{

        })
    }

    addEquipment(name,condition,type){
        console.log(name);
        this.api.postData({name:name,condition:condition,typeId:type},'/equipment').then((res)=>{
            if(res['status'] == 1){
                this.router.navigateByUrl('equipments');
            }else{

            }
        })
    }
}
