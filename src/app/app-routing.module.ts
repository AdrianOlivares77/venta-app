import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { FormComponent } from './component/productos/form/form.component';
import { ProductosComponent } from './component/productos/productos.component';
import { RegistroComponent } from './component/registro/registro.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'productos/form',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
