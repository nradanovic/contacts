import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

export enum Filters {
	All,
	Favorites
}

export interface IFilterStatus {
	value?: string;
	type: Filters;
}

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
	public FilterType: Filters = Filters.All;
	public Filters = Filters;
	public searchControl: FormControl = new FormControl('');

	@Input()
	filter: Subject<IFilterStatus>;

	constructor() {}

	ngOnInit() {
		this.searchControl.valueChanges.pipe(distinctUntilChanged()).subscribe(query => {
			this.filter.next({
				type: this.FilterType,
				value: query
			});
		});
	}

	public setFilter(FilterType: Filters) {
		this.FilterType = FilterType;
		this.filter.next({
			type: this.FilterType,
			value: this.searchControl.value
		});
	}
}
