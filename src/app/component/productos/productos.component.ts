import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from 'src/app/service/producto';
import { PRODUCTOS } from 'src/app/service/productos.json';
import {PageEvent} from '@angular/material/paginator';
import { CarritoService } from 'src/app/service/carrito.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Producto[] = [];
  palabraFiltro: string = '';
  pageSize = 5;
  desde: number = 0;
  hasta: number = 5;

  constructor(private productosService: ProductosService,private carritoService: CarritoService,private router: Router) { }

  ngOnInit(): void {
    this.productos = this.productosService.getProductos();
  }

  cambiarpagina(e:PageEvent){
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
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

  eliminarProducto(producto: Producto) {
    swal.fire({
      title: 'Estas seguro?',
      text: `¿Seguro que deseas eliminar al producto ${producto.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
    }).
    then((result) => {
      if (result.value) {
        for (let i=0; i<this.productos.length;i++){
          if (this.productos[i].id == producto.id){
            this.productosService.deleteByIndex(i);
          }
            swal.fire('Producto eliminado', `El producto ${producto.nombre} has sido eliminado con éxito!`, 'success')
          }
        
      } 
    })
  }
}

