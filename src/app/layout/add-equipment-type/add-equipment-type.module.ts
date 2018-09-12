import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEquipmentTypeRoutingModule } from './add-equipment-type-routing.module';
import { AddEquipmentTypeComponent } from './add-equipment-type.component';

@NgModule({
    imports: [CommonModule, AddEquipmentTypeRoutingModule],
    declarations: [AddEquipmentTypeComponent]
})
export class AddEquipmentTypeModule {}
