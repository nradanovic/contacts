import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactEditComponent } from './modules/contact/edit/contact-edit.component';
import { ContactViewComponent } from './modules/contact/view/contact-view.component';
import { ContactListComponent } from './modules/contact/list/contact-list.component';

const routes: Routes = [
	{ path: 'contact/:id/edit', component: ContactEditComponent },
	{ path: 'contact/new', component: ContactEditComponent },
	{ path: 'contact/:id', component: ContactViewComponent },
	{ path: '**', component: ContactListComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
