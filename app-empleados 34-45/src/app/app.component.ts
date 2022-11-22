import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de empleados';

  constructor(private loginService:LoginService){

  
  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyAonIeT5BKnDWLCCoVjUajkvRO9h_MfQkM",
      authDomain: "mis-clientes-62c1f.firebaseapp.com",
    });
  }



  agregarEmpleado(){
  
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    return this.loginService.logout();
  }

}
