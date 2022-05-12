import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListComponent } from './products-list.component';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate default values of quantity --- should be 1', () => {
    const qty:any  = component.quantity;
    expect(qty).toBe(1);
  });

  it('should calculate default result message -- should be empty', () => {
    const message:string  = component.totalPrice;
    expect(message).toBe("");
  });

  it('should calculate result message by calling "getTotalAmount()"  method', () => {

    component.quantity = 3;
    component.price = 100;
    component.getTotalPrice();
    const message: string = component.totalPrice;
    expect(message).toBe("Total Price : 300");

  });

   it('should calculate result message by calling "getTotalAmount()"  method -- generate NaN for wrong values (other than numbers)', () => {

    component.quantity = "sd";
    component.price = 200;
    component.getTotalPrice();
    const message: string = component.totalPrice;
    
     expect(message).toBe("Total Price : NaN");
   });

  it('should set the price textbox value to component property for price', () => {

    let prodsArray = fixture.nativeElement.querySelectorAll('input');
    prodsArray[2].value = 100;

    prodsArray[2].dispatchEvent(new Event('input'));
    
    expect(component.price).toBe('100');
  });

   it('should set the value to price textbox', () => {

    let prodsArray = fixture.nativeElement.querySelectorAll('input');
    prodsArray[2].value = 100 ;

    prodsArray[2].dispatchEvent(new Event('input'));

    expect(prodsArray[2].value).toBe('100');
    
  });

 it('should generate button click event after entering price and quantity', () => {

  const prodsArray =  fixture.nativeElement.querySelectorAll('input');

  prodsArray[0].value = 'Iphone';
  prodsArray[0].dispatchEvent(new Event('input'));

  prodsArray[1].value = 2 ;
  prodsArray[1].dispatchEvent(new Event('input'));

  prodsArray[2].value = 20000 ;
  prodsArray[2].dispatchEvent(new Event('input'));

  let inputObj = fixture.nativeElement.querySelector('button');
  inputObj.dispatchEvent(new Event('click'));

  component.getTotalPrice();

  fixture.detectChanges();

  let parObj = fixture.nativeElement.querySelector('p');
  expect(parObj.textContent).toBe("Total Price : 40000");
 });
});
