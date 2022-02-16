import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from 'src/app/service/producto';
import { PRODUCTOS } from 'src/app/service/productos.json';
import {PageEvent} from '@angular/material/paginator';
import { CarritoService } from 'src/app/service/carrito.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];
  palabraFiltro: string = '';
  pageSize = 5;
  desde: number = 0;
  hasta: number = 5;

  constructor(private carritoService: CarritoService) { }

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

  public addToCarrito(producto: Producto): void {
    this.carritoService.addToCarrito(producto);
    (swal as any).fire({
      position: 'top-end',
      title: 'Producto Agregado',
      showConfirmButton: false,
      timer: 300
    })
  }

}
