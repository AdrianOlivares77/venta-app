import { Producto } from "./producto";

export class Usuario {
    id: number = 0;
    username: string = '';
    password: string = '';
    email: string = '';
    productos: Producto [] = [];
}