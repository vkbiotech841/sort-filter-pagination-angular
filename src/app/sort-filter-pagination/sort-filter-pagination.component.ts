import { MySchool } from './school-interface';
import { DecimalPipe } from "@angular/common";
import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { Observable } from "rxjs";

import { NgbdSortableHeader, SortEvent } from "./sortable.directive";
import { SchoolService } from './school.service';

@Component({
  selector: 'app-sort-filter-pagination',
  templateUrl: './sort-filter-pagination.component.html',
  styleUrls: ['./sort-filter-pagination.component.scss'],
  providers: [SchoolService, DecimalPipe]
})
export class SortFilterPaginationComponent implements OnInit {

  schoolProfiles$: Observable<MySchool[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  constructor(
    public service: SchoolService
  ) {
    this.schoolProfiles$ = service.schoolProfiles$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  onSort({ column, direction }: SortEvent) {
    console.log("sorting started");
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
