import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';


@Component({
    selector: 'app-equipment-types',
    templateUrl: './equipment-types.component.html',
    styleUrls: ['./equipment-types.component.scss'],
    animations:[routerTransition()]
})
export class EquipmentTypesComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
