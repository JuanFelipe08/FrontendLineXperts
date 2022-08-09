import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpresasModel } from 'src/app/models/empresas.models';
import { EmpresasService } from 'src/app/services/empresas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modalempresa',
  templateUrl: './modalempresa.component.html',
  styleUrls: ['./modalempresa.component.css']
})
export class ModalempresaComponent implements OnInit {
  @Input() tittle: any;
  @Input() company = new EmpresasModel();
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  company2 = new EmpresasModel();
  fileData: File | undefined;

  constructor(private router: Router, public activeModal: NgbActiveModal,
    private companyService: EmpresasService) { }

  ngOnInit(): void {
    this.company2 = new EmpresasModel();
    this.company2.emp_Codigo = this.company.emp_Codigo;
    this.company2.emp_Nombre = this.company.emp_Nombre;
    this.company2.emp_Nit = this.company.emp_Nit;
    this.company2.emp_Estado = this.company.emp_Estado;
  }

  fileEvent(fileInput: any){
    this.fileData = <File>fileInput.target.files[0];
  }

  onSubmitCreate(form: NgForm){
    if(form.invalid) { return; }

    this.companyService.createCompany(this.company).then((res: any) => {
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

    this.companyService.updateCompany(this.company2).then((res: any) => {
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
}
