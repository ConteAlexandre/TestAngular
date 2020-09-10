import { browser } from 'protractor';

describe('dummy test', () => {
    it('should ', function () {
        browser.get('/#/');
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/#/');
    });
})
