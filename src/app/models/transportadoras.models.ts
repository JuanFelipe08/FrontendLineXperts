import { EmpresasModel } from "./empresas.models";
export class ModeloTransportadora {
	tran_Codigo: number | undefined;
	tran_Nit:    string | undefined;
	tran_Nombre: string | undefined;
	tran_Estado: number | undefined;
	emp_Codigo:  number | undefined;
	empresas:    EmpresasModel | undefined;
}