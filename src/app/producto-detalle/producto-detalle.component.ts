import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  constructor() { }

  prodDetalle:any;

  ngOnInit(): void {
    
  }

  ProdDetalle($event:any)
  {
    this.prodDetalle = $event;
  }

}
