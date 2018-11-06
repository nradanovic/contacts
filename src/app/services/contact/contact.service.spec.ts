import { TestBed } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { LocalStorageService } from '../storage/local-storage.service';
import { Contact } from 'src/app/models/contact';

let storage = '';
let data = new Contact();
const LocalStorageServiceStub: Partial<LocalStorageService> = {
	getItem(storageKey: string): string | null {
		return storage;
	},
	setItem(storageKey: string, list: string) {
		storage = list;
	}
};

describe('ContactService', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			providers: [ContactService, { provide: LocalStorageService, useValue: LocalStorageServiceStub }]
		}));

	it('should be created', () => {
		const service: ContactService = TestBed.get(ContactService);
		expect(service).toBeTruthy();
	});

	it('should set data in storage', () => {
		const service: ContactService = TestBed.get(ContactService);
		service.create(data);
		expect(storage).toBe(JSON.stringify([data]));
	});
});
