import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloTransportadora } from 'src/app/models/transportadoras.models';
import { TransportadorasService } from 'src/app/services/transportadoras.service';
import { ModaltransportadorasComponent } from './modaltransportadoras/modaltransportadoras.component';

@Component({
  selector: 'app-transportadoras',
  templateUrl: './transportadoras.component.html',
  styleUrls: ['./transportadoras.component.css']
})
export class TransportadorasComponent implements OnInit {
  listTransportadora: any;
  constructor(private transportadorasService: TransportadorasService, public modal: NgbModal) { }

  ngOnInit(): void {
    this.listadoTransportadora();
  }

  //Listado Principal
  async listadoTransportadora(){
    this.listTransportadora = await this.transportadorasService.list();
  }

  createTransportadora(){
    const modalRef = this.modal.open(ModaltransportadorasComponent, {
      size: 'md',
      backdrop: 'static'
    });
    modalRef.componentInstance.tittle = "CREAR";
    // metodo para refrescar
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.listadoTransportadora(); // se cambia el metodo de la lista por la principal
    });
  }

  updateTransportadora(modelo: ModeloTransportadora){
    const modalRef = this.modal.open(ModaltransportadorasComponent, {
      size: 'md',
      backdrop: 'static'
    });
    modalRef.componentInstance.tittle = "ACTUALIZAR";
    modalRef.componentInstance.transportadora = modelo;
    // metodo para refrescar
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.listadoTransportadora(); // se cambia el metodo de la lista por la principal
    });
  }
}
