import { Injectable } from "@nestjs/common";
import { EntityRepository } from "typeorm";

import { repositorioGenerico } from "../base/RepositorioGenerico";
import { savingAccountORM } from "../Database/orm/SavingAccountORM";
import { currentAccountORM } from "../Database/orm/CurrentAccountORM";
import { BankAccount } from "../../Dominio/entity/BankAccount";
import { CurrentAccount } from "../../Dominio/entity/CurrentAccount";
import { SavingAccount } from "../../Dominio/entity/SavingAccount";

@Injectable()
@EntityRepository(savingAccountORM)
export class savingAccountRepositorio extends repositorioGenerico<savingAccountORM>{
  [x: string]: any;

  public mapOrmToEntity(orm: savingAccountORM): BankAccount{
      const account: BankAccount = new SavingAccount();
      account._id = orm._id;
      account.number = orm.number;
      account.ownerId = orm.ownerID;
      account.city = orm.city;
      account.balance = orm.balance;
      account.movements =orm.movement;
      return account;
    }
  }
