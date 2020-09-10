import ContactClass from '../contacts/shared/models/contact';
import { ContactsComponent} from '../contacts';
import {Contact} from '../contacts/shared/models';
import {ComponentFixture} from '@angular/core/testing';
import {ContactEditComponent} from '../contacts/contact-edit';
import {DebugElement} from '@angular/core';

describe('ContactComponent', () => {
    let fixture: ComponentFixture<ContactEditComponent>;
    let component: ContactEditComponent;
    let rootElement: DebugElement;

    // mock service
    const contactServiceStub = {
        contact: {
            id: 1,
            name: 'Donald the best'
        },
        save: async function (contact: Contact) {
            component.contact = contact;
        },
        getContact: async function () {
            component.contact = this.contact;
            return this.contact;
        },
        updateContact: async function(contact: Contact) {
            component.contact = contact;
        }
    };

    beforeEach(() => {
        contactComponent = new ContactsComponent();
    });

    // save contact

    // load contact

    // update contact

    // use case : wrong phone number

    afterEach(() => {
        contactComponent = null;
    });
});
