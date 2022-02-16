import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Producto } from 'src/app/service/producto';
import { PRODUCTOS } from 'src/app/service/productos.json';
import swal from 'sweetalert2';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  
  producto: Producto = new Producto();
  productos:any[] = []

  form: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    precio: new FormControl(''),
    categoria: new FormControl(''),
    caracteristicasPrincipales: new FormControl('')
  });

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
    swal('Producto nuevo',`El Producto ${this.producto.nombre} ha sido creado satisfactoriamente!!!`,'success');
  }

  

  generateId() {
      return Math.random().toString(36).substr(2,9);
    }

  }
