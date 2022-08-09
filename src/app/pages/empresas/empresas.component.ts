import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import { ModalempresaComponent } from './modalempresa/modalempresa.component';
import { EmpresasModel } from '../../models/empresas.models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  listCompany: any;
  constructor(private empresasService: EmpresasService, public modal: NgbModal) { }

  ngOnInit(): void {
    this.listadoCompany();
  }

  //Listado Principal
  async listadoCompany(){
    this.listCompany = await this.empresasService.list();
    console.log(this.listCompany);
  }

  createCompany(){
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

  updateCompany(modelo: EmpresasModel){
    const modalRef = this.modal.open(ModalempresaComponent, {
      size: 'md',
      backdrop: 'static'
    });
    modalRef.componentInstance.tittle = "ACTUALIZAR";
    modalRef.componentInstance.company = modelo;
    // metodo para refrescar
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.listadoCompany(); // se cambia el metodo de la lista por la principal
    });
  }
}
