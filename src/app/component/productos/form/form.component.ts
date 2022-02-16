import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router, private activeRoute: ActivatedRoute) { 
    this.getProductos().subscribe ((productos) =>{
      this.productos = productos;
    })
  }

  ngOnInit(): void {
    this.getProducto();
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

  getProducto() {
    this.activeRoute.params.subscribe(params => {
      let id = params ['id']
      if (id){
        for (let i=0; i<this.productos.length;i++){
          if (this.productos[i].id === id){
            this.producto = this.productos[i];
          }
        }
      }
    })
  }

  updateProducto(){
    for (let i=0; i<this.productos.length;i++){
      if (this.productos[i].id === this.producto.id){
        this.productos[i] = this.producto;
      }
    }
  }
  
}
