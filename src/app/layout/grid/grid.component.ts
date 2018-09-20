import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ApiAgentService } from '../../shared/services/api-agent.service';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    animations: [routerTransition()]
})
export class GridComponent implements OnInit {

    @ViewChild('report') report: ElementRef;
    equipments:any;
    allocations: any;
    constructor(
        public api: ApiAgentService,
        public router: Router
    ) {}

    ngOnInit() {
        this.getEquipments();
        this.getAllocations();
    }

    getEquipments(){
        this.api.getData('/equipments').then((res)=>{
            console.log(res);
            if(res['status'] == 1){
                this.equipments = res['message'];
            }
        }).catch((err)=>{
            console.log(err);
        });
    }
    
    getAllocations(){
        this.api.getData('/allocations').then((res)=>{
            console.log(res);
            if(res['status'] == 1){
                this.allocations = res['message'];
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    public exportReport(){
        let doc = new jsPDF();
        let specialElementHandlers = {
            '#editor': function(element,renderer){
                return true;
            }
        };
        let report = this.report.nativeElement;

        doc.fromHTML(report.innerHTML,15,15,{
            'width': 190,
            'elementHandlers': specialElementHandlers
        });
        doc.save('report.pdf');
    }
}
