import { OfficesModule } from './offices.module';

describe('OfficesModule', () => {
    let OfficesModule: OfficesModule;

    beforeEach(() => {
        OfficesModule = new OfficesModule();
    });

    it('should create an instance', () => {
        expect(OfficesModule).toBeTruthy();
    });
});
 