import { Injectable } from "@nestjs/common";
import { EntityRepository } from "typeorm";
import { currentaccountORM } from "../Database/orm/currentaccountORM";
import { repositorioGenerico } from "../base/repositorioGenerico";
import { BankAccount } from "../../domain/entity/bank.account";
import { CurrentAccount } from "../../domain/entity/CurrentAccount";

@Injectable()
@EntityRepository(currentaccountORM)
export class currentAccountRepositorio extends repositorioGenerico<currentaccountORM>{
  [x: string]: any;

  public mapOrmToEntity(orm: currentaccountORM): BankAccount{
    const account: BankAccount = new CurrentAccount();
    account._id = orm._id;
    account.number = orm.number;
    account.ownerId = orm.ownerID;
    account.city = orm.city;
    account.balance = orm.balance;
    account.movements =orm.movement;
    return account;
  }
}
