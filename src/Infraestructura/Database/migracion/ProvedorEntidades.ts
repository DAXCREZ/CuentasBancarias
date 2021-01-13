import { Connection } from "typeorm";
import { currentAccountORM } from "../orm/CurrentAccountORM";
import { savingAccountORM } from "../orm/SavingAccountORM";


export const currentAccountProvider = [
  {
    provide: 'CURRENT_ACCOUNT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(currentAccountORM),
    inject: ['DATABASE_CONNECTION'],
  }
];

export const savingAccountProvider = [
  {
    provide: 'SAVING_ACCOUNT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(savingAccountORM),
    inject: ['DATABASE_CONNECTION'],
  }
];