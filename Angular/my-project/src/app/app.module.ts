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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpComponent,
    DeptListComponent,
    CoursesComponent,
    UserinfoComponent,
    FriendsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
