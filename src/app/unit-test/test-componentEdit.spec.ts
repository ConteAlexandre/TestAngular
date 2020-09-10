import {Contact} from '../contacts/shared/models';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {ContactEditComponent} from '../contacts/contact-edit';
import {DebugElement} from '@angular/core';
import {FavoriteIconDirective} from '../contacts/shared/favorite-icon';
import {ContactService, InvalidEmailModalComponent, InvalidPhoneNumberModalComponent} from '../contacts/shared';
import {AppMaterialModule} from '../app.material.module';
import {FormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {By} from '@angular/platform-browser';

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
        TestBed.configureTestingModule({
            declarations: [ ContactEditComponent, FavoriteIconDirective, InvalidEmailModalComponent, InvalidPhoneNumberModalComponent],
            imports: [
                AppMaterialModule,
                FormsModule,
                NoopAnimationsModule,
                RouterTestingModule
            ],
            providers: [{provide: ContactService, useValue: contactServiceStub}]
        });
        TestBed.overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [InvalidEmailModalComponent, InvalidPhoneNumberModalComponent]
            }
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ContactEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        rootElement = fixture.debugElement;
    });
    // save contact
    describe('save contact', () => {
        it('display name after save', fakeAsync(() => {
            const contact = {
                id: 1,
                name: 'homer'
            };
            component.isLoading = false;
            component.saveContact(contact);
            fixture.detectChanges();
            const nameInput = rootElement.query(By.css('.contact-name'));
            tick();
            expect(nameInput.nativeElement.value).toBe('homer');
        }));
    });
    // load contact

    // update contact

    // use case : wrong phone number
});
