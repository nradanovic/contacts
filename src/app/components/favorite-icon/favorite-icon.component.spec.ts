import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteIconComponent } from './favorite-icon.component';

describe('FavoriteIconComponent', () => {
	let component: FavoriteIconComponent;
	let fixture: ComponentFixture<FavoriteIconComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FavoriteIconComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FavoriteIconComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create FavoriteIconComponent', () => {
		expect(component).toBeTruthy();
	});

	it('should toggle value on click', () => {
		component.value = true;
		fixture.detectChanges();
		expect(component.value).toBeTruthy();
		fixture.debugElement.nativeElement.querySelector('img').click();
		fixture.detectChanges();
		expect(component.value).toBeFalsy();
	});
});
