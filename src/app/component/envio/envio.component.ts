import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Envio } from 'src/app/service/envio';
import { VentaService } from 'src/app/service/venta.service';
@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {

  dataEnvio: Envio = new Envio();


  form: FormGroup = new FormGroup({
    pais: new FormControl(''),
    calle: new FormControl(''),
    ciudad: new FormControl(''),
    region: new FormControl(''),
    codigoPostal: new FormControl('')
  });

  submitted : boolean = false;

  constructor(private router: Router, private ventaService: VentaService, private formBuilder: FormBuilder, private activateRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.getEnvio();
    this.form= this.formBuilder.group(
      {
        pais:['',
          [
            Validators.required,
          ]
        ],
        calle:['',
          [
            Validators.required,
          ]
        ],
        ciudad:['',
          [
            Validators.required,
          ]
        ],
        region:['',
          [
            Validators.required,
          ]
        ],
        codigoPostal:['',
          [
            Validators.required,
            Validators.min(7)
          ]
        ]
      }
    );
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
  
  public atras(): void {
    this.router.navigate(['/orden-compra']);
  }

  public pagar(): void {
    this.dataEnvio.id = this.ventaService.getventaProductos().length;
    this.ventaService.setDatosEnvio(this.dataEnvio);
    this.router.navigate(['/pago']);
  }

  getEnvio() {
    return;
  }
}
