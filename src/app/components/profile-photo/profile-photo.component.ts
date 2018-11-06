import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'app-profile-photo',
	templateUrl: './profile-photo.component.html',
	styleUrls: ['./profile-photo.component.scss']
})
export class ProfilePhotoComponent {
	private _editMode = false;
	private data: string;
	private height = 180;
	private width = 180;
	public imagePlaceholder = 'assets/img-upload.png';

	@Input()
	get editMode() {
		return this._editMode;
	}
	set editMode(value: any) {
		this._editMode = value !== null;
	}

	@Input()
	public get value() {
		return this.data;
	}

	public set value(val) {
		this.data = val;
		this.valueChange.emit(this.data);
	}

	@Output()
	public valueChange = new EventEmitter<string>();

	constructor() {}

	public removePhoto() {
		this.value = null;
	}

	public fileChange(event) {
		const file: File = event.target.files[0];

		const reader = new FileReader();
		const image = new Image();

		image.onload = e => {
			const elem = document.createElement('canvas');
			const ctx = elem.getContext('2d');
			elem.height = this.height;
			elem.width = this.width;

			/**
			 * Calculate scale from shorter image dimension
			 */
			const scaleFactor = image.height < image.width ? this.height / image.height : this.width / image.width;
			const upscale = dimension => dimension / scaleFactor;

			/**
			 * Resize and center image
			 */
			ctx.drawImage(
				image,
				(image.width - upscale(this.width)) / 2,
				(image.height - upscale(this.height)) / 2,
				upscale(this.width),
				upscale(this.height),
				0,
				0,
				this.width,
				this.height
			);

			this.value = ctx.canvas.toDataURL();
		};

		reader.onloadend = () => (image.src = reader.result as string);
		reader.onerror = error => console.log(error);
		reader.readAsDataURL(file);
	}
}
