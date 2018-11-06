import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { Contact } from '../../../models/contact';
import { IFilterStatus, Filters } from '../../../components/filter/filter.component';
import { ContactService } from '../../../services/contact/contact.service';

@Component({
	selector: 'app-contact-list',
	templateUrl: './contact-list.component.html',
	styleUrls: ['./contact-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit {
	public contactListObservable: Observable<Contact[]>;
	public searchObservable: BehaviorSubject<IFilterStatus> = new BehaviorSubject({ type: Filters.All });
	public showNewContactCard: boolean;

	constructor(private contactService: ContactService) {}

	ngOnInit() {
		const combined = combineLatest(this.searchObservable, this.contactService.StorageObserver);
		const filteredContacts = ([searchParams, contacts]) => {
			if (contacts) {
				return contacts.filter(contact => this.filter(contact, searchParams));
			}
		};
		this.contactListObservable = combined.pipe(map(filteredContacts));

		this.searchObservable.subscribe(val => (this.showNewContactCard = val.type === Filters.All));
	}

	public trackByIdx(index: number, obj: Contact): number {
		return obj.ID;
	}

	private filter(contact: Contact, filter: IFilterStatus) {
		const typeFilter = filter.type === Filters.Favorites ? contact.Favorite === true : true;
		const contactInfoValues = [contact.FirstName, contact.LastName, contact.Email];
		const phonesValues = contact.Phones.reduce((acc, item) => acc.concat(Object.values(item)), []);
		const contactSearchValues = [...contactInfoValues, ...phonesValues].join(' ');
		const searchTerms = filter.value && filter.value.length > 0 ? filter.value.split(' ') : [];
		const valueFilter = searchTerms.reduce((acc, current) => {
			return acc && contactSearchValues.indexOf(current) >= 0;
		}, true);

		return typeFilter && valueFilter;
	}
}
