import { PhoneNumberPipe } from '../contacts/shared/phone-number';

describe('phonenumberpipe', () => {
    let phoneNumber: PhoneNumberPipe = null;
    beforeEach(() => {
        phoneNumber = new PhoneNumberPipe();
    });

    it('default option', function () {
        const telToTest = '0978654321';
        const expectation = '(097) 865-4321';
        const res = phoneNumber.transform(telToTest);
        expect(res).toBe(expectation);
    });

    it('less than digit option', function () {
        const telToTest = '097865321';
        const expectation = '';
        const res = phoneNumber.transform(telToTest);
        expect(res).toBe(expectation);
    });
    it('dots option', function () {
        const telToTest = '0978654321';
        const expectation = '097.865.4321';
        const res = phoneNumber.transform(telToTest, 'dots');
        expect(res).toBe(expectation);
    });
    it('hyphens option', function () {
        const telToTest = '0978654321';
        const expectation = '097-865-4321';
        const res = phoneNumber.transform(telToTest, 'hyphens');
        expect(res).toBe(expectation);
    });
})
