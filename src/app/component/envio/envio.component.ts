import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Envio } from 'src/app/service/envio';
import { VentaService } from 'src/app/service/venta.service';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {

  dataEnvio: Envio = new Envio();

  constructor(private router: Router,private ventaService: VentaService) { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    pais: new FormControl(''),
    calle: new FormControl(''),
    ciudad: new FormControl(''),
    region: new FormControl(''),
    codigoPostal: new FormControl('')
  });

  public atras(): void {
    this.router.navigate(['/orden-compra']);
  }

  public pagar(): void {
    this.dataEnvio.id = this.ventaService.getventaProductos().length;
    this.ventaService.setDatosEnvio(this.dataEnvio);
    this.router.navigate(['/pago']);
  }

}
