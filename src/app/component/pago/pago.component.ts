import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/service/carrito.service';
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


  form: FormGroup = new FormGroup({
    tipo: new FormControl(''),
    nombreCLiente: new FormControl(''),
    numeroTarjeta: new FormControl(''),
    codigoSeguridad: new FormControl(''),
    mesExp: new FormControl(''),
    annoExp: new FormControl(''),
  });

  submitted: boolean = false;


  constructor(private router: Router, private formBuilder: FormBuilder, private ventaService: VentaService,private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.getTarjeta();
    this.form= this.formBuilder.group(
      {
        tipo:['',
          [
            Validators.required,
          ]
        ],
        nombreCliente:['',
          [
            Validators.required,
          ]
        ],
        numeroTarjeta:['',
          [
            Validators.required,
          ]
        ],
        codigoSeguridad:['',
          [
            Validators.required,
          ]
        ],
        mesExp:['',
          [
            Validators.required,
          ]
        ],
        annoExp:['',
          [
            Validators.required,
          ]
        ]
      }
    );
  }

  getTarjeta() {
    return;
  }

  get f(): {[key: string]: AbstractControl} {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.pagar();
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
        this.carritoService.deleteAllCarrito();
        this.router.navigate(['/productos']);
      }
    })
  }

  public pagar(): void {
    this.dataPago.id = this.ventaService.getventaProductos().length;
    this.ventaService.setDatosPago(this.dataPago);
    console.log(this.dataPago);
    this.router.navigate(['resumen-compra']);
  }



}
