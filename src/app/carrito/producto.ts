import { Categoria } from "./categoria";

export class Producto {
    id:number;
    nombre:string;
    detalle:string;
    imagen:string;
    categoria:Categoria;
    precio:number;

    constructor(id:number,nombre:string,detalle:string,imagen:string,categoria:Categoria, precio:number){
        this.id = id;
        this.nombre = nombre;
        this.detalle = detalle;
        this.imagen = imagen;
        this.categoria = categoria;
        this.precio = precio;
    }
}
