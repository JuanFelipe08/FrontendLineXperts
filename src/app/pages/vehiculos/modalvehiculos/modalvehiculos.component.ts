import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloVehiculo } from 'src/app/models/vehiculos.model';
import { TransportadorasService } from 'src/app/services/transportadoras.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import Swal from 'sweetalert2';
import { ModaltransportadorasComponent } from '../../transportadoras/modaltransportadoras/modaltransportadoras.component';

@Component({
  selector: 'app-modalvehiculos',
  templateUrl: './modalvehiculos.component.html',
  styleUrls: ['./modalvehiculos.component.css']
})
export class ModalvehiculosComponent implements OnInit {
  @Input() tittle: any;
  @Input() vehiculo = new ModeloVehiculo();
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  vehiculo2 = new ModeloVehiculo();
  fileData: File | undefined;
  listCompany: any | undefined;

  constructor(private router: Router, public activeModal: NgbActiveModal,
    private empresasService: TransportadorasService, private vehiculosService: VehiculosService, public modal: NgbModal) { }

  ngOnInit(): void {
    this.vehiculo2 = new ModeloVehiculo();
    this.vehiculo2.veh_Codigo = this.vehiculo.veh_Codigo;
    this.vehiculo2.veh_Placa = this.vehiculo.veh_Placa;
    this.vehiculo2.veh_Estado = this.vehiculo.veh_Estado;
    this.vehiculo2.tran_Codigo = this.vehiculo.tran_Codigo;

    this.listadoCompany();
  }

  async listadoCompany(){
    this.listCompany = await this.empresasService.list();
    //console.log(this.listCompany);
  }

  onSubmitCreate(form: NgForm){
    if(form.invalid) { return; }

    this.vehiculosService.createVehiculos(this.vehiculo).then((res: any) => {
      Swal.fire({
        text: 'Vehiculo creado correctamente',
        icon: 'success',
        confirmButtonText: 'Ok',
        allowOutsideClick: false
      }).then((result) => {
        this.activeModal.close('close');
        this.passEntry.emit(); // el emisor para el refresco de la pagina
      });
    }, error => {
      Swal.fire({
        text: 'Error, contactar al administrador',
        icon: 'error',
        confirmButtonText: 'Ok',
        allowOutsideClick: false
      });
    });
  }

  onSubmitUpdate(form: NgForm){
    if(form.invalid) { return; }

    this.vehiculosService.updateVehiculos(this.vehiculo2).then((res: any) => {
      Swal.fire({
        text: 'Vehiculo actualizado correctamente',
        icon: 'success',
        confirmButtonText: 'Ok',
        allowOutsideClick: false
      }).then((result) => {
        this.activeModal.close('close');
        this.passEntry.emit(); // el emisor para el refresco de la pagina
      });      
    }, error => {
      Swal.fire({
        text: 'Error, contactar al administrador',
        icon: 'error',
        confirmButtonText: 'Ok',
        allowOutsideClick: false
      });
    });
  }

  closeModal(message: string) {
    this.activeModal.close();
  }

  createEmpresa(){
    const modalRef = this.modal.open(ModaltransportadorasComponent, {
      size: 'md',
      backdrop: 'static'
    });
    modalRef.componentInstance.tittle = "CREAR";
    // metodo para refrescar
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.listadoCompany(); // se cambia el metodo de la lista por la principal
    });
  }
}
