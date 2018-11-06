import { Injectable } from '@angular/core';
import { AbstractStorage } from './abstract-storage.class';

@Injectable()
export class LocalStorageService extends AbstractStorage {
	private storage: Storage = localStorage;

	public clear(): void {
		this.storage.clear();
	}
	public key(index: number): string | null {
		return this.storage.keys[index];
	}
	public removeItem(key: string): void {
		this.storage.delete(key);
	}

	public getItem(storageKey: string): string | null {
		try {
			const listJson = this.storage.getItem(storageKey);
			if (listJson) {
				return listJson;
			}
		} catch (error) {
			throw Error('Could not get data from local storage');
		}
	}

	public setItem(storageKey: string, list: string) {
		try {
			this.storage.setItem(storageKey, list);
		} catch (error) {
			throw Error('Could not set data to local storage');
		}
	}
}
