import { TestBed } from '@angular/core/testing';
import { Envio } from './envio';
import { Producto } from './producto';
import { Tarjeta } from './tarjeta';

import { VentaService } from './venta.service';

describe('VentaService', () => {
  let service: VentaService;
  let productos: Producto[] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentaService);
  });

  beforeEach(() => {
    productos = [
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
      }
    ]
  });

  it('Creación Del Servicio', () => {
    expect(service).toBeTruthy();
  });

  it('Agregar Lista de productos', () =>{
    service.setVentaProductos(productos);
    expect(service.getventaProductos().length).toEqual(4);
  });

  it('Agregar Datos de Pago', () =>{
    let datos = new Tarjeta();
    datos.nombreCLiente = 'Elba Lazo';
    service.setDatosPago(datos);
    expect(service.getDatosPago().nombreCLiente).toEqual('Elba Lazo');
  });

  it('Agregar Datos de Envío', () =>{
    let datos = new Envio();
    datos.codigoPostal = 789456;
    service.setDatosEnvio(datos);
    expect(service.getDatosEnvio().codigoPostal).toEqual(789456);
  });

  it('Agregar Monto Final', () =>{
    service.setMontoFinal(75421258);
    expect(service.getMontoFinal()).toEqual(75421258);
  });

  it('Agregar Monto Final', () =>{
    service.setMontoFinal(75421258);
    expect(service.getMontoFinal()).toEqual(75421258);
    expect(service.getMontoFinal()).toBeGreaterThan(0);
  });

  it('Obtener Atributos (getters)', () => {
    service.setVentaProductos(productos);
    let datos = new Envio();
    datos.codigoPostal = 98875;
    service.setDatosEnvio(datos);
    let datos2 = new Tarjeta();
    datos2.nombreCLiente = 'Elvis Tek';
    service.setDatosPago(datos2);
    service.setMontoFinal(654987);
    //Pruebas
    expect(service.getventaProductos().length).toEqual(4);
    expect(service.getDatosPago().nombreCLiente).toEqual('Elvis Tek');
    expect(service.getDatosEnvio().codigoPostal).toEqual(98875);
    expect(service.getMontoFinal()).toEqual(654987);
  });

});
