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
    DetallePaisComponent
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
