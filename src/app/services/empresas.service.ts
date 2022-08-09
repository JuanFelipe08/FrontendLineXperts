import { Injectable } from '@angular/core';
import { PrincipalService } from './principal.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  tipo:string = 'Empresas';
  result: any;

  constructor(private principalService: PrincipalService) { }

  async list(){
    this.result = await this.principalService.apiListas(this.tipo);
    return this.result;
  }

  createCompany(company: any){
    return this.principalService.apiPostJSON(company, this.tipo);
  }

  updateCompany(company: any){
    return this.principalService.apiPutJSON(company, this.tipo);
  }
}
