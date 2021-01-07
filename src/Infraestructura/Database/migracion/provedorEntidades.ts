import { Connection } from "typeorm";
import { currentaccountORM } from "../orm/currentaccountORM";
import { savingaccountIORM } from "../orm/savingaccountIORM";


export const currentAccountProvider = [
  {
    provide: 'CURRENT_ACCOUNT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(currentaccountORM),
    inject: ['DATABASE_CONNECTION'],
  }
];

export const savingAccountProvider = [
  {
    provide: 'SAVING_ACCOUNT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(savingaccountIORM),
    inject: ['DATABASE_CONNECTION'],
  }
];