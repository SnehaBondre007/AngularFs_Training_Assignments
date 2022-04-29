import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeGradesComponent } from './employee-grades.component';

describe('EmployeeGradesComponent', () => {
  let component: EmployeeGradesComponent;
  let fixture: ComponentFixture<EmployeeGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeGradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
