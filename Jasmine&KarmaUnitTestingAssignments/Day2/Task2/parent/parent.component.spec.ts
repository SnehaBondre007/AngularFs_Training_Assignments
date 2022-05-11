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
    const childComponent  = fixture.debugElement.query(By.css('app-child-product'));
    expect(childComponent).toBeTruthy();
  });

  it('should render all child component elements ', () => {
    const childComponents  = fixture.debugElement.queryAll(By.css('app-child-product'));
    expect(childComponents.length).toBe(component.prodsArray.length);
  });

  it('testing child component properties ', () => {
    const testObj:any = {pid : 10, pname : "Asus", price : 1000, category :  "Phones", qty : 1} ;
    const childComponent  = fixture.debugElement.query(By.css('app-child-product'));
    expect(childComponent.properties["productObj"]).toEqual( component.prodsArray[0] );
  });

  it('testing child component events on onProductRemoved', () => {
    const childComponent  = fixture.debugElement.query(By.css('app-child-product'));
    const pid = childComponent.properties["productObj"].pid;
    childComponent.triggerEventHandler('onProductRemoved', pid)
    let index = component.prodsArray.findIndex( (item:any) => item.pid == pid);
    expect(index).toBe(-1);
  });
});
