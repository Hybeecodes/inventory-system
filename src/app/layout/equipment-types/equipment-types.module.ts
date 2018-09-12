import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentTypesRoutingModule } from './equipment-types-routing.module';
import { EquipmentTypesComponent } from './equipment-types.component';

@NgModule({
    imports: [CommonModule, EquipmentTypesRoutingModule],
    declarations: [EquipmentTypesComponent]
})
export class EquipmentTypesModule {}
