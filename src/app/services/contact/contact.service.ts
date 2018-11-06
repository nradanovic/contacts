import { Injectable } from '@angular/core';
import { LocalStorageService } from '../storage/local-storage.service';
import { Contact } from '../../models/contact';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ContactService {
	private storageKey = 'contacts';
	private storageObserver: BehaviorSubject<Contact[]> = new BehaviorSubject([]);

	private get storage(): Contact[] {
		const contactsString = this.localStorage.getItem(this.storageKey);
		if (contactsString) {
			try {
				const contactsJSON = JSON.parse(contactsString);
				const contacts = contactsJSON.map(contact => Object.assign(new Contact(), contact));
				return contacts;
			} catch (error) {
				throw Error('Could not parse data from local storage');
			}
		}
	}

	private set storage(list: Contact[]) {
		const contactsString = JSON.stringify(list);
		this.localStorage.setItem(this.storageKey, contactsString);
		this.storageObserver.next(list);
	}

	public get StorageObserver() {
		return this.storageObserver;
	}

	constructor(private localStorage: LocalStorageService) {
		this.storageObserver.next(this.storage);
	}

	public get(id): Contact {
		return this.storage.find((contact: Contact) => contact.ID === id);
	}

	public getAll(): Contact[] {
		return this.storage;
	}

	public create(item: Contact) {
		const contacts = this.storage || [];
		this.storage = contacts.concat(item);
	}

	public update(newItem: Contact) {
		this.storage = this.storage.map((contact: Contact) => {
			if (contact.ID === newItem.ID) {
				contact = newItem;
			}
			return contact;
		});
	}

	public delete(item: Contact) {
		this.storage = this.storage.filter((contact: Contact) => contact.ID !== item.ID);
	}
}
