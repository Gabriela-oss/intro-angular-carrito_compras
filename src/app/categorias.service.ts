import { Injectable } from '@angular/core';
import { Categoria } from './carrito/categoria';
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categorias:Categoria[] = [
    new Categoria(1, "Escuela"),
    new Categoria(2, "Judo"),
    new Categoria(3, "Electronica"),
    new Categoria(4, "Ropa")
  ]

  constructor() { }
}
