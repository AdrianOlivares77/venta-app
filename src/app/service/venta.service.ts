import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Tarjeta } from './tarjeta';
import { Envio } from './envio';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private ventaProductos: Producto[] = [];
  private datosPago: Tarjeta = new Tarjeta();
  private datosEnvio: Envio = new Envio();
  private montoFinal: number = 0;

  constructor() { }

  public setVentaProductos(productos: Producto[]): void {
    this.ventaProductos = productos;
  }

  public setDatosPago(data: Tarjeta): void {
    this.datosPago = data;
  }

  public setDatosEnvio(data: Envio): void {
    this.datosEnvio = data;
  }

  public setMontoFinal(monto: number): void {
    this.montoFinal = monto;
  }

  public getventaProductos(): Producto[] {
    return this.ventaProductos;
  }

  public getDatosPago(): Tarjeta {
    return this.datosPago;
  }

  public getDatosEnvio(): Envio {
    return this.datosEnvio;
  }

  public getMontoFinal(): number {
    return this.montoFinal;
  }

}
