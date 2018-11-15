import { Injectable } from '@angular/core';

import { Cliente } from "../clases/cliente";
import { Auto } from '../clases/auto';
import { Turno } from '../clases/turno';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const config = { "headers": new HttpHeaders({ "token": localStorage.getItem("token") }) };

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private http: HttpClient) { }

  public Registrar(cliente: Cliente) { return this.http.post("http://localhost:3003/clientes", { "cliente": cliente }); }
  public Logear(correo: string, password: string) { return this.http.post("http://localhost:3003/login", { "cliente": { "correo": correo, "password": password } }); }
  public AltaAuto(auto: Auto) { return this.http.post("http://localhost:3003/auto", { "auto": auto }, config); }
  public PedirTurno(turno: Turno) { return this.http.post("http://localhost:3003/turnos", { "turno": turno }, config); }
  public ObtenerTurnos() { return this.http.get("http://localhost:3003/turnos", config); }
  public ObtenerClientes() { return this.http.get("http://localhost:3003/clientes", config); }
  public ObtenerAutos() { return this.http.get("http://localhost:3003/auto", config); }
}
