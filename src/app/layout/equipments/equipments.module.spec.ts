import { EquipmentsModule } from './equipments.module';

describe('EquipmentTypesModule', () => {
    let EquipmentTypesModule: EquipmentsModule;

    beforeEach(() => {
        EquipmentTypesModule = new EquipmentsModule();
    });

    it('should create an instance', () => {
        expect(EquipmentTypesModule).toBeTruthy();
    });
});
 