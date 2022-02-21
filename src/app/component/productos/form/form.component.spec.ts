import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { FormComponent } from './form.component';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Producto } from 'src/app/service/producto';

class MockProductoService  {
   
  getProductos(): Observable<any> {
    const PRODUCTOS = [
      {
        id: '1', nombre: 'Pelota', precio: 5000, categoria: 'Deportes', caracteristicasPrincipales: 'Redonda', imagen: 'https://monterosport.com.ar/wp-content/uploads/2016/05/pelota-futbol-nassau-fick-off-500x500.jpg'
      },
      {
        id: '2', nombre: 'Escritorio', precio: 100000, categoria: 'Muebles', caracteristicasPrincipales: 'Grande, cafe, con cajones', imagen: 'https://importclub.imgix.net/escritorio-oficina-simple_1269.jpg?w=500&h=500&lossless=true&auto=format&fill-color=FFFFFF&fit=fill&fill=solid'
      },
      {
        id: '3', nombre: 'Notebook', precio: 500000, categoria: 'Tecnologia', caracteristicasPrincipales: '500gb de disco duro, procesador Intel i9', imagen: 'https://www.tiendaentelvisa.cl/image/cache/catalog/products/68024g1-500x500.jpg'
      },
      {
        id: '4', nombre: 'Cama', precio: 350000, categoria: 'Hogar', caracteristicasPrincipales: 'Box spring, con colchon incluido', imagen: 'https://multicentro.vteximg.com.br/arquivos/ids/175934-500-500/040202173-1.jpg?v=637719931522630000'
      },
      {
        id: '5', nombre: 'Cuaderno', precio: 1000, categoria: 'Educación', caracteristicasPrincipales: 'Rojo de 100 hojas', imagen: 'https://s3.amazonaws.com/bsalemarket/55956/product/alb05040default.jpg'
      },
      {
        id: '6', nombre: 'Silla', precio: 10000, categoria: 'Hogar', caracteristicasPrincipales: 'De 3 patas', imagen: 'https://www.chairstore.cl/wp-content/uploads/2020/06/Iso-China-500x500.jpg'
      },
      {
        id: '7', nombre: 'Mesa', precio: 100000, categoria: 'Hogar', caracteristicasPrincipales: 'De 3 patas', imagen: 'https://www.tiendaclubdelectores.cl/images/img/4/7/152388_1_large.jpg?1636656624'
      },
      {
        id: '8', nombre: 'Polera Deportiva', precio: 10000, categoria: 'Deportes', caracteristicasPrincipales: 'Polera marca Adidas', imagen: 'https://o2sportsoutlet.cl/8345-medium_default/44-adidas-polera-aeroready-----.jpg'
      },
    ];
    return of(PRODUCTOS);
  }
  
}

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let service: FormComponent;
  let producto : Producto = { id: '10', nombre: 'Pantalones', precio: 15000, categoria: 'Ropa', caracteristicasPrincipales: 'Largos', imagen: 'https://steelprosafety.vteximg.com.br/arquivos/ids/161541-500-500/image-4ec51bd140b8436dbfb1dd7decc39b43.jpg?v=637310595939300000'}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: FormComponent,
          useClass: MockProductoService
        },
        FormBuilder
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(FormComponent);
  });

  it('Método Crear Producto', () => {
    service.getProductos().subscribe(
      data => {
        component.createProducto();
        expect(component.productos.length).toEqual(9);
      }
    ) 
  });

  it('Método Editar Producto', () => {
    service.getProductos().subscribe(
      data => {
        component.updateProducto();
        expect(component.producto.nombre).toBe('');
      }
    ) 
  });
});
