import {ContactListPageObject} from '../po/contact-list.po';
import {browser, by, element, ExpectedConditions as EC} from 'protractor';

describe('the contact list', () => {
  // Before all tests, lets create a new page object.
  beforeAll(() => {
  });

  it('should be able to login', () => {
    browser.waitForAngularEnabled(false);
    browser.get('/assets/login.html');
    element(by.css('input.user')).sendKeys('username');
    element(by.css('input.password')).sendKeys('password');
    element(by.id('login')).click();

    // Should go to the contact list after logging in.
    browser.waitForAngularEnabled(true);
    const list = element(by.css('app-contact-list'));
    expect(list.getText()).toContain('Jeff Pipe');
  });

  it('should automatically ')
});
