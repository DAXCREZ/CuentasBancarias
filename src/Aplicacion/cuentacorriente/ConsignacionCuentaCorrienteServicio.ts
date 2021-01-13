import {UnidadTrabajo} from "../../Infraestructura/base/UnidadTrabajo";
import { BankAccount } from "../../Dominio/entity/BankAccount";
import { Transaction } from "../../Dominio/entity/Transaction";


export class ConsignacionCuentaCorrienteServicios{
  constructor(private readonly UnidadTrabajo: UnidadTrabajo) {}

  async execute(request: ConsignacionCuentaCorrienteRequets): Promise<ConsignacionCuentaCorrienteRespuesta>{
    try{
      const accountSearched: BankAccount = await this.UnidadTrabajo.currentAccountRepositorio.findEntity(request.number);
      if (accountSearched == undefined){
        return new ConsignacionCuentaCorrienteRespuesta('La cuenta de corriente no existe');
      }

      const balance: number = accountSearched.balance;
      const transaccion: Transaction = new Transaction();
      transaccion.value = request.value;

      accountSearched.consing(transaccion);

      if(accountSearched.balance == balance){
        return new ConsignacionCuentaCorrienteRespuesta('Consignacion no realizada');
      }else {
        await this.UnidadTrabajo.star();
        await this.UnidadTrabajo.currentAccountRepositorio.save(accountSearched);
        return new ConsignacionCuentaCorrienteRespuesta('Consignacion creada');
      }


    }catch(e){

      return new ConsignacionCuentaCorrienteRespuesta('Al momento de consignar se presento un error');
    }
  }

}

export class ConsignacionCuentaCorrienteRequets{
  constructor (
    public readonly number: string,
    public readonly value: number,
  ){}
}

export class ConsignacionCuentaCorrienteRespuesta{
  constructor(public readonly message: string) {
  }
}

export class ConsignacionCuentaCorrienteServicio {
}