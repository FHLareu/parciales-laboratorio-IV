import { Component, OnInit }  from '@angular/core';

import { Cliente }            from "../../clases/cliente";

import { ConexionService }    from "../../servicios/conexion.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public correo;
  public password;
  public tipo = "cliente";
  public yoRobot: boolean;

  constructor(private conexion: ConexionService) {
    this.yoRobot = false;
  }

  ngOnInit() { }

  Registrar() {

    if(!this.correo || !this.password) {
      
      alert("Todos los campos deben ser completados...");
      return;
    }

    if(!this.yoRobot) {
      alert("Eres un robot, fuera de mi propiedad!");
      return;
    }

    this.conexion.Registrar(new Cliente(this.correo, this.password, this.tipo)).subscribe(
      exito => {
        alert("exito" + JSON.stringify(exito));
        location.href = "./";
      },
      error => alert(error)
    );
  }

  Validar(event) {
    this.yoRobot = event.valido;
  }
}
