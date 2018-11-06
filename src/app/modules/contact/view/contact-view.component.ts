import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Contact } from '../../../models/contact';
import { ContactService } from '../../../services/contact/contact.service';

@Component({
	selector: 'app-contact-view',
	templateUrl: './contact-view.component.html',
	styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent implements OnInit {
	public contact: Contact;
	private id: number;

	public get favorite(): boolean {
		return this.contact.Favorite;
	}

	public set favorite(val: boolean) {
		this.contact.Favorite = val;
		this.contactService.update(this.contact);
	}

	constructor(private contactService: ContactService, private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.id = parseInt(params['id']);
			this.contact = this.contactService.get(this.id);
		});
	}
}
