import { Producto } from "./producto";
import { Envio } from "./envio";
import { Tarjeta } from "./tarjeta";

export class Usuario {
    id: number = 0;
    username: string = '';
    password: string = '';
    email: string = '';
    productos: Producto [] = [];
    direccion: Envio = new Envio();
    pago: Tarjeta = new Tarjeta();
}