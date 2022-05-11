import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { By } from '@angular/platform-browser';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render child component elements', () => {
    const childComponent  = fixture.debugElement.query(By.css('app-child'));
    expect(childComponent).toBeTruthy();
  });

  it('should render all child component elements ', () => {
    const childComponents  = fixture.debugElement.queryAll(By.css('app-child'));
    expect(childComponents.length).toBe(component.empsArray.length);
  });

  it('testing child component properties ', () => {
    const testObj:any = {empno : 6573, ename : "Scott",  sal:44000} ;
    const childComponent  = fixture.debugElement.query(By.css('app-child'));
    expect(childComponent.properties["empObj"]).toEqual( component.empsArray[0] );
  });

  it('testing child component events on onEmpRemoved', () => {
    const childComponent  = fixture.debugElement.query(By.css('app-child'));
    const empno = childComponent.properties["empObj"].empno;
    childComponent.triggerEventHandler('onEmpRemoved', empno)
    let index = component.empsArray.findIndex( (item:any) => item.empno == empno);
    expect(index).toBe(-1);
  });
});
