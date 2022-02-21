import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { ProductosComponent } from './productos.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { ProductFilterPipe } from 'src/app/pipes/product-filter.pipe';
import { Producto } from 'src/app/service/producto';
import swal from 'sweetalert2';


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

describe('ProductosComponent', () => {
  let component: ProductosComponent;
  let fixture: ComponentFixture<ProductosComponent>;
  let service: ProductosComponent;
  let producto : Producto = { id: '1', nombre: 'Pelota', precio: 5000, categoria: 'Deportes', caracteristicasPrincipales: 'Redonda', imagen: 'https://monterosport.com.ar/wp-content/uploads/2016/05/pelota-futbol-nassau-fick-off-500x500.jpg'}
  let resultado: Producto[] = [];



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosComponent , ProductFilterPipe],
      imports: [ HttpClientTestingModule, RouterTestingModule],
      providers: [ 
        {
          provide: ProductosComponent,
          useClass: MockProductoService
        } 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ProductosComponent);
  });

  it('Método Obtener Productos', () => {
    service.getProductos().subscribe(
      data => {
        expect(component.productos.length).toEqual(9);
      }
    )  });

     
    it('Método Eliminar Productos',() => {
      service.getProductos().subscribe(
        data => {
          component.eliminarProducto(producto);
          expect(component.productos.length).toEqual(8);
        }
      ) 
    });
});
