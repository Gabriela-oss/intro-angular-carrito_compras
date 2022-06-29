import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../../categoria';
import { Producto } from '../../producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() producto:Producto = new Producto(0,"","","", new Categoria(0,""), 0);
  constructor() { 
  }

  ngOnInit(): void {
  }

}
