import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseServiceService } from 'src/app/servicios/firebase-service.service';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit {

  constructor(public servicioFb : FirebaseServiceService) { }

  @Output() prodSeleccionado?: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.servicioFb.traerProductos()
  }

  mostrarDetalles(prod : any)
  {
    this.prodSeleccionado?.emit(prod)
  }

}
