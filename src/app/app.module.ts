import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { HttpClientModule }         from '@angular/common/http';
import { LayoutModule }             from '@angular/cdk/layout';
import { RecaptchaModule }          from 'ng-recaptcha';
import { CustomMaterialModule }     from './modulos/custom-material/custom-material.module';
import { RutasModule }              from './modulos/rutas/rutas.module';

import { ConexionService }          from './servicios/conexion.service';
import { AutorizacionService }      from './servicios/autorizacion.service';
import { VerificarTipoService }     from './servicios/verificar-tipo.service';
import { JwtHelperService }         from '@auth0/angular-jwt';

import { AppComponent }             from './app.component';
import { RegistroComponent }        from './componentes/registro/registro.component';
import { LoginComponent }           from './componentes/login/login.component';
import { PrincipalComponent }       from './componentes/principal/principal.component';
import { PageNotFoundComponent }    from './componentes/page-not-found/page-not-found.component';
import { MaterialNavComponent }     from './componentes/material-nav/material-nav.component';
import { CargarAutoComponent }      from './componentes/cargar-auto/cargar-auto.component';
import { PedirTurnoComponent }      from './componentes/pedir-turno/pedir-turno.component';
import { MostrarTurnosComponent }   from './componentes/mostrar-turnos/mostrar-turnos.component';
import { TodosLosTurnosComponent }  from './componentes/todos-los-turnos/todos-los-turnos.component';
import { CaptchaComponent }         from '../../projects/puntos-opcionales/src/lib/captcha/captcha.component';
import { MapaComponent }            from '../../projects/puntos-opcionales/src/lib/mapa/mapa.component';

import { AutoEstadoPipe }           from './pipes/auto-estado.pipe';
import { GrdFilterPipe }            from "./pipes/grd-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    PageNotFoundComponent,
    LoginComponent,
    PrincipalComponent,
    MaterialNavComponent,
    CargarAutoComponent,
    PedirTurnoComponent,
    MostrarTurnosComponent,
    TodosLosTurnosComponent,
    AutoEstadoPipe,
    CaptchaComponent,
    MapaComponent,
    GrdFilterPipe
  ],
  imports: [
    BrowserModule,
    RutasModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    RecaptchaModule
    
  ],
  providers: [
    ConexionService,
    AutorizacionService,
    VerificarTipoService,
    JwtHelperService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
