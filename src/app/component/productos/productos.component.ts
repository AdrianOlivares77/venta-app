import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from 'src/app/service/producto';
import { PRODUCTOS } from 'src/app/service/productos.json';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:any[] = []
  palabraFiltro: string = '';
  pageSize = 5;
  desde: number = 0;
  hasta: number = 5;



  constructor() { }

  ngOnInit(): void {
    this.getProductos().subscribe ((productos) =>{
      this.productos = productos;
    })
  }

  getProductos() : Observable<Producto[]>{
    return of(PRODUCTOS);
  }

  cambiarpagina(e:PageEvent){
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
    console.log(this.desde);
    console.log(this.hasta);  
  }

  eliminarProducto(producto: Producto) {
    for (let i=0; i<this.productos.length;i++){
      if (this.productos[i] == producto){
        this.productos.splice(i,1);
      }
    }
  }

}
