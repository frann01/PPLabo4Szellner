import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseServiceService } from 'src/app/servicios/firebase-service.service';

@Component({
  selector: 'app-listado-publico',
  templateUrl: './listado-publico.component.html',
  styleUrls: ['./listado-publico.component.css']
})
export class ListadoPublicoComponent implements OnInit {

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
