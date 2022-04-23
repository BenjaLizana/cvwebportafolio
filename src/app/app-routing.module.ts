import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: 'dashboard', component:DashboardComponent },
  { path: 'perfil', component:PerfilComponent },
  { path: 'formularioContacto', component:FormularioContactoComponent },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
