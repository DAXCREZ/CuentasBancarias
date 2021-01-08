import { Injectable } from "@nestjs/common";
import { EntityRepository } from "typeorm";

import { repositorioGenerico } from "../base/repositorioGenerico";
import { savingaccountIORM } from "../Database/orm/savingaccountIORM";
import { currentaccountORM } from "../Database/orm/currentaccountORM";
import { BankAccount } from "../../domain/entity/bank.account";
import { CurrentAccount } from "../../domain/entity/CurrentAccount";
import { SavingAccount } from "../../domain/entity/saving.account";

@Injectable()
@EntityRepository(savingaccountIORM)
export class savingAccountRepositorio extends repositorioGenerico<savingaccountIORM>{
  [x: string]: any;

  public mapOrmToEntity(orm: savingaccountIORM): BankAccount{
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
