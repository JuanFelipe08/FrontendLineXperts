import { Injectable } from '@angular/core';
import { PrincipalService } from './principal.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  tipo:string = 'Vehiculos';
  result: any;

  constructor(private principalService: PrincipalService) { }

  async list(){
    this.result = await this.principalService.apiListas(this.tipo);
    return this.result;
  }

  createVehiculos(vehiculo: any){
    return this.principalService.apiPostJSON(vehiculo, this.tipo);
  }

  updateVehiculos(vehiculo: any){
    return this.principalService.apiPutJSON(vehiculo, this.tipo);
  }
}
