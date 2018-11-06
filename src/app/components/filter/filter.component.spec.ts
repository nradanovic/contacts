import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent, IFilterStatus, Filters } from './filter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

describe('FilterComponent', () => {
	let component: FilterComponent;
	let fixture: ComponentFixture<FilterComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ReactiveFormsModule, FormsModule],
			declarations: [FilterComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FilterComponent);
		component = fixture.componentInstance;
		component.filter = new Subject();
		fixture.detectChanges();
	});

	it('should create Filter component', () => {
		expect(component).toBeTruthy();
	});

	it('should emit search type on click', (done: DoneFn) => {
		const tabs = fixture.debugElement.nativeElement.querySelectorAll('.favorites-filter-tab');

		component.filter.subscribe((val: IFilterStatus) => {
			expect(val.type).toBe(Filters.Favorites);
			done();
		});
		tabs[1].click();
		fixture.detectChanges();
	});

	it('should emit search value on text input', (done: DoneFn) => {
		component.filter.subscribe((val: IFilterStatus) => {
			expect(val.value).toBe('test');
			done();
		});
		component.searchControl.setValue('test');
		fixture.detectChanges();
	});
});
