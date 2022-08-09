import { ModeloConductor } from "./conductores.models";
import { EmpresasModel } from "./empresas.models";
import { ModeloProductos } from "./productos.models";
import { ModeloTransportadora } from "./transportadoras.models";
import { ModeloVehiculo } from "./vehiculos.model";

export class ModeloPesajes {
	pesa_Codigo:         number | undefined;
	pesa_Tipo_Pesaje:    string | undefined;
	pro_Codigo:          number | undefined;
	productos:           ModeloProductos | undefined;
	pesa_Primer_Pesaje:  number | undefined;
	pesa_Segundo_Pesaje: number | undefined;
	pesa_Peso_Neto:      number | undefined;
	pesa_Anulado:        number | undefined;
	veh_Codigo:          number | undefined;
	vehiculos:           ModeloVehiculo | undefined;
	tran_Codigo:         number | undefined;
	transportadora:      ModeloTransportadora | undefined;
	emp_Codigo:          number | undefined;
	empresas:            EmpresasModel | undefined;
	cond_Codigo:         number | undefined;
	conductores:         ModeloConductor | undefined;
}