import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/service/carrito.service';
import { Envio } from 'src/app/service/envio';
import { Producto } from 'src/app/service/producto';
import { Tarjeta } from 'src/app/service/tarjeta';
import { VentaService } from 'src/app/service/venta.service';

@Component({
  selector: 'app-resumen-compra',
  templateUrl: './resumen-compra.component.html',
  styleUrls: ['./resumen-compra.component.css']
})
export class ResumenCompraComponent implements OnInit {

  ventaProductos: Producto[] = [];
  datosPago: Tarjeta = new Tarjeta();
  datosEnvio: Envio = new Envio();
  montoFinal: number = 0;
  pageSize = 5;
  desde: number = 0;
  hasta: number = 5;

  constructor(private router: Router, private ventaService: VentaService,
    private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.ventaProductos = this.ventaService.getventaProductos();
    this.datosPago = this.ventaService.getDatosPago();
    this.datosEnvio = this.ventaService.getDatosEnvio();
    this.montoFinal = this.ventaService.getMontoFinal();
  }

  cambiarpagina(e:PageEvent){
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }

  volverInicio(): void {
    this.carritoService.deleteAllCarrito();
    this.router.navigate(['/productos']);
  }

}
