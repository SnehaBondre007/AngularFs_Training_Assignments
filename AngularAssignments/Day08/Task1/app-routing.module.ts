import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [

  {path:"Login", component:LoginComponent},
  {path:"Contact", component:ContactComponent},
  {path:"", component:HomeComponent},
  {path:"About", component:AboutUsComponent},
  {path:"Category", component:CategoryComponent},
  {path :"Products/:categories", component: ProductsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }