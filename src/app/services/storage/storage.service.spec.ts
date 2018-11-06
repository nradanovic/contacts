import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('StorageService', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			providers: [LocalStorageService]
		}));

	it('should be created', () => {
		const service: LocalStorageService = TestBed.get(LocalStorageService);
		expect(service).toBeTruthy();
	});

	it('should set data in storage', () => {
		const service: LocalStorageService = TestBed.get(LocalStorageService);
		const testObj = {
			val: 1
		};
		service.setItem('test', JSON.stringify(testObj));
		const savedData = localStorage.getItem('test');
		const data = JSON.parse(savedData);
		expect(data).toBeDefined();
		expect(data.val).toBe(1);
	});
});
