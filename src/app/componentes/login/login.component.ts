import { Component, OnInit } from '@angular/core';

import { ConexionService } from "../../servicios/conexion.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public correo;
  public password;

  constructor(private conexion: ConexionService) { }

  ngOnInit() { }

  Logear() {

    if(!this.correo || !this.password) {
      alert("Todos los campos deben ser completados...");
      return;
    }

    this.conexion.Logear(this.correo, this.password).subscribe(
      exito => {

        if((exito as any).error != undefined) {

          alert("Ups... Parece que las credenciales no son validas.");
          console.log((exito as any).error);
        } else {

          localStorage.setItem("token", (exito as any).token);
          location.href = "./principal/auto";
        }
        
      },
      error => alert("error" + JSON.stringify(error))
    );
  }
}
