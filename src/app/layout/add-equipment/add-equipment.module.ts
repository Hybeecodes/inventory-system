import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEquipmentRoutingModule } from './add-equipment.routing.module';
import { AddEquipmentComponent } from './add-equipment.component';

@NgModule({
    imports: [CommonModule, AddEquipmentRoutingModule],
    declarations: [AddEquipmentComponent]
})
export class AddEquipmentModule {}
