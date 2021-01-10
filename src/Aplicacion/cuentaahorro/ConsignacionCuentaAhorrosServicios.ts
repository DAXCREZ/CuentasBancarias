import {UnidadTrabajo} from "../../Infraestructura/base/UnidadTrabajo";
import { BankAccount } from "../../domain/entity/bank.account";
import { Transaction } from "../../domain/entity/transaction";




export class ConsignacionCuentaAhorrosServicios{
  constructor(private readonly UnidadTrabajo: UnidadTrabajo) {}

  async execute(request: ConsignacionCuentaAhorrosRequets): Promise<ConsignacionCuentaAhorrosRespuesta>{
    try{
      const accountSearched: BankAccount = await this.UnidadTrabajo.savingAccountRepositorio.findEntity(request.number);
      if (accountSearched == undefined){
        return new ConsignacionCuentaAhorrosRespuesta('La cuenta de ahorro no existe');
      }

      const balance: number = accountSearched.balance;
      const transaccion: Transaction = new Transaction();
      transaccion.value = request.value;
      transaccion.city = request.city;

      accountSearched.consing(transaccion);

      if(accountSearched.balance == balance){
        return new ConsignacionCuentaAhorrosRespuesta('Consignacion no realizada');
      }else {
        await this.UnidadTrabajo.star();
        await this.UnidadTrabajo.savingAccountRepositorio.save(accountSearched);
        return new ConsignacionCuentaAhorrosRespuesta('Consignacion creada');
      }


    }catch(e){

      return new ConsignacionCuentaAhorrosRespuesta('Al momento de consignar se presento un error');
    }
  }

}

export class ConsignacionCuentaAhorrosRequets{
  constructor (
    public readonly number: string,
    public readonly value: number,
    public readonly  city: string
  ){}
}

export class ConsignacionCuentaAhorrosRespuesta{
  constructor(public readonly message: string) {
  }
}


