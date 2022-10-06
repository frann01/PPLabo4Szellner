import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogueadosGuard implements CanActivate {
  constructor(private autentificador : LoginServiceService, private router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("paso por el guard");
    console.log('route: ', route)
    console.log('guard log: ', this.autentificador.isLogged)
    if(this.autentificador.isLogged)
   {
      console.log("Logueado");
      return true;
   }
   else
   {
    console.log("Vos quien sos!?!?");
    alert("Debe estar logueado para acceder")
    this.router.navigate([''])
   }
   return false
  }
  }

