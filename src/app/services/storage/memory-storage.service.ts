import { Injectable } from '@angular/core';
import { AbstractStorage } from './abstract-storage.class';

@Injectable()
export class MemoryStorage extends AbstractStorage {
	private storage: Map<string, string> = new Map();

	public clear(): void {
		this.storage = new Map();
	}
	public getItem(key: string): string | null {
		return this.storage.get(key);
	}
	public key(index: number): string | null {
		return this.storage.keys[index];
	}
	public removeItem(key: string): void {
		this.storage.delete(key);
	}
	public setItem(key: string, data: string): void {
		this.storage.set(key, data);
	}
}
