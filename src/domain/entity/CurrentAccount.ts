import { BankAccount } from "./bank.account";
import { Transaction } from "./transaction";

export class CurrentAccount extends BankAccount{

  cupo_sobregiro: number = -20000;

  public consing(transaction: Transaction) {
    if(this.validateFirstMovements() && transaction.value >= 100000){
      super.consing(transaction);
    }else{
      if (!this.validateFirstMovements() && transaction.value > 0){
        super.consing(transaction);
      }
    }
  }

  public remove(transaction: Transaction) {

    if(this.ValidateFourForThousand(transaction) >= this.cupo_sobregiro){
      this.balance -= transaction.value;
    }
  }

  ValidateFourForThousand (transaction){
    let cuatropormil:number = transaction.value * 4/1000;
    let newBalance: number = transaction.value - cuatropormil;
    return cuatropormil;
  }

  validateFirstMovements(){
    return this.movements.length == 0;
  }

  public transfer(transaction: Transaction) {}
}

