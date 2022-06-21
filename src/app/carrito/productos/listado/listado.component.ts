import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router'
import { CategoriasService } from 'src/app/categorias.service';
import { ProductosService } from 'src/app/productos.service';
import { Categoria } from '../../categoria';
import { Producto } from '../../producto';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  productos:Producto[];

  productos_cat:Producto[] = [];
  
  categorias:Categoria[];

  constructor(private ruta:ActivatedRoute, c:CategoriasService, p:ProductosService){
    this.categorias = c.categorias;
    this.productos = p.productos;

    ruta.paramMap.subscribe((p:ParamMap)=>{
      let id:number = parseInt(p.get("id")||"0");
      this.productos_cat = this.productos.filter((pr:Producto)=>{
        return pr.categoria.id == id;
      })
    });
  }

  ngOnInit(): void {
  }

}
