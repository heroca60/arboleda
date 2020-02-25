import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
import { ArticuloComponent } from './admin/catalogos/articulo/articulo.component';
import { CrearArticuloComponent } from './admin/catalogos/articulo/crear-articulo/crear-articulo.component';
import { ListarArticuloComponent } from './admin/catalogos/articulo/listar-articulo/listar-articulo.component';
import { DetallecompraComponent } from './admin/transacciones/detallecompra/detallecompra.component';
import { CrearDetallecompraComponent } from './admin/transacciones/detallecompra/crear-detallecompra/crear-detallecompra.component';
import { ListarDetalleCompraComponent } from './admin/transacciones/detallecompra/listar-detalle-compra/listar-detalle-compra.component';
import { LoginComponent } from './login/login.component';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';



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
    ListarComprasComponent,
    ArticuloComponent,
    CrearArticuloComponent,
    ListarArticuloComponent,
    DetallecompraComponent,
    CrearDetallecompraComponent,
    ListarDetalleCompraComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
