import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/service/carrito.service';
import { Producto } from 'src/app/service/producto';
import {PageEvent} from '@angular/material/paginator';
import { Router } from '@angular/router';
import { VentaService } from 'src/app/service/venta.service';

@Component({
  selector: 'app-orden-compra',
  templateUrl: './orden-compra.component.html',
  styleUrls: ['./orden-compra.component.css']
})
export class OrdenCompraComponent implements OnInit {

  listaCompra: Producto[] = [];
  pageSize = 5;
  desde: number = 0;
  hasta: number = 5;

  constructor(private carritoService: CarritoService,private router: Router,
    private ventaService: VentaService) { }

  ngOnInit(): void {
    this.listaCompra = this.carritoService.getCarrito();
  }

  cambiarpagina(e:PageEvent){
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
    console.log(this.desde);
    console.log(this.hasta);  
  }

  public volver(): void {
    this.router.navigate(['/productos']);
  }
  
  public comprar(): void {
    this.ventaService.setVentaProductos(this.carritoService.getCarrito());
    this.ventaService.setMontoFinal(this.carritoService.getMontoTotal());
    this.router.navigate(['/envio']);
  }

  public getMontoTotal(): number {
    return this.carritoService.getMontoTotal();
  }

}
