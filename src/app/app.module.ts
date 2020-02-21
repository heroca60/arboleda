import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { CatalogosComponent } from './admin/catalogos/catalogos.component';
import { TransaccionesComponent } from './admin/transacciones/transacciones.component';
import { EmpresaComponent } from './admin/catalogos/empresa/empresa.component';
import { CrearEmpresaComponent } from './admin/catalogos/empresa/crear-empresa/crear-empresa.component';
import { ListarEmpresaComponent } from './admin/catalogos/empresa/listar-empresa/listar-empresa.component';
import { ComprasComponent } from './admin/transacciones/compras/compras.component';
import { CrearComprasComponent } from './admin/transacciones/compras/crear-compras/crear-compras.component';
import { ListarComprasComponent } from './admin/transacciones/compras/listar-compras/listar-compras.component';

@NgModule({
  declarations: [
    AppComponent,    
    AdminComponent,
    InicioComponent,    
    NavegacionComponent,
    CatalogosComponent,
    TransaccionesComponent,
    EmpresaComponent,
    CrearEmpresaComponent,
    ListarEmpresaComponent,
    ComprasComponent,
    CrearComprasComponent,
    ListarComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
