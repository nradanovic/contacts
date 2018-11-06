import { Component, Input } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact/contact.service';
import { ModalService, ModalResponse } from '../../services/modal/modal.service';

@Component({
	selector: 'app-contact-card',
	templateUrl: './contact-card.component.html',
	styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {
	public imagePlaceholder = 'assets/img-upload.png';

	@Input()
	contact: Contact;

	public get favorite(): boolean {
		return this.contact.Favorite;
	}

	public set favorite(val: boolean) {
		this.contact.Favorite = val;
		this.contactService.update(this.contact);
	}

	constructor(private contactService: ContactService, private modalService: ModalService) {}

	public delete() {
		const modalTitle = 'Delete';
		const modalText = 'Are you sure you want to delete this contact?';

		this.modalService.open(modalTitle, modalText).subscribe(response => {
			if (response === ModalResponse.Confirm) {
				this.contactService.delete(this.contact);
			}
		});
	}
}
