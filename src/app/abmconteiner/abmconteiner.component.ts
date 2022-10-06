import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abmconteiner',
  templateUrl: './abmconteiner.component.html',
  styleUrls: ['./abmconteiner.component.css']
})
export class ABMConteinerComponent implements OnInit {

  constructor() { }

  conteinerNuevo:any;

  ngOnInit(): void {
  }

  tomarCont($event)
  {
    this.conteinerNuevo=$event
  }

}
