import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePhotoComponent } from './profile-photo.component';

const imageSourceMock =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mNk+M9Qz0AEYBxVSF+FAAhKDveksOjmAAAAAElFTkSuQmCC';
const imgBlob = new Blob([imageSourceMock], {
	type: 'text/plain'
});
const imgFile = new File([imgBlob], 'img');
const dummyEvent = {
	target: {
		files: [imgFile]
	}
};

describe('ProfilePhotoComponent', () => {
	let component: ProfilePhotoComponent;
	let fixture: ComponentFixture<ProfilePhotoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ProfilePhotoComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProfilePhotoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create ProfilePhotoComponent', () => {
		expect(component).toBeTruthy();
	});

	it('should render placeholder if empty', () => {
		const img = fixture.debugElement.nativeElement.querySelector('img');
		expect(img.src).toContain('assets/img-upload.png');
	});

	it('should display image', () => {
		component.value = imageSourceMock;
		fixture.detectChanges();

		const img = fixture.debugElement.nativeElement.querySelector('img');
		expect(img.src).toBe(imageSourceMock);
	});

	it('should resize image', () => {
		component.fileChange(dummyEvent);
		fixture.detectChanges();

		const img = fixture.debugElement.nativeElement.querySelector('img');
		expect(img.width).toBe(180);
		expect(img.height).toBe(180);
	});
});
