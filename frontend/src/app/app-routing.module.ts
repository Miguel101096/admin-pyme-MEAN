import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { TablaCrudComponent } from './tabla-crud/tabla-crud.component';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tablacrud',
    component: TablaCrudComponent
  },
  {
    path: 'create',
    component: CreateProductComponent
  },
  {
    path: 'contact',
    component: ContactComponent   
  },
  {
    path: ':id',
    component: DetailComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
