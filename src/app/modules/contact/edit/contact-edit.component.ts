import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact, IPhones } from '../../../models/contact';
import { ContactService } from '../../../services/contact/contact.service';
import { ModalService, ModalResponse } from '../../../services/modal/modal.service';
import { FormControl } from '@angular/forms';

export enum ContactEditType {
	New,
	Edit,
	View
}
@Component({
	selector: 'app-contact-edit',
	templateUrl: './contact-edit.component.html',
	styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
	public contact = new Contact();
	private id: number;
	private editType: ContactEditType;

	constructor(
		private contactService: ContactService,
		private route: ActivatedRoute,
		private router: Router,
		private modalService: ModalService
	) {}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.id = parseInt(params['id']);
			if (isNaN(this.id)) {
				this.editType = ContactEditType.New;
				this.contact = new Contact();
			} else {
				this.editType = ContactEditType.Edit;
				this.contact = this.contactService.get(this.id);
			}
		});
	}

	public onFormSubmit(form) {
		if (form.valid === false) {
			Object.values(form.controls).forEach((control: FormControl) => control.markAsDirty());
			return;
		}

		this.contact.Phones = this.removeEmptyPhones(this.contact.Phones);
		switch (this.editType) {
			case ContactEditType.New: {
				this.contactService.create(this.contact);
				break;
			}
			case ContactEditType.Edit: {
				this.contactService.update(this.contact);
			}
		}
		this.router.navigate(['/']);
	}

	public deleteContact() {
		const modalTitle = 'Delete';
		const modalText = 'Are you sure you want to delete this contact?';

		this.modalService.open(modalTitle, modalText).subscribe(response => {
			if (response === ModalResponse.Confirm) {
				this.contactService.delete(this.contact);
				this.router.navigate(['/']);
			}
		});
	}

	public addNumber() {
		this.contact.Phones.push({
			number: '',
			label: ''
		});
	}

	public removeNumber(i) {
		this.contact.Phones.splice(i, 1);
	}

	public cancel() {
		this.router.navigate(['/']);
	}

	private removeEmptyPhones(phones: IPhones[]): IPhones[] {
		return phones.filter(phone => phone.label !== '' && phone.number !== '');
	}
}
