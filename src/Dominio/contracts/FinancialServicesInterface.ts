import { Transaction } from "../entity/Transaction";

export interface IFinancialService{

  consing(transaction: Transaction);
  transfer(transaction: Transaction, account:IFinancialService);
  remove(transaction: Transaction);

}