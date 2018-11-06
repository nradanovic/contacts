import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCardComponent } from './contact-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FavoriteIconComponent } from '../favorite-icon/favorite-icon.component';
import { Contact } from '../../models/contact';
import { ModalService, ModalResponse } from 'src/app/services/modal/modal.service';
import { of } from 'rxjs';
import { ContactService } from 'src/app/services/contact/contact.service';
import { LocalStorageService } from 'src/app/services/storage/local-storage.service';

const ModalServiceStub: Partial<ModalService> = {
	open: (title, text) => of(ModalResponse.Confirm)
};

const LocalStorageServiceStub: Partial<LocalStorageService> = {
	getItem(storageKey: string): string | null {
		return '';
	}
};

describe('ContactCardComponent', () => {
	let component: ContactCardComponent;
	let fixture: ComponentFixture<ContactCardComponent>;
	let service;
	let modalOpenSpy;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
			declarations: [ContactCardComponent, FavoriteIconComponent],
			providers: [
				{ provide: ModalService, useValue: ModalServiceStub },
				ContactService,
				{ provide: LocalStorageService, useValue: LocalStorageServiceStub }
			]
		}).compileComponents();
		service = TestBed.get(ModalService);
		modalOpenSpy = spyOn(service, 'open').and.returnValue(true);
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContactCardComponent);
		component = fixture.componentInstance;
		component.contact = new Contact();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should open confirmation modal on delete click', () => {
		const deleteBtn = fixture.debugElement.nativeElement.querySelector('#deleteBtn');
		deleteBtn.click();
		fixture.detectChanges();
		expect(modalOpenSpy.calls.any()).toBe(true, 'Modal opened ');
	});
});
