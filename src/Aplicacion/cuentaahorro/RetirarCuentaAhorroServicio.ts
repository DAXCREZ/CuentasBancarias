import {UnidadTrabajo} from "../../Infraestructura/base/UnidadTrabajo";
import { BankAccount } from "../../Dominio/entity/BankAccount";
import { Transaction } from "../../Dominio/entity/Transaction";




export class RetirarCuentaAhorrosServicio{
  constructor(private readonly UnidadTrabajo: UnidadTrabajo) {}

  async execute(request: RetirarCuentaAhorrosRequest): Promise<RetirarCuentaAhorrosRespuesta>{
    try{
      const accountSearched: BankAccount = await this.UnidadTrabajo.savingAccountRepositorio.findEntity(request.number);
      if (accountSearched == undefined){
        return new RetirarCuentaAhorrosRespuesta('La cuenta de ahorro no existe');
      }

      const balance: number = accountSearched.balance;
      const transaccion: Transaction = new Transaction();
      transaccion.value = request.value;

      accountSearched.remove(transaccion);

      if(accountSearched.balance == balance){
        return new RetirarCuentaAhorrosRespuesta('Retiro no realizado. Error al momento de retirar');
      }else {
        await this.UnidadTrabajo.star();
        await this.UnidadTrabajo.savingAccountRepositorio.save(accountSearched);
        return new RetirarCuentaAhorrosRespuesta('Retiro creado correctamente');
      }


    }catch(e){

      return new RetirarCuentaAhorrosRespuesta('Al momento de consignar se presento un error');
    }
  }

}

export class RetirarCuentaAhorrosRequest{
  constructor (
    public readonly number: string,
    public readonly value: number,
  ){}
}

export class RetirarCuentaAhorrosRespuesta{
  constructor(public readonly message: string) {
  }
}