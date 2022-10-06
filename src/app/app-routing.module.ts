import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { LoginComponent } from './login/login.component';
import { LogueadosGuard } from './gurads/logueados.guard';
import { AltaProductosComponent } from './productos/alta-productos/alta-productos.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';

const routes: Routes = [
  {path:"", component:BienvenidoComponent},
  {path:"login", component:LoginComponent},
  {path:"productos/alta", component:AltaProductosComponent, canActivate:[LogueadosGuard]},
  {path:"productos/detalle", component:ProductoDetalleComponent, canActivate:[LogueadosGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
