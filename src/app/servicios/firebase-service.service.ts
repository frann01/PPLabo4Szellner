import { Injectable } from '@angular/core';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { environment } from 'src/environments/environment'; 
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private afs: AngularFirestore) { }

  private productosBase?: AngularFirestoreCollection<any>;
  public productos: any[] = [];

  private actoresBase?: AngularFirestoreCollection<any>;
  public actores: any[] = [];
  traerProductos()
  {
    this.productosBase = this.afs.collection<any>('productos');
    return this.productosBase.valueChanges().subscribe(productos =>
      {
        this.productos=[];
        productos.forEach(producto => {
          console.info(producto)
          this.productos.unshift(producto);
        });

      })
  }


  traerActores()
  {
    this.actoresBase = this.afs.collection<any>('Actores');
    return this.actoresBase.valueChanges().subscribe(actores =>
      {
        this.actores=[];
        actores.forEach(actor => {
          console.info(actor)
          this.actores.unshift(actor);
        });

      })
  }
}
