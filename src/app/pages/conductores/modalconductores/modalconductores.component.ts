import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloConductor } from 'src/app/models/conductores.models';
import { ConductoresService } from 'src/app/services/conductores.service';
import { TransportadorasService } from 'src/app/services/transportadoras.service';
import Swal from 'sweetalert2';
import { ModaltransportadorasComponent } from '../../transportadoras/modaltransportadoras/modaltransportadoras.component';

@Component({
  selector: 'app-modalconductores',
  templateUrl: './modalconductores.component.html',
  styleUrls: ['./modalconductores.component.css']
})
export class ModalconductoresComponent implements OnInit {
  @Input() tittle: any;
  @Input() conductor = new ModeloConductor();
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  conductor2 = new ModeloConductor();
  fileData: File | undefined;
  listCompany: any | undefined;

  constructor(private router: Router, public activeModal: NgbActiveModal,
    private empresasService: TransportadorasService, private conductorsService: ConductoresService, public modal: NgbModal) { }

  ngOnInit(): void {
    this.conductor2 = new ModeloConductor();
    this.conductor2.cond_Codigo = this.conductor.cond_Codigo;
    this.conductor2.cond_Cedula = this.conductor.cond_Cedula;
    this.conductor2.cond_Nombre = this.conductor.cond_Nombre;
    this.conductor2.cond_Estado = this.conductor.cond_Estado;
    this.conductor2.tran_Codigo = this.conductor.tran_Codigo;

    this.listadoCompany();
  }

  async listadoCompany(){
    this.listCompany = await this.empresasService.list();
    //console.log(this.listCompany);
  }

  onSubmitCreate(form: NgForm){
    if(form.invalid) { return; }

    this.conductorsService.createConductor(this.conductor).then((res: any) => {
      Swal.fire({
        text: 'Conductor creado correctamente',
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

    this.conductorsService.updateConductor(this.conductor2).then((res: any) => {
      Swal.fire({
        text: 'Conductor actualizado correctamente',
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
