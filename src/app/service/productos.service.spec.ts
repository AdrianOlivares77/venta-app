import { TestBed } from '@angular/core/testing';
import { Producto } from './producto';

import { ProductosService } from './productos.service';

describe('ProductosService', () => {
  let service: ProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosService);
  });

  it('Creación de Instancia', () => {
    expect(service).toBeTruthy();
  });

  it('Método Obtener Productos', () => {
    service.getProductos();
    expect(service.getProductos().length).toEqual(8);
  });

  it('Método Eliminar By Id', () => {
    service.deleteByIndex(0);
    expect(service.getProductos().length).toEqual(7);
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
    expect(service.getProductos().find(e => e.nombre == 'Pelotiña')?.precio).toEqual(10000);
  });


});
