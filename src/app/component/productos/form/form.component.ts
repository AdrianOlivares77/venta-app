import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Producto } from 'src/app/service/producto';
import { PRODUCTOS } from 'src/app/service/productos.json';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  producto: Producto = new Producto();
  productos:any[] = []

  constructor(private router: Router) { 
    this.getProductos().subscribe ((productos) =>{
      this.productos = productos;
    })
  }

  ngOnInit(): void {
  }

  getProductos() : Observable<Producto[]>{
    return of(PRODUCTOS);
  }

  createProducto() {
    this.producto.id = this.generateId();
    this.productos.push(this.producto);
    this.router.navigate(['/productos'])
  }

  generateId() {
      return Math.random().toString(36).substr(2,9);
    }
  }
