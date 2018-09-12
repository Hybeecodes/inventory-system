import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipmentTypeComponent } from './add-equipment-type.component';

describe('AddEquipmentTypeComponent', () => {
    let component: AddEquipmentTypeComponent;
    let fixture: ComponentFixture<AddEquipmentTypeComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [AddEquipmentTypeComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(AddEquipmentTypeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
