import { BankAccount } from "../../domain/entity/bank.account";
import { Transaction } from "../../domain/entity/transaction";
import {IunidadTrabajo} from "../../Infraestructura/base/IunidadTrabajo";
import { SavingAccount } from "../../domain/entity/saving.account";

export class RegistrarCuentaAhorroServicio{
  constructor(private readonly IunidadTrabajo: IunidadTrabajo) {}

  async execute(request: RegistrarCuentaAhorroRequest): Promise<RegistrarCuentaAhorroRespuesta>{
    try{
      const accountSearched: BankAccount = await this.IunidadTrabajo.savingAccountRepositorio.findEntity(request.number);
      if (accountSearched == undefined){
        const newAccount: BankAccount = new SavingAccount();
        newAccount.number = request.number;
        newAccount.ownerId = request.ownerId;
        newAccount.city= request.city;
        const firstTransaction:  Transaction =  new Transaction();
        firstTransaction.value = request.firstConsingValue;
        newAccount.consing(firstTransaction);

        if (newAccount.balance > 0){
          this.IunidadTrabajo.star();
          const savedAccount = await this.IunidadTrabajo.currentAccountRepositorio.save(newAccount);
          if(savedAccount != undefined){
            return new RegistrarCuentaAhorroRespuesta('Cuenta Ahorro numero' + savedAccount.number + 'ha sido creada satisfactoriamente');
          }

        }
      }

      return  new RegistrarCuentaAhorroRespuesta('esta cuenta bancaria ya se encuentra registrada');

    }catch(e){
      return new RegistrarCuentaAhorroRespuesta('se ha presentado un error al momento de registrar esta cuenta bancaria. La consignacion inicial debe ser de $100000');
    }
  }

}

export class RegistrarCuentaAhorroRequest{
  constructor (
    public readonly number: string,
    public readonly ownerId: string,
    public readonly  city: string,
    public readonly  firstConsingValue: number
  ){}

}

export class RegistrarCuentaAhorroRespuesta{
  constructor(public readonly message: string) {
  }
}