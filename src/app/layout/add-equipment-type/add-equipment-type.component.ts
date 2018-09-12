import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ApiAgentService } from '../../shared/services/api-agent.service';
import { Router } from '@angular/router';



@Component({
    selector: 'app-equipment-type',
    templateUrl: './add-equipment-type.component.html',
    styleUrls: ['./add-equipment-type.component.scss'],
    animations:[routerTransition()],
    providers:[ApiAgentService]
})
export class AddEquipmentTypeComponent implements OnInit {
    constructor(
        public router: Router,
        public api: ApiAgentService
    ) {}

    ngOnInit() {}

    addEquipmentType(typeName){
        console.log('something');

        this.api.postData({typeName:typeName},'/addEquipmentType').then((res)=>{
            if(res['status'] == 1){
                this.router.navigateByUrl('equipment_types');
            }else{

            }
        })
    }
}
