
import { BankAccount } from "../../domain/entity/bank.account";
import { Transaction } from "../../domain/entity/transaction";
import {IunidadTrabajo} from "../../Infraestructura/base/IunidadTrabajo";
import { CurrentAccount } from "../../domain/entity/CurrentAccount";

export class RegistrarCuentaCorrienteServicios{
  constructor(private readonly IunidadTrabajo: IunidadTrabajo) {}

  async execute(request: RegistrarCuentaCorrienteRequest): Promise<RegistrarCuentaCorrienteRespuesta>{
    try{
      const accountSearched: BankAccount = await this.IunidadTrabajo.currentAccountRepositorio.findEntity(request.number);
      if (accountSearched == undefined){
        const newAccount: BankAccount = new CurrentAccount();
        newAccount.number = request.number;
        newAccount.ownerId = request.ownerId;
        newAccount.city= request.city;
        const firstTransaction:  Transaction =  new Transaction();
        firstTransaction.value = request.firstConsingValue;
        newAccount.consing(firstTransaction);

        if (newAccount.balance!=0){
          this.IunidadTrabajo.star();
          const savedAccount = await this.IunidadTrabajo.currentAccountRepositorio.save(newAccount);
          if(savedAccount != undefined){
            return new RegistrarCuentaCorrienteRespuesta('Cuenta corriente numero' + savedAccount.number + 'ha sido creada satisfactoriamente');
          }

        }
      }

      return  new RegistrarCuentaCorrienteRespuesta('esta cuenta bancaria ya se encuentra registrada');

    }catch(e){
      return new RegistrarCuentaCorrienteRespuesta('se ha presentado un error al momento de registrar esta cuenta bancaria');
    }
  }

}

export class RegistrarCuentaCorrienteRequest{
  constructor (
    public readonly number: string,
    public readonly ownerId: string,
    public readonly  city: string,
    public readonly  firstConsingValue: number
  ){}

}

export class RegistrarCuentaCorrienteRespuesta{
  constructor(public readonly message: string) {
  }
}