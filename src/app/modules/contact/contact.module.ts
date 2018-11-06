import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ContactListComponent } from './list/contact-list.component';
import { ContactViewComponent } from './view/contact-view.component';
import { ContactEditComponent } from './edit/contact-edit.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
	imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, ComponentsModule],
	declarations: [ContactListComponent, ContactViewComponent, ContactEditComponent],
	providers: [],
	exports: []
})
export class ContactsModule {}
