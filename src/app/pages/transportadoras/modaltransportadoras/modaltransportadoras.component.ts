import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloTransportadora } from 'src/app/models/transportadoras.models';
import { EmpresasService } from 'src/app/services/empresas.service';
import { TransportadorasService } from 'src/app/services/transportadoras.service';
import Swal from 'sweetalert2';
import { ModalempresaComponent } from '../../empresas/modalempresa/modalempresa.component';

@Component({
  selector: 'app-modaltransportadoras',
  templateUrl: './modaltransportadoras.component.html',
  styleUrls: ['./modaltransportadoras.component.css']
})
export class ModaltransportadorasComponent implements OnInit {
  @Input() tittle: any;
  @Input() transportadora = new ModeloTransportadora();
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  transportadora2 = new ModeloTransportadora();
  fileData: File | undefined;
  listCompany: any | undefined;

  constructor(private router: Router, public activeModal: NgbActiveModal,
    private empresasService: EmpresasService, private transportadorasService: TransportadorasService, public modal: NgbModal) { }

  ngOnInit(): void {
    this.transportadora2 = new ModeloTransportadora();
    this.transportadora2.tran_Codigo = this.transportadora.tran_Codigo;
    this.transportadora2.tran_Nit = this.transportadora.tran_Nit;
    this.transportadora2.tran_Nombre = this.transportadora.tran_Nombre;
    this.transportadora2.tran_Estado = this.transportadora.tran_Estado;
    this.transportadora2.emp_Codigo = this.transportadora.emp_Codigo;

    this.listadoCompany();
  }

  async listadoCompany(){
    this.listCompany = await this.empresasService.list();
    //console.log(this.listCompany);
  }

  onSubmitCreate(form: NgForm){
    if(form.invalid) { return; }

    this.transportadorasService.createTransportadora(this.transportadora).then((res: any) => {
      Swal.fire({
        text: 'Empresa Transportadora creada correctamente',
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

    this.transportadorasService.updateTransportadora(this.transportadora2).then((res: any) => {
      Swal.fire({
        text: 'Empresa Transportadora actualizada correctamente',
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
    const modalRef = this.modal.open(ModalempresaComponent, {
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
