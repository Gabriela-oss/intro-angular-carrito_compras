import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './carrito/productos/listado/listado.component';
import { DetalleComponent } from './carrito/productos/detalle/detalle.component';

const routes: Routes = [
  {path:"categoria/:id", component:ListadoComponent},
  {path:"producto/:id", component:DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
