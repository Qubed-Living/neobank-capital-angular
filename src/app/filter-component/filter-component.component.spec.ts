import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponentComponent } from './filter-component.component';

describe('FilterComponentComponent', () => {
  let component: FilterComponentComponent;
  let fixture: ComponentFixture<FilterComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterComponentComponent]
    });
    fixture = TestBed.createComponent(FilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
