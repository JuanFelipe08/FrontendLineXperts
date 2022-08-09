import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloVehiculo } from 'src/app/models/vehiculos.model';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { ModalvehiculosComponent } from './modalvehiculos/modalvehiculos.component';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  listVehiculos: any;
  constructor(private vehiculosService: VehiculosService, public modal: NgbModal) { }

  ngOnInit(): void {
    this.listadoVehiculos();
  }

  //Listado Principal
  async listadoVehiculos(){
    this.listVehiculos = await this.vehiculosService.list();
  }

  createVehiculos(){
    const modalRef = this.modal.open(ModalvehiculosComponent, {
      size: 'md',
      backdrop: 'static'
    });
    modalRef.componentInstance.tittle = "CREAR";
    // metodo para refrescar
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.listadoVehiculos(); // se cambia el metodo de la lista por la principal
    });
  }

  updateVehiculos(modelo: ModeloVehiculo){
    const modalRef = this.modal.open(ModalvehiculosComponent, {
      size: 'md',
      backdrop: 'static'
    });
    modalRef.componentInstance.tittle = "ACTUALIZAR";
    modalRef.componentInstance.vehiculo = modelo;
    // metodo para refrescar
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.listadoVehiculos(); // se cambia el metodo de la lista por la principal
    });
  }
}
