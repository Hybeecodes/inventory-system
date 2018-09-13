import { AddEquipmentModule } from './add-equipment.module';

describe('AddEquipmentModule', () => {
    let AddEquipmentModule: AddEquipmentModule;

    beforeEach(() => {
        AddEquipmentModule = new AddEquipmentModule();
    });

    it('should create an instance', () => {
        expect(AddEquipmentModule).toBeTruthy();
    });
});
 