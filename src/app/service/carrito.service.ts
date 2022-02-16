import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private listaCarrito: Producto [] = [];

  constructor() { }

  public addToCarrito(producto: Producto): void{
    this.listaCarrito.push(producto);
  }

  public getCarrito(): Producto[] {
    return this.listaCarrito;
  }

  public sizeCarrito(): number {
    return this.listaCarrito.length;
  }

  public deleteAllCarrito(): void {
    this.listaCarrito.splice(0,this.listaCarrito.length);
  }

  public deleteByIndex(index: number): void {
    this.listaCarrito.splice(index,1);
  }

}
