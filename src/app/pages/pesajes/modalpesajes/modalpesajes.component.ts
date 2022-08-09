import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloPesajes } from 'src/app/models/pesajes.models';
import { ConductoresService } from 'src/app/services/conductores.service';
import { PesajesService } from 'src/app/services/pesajes.service';
import { ProductosService } from 'src/app/services/productos.service';
import { TransportadorasService } from 'src/app/services/transportadoras.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import Swal from 'sweetalert2';
import { ModalconductoresComponent } from '../../conductores/modalconductores/modalconductores.component';
import { ModalproductosComponent } from '../../productos/modalproductos/modalproductos.component';
import { ModaltransportadorasComponent } from '../../transportadoras/modaltransportadoras/modaltransportadoras.component';
import { ModalvehiculosComponent } from '../../vehiculos/modalvehiculos/modalvehiculos.component';

@Component({
  selector: 'app-modalpesajes',
  templateUrl: './modalpesajes.component.html',
  styleUrls: ['./modalpesajes.component.css']
})
export class ModalpesajesComponent implements OnInit {
  @Input() tittle: any;
  @Input() pesajes = new ModeloPesajes();
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  pesajes2 = new ModeloPesajes();
  fileData: File | undefined;
  listCompany: any | undefined;
  listVehiculo: any | undefined;
  listConductor: any | undefined;
  listProductos: any | undefined;

  constructor(private router: Router, public activeModal: NgbActiveModal,
    private empresasService: TransportadorasService, private vehiculosService: VehiculosService, private conductoresService: ConductoresService, 
    private productosService: ProductosService, private pesajesService: PesajesService ,public modal: NgbModal) { }

  ngOnInit(): void {
    this.pesajes2 = new ModeloPesajes();
    this.pesajes2.pesa_Codigo = this.pesajes.pesa_Codigo;
    this.pesajes2.pesa_Tipo_Pesaje = this.pesajes.pesa_Tipo_Pesaje;
    this.pesajes2.pro_Codigo = this.pesajes.pro_Codigo;
    this.pesajes2.cond_Codigo = this.pesajes.cond_Codigo;
    this.pesajes2.veh_Codigo = this.pesajes.veh_Codigo;
    this.pesajes2.tran_Codigo = this.pesajes.tran_Codigo;

    this.listadoCompany();    
    this.listadoConductor();    
    this.listadoProductos();    
    this.listadoVehiculo();    
  }

  async listadoCompany(){
    this.listCompany = await this.empresasService.list();
  }

  async listadoVehiculo(){
    this.listVehiculo = await this.vehiculosService.list();
  }

  async listadoConductor(){
    this.listConductor = await this.conductoresService.list();
  }

  async listadoProductos(){
    this.listProductos = await this.productosService.list();
  }

  onSubmitCreate(form: NgForm){
    if(form.invalid) { return; }

    this.pesajes.emp_Codigo = 1;

    this.pesajesService.createPesaje(this.pesajes).then((res: any) => {
      Swal.fire({
        text: 'Empresa creada correctamente',
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

    this.pesajesService.updatePesaje(this.pesajes2).then((res: any) => {
      Swal.fire({
        text: 'Empresa actualizada correctamente',
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

  createVehiculo(){
    const modalRef = this.modal.open(ModalvehiculosComponent, {
      size: 'md',
      backdrop: 'static'
    });
    modalRef.componentInstance.tittle = "CREAR";
    // metodo para refrescar
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.listadoVehiculo(); // se cambia el metodo de la lista por la principal
    });
  }

  createConductor(){
    const modalRef = this.modal.open(ModalconductoresComponent, {
      size: 'md',
      backdrop: 'static'
    });
    modalRef.componentInstance.tittle = "CREAR";
    // metodo para refrescar
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.listadoConductor(); // se cambia el metodo de la lista por la principal
    });
  }

  createProducto(){
    const modalRef = this.modal.open(ModalproductosComponent, {
      size: 'md',
      backdrop: 'static'
    });
    modalRef.componentInstance.tittle = "CREAR";
    // metodo para refrescar
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.listadoProductos(); // se cambia el metodo de la lista por la principal
    });
  }
}
