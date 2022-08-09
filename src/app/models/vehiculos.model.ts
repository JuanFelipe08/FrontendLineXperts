import { ModeloTransportadora } from "./transportadoras.models";

export class ModeloVehiculo {
	veh_Codigo:     number | undefined;
	veh_Placa:      string | undefined;
	veh_Estado:     number | undefined;
	tran_Codigo:    number | undefined;
	transportadora: ModeloTransportadora | undefined;
}