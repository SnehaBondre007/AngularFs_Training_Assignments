import { InterceptorService } from './interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmpComponent } from './emp/emp.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { CoursesComponent } from './courses/courses.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { FriendsComponent } from './friends/friends.component';
import { ProductsComponent } from './products/products.component';

import { ProductsListComponent } from './products-list/products-list.component';
import { FilterOptionsComponent } from './filter-options/filter-options.component';
import { SortOptionsComponent } from './sort-options/sort-options.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  FormsModule, ReactiveFormsModule }	from  '@angular/forms';


import { EmployeeGradesComponent } from './employee-grades/employee-grades.component';
import { GradePipe } from './grade.pipe';
import { UsersComponent } from './users/users.component';
import { FilterPipe } from './filter.pipe';
import { EmpDataComponent } from './emp-data/emp-data.component';
import { DataService } from './data.service';
import { EmployeeComponent } from './employee/employee.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FancyCardComponent } from './fancy-card/fancy-card.component';
import { ObserveDemoComponent } from './observe-demo/observe-demo.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ShadowDirective } from './shadow.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpComponent,
    DeptListComponent,
    CoursesComponent,
    UserinfoComponent,
    FriendsComponent,
    ProductsComponent,
    ProductsListComponent,
    FilterOptionsComponent,
    SortOptionsComponent,
    EmpListComponent,
    EmployeeGradesComponent,
    GradePipe,
    UsersComponent,
    FilterPipe,
    EmpDataComponent,
    EmployeeComponent,
    ProductDetailsComponent,
    FancyCardComponent,
    ObserveDemoComponent,
    RxjsOperatorsComponent,
    VehicleComponent,
    ShadowDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
