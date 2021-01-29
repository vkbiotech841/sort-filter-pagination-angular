import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortFilterPaginationComponent } from './sort-filter-pagination.component';

describe('SortFilterPaginationComponent', () => {
  let component: SortFilterPaginationComponent;
  let fixture: ComponentFixture<SortFilterPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortFilterPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortFilterPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
