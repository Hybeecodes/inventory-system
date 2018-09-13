import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficesRoutingModule } from './offices-routing.module';
import { OfficesComponent } from './offices.component';

@NgModule({
    imports: [CommonModule, OfficesRoutingModule],
    declarations: [OfficesComponent]
})
export class OfficesModule {}
