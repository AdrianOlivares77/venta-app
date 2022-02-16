import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './component/carrito/carrito.component';
import { HomeComponent } from './component/home/home.component';
import { OrdenCompraComponent } from './component/orden-compra/orden-compra.component';
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
    path: 'carrito',
    component: CarritoComponent
  },
  {
    path: 'orden-compra',
    component: OrdenCompraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
