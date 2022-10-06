import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public serviceLogin : LoginServiceService,private router: Router) { }

  ngOnInit(): void {
  }

  email="";
  clave="";

  Ingresar()
  {
    if(this.serviceLogin.Ingresar(this.email, this.clave))
    {
        alert("Usuario Logueado")
        console.log(this.serviceLogin.isLogged)
        this.router.navigate(['']);
    }
    else
    {
      alert("Email o contraseña incorrectos")
    }
  }

  Perfil1()
  {
    this.email="franszellner@gmail.com";
    this.clave = '123456';
  }

  async Perfil2()
  {
    this.email="pedrogomez@gmail.com";
    this.clave = '123456';
  }

}
