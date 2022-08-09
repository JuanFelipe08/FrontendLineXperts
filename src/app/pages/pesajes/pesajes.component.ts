import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloPesajes } from 'src/app/models/pesajes.models';
import { PesajesService } from 'src/app/services/pesajes.service';
import { ModalpesajesComponent } from './modalpesajes/modalpesajes.component';

@Component({
  selector: 'app-pesajes',
  templateUrl: './pesajes.component.html',
  styleUrls: ['./pesajes.component.css']
})
export class PesajesComponent implements OnInit {
  listPesajes: any;
  constructor(private pesajesService: PesajesService, public modal: NgbModal) { }

  ngOnInit(): void {
    this.listadoCompany();
  }

  //Listado Principal
  async listadoCompany(){
    this.listPesajes = await this.pesajesService.list();
  }

  createPesajes(){
    const modalRef = this.modal.open(ModalpesajesComponent, {
      size: 'lg',
      backdrop: 'static'
    });
    modalRef.componentInstance.tittle = "CREAR";
    // metodo para refrescar
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.listadoCompany(); // se cambia el metodo de la lista por la principal
    });
  }

  updatePesajes(modelo: ModeloPesajes){
    const modalRef = this.modal.open(ModalpesajesComponent, {
      size: 'lg',
      backdrop: 'static'
    });
    modalRef.componentInstance.tittle = "ACTUALIZAR";
    modalRef.componentInstance.pesaje = modelo;
    // metodo para refrescar
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.listadoCompany(); // se cambia el metodo de la lista por la principal
    });
  }
}
