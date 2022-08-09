import { ModeloTransportadora } from "./transportadoras.models";

export class ModeloConductor {
	cond_Codigo:    number | undefined;
	cond_Cedula:    string | undefined;
	cond_Nombre:    string | undefined;
	cond_Estado:    number | undefined;
	tran_Codigo:    number | undefined;
	transportadora: ModeloTransportadora | undefined;
}