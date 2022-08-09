import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { PrincipalService } from './services/principal.service';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { ProductosComponent } from './pages/productos/productos.component';
import { TransportadorasComponent } from './pages/transportadoras/transportadoras.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { ConductoresComponent } from './pages/conductores/conductores.component';
import { PesajesComponent } from './pages/pesajes/pesajes.component';
import { ModalempresaComponent } from './pages/empresas/modalempresa/modalempresa.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalproductosComponent } from './pages/productos/modalproductos/modalproductos.component';
import { ModaltransportadorasComponent } from './pages/transportadoras/modaltransportadoras/modaltransportadoras.component';
import { ModalconductoresComponent } from './pages/conductores/modalconductores/modalconductores.component';
import { ModalvehiculosComponent } from './pages/vehiculos/modalvehiculos/modalvehiculos.component';
import { ModalpesajesComponent } from './pages/pesajes/modalpesajes/modalpesajes.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresasComponent,
    HomeComponent,
    ProductosComponent,
    TransportadorasComponent,
    VehiculosComponent,
    ConductoresComponent,
    PesajesComponent,
    ModalempresaComponent,
    ModalproductosComponent,
    ModaltransportadorasComponent,
    ModalconductoresComponent,
    ModalvehiculosComponent,
    ModalpesajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgbModule
  ],
  providers: [
    PrincipalService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
