import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  titulo: string = 'Estos productos tiene agregados';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public vaciarCarrito(): void {
    document.getElementById("offcanvasRight")!.classList.remove("show");
    document.getElementById("offcanvasRight")!.removeAttribute("aria-modal");
    document.getElementById("offcanvasRight")!.ariaHidden="true";
    document.getElementById("offcanvasRight")!.style.visibility='hidden';
    swal('Carrito vaciado.');
  }

}
