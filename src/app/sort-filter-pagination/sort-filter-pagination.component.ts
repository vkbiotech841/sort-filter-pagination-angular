import { DecimalPipe } from "@angular/common";
import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { Observable } from "rxjs";

import { Country } from "./country";
import { CountryService } from "./country.service";
import { NgbdSortableHeader, SortEvent } from "./sortable.directive";

@Component({
  selector: 'app-sort-filter-pagination',
  templateUrl: './sort-filter-pagination.component.html',
  styleUrls: ['./sort-filter-pagination.component.scss'],
  providers: [CountryService, DecimalPipe]
})
export class SortFilterPaginationComponent implements OnInit {

  countries$: Observable<Country[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: CountryService) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = "";
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }



}
