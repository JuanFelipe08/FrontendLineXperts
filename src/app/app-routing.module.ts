import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConductoresComponent } from './pages/conductores/conductores.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { HomeComponent } from './pages/home/home.component';
import { PesajesComponent } from './pages/pesajes/pesajes.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { TransportadorasComponent } from './pages/transportadoras/transportadoras.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'empresa', component: EmpresasComponent },
  { path: 'producto', component: ProductosComponent },
  { path: 'transportadora', component: TransportadorasComponent },
  { path: 'vehiculo', component: VehiculosComponent },
  { path: 'conductor', component: ConductoresComponent },
  { path: 'pesaje', component: PesajesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
