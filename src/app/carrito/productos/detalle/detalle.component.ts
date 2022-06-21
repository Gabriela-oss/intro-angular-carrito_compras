import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/productos.service';
import { Categoria } from '../../categoria';
import { Producto } from '../../producto';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  categorias:Categoria[];
  productos:Producto[];
  producto:Producto = new Producto(0,"","","",new Categoria(0,""),0);

  constructor(private r:ActivatedRoute, p:ProductosService) {
    this.categorias = p.categorias; 
    this.productos = p.productos
  }
  ngOnInit(): void {

    let id:number = parseInt(this.r.snapshot.paramMap.get("id")||"0");
    this.productos.forEach((p:Producto)=>{
      if(p.id == id){
        this.producto = p
      }
    })
  }
}
