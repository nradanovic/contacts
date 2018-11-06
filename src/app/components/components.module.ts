import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModalComponent } from './modal/modal.component';
import { FavoriteIconComponent } from './favorite-icon/favorite-icon.component';
import { FilterComponent } from './filter/filter.component';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';
import { ContactCardComponent } from './contact-card/contact-card.component';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
	declarations: [ModalComponent, FavoriteIconComponent, FilterComponent, ProfilePhotoComponent, ContactCardComponent],
	exports: [ModalComponent, FavoriteIconComponent, FilterComponent, ProfilePhotoComponent, ContactCardComponent]
})
export class ComponentsModule {}
