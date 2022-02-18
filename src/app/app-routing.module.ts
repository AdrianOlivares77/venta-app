import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './component/carrito/carrito.component';
import { HomeComponent } from './component/home/home.component';
import { OrdenCompraComponent } from './component/orden-compra/orden-compra.component';
import { FormComponent } from './component/productos/form/form.component';
import { ProductosComponent } from './component/productos/productos.component';
import { RegistroComponent } from './component/registro/registro.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { EnvioComponent } from './component/envio/envio.component';
import { PagoComponent } from './component/pago/pago.component';
import { ResumenCompraComponent } from './component/resumen-compra/resumen-compra.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'resumen-compra',
    component: ResumenCompraComponent
  },
  {
    path: 'productos',
    component: ProductosComponent, canActivate: [AuthGuard]
  },
  {
    path: 'registro',
    component: RegistroComponent, canActivate: [AuthGuard]
  },
  {
    path: 'carrito',
    component: CarritoComponent, canActivate: [AuthGuard]
  },
  {
    path: 'orden-compra',
    component: OrdenCompraComponent, canActivate: [AuthGuard]
  },
  {
    path:'envio',
    component: EnvioComponent, canActivate: [AuthGuard]
  },
  {
    path:'pago',
    component: PagoComponent, canActivate: [AuthGuard]
  },
  {
    path: 'productos/form',
    component: FormComponent, canActivate: [AuthGuard]
  },
  {
    path: 'productos/form/:id',
    component: FormComponent, canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signIn',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'signIn'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

