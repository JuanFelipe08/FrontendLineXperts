import { Injectable } from '@angular/core';
import { PrincipalService } from './principal.service';

@Injectable({
  providedIn: 'root'
})
export class PesajesService {
  tipo:string = 'Pesajes';
  result: any;

  constructor(private principalService: PrincipalService) { }

  async list(){
    this.result = await this.principalService.apiListas(this.tipo);
    return this.result;
  }

  createPesaje(pesaje: any){
    return this.principalService.apiPostJSON(pesaje, this.tipo);
  }

  updatePesaje(pesaje: any){
    return this.principalService.apiPutJSON(pesaje, this.tipo);
  }
}
