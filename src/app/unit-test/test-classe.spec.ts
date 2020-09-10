import ContactClass from '../contacts/shared/models/contact';
import {Contact} from '../contacts/shared/models';

describe('Contact Class Test', () => {
    let contact: ContactClass = null;

    beforeEach(() => {
        contact = new ContactClass();
    });

    // Constructor vide
    it('empy', () => {
        expect(contact).not.toBeNull();
    });

    // Constructor Name
    it('empy', () => {
        contact.name = 'toto';
        expect(contact.name).toEqual('toto');
    });
    // Constructor Name
    it('empy', () => {
        contact.email = 'toto';
        expect(contact.email).toEqual('toto');
    });
    // Constructor Name
    it('empy', () => {
        contact.country = 'toto';
        expect(contact.country).toEqual('toto');
    });
    // Constructor Name
    it('empy', () => {
        contact.number = 'toto';
        expect(contact.number).toEqual('toto');
    });
    // Constructor Name
    it('empy', () => {
        contact.favorite = true;
        expect(contact.favorite).toBe(true);
    });

    afterEach(() => {
        contact = null;
    });
});
