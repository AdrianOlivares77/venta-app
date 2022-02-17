import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarjeta } from 'src/app/service/tarjeta';
import { VentaService } from 'src/app/service/venta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  dataPago: Tarjeta = new Tarjeta();

  constructor(private router: Router,private ventaService: VentaService) { }

  ngOnInit(): void {
  }

  public cancelar(): void {
    (swal as any)({
      title: 'Está Seguro?',
      text: "No podrá deshacer los cambios!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar!'
    }).then((result: { isConfirmed: boolean; }) => {
      if (result.isConfirmed) {
        (swal as any).fire('Compra Cancelada')
        this.router.navigate(['/productos'])
      }
    })
  }



}
