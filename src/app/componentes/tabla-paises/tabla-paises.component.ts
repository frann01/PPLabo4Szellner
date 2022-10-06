import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  constructor() {this.paise = this.ObtenerPaises();}

  ngOnInit(): void {
  }

  linkPaises = 'https://restcountries.com/v3.1/all';
  @Output() paisSeleccionado: EventEmitter<any> = new EventEmitter<any>();


  paise:Promise<any[]>;
  paises:any[]= []

  emitir(pais:any)
  {
    this.paisSeleccionado.emit(pais); console.log("Emitiendo ")
  }

  ObtenerPaises(): Promise<any[]>
  {
    return fetch(this.linkPaises).
    then(res => res.json())
    .then(res => 
      {
        console.log(res);
        res.forEach( (pais: any) => {
          this.paises.push(pais);
        });
        return res;
      })
  }
}
