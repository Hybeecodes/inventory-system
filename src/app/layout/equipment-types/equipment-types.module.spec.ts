import { EquipmentTypesModule } from './equipment-types.module';

describe('EquipmentTypesModule', () => {
    let EquipmentTypesModule: EquipmentTypesModule;

    beforeEach(() => {
        EquipmentTypesModule = new EquipmentTypesModule();
    });

    it('should create an instance', () => {
        expect(EquipmentTypesModule).toBeTruthy();
    });
});
 