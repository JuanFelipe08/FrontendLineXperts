import { Injectable } from '@angular/core';
import { PrincipalService } from './principal.service';

@Injectable({
  providedIn: 'root'
})
export class TransportadorasService {
  tipo:string = 'Transportadora';
  result: any;

  constructor(private principalService: PrincipalService) { }

  async list(){
    this.result = await this.principalService.apiListas(this.tipo);
    return this.result;
  }

  createTransportadora(transportadora: any){
    return this.principalService.apiPostJSON(transportadora, this.tipo);
  }

  updateTransportadora(transportadora: any){
    return this.principalService.apiPutJSON(transportadora, this.tipo);
  }
}
