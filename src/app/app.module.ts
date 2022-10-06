import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from "@angular/fire/compat"
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { LoginComponent } from './login/login.component';
import { AltaProductosComponent } from './productos/alta-productos/alta-productos.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { ListadoProductoComponent } from './componentes/listado-producto/listado-producto.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { DetalleProdComponent } from './componentes/detalle-prod/detalle-prod.component';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { ListadoPublicoComponent } from './componentes/listado-publico/listado-publico.component';
import { ABMConteinerComponent } from './abmconteiner/abmconteiner.component';
import { AltaConteinerComponent } from './componentes/conteiner/alta-conteiner/alta-conteiner.component';
import { ListadoConteinerComponent } from './componentes/conteiner/listado-conteiner/listado-conteiner.component';
import { ModificarConteinerComponent } from './componentes/conteiner/modificar-conteiner/modificar-conteiner.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    AltaProductosComponent,
    TablaPaisesComponent,
    ListadoProductoComponent,
    ProductoDetalleComponent,
    DetalleProdComponent,
    DetallePaisComponent,
    ListadoPublicoComponent,
    ABMConteinerComponent,
    AltaConteinerComponent,
    ListadoConteinerComponent,
    ModificarConteinerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
