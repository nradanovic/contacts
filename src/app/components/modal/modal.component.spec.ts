import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
	let component: ModalComponent;
	let fixture: ComponentFixture<ModalComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ModalComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create ModalComponent', () => {
		expect(component).toBeTruthy();
	});

	it('should be disabled by default', () => {
		const modal = fixture.debugElement.nativeElement.querySelector('.modal');
		expect(modal).toBeFalsy();
	});

	it('should be opened if visible = true', () => {
		component.visible = true;
		fixture.detectChanges();
		const modal = fixture.debugElement.nativeElement.querySelector('.modal');
		expect(modal).toBeTruthy();
	});

	it('should set title', () => {
		component.visible = true;
		component.title = 'test title';
		fixture.detectChanges();
		const title = fixture.debugElement.nativeElement.querySelector('.title');
		expect(title.innerText).toBe('test title');
	});

	it('should set message', () => {
		component.visible = true;
		component.message = 'test message';
		fixture.detectChanges();
		const message = fixture.debugElement.nativeElement.querySelector('.message');
		expect(message.innerText).toBe('test message');
	});
});
