import {UnidadTrabajo} from "../../Infraestructura/base/UnidadTrabajo";
import { BankAccount } from "../../Dominio/entity/BankAccount";
import { Transaction } from "../../Dominio/entity/Transaction";




export class RetirarCuentaCorrienteServicio{
  constructor(private readonly UnidadTrabajo: UnidadTrabajo) {}

  async execute(request: RetirarCuentaCorrienteRequest): Promise<RetirarCuentaCorrienteRespuesta>{
    try{
      const accountSearched: BankAccount = await this.UnidadTrabajo.currentAccountRepositorio.findEntity(request.number);
      if (accountSearched == undefined){
        return new RetirarCuentaCorrienteRespuesta('La cuenta de corriente no existe');
      }

      const balance: number = accountSearched.balance;
      const transaccion: Transaction = new Transaction();
      transaccion.value = request.value;

      accountSearched.remove(transaccion);

      if(accountSearched.balance == balance){
        return new RetirarCuentaCorrienteRespuesta('Retiro no realizado. Error al momento de retirar');
      }else {
        await this.UnidadTrabajo.star();
        await this.UnidadTrabajo.currentAccountRepositorio.save(accountSearched);
        return new RetirarCuentaCorrienteRespuesta('Retiro creado correctamente');
      }


    }catch(e){

      return new RetirarCuentaCorrienteRespuesta('Al momento de consignar se presento un error');
    }
  }

}

export class RetirarCuentaCorrienteRequest{
  constructor (
    public readonly number: string,
    public readonly value: number,
  ){}
}

export class RetirarCuentaCorrienteRespuesta{
  constructor(public readonly message: string) {
  }
}