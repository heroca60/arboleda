import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AdminComponent } from './admin/admin.component';
import { EmpresaComponent } from './admin/catalogos/empresa/empresa.component';


const routes: Routes = [
  {
    path: '', component: InicioComponent
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'admin/empresa', component: EmpresaComponent
  },
  {
    path: '**', component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
