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

  dataEnvio = {
    pais: '',
    calle: '',
    ciudad: '',
    region: '',
    codigoPostal: ''
  }

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
    this.form= this.formBuilder.group(
      {
        pais:['',
          [
            Validators.required,
            Validators.minLength(3)
          ]
        ],
        calle:['',
          [
            Validators.required,
            Validators.minLength(5)
          ]
        ],
        ciudad:['',
          [
            Validators.required,
            Validators.minLength(3)
          ]
        ],
        region:['',
          [
            Validators.required,
            Validators.minLength(2)
          ]
        ],
        codigoPostal:['',
          [
            Validators.required,
            Validators.pattern("^[0-9]*$"),
            Validators.minLength(4)
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
    let data = new Envio();
    data.id = 0;
    data.pais = this.dataEnvio.pais;
    data.calle = this.dataEnvio.calle;
    data.ciudad = this.dataEnvio.ciudad;
    data.region = this.dataEnvio.region;
    data.codigoPostal = parseInt(this.dataEnvio.codigoPostal);
    this.ventaService.setDatosEnvio(data);
    this.router.navigate(['/pago']);
  }

}
