import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloConductor } from 'src/app/models/conductores.models';
import { ConductoresService } from 'src/app/services/conductores.service';
import { ModalconductoresComponent } from './modalconductores/modalconductores.component';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.css']
})
export class ConductoresComponent implements OnInit {
  listConductores: any;
  constructor(private conductoresService: ConductoresService, public modal: NgbModal) { }

  ngOnInit(): void {
    this.listadoConductores();
  }

  //Listado Principal
  async listadoConductores(){
    this.listConductores = await this.conductoresService.list();
  }

  createConductores(){
    const modalRef = this.modal.open(ModalconductoresComponent, {
      size: 'md',
      backdrop: 'static'
    });
    modalRef.componentInstance.tittle = "CREAR";
    // metodo para refrescar
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.listadoConductores(); // se cambia el metodo de la lista por la principal
    });
  }

  updateConductores(modelo: ModeloConductor){
    const modalRef = this.modal.open(ModalconductoresComponent, {
      size: 'md',
      backdrop: 'static'
    });
    modalRef.componentInstance.tittle = "ACTUALIZAR";
    modalRef.componentInstance.conductor = modelo;
    // metodo para refrescar
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.listadoConductores(); // se cambia el metodo de la lista por la principal
    });
  }
}
