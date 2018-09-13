import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddOfficeRoutingModule } from './add-office.routing.module';
import { AddOfficeComponent } from './add-office.component';

@NgModule({
    imports: [CommonModule, AddOfficeRoutingModule],
    declarations: [AddOfficeComponent]
})
export class AddOfficeModule {}
