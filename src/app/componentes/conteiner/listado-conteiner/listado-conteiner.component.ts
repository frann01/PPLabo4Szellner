import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from 'src/app/servicios/firebase-service.service';

@Component({
  selector: 'app-listado-conteiner',
  templateUrl: './listado-conteiner.component.html',
  styleUrls: ['./listado-conteiner.component.css']
})
export class ListadoConteinerComponent implements OnInit {

  constructor(public servicioFb : FirebaseServiceService) { }

  ngOnInit(): void {
    this.servicioFb.traerCont()
  }

}
