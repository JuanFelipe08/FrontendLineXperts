import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloProductos } from 'src/app/models/productos.models';
import { ProductosService } from 'src/app/services/productos.service';
import { ModalproductosComponent } from './modalproductos/modalproductos.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  listProductos: any;
  constructor(private productosService: ProductosService, public modal: NgbModal) { }

  ngOnInit(): void {
    this.listadoProductos();
  }

  //Listado Principal
  async listadoProductos(){
    this.listProductos = await this.productosService.list();
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

  updateProducto(modelo: ModeloProductos){
    const modalRef = this.modal.open(ModalproductosComponent, {
      size: 'md',
      backdrop: 'static'
    });
    modalRef.componentInstance.tittle = "ACTUALIZAR";
    modalRef.componentInstance.producto = modelo;
    // metodo para refrescar
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.listadoProductos(); // se cambia el metodo de la lista por la principal
    });
  }
}
