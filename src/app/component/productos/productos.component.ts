import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from 'src/app/service/producto';
import { PRODUCTOS } from 'src/app/service/productos.json';
import swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = []
  palabraFiltro: string = '';

  constructor() { }

  ngOnInit(): void {
    this.getProductos().subscribe ((productos) =>{
      this.productos = productos;
    })
  }

  getProductos() : Observable<Producto[]>{
    return of(PRODUCTOS);
  }


}