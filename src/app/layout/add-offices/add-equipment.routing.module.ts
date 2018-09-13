import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOfficeComponent } from './add-office.component';

const routes: Routes = [
    {
        path: '',
        component: AddOfficeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddOfficeRoutingModule {}
