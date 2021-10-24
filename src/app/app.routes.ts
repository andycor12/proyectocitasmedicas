import { RouterModule,Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CitasComponent } from "./citas/citas.component";
import { PacientesComponent } from './pacientes/pacientes.component';
import { MedicosComponent } from './medicos/medicos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NuevacitaComponent } from './nuevacita/nuevacita.component';
import { NuevopacienteComponent } from './nuevopaciente/nuevopaciente.component';
import { NuevamedicoComponent } from './nuevamedico/nuevamedico.component';
import { NuevausuariosComponent } from './nuevausuarios/nuevausuarios.component';
import { ReportescitasComponent } from './reportescitas/reportescitas.component';

const app_routes: Routes = [
     { path:'home',component:HomeComponent},
     { path:'header',component:HeaderComponent},
     { path:'sidenav',component:SidenavComponent},
     { path: 'citas',component:CitasComponent},
     { path: 'nuevacita',component:NuevacitaComponent},
     { path: 'pacientes',component:PacientesComponent},
     { path: 'nuevopaciente',component:NuevopacienteComponent},
     { path: 'medicos',component:MedicosComponent},
     { path: 'nuevomedico',component:NuevamedicoComponent},
     { path: 'usuarios',component:UsuariosComponent},
     { path: 'nuevousuarios',component:NuevausuariosComponent},
     { path: 'reportes',component:ReportescitasComponent},
     { path: 'login',component:DashboardComponent},
     
     { path: '**', pathMatch:'full',redirectTo:'home' },
  ];
export const app_routing=RouterModule.forRoot(app_routes);