import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-prod',
  templateUrl: './detalle-prod.component.html',
  styleUrls: ['./detalle-prod.component.css']
})
export class DetalleProdComponent implements OnInit {

  constructor() { }
  @Input() prodSeleccionado:any;

  ngOnInit(): void {
  }

}
