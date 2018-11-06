import { NgModule } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { ContactService } from './contact/contact.service';

@NgModule({
	imports: [],
	providers: [ModalService, ContactService],
	exports: []
})
export class ServicesModule {}
