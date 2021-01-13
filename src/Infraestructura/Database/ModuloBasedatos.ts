import { Module } from "@nestjs/common";
import { databaseProviders } from "./provedor/DatabaseProviders";
import { currentAccountProvider, savingAccountProvider } from "./migracion/ProvedorEntidades";

@Module({
  providers:[
    ...databaseProviders,
    ...currentAccountProvider,
    ...savingAccountProvider,
  ],
  exports: [
    ...databaseProviders,
    ...currentAccountProvider,
    ...savingAccountProvider,
  ],

})

export class moduloBasedatos{}