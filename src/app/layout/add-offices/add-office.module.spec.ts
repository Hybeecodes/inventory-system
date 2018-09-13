import { AddOfficeModule } from './add-office.module';

describe('AddOfficeModule', () => {
    let AddOfficeModule: AddOfficeModule;

    beforeEach(() => {
        AddOfficeModule = new AddOfficeModule();
    });

    it('should create an instance', () => {
        expect(AddOfficeModule).toBeTruthy();
    });
});
 