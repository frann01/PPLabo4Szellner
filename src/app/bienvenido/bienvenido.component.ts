import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  constructor() {
    this.ObtenerDatos()
    setTimeout(() => {
      
    }, 500);
   }

  ngOnInit(): void {
    
  }

  usuario:any;

  ObtenerDatos(): Promise<any[]>
  {
    return fetch("https://api.github.com/users/frann01").
    then(res => res.json())
    .then(res => 
      {
        this.usuario=res
        return res;
      })
  }

}
