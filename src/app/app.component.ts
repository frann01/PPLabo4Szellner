import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PPLabo4Szellner';

  constructor(public loginS : LoginServiceService)
  {

  }
  ngOnInit(): void {
    console.log("Bienve :" , this.loginS.isLogged)
  }

  logout()
  {
    this.loginS.Salir()
  }
}
