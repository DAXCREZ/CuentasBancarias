import { BankAccount } from "./BankAccount";
import { Transaction } from "./Transaction";
import { FinancialMovement } from "./FinancialMovement";

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

  public remove(transaction){
    let newBalance: number = this.balance - this.ValidateFourForThousand(transaction);
    if(newBalance >= this.cupo_sobregiro){
      this.balance -= transaction.value;
      let newMovement = new FinancialMovement();
      newMovement.type = 'Retiro';
      newMovement.date = new Date();
      newMovement.value = transaction.value;
      this.movements.push(newMovement);
    }
  }

  ValidateFourForThousand (transaction){
    let cuatropormil:number = transaction.value * 4/1000;
    return cuatropormil;
  }

  validateFirstMovements(){
    return this.movements.length == 0;
  }

  public transfer(transaction: Transaction) {}
}

