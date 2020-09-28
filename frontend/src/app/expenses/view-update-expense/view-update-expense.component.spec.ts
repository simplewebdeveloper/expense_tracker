import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpdateExpenseComponent } from './view-update-expense.component';

describe('ViewUpdateExpenseComponent', () => {
  let component: ViewUpdateExpenseComponent;
  let fixture: ComponentFixture<ViewUpdateExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUpdateExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUpdateExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
