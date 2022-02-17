import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { __classPrivateFieldSet } from 'tslib';
import { Producto } from 'src/app/service/producto';
import { CarritoService } from 'src/app/service/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  titulo: string = 'Estos productos tiene agregados';
  listaProductos: Producto[] = [];
  montoTotal: number = 0;

  constructor(private router: Router, private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.listaProductos = this.carritoService.getCarrito();
    this.montoTotal = this.carritoService.getMontoTotal()
  }

  public vaciarCarrito(): void {
    this.carritoService.deleteAllCarrito();
    this.listaProductos = this.carritoService.getCarrito();
    this.montoTotal = this.carritoService.getMontoTotal();
    swal('Carrito vaciado.');
  }

  public deleteFromCarrito(i: number): void {
    this.carritoService.deleteByIndex(i);
    this.listaProductos = this.carritoService.getCarrito();
    this.montoTotal = this.carritoService.getMontoTotal();
    swal('Producto Eliminado Exitosamente');
  }

  public finalizarCompra(): void {
    if(this.carritoService.sizeCarrito() == 0){
      (swal as any).fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El carrito no tiene productos.'
      })
    }
    else{
      this.router.navigate(['/orden-compra']);
    }
  }

  public getMontoTotal(): number {
    return this.carritoService.getMontoTotal();
  }



}
