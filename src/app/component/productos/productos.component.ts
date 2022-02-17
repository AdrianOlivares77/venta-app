import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from 'src/app/service/producto';
import { PRODUCTOS } from 'src/app/service/productos.json';
import {PageEvent} from '@angular/material/paginator';
import { CarritoService } from 'src/app/service/carrito.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

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

  constructor(private carritoService: CarritoService,private router: Router) { }

  ngOnInit(): void {
    this.getProductos().subscribe ((productos) =>{
      this.productos = productos;
    })
  }

  getProductos() : Observable<Producto[]>{
    return of(PRODUCTOS);
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
    swal({
      title: 'Estas seguro?',
      text: `¿Seguro que deseas eliminar al producto ${producto.nombre}`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success ms-2',
      cancelButtonClass: 'btn btn-danger me-2',
      buttonsStyling: false,
      reverseButtons: true
    }).
    then((result) => {
      if (result.value) {
        for (let i=0; i<this.productos.length;i++){
          if (this.productos[i] == producto){
            this.productos.splice(i,1);
          }
            swal('Producto eliminado', `El producto ${producto.nombre} has sido eliminado con éxito!`, 'success')
          }
        
      } 
    })
  }
}

