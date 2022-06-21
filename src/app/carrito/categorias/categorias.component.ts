import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/categorias.service';
import { Categoria } from '../categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias:Categoria[];

  constructor(c:CategoriasService) { 
    this.categorias = c.categorias;
  }
  
  ngOnInit(): void {
  }

}
