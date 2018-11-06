import { NgModule } from '@angular/core';
import { ContactsModule } from './contact/contact.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [ContactsModule, ReactiveFormsModule, FormsModule, RouterModule],
	declarations: [],
	exports: []
})
export class ModulesModule {}
