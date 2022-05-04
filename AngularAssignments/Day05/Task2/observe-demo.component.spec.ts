import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserveDemoComponent } from './observe-demo.component';

describe('ObserveDemoComponent', () => {
  let component: ObserveDemoComponent;
  let fixture: ComponentFixture<ObserveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObserveDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
