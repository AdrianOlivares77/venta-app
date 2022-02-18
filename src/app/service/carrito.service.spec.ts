import { TestBed } from '@angular/core/testing';

import { CarritoService } from './carrito.service';
import { Producto } from './producto';

describe('CarritoService', () => {
  let service: CarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoService);
  });

  it('Creación del Servicio', () => {
    expect(service).toBeTruthy();
  });

  it('Agregar productos',()=>{
    service.addToCarrito(new Producto());
    expect(service.sizeCarrito()).toEqual(1);
  });

  it('Obtener productos',()=>{
    service.addToCarrito(new Producto());
    service.addToCarrito(new Producto());
    service.addToCarrito(new Producto());
    expect(service.getCarrito().length).toEqual(3);
  });

  it('Borrar Carrito',()=>{
    service.addToCarrito(new Producto());
    service.addToCarrito(new Producto());
    service.deleteAllCarrito()
    expect(service.sizeCarrito()).toEqual(0);
  });

  it('Obtener Monto Total',()=>{
    expect(service.getMontoTotal()).toEqual(0);
  });

  it('Borrar por Index',()=>{
    let producto1 = new Producto();
    let producto2 = new Producto();
    producto1.id = '9999';
    producto1.precio = 100;
    producto2.id = '123';
    producto2.precio = 1000;
    service.addToCarrito(producto1);
    service.addToCarrito(producto2);
    service.deleteByIndex(1);
    expect(service.getCarrito()[0].precio).toEqual(100);
  });

});
