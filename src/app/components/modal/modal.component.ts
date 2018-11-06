import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalResponse, ModalService } from '../../services/modal/modal.service';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
	public title: string;
	public message: string;
	public visible: boolean;
	public modalResponse = ModalResponse;
	private response: Subject<ModalResponse>;

	constructor(private modalService: ModalService) {}

	ngOnInit() {
		this.modalService.addModalReference(this);
	}

	public openModal(title: string, message: string) {
		this.title = title;
		this.message = message;
		this.visible = true;
		this.response = new Subject();
		return this.response.asObservable();
	}

	public closeModal(response: ModalResponse) {
		this.visible = false;
		this.response.next(response);
		this.response.unsubscribe();
	}
}
