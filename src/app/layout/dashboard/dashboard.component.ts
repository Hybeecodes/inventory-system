import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ApiAgentService } from '../../shared/services/api-agent.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()],
    providers:[ApiAgentService]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    user = JSON.parse(localStorage.getItem('user'));
    equipments = 0;
    managers = 0;
    equipmentTypes = 0;
    offices = 0;

    constructor(
        public api: ApiAgentService
    ) {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1-1.jpg',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/slider2-1.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3-1.png',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {
        this.api.getData('/equipmentCount').then((equipment:number)=>{
            console.log(equipment);
            this.equipments = equipment['message'];
        })
        this.api.getData('/equipmentTypeCount').then((equipmenttypes:any)=>{
            console.log(equipmenttypes)
            this.equipmentTypes = equipmenttypes['message'];
        })
        this.api.getData('/officeCount').then((offices:any)=>{
            console.log(offices)
            this.offices = offices['message'];
        })
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
