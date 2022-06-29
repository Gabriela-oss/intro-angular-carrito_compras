import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './carrito/categorias/categorias.component';
import { ListadoComponent } from './carrito/productos/listado/listado.component';
import { DetalleComponent } from './carrito/productos/detalle/detalle.component';
import { ProductoComponent } from './carrito/productos/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    ListadoComponent,
    DetalleComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
