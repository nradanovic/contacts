import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-favorite-icon',
	templateUrl: './favorite-icon.component.html',
	styleUrls: ['./favorite-icon.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteIconComponent {
	private isFavorite: boolean;
	private favoriteIconPath = 'assets/favorite.png';
	private notFavoriteIconPath = 'assets/unfavorite.png';

	@Output()
	public valueChange = new EventEmitter<boolean>();

	@Input()
	public get value() {
		return this.isFavorite;
	}

	public set value(val) {
		this.isFavorite = val;
		this.valueChange.emit(this.isFavorite);
	}

	constructor() {}

	public toggleFavorite() {
		this.value = !this.value;
	}

	public getFavoriteIcon() {
		if (this.isFavorite === true) {
			return this.favoriteIconPath;
		} else {
			return this.notFavoriteIconPath;
		}
	}
}
