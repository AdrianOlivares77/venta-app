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
    swal.fire({
      title: 'Esta Seguro?',
      text: "No podrá deshacer los cambios!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar!'
    }).then((result) => {
      if (result.isConfirmed) {
        swal.fire(
          'Compra cancelada!',
          'Su compra ha sido cancelada.',
          'success'
        )
        this.router.navigate(['/productos']);
      }
    })
  }



}
