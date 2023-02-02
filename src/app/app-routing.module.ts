import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisosGuard } from './guard/permisos.guard';
import { HomeComponent } from './pages/home/home.component';
import { InformationComponent } from './pages/information/information.component';
import { LoginComponent } from './pages/login/login.component';
import { NuevoProductoComponent } from './pages/nuevo-producto/nuevo-producto.component';
import { ProductosListComponent } from './pages/productos-list/productos-list.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'inicio', component:HomeComponent},
  {path: 'productos', component:ProductosComponent},
  {path: 'productosStock', component:ProductosListComponent, canActivate:[PermisosGuard]},
  {path: 'agregarProducto', component:NuevoProductoComponent, canActivate:[PermisosGuard]},
  {path: 'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
