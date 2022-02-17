import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public atras(): void {
    this.router.navigate(['/productos']);
  }

  public pagar(): void {
    this.router.navigate(['/pago']);
    
  }
}
