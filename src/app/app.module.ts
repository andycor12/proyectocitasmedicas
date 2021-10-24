import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


//componentes

import { app_routing } from './app.routes';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { CitasComponent } from './citas/citas.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { MedicosComponent } from './medicos/medicos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NuevacitaComponent } from './nuevacita/nuevacita.component';
import { NuevopacienteComponent } from './nuevopaciente/nuevopaciente.component';
import { NuevamedicoComponent } from './nuevamedico/nuevamedico.component';
import { NuevausuariosComponent } from './nuevausuarios/nuevausuarios.component';
import { ReportescitasComponent } from './reportescitas/reportescitas.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    HeaderComponent,
   DashboardComponent,
   CitasComponent,
   PacientesComponent,
   MedicosComponent,
   UsuariosComponent,
   NuevacitaComponent,
   NuevopacienteComponent,
   NuevamedicoComponent,
   NuevausuariosComponent,
   ReportescitasComponent,
  
  
 
    
   
  ],
  imports: [
    BrowserModule,
    app_routing,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
