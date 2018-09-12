import { AddEquipmentTypeModule } from './add-equipment-type.module';

describe('AddEquipmentTypeModule', () => {
    let AddEquipmentTypeModule: AddEquipmentTypeModule;

    beforeEach(() => {
        AddEquipmentTypeModule = new AddEquipmentTypeModule();
    });

    it('should create an instance', () => {
        expect(AddEquipmentTypeModule).toBeTruthy();
    });
});
 