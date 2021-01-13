import { Injectable } from "@nestjs/common";
import { EntityRepository } from "typeorm";
import { currentAccountORM } from "../Database/orm/CurrentAccountORM";
import { repositorioGenerico } from "../base/RepositorioGenerico";
import { BankAccount } from "../../Dominio/entity/BankAccount";
import { CurrentAccount } from "../../Dominio/entity/CurrentAccount";

@Injectable()
@EntityRepository(currentAccountORM)
export class currentAccountRepositorio extends repositorioGenerico<currentAccountORM>{
  [x: string]: any;

  public mapOrmToEntity(orm: currentAccountORM): BankAccount{
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
