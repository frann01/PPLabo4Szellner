import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  constructor() { }
  @Input() prodSeleccionado:any;
  ngOnInit(): void {
  }

}
