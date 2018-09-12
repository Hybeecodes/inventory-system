import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEquipmentTypeComponent } from './add-equipment-type.component';

const routes: Routes = [
    {
        path: '',
        component: AddEquipmentTypeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddEquipmentTypeRoutingModule {}
