import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NgForm, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloProductos } from 'src/app/models/productos.models';
import { EmpresasService } from 'src/app/services/empresas.service';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';
import { ModalempresaComponent } from '../../empresas/modalempresa/modalempresa.component';

@Component({
  selector: 'app-modalproductos',
  templateUrl: './modalproductos.component.html',
  styleUrls: ['./modalproductos.component.css']
})
export class ModalproductosComponent implements OnInit {
  @Input() tittle: any;
  @Input() producto = new ModeloProductos();
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  producto2 = new ModeloProductos();
  fileData: File | undefined;
  listCompany: any | undefined;

  constructor(private router: Router, public activeModal: NgbActiveModal,
    private empresasService: EmpresasService, private productosService: ProductosService, public modal: NgbModal) { }

  ngOnInit(): void {
    this.producto2 = new ModeloProductos();
    this.producto2.pro_Codigo = this.producto.pro_Codigo;
    this.producto2.pro_Nombre = this.producto.pro_Nombre;
    this.producto2.pro_Peso = this.producto.pro_Peso;
    this.producto2.pro_Estado = this.producto.pro_Estado;
    this.producto2.emp_Codigo = this.producto.emp_Codigo;

    this.listadoCompany();
  }

  async listadoCompany(){
    this.listCompany = await this.empresasService.list();
    //console.log(this.listCompany);
  }

  onSubmitCreate(form: NgForm){
    if(form.invalid) { return; }

    this.productosService.createProductos(this.producto).then((res: any) => {
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

    this.productosService.updateProductos(this.producto2).then((res: any) => {
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
