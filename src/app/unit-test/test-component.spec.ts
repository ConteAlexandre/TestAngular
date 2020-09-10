import ContactClass from '../contacts/shared/models/contact';
import { ContactsComponent} from '../contacts';
import {Contact} from '../contacts/shared/models';

describe('ContactComponent', () => {
    let contactComponent: ContactsComponent = null;

    beforeEach(() => {
        contactComponent = new ContactsComponent();
    });

    // Constructor vide
    it('should ', function () {
        expect(contactComponent).not.toBeNull();
    });
    it('no contzct', () => {
        expect(contactComponent.contacts.length).toBe(0);
    });
    it('some contact', () => {
        const contact = {
            id: 1,
            name: 'Donald the best'
        };
        const contactlist: Array<Contact> = [contact];
        contactComponent.contacts = contactlist;
        expect(contactComponent.contacts.length).toBe(1);
    });

    afterEach(() => {
        contactComponent = null;
    });
});
