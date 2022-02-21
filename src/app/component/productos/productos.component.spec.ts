import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { ProductosComponent } from './productos.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { ProductFilterPipe } from 'src/app/pipes/product-filter.pipe';
import { Producto } from 'src/app/service/producto';
import swal from 'sweetalert2';
import { ProductosService } from 'src/app/service/productos.service';


class MockProductosService  {

  PRODUCTOS = [
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
    }
  ];

  getProductos(): Producto[] {
    return this.PRODUCTOS;
  }

  deleteByIndex(index: number): void {
    this.PRODUCTOS.splice(index,1);
  }

  updateById(producto: Producto): Producto {
    let index = this.PRODUCTOS.findIndex(e => e.id == producto.id);
    this.PRODUCTOS[index] = producto;
    return this.PRODUCTOS[index];
  }
  
}

describe('ProductosComponent', () => {
  let component: ProductosComponent;
  let fixture: ComponentFixture<ProductosComponent>;
  let service: ProductosService;
  let producto : Producto = { id: '1', nombre: 'Pelota', precio: 5000, categoria: 'Deportes', caracteristicasPrincipales: 'Redonda', imagen: 'https://monterosport.com.ar/wp-content/uploads/2016/05/pelota-futbol-nassau-fick-off-500x500.jpg'}
  let resultado: Producto[] = [];



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosComponent , ProductFilterPipe],
      imports: [ HttpClientTestingModule, RouterTestingModule],
      providers: [ 
        {
          provide: ProductosService,
          useClass: MockProductosService
        } 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ProductosService);
  });

  it('Método Obtener Productos', () => {
    service.getProductos();
    expect(component.productos.length).toEqual(4);
  });

  it('Método Eliminar By Id', () => {
    service.deleteByIndex(0);
    expect(component.productos.length).toEqual(3);
  });

  it('Método Actualizar Producto', () => {
    let newProducto = new Producto();
    newProducto.id = '1';
    newProducto.nombre = 'Pelotiña';
    newProducto.precio = 10000;
    newProducto.categoria = 'Deportes';
    newProducto.caracteristicasPrincipales = 'Redonda';
    newProducto.imagen = 'https://monterosport.com.ar/wp-content/uploads/2016/05/pelota-futbol-nassau-fick-off-500x500.jpg'
    service.updateById(newProducto);
    expect(component.productos.find(e => e.nombre == 'Pelotiña')?.precio).toEqual(10000);
  });

});
