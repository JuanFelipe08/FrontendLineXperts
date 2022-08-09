import { Injectable } from '@angular/core';
import { PrincipalService } from './principal.service';

@Injectable({
  providedIn: 'root'
})
export class ConductoresService {
  tipo:string = 'Conductores';
  result: any;

  constructor(private principalService: PrincipalService) { }

  async list(){
    this.result = await this.principalService.apiListas(this.tipo);
    return this.result;
  }

  createConductor(conductor: any){
    return this.principalService.apiPostJSON(conductor, this.tipo);
  }

  updateConductor(conductor: any){
    return this.principalService.apiPutJSON(conductor, this.tipo);
  }
}
