import { EmpresasModel } from "./empresas.models";

export class ModeloProductos {
	pro_Codigo: number | undefined;
	pro_Nombre: string | undefined;
	pro_Peso:   number | undefined;
	emp_Codigo: number | undefined;
	empresas:   EmpresasModel | undefined;
	pro_Estado: number | undefined;
}