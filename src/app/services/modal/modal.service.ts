import { Injectable } from '@angular/core';

import { ModalComponent } from '../../components/modal/modal.component';

export enum ModalResponse {
	Confirm,
	Cancel
}

@Injectable({
	providedIn: 'root'
})
export class ModalService {
	private modalRef: ModalComponent;

	constructor() {}

	public addModalReference(modal: ModalComponent) {
		this.modalRef = modal;
	}

	public open(title: string, message: string) {
		return this.modalRef.openModal(title, message);
	}
}
