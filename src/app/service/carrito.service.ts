import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private listaCarrito: Producto [] = [];
  private montoTotal: number = 0;

  constructor() { }

  public addToCarrito(producto: Producto): void{
    this.listaCarrito.push(producto);
    this.montoTotal = this.montoTotal + producto.precio;
  }

  public getCarrito(): Producto[] {
    return this.listaCarrito;
  }

  public sizeCarrito(): number {
    return this.listaCarrito.length;
  }

  public deleteAllCarrito(): void {
    this.listaCarrito.splice(0,this.listaCarrito.length);
    this.montoTotal = 0;
  }

  public deleteByIndex(index: number): void {
    this.montoTotal = this.montoTotal - this.listaCarrito[index].precio;
    this.listaCarrito.splice(index,1);
  }

  public getMontoTotal(): number {
    return this.montoTotal;
  }

}
