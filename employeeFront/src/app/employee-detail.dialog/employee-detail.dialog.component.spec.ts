import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetail.DialogComponent } from './employee-detail.dialog.component';

describe('EmployeeDetail.DialogComponent', () => {
  let component: EmployeeDetail.DialogComponent;
  let fixture: ComponentFixture<EmployeeDetail.DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetail.DialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetail.DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
