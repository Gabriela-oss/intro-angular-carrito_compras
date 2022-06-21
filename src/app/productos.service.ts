import { Injectable } from '@angular/core';
import { Categoria } from './carrito/categoria';
import { Producto } from './carrito/producto';
import { CategoriasService } from './categorias.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos:Producto[];
  categorias:Categoria[];
  constructor(c:CategoriasService) { 
    // categorias:Categoria = c.categorias 
    this.categorias = c.categorias 
    this.productos = [
      new Producto(1,"lapices", "De colores", "assets/img/productos/colores.jpg", this.categorias[0], 1000),
      new Producto(2, "Traje azul", "Talla M", "assets/img/productos/traje-judo.jpeg", this.categorias[1], 40000),
      new Producto(3, "Audifonos", "Color negro", "assets/img/productos/audifonos.jpg", this.categorias[2], 2000),
      new Producto(4, "Camisa M", "de hombre color negro", "assets/img/productos/camisa.jpg", this.categorias[3], 2900),
      new Producto(5, "Cinturones", "Colores", "assets/img/productos/cinturones.jpeg", this.categorias[1], 29000)
    ]
  }
}
