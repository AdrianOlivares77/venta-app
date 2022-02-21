import { Injectable } from '@angular/core';
import { PRODUCTOS } from 'src/app/service/productos.json';
import { servicesVersion } from 'typescript';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos = PRODUCTOS;

  constructor() { }

  getProductos() : Producto[]{
    return this.productos;
  }

  deleteByIndex(index: number): void{
    this.productos.splice(index,1);
  }

  updateById(producto: Producto): Producto {
    let index = this.productos.findIndex(e => e.id == producto.id);
    this.productos[index] = producto;
    return this.productos[index];
  }

}
