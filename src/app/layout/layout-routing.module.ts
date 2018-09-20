import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'equipment_types', loadChildren: './equipment-types/equipment-types.module#EquipmentTypesModule' },
            { path: 'add_equipment_type', loadChildren: './add-equipment-type/add-equipment-type.module#AddEquipmentTypeModule' },
            { path: 'equipments', loadChildren: './equipments/equipments.module#EquipmentsModule' },
            { path: 'add_equipment', loadChildren: './add-equipment/add-equipment.module#AddEquipmentModule' },
            { path: 'offices', loadChildren: './offices/offices.module#OfficesModule' },
            { path: 'allocations', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'add_office', loadChildren: './form/form.module#FormModule' },
            { path: 'allocate_equipment/:id', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'report', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes,)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
