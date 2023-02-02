import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CantidadComponent } from './cantidad/cantidad.component';
import { ProductosComponent } from './productos/productos.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'



@NgModule({
  declarations: [
    HomeComponent,
    InformationComponent,
    PedidosComponent,
    CantidadComponent,
    ProductosComponent,
    NuevoProductoComponent,
    ProductosListComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule
  ],
  exports: [
    HomeComponent,
    InformationComponent,
    PedidosComponent,
    CantidadComponent,
    ProductosComponent,
    NuevoProductoComponent,
    ProductosListComponent,
    LoginComponent
  ]
})
export class PagesModule { }
