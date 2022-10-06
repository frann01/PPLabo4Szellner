import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  isLogged=false;

  email="franszellner@gmail.com"
  contra='123456'

  Ingresar(email:string, contra:string)
  {
    if(email ==this.email && contra == this.contra)
    {
      this.isLogged=true;

    }
    else
    {
      return false;
    }
    return true;
  }

   Salir()
  {
    this.isLogged=false;
  }
}
