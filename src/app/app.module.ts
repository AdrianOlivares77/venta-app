import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ProductosComponent } from './component/productos/productos.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './component/registro/registro.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarritoComponent } from './component/carrito/carrito.component';
import { OrdenCompraComponent } from './component/orden-compra/orden-compra.component';

import { FormComponent } from './component/productos/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    HeaderComponent,
    ProductFilterPipe,
    RegistroComponent,
    CarritoComponent,
    OrdenCompraComponent,
    FormComponent,
    OrdenCompraComponent,
    CarritoComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    NgbModule,
    AuthModule.forRoot(environment.auth0)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
