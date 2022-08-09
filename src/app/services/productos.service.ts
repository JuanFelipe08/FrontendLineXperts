import { Injectable } from '@angular/core';
import { PrincipalService } from './principal.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  tipo:string = 'Productos';
  result: any;

  constructor(private principalService: PrincipalService) { }

  async list(){
    this.result = await this.principalService.apiListas(this.tipo);
    return this.result;
  }

  createProductos(productos: any){
    return this.principalService.apiPostJSON(productos, this.tipo);
  }

  updateProductos(productos: any){
    return this.principalService.apiPutJSON(productos, this.tipo);
  }
}
